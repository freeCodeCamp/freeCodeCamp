function multiplyMatrices(t,n){return[t[0]*n[0]+t[1]*n[1]+t[2]*n[2],t[3]*n[0]+t[4]*n[1]+t[5]*n[2],t[6]*n[0]+t[7]*n[1]+t[8]*n[2]]}const t=[.955473421488075,-.02309845494876471,.06325924320057072,-.0283697093338637,1.0099953980813041,.021041441191917323,.012314014864481998,-.020507649298898964,1.330365926242124];
/**
 * Bradford chromatic adaptation from D50 to D65
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */function D50_to_D65(n){return multiplyMatrices(t,n)}const n=[1.0479297925449969,.022946870601609652,-.05019226628920524,.02962780877005599,.9904344267538799,-.017073799063418826,-.009243040646204504,.015055191490298152,.7518742814281371];
/**
 * Bradford chromatic adaptation from D65 to D50
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see http://www.brucelindbloom.com/index.html?Eqn_ChromAdapt.html
 */function D65_to_D50(t){return multiplyMatrices(n,t)}
/**
 * @param {number} hue - Hue as degrees 0..360
 * @param {number} sat - Saturation as percentage 0..100
 * @param {number} light - Lightness as percentage 0..100
 * @return {number[]} Array of sRGB components; in-gamut colors in range [0..1]
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/hslToRgb.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/hslToRgb.js
 */function HSL_to_sRGB(t){let n=t[0]%360;const _=t[1]/100,o=t[2]/100;return n<0&&(n+=360),[HSL_to_sRGB_channel(0,n,_,o),HSL_to_sRGB_channel(8,n,_,o),HSL_to_sRGB_channel(4,n,_,o)]}function HSL_to_sRGB_channel(t,n,_,o){const e=(t+n/30)%12;return o-_*Math.min(o,1-o)*Math.max(-1,Math.min(e-3,9-e,1))}
/**
 * @param {number} hue -  Hue as degrees 0..360
 * @param {number} white -  Whiteness as percentage 0..100
 * @param {number} black -  Blackness as percentage 0..100
 * @return {number[]} Array of RGB components 0..1
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/hwbToRgb.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/hwbToRgb.js
 */function HWB_to_sRGB(t){const n=t[0],_=t[1]/100,o=t[2]/100;if(_+o>=1){const t=_/(_+o);return[t,t,t]}const e=HSL_to_sRGB([n,100,50]),a=1-_-o;return[e[0]*a+_,e[1]*a+_,e[2]*a+_]}
/**
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */function LCH_to_Lab(t){const n=t[2]*Math.PI/180;return[t[0],t[1]*Math.cos(n),t[1]*Math.sin(n)]}
/**
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */function Lab_to_LCH(t){const n=180*Math.atan2(t[2],t[1])/Math.PI;return[t[0],Math.sqrt(Math.pow(t[1],2)+Math.pow(t[2],2)),n>=0?n:n+360]}const _=[.3457/.3585,1,.2958/.3585];
/**
 * Convert Lab to D50-adapted XYZ
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */function Lab_to_XYZ(t){const n=24389/27,o=216/24389,e=(t[0]+16)/116,a=t[1]/500+e,r=e-t[2]/200;return[(Math.pow(a,3)>o?Math.pow(a,3):(116*a-16)/n)*_[0],(t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/n)*_[1],(Math.pow(r,3)>o?Math.pow(r,3):(116*r-16)/n)*_[2]]}
/**
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js
 */function OKLCH_to_OKLab(t){const n=t[2]*Math.PI/180;return[t[0],t[1]*Math.cos(n),t[1]*Math.sin(n)]}
/**
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js
 */function OKLab_to_OKLCH(t){const n=180*Math.atan2(t[2],t[1])/Math.PI;return[t[0],Math.sqrt(t[1]**2+t[2]**2),n>=0?n:n+360]}const o=[1.2268798758459243,-.5578149944602171,.2813910456659647,-.0405757452148008,1.112286803280317,-.0717110580655164,-.0763729366746601,-.4214933324022432,1.5869240198367816],e=[1,.3963377773761749,.2158037573099136,1,-.1055613458156586,-.0638541728258133,1,-.0894841775298119,-1.2914855480194092];
/**
 * Given OKLab, convert to XYZ relative to D65
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js
 */
function OKLab_to_XYZ(t){const n=multiplyMatrices(e,t);return multiplyMatrices(o,[n[0]**3,n[1]**3,n[2]**3])}
/**
 * Assuming XYZ is relative to D50, convert to CIE Lab
 * from CIE standard, which now defines these as a rational fraction
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */function XYZ_to_Lab(t){const n=compute_f(t[0]/_[0]),o=compute_f(t[1]/_[1]);return[116*o-16,500*(n-o),200*(o-compute_f(t[2]/_[2]))]}const a=216/24389,r=24389/27;function compute_f(t){return t>a?Math.cbrt(t):(r*t+16)/116}const l=[.819022437996703,.3619062600528904,-.1288737815209879,.0329836539323885,.9292868615863434,.0361446663506424,.0481771893596242,.2642395317527308,.6335478284694309],i=[.210454268309314,.7936177747023054,-.0040720430116193,1.9779985324311684,-2.42859224204858,.450593709617411,.0259040424655478,.7827717124575296,-.8086757549230774];
/**
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 *
 * XYZ <-> LMS matrices recalculated for consistent reference white
 * @see https://github.com/w3c/csswg-drafts/issues/6642#issuecomment-943521484
 */
function XYZ_to_OKLab(t){const n=multiplyMatrices(l,t);return multiplyMatrices(i,[Math.cbrt(n[0]),Math.cbrt(n[1]),Math.cbrt(n[2])])}const c=[30757411/17917100,-6372589/17917100,-4539589/17917100,-.666684351832489,1.616481236634939,467509/29648200,792561/44930125,-1921689/44930125,.942103121235474];
/**
 * Convert XYZ to linear-light rec2020
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */const u=[446124/178915,-333277/357830,-72051/178915,-14852/17905,63121/35810,423/17905,11844/330415,-50337/660830,316169/330415];
/**
 * Convert XYZ to linear-light P3
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */function XYZ_to_lin_P3(t){return multiplyMatrices(u,t)}const s=[1.3457868816471583,-.25557208737979464,-.05110186497554526,-.5446307051249019,1.5082477428451468,.02052744743642139,0,0,1.2119675456389452];
/**
 * Convert D50 XYZ to linear-light prophoto-rgb
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */const h=[1829569/896150,-506331/896150,-308931/896150,-851781/878810,1648619/878810,36519/878810,16779/1248040,-147721/1248040,1266979/1248040];
/**
 * Convert XYZ to linear-light a98-rgb
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */const m=[12831/3959,-329/214,-1974/3959,-851781/878810,1648619/878810,36519/878810,705/12673,-2585/12673,705/667];
/**
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */function XYZ_to_lin_sRGB(t){return multiplyMatrices(m,t)}
/**
 * Convert an array of linear-light rec2020 RGB  in the range 0.0-1.0
 * to gamma corrected form ITU-R BT.2020-2 p.4
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */const D=1.09929682680944,b=.018053968510807;function gam_2020_channel(t){const n=t<0?-1:1,_=Math.abs(t);return _>b?n*(D*Math.pow(_,.45)-(D-1)):4.5*t}
/**
 * Convert an array of linear-light sRGB values in the range 0.0-1.0 to gamma corrected form
 * Extended transfer function:
 *  For negative values, linear portion extends on reflection
 *  of axis, then uses reflected pow below that
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see https://en.wikipedia.org/wiki/SRGB
 */function gam_sRGB(t){return[gam_sRGB_channel(t[0]),gam_sRGB_channel(t[1]),gam_sRGB_channel(t[2])]}function gam_sRGB_channel(t){const n=t<0?-1:1,_=Math.abs(t);return _>.0031308?n*(1.055*Math.pow(_,1/2.4)-.055):12.92*t}
/**
 * Convert an array of linear-light display-p3 RGB in the range 0.0-1.0
 * to gamma corrected form
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */function gam_P3(t){return gam_sRGB(t)}
/**
 * Convert an array of linear-light prophoto-rgb in the range 0.0-1.0
 * to gamma corrected form.
 * Transfer curve is gamma 1.8 with a small linear portion.
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */const g=1/512;function gam_ProPhoto_channel(t){const n=t<0?-1:1,_=Math.abs(t);return _>=g?n*Math.pow(_,1/1.8):16*t}
/**
 * Convert an array of linear-light a98-rgb in the range 0.0-1.0
 * to gamma corrected form. Negative values are also now accepted
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */function gam_a98rgb_channel(t){const n=t<0?-1:1,_=Math.abs(t);return n*Math.pow(_,256/563)}
/**
 * Convert an array of rec2020 RGB values in the range 0.0 - 1.0
 * to linear light (un-companded) form.
 * ITU-R BT.2020-2 p.4
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */const X=1.09929682680944,Y=.018053968510807;function lin_2020_channel(t){const n=t<0?-1:1,_=Math.abs(t);return _<4.5*Y?t/4.5:n*Math.pow((_+X-1)/X,1/.45)}const Z=[63426534/99577255,20160776/139408157,47086771/278816314,26158966/99577255,.677998071518871,8267143/139408157,0,19567812/697040785,1.0609850577107909];
/**
 * Convert an array of linear-light rec2020 values to CIE XYZ
 * using  D65 (no chromatic adaptation)
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
/**
 * Convert an array of of sRGB values where in-gamut values are in the range
 * [0 - 1] to linear light (un-companded) form.
 * Extended transfer function:
 *  For negative values, linear portion is extended on reflection of axis,
 *  then reflected power function is used.
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see https://en.wikipedia.org/wiki/SRGB
 */
function lin_sRGB(t){return[lin_sRGB_channel(t[0]),lin_sRGB_channel(t[1]),lin_sRGB_channel(t[2])]}function lin_sRGB_channel(t){const n=t<0?-1:1,_=Math.abs(t);return _<=.04045?t/12.92:n*Math.pow((_+.055)/1.055,2.4)}
/**
 * Convert an array of display-p3 RGB values in the range 0.0 - 1.0
 * to linear light (un-companded) form.
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */function lin_P3(t){return lin_sRGB(t)}const f=[608311/1250200,189793/714400,198249/1000160,35783/156275,247089/357200,198249/2500400,0,32229/714400,5220557/5000800];
/**
 * Convert an array of linear-light display-p3 values to CIE XYZ
 * using D65 (no chromatic adaptation)
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */function lin_P3_to_XYZ(t){return multiplyMatrices(f,t)}
/**
 * Convert an array of prophoto-rgb values where in-gamut Colors are in the
 * range [0.0 - 1.0] to linear light (un-companded) form. Transfer curve is
 * gamma 1.8 with a small linear portion. Extended transfer function
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */const M=16/512;function lin_ProPhoto_channel(t){const n=t<0?-1:1,_=Math.abs(t);return _<=M?t/16:n*Math.pow(_,1.8)}const p=[.7977666449006423,.13518129740053308,.0313477341283922,.2880748288194013,.711835234241873,8993693872564e-17,0,0,.8251046025104602];
/**
 * Convert an array of linear-light prophoto-rgb values to CIE D50 XYZ.
 * Matrix cannot be expressed in rational form, but is calculated to 64 bit accuracy.
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see see https://github.com/w3c/csswg-drafts/issues/7675
 */function lin_a98rgb_channel(t){const n=t<0?-1:1,_=Math.abs(t);return n*Math.pow(_,563/256)}const d=[573536/994567,263643/1420810,187206/994567,591459/1989134,6239551/9945670,374412/4972835,53769/1989134,351524/4972835,4929758/4972835];
/**
 * Convert an array of linear-light a98-rgb values to CIE XYZ
 * http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 * has greater numerical precision than section 4.3.5.3 of
 * https://www.adobe.com/digitalimag/pdfs/AdobeRGB1998.pdf
 * but the values below were calculated from first principles
 * from the chromaticity coordinates of R G B W
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 * @see https://www.adobe.com/digitalimag/pdfs/AdobeRGB1998.pdf
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/matrixmaker.html
 */const L=[506752/1228815,87881/245763,12673/70218,87098/409605,175762/245763,12673/175545,7918/409605,87881/737289,1001167/1053270];
/**
 * Convert an array of linear-light sRGB values to CIE XYZ
 * using sRGB's own white, D65 (no chromatic adaptation)
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */function lin_sRGB_to_XYZ(t){return multiplyMatrices(L,t)}
/**
 * Convert an array of gamma-corrected sRGB values in the 0.0 to 1.0 range to HSL.
 *
 * @param {Color} RGB [r, g, b]
 * - Red component 0..1
 * - Green component 0..1
 * - Blue component 0..1
 * @return {number[]} Array of HSL values: Hue as degrees 0..360, Saturation and Lightness as percentages 0..100
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/utilities.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 *
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/better-rgbToHsl.js
 */function sRGB_to_HSL(t){const n=t[0],_=t[1],o=t[2],e=Math.max(n,_,o),a=Math.min(n,_,o),r=(a+e)/2,l=e-a;let i=Number.NaN,c=0;if(0!==Math.round(1e5*l)){const t=Math.round(1e5*r);switch(c=0===t||1e5===t?0:(e-r)/Math.min(r,1-r),e){case n:i=(_-o)/l+(_<o?6:0);break;case _:i=(o-n)/l+2;break;case o:i=(n-_)/l+4}i*=60}return c<0&&(i+=180,c=Math.abs(c)),i>=360&&(i-=360),[i,100*c,100*r]}function sRGB_to_Hue(t){const n=t[0],_=t[1],o=t[2],e=Math.max(n,_,o),a=Math.min(n,_,o);let r=Number.NaN;const l=e-a;if(0!==l){switch(e){case n:r=(_-o)/l+(_<o?6:0);break;case _:r=(o-n)/l+2;break;case o:r=(n-_)/l+4}r*=60}return r>=360&&(r-=360),r}function sRGB_to_XYZ_D50(t){let n=t;return n=lin_sRGB(n),n=lin_sRGB_to_XYZ(n),n=D65_to_D50(n),n}function XYZ_D50_to_sRGB(t){let n=t;return n=D50_to_D65(n),n=XYZ_to_lin_sRGB(n),n=gam_sRGB(n),n}function HSL_to_XYZ_D50(t){let n=t;return n=HSL_to_sRGB(n),n=lin_sRGB(n),n=lin_sRGB_to_XYZ(n),n=D65_to_D50(n),n}function XYZ_D50_to_HSL(t){let n=t;return n=D50_to_D65(n),n=XYZ_to_lin_sRGB(n),n=gam_sRGB(n),n=sRGB_to_HSL(n),n}function HWB_to_XYZ_D50(t){let n=t;return n=HWB_to_sRGB(n),n=lin_sRGB(n),n=lin_sRGB_to_XYZ(n),n=D65_to_D50(n),n}function XYZ_D50_to_HWB(t){let n=t;n=D50_to_D65(n),n=XYZ_to_lin_sRGB(n);const _=gam_sRGB(n),o=Math.min(_[0],_[1],_[2]),e=1-Math.max(_[0],_[1],_[2]);return[sRGB_to_Hue(_),100*o,100*e]}function Lab_to_XYZ_D50(t){let n=t;return n=Lab_to_XYZ(n),n}function XYZ_D50_to_Lab(t){let n=t;return n=XYZ_to_Lab(n),n}function LCH_to_XYZ_D50(t){let n=t;return n=LCH_to_Lab(n),n=Lab_to_XYZ(n),n}function XYZ_D50_to_LCH(t){let n=t;return n=XYZ_to_Lab(n),n=Lab_to_LCH(n),n}function OKLab_to_XYZ_D50(t){let n=t;return n=OKLab_to_XYZ(n),n=D65_to_D50(n),n}function XYZ_D50_to_OKLab(t){let n=t;return n=D50_to_D65(n),n=XYZ_to_OKLab(n),n}function OKLCH_to_XYZ_D50(t){let n=t;return n=OKLCH_to_OKLab(n),n=OKLab_to_XYZ(n),n=D65_to_D50(n),n}function XYZ_D50_to_OKLCH(t){let n=t;return n=D50_to_D65(n),n=XYZ_to_OKLab(n),n=OKLab_to_OKLCH(n),n}function lin_sRGB_to_XYZ_D50(t){let n=t;return n=lin_sRGB_to_XYZ(n),n=D65_to_D50(n),n}function XYZ_D50_to_lin_sRGB(t){let n=t;return n=D50_to_D65(n),n=XYZ_to_lin_sRGB(n),n}function a98_RGB_to_XYZ_D50(t){let n=t;
/**
 * Convert an array of a98-rgb values in the range 0.0 - 1.0
 * to linear light (un-companded) form. Negative values are also now accepted
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */
var _;return n=[lin_a98rgb_channel((_=n)[0]),lin_a98rgb_channel(_[1]),lin_a98rgb_channel(_[2])],n=multiplyMatrices(d,n),n=D65_to_D50(n),n}function XYZ_D50_to_a98_RGB(t){let n=t;var _;return n=D50_to_D65(n),n=multiplyMatrices(h,n),n=[gam_a98rgb_channel((_=n)[0]),gam_a98rgb_channel(_[1]),gam_a98rgb_channel(_[2])],n}function P3_to_XYZ_D50(t){let n=t;return n=lin_P3(n),n=lin_P3_to_XYZ(n),n=D65_to_D50(n),n}function XYZ_D50_to_P3(t){let n=t;return n=D50_to_D65(n),n=XYZ_to_lin_P3(n),n=gam_P3(n),n}function lin_P3_to_XYZ_D50(t){let n=t;return n=lin_P3_to_XYZ(n),n=D65_to_D50(n),n}function XYZ_D50_to_lin_P3(t){let n=t;return n=D50_to_D65(n),n=XYZ_to_lin_P3(n),n}function rec_2020_to_XYZ_D50(t){let n=t;var _;return n=[lin_2020_channel((_=n)[0]),lin_2020_channel(_[1]),lin_2020_channel(_[2])],n=multiplyMatrices(Z,n),n=D65_to_D50(n),n}function XYZ_D50_to_rec_2020(t){let n=t;var _;return n=D50_to_D65(n),n=multiplyMatrices(c,n),n=[gam_2020_channel((_=n)[0]),gam_2020_channel(_[1]),gam_2020_channel(_[2])],n}function ProPhoto_RGB_to_XYZ_D50(t){let n=t;var _;return n=[lin_ProPhoto_channel((_=n)[0]),lin_ProPhoto_channel(_[1]),lin_ProPhoto_channel(_[2])],n=multiplyMatrices(p,n),n}function XYZ_D50_to_ProPhoto(t){let n=t;var _;return n=multiplyMatrices(s,n),n=[gam_ProPhoto_channel((_=n)[0]),gam_ProPhoto_channel(_[1]),gam_ProPhoto_channel(_[2])],n}function XYZ_D65_to_XYZ_D50(t){let n=t;return n=D65_to_D50(n),n}function XYZ_D50_to_XYZ_D65(t){let n=t;return n=D50_to_D65(n),n}function XYZ_D50_to_XYZ_D50(t){return t}function inGamut(t){return t[0]>=-1e-4&&t[0]<=1.0001&&t[1]>=-1e-4&&t[1]<=1.0001&&t[2]>=-1e-4&&t[2]<=1.0001}function clip(t){return[t[0]<0?0:t[0]>1?1:t[0],t[1]<0?0:t[1]>1?1:t[1],t[2]<0?0:t[2]>1?1:t[2]]}
/**
 * @description Calculate deltaE OK which is the simple root sum of squares
 * @param {number[]} reference - Array of OKLab values: L as 0..1, a and b as -1..1
 * @param {number[]} sample - Array of OKLab values: L as 0..1, a and b as -1..1
 * @return {number} How different a color sample is from reference
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/deltaEOK.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/deltaEOK.js
 */function deltaEOK(t,n){const[_,o,e]=t,[a,r,l]=n,i=_-a,c=o-r,u=e-l;return Math.sqrt(i**2+c**2+u**2)}const B=.02,G=1e-4;function mapGamut(t,n,_){const o=t;let e=clip(n(o)),a=deltaEOK(OKLCH_to_OKLab(_(e)),OKLCH_to_OKLab(o));if(a<B)return e;let r=0,l=o[1],i=!0;for(;l-r>G;){const t=(r+l)/2;if(o[1]=t,i&&inGamut(n(o)))r=t;else if(e=clip(n(o)),a=deltaEOK(OKLCH_to_OKLab(_(e)),OKLCH_to_OKLab(o)),a<B){if(B-a<G)return e;i=!1,r=t}else l=t}return clip(n([...o]))}
/**
 * @license MIT https://github.com/facelessuser/coloraide/blob/main/LICENSE.md
 */function mapGamutRayTrace(t,n,_){const o=t[0],e=t[2];let a=n(t);const r=n([o,0,e]);for(let t=0;t<4;t++){if(t>0){const t=_(a);t[0]=o,t[2]=e,a=n(t)}const l=rayTraceBox(r,a);if(!l)break;a=l}return clip(a)}function rayTraceBox(t,n){let _=1/0,o=-1/0;const e=[0,0,0];for(let a=0;a<3;a++){const r=t[a],l=n[a]-r;e[a]=l;const i=0,c=1;if(l){const t=1/l,n=(i-r)*t,e=(c-r)*t;o=Math.max(Math.min(n,e),o),_=Math.min(Math.max(n,e),_)}else if(r<i||r>c)return!1}return!(o>_||_<0)&&(o<0&&(o=_),!!isFinite(o)&&[t[0]+e[0]*o,t[1]+e[1]*o,t[2]+e[2]*o])}const R={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};function luminance(t){const[n,_,o]=t.map(t=>t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4));return.2126*n+.7152*_+.0722*o}function contrast_ratio_wcag_2_1(t,n){const _=luminance(t),o=luminance(n);return(Math.max(_,o)+.05)/(Math.min(_,o)+.05)}export{HSL_to_XYZ_D50,HWB_to_XYZ_D50,LCH_to_XYZ_D50,Lab_to_XYZ_D50,OKLCH_to_OKLab,OKLCH_to_XYZ_D50,OKLab_to_OKLCH,OKLab_to_XYZ,OKLab_to_XYZ_D50,P3_to_XYZ_D50,ProPhoto_RGB_to_XYZ_D50,XYZ_D50_to_HSL,XYZ_D50_to_HWB,XYZ_D50_to_LCH,XYZ_D50_to_Lab,XYZ_D50_to_OKLCH,XYZ_D50_to_OKLab,XYZ_D50_to_P3,XYZ_D50_to_ProPhoto,XYZ_D50_to_XYZ_D50,XYZ_D50_to_XYZ_D65,XYZ_D50_to_a98_RGB,XYZ_D50_to_lin_P3,XYZ_D50_to_lin_sRGB,XYZ_D50_to_rec_2020,XYZ_D50_to_sRGB,XYZ_D65_to_XYZ_D50,XYZ_to_OKLab,XYZ_to_lin_P3,XYZ_to_lin_sRGB,a98_RGB_to_XYZ_D50,clip,contrast_ratio_wcag_2_1,gam_P3,gam_sRGB,inGamut,lin_P3,lin_P3_to_XYZ,lin_P3_to_XYZ_D50,lin_sRGB,lin_sRGB_to_XYZ,lin_sRGB_to_XYZ_D50,mapGamut,mapGamutRayTrace,R as namedColors,rec_2020_to_XYZ_D50,sRGB_to_XYZ_D50};
