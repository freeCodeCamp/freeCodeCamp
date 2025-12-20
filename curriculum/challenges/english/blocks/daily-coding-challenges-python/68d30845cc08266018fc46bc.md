---
id: 68d30845cc08266018fc46bc
title: "Challenge 76: Complementary DNA"
challengeType: 29
dashedName: challenge-76
---

# --description--

Given a string representing a DNA sequence, return its complementary strand using the following rules:

- DNA consists of the letters `"A"`, `"C"`, `"G"`, and `"T"`.
- The letters `"A"` and `"T"` complement each other.
- The letters `"C"` and `"G"` complement each other.

For example, given `"ACGT"`, return `"TGCA"`.

# --hints--

`complementary_dna("ACGT")` should return `"TGCA"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(complementary_dna("ACGT"), "TGCA")`)
}})
```

`complementary_dna("ATGCGTACGTTAGC")` should return `"TACGCATGCAATCG"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(complementary_dna("ATGCGTACGTTAGC"), "TACGCATGCAATCG")`)
}})
```

`complementary_dna("GGCTTACGATCGAAG")` should return `"CCGAATGCTAGCTTC"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(complementary_dna("GGCTTACGATCGAAG"), "CCGAATGCTAGCTTC")`)
}})
```

`complementary_dna("GATCTAGCTAGGCTAGCTAG")` should return `"CTAGATCGATCCGATCGATC"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(complementary_dna("GATCTAGCTAGGCTAGCTAG"), "CTAGATCGATCCGATCGATC")`)
}})
```

# --seed--

## --seed-contents--

```py
def complementary_dna(strand):

    return strand
```

# --solutions--

```py
def complementary_dna(strand):
    complements = { "A": "T", "T": "A", "C": "G", "G": "C" }
    return "".join(complements[n] for n in strand)
```
