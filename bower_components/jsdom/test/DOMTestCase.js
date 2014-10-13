/*
Copyright (c) 2001-2004 World Wide Web Consortium,
(Massachusetts Institute of Technology, Institut National de
Recherche en Informatique et en Automatique, Keio University). All
Rights Reserved. This program is distributed under the W3C's Software
Intellectual Property License. This program is distributed in the
hope that it will be useful, but WITHOUT ANY WARRANTY; without even
the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
PURPOSE.
See W3C License http://www.w3.org/Consortium/Legal/ for more details.
*/
exports.assertSize = function(descr, expected, actual) {
  var actualSize;
  assertNotNull(descr, actual);
  actualSize = actual.length;
  assertEquals(descr, expected, actualSize);
}

exports.assertEqualsAutoCase = function(context, descr, expected, actual) {
	if (builder.contentType == "text/html") {
	    if(context == "attribute") {
	    	assertEquals(descr, expected.toLowerCase(), actual.toLowerCase());
	    } else {
	        assertEquals(descr, expected.toUpperCase(), actual);
	    }
	} else {
		assertEquals(descr, expected, actual); 
	}
}


exports.assertEqualsCollectionAutoCase = function(context, descr, expected, actual) {
  //
  //  if they aren't the same size, they aren't equal
  assertEquals(descr, expected.length, actual.length);
  
  //
  //  if there length is the same, then every entry in the expected list
  //     must appear once and only once in the actual list
  var expectedLen = expected.length;
  var expectedValue;
  var actualLen = actual.length;
  var i;
  var j;
  var matches;
  for(i = 0; i < expectedLen; i++) {
      matches = 0;
      expectedValue = expected[i];
      for(j = 0; j < actualLen; j++) {
      	if (builder.contentType == "text/html") {
      		if (context == "attribute") {
      			if (expectedValue.toLowerCase() == actual[j].toLowerCase()) {
      				matches++;
      			}
      		} else {
      			if (expectedValue.toUpperCase() == actual[j]) {
      				matches++;
      			}
      		}
      	} else {
          	if(expectedValue == actual[j]) {
              	matches++;
              }
          }
      }
      if(matches == 0) {
           throw new MjsUnitAssertionError(descr + ": No match found for " + expectedValue);
      }
      if(matches > 1) {
           throw new MjsUnitAssertionError(descr + ": Multiple matches found for " + expectedValue);
      }
  }
}

exports.assertEqualsCollection = function(test, expected, actual, descr) {
  //
  //  if they aren't the same size, they aren't equal
  test.strictEqual(expected.length, actual.length, descr);
  //
  //  if there length is the same, then every entry in the expected list
  //     must appear once and only once in the actual list
  var expectedLen = expected.length;
  var expectedValue;
  var actualLen = actual.length;
  var i;
  var j;
  var matches;
  for(i = 0; i < expectedLen; i++) {
      matches = 0;
      expectedValue = expected[i];
      for(j = 0; j < actualLen; j++) {
          if(expectedValue == actual[j]) {
              matches++;
          }
      }
      test.ok(matches !== 0, 'No match found for ' + expectedValue);
      test.ok(matches < 2, 'To many matches found for ' + expectedValue);
  }
}


exports.assertEqualsListAutoCase = function(context, descr, expected, actual) {
var minLength = expected.length;
if (actual.length < minLength) {
    minLength = actual.length;
}
  //
  for(var i = 0; i < minLength; i++) {
	assertEqualsAutoCase(context, descr, expected[i], actual[i]);
  }
  //
  //  if they aren't the same size, they aren't equal
  assertEquals(descr, expected.length, actual.length);
}


exports.assertEqualsList = exports.arrayEqual = function(test, expected, actual) {
  //
  //  if they aren't the same size, they aren't equal
  test.equal(expected.length, actual.length, "Array lengths are not the same!");

  var minLength = expected.length;
  if (actual.length < minLength) {
      minLength = actual.length;
  }

  //
  for(var i = 0; i < minLength; i++) {
    test.ok(expected[i] === actual[i], "Arrays not equal!" + expected[i] + ' vs ' + actual[i]);
  }

}

exports.assertInstanceOf = function(descr, type, obj) {
  if(type == "Attr") {
      assertEquals(descr,2,obj.nodeType);
      var specd = obj.specified;
  }
}

exports.assertSame = function(descr, expected, actual) {
  if(expected != actual) {
      assertEquals(descr, expected.nodeType, actual.nodeType);
      assertEquals(descr, expected.nodeValue, actual.nodeValue);
  }
}

exports.assertURIEquals = function(assertID, scheme, path, host, file, name, query, fragment, isAbsolute, actual) {
  //
  //  URI must be non-null
  assertNotNull(assertID, actual);

  var uri = actual;

  var lastPound = actual.lastIndexOf("#");
  var actualFragment = "";
  if(lastPound != -1) {
      //
      //   substring before pound
      //
      uri = actual.substring(0,lastPound);
      actualFragment = actual.substring(lastPound+1);
  }
  if(fragment != null) assertEquals(assertID,fragment, actualFragment);

  var lastQuestion = uri.lastIndexOf("?");
  var actualQuery = "";
  if(lastQuestion != -1) {
      //
      //   substring before pound
      //
      uri = actual.substring(0,lastQuestion);
      actualQuery = actual.substring(lastQuestion+1);
  }
  if(query != null) assertEquals(assertID, query, actualQuery);

  var firstColon = uri.indexOf(":");
  var firstSlash = uri.indexOf("/");
  var actualPath = uri;
  var actualScheme = "";
  if(firstColon != -1 && firstColon < firstSlash) {
      actualScheme = uri.substring(0,firstColon);
      actualPath = uri.substring(firstColon + 1);
  }

  if(scheme != null) {
      assertEquals(assertID, scheme, actualScheme);
  }

  if(path != null) {
      assertEquals(assertID, path, actualPath);
  }

  if(host != null) {
      var actualHost = "";
      if(actualPath.substring(0,2) == "//") {
          var termSlash = actualPath.substring(2).indexOf("/") + 2;
          actualHost = actualPath.substring(0,termSlash);
      }
      assertEquals(assertID, host, actualHost);
  }

  if(file != null || name != null) {
      var actualFile = actualPath;
      var finalSlash = actualPath.lastIndexOf("/");
      if(finalSlash != -1) {
          actualFile = actualPath.substring(finalSlash+1);
      }
      if (file != null) {
          assertEquals(assertID, file, actualFile);
      }
      if (name != null) {
          var actualName = actualFile;
          var finalDot = actualFile.lastIndexOf(".");
          if (finalDot != -1) {
              actualName = actualName.substring(0, finalDot);
          }
          assertEquals(assertID, name, actualName);
      }
  }

  if(isAbsolute != null) {
      assertEquals(assertID, isAbsolute, actualPath.substring(0,1) == "/");
  }
}

// size() used by assertSize element
function size(collection)
{
  return collection.length;
}

function same(expected, actual)
{
  return expected === actual;
}

function getSuffix(contentType) {
    switch(contentType) {
        case "text/html":
        return ".html";

        case "text/xml":
        return ".xml";

        case "application/xhtml+xml":
        return ".xhtml";

        case "image/svg+xml":
        return ".svg";

        case "text/mathml":
        return ".mml";
    }
    return ".html";
}

exports.toLowerArray = function(src) {
   var newArray = new Array();
   var i;
   for (i = 0; i < src.length; i++) {
      newArray[i] = src[i].toLowerCase();
   }
   return newArray;
}



exports.equalsAutoCase = function(context, expected, actual) {
	if (builder.contentType == "text/html") {
		if (context == "attribute") {
			return expected.toLowerCase() == actual;
		}
		return expected.toUpperCase() == actual;
	}
	return expected == actual;
}


