#! /usr/bin/perl

# Adapted from the MathJax-dev repository file /fonts/OTF/TeX/makeFF under the
# Apache 2 license

# We use this file to recover the mapping from TeX fonts to KaTeX fonts, to
# accurately extract the metrics from the corresponding .tfm (TeX font metric)
# files

use JSON;

$map{cmr10} = {
  "Main-Regular" => [
    [0,1] => 0x393,         # \Gamma, \Delta
    2 => 0x398,             # \Theta
    3 => 0x39B,             # \Lambda
    4 => 0x39E,             # \Xi
    5 => 0x3A0,             # \Pi
    6 => 0x3A3,             # \Sigma
    [7,8] => 0x3A5,         # \Upsilon, \Phi
    [9,0xA] => 0x3A8,       # \Psi, \Omega

    0x10 => 0x131,          # \i
    0x11 => 0x237,          # \j
    0x12 => 0x2CB,          # \grave
    0x13 => 0x2CA,          # \acute
    0x14 => 0x2C7,          # \check
    0x15 => 0x2D8,          # \breve
    0x16 => 0x2C9,          # \bar
    0x17 => [0xB0,-125,0],  # \degree
    0x17 => 0x02DA,         # \r, ring above
    0x18 => 0xB8,           # \c, cedilla

    [0x21,0x2F] => 0x21,    # !, ", #, $, %, &, ', (, ), *, +, comma, -, ., /
    0x22 => 0x201D,         # "
    0x27 => 0x2019,         # '
    [0x30,0x39] => 0x30,    # 0-9
    [0x3A,0x3B] => 0x3A,    # :, ;
    0x3D => 0x3D,           # =
    [0x3F,0x40] => 0x3F,    # ?, @
    [0x41,0x5A] => 0x41,    # A-Z
    0x5B => 0x5B,           # [
    0x5C => 0x201C,         # ``
    [0x5D,0x5E] => 0x5D,    # ], ^
    0x5E => 0x2C6,          # \hat
    0x5F => 0x2D9,          # \dot
    0x60 => 0x2018,         # `
    [0x61,0x7A] => 0x61,    # a-z
    [0x7B,0x7C] => 0x2013,  # \endash, \emdash
    0x7B => [0x5F,0,-310],  # underline
    0x7D => 0x2DD,          # double acute
    0x7E => [0x7E,0,-350],  # ~
    0x7E => 0x2DC,          # \tilde
    0x7F => 0xA8,           # \ddot
    0x19 => 0xDF,           # sharp S
    0x1A => 0xE6,           # ae ligature
    0x1B => 0x153,          # oe ligature
    0x1C => 0xF8,           # o with slash
    0x1D => 0xC6,           # AE ligature
    0x1E => 0x152,          # OE ligature
    0x1F => 0xD8,           # O with slash
  ],
};

$map{cmmi10} = {
  "Math-Italic" => [
    [0,1] => 0x393,         # \Gamma, \Delta
    2 => 0x398,             # \Theta
    3 => 0x39B,             # \Lambda
    4 => 0x39E,             # \Xi
    5 => 0x3A0,             # \Pi
    6 => 0x3A3,             # \Sigma
    [7,8] => 0x3A5,         # \Upsilon, \Phi
    [9,0xA] => 0x3A8,       # \Psi, \Omega

    [0xB,0xE] => 0x3B1,     # \alpha, \beta, \gamma, \delta
    0xF => 0x3F5,           # \elpsilon
    [0x10,0x18] => 0x3B6,   # \zeta, \eta, \theta, \iota, \kappa, \lambda, \mu, \nu, \xi
    [0x19,0x1A] => 0x3C0,   # \pi, \rho
    [0x1B,0x1D] => 0x3C3,   # \sigma, \tau, \upsilon
    0x1E => 0x3D5,          # \phi
    [0x1F,0x21] => 0x3C7,   # \chi, \psi, \omega
    0x22 => 0x3B5,          # \varepsilon
    0x23 => 0x3D1,          # \vartheta
    0x24 => 0x3D6,          # \varpi
    0x25 => 0x3F1,          # \varrho
    0x26 => 0x3C2,          # \varsigma
    0x27 => 0x3C6,          # \varphi

    [0x30,0x39] => 0x30,    # Oldstyle 0-9
    [0x41,0x5A] => 0x41,    # A-Z
    [0x61,0x7A] => 0x61,    # a - z

    0x6F => 0x3BF,          # omicron
    0x7B => 0xE131,         # \imath (PUA)
    0x7C => 0xE237,         # \jmath (PUA)
  ],

  "Main-Regular" => [
    0x28 => 0x21BC,         # \leftharpoonup
    0x29 => 0x21BD,         # \leftharpoondown
    0x2A => 0x21C0,         # \rightharpoonup
    0x2B => 0x21C1,         # \rightharpoondown

    0x2E => 0x25B9,         # \triangleright
    0x2F => 0x25C3,         # \triangleleft

    0x3C => 0x3C,           # <
    0x3D => 0x2215,         # /
    0x3E => 0x3E,           # >
    0x3F => 0x22C6,         # \star
    0x40 => 0x2202,         # \partial

    [0x5B,0x5D] => 0x266D,  # \flat, \natural, \sharp
    0x5E => 0x2323,         # \smile
    0x5F => 0x2322,         # \frown
    0x60 => 0x2113,         # \ell

    0x7D => 0x2118,         # \wp
    0x7E => [0x20D7,-653,0],# \vec
  ],
};

$map{cmsy10} = {
  "Main-Regular" => [
    0 => 0x2212,            # -
    1 => 0x22C5,            # \cdot
    2 => 0xD7,              # \times
    3 => 0x2217,            # \ast
    4 => 0xF7,              # \div
    5 => 0x22C4,            # \diamond
    6 => 0xB1,              # \pm
    7 => 0x2213,            # \mp
    [8,0xC] => 0x2295,      # \oplus, \ominus, \otimes, \oslash, \odot
    0xD => 0x25EF,          # \bigcirc
    [0xE,0xF] => 0x2218,    # \circ, \bullet

    0x10 => 0x224D,         # \asymp
    0x11 => 0x2261,         # \equiv
    [0x12,0x13] => 0x2286,  # \subseteq, \supseteq
    [0x14,0x15] => 0x2264,  # \leq, \geq
    [0x16,0x17] => 0x2AAF,  # \preceq, \succeq
    0x18 => 0x223C,         # \sim
    0x19 => 0x2248,         # \approx
    [0x1A,0x1B] => 0x2282,  # \subset, \supset
    [0x1C,0x1D] => 0x226A,  # \ll, \gg
    [0x1E,0x1F] => 0x227A,  # \prec, \succ

    0x20 => 0x2190,         # \leftarrow
    0x21 => 0x2192,         # \rightarrow
    0x22 => 0x2191,         # \uparrow
    0x23 => 0x2193,         # \downarrow
    0x24 => 0x2194,         # \leftrightarrow
    0x25 => 0x2197,         # \nearrow
    0x26 => 0x2198,         # \searrow
    0x27 => 0x2243,         # \simeq

    0x28 => 0x21D0,         # \Leftarrow
    0x29 => 0x21D2,         # \Rightarrow
    0x2A => 0x21D1,         # \Uparrow
    0x2B => 0x21D3,         # \Downarrow
    0x2C => 0x21D4,         # \Leftrightarrow
    0x2D => 0x2196,         # \nwarrow
    0x2E => 0x2199,         # \swarrow
    0x2F => 0x221D,         # \propto

    0x30 => 0x2032,         # \prime
    0x31 => 0x221E,         # \infty
    0x32 => 0x2208,         # \in
    0x33 => 0x220B,         # \ni
    0x34 => 0x25B3,         # \bigtriangleup and \triangle
    0x35 => 0x25BD,         # \bigtriangledown
    0x36 => 0xE020,         # \not

    0x38 => 0x2200,         # \forall
    0x39 => 0x2203,         # \exists
    0x3A => 0xAC,           # \neg
    0x3B => 0x2205,         # \emptyset
    0x3C => 0x211C,         # \Re
    0x3D => 0x2111,         # \Im
    0x3E => 0x22A4,         # \top
    0x3F => 0x22A5,         # \bot

    0x40 => 0x2135,         # \aleph

    0x5B => 0x222A,         # \cup
    0x5C => 0x2229,         # \cap
    0x5D => 0x228E,         # \uplus
    [0x5E,0x5F] => 0x2227,  # \wedge, \vee

    [0x60,0x61] => 0x22A2,  # \vdash, \dashv
    [0x62,0x63] => 0x230A,  # \lfloor, \rfloor
    [0x64,0x65] => 0x2308,  # \lceil, \rceil
    0x66 => 0x7B,           # {
    0x67 => 0x7D,           # }
    [0x68,0x69] => 0x27E8,  # \langle, \rangle
    0x6A => 0x7C,           # |
    0x6A => 0x2223,         # \vert
    0x6B => 0x2225,         # \Vert
    0x6C => 0x2195,         # \updownarrow
    0x6D => 0x21D5,         # \Updownarrow
    0x6E => 0x5C,           # \backslash
    0x6E => 0x2216,         # \setminus
    0x6F => 0x2240,         # \wr

    0x70 => [0x221A,0,760], # \surd    ### adjust position so font doesn't have a large depth
    0x71 => 0x2A3F,         # \amalg
    0x72 => 0x2207,         # \nabla
    0x73 => 0x222B,         # \int
    0x74 => 0x2294,         # \sqcup
    0x75 => 0x2293,         # \sqcap
    [0x76,0x77] => 0x2291,  # \sqsubseteq, \sqsupseteq
    0x78 => 0xA7,           # \S
    [0x79,0x7A] => 0x2020,  # \dagger, \ddagger
    0x7B => 0xB6,           # \P
    0x7C => 0x2663,         # \clubsuit
    0x7D => 0x2662,         # \diamondsuit
    0x7E => 0x2661,         # \heartsuit
    0x7F => 0x2660,         # \spadesuit
  ],

  "Caligraphic-Regular" => [
    [0x41,0x5A] => 0x41,    # A-Z
  ],
};

$map{cmex10} = {
  "Size1" => [
    0 => [0x28,0,810],      # (
    1 => [0x29,0,810],      # )
    2 => [0x5B,0,810],      # [
    3 => [0x5D,0,810],      # ]
    4 => [0x230A,0,810],    # \lfloor
    5 => [0x230B,0,810],    # \rfloor
    6 => [0x2308,0,810],    # \lceil
    7 => [0x2309,0,810],    # \rceil
    8 => [0x7B,0,810],      # {
    9 => [0x7D,0,810],      # }
    0xA => [0x27E8,0,810],  # \langle
    0xB => [0x27E9,0,810],  # \rangle
    0xC => [0x2223,0,606],  # \vert
    0xD => [0x2225,0,606],  # \Vert
    0xE => [0x2F,0,810],    # /
    0xF => [0x5C,0,810],    # \

    0x46 => [0x2A06,0,750], # \bigsqcup
    0x48 => [0x222E,0,805], # \oint
    0x4A => [0x2A00,0,750], # \bigodot
    0x4C => [0x2A01,0,750], # \bigoplus
    0x4E => [0x2A02,0,750], # \bigotimes

    0x50 => [0x2211,0,750], # \sum
    0x51 => [0x220F,0,750], # \prod
    0x52 => [0x222B,0,805], # \int
    0x53 => [0x22C3,0,750], # \bigcup
    0x54 => [0x22C2,0,750], # \bigcap
    0x55 => [0x2A04,0,750], # \biguplus
    0x56 => [0x22C0,0,750], # \bigwedge
    0x57 => [0x22C1,0,750], # \bigvee

    0x60 => [0x2210,0,750], # \coprod
    0x62 => 0x2C6,          # \widehat
    0x62 => [0x302,-556,0], # \widehat (combining)
    0x65 => 0x2DC,          # \widetilde
    0x65 => [0x303,-556,0], # \widetilde (combining)

    0x70 => [0x221A,0,810], # surd
    0x3F => [0x23D0,0,601], # arrow extension
    0x77 => [0x2016,0,601], # Arrow extension (non-standard)
    0x78 => [0x2191,0,600], # uparrow top
    0x79 => [0x2193,0,600], # downarrow bottom
    0x7E => [0x21D1,0,600], # Uparrow top
    0x7F => [0x21D3,0,600], # Downarrow bottom
  ],

  "Size2" => [
    0x10 => [0x28,0,1110],  # (
    0x11 => [0x29,0,1110],  # )
    0x2E => [0x2F,0,1110],  # /
    0x2F => [0x5C,0,1110],  # \
    0x44 => [0x27E8,0,1110],# \langle
    0x45 => [0x27E9,0,1110],# \rangle

    0x47 => [0x2A06,0,950], # \bigsqcup
    0x49 => [0x222E,0,1360],# \oint
    0x4B => [0x2A00,0,950], # \bigodot
    0x4D => [0x2A01,0,950], # \bigoplus
    0x4F => [0x2A02,0,950], # \bigotimes

    0x58 => [0x2211,0,950], # \sum
    0x59 => [0x220F,0,950], # \prod
    0x5A => [0x222B,0,1360],# \int
    0x5B => [0x22C3,0,950], # \bigcup
    0x5C => [0x22C2,0,950], # \bigcap
    0x5D => [0x2A04,0,950], # \biguplus
    0x5E => [0x22C0,0,950], # \bigwedge
    0x5F => [0x22C1,0,950], # \bigvee
    0x61 => [0x2210,0,950], # \coprod

    0x63 => 0x2C6,          # \widehat
    0x63 => [0x302,-1000,0],# \widehat (combining)
    0x66 => 0x2DC,          # \widetilde
    0x66 => [0x303,-1000,0],# \widetilde (combining)

    0x68 => [0x5B,0,1110],  # [
    0x69 => [0x5D,0,1110],  # ]
    0x6A => [0x230A,0,1110],# \lfloor
    0x6B => [0x230B,0,1110],# \rfloor
    0x6C => [0x2308,0,1110],# \lceil
    0x6D => [0x2309,0,1110],# \rceil
    0x6E => [0x7B,0,1110],  # {
    0x6F => [0x7D,0,1110],  # }
    0x71 => [0x221A,0,1110],# surd
  ],

  "Size3" => [
    0x12 => [0x28,0,1410],  # (
    0x13 => [0x29,0,1410],  # )
    0x14 => [0x5B,0,1410],  # [
    0x15 => [0x5D,0,1410],  # ]
    0x16 => [0x230A,0,1410],# \lfloor
    0x17 => [0x230B,0,1410],# \rfloor
    0x18 => [0x2308,0,1410],# \lceil
    0x19 => [0x2309,0,1410],# \rceil
    0x1A => [0x7B,0,1410],  # {
    0x1B => [0x7D,0,1410],  # }
    0x1C => [0x27E8,0,1410],# \langle
    0x1D => [0x27E9,0,1410],# \rangle
    0x1E => [0x2F,0,1410],  # /
    0x1F => [0x5C,0,1410],  # \
    0x64 => 0x2C6,          # \widehat
    0x64 => [0x302,-1444,0],# \widehat (combining)
    0x67 => 0x2DC,          # \widetilde
    0x67 => [0x303,-1444,0],# \widetilde (combining)
    0x72 => [0x221A,0,1410],# surd
  ],

  "Size4" => [
    0x20 => [0x28,0,1710],  # (
    0x21 => [0x29,0,1710],  # )
    0x22 => [0x5B,0,1710],  # [
    0x23 => [0x5D,0,1710],  # ]
    0x24 => [0x230A,0,1710],# \lfloor
    0x25 => [0x230B,0,1710],# \rfloor
    0x26 => [0x2308,0,1710],# \lceil
    0x27 => [0x2309,0,1710],# \rceil
    0x28 => [0x7B,0,1710],  # {
    0x29 => [0x7D,0,1710],  # }
    0x2A => [0x27E8,0,1710],# \langle
    0x2B => [0x27E9,0,1710],# \rangle
    0x2C => [0x2F,0,1710],  # /
    0x2D => [0x5C,0,1710],  # \
    0x73 => [0x221A,0,1710],# surd

    0x30 => [0x239B,0,1115],# left paren upper hook
    0x31 => [0x239E,0,1115],# right paren upper hook
    0x32 => [0x23A1,0,1115],# left square bracket upper corner
    0x33 => [0x23A4,0,1115],# right square bracket upper corner
    0x34 => [0x23A3,0,1115],# left square bracket lower corner
    0x35 => [0x23A6,0,1115],# right square bracket lower hook
    0x36 => [0x23A2,0,601], # left square bracket extension
    0x37 => [0x23A5,0,601], # right square bracket extension
    0x38 => [0x23A7,0,900], # left curly brace upper hook
    0x39 => [0x23AB,0,900], # right curly brace upper hook
    0x3A => 0x23A9,         # left curly brace lower hook
    0x3B => 0x23AD,         # right curly brace lower hook
    0x3C => [0x23A8,0,1150],# left curly brace middle
    0x3D => [0x23AC,0,1150],# right curly brace middle
    0x3E => [0x23AA,0,300], # curly brace extension

    0x40 => [0x239D,0,1115],# left paren lower hook
    0x41 => [0x23A0,0,1115],# right paren lower hook
    0x42 => [0x239C,0,600], # left paren extension
    0x43 => [0x239F,0,600], # right paren extension

    0x74 => [0x23B7,0,915], # radical bottom
    0x75 => [0xE000,0,605], # radical extension (PUA)
    0x76 => [0xE001,0,565], # radical top (PUA)
    [0x7A,0x7D] => 0xE150,  # \braceld, \bracerd, \bracelu, \braceru (PUA)
  ],
};

$map{cmti10} = {
  "Main-Italic" => [
    [0,1] => 0x393,         # \Gamma, \Delta
    2 => 0x398,             # \Theta
    3 => 0x39B,             # \Lambda
    4 => 0x39E,             # \Xi
    5 => 0x3A0,             # \Pi
    6 => 0x3A3,             # \Sigma
    [7,8] => 0x3A5,         # \Upsilon, \Phi
    [9,0xA] => 0x3A8,       # \Psi, \Omega

    0x12 => 0x2CB,          # \grave
    0x13 => 0x2CA,          # \acute
    0x14 => 0x2C7,          # \check
    0x15 => 0x2D8,          # \breve
    0x16 => 0x2C9,          # \bar
    0x17 => [0xB0,-160,0],  # \degree
    0x17 => 0x02DA,         # \r, ring above
    0x18 => 0xB8,           # \c, cedilla

    [0x21,0x23] => 0x21,    # !, ", #,
    0x22 => 0x201D,         # "
    [0x25,0x2F] => 0x25,    # %, &, ', (, ), *, +, comma, -, ., /
    0x27 => 0x2019,         # '
    [0x30,0x39] => 0x30,    # 0-9
    [0x3A,0x3B] => 0x3A,    # :, ;
    0x3D => 0x3D,           # =
    [0x3F,0x40] => 0x3F,    # ?, @
    [0x41,0x5A] => 0x41,    # A-Z
    0x5B => 0x5B,           # [
    0x5C => 0x201C,         # ``
    [0x5D,0x5E] => 0x5D,    # ], ^
    0x5E => 0x2C6,          # \hat
    0x5F => 0x2D9,          # \dot
    0x60 => 0x2018,         # `
    [0x61,0x7A] => 0x61,    # a-z
    [0x7B,0x7C] => 0x2013,  # \endash, \emdash
    0x7B => [0x5F,0,-310],  # underline
    0x7D => 0x2DD,          # double acute
    0x7E => [0x7E,0,-350],  # ~
    0x7E => 0x2DC,          # \tilde
    0x7F => 0xA8,           # \ddot
    0x19 => 0xDF,           # sharp S
    0x1A => 0xE6,           # ae ligature
    0x1B => 0x153,          # oe ligature
    0x1C => 0xF8,           # o with slash
    0x1D => 0xC6,           # AE ligature
    0x1E => 0x152,          # OE ligature
    0x1F => 0xD8,           # O with slash
  ],

  "Main-Regular" => [
    0x24 => 0xA3,           # pound sign
  ],
};

$map{cmbx10} = {
  "Main-Bold" => [
    [0,1] => 0x393,         # \Gamma, \Delta
    2 => 0x398,             # \Theta
    3 => 0x39B,             # \Lambda
    4 => 0x39E,             # \Xi
    5 => 0x3A0,             # \Pi
    6 => 0x3A3,             # \Sigma
    [7,8] => 0x3A5,         # \Upsilon, \Phi
    [9,0xA] => 0x3A8,       # \Psi, \Omega

    0x10 => 0x131,          # \i
    0x11 => 0x237,          # \j
    0x12 => 0x2CB,          # \grave
    0x13 => 0x2CA,          # \acute
    0x14 => 0x2C7,          # \check
    0x15 => 0x2D8,          # \breve
    0x16 => 0x2C9,          # \bar
    0x17 => [0xB0,-147,0],  # \degree
    0x17 => 0x02DA,         # \r, ring above
    0x18 => 0xB8,           # \c, cedilla

    [0x21,0x2F] => 0x21,    # !, ", #, $, %, &, ', (, ), *, +, comma, -, ., /
    0x22 => 0x201D,         # "
    0x27 => 0x2019,         # '
    [0x30,0x39] => 0x30,    # 0-9
    [0x3A,0x3B] => 0x3A,    # :, ;
    0x3D => 0x3D,           # =
    [0x3F,0x40] => 0x3F,    # ?, @
    [0x41,0x5A] => 0x41,    # A-Z
    0x5B => 0x5B,           # [
    0x5C => 0x201C,         # ``
    [0x5D,0x5E] => 0x5D,    # ], ^
    0x5E => 0x2C6,          # \hat
    0x5F => 0x2D9,          # \dot
    0x60 => 0x2018,         # `
    [0x61,0x7A] => 0x61,    # a-z
    [0x7B,0x7C] => 0x2013,  # \endash, \emdash
    0x7B => [0x5F,0,-310],  # underline
    0x7D => 0x2DD,          # double acute
    0x7E => [0x7E,0,-350],  # ~
    0x7E => 0x2DC,          # \tilde
    0x7F => 0xA8,           # \ddot
    0x19 => 0xDF,           # sharp S
    0x1A => 0xE6,           # ae ligature
    0x1B => 0x153,          # oe ligature
    0x1C => 0xF8,           # o with slash
    0x1D => 0xC6,           # AE ligature
    0x1E => 0x152,          # OE ligature
    0x1F => 0xD8,           # O with slash
  ],
};

$map{cmbxti10} = {
  "Main-BoldItalic" => [
    [0,1] => 0x393,         # \Gamma, \Delta
    2 => 0x398,             # \Theta
    3 => 0x39B,             # \Lambda
    4 => 0x39E,             # \Xi
    5 => 0x3A0,             # \Pi
    6 => 0x3A3,             # \Sigma
    [7,8] => 0x3A5,         # \Upsilon, \Phi
    [9,0xA] => 0x3A8,       # \Psi, \Omega

    0x10 => 0x131,          # \i
    0x11 => 0x237,          # \j
    0x12 => 0x2CB,          # \grave
    0x13 => 0x2CA,          # \acute
    0x14 => 0x2C7,          # \check
    0x15 => 0x2D8,          # \breve
    0x16 => 0x2C9,          # \bar
    0x17 => [0xB0,-160,0],  # \degree
    0x17 => 0x02DA,         # \r, ring above
    0x18 => 0xB8,           # \c, cedilla

    [0x21,0x23] => 0x21,    # !, ", #,
    0x22 => 0x201D,         # "
    [0x25,0x2F] => 0x25,    # %, &, ', (, ), *, +, comma, -, ., /
    0x27 => 0x2019,         # '
    [0x30,0x39] => 0x30,    # 0-9
    [0x3A,0x3B] => 0x3A,    # :, ;
    0x3D => 0x3D,           # =
    [0x3F,0x40] => 0x3F,    # ?, @
    [0x41,0x5A] => 0x41,    # A-Z
    0x5B => 0x5B,           # [
    0x5C => 0x201C,         # ``
    [0x5D,0x5E] => 0x5D,    # ], ^
    0x5E => 0x2C6,          # \hat
    0x5F => 0x2D9,          # \dot
    0x60 => 0x2018,         # `
    [0x61,0x7A] => 0x61,    # a-z
    [0x7B,0x7C] => 0x2013,  # \endash, \emdash
    0x7B => [0x5F,0,-310],  # underline
    0x7D => 0x2DD,          # double acute
    0x7E => [0x7E,0,-350],  # ~
    0x7E => 0x2DC,          # \tilde
    0x7F => 0xA8,           # \ddot
    0x19 => 0xDF,           # sharp S
    0x1A => 0xE6,           # ae ligature
    0x1B => 0x153,          # oe ligature
    0x1C => 0xF8,           # o with slash
    0x1D => 0xC6,           # AE ligature
    0x1E => 0x152,          # OE ligature
    0x1F => 0xD8,           # O with slash
  ],

  "Main-Bold" => [
    0x24 => 0xA3,           # pound sign
  ],
};

$map{cmmib10} = {
  "Math-BoldItalic" => [
    [0,1] => 0x393,         # \Gamma, \Delta
    2 => 0x398,             # \Theta
    3 => 0x39B,             # \Lambda
    4 => 0x39E,             # \Xi
    5 => 0x3A0,             # \Pi
    6 => 0x3A3,             # \Sigma
    [7,8] => 0x3A5,         # \Upsilon, \Phi
    [9,0xA] => 0x3A8,       # \Psi, \Omega

    [0xB,0xE] => 0x3B1,     # \alpha, \beta, \gamma, \delta
    0xF => 0x3F5,           # \elpsilon
    [0x10,0x18] => 0x3B6,   # \zeta, \eta, \theta, \iota, \kappa, \lambda, \mu, \nu, \xi
    [0x19,0x1A] => 0x3C0,   # \pi, \rho
    [0x1B,0x1D] => 0x3C3,   # \sigma, \tau, \upsilon
    0x1E => 0x3D5,          # \phi
    [0x1F,0x21] => 0x3C7,   # \chi, \psi, \omega
    0x22 => 0x3B5,          # \varepsilon
    0x23 => 0x3D1,          # \vartheta
    0x24 => 0x3D6,          # \varpi
    0x25 => 0x3F1,          # \varrho
    0x26 => 0x3C2,          # \varsigma
    0x27 => 0x3C6,          # \varphi

    [0x41,0x5A] => 0x41,    # A-Z
    [0x61,0x7A] => 0x61,    # a - z
    [0x30,0x39] => 0x30,    # Oldstyle 0-9

    0x6F => 0x3BF,          # omicron
    0x7B => 0xE131,         # \imath (PUA)
    0x7C => 0xE237,         # \jmath (PUA)
  ],

  "Main-Bold" => [
    0x28 => 0x21BC,         # \leftharpoonup
    0x29 => 0x21BD,         # \leftharpoondown
    0x2A => 0x21C0,         # \rightharpoonup
    0x2B => 0x21C1,         # \rightharpoondown

    0x2E => 0x25B9,         # \triangleright
    0x2F => 0x25C3,         # \triangleleft

    0x3C => 0x3C,           # <
    0x3D => 0x2215,         # /
    0x3E => 0x3E,           # >
    0x3F => 0x22C6,         # \star
    0x40 => 0x2202,         # \partial

    [0x5B,0x5D] => 0x266D,  # \flat, \natural, \sharp
    0x5E => 0x2323,         # \smile
    0x5F => 0x2322,         # \frown
    0x60 => 0x2113,         # \ell
    0x68 => 0x210F,         # \hbar (bar added below)

    0x7D => 0x2118,         # \wp
    0x7E => [0x20D7,-729,0],# \vec
  ],
};

$map{cmbsy10} = {
  "Main-Bold" => [
    0 => 0x2212,            # -
    1 => 0x22C5,            # \cdot
    2 => 0xD7,              # \times
    3 => 0x2217,            # \ast
    4 => 0xF7,              # \div
    5 => 0x22C4,            # \diamond
    6 => 0xB1,              # \pm
    7 => 0x2213,            # \mp
    [8,0xC] => 0x2295,      # \oplus, \ominus, \otimes, \oslash, \odot
    0xD => 0x25EF,          # \bigcirc
    [0xE,0xF] => 0x2218,    # \circ, \bullet

    0x10 => 0x224D,         # \asymp
    0x11 => 0x2261,         # \equiv
    [0x12,0x13] => 0x2286,  # \subseteq, \supseteq
    [0x14,0x15] => 0x2264,  # \leq, \geq
    [0x16,0x17] => 0x2AAF,  # \preceq, \succeq
    0x18 => 0x223C,         # \sim
    0x19 => 0x2248,         # \approx
    [0x1A,0x1B] => 0x2282,  # \subset, \supset
    [0x1C,0x1D] => 0x226A,  # \ll, \gg
    [0x1E,0x1F] => 0x227A,  # \prec, \succ

    0x20 => 0x2190,         # \leftarrow
    0x21 => 0x2192,         # \rightarrow
    0x22 => 0x2191,         # \uparrow
    0x23 => 0x2193,         # \downarrow
    0x24 => 0x2194,         # \leftrightarrow
    0x25 => 0x2197,         # \nearrow
    0x26 => 0x2198,         # \searrow
    0x27 => 0x2243,         # \simeq

    0x28 => 0x21D0,         # \Leftarrow
    0x29 => 0x21D2,         # \Rightarrow
    0x2A => 0x21D1,         # \Uparrow
    0x2B => 0x21D3,         # \Downarrow
    0x2C => 0x21D4,         # \Leftrightarrow
    0x2D => 0x2196,         # \nwarrow
    0x2E => 0x2199,         # \swarrow
    0x2F => 0x221D,         # \propto

    0x30 => 0x2032,         # \prime
    0x31 => 0x221E,         # \infty
    0x32 => 0x2208,         # \in
    0x33 => 0x220B,         # \ni
    0x34 => 0x25B3,         # \bigtriangleup and \triangle
    0x35 => 0x25BD,         # \bigtriangledown
    0x36 => 0xE020,         # \not

    0x38 => 0x2200,         # \forall
    0x39 => 0x2203,         # \exists
    0x3A => 0xAC,           # \neg
    0x3B => 0x2205,         # \emptyset
    0x3C => 0x211C,         # \Re
    0x3D => 0x2111,         # \Im
    0x3E => 0x22A4,         # \top
    0x3F => 0x22A5,         # \bot

    0x40 => 0x2135,         # \aleph

    0x5B => 0x222A,         # \cup
    0x5C => 0x2229,         # \cap
    0x5D => 0x228E,         # \uplus
    [0x5E,0x5F] => 0x2227,  # \wedge, \vee

    [0x60,0x61] => 0x22A2,  # \vdash, \dashv
    [0x62,0x63] => 0x230A,  # \lfloor, \rfloor
    [0x64,0x65] => 0x2308,  # \lceil, \rceil
    0x66 => 0x7B,           # {
    0x67 => 0x7D,           # }
    [0x68,0x69] => 0x27E8,  # \langle, \rangle
    0x6A => 0x7C,           # |
    0x6A => 0x2223,         # \vert
    0x6B => 0x2225,         # \Vert
    0x6C => 0x2195,         # \updownarrow
    0x6D => 0x21D5,         # \Updownarrow
    0x6E => 0x5C,           # \backslash
    0x6E => 0x2216,         # \setminus
    0x6F => 0x2240,         # \wr

    0x70 => [0x221A,0,760], # \surd    ### adjust position so font doesn't have a large depth
    0x71 => 0x2A3F,         # \amalg
    0x72 => 0x2207,         # \nabla
    0x73 => 0x222B,         # \int
    0x74 => 0x2294,         # \sqcup
    0x75 => 0x2293,         # \sqcap
    [0x76,0x77] => 0x2291,  # \sqsubseteq, \sqsupseteq

    [0x79,0x7A] => 0x2020,  # \dagger, \ddagger

    0x7C => 0x2663,         # \clubsuit
    0x7D => 0x2662,         # \diamondsuit
    0x7E => 0x2661,         # \heartsuit
    0x7F => 0x2660,         # \spadesuit
  ],
};

$map{msam10} = {
  "Main-Regular" => [
    0x5C => 0x2220,         # \angle
  ],

  "Main-Bold" => [
    0x5C => 0x2220,         # \angle (emboldened below)
  ],

  "AMS" => [
    0x00 => 0x22A1,         # \boxdot
    0x01 => 0x229E,         # \boxplus
    0x02 => 0x22A0,         # \boxtimes
    0x03 => 0x25A1,         # \square
    0x04 => 0x25A0,         # \blacksquare
    0x05 => 0x22C5,         # \centerdot
    0x06 => 0x25CA,         # \lozenge
    0x07 => 0x29EB,         # \blacklozenge
    0x08 => 0x21BB,         # \circlearrowright
    0x09 => 0x21BA,         # \circlearrowleft
    0x0A => 0x21CC,         # \rightleftharpoons
    0x0B => 0x21CB,         # \leftrightharpoons
    0x0C => 0x229F,         # \boxminus
    0x0D => 0x22A9,         # \Vdash
    0x0E => 0x22AA,         # \Vvdash
    0x0F => 0x22A8,         # \vDash
    0x10 => 0x21A0,         # \twoheadrightarrow
    0x11 => 0x219E,         # \twoheadleftarrow
    0x12 => 0x21C7,         # \leftleftarrows
    0x13 => 0x21C9,         # \rightrightarrows
    0x14 => 0x21C8,         # \upuparrows
    0x15 => 0x21CA,         # \downdownarrows
    0x16 => 0x21BE,         # \upharpoonright
    0x17 => 0x21C2,         # \downharpoonright
    0x18 => 0x21BF,         # \upharpoonleft
    0x19 => 0x21C3,         # \downharpoonleft
    0x1A => 0x21A3,         # \rightarrowtail
    0x1B => 0x21A2,         # \leftarrowtail
    0x1C => 0x21C6,         # \leftrightarrows
    0x1D => 0x21C4,         # \rightleftarrows
    0x1E => 0x21B0,         # \Lsh
    0x1F => 0x21B1,         # \Rsh
    0x20 => 0x21DD,         # \rightsquigarrow
    0x21 => 0x21AD,         # \leftrightsquigarrow
    0x22 => 0x21AB,         # \looparrowleft
    0x23 => 0x21AC,         # \looparrowright
    0x24 => 0x2257,         # \circeq
    0x25 => 0x227F,         # \succsim
    0x26 => 0x2273,         # \gtrsim
    0x27 => 0x2A86,         # \gtrapprox
    0x28 => 0x22B8,         # \multimap
    0x29 => 0x2234,         # \therefore
    0x2A => 0x2235,         # \because
    0x2B => 0x2251,         # \doteqdot
    0x2C => 0x225C,         # \triangleq
    0x2D => 0x227E,         # \precsim
    0x2E => 0x2272,         # \lesssim
    0x2F => 0x2A85,         # \lessapprox
    0x30 => 0x2A95,         # \eqslantless
    0x31 => 0x2A96,         # \eqslantgtr
    0x32 => 0x22DE,         # \curlyeqprec
    0x33 => 0x22DF,         # \curlyeqsucc
    0x34 => 0x227C,         # \preccurlyeq
    0x35 => 0x2266,         # \leqq
    0x36 => 0x2A7D,         # \leqslant
    0x37 => 0x2276,         # \lessgtr
    0x38 => 0x2035,         # \backprime
    0x39 => 0x2212,         # dahsed arrow extension
    0x3A => 0x2253,         # \risingdotseq
    0x3B => 0x2252,         # \fallingdotseq
    0x3C => 0x227D,         # \succcurlyeq
    0x3D => 0x2267,         # \geqq
    0x3E => 0x2A7E,         # \geqslant
    0x3F => 0x2277,         # \gtrless
    0x40 => 0x228F,         # \sqsubset
    0x41 => 0x2290,         # \sqsupset
    0x42 => 0x22B3,         # \vartriangleright
    0x43 => 0x22B2,         # \vartriangleleft
    0x44 => 0x22B5,         # \trianglerighteq
    0x45 => 0x22B4,         # \trianglelefteq
    0x46 => 0x2605,         # \bigstar
    0x47 => 0x226C,         # \between
    0x48 => 0x25BC,         # \blacktriangledown
    0x49 => 0x25B6,         # \blacktriangleright
    0x4A => 0x25C0,         # \blacktriangleleft
    0x4B => 0x2192,         # rightarrow
    0x4C => 0x2190,         # leftarrow
    0x4D => 0x25B3,         # \vartriangle
    0x4E => 0x25B2,         # \blacktriangle
    0x4F => 0x25BD,         # \triangledown
    0x50 => 0x2256,         # \eqcirc
    0x51 => 0x22DA,         # \lesseqgtr
    0x52 => 0x22DB,         # \gtreqless
    0x53 => 0x2A8B,         # \lesseqqgtr
    0x54 => 0x2A8C,         # \gtreqqless
    0x55 => 0x00A5,         # yen
    0x56 => 0x21DB,         # \Rrightarrow
    0x57 => 0x21DA,         # \Lleftarrow
    0x58 => 0x2713,         # checkmark
    0x59 => 0x22BB,         # \veebar
    0x5A => 0x22BC,         # \barwedge
    0x5B => 0x2A5E,         # \doublebarwedge
    0x5C => 0x2220,         # \angle
    0x5D => 0x2221,         # \measuredangle
    0x5E => 0x2222,         # \sphericalangle
    0x5F => 0x221D,         # \varpropto
    0x60 => 0x2323,         # \smallsmile
    0x61 => 0x2322,         # \smallfrown
    0x62 => 0x22D0,         # \Subset
    0x63 => 0x22D1,         # \Supset
    0x64 => 0x22D3,         # \Cup
    0x65 => 0x22D2,         # \Cap
    0x66 => 0x22CF,         # \curlywedge
    0x67 => 0x22CE,         # \curlyvee
    0x68 => 0x22CB,         # \leftthreetimes
    0x69 => 0x22CC,         # \rightthreetimes
    0x6A => 0x2AC5,         # \subseteqq
    0x6B => 0x2AC6,         # \supseteqq
    0x6C => 0x224F,         # \bumpeq
    0x6D => 0x224E,         # \Bumpeq
    0x6E => 0x22D8,         # \lll
    0x6F => 0x22D9,         # \ggg
    0x70 => 0x250C,         # \ulcorner
    0x71 => 0x2510,         # \urcorner
    0x72 => 0x00AE,         # registered sign
    0x73 => 0x24C8,         # \circledS
    0x74 => 0x22D4,         # \pitchfork
    0x75 => 0x2214,         # \dotplus
    0x76 => 0x223D,         # \backsim
    0x77 => 0x22CD,         # \backsimeq
    0x78 => 0x2514,         # \llcorner
    0x79 => 0x2518,         # \lrcorner
    0x7A => 0x2720,         # maltese cross
    0x7B => 0x2201,         # \complement
    0x7C => 0x22BA,         # \intercal
    0x7D => 0x229A,         # \circledcirc
    0x7E => 0x229B,         # \circledast
    0x7F => 0x229D,         # \circleddash
  ],
};

$map{msbm10} = {
  "Size4" => [
    0x5B => 0x2C6,          # \widehat
    0x5B => [0x302,-1889,0],# \widehat (combining)
    0x5D => 0x2DC,          # \widetilde
    0x5D => [0x303,-1889,0],# \widetilde (combining)
  ],

  "Main-Regular" => [
    0x7E => 0x210F,         # \hbar
  ],

  "Main-Italic" => [
    0x7D => 0x210F,         # \hbar (with slant)
  ],

  "AMS" => [
    0x00 => 0xE00C,         # \lvertneqq
    0x01 => 0xE00D,         # \gvertneqq
    0x02 => 0x2270,         # \nleq
    0x03 => 0x2271,         # \ngeq
    0x04 => 0x226E,         # \nless
    0x05 => 0x226F,         # \ngtr
    0x06 => 0x2280,         # \nprec
    0x07 => 0x2281,         # \nsucc
    0x08 => 0x2268,         # \lneqq
    0x09 => 0x2269,         # \gneqq
    0x0A => 0xE010,         # \nleqslant
    0x0B => 0xE00F,         # \ngeqslant
    0x0C => 0x2A87,         # \lneq
    0x0D => 0x2A88,         # \gneq
    0x0E => 0x22E0,         # \npreceq
    0x0F => 0x22E1,         # \nsucceq
    0x10 => 0x22E8,         # \precnsim
    0x11 => 0x22E9,         # \succnsim
    0x12 => 0x22E6,         # \lnsim
    0x13 => 0x22E7,         # \gnsim
    0x14 => 0xE011,         # \nleqq
    0x15 => 0xE00E,         # \ngeqq
    0x16 => 0x2AB5,         # \precneqq
    0x17 => 0x2AB6,         # \succneqq
    0x18 => 0x2AB9,         # \precnapprox
    0x19 => 0x2ABA,         # \succnapprox
    0x1A => 0x2A89,         # \lnapprox
    0x1B => 0x2A8A,         # \gnapprox
    0x1C => 0x2241,         # \nsim
    0x1D => 0x2246,         # \ncong
    0x1E => 0x2571,         # \diagup
    0x1F => 0x2572,         # \diagdown
    0x20 => 0xE01A,         # \varsubsetneq
    0x21 => 0xE01B,         # \varsupsetneq
    0x22 => 0xE016,         # \nsubseteqq
    0x23 => 0xE018,         # \nsupseteqq
    0x24 => 0x2ACB,         # \subsetneqq
    0x25 => 0x2ACC,         # \supsetneqq
    0x26 => 0xE017,         # \varsubsetneqq
    0x27 => 0xE019,         # \varsupsetneqq
    0x28 => 0x228A,         # \subsetneq
    0x29 => 0x228B,         # \supsetneq
    0x2A => 0x2288,         # \nsubseteq
    0x2B => 0x2289,         # \nsupseteq
    0x2C => 0x2226,         # \nparallel
    0x2D => 0x2224,         # \nmid
    0x2E => 0xE006,         # \nshortmid
    0x2F => 0xE007,         # \nshortparallel
    0x30 => 0x22AC,         # \nvdash
    0x31 => 0x22AE,         # \nVdash
    0x32 => 0x22AD,         # \nvDash
    0x33 => 0x22AF,         # \nVDash
    0x34 => 0x22ED,         # \ntrianglerighteq
    0x35 => 0x22EC,         # \ntrianglelefteq
    0x36 => 0x22EA,         # \ntriangleleft
    0x37 => 0x22EB,         # \ntriangleright
    0x38 => 0x219A,         # \nleftarrow
    0x39 => 0x219B,         # \nrightarrow
    0x3A => 0x21CD,         # \nLeftarrow
    0x3B => 0x21CF,         # \nRightarrow
    0x3C => 0x21CE,         # \nLeftrightarrow
    0x3D => 0x21AE,         # \nleftrightarrow
    0x3E => 0x22C7,         # \divideontimes
    0x3F => 0x2205,         # \varnothing
    0x40 => 0x2204,         # \nexists

    [0x41,0x5A] => 0x41,    # A-Z
    0x5C => 0x2C6,          # \widehat
    0x5C => [0x302,-2333,0],# \widehat (combining)
    0x5E => 0x2DC,          # \widetilde
    0x5E => [0x303,-2333,0],# \widetilde (combining)

    0x60 => 0x2132,         # \Finv
    0x61 => 0x2141,         # \Game
    0x66 => 0x2127,         # \mho
    0x67 => 0x00F0,         # \eth
    0x68 => 0x2242,         # minus-tilde
    0x69 => 0x2136,         # \beth
    0x6A => 0x2137,         # \gimel
    0x6B => 0x2138,         # \daleth
    0x6C => 0x22D6,         # \lessdot
    0x6D => 0x22D7,         # \gtrdot
    0x6E => 0x22C9,         # \ltimes
    0x6F => 0x22CA,         # \rtimes
    0x70 => 0x2223,         # \shortmid
    0x71 => 0x2225,         # \shortparallel
    0x72 => 0x2216,         # \smallsetminus
    0x73 => 0x223C,         # \thicksim
    0x74 => 0x2248,         # \thickapprox
    0x75 => 0x224A,         # \approxeq
    0x76 => 0x2AB8,         # \succapprox
    0x77 => 0x2AB7,         # \precapprox
    0x78 => 0x21B6,         # \curvearrowleft
    0x79 => 0x21B7,         # \curvearrowright
    0x7A => 0x03DD,         # \digamma
    0x7B => 0x03F0,         # \varkappa
    0x7A => 0xE008,         # \digamma  (non-standard, for IE)
    0x7B => 0xE009,         # \varkappa (non-standard, for IE)
    0x7C => 0x006B,         # \Bbbk
    0x7D => 0x210F,         # \hslash
    0x7E => 0x0127,         # \hbar
    0x7F => 0x220D,         # \backepsilon
  ],
};

$map{eufm10} = {
  "Fraktur-Regular" => [
    [0,7] => 0xE300,        # variants
    0x12 => 0x2018,         # left quote
    0x13 => 0x2019,         # right quote
    0x21 => 0x21,           # !
    [0x26,0x2F] => 0x26,    # &, ', (, ), *, +, comma, -, ., /
    [0x30,0x39] => 0x30,    # 0-9
    [0x3A,0x3B] => 0x3A,    # :, ;
    0x3D => 0x3D,           # =
    0x3F => 0x3F,           # ?
    [0x41,0x5A] => 0x41,    # A-Z
    0x5B => 0x5B,           # [
    [0x5D,0x5E] => 0x5D,    # ], ^
    [0x61,0x7A] => 0x61,    # a-z
    0x7D => 0x22,           # "
  ],
};

$map{cmtt10} = {
  "Typewriter-Regular" => [
    [0,1] => 0x393,         # \Gamma, \Delta
    2 => 0x398,             # \Theta
    3 => 0x39B,             # \Lambda
    4 => 0x39E,             # \Xi
    5 => 0x3A0,             # \Pi
    6 => 0x3A3,             # \Sigma
    [7,8] => 0x3A5,         # \Upsilon, \Phi
    [9,0xA] => 0x3A8,       # \Psi, \Omega
    0xD => 0x2032,          # '

    0x10 => 0x131,          # \i
    0x11 => 0x237,          # \j
    0x12 => 0x2CB,          # \grave
    0x13 => 0x2CA,          # \acute
    0x14 => 0x2C7,          # \check
    0x15 => 0x2D8,          # \breve
    0x16 => 0x2C9,          # \bar
    0x17 => 0xB0,           # \degree
    0x17 => 0x02DA,         # \r, ring above
    0x18 => 0xB8,           # \c, cedilla
    0x20 => 0x2423,         # graphic representation of space

    [0x21,0x7F] => 0x21,

    0x27 => 0x2018,         # left quote
    0x60 => 0x2019,         # right quote
    0x5E => [0x302,-525,0], # \hat (combining)
    0x7E => [0x303,-525,0], # \tilde (combining)
    0x7F => [0x308,-525,0], # \ddot (combining)
  ],
};

$map{rsfs10} = {
  "Script-Regular" => [
    [0x41,0x5A] => 0x41,    # A-Z
  ],
};

$map{cmssbx10} = {
  "SansSerif-Bold" => [
    [0,1] => 0x393,         # \Gamma, \Delta
    2 => 0x398,             # \Theta
    3 => 0x39B,             # \Lambda
    4 => 0x39E,             # \Xi
    5 => 0x3A0,             # \Pi
    6 => 0x3A3,             # \Sigma
    [7,8] => 0x3A5,         # \Upsilon, \Phi
    [9,0xA] => 0x3A8,       # \Psi, \Omega

    0x10 => 0x131,          # \i
    0x11 => 0x237,          # \j
    0x13 => 0xB4,           # \acute
    0x14 => 0x2C7,          # \check
    0x15 => 0x2D8,          # \breve
    0x16 => 0x2C9,          # \bar
    0x17 => [0xB0,-58,0],   # \degree
    0x17 => 0x02DA,         # \r, ring above
    0x18 => 0xB8,           # \c, cedilla

    [0x21,0x2F] => 0x21,    # !, ", #, $, %, &, ', (, ), *, +, comma, -, ., /
    0x22 => 0x201D,         # "
    0x27 => 0x2019,         # '
    [0x30,0x39] => 0x30,    # 0-9
    [0x3A,0x3B] => 0x3A,    # :, ;
    0x3D => 0x3D,           # =
    [0x3F,0x40] => 0x3F,    # ?, @
    [0x41,0x5A] => 0x41,    # A-Z
    0x5B => 0x5B,           # [
    0x5C => 0x201C,         # ``
    [0x5D,0x5E] => 0x5D,    # ], ^
    0x5E => 0x2C6,          # \hat
    0x5F => 0x2D9,          # \dot
    0x60 => 0x2018,         # `
    [0x61,0x7A] => 0x61,    # a-z
    [0x7B,0x7C] => 0x2013,  # \endash, \emdash
    0x7B => [0x5F,0,-350],  # underline
    0x7D => 0x2DD,          # double acute
    0x7E => [0x7E,0,-350],  # ~
    0x7E => 0x2DC,          # \tilde
    0x7F => 0xA8,           # \ddot
  ],
};

$map{cmss10} = {
  "SansSerif-Regular" => [
    [0,1] => 0x393,         # \Gamma, \Delta
    2 => 0x398,             # \Theta
    3 => 0x39B,             # \Lambda
    4 => 0x39E,             # \Xi
    5 => 0x3A0,             # \Pi
    6 => 0x3A3,             # \Sigma
    [7,8] => 0x3A5,         # \Upsilon, \Phi
    [9,0xA] => 0x3A8,       # \Psi, \Omega

    0x10 => 0x131,          # \i
    0x11 => 0x237,          # \j
    0x12 => 0x2CB,          # \grave
    0x13 => 0x2CA,          # \acute
    0x14 => 0x2C7,          # \check
    0x15 => 0x2D8,          # \breve
    0x16 => 0x2C9,          # \bar
    0x17 => [0xB0,-142,0],  # \degree
    0x17 => 0x02DA,         # \r, ring above
    0x18 => 0xB8,           # \c, cedilla

    [0x21,0x2F] => 0x21,    # !, ", #, $, %, &, ', (, ), *, +, comma, -, ., /
    0x22 => 0x201D,         # "
    0x27 => 0x2019,         # '
    [0x30,0x39] => 0x30,    # 0-9
    [0x3A,0x3B] => 0x3A,    # :, ;
    0x3D => 0x3D,           # =
    [0x3F,0x40] => 0x3F,    # ?, @
    [0x41,0x5A] => 0x41,    # A-Z
    0x5B => 0x5B,           # [
    0x5C => 0x201C,         # ``
    [0x5D,0x5E] => 0x5D,    # ], ^
    0x5E => 0x2C6,          # \hat
    0x5F => 0x2D9,          # \dot
    0x60 => 0x2018,         # `
    [0x61,0x7A] => 0x61,    # a-z
    [0x7B,0x7C] => 0x2013,  # \endash, \emdash
    0x7B => [0x5F,0,-350],  # underline
    0x7D => 0x2DD,          # double acute
    0x7E => [0x7E,0,-350],  # ~
    0x7E => 0x2DC,          # \tilde
    0x7F => 0xA8,           # \ddot
  ],
};

$map{cmssi10} = {
  "SansSerif-Italic" => [
    [0,1] => 0x393,         # \Gamma, \Delta
    2 => 0x398,             # \Theta
    3 => 0x39B,             # \Lambda
    4 => 0x39E,             # \Xi
    5 => 0x3A0,             # \Pi
    6 => 0x3A3,             # \Sigma
    [7,8] => 0x3A5,         # \Upsilon, \Phi
    [9,0xA] => 0x3A8,       # \Psi, \Omega

    0x10 => 0x131,          # \i
    0x11 => 0x237,          # \j
    0x12 => 0x2CB,          # \grave
    0x13 => 0x2CA,          # \acute
    0x14 => 0x2C7,          # \check
    0x15 => 0x2D8,          # \breve
    0x16 => 0x2C9,          # \bar
    0x17 => [0xB0,-113,0],  # \degree
    0x17 => 0x02DA,         # \r, ring above
    0x18 => 0xB8,           # \c, cedilla

    [0x21,0x2F] => 0x21,    # !, ", #, $, %, &, ', (, ), *, +, comma, -, ., /
    0x22 => 0x201D,         # "
    0x27 => 0x2019,         # '
    [0x30,0x39] => 0x30,    # 0-9
    [0x3A,0x3B] => 0x3A,    # :, ;
    0x3D => 0x3D,           # =
    [0x3F,0x40] => 0x3F,    # ?, @
    [0x41,0x5A] => 0x41,    # A-Z
    0x5B => 0x5B,           # [
    0x5C => 0x201C,         # ``
    [0x5D,0x5E] => 0x5D,    # ], ^
    0x5E => 0x2C6,          # \hat
    0x5F => 0x2D9,          # \dot
    0x60 => 0x2018,         # `
    [0x61,0x7A] => 0x61,    # a-z
    [0x7B,0x7C] => 0x2013,  # \endash, \emdash
    0x7B => [0x5F,0,-350],  # underline
    0x7D => 0x2DD,          # double acute
    0x7E => [0x7E,0,-350],  # ~
    0x7E => 0x2DC,          # \tilde
    0x7F => 0xA8,           # \ddot
  ],
};

foreach $cmfont (keys %map) {
    foreach $mjfont (keys %{$map{$cmfont}}) {
        $style = $mjfont; $style =~ s/.*?(-|$)//; $style = "Regular" unless $style;
        $family = $mjfont; $family =~ s/-.*//;
        $fontname = "$family-$style";
        @{$reverse{$fontname}{$cmfont}} = @{$map{$cmfont}{$mjfont}};
    }
}

my %output;

sub add_to_output {
    my ($mjfont,$cmfont,$from,$to) = @_;

    my $xshift = 0, $yshift = 0;

    if (ref($to) eq "ARRAY") {
        $xshift = $to->[1];
        $yshift = $to->[2];
        $to = $to->[0];
    }

    $data = {
        "font" => $cmfont,
        "char" => $from,
        "xshift" => $xshift,
        "yshift" => $yshift
    };

    if (defined($output{$mjfont}{$to})) {
        print STDERR "Duplicate mapping $to for $mjfont: " .
            $output{$mjfont}{$to}{font} . ":" .
            $output{$mjfont}{$to}{char} . " vs. $cmfont:$from\n";
        die "Duplicate mapping!"; # disable this line to see all of them
    }
    $output{$mjfont}{$to} = $data;
}

foreach $mjfont (keys %reverse) {
    foreach $cmfont (keys %{$reverse{$mjfont}}) {
        @remap = @{$reverse{$mjfont}{$cmfont}};
        while (defined($item = shift(@remap))) {
            $remap = shift(@remap);

            if (ref($item) eq "ARRAY") {
                foreach $from ($item->[0]...$item->[1]) {
                    $to = $from - $item->[0] + $remap;
                    add_to_output($mjfont, $cmfont, $from, $to);
                }
            } else {
                add_to_output($mjfont, $cmfont, $item, $remap);
            }
        }
    }
}

print(encode_json(\%output));
