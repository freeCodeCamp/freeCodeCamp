---
title: Font Weight and Style
---
## Font Weight and Style

Font-weight can be written as text values:
```
font-weight: normal;
font-weight: bold;
```

Or as a numerical value from `100` to `900` (in multiples of 100):
```
font-weight: 400;  /* equal to 'normal' above */
font-weight: 700; /* equal to 'bold' above */
```

Numerical value and their common description

| Value	| Common Description           |
| ----- | ---------------------------- |
| 100	  | Thin (Hairline)              | 
| 200	  | Extra Light (Ultra Light)    | 
| 300	  | Light                        | 
| 400	  | Normal                       | 
| 500	  | Medium                       | 
| 600	  | Semi Bold (Demi Bold)        | 
| 700	  | Bold                         | 
| 800	  | Extra Bold (Ultra Bold)      | 
| 900	  | Black (Heavy)                | 

Not all weights are available for all fonts. Some specialised fonts may only be available in one weight (generally `normal` `400`).

Font-weight can also be specified relative to an element's parent (if a font has more than one weight):
```
font-weight: lighter; 
font-weight: bolder; 
```

##### Additional Information

* [Font Size And Weight Matters](https://type-ed.com/resources/rag-right/2017/11/13/font-weight-size)

* [How To Set Weights And Styles With The @font-face Declaration](https://www.smashingmagazine.com/2013/02/setting-weights-and-styles-at-font-face-declaration/)
