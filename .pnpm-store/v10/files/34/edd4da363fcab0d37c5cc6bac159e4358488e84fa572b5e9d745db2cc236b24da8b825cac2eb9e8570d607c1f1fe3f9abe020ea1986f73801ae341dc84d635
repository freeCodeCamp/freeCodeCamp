var compressionTests = function(compress, decompress, uint8array_mode) {
    it('compresses and decompresses  "Hello world!"', function() {
        var compressed = compress('Hello world!');
        expect(compressed).not.toBe('Hello world!');
        var decompressed = decompress(compressed);
        expect(decompressed).toBe('Hello world!');
    });

    it('compresses and decompresses null', function() {
        var compressed = compress(null);
        if (uint8array_mode===false){
            expect(compressed).toBe('');
            expect(typeof compressed).toBe(typeof '');
        } else {    //uint8array
            expect(compressed instanceof Uint8Array).toBe(true);
            expect(compressed.length).toBe(0);  //empty array
        }
        var decompressed = decompress(compressed);
        expect(decompressed).toBe(null);
    });

    it('compresses and decompresses undefined', function() {
        var compressed = compress();
        if (uint8array_mode===false){
            expect(compressed).toBe('');
            expect(typeof compressed).toBe(typeof '');
        } else {    //uint8array
            expect(compressed instanceof Uint8Array).toBe(true);
            expect(compressed.length).toBe(0);  //empty array
        }
        var decompressed = decompress(compressed);
        expect(decompressed).toBe(null);
    });

    it('decompresses null', function() {
        var decompressed = decompress(null);
        expect(decompressed).toBe('');
    });

    it('compresses and decompresses an empty string', function() {
        var compressed = compress('');
        if (uint8array_mode===false){
            expect(compressed).not.toBe('');
            expect(typeof compressed).toBe(typeof '');
        } else {    //uint8array
            expect(compressed instanceof Uint8Array).toBe(true);
            expect(compressed.length).not.toBe(0);  //not an empty array when compress
        }
        var decompressed = decompress(compressed);
        expect(decompressed).toBe('');
    });

    it('compresses and decompresses all printable UTF-16 characters',
        function() {
        var testString = '';
        var i;
        for (i = 32; i < 127; ++i) {
            testString += String.fromCharCode(i);
        }
        for (i = 128 + 32; i < 55296; ++i) {
            testString += String.fromCharCode(i);
        }
        for (i = 63744; i < 65536; ++i) {
            testString += String.fromCharCode(i);
        }
        var compressed = compress(testString);
        expect(compressed).not.toBe(testString);
        var decompressed = decompress(compressed);
        expect(decompressed).toBe(testString);
    });

    it('compresses and decompresses a string that repeats',
        function() {
        var testString = 'aaaaabaaaaacaaaaadaaaaaeaaaaa';
        var compressed = compress(testString);
        expect(compressed).not.toBe(testString);
        expect(compressed.length).toBeLessThan(testString.length);
        var decompressed = decompress(compressed);
        expect(decompressed).toBe(testString);
    });

    it('compresses and decompresses a long string',
        function() {
        var testString = '';
        var i;
        for (i=0 ; i<1000 ; i++)
          testString += Math.random() + " ";

        var compressed = compress(testString);
        expect(compressed).not.toBe(testString);
        expect(compressed.length).toBeLessThan(testString.length);
        var decompressed = decompress(compressed);
        expect(decompressed).toBe(testString);
    });
};

describe('LZString', function() {
    describe('base 64', function() {
        compressionTests(LZString.compressToBase64
                         ,LZString.decompressFromBase64
                         ,false //uint8array_mode: false
                         );
    });
    describe('UTF-16', function() {
        compressionTests(LZString.compressToUTF16
                         ,LZString.decompressFromUTF16
                         ,false //uint8array_mode: false
                         );
    });
    describe('URI Encoded', function() {
        compressionTests(LZString.compressToEncodedURIComponent
                         ,LZString.decompressFromEncodedURIComponent
                         ,false //uint8array_mode: false
                         );
    });
    describe('uint8array', function() {
        compressionTests(LZString.compressToUint8Array
                         ,LZString.decompressFromUint8Array
                         ,true  //uint8array_mode: true
                         );
    });
    describe('raw', function() {
        compressionTests(LZString.compress
                         ,LZString.decompress
                         ,false  //uint8array_mode: false
                         );
    });
});


describe('Specific URL Encoded', function() {
    it("check that all chars are URL safe", function() {
        var testString = '';
        var i;
        for (i=0 ; i<1000 ; i++)
          testString += Math.random() + " ";

        var compressed = LZString.compressToEncodedURIComponent(testString);
        expect(compressed.indexOf("=")).toBe(-1);
        expect(compressed.indexOf("/")).toBe(-1);
        var decompressed = LZString.decompressFromEncodedURIComponent(compressed);
        expect(decompressed).toBe(testString);
    });
    it("check that + and ' ' are interchangeable in decompression", function() {
        var decompressed = 'During tattooing, ink is injected into the skin, initiating an immune response, and cells called "macrophages" move into the area and "eat up" the ink. The macrophages carry some of the ink to the body\'s lymph nodes, but some that are filled with ink stay put, embedded in the skin. That\'s what makes the tattoo visible under the skin. Dalhousie Uiversity\'s Alec Falkenham is developing a topical cream that works by targeting the macrophages that have remained at the site of the tattoo. New macrophages move in to consume the previously pigment-filled macrophages and then migrate to the lymph nodes, eventually taking all the dye with them. "When comparing it to laser-based tattoo removal, in which you see the burns, the scarring, the blisters, in this case, we\'ve designed a drug that doesn\'t really have much off-target effect," he said. "We\'re not targeting any of the normal skin cells, so you won\'t see a lot of inflammation. In fact, based on the process that we\'re actually using, we don\'t think there will be any inflammation at all and it would actually be anti-inflammatory.';
        var compressed = "CIVwTglgdg5gBAFwIYIQezdGAaO0DWeAznlAFYCmAxghQCanqIAWFcR 0u0ECEKWOEih4AtqJBQ2YCkQAOaKEQq5hDKhQA2mklSTb6cAESikVMGjnMkMWUbii0ANzbQmCVkJlIhUBkYoUOBA5ew9XKHwAOjgAFU9Tc0trW10kMDAAT3Y0UTY0ADMWCMJ3TwAjNDpMgHISTUzRKzgoKtlccpAEHLyWIPS2AogDBgB3XmZSQiJkbLku3ApRcvo6Q2hi9k4oGPiUOrhR627TfFlN5FQMOCcIIghyzTZJNbBNjmgY4H1mNBB7tgAVQgLjA9wQtRIAEEnlQ4AAxfRnKDWUTEOBrFyaSyCHzoOQQPSaODmQJojxBUZoMD4EjlbLIMC2PiwTaJCxWGznCndawuOAyUzQQxBcLsXj5Ipiy7oNAxAByFFGDjMHJS50c-I2TCoiiIIF6YrkMlufyIDTgBJgeSgCAAtEMRiqkpzUr4GOERKIIDAwCg2GU2A0mpNWmsiIsXLaQPoLchtvBY5tqmxxh5iqIYkYAOqsES6prpQS8RBoOCaJDKMB28qVwwy66C5z6bgiI6EyaZP7sCgBirgJS4MVEPQZLBDiqaO60MGtlh3El13CjCg1fnhn1SBg OhgEDwHkYtCyKA1brebTZPlsCRUSaFAp2xnMuAUAoFagIbD2TxEJAQOgs2zVcZBaNBumfCgWUTKBskKTZWjAUxiQ fMtB0XAiDLLsQEORQzx7NgfGxbp4OgAoK3EARFBiABJEQCjML84FrZQGEUTZjTQDQiBIQ8VxqUCmJjS9gnuWBlzYOh8Ig5gCGKUDxm0FiiNg0gKKQKi A4-plLUPBuipEBNG3GgRItFZfD4O1yMo0x0CyKIgAAA$$";
        var decomp2 = LZString.decompressFromEncodedURIComponent(compressed);
        expect(decompressed).toBe(decomp2);
    });
});


var testEncBinCompat = function(comp, expectedDec, expectedComp) {
  var compressed = comp(expectedDec);
  expect(compressed).toEqual(expectedComp);
};

var testDecBinCompat = function(dec, expectedDec, expectedComp) {
  var decompressed = dec(expectedComp);
  expect(decompressed).toEqual(expectedDec);
};

describe('Binary encoding compatibility tests (optional)', function() {
    it('base64', function() {
        testEncBinCompat(LZString.compressToBase64,
                         'During tattooing, ink is injected into the skin, initiating an immune response, and cells called "macrophages" move into the area and "eat up" the ink. The macrophages carry some of the ink to the body\'s lymph nodes, but some that are filled with ink stay put, embedded in the skin. That\'s what makes the tattoo visible under the skin. Dalhousie Uiversity\'s Alec Falkenham is developing a topical cream that works by targeting the macrophages that have remained at the site of the tattoo. New macrophages move in to consume the previously pigment-filled macrophages and then migrate to the lymph nodes, eventually taking all the dye with them. "When comparing it to laser-based tattoo removal, in which you see the burns, the scarring, the blisters, in this case, we\'ve designed a drug that doesn\'t really have much off-target effect," he said. "We\'re not targeting any of the normal skin cells, so you won\'t see a lot of inflammation. In fact, based on the process that we\'re actually using, we don\'t think there will be any inflammation at all and it would actually be anti-inflammatory.',
                         "CIVwTglgdg5gBAFwIYIQezdGAaO0DWeAznlAFYCmAxghQCanqIAWFcR+0u0ECEKWOEih4AtqJBQ2YCkQAOaKEQq5hDKhQA2mklSTb6cAESikVMGjnMkMWUbii0ANzbQmCVkJlIhUBkYoUOBA5ew9XKHwAOjgAFU9Tc0trW10kMDAAT3Y0UTY0ADMWCMJ3TwAjNDpMgHISTUzRKzgoKtlccpAEHLyWIPS2AogDBgB3XmZSQiJkbLku3ApRcvo6Q2hi9k4oGPiUOrhR627TfFlN5FQMOCcIIghyzTZJNbBNjmgY4H1mNBB7tgAVQgLjA9wQtRIAEEnlQ4AAxfRnKDWUTEOBrFyaSyCHzoOQQPSaODmQJojxBUZoMD4EjlbLIMC2PiwTaJCxWGznCndawuOAyUzQQxBcLsXj5Ipiy7oNAxAByFFGDjMHJS50c/I2TCoiiIIF6YrkMlufyIDTgBJgeSgCAAtEMRiqkpzUr4GOERKIIDAwCg2GU2A0mpNWmsiIsXLaQPoLchtvBY5tqmxxh5iqIYkYAOqsES6prpQS8RBoOCaJDKMB28qVwwy66C5z6bgiI6EyaZP7sCgBirgJS4MVEPQZLBDiqaO60MGtlh3El13CjCg1fnhn1SBg+OhgEDwHkYtCyKA1brebTZPlsCRUSaFAp2xnMuAUAoFagIbD2TxEJAQOgs2zVcZBaNBumfCgWUTKBskKTZWjAUxiQ+fMtB0XAiDLLsQEORQzx7NgfGxbp4OgAoK3EARFBiABJEQCjML84FrZQGEUTZjTQDQiBIQ8VxqUCmJjS9gnuWBlzYOh8Ig5gCGKUDxm0FiiNg0gKKQKi+A4/plLUPBuipEBNG3GgRItFZfD4O1yMo0x0CyKIgA"
                         );
    });
    it('uriEncoding', function() {
        testEncBinCompat(LZString.compressToEncodedURIComponent,
                         'During tattooing, ink is injected into the skin, initiating an immune response, and cells called "macrophages" move into the area and "eat up" the ink. The macrophages carry some of the ink to the body\'s lymph nodes, but some that are filled with ink stay put, embedded in the skin. That\'s what makes the tattoo visible under the skin. Dalhousie Uiversity\'s Alec Falkenham is developing a topical cream that works by targeting the macrophages that have remained at the site of the tattoo. New macrophages move in to consume the previously pigment-filled macrophages and then migrate to the lymph nodes, eventually taking all the dye with them. "When comparing it to laser-based tattoo removal, in which you see the burns, the scarring, the blisters, in this case, we\'ve designed a drug that doesn\'t really have much off-target effect," he said. "We\'re not targeting any of the normal skin cells, so you won\'t see a lot of inflammation. In fact, based on the process that we\'re actually using, we don\'t think there will be any inflammation at all and it would actually be anti-inflammatory.',
                         "CIVwTglgdg5gBAFwIYIQezdGAaO0DWeAznlAFYCmAxghQCanqIAWFcR+0u0ECEKWOEih4AtqJBQ2YCkQAOaKEQq5hDKhQA2mklSTb6cAESikVMGjnMkMWUbii0ANzbQmCVkJlIhUBkYoUOBA5ew9XKHwAOjgAFU9Tc0trW10kMDAAT3Y0UTY0ADMWCMJ3TwAjNDpMgHISTUzRKzgoKtlccpAEHLyWIPS2AogDBgB3XmZSQiJkbLku3ApRcvo6Q2hi9k4oGPiUOrhR627TfFlN5FQMOCcIIghyzTZJNbBNjmgY4H1mNBB7tgAVQgLjA9wQtRIAEEnlQ4AAxfRnKDWUTEOBrFyaSyCHzoOQQPSaODmQJojxBUZoMD4EjlbLIMC2PiwTaJCxWGznCndawuOAyUzQQxBcLsXj5Ipiy7oNAxAByFFGDjMHJS50c-I2TCoiiIIF6YrkMlufyIDTgBJgeSgCAAtEMRiqkpzUr4GOERKIIDAwCg2GU2A0mpNWmsiIsXLaQPoLchtvBY5tqmxxh5iqIYkYAOqsES6prpQS8RBoOCaJDKMB28qVwwy66C5z6bgiI6EyaZP7sCgBirgJS4MVEPQZLBDiqaO60MGtlh3El13CjCg1fnhn1SBg+OhgEDwHkYtCyKA1brebTZPlsCRUSaFAp2xnMuAUAoFagIbD2TxEJAQOgs2zVcZBaNBumfCgWUTKBskKTZWjAUxiQ+fMtB0XAiDLLsQEORQzx7NgfGxbp4OgAoK3EARFBiABJEQCjML84FrZQGEUTZjTQDQiBIQ8VxqUCmJjS9gnuWBlzYOh8Ig5gCGKUDxm0FiiNg0gKKQKi+A4-plLUPBuipEBNG3GgRItFZfD4O1yMo0x0CyKIgA"
                         );
    });
    it('UInt8Array', function() {
        testEncBinCompat(LZString.compressToUint8Array,
                         'During tattooing, ink is injected into the skin, initiating an immune response, and cells called "macrophages" move into the area and "eat up" the ink. The macrophages carry some of the ink to the body\'s lymph nodes, but some that are filled with ink stay put, embedded in the skin. That\'s what makes the tattoo visible under the skin. Dalhousie Uiversity\'s Alec Falkenham is developing a topical cream that works by targeting the macrophages that have remained at the site of the tattoo. New macrophages move in to consume the previously pigment-filled macrophages and then migrate to the lymph nodes, eventually taking all the dye with them. "When comparing it to laser-based tattoo removal, in which you see the burns, the scarring, the blisters, in this case, we\'ve designed a drug that doesn\'t really have much off-target effect," he said. "We\'re not targeting any of the normal skin cells, so you won\'t see a lot of inflammation. In fact, based on the process that we\'re actually using, we don\'t think there will be any inflammation at all and it would actually be anti-inflammatory.',
                          new Uint8Array([8,133,112,78,9,96,118,14,96,4,1,112,33,130,16,123,55,70,1,163,180,13,103,128,206,121,64,21,128,166,3,24,33,64,38,167,168,128,22,21,196,126,210,237,4,8,66,150,56,72,161,224,11,106,36,20,54,96,41,16,0,230,138,17,10,185,132,50,161,64,13,166,146,84,147,111,167,0,17,40,164,84,193,163,156,201,12,89,70,226,139,64,13,205,180,38,9,89,9,148,136,84,6,70,40,80,224,64,229,236,61,92,161,240,0,232,224,0,85,61,77,205,45,173,109,116,144,192,192,1,61,216,209,68,216,208,0,204,88,35,9,221,60,0,140,208,233,50,1,200,73,53,51,68,172,224,160,171,101,113,202,64,16,114,242,88,131,210,216,10,32,12,24,1,221,121,153,73,8,137,145,178,228,187,112,41,69,203,232,233,13,161,139,217,56,160,99,226,80,234,225,71,173,187,77,241,101,55,145,80,48,224,156,32,136,33,203,52,217,36,214,193,54,57,160,99,129,245,152,208,65,238,216,0,85,8,11,140,15,112,66,212,72,0,65,39,149,14,0,3,23,209,156,160,214,81,49,14,6,177,114,105,44,130,31,58,14,65,3,210,104,224,230,64,154,35,196,21,25,160,192,248,18,57,91,44,131,2,216,248,176,77,162,66,197,97,179,156,41,221,107,11,142,3,37,51,65,12,65,112,187,23,143,146,41,139,46,232,52,12,64,7,33,69,24,56,204,28,148,185,209,207,200,217,48,168,138,34,8,23,166,43,144,201,110,127,34,3,78,0,73,129,228,160,8,0,45,16,196,98,170,74,115,82,190,6,56,68,74,32,128,192,192,40,54,25,77,128,210,106,77,90,107,34,34,197,203,105,3,232,45,200,109,188,22,57,182,169,177,198,30,98,168,134,36,96,3,170,176,68,186,166,186,80,75,196,65,160,224,154,36,50,140,7,111,42,87,12,50,235,160,185,207,166,224,136,142,132,201,166,79,238,192,160,6,42,224,37,46,12,84,67,208,100,176,67,138,166,142,235,67,6,182,88,119,18,93,119,10,48,160,213,249,225,159,84,129,131,227,161,128,64,240,30,70,45,11,34,128,213,186,222,109,54,79,150,192,145,81,38,133,2,157,177,156,203,128,80,10,5,106,2,27,15,100,241,16,144,16,58,11,54,205,87,25,5,163,65,186,103,194,129,101,19,40,27,36,41,54,86,140,5,49,137,15,159,50,208,116,92,8,131,44,187,16,16,228,80,207,30,205,129,241,177,110,158,14,128,10,10,220,64,17,20,24,128,4,145,16,10,51,11,243,129,107,101,1,132,81,54,99,77,0,208,136,18,16,241,92,106,80,41,137,141,47,96,158,229,129,151,54,14,135,194,32,230,0,134,41,64,241,155,65,98,136,216,52,128,162,144,42,47,128,227,250,101,45,67,193,186,42,68,4,209,183,26,4,72,180,86,95,15,131,181,200,202,52,199,64,178,40,136,0,0])
                         );
    });
    it('UTF16', function() {
        testEncBinCompat(LZString.compressToUTF16,
                         'During tattooing, ink is injected into the skin, initiating an immune response, and cells called "macrophages" move into the area and "eat up" the ink. The macrophages carry some of the ink to the body\'s lymph nodes, but some that are filled with ink stay put, embedded in the skin. That\'s what makes the tattoo visible under the skin. Dalhousie Uiversity\'s Alec Falkenham is developing a topical cream that works by targeting the macrophages that have remained at the site of the tattoo. New macrophages move in to consume the previously pigment-filled macrophages and then migrate to the lymph nodes, eventually taking all the dye with them. "When comparing it to laser-based tattoo removal, in which you see the burns, the scarring, the blisters, in this case, we\'ve designed a drug that doesn\'t really have much off-target effect," he said. "We\'re not targeting any of the normal skin cells, so you won\'t see a lot of inflammation. In fact, based on the process that we\'re actually using, we don\'t think there will be any inflammation at all and it would actually be anti-inflammatory.',
                         "\u0462\u5C33\u414C\u0780\u7320\u1025\u6063\u0230\u3DBB\u51A0\u3496\u40F6\u3C26\u3A05K\u00C6\u01AC\u0870\u04F4\u7AA8\u00D0\u5731\u7DC5\u6D24\u0441\u25AE\u0934\u1E20\u5B71\u1070\u6CE0\u2930\u0093\u22A4\u2177\u1863\u152AV\u4D44\u54B3\u37F3\u4024\u2534\u456C\u0D3C\u7344\u18D2\u4702\u45C0\u0393\u36A4\u60B5\u486C\u5241\u282C\u4648\u2890\u1059\u3DA7\u55EA\u0FA0\u03C3\u4020\u555D\u2706\u4B8B\u2DCE\u492C\u0620\u0517\u31C2\u44F8\u6820\u3336\u0481\u1DF3\u6024\u3363\u5284\u01E8\u24BA\u4CF1\u15BC\u0A2A\u5B4B\u4749@\u7312\u2C61\u74D6\u0164\u00E1\u402E\u7606\u32B2\u08A9\u48F9\u394E\u6E25\u147C\u5F67\u2456\u4337\u5958\u5051\u78B4\u1D7C\u149A\u6DFA\u37E5\u4A8F\u1170\u1890\u2728\u1124\u1CD3\u26E9\u137B\u028C\u39C0\u31E0\u7D86\u1A28\u1F0D\u4022\u5440\u1738\u0F90\u218A\u1220\u0844\u7970\u7020\u0C7F\u2359\u20F6\u28B8\u43A1\u564E\u26B2\u6430\u7D08\u1CA2\u03F2\u3490\u39B0\u1364\u3C61\u28ED\u0323\u7044\u397B\u1661\u40D6\u1F36\u04FA\u1236\u15A6\u6758\u29FD\u35A5\u63A0\u64C6\u3430\u622B\u430C\u2F3F\u1249\u45B7\u3A2D\u01A8\u0092\u0A48\u6103\u1859\u14D9\u6907\u7256\u2635\u08C2\u1060\u5EB8\u5741\u498E\u3FB1\u00F3\u4029\u183E\u2520\u2020\u5A41\u4482\u5545\u1CF4\u57E0\u63A4\u2271\u0223\u01A0\u2856\u0CC6\u6054\u4D69\u55C6\u5931\u0B37\u16F2\u0408\u1704\u1B8F\u02E7\u1B8A\u4DAE\u1899\u4571\u0644\u3021\u6ACC\u08B7\u2A8B\u52A2\u2F31\u0361\u60BA\u1239\u2321\u6E05\u2590\u61B7\u2EA2\u73BF\u2700\u4467\u2152\u34E9\u7F0C\u0520\u18CB\u406A\u2E2C\u2A41\u7439\u1628\u38CA\u3497\u2D2C\u0D8C\u5897\u094E\u5DE2\u4634\u0D7F\u4F2C\u7D72\u0327\u63C1\u4040\u3C27\u48E5\u50D2\u1426\u570B\u3CFA\u366F\u4B80\u2474\u24F0\u5049\u6DAC\u734E\u00C0\u0A25\u3521\u06E3\u6CBE\u1129\u00A1\u684C\u6DBA\u5739\u02F1\u508E\u4D18\u2836\u28B9\u208C\u4872\u3676\u4622\u4C82\u2213\u734D\u03C2\u7042\u0679\u3B30\u0892\u1453\u63F9\u583F\u0DAB\u3A98\u1D20\u0A2A\u6E40\u0465\u0330i\u08A0\u28EC\u1807\u018B\u32A0\u6134\u26EC\u34F0\u06A4\u2068\u2202\u5C8A\u2834\u6283\u260C\u0A0E\u2C2C\u5CF8\u1D2F\u4240\u7320\u21AA\u283E\u19D4\u0B34\u2380\u6921\u22B0\u1537\u6058\u7F6C\u52F4\u1E2D\u68C9\u0829\u51D7\u0D22\u124D\u0AEB\u7118\u1DCE\u2348\u69AE\u40D2\u1464\u0020\u0020"
                         );
    });
});
describe('Binary decoding compatibility tests (mandatory)', function() {
    it('base64 - old encoding', function() {
        testDecBinCompat(LZString.decompressFromBase64,
                         'During tattooing, ink is injected into the skin, initiating an immune response, and cells called "macrophages" move into the area and "eat up" the ink. The macrophages carry some of the ink to the body\'s lymph nodes, but some that are filled with ink stay put, embedded in the skin. That\'s what makes the tattoo visible under the skin. Dalhousie Uiversity\'s Alec Falkenham is developing a topical cream that works by targeting the macrophages that have remained at the site of the tattoo. New macrophages move in to consume the previously pigment-filled macrophages and then migrate to the lymph nodes, eventually taking all the dye with them. "When comparing it to laser-based tattoo removal, in which you see the burns, the scarring, the blisters, in this case, we\'ve designed a drug that doesn\'t really have much off-target effect," he said. "We\'re not targeting any of the normal skin cells, so you won\'t see a lot of inflammation. In fact, based on the process that we\'re actually using, we don\'t think there will be any inflammation at all and it would actually be anti-inflammatory.',
                         "CIVwTglgdg5gBAFwIYIQezdGAaO0DWeAznlAFYCmAxghQCanqIAWFcR+0u0ECEKWOEih4AtqJBQ2YCkQAOaKEQq5hDKhQA2mklSTb6cAESikVMGjnMkMWUbii0ANzbQmCVkJlIhUBkYoUOBA5ew9XKHwAOjgAFU9Tc0trW10kMDAAT3Y0UTY0ADMWCMJ3TwAjNDpMgHISTUzRKzgoKtlccpAEHLyWIPS2AogDBgB3XmZSQiJkbLku3ApRcvo6Q2hi9k4oGPiUOrhR627TfFlN5FQMOCcIIghyzTZJNbBNjmgY4H1mNBB7tgAVQgLjA9wQtRIAEEnlQ4AAxfRnKDWUTEOBrFyaSyCHzoOQQPSaODmQJojxBUZoMD4EjlbLIMC2PiwTaJCxWGznCndawuOAyUzQQxBcLsXj5Ipiy7oNAxAByFFGDjMHJS50c/I2TCoiiIIF6YrkMlufyIDTgBJgeSgCAAtEMRiqkpzUr4GOERKIIDAwCg2GU2A0mpNWmsiIsXLaQPoLchtvBY5tqmxxh5iqIYkYAOqsES6prpQS8RBoOCaJDKMB28qVwwy66C5z6bgiI6EyaZP7sCgBirgJS4MVEPQZLBDiqaO60MGtlh3El13CjCg1fnhn1SBg+OhgEDwHkYtCyKA1brebTZPlsCRUSaFAp2xnMuAUAoFagIbD2TxEJAQOgs2zVcZBaNBumfCgWUTKBskKTZWjAUxiQ+fMtB0XAiDLLsQEORQzx7NgfGxbp4OgAoK3EARFBiABJEQCjML84FrZQGEUTZjTQDQiBIQ8VxqUCmJjS9gnuWBlzYOh8Ig5gCGKUDxm0FiiNg0gKKQKi+A4/plLUPBuipEBNG3GgRItFZfD4O1yMo0x0CyKIgAAA=="
                         );
    });
    it('base64', function() {
        testDecBinCompat(LZString.decompressFromBase64,
                         'During tattooing, ink is injected into the skin, initiating an immune response, and cells called "macrophages" move into the area and "eat up" the ink. The macrophages carry some of the ink to the body\'s lymph nodes, but some that are filled with ink stay put, embedded in the skin. That\'s what makes the tattoo visible under the skin. Dalhousie Uiversity\'s Alec Falkenham is developing a topical cream that works by targeting the macrophages that have remained at the site of the tattoo. New macrophages move in to consume the previously pigment-filled macrophages and then migrate to the lymph nodes, eventually taking all the dye with them. "When comparing it to laser-based tattoo removal, in which you see the burns, the scarring, the blisters, in this case, we\'ve designed a drug that doesn\'t really have much off-target effect," he said. "We\'re not targeting any of the normal skin cells, so you won\'t see a lot of inflammation. In fact, based on the process that we\'re actually using, we don\'t think there will be any inflammation at all and it would actually be anti-inflammatory.',
                         "CIVwTglgdg5gBAFwIYIQezdGAaO0DWeAznlAFYCmAxghQCanqIAWFcR+0u0ECEKWOEih4AtqJBQ2YCkQAOaKEQq5hDKhQA2mklSTb6cAESikVMGjnMkMWUbii0ANzbQmCVkJlIhUBkYoUOBA5ew9XKHwAOjgAFU9Tc0trW10kMDAAT3Y0UTY0ADMWCMJ3TwAjNDpMgHISTUzRKzgoKtlccpAEHLyWIPS2AogDBgB3XmZSQiJkbLku3ApRcvo6Q2hi9k4oGPiUOrhR627TfFlN5FQMOCcIIghyzTZJNbBNjmgY4H1mNBB7tgAVQgLjA9wQtRIAEEnlQ4AAxfRnKDWUTEOBrFyaSyCHzoOQQPSaODmQJojxBUZoMD4EjlbLIMC2PiwTaJCxWGznCndawuOAyUzQQxBcLsXj5Ipiy7oNAxAByFFGDjMHJS50c/I2TCoiiIIF6YrkMlufyIDTgBJgeSgCAAtEMRiqkpzUr4GOERKIIDAwCg2GU2A0mpNWmsiIsXLaQPoLchtvBY5tqmxxh5iqIYkYAOqsES6prpQS8RBoOCaJDKMB28qVwwy66C5z6bgiI6EyaZP7sCgBirgJS4MVEPQZLBDiqaO60MGtlh3El13CjCg1fnhn1SBg+OhgEDwHkYtCyKA1brebTZPlsCRUSaFAp2xnMuAUAoFagIbD2TxEJAQOgs2zVcZBaNBumfCgWUTKBskKTZWjAUxiQ+fMtB0XAiDLLsQEORQzx7NgfGxbp4OgAoK3EARFBiABJEQCjML84FrZQGEUTZjTQDQiBIQ8VxqUCmJjS9gnuWBlzYOh8Ig5gCGKUDxm0FiiNg0gKKQKi+A4/plLUPBuipEBNG3GgRItFZfD4O1yMo0x0CyKIgA"
                         );
    });
    it('uriEncoding - old encoding', function() {
        testDecBinCompat(LZString.decompressFromEncodedURIComponent,
                         'During tattooing, ink is injected into the skin, initiating an immune response, and cells called "macrophages" move into the area and "eat up" the ink. The macrophages carry some of the ink to the body\'s lymph nodes, but some that are filled with ink stay put, embedded in the skin. That\'s what makes the tattoo visible under the skin. Dalhousie Uiversity\'s Alec Falkenham is developing a topical cream that works by targeting the macrophages that have remained at the site of the tattoo. New macrophages move in to consume the previously pigment-filled macrophages and then migrate to the lymph nodes, eventually taking all the dye with them. "When comparing it to laser-based tattoo removal, in which you see the burns, the scarring, the blisters, in this case, we\'ve designed a drug that doesn\'t really have much off-target effect," he said. "We\'re not targeting any of the normal skin cells, so you won\'t see a lot of inflammation. In fact, based on the process that we\'re actually using, we don\'t think there will be any inflammation at all and it would actually be anti-inflammatory.',
                         "CIVwTglgdg5gBAFwIYIQezdGAaO0DWeAznlAFYCmAxghQCanqIAWFcR+0u0ECEKWOEih4AtqJBQ2YCkQAOaKEQq5hDKhQA2mklSTb6cAESikVMGjnMkMWUbii0ANzbQmCVkJlIhUBkYoUOBA5ew9XKHwAOjgAFU9Tc0trW10kMDAAT3Y0UTY0ADMWCMJ3TwAjNDpMgHISTUzRKzgoKtlccpAEHLyWIPS2AogDBgB3XmZSQiJkbLku3ApRcvo6Q2hi9k4oGPiUOrhR627TfFlN5FQMOCcIIghyzTZJNbBNjmgY4H1mNBB7tgAVQgLjA9wQtRIAEEnlQ4AAxfRnKDWUTEOBrFyaSyCHzoOQQPSaODmQJojxBUZoMD4EjlbLIMC2PiwTaJCxWGznCndawuOAyUzQQxBcLsXj5Ipiy7oNAxAByFFGDjMHJS50c-I2TCoiiIIF6YrkMlufyIDTgBJgeSgCAAtEMRiqkpzUr4GOERKIIDAwCg2GU2A0mpNWmsiIsXLaQPoLchtvBY5tqmxxh5iqIYkYAOqsES6prpQS8RBoOCaJDKMB28qVwwy66C5z6bgiI6EyaZP7sCgBirgJS4MVEPQZLBDiqaO60MGtlh3El13CjCg1fnhn1SBg+OhgEDwHkYtCyKA1brebTZPlsCRUSaFAp2xnMuAUAoFagIbD2TxEJAQOgs2zVcZBaNBumfCgWUTKBskKTZWjAUxiQ+fMtB0XAiDLLsQEORQzx7NgfGxbp4OgAoK3EARFBiABJEQCjML84FrZQGEUTZjTQDQiBIQ8VxqUCmJjS9gnuWBlzYOh8Ig5gCGKUDxm0FiiNg0gKKQKi+A4-plLUPBuipEBNG3GgRItFZfD4O1yMo0x0CyKIgA"
                         );
    });
    it('uriEncoding', function() {
        testDecBinCompat(LZString.decompressFromEncodedURIComponent,
                         'During tattooing, ink is injected into the skin, initiating an immune response, and cells called "macrophages" move into the area and "eat up" the ink. The macrophages carry some of the ink to the body\'s lymph nodes, but some that are filled with ink stay put, embedded in the skin. That\'s what makes the tattoo visible under the skin. Dalhousie Uiversity\'s Alec Falkenham is developing a topical cream that works by targeting the macrophages that have remained at the site of the tattoo. New macrophages move in to consume the previously pigment-filled macrophages and then migrate to the lymph nodes, eventually taking all the dye with them. "When comparing it to laser-based tattoo removal, in which you see the burns, the scarring, the blisters, in this case, we\'ve designed a drug that doesn\'t really have much off-target effect," he said. "We\'re not targeting any of the normal skin cells, so you won\'t see a lot of inflammation. In fact, based on the process that we\'re actually using, we don\'t think there will be any inflammation at all and it would actually be anti-inflammatory.',
                         "CIVwTglgdg5gBAFwIYIQezdGAaO0DWeAznlAFYCmAxghQCanqIAWFcR+0u0ECEKWOEih4AtqJBQ2YCkQAOaKEQq5hDKhQA2mklSTb6cAESikVMGjnMkMWUbii0ANzbQmCVkJlIhUBkYoUOBA5ew9XKHwAOjgAFU9Tc0trW10kMDAAT3Y0UTY0ADMWCMJ3TwAjNDpMgHISTUzRKzgoKtlccpAEHLyWIPS2AogDBgB3XmZSQiJkbLku3ApRcvo6Q2hi9k4oGPiUOrhR627TfFlN5FQMOCcIIghyzTZJNbBNjmgY4H1mNBB7tgAVQgLjA9wQtRIAEEnlQ4AAxfRnKDWUTEOBrFyaSyCHzoOQQPSaODmQJojxBUZoMD4EjlbLIMC2PiwTaJCxWGznCndawuOAyUzQQxBcLsXj5Ipiy7oNAxAByFFGDjMHJS50c-I2TCoiiIIF6YrkMlufyIDTgBJgeSgCAAtEMRiqkpzUr4GOERKIIDAwCg2GU2A0mpNWmsiIsXLaQPoLchtvBY5tqmxxh5iqIYkYAOqsES6prpQS8RBoOCaJDKMB28qVwwy66C5z6bgiI6EyaZP7sCgBirgJS4MVEPQZLBDiqaO60MGtlh3El13CjCg1fnhn1SBg+OhgEDwHkYtCyKA1brebTZPlsCRUSaFAp2xnMuAUAoFagIbD2TxEJAQOgs2zVcZBaNBumfCgWUTKBskKTZWjAUxiQ+fMtB0XAiDLLsQEORQzx7NgfGxbp4OgAoK3EARFBiABJEQCjML84FrZQGEUTZjTQDQiBIQ8VxqUCmJjS9gnuWBlzYOh8Ig5gCGKUDxm0FiiNg0gKKQKi+A4-plLUPBuipEBNG3GgRItFZfD4O1yMo0x0CyKIgAAA$$"
                         );
    });
    it('UInt8Array', function() {
        testDecBinCompat(LZString.decompressFromUint8Array,
                         'During tattooing, ink is injected into the skin, initiating an immune response, and cells called "macrophages" move into the area and "eat up" the ink. The macrophages carry some of the ink to the body\'s lymph nodes, but some that are filled with ink stay put, embedded in the skin. That\'s what makes the tattoo visible under the skin. Dalhousie Uiversity\'s Alec Falkenham is developing a topical cream that works by targeting the macrophages that have remained at the site of the tattoo. New macrophages move in to consume the previously pigment-filled macrophages and then migrate to the lymph nodes, eventually taking all the dye with them. "When comparing it to laser-based tattoo removal, in which you see the burns, the scarring, the blisters, in this case, we\'ve designed a drug that doesn\'t really have much off-target effect," he said. "We\'re not targeting any of the normal skin cells, so you won\'t see a lot of inflammation. In fact, based on the process that we\'re actually using, we don\'t think there will be any inflammation at all and it would actually be anti-inflammatory.',
                          new Uint8Array([8,133,112,78,9,96,118,14,96,4,1,112,33,130,16,123,55,70,1,163,180,13,103,128,206,121,64,21,128,166,3,24,33,64,38,167,168,128,22,21,196,126,210,237,4,8,66,150,56,72,161,224,11,106,36,20,54,96,41,16,0,230,138,17,10,185,132,50,161,64,13,166,146,84,147,111,167,0,17,40,164,84,193,163,156,201,12,89,70,226,139,64,13,205,180,38,9,89,9,148,136,84,6,70,40,80,224,64,229,236,61,92,161,240,0,232,224,0,85,61,77,205,45,173,109,116,144,192,192,1,61,216,209,68,216,208,0,204,88,35,9,221,60,0,140,208,233,50,1,200,73,53,51,68,172,224,160,171,101,113,202,64,16,114,242,88,131,210,216,10,32,12,24,1,221,121,153,73,8,137,145,178,228,187,112,41,69,203,232,233,13,161,139,217,56,160,99,226,80,234,225,71,173,187,77,241,101,55,145,80,48,224,156,32,136,33,203,52,217,36,214,193,54,57,160,99,129,245,152,208,65,238,216,0,85,8,11,140,15,112,66,212,72,0,65,39,149,14,0,3,23,209,156,160,214,81,49,14,6,177,114,105,44,130,31,58,14,65,3,210,104,224,230,64,154,35,196,21,25,160,192,248,18,57,91,44,131,2,216,248,176,77,162,66,197,97,179,156,41,221,107,11,142,3,37,51,65,12,65,112,187,23,143,146,41,139,46,232,52,12,64,7,33,69,24,56,204,28,148,185,209,207,200,217,48,168,138,34,8,23,166,43,144,201,110,127,34,3,78,0,73,129,228,160,8,0,45,16,196,98,170,74,115,82,190,6,56,68,74,32,128,192,192,40,54,25,77,128,210,106,77,90,107,34,34,197,203,105,3,232,45,200,109,188,22,57,182,169,177,198,30,98,168,134,36,96,3,170,176,68,186,166,186,80,75,196,65,160,224,154,36,50,140,7,111,42,87,12,50,235,160,185,207,166,224,136,142,132,201,166,79,238,192,160,6,42,224,37,46,12,84,67,208,100,176,67,138,166,142,235,67,6,182,88,119,18,93,119,10,48,160,213,249,225,159,84,129,131,227,161,128,64,240,30,70,45,11,34,128,213,186,222,109,54,79,150,192,145,81,38,133,2,157,177,156,203,128,80,10,5,106,2,27,15,100,241,16,144,16,58,11,54,205,87,25,5,163,65,186,103,194,129,101,19,40,27,36,41,54,86,140,5,49,137,15,159,50,208,116,92,8,131,44,187,16,16,228,80,207,30,205,129,241,177,110,158,14,128,10,10,220,64,17,20,24,128,4,145,16,10,51,11,243,129,107,101,1,132,81,54,99,77,0,208,136,18,16,241,92,106,80,41,137,141,47,96,158,229,129,151,54,14,135,194,32,230,0,134,41,64,241,155,65,98,136,216,52,128,162,144,42,47,128,227,250,101,45,67,193,186,42,68,4,209,183,26,4,72,180,86,95,15,131,181,200,202,52,199,64,178,40,136,0,0])
                         );
    });
    it('UTF16', function() {
        testDecBinCompat(LZString.decompressFromUTF16,
                         'During tattooing, ink is injected into the skin, initiating an immune response, and cells called "macrophages" move into the area and "eat up" the ink. The macrophages carry some of the ink to the body\'s lymph nodes, but some that are filled with ink stay put, embedded in the skin. That\'s what makes the tattoo visible under the skin. Dalhousie Uiversity\'s Alec Falkenham is developing a topical cream that works by targeting the macrophages that have remained at the site of the tattoo. New macrophages move in to consume the previously pigment-filled macrophages and then migrate to the lymph nodes, eventually taking all the dye with them. "When comparing it to laser-based tattoo removal, in which you see the burns, the scarring, the blisters, in this case, we\'ve designed a drug that doesn\'t really have much off-target effect," he said. "We\'re not targeting any of the normal skin cells, so you won\'t see a lot of inflammation. In fact, based on the process that we\'re actually using, we don\'t think there will be any inflammation at all and it would actually be anti-inflammatory.',
                         "\u0462\u5C33\u414C\u0780\u7320\u1025\u6063\u0230\u3DBB\u51A0\u3496\u40F6\u3C26\u3A05K\u00C6\u01AC\u0870\u04F4\u7AA8\u00D0\u5731\u7DC5\u6D24\u0441\u25AE\u0934\u1E20\u5B71\u1070\u6CE0\u2930\u0093\u22A4\u2177\u1863\u152AV\u4D44\u54B3\u37F3\u4024\u2534\u456C\u0D3C\u7344\u18D2\u4702\u45C0\u0393\u36A4\u60B5\u486C\u5241\u282C\u4648\u2890\u1059\u3DA7\u55EA\u0FA0\u03C3\u4020\u555D\u2706\u4B8B\u2DCE\u492C\u0620\u0517\u31C2\u44F8\u6820\u3336\u0481\u1DF3\u6024\u3363\u5284\u01E8\u24BA\u4CF1\u15BC\u0A2A\u5B4B\u4749@\u7312\u2C61\u74D6\u0164\u00E1\u402E\u7606\u32B2\u08A9\u48F9\u394E\u6E25\u147C\u5F67\u2456\u4337\u5958\u5051\u78B4\u1D7C\u149A\u6DFA\u37E5\u4A8F\u1170\u1890\u2728\u1124\u1CD3\u26E9\u137B\u028C\u39C0\u31E0\u7D86\u1A28\u1F0D\u4022\u5440\u1738\u0F90\u218A\u1220\u0844\u7970\u7020\u0C7F\u2359\u20F6\u28B8\u43A1\u564E\u26B2\u6430\u7D08\u1CA2\u03F2\u3490\u39B0\u1364\u3C61\u28ED\u0323\u7044\u397B\u1661\u40D6\u1F36\u04FA\u1236\u15A6\u6758\u29FD\u35A5\u63A0\u64C6\u3430\u622B\u430C\u2F3F\u1249\u45B7\u3A2D\u01A8\u0092\u0A48\u6103\u1859\u14D9\u6907\u7256\u2635\u08C2\u1060\u5EB8\u5741\u498E\u3FB1\u00F3\u4029\u183E\u2520\u2020\u5A41\u4482\u5545\u1CF4\u57E0\u63A4\u2271\u0223\u01A0\u2856\u0CC6\u6054\u4D69\u55C6\u5931\u0B37\u16F2\u0408\u1704\u1B8F\u02E7\u1B8A\u4DAE\u1899\u4571\u0644\u3021\u6ACC\u08B7\u2A8B\u52A2\u2F31\u0361\u60BA\u1239\u2321\u6E05\u2590\u61B7\u2EA2\u73BF\u2700\u4467\u2152\u34E9\u7F0C\u0520\u18CB\u406A\u2E2C\u2A41\u7439\u1628\u38CA\u3497\u2D2C\u0D8C\u5897\u094E\u5DE2\u4634\u0D7F\u4F2C\u7D72\u0327\u63C1\u4040\u3C27\u48E5\u50D2\u1426\u570B\u3CFA\u366F\u4B80\u2474\u24F0\u5049\u6DAC\u734E\u00C0\u0A25\u3521\u06E3\u6CBE\u1129\u00A1\u684C\u6DBA\u5739\u02F1\u508E\u4D18\u2836\u28B9\u208C\u4872\u3676\u4622\u4C82\u2213\u734D\u03C2\u7042\u0679\u3B30\u0892\u1453\u63F9\u583F\u0DAB\u3A98\u1D20\u0A2A\u6E40\u0465\u0330i\u08A0\u28EC\u1807\u018B\u32A0\u6134\u26EC\u34F0\u06A4\u2068\u2202\u5C8A\u2834\u6283\u260C\u0A0E\u2C2C\u5CF8\u1D2F\u4240\u7320\u21AA\u283E\u19D4\u0B34\u2380\u6921\u22B0\u1537\u6058\u7F6C\u52F4\u1E2D\u68C9\u0829\u51D7\u0D22\u124D\u0AEB\u7118\u1DCE\u2348\u69AE\u40D2\u1464\u0020\u0020"
                         );
    });
});
