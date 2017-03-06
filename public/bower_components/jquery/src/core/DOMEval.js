define( [
	"../var/document"
], function( document ) {
	"use strict";

	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}

	return DOMEval;
} );
