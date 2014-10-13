var level3 = require("../../lib/jsdom/level3").dom.level3;
var getImplementation = function() {
  var doc = new level3.core.Document();
  return doc.implementation;
};

function DOMErrorMonitor() {
  this.allErrors = new Array();
}

DOMErrorMonitor.prototype.handleError = function(err) {
    errorMonitor.allErrors[errorMonitor.allErrors.length] = new DOMErrorImpl(err);
}

DOMErrorMonitor.prototype.assertLowerSeverity = function(test, id, severity) {
    var i;
    for (i = 0; i < this.allErrors.length; i++) {
        if (this.allErrors[i].severity >= severity) {
           test.strictEqual(severity - 1, this.allErrors[i].severity, id);
        }
    }
}


// XXX: this is horrible!
function getResourceURI() {
  return "";
}

function load() {
  return new level3.core.Document();
}

exports.tests = {
  /**
   * Changes certifiedText on LSInput.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-DOMImplementationLS-createLSInput
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSInput-certifiedText
   */
  CertifiedText1 : function (test) {
    var domImpl = getImplementation();
    var input = domImpl.createLSInput();
    var certifiedText = input.certifiedText;

    test.ok(certifiedText === false, "initiallyFalse");
    input.certifiedText = true;

    certifiedText = input.certifiedText;

    test.ok(certifiedText, "setTrue");
    input.certifiedText = false;

    certifiedText = input.certifiedText;

    test.ok(certifiedText === false, "setFalse");

    test.done();
  },
  /**
   * Writes a document to a character stream and rereads the document.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-DOMImplementationLS-createLSInput
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSInput-characterStream
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSOutput-characterStream
   */
  CharacterStream1 : function (test) {
    var success, testDoc, domImpl, output, serializer, writer, checkWriter, reader, checkReader, status, input, parser, checkDoc, docElem, docElemName, NULL_SCHEMA_TYPE = null, testDocRef = null;

    if (typeof(this.testDoc) != 'undefined') {
      testDocRef = this.testDoc;
    }

    testDoc = load(testDocRef, "testDoc", "test0");
    domImpl = getImplementation();
    output = domImpl.createLSOutput();
    checkWriter = output.characterStream;

    test.ok(checkWriter === null, "writerInitiallyNull");
    output.characterStream = writer;

    checkWriter = output.characterStream;

    test.ok(checkWriter !== null, "writerNotNull");
    serializer = domImpl.createLSSerializer();
    status = serializer.write(testDoc,output);
    test.ok(status, "writeStatus");
    reader =  writer;
    input = domImpl.createLSInput();
    checkReader = input.characterStream;

    test.ok(checkReader === null, "readerInitiallyNull");
    input.characterStream = reader;

    checkReader = input.characterStream;

    test.ok(checkReader !== null, "readerNotNull");
    parser = domImpl.createLSParser(1,NULL_SCHEMA_TYPE);
    checkDoc = parser.parse(input);
    test.ok(checkDoc !== null, "checkNotNull");
    docElem = checkDoc.documentElement;

    docElemName = docElem.nodeName;

    test.strictEqual("elt0", docElemName, "checkDocElemName");

    test.done();
  },
  /**
   * Parses a document twice, once using a filter to reject all elt1 elements.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-filter
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParserFilter-startElement
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParserFilter-whatToShow
   */
  DOMBuilderFilterTest0 : function (test) {
    
    // TODO: finish the implementation of this filter
    function LSParserFilterN10027() {}

    var
    success, myfilter = new LSParserFilterN10027(), list, count, resourceURI, 
    implementation, lsImplementation, inputSource, document, writer, builder,
    MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2,
    DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml",
    SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema",
    NULL_SCHEMATYPE = null, ACTION_REPLACE_CHILDREN = 2,
    ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";

    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    resourceURI = getResourceURI(TEST1);
    document = builder.parseURI(resourceURI);
    list = document.getElementsByTagName("elt1");
    count = list.length;

    test.strictEqual(1, count, "filter_count_1");
    builder.filter = myfilter;

    document = builder.parseURI(resourceURI);
    test.ok(document !== null, "secondParseDocumentNotNull");
    list = document.getElementsByTagName("elt1");
    count = list.length;

    test.strictEqual(0, count, "filter_count_2");

    test.done();
  },
  /**
   * DOM Builder Filter test, test whether incorrect node types are never passed to the filter.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-Interfaces-LSParserFilter
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-filter
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParserFilter-acceptNode
   */
  DOMBuilderFilterTest1 : function (test) {
    function LSParserFilterN1002B() {}
    var success, resourceURI, myfilter = new LSParserFilterN1002B(), implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null, ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";

    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    builder.filter = myfilter;

    resourceURI = getResourceURI(TEST7);
    document = builder.parseURI(resourceURI);
    test.ok(document !== null, "documentNotNull");

    test.done();
  },
  /**
   * Checks that attributes are visible when elements are passed to LSParserFilter.startElement.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-Interfaces-LSParserFilter
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParserFilter-startElement
   */
  DOMBuilderFilterTest2 : function (test) {
    function LSParserFilterN10028() {}
    var success, resourceURI;
    myfilter = new LSParserFilterN10028();

    var implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    builder.filter = myfilter;

    resourceURI = getResourceURI(TEST3);
    document = builder.parseURI(resourceURI);

    test.done();
  },
  /**
   * Parses a document, writes it to string, parses the string and checks that the number of elt1 elements is as expected.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parse
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSInput-stringData
   */
  DOMBuilderTest0 : function (test) {
    var success, elementList, stringDoc, resourceURI, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    resourceURI = getResourceURI(TEST0);
    document = builder.parseURI(resourceURI);
    elementList = document.getElementsByTagName("elt1");
    test.ok(2 === elementList.length, "count_elt1_1");
    stringDoc = writer.writeToString(document);
    inputSource.stringData = stringDoc;

    document = builder.parse(inputSource);
    elementList = document.getElementsByTagName("elt1");
    test.ok(2 === elementList.length, "count_elt1_2");

    test.done();
  },
  /**
   * Uses LSParser.parseWithContext to replace a node in an existing document.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseWithContext
   */
  DOMBuilderTest1 : function (test) {
    var success, elementList, stringDoc, firstElt2, returnNode, resourceURI, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    resourceURI = getResourceURI(TEST0);
    document = builder.parseURI(resourceURI);
    elementList = document.getElementsByTagName("elt2");
    test.ok(1 === elementList.length, "elt2Count_1");
    firstElt2 = elementList.item(0);
    resourceURI = getResourceURI(TEST2);
    inputSource.systemId = resourceURI;

    try {
      returnNode = builder.parseWithContext(inputSource,firstElt2,ACTION_REPLACE);

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_SUPPORTED_ERR */ 9 :
          return ;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    elementList = document.getElementsByTagName("elt2");
    test.ok(1 === elementList.length, "elt2Count_2");
    elementList = document.getElementsByTagName("elt3");
    test.ok(1 === elementList.length, "elt3Count");

    test.done();
  },
  /**
   * Uses LSParser.parseWithContext to append a document as a child of an existing node.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseWithContext
   */
  DOMBuilderTest2 : function (test) {
    var success, elementList, stringDoc, firstElt0, returnNode, resourceURI, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    resourceURI = getResourceURI(TEST0);
    document = builder.parseURI(resourceURI);
    elementList = document.getElementsByTagName("elt0");
    test.ok(1 === elementList.length, "count_elt0");
    firstElt0 = elementList.item(0);
    resourceURI = getResourceURI(TEST2);
    inputSource.systemId = resourceURI;

    try {
      returnNode = builder.parseWithContext(inputSource,firstElt0,ACTION_APPEND_AS_CHILDREN);

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_SUPPORTED_ERR */ 9 :
          return ;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    elementList = document.getElementsByTagName("elt2");
    test.ok(2 === elementList.length, "count_elt2");
    elementList = document.getElementsByTagName("elt3");
    test.ok(1 === elementList.length, "count_elt3");

    test.done();
  },
  /**
   * Uses LSParser.parseWithContext to insert a document after a node.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseWithContext
   */
  DOMBuilderTest3 : function (test) {
    var success, elementList, stringDoc, firstElt1, secondElt1, thirdElt, nodeName, returnNode, resourceURI, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    resourceURI = getResourceURI(TEST0);
    document = builder.parseURI(resourceURI);
    elementList = document.getElementsByTagName("elt1");
    test.ok(2 === elementList.length, "count_elt1");
    firstElt1 = elementList.item(0);
    secondElt1 = firstElt1.nextSibling;

    nodeName = secondElt1.nodeName;

    test.strictEqual("elt1", nodeName, "nextSibling_before_add");
    resourceURI = getResourceURI(TEST2);
    inputSource.systemId = resourceURI;

    try {
      returnNode = builder.parseWithContext(inputSource,firstElt1,ACTION_INSERT_AFTER);

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_SUPPORTED_ERR */ 9 :
          return ;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    secondElt1 = firstElt1.nextSibling;

    nodeName = secondElt1.nodeName;

    test.strictEqual("elt2", nodeName, "nextSibling_after_add");
    thirdElt = secondElt1.nextSibling;

    nodeName = thirdElt.nodeName;

    test.strictEqual("elt1", nodeName, "nextSiblings_sibling_after_add");

    test.done();
  },
  /**
   * Uses LSParser.parseWithContext to insert a document before a node.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseWithContext
   */
  DOMBuilderTest4 : function (test) {
    var success, elementList, stringDoc, firstElt1, secondElt1, thirdElt, nodeName, returnNode, resourceURI, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    resourceURI = getResourceURI(TEST0);
    document = builder.parseURI(resourceURI);
    elementList = document.getElementsByTagName("elt1");
    test.ok(2 === elementList.length, "count_elt1");
    secondElt1 = elementList.item(1);
    firstElt1 = secondElt1.previousSibling;

    nodeName = firstElt1.nodeName;

    test.strictEqual("elt1", nodeName, "previousSibling_before_insert_before");
    resourceURI = getResourceURI(TEST2);
    inputSource.systemId = resourceURI;

    try {
      returnNode = builder.parseWithContext(inputSource,secondElt1,ACTION_INSERT_BEFORE);

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_SUPPORTED_ERR */ 9 :
          return ;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    firstElt1 = secondElt1.previousSibling;

    nodeName = firstElt1.nodeName;

    test.strictEqual("elt2", nodeName, "previousSibling_after_insert_before");

    test.done();
  },  /**
   * supported-media-types-only is set to true if supported and
   an XML file with an unsupported media type from an HTTP server
   on the local machine is retrieved.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-supported-media-types-only
   */
  DOMBuilderTest5 : function (test) {
    var success, elementList, stringDoc, configuration, ERROR_HANDLER = "error-handler", SUPPORTED_MEDIATYPES_ONLY = "supported-media-types-only", mediaTypesSupported, resourceURI;
    function DOMErrorHandlerN10042() {};
    var errorHandler = new DOMErrorHandlerN10042();

    var implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    configuration = builder.domConfig;

    resourceURI = getResourceURI(TESTPDF);
    document = builder.parseURI(resourceURI);
    test.ok(document !== null, "testpdf_parsed");
    mediaTypesSupported = configuration.canSetParameter(SUPPORTED_MEDIATYPES_ONLY,true);

    if(
      mediaTypesSupported
    ) {
      configuration.setParameter(SUPPORTED_MEDIATYPES_ONLY, true);
      configuration.setParameter(ERROR_HANDLER, errorHandler.handleError);

      {
	success = false;
	try {
          document = builder.parseURI(resourceURI);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 81);
	}
	test.ok(success, "throw_PARSE_ERR");
      }

    }

    test.done();
  },
  /**
   * Parses from an uninitialized LSInput.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parse
   */
  DOMBuilderTest6 : function (test) {
    var success, domImpl, parser, NULL_SCHEMA_TYPE = null;

    var input, document;
    domImpl = getImplementation();
    parser = domImpl.createLSParser(1,NULL_SCHEMA_TYPE);
    input = domImpl.createLSInput();

    {
      success = false;
      try {
        document = parser.parse(input);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 81);
      }
      test.ok(success, "throw_PARSE_ERR");
    }

    test.done();
  },
  /**
   * Parses an unresolvable System ID.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parse
   */
  DOMBuilderTest8 : function (test) {
    var success, domImpl, parser, NULL_SCHEMA_TYPE = null;

    var input, document, resourceURI;
    domImpl = getImplementation();
    parser = domImpl.createLSParser(1,NULL_SCHEMA_TYPE);
    input = domImpl.createLSInput();
    resourceURI = getResourceURI("test0");
    resourceURI = resourceURI + "_missing";
    input.systemId = resourceURI;

    {
      success = false;
      try {
        document = parser.parse(input);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 81);
      }
      test.ok(success, "throw_PARSE_ERR");
    }

    test.done();
  },
  /**
   * Checks parameters on call to resolve resource are
   as expected and redirects to parse a different resource.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSResourceResolver-resolveResource
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-resource-resolver
   */
  DOMEntityResolverTest0 : function (test) {
    var success, resourceURI, elt2List, elt2Count;
    function LSResourceResolverN10030() {}
    myentityresolver = new LSResourceResolverN10030();

    var configuration, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    configuration = builder.domConfig;

    configuration.setParameter("resource-resolver", myentityresolver);
    resourceURI = getResourceURI(TEST4);
    document = builder.parseURI(resourceURI);
    elt2List = document.getElementsByTagName("elt2");
    elt2Count = elt2List.length;

    test.strictEqual(1, elt2Count, "elt2Count");

    test.done();
  },
  /**
   * Tests a custom entity resolver. The entity resolver creates an input source that supplies 2 elt1 elements. The original entity reference referes to 1 elt1
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSResourceResolver-resolveResource
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-resource-resolver
   */
  DOMEntityResolverTest1 : function (test) {
    var success;
    function LSResourceResolverN10028() {};
    myentityresolver = new LSResourceResolverN10028();

    var elementList, configuration, resourceURI, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    configuration = builder.domConfig;

    resourceURI = getResourceURI(TEST4);
    document = builder.parseURI(resourceURI);
    elementList = document.getElementsByTagName("elt1");
    test.ok(2 === elementList.length, "count_elt1_before_applying_entity_resolver");
    configuration.setParameter("resource-resolver", myentityresolver);
    document = builder.parseURI(resourceURI);
    elementList = document.getElementsByTagName("elt1");
    test.ok(3 === elementList.length, "count_elt1_after_applying_entity_resolver");

    test.done();
  },
  /**
   * Resource resolvers do not participate in resolving the top-level document entity.
   This test attempts to redirect any resource and then checks that the
   requested document was not affected.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSResourceResolver-resolveResource
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-resource-resolver
   */
  DOMEntityResolverTest2 : function (test) {
    function LSResourceResolverN10030(){}
    LSResourceResolverN10030.prototype={};

    var success, resourceURI, docElem, docElemName;
    myentityresolver = new LSResourceResolverN10030();

    var configuration, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    configuration = builder.domConfig;

    configuration.setParameter("resource-resolver", myentityresolver);
    resourceURI = getResourceURI(TEST0);
    document = builder.parseURI(resourceURI);
    test.ok(document !== null, "documentNotNull");
    docElem = document.documentElement;

    docElemName = docElem.nodeName;

    test.strictEqual("elt0", docElemName, "docElemName");

    test.done();
  },
  /**
   * Uses DOMImplementationLS.createLSParser to create a synchronous parser with an unspecified schema type.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-DOMImplementationLS-createLSParser
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-async
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-busy
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-filter
   */
  DOMImplementationLSTest0 : function (test) {
    var success, isAsync, isBusy, filter, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    test.ok(builder !== null, "builderNotNull");
    isAsync = builder.async;

    test.ok(isAsync === false, "notAsync");
    isBusy = builder.busy;

    test.ok(isBusy === false, "notBusy");
    filter = builder.filter;

    test.ok(filter === null, "nullFilter");

    test.done();
  },
  /**
   * Calls DOMImplementationLS.createLSParser(MODE_ASYNCHRONOUS, null) and
   checks the return value is not null.  Only applicable if DOMImplementation.hasFeature("LS-ASync", null) is true.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-DOMImplementationLS-createLSParser
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-async
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-busy
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-filter
   */
  DOMImplementationLSTest1 : function (test) {
    var success, isAsync, isBusy, filter, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_ASYNCHRONOUS,NULL_SCHEMATYPE);
    test.ok(builder !== null, "builderNotNull");
    isAsync = builder.async;

    test.ok(isAsync, "notAsync");
    isBusy = builder.busy;

    test.ok(isBusy === false, "notBusy");
    filter = builder.filter;

    test.ok(filter === null, "nullFilter");

    test.done();
  },
  /**
   * Calls DOMImplementationLS.createLSParser(MODE_SYNCHRONOUS, "http://www.w3.org/TR/REC-xml") and checks the return value is not null.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-DOMImplementationLS-createLSParser
   */
  DOMImplementationLSTest2 : function (test) {
    var success, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,DTD_SCHEMATYPE);
    test.ok(builder !== null, "builderNotNull");

    test.done();
  },
  /**
   * Calls DOMImplementationLS.createLSParser(MODE_SYNCHRONOUS, "http://www.w3.org/2001/XMLSchema").
   Should either throw a NOT_SUPPORTED_ERR or return a non-null builder.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-DOMImplementationLS-createLSParser
   */
  DOMImplementationLSTest3 : function (test) {
    var success, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;

    try {
      builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,SCHEMA_SCHEMATYPE);
      test.ok(builder !== null, "builderNotNull");

    } catch (ex) {
      test.ok(ex.code === /* NOT_SUPPORTED_ERR */ 9);
    }

    test.done();
  },
  /**
   * Calls DOMImplementationLS.createLSParser(MODE_SYNCHRONOUS, "http://nobody...err") expecting that a
   NOT_SUPPORTED_ERR would be raised.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-DOMImplementationLS-createLSParser
   */
  DOMImplementationLSTest4 : function (test) {
    var success, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;

    {
      success = false;
      try {
        builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,"http://nobody_should_support_this_schematype_this_should_throw_a_not_supported_err");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, "NOT_SUPPORTED_ERR");
    }

    test.done();
  },
  /**
   * Calls DOMImplementationLS.createLSParser(MODE_SYNCHRONOUS, "http://nobody...err") expecting that a
   NOT_SUPPORTED_ERR would be raised.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-DOMImplementationLS-createLSParser
   */
  DOMImplementationLSTest5 : function (test) {
    var success, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;

    {
      success = false;
      try {
        builder = lsImplementation.createLSParser(17,NULL_SCHEMATYPE);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, "NOT_SUPPORTED_ERR");
    }

    test.done();
  },
  /**
   * Parses a document from a byte stream.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSInput-byteStream
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parse
   */
  DOMInputSourceTest0 : function (test) {
    var success, myByteStream = "3C656C74302F3E", elementList, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    inputSource.byteStream = myByteStream;

    document = builder.parse(inputSource);
    elementList = document.getElementsByTagName("elt0");
    test.ok(1 === elementList.length, "count_elt0");

    test.done();
  },
  /**
   * Parses a document from a character stream.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSInput-characterStream
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parse
   */
  DOMInputSourceTest1 : function (test) {
    var success, myReader = "&lt;elt0/>", elementList, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    inputSource.characterStream = myReader;

    document = builder.parse(inputSource);
    elementList = document.getElementsByTagName("elt0");
    test.ok(1 === elementList.length, "count_elt0");

    test.done();
  },
  /**
   * test the builder by using a string inputsource
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSInput-stringData
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parse
   */
  DOMInputSourceTest2 : function (test) {
    var success, elementList, myString = "&lt;elt0>elt0&lt;/elt0>", implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    inputSource.stringData = myString;

    document = builder.parse(inputSource);
    elementList = document.getElementsByTagName("elt0");
    test.ok(1 === elementList.length, "count_elt0");

    test.done();
  },
  /**
   * Specify encodings for LSInput with string data.  The
   setting should have no effect and the inputEncoding of the resulting document should be UTF-16.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSInput-encoding
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parse
   */
  DOMInputSourceTest3 : function (test) {
    var success, myString = "<?xml version='1.0' encoding='UTF-8'?>&lt;elt0>elt0&lt;/elt0>", encodingString, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    inputSource.stringData = myString;

    inputSource.encoding = "UTF-8";

    document = builder.parse(inputSource);
    encodingString = document.inputEncoding;

    test.strictEqual("UTF-16".toLowerCase(), encodingString.toLowerCase(), "encodingstringcheck0");

    test.done();
  },
  /**
   * tests whether DOMInput whether abort can be called even if loading is finished already
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-abort
   */
  DOMInputSourceTest4 : function (test) {
    var success, elementList, myString = "<?xml version='1.0' encoding='UTF-8'?>&lt;elt0>elt0&lt;/elt0>", implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    inputSource.stringData = myString;

    document = builder.parse(inputSource);
    builder.abort();

    test.done();
  },
  /**
   * Parses a document containing an external entity and checks
   that resource resolver is passed the baseURI value specified on LSInput.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSInput-systemId
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSInput-publicId
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSInput-baseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSResourceResolver-resolveResource
   */
  DOMInputSourceTest5 : function (test) {
    function LSResourceResolverN1002A() {}
   
    /**
     *    
     * Allow the application to resolve external resources.
     * TheLSParserwill call this method before opening any external resource,
     * including the external DTD subset, external entities referenced within the DTD,
     * and external entities referenced within the document element (however, the 
     * top-level document entity is not passed to this method). The application may then
     * request that theLSParserresolve the external resource itself, that it use an
     * alternative URI, or that it use an entirely different input source.
     *
     * Application writers can use this method to redirect external system identifiers to
     * secure and/or local URI, to look up public identifiers in a catalogue, or to read
     * an entity from a database or other input source (including, for example, a dialog box).
     *
     * @param type 
     *  The type of the resource being resolved. For XMLresources (i.e. entities), applications must
     *  use the value"http://www.w3.org/TR/REC-xml". For XML Schema, applications must use the 
     *  value"http://www.w3.org/2001/XMLSchema". Other types of resources are outside the scope of
     *  this specification and therefore should recommend an absolute URI in order to use this method.
     * @param namespaceURI 
     *  The namespace of the resource being resolved, e.g. the target namespace of the XML Schemawhen
     *  resolving XML Schema resources.
     * @param publicId 
     *  The public identifier of the external entity being referenced, ornullif no public identifier
     *  was supplied or if the resource is not an entity.
     * @param systemId 
     *  The system identifier, a URI reference, of the external resource being referenced, ornullif no
     *  system identifier was supplied.
     * @param baseURI 
     *  The absolute base URI of the resource being parsed, ornullif there is no base URI.
     */
    LSResourceResolverN1002A.prototype.resolveResource = function(type, namespaceURI, publicId, systemId, baseURI) {
      //
      //   bring class variables into function scope
      //
      var domImplLS;
      var input;
      test.strictEqual("http://www.example.com/new_base",baseURI);
      test.strictEqual("-//X-Hive//native xml storage//EN",publicId);
   
      // TODO: implement this in a helper somewhere
      //assertURIEquals(test,null,null,null,null,"test5",null,null,true,systemId);
      domImplLS = getImplementation();
      input = domImplLS.createLSInput();
      input.stringData = "";
     
      return input;
    }

    var success;
    myentityresolver = new LSResourceResolverN1002A();

    var configuration, resourceURI, nodeList, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    configuration = builder.domConfig;

    configuration.setParameter("resource-resolver", myentityresolver);
    configuration.setParameter("entities", false);
    // TODO: WTF IS THIS?
    //resourceURI = getResourceURI(TEST4);
    
    inputSource.systemId = resourceURI;

    inputSource.publicId = "-//X-Hive//native xml storage//DE";

    inputSource.baseURI = "http://www.example.com/new_base";

    document = builder.parse(inputSource);
    test.ok(document !== null, "documentNotNull");
    nodeList = document.getElementsByTagName("elt2");
    test.ok(0 === nodeList.length, "noElt2");
    nodeList = document.getElementsByTagName("elt1");
    test.ok(1 === nodeList.length, "hasElt1");

    test.done();
  },
  /**
   * Specify encodings for LSInput with a character stream.  The
   setting should have no effect and the inputEncoding of the resulting document should be UTF-16.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSInput-encoding
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parse
   */
  DOMInputSourceTest6 : function (test) {
    var success, encodingString, myReader = "<?xml version='1.0' encoding='UTF-8'?>&lt;elt0>elt0&lt;/elt0>", implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    inputSource.encoding = "UTF-8";

    inputSource.characterStream = myReader;

    document = builder.parse(inputSource);
    test.ok(document !== null, "documentNotNull");
    encodingString = document.inputEncoding;

    test.strictEqual("UTF-16".toLowerCase(), encodingString.toLowerCase(), "encodingstringcheck0");

    test.done();
  },  /**
   * DOMSerializerFilter test, a simple test eliminating a subtree
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-Interfaces-LSSerializerFilter
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-LSSerializerFilter
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializerFilter-acceptNode
   */
  DOMWriterFilterTest0 : function (test) {
    function LSSerializerFilterN10027(){};
    var success;
    myfilter = new LSSerializerFilterN10027();

    var configuration, stringDoc = "&lt;elt1>first elt1&lt;elt2>elt2&lt;/elt2>&lt;/elt1>", writeResult, length, elementList, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    inputSource.stringData = stringDoc;

    document = builder.parse(inputSource);
    writer.filter = myfilter;

    writeResult = writer.writeToString(document);
    inputSource.stringData = writeResult;

    document = builder.parse(inputSource);
    elementList = document.getElementsByTagName("elt2");
    test.ok(0 === elementList.length, "count_elt2");
    elementList = document.getElementsByTagName("elt1");
    test.ok(1 === elementList.length, "count_elt1");

    test.done();
  },  /**
   * Uses a serializer filter to eliminate attributes, parses the output and checks if the attribute is not there.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-Interfaces-LSSerializerFilter
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-LSSerializerFilter
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializerFilter-acceptNode
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializerFilter-whatToShow
   */
  DOMWriterFilterTest1 : function (test) {
    function LSSerializerFilterN1002A(){}
    var success;
    myfilter = new LSSerializerFilterN1002A();

    var configuration, stringDoc = "&lt;elt1 attr1='attr1'>first elt1&lt;/elt1>", writeResult, length, elementList, elt1, attrNode, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    inputSource.stringData = stringDoc;

    document = builder.parse(inputSource);
    writer.filter = myfilter;

    writeResult = writer.writeToString(document);
    inputSource.stringData = writeResult;

    document = builder.parse(inputSource);
    elementList = document.getElementsByTagName("elt1");
    test.ok(1 === elementList.length, "count_elt2");
    elt1 = elementList.item(0);
    attrNode = elt1.getAttributeNode("attr1");
    test.ok(attrNode === null, "attrib1");

    test.done();
  },  /**
   * Uses a filter to strip text during serialization
   parsers to check expections.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-LSSerializerFilter
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializerFilter-acceptNode
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializerFilter-whatToShow
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=643
   */
  DOMWriterFilterTest2 : function (test) {
    var success;
    function LSSerialiserFilterN1002A() {}
    myfilter = new LSSerializerFilterN1002A();

    var stringDoc = "&lt;elt1 attr1='attr1'>first elt1&lt;/elt1>", writeResult, length, elementList, elt1, childs, attrNode, attr1, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    inputSource.stringData = stringDoc;

    document = builder.parse(inputSource);
    writer.filter = myfilter;

    writeResult = writer.writeToString(document);
    inputSource.stringData = writeResult;

    document = builder.parse(inputSource);
    elementList = document.getElementsByTagName("elt1");
    elt1 = elementList.item(0);
    attrNode = elt1.getAttributeNode("attr1");
    test.ok(attrNode !== null, "attrExists");
    attr1 = attrNode.nodeValue;

    test.strictEqual("attr1", attr1, "attrUnchanged");
    childs = elt1.hasChildNodes();
    test.ok(childs === false, "nodeHasChilds_elt1");

    test.done();
  },  /**
   * Eliminates comments on serialization, parses results and checks for comments.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-LSSerializerFilter
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializerFilter-acceptNode
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializerFilter-whatToShow
   */
  DOMWriterFilterTest3 : function (test) {
    var success;
    function LSSerializerFilterN10027() {}
    myfilter = new LSSerializerFilterN10027();

    var configuration, stringDoc = "&lt;elt1>&lt;elt2>elt2&lt;/elt2><!--comment1-->&lt;/elt1>", writeResult, length, elementList, children, elt1, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    inputSource.stringData = stringDoc;

    document = builder.parse(inputSource);
    writer.filter = myfilter;

    writeResult = writer.writeToString(document);
    inputSource.stringData = writeResult;

    document = builder.parse(inputSource);
    elementList = document.getElementsByTagName("elt1");
    test.ok(1 === elementList.length, "count_elt1");
    elt1 = elementList.item(0);
    children = elt1.childNodes;

    test.ok(1 === children.length, "count_children");

    test.done();
  },
  /**
   * Calls LSSerializer.writeToString and checks result.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   */
  DOMWriterTest0 : function (test) {
    var success, stringDoc, writeResult, elementList, resourceURI, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    resourceURI = getResourceURI(TEST0);
    document = builder.parseURI(resourceURI);
    writeResult = writer.writeToString(document);
    inputSource.stringData = writeResult;

    document = builder.parse(inputSource);
    elementList = document.getElementsByTagName("elt2");
    test.ok(1 === elementList.length, "elt2Count_1");

    test.done();
  },
  /**
   * Writes an element node to a byte stream.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSOutput-byteStream
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-write
   */
  DOMWriterTest1 : function (test) {
    var success, stringDoc, writeResult, elementList, firstElt3, output, outputStream, inputStream = null;

    var resourceURI, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    resourceURI = getResourceURI(TEST2);
    document = builder.parseURI(resourceURI);
    elementList = document.getElementsByTagName("elt3");
    firstElt3 = elementList.item(0);
    output = lsImplementation.createLSOutput();
    output.byteStream = outputStream;

    writeResult = writer.write(firstElt3,output);
    inputStream =  outputStream;
    inputSource.byteStream = inputStream;

    document = builder.parse(inputSource);
    elementList = document.getElementsByTagName("elt2");
    test.ok(0 === elementList.length, "elt2Count_1");

    test.done();
  },
  /**
   * Serializes a document without a XML declaration for both for 'xml-declaration' configuration values.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#DOMConfiguration-canSetParameter
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-config
   */
  DOMWriterTest2 : function (test) {
    var success, configuration, XML_DECLARATION = "xml-declaration", stringDoc = "&lt;hello>me again&lt;/hello>", writeResult, xmlDecl, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    inputSource.stringData = stringDoc;

    document = builder.parse(inputSource);
    configuration = writer.domConfig;

    configuration.setParameter(XML_DECLARATION, false);
    writeResult = writer.writeToString(document);
    test.strictEqual(stringDoc, writeResult, "without_xml_declaration");
    configuration.setParameter(XML_DECLARATION, true);
    writeResult = writer.writeToString(document);
    // TODO: umm.. what? are these tests complete?
    // fail("Unrecognized method or attribute substring");

    test.strictEqual("<?xml ", xmlDecl, "with_xml_declaration");

    test.done();
  },
  /**
   * Serializes a document with a XML declaration for both for 'xml-declaration' configuration values.
   * @author Jeroen van Rotterdam
   * @author X-Hive Corporation
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#DOMConfiguration-canSetParameter
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-config
   */
  DOMWriterTest3 : function (test) {
    var success, configuration, XML_DECLARATION = "xml-declaration", stringDoc = "<?xml version='1.0'?>&lt;hello>me again&lt;/hello>", writeResult, xmlDecl, implementation, lsImplementation, inputSource, document, writer, builder, MODE_SYNCHRONOUS = 1, MODE_ASYNCHRONOUS = 2, DTD_SCHEMATYPE = "http://www.w3.org/TR/REC-xml", SCHEMA_SCHEMATYPE = "http://www.w3.org/2001/XMLSchema", NULL_SCHEMATYPE = null;

    var ACTION_REPLACE_CHILDREN = 2, ACTION_APPEND_AS_CHILDREN = 1, ACTION_INSERT_AFTER = 4, ACTION_INSERT_BEFORE = 3, ACTION_REPLACE = 5, TEST0 = "test0", TEST1 = "test1", TEST2 = "test2", TEST3 = "test3", TEST4 = "test4", TEST5 = "test5", TEST6 = "test6", TEST7 = "test7", TESTPDF = "testpdf";
    implementation = getImplementation();
    lsImplementation =  implementation;
    builder = lsImplementation.createLSParser(MODE_SYNCHRONOUS,NULL_SCHEMATYPE);
    writer = lsImplementation.createLSSerializer();
    inputSource = lsImplementation.createLSInput();
    inputSource.stringData = stringDoc;

    document = builder.parse(inputSource);
    configuration = writer.domConfig;

    configuration.setParameter(XML_DECLARATION, false);
    writeResult = writer.writeToString(document);
    test.strictEqual("&lt;hello>me again&lt;/hello>", writeResult, "without_xml_declaration");
    configuration.setParameter(XML_DECLARATION, true);
    writeResult = writer.writeToString(document);
    // TODO: umm.. what? are these tests complete?
    // fail("Unrecognized method or attribute substring");

    test.strictEqual("<?xml ", xmlDecl, "with_xml_declaration");

    test.done();
  },
  /**
   * Writes a document to an uninitialized LSOutput.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-write
   */
  DOMWriterTest4 : function (test) {
    var success, testDoc, domImpl, output, serializer, status;

    var testDocRef = null;
    if (typeof(this.testDoc) != 'undefined') {
      testDocRef = this.testDoc;
    }
    testDoc = load(testDocRef, "testDoc", "test0");
    domImpl = getImplementation();
    output = domImpl.createLSOutput();
    serializer = domImpl.createLSSerializer();

    {
      success = false;
      try {
        status = serializer.write(testDoc,output);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 82);
      }
      test.ok(success, "throw_SERIALIZE_ERR");
    }

    test.done();
  },
  /**
   * Creates an document containing a namespaced attribute node without
   user-specified prefix and checks that it is serialized properly.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-write
   * @see http://lists.w3.org/Archives/Public/www-dom/2003OctDec/0062.html
   */
  DOMWriterTest5 : function (test) {
    var success, domImpl, origDoc, nullDocType = null;

    var namespaceURI = "http://www.example.com/DOMWriterTest5", docElem, outputString, input, serializer, parser, NULL_SCHEMA_TYPE = null;

    var attrValue, parsedDoc, docElemLocalName, docElemNS;
    domImpl = getImplementation();
    origDoc = domImpl.createDocument(namespaceURI,"test",nullDocType);
    docElem = origDoc.documentElement;

    docElem.setAttributeNS(namespaceURI,"attr","test value");
    serializer = domImpl.createLSSerializer();
    outputString = serializer.writeToString(origDoc);
    input = domImpl.createLSInput();
    input.stringData = outputString;

    parser = domImpl.createLSParser(1,NULL_SCHEMA_TYPE);
    parsedDoc = parser.parse(input);
    docElem = parsedDoc.documentElement;

    docElemLocalName = docElem.localName;

    test.strictEqual("test", docElemLocalName, "docElemLocalName");
    docElemNS = docElem.namespaceURI;

    test.strictEqual(namespaceURI, docElemNS, "docElemNS");
    attrValue = docElem.getAttributeNS(namespaceURI,"attr");
    test.strictEqual("test value", attrValue, "properNSAttrValue");

    test.done();
  },
  /**
   * Creates an document containing a namespaced attribute node with
   user-specified prefix and checks that it is serialized properly.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-write
   * @see http://lists.w3.org/Archives/Public/www-dom/2003OctDec/0062.html
   */
  DOMWriterTest6 : function (test) {
    var success, domImpl, origDoc, nullDocType = null;

    var namespaceURI = "http://www.example.com/DOMWriterTest5", docElem, outputString, input, serializer, parser, NULL_SCHEMA_TYPE = null;

    var attrValue, parsedDoc, docElemLocalName, docElemNS;
    domImpl = getImplementation();
    origDoc = domImpl.createDocument(namespaceURI,"test",nullDocType);
    docElem = origDoc.documentElement;

    docElem.setAttributeNS(namespaceURI,"test:attr","test value");
    serializer = domImpl.createLSSerializer();
    outputString = serializer.writeToString(origDoc);
    input = domImpl.createLSInput();
    input.stringData = outputString;

    parser = domImpl.createLSParser(1,NULL_SCHEMA_TYPE);
    parsedDoc = parser.parse(input);
    docElem = parsedDoc.documentElement;

    docElemLocalName = docElem.localName;

    test.strictEqual("test", docElemLocalName, "docElemLocalName");
    docElemNS = docElem.namespaceURI;

    test.strictEqual(namespaceURI, docElemNS, "docElemNS");
    attrValue = docElem.getAttributeNS(namespaceURI,"attr");
    test.strictEqual("test value", attrValue, "properNSAttrValue");

    test.done();
  },
  /**
   * DOMImplementationLS can be obtained by DOMImplementation.getFeature("LS", "3.0").
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#DOMImplementation3-getFeature
   */
  GetFeature1 : function (test) {
    var success, domImpl, domImplLS, output;
    domImpl = getImplementation();
    domImplLS = domImpl.getFeature("LS","3.0");
    test.ok(domImplLS !== null, "domImplLSNotNull");
    output = domImplLS.createLSOutput();
    test.ok(output !== null, "outputNotNull");

    test.done();
  },
  /**
   * DOMImplementationLS can be obtained by DOMImplementation.getFeature("+lS", "3.0").
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#DOMImplementation3-getFeature
   */
  GetFeature2 : function (test) {
    var success, domImpl, domImplLS, output;
    domImpl = getImplementation();
    domImplLS = domImpl.getFeature("+lS","3.0");
    test.ok(domImplLS !== null, "domImplLSNotNull");
    output = domImplLS.createLSOutput();
    test.ok(output !== null, "outputNotNull");

    test.done();
  },
  /**
   * Implementations should return true for hasFeature("LS", "3.0").
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#ID-5CED94D7
   */
  HasFeature01 : function (test) {
    var success, domImpl, hasLS;
    domImpl = getImplementation();
    hasLS = domImpl.hasFeature("LS","3.0");
    test.ok(hasLS, "hasFeature_LS3");

    test.done();
  },
  /**
   * Implementations should return true for hasFeature("LS", null).
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#ID-5CED94D7
   */
  HasFeature02 : function (test) {
    var success, domImpl, hasLS, version = null;

    domImpl = getImplementation();
    hasLS = domImpl.hasFeature("LS",version);
    test.ok(hasLS, "hasFeature_LS");

    test.done();
  },
  /**
   * Implementations should return true for hasFeature("Core", "2.0") and hasFeature("Core", null).
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#ID-5CED94D7
   */
  HasFeature03 : function (test) {
    var success, domImpl, hasLS, NULL_VERSION = null;

    domImpl = getImplementation();
    hasLS = domImpl.hasFeature("cOrE","2.0");
    test.ok(hasLS, "hasFeature_Core2");
    hasLS = domImpl.hasFeature("cOrE",NULL_VERSION);
    test.ok(hasLS, "hasFeature_Core");

    test.done();
  },
  /**
   * Implementations should return true for hasFeature("+lS", "3.0").
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#ID-5CED94D7
   */
  HasFeature04 : function (test) {
    var success, domImpl, hasLS;
    domImpl = getImplementation();
    hasLS = domImpl.hasFeature("+lS","3.0");
    test.ok(hasLS, "hasFeature_LS3");

    test.done();
  },
  /**
   * The return values of hasFeature("lS-aSynC", "3.0") and hasFeature("+Ls-AsYNc", "3.0") should be equal.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#ID-5CED94D7
   */
  HasFeature05 : function (test) {
    var success, domImpl, hasLS1, hasLS2;
    domImpl = getImplementation();
    hasLS1 = domImpl.hasFeature("lS-aSynC","3.0");
    hasLS2 = domImpl.hasFeature("+Ls-AsYNc","3.0");
    test.strictEqual(hasLS1, hasLS2, "featuresEqual");

    test.done();
  },
  /**
   * Checks initial state of parser configuration.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-config
   */
  LSParserConfig1 : function (test) {
    var success, domImpl, parser, config, state, resolver, NULL_SCHEMA_TYPE = null;

    domImpl = getImplementation();
    parser = domImpl.createLSParser(1,NULL_SCHEMA_TYPE);
    config = parser.domConfig;

    test.ok(config !== null, "configNotNull");
    state = config.getParameter("cHarset-overrides-xml-encoding");
    test.ok(state, "charset-overrides-xml-encoding-is-true");
    state = config.getParameter("dIsallow-doctype");
    test.ok(state === false, "disallow-doctype-is-false");
    state = config.getParameter("iGnore-unknown-character-denormalizations");
    test.ok(state, "ignore-unknown-character-denormalizations-is-true");
    state = config.getParameter("iNfoset");
    test.ok(state, "infoset-is-true");
    state = config.getParameter("nAmespaces");
    test.ok(state, "namespaces-is-true");
    resolver = config.getParameter("rEsource-resolver");
    test.ok(resolver === null, "resource-resolver-is-null");
    state = config.getParameter("sUpported-media-types-only");
    test.ok(state === false, "supported-media-types-only-is-false");
    state = config.getParameter("wEll-formed");
    test.ok(state, "well-formed-is-true");

    test.done();
  },
  /**
   * Checks getParameterNames and canSetParameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-config
   */
  LSParserConfig2 : function (test) {
    var success, domImpl, parser, config, state, resolver, NULL_SCHEMA_TYPE = null;

    var parameterNames, parameterName, matchCount = 0, paramValue, canSet;
    domImpl = getImplementation();
    parser = domImpl.createLSParser(1,NULL_SCHEMA_TYPE);
    config = parser.domConfig;

    test.ok(config !== null, "configNotNull");
    parameterNames = config.parameterNames;

    test.ok(parameterNames !== null, "parameterNamesNotNull");
    for(var indexN10066 = 0;indexN10066 < parameterNames.length; indexN10066++) {
      parameterName = parameterNames.item(indexN10066);
      paramValue = config.getParameter(parameterName);
      canSet = config.canSetParameter(parameterName,paramValue);
      test.ok(canSet, "canSetToDefaultValue");
      config.setParameter(parameterName, paramValue);

      if(

	(("canonical-form".toUpperCase() == parameterName.toUpperCase()) || ("cdata-sections".toUpperCase() == parameterName.toUpperCase()) || ("check-character-normalization".toUpperCase() == parameterName.toUpperCase()) || ("comments".toUpperCase() == parameterName.toUpperCase()) || ("datatype-normalization".toUpperCase() == parameterName.toUpperCase()) || ("entities".toUpperCase() == parameterName.toUpperCase()) || ("error-handler".toUpperCase() == parameterName.toUpperCase()) || ("infoset".toUpperCase() == parameterName.toUpperCase()) || ("namespaces".toUpperCase() == parameterName.toUpperCase()) || ("namespace-declarations".toUpperCase() == parameterName.toUpperCase()) || ("normalize-characters".toUpperCase() == parameterName.toUpperCase()) || ("schema-location".toUpperCase() == parameterName.toUpperCase()) || ("schema-type".toUpperCase() == parameterName.toUpperCase()) || ("split-cdata-sections".toUpperCase() == parameterName.toUpperCase()) || ("validate".toUpperCase() == parameterName.toUpperCase()) || ("validate-if-schema".toUpperCase() == parameterName.toUpperCase()) || ("well-formed".toUpperCase() == parameterName.toUpperCase()) || ("element-content-whitespace".toUpperCase() == parameterName.toUpperCase()) || ("charset-overrides-xml-encoding".toUpperCase() == parameterName.toUpperCase()) || ("disallow-doctype".toUpperCase() == parameterName.toUpperCase()) || ("ignore-unknown-character-denormalizations".toUpperCase() == parameterName.toUpperCase()) || ("resource-resolver".toUpperCase() == parameterName.toUpperCase()) || ("supported-media-types-only".toUpperCase() == parameterName.toUpperCase()))

      ) {
	matchCount += 1;

      }

    }
    test.strictEqual(23, matchCount, "definedParameterCount");

    test.done();
  },
  /**
   * Checks support of charset-overrides-xml-encoding.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-config
   */
  LSParserConfig3 : function (test) {
    var success, domImpl, parser, config, state, canSet, NULL_SCHEMA_TYPE = null;

    var propertyName = "cHarset-overrides-xml-encoding";
    domImpl = getImplementation();
    parser = domImpl.createLSParser(1,NULL_SCHEMA_TYPE);
    config = parser.domConfig;

    test.ok(config !== null, "configNotNull");
    state = config.getParameter(propertyName);
    test.ok(state, "defaultValue");
    canSet = config.canSetParameter(propertyName,true);
    test.ok(canSet, "canSetTrue");
    canSet = config.canSetParameter(propertyName,false);
    test.ok(canSet, "canSetFalse");
    config.setParameter(propertyName, false);
    state = config.getParameter(propertyName);
    test.ok(state === false, "setFalse");
    config.setParameter(propertyName, true);
    state = config.getParameter(propertyName);
    test.ok(state, "setTrue");

    test.done();
  },
  /**
   * Checks support of disallow-doctype.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-config
   */
  LSParserConfig4 : function (test) {
    var success, domImpl, parser, config, state, canSet, propertyName = "dIsAllow-doctype", NULL_SCHEMA_TYPE = null;

    domImpl = getImplementation();
    parser = domImpl.createLSParser(1,NULL_SCHEMA_TYPE);
    config = parser.domConfig;

    test.ok(config !== null, "configNotNull");
    state = config.getParameter(propertyName);
    test.ok(state === false, "defaultValue");
    canSet = config.canSetParameter(propertyName,true);

    if(canSet) {
      config.setParameter(propertyName, true);
      state = config.getParameter(propertyName);
      test.ok(state, "setTrueIsEffective");
      config.setParameter(propertyName, false);
      state = config.getParameter(propertyName);
      test.ok(state === false, "setFalseIsEffective");
    } else {
      config.setParameter(propertyName, false);

     	success = false;
    	try {
        config.setParameter(propertyName, true);
      } catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
    	}

    	test.ok(success, "throw_NOT_SUPPORTED_ERR_if_canSetParameter_false");
    }

    test.done();
  },
  /**
   * Checks support of ignore-unknown-character-denormalizations.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-config
   */
  LSParserConfig5 : function (test) {
    var success, domImpl, parser, config, state, canSet, propertyName = "iGnOre-unknown-character-denormalizations", NULL_SCHEMA_TYPE = null;

    domImpl = getImplementation();
    parser = domImpl.createLSParser(1,NULL_SCHEMA_TYPE);
    config = parser.domConfig;

    test.ok(config !== null, "configNotNull");
    state = config.getParameter(propertyName);
    test.ok(state, "defaultValue");
    canSet = config.canSetParameter(propertyName,false);

    if(canSet) {
      config.setParameter(propertyName, false);
      state = config.getParameter(propertyName);
      test.ok(state === false, "setFalseIsEffective");
      config.setParameter(propertyName, true);
      state = config.getParameter(propertyName);
      test.ok(state === false, "setTrueIsEffective");
    } else {
      config.setParameter(propertyName, true);

      success = false;
      try {
        config.setParameter(propertyName, false);
      } catch(ex) {
       success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }

      test.ok(success, "throw_NOT_SUPPORTED_ERR_if_not_canSetParameter");
    }

    test.done();
  },
  /**
   * Checks support of infoset.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-config
   */
  LSParserConfig6 : function (test) {
    var success, domImpl, parser, config, state, canSet, NULL_SCHEMA_TYPE = null;

    var propertyName = "iNfoset";
    domImpl = getImplementation();
    parser = domImpl.createLSParser(1,NULL_SCHEMA_TYPE);
    config = parser.domConfig;

    test.ok(config !== null, "configNotNull");
    state = config.getParameter(propertyName);
    test.ok(state, "defaultValue");
    canSet = config.canSetParameter(propertyName,true);
    test.ok(canSet, "canSetTrue");
    canSet = config.canSetParameter(propertyName,false);
    test.ok(canSet, "canSetFalse");
    config.setParameter(propertyName, false);
    state = config.getParameter(propertyName);
    test.ok(state, "setFalse");
    config.setParameter("comments", false);
    state = config.getParameter(propertyName);
    test.ok(state === false, "falseWhenCommentsFalse");
    config.setParameter(propertyName, true);
    state = config.getParameter(propertyName);
    test.ok(state, "resetTrue");
    state = config.getParameter("comments");
    test.ok(state, "resetTrueComments");

    test.done();
  },
  /**
   * Checks support of namespaces.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-config
   */
  LSParserConfig7 : function (test) {
    var success, domImpl, parser, config, state, canSet, propertyName = "nAmespaces", NULL_SCHEMA_TYPE = null;

    domImpl = getImplementation();
    parser = domImpl.createLSParser(1,NULL_SCHEMA_TYPE);
    config = parser.domConfig;

    test.ok(config !== null, "configNotNull");
    state = config.getParameter(propertyName);
    test.ok(state, "defaultValue");
    canSet = config.canSetParameter(propertyName,false);

    if(canSet) {
      config.setParameter(propertyName, false);
      state = config.getParameter(propertyName);
      test.ok(state === false, "setFalseIsEffective");
      config.setParameter(propertyName, true);
      state = config.getParameter(propertyName);
      test.ok(state, "setTrueIsEffective");
    } else {
      config.setParameter(propertyName, true);

    	success = false;
    	try {
        config.setParameter(propertyName, false);
    	} catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
    	}

    	test.ok(success, "throw_NOT_SUPPORTED_ERR_if_not_canSetParameter");
    }

    test.done();
  },
  /**
   * Checks support of well-formed.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-config
   */
  LSParserConfig8 : function (test) {
    var success, domImpl, parser, config, state, canSet, NULL_SCHEMA_TYPE = null;

    var propertyName = "wEll-formed";
    domImpl = getImplementation();
    parser = domImpl.createLSParser(1,NULL_SCHEMA_TYPE);
    config = parser.domConfig;

    test.ok(config !== null, "configNotNull");
    state = config.getParameter(propertyName);
    test.ok(state, "defaultValue");
    canSet = config.canSetParameter(propertyName,true);
    test.ok(canSet, "canSetTrue");
    canSet = config.canSetParameter(propertyName,false);
    test.ok(canSet === false, "canSetFalse");

    success = false;
    try {
      config.setParameter(propertyName, false);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 9);
    }

    test.ok(success, "throw_NOT_SUPPORTED_EXCEPTION");

    test.done();
  },
  /**
   * Checks support of supported-media-types-only.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-config
   */
  LSParserConfig9 : function (test) {
    var success, domImpl, parser, config, state, canSet, propertyName = "sUpported-media-types-only", NULL_SCHEMA_TYPE = null;

    domImpl = getImplementation();
    parser = domImpl.createLSParser(1,NULL_SCHEMA_TYPE);
    config = parser.domConfig;

    test.ok(config !== null, "configNotNull");
    state = config.getParameter(propertyName);
    test.ok(state === false, "defaultValue");
    canSet = config.canSetParameter(propertyName,true);

    if(canSet) {
      config.setParameter(propertyName, true);
      state = config.getParameter(propertyName);
      test.ok(state, "setTrueIsEffective");
      config.setParameter(propertyName, false);
      state = config.getParameter(propertyName);

      test.ok(state === false, "setFalseIsEffective");
    } else {
      config.setParameter(propertyName, false);

      success = false;
	    try {
        config.setParameter(propertyName, true);
    	} catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
    	}

	    test.ok(success, "throw_NOT_SUPPORTED_ERR_if_canSetParameter_false");
    }

    test.done();
  },
  /**
   * Checks initial state of serializer configuration.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-config
   */
  LSSerializerConfig1 : function (test) {
    var success, domImpl, serializer, config, state, canSet;
    domImpl = getImplementation();
    serializer = domImpl.createLSSerializer();
    config = serializer.domConfig;

    test.ok(config !== null, "configNotNull");
    state = config.getParameter("cAnonical-form");
    test.ok(state === false, "canonical-form-is-false");
    state = config.getParameter("dIscard-default-content");
    test.ok(state, "discard-default-content-is-true");
    state = config.getParameter("fOrmat-pretty-print");
    test.ok(state === false, "format-pretty-print-is-false");
    state = config.getParameter("iGnore-unknown-character-denormalizations");
    test.ok(state, "ignore-unknown-character-denormalizations-is-true");
    state = config.getParameter("nOrmalize-characters");
    canSet = config.canSetParameter("normalize-characters",true);
    assertTrue("normalize-characters-default", (state ||
	        !canSet));
    state = config.getParameter("xMl-declaration");
    test.ok(state, "xml-declaration-is-true");
    state = config.getParameter("wEll-formed");
    test.ok(state, "well-formed-is-true");
    state = config.getParameter("nAmespaces");
    test.ok(state, "namespaces-is-true");
    state = config.getParameter("nAmespace-declarations");
    test.ok(state, "namespace-declarations-is-true");

    test.done();
  },
  /**
   * Checks support of namespace-declarations.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-config
   */
  LSSerializerConfig10 : function (test) {
    var success, domImpl, serializer, config, state, canSet, propertyName = "nAmespace-declarations";
    domImpl = getImplementation();
    serializer = domImpl.createLSSerializer();
    config = serializer.domConfig;

    test.ok(config !== null, "configNotNull");
    state = config.getParameter(propertyName);
    test.ok(state, "defaultValue");
    canSet = config.canSetParameter(propertyName,true);
    test.ok(canSet, "canSetTrue");
    canSet = config.canSetParameter(propertyName,false);
    test.ok(canSet, "canSetFalse");
    config.setParameter(propertyName, false);
    state = config.getParameter(propertyName);
    test.ok(state === false, "setFalseIsEffective");
    config.setParameter(propertyName, true);
    state = config.getParameter(propertyName);
    test.ok(state, "setTrueIsEffective");

    test.done();
  },
  /**
   * Checks getParameterNames and canSetParameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-config
   */
  LSSerializerConfig2 : function (test) {
    var success, domImpl, serializer, config, state, parameterNames, parameterName, matchCount = 0, paramValue, canSet;
    domImpl = getImplementation();
    serializer = domImpl.createLSSerializer();
    config = serializer.domConfig;

    test.ok(config !== null, "configNotNull");
    parameterNames = config.parameterNames;

    test.ok(parameterNames !== null, "parameterNamesNotNull");
    for(var indexN1005B = 0;indexN1005B < parameterNames.length; indexN1005B++) {
      parameterName = parameterNames.item(indexN1005B);
      paramValue = config.getParameter(parameterName);
      canSet = config.canSetParameter(parameterName,paramValue);
      test.ok(canSet, "canSetToDefaultValue");
      config.setParameter(parameterName, paramValue);

      if(

	(("canonical-form".toUpperCase() == parameterName.toUpperCase()) || ("cdata-sections".toUpperCase() == parameterName.toUpperCase()) || ("check-character-normalization".toUpperCase() == parameterName.toUpperCase()) || ("comments".toUpperCase() == parameterName.toUpperCase()) || ("datatype-normalization".toUpperCase() == parameterName.toUpperCase()) || ("entities".toUpperCase() == parameterName.toUpperCase()) || ("error-handler".toUpperCase() == parameterName.toUpperCase()) || ("infoset".toUpperCase() == parameterName.toUpperCase()) || ("namespaces".toUpperCase() == parameterName.toUpperCase()) || ("namespace-declarations".toUpperCase() == parameterName.toUpperCase()) || ("normalize-characters".toUpperCase() == parameterName.toUpperCase()) || ("split-cdata-sections".toUpperCase() == parameterName.toUpperCase()) || ("validate".toUpperCase() == parameterName.toUpperCase()) || ("validate-if-schema".toUpperCase() == parameterName.toUpperCase()) || ("well-formed".toUpperCase() == parameterName.toUpperCase()) || ("element-content-whitespace".toUpperCase() == parameterName.toUpperCase()) || ("discard-default-content".toUpperCase() == parameterName.toUpperCase()) || ("format-pretty-print".toUpperCase() == parameterName.toUpperCase()) || ("ignore-unknown-character-denormalizations".toUpperCase() == parameterName.toUpperCase()) || ("xml-declaration".toUpperCase() == parameterName.toUpperCase()))

      ) {
	matchCount += 1;

      }

    }
    test.strictEqual(20, matchCount, "definedParameterCount");

    test.done();
  },
  /**
   * Checks support of canonical-form.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-config
   */
  LSSerializerConfig3 : function (test) {
    var success, domImpl, serializer, config, state, canSet, propertyName = "cAnonical-form";
    domImpl = getImplementation();
    serializer = domImpl.createLSSerializer();
    config = serializer.domConfig;

    test.ok(config !== null, "configNotNull");
    state = config.getParameter(propertyName);
    test.ok(state === false, "defaultValue");
    canSet = config.canSetParameter(propertyName,true);

    if(
      canSet
    ) {
      config.setParameter(propertyName, true);
      state = config.getParameter(propertyName);
      test.ok(state, "setTrueIsEffective");
      config.setParameter(propertyName, false);
      state = config.getParameter(propertyName);
      test.ok(state === false, "setFalseIsEffective");

    }

    else {
      config.setParameter(propertyName, false);

      {
	success = false;
	try {
          config.setParameter(propertyName, true);
	}
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 9);
	}
	test.ok(success, "throw_NOT_SUPPORTED_ERR_if_canSetParameter_false");
      }

    }

    test.done();
  },
  /**
   * Checks support of discard-default-content.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-config
   */
  LSSerializerConfig4 : function (test) {
    var success, domImpl, serializer, config, state, canSet, propertyName = "dIscard-default-content";
    domImpl = getImplementation();
    serializer = domImpl.createLSSerializer();
    config = serializer.domConfig;

    test.ok(config !== null, "configNotNull");
    state = config.getParameter(propertyName);
    test.ok(state, "defaultValue");
    canSet = config.canSetParameter(propertyName,true);
    test.ok(canSet, "canSetTrue");
    canSet = config.canSetParameter(propertyName,false);
    test.ok(canSet, "canSetFalse");
    config.setParameter(propertyName, false);
    state = config.getParameter(propertyName);
    test.ok(state === false, "setFalse");
    config.setParameter(propertyName, true);
    state = config.getParameter(propertyName);
    test.ok(state, "setTrue");

    test.done();
  },
  /**
   * Checks support of format-pretty-print.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-config
   */
  LSSerializerConfig5 : function (test) {
    var success, domImpl, serializer, config, state, canSet, propertyName = "fOrmat-pretty-print";
    domImpl = getImplementation();
    serializer = domImpl.createLSSerializer();
    config = serializer.domConfig;

    test.ok(config !== null, "configNotNull");
    state = config.getParameter(propertyName);
    test.ok(state === false, "defaultValue");
    canSet = config.canSetParameter(propertyName,true);

    if(
      canSet
    ) {
      config.setParameter(propertyName, true);
      state = config.getParameter(propertyName);
      test.ok(state, "setTrueIsEffective");
      config.setParameter(propertyName, false);
      state = config.getParameter(propertyName);
      test.ok(state === false, "setFalseIsEffective");

    }

    else {
      config.setParameter(propertyName, false);

      {
	success = false;
	try {
          config.setParameter(propertyName, true);
	}
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 9);
	}
	test.ok(success, "throw_NOT_SUPPORTED_ERR_if_canSetParameter_false");
      }

    }

    test.done();
  },
  /**
   * Checks support of ignore-unknown-character-denormalizations.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-config
   */
  LSSerializerConfig6 : function (test) {
    var success, domImpl, serializer, config, state, canSet, propertyName = "iGnore-unknown-character-denormalizations";
    domImpl = getImplementation();
    serializer = domImpl.createLSSerializer();
    config = serializer.domConfig;

    test.ok(config !== null, "configNotNull");
    state = config.getParameter(propertyName);
    test.ok(state, "defaultValue");
    canSet = config.canSetParameter(propertyName,false);

    if(
      canSet
    ) {
      config.setParameter(propertyName, false);
      state = config.getParameter(propertyName);
      test.ok(state === false, "setFalseIsEffective");
      config.setParameter(propertyName, true);
      state = config.getParameter(propertyName);
      test.ok(state, "setTrueIsEffective");

    }

    else {
      config.setParameter(propertyName, true);

      {
	success = false;
	try {
          config.setParameter(propertyName, false);
	}
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 9);
	}
	test.ok(success, "throw_NOT_SUPPORTED_ERR_if_canSetParameter_false");
      }

    }

    test.done();
  },
  /**
   * Checks support of xml-declaration.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-config
   */
  LSSerializerConfig7 : function (test) {
    var success, domImpl, serializer, config, state, canSet, propertyName = "xMl-declaration";
    domImpl = getImplementation();
    serializer = domImpl.createLSSerializer();
    config = serializer.domConfig;

    test.ok(config !== null, "configNotNull");
    state = config.getParameter(propertyName);
    test.ok(state, "defaultValue");
    canSet = config.canSetParameter(propertyName,true);
    test.ok(canSet, "canSetTrue");
    canSet = config.canSetParameter(propertyName,false);
    test.ok(canSet, "canSetFalse");
    config.setParameter(propertyName, false);
    state = config.getParameter(propertyName);
    test.ok(state === false, "setFalse");
    config.setParameter(propertyName, true);
    state = config.getParameter(propertyName);
    test.ok(state, "setTrue");

    test.done();
  },
  /**
   * Checks support of well-formed.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-config
   */
  LSSerializerConfig8 : function (test) {
    var success, domImpl, serializer, config, state, canSet, propertyName = "wEll-formed";
    domImpl = getImplementation();
    serializer = domImpl.createLSSerializer();
    config = serializer.domConfig;

    test.ok(config !== null, "configNotNull");
    state = config.getParameter(propertyName);
    test.ok(state, "defaultValue");
    canSet = config.canSetParameter(propertyName,true);
    test.ok(canSet, "canSetTrue");
    canSet = config.canSetParameter(propertyName,false);

    if(
      canSet
    ) {
      config.setParameter(propertyName, false);
      state = config.getParameter(propertyName);
      test.ok(state === false, "setFalseIsEffective");
      config.setParameter(propertyName, true);
      state = config.getParameter(propertyName);
      test.ok(state, "setTrueIsEffective");

    }

    else {

      {
	success = false;
	try {
          config.setParameter(propertyName, false);
	}
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 9);
	}
	test.ok(success, "throw_NOT_SUPPORTED_EXCEPTION");
      }

    }

    test.done();
  },
  /**
   * Checks support of namespaces.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-config
   */
  LSSerializerConfig9 : function (test) {
    var success, domImpl, serializer, config, state, canSet, propertyName = "nAmespaces";
    domImpl = getImplementation();
    serializer = domImpl.createLSSerializer();
    config = serializer.domConfig;

    test.ok(config !== null, "configNotNull");
    state = config.getParameter(propertyName);
    test.ok(state, "defaultValue");
    canSet = config.canSetParameter(propertyName,true);
    test.ok(canSet, "canSetTrue");
    canSet = config.canSetParameter(propertyName,false);

    if(
      canSet
    ) {
      config.setParameter(propertyName, false);
      state = config.getParameter(propertyName);
      test.ok(state === false, "setFalseIsEffective");
      config.setParameter(propertyName, true);
      state = config.getParameter(propertyName);
      test.ok(state, "setTrueIsEffective");

    }

    else {

      {
	success = false;
	try {
          config.setParameter(propertyName, false);
	}
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 9);
	}
	test.ok(success, "settingFalseWhenNotSupported");
      }

    }

    test.done();
  },
  /**
   * Writes a document to a URL for a temporary file and rereads the document.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSInput-systemId
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSOutput-systemId
   */
  SystemId1 : function (test) {
    var success, testDoc, domImpl, output, serializer, systemId, checkSystemId, status, input, parser, checkDoc, docElem, docElemName, NULL_SCHEMA_TYPE = null;

    var testDocRef = null;
    if (typeof(this.testDoc) != 'undefined') {
      testDocRef = this.testDoc;
    }
    testDoc = load(testDocRef, "testDoc", "test0");
    domImpl = getImplementation();
    output = domImpl.createLSOutput();
    checkSystemId = output.systemId;

    test.ok(checkSystemId === null, "LSOutputSystemIdInitiallyNull");
    // TODO: umm.. what? are these tests complete?
    // fail("Unrecognized method or attribute createTempURI");

    output.systemId = systemId;

    checkSystemId = output.systemId;

    test.strictEqual(systemId, checkSystemId, "LSOutputSystemIdMatch");
    serializer = domImpl.createLSSerializer();
    status = serializer.write(testDoc,output);
    test.ok(status, "writeStatus");
    input = domImpl.createLSInput();
    checkSystemId = input.systemId;

    test.ok(checkSystemId === null, "LSInputSystemIdInitiallyNull");
    input.systemId = systemId;

    checkSystemId = input.systemId;

    test.strictEqual(systemId, checkSystemId, "LSInputSystemIdMatch");
    parser = domImpl.createLSParser(1,NULL_SCHEMA_TYPE);
    checkDoc = parser.parse(input);
    test.ok(checkDoc !== null, "checkNotNull");
    docElem = checkDoc.documentElement;

    docElemName = docElem.nodeName;

    test.strictEqual("elt0", docElemName, "checkDocElemName");

    test.done();
  },
  /**
   * Writes a document to a URL for a temporary http document and rereads the document.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSInput-systemId
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSOutput-systemId
   */
  SystemId2 : function (test) {
    var success, testDoc, domImpl, output, serializer, systemId, checkSystemId, status, input, parser, checkDoc, docElem, docElemName, NULL_SCHEMA_TYPE = null;

    var testDocRef = null;
    if (typeof(this.testDoc) != 'undefined') {
      testDocRef = this.testDoc;
    }
    testDoc = load(testDocRef, "testDoc", "test0");
    domImpl = getImplementation();
    output = domImpl.createLSOutput();
    checkSystemId = output.systemId;

    test.ok(checkSystemId === null, "LSOutputSystemIdInitiallyNull");
    // TODO: umm.. what? are these tests complete?
    // fail("Unrecognized method or attribute createTempURI");

    output.systemId = systemId;

    checkSystemId = output.systemId;

    test.strictEqual(systemId, checkSystemId, "LSOutputSystemIdMatch");
    serializer = domImpl.createLSSerializer();
    status = serializer.write(testDoc,output);
    test.ok(status, "writeStatus");
    input = domImpl.createLSInput();
    checkSystemId = input.systemId;

    test.ok(checkSystemId === null, "LSInputSystemIdInitiallyNull");
    input.systemId = systemId;

    checkSystemId = input.systemId;

    test.strictEqual(systemId, checkSystemId, "LSInputSystemIdMatch");
    parser = domImpl.createLSParser(1,NULL_SCHEMA_TYPE);
    checkDoc = parser.parse(input);
    test.ok(checkDoc !== null, "checkNotNull");
    docElem = checkDoc.documentElement;

    docElemName = docElem.nodeName;

    test.strictEqual("elt0", docElemName, "checkDocElemName");

    test.done();
  },
  /**
   *
   Load a document with canonical-form = true and see that entity references are not present in
   the element content.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-canonical-form
   */
  canonicalform01 : function (test) {
    var success, doc, docElem, elemList, elem, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, canSet;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSet = domConfig.canSetParameter("canonical-form",true);

    if(
      canSet
    ) {
      domConfig.setParameter("canonical-form", true);
      resourceURI = getResourceURI("hc_staff");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagName("acronym");
      elem = elemList.item(1);
      node = elem.firstChild;

      nodeType = node.nodeType;

      test.strictEqual(3, nodeType, "acrContentIsText");

    }

    test.done();
  },
  /**
   *
   Load a document with canonical-form = true and see that CDATASection are not present in
   the parsed document.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-canonical-form
   */
  canonicalform03 : function (test) {
    var success, doc, elem, node, nodeType, domConfig, pList, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, canSet;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSet = domConfig.canSetParameter("canonical-form",true);

    if(
      canSet
    ) {
      domConfig.setParameter("canonical-form", true);
      resourceURI = getResourceURI("hc_staff");
      doc = lsParser.parseURI(resourceURI);
      pList = doc.getElementsByTagName("strong");
      elem = pList.item(1);
      node = elem.lastChild;

      nodeType = node.nodeType;

      test.strictEqual(3, nodeType, "childIsText");

    }

    test.done();
  },
  /**
   *
   Attempt to load a namespace invalid document with canonical-form = true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-canonical-form
   */
  canonicalform04 : function (test) {
    var success, doc, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, canSet;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSet = domConfig.canSetParameter("canonical-form",true);

    if(
      canSet
    ) {
      domConfig.setParameter("canonical-form", true);
      resourceURI = getResourceURI("namespaces1");

      {
	success = false;
	try {
          doc = lsParser.parseURI(resourceURI);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 81);
	}
	test.ok(success, "throw_PARSE_ERR");
      }

    }

    test.done();
  },
  /**
   *
   Load a document with canonical-form = true and see that attributes for namespace declarations are present.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-namespace-declarations
   */
  canonicalform05 : function (test) {
    var success, doc, docElem, elemList, elem, node, nodeType, domConfig, domImplLS, lsParser, canSet, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSet = domConfig.canSetParameter("canonical-form",true);

    if(
      canSet
    ) {
      domConfig.setParameter("canonical-form", true);
      resourceURI = getResourceURI("hc_staff");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagName("p");
      elem = elemList.item(0);
      node = elem.getAttributeNode("xmlns:dmstc");
      test.ok(node !== null, "nsAttrNotNull");

    }

    test.done();
  },
  /**
   *
   Load a document with canonical-form and validate = true and check that
   element content whitespace is not eliminated.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-canonical-form
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate
   */
  canonicalform06 : function (test) {
    var success, doc, elem, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, canSetValidate, canSetCanonicalForm, elemList;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetCanonicalForm = domConfig.canSetParameter("canonical-form",true);

    if(

      (canSetValidate && canSetCanonicalForm)

    ) {
      domConfig.setParameter("validate", true);
      domConfig.setParameter("canonical-form", true);
      resourceURI = getResourceURI("hc_staff");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagName("p");
      elem = elemList.item(0);
      node = elem.firstChild;

      nodeType = node.nodeType;

      test.strictEqual(3, nodeType, "nodeIsText");

    }

    test.done();
  },
  /**
   *
   Normalize document based on section 3.1 with canonical-form set to true and check normalized document.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-canonical-form
   */
  canonicalform08 : function (test) {
    var success, doc, bodyList, body, domConfig, canSet, canSetValidate, node, nodeName, nodeValue, nodeType, length, text, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, canSetCanonicalForm;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSetCanonicalForm = domConfig.canSetParameter("canonical-form",true);

    if(
      canSetCanonicalForm
    ) {
      domConfig.setParameter("canonical-form", true);
      resourceURI = getResourceURI("canonicalform01");
      doc = lsParser.parseURI(resourceURI);
      node = doc.firstChild;

      nodeType = node.nodeType;

      test.strictEqual(7, nodeType, "PIisFirstChild");
      nodeValue = node.data;

      length = nodeValue.length;
      test.strictEqual(36, length, "piDataLength");
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.strictEqual(3, nodeType, "TextisSecondChild");
      nodeValue = node.nodeValue;

      length = nodeValue.length;
      test.strictEqual(1, length, "secondChildLength");
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.strictEqual(1, nodeType, "ElementisThirdChild");
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.strictEqual(3, nodeType, "TextisFourthChild");
      nodeValue = node.nodeValue;

      length = nodeValue.length;
      test.strictEqual(1, length, "fourthChildLength");
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.strictEqual(7, nodeType, "PIisFifthChild");
      nodeValue = node.data;

      test.strictEqual("", nodeValue, "trailingPIData");
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.strictEqual(3, nodeType, "TextisSixthChild");
      nodeValue = node.nodeValue;

      length = nodeValue.length;
      test.strictEqual(1, length, "sixthChildLength");
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.strictEqual(8, nodeType, "CommentisSeventhChild");
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.strictEqual(3, nodeType, "TextisEighthChild");
      nodeValue = node.nodeValue;

      length = nodeValue.length;
      test.strictEqual(1, length, "eighthChildLength");
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.strictEqual(8, nodeType, "CommentisNinthChild");
      node = node.nextSibling;

      test.ok(node === null, "TenthIsNull");

    }

    test.done();
  },
  /**
   *
   Normalize document based on section 3.1 with canonical-form set to true
   and comments to false and check normalized document.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-canonical-form
   */
  canonicalform09 : function (test) {
    var success, doc, bodyList, body, domConfig, canSet, canSetValidate, node, nodeName, nodeValue, nodeType, length, text, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, canSetCanonicalForm;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSetCanonicalForm = domConfig.canSetParameter("canonical-form",true);

    if(
      canSetCanonicalForm
    ) {
      domConfig.setParameter("canonical-form", true);
      domConfig.setParameter("comments", false);
      resourceURI = getResourceURI("canonicalform01");
      doc = lsParser.parseURI(resourceURI);
      node = doc.firstChild;

      nodeType = node.nodeType;

      test.strictEqual(7, nodeType, "PIisFirstChild");
      nodeValue = node.data;

      length = nodeValue.length;
      test.strictEqual(36, length, "piDataLength");
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.strictEqual(3, nodeType, "TextisSecondChild");
      nodeValue = node.nodeValue;

      length = nodeValue.length;
      test.strictEqual(1, length, "secondChildLength");
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.strictEqual(1, nodeType, "ElementisThirdChild");
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.strictEqual(3, nodeType, "TextisFourthChild");
      nodeValue = node.nodeValue;

      length = nodeValue.length;
      test.strictEqual(1, length, "fourthChildLength");
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.strictEqual(7, nodeType, "PIisFifthChild");
      nodeValue = node.data;

      test.strictEqual("", nodeValue, "trailingPIData");
      node = node.nextSibling;

      test.ok(node === null, "SixthIsNull");

    }

    test.done();
  },
  /**
   *
   Check elimination of unnecessary namespace prefixes when
   normalized with canonical-form = true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-canonical-form
   */
  canonicalform10 : function (test) {
    var success, doc, divList, div, domConfig, node, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, canSetCanonicalForm;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSetCanonicalForm = domConfig.canSetParameter("canonical-form",true);

    if(
      canSetCanonicalForm
    ) {
      domConfig.setParameter("canonical-form", true);
      resourceURI = getResourceURI("canonicalform03");
      doc = lsParser.parseURI(resourceURI);
      divList = doc.getElementsByTagName("div");
      div = divList.item(5);
      node = div.getAttributeNode("xmlns");
      test.ok(node !== null, "xmlnsPresent");
      node = div.getAttributeNode("xmlns:a");
      test.ok(node === null, "xmlnsANotPresent");

    }

    test.done();
  },
  /**
   *
   Check that default attributes are made explicitly specified.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-canonical-form
   */
  canonicalform11 : function (test) {
    var success, doc, elemList, elem, domConfig, attr, attrValue, attrSpecified, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, canSetCanonicalForm;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSetCanonicalForm = domConfig.canSetParameter("canonical-form",true);

    if(
      canSetCanonicalForm
    ) {
      domConfig.setParameter("canonical-form", true);
      resourceURI = getResourceURI("canonicalform03");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagName("acronym");
      elem = elemList.item(0);
      attr = elem.getAttributeNode("title");
      test.ok(attr !== null, "titlePresent");
      attrSpecified = attr.specified;

      test.ok(attrSpecified, "titleSpecified");
      attrValue = attr.nodeValue;

      test.strictEqual("default", attrValue, "titleValue");

    }

    test.done();
  },
  /**
   *
   Load a document with canonical-form = true and see that the DocumentType node is eliminated.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-canonical-form
   */
  canonicalform12 : function (test) {
    var success, doc, doctype, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, canSet;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSet = domConfig.canSetParameter("canonical-form",true);

    if(
      canSet
    ) {
      domConfig.setParameter("canonical-form", true);
      resourceURI = getResourceURI("hc_staff");
      doc = lsParser.parseURI(resourceURI);
      doctype = doc.doctype;

      test.ok(doctype === null, "doctypeIsNull");

    }

    test.done();
  },
  /**
   *
   Serializing an XML 1.1 document when canonical-form raises a SERIALIZE_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-canonical-form
   */
  canonicalform13 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, docType = null;

    var output, canSet;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    domConfig = lsSerializer.domConfig;

    canSet = domConfig.canSetParameter("canonical-form",true);

    if(
      canSet
    ) {
      domConfig.setParameter("", true);
      doc = domImplLS.createDocument("http://www.example.org","test",docType);

      try {
        doc.xmlVersion = "1.1";

      } catch (ex) {
	if (typeof(ex.code) != 'undefined') {
          switch(ex.code) {
          case /* NOT_SUPPORTED_ERR */ 9 :
            return ;
          default:
            throw ex;
          }
        } else {
          throw ex;
        }
      }

      {
	success = false;
	try {
          output = lsSerializer.writeToString(doc);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 82);
	}
	test.ok(success, "throw_SERIALIZE_ERR");
      }

    }

    test.done();
  },
  /**
   *
   Load a document with cdata-sections = false and see that CDATASection are not present in
   the parsed document.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-cdata-sections
   */
  cdatasections01 : function (test) {
    var success, doc, elem, node, nodeType, domConfig, pList, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("cdata-sections", false);
    resourceURI = getResourceURI("hc_staff");
    doc = lsParser.parseURI(resourceURI);
    pList = doc.getElementsByTagName("strong");
    elem = pList.item(1);
    node = elem.lastChild;

    nodeType = node.nodeType;

    test.strictEqual(3, nodeType, "childIsText");

    test.done();
  },
  /**
   *
   Load a document with cdata-sections = true and see that CDATASection are present in
   the parsed document.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-cdata-sections
   */
  cdatasections02 : function (test) {
    var success, doc, elem, node, nodeType, domConfig, pList, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("cdata-sections", true);
    resourceURI = getResourceURI("hc_staff");
    doc = lsParser.parseURI(resourceURI);
    pList = doc.getElementsByTagName("strong");
    elem = pList.item(1);
    node = elem.lastChild;

    nodeType = node.nodeType;

    test.strictEqual(4, nodeType, "childIsCDATA");

    test.done();
  },
  /**
   *
   CDATASections should be preserved when cdata-sections is true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-cdata-sections
   */
  cdatasections03 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, docType = null;

    var docElem, newNode, output, retNode;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    doc = domImplLS.createDocument("http://www.example.org","test",docType);
    docElem = doc.documentElement;

    newNode = doc.createCDATASection("foo");
    retNode = docElem.appendChild(newNode);
    domConfig = lsSerializer.domConfig;

    domConfig.setParameter("cdata-sections", true);
    output = lsSerializer.writeToString(doc);
    test.ok(output.indexOf("![CDATA[foo]]") >= 0, "containsCDATA");

    test.done();
  },
  /**
   *
   CDATASections should be eliminated when cdata-sections is false.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-cdata-sections
   */
  cdatasections04 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, docType = null;

    var docElem, newNode, output, retNode;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    doc = domImplLS.createDocument("http://www.example.org","test",docType);
    docElem = doc.documentElement;

    newNode = doc.createCDATASection("foo");
    retNode = docElem.appendChild(newNode);
    domConfig = lsSerializer.domConfig;

    domConfig.setParameter("cdata-sections", false);
    output = lsSerializer.writeToString(doc);
    test.ok(output.indexOf("&gt;foo&lt;/") >= 0, "containsCDATA");

    test.done();
  },
  /**
   *
   Parsing a non-Unicode normalized document should not raise an exception if check-character-normalization
   is false.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-check-character-normalization
   */
  checkcharacternormalization01 : function (test) {
    var success, doc, domConfig, domImplLS, lsParser, resourceURI, nullSchemaLanguage = null;

    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaLanguage);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("check-character-normalization", false);
    resourceURI = getResourceURI("characternormalization1");
    doc = lsParser.parseURI(resourceURI);
    test.ok(doc !== null, "docNotNull");

    test.done();
  },
  /**
   *
   Parsing a non-Unicode normalized document should raise PARSE_ERR if check-character-normalization
   is false.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-check-character-normalization
   */
  checkcharacternormalization02 : function (test) {
    var success, doc, domConfig, domImplLS, lsParser, resourceURI, canSet, nullSchemaLanguage = null;
    
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error, severity, type, errorCount = 0;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaLanguage);
    domConfig = lsParser.domConfig;

    canSet = domConfig.canSetParameter("check-character-normalization",true);

    if(
      canSet
    ) {
      domConfig.setParameter("check-character-normalization", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      resourceURI = getResourceURI("characternormalization1");

      {
	success = false;
	try {
          doc = lsParser.parseURI(resourceURI);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 81);
	}
	test.ok(success, "throw_PARSE_ERR");
      }
      errors = errorMonitor.allErrors;
      for(var indexN1008E = 0;indexN1008E < errors.length; indexN1008E++) {
        error = errors[indexN1008E];
        severity = error.severity;

        type = error.type;

	if(

	  (severity > 1)

	) {
	  test.strictEqual(2, severity, "isError");
          test.strictEqual("check-character-normalization-failure", type, "isCheck_Failure");
          errorCount += 1;

	}

      }
      test.strictEqual(1, errorCount, "oneError");

    }

    test.done();
  },
  /**
   *
   Characters should not be checked for normalization on serialization if check-character-normalization = false.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-check-character-normalization
   */
  checkcharacternormalization03 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, docType = null;

    var docElem, newNode, output, retNode;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    doc = domImplLS.createDocument("http://www.example.org","suçon",docType);
    docElem = doc.documentElement;

    domConfig = lsSerializer.domConfig;

    domConfig.setParameter("check-character-normalization", false);
    domConfig.setParameter("normalize-characters", false);
    output = lsSerializer.writeToString(doc);

    test.done();
  },
  /**
   *
   Characters should be checked for normalization on serialization if check-character-normalization = true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-check-character-normalization
   */
  checkcharacternormalization04 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, docType = null;

    var docElem, newNode, output, retNode;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error, severity, type, canSet, errorCount = 0;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    doc = domImplLS.createDocument("http://www.example.org","suçon",docType);
    docElem = doc.documentElement;

    domConfig = lsSerializer.domConfig;

    canSet = domConfig.canSetParameter("check-character-normalization",true);

    if(
      canSet
    ) {
      domConfig.setParameter("check-character-normalization", true);
      domConfig.setParameter("normalize-characters", false);
      domConfig.setParameter("error-handler", errorMonitor.handleError);

      {
	success = false;
	try {
          output = lsSerializer.writeToString(doc);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 82);
	}
	test.ok(success, "throw_SERIALIZE_ERR");
      }
      errors = errorMonitor.allErrors;
      for(var indexN100A3 = 0;indexN100A3 < errors.length; indexN100A3++) {
        error = errors[indexN100A3];
        severity = error.severity;

        type = error.type;

	if(("check-character-normalization-failure" == type)) {
	  test.strictEqual(2, severity, "severityError");
          errorCount += 1;

	}

      }
      assertTrue("hasErrors", (errorCount > 0));

    }

    test.done();
  },
  /**
   *
   Load a document with comments = false and see that comments are not present in
   the parsed document.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-comments
   */
  comments01 : function (test) {
    var success, doc, docElem, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("comments", false);
    resourceURI = getResourceURI("hc_staff");
    doc = lsParser.parseURI(resourceURI);
    docElem = doc.documentElement;

    node = docElem.previousSibling;

    nodeType = node.nodeType;

    test.strictEqual(10, nodeType, "nodeIsDocType");

    test.done();
  },
  /**
   *
   Load a document with comments = true and see that comments are present in
   the parsed document.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-comments
   */
  comments02 : function (test) {
    var success, doc, docElem, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("comments", true);
    resourceURI = getResourceURI("hc_staff");
    doc = lsParser.parseURI(resourceURI);
    docElem = doc.documentElement;

    node = docElem.previousSibling;

    nodeType = node.nodeType;

    test.strictEqual(8, nodeType, "nodeIsDocType");

    test.done();
  },
  /**
   *
   Comments should be preserved when comments is true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-comments
   */
  comments03 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, docType = null;

    var docElem, newNode, output, retNode;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    doc = domImplLS.createDocument("http://www.example.org","test",docType);
    docElem = doc.documentElement;

    newNode = doc.createComment("foo");
    retNode = docElem.appendChild(newNode);
    domConfig = lsSerializer.domConfig;

    domConfig.setParameter("comments", true);
    output = lsSerializer.writeToString(doc);
    test.ok(output.indexOf("&gt;&lt;!--foo--&gt;&lt;/") >= 0, "hasComment");

    test.done();
  },
  /**
   *
   Comments should be discarded when comments is false.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-comments
   */
  comments04 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, docType = null;

    var docElem, newNode, output, retNode;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    doc = domImplLS.createDocument("http://www.example.org","test",docType);
    docElem = doc.documentElement;

    newNode = doc.createComment("foo");
    retNode = docElem.appendChild(newNode);
    domConfig = lsSerializer.domConfig;

    domConfig.setParameter("comments", false);
    output = lsSerializer.writeToString(doc);

    {
      test.ok((output.indexOf("<!--") >= 0) === false, "noComment");
    }
    test.done();
  },
  /**
   *
   Normalize document with datatype-normalization set to true.
   Check if double values were normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-datatype-normalization
   */
  datatypenormalization01 : function (test) {
    var success, doc, elemList, element, domConfig, str, canSetNormalization, canSetValidate, canSetXMLSchema, xsdNS = "http://www.w3.org/2001/XMLSchema", domImplLS, lsParser, resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,xsdNS);

    if(

      (lsParser == null)

    ) {
      return ;

    }
    domConfig = lsParser.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      resourceURI = getResourceURI("datatype_normalization");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","double");
      element = elemList.item(0);
      str = element.getAttribute("value");
      test.strictEqual("+0003.141592600E+0000", str, "firstValue");
      str = element.getAttribute("union");
      test.strictEqual("+0003.141592600E+0000", str, "firstUnion");
      str = element.textContent;

      test.strictEqual("-31415926.00E-7 2.718", str, "firstList");
      element = elemList.item(1);
      str = element.getAttribute("value");
      test.strictEqual("NaN", str, "secondValue");
      str = element.getAttribute("union");
      test.strictEqual("NaN", str, "secondUnion");
      str = element.textContent;

      test.strictEqual("INF -INF", str, "secondList");
      element = elemList.item(2);
      str = element.getAttribute("value");
      test.strictEqual("1", str, "thirdValue");
      str = element.getAttribute("union");
      test.strictEqual("1", str, "thirdUnion");
      str = element.textContent;

      test.strictEqual("-0", str, "thirdList");

    }

    test.done();
  },
  /**
   *
   Normalize document with datatype-normalization set to true.
   Check if decimal values were normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-datatype-normalization
   */
  datatypenormalization02 : function (test) {
    var success, doc, elemList, element, domConfig, str, canSetNormalization, canSetValidate, canSetXMLSchema, xsdNS = "http://www.w3.org/2001/XMLSchema", domImplLS, lsParser, resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,xsdNS);

    if(

      (lsParser == null)

    ) {
      return ;

    }
    domConfig = lsParser.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      resourceURI = getResourceURI("datatype_normalization");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","decimal");
      element = elemList.item(0);
      str = element.getAttribute("value");
      test.strictEqual("+0003.141592600", str, "firstValue");
      str = element.getAttribute("union");
      test.strictEqual("+0003.141592600", str, "firstUnion");
      str = element.textContent;

      test.strictEqual("+10 .1", str, "firstList");
      element = elemList.item(1);
      str = element.getAttribute("value");
      test.strictEqual("01", str, "secondValue");
      str = element.getAttribute("union");
      test.strictEqual("01", str, "secondUnion");
      str = element.textContent;

      test.strictEqual("-.001", str, "secondList");

    }

    test.done();
  },
  /**
   *
   Normalize document with datatype-normalization set to true.
   Check if boolean values were whitespace normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-datatype-normalization
   */
  datatypenormalization03 : function (test) {
    var success, doc, elemList, element, domConfig, str, canSetNormalization, canSetValidate, canSetXMLSchema, xsdNS = "http://www.w3.org/2001/XMLSchema", domImplLS, lsParser, resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,xsdNS);

    if(

      (lsParser == null)

    ) {
      return ;

    }
    domConfig = lsParser.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      resourceURI = getResourceURI("datatype_normalization");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","boolean");
      element = elemList.item(0);
      str = element.getAttribute("value");
      test.strictEqual("true", str, "firstValue");
      str = element.getAttribute("union");
      test.strictEqual("false", str, "firstUnion");
      str = element.textContent;

      test.strictEqual("false true false", str, "firstList");
      element = elemList.item(1);
      str = element.getAttribute("value");
      test.strictEqual("1", str, "secondValue");
      str = element.getAttribute("union");
      test.strictEqual("0", str, "secondUnion");
      str = element.textContent;

      test.strictEqual("0 1 0", str, "secondList");

    }

    test.done();
  },
  /**
   *
   Normalize document with datatype-normalization set to true.
   Check if float values were normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-datatype-normalization
   */
  datatypenormalization04 : function (test) {
    var success, doc, elemList, element, domConfig, str, canSetNormalization, canSetValidate, canSetXMLSchema, xsdNS = "http://www.w3.org/2001/XMLSchema", domImplLS, lsParser, resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,xsdNS);

    if(

      (lsParser == null)

    ) {
      return ;

    }
    domConfig = lsParser.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      resourceURI = getResourceURI("datatype_normalization");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","float");
      element = elemList.item(0);
      str = element.getAttribute("value");
      test.strictEqual("+0003.141592600E+0000", str, "firstValue");
      str = element.getAttribute("union");
      test.strictEqual("+0003.141592600E+0000", str, "firstUnion");
      str = element.textContent;

      test.strictEqual("-31415926.00E-7 2.718", str, "firstList");
      element = elemList.item(1);
      str = element.getAttribute("value");
      test.strictEqual("NaN", str, "secondValue");
      str = element.getAttribute("union");
      test.strictEqual("NaN", str, "secondUnion");
      str = element.textContent;

      test.strictEqual("INF -INF", str, "secondList");
      element = elemList.item(2);
      str = element.getAttribute("value");
      test.strictEqual("1", str, "thirdValue");
      str = element.getAttribute("union");
      test.strictEqual("1", str, "thirdUnion");
      str = element.textContent;

      test.strictEqual("-0", str, "thirdList");

    }

    test.done();
  },
  /**
   *
   Normalize document with datatype-normalization set to true.
   Check if dateTime values were correctly normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-datatype-normalization
   */
  datatypenormalization05 : function (test) {
    var success, doc, elemList, element, domConfig, str, canSetNormalization, canSetValidate, canSetXMLSchema, xsdNS = "http://www.w3.org/2001/XMLSchema", domImplLS, lsParser, resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,xsdNS);

    if(

      (lsParser == null)

    ) {
      return ;

    }
    domConfig = lsParser.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      resourceURI = getResourceURI("datatype_normalization");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","dateTime");
      element = elemList.item(0);
      str = element.getAttribute("value");
      test.strictEqual("2004-01-21T15:30:00-05:00", str, "firstValue");
      str = element.getAttribute("union");
      test.strictEqual("2004-01-21T20:30:00-05:00", str, "firstUnion");
      str = element.textContent;

      test.strictEqual("2004-01-21T15:30:00 2004-01-21T15:30:00Z", str, "firstList");
      element = elemList.item(1);
      str = element.getAttribute("value");
      test.strictEqual("2004-01-21T15:30:00.0000-05:00", str, "secondValue");
      str = element.getAttribute("union");
      test.strictEqual("2004-01-21T15:30:00.0000-05:00", str, "secondUnion");
      str = element.textContent;

      test.strictEqual("2004-01-21T15:30:00.0000", str, "secondList");
      element = elemList.item(2);
      str = element.getAttribute("value");
      test.strictEqual("2004-01-21T15:30:00.0001-05:00", str, "thirdValue");
      str = element.getAttribute("union");
      test.strictEqual("2004-01-21T15:30:00.0001-05:00", str, "thirdUnion");
      str = element.textContent;

      test.strictEqual("2004-01-21T15:30:00.0001", str, "thirdList");

    }

    test.done();
  },
  /**
   *
   Normalize document with datatype-normalization set to true.
   Check if time values were normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-datatype-normalization
   */
  datatypenormalization06 : function (test) {
    var success, doc, elemList, element, domConfig, str, canSetNormalization, canSetValidate, canSetXMLSchema, xsdNS = "http://www.w3.org/2001/XMLSchema", domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,xsdNS);

    if(

      (lsParser == null)

    ) {
      return ;

    }
    domConfig = lsParser.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      resourceURI = getResourceURI("datatype_normalization");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","time");
      element = elemList.item(0);
      str = element.getAttribute("value");
      test.strictEqual("15:30:00-05:00", str, "firstValue");
      str = element.getAttribute("union");
      test.strictEqual("15:30:00-05:00", str, "firstUnion");
      str = element.textContent;

      test.strictEqual("15:30:00", str, "firstList");
      element = elemList.item(1);
      str = element.getAttribute("value");
      test.strictEqual("15:30:00.0000-05:00", str, "secondValue");
      str = element.getAttribute("union");
      test.strictEqual("15:30:00.0000-05:00", str, "secondUnion");
      str = element.textContent;

      test.strictEqual("15:30:00.0000", str, "secondList");
      element = elemList.item(2);
      str = element.getAttribute("value");
      test.strictEqual("15:30:00.0001-05:00", str, "thirdValue");
      str = element.getAttribute("union");
      test.strictEqual("15:30:00.0001-05:00", str, "thirdUnion");
      str = element.textContent;

      test.strictEqual("15:30:00.0001", str, "thirdList");

    }

    test.done();
  },
  /**
   *
   The default value for the double element must be provided in canonical lexical form.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-datatype-normalization
   */
  datatypenormalization07 : function (test) {
    var success, doc, elemList, element, domConfig, str, canSetNormalization, canSetValidate, canSetXMLSchema, xsdNS = "http://www.w3.org/2001/XMLSchema", domImplLS, lsParser, resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,xsdNS);

    if(

      (lsParser == null)

    ) {
      return ;

    }
    domConfig = lsParser.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      resourceURI = getResourceURI("datatype_normalization");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","double");
      element = elemList.item(0);
      str = element.getAttribute("default");
      test.strictEqual("3.1415926E0", str, "firstValue");

    }

    test.done();
  },
  /**
   *
   The default value for the decimal element must be provided in canonical lexical form.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-datatype-normalization
   */
  datatypenormalization08 : function (test) {
    var success, doc, elemList, element, domConfig, str, canSetNormalization, canSetValidate, canSetXMLSchema, xsdNS = "http://www.w3.org/2001/XMLSchema", domImplLS, lsParser, resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,xsdNS);

    if(

      (lsParser == null)

    ) {
      return ;

    }
    domConfig = lsParser.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      resourceURI = getResourceURI("datatype_normalization");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","decimal");
      element = elemList.item(0);
      str = element.getAttribute("default");
      test.strictEqual("3.1415926", str, "firstValue");

    }

    test.done();
  },
  /**
   *
   The default value for the boolean element must be provided in canonical lexical form.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-datatype-normalization
   */
  datatypenormalization09 : function (test) {
    var success, doc, elemList, element, domConfig, str, canSetNormalization, canSetValidate, canSetXMLSchema, xsdNS = "http://www.w3.org/2001/XMLSchema", domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,xsdNS);

    if(

      (lsParser == null)

    ) {
      return ;

    }
    domConfig = lsParser.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      resourceURI = getResourceURI("datatype_normalization");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","boolean");
      element = elemList.item(0);
      str = element.getAttribute("default");
      test.strictEqual("true", str, "firstValue");

    }

    test.done();
  },
  /**
   *
   The default value for the float element must be provided in canonical lexical form.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-datatype-normalization
   */
  datatypenormalization10 : function (test) {
    var success, doc, elemList, element, domConfig, str, canSetNormalization, canSetValidate, canSetXMLSchema, xsdNS = "http://www.w3.org/2001/XMLSchema", domImplLS, lsParser, resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,xsdNS);

    if(

      (lsParser == null)

    ) {
      return ;

    }
    domConfig = lsParser.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      resourceURI = getResourceURI("datatype_normalization");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","float");
      element = elemList.item(0);
      str = element.getAttribute("default");
      test.strictEqual("3.1415926E0", str, "firstValue");

    }

    test.done();
  },
  /**
   *
   The default value for the dateTime element must be provided in canonical lexical form.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-datatype-normalization
   */
  datatypenormalization11 : function (test) {
    var success, doc, elemList, element, domConfig, str, canSetNormalization, canSetValidate, canSetXMLSchema, xsdNS = "http://www.w3.org/2001/XMLSchema", domImplLS, lsParser, resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,xsdNS);

    if(

      (lsParser == null)

    ) {
      return ;

    }
    domConfig = lsParser.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      resourceURI = getResourceURI("datatype_normalization");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","dateTime");
      element = elemList.item(0);
      str = element.getAttribute("default");
      test.strictEqual("2004-01-21T20:30:00Z", str, "firstValue");

    }

    test.done();
  },
  /**
   *
   Default values must be provided in canonical lexical form.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-datatype-normalization
   */
  datatypenormalization12 : function (test) {
    var success, doc, elemList, element, domConfig, str, canSetNormalization, canSetValidate, canSetXMLSchema, xsdNS = "http://www.w3.org/2001/XMLSchema", domImplLS, lsParser, resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,xsdNS);

    if(

      (lsParser == null)

    ) {
      return ;

    }
    domConfig = lsParser.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      resourceURI = getResourceURI("datatype_normalization");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","time");
      element = elemList.item(0);
      str = element.getAttribute("default");
      test.strictEqual("20:30:00Z", str, "firstValue");

    }

    test.done();
  },
  /**
   *
   Parse document with datatype-normalization set to true.
   Check if string values were normalized per default whitespace
   facet of xsd:string.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-datatype-normalization
   */
  datatypenormalization13 : function (test) {
    var success, doc, elemList, element, domConfig, str, canSetNormalization, canSetValidate, canSetXMLSchema, xsdNS = "http://www.w3.org/2001/XMLSchema", childNode, childValue, domImplLS, lsParser, resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,xsdNS);

    if(

      (lsParser == null)

    ) {
      return ;

    }
    domConfig = lsParser.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization2",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      resourceURI = getResourceURI("datatype_normalization2");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","em");
      element = elemList.item(0);
      childNode = element.firstChild;

      test.ok(childNode !== null, "childNodeNotNull");
      childValue = childNode.nodeValue;

      test.strictEqual("    EMP  0001   ", childValue, "content");

    }

    test.done();
  },
  /**
   *
   Parse document with datatype-normalization set to true.
   Check if string values were normalized per explicit whitespace=preserve.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-datatype-normalization
   */
  datatypenormalization14 : function (test) {
    var success, doc, elemList, element, domConfig, str, canSetNormalization, canSetValidate, canSetXMLSchema, xsdNS = "http://www.w3.org/2001/XMLSchema", childNode, childValue, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,xsdNS);

    if(

      (lsParser == null)

    ) {
      return ;

    }
    domConfig = lsParser.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization2",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      resourceURI = getResourceURI("datatype_normalization2");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","acronym");
      element = elemList.item(0);
      childNode = element.firstChild;

      test.ok(childNode !== null, "childNodeNotNull");
      childValue = childNode.nodeValue;

      test.strictEqual("    EMP  0001   ", childValue, "content");

    }

    test.done();
  },
  /**
   *
   Parse document with datatype-normalization set to true.
   Check if string values were normalized per an explicit whitespace=collapse.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-datatype-normalization
   */
  datatypenormalization15 : function (test) {
    var success, doc, elemList, element, domConfig, str, canSetNormalization, canSetValidate, canSetXMLSchema, xsdNS = "http://www.w3.org/2001/XMLSchema", childNode, childValue, domImplLS, lsParser, resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,xsdNS);

    if(

      (lsParser == null)

    ) {
      return ;

    }
    domConfig = lsParser.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization2",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      resourceURI = getResourceURI("datatype_normalization2");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","code");
      element = elemList.item(0);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.strictEqual("EMP 0001", childValue, "content1");
      element = elemList.item(1);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.strictEqual("EMP 0001", childValue, "content2");
      element = elemList.item(2);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.strictEqual("EMP 0001", childValue, "content3");

    }

    test.done();
  },
  /**
   *
   Parse document with datatype-normalization set to true.
   Check if string values were normalized per explicit whitespace=replace.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-datatype-normalization
   */
  datatypenormalization16 : function (test) {
    var success, doc, elemList, element, domConfig, str, canSetNormalization, canSetValidate, canSetXMLSchema, xsdNS = "http://www.w3.org/2001/XMLSchema", childNode, childValue, domImplLS, lsParser, resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,xsdNS);

    if(

      (lsParser == null)

    ) {
      return ;

    }
    domConfig = lsParser.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization2",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      resourceURI = getResourceURI("datatype_normalization2");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","sup");
      element = elemList.item(0);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.strictEqual("     EMP  0001 ", childValue, "content1");
      element = elemList.item(1);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.strictEqual("EMP  0001", childValue, "content2");
      element = elemList.item(2);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.strictEqual("EMP 0001", childValue, "content3");
      element = elemList.item(3);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.strictEqual("EMP 0001", childValue, "content4");

    }

    test.done();
  },
  /**
   *
   Parse document with datatype-normalization set to false.
   Check if string values were not normalized per an explicit whitespace=collapse.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-datatype-normalization
   */
  datatypenormalization17 : function (test) {
    var success, doc, elemList, element, domConfig, str, canSetValidate, canSetXMLSchema, xsdNS = "http://www.w3.org/2001/XMLSchema", childNode, childValue, domImplLS, lsParser, resourceURI, nullSchemaType = null;

    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,xsdNS);

    if(

      (lsParser == null)

    ) {
      lsParser = domImplLS.createLSParser(1,nullSchemaType);

    }
    domConfig = lsParser.domConfig;

    canSetValidate = domConfig.canSetParameter("validate",true);

    if(
      canSetValidate
    ) {
      domConfig.setParameter("validate", true);

    }
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(
      canSetXMLSchema
    ) {
      domConfig.setParameter("schema-type", xsdNS);

    }
    domConfig.setParameter("datatype-normalization", false);
    resourceURI = getResourceURI("datatype_normalization2");
    doc = lsParser.parseURI(resourceURI);
    elemList = doc.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","code");
    element = elemList.item(1);
    childNode = element.firstChild;

    childValue = childNode.nodeValue;

    test.strictEqual("EMP  0001", childValue, "content2");

    test.done();
  },
  /**
   *
   Parsing a document with a doctype should throw a PARSE_ERR if disallow-doctype is true.
   is false.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-disallow-doctype
   */
  disallowdoctype01 : function (test) {
    var success, doc, domConfig, domImplLS, lsParser, resourceURI, canSet, nullSchemaLanguage = null;

    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error, severity, type, errorCount = 0;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaLanguage);
    domConfig = lsParser.domConfig;

    canSet = domConfig.canSetParameter("disallow-doctype",true);

    if(
      canSet
    ) {
      domConfig.setParameter("disallow-doctype", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      resourceURI = getResourceURI("barfoo");

      {
	success = false;
	try {
          doc = lsParser.parseURI(resourceURI);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 81);
	}
	test.ok(success, "throw_PARSE_ERR");
      }
      errors = errorMonitor.allErrors;
      for(var indexN1008E = 0;indexN1008E < errors.length; indexN1008E++) {
        error = errors[indexN1008E];
        severity = error.severity;

        type = error.type;

	if(

	  (severity > 1)

	) {
	  test.strictEqual(3, severity, "isFatalError");
          test.strictEqual("doctype-not-allowed", type, "isDoctypeNotAllowed");
          errorCount += 1;

	}

      }
      test.strictEqual(1, errorCount, "oneError");

    }

    test.done();
  },
  /**
   *
   Default attributes should be not be serialized if discard-default-content is true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-discard-default-content
   */
  discarddefaultcontent01 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, docType = null;

    var docElem, newNode, output, retNode, canSet;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();

    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load(docRef, "doc", "hc_staff");
    domConfig = lsSerializer.domConfig;

    domConfig.setParameter("discard-default-content", true);
    output = lsSerializer.writeToString(doc);

    {
      test.ok((output.indexOf("dir=") >= 0) === false, "noDirAttr");
    }
    test.done();
  },
  /**
   *
   Default attributes should be explicitly serialized if discard-default-content is false.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-discard-default-content
   */
  discarddefaultcontent02 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, docType = null;

    var docElem, newNode, output, retNode, canSet;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();

    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load(docRef, "doc", "hc_staff");
    domConfig = lsSerializer.domConfig;

    domConfig.setParameter("discard-default-content", false);
    output = lsSerializer.writeToString(doc);
    test.ok(output.indexOf("dir=") >= 0, "hasDirAttr");

    test.done();
  },
  /**
   *
   Load a document with element-content-whitespace = false and validation = true and check that
   element content whitespace is eliminated.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-element-content-whitespace
   */
  elementcontentwhitespace01 : function (test) {
    var success, doc, elem, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, canSetValidate, canSetWhitespace, elemList;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetWhitespace = domConfig.canSetParameter("element-content-whitespace",false);

    if(

      (canSetValidate && canSetWhitespace)

    ) {
      domConfig.setParameter("validate", true);
      domConfig.setParameter("element-content-whitespace", false);
      resourceURI = getResourceURI("hc_staff");
      doc = lsParser.parseURI(resourceURI);
      elemList = doc.getElementsByTagName("p");
      elem = elemList.item(0);
      node = elem.firstChild;

      nodeType = node.nodeType;

      test.strictEqual(1, nodeType, "nodeIsElem");

    }

    test.done();
  },
  /**
   *
   Load a document with element-content-whitespace and validate = true and check that
   element content whitespace is not eliminated.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-element-content-whitespace
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate
   */
  elementcontentwhitespace02 : function (test) {
    var success, doc, elem, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, canSet, elemList;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSet = domConfig.canSetParameter("validate",true);

    if(
      canSet
    ) {
      domConfig.setParameter("validate", true);

    }
    domConfig.setParameter("element-content-whitespace", true);
    resourceURI = getResourceURI("hc_staff");
    doc = lsParser.parseURI(resourceURI);
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    node = elem.firstChild;

    nodeType = node.nodeType;

    test.strictEqual(3, nodeType, "nodeIsText");

    test.done();
  },
  /**
   *
   Serialize a document when element-content-whitespace is false, element content whitespace should be eliminated.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-element-content-whitespace
   */
  elementcontentwhitespace03 : function (test) {
    var success, doc, domConfig, serializerDomConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, lsSerializer, output, canSetValidate, canSetWhitespace;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    domConfig = lsSerializer.domConfig;

    canSetValidate = domConfig.canSetParameter("validate",true);
    lsSerializer = domImplLS.createLSSerializer();
    serializerDomConfig = lsSerializer.domConfig;

    canSetWhitespace = serializerDomConfig.canSetParameter("element-content-whitespace",false);

    if(

      (canSetValidate && canSetWhitespace)

    ) {
      domConfig.setParameter("validate", true);
      lsParser = domImplLS.createLSParser(1,nullSchemaType);
      domConfig = lsParser.domConfig;

      domConfig.setParameter("validate", false);
      resourceURI = getResourceURI("test3");
      doc = lsParser.parseURI(resourceURI);
      serializerDomConfig.setParameter("element-content-whitespace", false);
      output = lsSerializer.writeToString(doc);
      test.ok(output.indexOf("&lt;elt0>&lt;elt1>") >= 0, "noWhitespace");

    }

    test.done();
  },
  /**
   *
   createLSOutput should create an LSOutput, encoding should be mutable.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-DOMImplementationLS-createLSOutput
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSOutput-encoding
   */
  encoding01 : function (test) {
    var success, domImplLS, lsOutput, encoding;
    domImplLS = getImplementation();
    lsOutput = domImplLS.createLSOutput();
    encoding = lsOutput.encoding;

    lsOutput.encoding = "ISO-8859-1";

    encoding = lsOutput.encoding;

    test.strictEqual("ISO-8859-1".toLowerCase(), encoding.toLowerCase(), "isLatin1");

    test.done();
  },
  /**
   *
   Load a document with entities = false and see that entity references are not present in
   the element content.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-entities
   */
  entities01 : function (test) {
    var success, doc, docElem, elemList, elem, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("entities", false);
    resourceURI = getResourceURI("hc_staff");
    doc = lsParser.parseURI(resourceURI);
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(1);
    node = elem.firstChild;

    nodeType = node.nodeType;

    test.strictEqual(3, nodeType, "acrContentIsText");

    test.done();
  },
  /**
   *
   Load a document with entities = false and see that entity references are not present in
   attribute content.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-entities
   */
  entities02 : function (test) {
    var success, doc, docElem, elemList, elem, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, attributes, docType, entities, entity, classAttr;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("entities", false);
    resourceURI = getResourceURI("hc_staff");
    doc = lsParser.parseURI(resourceURI);
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(3);
    attributes = elem.attributes;

    classAttr = attributes.getNamedItem("class");
    node = classAttr.lastChild;

    test.ok(classAttr !== null, "classAttrChildNotNull");
    nodeType = node.nodeType;

    test.strictEqual(3, nodeType, "classAttrChildIsText");

    test.done();
  },
  /**
   *
   Load a document with entities = false and see that entity definitions are preserved.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-entities
   */
  entities03 : function (test) {
    var success, doc, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, docType, entities, entity;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("entities", false);
    resourceURI = getResourceURI("hc_staff");
    doc = lsParser.parseURI(resourceURI);
    docType = doc.doctype;

    test.ok(docType !== null, "docTypeNotNull");
    entities = docType.entities;

    entity = entities.getNamedItem("alpha");
    test.ok(entity !== null, "entityNotNull");

    test.done();
  },
  /**
   *
   Load a document with entities = true and see that entity references are present in
   the element content.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-entities
   */
  entities04 : function (test) {
    var success, doc, docElem, elemList, elem, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("entities", true);
    resourceURI = getResourceURI("hc_staff");
    doc = lsParser.parseURI(resourceURI);
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(1);
    node = elem.firstChild;

    nodeType = node.nodeType;

    test.strictEqual(5, nodeType, "acrContentIsEntRef");

    test.done();
  },
  /**
   *
   Load a document with entities = true and see that entity references are present in
   attribute content.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-entities
   */
  entities05 : function (test) {
    var success, doc, docElem, elemList, elem, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, attributes, docType, entities, entity, classAttr;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("entities", true);
    resourceURI = getResourceURI("hc_staff");
    doc = lsParser.parseURI(resourceURI);
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(3);
    attributes = elem.attributes;

    classAttr = attributes.getNamedItem("class");
    node = classAttr.lastChild;

    test.ok(classAttr !== null, "classAttrChildNotNull");
    nodeType = node.nodeType;

    test.strictEqual(5, nodeType, "classAttrChildIsEntRef");

    test.done();
  },
  /**
   *
   Load a document with entities = true and see that entity definitions are preserved.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-entities
   */
  entities06 : function (test) {
    var success, doc, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, docType, entities, entity;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("entities", true);
    resourceURI = getResourceURI("hc_staff");
    doc = lsParser.parseURI(resourceURI);
    docType = doc.doctype;

    test.ok(docType !== null, "docTypeNotNull");
    entities = docType.entities;

    entity = entities.getNamedItem("alpha");
    test.ok(entity !== null, "entityNotNull");

    test.done();
  },
  /**
   *
   A warning should be dispatched if the base URI of a processing instruction can not be preserved.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-entities
   */
  entities07 : function (test) {
    var success, doc, domConfig, domImplLS, lsParser, resourceURI, canSet, nullSchemaLanguage = null;

    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error, severity, type, warningCount = 0;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaLanguage);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("entities", false);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    resourceURI = getResourceURI("pibase");
    doc = lsParser.parseURI(resourceURI);
    test.ok(doc !== null, "docNotNull");
    errors = errorMonitor.allErrors;
    for(var indexN10081 = 0;indexN10081 < errors.length; indexN10081++) {
      error = errors[indexN10081];
      severity = error.severity;

      type = error.type;

      if(("pi-base-uri-not-preserved" == type)) {
	test.strictEqual(1, severity, "isError");
        warningCount += 1;

      }

    }
    test.strictEqual(1, warningCount, "hadWarning");

    test.done();
  },
  /**
   *
   Entity references should be preserved when entities is true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-entities
   */
  entities08 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, output;
    domImplLS = getImplementation();

    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load(docRef, "doc", "hc_staff");
    lsSerializer = domImplLS.createLSSerializer();
    domConfig = lsSerializer.domConfig;

    domConfig.setParameter("entities", true);
    output = lsSerializer.writeToString(doc);
    test.ok(output.indexOf("ent4;") >= 0, "hasEntRef");

    test.done();
  },
  /**
   *
   Entity references should be expanded when entities is false.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-entities
   */
  entities09 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, output;
    domImplLS = getImplementation();

    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load(docRef, "doc", "hc_staff");
    lsSerializer = domImplLS.createLSSerializer();
    domConfig = lsSerializer.domConfig;

    domConfig.setParameter("entities", false);
    output = lsSerializer.writeToString(doc);

    {
      test.ok((output.indexOf("ent4;") >= 0) === false, "noEntRef");
      test.ok(output.indexOf("!ENTITY") >= 0, "entDef");
    }
    test.done();
  },
  /**
   *
   Load a document with a DTD that doesn't match content with infoset=true, should load without complaint.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-infoset
   */
  infoset01 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("infoset", true);
    resourceURI = getResourceURI("validate1");
    doc = lsParser.parseURI(resourceURI);
    test.ok(doc !== null, "docNotNull");
    elem = doc.documentElement;

    test.ok(elem !== null, "docElemNotNull");
    nodeName = elem.nodeName;

    test.strictEqual("elt0", nodeName, "docElemName");

    test.done();
  },
  /**
   *
   Load a document with entities = false and see that entity references are not present in
   the element content.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-infoset
   */
  infoset02 : function (test) {
    var success, doc, docElem, elemList, elem, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("infoset", true);
    resourceURI = getResourceURI("hc_staff");
    doc = lsParser.parseURI(resourceURI);
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(1);
    node = elem.firstChild;

    nodeType = node.nodeType;

    test.strictEqual(3, nodeType, "acrContentIsText");

    test.done();
  },
  /**
   *
   Parse document with infoset set to true.
   Check if string values were not normalized per an explicit whitespace=collapse.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-datatype-normalization
   */
  infoset03 : function (test) {
    var success, doc, elemList, element, domConfig, str, canSetValidate, canSetXMLSchema, xsdNS = "http://www.w3.org/2001/XMLSchema", childNode, childValue, domImplLS, lsParser, resourceURI, nullSchemaType = null;

    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,xsdNS);

    if(

      (lsParser == null)

    ) {
      lsParser = domImplLS.createLSParser(1,nullSchemaType);

    }
    domConfig = lsParser.domConfig;

    canSetValidate = domConfig.canSetParameter("validate",true);

    if(
      canSetValidate
    ) {
      domConfig.setParameter("validate", true);

    }
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(
      canSetXMLSchema
    ) {
      domConfig.setParameter("schema-type", xsdNS);

    }
    domConfig.setParameter("infoset", true);
    resourceURI = getResourceURI("datatype_normalization2");
    doc = lsParser.parseURI(resourceURI);
    elemList = doc.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","code");
    element = elemList.item(1);
    childNode = element.firstChild;

    childValue = childNode.nodeValue;

    test.strictEqual("EMP  0001", childValue, "content2");

    test.done();
  },
  /**
   *
   Load a document with infoset = true and see that CDATASection are not present in
   the parsed document.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-infoset
   */
  infoset04 : function (test) {
    var success, doc, elem, node, nodeType, domConfig, pList, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("infoset", true);
    resourceURI = getResourceURI("hc_staff");
    doc = lsParser.parseURI(resourceURI);
    pList = doc.getElementsByTagName("strong");
    elem = pList.item(1);
    node = elem.lastChild;

    nodeType = node.nodeType;

    test.strictEqual(3, nodeType, "childIsText");

    test.done();
  },
  /**
   *
   Load a document with infoset = true and see that attributes for namespace declarations are present.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-infoset
   */
  infoset05 : function (test) {
    var success, doc, docElem, elemList, elem, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("infoset", true);
    resourceURI = getResourceURI("hc_staff");
    doc = lsParser.parseURI(resourceURI);
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    node = elem.getAttributeNode("xmlns:dmstc");
    test.ok(node !== null, "nsAttrNotNull");

    test.done();
  },
  /**
   *
   Load a document with infoset and validate = true and check that
   element content whitespace is not eliminated.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-infoset
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-validate
   */
  infoset06 : function (test) {
    var success, doc, elem, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, canSet, elemList;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSet = domConfig.canSetParameter("validate",true);

    if(
      canSet
    ) {
      domConfig.setParameter("validate", true);

    }
    domConfig.setParameter("infoset", true);
    resourceURI = getResourceURI("hc_staff");
    doc = lsParser.parseURI(resourceURI);
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    node = elem.firstChild;

    nodeType = node.nodeType;

    test.strictEqual(3, nodeType, "nodeIsText");

    test.done();
  },
  /**
   *
   Load a document with infoset = true and see that comments are present in
   the parsed document.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-infoset
   */
  infoset07 : function (test) {
    var success, doc, docElem, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("infoset", true);
    resourceURI = getResourceURI("hc_staff");
    doc = lsParser.parseURI(resourceURI);
    docElem = doc.documentElement;

    node = docElem.previousSibling;

    nodeType = node.nodeType;

    test.strictEqual(8, nodeType, "nodeIsDocType");

    test.done();
  },
  /**
   *
   Attempt to load a namespace invalid document with infoset = true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-infoset
   */
  infoset08 : function (test) {
    var success, doc, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("infoset", true);
    resourceURI = getResourceURI("namespaces1");

    {
      success = false;
      try {
        doc = lsParser.parseURI(resourceURI);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 81);
      }
      test.ok(success, "throw_PARSE_ERR");
    }

    test.done();
  },
  /**
   *
   Load a document with namespace-declarations = false and see that attributes
   for namespace declarations are not present.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-namespace-declarations
   */
  namespacedeclarations01 : function (test) {
    var success, doc, docElem, elemList, elem, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("namespace-declarations", false);
    resourceURI = getResourceURI("hc_staff");
    doc = lsParser.parseURI(resourceURI);
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    node = elem.getAttributeNode("xmlns:dmstc");
    test.ok(node === null, "nsAttrNull");

    test.done();
  },
  /**
   *
   Load a document with namespace-declarations = true and see that attributes for namespace declarations are present.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-namespace-declarations
   */
  namespacedeclarations02 : function (test) {
    var success, doc, docElem, elemList, elem, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("namespace-declarations", true);
    resourceURI = getResourceURI("hc_staff");
    doc = lsParser.parseURI(resourceURI);
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    node = elem.getAttributeNode("xmlns:dmstc");
    test.ok(node !== null, "nsAttrNotNull");

    test.done();
  },
  /**
   *
   Attempt to load a namespace invalid document with namespaces = true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-namespaces
   */
  namespaces01 : function (test) {
    var success, doc, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("namespaces", true);
    resourceURI = getResourceURI("namespaces1");

    {
      success = false;
      try {
        doc = lsParser.parseURI(resourceURI);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 81);
      }
      test.ok(success, "throw_PARSE_ERR");
    }

    test.done();
  },
  /**
   *
   Attempt to load a namespace invalid document with namespaces = false.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-namespaces
   */
  namespaces02 : function (test) {
    var success, doc, node, nodeType, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, canSet, docElem, tagName;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSet = domConfig.canSetParameter("namespaces",false);

    if(
      canSet
    ) {
      domConfig.setParameter("namespaces", false);
      resourceURI = getResourceURI("namespaces1");
      doc = lsParser.parseURI(resourceURI);
      docElem = doc.documentElement;

      tagName = docElem.tagName;

      test.strictEqual("bad:ns:tag", tagName, "tagName");

    }

    test.done();
  },
  /**
   *
   LSSerializer.newLine should contain the platform default new line.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-DOMImplementationLS-createLSSerializer
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-newLine
   */
  newline01 : function (test) {
    var success, domImplLS, lsSerializer, newLine;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    newLine = lsSerializer.newLine;

    test.ok(newLine !== null, "newLineNotNull");

    test.done();
  },
  /**
   *
   Setting LSSerializer.newLine should change the value retrieved subsequent calls.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-DOMImplementationLS-createLSSerializer
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-newLine
   */
  newline02 : function (test) {
    var success, domImplLS, lsSerializer, newLine;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    lsSerializer.newLine = "crlf";

    newLine = lsSerializer.newLine;

    test.strictEqual("crlf", newLine, "newLine");

    test.done();
  },
  /**
   *
   Setting LSSerializer.newLine to null should reset the default value.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-DOMImplementationLS-createLSSerializer
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-newLine
   */
  newline03 : function (test) {
    var success, domImplLS, lsSerializer, newLine, origNewLine, nullString = null;

    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    origNewLine = lsSerializer.newLine;

    lsSerializer.newLine = nullString;

    newLine = lsSerializer.newLine;

    test.strictEqual(origNewLine, newLine, "newLine");

    test.done();
  },
  /**
   *
   Parsing using an uninitialized LSInput should result in a PARSE_ERR.
   is false.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parse
   */
  noinputspecified01 : function (test) {
    var success, doc, domConfig, domImplLS, lsParser, lsInput, nullSchemaLanguage = null;

    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error, severity, type, errorCount = 0;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaLanguage);
    lsInput = domImplLS.createLSInput();
    domConfig = lsParser.domConfig;

    domConfig.setParameter("error-handler", errorMonitor.handleError);

    {
      success = false;
      try {
        doc = lsParser.parse(lsInput);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 81);
      }
      test.ok(success, "throw_PARSE_ERR");
    }
    errors = errorMonitor.allErrors;
    for(var indexN10077 = 0;indexN10077 < errors.length; indexN10077++) {
      error = errors[indexN10077];
      severity = error.severity;

      type = error.type;

      if(

	(severity > 1)

      ) {
	test.strictEqual(3, severity, "isFatalError");
        test.strictEqual("no-input-specified", type, "noInputSpecified");
        errorCount += 1;

      }

    }
    test.strictEqual(1, errorCount, "oneError");

    test.done();
  },
  /**
   *
   Writing to an uninitialized LSOutput should result in a SERIALIZATION_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-write
   */
  nooutputspecified01 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, lsOutput;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error, severity, type, errorCount = 0, docType = null;

    var retval;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    lsOutput = domImplLS.createLSOutput();
    doc = domImplLS.createDocument("http://www.w3.org/1999/xhtml","html",docType);
    domConfig = lsSerializer.domConfig;

    domConfig.setParameter("error-handler", errorMonitor.handleError);

    {
      success = false;
      try {
        retval = lsSerializer.write(doc,lsOutput);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 82);
      }
      test.ok(success, "throw_SERIALIZE_ERR");
    }
    errors = errorMonitor.allErrors;
    for(var indexN10081 = 0;indexN10081 < errors.length; indexN10081++) {
      error = errors[indexN10081];
      severity = error.severity;

      type = error.type;

      if(

	(severity > 1)

      ) {
	test.strictEqual(3, severity, "isFatalError");
        test.strictEqual("no-output-specified", type, "noOutputSpecified");
        errorCount += 1;

      }

    }
    test.strictEqual(1, errorCount, "oneError");

    test.done();
  },
  /**
   *
   Parsing a non-Unicode normalized document not have characters normalized if normalize-characters is false.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-normalize-characters
   */
  normalizecharacters01 : function (test) {
    var success, doc, domConfig, domImplLS, lsParser, resourceURI, nullSchemaLanguage = null;

    var docElem, tagName;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaLanguage);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("normalize-characters", false);
    resourceURI = getResourceURI("characternormalization1");
    doc = lsParser.parseURI(resourceURI);
    test.ok(doc !== null, "docNotNull");
    docElem = doc.documentElement;

    tagName = docElem.tagName;

    test.strictEqual("suçon", tagName, "notNormalized");

    test.done();
  },
  /**
   *
   Parsing a non-Unicode normalized document should result in Unicode-normalized content if normalize-characters is true..

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-normalize-characters
   */
  normalizecharacters02 : function (test) {
    var success, doc, domConfig, domImplLS, lsParser, resourceURI, canSet, nullSchemaLanguage = null;

    var docElem, tagName;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaLanguage);
    domConfig = lsParser.domConfig;

    canSet = domConfig.canSetParameter("normalize-characters",true);

    if(
      canSet
    ) {
      domConfig.setParameter("normalize-characters", true);
      resourceURI = getResourceURI("characternormalization1");
      doc = lsParser.parseURI(resourceURI);
      test.ok(doc !== null, "docNotNull");
      docElem = doc.documentElement;

      tagName = docElem.tagName;

      test.strictEqual("suçon", tagName, "charNormalized");

    }

    test.done();
  },
  /**
   *
   Characters should be normalized on serialization if normalize-characters is true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-normalize-characters
   */
  normalizecharacters03 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, docType = null;

    var docElem, newNode, output, retNode, canSet;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    domConfig = lsSerializer.domConfig;

    canSet = domConfig.canSetParameter("normalize-characters",true);

    if(
      canSet
    ) {
      doc = domImplLS.createDocument("http://www.example.org","suçon",docType);
      docElem = doc.documentElement;

      domConfig.setParameter("normalize-characters", true);
      output = lsSerializer.writeToString(doc);
      test.ok(output.indexOf("suçon") >= 0, "notNormalized");

    }

    test.done();
  },
  /**
   *
   Characters should be not normalized on serialization if normalize-characters is false.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-normalize-characters
   */
  normalizecharacters04 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, docType = null;

    var docElem, newNode, output, retNode, canSet;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    domConfig = lsSerializer.domConfig;

    canSet = domConfig.canSetParameter("normalize-characters",false);
    doc = domImplLS.createDocument("http://www.example.org","suçon",docType);
    docElem = doc.documentElement;

    domConfig.setParameter("normalize-characters", true);
    output = lsSerializer.writeToString(doc);
    test.ok(output.indexOf("suçon") >= 0, "notNormalized");

    test.done();
  },
  /**
   *
   Validate a document with no DTD against an externally specified schema that matches its content.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-schema-location
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-schema-type
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate
   */
  schemalocation01 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, canSetValidate, canSetSchemaType, canSetSchemaLocation, xsdNS = "http://www.w3.org/2001/XMLSchema";
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetSchemaType = domConfig.canSetParameter("schema-type",xsdNS);
    resourceURI = getResourceURI("validateschema1");
    canSetSchemaLocation = domConfig.canSetParameter("schema-location",resourceURI);

    if(

      (canSetValidate && canSetSchemaType && canSetSchemaLocation)

    ) {
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("schema-location", resourceURI);
      resourceURI = getResourceURI("validate1");
      doc = lsParser.parseURI(resourceURI);
      test.ok(doc !== null, "docNotNull");
      elem = doc.documentElement;

      test.ok(elem !== null, "docElemNotNull");
      nodeName = elem.nodeName;

      test.strictEqual("elt0", nodeName, "docElemName");

    }

    test.done();
  },
  /**
   *
   Validate a document with no DTD against an externally specified schema that does not match its content.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-schema-location
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-schema-type
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate
   */
  schemalocation02 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, canSetValidate, canSetSchemaType, canSetSchemaLocation;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error, severity, errorCount = 0, xsdNS = "http://www.w3.org/2001/XMLSchema";
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetSchemaType = domConfig.canSetParameter("schema-type",xsdNS);
    resourceURI = getResourceURI("validateschema1");
    canSetSchemaLocation = domConfig.canSetParameter("schema-location",resourceURI);

    if(

      (canSetValidate && canSetSchemaType && canSetSchemaLocation)

    ) {
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("schema-location", resourceURI);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      resourceURI = getResourceURI("test3");

      {
	success = false;
	try {
          doc = lsParser.parseURI(resourceURI);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 81);
	}
	test.ok(success, "throw_PARSE_ERR");
      }
      errors = errorMonitor.allErrors;
      for(var indexN100CE = 0;indexN100CE < errors.length; indexN100CE++) {
        error = errors[indexN100CE];
        severity = error.severity;

	if((2 == severity)) {
	  errorCount += 1;

	}

      }
      assertTrue("atLeastOneError", (errorCount > 0));

    }

    test.done();
  },
  /**
   *
   Serialize a document with no DTD against an externally specified schema that matches its content.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-schema-location
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-schema-type
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate
   */
  schemalocation03 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, resourceURI, canSetValidate, canSetSchemaType, canSetSchemaLocation, xsdNS = "http://www.w3.org/2001/XMLSchema", lsSerializer, nullNS = null;

    var doctype = null;

    var output;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    domConfig = lsSerializer.domConfig;

    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetSchemaType = domConfig.canSetParameter("schema-type",xsdNS);
    resourceURI = getResourceURI("validateschema1");
    canSetSchemaLocation = domConfig.canSetParameter("schema-location",resourceURI);

    if(

      (canSetValidate && canSetSchemaType && canSetSchemaLocation)

    ) {
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("schema-location", resourceURI);
      doc = domImplLS.createDocument(nullNS,"elt0",doctype);
      output = lsSerializer.writeToString(doc);

    }

    test.done();
  },
  /**
   *
   Serialize a document with no DTD against an externally specified schema that matches its content.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-schema-location
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-schema-type
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate
   */
  schemalocation04 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, resourceURI, canSetValidate, canSetSchemaType, canSetSchemaLocation, xsdNS = "http://www.w3.org/2001/XMLSchema", lsSerializer, nullNS = null;

    var doctype = null;

    var output;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    domConfig = lsSerializer.domConfig;

    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetSchemaType = domConfig.canSetParameter("schema-type",xsdNS);
    resourceURI = getResourceURI("validateschema1");
    canSetSchemaLocation = domConfig.canSetParameter("schema-location",resourceURI);

    if(

      (canSetValidate && canSetSchemaType && canSetSchemaLocation)

    ) {
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("schema-location", resourceURI);
      doc = domImplLS.createDocument(nullNS,"elt2",doctype);

      {
	success = false;
	try {
          output = lsSerializer.writeToString(doc);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 82);
	}
	test.ok(success, "throw_SERIALIZE_ERR");
      }

    }

    test.done();
  },
  /**
   *
   Specify schema validation for a document with a DTD but no specified schema.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-schema-type
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate
   */
  schematype01 : function (test) {
    var success, doc, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, canSetValidate, canSetSchemaType;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error, severity, errorCount = 0, xsdNS = "http://www.w3.org/2001/XMLSchema";
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetSchemaType = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetValidate && canSetSchemaType)

    ) {
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      resourceURI = getResourceURI("test3");

      {
	success = false;
	try {
          doc = lsParser.parseURI(resourceURI);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 81);
	}
	test.ok(success, "throw_PARSE_ERR");
      }
      errors = errorMonitor.allErrors;
      for(var indexN100A8 = 0;indexN100A8 < errors.length; indexN100A8++) {
        error = errors[indexN100A8];
        severity = error.severity;

	if((2 == severity)) {
	  errorCount += 1;

	}

      }
      assertTrue("atLeastOneError", (errorCount > 0));

    }

    test.done();
  },
  /**
   *
   Specify DTD validation for a document with a matching DTD.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-schema-type
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate
   */
  schematype02 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, canSetValidate, canSetSchemaType, dtdNS = "http://www.w3.org/TR/REC-xml";
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetSchemaType = domConfig.canSetParameter("schema-type",dtdNS);

    if(

      (canSetValidate && canSetSchemaType)

    ) {
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", dtdNS);
      resourceURI = getResourceURI("test3");
      doc = lsParser.parseURI(resourceURI);
      test.ok(doc !== null, "docNotNull");
      elem = doc.documentElement;

      test.ok(elem !== null, "docElemNotNull");
      nodeName = elem.nodeName;

      test.strictEqual("elt0", nodeName, "docElemName");

    }

    test.done();
  },
  /**
   *
   Specify schema validation for a document with no DTD but schema location hints.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-schema-type
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate
   */
  schematype03 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, canSetValidate, canSetSchemaType, xsdNS = "http://www.w3.org/2001/XMLSchema";
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetSchemaType = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetValidate && canSetSchemaType)

    ) {
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      resourceURI = getResourceURI("schematype1");
      doc = lsParser.parseURI(resourceURI);
      test.ok(doc !== null, "docNotNull");
      elem = doc.documentElement;

      test.ok(elem !== null, "docElemNotNull");
      nodeName = elem.nodeName;

      test.strictEqual("elt0", nodeName, "docElemName");

    }

    test.done();
  },
  /**
   *
   Serialize a document with schema validation but no available schema.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-schema-type
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate
   */
  schematype04 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, resourceURI, canSetValidate, canSetSchemaType, xsdNS = "http://www.w3.org/2001/XMLSchema", lsSerializer, nullNS = null;

    var doctype = null;

    var output;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    domConfig = lsSerializer.domConfig;

    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetSchemaType = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetValidate && canSetSchemaType)

    ) {
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      doc = domImplLS.createDocument(nullNS,"elt0",doctype);

      {
	success = false;
	try {
          output = lsSerializer.writeToString(doc);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 82);
	}
	test.ok(success, "throw_SERIALIZE_ERR");
      }

    }

    test.done();
  },
  /**
   *
   CDATASections containing unrepresentable characters should be split when split-cdata-sections is true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-split-cdata-sections
   */
  splitcdatasections01 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, docType = null;

    var docElem, newNode, output, retNode;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    doc = domImplLS.createDocument("http://www.example.org","test",docType);
    docElem = doc.documentElement;

    newNode = doc.createCDATASection("this is not ]]> good");
    retNode = docElem.appendChild(newNode);
    domConfig = lsSerializer.domConfig;

    domConfig.setParameter("split-cdata-sections", true);
    domConfig.setParameter("cdata-sections", true);
    output = lsSerializer.writeToString(doc);

    {
      test.ok((output.indexOf("this is not ]]> good") >= 0) === false, "notNaive");
    }
    test.done();
  },
  /**
   *
   CDATASections containing unrepresentable characters raise a SERIALIZE_ERR when
   split-cdata-sections is false and well-formed is true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-split-cdata-sections
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-well-formed
   */
  splitcdatasections02 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, docType = null;

    var docElem, newNode, output, retNode;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error, severity, type, errorCount = 0;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    doc = domImplLS.createDocument("http://www.example.org","test",docType);
    docElem = doc.documentElement;

    newNode = doc.createCDATASection("this is not ]]> good");
    retNode = docElem.appendChild(newNode);
    domConfig = lsSerializer.domConfig;

    domConfig.setParameter("split-cdata-sections", false);
    domConfig.setParameter("cdata-sections", true);
    domConfig.setParameter("well-formed", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);

    {
      success = false;
      try {
        output = lsSerializer.writeToString(doc);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 82);
      }
      test.ok(success, "throw_SERIALIZE_ERR");
    }
    errors = errorMonitor.allErrors;
    for(var indexN100A7 = 0;indexN100A7 < errors.length; indexN100A7++) {
      error = errors[indexN100A7];
      severity = error.severity;

      type = error.type;

      if(("wf-invalid-character" == type)) {
	test.strictEqual(2, severity, "severityError");
        errorCount += 1;

      }

    }
    assertTrue("hasWfErrors", (errorCount > 0));

    test.done();
  },
  /**
   *
   Parsing a document with a unsupported encoding should raise a PARSE_ERR and dispatch a "unsupported-encoding"
   DOM error.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   */
  unsupportedencoding01 : function (test) {
    var success, doc, domConfig, domImplLS, lsParser, resourceURI, nullSchemaLanguage = null;

    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error, severity, type, errorCount = 0;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaLanguage);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("error-handler", errorMonitor.handleError);
    resourceURI = getResourceURI("unsupportedencoding1");

    {
      success = false;
      try {
        doc = lsParser.parseURI(resourceURI);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 81);
      }
      test.ok(success, "throw_PARSE_ERR");
    }
    errors = errorMonitor.allErrors;
    for(var indexN10078 = 0;indexN10078 < errors.length; indexN10078++) {
      error = errors[indexN10078];
      severity = error.severity;

      type = error.type;

      if(("unsupported-encoding".toUpperCase() == type.toUpperCase())) {
	test.strictEqual(3, severity, "isError");
        errorCount += 1;

      }

    }
    test.strictEqual(1, errorCount, "oneError");

    test.done();
  },
  /**
   *
   Load a document without a DTD with validate=false, should load without complaint.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate
   */
  validate01 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("validate", false);
    resourceURI = getResourceURI("test0");
    doc = lsParser.parseURI(resourceURI);
    test.ok(doc !== null, "docNotNull");
    elem = doc.documentElement;

    test.ok(elem !== null, "docElemNotNull");
    nodeName = elem.nodeName;

    test.strictEqual("elt0", nodeName, "docElemName");

    test.done();
  },
  /**
   *
   Load a document without a DTD with validate=true, should throw PARSE_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate
   */
  validate02 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    errorMonitor = new DOMErrorMonitor();

    var canSet, errors = new Array();

    var error, errorCount = 0, severity;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSet = domConfig.canSetParameter("validate",true);

    if(
      canSet
    ) {
      domConfig.setParameter("validate", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      resourceURI = getResourceURI("test0");

      {
	success = false;
	try {
          doc = lsParser.parseURI(resourceURI);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 81);
	}
	test.ok(success, "throw_PARSE_ERR");
      }
      errors = errorMonitor.allErrors;
      for(var indexN10096 = 0;indexN10096 < errors.length; indexN10096++) {
        error = errors[indexN10096];
        severity = error.severity;

	if((2 == severity)) {
	  errorCount += 1;

	}

      }
      assertTrue("atLeastOneError", (errorCount > 0));

    }

    test.done();
  },
  /**
   *
   Load a document with a DTD that doesn't match content with validate=false, should load without complaint.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate
   */
  validate03 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("validate", false);
    resourceURI = getResourceURI("validate1");
    doc = lsParser.parseURI(resourceURI);
    test.ok(doc !== null, "docNotNull");
    elem = doc.documentElement;

    test.ok(elem !== null, "docElemNotNull");
    nodeName = elem.nodeName;

    test.strictEqual("elt0", nodeName, "docElemName");

    test.done();
  },
  /**
   *
   Load a document with mismatched DTD with validate=true, should throw PARSE_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate
   */
  validate04 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    errorMonitor = new DOMErrorMonitor();

    var canSet, errors = new Array();

    var error, errorCount = 0, severity;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSet = domConfig.canSetParameter("validate",true);

    if(
      canSet
    ) {
      domConfig.setParameter("validate", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      resourceURI = getResourceURI("validate1");

      {
	success = false;
	try {
          doc = lsParser.parseURI(resourceURI);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 81);
	}
	test.ok(success, "throw_PARSE_ERR");
      }
      errors = errorMonitor.allErrors;
      for(var indexN10096 = 0;indexN10096 < errors.length; indexN10096++) {
        error = errors[indexN10096];
        severity = error.severity;

	if((2 == severity)) {
	  errorCount += 1;

	}

      }
      assertTrue("atLeastOneError", (errorCount > 0));

    }

    test.done();
  },
  /**
   *
   A document without a DTD should serialize without complaint if validate is false.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate
   */
  validate05 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, docType = null;

    var output;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    doc = domImplLS.createDocument("http://www.example.org","test",docType);
    domConfig = lsSerializer.domConfig;

    domConfig.setParameter("validate", false);
    output = lsSerializer.writeToString(doc);

    test.done();
  },
  /**
   *
   A document without a DTD should throw a SERIALIZE_ERR if validate is true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate
   */
  validate06 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, docType = null;

    var output, canSet;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    doc = domImplLS.createDocument("http://www.example.org","test",docType);
    domConfig = lsSerializer.domConfig;

    canSet = domConfig.canSetParameter("validate",true);

    if(
      canSet
    ) {
      domConfig.setParameter("validate", true);

      {
	success = false;
	try {
          output = lsSerializer.writeToString(doc);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 82);
	}
	test.ok(success, "throw_SERIALIZE_ERR");
      }

    }

    test.done();
  },
  /**
   *
   Load and serialize a document with a DTD that doesn't match content with validate=false, should load and serialize without complaint.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate
   */
  validate07 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, lsSerializer, output;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("validate", false);
    resourceURI = getResourceURI("validate1");
    doc = lsParser.parseURI(resourceURI);
    test.ok(doc !== null, "docNotNull");
    elem = doc.documentElement;

    test.ok(elem !== null, "docElemNotNull");
    nodeName = elem.nodeName;

    test.strictEqual("elt0", nodeName, "docElemName");
    lsSerializer = domImplLS.createLSSerializer();
    domConfig = lsSerializer.domConfig;

    domConfig.setParameter("validate", false);
    output = lsSerializer.writeToString(doc);

    test.done();
  },
  /**
   *
   Load a document with a DTD that doesn't match content, then attempt to serialize when validate is true which
   should result in a SERIALIZE_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate
   */
  validate08 : function (test) {
    var success, doc, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI, lsSerializer, output, canSet;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    domConfig = lsSerializer.domConfig;

    canSet = domConfig.canSetParameter("validate",true);

    if(
      canSet
    ) {
      domConfig.setParameter("validate", true);
      lsParser = domImplLS.createLSParser(1,nullSchemaType);
      domConfig = lsParser.domConfig;

      domConfig.setParameter("validate", false);
      resourceURI = getResourceURI("validate1");
      doc = lsParser.parseURI(resourceURI);

      {
	success = false;
	try {
          output = lsSerializer.writeToString(doc);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 82);
	}
	test.ok(success, "throw_SERIALIZE_ERR");
      }

    }

    test.done();
  },
  /**
   *
   Load a document without a DTD with validate-if-schema=false, should load without complaint.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate-if-schema
   */
  validateifschema01 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("validate-if-schema", false);
    resourceURI = getResourceURI("test0");
    doc = lsParser.parseURI(resourceURI);
    test.ok(doc !== null, "docNotNull");
    elem = doc.documentElement;

    test.ok(elem !== null, "docElemNotNull");
    nodeName = elem.nodeName;

    test.strictEqual("elt0", nodeName, "docElemName");

    test.done();
  },
  /**
   *
   Load a document without a DTD with validate-if-schema=true should successfully complete.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate-if-schema
   */
  validateifschema02 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    errorMonitor = new DOMErrorMonitor();

    var canSet;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSet = domConfig.canSetParameter("validate-if-schema",true);

    if(
      canSet
    ) {
      domConfig.setParameter("validate-if-schema", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      resourceURI = getResourceURI("test0");
      doc = lsParser.parseURI(resourceURI);
      test.ok(doc !== null, "docNotNull");
      errorMonitor.assertLowerSeverity(test, "noErrors", 2);
      elem = doc.documentElement;

      test.ok(elem !== null, "docElemNotNull");
      nodeName = elem.nodeName;

      test.strictEqual("elt0", nodeName, "docElemName");

    }

    test.done();
  },
  /**
   *
   Load a document with a DTD that doesn't match content with validate-if-schema=false, should load without complaint.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate-if-schema
   */
  validateifschema03 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("validate-if-schema", false);
    resourceURI = getResourceURI("validate1");
    doc = lsParser.parseURI(resourceURI);
    test.ok(doc !== null, "docNotNull");
    elem = doc.documentElement;

    test.ok(elem !== null, "docElemNotNull");
    nodeName = elem.nodeName;

    test.strictEqual("elt0", nodeName, "docElemName");

    test.done();
  },
  /**
   *
   Load a document with mismatched DTD with validate-if-schema=true, should throw PARSE_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-validate-if-schema
   */
  validateifschema04 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    errorMonitor = new DOMErrorMonitor();

    var canSet, errors = new Array();

    var error, errorCount = 0, severity;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    canSet = domConfig.canSetParameter("validate-if-schema",true);

    if(
      canSet
    ) {
      domConfig.setParameter("validate-if-schema", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      resourceURI = getResourceURI("validate1");

      {
	success = false;
	try {
          doc = lsParser.parseURI(resourceURI);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 81);
	}
	test.ok(success, "throw_PARSE_ERR");
      }
      errors = errorMonitor.allErrors;
      for(var indexN10096 = 0;indexN10096 < errors.length; indexN10096++) {
        error = errors[indexN10096];
        severity = error.severity;

	if((2 == severity)) {
	  errorCount += 1;

	}

      }
      assertTrue("atLeastOneError", (errorCount > 0));

    }

    test.done();
  },
  /**
   *
   Load a document with an invalid character in a tagname.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-well-formed
   */
  wellformed01 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error, errorCount = 0, severity, type;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("well-formed", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    resourceURI = getResourceURI("wellformed1");

    {
      success = false;
      try {
        doc = lsParser.parseURI(resourceURI);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 81);
      }
      test.ok(success, "throw_PARSE_ERR");
    }
    errors = errorMonitor.allErrors;
    for(var indexN1008C = 0;indexN1008C < errors.length; indexN1008C++) {
      error = errors[indexN1008C];
      type = error.type;

      severity = error.severity;

      if(

	(severity > 1)

      ) {
	test.strictEqual("wf-invalid-character-in-node-name", type, "type");
        test.strictEqual(2, severity, "severityError");
        errorCount += 1;

      }

    }
    test.strictEqual(1, errorCount, "oneWFError");

    test.done();
  },
  /**
   *
   Load a document with an invalid character in an attribute name.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-well-formed
   */
  wellformed02 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error, errorCount = 0, severity, type;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("well-formed", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    resourceURI = getResourceURI("wellformed2");

    {
      success = false;
      try {
        doc = lsParser.parseURI(resourceURI);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 81);
      }
      test.ok(success, "throw_PARSE_ERR");
    }
    errors = errorMonitor.allErrors;
    for(var indexN1008C = 0;indexN1008C < errors.length; indexN1008C++) {
      error = errors[indexN1008C];
      type = error.type;

      severity = error.severity;

      if(

	(severity > 1)

      ) {
	test.strictEqual("wf-invalid-character-in-node-name", type, "type");
        test.strictEqual(2, severity, "severityError");
        errorCount += 1;

      }

    }
    test.strictEqual(1, errorCount, "oneWFError");

    test.done();
  },
  /**
   *
   Load a document with an invalid character in an attribute value, should throw a PARSE_ERR and
   dispatch a DOMError with type 'wf-invalid-character'.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSParser-parseURI
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-Core-20031107/core#parameter-well-formed
   */
  wellformed03 : function (test) {
    var success, doc, elem, node, nodeName, domConfig, domImplLS, lsParser, nullSchemaType = null;

    var resourceURI;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error, errorCount = 0, severity, type;
    domImplLS = getImplementation();
    lsParser = domImplLS.createLSParser(1,nullSchemaType);
    domConfig = lsParser.domConfig;

    domConfig.setParameter("well-formed", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    resourceURI = getResourceURI("wellformed3");

    {
      success = false;
      try {
        doc = lsParser.parseURI(resourceURI);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 81);
      }
      test.ok(success, "throw_PARSE_ERR");
    }
    errors = errorMonitor.allErrors;
    for(var indexN1008C = 0;indexN1008C < errors.length; indexN1008C++) {
      error = errors[indexN1008C];
      type = error.type;

      severity = error.severity;

      if(("wf-invalid-character" == type)) {
	test.strictEqual(2, severity, "severityError");
        errorCount += 1;

      }

    }
    test.strictEqual(1, errorCount, "oneWFError");

    test.done();
  },
  /**
   * Writes a document to a URL for a temporary file
   using LSSerializer.writeToURI and rereads the document.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToURI
   */
  writeToURI1 : function (test) {
    var success, testDoc, domImpl, output, serializer, systemId, checkSystemId, status, input, parser, checkDoc, docElem, docElemName, NULL_SCHEMA_TYPE = null;

    var testDocRef = null;
    if (typeof(this.testDoc) != 'undefined') {
      testDocRef = this.testDoc;
    }
    testDoc = load(testDocRef, "testDoc", "test0");
    domImpl = getImplementation();
    // TODO: umm.. what? are these tests complete?
    // fail("Unrecognized method or attribute createTempURI");

    serializer = domImpl.createLSSerializer();
    status = serializer.writeToURI(testDoc,systemId);
    test.ok(status, "writeStatus");
    input = domImpl.createLSInput();
    input.systemId = systemId;

    parser = domImpl.createLSParser(1,NULL_SCHEMA_TYPE);
    checkDoc = parser.parse(input);
    test.ok(checkDoc !== null, "checkNotNull");
    docElem = checkDoc.documentElement;

    docElemName = docElem.nodeName;

    test.strictEqual("elt0", docElemName, "checkDocElemName");

    test.done();
  },
  /**
   * Writes a document to a URL for a http server
   using LSSerializer.writeToURI and rereads the document.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToURI
   */
  writeToURI2 : function (test) {
    var success, testDoc, domImpl, output, serializer, systemId, checkSystemId, status, input, parser, checkDoc, docElem, docElemName, NULL_SCHEMA_TYPE = null;

    var testDocRef = null;
    if (typeof(this.testDoc) != 'undefined') {
      testDocRef = this.testDoc;
    }
    testDoc = load(testDocRef, "testDoc", "test0");
    domImpl = getImplementation();
    // TODO: umm.. what? are these tests complete?
    // fail("Unrecognized method or attribute createTempURI");

    serializer = domImpl.createLSSerializer();
    status = serializer.writeToURI(testDoc,systemId);
    test.ok(status, "writeStatus");
    input = domImpl.createLSInput();
    input.systemId = systemId;

    parser = domImpl.createLSParser(1,NULL_SCHEMA_TYPE);
    checkDoc = parser.parse(input);
    test.ok(checkDoc !== null, "checkNotNull");
    docElem = checkDoc.documentElement;

    docElemName = docElem.nodeName;

    test.strictEqual("elt0", docElemName, "checkDocElemName");

    test.done();
  },
  /**
   *
   XML declarations should be serialized if xml-declaration is true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-xml-declaration
   */
  xmldeclaration01 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, docType = null;

    var output;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    doc = domImplLS.createDocument("http://www.example.org","test",docType);
    domConfig = lsSerializer.domConfig;

    domConfig.setParameter("xml-declaration", true);
    output = lsSerializer.writeToString(doc);
    test.ok(output.indexOf("<?xml") >= 0, "containsXMLDecl");
    test.ok(output.indexOf("UTF-16") >= 0, "containsUTF16");
    test.ok(output.indexOf("1.0") >= 0, "contains1_0");

    test.done();
  },
  /**
   *
   XML declarations should not be serialized if xml-declaration is false.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#LS-LSSerializer-writeToString
   * @see http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save#parameter-xml-declaration
   */
  xmldeclaration02 : function (test) {
    var success, doc, domConfig, domImplLS, lsSerializer, docType = null;

    var output;
    domImplLS = getImplementation();
    lsSerializer = domImplLS.createLSSerializer();
    doc = domImplLS.createDocument("http://www.example.org","test",docType);
    domConfig = lsSerializer.domConfig;

    domConfig.setParameter("xml-declaration", false);
    output = lsSerializer.writeToString(doc);

    test.ok((output.indexOf("<?xml") >= 0) === false, "containsXMLDecl");
    test.ok((output.indexOf("UTF-16") >= 0) === false, "containsUTF16");
	  test.ok((output.indexOf("1.0") >= 0) === false, "contains1_0");

    test.done();
  }
}
