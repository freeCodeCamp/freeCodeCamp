# strnum
Parse string into Number based on configuration

## Users

<a href="https://github.com/aws-amplify" target="_blank"><img src="https://avatars.githubusercontent.com/u/41077760?s=100&v=4"></a>
<a href="https://github.com/astrapay" target="_blank"><img src="https://avatars.githubusercontent.com/u/90901882?s=100&v=4"></a>
<a href="https://github.com/process-analytics" target="_blank"><img src="https://avatars.githubusercontent.com/u/60110287?s=100&v=4"></a>
<a href="https://github.com/NaturalIntelligence" target="_blank"><img src="https://avatars.githubusercontent.com/u/16322633?s=100&v=4"></a>
Many React Native projects and plugins

## Usage

```bash
npm install strnum
```
```js
const toNumber = require("strnum");

toNumber(undefined) // undefined
toNumber(null)) //null
toNumber("")) // ""
toNumber("string"); //"string")
toNumber("12,12"); //"12,12")
toNumber("12 12"); //"12 12")
toNumber("12-12"); //"12-12")
toNumber("12.12.12"); //"12.12.12")
toNumber("0x2f"); //47)
toNumber("-0x2f"); //-47)
toNumber("0x2f", { hex :  true}); //47)
toNumber("-0x2f", { hex :  true}); //-47)
toNumber("0x2f", { hex :  false}); //"0x2f")
toNumber("-0x2f", { hex :  false}); //"-0x2f")
toNumber("06"); //6)
toNumber("06", { leadingZeros :  true}); //6)
toNumber("06", { leadingZeros :  false}); //"06")

toNumber("006"); //6)
toNumber("006", { leadingZeros :  true}); //6)
toNumber("006", { leadingZeros :  false}); //"006")
toNumber("0.0"); //0)
toNumber("00.00"); //0)
toNumber("0.06"); //0.06)
toNumber("00.6"); //0.6)
toNumber(".006"); //0.006)
toNumber("6.0"); //6)
toNumber("06.0"); //6)

toNumber("0.0",  { leadingZeros :  false}); //0)
toNumber("00.00",  { leadingZeros :  false}); //"00.00")
toNumber("0.06",  { leadingZeros :  false}); //0.06)
toNumber("00.6",  { leadingZeros :  false}); //"00.6")
toNumber(".006", { leadingZeros :  false}); //0.006)
toNumber("6.0"  ,  { leadingZeros :  false}); //6)
toNumber("06.0"  ,  { leadingZeros :  false}); //"06.0")
toNumber("-06"); //-6)
toNumber("-06", { leadingZeros :  true}); //-6)
toNumber("-06", { leadingZeros :  false}); //"-06")

toNumber("-0.0"); //-0)
toNumber("-00.00"); //-0)
toNumber("-0.06"); //-0.06)
toNumber("-00.6"); //-0.6)
toNumber("-.006"); //-0.006)
toNumber("-6.0"); //-6)
toNumber("-06.0"); //-6)

toNumber("-0.0"   ,  { leadingZeros :  false}); //-0)
toNumber("-00.00",  { leadingZeros :  false}); //"-00.00")
toNumber("-0.06",  { leadingZeros :  false}); //-0.06)
toNumber("-00.6",  { leadingZeros :  false}); //"-00.6")
toNumber("-.006",  {leadingZeros :  false}); //-0.006)
toNumber("-6.0"  ,  { leadingZeros :  false}); //-6)
toNumber("-06.0"  ,  { leadingZeros :  false}); //"-06.0")
toNumber("420926189200190257681175017717")  ; //4.209261892001902e+29)
toNumber("000000000000000000000000017717"  ,  { leadingZeros :  false}); //"000000000000000000000000017717")
toNumber("000000000000000000000000017717"  ,  { leadingZeros :  true}); //17717)
toNumber("01.0e2"  ,  { leadingZeros :  false}); //"01.0e2")
toNumber("-01.0e2"  ,  { leadingZeros :  false}); //"-01.0e2")
toNumber("01.0e2") ; //100)
toNumber("-01.0e2") ; //-100)
toNumber("1.0e2") ; //100)

toNumber("-1.0e2") ; //-100)
toNumber("1.0e-2"); //0.01)

toNumber("+1212121212"); // 1212121212
toNumber("+1212121212", { skipLike: /\+[0-9]{10}/} )); //"+1212121212"
```

Supported Options
```js
hex: true,          //when hexadecimal string should be parsed
leadingZeros: true, //when number with leading zeros like 08 should be parsed. 0.0 is not impacted
eNotation: true,    //when number with eNotation or number parsed in eNotation should be considered
skipLike: /regex/   //when string should not be parsed when it matches the specified regular expression
```
