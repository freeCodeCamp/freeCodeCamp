//#region ../../node_modules/.pnpm/parse5@8.0.0/node_modules/parse5/dist/common/unicode.js
const UNDEFINED_CODE_POINTS = new Set([
	65534,
	65535,
	131070,
	131071,
	196606,
	196607,
	262142,
	262143,
	327678,
	327679,
	393214,
	393215,
	458750,
	458751,
	524286,
	524287,
	589822,
	589823,
	655358,
	655359,
	720894,
	720895,
	786430,
	786431,
	851966,
	851967,
	917502,
	917503,
	983038,
	983039,
	1048574,
	1048575,
	1114110,
	1114111
]);
const REPLACEMENT_CHARACTER = "�";
var CODE_POINTS;
(function(CODE_POINTS$1) {
	CODE_POINTS$1[CODE_POINTS$1["EOF"] = -1] = "EOF";
	CODE_POINTS$1[CODE_POINTS$1["NULL"] = 0] = "NULL";
	CODE_POINTS$1[CODE_POINTS$1["TABULATION"] = 9] = "TABULATION";
	CODE_POINTS$1[CODE_POINTS$1["CARRIAGE_RETURN"] = 13] = "CARRIAGE_RETURN";
	CODE_POINTS$1[CODE_POINTS$1["LINE_FEED"] = 10] = "LINE_FEED";
	CODE_POINTS$1[CODE_POINTS$1["FORM_FEED"] = 12] = "FORM_FEED";
	CODE_POINTS$1[CODE_POINTS$1["SPACE"] = 32] = "SPACE";
	CODE_POINTS$1[CODE_POINTS$1["EXCLAMATION_MARK"] = 33] = "EXCLAMATION_MARK";
	CODE_POINTS$1[CODE_POINTS$1["QUOTATION_MARK"] = 34] = "QUOTATION_MARK";
	CODE_POINTS$1[CODE_POINTS$1["AMPERSAND"] = 38] = "AMPERSAND";
	CODE_POINTS$1[CODE_POINTS$1["APOSTROPHE"] = 39] = "APOSTROPHE";
	CODE_POINTS$1[CODE_POINTS$1["HYPHEN_MINUS"] = 45] = "HYPHEN_MINUS";
	CODE_POINTS$1[CODE_POINTS$1["SOLIDUS"] = 47] = "SOLIDUS";
	CODE_POINTS$1[CODE_POINTS$1["DIGIT_0"] = 48] = "DIGIT_0";
	CODE_POINTS$1[CODE_POINTS$1["DIGIT_9"] = 57] = "DIGIT_9";
	CODE_POINTS$1[CODE_POINTS$1["SEMICOLON"] = 59] = "SEMICOLON";
	CODE_POINTS$1[CODE_POINTS$1["LESS_THAN_SIGN"] = 60] = "LESS_THAN_SIGN";
	CODE_POINTS$1[CODE_POINTS$1["EQUALS_SIGN"] = 61] = "EQUALS_SIGN";
	CODE_POINTS$1[CODE_POINTS$1["GREATER_THAN_SIGN"] = 62] = "GREATER_THAN_SIGN";
	CODE_POINTS$1[CODE_POINTS$1["QUESTION_MARK"] = 63] = "QUESTION_MARK";
	CODE_POINTS$1[CODE_POINTS$1["LATIN_CAPITAL_A"] = 65] = "LATIN_CAPITAL_A";
	CODE_POINTS$1[CODE_POINTS$1["LATIN_CAPITAL_Z"] = 90] = "LATIN_CAPITAL_Z";
	CODE_POINTS$1[CODE_POINTS$1["RIGHT_SQUARE_BRACKET"] = 93] = "RIGHT_SQUARE_BRACKET";
	CODE_POINTS$1[CODE_POINTS$1["GRAVE_ACCENT"] = 96] = "GRAVE_ACCENT";
	CODE_POINTS$1[CODE_POINTS$1["LATIN_SMALL_A"] = 97] = "LATIN_SMALL_A";
	CODE_POINTS$1[CODE_POINTS$1["LATIN_SMALL_Z"] = 122] = "LATIN_SMALL_Z";
})(CODE_POINTS || (CODE_POINTS = {}));
const SEQUENCES = {
	DASH_DASH: "--",
	CDATA_START: "[CDATA[",
	DOCTYPE: "doctype",
	SCRIPT: "script",
	PUBLIC: "public",
	SYSTEM: "system"
};
function isSurrogate(cp) {
	return cp >= 55296 && cp <= 57343;
}
function isSurrogatePair(cp) {
	return cp >= 56320 && cp <= 57343;
}
function getSurrogatePairCodePoint(cp1, cp2) {
	return (cp1 - 55296) * 1024 + 9216 + cp2;
}
function isControlCodePoint(cp) {
	return cp !== 32 && cp !== 10 && cp !== 13 && cp !== 9 && cp !== 12 && cp >= 1 && cp <= 31 || cp >= 127 && cp <= 159;
}
function isUndefinedCodePoint(cp) {
	return cp >= 64976 && cp <= 65007 || UNDEFINED_CODE_POINTS.has(cp);
}

//#endregion
//#region ../../node_modules/.pnpm/parse5@8.0.0/node_modules/parse5/dist/common/error-codes.js
var ERR;
(function(ERR$1) {
	ERR$1["controlCharacterInInputStream"] = "control-character-in-input-stream";
	ERR$1["noncharacterInInputStream"] = "noncharacter-in-input-stream";
	ERR$1["surrogateInInputStream"] = "surrogate-in-input-stream";
	ERR$1["nonVoidHtmlElementStartTagWithTrailingSolidus"] = "non-void-html-element-start-tag-with-trailing-solidus";
	ERR$1["endTagWithAttributes"] = "end-tag-with-attributes";
	ERR$1["endTagWithTrailingSolidus"] = "end-tag-with-trailing-solidus";
	ERR$1["unexpectedSolidusInTag"] = "unexpected-solidus-in-tag";
	ERR$1["unexpectedNullCharacter"] = "unexpected-null-character";
	ERR$1["unexpectedQuestionMarkInsteadOfTagName"] = "unexpected-question-mark-instead-of-tag-name";
	ERR$1["invalidFirstCharacterOfTagName"] = "invalid-first-character-of-tag-name";
	ERR$1["unexpectedEqualsSignBeforeAttributeName"] = "unexpected-equals-sign-before-attribute-name";
	ERR$1["missingEndTagName"] = "missing-end-tag-name";
	ERR$1["unexpectedCharacterInAttributeName"] = "unexpected-character-in-attribute-name";
	ERR$1["unknownNamedCharacterReference"] = "unknown-named-character-reference";
	ERR$1["missingSemicolonAfterCharacterReference"] = "missing-semicolon-after-character-reference";
	ERR$1["unexpectedCharacterAfterDoctypeSystemIdentifier"] = "unexpected-character-after-doctype-system-identifier";
	ERR$1["unexpectedCharacterInUnquotedAttributeValue"] = "unexpected-character-in-unquoted-attribute-value";
	ERR$1["eofBeforeTagName"] = "eof-before-tag-name";
	ERR$1["eofInTag"] = "eof-in-tag";
	ERR$1["missingAttributeValue"] = "missing-attribute-value";
	ERR$1["missingWhitespaceBetweenAttributes"] = "missing-whitespace-between-attributes";
	ERR$1["missingWhitespaceAfterDoctypePublicKeyword"] = "missing-whitespace-after-doctype-public-keyword";
	ERR$1["missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers"] = "missing-whitespace-between-doctype-public-and-system-identifiers";
	ERR$1["missingWhitespaceAfterDoctypeSystemKeyword"] = "missing-whitespace-after-doctype-system-keyword";
	ERR$1["missingQuoteBeforeDoctypePublicIdentifier"] = "missing-quote-before-doctype-public-identifier";
	ERR$1["missingQuoteBeforeDoctypeSystemIdentifier"] = "missing-quote-before-doctype-system-identifier";
	ERR$1["missingDoctypePublicIdentifier"] = "missing-doctype-public-identifier";
	ERR$1["missingDoctypeSystemIdentifier"] = "missing-doctype-system-identifier";
	ERR$1["abruptDoctypePublicIdentifier"] = "abrupt-doctype-public-identifier";
	ERR$1["abruptDoctypeSystemIdentifier"] = "abrupt-doctype-system-identifier";
	ERR$1["cdataInHtmlContent"] = "cdata-in-html-content";
	ERR$1["incorrectlyOpenedComment"] = "incorrectly-opened-comment";
	ERR$1["eofInScriptHtmlCommentLikeText"] = "eof-in-script-html-comment-like-text";
	ERR$1["eofInDoctype"] = "eof-in-doctype";
	ERR$1["nestedComment"] = "nested-comment";
	ERR$1["abruptClosingOfEmptyComment"] = "abrupt-closing-of-empty-comment";
	ERR$1["eofInComment"] = "eof-in-comment";
	ERR$1["incorrectlyClosedComment"] = "incorrectly-closed-comment";
	ERR$1["eofInCdata"] = "eof-in-cdata";
	ERR$1["absenceOfDigitsInNumericCharacterReference"] = "absence-of-digits-in-numeric-character-reference";
	ERR$1["nullCharacterReference"] = "null-character-reference";
	ERR$1["surrogateCharacterReference"] = "surrogate-character-reference";
	ERR$1["characterReferenceOutsideUnicodeRange"] = "character-reference-outside-unicode-range";
	ERR$1["controlCharacterReference"] = "control-character-reference";
	ERR$1["noncharacterCharacterReference"] = "noncharacter-character-reference";
	ERR$1["missingWhitespaceBeforeDoctypeName"] = "missing-whitespace-before-doctype-name";
	ERR$1["missingDoctypeName"] = "missing-doctype-name";
	ERR$1["invalidCharacterSequenceAfterDoctypeName"] = "invalid-character-sequence-after-doctype-name";
	ERR$1["duplicateAttribute"] = "duplicate-attribute";
	ERR$1["nonConformingDoctype"] = "non-conforming-doctype";
	ERR$1["missingDoctype"] = "missing-doctype";
	ERR$1["misplacedDoctype"] = "misplaced-doctype";
	ERR$1["endTagWithoutMatchingOpenElement"] = "end-tag-without-matching-open-element";
	ERR$1["closingOfElementWithOpenChildElements"] = "closing-of-element-with-open-child-elements";
	ERR$1["disallowedContentInNoscriptInHead"] = "disallowed-content-in-noscript-in-head";
	ERR$1["openElementsLeftAfterEof"] = "open-elements-left-after-eof";
	ERR$1["abandonedHeadElementChild"] = "abandoned-head-element-child";
	ERR$1["misplacedStartTagForHeadElement"] = "misplaced-start-tag-for-head-element";
	ERR$1["nestedNoscriptInHead"] = "nested-noscript-in-head";
	ERR$1["eofInElementThatCanContainOnlyText"] = "eof-in-element-that-can-contain-only-text";
})(ERR || (ERR = {}));

//#endregion
//#region ../../node_modules/.pnpm/parse5@8.0.0/node_modules/parse5/dist/tokenizer/preprocessor.js
const DEFAULT_BUFFER_WATERLINE = 65536;
var Preprocessor = class {
	constructor(handler) {
		this.handler = handler;
		this.html = "";
		this.pos = -1;
		this.lastGapPos = -2;
		this.gapStack = [];
		this.skipNextNewLine = false;
		this.lastChunkWritten = false;
		this.endOfChunkHit = false;
		this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
		this.isEol = false;
		this.lineStartPos = 0;
		this.droppedBufferSize = 0;
		this.line = 1;
		this.lastErrOffset = -1;
	}
	/** The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before. */
	get col() {
		return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
	}
	get offset() {
		return this.droppedBufferSize + this.pos;
	}
	getError(code, cpOffset) {
		const { line, col, offset } = this;
		const startCol = col + cpOffset;
		const startOffset = offset + cpOffset;
		return {
			code,
			startLine: line,
			endLine: line,
			startCol,
			endCol: startCol,
			startOffset,
			endOffset: startOffset
		};
	}
	_err(code) {
		if (this.handler.onParseError && this.lastErrOffset !== this.offset) {
			this.lastErrOffset = this.offset;
			this.handler.onParseError(this.getError(code, 0));
		}
	}
	_addGap() {
		this.gapStack.push(this.lastGapPos);
		this.lastGapPos = this.pos;
	}
	_processSurrogate(cp) {
		if (this.pos !== this.html.length - 1) {
			const nextCp = this.html.charCodeAt(this.pos + 1);
			if (isSurrogatePair(nextCp)) {
				this.pos++;
				this._addGap();
				return getSurrogatePairCodePoint(cp, nextCp);
			}
		} else if (!this.lastChunkWritten) {
			this.endOfChunkHit = true;
			return CODE_POINTS.EOF;
		}
		this._err(ERR.surrogateInInputStream);
		return cp;
	}
	willDropParsedChunk() {
		return this.pos > this.bufferWaterline;
	}
	dropParsedChunk() {
		if (this.willDropParsedChunk()) {
			this.html = this.html.substring(this.pos);
			this.lineStartPos -= this.pos;
			this.droppedBufferSize += this.pos;
			this.pos = 0;
			this.lastGapPos = -2;
			this.gapStack.length = 0;
		}
	}
	write(chunk, isLastChunk) {
		if (this.html.length > 0) this.html += chunk;
		else this.html = chunk;
		this.endOfChunkHit = false;
		this.lastChunkWritten = isLastChunk;
	}
	insertHtmlAtCurrentPos(chunk) {
		this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1);
		this.endOfChunkHit = false;
	}
	startsWith(pattern, caseSensitive) {
		if (this.pos + pattern.length > this.html.length) {
			this.endOfChunkHit = !this.lastChunkWritten;
			return false;
		}
		if (caseSensitive) return this.html.startsWith(pattern, this.pos);
		for (let i = 0; i < pattern.length; i++) if ((this.html.charCodeAt(this.pos + i) | 32) !== pattern.charCodeAt(i)) return false;
		return true;
	}
	peek(offset) {
		const pos = this.pos + offset;
		if (pos >= this.html.length) {
			this.endOfChunkHit = !this.lastChunkWritten;
			return CODE_POINTS.EOF;
		}
		const code = this.html.charCodeAt(pos);
		return code === CODE_POINTS.CARRIAGE_RETURN ? CODE_POINTS.LINE_FEED : code;
	}
	advance() {
		this.pos++;
		if (this.isEol) {
			this.isEol = false;
			this.line++;
			this.lineStartPos = this.pos;
		}
		if (this.pos >= this.html.length) {
			this.endOfChunkHit = !this.lastChunkWritten;
			return CODE_POINTS.EOF;
		}
		let cp = this.html.charCodeAt(this.pos);
		if (cp === CODE_POINTS.CARRIAGE_RETURN) {
			this.isEol = true;
			this.skipNextNewLine = true;
			return CODE_POINTS.LINE_FEED;
		}
		if (cp === CODE_POINTS.LINE_FEED) {
			this.isEol = true;
			if (this.skipNextNewLine) {
				this.line--;
				this.skipNextNewLine = false;
				this._addGap();
				return this.advance();
			}
		}
		this.skipNextNewLine = false;
		if (isSurrogate(cp)) cp = this._processSurrogate(cp);
		if (!(this.handler.onParseError === null || cp > 31 && cp < 127 || cp === CODE_POINTS.LINE_FEED || cp === CODE_POINTS.CARRIAGE_RETURN || cp > 159 && cp < 64976)) this._checkForProblematicCharacters(cp);
		return cp;
	}
	_checkForProblematicCharacters(cp) {
		if (isControlCodePoint(cp)) this._err(ERR.controlCharacterInInputStream);
		else if (isUndefinedCodePoint(cp)) this._err(ERR.noncharacterInInputStream);
	}
	retreat(count) {
		this.pos -= count;
		while (this.pos < this.lastGapPos) {
			this.lastGapPos = this.gapStack.pop();
			this.pos--;
		}
		this.isEol = false;
	}
};

//#endregion
//#region ../../node_modules/.pnpm/parse5@8.0.0/node_modules/parse5/dist/common/token.js
var TokenType;
(function(TokenType$1) {
	TokenType$1[TokenType$1["CHARACTER"] = 0] = "CHARACTER";
	TokenType$1[TokenType$1["NULL_CHARACTER"] = 1] = "NULL_CHARACTER";
	TokenType$1[TokenType$1["WHITESPACE_CHARACTER"] = 2] = "WHITESPACE_CHARACTER";
	TokenType$1[TokenType$1["START_TAG"] = 3] = "START_TAG";
	TokenType$1[TokenType$1["END_TAG"] = 4] = "END_TAG";
	TokenType$1[TokenType$1["COMMENT"] = 5] = "COMMENT";
	TokenType$1[TokenType$1["DOCTYPE"] = 6] = "DOCTYPE";
	TokenType$1[TokenType$1["EOF"] = 7] = "EOF";
	TokenType$1[TokenType$1["HIBERNATION"] = 8] = "HIBERNATION";
})(TokenType || (TokenType = {}));
function getTokenAttr(token, attrName) {
	for (let i = token.attrs.length - 1; i >= 0; i--) if (token.attrs[i].name === attrName) return token.attrs[i].value;
	return null;
}

//#endregion
//#region ../../node_modules/.pnpm/entities@6.0.0/node_modules/entities/dist/esm/generated/decode-data-html.js
const htmlDecodeTree = /* @__PURE__ */ new Uint16Array(/* @__PURE__ */ "ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻\"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌".split("").map((c) => c.charCodeAt(0)));

//#endregion
//#region ../../node_modules/.pnpm/entities@6.0.0/node_modules/entities/dist/esm/decode-codepoint.js
var _a;
const decodeMap = new Map([
	[0, 65533],
	[128, 8364],
	[130, 8218],
	[131, 402],
	[132, 8222],
	[133, 8230],
	[134, 8224],
	[135, 8225],
	[136, 710],
	[137, 8240],
	[138, 352],
	[139, 8249],
	[140, 338],
	[142, 381],
	[145, 8216],
	[146, 8217],
	[147, 8220],
	[148, 8221],
	[149, 8226],
	[150, 8211],
	[151, 8212],
	[152, 732],
	[153, 8482],
	[154, 353],
	[155, 8250],
	[156, 339],
	[158, 382],
	[159, 376]
]);
/**
* Polyfill for `String.fromCodePoint`. It is used to create a string from a Unicode code point.
*/
const fromCodePoint = (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
	let output = "";
	if (codePoint > 65535) {
		codePoint -= 65536;
		output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
		codePoint = 56320 | codePoint & 1023;
	}
	output += String.fromCharCode(codePoint);
	return output;
};
/**
* Replace the given code point with a replacement character if it is a
* surrogate or is outside the valid range. Otherwise return the code
* point unchanged.
*/
function replaceCodePoint(codePoint) {
	var _a$1;
	if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) return 65533;
	return (_a$1 = decodeMap.get(codePoint)) !== null && _a$1 !== void 0 ? _a$1 : codePoint;
}

//#endregion
//#region ../../node_modules/.pnpm/entities@6.0.0/node_modules/entities/dist/esm/decode.js
var CharCodes;
(function(CharCodes$1) {
	CharCodes$1[CharCodes$1["NUM"] = 35] = "NUM";
	CharCodes$1[CharCodes$1["SEMI"] = 59] = "SEMI";
	CharCodes$1[CharCodes$1["EQUALS"] = 61] = "EQUALS";
	CharCodes$1[CharCodes$1["ZERO"] = 48] = "ZERO";
	CharCodes$1[CharCodes$1["NINE"] = 57] = "NINE";
	CharCodes$1[CharCodes$1["LOWER_A"] = 97] = "LOWER_A";
	CharCodes$1[CharCodes$1["LOWER_F"] = 102] = "LOWER_F";
	CharCodes$1[CharCodes$1["LOWER_X"] = 120] = "LOWER_X";
	CharCodes$1[CharCodes$1["LOWER_Z"] = 122] = "LOWER_Z";
	CharCodes$1[CharCodes$1["UPPER_A"] = 65] = "UPPER_A";
	CharCodes$1[CharCodes$1["UPPER_F"] = 70] = "UPPER_F";
	CharCodes$1[CharCodes$1["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
/** Bit that needs to be set to convert an upper case ASCII character to lower case */
const TO_LOWER_BIT = 32;
var BinTrieFlags;
(function(BinTrieFlags$1) {
	BinTrieFlags$1[BinTrieFlags$1["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
	BinTrieFlags$1[BinTrieFlags$1["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
	BinTrieFlags$1[BinTrieFlags$1["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber(code) {
	return code >= CharCodes.ZERO && code <= CharCodes.NINE;
}
function isHexadecimalCharacter(code) {
	return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric$1(code) {
	return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
}
/**
* Checks if the given character is a valid end character for an entity in an attribute.
*
* Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
* See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
*/
function isEntityInAttributeInvalidEnd(code) {
	return code === CharCodes.EQUALS || isAsciiAlphaNumeric$1(code);
}
var EntityDecoderState;
(function(EntityDecoderState$1) {
	EntityDecoderState$1[EntityDecoderState$1["EntityStart"] = 0] = "EntityStart";
	EntityDecoderState$1[EntityDecoderState$1["NumericStart"] = 1] = "NumericStart";
	EntityDecoderState$1[EntityDecoderState$1["NumericDecimal"] = 2] = "NumericDecimal";
	EntityDecoderState$1[EntityDecoderState$1["NumericHex"] = 3] = "NumericHex";
	EntityDecoderState$1[EntityDecoderState$1["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode$1) {
	/** Entities in text nodes that can end with any character. */
	DecodingMode$1[DecodingMode$1["Legacy"] = 0] = "Legacy";
	/** Only allow entities terminated with a semicolon. */
	DecodingMode$1[DecodingMode$1["Strict"] = 1] = "Strict";
	/** Entities in attributes have limitations on ending characters. */
	DecodingMode$1[DecodingMode$1["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
/**
* Token decoder with support of writing partial entities.
*/
var EntityDecoder = class {
	constructor(decodeTree, emitCodePoint, errors) {
		this.decodeTree = decodeTree;
		this.emitCodePoint = emitCodePoint;
		this.errors = errors;
		/** The current state of the decoder. */
		this.state = EntityDecoderState.EntityStart;
		/** Characters that were consumed while parsing an entity. */
		this.consumed = 1;
		/**
		* The result of the entity.
		*
		* Either the result index of a numeric entity, or the codepoint of a
		* numeric entity.
		*/
		this.result = 0;
		/** The current index in the decode tree. */
		this.treeIndex = 0;
		/** The number of characters that were consumed in excess. */
		this.excess = 1;
		/** The mode in which the decoder is operating. */
		this.decodeMode = DecodingMode.Strict;
	}
	/** Resets the instance to make it reusable. */
	startEntity(decodeMode) {
		this.decodeMode = decodeMode;
		this.state = EntityDecoderState.EntityStart;
		this.result = 0;
		this.treeIndex = 0;
		this.excess = 1;
		this.consumed = 1;
	}
	/**
	* Write an entity to the decoder. This can be called multiple times with partial entities.
	* If the entity is incomplete, the decoder will return -1.
	*
	* Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
	* entity is incomplete, and resume when the next string is written.
	*
	* @param input The string containing the entity (or a continuation of the entity).
	* @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
	* @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	*/
	write(input, offset) {
		switch (this.state) {
			case EntityDecoderState.EntityStart:
				if (input.charCodeAt(offset) === CharCodes.NUM) {
					this.state = EntityDecoderState.NumericStart;
					this.consumed += 1;
					return this.stateNumericStart(input, offset + 1);
				}
				this.state = EntityDecoderState.NamedEntity;
				return this.stateNamedEntity(input, offset);
			case EntityDecoderState.NumericStart: return this.stateNumericStart(input, offset);
			case EntityDecoderState.NumericDecimal: return this.stateNumericDecimal(input, offset);
			case EntityDecoderState.NumericHex: return this.stateNumericHex(input, offset);
			case EntityDecoderState.NamedEntity: return this.stateNamedEntity(input, offset);
		}
	}
	/**
	* Switches between the numeric decimal and hexadecimal states.
	*
	* Equivalent to the `Numeric character reference state` in the HTML spec.
	*
	* @param input The string containing the entity (or a continuation of the entity).
	* @param offset The current offset.
	* @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	*/
	stateNumericStart(input, offset) {
		if (offset >= input.length) return -1;
		if ((input.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
			this.state = EntityDecoderState.NumericHex;
			this.consumed += 1;
			return this.stateNumericHex(input, offset + 1);
		}
		this.state = EntityDecoderState.NumericDecimal;
		return this.stateNumericDecimal(input, offset);
	}
	addToNumericResult(input, start, end, base) {
		if (start !== end) {
			const digitCount = end - start;
			this.result = this.result * Math.pow(base, digitCount) + Number.parseInt(input.substr(start, digitCount), base);
			this.consumed += digitCount;
		}
	}
	/**
	* Parses a hexadecimal numeric entity.
	*
	* Equivalent to the `Hexademical character reference state` in the HTML spec.
	*
	* @param input The string containing the entity (or a continuation of the entity).
	* @param offset The current offset.
	* @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	*/
	stateNumericHex(input, offset) {
		const startIndex = offset;
		while (offset < input.length) {
			const char = input.charCodeAt(offset);
			if (isNumber(char) || isHexadecimalCharacter(char)) offset += 1;
			else {
				this.addToNumericResult(input, startIndex, offset, 16);
				return this.emitNumericEntity(char, 3);
			}
		}
		this.addToNumericResult(input, startIndex, offset, 16);
		return -1;
	}
	/**
	* Parses a decimal numeric entity.
	*
	* Equivalent to the `Decimal character reference state` in the HTML spec.
	*
	* @param input The string containing the entity (or a continuation of the entity).
	* @param offset The current offset.
	* @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	*/
	stateNumericDecimal(input, offset) {
		const startIndex = offset;
		while (offset < input.length) {
			const char = input.charCodeAt(offset);
			if (isNumber(char)) offset += 1;
			else {
				this.addToNumericResult(input, startIndex, offset, 10);
				return this.emitNumericEntity(char, 2);
			}
		}
		this.addToNumericResult(input, startIndex, offset, 10);
		return -1;
	}
	/**
	* Validate and emit a numeric entity.
	*
	* Implements the logic from the `Hexademical character reference start
	* state` and `Numeric character reference end state` in the HTML spec.
	*
	* @param lastCp The last code point of the entity. Used to see if the
	*               entity was terminated with a semicolon.
	* @param expectedLength The minimum number of characters that should be
	*                       consumed. Used to validate that at least one digit
	*                       was consumed.
	* @returns The number of characters that were consumed.
	*/
	emitNumericEntity(lastCp, expectedLength) {
		var _a$1;
		if (this.consumed <= expectedLength) {
			(_a$1 = this.errors) === null || _a$1 === void 0 || _a$1.absenceOfDigitsInNumericCharacterReference(this.consumed);
			return 0;
		}
		if (lastCp === CharCodes.SEMI) this.consumed += 1;
		else if (this.decodeMode === DecodingMode.Strict) return 0;
		this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
		if (this.errors) {
			if (lastCp !== CharCodes.SEMI) this.errors.missingSemicolonAfterCharacterReference();
			this.errors.validateNumericCharacterReference(this.result);
		}
		return this.consumed;
	}
	/**
	* Parses a named entity.
	*
	* Equivalent to the `Named character reference state` in the HTML spec.
	*
	* @param input The string containing the entity (or a continuation of the entity).
	* @param offset The current offset.
	* @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	*/
	stateNamedEntity(input, offset) {
		const { decodeTree } = this;
		let current = decodeTree[this.treeIndex];
		let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
		for (; offset < input.length; offset++, this.excess++) {
			const char = input.charCodeAt(offset);
			this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
			if (this.treeIndex < 0) return this.result === 0 || this.decodeMode === DecodingMode.Attribute && (valueLength === 0 || isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
			current = decodeTree[this.treeIndex];
			valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
			if (valueLength !== 0) {
				if (char === CharCodes.SEMI) return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
				if (this.decodeMode !== DecodingMode.Strict) {
					this.result = this.treeIndex;
					this.consumed += this.excess;
					this.excess = 0;
				}
			}
		}
		return -1;
	}
	/**
	* Emit a named entity that was not terminated with a semicolon.
	*
	* @returns The number of characters consumed.
	*/
	emitNotTerminatedNamedEntity() {
		var _a$1;
		const { result, decodeTree } = this;
		const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
		this.emitNamedEntityData(result, valueLength, this.consumed);
		(_a$1 = this.errors) === null || _a$1 === void 0 || _a$1.missingSemicolonAfterCharacterReference();
		return this.consumed;
	}
	/**
	* Emit a named entity.
	*
	* @param result The index of the entity in the decode tree.
	* @param valueLength The number of bytes in the entity.
	* @param consumed The number of characters consumed.
	*
	* @returns The number of characters consumed.
	*/
	emitNamedEntityData(result, valueLength, consumed) {
		const { decodeTree } = this;
		this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
		if (valueLength === 3) this.emitCodePoint(decodeTree[result + 2], consumed);
		return consumed;
	}
	/**
	* Signal to the parser that the end of the input was reached.
	*
	* Remaining data will be emitted and relevant errors will be produced.
	*
	* @returns The number of characters consumed.
	*/
	end() {
		var _a$1;
		switch (this.state) {
			case EntityDecoderState.NamedEntity: return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
			case EntityDecoderState.NumericDecimal: return this.emitNumericEntity(0, 2);
			case EntityDecoderState.NumericHex: return this.emitNumericEntity(0, 3);
			case EntityDecoderState.NumericStart:
				(_a$1 = this.errors) === null || _a$1 === void 0 || _a$1.absenceOfDigitsInNumericCharacterReference(this.consumed);
				return 0;
			case EntityDecoderState.EntityStart: return 0;
		}
	}
};
/**
* Determines the branch of the current node that is taken given the current
* character. This function is used to traverse the trie.
*
* @param decodeTree The trie.
* @param current The current node.
* @param nodeIdx The index right after the current node and its value.
* @param char The current character.
* @returns The index of the next node, or -1 if no branch is taken.
*/
function determineBranch(decodeTree, current, nodeIndex, char) {
	const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
	const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
	if (branchCount === 0) return jumpOffset !== 0 && char === jumpOffset ? nodeIndex : -1;
	if (jumpOffset) {
		const value = char - jumpOffset;
		return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIndex + value] - 1;
	}
	let lo = nodeIndex;
	let hi = lo + branchCount - 1;
	while (lo <= hi) {
		const mid = lo + hi >>> 1;
		const midValue = decodeTree[mid];
		if (midValue < char) lo = mid + 1;
		else if (midValue > char) hi = mid - 1;
		else return decodeTree[mid + branchCount];
	}
	return -1;
}

//#endregion
//#region ../../node_modules/.pnpm/parse5@8.0.0/node_modules/parse5/dist/common/html.js
/** All valid namespaces in HTML. */
var NS;
(function(NS$1) {
	NS$1["HTML"] = "http://www.w3.org/1999/xhtml";
	NS$1["MATHML"] = "http://www.w3.org/1998/Math/MathML";
	NS$1["SVG"] = "http://www.w3.org/2000/svg";
	NS$1["XLINK"] = "http://www.w3.org/1999/xlink";
	NS$1["XML"] = "http://www.w3.org/XML/1998/namespace";
	NS$1["XMLNS"] = "http://www.w3.org/2000/xmlns/";
})(NS || (NS = {}));
var ATTRS;
(function(ATTRS$1) {
	ATTRS$1["TYPE"] = "type";
	ATTRS$1["ACTION"] = "action";
	ATTRS$1["ENCODING"] = "encoding";
	ATTRS$1["PROMPT"] = "prompt";
	ATTRS$1["NAME"] = "name";
	ATTRS$1["COLOR"] = "color";
	ATTRS$1["FACE"] = "face";
	ATTRS$1["SIZE"] = "size";
})(ATTRS || (ATTRS = {}));
/**
* The mode of the document.
*
* @see {@link https://dom.spec.whatwg.org/#concept-document-limited-quirks}
*/
var DOCUMENT_MODE;
(function(DOCUMENT_MODE$1) {
	DOCUMENT_MODE$1["NO_QUIRKS"] = "no-quirks";
	DOCUMENT_MODE$1["QUIRKS"] = "quirks";
	DOCUMENT_MODE$1["LIMITED_QUIRKS"] = "limited-quirks";
})(DOCUMENT_MODE || (DOCUMENT_MODE = {}));
var TAG_NAMES;
(function(TAG_NAMES$1) {
	TAG_NAMES$1["A"] = "a";
	TAG_NAMES$1["ADDRESS"] = "address";
	TAG_NAMES$1["ANNOTATION_XML"] = "annotation-xml";
	TAG_NAMES$1["APPLET"] = "applet";
	TAG_NAMES$1["AREA"] = "area";
	TAG_NAMES$1["ARTICLE"] = "article";
	TAG_NAMES$1["ASIDE"] = "aside";
	TAG_NAMES$1["B"] = "b";
	TAG_NAMES$1["BASE"] = "base";
	TAG_NAMES$1["BASEFONT"] = "basefont";
	TAG_NAMES$1["BGSOUND"] = "bgsound";
	TAG_NAMES$1["BIG"] = "big";
	TAG_NAMES$1["BLOCKQUOTE"] = "blockquote";
	TAG_NAMES$1["BODY"] = "body";
	TAG_NAMES$1["BR"] = "br";
	TAG_NAMES$1["BUTTON"] = "button";
	TAG_NAMES$1["CAPTION"] = "caption";
	TAG_NAMES$1["CENTER"] = "center";
	TAG_NAMES$1["CODE"] = "code";
	TAG_NAMES$1["COL"] = "col";
	TAG_NAMES$1["COLGROUP"] = "colgroup";
	TAG_NAMES$1["DD"] = "dd";
	TAG_NAMES$1["DESC"] = "desc";
	TAG_NAMES$1["DETAILS"] = "details";
	TAG_NAMES$1["DIALOG"] = "dialog";
	TAG_NAMES$1["DIR"] = "dir";
	TAG_NAMES$1["DIV"] = "div";
	TAG_NAMES$1["DL"] = "dl";
	TAG_NAMES$1["DT"] = "dt";
	TAG_NAMES$1["EM"] = "em";
	TAG_NAMES$1["EMBED"] = "embed";
	TAG_NAMES$1["FIELDSET"] = "fieldset";
	TAG_NAMES$1["FIGCAPTION"] = "figcaption";
	TAG_NAMES$1["FIGURE"] = "figure";
	TAG_NAMES$1["FONT"] = "font";
	TAG_NAMES$1["FOOTER"] = "footer";
	TAG_NAMES$1["FOREIGN_OBJECT"] = "foreignObject";
	TAG_NAMES$1["FORM"] = "form";
	TAG_NAMES$1["FRAME"] = "frame";
	TAG_NAMES$1["FRAMESET"] = "frameset";
	TAG_NAMES$1["H1"] = "h1";
	TAG_NAMES$1["H2"] = "h2";
	TAG_NAMES$1["H3"] = "h3";
	TAG_NAMES$1["H4"] = "h4";
	TAG_NAMES$1["H5"] = "h5";
	TAG_NAMES$1["H6"] = "h6";
	TAG_NAMES$1["HEAD"] = "head";
	TAG_NAMES$1["HEADER"] = "header";
	TAG_NAMES$1["HGROUP"] = "hgroup";
	TAG_NAMES$1["HR"] = "hr";
	TAG_NAMES$1["HTML"] = "html";
	TAG_NAMES$1["I"] = "i";
	TAG_NAMES$1["IMG"] = "img";
	TAG_NAMES$1["IMAGE"] = "image";
	TAG_NAMES$1["INPUT"] = "input";
	TAG_NAMES$1["IFRAME"] = "iframe";
	TAG_NAMES$1["KEYGEN"] = "keygen";
	TAG_NAMES$1["LABEL"] = "label";
	TAG_NAMES$1["LI"] = "li";
	TAG_NAMES$1["LINK"] = "link";
	TAG_NAMES$1["LISTING"] = "listing";
	TAG_NAMES$1["MAIN"] = "main";
	TAG_NAMES$1["MALIGNMARK"] = "malignmark";
	TAG_NAMES$1["MARQUEE"] = "marquee";
	TAG_NAMES$1["MATH"] = "math";
	TAG_NAMES$1["MENU"] = "menu";
	TAG_NAMES$1["META"] = "meta";
	TAG_NAMES$1["MGLYPH"] = "mglyph";
	TAG_NAMES$1["MI"] = "mi";
	TAG_NAMES$1["MO"] = "mo";
	TAG_NAMES$1["MN"] = "mn";
	TAG_NAMES$1["MS"] = "ms";
	TAG_NAMES$1["MTEXT"] = "mtext";
	TAG_NAMES$1["NAV"] = "nav";
	TAG_NAMES$1["NOBR"] = "nobr";
	TAG_NAMES$1["NOFRAMES"] = "noframes";
	TAG_NAMES$1["NOEMBED"] = "noembed";
	TAG_NAMES$1["NOSCRIPT"] = "noscript";
	TAG_NAMES$1["OBJECT"] = "object";
	TAG_NAMES$1["OL"] = "ol";
	TAG_NAMES$1["OPTGROUP"] = "optgroup";
	TAG_NAMES$1["OPTION"] = "option";
	TAG_NAMES$1["P"] = "p";
	TAG_NAMES$1["PARAM"] = "param";
	TAG_NAMES$1["PLAINTEXT"] = "plaintext";
	TAG_NAMES$1["PRE"] = "pre";
	TAG_NAMES$1["RB"] = "rb";
	TAG_NAMES$1["RP"] = "rp";
	TAG_NAMES$1["RT"] = "rt";
	TAG_NAMES$1["RTC"] = "rtc";
	TAG_NAMES$1["RUBY"] = "ruby";
	TAG_NAMES$1["S"] = "s";
	TAG_NAMES$1["SCRIPT"] = "script";
	TAG_NAMES$1["SEARCH"] = "search";
	TAG_NAMES$1["SECTION"] = "section";
	TAG_NAMES$1["SELECT"] = "select";
	TAG_NAMES$1["SOURCE"] = "source";
	TAG_NAMES$1["SMALL"] = "small";
	TAG_NAMES$1["SPAN"] = "span";
	TAG_NAMES$1["STRIKE"] = "strike";
	TAG_NAMES$1["STRONG"] = "strong";
	TAG_NAMES$1["STYLE"] = "style";
	TAG_NAMES$1["SUB"] = "sub";
	TAG_NAMES$1["SUMMARY"] = "summary";
	TAG_NAMES$1["SUP"] = "sup";
	TAG_NAMES$1["TABLE"] = "table";
	TAG_NAMES$1["TBODY"] = "tbody";
	TAG_NAMES$1["TEMPLATE"] = "template";
	TAG_NAMES$1["TEXTAREA"] = "textarea";
	TAG_NAMES$1["TFOOT"] = "tfoot";
	TAG_NAMES$1["TD"] = "td";
	TAG_NAMES$1["TH"] = "th";
	TAG_NAMES$1["THEAD"] = "thead";
	TAG_NAMES$1["TITLE"] = "title";
	TAG_NAMES$1["TR"] = "tr";
	TAG_NAMES$1["TRACK"] = "track";
	TAG_NAMES$1["TT"] = "tt";
	TAG_NAMES$1["U"] = "u";
	TAG_NAMES$1["UL"] = "ul";
	TAG_NAMES$1["SVG"] = "svg";
	TAG_NAMES$1["VAR"] = "var";
	TAG_NAMES$1["WBR"] = "wbr";
	TAG_NAMES$1["XMP"] = "xmp";
})(TAG_NAMES || (TAG_NAMES = {}));
/**
* Tag IDs are numeric IDs for known tag names.
*
* We use tag IDs to improve the performance of tag name comparisons.
*/
var TAG_ID;
(function(TAG_ID$1) {
	TAG_ID$1[TAG_ID$1["UNKNOWN"] = 0] = "UNKNOWN";
	TAG_ID$1[TAG_ID$1["A"] = 1] = "A";
	TAG_ID$1[TAG_ID$1["ADDRESS"] = 2] = "ADDRESS";
	TAG_ID$1[TAG_ID$1["ANNOTATION_XML"] = 3] = "ANNOTATION_XML";
	TAG_ID$1[TAG_ID$1["APPLET"] = 4] = "APPLET";
	TAG_ID$1[TAG_ID$1["AREA"] = 5] = "AREA";
	TAG_ID$1[TAG_ID$1["ARTICLE"] = 6] = "ARTICLE";
	TAG_ID$1[TAG_ID$1["ASIDE"] = 7] = "ASIDE";
	TAG_ID$1[TAG_ID$1["B"] = 8] = "B";
	TAG_ID$1[TAG_ID$1["BASE"] = 9] = "BASE";
	TAG_ID$1[TAG_ID$1["BASEFONT"] = 10] = "BASEFONT";
	TAG_ID$1[TAG_ID$1["BGSOUND"] = 11] = "BGSOUND";
	TAG_ID$1[TAG_ID$1["BIG"] = 12] = "BIG";
	TAG_ID$1[TAG_ID$1["BLOCKQUOTE"] = 13] = "BLOCKQUOTE";
	TAG_ID$1[TAG_ID$1["BODY"] = 14] = "BODY";
	TAG_ID$1[TAG_ID$1["BR"] = 15] = "BR";
	TAG_ID$1[TAG_ID$1["BUTTON"] = 16] = "BUTTON";
	TAG_ID$1[TAG_ID$1["CAPTION"] = 17] = "CAPTION";
	TAG_ID$1[TAG_ID$1["CENTER"] = 18] = "CENTER";
	TAG_ID$1[TAG_ID$1["CODE"] = 19] = "CODE";
	TAG_ID$1[TAG_ID$1["COL"] = 20] = "COL";
	TAG_ID$1[TAG_ID$1["COLGROUP"] = 21] = "COLGROUP";
	TAG_ID$1[TAG_ID$1["DD"] = 22] = "DD";
	TAG_ID$1[TAG_ID$1["DESC"] = 23] = "DESC";
	TAG_ID$1[TAG_ID$1["DETAILS"] = 24] = "DETAILS";
	TAG_ID$1[TAG_ID$1["DIALOG"] = 25] = "DIALOG";
	TAG_ID$1[TAG_ID$1["DIR"] = 26] = "DIR";
	TAG_ID$1[TAG_ID$1["DIV"] = 27] = "DIV";
	TAG_ID$1[TAG_ID$1["DL"] = 28] = "DL";
	TAG_ID$1[TAG_ID$1["DT"] = 29] = "DT";
	TAG_ID$1[TAG_ID$1["EM"] = 30] = "EM";
	TAG_ID$1[TAG_ID$1["EMBED"] = 31] = "EMBED";
	TAG_ID$1[TAG_ID$1["FIELDSET"] = 32] = "FIELDSET";
	TAG_ID$1[TAG_ID$1["FIGCAPTION"] = 33] = "FIGCAPTION";
	TAG_ID$1[TAG_ID$1["FIGURE"] = 34] = "FIGURE";
	TAG_ID$1[TAG_ID$1["FONT"] = 35] = "FONT";
	TAG_ID$1[TAG_ID$1["FOOTER"] = 36] = "FOOTER";
	TAG_ID$1[TAG_ID$1["FOREIGN_OBJECT"] = 37] = "FOREIGN_OBJECT";
	TAG_ID$1[TAG_ID$1["FORM"] = 38] = "FORM";
	TAG_ID$1[TAG_ID$1["FRAME"] = 39] = "FRAME";
	TAG_ID$1[TAG_ID$1["FRAMESET"] = 40] = "FRAMESET";
	TAG_ID$1[TAG_ID$1["H1"] = 41] = "H1";
	TAG_ID$1[TAG_ID$1["H2"] = 42] = "H2";
	TAG_ID$1[TAG_ID$1["H3"] = 43] = "H3";
	TAG_ID$1[TAG_ID$1["H4"] = 44] = "H4";
	TAG_ID$1[TAG_ID$1["H5"] = 45] = "H5";
	TAG_ID$1[TAG_ID$1["H6"] = 46] = "H6";
	TAG_ID$1[TAG_ID$1["HEAD"] = 47] = "HEAD";
	TAG_ID$1[TAG_ID$1["HEADER"] = 48] = "HEADER";
	TAG_ID$1[TAG_ID$1["HGROUP"] = 49] = "HGROUP";
	TAG_ID$1[TAG_ID$1["HR"] = 50] = "HR";
	TAG_ID$1[TAG_ID$1["HTML"] = 51] = "HTML";
	TAG_ID$1[TAG_ID$1["I"] = 52] = "I";
	TAG_ID$1[TAG_ID$1["IMG"] = 53] = "IMG";
	TAG_ID$1[TAG_ID$1["IMAGE"] = 54] = "IMAGE";
	TAG_ID$1[TAG_ID$1["INPUT"] = 55] = "INPUT";
	TAG_ID$1[TAG_ID$1["IFRAME"] = 56] = "IFRAME";
	TAG_ID$1[TAG_ID$1["KEYGEN"] = 57] = "KEYGEN";
	TAG_ID$1[TAG_ID$1["LABEL"] = 58] = "LABEL";
	TAG_ID$1[TAG_ID$1["LI"] = 59] = "LI";
	TAG_ID$1[TAG_ID$1["LINK"] = 60] = "LINK";
	TAG_ID$1[TAG_ID$1["LISTING"] = 61] = "LISTING";
	TAG_ID$1[TAG_ID$1["MAIN"] = 62] = "MAIN";
	TAG_ID$1[TAG_ID$1["MALIGNMARK"] = 63] = "MALIGNMARK";
	TAG_ID$1[TAG_ID$1["MARQUEE"] = 64] = "MARQUEE";
	TAG_ID$1[TAG_ID$1["MATH"] = 65] = "MATH";
	TAG_ID$1[TAG_ID$1["MENU"] = 66] = "MENU";
	TAG_ID$1[TAG_ID$1["META"] = 67] = "META";
	TAG_ID$1[TAG_ID$1["MGLYPH"] = 68] = "MGLYPH";
	TAG_ID$1[TAG_ID$1["MI"] = 69] = "MI";
	TAG_ID$1[TAG_ID$1["MO"] = 70] = "MO";
	TAG_ID$1[TAG_ID$1["MN"] = 71] = "MN";
	TAG_ID$1[TAG_ID$1["MS"] = 72] = "MS";
	TAG_ID$1[TAG_ID$1["MTEXT"] = 73] = "MTEXT";
	TAG_ID$1[TAG_ID$1["NAV"] = 74] = "NAV";
	TAG_ID$1[TAG_ID$1["NOBR"] = 75] = "NOBR";
	TAG_ID$1[TAG_ID$1["NOFRAMES"] = 76] = "NOFRAMES";
	TAG_ID$1[TAG_ID$1["NOEMBED"] = 77] = "NOEMBED";
	TAG_ID$1[TAG_ID$1["NOSCRIPT"] = 78] = "NOSCRIPT";
	TAG_ID$1[TAG_ID$1["OBJECT"] = 79] = "OBJECT";
	TAG_ID$1[TAG_ID$1["OL"] = 80] = "OL";
	TAG_ID$1[TAG_ID$1["OPTGROUP"] = 81] = "OPTGROUP";
	TAG_ID$1[TAG_ID$1["OPTION"] = 82] = "OPTION";
	TAG_ID$1[TAG_ID$1["P"] = 83] = "P";
	TAG_ID$1[TAG_ID$1["PARAM"] = 84] = "PARAM";
	TAG_ID$1[TAG_ID$1["PLAINTEXT"] = 85] = "PLAINTEXT";
	TAG_ID$1[TAG_ID$1["PRE"] = 86] = "PRE";
	TAG_ID$1[TAG_ID$1["RB"] = 87] = "RB";
	TAG_ID$1[TAG_ID$1["RP"] = 88] = "RP";
	TAG_ID$1[TAG_ID$1["RT"] = 89] = "RT";
	TAG_ID$1[TAG_ID$1["RTC"] = 90] = "RTC";
	TAG_ID$1[TAG_ID$1["RUBY"] = 91] = "RUBY";
	TAG_ID$1[TAG_ID$1["S"] = 92] = "S";
	TAG_ID$1[TAG_ID$1["SCRIPT"] = 93] = "SCRIPT";
	TAG_ID$1[TAG_ID$1["SEARCH"] = 94] = "SEARCH";
	TAG_ID$1[TAG_ID$1["SECTION"] = 95] = "SECTION";
	TAG_ID$1[TAG_ID$1["SELECT"] = 96] = "SELECT";
	TAG_ID$1[TAG_ID$1["SOURCE"] = 97] = "SOURCE";
	TAG_ID$1[TAG_ID$1["SMALL"] = 98] = "SMALL";
	TAG_ID$1[TAG_ID$1["SPAN"] = 99] = "SPAN";
	TAG_ID$1[TAG_ID$1["STRIKE"] = 100] = "STRIKE";
	TAG_ID$1[TAG_ID$1["STRONG"] = 101] = "STRONG";
	TAG_ID$1[TAG_ID$1["STYLE"] = 102] = "STYLE";
	TAG_ID$1[TAG_ID$1["SUB"] = 103] = "SUB";
	TAG_ID$1[TAG_ID$1["SUMMARY"] = 104] = "SUMMARY";
	TAG_ID$1[TAG_ID$1["SUP"] = 105] = "SUP";
	TAG_ID$1[TAG_ID$1["TABLE"] = 106] = "TABLE";
	TAG_ID$1[TAG_ID$1["TBODY"] = 107] = "TBODY";
	TAG_ID$1[TAG_ID$1["TEMPLATE"] = 108] = "TEMPLATE";
	TAG_ID$1[TAG_ID$1["TEXTAREA"] = 109] = "TEXTAREA";
	TAG_ID$1[TAG_ID$1["TFOOT"] = 110] = "TFOOT";
	TAG_ID$1[TAG_ID$1["TD"] = 111] = "TD";
	TAG_ID$1[TAG_ID$1["TH"] = 112] = "TH";
	TAG_ID$1[TAG_ID$1["THEAD"] = 113] = "THEAD";
	TAG_ID$1[TAG_ID$1["TITLE"] = 114] = "TITLE";
	TAG_ID$1[TAG_ID$1["TR"] = 115] = "TR";
	TAG_ID$1[TAG_ID$1["TRACK"] = 116] = "TRACK";
	TAG_ID$1[TAG_ID$1["TT"] = 117] = "TT";
	TAG_ID$1[TAG_ID$1["U"] = 118] = "U";
	TAG_ID$1[TAG_ID$1["UL"] = 119] = "UL";
	TAG_ID$1[TAG_ID$1["SVG"] = 120] = "SVG";
	TAG_ID$1[TAG_ID$1["VAR"] = 121] = "VAR";
	TAG_ID$1[TAG_ID$1["WBR"] = 122] = "WBR";
	TAG_ID$1[TAG_ID$1["XMP"] = 123] = "XMP";
})(TAG_ID || (TAG_ID = {}));
const TAG_NAME_TO_ID = new Map([
	[TAG_NAMES.A, TAG_ID.A],
	[TAG_NAMES.ADDRESS, TAG_ID.ADDRESS],
	[TAG_NAMES.ANNOTATION_XML, TAG_ID.ANNOTATION_XML],
	[TAG_NAMES.APPLET, TAG_ID.APPLET],
	[TAG_NAMES.AREA, TAG_ID.AREA],
	[TAG_NAMES.ARTICLE, TAG_ID.ARTICLE],
	[TAG_NAMES.ASIDE, TAG_ID.ASIDE],
	[TAG_NAMES.B, TAG_ID.B],
	[TAG_NAMES.BASE, TAG_ID.BASE],
	[TAG_NAMES.BASEFONT, TAG_ID.BASEFONT],
	[TAG_NAMES.BGSOUND, TAG_ID.BGSOUND],
	[TAG_NAMES.BIG, TAG_ID.BIG],
	[TAG_NAMES.BLOCKQUOTE, TAG_ID.BLOCKQUOTE],
	[TAG_NAMES.BODY, TAG_ID.BODY],
	[TAG_NAMES.BR, TAG_ID.BR],
	[TAG_NAMES.BUTTON, TAG_ID.BUTTON],
	[TAG_NAMES.CAPTION, TAG_ID.CAPTION],
	[TAG_NAMES.CENTER, TAG_ID.CENTER],
	[TAG_NAMES.CODE, TAG_ID.CODE],
	[TAG_NAMES.COL, TAG_ID.COL],
	[TAG_NAMES.COLGROUP, TAG_ID.COLGROUP],
	[TAG_NAMES.DD, TAG_ID.DD],
	[TAG_NAMES.DESC, TAG_ID.DESC],
	[TAG_NAMES.DETAILS, TAG_ID.DETAILS],
	[TAG_NAMES.DIALOG, TAG_ID.DIALOG],
	[TAG_NAMES.DIR, TAG_ID.DIR],
	[TAG_NAMES.DIV, TAG_ID.DIV],
	[TAG_NAMES.DL, TAG_ID.DL],
	[TAG_NAMES.DT, TAG_ID.DT],
	[TAG_NAMES.EM, TAG_ID.EM],
	[TAG_NAMES.EMBED, TAG_ID.EMBED],
	[TAG_NAMES.FIELDSET, TAG_ID.FIELDSET],
	[TAG_NAMES.FIGCAPTION, TAG_ID.FIGCAPTION],
	[TAG_NAMES.FIGURE, TAG_ID.FIGURE],
	[TAG_NAMES.FONT, TAG_ID.FONT],
	[TAG_NAMES.FOOTER, TAG_ID.FOOTER],
	[TAG_NAMES.FOREIGN_OBJECT, TAG_ID.FOREIGN_OBJECT],
	[TAG_NAMES.FORM, TAG_ID.FORM],
	[TAG_NAMES.FRAME, TAG_ID.FRAME],
	[TAG_NAMES.FRAMESET, TAG_ID.FRAMESET],
	[TAG_NAMES.H1, TAG_ID.H1],
	[TAG_NAMES.H2, TAG_ID.H2],
	[TAG_NAMES.H3, TAG_ID.H3],
	[TAG_NAMES.H4, TAG_ID.H4],
	[TAG_NAMES.H5, TAG_ID.H5],
	[TAG_NAMES.H6, TAG_ID.H6],
	[TAG_NAMES.HEAD, TAG_ID.HEAD],
	[TAG_NAMES.HEADER, TAG_ID.HEADER],
	[TAG_NAMES.HGROUP, TAG_ID.HGROUP],
	[TAG_NAMES.HR, TAG_ID.HR],
	[TAG_NAMES.HTML, TAG_ID.HTML],
	[TAG_NAMES.I, TAG_ID.I],
	[TAG_NAMES.IMG, TAG_ID.IMG],
	[TAG_NAMES.IMAGE, TAG_ID.IMAGE],
	[TAG_NAMES.INPUT, TAG_ID.INPUT],
	[TAG_NAMES.IFRAME, TAG_ID.IFRAME],
	[TAG_NAMES.KEYGEN, TAG_ID.KEYGEN],
	[TAG_NAMES.LABEL, TAG_ID.LABEL],
	[TAG_NAMES.LI, TAG_ID.LI],
	[TAG_NAMES.LINK, TAG_ID.LINK],
	[TAG_NAMES.LISTING, TAG_ID.LISTING],
	[TAG_NAMES.MAIN, TAG_ID.MAIN],
	[TAG_NAMES.MALIGNMARK, TAG_ID.MALIGNMARK],
	[TAG_NAMES.MARQUEE, TAG_ID.MARQUEE],
	[TAG_NAMES.MATH, TAG_ID.MATH],
	[TAG_NAMES.MENU, TAG_ID.MENU],
	[TAG_NAMES.META, TAG_ID.META],
	[TAG_NAMES.MGLYPH, TAG_ID.MGLYPH],
	[TAG_NAMES.MI, TAG_ID.MI],
	[TAG_NAMES.MO, TAG_ID.MO],
	[TAG_NAMES.MN, TAG_ID.MN],
	[TAG_NAMES.MS, TAG_ID.MS],
	[TAG_NAMES.MTEXT, TAG_ID.MTEXT],
	[TAG_NAMES.NAV, TAG_ID.NAV],
	[TAG_NAMES.NOBR, TAG_ID.NOBR],
	[TAG_NAMES.NOFRAMES, TAG_ID.NOFRAMES],
	[TAG_NAMES.NOEMBED, TAG_ID.NOEMBED],
	[TAG_NAMES.NOSCRIPT, TAG_ID.NOSCRIPT],
	[TAG_NAMES.OBJECT, TAG_ID.OBJECT],
	[TAG_NAMES.OL, TAG_ID.OL],
	[TAG_NAMES.OPTGROUP, TAG_ID.OPTGROUP],
	[TAG_NAMES.OPTION, TAG_ID.OPTION],
	[TAG_NAMES.P, TAG_ID.P],
	[TAG_NAMES.PARAM, TAG_ID.PARAM],
	[TAG_NAMES.PLAINTEXT, TAG_ID.PLAINTEXT],
	[TAG_NAMES.PRE, TAG_ID.PRE],
	[TAG_NAMES.RB, TAG_ID.RB],
	[TAG_NAMES.RP, TAG_ID.RP],
	[TAG_NAMES.RT, TAG_ID.RT],
	[TAG_NAMES.RTC, TAG_ID.RTC],
	[TAG_NAMES.RUBY, TAG_ID.RUBY],
	[TAG_NAMES.S, TAG_ID.S],
	[TAG_NAMES.SCRIPT, TAG_ID.SCRIPT],
	[TAG_NAMES.SEARCH, TAG_ID.SEARCH],
	[TAG_NAMES.SECTION, TAG_ID.SECTION],
	[TAG_NAMES.SELECT, TAG_ID.SELECT],
	[TAG_NAMES.SOURCE, TAG_ID.SOURCE],
	[TAG_NAMES.SMALL, TAG_ID.SMALL],
	[TAG_NAMES.SPAN, TAG_ID.SPAN],
	[TAG_NAMES.STRIKE, TAG_ID.STRIKE],
	[TAG_NAMES.STRONG, TAG_ID.STRONG],
	[TAG_NAMES.STYLE, TAG_ID.STYLE],
	[TAG_NAMES.SUB, TAG_ID.SUB],
	[TAG_NAMES.SUMMARY, TAG_ID.SUMMARY],
	[TAG_NAMES.SUP, TAG_ID.SUP],
	[TAG_NAMES.TABLE, TAG_ID.TABLE],
	[TAG_NAMES.TBODY, TAG_ID.TBODY],
	[TAG_NAMES.TEMPLATE, TAG_ID.TEMPLATE],
	[TAG_NAMES.TEXTAREA, TAG_ID.TEXTAREA],
	[TAG_NAMES.TFOOT, TAG_ID.TFOOT],
	[TAG_NAMES.TD, TAG_ID.TD],
	[TAG_NAMES.TH, TAG_ID.TH],
	[TAG_NAMES.THEAD, TAG_ID.THEAD],
	[TAG_NAMES.TITLE, TAG_ID.TITLE],
	[TAG_NAMES.TR, TAG_ID.TR],
	[TAG_NAMES.TRACK, TAG_ID.TRACK],
	[TAG_NAMES.TT, TAG_ID.TT],
	[TAG_NAMES.U, TAG_ID.U],
	[TAG_NAMES.UL, TAG_ID.UL],
	[TAG_NAMES.SVG, TAG_ID.SVG],
	[TAG_NAMES.VAR, TAG_ID.VAR],
	[TAG_NAMES.WBR, TAG_ID.WBR],
	[TAG_NAMES.XMP, TAG_ID.XMP]
]);
function getTagID(tagName) {
	var _a$1;
	return (_a$1 = TAG_NAME_TO_ID.get(tagName)) !== null && _a$1 !== void 0 ? _a$1 : TAG_ID.UNKNOWN;
}
const $ = TAG_ID;
const SPECIAL_ELEMENTS = {
	[NS.HTML]: new Set([
		$.ADDRESS,
		$.APPLET,
		$.AREA,
		$.ARTICLE,
		$.ASIDE,
		$.BASE,
		$.BASEFONT,
		$.BGSOUND,
		$.BLOCKQUOTE,
		$.BODY,
		$.BR,
		$.BUTTON,
		$.CAPTION,
		$.CENTER,
		$.COL,
		$.COLGROUP,
		$.DD,
		$.DETAILS,
		$.DIR,
		$.DIV,
		$.DL,
		$.DT,
		$.EMBED,
		$.FIELDSET,
		$.FIGCAPTION,
		$.FIGURE,
		$.FOOTER,
		$.FORM,
		$.FRAME,
		$.FRAMESET,
		$.H1,
		$.H2,
		$.H3,
		$.H4,
		$.H5,
		$.H6,
		$.HEAD,
		$.HEADER,
		$.HGROUP,
		$.HR,
		$.HTML,
		$.IFRAME,
		$.IMG,
		$.INPUT,
		$.LI,
		$.LINK,
		$.LISTING,
		$.MAIN,
		$.MARQUEE,
		$.MENU,
		$.META,
		$.NAV,
		$.NOEMBED,
		$.NOFRAMES,
		$.NOSCRIPT,
		$.OBJECT,
		$.OL,
		$.P,
		$.PARAM,
		$.PLAINTEXT,
		$.PRE,
		$.SCRIPT,
		$.SECTION,
		$.SELECT,
		$.SOURCE,
		$.STYLE,
		$.SUMMARY,
		$.TABLE,
		$.TBODY,
		$.TD,
		$.TEMPLATE,
		$.TEXTAREA,
		$.TFOOT,
		$.TH,
		$.THEAD,
		$.TITLE,
		$.TR,
		$.TRACK,
		$.UL,
		$.WBR,
		$.XMP
	]),
	[NS.MATHML]: new Set([
		$.MI,
		$.MO,
		$.MN,
		$.MS,
		$.MTEXT,
		$.ANNOTATION_XML
	]),
	[NS.SVG]: new Set([
		$.TITLE,
		$.FOREIGN_OBJECT,
		$.DESC
	]),
	[NS.XLINK]: /* @__PURE__ */ new Set(),
	[NS.XML]: /* @__PURE__ */ new Set(),
	[NS.XMLNS]: /* @__PURE__ */ new Set()
};
const NUMBERED_HEADERS = new Set([
	$.H1,
	$.H2,
	$.H3,
	$.H4,
	$.H5,
	$.H6
]);

//#endregion
//#region ../../node_modules/.pnpm/parse5@8.0.0/node_modules/parse5/dist/tokenizer/index.js
var State;
(function(State$1) {
	State$1[State$1["DATA"] = 0] = "DATA";
	State$1[State$1["RCDATA"] = 1] = "RCDATA";
	State$1[State$1["RAWTEXT"] = 2] = "RAWTEXT";
	State$1[State$1["SCRIPT_DATA"] = 3] = "SCRIPT_DATA";
	State$1[State$1["PLAINTEXT"] = 4] = "PLAINTEXT";
	State$1[State$1["TAG_OPEN"] = 5] = "TAG_OPEN";
	State$1[State$1["END_TAG_OPEN"] = 6] = "END_TAG_OPEN";
	State$1[State$1["TAG_NAME"] = 7] = "TAG_NAME";
	State$1[State$1["RCDATA_LESS_THAN_SIGN"] = 8] = "RCDATA_LESS_THAN_SIGN";
	State$1[State$1["RCDATA_END_TAG_OPEN"] = 9] = "RCDATA_END_TAG_OPEN";
	State$1[State$1["RCDATA_END_TAG_NAME"] = 10] = "RCDATA_END_TAG_NAME";
	State$1[State$1["RAWTEXT_LESS_THAN_SIGN"] = 11] = "RAWTEXT_LESS_THAN_SIGN";
	State$1[State$1["RAWTEXT_END_TAG_OPEN"] = 12] = "RAWTEXT_END_TAG_OPEN";
	State$1[State$1["RAWTEXT_END_TAG_NAME"] = 13] = "RAWTEXT_END_TAG_NAME";
	State$1[State$1["SCRIPT_DATA_LESS_THAN_SIGN"] = 14] = "SCRIPT_DATA_LESS_THAN_SIGN";
	State$1[State$1["SCRIPT_DATA_END_TAG_OPEN"] = 15] = "SCRIPT_DATA_END_TAG_OPEN";
	State$1[State$1["SCRIPT_DATA_END_TAG_NAME"] = 16] = "SCRIPT_DATA_END_TAG_NAME";
	State$1[State$1["SCRIPT_DATA_ESCAPE_START"] = 17] = "SCRIPT_DATA_ESCAPE_START";
	State$1[State$1["SCRIPT_DATA_ESCAPE_START_DASH"] = 18] = "SCRIPT_DATA_ESCAPE_START_DASH";
	State$1[State$1["SCRIPT_DATA_ESCAPED"] = 19] = "SCRIPT_DATA_ESCAPED";
	State$1[State$1["SCRIPT_DATA_ESCAPED_DASH"] = 20] = "SCRIPT_DATA_ESCAPED_DASH";
	State$1[State$1["SCRIPT_DATA_ESCAPED_DASH_DASH"] = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH";
	State$1[State$1["SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"] = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN";
	State$1[State$1["SCRIPT_DATA_ESCAPED_END_TAG_OPEN"] = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN";
	State$1[State$1["SCRIPT_DATA_ESCAPED_END_TAG_NAME"] = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME";
	State$1[State$1["SCRIPT_DATA_DOUBLE_ESCAPE_START"] = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START";
	State$1[State$1["SCRIPT_DATA_DOUBLE_ESCAPED"] = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED";
	State$1[State$1["SCRIPT_DATA_DOUBLE_ESCAPED_DASH"] = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH";
	State$1[State$1["SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"] = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH";
	State$1[State$1["SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"] = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN";
	State$1[State$1["SCRIPT_DATA_DOUBLE_ESCAPE_END"] = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END";
	State$1[State$1["BEFORE_ATTRIBUTE_NAME"] = 31] = "BEFORE_ATTRIBUTE_NAME";
	State$1[State$1["ATTRIBUTE_NAME"] = 32] = "ATTRIBUTE_NAME";
	State$1[State$1["AFTER_ATTRIBUTE_NAME"] = 33] = "AFTER_ATTRIBUTE_NAME";
	State$1[State$1["BEFORE_ATTRIBUTE_VALUE"] = 34] = "BEFORE_ATTRIBUTE_VALUE";
	State$1[State$1["ATTRIBUTE_VALUE_DOUBLE_QUOTED"] = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED";
	State$1[State$1["ATTRIBUTE_VALUE_SINGLE_QUOTED"] = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED";
	State$1[State$1["ATTRIBUTE_VALUE_UNQUOTED"] = 37] = "ATTRIBUTE_VALUE_UNQUOTED";
	State$1[State$1["AFTER_ATTRIBUTE_VALUE_QUOTED"] = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED";
	State$1[State$1["SELF_CLOSING_START_TAG"] = 39] = "SELF_CLOSING_START_TAG";
	State$1[State$1["BOGUS_COMMENT"] = 40] = "BOGUS_COMMENT";
	State$1[State$1["MARKUP_DECLARATION_OPEN"] = 41] = "MARKUP_DECLARATION_OPEN";
	State$1[State$1["COMMENT_START"] = 42] = "COMMENT_START";
	State$1[State$1["COMMENT_START_DASH"] = 43] = "COMMENT_START_DASH";
	State$1[State$1["COMMENT"] = 44] = "COMMENT";
	State$1[State$1["COMMENT_LESS_THAN_SIGN"] = 45] = "COMMENT_LESS_THAN_SIGN";
	State$1[State$1["COMMENT_LESS_THAN_SIGN_BANG"] = 46] = "COMMENT_LESS_THAN_SIGN_BANG";
	State$1[State$1["COMMENT_LESS_THAN_SIGN_BANG_DASH"] = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH";
	State$1[State$1["COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"] = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH";
	State$1[State$1["COMMENT_END_DASH"] = 49] = "COMMENT_END_DASH";
	State$1[State$1["COMMENT_END"] = 50] = "COMMENT_END";
	State$1[State$1["COMMENT_END_BANG"] = 51] = "COMMENT_END_BANG";
	State$1[State$1["DOCTYPE"] = 52] = "DOCTYPE";
	State$1[State$1["BEFORE_DOCTYPE_NAME"] = 53] = "BEFORE_DOCTYPE_NAME";
	State$1[State$1["DOCTYPE_NAME"] = 54] = "DOCTYPE_NAME";
	State$1[State$1["AFTER_DOCTYPE_NAME"] = 55] = "AFTER_DOCTYPE_NAME";
	State$1[State$1["AFTER_DOCTYPE_PUBLIC_KEYWORD"] = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD";
	State$1[State$1["BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"] = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER";
	State$1[State$1["DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"] = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED";
	State$1[State$1["DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"] = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED";
	State$1[State$1["AFTER_DOCTYPE_PUBLIC_IDENTIFIER"] = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER";
	State$1[State$1["BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"] = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS";
	State$1[State$1["AFTER_DOCTYPE_SYSTEM_KEYWORD"] = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD";
	State$1[State$1["BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"] = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER";
	State$1[State$1["DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"] = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED";
	State$1[State$1["DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"] = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED";
	State$1[State$1["AFTER_DOCTYPE_SYSTEM_IDENTIFIER"] = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER";
	State$1[State$1["BOGUS_DOCTYPE"] = 67] = "BOGUS_DOCTYPE";
	State$1[State$1["CDATA_SECTION"] = 68] = "CDATA_SECTION";
	State$1[State$1["CDATA_SECTION_BRACKET"] = 69] = "CDATA_SECTION_BRACKET";
	State$1[State$1["CDATA_SECTION_END"] = 70] = "CDATA_SECTION_END";
	State$1[State$1["CHARACTER_REFERENCE"] = 71] = "CHARACTER_REFERENCE";
	State$1[State$1["AMBIGUOUS_AMPERSAND"] = 72] = "AMBIGUOUS_AMPERSAND";
})(State || (State = {}));
const TokenizerMode = {
	DATA: State.DATA,
	RCDATA: State.RCDATA,
	RAWTEXT: State.RAWTEXT,
	SCRIPT_DATA: State.SCRIPT_DATA,
	PLAINTEXT: State.PLAINTEXT,
	CDATA_SECTION: State.CDATA_SECTION
};
function isAsciiDigit(cp) {
	return cp >= CODE_POINTS.DIGIT_0 && cp <= CODE_POINTS.DIGIT_9;
}
function isAsciiUpper(cp) {
	return cp >= CODE_POINTS.LATIN_CAPITAL_A && cp <= CODE_POINTS.LATIN_CAPITAL_Z;
}
function isAsciiLower(cp) {
	return cp >= CODE_POINTS.LATIN_SMALL_A && cp <= CODE_POINTS.LATIN_SMALL_Z;
}
function isAsciiLetter(cp) {
	return isAsciiLower(cp) || isAsciiUpper(cp);
}
function isAsciiAlphaNumeric(cp) {
	return isAsciiLetter(cp) || isAsciiDigit(cp);
}
function toAsciiLower(cp) {
	return cp + 32;
}
function isWhitespace(cp) {
	return cp === CODE_POINTS.SPACE || cp === CODE_POINTS.LINE_FEED || cp === CODE_POINTS.TABULATION || cp === CODE_POINTS.FORM_FEED;
}
function isScriptDataDoubleEscapeSequenceEnd(cp) {
	return isWhitespace(cp) || cp === CODE_POINTS.SOLIDUS || cp === CODE_POINTS.GREATER_THAN_SIGN;
}
function getErrorForNumericCharacterReference(code) {
	if (code === CODE_POINTS.NULL) return ERR.nullCharacterReference;
	else if (code > 1114111) return ERR.characterReferenceOutsideUnicodeRange;
	else if (isSurrogate(code)) return ERR.surrogateCharacterReference;
	else if (isUndefinedCodePoint(code)) return ERR.noncharacterCharacterReference;
	else if (isControlCodePoint(code) || code === CODE_POINTS.CARRIAGE_RETURN) return ERR.controlCharacterReference;
	return null;
}
var Tokenizer = class {
	constructor(options, handler) {
		this.options = options;
		this.handler = handler;
		this.paused = false;
		/** Ensures that the parsing loop isn't run multiple times at once. */
		this.inLoop = false;
		/**
		* Indicates that the current adjusted node exists, is not an element in the HTML namespace,
		* and that it is not an integration point for either MathML or HTML.
		*
		* @see {@link https://html.spec.whatwg.org/multipage/parsing.html#tree-construction}
		*/
		this.inForeignNode = false;
		this.lastStartTagName = "";
		this.active = false;
		this.state = State.DATA;
		this.returnState = State.DATA;
		this.entityStartPos = 0;
		this.consumedAfterSnapshot = -1;
		this.currentCharacterToken = null;
		this.currentToken = null;
		this.currentAttr = {
			name: "",
			value: ""
		};
		this.preprocessor = new Preprocessor(handler);
		this.currentLocation = this.getCurrentLocation(-1);
		this.entityDecoder = new EntityDecoder(htmlDecodeTree, (cp, consumed) => {
			this.preprocessor.pos = this.entityStartPos + consumed - 1;
			this._flushCodePointConsumedAsCharacterReference(cp);
		}, handler.onParseError ? {
			missingSemicolonAfterCharacterReference: () => {
				this._err(ERR.missingSemicolonAfterCharacterReference, 1);
			},
			absenceOfDigitsInNumericCharacterReference: (consumed) => {
				this._err(ERR.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + consumed);
			},
			validateNumericCharacterReference: (code) => {
				const error = getErrorForNumericCharacterReference(code);
				if (error) this._err(error, 1);
			}
		} : void 0);
	}
	_err(code, cpOffset = 0) {
		var _a$1, _b;
		(_b = (_a$1 = this.handler).onParseError) === null || _b === void 0 || _b.call(_a$1, this.preprocessor.getError(code, cpOffset));
	}
	getCurrentLocation(offset) {
		if (!this.options.sourceCodeLocationInfo) return null;
		return {
			startLine: this.preprocessor.line,
			startCol: this.preprocessor.col - offset,
			startOffset: this.preprocessor.offset - offset,
			endLine: -1,
			endCol: -1,
			endOffset: -1
		};
	}
	_runParsingLoop() {
		if (this.inLoop) return;
		this.inLoop = true;
		while (this.active && !this.paused) {
			this.consumedAfterSnapshot = 0;
			const cp = this._consume();
			if (!this._ensureHibernation()) this._callState(cp);
		}
		this.inLoop = false;
	}
	pause() {
		this.paused = true;
	}
	resume(writeCallback) {
		if (!this.paused) throw new Error("Parser was already resumed");
		this.paused = false;
		if (this.inLoop) return;
		this._runParsingLoop();
		if (!this.paused) writeCallback === null || writeCallback === void 0 || writeCallback();
	}
	write(chunk, isLastChunk, writeCallback) {
		this.active = true;
		this.preprocessor.write(chunk, isLastChunk);
		this._runParsingLoop();
		if (!this.paused) writeCallback === null || writeCallback === void 0 || writeCallback();
	}
	insertHtmlAtCurrentPos(chunk) {
		this.active = true;
		this.preprocessor.insertHtmlAtCurrentPos(chunk);
		this._runParsingLoop();
	}
	_ensureHibernation() {
		if (this.preprocessor.endOfChunkHit) {
			this.preprocessor.retreat(this.consumedAfterSnapshot);
			this.consumedAfterSnapshot = 0;
			this.active = false;
			return true;
		}
		return false;
	}
	_consume() {
		this.consumedAfterSnapshot++;
		return this.preprocessor.advance();
	}
	_advanceBy(count) {
		this.consumedAfterSnapshot += count;
		for (let i = 0; i < count; i++) this.preprocessor.advance();
	}
	_consumeSequenceIfMatch(pattern, caseSensitive) {
		if (this.preprocessor.startsWith(pattern, caseSensitive)) {
			this._advanceBy(pattern.length - 1);
			return true;
		}
		return false;
	}
	_createStartTagToken() {
		this.currentToken = {
			type: TokenType.START_TAG,
			tagName: "",
			tagID: TAG_ID.UNKNOWN,
			selfClosing: false,
			ackSelfClosing: false,
			attrs: [],
			location: this.getCurrentLocation(1)
		};
	}
	_createEndTagToken() {
		this.currentToken = {
			type: TokenType.END_TAG,
			tagName: "",
			tagID: TAG_ID.UNKNOWN,
			selfClosing: false,
			ackSelfClosing: false,
			attrs: [],
			location: this.getCurrentLocation(2)
		};
	}
	_createCommentToken(offset) {
		this.currentToken = {
			type: TokenType.COMMENT,
			data: "",
			location: this.getCurrentLocation(offset)
		};
	}
	_createDoctypeToken(initialName) {
		this.currentToken = {
			type: TokenType.DOCTYPE,
			name: initialName,
			forceQuirks: false,
			publicId: null,
			systemId: null,
			location: this.currentLocation
		};
	}
	_createCharacterToken(type, chars) {
		this.currentCharacterToken = {
			type,
			chars,
			location: this.currentLocation
		};
	}
	_createAttr(attrNameFirstCh) {
		this.currentAttr = {
			name: attrNameFirstCh,
			value: ""
		};
		this.currentLocation = this.getCurrentLocation(0);
	}
	_leaveAttrName() {
		var _a$1;
		var _b;
		const token = this.currentToken;
		if (getTokenAttr(token, this.currentAttr.name) === null) {
			token.attrs.push(this.currentAttr);
			if (token.location && this.currentLocation) {
				const attrLocations = (_a$1 = (_b = token.location).attrs) !== null && _a$1 !== void 0 ? _a$1 : _b.attrs = Object.create(null);
				attrLocations[this.currentAttr.name] = this.currentLocation;
				this._leaveAttrValue();
			}
		} else this._err(ERR.duplicateAttribute);
	}
	_leaveAttrValue() {
		if (this.currentLocation) {
			this.currentLocation.endLine = this.preprocessor.line;
			this.currentLocation.endCol = this.preprocessor.col;
			this.currentLocation.endOffset = this.preprocessor.offset;
		}
	}
	prepareToken(ct) {
		this._emitCurrentCharacterToken(ct.location);
		this.currentToken = null;
		if (ct.location) {
			ct.location.endLine = this.preprocessor.line;
			ct.location.endCol = this.preprocessor.col + 1;
			ct.location.endOffset = this.preprocessor.offset + 1;
		}
		this.currentLocation = this.getCurrentLocation(-1);
	}
	emitCurrentTagToken() {
		const ct = this.currentToken;
		this.prepareToken(ct);
		ct.tagID = getTagID(ct.tagName);
		if (ct.type === TokenType.START_TAG) {
			this.lastStartTagName = ct.tagName;
			this.handler.onStartTag(ct);
		} else {
			if (ct.attrs.length > 0) this._err(ERR.endTagWithAttributes);
			if (ct.selfClosing) this._err(ERR.endTagWithTrailingSolidus);
			this.handler.onEndTag(ct);
		}
		this.preprocessor.dropParsedChunk();
	}
	emitCurrentComment(ct) {
		this.prepareToken(ct);
		this.handler.onComment(ct);
		this.preprocessor.dropParsedChunk();
	}
	emitCurrentDoctype(ct) {
		this.prepareToken(ct);
		this.handler.onDoctype(ct);
		this.preprocessor.dropParsedChunk();
	}
	_emitCurrentCharacterToken(nextLocation) {
		if (this.currentCharacterToken) {
			if (nextLocation && this.currentCharacterToken.location) {
				this.currentCharacterToken.location.endLine = nextLocation.startLine;
				this.currentCharacterToken.location.endCol = nextLocation.startCol;
				this.currentCharacterToken.location.endOffset = nextLocation.startOffset;
			}
			switch (this.currentCharacterToken.type) {
				case TokenType.CHARACTER:
					this.handler.onCharacter(this.currentCharacterToken);
					break;
				case TokenType.NULL_CHARACTER:
					this.handler.onNullCharacter(this.currentCharacterToken);
					break;
				case TokenType.WHITESPACE_CHARACTER:
					this.handler.onWhitespaceCharacter(this.currentCharacterToken);
					break;
			}
			this.currentCharacterToken = null;
		}
	}
	_emitEOFToken() {
		const location = this.getCurrentLocation(0);
		if (location) {
			location.endLine = location.startLine;
			location.endCol = location.startCol;
			location.endOffset = location.startOffset;
		}
		this._emitCurrentCharacterToken(location);
		this.handler.onEof({
			type: TokenType.EOF,
			location
		});
		this.active = false;
	}
	_appendCharToCurrentCharacterToken(type, ch) {
		if (this.currentCharacterToken) if (this.currentCharacterToken.type === type) {
			this.currentCharacterToken.chars += ch;
			return;
		} else {
			this.currentLocation = this.getCurrentLocation(0);
			this._emitCurrentCharacterToken(this.currentLocation);
			this.preprocessor.dropParsedChunk();
		}
		this._createCharacterToken(type, ch);
	}
	_emitCodePoint(cp) {
		const type = isWhitespace(cp) ? TokenType.WHITESPACE_CHARACTER : cp === CODE_POINTS.NULL ? TokenType.NULL_CHARACTER : TokenType.CHARACTER;
		this._appendCharToCurrentCharacterToken(type, String.fromCodePoint(cp));
	}
	_emitChars(ch) {
		this._appendCharToCurrentCharacterToken(TokenType.CHARACTER, ch);
	}
	_startCharacterReference() {
		this.returnState = this.state;
		this.state = State.CHARACTER_REFERENCE;
		this.entityStartPos = this.preprocessor.pos;
		this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? DecodingMode.Attribute : DecodingMode.Legacy);
	}
	_isCharacterReferenceInAttribute() {
		return this.returnState === State.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_UNQUOTED;
	}
	_flushCodePointConsumedAsCharacterReference(cp) {
		if (this._isCharacterReferenceInAttribute()) this.currentAttr.value += String.fromCodePoint(cp);
		else this._emitCodePoint(cp);
	}
	_callState(cp) {
		switch (this.state) {
			case State.DATA:
				this._stateData(cp);
				break;
			case State.RCDATA:
				this._stateRcdata(cp);
				break;
			case State.RAWTEXT:
				this._stateRawtext(cp);
				break;
			case State.SCRIPT_DATA:
				this._stateScriptData(cp);
				break;
			case State.PLAINTEXT:
				this._statePlaintext(cp);
				break;
			case State.TAG_OPEN:
				this._stateTagOpen(cp);
				break;
			case State.END_TAG_OPEN:
				this._stateEndTagOpen(cp);
				break;
			case State.TAG_NAME:
				this._stateTagName(cp);
				break;
			case State.RCDATA_LESS_THAN_SIGN:
				this._stateRcdataLessThanSign(cp);
				break;
			case State.RCDATA_END_TAG_OPEN:
				this._stateRcdataEndTagOpen(cp);
				break;
			case State.RCDATA_END_TAG_NAME:
				this._stateRcdataEndTagName(cp);
				break;
			case State.RAWTEXT_LESS_THAN_SIGN:
				this._stateRawtextLessThanSign(cp);
				break;
			case State.RAWTEXT_END_TAG_OPEN:
				this._stateRawtextEndTagOpen(cp);
				break;
			case State.RAWTEXT_END_TAG_NAME:
				this._stateRawtextEndTagName(cp);
				break;
			case State.SCRIPT_DATA_LESS_THAN_SIGN:
				this._stateScriptDataLessThanSign(cp);
				break;
			case State.SCRIPT_DATA_END_TAG_OPEN:
				this._stateScriptDataEndTagOpen(cp);
				break;
			case State.SCRIPT_DATA_END_TAG_NAME:
				this._stateScriptDataEndTagName(cp);
				break;
			case State.SCRIPT_DATA_ESCAPE_START:
				this._stateScriptDataEscapeStart(cp);
				break;
			case State.SCRIPT_DATA_ESCAPE_START_DASH:
				this._stateScriptDataEscapeStartDash(cp);
				break;
			case State.SCRIPT_DATA_ESCAPED:
				this._stateScriptDataEscaped(cp);
				break;
			case State.SCRIPT_DATA_ESCAPED_DASH:
				this._stateScriptDataEscapedDash(cp);
				break;
			case State.SCRIPT_DATA_ESCAPED_DASH_DASH:
				this._stateScriptDataEscapedDashDash(cp);
				break;
			case State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataEscapedLessThanSign(cp);
				break;
			case State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
				this._stateScriptDataEscapedEndTagOpen(cp);
				break;
			case State.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
				this._stateScriptDataEscapedEndTagName(cp);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPE_START:
				this._stateScriptDataDoubleEscapeStart(cp);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPED:
				this._stateScriptDataDoubleEscaped(cp);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
				this._stateScriptDataDoubleEscapedDash(cp);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
				this._stateScriptDataDoubleEscapedDashDash(cp);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataDoubleEscapedLessThanSign(cp);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPE_END:
				this._stateScriptDataDoubleEscapeEnd(cp);
				break;
			case State.BEFORE_ATTRIBUTE_NAME:
				this._stateBeforeAttributeName(cp);
				break;
			case State.ATTRIBUTE_NAME:
				this._stateAttributeName(cp);
				break;
			case State.AFTER_ATTRIBUTE_NAME:
				this._stateAfterAttributeName(cp);
				break;
			case State.BEFORE_ATTRIBUTE_VALUE:
				this._stateBeforeAttributeValue(cp);
				break;
			case State.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
				this._stateAttributeValueDoubleQuoted(cp);
				break;
			case State.ATTRIBUTE_VALUE_SINGLE_QUOTED:
				this._stateAttributeValueSingleQuoted(cp);
				break;
			case State.ATTRIBUTE_VALUE_UNQUOTED:
				this._stateAttributeValueUnquoted(cp);
				break;
			case State.AFTER_ATTRIBUTE_VALUE_QUOTED:
				this._stateAfterAttributeValueQuoted(cp);
				break;
			case State.SELF_CLOSING_START_TAG:
				this._stateSelfClosingStartTag(cp);
				break;
			case State.BOGUS_COMMENT:
				this._stateBogusComment(cp);
				break;
			case State.MARKUP_DECLARATION_OPEN:
				this._stateMarkupDeclarationOpen(cp);
				break;
			case State.COMMENT_START:
				this._stateCommentStart(cp);
				break;
			case State.COMMENT_START_DASH:
				this._stateCommentStartDash(cp);
				break;
			case State.COMMENT:
				this._stateComment(cp);
				break;
			case State.COMMENT_LESS_THAN_SIGN:
				this._stateCommentLessThanSign(cp);
				break;
			case State.COMMENT_LESS_THAN_SIGN_BANG:
				this._stateCommentLessThanSignBang(cp);
				break;
			case State.COMMENT_LESS_THAN_SIGN_BANG_DASH:
				this._stateCommentLessThanSignBangDash(cp);
				break;
			case State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
				this._stateCommentLessThanSignBangDashDash(cp);
				break;
			case State.COMMENT_END_DASH:
				this._stateCommentEndDash(cp);
				break;
			case State.COMMENT_END:
				this._stateCommentEnd(cp);
				break;
			case State.COMMENT_END_BANG:
				this._stateCommentEndBang(cp);
				break;
			case State.DOCTYPE:
				this._stateDoctype(cp);
				break;
			case State.BEFORE_DOCTYPE_NAME:
				this._stateBeforeDoctypeName(cp);
				break;
			case State.DOCTYPE_NAME:
				this._stateDoctypeName(cp);
				break;
			case State.AFTER_DOCTYPE_NAME:
				this._stateAfterDoctypeName(cp);
				break;
			case State.AFTER_DOCTYPE_PUBLIC_KEYWORD:
				this._stateAfterDoctypePublicKeyword(cp);
				break;
			case State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateBeforeDoctypePublicIdentifier(cp);
				break;
			case State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypePublicIdentifierDoubleQuoted(cp);
				break;
			case State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypePublicIdentifierSingleQuoted(cp);
				break;
			case State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateAfterDoctypePublicIdentifier(cp);
				break;
			case State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
				this._stateBetweenDoctypePublicAndSystemIdentifiers(cp);
				break;
			case State.AFTER_DOCTYPE_SYSTEM_KEYWORD:
				this._stateAfterDoctypeSystemKeyword(cp);
				break;
			case State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateBeforeDoctypeSystemIdentifier(cp);
				break;
			case State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypeSystemIdentifierDoubleQuoted(cp);
				break;
			case State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypeSystemIdentifierSingleQuoted(cp);
				break;
			case State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateAfterDoctypeSystemIdentifier(cp);
				break;
			case State.BOGUS_DOCTYPE:
				this._stateBogusDoctype(cp);
				break;
			case State.CDATA_SECTION:
				this._stateCdataSection(cp);
				break;
			case State.CDATA_SECTION_BRACKET:
				this._stateCdataSectionBracket(cp);
				break;
			case State.CDATA_SECTION_END:
				this._stateCdataSectionEnd(cp);
				break;
			case State.CHARACTER_REFERENCE:
				this._stateCharacterReference();
				break;
			case State.AMBIGUOUS_AMPERSAND:
				this._stateAmbiguousAmpersand(cp);
				break;
			default: throw new Error("Unknown state");
		}
	}
	_stateData(cp) {
		switch (cp) {
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.TAG_OPEN;
				break;
			case CODE_POINTS.AMPERSAND:
				this._startCharacterReference();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this._emitCodePoint(cp);
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(cp);
		}
	}
	_stateRcdata(cp) {
		switch (cp) {
			case CODE_POINTS.AMPERSAND:
				this._startCharacterReference();
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.RCDATA_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this._emitChars(REPLACEMENT_CHARACTER);
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(cp);
		}
	}
	_stateRawtext(cp) {
		switch (cp) {
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.RAWTEXT_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this._emitChars(REPLACEMENT_CHARACTER);
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(cp);
		}
	}
	_stateScriptData(cp) {
		switch (cp) {
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this._emitChars(REPLACEMENT_CHARACTER);
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(cp);
		}
	}
	_statePlaintext(cp) {
		switch (cp) {
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this._emitChars(REPLACEMENT_CHARACTER);
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(cp);
		}
	}
	_stateTagOpen(cp) {
		if (isAsciiLetter(cp)) {
			this._createStartTagToken();
			this.state = State.TAG_NAME;
			this._stateTagName(cp);
		} else switch (cp) {
			case CODE_POINTS.EXCLAMATION_MARK:
				this.state = State.MARKUP_DECLARATION_OPEN;
				break;
			case CODE_POINTS.SOLIDUS:
				this.state = State.END_TAG_OPEN;
				break;
			case CODE_POINTS.QUESTION_MARK:
				this._err(ERR.unexpectedQuestionMarkInsteadOfTagName);
				this._createCommentToken(1);
				this.state = State.BOGUS_COMMENT;
				this._stateBogusComment(cp);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofBeforeTagName);
				this._emitChars("<");
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.invalidFirstCharacterOfTagName);
				this._emitChars("<");
				this.state = State.DATA;
				this._stateData(cp);
		}
	}
	_stateEndTagOpen(cp) {
		if (isAsciiLetter(cp)) {
			this._createEndTagToken();
			this.state = State.TAG_NAME;
			this._stateTagName(cp);
		} else switch (cp) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingEndTagName);
				this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofBeforeTagName);
				this._emitChars("</");
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.invalidFirstCharacterOfTagName);
				this._createCommentToken(2);
				this.state = State.BOGUS_COMMENT;
				this._stateBogusComment(cp);
		}
	}
	_stateTagName(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BEFORE_ATTRIBUTE_NAME;
				break;
			case CODE_POINTS.SOLIDUS:
				this.state = State.SELF_CLOSING_START_TAG;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA;
				this.emitCurrentTagToken();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				token.tagName += REPLACEMENT_CHARACTER;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag);
				this._emitEOFToken();
				break;
			default: token.tagName += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
		}
	}
	_stateRcdataLessThanSign(cp) {
		if (cp === CODE_POINTS.SOLIDUS) this.state = State.RCDATA_END_TAG_OPEN;
		else {
			this._emitChars("<");
			this.state = State.RCDATA;
			this._stateRcdata(cp);
		}
	}
	_stateRcdataEndTagOpen(cp) {
		if (isAsciiLetter(cp)) {
			this.state = State.RCDATA_END_TAG_NAME;
			this._stateRcdataEndTagName(cp);
		} else {
			this._emitChars("</");
			this.state = State.RCDATA;
			this._stateRcdata(cp);
		}
	}
	handleSpecialEndTag(_cp) {
		if (!this.preprocessor.startsWith(this.lastStartTagName, false)) return !this._ensureHibernation();
		this._createEndTagToken();
		const token = this.currentToken;
		token.tagName = this.lastStartTagName;
		switch (this.preprocessor.peek(this.lastStartTagName.length)) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this._advanceBy(this.lastStartTagName.length);
				this.state = State.BEFORE_ATTRIBUTE_NAME;
				return false;
			case CODE_POINTS.SOLIDUS:
				this._advanceBy(this.lastStartTagName.length);
				this.state = State.SELF_CLOSING_START_TAG;
				return false;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._advanceBy(this.lastStartTagName.length);
				this.emitCurrentTagToken();
				this.state = State.DATA;
				return false;
			default: return !this._ensureHibernation();
		}
	}
	_stateRcdataEndTagName(cp) {
		if (this.handleSpecialEndTag(cp)) {
			this._emitChars("</");
			this.state = State.RCDATA;
			this._stateRcdata(cp);
		}
	}
	_stateRawtextLessThanSign(cp) {
		if (cp === CODE_POINTS.SOLIDUS) this.state = State.RAWTEXT_END_TAG_OPEN;
		else {
			this._emitChars("<");
			this.state = State.RAWTEXT;
			this._stateRawtext(cp);
		}
	}
	_stateRawtextEndTagOpen(cp) {
		if (isAsciiLetter(cp)) {
			this.state = State.RAWTEXT_END_TAG_NAME;
			this._stateRawtextEndTagName(cp);
		} else {
			this._emitChars("</");
			this.state = State.RAWTEXT;
			this._stateRawtext(cp);
		}
	}
	_stateRawtextEndTagName(cp) {
		if (this.handleSpecialEndTag(cp)) {
			this._emitChars("</");
			this.state = State.RAWTEXT;
			this._stateRawtext(cp);
		}
	}
	_stateScriptDataLessThanSign(cp) {
		switch (cp) {
			case CODE_POINTS.SOLIDUS:
				this.state = State.SCRIPT_DATA_END_TAG_OPEN;
				break;
			case CODE_POINTS.EXCLAMATION_MARK:
				this.state = State.SCRIPT_DATA_ESCAPE_START;
				this._emitChars("<!");
				break;
			default:
				this._emitChars("<");
				this.state = State.SCRIPT_DATA;
				this._stateScriptData(cp);
		}
	}
	_stateScriptDataEndTagOpen(cp) {
		if (isAsciiLetter(cp)) {
			this.state = State.SCRIPT_DATA_END_TAG_NAME;
			this._stateScriptDataEndTagName(cp);
		} else {
			this._emitChars("</");
			this.state = State.SCRIPT_DATA;
			this._stateScriptData(cp);
		}
	}
	_stateScriptDataEndTagName(cp) {
		if (this.handleSpecialEndTag(cp)) {
			this._emitChars("</");
			this.state = State.SCRIPT_DATA;
			this._stateScriptData(cp);
		}
	}
	_stateScriptDataEscapeStart(cp) {
		if (cp === CODE_POINTS.HYPHEN_MINUS) {
			this.state = State.SCRIPT_DATA_ESCAPE_START_DASH;
			this._emitChars("-");
		} else {
			this.state = State.SCRIPT_DATA;
			this._stateScriptData(cp);
		}
	}
	_stateScriptDataEscapeStartDash(cp) {
		if (cp === CODE_POINTS.HYPHEN_MINUS) {
			this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
			this._emitChars("-");
		} else {
			this.state = State.SCRIPT_DATA;
			this._stateScriptData(cp);
		}
	}
	_stateScriptDataEscaped(cp) {
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.SCRIPT_DATA_ESCAPED_DASH;
				this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this._emitChars(REPLACEMENT_CHARACTER);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText);
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(cp);
		}
	}
	_stateScriptDataEscapedDash(cp) {
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
				this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this.state = State.SCRIPT_DATA_ESCAPED;
				this._emitChars(REPLACEMENT_CHARACTER);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText);
				this._emitEOFToken();
				break;
			default:
				this.state = State.SCRIPT_DATA_ESCAPED;
				this._emitCodePoint(cp);
		}
	}
	_stateScriptDataEscapedDashDash(cp) {
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.SCRIPT_DATA;
				this._emitChars(">");
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this.state = State.SCRIPT_DATA_ESCAPED;
				this._emitChars(REPLACEMENT_CHARACTER);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText);
				this._emitEOFToken();
				break;
			default:
				this.state = State.SCRIPT_DATA_ESCAPED;
				this._emitCodePoint(cp);
		}
	}
	_stateScriptDataEscapedLessThanSign(cp) {
		if (cp === CODE_POINTS.SOLIDUS) this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN;
		else if (isAsciiLetter(cp)) {
			this._emitChars("<");
			this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_START;
			this._stateScriptDataDoubleEscapeStart(cp);
		} else {
			this._emitChars("<");
			this.state = State.SCRIPT_DATA_ESCAPED;
			this._stateScriptDataEscaped(cp);
		}
	}
	_stateScriptDataEscapedEndTagOpen(cp) {
		if (isAsciiLetter(cp)) {
			this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_NAME;
			this._stateScriptDataEscapedEndTagName(cp);
		} else {
			this._emitChars("</");
			this.state = State.SCRIPT_DATA_ESCAPED;
			this._stateScriptDataEscaped(cp);
		}
	}
	_stateScriptDataEscapedEndTagName(cp) {
		if (this.handleSpecialEndTag(cp)) {
			this._emitChars("</");
			this.state = State.SCRIPT_DATA_ESCAPED;
			this._stateScriptDataEscaped(cp);
		}
	}
	_stateScriptDataDoubleEscapeStart(cp) {
		if (this.preprocessor.startsWith(SEQUENCES.SCRIPT, false) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(SEQUENCES.SCRIPT.length))) {
			this._emitCodePoint(cp);
			for (let i = 0; i < SEQUENCES.SCRIPT.length; i++) this._emitCodePoint(this._consume());
			this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
		} else if (!this._ensureHibernation()) {
			this.state = State.SCRIPT_DATA_ESCAPED;
			this._stateScriptDataEscaped(cp);
		}
	}
	_stateScriptDataDoubleEscaped(cp) {
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH;
				this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
				this._emitChars("<");
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this._emitChars(REPLACEMENT_CHARACTER);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText);
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(cp);
		}
	}
	_stateScriptDataDoubleEscapedDash(cp) {
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH;
				this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
				this._emitChars("<");
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
				this._emitChars(REPLACEMENT_CHARACTER);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText);
				this._emitEOFToken();
				break;
			default:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
				this._emitCodePoint(cp);
		}
	}
	_stateScriptDataDoubleEscapedDashDash(cp) {
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
				this._emitChars("<");
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.SCRIPT_DATA;
				this._emitChars(">");
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
				this._emitChars(REPLACEMENT_CHARACTER);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText);
				this._emitEOFToken();
				break;
			default:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
				this._emitCodePoint(cp);
		}
	}
	_stateScriptDataDoubleEscapedLessThanSign(cp) {
		if (cp === CODE_POINTS.SOLIDUS) {
			this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_END;
			this._emitChars("/");
		} else {
			this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
			this._stateScriptDataDoubleEscaped(cp);
		}
	}
	_stateScriptDataDoubleEscapeEnd(cp) {
		if (this.preprocessor.startsWith(SEQUENCES.SCRIPT, false) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(SEQUENCES.SCRIPT.length))) {
			this._emitCodePoint(cp);
			for (let i = 0; i < SEQUENCES.SCRIPT.length; i++) this._emitCodePoint(this._consume());
			this.state = State.SCRIPT_DATA_ESCAPED;
		} else if (!this._ensureHibernation()) {
			this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
			this._stateScriptDataDoubleEscaped(cp);
		}
	}
	_stateBeforeAttributeName(cp) {
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.SOLIDUS:
			case CODE_POINTS.GREATER_THAN_SIGN:
			case CODE_POINTS.EOF:
				this.state = State.AFTER_ATTRIBUTE_NAME;
				this._stateAfterAttributeName(cp);
				break;
			case CODE_POINTS.EQUALS_SIGN:
				this._err(ERR.unexpectedEqualsSignBeforeAttributeName);
				this._createAttr("=");
				this.state = State.ATTRIBUTE_NAME;
				break;
			default:
				this._createAttr("");
				this.state = State.ATTRIBUTE_NAME;
				this._stateAttributeName(cp);
		}
	}
	_stateAttributeName(cp) {
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
			case CODE_POINTS.SOLIDUS:
			case CODE_POINTS.GREATER_THAN_SIGN:
			case CODE_POINTS.EOF:
				this._leaveAttrName();
				this.state = State.AFTER_ATTRIBUTE_NAME;
				this._stateAfterAttributeName(cp);
				break;
			case CODE_POINTS.EQUALS_SIGN:
				this._leaveAttrName();
				this.state = State.BEFORE_ATTRIBUTE_VALUE;
				break;
			case CODE_POINTS.QUOTATION_MARK:
			case CODE_POINTS.APOSTROPHE:
			case CODE_POINTS.LESS_THAN_SIGN:
				this._err(ERR.unexpectedCharacterInAttributeName);
				this.currentAttr.name += String.fromCodePoint(cp);
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this.currentAttr.name += REPLACEMENT_CHARACTER;
				break;
			default: this.currentAttr.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
		}
	}
	_stateAfterAttributeName(cp) {
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.SOLIDUS:
				this.state = State.SELF_CLOSING_START_TAG;
				break;
			case CODE_POINTS.EQUALS_SIGN:
				this.state = State.BEFORE_ATTRIBUTE_VALUE;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA;
				this.emitCurrentTagToken();
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag);
				this._emitEOFToken();
				break;
			default:
				this._createAttr("");
				this.state = State.ATTRIBUTE_NAME;
				this._stateAttributeName(cp);
		}
	}
	_stateBeforeAttributeValue(cp) {
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.QUOTATION_MARK:
				this.state = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				this.state = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingAttributeValue);
				this.state = State.DATA;
				this.emitCurrentTagToken();
				break;
			default:
				this.state = State.ATTRIBUTE_VALUE_UNQUOTED;
				this._stateAttributeValueUnquoted(cp);
		}
	}
	_stateAttributeValueDoubleQuoted(cp) {
		switch (cp) {
			case CODE_POINTS.QUOTATION_MARK:
				this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case CODE_POINTS.AMPERSAND:
				this._startCharacterReference();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this.currentAttr.value += REPLACEMENT_CHARACTER;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag);
				this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(cp);
		}
	}
	_stateAttributeValueSingleQuoted(cp) {
		switch (cp) {
			case CODE_POINTS.APOSTROPHE:
				this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case CODE_POINTS.AMPERSAND:
				this._startCharacterReference();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this.currentAttr.value += REPLACEMENT_CHARACTER;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag);
				this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(cp);
		}
	}
	_stateAttributeValueUnquoted(cp) {
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this._leaveAttrValue();
				this.state = State.BEFORE_ATTRIBUTE_NAME;
				break;
			case CODE_POINTS.AMPERSAND:
				this._startCharacterReference();
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._leaveAttrValue();
				this.state = State.DATA;
				this.emitCurrentTagToken();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this.currentAttr.value += REPLACEMENT_CHARACTER;
				break;
			case CODE_POINTS.QUOTATION_MARK:
			case CODE_POINTS.APOSTROPHE:
			case CODE_POINTS.LESS_THAN_SIGN:
			case CODE_POINTS.EQUALS_SIGN:
			case CODE_POINTS.GRAVE_ACCENT:
				this._err(ERR.unexpectedCharacterInUnquotedAttributeValue);
				this.currentAttr.value += String.fromCodePoint(cp);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag);
				this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(cp);
		}
	}
	_stateAfterAttributeValueQuoted(cp) {
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this._leaveAttrValue();
				this.state = State.BEFORE_ATTRIBUTE_NAME;
				break;
			case CODE_POINTS.SOLIDUS:
				this._leaveAttrValue();
				this.state = State.SELF_CLOSING_START_TAG;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._leaveAttrValue();
				this.state = State.DATA;
				this.emitCurrentTagToken();
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag);
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.missingWhitespaceBetweenAttributes);
				this.state = State.BEFORE_ATTRIBUTE_NAME;
				this._stateBeforeAttributeName(cp);
		}
	}
	_stateSelfClosingStartTag(cp) {
		switch (cp) {
			case CODE_POINTS.GREATER_THAN_SIGN: {
				const token = this.currentToken;
				token.selfClosing = true;
				this.state = State.DATA;
				this.emitCurrentTagToken();
				break;
			}
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag);
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.unexpectedSolidusInTag);
				this.state = State.BEFORE_ATTRIBUTE_NAME;
				this._stateBeforeAttributeName(cp);
		}
	}
	_stateBogusComment(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA;
				this.emitCurrentComment(token);
				break;
			case CODE_POINTS.EOF:
				this.emitCurrentComment(token);
				this._emitEOFToken();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				token.data += REPLACEMENT_CHARACTER;
				break;
			default: token.data += String.fromCodePoint(cp);
		}
	}
	_stateMarkupDeclarationOpen(cp) {
		if (this._consumeSequenceIfMatch(SEQUENCES.DASH_DASH, true)) {
			this._createCommentToken(SEQUENCES.DASH_DASH.length + 1);
			this.state = State.COMMENT_START;
		} else if (this._consumeSequenceIfMatch(SEQUENCES.DOCTYPE, false)) {
			this.currentLocation = this.getCurrentLocation(SEQUENCES.DOCTYPE.length + 1);
			this.state = State.DOCTYPE;
		} else if (this._consumeSequenceIfMatch(SEQUENCES.CDATA_START, true)) if (this.inForeignNode) this.state = State.CDATA_SECTION;
		else {
			this._err(ERR.cdataInHtmlContent);
			this._createCommentToken(SEQUENCES.CDATA_START.length + 1);
			this.currentToken.data = "[CDATA[";
			this.state = State.BOGUS_COMMENT;
		}
		else if (!this._ensureHibernation()) {
			this._err(ERR.incorrectlyOpenedComment);
			this._createCommentToken(2);
			this.state = State.BOGUS_COMMENT;
			this._stateBogusComment(cp);
		}
	}
	_stateCommentStart(cp) {
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.COMMENT_START_DASH;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptClosingOfEmptyComment);
				this.state = State.DATA;
				this.emitCurrentComment(this.currentToken);
				break;
			default:
				this.state = State.COMMENT;
				this._stateComment(cp);
		}
	}
	_stateCommentStartDash(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.COMMENT_END;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptClosingOfEmptyComment);
				this.state = State.DATA;
				this.emitCurrentComment(token);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment);
				this.emitCurrentComment(token);
				this._emitEOFToken();
				break;
			default:
				token.data += "-";
				this.state = State.COMMENT;
				this._stateComment(cp);
		}
	}
	_stateComment(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.COMMENT_END_DASH;
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				token.data += "<";
				this.state = State.COMMENT_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				token.data += REPLACEMENT_CHARACTER;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment);
				this.emitCurrentComment(token);
				this._emitEOFToken();
				break;
			default: token.data += String.fromCodePoint(cp);
		}
	}
	_stateCommentLessThanSign(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.EXCLAMATION_MARK:
				token.data += "!";
				this.state = State.COMMENT_LESS_THAN_SIGN_BANG;
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				token.data += "<";
				break;
			default:
				this.state = State.COMMENT;
				this._stateComment(cp);
		}
	}
	_stateCommentLessThanSignBang(cp) {
		if (cp === CODE_POINTS.HYPHEN_MINUS) this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH;
		else {
			this.state = State.COMMENT;
			this._stateComment(cp);
		}
	}
	_stateCommentLessThanSignBangDash(cp) {
		if (cp === CODE_POINTS.HYPHEN_MINUS) this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH;
		else {
			this.state = State.COMMENT_END_DASH;
			this._stateCommentEndDash(cp);
		}
	}
	_stateCommentLessThanSignBangDashDash(cp) {
		if (cp !== CODE_POINTS.GREATER_THAN_SIGN && cp !== CODE_POINTS.EOF) this._err(ERR.nestedComment);
		this.state = State.COMMENT_END;
		this._stateCommentEnd(cp);
	}
	_stateCommentEndDash(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.COMMENT_END;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment);
				this.emitCurrentComment(token);
				this._emitEOFToken();
				break;
			default:
				token.data += "-";
				this.state = State.COMMENT;
				this._stateComment(cp);
		}
	}
	_stateCommentEnd(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA;
				this.emitCurrentComment(token);
				break;
			case CODE_POINTS.EXCLAMATION_MARK:
				this.state = State.COMMENT_END_BANG;
				break;
			case CODE_POINTS.HYPHEN_MINUS:
				token.data += "-";
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment);
				this.emitCurrentComment(token);
				this._emitEOFToken();
				break;
			default:
				token.data += "--";
				this.state = State.COMMENT;
				this._stateComment(cp);
		}
	}
	_stateCommentEndBang(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				token.data += "--!";
				this.state = State.COMMENT_END_DASH;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.incorrectlyClosedComment);
				this.state = State.DATA;
				this.emitCurrentComment(token);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment);
				this.emitCurrentComment(token);
				this._emitEOFToken();
				break;
			default:
				token.data += "--!";
				this.state = State.COMMENT;
				this._stateComment(cp);
		}
	}
	_stateDoctype(cp) {
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BEFORE_DOCTYPE_NAME;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.BEFORE_DOCTYPE_NAME;
				this._stateBeforeDoctypeName(cp);
				break;
			case CODE_POINTS.EOF: {
				this._err(ERR.eofInDoctype);
				this._createDoctypeToken(null);
				const token = this.currentToken;
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			}
			default:
				this._err(ERR.missingWhitespaceBeforeDoctypeName);
				this.state = State.BEFORE_DOCTYPE_NAME;
				this._stateBeforeDoctypeName(cp);
		}
	}
	_stateBeforeDoctypeName(cp) {
		if (isAsciiUpper(cp)) {
			this._createDoctypeToken(String.fromCharCode(toAsciiLower(cp)));
			this.state = State.DOCTYPE_NAME;
		} else switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this._createDoctypeToken(REPLACEMENT_CHARACTER);
				this.state = State.DOCTYPE_NAME;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN: {
				this._err(ERR.missingDoctypeName);
				this._createDoctypeToken(null);
				const token = this.currentToken;
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this.state = State.DATA;
				break;
			}
			case CODE_POINTS.EOF: {
				this._err(ERR.eofInDoctype);
				this._createDoctypeToken(null);
				const token = this.currentToken;
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			}
			default:
				this._createDoctypeToken(String.fromCodePoint(cp));
				this.state = State.DOCTYPE_NAME;
		}
	}
	_stateDoctypeName(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.AFTER_DOCTYPE_NAME;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA;
				this.emitCurrentDoctype(token);
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				token.name += REPLACEMENT_CHARACTER;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default: token.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
		}
	}
	_stateAfterDoctypeName(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA;
				this.emitCurrentDoctype(token);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default: if (this._consumeSequenceIfMatch(SEQUENCES.PUBLIC, false)) this.state = State.AFTER_DOCTYPE_PUBLIC_KEYWORD;
			else if (this._consumeSequenceIfMatch(SEQUENCES.SYSTEM, false)) this.state = State.AFTER_DOCTYPE_SYSTEM_KEYWORD;
			else if (!this._ensureHibernation()) {
				this._err(ERR.invalidCharacterSequenceAfterDoctypeName);
				token.forceQuirks = true;
				this.state = State.BOGUS_DOCTYPE;
				this._stateBogusDoctype(cp);
			}
		}
	}
	_stateAfterDoctypePublicKeyword(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case CODE_POINTS.QUOTATION_MARK:
				this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
				token.publicId = "";
				this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
				token.publicId = "";
				this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingDoctypePublicIdentifier);
				token.forceQuirks = true;
				this.state = State.DATA;
				this.emitCurrentDoctype(token);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
				token.forceQuirks = true;
				this.state = State.BOGUS_DOCTYPE;
				this._stateBogusDoctype(cp);
		}
	}
	_stateBeforeDoctypePublicIdentifier(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.QUOTATION_MARK:
				token.publicId = "";
				this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				token.publicId = "";
				this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingDoctypePublicIdentifier);
				token.forceQuirks = true;
				this.state = State.DATA;
				this.emitCurrentDoctype(token);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
				token.forceQuirks = true;
				this.state = State.BOGUS_DOCTYPE;
				this._stateBogusDoctype(cp);
		}
	}
	_stateDoctypePublicIdentifierDoubleQuoted(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.QUOTATION_MARK:
				this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				token.publicId += REPLACEMENT_CHARACTER;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptDoctypePublicIdentifier);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default: token.publicId += String.fromCodePoint(cp);
		}
	}
	_stateDoctypePublicIdentifierSingleQuoted(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.APOSTROPHE:
				this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				token.publicId += REPLACEMENT_CHARACTER;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptDoctypePublicIdentifier);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default: token.publicId += String.fromCodePoint(cp);
		}
	}
	_stateAfterDoctypePublicIdentifier(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA;
				this.emitCurrentDoctype(token);
				break;
			case CODE_POINTS.QUOTATION_MARK:
				this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
				token.systemId = "";
				this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
				token.systemId = "";
				this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
				token.forceQuirks = true;
				this.state = State.BOGUS_DOCTYPE;
				this._stateBogusDoctype(cp);
		}
	}
	_stateBetweenDoctypePublicAndSystemIdentifiers(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(token);
				this.state = State.DATA;
				break;
			case CODE_POINTS.QUOTATION_MARK:
				token.systemId = "";
				this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				token.systemId = "";
				this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
				token.forceQuirks = true;
				this.state = State.BOGUS_DOCTYPE;
				this._stateBogusDoctype(cp);
		}
	}
	_stateAfterDoctypeSystemKeyword(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case CODE_POINTS.QUOTATION_MARK:
				this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
				token.systemId = "";
				this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
				token.systemId = "";
				this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingDoctypeSystemIdentifier);
				token.forceQuirks = true;
				this.state = State.DATA;
				this.emitCurrentDoctype(token);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
				token.forceQuirks = true;
				this.state = State.BOGUS_DOCTYPE;
				this._stateBogusDoctype(cp);
		}
	}
	_stateBeforeDoctypeSystemIdentifier(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.QUOTATION_MARK:
				token.systemId = "";
				this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				token.systemId = "";
				this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingDoctypeSystemIdentifier);
				token.forceQuirks = true;
				this.state = State.DATA;
				this.emitCurrentDoctype(token);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
				token.forceQuirks = true;
				this.state = State.BOGUS_DOCTYPE;
				this._stateBogusDoctype(cp);
		}
	}
	_stateDoctypeSystemIdentifierDoubleQuoted(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.QUOTATION_MARK:
				this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				token.systemId += REPLACEMENT_CHARACTER;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptDoctypeSystemIdentifier);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default: token.systemId += String.fromCodePoint(cp);
		}
	}
	_stateDoctypeSystemIdentifierSingleQuoted(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.APOSTROPHE:
				this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				token.systemId += REPLACEMENT_CHARACTER;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptDoctypeSystemIdentifier);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default: token.systemId += String.fromCodePoint(cp);
		}
	}
	_stateAfterDoctypeSystemIdentifier(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(token);
				this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.unexpectedCharacterAfterDoctypeSystemIdentifier);
				this.state = State.BOGUS_DOCTYPE;
				this._stateBogusDoctype(cp);
		}
	}
	_stateBogusDoctype(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(token);
				this.state = State.DATA;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				break;
			case CODE_POINTS.EOF:
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default:
		}
	}
	_stateCdataSection(cp) {
		switch (cp) {
			case CODE_POINTS.RIGHT_SQUARE_BRACKET:
				this.state = State.CDATA_SECTION_BRACKET;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInCdata);
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(cp);
		}
	}
	_stateCdataSectionBracket(cp) {
		if (cp === CODE_POINTS.RIGHT_SQUARE_BRACKET) this.state = State.CDATA_SECTION_END;
		else {
			this._emitChars("]");
			this.state = State.CDATA_SECTION;
			this._stateCdataSection(cp);
		}
	}
	_stateCdataSectionEnd(cp) {
		switch (cp) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA;
				break;
			case CODE_POINTS.RIGHT_SQUARE_BRACKET:
				this._emitChars("]");
				break;
			default:
				this._emitChars("]]");
				this.state = State.CDATA_SECTION;
				this._stateCdataSection(cp);
		}
	}
	_stateCharacterReference() {
		let length = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
		if (length < 0) if (this.preprocessor.lastChunkWritten) length = this.entityDecoder.end();
		else {
			this.active = false;
			this.preprocessor.pos = this.preprocessor.html.length - 1;
			this.consumedAfterSnapshot = 0;
			this.preprocessor.endOfChunkHit = true;
			return;
		}
		if (length === 0) {
			this.preprocessor.pos = this.entityStartPos;
			this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND);
			this.state = !this._isCharacterReferenceInAttribute() && isAsciiAlphaNumeric(this.preprocessor.peek(1)) ? State.AMBIGUOUS_AMPERSAND : this.returnState;
		} else this.state = this.returnState;
	}
	_stateAmbiguousAmpersand(cp) {
		if (isAsciiAlphaNumeric(cp)) this._flushCodePointConsumedAsCharacterReference(cp);
		else {
			if (cp === CODE_POINTS.SEMICOLON) this._err(ERR.unknownNamedCharacterReference);
			this.state = this.returnState;
			this._callState(cp);
		}
	}
};

//#endregion
//#region ../../node_modules/.pnpm/parse5@8.0.0/node_modules/parse5/dist/parser/open-element-stack.js
const IMPLICIT_END_TAG_REQUIRED = new Set([
	TAG_ID.DD,
	TAG_ID.DT,
	TAG_ID.LI,
	TAG_ID.OPTGROUP,
	TAG_ID.OPTION,
	TAG_ID.P,
	TAG_ID.RB,
	TAG_ID.RP,
	TAG_ID.RT,
	TAG_ID.RTC
]);
const IMPLICIT_END_TAG_REQUIRED_THOROUGHLY = new Set([
	...IMPLICIT_END_TAG_REQUIRED,
	TAG_ID.CAPTION,
	TAG_ID.COLGROUP,
	TAG_ID.TBODY,
	TAG_ID.TD,
	TAG_ID.TFOOT,
	TAG_ID.TH,
	TAG_ID.THEAD,
	TAG_ID.TR
]);
const SCOPING_ELEMENTS_HTML = new Set([
	TAG_ID.APPLET,
	TAG_ID.CAPTION,
	TAG_ID.HTML,
	TAG_ID.MARQUEE,
	TAG_ID.OBJECT,
	TAG_ID.TABLE,
	TAG_ID.TD,
	TAG_ID.TEMPLATE,
	TAG_ID.TH
]);
const SCOPING_ELEMENTS_HTML_LIST = new Set([
	...SCOPING_ELEMENTS_HTML,
	TAG_ID.OL,
	TAG_ID.UL
]);
const SCOPING_ELEMENTS_HTML_BUTTON = new Set([...SCOPING_ELEMENTS_HTML, TAG_ID.BUTTON]);
const SCOPING_ELEMENTS_MATHML = new Set([
	TAG_ID.ANNOTATION_XML,
	TAG_ID.MI,
	TAG_ID.MN,
	TAG_ID.MO,
	TAG_ID.MS,
	TAG_ID.MTEXT
]);
const SCOPING_ELEMENTS_SVG = new Set([
	TAG_ID.DESC,
	TAG_ID.FOREIGN_OBJECT,
	TAG_ID.TITLE
]);
const TABLE_ROW_CONTEXT = new Set([
	TAG_ID.TR,
	TAG_ID.TEMPLATE,
	TAG_ID.HTML
]);
const TABLE_BODY_CONTEXT = new Set([
	TAG_ID.TBODY,
	TAG_ID.TFOOT,
	TAG_ID.THEAD,
	TAG_ID.TEMPLATE,
	TAG_ID.HTML
]);
const TABLE_CONTEXT = new Set([
	TAG_ID.TABLE,
	TAG_ID.TEMPLATE,
	TAG_ID.HTML
]);
const TABLE_CELLS = new Set([TAG_ID.TD, TAG_ID.TH]);
var OpenElementStack = class {
	get currentTmplContentOrNode() {
		return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
	}
	constructor(document, treeAdapter, handler) {
		this.treeAdapter = treeAdapter;
		this.handler = handler;
		this.items = [];
		this.tagIDs = [];
		this.stackTop = -1;
		this.tmplCount = 0;
		this.currentTagId = TAG_ID.UNKNOWN;
		this.current = document;
	}
	_indexOf(element) {
		return this.items.lastIndexOf(element, this.stackTop);
	}
	_isInTemplate() {
		return this.currentTagId === TAG_ID.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === NS.HTML;
	}
	_updateCurrentElement() {
		this.current = this.items[this.stackTop];
		this.currentTagId = this.tagIDs[this.stackTop];
	}
	push(element, tagID) {
		this.stackTop++;
		this.items[this.stackTop] = element;
		this.current = element;
		this.tagIDs[this.stackTop] = tagID;
		this.currentTagId = tagID;
		if (this._isInTemplate()) this.tmplCount++;
		this.handler.onItemPush(element, tagID, true);
	}
	pop() {
		const popped = this.current;
		if (this.tmplCount > 0 && this._isInTemplate()) this.tmplCount--;
		this.stackTop--;
		this._updateCurrentElement();
		this.handler.onItemPop(popped, true);
	}
	replace(oldElement, newElement) {
		const idx = this._indexOf(oldElement);
		this.items[idx] = newElement;
		if (idx === this.stackTop) this.current = newElement;
	}
	insertAfter(referenceElement, newElement, newElementID) {
		const insertionIdx = this._indexOf(referenceElement) + 1;
		this.items.splice(insertionIdx, 0, newElement);
		this.tagIDs.splice(insertionIdx, 0, newElementID);
		this.stackTop++;
		if (insertionIdx === this.stackTop) this._updateCurrentElement();
		if (this.current && this.currentTagId !== void 0) this.handler.onItemPush(this.current, this.currentTagId, insertionIdx === this.stackTop);
	}
	popUntilTagNamePopped(tagName) {
		let targetIdx = this.stackTop + 1;
		do
			targetIdx = this.tagIDs.lastIndexOf(tagName, targetIdx - 1);
		while (targetIdx > 0 && this.treeAdapter.getNamespaceURI(this.items[targetIdx]) !== NS.HTML);
		this.shortenToLength(Math.max(targetIdx, 0));
	}
	shortenToLength(idx) {
		while (this.stackTop >= idx) {
			const popped = this.current;
			if (this.tmplCount > 0 && this._isInTemplate()) this.tmplCount -= 1;
			this.stackTop--;
			this._updateCurrentElement();
			this.handler.onItemPop(popped, this.stackTop < idx);
		}
	}
	popUntilElementPopped(element) {
		const idx = this._indexOf(element);
		this.shortenToLength(Math.max(idx, 0));
	}
	popUntilPopped(tagNames, targetNS) {
		const idx = this._indexOfTagNames(tagNames, targetNS);
		this.shortenToLength(Math.max(idx, 0));
	}
	popUntilNumberedHeaderPopped() {
		this.popUntilPopped(NUMBERED_HEADERS, NS.HTML);
	}
	popUntilTableCellPopped() {
		this.popUntilPopped(TABLE_CELLS, NS.HTML);
	}
	popAllUpToHtmlElement() {
		this.tmplCount = 0;
		this.shortenToLength(1);
	}
	_indexOfTagNames(tagNames, namespace) {
		for (let i = this.stackTop; i >= 0; i--) if (tagNames.has(this.tagIDs[i]) && this.treeAdapter.getNamespaceURI(this.items[i]) === namespace) return i;
		return -1;
	}
	clearBackTo(tagNames, targetNS) {
		const idx = this._indexOfTagNames(tagNames, targetNS);
		this.shortenToLength(idx + 1);
	}
	clearBackToTableContext() {
		this.clearBackTo(TABLE_CONTEXT, NS.HTML);
	}
	clearBackToTableBodyContext() {
		this.clearBackTo(TABLE_BODY_CONTEXT, NS.HTML);
	}
	clearBackToTableRowContext() {
		this.clearBackTo(TABLE_ROW_CONTEXT, NS.HTML);
	}
	remove(element) {
		const idx = this._indexOf(element);
		if (idx >= 0) if (idx === this.stackTop) this.pop();
		else {
			this.items.splice(idx, 1);
			this.tagIDs.splice(idx, 1);
			this.stackTop--;
			this._updateCurrentElement();
			this.handler.onItemPop(element, false);
		}
	}
	tryPeekProperlyNestedBodyElement() {
		return this.stackTop >= 1 && this.tagIDs[1] === TAG_ID.BODY ? this.items[1] : null;
	}
	contains(element) {
		return this._indexOf(element) > -1;
	}
	getCommonAncestor(element) {
		const elementIdx = this._indexOf(element) - 1;
		return elementIdx >= 0 ? this.items[elementIdx] : null;
	}
	isRootHtmlElementCurrent() {
		return this.stackTop === 0 && this.tagIDs[0] === TAG_ID.HTML;
	}
	hasInDynamicScope(tagName, htmlScope) {
		for (let i = this.stackTop; i >= 0; i--) {
			const tn = this.tagIDs[i];
			switch (this.treeAdapter.getNamespaceURI(this.items[i])) {
				case NS.HTML:
					if (tn === tagName) return true;
					if (htmlScope.has(tn)) return false;
					break;
				case NS.SVG:
					if (SCOPING_ELEMENTS_SVG.has(tn)) return false;
					break;
				case NS.MATHML:
					if (SCOPING_ELEMENTS_MATHML.has(tn)) return false;
					break;
			}
		}
		return true;
	}
	hasInScope(tagName) {
		return this.hasInDynamicScope(tagName, SCOPING_ELEMENTS_HTML);
	}
	hasInListItemScope(tagName) {
		return this.hasInDynamicScope(tagName, SCOPING_ELEMENTS_HTML_LIST);
	}
	hasInButtonScope(tagName) {
		return this.hasInDynamicScope(tagName, SCOPING_ELEMENTS_HTML_BUTTON);
	}
	hasNumberedHeaderInScope() {
		for (let i = this.stackTop; i >= 0; i--) {
			const tn = this.tagIDs[i];
			switch (this.treeAdapter.getNamespaceURI(this.items[i])) {
				case NS.HTML:
					if (NUMBERED_HEADERS.has(tn)) return true;
					if (SCOPING_ELEMENTS_HTML.has(tn)) return false;
					break;
				case NS.SVG:
					if (SCOPING_ELEMENTS_SVG.has(tn)) return false;
					break;
				case NS.MATHML:
					if (SCOPING_ELEMENTS_MATHML.has(tn)) return false;
					break;
			}
		}
		return true;
	}
	hasInTableScope(tagName) {
		for (let i = this.stackTop; i >= 0; i--) {
			if (this.treeAdapter.getNamespaceURI(this.items[i]) !== NS.HTML) continue;
			switch (this.tagIDs[i]) {
				case tagName: return true;
				case TAG_ID.TABLE:
				case TAG_ID.HTML: return false;
			}
		}
		return true;
	}
	hasTableBodyContextInTableScope() {
		for (let i = this.stackTop; i >= 0; i--) {
			if (this.treeAdapter.getNamespaceURI(this.items[i]) !== NS.HTML) continue;
			switch (this.tagIDs[i]) {
				case TAG_ID.TBODY:
				case TAG_ID.THEAD:
				case TAG_ID.TFOOT: return true;
				case TAG_ID.TABLE:
				case TAG_ID.HTML: return false;
			}
		}
		return true;
	}
	hasInSelectScope(tagName) {
		for (let i = this.stackTop; i >= 0; i--) {
			if (this.treeAdapter.getNamespaceURI(this.items[i]) !== NS.HTML) continue;
			switch (this.tagIDs[i]) {
				case tagName: return true;
				case TAG_ID.OPTION:
				case TAG_ID.OPTGROUP: break;
				default: return false;
			}
		}
		return true;
	}
	generateImpliedEndTags() {
		while (this.currentTagId !== void 0 && IMPLICIT_END_TAG_REQUIRED.has(this.currentTagId)) this.pop();
	}
	generateImpliedEndTagsThoroughly() {
		while (this.currentTagId !== void 0 && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) this.pop();
	}
	generateImpliedEndTagsWithExclusion(exclusionId) {
		while (this.currentTagId !== void 0 && this.currentTagId !== exclusionId && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) this.pop();
	}
};

//#endregion
//#region ../../node_modules/.pnpm/parse5@8.0.0/node_modules/parse5/dist/parser/formatting-element-list.js
const NOAH_ARK_CAPACITY = 3;
var EntryType;
(function(EntryType$1) {
	EntryType$1[EntryType$1["Marker"] = 0] = "Marker";
	EntryType$1[EntryType$1["Element"] = 1] = "Element";
})(EntryType || (EntryType = {}));
const MARKER = { type: EntryType.Marker };
var FormattingElementList = class {
	constructor(treeAdapter) {
		this.treeAdapter = treeAdapter;
		this.entries = [];
		this.bookmark = null;
	}
	_getNoahArkConditionCandidates(newElement, neAttrs) {
		const candidates = [];
		const neAttrsLength = neAttrs.length;
		const neTagName = this.treeAdapter.getTagName(newElement);
		const neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);
		for (let i = 0; i < this.entries.length; i++) {
			const entry = this.entries[i];
			if (entry.type === EntryType.Marker) break;
			const { element } = entry;
			if (this.treeAdapter.getTagName(element) === neTagName && this.treeAdapter.getNamespaceURI(element) === neNamespaceURI) {
				const elementAttrs = this.treeAdapter.getAttrList(element);
				if (elementAttrs.length === neAttrsLength) candidates.push({
					idx: i,
					attrs: elementAttrs
				});
			}
		}
		return candidates;
	}
	_ensureNoahArkCondition(newElement) {
		if (this.entries.length < NOAH_ARK_CAPACITY) return;
		const neAttrs = this.treeAdapter.getAttrList(newElement);
		const candidates = this._getNoahArkConditionCandidates(newElement, neAttrs);
		if (candidates.length < NOAH_ARK_CAPACITY) return;
		const neAttrsMap = new Map(neAttrs.map((neAttr) => [neAttr.name, neAttr.value]));
		let validCandidates = 0;
		for (let i = 0; i < candidates.length; i++) {
			const candidate = candidates[i];
			if (candidate.attrs.every((cAttr) => neAttrsMap.get(cAttr.name) === cAttr.value)) {
				validCandidates += 1;
				if (validCandidates >= NOAH_ARK_CAPACITY) this.entries.splice(candidate.idx, 1);
			}
		}
	}
	insertMarker() {
		this.entries.unshift(MARKER);
	}
	pushElement(element, token) {
		this._ensureNoahArkCondition(element);
		this.entries.unshift({
			type: EntryType.Element,
			element,
			token
		});
	}
	insertElementAfterBookmark(element, token) {
		const bookmarkIdx = this.entries.indexOf(this.bookmark);
		this.entries.splice(bookmarkIdx, 0, {
			type: EntryType.Element,
			element,
			token
		});
	}
	removeEntry(entry) {
		const entryIndex = this.entries.indexOf(entry);
		if (entryIndex !== -1) this.entries.splice(entryIndex, 1);
	}
	/**
	* Clears the list of formatting elements up to the last marker.
	*
	* @see https://html.spec.whatwg.org/multipage/parsing.html#clear-the-list-of-active-formatting-elements-up-to-the-last-marker
	*/
	clearToLastMarker() {
		const markerIdx = this.entries.indexOf(MARKER);
		if (markerIdx === -1) this.entries.length = 0;
		else this.entries.splice(0, markerIdx + 1);
	}
	getElementEntryInScopeWithTagName(tagName) {
		const entry = this.entries.find((entry$1) => entry$1.type === EntryType.Marker || this.treeAdapter.getTagName(entry$1.element) === tagName);
		return entry && entry.type === EntryType.Element ? entry : null;
	}
	getElementEntry(element) {
		return this.entries.find((entry) => entry.type === EntryType.Element && entry.element === element);
	}
};

//#endregion
//#region ../../node_modules/.pnpm/parse5@8.0.0/node_modules/parse5/dist/tree-adapters/default.js
const defaultTreeAdapter = {
	createDocument() {
		return {
			nodeName: "#document",
			mode: DOCUMENT_MODE.NO_QUIRKS,
			childNodes: []
		};
	},
	createDocumentFragment() {
		return {
			nodeName: "#document-fragment",
			childNodes: []
		};
	},
	createElement(tagName, namespaceURI, attrs) {
		return {
			nodeName: tagName,
			tagName,
			attrs,
			namespaceURI,
			childNodes: [],
			parentNode: null
		};
	},
	createCommentNode(data) {
		return {
			nodeName: "#comment",
			data,
			parentNode: null
		};
	},
	createTextNode(value) {
		return {
			nodeName: "#text",
			value,
			parentNode: null
		};
	},
	appendChild(parentNode, newNode) {
		parentNode.childNodes.push(newNode);
		newNode.parentNode = parentNode;
	},
	insertBefore(parentNode, newNode, referenceNode) {
		const insertionIdx = parentNode.childNodes.indexOf(referenceNode);
		parentNode.childNodes.splice(insertionIdx, 0, newNode);
		newNode.parentNode = parentNode;
	},
	setTemplateContent(templateElement, contentElement) {
		templateElement.content = contentElement;
	},
	getTemplateContent(templateElement) {
		return templateElement.content;
	},
	setDocumentType(document, name, publicId, systemId) {
		const doctypeNode = document.childNodes.find((node) => node.nodeName === "#documentType");
		if (doctypeNode) {
			doctypeNode.name = name;
			doctypeNode.publicId = publicId;
			doctypeNode.systemId = systemId;
		} else defaultTreeAdapter.appendChild(document, {
			nodeName: "#documentType",
			name,
			publicId,
			systemId,
			parentNode: null
		});
	},
	setDocumentMode(document, mode) {
		document.mode = mode;
	},
	getDocumentMode(document) {
		return document.mode;
	},
	detachNode(node) {
		if (node.parentNode) {
			const idx = node.parentNode.childNodes.indexOf(node);
			node.parentNode.childNodes.splice(idx, 1);
			node.parentNode = null;
		}
	},
	insertText(parentNode, text) {
		if (parentNode.childNodes.length > 0) {
			const prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];
			if (defaultTreeAdapter.isTextNode(prevNode)) {
				prevNode.value += text;
				return;
			}
		}
		defaultTreeAdapter.appendChild(parentNode, defaultTreeAdapter.createTextNode(text));
	},
	insertTextBefore(parentNode, text, referenceNode) {
		const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
		if (prevNode && defaultTreeAdapter.isTextNode(prevNode)) prevNode.value += text;
		else defaultTreeAdapter.insertBefore(parentNode, defaultTreeAdapter.createTextNode(text), referenceNode);
	},
	adoptAttributes(recipient, attrs) {
		const recipientAttrsMap = new Set(recipient.attrs.map((attr) => attr.name));
		for (let j = 0; j < attrs.length; j++) if (!recipientAttrsMap.has(attrs[j].name)) recipient.attrs.push(attrs[j]);
	},
	getFirstChild(node) {
		return node.childNodes[0];
	},
	getChildNodes(node) {
		return node.childNodes;
	},
	getParentNode(node) {
		return node.parentNode;
	},
	getAttrList(element) {
		return element.attrs;
	},
	getTagName(element) {
		return element.tagName;
	},
	getNamespaceURI(element) {
		return element.namespaceURI;
	},
	getTextNodeContent(textNode) {
		return textNode.value;
	},
	getCommentNodeContent(commentNode) {
		return commentNode.data;
	},
	getDocumentTypeNodeName(doctypeNode) {
		return doctypeNode.name;
	},
	getDocumentTypeNodePublicId(doctypeNode) {
		return doctypeNode.publicId;
	},
	getDocumentTypeNodeSystemId(doctypeNode) {
		return doctypeNode.systemId;
	},
	isTextNode(node) {
		return node.nodeName === "#text";
	},
	isCommentNode(node) {
		return node.nodeName === "#comment";
	},
	isDocumentTypeNode(node) {
		return node.nodeName === "#documentType";
	},
	isElementNode(node) {
		return Object.prototype.hasOwnProperty.call(node, "tagName");
	},
	setNodeSourceCodeLocation(node, location) {
		node.sourceCodeLocation = location;
	},
	getNodeSourceCodeLocation(node) {
		return node.sourceCodeLocation;
	},
	updateNodeSourceCodeLocation(node, endLocation) {
		node.sourceCodeLocation = {
			...node.sourceCodeLocation,
			...endLocation
		};
	}
};

//#endregion
//#region ../../node_modules/.pnpm/parse5@8.0.0/node_modules/parse5/dist/common/doctype.js
const VALID_DOCTYPE_NAME = "html";
const VALID_SYSTEM_ID = "about:legacy-compat";
const QUIRKS_MODE_SYSTEM_ID = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd";
const QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
	"+//silmaril//dtd html pro v0r11 19970101//",
	"-//as//dtd html 3.0 aswedit + extensions//",
	"-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
	"-//ietf//dtd html 2.0 level 1//",
	"-//ietf//dtd html 2.0 level 2//",
	"-//ietf//dtd html 2.0 strict level 1//",
	"-//ietf//dtd html 2.0 strict level 2//",
	"-//ietf//dtd html 2.0 strict//",
	"-//ietf//dtd html 2.0//",
	"-//ietf//dtd html 2.1e//",
	"-//ietf//dtd html 3.0//",
	"-//ietf//dtd html 3.2 final//",
	"-//ietf//dtd html 3.2//",
	"-//ietf//dtd html 3//",
	"-//ietf//dtd html level 0//",
	"-//ietf//dtd html level 1//",
	"-//ietf//dtd html level 2//",
	"-//ietf//dtd html level 3//",
	"-//ietf//dtd html strict level 0//",
	"-//ietf//dtd html strict level 1//",
	"-//ietf//dtd html strict level 2//",
	"-//ietf//dtd html strict level 3//",
	"-//ietf//dtd html strict//",
	"-//ietf//dtd html//",
	"-//metrius//dtd metrius presentational//",
	"-//microsoft//dtd internet explorer 2.0 html strict//",
	"-//microsoft//dtd internet explorer 2.0 html//",
	"-//microsoft//dtd internet explorer 2.0 tables//",
	"-//microsoft//dtd internet explorer 3.0 html strict//",
	"-//microsoft//dtd internet explorer 3.0 html//",
	"-//microsoft//dtd internet explorer 3.0 tables//",
	"-//netscape comm. corp.//dtd html//",
	"-//netscape comm. corp.//dtd strict html//",
	"-//o'reilly and associates//dtd html 2.0//",
	"-//o'reilly and associates//dtd html extended 1.0//",
	"-//o'reilly and associates//dtd html extended relaxed 1.0//",
	"-//sq//dtd html 2.0 hotmetal + extensions//",
	"-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
	"-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
	"-//spyglass//dtd html 2.0 extended//",
	"-//sun microsystems corp.//dtd hotjava html//",
	"-//sun microsystems corp.//dtd hotjava strict html//",
	"-//w3c//dtd html 3 1995-03-24//",
	"-//w3c//dtd html 3.2 draft//",
	"-//w3c//dtd html 3.2 final//",
	"-//w3c//dtd html 3.2//",
	"-//w3c//dtd html 3.2s draft//",
	"-//w3c//dtd html 4.0 frameset//",
	"-//w3c//dtd html 4.0 transitional//",
	"-//w3c//dtd html experimental 19960712//",
	"-//w3c//dtd html experimental 970421//",
	"-//w3c//dtd w3 html//",
	"-//w3o//dtd w3 html 3.0//",
	"-//webtechs//dtd mozilla html 2.0//",
	"-//webtechs//dtd mozilla html//"
];
const QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
	...QUIRKS_MODE_PUBLIC_ID_PREFIXES,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
];
const QUIRKS_MODE_PUBLIC_IDS = new Set([
	"-//w3o//dtd w3 html strict 3.0//en//",
	"-/w3c/dtd html 4.0 transitional/en",
	"html"
]);
const LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"];
const LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
	...LIMITED_QUIRKS_PUBLIC_ID_PREFIXES,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
];
function hasPrefix(publicId, prefixes) {
	return prefixes.some((prefix) => publicId.startsWith(prefix));
}
function isConforming(token) {
	return token.name === VALID_DOCTYPE_NAME && token.publicId === null && (token.systemId === null || token.systemId === VALID_SYSTEM_ID);
}
function getDocumentMode(token) {
	if (token.name !== VALID_DOCTYPE_NAME) return DOCUMENT_MODE.QUIRKS;
	const { systemId } = token;
	if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) return DOCUMENT_MODE.QUIRKS;
	let { publicId } = token;
	if (publicId !== null) {
		publicId = publicId.toLowerCase();
		if (QUIRKS_MODE_PUBLIC_IDS.has(publicId)) return DOCUMENT_MODE.QUIRKS;
		let prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
		if (hasPrefix(publicId, prefixes)) return DOCUMENT_MODE.QUIRKS;
		prefixes = systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
		if (hasPrefix(publicId, prefixes)) return DOCUMENT_MODE.LIMITED_QUIRKS;
	}
	return DOCUMENT_MODE.NO_QUIRKS;
}

//#endregion
//#region ../../node_modules/.pnpm/parse5@8.0.0/node_modules/parse5/dist/common/foreign-content.js
const MIME_TYPES = {
	TEXT_HTML: "text/html",
	APPLICATION_XML: "application/xhtml+xml"
};
const DEFINITION_URL_ATTR = "definitionurl";
const ADJUSTED_DEFINITION_URL_ATTR = "definitionURL";
const SVG_ATTRS_ADJUSTMENT_MAP = new Map([
	"attributeName",
	"attributeType",
	"baseFrequency",
	"baseProfile",
	"calcMode",
	"clipPathUnits",
	"diffuseConstant",
	"edgeMode",
	"filterUnits",
	"glyphRef",
	"gradientTransform",
	"gradientUnits",
	"kernelMatrix",
	"kernelUnitLength",
	"keyPoints",
	"keySplines",
	"keyTimes",
	"lengthAdjust",
	"limitingConeAngle",
	"markerHeight",
	"markerUnits",
	"markerWidth",
	"maskContentUnits",
	"maskUnits",
	"numOctaves",
	"pathLength",
	"patternContentUnits",
	"patternTransform",
	"patternUnits",
	"pointsAtX",
	"pointsAtY",
	"pointsAtZ",
	"preserveAlpha",
	"preserveAspectRatio",
	"primitiveUnits",
	"refX",
	"refY",
	"repeatCount",
	"repeatDur",
	"requiredExtensions",
	"requiredFeatures",
	"specularConstant",
	"specularExponent",
	"spreadMethod",
	"startOffset",
	"stdDeviation",
	"stitchTiles",
	"surfaceScale",
	"systemLanguage",
	"tableValues",
	"targetX",
	"targetY",
	"textLength",
	"viewBox",
	"viewTarget",
	"xChannelSelector",
	"yChannelSelector",
	"zoomAndPan"
].map((attr) => [attr.toLowerCase(), attr]));
const XML_ATTRS_ADJUSTMENT_MAP = new Map([
	["xlink:actuate", {
		prefix: "xlink",
		name: "actuate",
		namespace: NS.XLINK
	}],
	["xlink:arcrole", {
		prefix: "xlink",
		name: "arcrole",
		namespace: NS.XLINK
	}],
	["xlink:href", {
		prefix: "xlink",
		name: "href",
		namespace: NS.XLINK
	}],
	["xlink:role", {
		prefix: "xlink",
		name: "role",
		namespace: NS.XLINK
	}],
	["xlink:show", {
		prefix: "xlink",
		name: "show",
		namespace: NS.XLINK
	}],
	["xlink:title", {
		prefix: "xlink",
		name: "title",
		namespace: NS.XLINK
	}],
	["xlink:type", {
		prefix: "xlink",
		name: "type",
		namespace: NS.XLINK
	}],
	["xml:lang", {
		prefix: "xml",
		name: "lang",
		namespace: NS.XML
	}],
	["xml:space", {
		prefix: "xml",
		name: "space",
		namespace: NS.XML
	}],
	["xmlns", {
		prefix: "",
		name: "xmlns",
		namespace: NS.XMLNS
	}],
	["xmlns:xlink", {
		prefix: "xmlns",
		name: "xlink",
		namespace: NS.XMLNS
	}]
]);
const SVG_TAG_NAMES_ADJUSTMENT_MAP = new Map([
	"altGlyph",
	"altGlyphDef",
	"altGlyphItem",
	"animateColor",
	"animateMotion",
	"animateTransform",
	"clipPath",
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence",
	"foreignObject",
	"glyphRef",
	"linearGradient",
	"radialGradient",
	"textPath"
].map((tn) => [tn.toLowerCase(), tn]));
const EXITS_FOREIGN_CONTENT = new Set([
	TAG_ID.B,
	TAG_ID.BIG,
	TAG_ID.BLOCKQUOTE,
	TAG_ID.BODY,
	TAG_ID.BR,
	TAG_ID.CENTER,
	TAG_ID.CODE,
	TAG_ID.DD,
	TAG_ID.DIV,
	TAG_ID.DL,
	TAG_ID.DT,
	TAG_ID.EM,
	TAG_ID.EMBED,
	TAG_ID.H1,
	TAG_ID.H2,
	TAG_ID.H3,
	TAG_ID.H4,
	TAG_ID.H5,
	TAG_ID.H6,
	TAG_ID.HEAD,
	TAG_ID.HR,
	TAG_ID.I,
	TAG_ID.IMG,
	TAG_ID.LI,
	TAG_ID.LISTING,
	TAG_ID.MENU,
	TAG_ID.META,
	TAG_ID.NOBR,
	TAG_ID.OL,
	TAG_ID.P,
	TAG_ID.PRE,
	TAG_ID.RUBY,
	TAG_ID.S,
	TAG_ID.SMALL,
	TAG_ID.SPAN,
	TAG_ID.STRONG,
	TAG_ID.STRIKE,
	TAG_ID.SUB,
	TAG_ID.SUP,
	TAG_ID.TABLE,
	TAG_ID.TT,
	TAG_ID.U,
	TAG_ID.UL,
	TAG_ID.VAR
]);
function causesExit(startTagToken) {
	const tn = startTagToken.tagID;
	return tn === TAG_ID.FONT && startTagToken.attrs.some(({ name }) => name === ATTRS.COLOR || name === ATTRS.SIZE || name === ATTRS.FACE) || EXITS_FOREIGN_CONTENT.has(tn);
}
function adjustTokenMathMLAttrs(token) {
	for (let i = 0; i < token.attrs.length; i++) if (token.attrs[i].name === DEFINITION_URL_ATTR) {
		token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
		break;
	}
}
function adjustTokenSVGAttrs(token) {
	for (let i = 0; i < token.attrs.length; i++) {
		const adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
		if (adjustedAttrName != null) token.attrs[i].name = adjustedAttrName;
	}
}
function adjustTokenXMLAttrs(token) {
	for (let i = 0; i < token.attrs.length; i++) {
		const adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
		if (adjustedAttrEntry) {
			token.attrs[i].prefix = adjustedAttrEntry.prefix;
			token.attrs[i].name = adjustedAttrEntry.name;
			token.attrs[i].namespace = adjustedAttrEntry.namespace;
		}
	}
}
function adjustTokenSVGTagName(token) {
	const adjustedTagName = SVG_TAG_NAMES_ADJUSTMENT_MAP.get(token.tagName);
	if (adjustedTagName != null) {
		token.tagName = adjustedTagName;
		token.tagID = getTagID(token.tagName);
	}
}
function isMathMLTextIntegrationPoint(tn, ns) {
	return ns === NS.MATHML && (tn === TAG_ID.MI || tn === TAG_ID.MO || tn === TAG_ID.MN || tn === TAG_ID.MS || tn === TAG_ID.MTEXT);
}
function isHtmlIntegrationPoint(tn, ns, attrs) {
	if (ns === NS.MATHML && tn === TAG_ID.ANNOTATION_XML) {
		for (let i = 0; i < attrs.length; i++) if (attrs[i].name === ATTRS.ENCODING) {
			const value = attrs[i].value.toLowerCase();
			return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
		}
	}
	return ns === NS.SVG && (tn === TAG_ID.FOREIGN_OBJECT || tn === TAG_ID.DESC || tn === TAG_ID.TITLE);
}
function isIntegrationPoint(tn, ns, attrs, foreignNS) {
	return (!foreignNS || foreignNS === NS.HTML) && isHtmlIntegrationPoint(tn, ns, attrs) || (!foreignNS || foreignNS === NS.MATHML) && isMathMLTextIntegrationPoint(tn, ns);
}

//#endregion
//#region ../../node_modules/.pnpm/parse5@8.0.0/node_modules/parse5/dist/parser/index.js
const HIDDEN_INPUT_TYPE = "hidden";
const AA_OUTER_LOOP_ITER = 8;
const AA_INNER_LOOP_ITER = 3;
var InsertionMode;
(function(InsertionMode$1) {
	InsertionMode$1[InsertionMode$1["INITIAL"] = 0] = "INITIAL";
	InsertionMode$1[InsertionMode$1["BEFORE_HTML"] = 1] = "BEFORE_HTML";
	InsertionMode$1[InsertionMode$1["BEFORE_HEAD"] = 2] = "BEFORE_HEAD";
	InsertionMode$1[InsertionMode$1["IN_HEAD"] = 3] = "IN_HEAD";
	InsertionMode$1[InsertionMode$1["IN_HEAD_NO_SCRIPT"] = 4] = "IN_HEAD_NO_SCRIPT";
	InsertionMode$1[InsertionMode$1["AFTER_HEAD"] = 5] = "AFTER_HEAD";
	InsertionMode$1[InsertionMode$1["IN_BODY"] = 6] = "IN_BODY";
	InsertionMode$1[InsertionMode$1["TEXT"] = 7] = "TEXT";
	InsertionMode$1[InsertionMode$1["IN_TABLE"] = 8] = "IN_TABLE";
	InsertionMode$1[InsertionMode$1["IN_TABLE_TEXT"] = 9] = "IN_TABLE_TEXT";
	InsertionMode$1[InsertionMode$1["IN_CAPTION"] = 10] = "IN_CAPTION";
	InsertionMode$1[InsertionMode$1["IN_COLUMN_GROUP"] = 11] = "IN_COLUMN_GROUP";
	InsertionMode$1[InsertionMode$1["IN_TABLE_BODY"] = 12] = "IN_TABLE_BODY";
	InsertionMode$1[InsertionMode$1["IN_ROW"] = 13] = "IN_ROW";
	InsertionMode$1[InsertionMode$1["IN_CELL"] = 14] = "IN_CELL";
	InsertionMode$1[InsertionMode$1["IN_SELECT"] = 15] = "IN_SELECT";
	InsertionMode$1[InsertionMode$1["IN_SELECT_IN_TABLE"] = 16] = "IN_SELECT_IN_TABLE";
	InsertionMode$1[InsertionMode$1["IN_TEMPLATE"] = 17] = "IN_TEMPLATE";
	InsertionMode$1[InsertionMode$1["AFTER_BODY"] = 18] = "AFTER_BODY";
	InsertionMode$1[InsertionMode$1["IN_FRAMESET"] = 19] = "IN_FRAMESET";
	InsertionMode$1[InsertionMode$1["AFTER_FRAMESET"] = 20] = "AFTER_FRAMESET";
	InsertionMode$1[InsertionMode$1["AFTER_AFTER_BODY"] = 21] = "AFTER_AFTER_BODY";
	InsertionMode$1[InsertionMode$1["AFTER_AFTER_FRAMESET"] = 22] = "AFTER_AFTER_FRAMESET";
})(InsertionMode || (InsertionMode = {}));
const BASE_LOC = {
	startLine: -1,
	startCol: -1,
	startOffset: -1,
	endLine: -1,
	endCol: -1,
	endOffset: -1
};
const TABLE_STRUCTURE_TAGS = new Set([
	TAG_ID.TABLE,
	TAG_ID.TBODY,
	TAG_ID.TFOOT,
	TAG_ID.THEAD,
	TAG_ID.TR
]);
const defaultParserOptions = {
	scriptingEnabled: true,
	sourceCodeLocationInfo: false,
	treeAdapter: defaultTreeAdapter,
	onParseError: null
};
var Parser = class {
	constructor(options, document, fragmentContext = null, scriptHandler = null) {
		this.fragmentContext = fragmentContext;
		this.scriptHandler = scriptHandler;
		this.currentToken = null;
		this.stopped = false;
		/** @internal */
		this.insertionMode = InsertionMode.INITIAL;
		/** @internal */
		this.originalInsertionMode = InsertionMode.INITIAL;
		/** @internal */
		this.headElement = null;
		/** @internal */
		this.formElement = null;
		/** Indicates that the current node is not an element in the HTML namespace */
		this.currentNotInHTML = false;
		/**
		* The template insertion mode stack is maintained from the left.
		* Ie. the topmost element will always have index 0.
		*
		* @internal
		*/
		this.tmplInsertionModeStack = [];
		/** @internal */
		this.pendingCharacterTokens = [];
		/** @internal */
		this.hasNonWhitespacePendingCharacterToken = false;
		/** @internal */
		this.framesetOk = true;
		/** @internal */
		this.skipNextNewLine = false;
		/** @internal */
		this.fosterParentingEnabled = false;
		this.options = {
			...defaultParserOptions,
			...options
		};
		this.treeAdapter = this.options.treeAdapter;
		this.onParseError = this.options.onParseError;
		if (this.onParseError) this.options.sourceCodeLocationInfo = true;
		this.document = document !== null && document !== void 0 ? document : this.treeAdapter.createDocument();
		this.tokenizer = new Tokenizer(this.options, this);
		this.activeFormattingElements = new FormattingElementList(this.treeAdapter);
		this.fragmentContextID = fragmentContext ? getTagID(this.treeAdapter.getTagName(fragmentContext)) : TAG_ID.UNKNOWN;
		this._setContextModes(fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : this.document, this.fragmentContextID);
		this.openElements = new OpenElementStack(this.document, this.treeAdapter, this);
	}
	static parse(html, options) {
		const parser = new this(options);
		parser.tokenizer.write(html, true);
		return parser.document;
	}
	static getFragmentParser(fragmentContext, options) {
		const opts = {
			...defaultParserOptions,
			...options
		};
		fragmentContext !== null && fragmentContext !== void 0 || (fragmentContext = opts.treeAdapter.createElement(TAG_NAMES.TEMPLATE, NS.HTML, []));
		const documentMock = opts.treeAdapter.createElement("documentmock", NS.HTML, []);
		const parser = new this(opts, documentMock, fragmentContext);
		if (parser.fragmentContextID === TAG_ID.TEMPLATE) parser.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
		parser._initTokenizerForFragmentParsing();
		parser._insertFakeRootElement();
		parser._resetInsertionMode();
		parser._findFormInFragmentContext();
		return parser;
	}
	getFragment() {
		const rootElement = this.treeAdapter.getFirstChild(this.document);
		const fragment = this.treeAdapter.createDocumentFragment();
		this._adoptNodes(rootElement, fragment);
		return fragment;
	}
	/** @internal */
	_err(token, code, beforeToken) {
		var _a$1;
		if (!this.onParseError) return;
		const loc = (_a$1 = token.location) !== null && _a$1 !== void 0 ? _a$1 : BASE_LOC;
		this.onParseError({
			code,
			startLine: loc.startLine,
			startCol: loc.startCol,
			startOffset: loc.startOffset,
			endLine: beforeToken ? loc.startLine : loc.endLine,
			endCol: beforeToken ? loc.startCol : loc.endCol,
			endOffset: beforeToken ? loc.startOffset : loc.endOffset
		});
	}
	/** @internal */
	onItemPush(node, tid, isTop) {
		var _a$1, _b;
		(_b = (_a$1 = this.treeAdapter).onItemPush) === null || _b === void 0 || _b.call(_a$1, node);
		if (isTop && this.openElements.stackTop > 0) this._setContextModes(node, tid);
	}
	/** @internal */
	onItemPop(node, isTop) {
		var _a$1, _b;
		if (this.options.sourceCodeLocationInfo) this._setEndLocation(node, this.currentToken);
		(_b = (_a$1 = this.treeAdapter).onItemPop) === null || _b === void 0 || _b.call(_a$1, node, this.openElements.current);
		if (isTop) {
			let current;
			let currentTagId;
			if (this.openElements.stackTop === 0 && this.fragmentContext) {
				current = this.fragmentContext;
				currentTagId = this.fragmentContextID;
			} else ({current, currentTagId} = this.openElements);
			this._setContextModes(current, currentTagId);
		}
	}
	_setContextModes(current, tid) {
		const isHTML = current === this.document || current && this.treeAdapter.getNamespaceURI(current) === NS.HTML;
		this.currentNotInHTML = !isHTML;
		this.tokenizer.inForeignNode = !isHTML && current !== void 0 && tid !== void 0 && !this._isIntegrationPoint(tid, current);
	}
	/** @protected */
	_switchToTextParsing(currentToken, nextTokenizerState) {
		this._insertElement(currentToken, NS.HTML);
		this.tokenizer.state = nextTokenizerState;
		this.originalInsertionMode = this.insertionMode;
		this.insertionMode = InsertionMode.TEXT;
	}
	switchToPlaintextParsing() {
		this.insertionMode = InsertionMode.TEXT;
		this.originalInsertionMode = InsertionMode.IN_BODY;
		this.tokenizer.state = TokenizerMode.PLAINTEXT;
	}
	/** @protected */
	_getAdjustedCurrentElement() {
		return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
	}
	/** @protected */
	_findFormInFragmentContext() {
		let node = this.fragmentContext;
		while (node) {
			if (this.treeAdapter.getTagName(node) === TAG_NAMES.FORM) {
				this.formElement = node;
				break;
			}
			node = this.treeAdapter.getParentNode(node);
		}
	}
	_initTokenizerForFragmentParsing() {
		if (!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== NS.HTML) return;
		switch (this.fragmentContextID) {
			case TAG_ID.TITLE:
			case TAG_ID.TEXTAREA:
				this.tokenizer.state = TokenizerMode.RCDATA;
				break;
			case TAG_ID.STYLE:
			case TAG_ID.XMP:
			case TAG_ID.IFRAME:
			case TAG_ID.NOEMBED:
			case TAG_ID.NOFRAMES:
			case TAG_ID.NOSCRIPT:
				this.tokenizer.state = TokenizerMode.RAWTEXT;
				break;
			case TAG_ID.SCRIPT:
				this.tokenizer.state = TokenizerMode.SCRIPT_DATA;
				break;
			case TAG_ID.PLAINTEXT:
				this.tokenizer.state = TokenizerMode.PLAINTEXT;
				break;
			default:
		}
	}
	/** @protected */
	_setDocumentType(token) {
		this.treeAdapter.setDocumentType(this.document, token.name || "", token.publicId || "", token.systemId || "");
		if (token.location) {
			const docTypeNode = this.treeAdapter.getChildNodes(this.document).find((node) => this.treeAdapter.isDocumentTypeNode(node));
			if (docTypeNode) this.treeAdapter.setNodeSourceCodeLocation(docTypeNode, token.location);
		}
	}
	/** @protected */
	_attachElementToTree(element, location) {
		if (this.options.sourceCodeLocationInfo) {
			const loc = location && {
				...location,
				startTag: location
			};
			this.treeAdapter.setNodeSourceCodeLocation(element, loc);
		}
		if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(element);
		else {
			const parent = this.openElements.currentTmplContentOrNode;
			this.treeAdapter.appendChild(parent !== null && parent !== void 0 ? parent : this.document, element);
		}
	}
	/**
	* For self-closing tags. Add an element to the tree, but skip adding it
	* to the stack.
	*/
	/** @protected */
	_appendElement(token, namespaceURI) {
		const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
		this._attachElementToTree(element, token.location);
	}
	/** @protected */
	_insertElement(token, namespaceURI) {
		const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
		this._attachElementToTree(element, token.location);
		this.openElements.push(element, token.tagID);
	}
	/** @protected */
	_insertFakeElement(tagName, tagID) {
		const element = this.treeAdapter.createElement(tagName, NS.HTML, []);
		this._attachElementToTree(element, null);
		this.openElements.push(element, tagID);
	}
	/** @protected */
	_insertTemplate(token) {
		const tmpl = this.treeAdapter.createElement(token.tagName, NS.HTML, token.attrs);
		const content = this.treeAdapter.createDocumentFragment();
		this.treeAdapter.setTemplateContent(tmpl, content);
		this._attachElementToTree(tmpl, token.location);
		this.openElements.push(tmpl, token.tagID);
		if (this.options.sourceCodeLocationInfo) this.treeAdapter.setNodeSourceCodeLocation(content, null);
	}
	/** @protected */
	_insertFakeRootElement() {
		const element = this.treeAdapter.createElement(TAG_NAMES.HTML, NS.HTML, []);
		if (this.options.sourceCodeLocationInfo) this.treeAdapter.setNodeSourceCodeLocation(element, null);
		this.treeAdapter.appendChild(this.openElements.current, element);
		this.openElements.push(element, TAG_ID.HTML);
	}
	/** @protected */
	_appendCommentNode(token, parent) {
		const commentNode = this.treeAdapter.createCommentNode(token.data);
		this.treeAdapter.appendChild(parent, commentNode);
		if (this.options.sourceCodeLocationInfo) this.treeAdapter.setNodeSourceCodeLocation(commentNode, token.location);
	}
	/** @protected */
	_insertCharacters(token) {
		let parent;
		let beforeElement;
		if (this._shouldFosterParentOnInsertion()) {
			({parent, beforeElement} = this._findFosterParentingLocation());
			if (beforeElement) this.treeAdapter.insertTextBefore(parent, token.chars, beforeElement);
			else this.treeAdapter.insertText(parent, token.chars);
		} else {
			parent = this.openElements.currentTmplContentOrNode;
			this.treeAdapter.insertText(parent, token.chars);
		}
		if (!token.location) return;
		const siblings = this.treeAdapter.getChildNodes(parent);
		const textNode = siblings[(beforeElement ? siblings.lastIndexOf(beforeElement) : siblings.length) - 1];
		if (this.treeAdapter.getNodeSourceCodeLocation(textNode)) {
			const { endLine, endCol, endOffset } = token.location;
			this.treeAdapter.updateNodeSourceCodeLocation(textNode, {
				endLine,
				endCol,
				endOffset
			});
		} else if (this.options.sourceCodeLocationInfo) this.treeAdapter.setNodeSourceCodeLocation(textNode, token.location);
	}
	/** @protected */
	_adoptNodes(donor, recipient) {
		for (let child = this.treeAdapter.getFirstChild(donor); child; child = this.treeAdapter.getFirstChild(donor)) {
			this.treeAdapter.detachNode(child);
			this.treeAdapter.appendChild(recipient, child);
		}
	}
	/** @protected */
	_setEndLocation(element, closingToken) {
		if (this.treeAdapter.getNodeSourceCodeLocation(element) && closingToken.location) {
			const ctLoc = closingToken.location;
			const tn = this.treeAdapter.getTagName(element);
			const endLoc = closingToken.type === TokenType.END_TAG && tn === closingToken.tagName ? {
				endTag: { ...ctLoc },
				endLine: ctLoc.endLine,
				endCol: ctLoc.endCol,
				endOffset: ctLoc.endOffset
			} : {
				endLine: ctLoc.startLine,
				endCol: ctLoc.startCol,
				endOffset: ctLoc.startOffset
			};
			this.treeAdapter.updateNodeSourceCodeLocation(element, endLoc);
		}
	}
	shouldProcessStartTagTokenInForeignContent(token) {
		if (!this.currentNotInHTML) return false;
		let current;
		let currentTagId;
		if (this.openElements.stackTop === 0 && this.fragmentContext) {
			current = this.fragmentContext;
			currentTagId = this.fragmentContextID;
		} else ({current, currentTagId} = this.openElements);
		if (token.tagID === TAG_ID.SVG && this.treeAdapter.getTagName(current) === TAG_NAMES.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(current) === NS.MATHML) return false;
		return this.tokenizer.inForeignNode || (token.tagID === TAG_ID.MGLYPH || token.tagID === TAG_ID.MALIGNMARK) && currentTagId !== void 0 && !this._isIntegrationPoint(currentTagId, current, NS.HTML);
	}
	/** @protected */
	_processToken(token) {
		switch (token.type) {
			case TokenType.CHARACTER:
				this.onCharacter(token);
				break;
			case TokenType.NULL_CHARACTER:
				this.onNullCharacter(token);
				break;
			case TokenType.COMMENT:
				this.onComment(token);
				break;
			case TokenType.DOCTYPE:
				this.onDoctype(token);
				break;
			case TokenType.START_TAG:
				this._processStartTag(token);
				break;
			case TokenType.END_TAG:
				this.onEndTag(token);
				break;
			case TokenType.EOF:
				this.onEof(token);
				break;
			case TokenType.WHITESPACE_CHARACTER:
				this.onWhitespaceCharacter(token);
				break;
		}
	}
	/** @protected */
	_isIntegrationPoint(tid, element, foreignNS) {
		const ns = this.treeAdapter.getNamespaceURI(element);
		const attrs = this.treeAdapter.getAttrList(element);
		return isIntegrationPoint(tid, ns, attrs, foreignNS);
	}
	/** @protected */
	_reconstructActiveFormattingElements() {
		const listLength = this.activeFormattingElements.entries.length;
		if (listLength) {
			const endIndex = this.activeFormattingElements.entries.findIndex((entry) => entry.type === EntryType.Marker || this.openElements.contains(entry.element));
			const unopenIdx = endIndex === -1 ? listLength - 1 : endIndex - 1;
			for (let i = unopenIdx; i >= 0; i--) {
				const entry = this.activeFormattingElements.entries[i];
				this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
				entry.element = this.openElements.current;
			}
		}
	}
	/** @protected */
	_closeTableCell() {
		this.openElements.generateImpliedEndTags();
		this.openElements.popUntilTableCellPopped();
		this.activeFormattingElements.clearToLastMarker();
		this.insertionMode = InsertionMode.IN_ROW;
	}
	/** @protected */
	_closePElement() {
		this.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.P);
		this.openElements.popUntilTagNamePopped(TAG_ID.P);
	}
	/** @protected */
	_resetInsertionMode() {
		for (let i = this.openElements.stackTop; i >= 0; i--) switch (i === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[i]) {
			case TAG_ID.TR:
				this.insertionMode = InsertionMode.IN_ROW;
				return;
			case TAG_ID.TBODY:
			case TAG_ID.THEAD:
			case TAG_ID.TFOOT:
				this.insertionMode = InsertionMode.IN_TABLE_BODY;
				return;
			case TAG_ID.CAPTION:
				this.insertionMode = InsertionMode.IN_CAPTION;
				return;
			case TAG_ID.COLGROUP:
				this.insertionMode = InsertionMode.IN_COLUMN_GROUP;
				return;
			case TAG_ID.TABLE:
				this.insertionMode = InsertionMode.IN_TABLE;
				return;
			case TAG_ID.BODY:
				this.insertionMode = InsertionMode.IN_BODY;
				return;
			case TAG_ID.FRAMESET:
				this.insertionMode = InsertionMode.IN_FRAMESET;
				return;
			case TAG_ID.SELECT:
				this._resetInsertionModeForSelect(i);
				return;
			case TAG_ID.TEMPLATE:
				this.insertionMode = this.tmplInsertionModeStack[0];
				return;
			case TAG_ID.HTML:
				this.insertionMode = this.headElement ? InsertionMode.AFTER_HEAD : InsertionMode.BEFORE_HEAD;
				return;
			case TAG_ID.TD:
			case TAG_ID.TH:
				if (i > 0) {
					this.insertionMode = InsertionMode.IN_CELL;
					return;
				}
				break;
			case TAG_ID.HEAD:
				if (i > 0) {
					this.insertionMode = InsertionMode.IN_HEAD;
					return;
				}
				break;
		}
		this.insertionMode = InsertionMode.IN_BODY;
	}
	/** @protected */
	_resetInsertionModeForSelect(selectIdx) {
		if (selectIdx > 0) for (let i = selectIdx - 1; i > 0; i--) {
			const tn = this.openElements.tagIDs[i];
			if (tn === TAG_ID.TEMPLATE) break;
			else if (tn === TAG_ID.TABLE) {
				this.insertionMode = InsertionMode.IN_SELECT_IN_TABLE;
				return;
			}
		}
		this.insertionMode = InsertionMode.IN_SELECT;
	}
	/** @protected */
	_isElementCausesFosterParenting(tn) {
		return TABLE_STRUCTURE_TAGS.has(tn);
	}
	/** @protected */
	_shouldFosterParentOnInsertion() {
		return this.fosterParentingEnabled && this.openElements.currentTagId !== void 0 && this._isElementCausesFosterParenting(this.openElements.currentTagId);
	}
	/** @protected */
	_findFosterParentingLocation() {
		for (let i = this.openElements.stackTop; i >= 0; i--) {
			const openElement = this.openElements.items[i];
			switch (this.openElements.tagIDs[i]) {
				case TAG_ID.TEMPLATE:
					if (this.treeAdapter.getNamespaceURI(openElement) === NS.HTML) return {
						parent: this.treeAdapter.getTemplateContent(openElement),
						beforeElement: null
					};
					break;
				case TAG_ID.TABLE: {
					const parent = this.treeAdapter.getParentNode(openElement);
					if (parent) return {
						parent,
						beforeElement: openElement
					};
					return {
						parent: this.openElements.items[i - 1],
						beforeElement: null
					};
				}
				default:
			}
		}
		return {
			parent: this.openElements.items[0],
			beforeElement: null
		};
	}
	/** @protected */
	_fosterParentElement(element) {
		const location = this._findFosterParentingLocation();
		if (location.beforeElement) this.treeAdapter.insertBefore(location.parent, element, location.beforeElement);
		else this.treeAdapter.appendChild(location.parent, element);
	}
	/** @protected */
	_isSpecialElement(element, id) {
		return SPECIAL_ELEMENTS[this.treeAdapter.getNamespaceURI(element)].has(id);
	}
	/** @internal */
	onCharacter(token) {
		this.skipNextNewLine = false;
		if (this.tokenizer.inForeignNode) {
			characterInForeignContent(this, token);
			return;
		}
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, token);
				break;
			case InsertionMode.BEFORE_HTML:
				tokenBeforeHtml(this, token);
				break;
			case InsertionMode.BEFORE_HEAD:
				tokenBeforeHead(this, token);
				break;
			case InsertionMode.IN_HEAD:
				tokenInHead(this, token);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				tokenInHeadNoScript(this, token);
				break;
			case InsertionMode.AFTER_HEAD:
				tokenAfterHead(this, token);
				break;
			case InsertionMode.IN_BODY:
			case InsertionMode.IN_CAPTION:
			case InsertionMode.IN_CELL:
			case InsertionMode.IN_TEMPLATE:
				characterInBody(this, token);
				break;
			case InsertionMode.TEXT:
			case InsertionMode.IN_SELECT:
			case InsertionMode.IN_SELECT_IN_TABLE:
				this._insertCharacters(token);
				break;
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
				characterInTable(this, token);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				characterInTableText(this, token);
				break;
			case InsertionMode.IN_COLUMN_GROUP:
				tokenInColumnGroup(this, token);
				break;
			case InsertionMode.AFTER_BODY:
				tokenAfterBody(this, token);
				break;
			case InsertionMode.AFTER_AFTER_BODY:
				tokenAfterAfterBody(this, token);
				break;
			default:
		}
	}
	/** @internal */
	onNullCharacter(token) {
		this.skipNextNewLine = false;
		if (this.tokenizer.inForeignNode) {
			nullCharacterInForeignContent(this, token);
			return;
		}
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, token);
				break;
			case InsertionMode.BEFORE_HTML:
				tokenBeforeHtml(this, token);
				break;
			case InsertionMode.BEFORE_HEAD:
				tokenBeforeHead(this, token);
				break;
			case InsertionMode.IN_HEAD:
				tokenInHead(this, token);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				tokenInHeadNoScript(this, token);
				break;
			case InsertionMode.AFTER_HEAD:
				tokenAfterHead(this, token);
				break;
			case InsertionMode.TEXT:
				this._insertCharacters(token);
				break;
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
				characterInTable(this, token);
				break;
			case InsertionMode.IN_COLUMN_GROUP:
				tokenInColumnGroup(this, token);
				break;
			case InsertionMode.AFTER_BODY:
				tokenAfterBody(this, token);
				break;
			case InsertionMode.AFTER_AFTER_BODY:
				tokenAfterAfterBody(this, token);
				break;
			default:
		}
	}
	/** @internal */
	onComment(token) {
		this.skipNextNewLine = false;
		if (this.currentNotInHTML) {
			appendComment(this, token);
			return;
		}
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
			case InsertionMode.BEFORE_HTML:
			case InsertionMode.BEFORE_HEAD:
			case InsertionMode.IN_HEAD:
			case InsertionMode.IN_HEAD_NO_SCRIPT:
			case InsertionMode.AFTER_HEAD:
			case InsertionMode.IN_BODY:
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_CAPTION:
			case InsertionMode.IN_COLUMN_GROUP:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
			case InsertionMode.IN_CELL:
			case InsertionMode.IN_SELECT:
			case InsertionMode.IN_SELECT_IN_TABLE:
			case InsertionMode.IN_TEMPLATE:
			case InsertionMode.IN_FRAMESET:
			case InsertionMode.AFTER_FRAMESET:
				appendComment(this, token);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				tokenInTableText(this, token);
				break;
			case InsertionMode.AFTER_BODY:
				appendCommentToRootHtmlElement(this, token);
				break;
			case InsertionMode.AFTER_AFTER_BODY:
			case InsertionMode.AFTER_AFTER_FRAMESET:
				appendCommentToDocument(this, token);
				break;
			default:
		}
	}
	/** @internal */
	onDoctype(token) {
		this.skipNextNewLine = false;
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				doctypeInInitialMode(this, token);
				break;
			case InsertionMode.BEFORE_HEAD:
			case InsertionMode.IN_HEAD:
			case InsertionMode.IN_HEAD_NO_SCRIPT:
			case InsertionMode.AFTER_HEAD:
				this._err(token, ERR.misplacedDoctype);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				tokenInTableText(this, token);
				break;
			default:
		}
	}
	/** @internal */
	onStartTag(token) {
		this.skipNextNewLine = false;
		this.currentToken = token;
		this._processStartTag(token);
		if (token.selfClosing && !token.ackSelfClosing) this._err(token, ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
	}
	/**
	* Processes a given start tag.
	*
	* `onStartTag` checks if a self-closing tag was recognized. When a token
	* is moved inbetween multiple insertion modes, this check for self-closing
	* could lead to false positives. To avoid this, `_processStartTag` is used
	* for nested calls.
	*
	* @param token The token to process.
	* @protected
	*/
	_processStartTag(token) {
		if (this.shouldProcessStartTagTokenInForeignContent(token)) startTagInForeignContent(this, token);
		else this._startTagOutsideForeignContent(token);
	}
	/** @protected */
	_startTagOutsideForeignContent(token) {
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, token);
				break;
			case InsertionMode.BEFORE_HTML:
				startTagBeforeHtml(this, token);
				break;
			case InsertionMode.BEFORE_HEAD:
				startTagBeforeHead(this, token);
				break;
			case InsertionMode.IN_HEAD:
				startTagInHead(this, token);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				startTagInHeadNoScript(this, token);
				break;
			case InsertionMode.AFTER_HEAD:
				startTagAfterHead(this, token);
				break;
			case InsertionMode.IN_BODY:
				startTagInBody(this, token);
				break;
			case InsertionMode.IN_TABLE:
				startTagInTable(this, token);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				tokenInTableText(this, token);
				break;
			case InsertionMode.IN_CAPTION:
				startTagInCaption(this, token);
				break;
			case InsertionMode.IN_COLUMN_GROUP:
				startTagInColumnGroup(this, token);
				break;
			case InsertionMode.IN_TABLE_BODY:
				startTagInTableBody(this, token);
				break;
			case InsertionMode.IN_ROW:
				startTagInRow(this, token);
				break;
			case InsertionMode.IN_CELL:
				startTagInCell(this, token);
				break;
			case InsertionMode.IN_SELECT:
				startTagInSelect(this, token);
				break;
			case InsertionMode.IN_SELECT_IN_TABLE:
				startTagInSelectInTable(this, token);
				break;
			case InsertionMode.IN_TEMPLATE:
				startTagInTemplate(this, token);
				break;
			case InsertionMode.AFTER_BODY:
				startTagAfterBody(this, token);
				break;
			case InsertionMode.IN_FRAMESET:
				startTagInFrameset(this, token);
				break;
			case InsertionMode.AFTER_FRAMESET:
				startTagAfterFrameset(this, token);
				break;
			case InsertionMode.AFTER_AFTER_BODY:
				startTagAfterAfterBody(this, token);
				break;
			case InsertionMode.AFTER_AFTER_FRAMESET:
				startTagAfterAfterFrameset(this, token);
				break;
			default:
		}
	}
	/** @internal */
	onEndTag(token) {
		this.skipNextNewLine = false;
		this.currentToken = token;
		if (this.currentNotInHTML) endTagInForeignContent(this, token);
		else this._endTagOutsideForeignContent(token);
	}
	/** @protected */
	_endTagOutsideForeignContent(token) {
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, token);
				break;
			case InsertionMode.BEFORE_HTML:
				endTagBeforeHtml(this, token);
				break;
			case InsertionMode.BEFORE_HEAD:
				endTagBeforeHead(this, token);
				break;
			case InsertionMode.IN_HEAD:
				endTagInHead(this, token);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				endTagInHeadNoScript(this, token);
				break;
			case InsertionMode.AFTER_HEAD:
				endTagAfterHead(this, token);
				break;
			case InsertionMode.IN_BODY:
				endTagInBody(this, token);
				break;
			case InsertionMode.TEXT:
				endTagInText(this, token);
				break;
			case InsertionMode.IN_TABLE:
				endTagInTable(this, token);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				tokenInTableText(this, token);
				break;
			case InsertionMode.IN_CAPTION:
				endTagInCaption(this, token);
				break;
			case InsertionMode.IN_COLUMN_GROUP:
				endTagInColumnGroup(this, token);
				break;
			case InsertionMode.IN_TABLE_BODY:
				endTagInTableBody(this, token);
				break;
			case InsertionMode.IN_ROW:
				endTagInRow(this, token);
				break;
			case InsertionMode.IN_CELL:
				endTagInCell(this, token);
				break;
			case InsertionMode.IN_SELECT:
				endTagInSelect(this, token);
				break;
			case InsertionMode.IN_SELECT_IN_TABLE:
				endTagInSelectInTable(this, token);
				break;
			case InsertionMode.IN_TEMPLATE:
				endTagInTemplate(this, token);
				break;
			case InsertionMode.AFTER_BODY:
				endTagAfterBody(this, token);
				break;
			case InsertionMode.IN_FRAMESET:
				endTagInFrameset(this, token);
				break;
			case InsertionMode.AFTER_FRAMESET:
				endTagAfterFrameset(this, token);
				break;
			case InsertionMode.AFTER_AFTER_BODY:
				tokenAfterAfterBody(this, token);
				break;
			default:
		}
	}
	/** @internal */
	onEof(token) {
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, token);
				break;
			case InsertionMode.BEFORE_HTML:
				tokenBeforeHtml(this, token);
				break;
			case InsertionMode.BEFORE_HEAD:
				tokenBeforeHead(this, token);
				break;
			case InsertionMode.IN_HEAD:
				tokenInHead(this, token);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				tokenInHeadNoScript(this, token);
				break;
			case InsertionMode.AFTER_HEAD:
				tokenAfterHead(this, token);
				break;
			case InsertionMode.IN_BODY:
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_CAPTION:
			case InsertionMode.IN_COLUMN_GROUP:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
			case InsertionMode.IN_CELL:
			case InsertionMode.IN_SELECT:
			case InsertionMode.IN_SELECT_IN_TABLE:
				eofInBody(this, token);
				break;
			case InsertionMode.TEXT:
				eofInText(this, token);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				tokenInTableText(this, token);
				break;
			case InsertionMode.IN_TEMPLATE:
				eofInTemplate(this, token);
				break;
			case InsertionMode.AFTER_BODY:
			case InsertionMode.IN_FRAMESET:
			case InsertionMode.AFTER_FRAMESET:
			case InsertionMode.AFTER_AFTER_BODY:
			case InsertionMode.AFTER_AFTER_FRAMESET:
				stopParsing(this, token);
				break;
			default:
		}
	}
	/** @internal */
	onWhitespaceCharacter(token) {
		if (this.skipNextNewLine) {
			this.skipNextNewLine = false;
			if (token.chars.charCodeAt(0) === CODE_POINTS.LINE_FEED) {
				if (token.chars.length === 1) return;
				token.chars = token.chars.substr(1);
			}
		}
		if (this.tokenizer.inForeignNode) {
			this._insertCharacters(token);
			return;
		}
		switch (this.insertionMode) {
			case InsertionMode.IN_HEAD:
			case InsertionMode.IN_HEAD_NO_SCRIPT:
			case InsertionMode.AFTER_HEAD:
			case InsertionMode.TEXT:
			case InsertionMode.IN_COLUMN_GROUP:
			case InsertionMode.IN_SELECT:
			case InsertionMode.IN_SELECT_IN_TABLE:
			case InsertionMode.IN_FRAMESET:
			case InsertionMode.AFTER_FRAMESET:
				this._insertCharacters(token);
				break;
			case InsertionMode.IN_BODY:
			case InsertionMode.IN_CAPTION:
			case InsertionMode.IN_CELL:
			case InsertionMode.IN_TEMPLATE:
			case InsertionMode.AFTER_BODY:
			case InsertionMode.AFTER_AFTER_BODY:
			case InsertionMode.AFTER_AFTER_FRAMESET:
				whitespaceCharacterInBody(this, token);
				break;
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
				characterInTable(this, token);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				whitespaceCharacterInTableText(this, token);
				break;
			default:
		}
	}
};
function aaObtainFormattingElementEntry(p, token) {
	let formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);
	if (formattingElementEntry) {
		if (!p.openElements.contains(formattingElementEntry.element)) {
			p.activeFormattingElements.removeEntry(formattingElementEntry);
			formattingElementEntry = null;
		} else if (!p.openElements.hasInScope(token.tagID)) formattingElementEntry = null;
	} else genericEndTagInBody(p, token);
	return formattingElementEntry;
}
function aaObtainFurthestBlock(p, formattingElementEntry) {
	let furthestBlock = null;
	let idx = p.openElements.stackTop;
	for (; idx >= 0; idx--) {
		const element = p.openElements.items[idx];
		if (element === formattingElementEntry.element) break;
		if (p._isSpecialElement(element, p.openElements.tagIDs[idx])) furthestBlock = element;
	}
	if (!furthestBlock) {
		p.openElements.shortenToLength(Math.max(idx, 0));
		p.activeFormattingElements.removeEntry(formattingElementEntry);
	}
	return furthestBlock;
}
function aaInnerLoop(p, furthestBlock, formattingElement) {
	let lastElement = furthestBlock;
	let nextElement = p.openElements.getCommonAncestor(furthestBlock);
	for (let i = 0, element = nextElement; element !== formattingElement; i++, element = nextElement) {
		nextElement = p.openElements.getCommonAncestor(element);
		const elementEntry = p.activeFormattingElements.getElementEntry(element);
		const counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER;
		if (!elementEntry || counterOverflow) {
			if (counterOverflow) p.activeFormattingElements.removeEntry(elementEntry);
			p.openElements.remove(element);
		} else {
			element = aaRecreateElementFromEntry(p, elementEntry);
			if (lastElement === furthestBlock) p.activeFormattingElements.bookmark = elementEntry;
			p.treeAdapter.detachNode(lastElement);
			p.treeAdapter.appendChild(element, lastElement);
			lastElement = element;
		}
	}
	return lastElement;
}
function aaRecreateElementFromEntry(p, elementEntry) {
	const ns = p.treeAdapter.getNamespaceURI(elementEntry.element);
	const newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
	p.openElements.replace(elementEntry.element, newElement);
	elementEntry.element = newElement;
	return newElement;
}
function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
	const tid = getTagID(p.treeAdapter.getTagName(commonAncestor));
	if (p._isElementCausesFosterParenting(tid)) p._fosterParentElement(lastElement);
	else {
		const ns = p.treeAdapter.getNamespaceURI(commonAncestor);
		if (tid === TAG_ID.TEMPLATE && ns === NS.HTML) commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);
		p.treeAdapter.appendChild(commonAncestor, lastElement);
	}
}
function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
	const ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element);
	const { token } = formattingElementEntry;
	const newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);
	p._adoptNodes(furthestBlock, newElement);
	p.treeAdapter.appendChild(furthestBlock, newElement);
	p.activeFormattingElements.insertElementAfterBookmark(newElement, token);
	p.activeFormattingElements.removeEntry(formattingElementEntry);
	p.openElements.remove(formattingElementEntry.element);
	p.openElements.insertAfter(furthestBlock, newElement, token.tagID);
}
function callAdoptionAgency(p, token) {
	for (let i = 0; i < AA_OUTER_LOOP_ITER; i++) {
		const formattingElementEntry = aaObtainFormattingElementEntry(p, token);
		if (!formattingElementEntry) break;
		const furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);
		if (!furthestBlock) break;
		p.activeFormattingElements.bookmark = formattingElementEntry;
		const lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element);
		const commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);
		p.treeAdapter.detachNode(lastElement);
		if (commonAncestor) aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
		aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
	}
}
function appendComment(p, token) {
	p._appendCommentNode(token, p.openElements.currentTmplContentOrNode);
}
function appendCommentToRootHtmlElement(p, token) {
	p._appendCommentNode(token, p.openElements.items[0]);
}
function appendCommentToDocument(p, token) {
	p._appendCommentNode(token, p.document);
}
function stopParsing(p, token) {
	p.stopped = true;
	if (token.location) {
		const target = p.fragmentContext ? 0 : 2;
		for (let i = p.openElements.stackTop; i >= target; i--) p._setEndLocation(p.openElements.items[i], token);
		if (!p.fragmentContext && p.openElements.stackTop >= 0) {
			const htmlElement = p.openElements.items[0];
			const htmlLocation = p.treeAdapter.getNodeSourceCodeLocation(htmlElement);
			if (htmlLocation && !htmlLocation.endTag) {
				p._setEndLocation(htmlElement, token);
				if (p.openElements.stackTop >= 1) {
					const bodyElement = p.openElements.items[1];
					const bodyLocation = p.treeAdapter.getNodeSourceCodeLocation(bodyElement);
					if (bodyLocation && !bodyLocation.endTag) p._setEndLocation(bodyElement, token);
				}
			}
		}
	}
}
function doctypeInInitialMode(p, token) {
	p._setDocumentType(token);
	const mode = token.forceQuirks ? DOCUMENT_MODE.QUIRKS : getDocumentMode(token);
	if (!isConforming(token)) p._err(token, ERR.nonConformingDoctype);
	p.treeAdapter.setDocumentMode(p.document, mode);
	p.insertionMode = InsertionMode.BEFORE_HTML;
}
function tokenInInitialMode(p, token) {
	p._err(token, ERR.missingDoctype, true);
	p.treeAdapter.setDocumentMode(p.document, DOCUMENT_MODE.QUIRKS);
	p.insertionMode = InsertionMode.BEFORE_HTML;
	p._processToken(token);
}
function startTagBeforeHtml(p, token) {
	if (token.tagID === TAG_ID.HTML) {
		p._insertElement(token, NS.HTML);
		p.insertionMode = InsertionMode.BEFORE_HEAD;
	} else tokenBeforeHtml(p, token);
}
function endTagBeforeHtml(p, token) {
	const tn = token.tagID;
	if (tn === TAG_ID.HTML || tn === TAG_ID.HEAD || tn === TAG_ID.BODY || tn === TAG_ID.BR) tokenBeforeHtml(p, token);
}
function tokenBeforeHtml(p, token) {
	p._insertFakeRootElement();
	p.insertionMode = InsertionMode.BEFORE_HEAD;
	p._processToken(token);
}
function startTagBeforeHead(p, token) {
	switch (token.tagID) {
		case TAG_ID.HTML:
			startTagInBody(p, token);
			break;
		case TAG_ID.HEAD:
			p._insertElement(token, NS.HTML);
			p.headElement = p.openElements.current;
			p.insertionMode = InsertionMode.IN_HEAD;
			break;
		default: tokenBeforeHead(p, token);
	}
}
function endTagBeforeHead(p, token) {
	const tn = token.tagID;
	if (tn === TAG_ID.HEAD || tn === TAG_ID.BODY || tn === TAG_ID.HTML || tn === TAG_ID.BR) tokenBeforeHead(p, token);
	else p._err(token, ERR.endTagWithoutMatchingOpenElement);
}
function tokenBeforeHead(p, token) {
	p._insertFakeElement(TAG_NAMES.HEAD, TAG_ID.HEAD);
	p.headElement = p.openElements.current;
	p.insertionMode = InsertionMode.IN_HEAD;
	p._processToken(token);
}
function startTagInHead(p, token) {
	switch (token.tagID) {
		case TAG_ID.HTML:
			startTagInBody(p, token);
			break;
		case TAG_ID.BASE:
		case TAG_ID.BASEFONT:
		case TAG_ID.BGSOUND:
		case TAG_ID.LINK:
		case TAG_ID.META:
			p._appendElement(token, NS.HTML);
			token.ackSelfClosing = true;
			break;
		case TAG_ID.TITLE:
			p._switchToTextParsing(token, TokenizerMode.RCDATA);
			break;
		case TAG_ID.NOSCRIPT:
			if (p.options.scriptingEnabled) p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
			else {
				p._insertElement(token, NS.HTML);
				p.insertionMode = InsertionMode.IN_HEAD_NO_SCRIPT;
			}
			break;
		case TAG_ID.NOFRAMES:
		case TAG_ID.STYLE:
			p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
			break;
		case TAG_ID.SCRIPT:
			p._switchToTextParsing(token, TokenizerMode.SCRIPT_DATA);
			break;
		case TAG_ID.TEMPLATE:
			p._insertTemplate(token);
			p.activeFormattingElements.insertMarker();
			p.framesetOk = false;
			p.insertionMode = InsertionMode.IN_TEMPLATE;
			p.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
			break;
		case TAG_ID.HEAD:
			p._err(token, ERR.misplacedStartTagForHeadElement);
			break;
		default: tokenInHead(p, token);
	}
}
function endTagInHead(p, token) {
	switch (token.tagID) {
		case TAG_ID.HEAD:
			p.openElements.pop();
			p.insertionMode = InsertionMode.AFTER_HEAD;
			break;
		case TAG_ID.BODY:
		case TAG_ID.BR:
		case TAG_ID.HTML:
			tokenInHead(p, token);
			break;
		case TAG_ID.TEMPLATE:
			templateEndTagInHead(p, token);
			break;
		default: p._err(token, ERR.endTagWithoutMatchingOpenElement);
	}
}
function templateEndTagInHead(p, token) {
	if (p.openElements.tmplCount > 0) {
		p.openElements.generateImpliedEndTagsThoroughly();
		if (p.openElements.currentTagId !== TAG_ID.TEMPLATE) p._err(token, ERR.closingOfElementWithOpenChildElements);
		p.openElements.popUntilTagNamePopped(TAG_ID.TEMPLATE);
		p.activeFormattingElements.clearToLastMarker();
		p.tmplInsertionModeStack.shift();
		p._resetInsertionMode();
	} else p._err(token, ERR.endTagWithoutMatchingOpenElement);
}
function tokenInHead(p, token) {
	p.openElements.pop();
	p.insertionMode = InsertionMode.AFTER_HEAD;
	p._processToken(token);
}
function startTagInHeadNoScript(p, token) {
	switch (token.tagID) {
		case TAG_ID.HTML:
			startTagInBody(p, token);
			break;
		case TAG_ID.BASEFONT:
		case TAG_ID.BGSOUND:
		case TAG_ID.HEAD:
		case TAG_ID.LINK:
		case TAG_ID.META:
		case TAG_ID.NOFRAMES:
		case TAG_ID.STYLE:
			startTagInHead(p, token);
			break;
		case TAG_ID.NOSCRIPT:
			p._err(token, ERR.nestedNoscriptInHead);
			break;
		default: tokenInHeadNoScript(p, token);
	}
}
function endTagInHeadNoScript(p, token) {
	switch (token.tagID) {
		case TAG_ID.NOSCRIPT:
			p.openElements.pop();
			p.insertionMode = InsertionMode.IN_HEAD;
			break;
		case TAG_ID.BR:
			tokenInHeadNoScript(p, token);
			break;
		default: p._err(token, ERR.endTagWithoutMatchingOpenElement);
	}
}
function tokenInHeadNoScript(p, token) {
	p._err(token, token.type === TokenType.EOF ? ERR.openElementsLeftAfterEof : ERR.disallowedContentInNoscriptInHead);
	p.openElements.pop();
	p.insertionMode = InsertionMode.IN_HEAD;
	p._processToken(token);
}
function startTagAfterHead(p, token) {
	switch (token.tagID) {
		case TAG_ID.HTML:
			startTagInBody(p, token);
			break;
		case TAG_ID.BODY:
			p._insertElement(token, NS.HTML);
			p.framesetOk = false;
			p.insertionMode = InsertionMode.IN_BODY;
			break;
		case TAG_ID.FRAMESET:
			p._insertElement(token, NS.HTML);
			p.insertionMode = InsertionMode.IN_FRAMESET;
			break;
		case TAG_ID.BASE:
		case TAG_ID.BASEFONT:
		case TAG_ID.BGSOUND:
		case TAG_ID.LINK:
		case TAG_ID.META:
		case TAG_ID.NOFRAMES:
		case TAG_ID.SCRIPT:
		case TAG_ID.STYLE:
		case TAG_ID.TEMPLATE:
		case TAG_ID.TITLE:
			p._err(token, ERR.abandonedHeadElementChild);
			p.openElements.push(p.headElement, TAG_ID.HEAD);
			startTagInHead(p, token);
			p.openElements.remove(p.headElement);
			break;
		case TAG_ID.HEAD:
			p._err(token, ERR.misplacedStartTagForHeadElement);
			break;
		default: tokenAfterHead(p, token);
	}
}
function endTagAfterHead(p, token) {
	switch (token.tagID) {
		case TAG_ID.BODY:
		case TAG_ID.HTML:
		case TAG_ID.BR:
			tokenAfterHead(p, token);
			break;
		case TAG_ID.TEMPLATE:
			templateEndTagInHead(p, token);
			break;
		default: p._err(token, ERR.endTagWithoutMatchingOpenElement);
	}
}
function tokenAfterHead(p, token) {
	p._insertFakeElement(TAG_NAMES.BODY, TAG_ID.BODY);
	p.insertionMode = InsertionMode.IN_BODY;
	modeInBody(p, token);
}
function modeInBody(p, token) {
	switch (token.type) {
		case TokenType.CHARACTER:
			characterInBody(p, token);
			break;
		case TokenType.WHITESPACE_CHARACTER:
			whitespaceCharacterInBody(p, token);
			break;
		case TokenType.COMMENT:
			appendComment(p, token);
			break;
		case TokenType.START_TAG:
			startTagInBody(p, token);
			break;
		case TokenType.END_TAG:
			endTagInBody(p, token);
			break;
		case TokenType.EOF:
			eofInBody(p, token);
			break;
		default:
	}
}
function whitespaceCharacterInBody(p, token) {
	p._reconstructActiveFormattingElements();
	p._insertCharacters(token);
}
function characterInBody(p, token) {
	p._reconstructActiveFormattingElements();
	p._insertCharacters(token);
	p.framesetOk = false;
}
function htmlStartTagInBody(p, token) {
	if (p.openElements.tmplCount === 0) p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
}
function bodyStartTagInBody(p, token) {
	const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
	if (bodyElement && p.openElements.tmplCount === 0) {
		p.framesetOk = false;
		p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
	}
}
function framesetStartTagInBody(p, token) {
	const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
	if (p.framesetOk && bodyElement) {
		p.treeAdapter.detachNode(bodyElement);
		p.openElements.popAllUpToHtmlElement();
		p._insertElement(token, NS.HTML);
		p.insertionMode = InsertionMode.IN_FRAMESET;
	}
}
function addressStartTagInBody(p, token) {
	if (p.openElements.hasInButtonScope(TAG_ID.P)) p._closePElement();
	p._insertElement(token, NS.HTML);
}
function numberedHeaderStartTagInBody(p, token) {
	if (p.openElements.hasInButtonScope(TAG_ID.P)) p._closePElement();
	if (p.openElements.currentTagId !== void 0 && NUMBERED_HEADERS.has(p.openElements.currentTagId)) p.openElements.pop();
	p._insertElement(token, NS.HTML);
}
function preStartTagInBody(p, token) {
	if (p.openElements.hasInButtonScope(TAG_ID.P)) p._closePElement();
	p._insertElement(token, NS.HTML);
	p.skipNextNewLine = true;
	p.framesetOk = false;
}
function formStartTagInBody(p, token) {
	const inTemplate = p.openElements.tmplCount > 0;
	if (!p.formElement || inTemplate) {
		if (p.openElements.hasInButtonScope(TAG_ID.P)) p._closePElement();
		p._insertElement(token, NS.HTML);
		if (!inTemplate) p.formElement = p.openElements.current;
	}
}
function listItemStartTagInBody(p, token) {
	p.framesetOk = false;
	const tn = token.tagID;
	for (let i = p.openElements.stackTop; i >= 0; i--) {
		const elementId = p.openElements.tagIDs[i];
		if (tn === TAG_ID.LI && elementId === TAG_ID.LI || (tn === TAG_ID.DD || tn === TAG_ID.DT) && (elementId === TAG_ID.DD || elementId === TAG_ID.DT)) {
			p.openElements.generateImpliedEndTagsWithExclusion(elementId);
			p.openElements.popUntilTagNamePopped(elementId);
			break;
		}
		if (elementId !== TAG_ID.ADDRESS && elementId !== TAG_ID.DIV && elementId !== TAG_ID.P && p._isSpecialElement(p.openElements.items[i], elementId)) break;
	}
	if (p.openElements.hasInButtonScope(TAG_ID.P)) p._closePElement();
	p._insertElement(token, NS.HTML);
}
function plaintextStartTagInBody(p, token) {
	if (p.openElements.hasInButtonScope(TAG_ID.P)) p._closePElement();
	p._insertElement(token, NS.HTML);
	p.tokenizer.state = TokenizerMode.PLAINTEXT;
}
function buttonStartTagInBody(p, token) {
	if (p.openElements.hasInScope(TAG_ID.BUTTON)) {
		p.openElements.generateImpliedEndTags();
		p.openElements.popUntilTagNamePopped(TAG_ID.BUTTON);
	}
	p._reconstructActiveFormattingElements();
	p._insertElement(token, NS.HTML);
	p.framesetOk = false;
}
function aStartTagInBody(p, token) {
	const activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(TAG_NAMES.A);
	if (activeElementEntry) {
		callAdoptionAgency(p, token);
		p.openElements.remove(activeElementEntry.element);
		p.activeFormattingElements.removeEntry(activeElementEntry);
	}
	p._reconstructActiveFormattingElements();
	p._insertElement(token, NS.HTML);
	p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function bStartTagInBody(p, token) {
	p._reconstructActiveFormattingElements();
	p._insertElement(token, NS.HTML);
	p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function nobrStartTagInBody(p, token) {
	p._reconstructActiveFormattingElements();
	if (p.openElements.hasInScope(TAG_ID.NOBR)) {
		callAdoptionAgency(p, token);
		p._reconstructActiveFormattingElements();
	}
	p._insertElement(token, NS.HTML);
	p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function appletStartTagInBody(p, token) {
	p._reconstructActiveFormattingElements();
	p._insertElement(token, NS.HTML);
	p.activeFormattingElements.insertMarker();
	p.framesetOk = false;
}
function tableStartTagInBody(p, token) {
	if (p.treeAdapter.getDocumentMode(p.document) !== DOCUMENT_MODE.QUIRKS && p.openElements.hasInButtonScope(TAG_ID.P)) p._closePElement();
	p._insertElement(token, NS.HTML);
	p.framesetOk = false;
	p.insertionMode = InsertionMode.IN_TABLE;
}
function areaStartTagInBody(p, token) {
	p._reconstructActiveFormattingElements();
	p._appendElement(token, NS.HTML);
	p.framesetOk = false;
	token.ackSelfClosing = true;
}
function isHiddenInput(token) {
	const inputType = getTokenAttr(token, ATTRS.TYPE);
	return inputType != null && inputType.toLowerCase() === HIDDEN_INPUT_TYPE;
}
function inputStartTagInBody(p, token) {
	p._reconstructActiveFormattingElements();
	p._appendElement(token, NS.HTML);
	if (!isHiddenInput(token)) p.framesetOk = false;
	token.ackSelfClosing = true;
}
function paramStartTagInBody(p, token) {
	p._appendElement(token, NS.HTML);
	token.ackSelfClosing = true;
}
function hrStartTagInBody(p, token) {
	if (p.openElements.hasInButtonScope(TAG_ID.P)) p._closePElement();
	p._appendElement(token, NS.HTML);
	p.framesetOk = false;
	token.ackSelfClosing = true;
}
function imageStartTagInBody(p, token) {
	token.tagName = TAG_NAMES.IMG;
	token.tagID = TAG_ID.IMG;
	areaStartTagInBody(p, token);
}
function textareaStartTagInBody(p, token) {
	p._insertElement(token, NS.HTML);
	p.skipNextNewLine = true;
	p.tokenizer.state = TokenizerMode.RCDATA;
	p.originalInsertionMode = p.insertionMode;
	p.framesetOk = false;
	p.insertionMode = InsertionMode.TEXT;
}
function xmpStartTagInBody(p, token) {
	if (p.openElements.hasInButtonScope(TAG_ID.P)) p._closePElement();
	p._reconstructActiveFormattingElements();
	p.framesetOk = false;
	p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
}
function iframeStartTagInBody(p, token) {
	p.framesetOk = false;
	p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
}
function rawTextStartTagInBody(p, token) {
	p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
}
function selectStartTagInBody(p, token) {
	p._reconstructActiveFormattingElements();
	p._insertElement(token, NS.HTML);
	p.framesetOk = false;
	p.insertionMode = p.insertionMode === InsertionMode.IN_TABLE || p.insertionMode === InsertionMode.IN_CAPTION || p.insertionMode === InsertionMode.IN_TABLE_BODY || p.insertionMode === InsertionMode.IN_ROW || p.insertionMode === InsertionMode.IN_CELL ? InsertionMode.IN_SELECT_IN_TABLE : InsertionMode.IN_SELECT;
}
function optgroupStartTagInBody(p, token) {
	if (p.openElements.currentTagId === TAG_ID.OPTION) p.openElements.pop();
	p._reconstructActiveFormattingElements();
	p._insertElement(token, NS.HTML);
}
function rbStartTagInBody(p, token) {
	if (p.openElements.hasInScope(TAG_ID.RUBY)) p.openElements.generateImpliedEndTags();
	p._insertElement(token, NS.HTML);
}
function rtStartTagInBody(p, token) {
	if (p.openElements.hasInScope(TAG_ID.RUBY)) p.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.RTC);
	p._insertElement(token, NS.HTML);
}
function mathStartTagInBody(p, token) {
	p._reconstructActiveFormattingElements();
	adjustTokenMathMLAttrs(token);
	adjustTokenXMLAttrs(token);
	if (token.selfClosing) p._appendElement(token, NS.MATHML);
	else p._insertElement(token, NS.MATHML);
	token.ackSelfClosing = true;
}
function svgStartTagInBody(p, token) {
	p._reconstructActiveFormattingElements();
	adjustTokenSVGAttrs(token);
	adjustTokenXMLAttrs(token);
	if (token.selfClosing) p._appendElement(token, NS.SVG);
	else p._insertElement(token, NS.SVG);
	token.ackSelfClosing = true;
}
function genericStartTagInBody(p, token) {
	p._reconstructActiveFormattingElements();
	p._insertElement(token, NS.HTML);
}
function startTagInBody(p, token) {
	switch (token.tagID) {
		case TAG_ID.I:
		case TAG_ID.S:
		case TAG_ID.B:
		case TAG_ID.U:
		case TAG_ID.EM:
		case TAG_ID.TT:
		case TAG_ID.BIG:
		case TAG_ID.CODE:
		case TAG_ID.FONT:
		case TAG_ID.SMALL:
		case TAG_ID.STRIKE:
		case TAG_ID.STRONG:
			bStartTagInBody(p, token);
			break;
		case TAG_ID.A:
			aStartTagInBody(p, token);
			break;
		case TAG_ID.H1:
		case TAG_ID.H2:
		case TAG_ID.H3:
		case TAG_ID.H4:
		case TAG_ID.H5:
		case TAG_ID.H6:
			numberedHeaderStartTagInBody(p, token);
			break;
		case TAG_ID.P:
		case TAG_ID.DL:
		case TAG_ID.OL:
		case TAG_ID.UL:
		case TAG_ID.DIV:
		case TAG_ID.DIR:
		case TAG_ID.NAV:
		case TAG_ID.MAIN:
		case TAG_ID.MENU:
		case TAG_ID.ASIDE:
		case TAG_ID.CENTER:
		case TAG_ID.FIGURE:
		case TAG_ID.FOOTER:
		case TAG_ID.HEADER:
		case TAG_ID.HGROUP:
		case TAG_ID.DIALOG:
		case TAG_ID.DETAILS:
		case TAG_ID.ADDRESS:
		case TAG_ID.ARTICLE:
		case TAG_ID.SEARCH:
		case TAG_ID.SECTION:
		case TAG_ID.SUMMARY:
		case TAG_ID.FIELDSET:
		case TAG_ID.BLOCKQUOTE:
		case TAG_ID.FIGCAPTION:
			addressStartTagInBody(p, token);
			break;
		case TAG_ID.LI:
		case TAG_ID.DD:
		case TAG_ID.DT:
			listItemStartTagInBody(p, token);
			break;
		case TAG_ID.BR:
		case TAG_ID.IMG:
		case TAG_ID.WBR:
		case TAG_ID.AREA:
		case TAG_ID.EMBED:
		case TAG_ID.KEYGEN:
			areaStartTagInBody(p, token);
			break;
		case TAG_ID.HR:
			hrStartTagInBody(p, token);
			break;
		case TAG_ID.RB:
		case TAG_ID.RTC:
			rbStartTagInBody(p, token);
			break;
		case TAG_ID.RT:
		case TAG_ID.RP:
			rtStartTagInBody(p, token);
			break;
		case TAG_ID.PRE:
		case TAG_ID.LISTING:
			preStartTagInBody(p, token);
			break;
		case TAG_ID.XMP:
			xmpStartTagInBody(p, token);
			break;
		case TAG_ID.SVG:
			svgStartTagInBody(p, token);
			break;
		case TAG_ID.HTML:
			htmlStartTagInBody(p, token);
			break;
		case TAG_ID.BASE:
		case TAG_ID.LINK:
		case TAG_ID.META:
		case TAG_ID.STYLE:
		case TAG_ID.TITLE:
		case TAG_ID.SCRIPT:
		case TAG_ID.BGSOUND:
		case TAG_ID.BASEFONT:
		case TAG_ID.TEMPLATE:
			startTagInHead(p, token);
			break;
		case TAG_ID.BODY:
			bodyStartTagInBody(p, token);
			break;
		case TAG_ID.FORM:
			formStartTagInBody(p, token);
			break;
		case TAG_ID.NOBR:
			nobrStartTagInBody(p, token);
			break;
		case TAG_ID.MATH:
			mathStartTagInBody(p, token);
			break;
		case TAG_ID.TABLE:
			tableStartTagInBody(p, token);
			break;
		case TAG_ID.INPUT:
			inputStartTagInBody(p, token);
			break;
		case TAG_ID.PARAM:
		case TAG_ID.TRACK:
		case TAG_ID.SOURCE:
			paramStartTagInBody(p, token);
			break;
		case TAG_ID.IMAGE:
			imageStartTagInBody(p, token);
			break;
		case TAG_ID.BUTTON:
			buttonStartTagInBody(p, token);
			break;
		case TAG_ID.APPLET:
		case TAG_ID.OBJECT:
		case TAG_ID.MARQUEE:
			appletStartTagInBody(p, token);
			break;
		case TAG_ID.IFRAME:
			iframeStartTagInBody(p, token);
			break;
		case TAG_ID.SELECT:
			selectStartTagInBody(p, token);
			break;
		case TAG_ID.OPTION:
		case TAG_ID.OPTGROUP:
			optgroupStartTagInBody(p, token);
			break;
		case TAG_ID.NOEMBED:
		case TAG_ID.NOFRAMES:
			rawTextStartTagInBody(p, token);
			break;
		case TAG_ID.FRAMESET:
			framesetStartTagInBody(p, token);
			break;
		case TAG_ID.TEXTAREA:
			textareaStartTagInBody(p, token);
			break;
		case TAG_ID.NOSCRIPT:
			if (p.options.scriptingEnabled) rawTextStartTagInBody(p, token);
			else genericStartTagInBody(p, token);
			break;
		case TAG_ID.PLAINTEXT:
			plaintextStartTagInBody(p, token);
			break;
		case TAG_ID.COL:
		case TAG_ID.TH:
		case TAG_ID.TD:
		case TAG_ID.TR:
		case TAG_ID.HEAD:
		case TAG_ID.FRAME:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
		case TAG_ID.CAPTION:
		case TAG_ID.COLGROUP: break;
		default: genericStartTagInBody(p, token);
	}
}
function bodyEndTagInBody(p, token) {
	if (p.openElements.hasInScope(TAG_ID.BODY)) {
		p.insertionMode = InsertionMode.AFTER_BODY;
		if (p.options.sourceCodeLocationInfo) {
			const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
			if (bodyElement) p._setEndLocation(bodyElement, token);
		}
	}
}
function htmlEndTagInBody(p, token) {
	if (p.openElements.hasInScope(TAG_ID.BODY)) {
		p.insertionMode = InsertionMode.AFTER_BODY;
		endTagAfterBody(p, token);
	}
}
function addressEndTagInBody(p, token) {
	const tn = token.tagID;
	if (p.openElements.hasInScope(tn)) {
		p.openElements.generateImpliedEndTags();
		p.openElements.popUntilTagNamePopped(tn);
	}
}
function formEndTagInBody(p) {
	const inTemplate = p.openElements.tmplCount > 0;
	const { formElement } = p;
	if (!inTemplate) p.formElement = null;
	if ((formElement || inTemplate) && p.openElements.hasInScope(TAG_ID.FORM)) {
		p.openElements.generateImpliedEndTags();
		if (inTemplate) p.openElements.popUntilTagNamePopped(TAG_ID.FORM);
		else if (formElement) p.openElements.remove(formElement);
	}
}
function pEndTagInBody(p) {
	if (!p.openElements.hasInButtonScope(TAG_ID.P)) p._insertFakeElement(TAG_NAMES.P, TAG_ID.P);
	p._closePElement();
}
function liEndTagInBody(p) {
	if (p.openElements.hasInListItemScope(TAG_ID.LI)) {
		p.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.LI);
		p.openElements.popUntilTagNamePopped(TAG_ID.LI);
	}
}
function ddEndTagInBody(p, token) {
	const tn = token.tagID;
	if (p.openElements.hasInScope(tn)) {
		p.openElements.generateImpliedEndTagsWithExclusion(tn);
		p.openElements.popUntilTagNamePopped(tn);
	}
}
function numberedHeaderEndTagInBody(p) {
	if (p.openElements.hasNumberedHeaderInScope()) {
		p.openElements.generateImpliedEndTags();
		p.openElements.popUntilNumberedHeaderPopped();
	}
}
function appletEndTagInBody(p, token) {
	const tn = token.tagID;
	if (p.openElements.hasInScope(tn)) {
		p.openElements.generateImpliedEndTags();
		p.openElements.popUntilTagNamePopped(tn);
		p.activeFormattingElements.clearToLastMarker();
	}
}
function brEndTagInBody(p) {
	p._reconstructActiveFormattingElements();
	p._insertFakeElement(TAG_NAMES.BR, TAG_ID.BR);
	p.openElements.pop();
	p.framesetOk = false;
}
function genericEndTagInBody(p, token) {
	const tn = token.tagName;
	const tid = token.tagID;
	for (let i = p.openElements.stackTop; i > 0; i--) {
		const element = p.openElements.items[i];
		const elementId = p.openElements.tagIDs[i];
		if (tid === elementId && (tid !== TAG_ID.UNKNOWN || p.treeAdapter.getTagName(element) === tn)) {
			p.openElements.generateImpliedEndTagsWithExclusion(tid);
			if (p.openElements.stackTop >= i) p.openElements.shortenToLength(i);
			break;
		}
		if (p._isSpecialElement(element, elementId)) break;
	}
}
function endTagInBody(p, token) {
	switch (token.tagID) {
		case TAG_ID.A:
		case TAG_ID.B:
		case TAG_ID.I:
		case TAG_ID.S:
		case TAG_ID.U:
		case TAG_ID.EM:
		case TAG_ID.TT:
		case TAG_ID.BIG:
		case TAG_ID.CODE:
		case TAG_ID.FONT:
		case TAG_ID.NOBR:
		case TAG_ID.SMALL:
		case TAG_ID.STRIKE:
		case TAG_ID.STRONG:
			callAdoptionAgency(p, token);
			break;
		case TAG_ID.P:
			pEndTagInBody(p);
			break;
		case TAG_ID.DL:
		case TAG_ID.UL:
		case TAG_ID.OL:
		case TAG_ID.DIR:
		case TAG_ID.DIV:
		case TAG_ID.NAV:
		case TAG_ID.PRE:
		case TAG_ID.MAIN:
		case TAG_ID.MENU:
		case TAG_ID.ASIDE:
		case TAG_ID.BUTTON:
		case TAG_ID.CENTER:
		case TAG_ID.FIGURE:
		case TAG_ID.FOOTER:
		case TAG_ID.HEADER:
		case TAG_ID.HGROUP:
		case TAG_ID.DIALOG:
		case TAG_ID.ADDRESS:
		case TAG_ID.ARTICLE:
		case TAG_ID.DETAILS:
		case TAG_ID.SEARCH:
		case TAG_ID.SECTION:
		case TAG_ID.SUMMARY:
		case TAG_ID.LISTING:
		case TAG_ID.FIELDSET:
		case TAG_ID.BLOCKQUOTE:
		case TAG_ID.FIGCAPTION:
			addressEndTagInBody(p, token);
			break;
		case TAG_ID.LI:
			liEndTagInBody(p);
			break;
		case TAG_ID.DD:
		case TAG_ID.DT:
			ddEndTagInBody(p, token);
			break;
		case TAG_ID.H1:
		case TAG_ID.H2:
		case TAG_ID.H3:
		case TAG_ID.H4:
		case TAG_ID.H5:
		case TAG_ID.H6:
			numberedHeaderEndTagInBody(p);
			break;
		case TAG_ID.BR:
			brEndTagInBody(p);
			break;
		case TAG_ID.BODY:
			bodyEndTagInBody(p, token);
			break;
		case TAG_ID.HTML:
			htmlEndTagInBody(p, token);
			break;
		case TAG_ID.FORM:
			formEndTagInBody(p);
			break;
		case TAG_ID.APPLET:
		case TAG_ID.OBJECT:
		case TAG_ID.MARQUEE:
			appletEndTagInBody(p, token);
			break;
		case TAG_ID.TEMPLATE:
			templateEndTagInHead(p, token);
			break;
		default: genericEndTagInBody(p, token);
	}
}
function eofInBody(p, token) {
	if (p.tmplInsertionModeStack.length > 0) eofInTemplate(p, token);
	else stopParsing(p, token);
}
function endTagInText(p, token) {
	var _a$1;
	if (token.tagID === TAG_ID.SCRIPT) (_a$1 = p.scriptHandler) === null || _a$1 === void 0 || _a$1.call(p, p.openElements.current);
	p.openElements.pop();
	p.insertionMode = p.originalInsertionMode;
}
function eofInText(p, token) {
	p._err(token, ERR.eofInElementThatCanContainOnlyText);
	p.openElements.pop();
	p.insertionMode = p.originalInsertionMode;
	p.onEof(token);
}
function characterInTable(p, token) {
	if (p.openElements.currentTagId !== void 0 && TABLE_STRUCTURE_TAGS.has(p.openElements.currentTagId)) {
		p.pendingCharacterTokens.length = 0;
		p.hasNonWhitespacePendingCharacterToken = false;
		p.originalInsertionMode = p.insertionMode;
		p.insertionMode = InsertionMode.IN_TABLE_TEXT;
		switch (token.type) {
			case TokenType.CHARACTER:
				characterInTableText(p, token);
				break;
			case TokenType.WHITESPACE_CHARACTER:
				whitespaceCharacterInTableText(p, token);
				break;
		}
	} else tokenInTable(p, token);
}
function captionStartTagInTable(p, token) {
	p.openElements.clearBackToTableContext();
	p.activeFormattingElements.insertMarker();
	p._insertElement(token, NS.HTML);
	p.insertionMode = InsertionMode.IN_CAPTION;
}
function colgroupStartTagInTable(p, token) {
	p.openElements.clearBackToTableContext();
	p._insertElement(token, NS.HTML);
	p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
}
function colStartTagInTable(p, token) {
	p.openElements.clearBackToTableContext();
	p._insertFakeElement(TAG_NAMES.COLGROUP, TAG_ID.COLGROUP);
	p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
	startTagInColumnGroup(p, token);
}
function tbodyStartTagInTable(p, token) {
	p.openElements.clearBackToTableContext();
	p._insertElement(token, NS.HTML);
	p.insertionMode = InsertionMode.IN_TABLE_BODY;
}
function tdStartTagInTable(p, token) {
	p.openElements.clearBackToTableContext();
	p._insertFakeElement(TAG_NAMES.TBODY, TAG_ID.TBODY);
	p.insertionMode = InsertionMode.IN_TABLE_BODY;
	startTagInTableBody(p, token);
}
function tableStartTagInTable(p, token) {
	if (p.openElements.hasInTableScope(TAG_ID.TABLE)) {
		p.openElements.popUntilTagNamePopped(TAG_ID.TABLE);
		p._resetInsertionMode();
		p._processStartTag(token);
	}
}
function inputStartTagInTable(p, token) {
	if (isHiddenInput(token)) p._appendElement(token, NS.HTML);
	else tokenInTable(p, token);
	token.ackSelfClosing = true;
}
function formStartTagInTable(p, token) {
	if (!p.formElement && p.openElements.tmplCount === 0) {
		p._insertElement(token, NS.HTML);
		p.formElement = p.openElements.current;
		p.openElements.pop();
	}
}
function startTagInTable(p, token) {
	switch (token.tagID) {
		case TAG_ID.TD:
		case TAG_ID.TH:
		case TAG_ID.TR:
			tdStartTagInTable(p, token);
			break;
		case TAG_ID.STYLE:
		case TAG_ID.SCRIPT:
		case TAG_ID.TEMPLATE:
			startTagInHead(p, token);
			break;
		case TAG_ID.COL:
			colStartTagInTable(p, token);
			break;
		case TAG_ID.FORM:
			formStartTagInTable(p, token);
			break;
		case TAG_ID.TABLE:
			tableStartTagInTable(p, token);
			break;
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			tbodyStartTagInTable(p, token);
			break;
		case TAG_ID.INPUT:
			inputStartTagInTable(p, token);
			break;
		case TAG_ID.CAPTION:
			captionStartTagInTable(p, token);
			break;
		case TAG_ID.COLGROUP:
			colgroupStartTagInTable(p, token);
			break;
		default: tokenInTable(p, token);
	}
}
function endTagInTable(p, token) {
	switch (token.tagID) {
		case TAG_ID.TABLE:
			if (p.openElements.hasInTableScope(TAG_ID.TABLE)) {
				p.openElements.popUntilTagNamePopped(TAG_ID.TABLE);
				p._resetInsertionMode();
			}
			break;
		case TAG_ID.TEMPLATE:
			templateEndTagInHead(p, token);
			break;
		case TAG_ID.BODY:
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML:
		case TAG_ID.TBODY:
		case TAG_ID.TD:
		case TAG_ID.TFOOT:
		case TAG_ID.TH:
		case TAG_ID.THEAD:
		case TAG_ID.TR: break;
		default: tokenInTable(p, token);
	}
}
function tokenInTable(p, token) {
	const savedFosterParentingState = p.fosterParentingEnabled;
	p.fosterParentingEnabled = true;
	modeInBody(p, token);
	p.fosterParentingEnabled = savedFosterParentingState;
}
function whitespaceCharacterInTableText(p, token) {
	p.pendingCharacterTokens.push(token);
}
function characterInTableText(p, token) {
	p.pendingCharacterTokens.push(token);
	p.hasNonWhitespacePendingCharacterToken = true;
}
function tokenInTableText(p, token) {
	let i = 0;
	if (p.hasNonWhitespacePendingCharacterToken) for (; i < p.pendingCharacterTokens.length; i++) tokenInTable(p, p.pendingCharacterTokens[i]);
	else for (; i < p.pendingCharacterTokens.length; i++) p._insertCharacters(p.pendingCharacterTokens[i]);
	p.insertionMode = p.originalInsertionMode;
	p._processToken(token);
}
const TABLE_VOID_ELEMENTS = new Set([
	TAG_ID.CAPTION,
	TAG_ID.COL,
	TAG_ID.COLGROUP,
	TAG_ID.TBODY,
	TAG_ID.TD,
	TAG_ID.TFOOT,
	TAG_ID.TH,
	TAG_ID.THEAD,
	TAG_ID.TR
]);
function startTagInCaption(p, token) {
	if (TABLE_VOID_ELEMENTS.has(token.tagID)) {
		if (p.openElements.hasInTableScope(TAG_ID.CAPTION)) {
			p.openElements.generateImpliedEndTags();
			p.openElements.popUntilTagNamePopped(TAG_ID.CAPTION);
			p.activeFormattingElements.clearToLastMarker();
			p.insertionMode = InsertionMode.IN_TABLE;
			startTagInTable(p, token);
		}
	} else startTagInBody(p, token);
}
function endTagInCaption(p, token) {
	const tn = token.tagID;
	switch (tn) {
		case TAG_ID.CAPTION:
		case TAG_ID.TABLE:
			if (p.openElements.hasInTableScope(TAG_ID.CAPTION)) {
				p.openElements.generateImpliedEndTags();
				p.openElements.popUntilTagNamePopped(TAG_ID.CAPTION);
				p.activeFormattingElements.clearToLastMarker();
				p.insertionMode = InsertionMode.IN_TABLE;
				if (tn === TAG_ID.TABLE) endTagInTable(p, token);
			}
			break;
		case TAG_ID.BODY:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML:
		case TAG_ID.TBODY:
		case TAG_ID.TD:
		case TAG_ID.TFOOT:
		case TAG_ID.TH:
		case TAG_ID.THEAD:
		case TAG_ID.TR: break;
		default: endTagInBody(p, token);
	}
}
function startTagInColumnGroup(p, token) {
	switch (token.tagID) {
		case TAG_ID.HTML:
			startTagInBody(p, token);
			break;
		case TAG_ID.COL:
			p._appendElement(token, NS.HTML);
			token.ackSelfClosing = true;
			break;
		case TAG_ID.TEMPLATE:
			startTagInHead(p, token);
			break;
		default: tokenInColumnGroup(p, token);
	}
}
function endTagInColumnGroup(p, token) {
	switch (token.tagID) {
		case TAG_ID.COLGROUP:
			if (p.openElements.currentTagId === TAG_ID.COLGROUP) {
				p.openElements.pop();
				p.insertionMode = InsertionMode.IN_TABLE;
			}
			break;
		case TAG_ID.TEMPLATE:
			templateEndTagInHead(p, token);
			break;
		case TAG_ID.COL: break;
		default: tokenInColumnGroup(p, token);
	}
}
function tokenInColumnGroup(p, token) {
	if (p.openElements.currentTagId === TAG_ID.COLGROUP) {
		p.openElements.pop();
		p.insertionMode = InsertionMode.IN_TABLE;
		p._processToken(token);
	}
}
function startTagInTableBody(p, token) {
	switch (token.tagID) {
		case TAG_ID.TR:
			p.openElements.clearBackToTableBodyContext();
			p._insertElement(token, NS.HTML);
			p.insertionMode = InsertionMode.IN_ROW;
			break;
		case TAG_ID.TH:
		case TAG_ID.TD:
			p.openElements.clearBackToTableBodyContext();
			p._insertFakeElement(TAG_NAMES.TR, TAG_ID.TR);
			p.insertionMode = InsertionMode.IN_ROW;
			startTagInRow(p, token);
			break;
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			if (p.openElements.hasTableBodyContextInTableScope()) {
				p.openElements.clearBackToTableBodyContext();
				p.openElements.pop();
				p.insertionMode = InsertionMode.IN_TABLE;
				startTagInTable(p, token);
			}
			break;
		default: startTagInTable(p, token);
	}
}
function endTagInTableBody(p, token) {
	const tn = token.tagID;
	switch (token.tagID) {
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			if (p.openElements.hasInTableScope(tn)) {
				p.openElements.clearBackToTableBodyContext();
				p.openElements.pop();
				p.insertionMode = InsertionMode.IN_TABLE;
			}
			break;
		case TAG_ID.TABLE:
			if (p.openElements.hasTableBodyContextInTableScope()) {
				p.openElements.clearBackToTableBodyContext();
				p.openElements.pop();
				p.insertionMode = InsertionMode.IN_TABLE;
				endTagInTable(p, token);
			}
			break;
		case TAG_ID.BODY:
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML:
		case TAG_ID.TD:
		case TAG_ID.TH:
		case TAG_ID.TR: break;
		default: endTagInTable(p, token);
	}
}
function startTagInRow(p, token) {
	switch (token.tagID) {
		case TAG_ID.TH:
		case TAG_ID.TD:
			p.openElements.clearBackToTableRowContext();
			p._insertElement(token, NS.HTML);
			p.insertionMode = InsertionMode.IN_CELL;
			p.activeFormattingElements.insertMarker();
			break;
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
		case TAG_ID.TR:
			if (p.openElements.hasInTableScope(TAG_ID.TR)) {
				p.openElements.clearBackToTableRowContext();
				p.openElements.pop();
				p.insertionMode = InsertionMode.IN_TABLE_BODY;
				startTagInTableBody(p, token);
			}
			break;
		default: startTagInTable(p, token);
	}
}
function endTagInRow(p, token) {
	switch (token.tagID) {
		case TAG_ID.TR:
			if (p.openElements.hasInTableScope(TAG_ID.TR)) {
				p.openElements.clearBackToTableRowContext();
				p.openElements.pop();
				p.insertionMode = InsertionMode.IN_TABLE_BODY;
			}
			break;
		case TAG_ID.TABLE:
			if (p.openElements.hasInTableScope(TAG_ID.TR)) {
				p.openElements.clearBackToTableRowContext();
				p.openElements.pop();
				p.insertionMode = InsertionMode.IN_TABLE_BODY;
				endTagInTableBody(p, token);
			}
			break;
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			if (p.openElements.hasInTableScope(token.tagID) || p.openElements.hasInTableScope(TAG_ID.TR)) {
				p.openElements.clearBackToTableRowContext();
				p.openElements.pop();
				p.insertionMode = InsertionMode.IN_TABLE_BODY;
				endTagInTableBody(p, token);
			}
			break;
		case TAG_ID.BODY:
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML:
		case TAG_ID.TD:
		case TAG_ID.TH: break;
		default: endTagInTable(p, token);
	}
}
function startTagInCell(p, token) {
	if (TABLE_VOID_ELEMENTS.has(token.tagID)) {
		if (p.openElements.hasInTableScope(TAG_ID.TD) || p.openElements.hasInTableScope(TAG_ID.TH)) {
			p._closeTableCell();
			startTagInRow(p, token);
		}
	} else startTagInBody(p, token);
}
function endTagInCell(p, token) {
	const tn = token.tagID;
	switch (tn) {
		case TAG_ID.TD:
		case TAG_ID.TH:
			if (p.openElements.hasInTableScope(tn)) {
				p.openElements.generateImpliedEndTags();
				p.openElements.popUntilTagNamePopped(tn);
				p.activeFormattingElements.clearToLastMarker();
				p.insertionMode = InsertionMode.IN_ROW;
			}
			break;
		case TAG_ID.TABLE:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
		case TAG_ID.TR:
			if (p.openElements.hasInTableScope(tn)) {
				p._closeTableCell();
				endTagInRow(p, token);
			}
			break;
		case TAG_ID.BODY:
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML: break;
		default: endTagInBody(p, token);
	}
}
function startTagInSelect(p, token) {
	switch (token.tagID) {
		case TAG_ID.HTML:
			startTagInBody(p, token);
			break;
		case TAG_ID.OPTION:
			if (p.openElements.currentTagId === TAG_ID.OPTION) p.openElements.pop();
			p._insertElement(token, NS.HTML);
			break;
		case TAG_ID.OPTGROUP:
			if (p.openElements.currentTagId === TAG_ID.OPTION) p.openElements.pop();
			if (p.openElements.currentTagId === TAG_ID.OPTGROUP) p.openElements.pop();
			p._insertElement(token, NS.HTML);
			break;
		case TAG_ID.HR:
			if (p.openElements.currentTagId === TAG_ID.OPTION) p.openElements.pop();
			if (p.openElements.currentTagId === TAG_ID.OPTGROUP) p.openElements.pop();
			p._appendElement(token, NS.HTML);
			token.ackSelfClosing = true;
			break;
		case TAG_ID.INPUT:
		case TAG_ID.KEYGEN:
		case TAG_ID.TEXTAREA:
		case TAG_ID.SELECT:
			if (p.openElements.hasInSelectScope(TAG_ID.SELECT)) {
				p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
				p._resetInsertionMode();
				if (token.tagID !== TAG_ID.SELECT) p._processStartTag(token);
			}
			break;
		case TAG_ID.SCRIPT:
		case TAG_ID.TEMPLATE:
			startTagInHead(p, token);
			break;
		default:
	}
}
function endTagInSelect(p, token) {
	switch (token.tagID) {
		case TAG_ID.OPTGROUP:
			if (p.openElements.stackTop > 0 && p.openElements.currentTagId === TAG_ID.OPTION && p.openElements.tagIDs[p.openElements.stackTop - 1] === TAG_ID.OPTGROUP) p.openElements.pop();
			if (p.openElements.currentTagId === TAG_ID.OPTGROUP) p.openElements.pop();
			break;
		case TAG_ID.OPTION:
			if (p.openElements.currentTagId === TAG_ID.OPTION) p.openElements.pop();
			break;
		case TAG_ID.SELECT:
			if (p.openElements.hasInSelectScope(TAG_ID.SELECT)) {
				p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
				p._resetInsertionMode();
			}
			break;
		case TAG_ID.TEMPLATE:
			templateEndTagInHead(p, token);
			break;
		default:
	}
}
function startTagInSelectInTable(p, token) {
	const tn = token.tagID;
	if (tn === TAG_ID.CAPTION || tn === TAG_ID.TABLE || tn === TAG_ID.TBODY || tn === TAG_ID.TFOOT || tn === TAG_ID.THEAD || tn === TAG_ID.TR || tn === TAG_ID.TD || tn === TAG_ID.TH) {
		p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
		p._resetInsertionMode();
		p._processStartTag(token);
	} else startTagInSelect(p, token);
}
function endTagInSelectInTable(p, token) {
	const tn = token.tagID;
	if (tn === TAG_ID.CAPTION || tn === TAG_ID.TABLE || tn === TAG_ID.TBODY || tn === TAG_ID.TFOOT || tn === TAG_ID.THEAD || tn === TAG_ID.TR || tn === TAG_ID.TD || tn === TAG_ID.TH) {
		if (p.openElements.hasInTableScope(tn)) {
			p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
			p._resetInsertionMode();
			p.onEndTag(token);
		}
	} else endTagInSelect(p, token);
}
function startTagInTemplate(p, token) {
	switch (token.tagID) {
		case TAG_ID.BASE:
		case TAG_ID.BASEFONT:
		case TAG_ID.BGSOUND:
		case TAG_ID.LINK:
		case TAG_ID.META:
		case TAG_ID.NOFRAMES:
		case TAG_ID.SCRIPT:
		case TAG_ID.STYLE:
		case TAG_ID.TEMPLATE:
		case TAG_ID.TITLE:
			startTagInHead(p, token);
			break;
		case TAG_ID.CAPTION:
		case TAG_ID.COLGROUP:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE;
			p.insertionMode = InsertionMode.IN_TABLE;
			startTagInTable(p, token);
			break;
		case TAG_ID.COL:
			p.tmplInsertionModeStack[0] = InsertionMode.IN_COLUMN_GROUP;
			p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
			startTagInColumnGroup(p, token);
			break;
		case TAG_ID.TR:
			p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE_BODY;
			p.insertionMode = InsertionMode.IN_TABLE_BODY;
			startTagInTableBody(p, token);
			break;
		case TAG_ID.TD:
		case TAG_ID.TH:
			p.tmplInsertionModeStack[0] = InsertionMode.IN_ROW;
			p.insertionMode = InsertionMode.IN_ROW;
			startTagInRow(p, token);
			break;
		default:
			p.tmplInsertionModeStack[0] = InsertionMode.IN_BODY;
			p.insertionMode = InsertionMode.IN_BODY;
			startTagInBody(p, token);
	}
}
function endTagInTemplate(p, token) {
	if (token.tagID === TAG_ID.TEMPLATE) templateEndTagInHead(p, token);
}
function eofInTemplate(p, token) {
	if (p.openElements.tmplCount > 0) {
		p.openElements.popUntilTagNamePopped(TAG_ID.TEMPLATE);
		p.activeFormattingElements.clearToLastMarker();
		p.tmplInsertionModeStack.shift();
		p._resetInsertionMode();
		p.onEof(token);
	} else stopParsing(p, token);
}
function startTagAfterBody(p, token) {
	if (token.tagID === TAG_ID.HTML) startTagInBody(p, token);
	else tokenAfterBody(p, token);
}
function endTagAfterBody(p, token) {
	var _a$1;
	if (token.tagID === TAG_ID.HTML) {
		if (!p.fragmentContext) p.insertionMode = InsertionMode.AFTER_AFTER_BODY;
		if (p.options.sourceCodeLocationInfo && p.openElements.tagIDs[0] === TAG_ID.HTML) {
			p._setEndLocation(p.openElements.items[0], token);
			const bodyElement = p.openElements.items[1];
			if (bodyElement && !((_a$1 = p.treeAdapter.getNodeSourceCodeLocation(bodyElement)) === null || _a$1 === void 0 ? void 0 : _a$1.endTag)) p._setEndLocation(bodyElement, token);
		}
	} else tokenAfterBody(p, token);
}
function tokenAfterBody(p, token) {
	p.insertionMode = InsertionMode.IN_BODY;
	modeInBody(p, token);
}
function startTagInFrameset(p, token) {
	switch (token.tagID) {
		case TAG_ID.HTML:
			startTagInBody(p, token);
			break;
		case TAG_ID.FRAMESET:
			p._insertElement(token, NS.HTML);
			break;
		case TAG_ID.FRAME:
			p._appendElement(token, NS.HTML);
			token.ackSelfClosing = true;
			break;
		case TAG_ID.NOFRAMES:
			startTagInHead(p, token);
			break;
		default:
	}
}
function endTagInFrameset(p, token) {
	if (token.tagID === TAG_ID.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
		p.openElements.pop();
		if (!p.fragmentContext && p.openElements.currentTagId !== TAG_ID.FRAMESET) p.insertionMode = InsertionMode.AFTER_FRAMESET;
	}
}
function startTagAfterFrameset(p, token) {
	switch (token.tagID) {
		case TAG_ID.HTML:
			startTagInBody(p, token);
			break;
		case TAG_ID.NOFRAMES:
			startTagInHead(p, token);
			break;
		default:
	}
}
function endTagAfterFrameset(p, token) {
	if (token.tagID === TAG_ID.HTML) p.insertionMode = InsertionMode.AFTER_AFTER_FRAMESET;
}
function startTagAfterAfterBody(p, token) {
	if (token.tagID === TAG_ID.HTML) startTagInBody(p, token);
	else tokenAfterAfterBody(p, token);
}
function tokenAfterAfterBody(p, token) {
	p.insertionMode = InsertionMode.IN_BODY;
	modeInBody(p, token);
}
function startTagAfterAfterFrameset(p, token) {
	switch (token.tagID) {
		case TAG_ID.HTML:
			startTagInBody(p, token);
			break;
		case TAG_ID.NOFRAMES:
			startTagInHead(p, token);
			break;
		default:
	}
}
function nullCharacterInForeignContent(p, token) {
	token.chars = REPLACEMENT_CHARACTER;
	p._insertCharacters(token);
}
function characterInForeignContent(p, token) {
	p._insertCharacters(token);
	p.framesetOk = false;
}
function popUntilHtmlOrIntegrationPoint(p) {
	while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== NS.HTML && p.openElements.currentTagId !== void 0 && !p._isIntegrationPoint(p.openElements.currentTagId, p.openElements.current)) p.openElements.pop();
}
function startTagInForeignContent(p, token) {
	if (causesExit(token)) {
		popUntilHtmlOrIntegrationPoint(p);
		p._startTagOutsideForeignContent(token);
	} else {
		const current = p._getAdjustedCurrentElement();
		const currentNs = p.treeAdapter.getNamespaceURI(current);
		if (currentNs === NS.MATHML) adjustTokenMathMLAttrs(token);
		else if (currentNs === NS.SVG) {
			adjustTokenSVGTagName(token);
			adjustTokenSVGAttrs(token);
		}
		adjustTokenXMLAttrs(token);
		if (token.selfClosing) p._appendElement(token, currentNs);
		else p._insertElement(token, currentNs);
		token.ackSelfClosing = true;
	}
}
function endTagInForeignContent(p, token) {
	if (token.tagID === TAG_ID.P || token.tagID === TAG_ID.BR) {
		popUntilHtmlOrIntegrationPoint(p);
		p._endTagOutsideForeignContent(token);
		return;
	}
	for (let i = p.openElements.stackTop; i > 0; i--) {
		const element = p.openElements.items[i];
		if (p.treeAdapter.getNamespaceURI(element) === NS.HTML) {
			p._endTagOutsideForeignContent(token);
			break;
		}
		const tagName = p.treeAdapter.getTagName(element);
		if (tagName.toLowerCase() === token.tagName) {
			token.tagName = tagName;
			p.openElements.shortenToLength(i);
			break;
		}
	}
}

//#endregion
//#region ../../node_modules/.pnpm/parse5@8.0.0/node_modules/parse5/dist/index.js
/**
* Parses an HTML string.
*
* @param html Input HTML string.
* @param options Parsing options.
* @returns Document
*
* @example
*
* ```js
* const parse5 = require('parse5');
*
* const document = parse5.parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');
*
* console.log(document.childNodes[1].tagName); //> 'html'
*```
*/
function parse(html, options) {
	return Parser.parse(html, options);
}

//#endregion
export { parse };