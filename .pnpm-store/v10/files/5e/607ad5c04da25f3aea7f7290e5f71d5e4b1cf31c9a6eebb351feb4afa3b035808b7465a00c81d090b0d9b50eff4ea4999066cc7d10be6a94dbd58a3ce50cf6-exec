#!/usr/bin/env python3

import sys
import os
import json

from fontTools.ttLib import TTFont, sfnt
from fontTools.misc.timeTools import timestampNow
sfnt.USE_ZOPFLI = True

if len(sys.argv) < 2:
    print("Usage: %s <font file>" % sys.argv[0])
    sys.exit(1)

font_file = sys.argv[1]
font_name = os.path.splitext(os.path.basename(font_file))[0]


font = TTFont(font_file, recalcBBoxes=False, recalcTimestamp=False)

# fix timestamp to the epoch
font['head'].created = 0
font['head'].modified = 0

# remove fontforge timestamps
if 'FFTM' in font:
    del font['FFTM']

# remove redundant GDEF table
if 'GDEF' in font:
    del font['GDEF']

# remove Macintosh table
# https://developer.apple.com/fonts/TrueType-Reference-Manual/RM06/Chap6cmap.html
font['name'].names = [record for record in font['name'].names if record.platformID != 1]
font['cmap'].tables = [table for table in font['cmap'].tables if table.platformID != 1]

# fix OS/2 and hhea metrics
glyf = font['glyf']
ascent = int(max(glyf[c].yMax for c in font.getGlyphOrder() if hasattr(glyf[c], "yMax")))
descent = -int(min(glyf[c].yMin for c in font.getGlyphOrder() if hasattr(glyf[c], "yMin")))

font['OS/2'].usWinAscent = ascent
font['OS/2'].usWinDescent = descent

font['hhea'].ascent = ascent
font['hhea'].descent = -descent

# save TTF
font.save(font_file, reorderTables=None)

# save WOFF
font.flavor = 'woff'
font.save(os.path.join('woff', font_name + '.woff'), reorderTables=None)

# save WOFF2
font.flavor = 'woff2'
font.save(os.path.join('woff2', font_name + '.woff2'), reorderTables=None)
