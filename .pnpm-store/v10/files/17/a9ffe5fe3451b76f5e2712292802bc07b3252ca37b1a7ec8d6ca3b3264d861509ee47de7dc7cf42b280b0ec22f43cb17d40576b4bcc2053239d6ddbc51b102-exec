#!/usr/bin/env python3

import collections
import json
import parse_tfm
import subprocess
import sys


def find_font_path(font_name):
    try:
        font_path = subprocess.check_output(['kpsewhich', font_name])
    except OSError:
        raise RuntimeError("Couldn't find kpsewhich program, make sure you" +
                           " have TeX installed")
    except subprocess.CalledProcessError:
        raise RuntimeError("Couldn't find font metrics: '%s'" % font_name)
    return font_path.strip()


def main():
    mapping = json.load(sys.stdin)

    fonts = [
        'cmbsy10.tfm',
        'cmbx10.tfm',
        'cmbxti10.tfm',
        'cmex10.tfm',
        'cmmi10.tfm',
        'cmmib10.tfm',
        'cmr10.tfm',
        'cmsy10.tfm',
        'cmti10.tfm',
        'msam10.tfm',
        'msbm10.tfm',
        'eufm10.tfm',
        'cmtt10.tfm',
        'rsfs10.tfm',
        'cmss10.tfm',
        'cmssbx10.tfm',
        'cmssi10.tfm',
    ]

    # Extracted by running `\font\a=<font>` and then `\showthe\skewchar\a` in
    # TeX, where `<font>` is the name of the font listed here. The skewchar
    # will be printed out in the output. If it outputs `-1`, that means there
    # is no skewchar, so we use `None` here.
    font_skewchar = {
        'cmbsy10': None,
        'cmbx10': None,
        'cmbxti10': None,
        'cmex10': None,
        'cmmi10': 127,
        'cmmib10': None,
        'cmr10': None,
        'cmsy10': 48,
        'cmti10': None,
        'msam10': None,
        'msbm10': None,
        'eufm10': None,
        'cmtt10': None,
        'rsfs10': None,
        'cmss10': None,
        'cmssbx10': None,
        'cmssi10': None,
    }

    font_name_to_tfm = {}

    for font_name in fonts:
        font_basename = font_name.split('.')[0]
        font_path = find_font_path(font_name)
        font_name_to_tfm[font_basename] = parse_tfm.read_tfm_file(font_path)

    families = collections.defaultdict(dict)

    for family, chars in mapping.items():
        for char, char_data in chars.items():
            char_num = int(char)

            font = char_data['font']
            tex_char_num = int(char_data['char'])
            yshift = float(char_data['yshift'])

            if family == "Script-Regular":
                tfm_char = font_name_to_tfm[font].get_char_metrics(tex_char_num,
                                                                   fix_rsfs=True)
            else:
                tfm_char = font_name_to_tfm[font].get_char_metrics(tex_char_num)

            height = round(tfm_char.height + yshift / 1000.0, 5)
            depth = round(tfm_char.depth - yshift / 1000.0, 5)
            italic = round(tfm_char.italic_correction, 5)
            width = round(tfm_char.width, 5)

            skewkern = 0.0
            if (font_skewchar[font] and
                    font_skewchar[font] in tfm_char.kern_table):
                skewkern = round(
                    tfm_char.kern_table[font_skewchar[font]], 5)

            families[family][char_num] = {
                'height': height,
                'depth': depth,
                'italic': italic,
                'skew': skewkern,
                'width': width
            }

    sys.stdout.write(
        json.dumps(families, separators=(',', ':'), sort_keys=True))

if __name__ == '__main__':
    main()
