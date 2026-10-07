/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

var SourceNode = require("source-map").SourceNode;
var SourceMapConsumer = require("source-map").SourceMapConsumer;

var applySourceMap = function(
	sourceNode,
	sourceMapConsumer,
	sourceFile,
	removeGeneratedCodeForSourceFile
) {
	// The following notations are used to name stuff:
	// Left <------------> Middle <-------------------> Right
	// Input arguments:
	//        sourceNode                                       - Code mapping from Left to Middle
	//                   sourceFile                            - Name of a Middle file
	//                              sourceMapConsumer          - Code mapping from Middle to Right
	// Variables:
	//           l2m                      m2r
	// Left <-----------------------------------------> Right
	// Variables:
	//                       l2r

	var l2rResult = new SourceNode();
	var l2rOutput = [];

	var middleSourceContents = {};

	var m2rMappingsByLine = {};

	var rightSourceContentsSet = {};
	var rightSourceContentsLines = {};

	// Store all mappings by generated line
	sourceMapConsumer.eachMapping(
		function(mapping) {
			(m2rMappingsByLine[mapping.generatedLine] =
				m2rMappingsByLine[mapping.generatedLine] || []).push(mapping);
		},
		null,
		SourceMapConsumer.GENERATED_ORDER
	);

	// Store all source contents
	sourceNode.walkSourceContents(function(source, content) {
		middleSourceContents["$" + source] = content;
	});

	var middleSource = middleSourceContents["$" + sourceFile];
	var middleSourceLines = middleSource ? middleSource.split("\n") : undefined;

	// Walk all left to middle mappings
	sourceNode.walk(function(chunk, middleMapping) {
		var source;

		// Find a mapping from middle to right
		if(
			middleMapping.source === sourceFile &&
			middleMapping.line &&
			m2rMappingsByLine[middleMapping.line]
		) {
			var m2rBestFit;
			var m2rMappings = m2rMappingsByLine[middleMapping.line];
			// Note: if this becomes a performance problem, use binary search
			for(var i = 0; i < m2rMappings.length; i++) {
				if(m2rMappings[i].generatedColumn <= middleMapping.column) {
					m2rBestFit = m2rMappings[i];
				}
			}
			if(m2rBestFit) {
				var allowMiddleName = false;
				var middleLine;
				var rightSourceContent;
				var rightSourceContentLines;
				var rightSource = m2rBestFit.source;
				// Check if we have middle and right source for this mapping
				// Then we could have an "identify" mapping
				if(
					middleSourceLines &&
					rightSource &&
					(middleLine = middleSourceLines[m2rBestFit.generatedLine - 1]) &&
					((rightSourceContentLines = rightSourceContentsLines[rightSource]) ||
						(rightSourceContent = sourceMapConsumer.sourceContentFor(
							rightSource,
							true
						)))
				) {
					if(!rightSourceContentLines) {
						rightSourceContentLines = rightSourceContentsLines[
							rightSource
						] = rightSourceContent.split("\n");
					}
					var rightLine = rightSourceContentLines[m2rBestFit.originalLine - 1];
					if(rightLine) {
						var offset = middleMapping.column - m2rBestFit.generatedColumn;
						if(offset > 0) {
							var middlePart = middleLine.slice(
								m2rBestFit.generatedColumn,
								middleMapping.column
							);
							var rightPart = rightLine.slice(
								m2rBestFit.originalColumn,
								m2rBestFit.originalColumn + offset
							);
							if(middlePart === rightPart) {
								// When original and generated code is equal we assume we have an "identity" mapping
								// In this case we can offset the original position
								m2rBestFit = Object.assign({}, m2rBestFit, {
									originalColumn: m2rBestFit.originalColumn + offset,
									generatedColumn: middleMapping.column
								});
							}
						}
						if(!m2rBestFit.name && middleMapping.name) {
							allowMiddleName =
								rightLine.slice(
									m2rBestFit.originalColumn,
									m2rBestFit.originalColumn + middleMapping.name.length
								) === middleMapping.name;
						}
					}
				}

				// Construct a left to right node from the found middle to right mapping
				source = m2rBestFit.source;
				l2rOutput.push(
					new SourceNode(
						m2rBestFit.originalLine,
						m2rBestFit.originalColumn,
						source,
						chunk,
						allowMiddleName ? middleMapping.name : m2rBestFit.name
					)
				);

				// Set the source contents once
				if(!("$" + source in rightSourceContentsSet)) {
					rightSourceContentsSet["$" + source] = true;
					var sourceContent = sourceMapConsumer.sourceContentFor(source, true);
					if(sourceContent) {
						l2rResult.setSourceContent(source, sourceContent);
					}
				}
				return;
			}
		}

		if((removeGeneratedCodeForSourceFile && middleMapping.source === sourceFile) || !middleMapping.source) {
			// Construct a left to middle node with only generated code
			// Because user do not want mappings to middle sources
			// Or this chunk has no mapping
			l2rOutput.push(chunk);
			return;
		}

		// Construct a left to middle node
		source = middleMapping.source;
		l2rOutput.push(
			new SourceNode(
				middleMapping.line,
				middleMapping.column,
				source,
				chunk,
				middleMapping.name
			)
		);
		if("$" + source in middleSourceContents) {
			if(!("$" + source in rightSourceContentsSet)) {
				l2rResult.setSourceContent(source, middleSourceContents["$" + source]);
				delete middleSourceContents["$" + source];
			}
		}
	});

	// Put output into the resulting SourceNode
	l2rResult.add(l2rOutput);
	return l2rResult;
};

module.exports = applySourceMap;
