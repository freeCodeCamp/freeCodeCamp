import assertString from './util/assertString';
import * as algorithms from './util/algorithms';
var AU = function AU(str) {
  var match = str.match(/^(AU)?(\d{11})$/);
  if (!match) {
    return false;
  }
  // @see {@link https://abr.business.gov.au/Help/AbnFormat}
  var weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  str = str.replace(/^AU/, '');
  var ABN = (parseInt(str.slice(0, 1), 10) - 1).toString() + str.slice(1);
  var total = 0;
  for (var i = 0; i < 11; i++) {
    total += weights[i] * ABN.charAt(i);
  }
  return total !== 0 && total % 89 === 0;
};
var CH = function CH(str) {
  // @see {@link https://www.ech.ch/de/ech/ech-0097/5.2.0}
  var hasValidCheckNumber = function hasValidCheckNumber(digits) {
    var lastDigit = digits.pop(); // used as check number
    var weights = [5, 4, 3, 2, 7, 6, 5, 4];
    var calculatedCheckNumber = (11 - digits.reduce(function (acc, el, idx) {
      return acc + el * weights[idx];
    }, 0) % 11) % 11;
    return lastDigit === calculatedCheckNumber;
  };

  // @see {@link https://www.estv.admin.ch/estv/de/home/mehrwertsteuer/uid/mwst-uid-nummer.html}
  return /^(CHE[- ]?)?(\d{9}|(\d{3}\.\d{3}\.\d{3})|(\d{3} \d{3} \d{3})) ?(TVA|MWST|IVA)?$/.test(str) && hasValidCheckNumber(str.match(/\d/g).map(function (el) {
    return +el;
  }));
};
var PT = function PT(str) {
  var match = str.match(/^(PT)?(\d{9})$/);
  if (!match) {
    return false;
  }
  var tin = match[2];
  var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split('').slice(0, 8).map(function (a) {
    return parseInt(a, 10);
  }), 9) % 11;
  if (checksum > 9) {
    return parseInt(tin[8], 10) === 0;
  }
  return checksum === parseInt(tin[8], 10);
};
export var vatMatchers = {
  /**
   * European Union VAT identification numbers
   */
  AT: function AT(str) {
    return /^(AT)?U\d{8}$/.test(str);
  },
  BE: function BE(str) {
    return /^(BE)?\d{10}$/.test(str);
  },
  BG: function BG(str) {
    return /^(BG)?\d{9,10}$/.test(str);
  },
  HR: function HR(str) {
    return /^(HR)?\d{11}$/.test(str);
  },
  CY: function CY(str) {
    return /^(CY)?\w{9}$/.test(str);
  },
  CZ: function CZ(str) {
    return /^(CZ)?\d{8,10}$/.test(str);
  },
  DK: function DK(str) {
    return /^(DK)?\d{8}$/.test(str);
  },
  EE: function EE(str) {
    return /^(EE)?\d{9}$/.test(str);
  },
  FI: function FI(str) {
    return /^(FI)?\d{8}$/.test(str);
  },
  FR: function FR(str) {
    return /^(FR)([A-Z0-9]{2}\d{9})$/.test(str);
  },
  DE: function DE(str) {
    return /^(DE)?\d{9}$/.test(str);
  },
  EL: function EL(str) {
    return /^(EL)?\d{9}$/.test(str);
  },
  HU: function HU(str) {
    return /^(HU)?\d{8}$/.test(str);
  },
  IE: function IE(str) {
    return /^(IE)?\d{7}\w{1}(W)?$/.test(str);
  },
  IT: function IT(str) {
    return /^(IT)?\d{11}$/.test(str);
  },
  LV: function LV(str) {
    return /^(LV)?\d{11}$/.test(str);
  },
  LT: function LT(str) {
    return /^(LT)?\d{9,12}$/.test(str);
  },
  LU: function LU(str) {
    return /^(LU)?\d{8}$/.test(str);
  },
  MT: function MT(str) {
    return /^(MT)?\d{8}$/.test(str);
  },
  NL: function NL(str) {
    return /^(NL)?\d{9}B\d{2}$/.test(str);
  },
  PL: function PL(str) {
    return /^(PL)?(\d{10}|(\d{3}-\d{3}-\d{2}-\d{2})|(\d{3}-\d{2}-\d{2}-\d{3}))$/.test(str);
  },
  PT: PT,
  RO: function RO(str) {
    return /^(RO)?\d{2,10}$/.test(str);
  },
  SK: function SK(str) {
    return /^(SK)?\d{10}$/.test(str);
  },
  SI: function SI(str) {
    return /^(SI)?\d{8}$/.test(str);
  },
  ES: function ES(str) {
    return /^(ES)?\w\d{7}[A-Z]$/.test(str);
  },
  SE: function SE(str) {
    return /^(SE)?\d{12}$/.test(str);
  },
  /**
   * VAT numbers of non-EU countries
   */
  AL: function AL(str) {
    return /^(AL)?\w{9}[A-Z]$/.test(str);
  },
  MK: function MK(str) {
    return /^(MK)?\d{13}$/.test(str);
  },
  AU: AU,
  BY: function BY(str) {
    return /^(УНП )?\d{9}$/.test(str);
  },
  CA: function CA(str) {
    return /^(CA)?\d{9}$/.test(str);
  },
  IS: function IS(str) {
    return /^(IS)?\d{5,6}$/.test(str);
  },
  IN: function IN(str) {
    return /^(IN)?\d{15}$/.test(str);
  },
  ID: function ID(str) {
    return /^(ID)?(\d{15}|(\d{2}.\d{3}.\d{3}.\d{1}-\d{3}.\d{3}))$/.test(str);
  },
  IL: function IL(str) {
    return /^(IL)?\d{9}$/.test(str);
  },
  KZ: function KZ(str) {
    return /^(KZ)?\d{12}$/.test(str);
  },
  NZ: function NZ(str) {
    return /^(NZ)?\d{9}$/.test(str);
  },
  NG: function NG(str) {
    return /^(NG)?(\d{12}|(\d{8}-\d{4}))$/.test(str);
  },
  NO: function NO(str) {
    return /^(NO)?\d{9}MVA$/.test(str);
  },
  PH: function PH(str) {
    return /^(PH)?(\d{12}|\d{3} \d{3} \d{3} \d{3})$/.test(str);
  },
  RU: function RU(str) {
    return /^(RU)?(\d{10}|\d{12})$/.test(str);
  },
  SM: function SM(str) {
    return /^(SM)?\d{5}$/.test(str);
  },
  SA: function SA(str) {
    return /^(SA)?\d{15}$/.test(str);
  },
  RS: function RS(str) {
    return /^(RS)?\d{9}$/.test(str);
  },
  CH: CH,
  TR: function TR(str) {
    return /^(TR)?\d{10}$/.test(str);
  },
  UA: function UA(str) {
    return /^(UA)?\d{12}$/.test(str);
  },
  GB: function GB(str) {
    return /^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/.test(str);
  },
  UZ: function UZ(str) {
    return /^(UZ)?\d{9}$/.test(str);
  },
  /**
   * VAT numbers of Latin American countries
   */
  AR: function AR(str) {
    return /^(AR)?\d{11}$/.test(str);
  },
  BO: function BO(str) {
    return /^(BO)?\d{7}$/.test(str);
  },
  BR: function BR(str) {
    return /^(BR)?((\d{2}.\d{3}.\d{3}\/\d{4}-\d{2})|(\d{3}.\d{3}.\d{3}-\d{2}))$/.test(str);
  },
  CL: function CL(str) {
    return /^(CL)?\d{8}-\d{1}$/.test(str);
  },
  CO: function CO(str) {
    return /^(CO)?\d{10}$/.test(str);
  },
  CR: function CR(str) {
    return /^(CR)?\d{9,12}$/.test(str);
  },
  EC: function EC(str) {
    return /^(EC)?\d{13}$/.test(str);
  },
  SV: function SV(str) {
    return /^(SV)?\d{4}-\d{6}-\d{3}-\d{1}$/.test(str);
  },
  GT: function GT(str) {
    return /^(GT)?\d{7}-\d{1}$/.test(str);
  },
  HN: function HN(str) {
    return /^(HN)?$/.test(str);
  },
  MX: function MX(str) {
    return /^(MX)?\w{3,4}\d{6}\w{3}$/.test(str);
  },
  NI: function NI(str) {
    return /^(NI)?\d{3}-\d{6}-\d{4}\w{1}$/.test(str);
  },
  PA: function PA(str) {
    return /^(PA)?$/.test(str);
  },
  PY: function PY(str) {
    return /^(PY)?\d{6,8}-\d{1}$/.test(str);
  },
  PE: function PE(str) {
    return /^(PE)?\d{11}$/.test(str);
  },
  DO: function DO(str) {
    return /^(DO)?(\d{11}|(\d{3}-\d{7}-\d{1})|[1,4,5]{1}\d{8}|([1,4,5]{1})-\d{2}-\d{5}-\d{1})$/.test(str);
  },
  UY: function UY(str) {
    return /^(UY)?\d{12}$/.test(str);
  },
  VE: function VE(str) {
    return /^(VE)?[J,G,V,E]{1}-(\d{9}|(\d{8}-\d{1}))$/.test(str);
  }
};
export default function isVAT(str, countryCode) {
  assertString(str);
  assertString(countryCode);
  if (countryCode in vatMatchers) {
    return vatMatchers[countryCode](str);
  }
  throw new Error("Invalid country code: '".concat(countryCode, "'"));
}