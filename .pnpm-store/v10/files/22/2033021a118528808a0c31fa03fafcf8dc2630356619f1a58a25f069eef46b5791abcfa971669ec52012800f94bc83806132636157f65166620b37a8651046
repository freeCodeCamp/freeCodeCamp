const toNumber = require("./strnum.js");

describe("Should convert all the valid numeric strings to number", () => {
    it("should return undefined, null, empty string, or non-numeric as it is", () => {
        expect(toNumber(undefined)).not.toBeDefined();
        expect(toNumber(null)).toEqual(null);
        expect(toNumber("")).toEqual("");
        expect(toNumber("string")).toEqual("string");
        expect(toNumber("e89794659669cb7bb967db73a7ea6889c3891727")).toEqual("e89794659669cb7bb967db73a7ea6889c3891727");
        
    });
    it("should not parse number with spaces or comma", () => {
        expect(toNumber("12,12")).toEqual("12,12");
        expect(toNumber("12 12")).toEqual("12 12");
        expect(toNumber("12-12")).toEqual("12-12");
        expect(toNumber("12.12.12")).toEqual("12.12.12");
    })
    it("should consider + sign", () => {
        expect(toNumber("+12")).toEqual(12);
        expect(toNumber("+ 12")).toEqual("+ 12");
        expect(toNumber("12+12")).toEqual("12+12");
        expect(toNumber("1212+")).toEqual("1212+");
    })
    it("should parse hexadecimal values", () => {
        expect(toNumber("0x2f")).toEqual(47);
        expect(toNumber("-0x2f")).toEqual(-47);
        expect(toNumber("0x2f", { hex :  true})).toEqual(47);
        expect(toNumber("-0x2f", { hex :  true})).toEqual(-47);
        expect(toNumber("0x2f", { hex :  false})).toEqual("0x2f");
        expect(toNumber("-0x2f", { hex :  false})).toEqual("-0x2f");
    })
    it("should not parse strings with 0x embedded", () => {
        expect(toNumber("0xzz")).toEqual("0xzz");
        expect(toNumber("iweraf0x123qwerqwer")).toEqual("iweraf0x123qwerqwer");
        expect(toNumber("1230x55")).toEqual("1230x55");
        expect(toNumber("JVBERi0xLjMNCiXi48")).toEqual("JVBERi0xLjMNCiXi48");
    })
    it("leading zeros", () => {
        expect(toNumber("0")).toEqual(0);
        expect(toNumber("00")).toEqual(0);
        expect(toNumber("00.0")).toEqual(0);

        expect(toNumber("0",{ leadingZeros :  false})).toEqual(0);
        expect(toNumber("00",{ leadingZeros :  false})).toEqual("00");
        expect(toNumber("00.0",{ leadingZeros :  false})).toEqual("00.0");

        expect(toNumber("06")).toEqual(6);
        expect(toNumber("06", { leadingZeros :  true})).toEqual(6);
        expect(toNumber("06", { leadingZeros :  false})).toEqual("06");

        expect(toNumber("006")).toEqual(6);
        expect(toNumber("006", { leadingZeros :  true})).toEqual(6);
        expect(toNumber("006", { leadingZeros :  false})).toEqual("006");

        expect(toNumber("000000000000000000000000017717"  ,  { leadingZeros :  false})).toEqual("000000000000000000000000017717");
        expect(toNumber("000000000000000000000000017717"  ,  { leadingZeros :  true})).toEqual(17717);
        expect(toNumber("020211201030005811824")  ).toEqual("020211201030005811824");
        expect(toNumber("0420926189200190257681175017717")  ).toEqual(4.209261892001902e+29);
    })
    it("invalid floating number", () => {
        expect(toNumber("20.21.030")  ).toEqual("20.21.030");
        expect(toNumber("0.21.030")  ).toEqual("0.21.030");
        expect(toNumber("0.21.")  ).toEqual("0.21.");
    });
    it("floating point and leading zeros", () => {
        expect(toNumber("0.")).toEqual(0);
        expect(toNumber("+0.")).toEqual(0);
        expect(toNumber("-0.")).toEqual(-0);
        expect(toNumber("1.")  ).toEqual(1);
        expect(toNumber("00.00")).toEqual(0);
        expect(toNumber("0.06")).toEqual(0.06);
        expect(toNumber("00.6")).toEqual(0.6);
        expect(toNumber(".006")).toEqual(0.006);
        expect(toNumber("6.0")).toEqual(6);
        expect(toNumber("06.0")).toEqual(6);
        
        expect(toNumber("0.0",  { leadingZeros :  false})).toEqual(0);
        expect(toNumber("00.00",  { leadingZeros :  false})).toEqual("00.00");
        expect(toNumber("0.06",  { leadingZeros :  false})).toEqual(0.06);
        expect(toNumber("00.6",  { leadingZeros :  false})).toEqual("00.6");
        expect(toNumber(".006", { leadingZeros :  false})).toEqual(0.006);
        expect(toNumber("6.0"  ,  { leadingZeros :  false})).toEqual(6);
        expect(toNumber("06.0"  ,  { leadingZeros :  false})).toEqual("06.0");
    })
    it("negative number  leading zeros", () => {
        expect(toNumber("+06")).toEqual(6);
        expect(toNumber("-06")).toEqual(-6);
        expect(toNumber("-06", { leadingZeros :  true})).toEqual(-6);
        expect(toNumber("-06", { leadingZeros :  false})).toEqual("-06");
        
        expect(toNumber("-0.0")).toEqual(-0);
        expect(toNumber("-00.00")).toEqual(-0);
        expect(toNumber("-0.06")).toEqual(-0.06);
        expect(toNumber("-00.6")).toEqual(-0.6);
        expect(toNumber("-.006")).toEqual(-0.006);
        expect(toNumber("-6.0")).toEqual(-6);
        expect(toNumber("-06.0")).toEqual(-6);
        
        expect(toNumber("-0.0"   ,  { leadingZeros :  false})).toEqual(-0);
        expect(toNumber("-00.00",  { leadingZeros :  false})).toEqual("-00.00");
        expect(toNumber("-0.06",  { leadingZeros :  false})).toEqual(-0.06);
        expect(toNumber("-00.6",  { leadingZeros :  false})).toEqual("-00.6");
        expect(toNumber("-.006",  {leadingZeros :  false})).toEqual(-0.006);
        expect(toNumber("-6.0"  ,  { leadingZeros :  false})).toEqual(-6);
        expect(toNumber("-06.0"  ,  { leadingZeros :  false})).toEqual("-06.0");
    })
    it("long number", () => {
        expect(toNumber("020211201030005811824")  ).toEqual("020211201030005811824");
        expect(toNumber("20211201030005811824")  ).toEqual("20211201030005811824");
        expect(toNumber("20.211201030005811824")  ).toEqual("20.211201030005811824");
        expect(toNumber("0.211201030005811824")  ).toEqual("0.211201030005811824");
    });
    it("scientific notation", () => {
        expect(toNumber("01.0e2"  ,  { leadingZeros :  false})).toEqual("01.0e2");
        expect(toNumber("-01.0e2"  ,  { leadingZeros :  false})).toEqual("-01.0e2");
        expect(toNumber("01.0e2") ).toEqual(100);
        expect(toNumber("-01.0e2") ).toEqual(-100);
        expect(toNumber("1.0e2") ).toEqual(100);

        expect(toNumber("-1.0e2") ).toEqual(-100);
        expect(toNumber("1.0e-2")).toEqual(0.01);
        
        expect(toNumber("420926189200190257681175017717")  ).toEqual(4.209261892001902e+29);
        expect(toNumber("420926189200190257681175017717" , { eNotation: false} )).toEqual("420926189200190257681175017717");
        
        expect(toNumber("1e-2")).toEqual(0.01);
        expect(toNumber("1e+2")).toEqual(100);
        expect(toNumber("1.e+2")).toEqual(100);
    });

    it("scientific notation with upper E", () => {
        expect(toNumber("01.0E2"  ,  { leadingZeros :  false})).toEqual("01.0E2");
        expect(toNumber("-01.0E2"  ,  { leadingZeros :  false})).toEqual("-01.0E2");
        expect(toNumber("01.0E2") ).toEqual(100);
        expect(toNumber("-01.0E2") ).toEqual(-100);
        expect(toNumber("1.0E2") ).toEqual(100);

        expect(toNumber("-1.0E2") ).toEqual(-100);
        expect(toNumber("1.0E-2")).toEqual(0.01);
    });
    
    it("should skip matching pattern", () => {
        expect(toNumber("0", { skipLike: /.*/ })).toEqual("0");
        expect(toNumber("+12", { skipLike: /\+[0-9]{10}/} )).toEqual(12);
        expect(toNumber("12+12", { skipLike: /\+[0-9]{10}/} )).toEqual("12+12");
        expect(toNumber("12+1212121212", { skipLike: /\+[0-9]{10}/} )).toEqual("12+1212121212");
        expect(toNumber("+1212121212") ).toEqual(1212121212);
        expect(toNumber("+1212121212", { skipLike: /\+[0-9]{10}/} )).toEqual("+1212121212");
    })
    it("should not change string if not number", () => {
        expect(toNumber("+12 12")).toEqual("+12 12");
        expect(toNumber("    +12 12   ")).toEqual("    +12 12   ");
    })
    it("should ignore sorrounded spaces ", () => {
        expect(toNumber("   +1212   ")).toEqual(1212);
    })
    
    it("negative numbers", () => {
        expect(toNumber("+1212")).toEqual(1212);
        expect(toNumber("+12.12")).toEqual(12.12);
        expect(toNumber("-12.12")).toEqual(-12.12);
        expect(toNumber("-012.12")).toEqual(-12.12);
        expect(toNumber("-012.12")).toEqual(-12.12);
    })
});
