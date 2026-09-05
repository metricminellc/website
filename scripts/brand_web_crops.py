#!/usr/bin/env python3
"""Generate the Tier 3 web crops under brand/web/ from the Tier 1 masters.

Brand Standards Rev 3, Section 2.1 (Tier 3): the site serves the logo art
as SVG, cropped to the artwork with a small even margin, the way the Tier 2
raster crops already serve the header. The crop changes only the root
<svg> element's width, height, and viewBox. Every path, transform, and
color inside the master is copied byte for byte, so the crop is a window
onto the master, never a rebuild (spec 2.4).

The artwork bounds below were measured once with Chromium's getBBox over
every shape outside the transparent background rectangle (the Architect's
sandbox, September 5, 2026) and are recorded here so the crops are
reproducible without a browser. Re-measure if a master changes.

Run from the repository root:

    python3 scripts/brand_web_crops.py

It rewrites brand/web/*.svg and prints one line per file.
"""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "brand" / "vector"
OUT = ROOT / "brand" / "web"

# name: (x0, y0, x1, y1) artwork bounds in the master's 1280 x 1024 space,
# and the crop rule: "square" (centered square, margin 5 percent of the
# larger side) or "tight" (even margin of 8 units on every side).
MASTERS = {
    "symbol-color": ((479.14, 348.24, 802.00, 676.67), "square"),
    "symbol-dark": ((478.57, 354.18, 801.43, 682.61), "square"),
    "lockup-horizontal-tagline-ink": ((50.17, 399.23, 1217.15, 625.55), "tight"),
    "lockup-horizontal-tagline-white": ((50.17, 399.23, 1217.15, 625.55), "tight"),
}

ROOT_TAG = re.compile(
    r'<svg([^>]*?)\swidth="[^"]*"\sheight="[^"]*"\sviewBox="[^"]*"', re.S
)


def crop_box(bounds: tuple[float, float, float, float], rule: str):
    x0, y0, x1, y1 = bounds
    if rule == "square":
        side = max(x1 - x0, y1 - y0)
        margin = round(side * 0.05, 1)
        size = round(side + 2 * margin, 1)
        cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
        return round(cx - size / 2, 1), round(cy - size / 2, 1), size, size
    margin = 8.0
    return (
        round(x0 - margin, 1),
        round(y0 - margin, 1),
        round(x1 - x0 + 2 * margin, 1),
        round(y1 - y0 + 2 * margin, 1),
    )


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for name, (bounds, rule) in MASTERS.items():
        text = (SRC / f"{name}.svg").read_text(encoding="utf-8")
        x, y, w, h = crop_box(bounds, rule)
        replacement = rf'<svg\1 width="{w:g}" height="{h:g}" viewBox="{x:g} {y:g} {w:g} {h:g}"'
        cropped, count = ROOT_TAG.subn(replacement, text, count=1)
        if count != 1:
            raise SystemExit(f"{name}: root <svg> element not found")
        (OUT / f"{name}.svg").write_text(cropped, encoding="utf-8")
        print(f"{name}.svg viewBox={x:g} {y:g} {w:g} {h:g}")


if __name__ == "__main__":
    main()
