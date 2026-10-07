define(function (require) {
	var tdd = require('intern!tdd');
	
	// Not really Chai but a Chai-compatible "assert" library for old IE.
	var assert = require('intern/chai!assert'); 
	
	// parse-srcset is an AMD module.
	var parseSrcset = require('../../src/parse-srcset');
	
	var he = require('tests/he');
	
	tdd.suite('Parse Srcset', function() {
	
		// Adapted from the W3C srcset conformance checker at:
		// http://w3c-test.org/html/semantics/embedded-content/the-img-element/srcset/parse-a-srcset-attribute.html
		var w3Ctests = [
			{
				groupName: "Splitting Loop",
				testArray: [
					{srcset: '',    expect: '', desc: 'empty string'},
					{srcset: ',' ,  expect: '', desc: 'single comma'},
					{srcset: ',,,', expect: '', desc: 'three commas'},
					{srcset: '&#x9;&#x9;data:,a&#x9;&#x9;1x&#x9;&#x9;', expect: 'data:,a', desc: 'tabs'},
					{srcset: '&#xA;&#xA;data:,a&#xA;&#xA;1x&#xA;&#xA;', expect: 'data:,a', desc: 'line feeds'},
					{srcset: '&#xB;&#xB;data:,a&#xB;&#xB;1x&#xB;&#xB;', expect: '&#xB;&#xB;data:,a&#xB;&#xB;1x&#xB;&#xB;', desc: 'line tab'},
					{srcset: '&#xC;&#xC;data:,a&#xC;&#xC;1x&#xC;&#xC;', expect: 'data:,a', desc: 'form feed U+000C'},
					{srcset: '&#xD;&#xD;data:,a&#xD;&#xD;1x&#xD;&#xD;', expect: 'data:,a', desc: 'carriage return U+000D'},
					{srcset: '&#xE;&#xE;data:,a&#xE;&#xE;1x&#xE;&#xE;', expect: '&#xE;&#xE;data:,a&#xE;&#xE;1x&#xE;&#xE;', desc: 'shift out U+000E'},
					{srcset: '&#xF;&#xF;data:,a&#xF;&#xF;1x&#xF;&#xF;', expect: '&#xF;&#xF;data:,a&#xF;&#xF;1x&#xF;&#xF;', desc: 'shift in U+000F' },
					{srcset: '&#x10;&#x10;data:,a&#x10;&#x10;1x&#x10;&#x10;', expect: '&#x10;&#x10;data:,a&#x10;&#x10;1x&#x10;&#x10;', desc: 'data link escape U+0010' },
					{srcset: 'data:,a',       expect: 'data:,a',       desc:'plain url'},
					{srcset: 'data:,a ',      expect: 'data:,a',       desc:'trailing space'},
					{srcset: 'data:,a ,',     expect: 'data:,a',       desc:'trailing space and comma'},
					{srcset: 'data:,a,',      expect: 'data:,a',       desc:'trailing comma'},
					{srcset: 'data:,a, ',     expect: 'data:,a',       desc:'trailing comma and space'},
					{srcset: 'data:,a,,,',    expect: 'data:,a',       desc:'trailing three commas'},
					{srcset: 'data:,a,, , ',  expect: 'data:,a',       desc:'trailing two commas space comma space'},
					{srcset: ' data:,a',      expect: 'data:,a',       desc:'leading space'},
					{srcset: ',,,data:,a',    expect: 'data:,a',       desc:'leading three commas'},
					{srcset: ' , ,,data:,a',  expect: 'data:,a',       desc:'leading space comma space comma comma'},
					{srcset: '&nbsp;data:,a', expect: '&nbsp;data:,a', desc:'leading non-breaking space'},
					{srcset: 'data:,a&nbsp;', expect: 'data:,a&nbsp;', desc:'trailing non-breaking space'}
				]
			},
		
			{
				groupName: "Descriptor Tokenizer",
				testArray: [
					{srcset: 'data:,a 1x',                           expect: 'data:,a',    desc: 'plain url with descriptor'},
					{srcset: 'data:,a 1x ',                          expect: 'data:,a',    desc: 'trailing space'},
					{srcset: 'data:,a 1x,',                          expect: 'data:,a',    desc: 'trailing comma'},
					{srcset: 'data:,a ( , data:,b 1x, ), data:,c',   expect: 'data:,c',    desc: 'irregular parens 1'},
					{srcset: 'data:,a ((( , data:,b 1x, ), data:,c', expect: 'data:,c',    desc: 'irregular parens 2'},
					{srcset: 'data:,a [ , data:,b 1x, ], data:,c',   expect: 'data:,b',    desc: 'brackets'},
					{srcset: 'data:,a { , data:,b 1x, }, data:,c',   expect: 'data:,b',    desc: 'braces'},
					{srcset: 'data:,a " , data:,b 1x, ", data:,c',   expect: 'data:,b',    desc: 'double quotes'},
					{srcset: 'data:,a \\,data:;\\,b, data:,c',       expect: 'data:;\\,b', desc: 'backslashes'},
					{srcset: 'data:,a, data:,b (',                   expect: 'data:,a',    desc: 'trailing unclosed paren'},
					{srcset: 'data:,a, data:,b (  ',                 expect: 'data:,a',    desc: 'unclosed paren space'},
					{srcset: 'data:,a, data:,b (,',                  expect: 'data:,a',    desc: 'unclosed paren comma'},
					{srcset: 'data:,a, data:,b (x',                  expect: 'data:,a',    desc: 'unclosed paren x'},
					{srcset: 'data:,a, data:,b ()',                  expect: 'data:,a',    desc: 'parens, no descriptor'},
					{srcset: 'data:,a (, data:,b',                   expect: '',           desc: 'unclosed paren'},
					{srcset: 'data:,a /*, data:,b, data:,c */',      expect: 'data:,b',    desc: 'block comments'},
					{srcset: 'data:,a //, data:,b',                  expect: 'data:,b',    desc: 'double slash like a comment'}
				]
			},
			
			{ groupName: "Descriptor Parser",
				testArray : [
					{srcset: 'data:,a foo',        expect: '',        desc: 'trailing foo'},
					{srcset: 'data:,a foo foo',    expect: '',        desc: 'trailing foo foo'},
					{srcset: 'data:,a foo 1x',     expect: '',        desc: 'trailing foo 1x'},
					{srcset: 'data:,a foo 1x foo', expect: '',        desc: 'trailing 1x foo'},
					{srcset: 'data:,a foo 1w',     expect: '',        desc: 'trailing foo 1w'},
					{srcset: 'data:,a foo 1w foo', expect: '',        desc: 'trailing foo 1w foo'},
					{srcset: 'data:,a 1x 1x',      expect: '',        desc: 'two density descriptors'},
					{srcset: 'data:,a 1w 1w',      expect: '',        desc: 'two width descriptors'},
					{srcset: 'data:,a 1h 1h',      expect: '',        desc: 'two height descriptors'},
					{srcset: 'data:,a 1w 1x',      expect: '',        desc: 'width then density'},
					{srcset: 'data:,a 1x 1w',      expect: '',        desc: 'density then width'},
					{srcset: 'data:,a 1w 1h',      expect: 'data:,a', desc: 'width then height'}, 
					{srcset: 'data:,a 1h 1w',      expect: 'data:,a', desc: 'height then width'},
					{srcset: 'data:,a 1h 1x',      expect: '',        desc: 'height then density'},
					{srcset: 'data:,a 1h 1w 1x',   expect: '',        desc: 'height then width then density'},
					{srcset: 'data:,a 1x 1w 1h',   expect: '',        desc: 'density then width then height'},
					{srcset: 'data:,a 1h foo',     expect: '',        desc: 'trailing 1h foo'},
					{srcset: 'data:,a foo 1h',     expect: '',        desc: 'trailing foo 1h'},
					{srcset: 'data:,a 0w',         expect: '',        desc: 'zero width'},
					{srcset: 'data:,a -1w',        expect: '',        desc: 'negative width'},
					{srcset: 'data:,a 1w -1w',     expect: '',        desc: 'positive width, negative width'},
					{srcset: 'data:,a 1.0w',       expect: '',        desc: 'floating point width'},
					{srcset: 'data:,a 1w 1.0w',    expect: '',        desc: 'integer width, floating point width'},
					{srcset: 'data:,a 1e0w',       expect: '',        desc: 'exponent width'},
					{srcset: 'data:,a 1w 1e0w',    expect: '',        desc: 'integer width, exponent width'},
					{srcset: 'data:,a 1www',       expect: '',        desc: '1www'},
					{srcset: 'data:,a 1w 1www',    expect: '',        desc: '1w 1www'},
					{srcset: 'data:,a 1w +1w',     expect: '',        desc: '1w +1w'},
					{srcset: 'data:,a 1W',         expect: '',        desc: 'capital W descriptor'},
					{srcset: 'data:,a 1w 1W',      expect: '',        desc: 'lowercase w, capital W descriptors'},
					{srcset: 'data:,a Infinityw',  expect: '',        desc: 'Infinityw'},
					{srcset: 'data:,a 1w Infinityw', expect: '',      desc: '1w Infinityw'},
					{srcset: 'data:,a NaNw',       expect: '',        desc: 'Nanw'},
					{srcset: 'data:,a 1w NaNw',    expect: '',        desc: '1w Nanw'},
					{srcset: 'data:,a 0x1w',       expect: '',        desc: 'ox1w'},
					{srcset: 'data:,a 1&#x1;w',    expect: '',        desc: 'trailing U+0001'},
					{srcset: 'data:,a 1&nbsp;w',   expect: '',        desc: 'trailing U+00A0'},
					{srcset: 'data:,a 1&#x1680;w', expect: '',        desc: 'trailing U+1680'},
					{srcset: 'data:,a 1&#x2000;w', expect: '',        desc: 'trailing U+2000'},
					{srcset: 'data:,a 1&#x2001;w', expect: '',        desc: 'trailing U+2001'},
					{srcset: 'data:,a 1&#x2002;w', expect: '',        desc: 'trailing U+2002'},
					{srcset: 'data:,a 1&#x2003;w', expect: '',        desc: 'trailing U+2003'},
					{srcset: 'data:,a 1&#x2004;w', expect: '',        desc: 'trailing U+2004'},
					{srcset: 'data:,a 1&#x2005;w', expect: '',        desc: 'trailing U+2005'},
					{srcset: 'data:,a 1&#x2006;w', expect: '',        desc: 'trailing U+2006'},
					{srcset: 'data:,a 1&#x2007;w', expect: '',        desc: 'trailing U+2007'},
					{srcset: 'data:,a 1&#x2008;w', expect: '',        desc: 'trailing U+2008'},
					{srcset: 'data:,a 1&#x2009;w', expect: '',        desc: 'trailing U+2009'},
					{srcset: 'data:,a 1&#x200A;w', expect: '',        desc: 'trailing U+200A'},
					{srcset: 'data:,a 1&#x200C;w', expect: '',        desc: 'trailing U+200C'},
					{srcset: 'data:,a 1&#x200D;w', expect: '',        desc: 'trailing U+200D'},
					{srcset: 'data:,a 1&#x202F;w', expect: '',        desc: 'trailing U+202F'},
					{srcset: 'data:,a 1&#x205F;w', expect: '',        desc: 'trailing U+205F'},
					{srcset: 'data:,a 1&#x3000;w', expect: '',        desc: 'trailing U+3000'},
					{srcset: 'data:,a 1&#xFEFF;w', expect: '',        desc: 'trailing U+FEFF'},
					{srcset: 'data:,a &#x1;1w'   , expect: '',        desc: 'leading U+0001'},
		//			{srcset: 'data:,a &nbsp;1w'  , expect: '',        desc: 'leading U+00A0 width'},
					{srcset: 'data:,a &#x1680;1w', expect: '',        desc: 'leading U+1680'},
					{srcset: 'data:,a &#x2000;1w', expect: '',        desc: 'leading U+2000'},
					{srcset: 'data:,a &#x2001;1w', expect: '',        desc: 'leading U+2001'},
					{srcset: 'data:,a &#x2002;1w', expect: '',        desc: 'leading U+2002'},
					{srcset: 'data:,a &#x2003;1w', expect: '',        desc: 'leading U+2003'},
					{srcset: 'data:,a &#x2004;1w', expect: '',        desc: 'leading U+2004'},
					{srcset: 'data:,a &#x2005;1w', expect: '',        desc: 'leading U+2005'},
					{srcset: 'data:,a &#x2006;1w', expect: '',        desc: 'leading U+2006'},
					{srcset: 'data:,a &#x2007;1w', expect: '',        desc: 'leading U+2007'},
					{srcset: 'data:,a &#x2008;1w', expect: '',        desc: 'leading U+2008'},
					{srcset: 'data:,a &#x2009;1w', expect: '',        desc: 'leading U+2009'},
					{srcset: 'data:,a &#x200A;1w', expect: '',        desc: 'leading U+200A'},
					{srcset: 'data:,a &#x200C;1w', expect: '',        desc: 'leading U+200C'},
					{srcset: 'data:,a &#x200D;1w', expect: '',        desc: 'leading U+200D'},
					{srcset: 'data:,a &#x202F;1w', expect: '',        desc: 'leading U+202F'},
					{srcset: 'data:,a &#x205F;1w', expect: '',        desc: 'leading U+205F'},
					{srcset: 'data:,a &#x3000;1w', expect: '',        desc: 'leading U+3000'},
					{srcset: 'data:,a &#xFEFF;1w', expect: '',        desc: 'leading U+FEFF'},
					{srcset: 'data:,a 0x',         expect: 'data:,a', desc: 'zero density'},
					{srcset: 'data:,a -0x' ,       expect: 'data:,a', desc: 'negative zero density'},
					{srcset: 'data:,a 1x -0x',     expect: '',        desc: '1x -0x'},
					{srcset: 'data:,a -1x',        expect: '',        desc: '-1x'},
					{srcset: 'data:,a 1x -1x',     expect: '',        desc: '1x -1x'},
					{srcset: 'data:,a 1e0x',       expect: 'data:,a', desc: '1e0x'},
					{srcset: 'data:,a 1E0x',       expect: 'data:,a', desc: '1E0x'},
					{srcset: 'data:,a 1e-1x',      expect: 'data:,a', desc: '1e-1x'},
					{srcset: 'data:,a 1.5e1x',     expect: 'data:,a', desc: '1.5e1x'},
					{srcset: 'data:,a -x',         expect: '',        desc: 'negative density with no digits'},
					{srcset: 'data:,a .x',         expect: '',        desc: 'decimal density with no digits'},
					{srcset: 'data:,a -.x',        expect: '',        desc: '-.x'},
					{srcset: 'data:,a 1.x',        expect: '',        desc: '1.x'},
					{srcset: 'data:,a .5x',        expect: 'data:,a', desc: 'floating point density descriptor'},
					{srcset: 'data:,a .5e1x',      expect: 'data:,a', desc: '.5e1x'},
					{srcset: 'data:,a 1x 1.5e1x',  expect: '',        desc: '1x 1.5e1x'},
					{srcset: 'data:,a 1x 1e1.5x',  expect: '',        desc: '1x 1e1.5x'},
					{srcset: 'data:,a 1.0x',       expect: 'data:,a', desc: '1.0x'},
					{srcset: 'data:,a 1x 1.0x',    expect: '',        desc: '1x 1.0x'},
					{srcset: 'data:,a +1x',        expect: '',        desc: 'no plus sign allowed on floating point number'},
					{srcset: 'data:,a 1X',         expect: '',        desc: 'Capital X descriptor'},
					{srcset: 'data:,a Infinityx',  expect: '',        desc: 'Infinityx'},
					{srcset: 'data:,a NaNx',       expect: '',        desc: 'NaNx'},
					{srcset: 'data:,a 0x1x',       expect: '',        desc: '0X1x'},
					{srcset: 'data:,a 0X1x',       expect: '',        desc: '1&#x1;x'},
					{srcset: 'data:,a 1&#x1;x',    expect: '',        desc: 'trailing U+0001'},
					{srcset: 'data:,a 1&nbsp;x'  , expect: '',        desc: 'trailing U+00A0 density'},
					{srcset: 'data:,a 1&#x1680;x', expect: '',        desc: 'trailing U+1680'},
					{srcset: 'data:,a 1&#x2000;x', expect: '',        desc: 'trailing U+2000'},
					{srcset: 'data:,a 1&#x2001;x', expect: '',        desc: 'trailing U+2001'},
					{srcset: 'data:,a 1&#x2002;x', expect: '',        desc: 'trailing U+2002'},
					{srcset: 'data:,a 1&#x2003;x', expect: '',        desc: 'trailing U+2003'},
					{srcset: 'data:,a 1&#x2004;x', expect: '',        desc: 'trailing U+2004'},
					{srcset: 'data:,a 1&#x2005;x', expect: '',        desc: 'trailing U+2005'},
					{srcset: 'data:,a 1&#x2006;x', expect: '',        desc: 'trailing U+2006'},
					{srcset: 'data:,a 1&#x2007;x', expect: '',        desc: 'trailing U+2007'},
					{srcset: 'data:,a 1&#x2008;x', expect: '',        desc: 'trailing U+2008'},
					{srcset: 'data:,a 1&#x2009;x', expect: '',        desc: 'trailing U+2009'},
					{srcset: 'data:,a 1&#x200A;x', expect: '',        desc: 'trailing U+200A'},
					{srcset: 'data:,a 1&#x200C;x', expect: '',        desc: 'trailing U+200C'},
					{srcset: 'data:,a 1&#x200D;x', expect: '',        desc: 'trailing U+200D'},
					{srcset: 'data:,a 1&#x202F;x', expect: '',        desc: 'trailing U+202F'},
					{srcset: 'data:,a 1&#x205F;x', expect: '',        desc: 'trailing U+205F'},
					{srcset: 'data:,a 1&#x3000;x', expect: '',        desc: 'trailing U+3000'},
					{srcset: 'data:,a 1&#xFEFF;x', expect: '',        desc: 'trailing U+FEFF'},
					{srcset: 'data:,a &#x1;1x' ,   expect: '',        desc: 'leading U+0001'},
					{srcset: 'data:,a &nbsp;1x' ,  expect: '',        desc: 'leading U+00A0 density'},
					{srcset: 'data:,a &#x1680;1x', expect: '',        desc: 'leading U+1680'},
					{srcset: 'data:,a &#x2000;1x', expect: '',        desc: 'leading U+2000'},
					{srcset: 'data:,a &#x2001;1x', expect: '',        desc: 'leading U+2001'},
					{srcset: 'data:,a &#x2002;1x', expect: '',        desc: 'leading U+2002'},
					{srcset: 'data:,a &#x2003;1x', expect: '',        desc: 'leading U+2003'},
					{srcset: 'data:,a &#x2004;1x', expect: '',        desc: 'leading U+2004'},
					{srcset: 'data:,a &#x2005;1x', expect: '',        desc: 'leading U+2005'},
					{srcset: 'data:,a &#x2006;1x', expect: '',        desc: 'leading U+2006'},
					{srcset: 'data:,a &#x2007;1x', expect: '',        desc: 'leading U+2007'},
					{srcset: 'data:,a &#x2008;1x', expect: '',        desc: 'leading U+2008'},
					{srcset: 'data:,a &#x2009;1x', expect: '',        desc: 'leading U+2009'},
					{srcset: 'data:,a &#x200A;1x', expect: '',        desc: 'leading U+200A'},
					{srcset: 'data:,a &#x200C;1x', expect: '',        desc: 'leading U+200C'},
					{srcset: 'data:,a &#x200D;1x', expect: '',        desc: 'leading U+200D'},
					{srcset: 'data:,a &#x202F;1x', expect: '',        desc: 'leading U+202F'},
					{srcset: 'data:,a &#x205F;1x', expect: '',        desc: 'leading U+205F'},
					{srcset: 'data:,a &#x3000;1x', expect: '',        desc: 'leading U+3000'},
					{srcset: 'data:,a &#xFEFF;1x', expect: '',        desc: 'leading U+FEFF'},
					{srcset: 'data:,a 1w 0h',         expect: '',     desc: '1w 0h'},
					{srcset: 'data:,a 1w -1h',        expect: '',     desc: '1w -1h'},
					{srcset: 'data:,a 1w 1.0h',       expect: '',     desc: '1w 1.0h'},
					{srcset: 'data:,a 1w 1e0h',       expect: '',     desc: '1w 1e0h'},
					{srcset: 'data:,a 1w 1hhh',       expect: '',     desc: '1w 1hhh'},
					{srcset: 'data:,a 1w 1H',         expect: '',     desc: '1w 1H'},
					{srcset: 'data:,a 1w Infinityh',  expect: '',     desc: '1w Infinityh'},
					{srcset: 'data:,a 1w NaNh',       expect: '',     desc: '1w NaNh'},
					{srcset: 'data:,a 0x1h',          expect: '',     desc: '0x1h'},
					{srcset: 'data:,a 0X1h',          expect: '',     desc: '0X1h'},
					{srcset: 'data:,a 1w 1&#x1;h',    expect: '',     desc: 'trailing U+0001'},
					{srcset: 'data:,a 1w 1&nbsp;h',   expect: '',     desc: 'trailing U+00A0'},
					{srcset: 'data:,a 1w 1&#x1680;h', expect: '',     desc: 'trailing U+1680'},
					{srcset: 'data:,a 1w 1&#x2000;h', expect: '',     desc: 'trailing U+2000'},
					{srcset: 'data:,a 1w 1&#x2001;h', expect: '',     desc: 'trailing U+2001'},
					{srcset: 'data:,a 1w 1&#x2002;h', expect: '',     desc: 'trailing U+2002'},
					{srcset: 'data:,a 1w 1&#x2003;h', expect: '',     desc: 'trailing U+2003'},
					{srcset: 'data:,a 1w 1&#x2004;h', expect: '',     desc: 'trailing U+2004'},
					{srcset: 'data:,a 1w 1&#x2005;h', expect: '',     desc: 'trailing U+2005'},
					{srcset: 'data:,a 1w 1&#x2006;h', expect: '',     desc: 'trailing U+2006'},
					{srcset: 'data:,a 1w 1&#x2007;h', expect: '',     desc: 'trailing U+2007'},
					{srcset: 'data:,a 1w 1&#x2008;h', expect: '',     desc: 'trailing U+2008'},
					{srcset: 'data:,a 1w 1&#x2009;h', expect: '',     desc: 'trailing U+2009'},
					{srcset: 'data:,a 1w 1&#x200A;h', expect: '',     desc: 'trailing U+200A'},
					{srcset: 'data:,a 1w 1&#x200C;h', expect: '',     desc: 'trailing U+200C'},
					{srcset: 'data:,a 1w 1&#x200D;h', expect: '',     desc: 'trailing U+200D'},
					{srcset: 'data:,a 1w 1&#x202F;h', expect: '',     desc: 'trailing U+202F'},
					{srcset: 'data:,a 1w 1&#x205F;h', expect: '',     desc: 'trailing U+205F'},
					{srcset: 'data:,a 1w 1&#x3000;h', expect: '',     desc: 'trailing U+3000'},
					{srcset: 'data:,a 1w 1&#xFEFF;h', expect: '',     desc: 'trailing U+FEFF'},
					{srcset: 'data:,a 1w &#x1;1h',    expect: '',     desc: 'leading U+0001'},
					{srcset: 'data:,a 1w &nbsp;1h',   expect: '',     desc: 'leading U+00A0'},
					{srcset: 'data:,a 1w &#x1680;1h', expect: '',     desc: 'leading U+1680'},
					{srcset: 'data:,a 1w &#x2000;1h', expect: '',     desc: 'leading U+2000'},
					{srcset: 'data:,a 1w &#x2001;1h', expect: '',     desc: 'leading U+2001'},
					{srcset: 'data:,a 1w &#x2002;1h', expect: '',     desc: 'leading U+2002'},
					{srcset: 'data:,a 1w &#x2003;1h', expect: '',     desc: 'leading U+2003'},
					{srcset: 'data:,a 1w &#x2004;1h', expect: '',     desc: 'leading U+2004'},
					{srcset: 'data:,a 1w &#x2005;1h', expect: '',     desc: 'leading U+2005'},
					{srcset: 'data:,a 1w &#x2006;1h', expect: '',     desc: 'leading U+2006'},
					{srcset: 'data:,a 1w &#x2007;1h', expect: '',     desc: 'leading U+2007'},
					{srcset: 'data:,a 1w &#x2008;1h', expect: '',     desc: 'leading U+2008'},
					{srcset: 'data:,a 1w &#x2009;1h', expect: '',     desc: 'leading U+2009'},
					{srcset: 'data:,a 1w &#x200A;1h', expect: '',     desc: 'leading U+200A'},
					{srcset: 'data:,a 1w &#x200C;1h', expect: '',     desc: 'leading U+200C'},
					{srcset: 'data:,a 1w &#x200D;1h', expect: '',     desc: 'leading U+200D'},
					{srcset: 'data:,a 1w &#x202F;1h', expect: '',     desc: 'leading U+202F'},
					{srcset: 'data:,a 1w &#x205F;1h', expect: '',     desc: 'leading U+205F'},
					{srcset: 'data:,a 1w &#x3000;1h', expect: '',     desc: 'leading U+3000'},
					{srcset: 'data:,a 1w &#xFEFF;1h', expect: '',     desc: 'leading U+FEFF'}
				]
			}
		];

		// HTML Entities are much easier to troubleshoot in console.
		he.encode.options.useNamedReferences = true;
		
		function runTest(test) {
			var origAttr = test.srcset;
			var attrDecoded = he.decode(origAttr);
			var parsed = parseSrcset(attrDecoded);
			
			var firstCandidate = parsed[0];
			
			var url = "";
			var encodedUrl = "";
		
			if (firstCandidate) {
				url = firstCandidate.url;
			}
			
			// Must re-encode url prior to comparison with expected string.
			if (url) {
				encodedUrl = he.encode(url);
			}

			console.log("");		
			console.log(test.desc);
			console.log("origAttr: '" + origAttr + "'");
			console.log("attrDecoded: '" + attrDecoded + "'");
			console.log("parsed: ", parsed);
			console.log("url: '" + url + "'");
			console.log("encodedUrl: '" + encodedUrl + "'");

		
			tdd.test( test.desc , function() {
				assert.strictEqual(encodedUrl, test.expect, "passed" );
			});
		}
		
		function runTestGroup(testGroup) {
			var j;
			var testArray = testGroup.testArray;
			
			// Group Tests
			tdd.suite(testGroup.groupName, function() {
		
				for (j = 0; j < testArray.length; j++) {
					runTest(testArray[j]);
				}
			});
		}
		
		var i;
		var w3CtestsLength = w3Ctests.length;
		
		for (i = 0; i < w3CtestsLength; i++) {
				runTestGroup(w3Ctests[i]);
		}
	

	
	
		
//		tdd.test('First Test', function () {
//			var parsed = parseSrcset('data:,a 1x');
//			var url = parsed[0].url;
//			
//			console.log("parsed: ", parsed);
//			console.log("url: ", url);
//
//			assert.strictEqual(parsed, parsed, 'should be');			
//			
//			// assert.strictEqual(url, 'data:,a', 'should be');			
//		});

//    assert.strictEqual(parseSrcset('data:,a 1x')[0], 'data:,a', 'plain url with descriptor');

//		tdd.test('Second Test', function () {
//			assert.strictEqual(5, 5, '5 is itself, right?');
//		});

	});
});

