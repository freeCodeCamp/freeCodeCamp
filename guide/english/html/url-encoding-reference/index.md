---
title: Url Encoding Reference
---
## Url Encoding Reference

A URL is an address for a website. Just like postal addresses have to follow a specific format to be understood by the postman, URLS have to follow a format to be understood and get you to the right location.

There are only certain characters that are allowed in the URL string, alphabetic characters, numerals, and a few characters `; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #` that can have special meanings.

#### Reserved Characters:

| Character | Meaning |
| --- | --- |
| : | Separate protocol (http) from address |
| / | Separate domain and directories |
| # | Separate anchors |
| ? | Separate query string |
| & | Separate query elements |
| @ | Separate username and password from domain |
| % | Indicates an encoded character |
| + | Indicates a space |

#### Encoding:

Any character that is not an alphabetic character, a number, or a reserved character being used needs to be encoded.

URLs use the ASCII ("American Standard Code for Information Interchange") character-set and so encoding must be to a valid ASCII format. 

There are functions in most web languages to do this encoding for you, for example in JavaScript `encodeURI()` and in PHP `rawurlencode()`.

| Character | Encoded |
| --- | --- |
| space | %20 |
| ! | %21 |
| " | %22 |
| # | %23 |
| $ | %24 |
| % | %25 |
| & | %26 |
| ' | %27 |
| ( | %28 |
| ) | %29 |
| * | %2A |
| + | %2B |
| , | %2C |
| - | %2D |
| . | %2E |
| / | %2F |
| 0 | %30 |
| 1 | %31 |
| 2 | %32 |
| 3 | %33 |
| 4 | %34 |
| 5 | %35 |
| 6 | %36 |
| 7 | %37 |
| 8 | %38 |
| 9 | %39 |
| : | %3A |
| ; | %3B |
| < | %3C |
| = | %3D |
| > | %3E |
| ? | %3F |
| @ | %40 |
| A | %41 |
| B | %42 |
| C | %43 |
| D | %44 |
| E | %45 |
| F | %46 |
| G | %47 |
| H | %48 |
| I | %49 |
| J | %4A |
| K | %4B |
| L | %4C |
| M | %4D |
| N | %4E |
| O | %4F |
| P | %50 |
| Q | %51 |
| R | %52 |
| S | %53 |
| T | %54 |
| U | %55 |
| V | %56 |
| W | %57 |
| X | %58 |
| Y | %59 |
| Z | %5A |
| [ | %5B |
| \ | %5C |
| ] | %5D |
| ^ | %5E |
| _ | %5F |
| ` | %60 |
| a | %61 |
| b | %62 |
| c | %63 |
| d | %64 |
| e | %65 |
| f | %66 |
| g | %67 |
| h | %68 |
| i | %69 |
| j | %6A |
| k | %6B |
| l | %6C |
| m | %6D |
| n | %6E |
| o | %6F |
| p | %70 |
| q | %71 |
| r | %72 |
| s | %73 |
| t | %74 |
| u | %75 |
| v | %76 |
| w | %77 |
| x | %78 |
| y | %79 |
| z | %7A |
| { | %7B |
| | | %7C |
| } | %7D |
| ~ | %7E |
| ¢ | %A2 |
| £ | %A3 |
| ¥ | %A5 |
| | | %A6 |
| § | %A7 |
| « | %AB |
| ¬ | %AC |
| ¯ | %AD |
| º | %B0 |
| ± | %B1 |
| ª | %B2 |
| , | %B4 |
| µ | %B5 |
| » | %BB |
| ¼ | %BC |
| ½ | %BD |
| ¿ | %BF |
| À | %C0 |
| Á | %C1 |
| Â | %C2 |
| Ã | %C3 |
| Ä | %C4 |
| Å | %C5 |
| Æ | %C6 |
| Ç | %C7 |
| È | %C8 |
| É | %C9 |
| Ê | %CA |
| Ë | %CB |
| Ì | %CC |
| Í | %CD |
| Î | %CE |
| Ï | %CF |
| Ð | %D0 |
| Ñ | %D1 |
| Ò | %D2 |
| Ó | %D3 |
| Ô | %D4 |
| Õ | %D5 |
| Ö | %D6 |
| Ø | %D8 |
| Ù | %D9 |
| Ú | %DA |
| Û | %DB |
| Ü | %DC |
| Ý | %DD |
| Þ | %DE |
| ß | %DF |
| à | %E0 |
| á | %E1 |
| â | %E2 |
| ã | %E3 |
| ä | %E4 |
| å | %E5 |
| æ | %E6 |
| ç | %E7 |
| è | %E8 |
| é | %E9 |
| ê | %EA |
| ë | %EB |
| ì | %EC |
| í | %ED |
| î | %EE |
| ï | %EF |
| ð | %F0 |
| ñ | %F1 |
| ò | %F2 |
| ó | %F3 |
| ô | %F4 |
| õ | %F5 |
| ö | %F6 |
| ÷ | %F7 |
| ø | %F8 |
| ù | %F9 |
| ú | %FA |
| û | %FB |
| ü | %FC |
| ý | %FD |
| þ | %FE |
| ÿ | %FF |

#### Example:

```js
encodeURI(Free Code Camp);
// Free%20Code%20Camp
```

#### More Information:

[MDN encodeURI()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)

[HTML URL Encoding Reference](https://www.w3schools.com/tags/ref_urlencode.asp)
