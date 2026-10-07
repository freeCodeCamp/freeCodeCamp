/***********************************************************************

  A JavaScript tokenizer / parser / beautifier / compressor.
  https://github.com/mishoo/UglifyJS2

  -------------------------------- (C) ---------------------------------

                           Author: Mihai Bazon
                         <mihai.bazon@gmail.com>
                       http://mihai.bazon.net/blog

  Distributed under the BSD license:

    Copyright 2012 (c) Mihai Bazon <mihai.bazon@gmail.com>
    Parser based on parse-js (http://marijn.haverbeke.nl/parse-js/).

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:

        * Redistributions of source code must retain the above
          copyright notice, this list of conditions and the following
          disclaimer.

        * Redistributions in binary form must reproduce the above
          copyright notice, this list of conditions and the following
          disclaimer in the documentation and/or other materials
          provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER “AS IS” AND ANY
    EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
    PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE
    LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
    OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
    TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
    THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

 ***********************************************************************/

"use strict";

import {
    characters,
    defaults,
    makePredicate,
    set_annotation,
} from "./utils/index.js";
import {
    AST_Accessor,
    AST_Array,
    AST_Arrow,
    AST_Assign,
    AST_Await,
    AST_BigInt,
    AST_Binary,
    AST_BlockStatement,
    AST_Break,
    AST_Call,
    AST_Case,
    AST_Catch,
    AST_Chain,
    AST_ClassExpression,
    AST_ClassPrivateProperty,
    AST_ClassProperty,
    AST_ClassStaticBlock,
    AST_ConciseMethod,
    AST_PrivateIn,
    AST_PrivateGetter,
    AST_PrivateMethod,
    AST_PrivateSetter,
    AST_Conditional,
    AST_Const,
    AST_Continue,
    AST_Debugger,
    AST_Default,
    AST_DefaultAssign,
    AST_DefClass,
    AST_Definitions,
    AST_DefinitionsLike,
    AST_Defun,
    AST_Destructuring,
    AST_Directive,
    AST_Do,
    AST_Dot,
    AST_DotHash,
    AST_EmptyStatement,
    AST_Expansion,
    AST_Export,
    AST_False,
    AST_Finally,
    AST_For,
    AST_ForIn,
    AST_ForOf,
    AST_Function,
    AST_Hole,
    AST_If,
    AST_Import,
    AST_ImportMeta,
    AST_Infinity,
    AST_IterationStatement,
    AST_Label,
    AST_LabeledStatement,
    AST_LabelRef,
    AST_Let,
    AST_NameMapping,
    AST_New,
    AST_NewTarget,
    AST_Null,
    AST_Number,
    AST_Object,
    AST_ObjectGetter,
    AST_ObjectKeyVal,
    AST_ObjectProperty,
    AST_ObjectSetter,
    AST_PrefixedTemplateString,
    AST_PropAccess,
    AST_RegExp,
    AST_Return,
    AST_Sequence,
    AST_SimpleStatement,
    AST_String,
    AST_Sub,
    AST_Super,
    AST_Switch,
    AST_SymbolCatch,
    AST_SymbolClass,
    AST_SymbolClassProperty,
    AST_SymbolConst,
    AST_SymbolDeclaration,
    AST_SymbolDefClass,
    AST_SymbolDefun,
    AST_SymbolExport,
    AST_SymbolExportForeign,
    AST_SymbolFunarg,
    AST_SymbolImport,
    AST_SymbolImportForeign,
    AST_SymbolLambda,
    AST_SymbolLet,
    AST_SymbolMethod,
    AST_SymbolRef,
    AST_SymbolVar,
    AST_SymbolUsing,
    AST_TemplateSegment,
    AST_TemplateString,
    AST_This,
    AST_SymbolPrivateProperty,
    AST_Throw,
    AST_Token,
    AST_Toplevel,
    AST_True,
    AST_Try,
    AST_TryBlock,
    AST_UnaryPostfix,
    AST_UnaryPrefix,
    AST_Using,
    AST_UsingDef,
    AST_Var,
    AST_VarDef,
    AST_While,
    AST_With,
    AST_Yield,
    _INLINE,
    _NOINLINE,
    _PURE,
    _KEY,
    _MANGLEPROP,
} from "./ast.js";

var LATEST_RAW = "";  // Only used for numbers and template strings
var TEMPLATE_RAWS = new Map();  // Raw template strings

var KEYWORDS = "break case catch class const continue debugger default delete do else export extends finally for function if in instanceof let new return switch throw try typeof var void while with";
var KEYWORDS_ATOM = "false null true";
var RESERVED_WORDS = "enum import super this " + KEYWORDS_ATOM + " " + KEYWORDS;
var ALL_RESERVED_WORDS = "implements interface package private protected public static " + RESERVED_WORDS;
var KEYWORDS_BEFORE_EXPRESSION = "return new delete throw else case yield await";

KEYWORDS = makePredicate(KEYWORDS);
RESERVED_WORDS = makePredicate(RESERVED_WORDS);
KEYWORDS_BEFORE_EXPRESSION = makePredicate(KEYWORDS_BEFORE_EXPRESSION);
KEYWORDS_ATOM = makePredicate(KEYWORDS_ATOM);
ALL_RESERVED_WORDS = makePredicate(ALL_RESERVED_WORDS);

var OPERATOR_CHARS = makePredicate(characters("+-*&%=<>!?|~^"));

var RE_HEX_NUMBER = /^0x[0-9a-f]+$/i;
var RE_OCT_NUMBER = /^0[0-7]+$/;
var RE_ES6_OCT_NUMBER = /^0o[0-7]+$/i;
var RE_BIN_NUMBER = /^0b[01]+$/i;
var RE_DEC_NUMBER = /^\d*\.?\d*(?:e[+-]?\d*(?:\d\.?|\.?\d)\d*)?$/i;
var RE_BIG_INT = /^(0[xob])?[0-9a-f]+n$/i;

var RE_KEYWORD_RELATIONAL_OPERATORS = /in(?:stanceof)?/y;

var OPERATORS = makePredicate([
    "in",
    "instanceof",
    "typeof",
    "new",
    "void",
    "delete",
    "++",
    "--",
    "+",
    "-",
    "!",
    "~",
    "&",
    "|",
    "^",
    "*",
    "**",
    "/",
    "%",
    ">>",
    "<<",
    ">>>",
    "<",
    ">",
    "<=",
    ">=",
    "==",
    "===",
    "!=",
    "!==",
    "?",
    "=",
    "+=",
    "-=",
    "||=",
    "&&=",
    "??=",
    "/=",
    "*=",
    "**=",
    "%=",
    ">>=",
    "<<=",
    ">>>=",
    "|=",
    "^=",
    "&=",
    "&&",
    "??",
    "||",
]);

var WHITESPACE_CHARS = makePredicate(characters(" \u00a0\n\r\t\f\u000b\u200b\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\uFEFF"));

var NEWLINE_CHARS = makePredicate(characters("\n\r\u2028\u2029"));

var PUNC_AFTER_EXPRESSION = makePredicate(characters(";]),:"));

var PUNC_BEFORE_EXPRESSION = makePredicate(characters("[{(,;:"));

var PUNC_CHARS = makePredicate(characters("[]{}(),;:"));

/* -----[ Tokenizer ]----- */

// surrogate safe regexps adapted from https://github.com/mathiasbynens/unicode-8.0.0/tree/89b412d8a71ecca9ed593d9e9fa073ab64acfebe/Binary_Property
var UNICODE = {
    ID_Start: /[$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
    ID_Continue: /(?:[$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF])+/,
};

function get_full_char(str, pos) {
    if (is_surrogate_pair_head(str.charCodeAt(pos))) {
        if (is_surrogate_pair_tail(str.charCodeAt(pos + 1))) {
            return str.charAt(pos) + str.charAt(pos + 1);
        }
    } else if (is_surrogate_pair_tail(str.charCodeAt(pos))) {
        if (is_surrogate_pair_head(str.charCodeAt(pos - 1))) {
            return str.charAt(pos - 1) + str.charAt(pos);
        }
    }
    return str.charAt(pos);
}

function get_full_char_code(str, pos) {
    // https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Surrogates
    if (is_surrogate_pair_head(str.charCodeAt(pos))) {
        return 0x10000 + (str.charCodeAt(pos) - 0xd800 << 10) + str.charCodeAt(pos + 1) - 0xdc00;
    }
    return str.charCodeAt(pos);
}

function get_full_char_length(str) {
    var surrogates = 0;

    for (var i = 0; i < str.length; i++) {
        if (is_surrogate_pair_head(str.charCodeAt(i)) && is_surrogate_pair_tail(str.charCodeAt(i + 1))) {
            surrogates++;
            i++;
        }
    }

    return str.length - surrogates;
}

function from_char_code(code) {
    // Based on https://github.com/mathiasbynens/String.fromCodePoint/blob/master/fromcodepoint.js
    if (code > 0xFFFF) {
        code -= 0x10000;
        return (String.fromCharCode((code >> 10) + 0xD800) +
            String.fromCharCode((code % 0x400) + 0xDC00));
    }
    return String.fromCharCode(code);
}

function is_surrogate_pair_head(code) {
    return code >= 0xd800 && code <= 0xdbff;
}

function is_surrogate_pair_tail(code) {
    return code >= 0xdc00 && code <= 0xdfff;
}

function is_digit(code) {
    return code >= 48 && code <= 57;
}

function is_identifier_start(ch) {
    return UNICODE.ID_Start.test(ch);
}

function is_identifier_char(ch) {
    return UNICODE.ID_Continue.test(ch);
}

const BASIC_IDENT = /^[a-z_$][a-z0-9_$]*$/i;

function is_basic_identifier_string(str) {
    return BASIC_IDENT.test(str);
}

function is_identifier_string(str, allow_surrogates) {
    if (BASIC_IDENT.test(str)) {
        return true;
    }
    if (!allow_surrogates && /[\ud800-\udfff]/.test(str)) {
        return false;
    }
    var match = UNICODE.ID_Start.exec(str);
    if (!match || match.index !== 0) {
        return false;
    }

    str = str.slice(match[0].length);
    if (!str) {
        return true;
    }

    match = UNICODE.ID_Continue.exec(str);
    return !!match && match[0].length === str.length;
}

function parse_js_number(num, allow_e = true) {
    if (!allow_e && num.includes("e")) {
        return NaN;
    }
    if (RE_HEX_NUMBER.test(num)) {
        return parseInt(num.substr(2), 16);
    } else if (RE_OCT_NUMBER.test(num)) {
        return parseInt(num.substr(1), 8);
    } else if (RE_ES6_OCT_NUMBER.test(num)) {
        return parseInt(num.substr(2), 8);
    } else if (RE_BIN_NUMBER.test(num)) {
        return parseInt(num.substr(2), 2);
    } else if (RE_DEC_NUMBER.test(num)) {
        return parseFloat(num);
    } else {
        var val = parseFloat(num);
        if (val == num) return val;
    }
}

class JS_Parse_Error extends Error {
    constructor(message, filename, line, col, pos) {
        super();

        this.name = "SyntaxError";
        this.message = message;
        this.filename = filename;
        this.line = line;
        this.col = col;
        this.pos = pos;
    }
}

function js_error(message, filename, line, col, pos) {
    throw new JS_Parse_Error(message, filename, line, col, pos);
}

function is_token(token, type, val) {
    return token.type == type && (val == null || token.value == val);
}

var EX_EOF = {};

function tokenizer($TEXT, filename, html5_comments, shebang) {
    var S = {
        text            : $TEXT,
        filename        : filename,
        pos             : 0,
        tokpos          : 0,
        line            : 1,
        tokline         : 0,
        col             : 0,
        tokcol          : 0,
        newline_before  : false,
        regex_allowed   : false,
        brace_counter   : 0,
        template_braces : [],
        comments_before : [],
        directives      : {},
        directive_stack : []
    };

    function peek() { return get_full_char(S.text, S.pos); }

    // Used because parsing ?. involves a lookahead for a digit
    function is_option_chain_op() {
        const must_be_dot = S.text.charCodeAt(S.pos + 1) === 46;
        if (!must_be_dot) return false;

        const cannot_be_digit = S.text.charCodeAt(S.pos + 2);
        return cannot_be_digit < 48 || cannot_be_digit > 57;
    }

    function next(signal_eof, in_string) {
        var ch = get_full_char(S.text, S.pos++);
        if (signal_eof && !ch)
            throw EX_EOF;
        if (NEWLINE_CHARS.has(ch)) {
            S.newline_before = S.newline_before || !in_string;
            ++S.line;
            S.col = 0;
            if (ch == "\r" && peek() == "\n") {
                // treat a \r\n sequence as a single \n
                ++S.pos;
                ch = "\n";
            }
        } else {
            if (ch.length > 1) {
                ++S.pos;
                ++S.col;
            }
            ++S.col;
        }
        return ch;
    }

    function forward(i) {
        while (i--) next();
    }

    function looking_at(str) {
        return S.text.substr(S.pos, str.length) == str;
    }

    function find_eol() {
        var text = S.text;
        for (var i = S.pos, n = S.text.length; i < n; ++i) {
            var ch = text[i];
            if (NEWLINE_CHARS.has(ch))
                return i;
        }
        return -1;
    }

    function find(what, signal_eof) {
        var pos = S.text.indexOf(what, S.pos);
        if (signal_eof && pos == -1) throw EX_EOF;
        return pos;
    }

    function start_token() {
        S.tokline = S.line;
        S.tokcol = S.col;
        S.tokpos = S.pos;
    }

    var prev_was_dot = false;
    var previous_token = null;
    function token(type, value, is_comment) {
        S.regex_allowed = ((type == "operator" && !UNARY_POSTFIX.has(value)) ||
                           (type == "keyword" && KEYWORDS_BEFORE_EXPRESSION.has(value)) ||
                           (type == "punc" && PUNC_BEFORE_EXPRESSION.has(value))) ||
                           (type == "arrow");
        if (type == "punc" && (value == "." || value == "?.")) {
            prev_was_dot = true;
        } else if (!is_comment) {
            prev_was_dot = false;
        }
        const line     = S.tokline;
        const col      = S.tokcol;
        const pos      = S.tokpos;
        const nlb      = S.newline_before;
        const file     = filename;
        let comments_before = [];
        let comments_after  = [];

        if (!is_comment) {
            comments_before = S.comments_before;
            comments_after = S.comments_before = [];
        }
        S.newline_before = false;
        const tok = new AST_Token(type, value, line, col, pos, nlb, comments_before, comments_after, file);

        if (!is_comment) previous_token = tok;
        return tok;
    }

    function skip_whitespace() {
        while (WHITESPACE_CHARS.has(peek()))
            next();
    }

    function peek_next_token_start_or_newline() {
        var pos = S.pos;
        for (var in_multiline_comment = false; pos < S.text.length; ) {
            var ch = get_full_char(S.text, pos);
            if (NEWLINE_CHARS.has(ch)) {
                return { char: ch, pos: pos };
            } else if (in_multiline_comment) {
                if (ch == "*" && get_full_char(S.text, pos + 1) == "/") {
                    pos += 2;
                    in_multiline_comment = false;
                } else {
                    pos++;
                }
            } else if (!WHITESPACE_CHARS.has(ch)) {
                if (ch == "/") {
                    var next_ch = get_full_char(S.text, pos + 1);
                    if (next_ch == "/") {
                        pos = find_eol();
                        return { char: get_full_char(S.text, pos), pos: pos };
                    } else if (next_ch == "*") {
                        in_multiline_comment = true;
                        pos += 2;
                        continue;
                    }
                }
                return { char: ch, pos: pos };
            } else {
                pos++;
            }
        }
        return { char: null, pos: pos };
    }

    function ch_starts_binding_identifier(ch, pos) {
        if (ch == "\\") {
            return true;
        } else if (is_identifier_start(ch)) {
            RE_KEYWORD_RELATIONAL_OPERATORS.lastIndex = pos;
            if (RE_KEYWORD_RELATIONAL_OPERATORS.test(S.text)) {
                var after = get_full_char(S.text, RE_KEYWORD_RELATIONAL_OPERATORS.lastIndex);
                if (!is_identifier_char(after) && after != "\\") {
                    // "in" or "instanceof" are keywords, not binding identifiers
                    return false; 
                }
            }
            return true;
        }
        return false;
    }

    function read_while(pred) {
        var ret = "", ch, i = 0;
        while ((ch = peek()) && pred(ch, i++))
            ret += next();
        return ret;
    }

    function parse_error(err) {
        js_error(err, filename, S.tokline, S.tokcol, S.tokpos);
    }

    function read_num(prefix) {
        var has_e = false, after_e = false, has_x = false, has_dot = prefix == ".", is_big_int = false, numeric_separator = false;
        var num = read_while(function(ch, i) {
            if (is_big_int) return false;

            var code = ch.charCodeAt(0);
            switch (code) {
              case 95: // _
                return (numeric_separator = true);
              case 98: case 66: // bB
                return (has_x = true); // Can occur in hex sequence, don't return false yet
              case 111: case 79: // oO
              case 120: case 88: // xX
                return has_x ? false : (has_x = true);
              case 101: case 69: // eE
                return has_x ? true : has_e ? false : (has_e = after_e = true);
              case 45: // -
                return after_e || (i == 0 && !prefix);
              case 43: // +
                return after_e;
              case (after_e = false, 46): // .
                return (!has_dot && !has_x && !has_e) ? (has_dot = true) : false;
              case 110: // n
                is_big_int = true;
                return true;
            }

            return (
                code >= 48 && code <= 57 // 0-9
                || code >= 97 && code <= 102 // a-f
                || code >= 65 && code <= 70 // A-F
            );
        });
        if (prefix) num = prefix + num;

        LATEST_RAW = num;

        if (RE_OCT_NUMBER.test(num) && next_token.has_directive("use strict")) {
            parse_error("Legacy octal literals are not allowed in strict mode");
        }
        if (numeric_separator) {
            if (num.endsWith("_")) {
                parse_error("Numeric separators are not allowed at the end of numeric literals");
            } else if (num.includes("__")) {
                parse_error("Only one underscore is allowed as numeric separator");
            }
            num = num.replace(/_/g, "");
        }
        if (is_big_int) {
            const without_n = num.slice(0, -1);
            const allow_e = RE_HEX_NUMBER.test(without_n);
            const valid = parse_js_number(without_n, allow_e);
            if (!has_dot && RE_BIG_INT.test(num) && !isNaN(valid))
                return token("big_int", without_n);
            parse_error("Invalid or unexpected token");
        }
        var valid = parse_js_number(num);
        if (!isNaN(valid)) {
            return token("num", valid);
        } else {
            parse_error("Invalid syntax: " + num);
        }
    }

    function is_octal(ch) {
        return ch >= "0" && ch <= "7";
    }

    function read_escaped_char(in_string, strict_hex, template_string) {
        var ch = next(true, in_string);
        switch (ch.charCodeAt(0)) {
          case 110 : return "\n";
          case 114 : return "\r";
          case 116 : return "\t";
          case 98  : return "\b";
          case 118 : return "\u000b"; // \v
          case 102 : return "\f";
          case 120 : return String.fromCharCode(hex_bytes(2, strict_hex)); // \x
          case 117 : // \u
            if (peek() == "{") {
                next(true);
                if (peek() === "}")
                    parse_error("Expecting hex-character between {}");
                while (peek() == "0") next(true); // No significance
                var result, length = find("}", true) - S.pos;
                // Avoid 32 bit integer overflow (1 << 32 === 1)
                // We know first character isn't 0 and thus out of range anyway
                if (length > 6 || (result = hex_bytes(length, strict_hex)) > 0x10FFFF) {
                    parse_error("Unicode reference out of bounds");
                }
                next(true);
                return from_char_code(result);
            }
            return String.fromCharCode(hex_bytes(4, strict_hex));
          case 10  : return ""; // newline
          case 13  :            // \r
            if (peek() == "\n") { // DOS newline
                next(true, in_string);
                return "";
            }
        }
        if (is_octal(ch)) {
            if (template_string && strict_hex) {
                const represents_null_character = ch === "0" && !is_octal(peek());
                if (!represents_null_character) {
                    parse_error("Octal escape sequences are not allowed in template strings");
                }
            }
            return read_octal_escape_sequence(ch, strict_hex);
        }
        return ch;
    }

    function read_octal_escape_sequence(ch, strict_octal) {
        // Read
        var p = peek();
        if (p >= "0" && p <= "7") {
            ch += next(true);
            if (ch[0] <= "3" && (p = peek()) >= "0" && p <= "7")
                ch += next(true);
        }

        // Parse
        if (ch === "0") return "\0";
        if (ch.length > 0 && next_token.has_directive("use strict") && strict_octal)
            parse_error("Legacy octal escape sequences are not allowed in strict mode");
        return String.fromCharCode(parseInt(ch, 8));
    }

    function hex_bytes(n, strict_hex) {
        var num = 0;
        for (; n > 0; --n) {
            if (!strict_hex && isNaN(parseInt(peek(), 16))) {
                return parseInt(num, 16) || "";
            }
            var digit = next(true);
            if (isNaN(parseInt(digit, 16)))
                parse_error("Invalid hex-character pattern in string");
            num += digit;
        }
        return parseInt(num, 16);
    }

    var read_string = with_eof_error("Unterminated string constant", function() {
        const start_pos = S.pos;
        var quote = next(), ret = [];
        for (;;) {
            var ch = next(true, true);
            if (ch == "\\") ch = read_escaped_char(true, true);
            else if (ch == "\r" || ch == "\n") parse_error("Unterminated string constant");
            else if (ch == quote) break;
            ret.push(ch);
        }
        var tok = token("string", ret.join(""));
        LATEST_RAW = S.text.slice(start_pos, S.pos);
        tok.quote = quote;
        return tok;
    });

    var read_template_characters = with_eof_error("Unterminated template", function(begin) {
        if (begin) {
            S.template_braces.push(S.brace_counter);
        }
        var content = "", raw = "", ch, tok;
        next(true, true);
        while ((ch = next(true, true)) != "`") {
            if (ch == "\r") {
                if (peek() == "\n") ++S.pos;
                ch = "\n";
            } else if (ch == "$" && peek() == "{") {
                next(true, true);
                S.brace_counter++;
                tok = token(begin ? "template_head" : "template_cont", content);
                TEMPLATE_RAWS.set(tok, raw);
                tok.template_end = false;
                return tok;
            }

            raw += ch;
            if (ch == "\\") {
                var tmp = S.pos;
                var prev_is_tag = previous_token && (previous_token.type === "name" || previous_token.type === "punc" && (previous_token.value === ")" || previous_token.value === "]"));
                ch = read_escaped_char(true, !prev_is_tag, true);
                raw += S.text.substr(tmp, S.pos - tmp);
            }

            content += ch;
        }
        S.template_braces.pop();
        tok = token(begin ? "template_head" : "template_cont", content);
        TEMPLATE_RAWS.set(tok, raw);
        tok.template_end = true;
        return tok;
    });

    function skip_line_comment(type) {
        var regex_allowed = S.regex_allowed;
        var i = find_eol(), ret;
        if (i == -1) {
            ret = S.text.substr(S.pos);
            S.pos = S.text.length;
        } else {
            ret = S.text.substring(S.pos, i);
            S.pos = i;
        }
        S.col = S.tokcol + (S.pos - S.tokpos);
        S.comments_before.push(token(type, ret, true));
        S.regex_allowed = regex_allowed;
        return next_token;
    }

    var skip_multiline_comment = with_eof_error("Unterminated multiline comment", function() {
        var regex_allowed = S.regex_allowed;
        var i = find("*/", true);
        var text = S.text.substring(S.pos, i).replace(/\r\n|\r|\u2028|\u2029/g, "\n");
        // update stream position
        forward(get_full_char_length(text) /* text length doesn't count \r\n as 2 char while S.pos - i does */ + 2);
        S.comments_before.push(token("comment2", text, true));
        S.newline_before = S.newline_before || text.includes("\n");
        S.regex_allowed = regex_allowed;
        return next_token;
    });

    var read_name = function () {
        let start = S.pos, end = start - 1, ch = "c";

        while (
            (ch = S.text.charAt(++end))
            && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z")
        );

        // 0x7F is very rare in actual code, so we compare it to "~" (0x7E)
        if (end > start + 1 && ch && ch !== "\\" && !is_identifier_char(ch) && ch <= "~") {
            S.pos += end - start;
            S.col += end - start;
            return S.text.slice(start, S.pos);
        }

        return read_name_hard();
    };

    var read_name_hard = with_eof_error("Unterminated identifier name", function() {
        var name = [], ch, escaped = false;
        var read_escaped_identifier_char = function() {
            escaped = true;
            next();
            if (peek() !== "u") {
                parse_error("Expecting UnicodeEscapeSequence -- uXXXX or u{XXXX}");
            }
            return read_escaped_char(false, true);
        };

        // Read first character (ID_Start)
        if ((ch = peek()) === "\\") {
            ch = read_escaped_identifier_char();
            if (!is_identifier_start(ch)) {
                parse_error("First identifier char is an invalid identifier char");
            }
        } else if (is_identifier_start(ch)) {
            next();
        } else {
            return "";
        }

        name.push(ch);

        // Read ID_Continue
        while ((ch = peek()) != null) {
            if ((ch = peek()) === "\\") {
                ch = read_escaped_identifier_char();
                if (!is_identifier_char(ch)) {
                    parse_error("Invalid escaped identifier char");
                }
            } else {
                if (!is_identifier_char(ch)) {
                    break;
                }
                next();
            }
            name.push(ch);
        }
        const name_str = name.join("");
        if (RESERVED_WORDS.has(name_str) && escaped) {
            parse_error("Escaped characters are not allowed in keywords");
        }
        return name_str;
    });

    var read_regexp = with_eof_error("Unterminated regular expression", function(source) {
        var prev_backslash = false, ch, in_class = false;
        while ((ch = next(true))) if (NEWLINE_CHARS.has(ch)) {
            parse_error("Unexpected line terminator");
        } else if (prev_backslash) {
            if (/^[\u0000-\u007F]$/.test(ch)) {
                source += "\\" + ch;
            } else {
                // Remove the useless slash before the escape, but only for characters that won't be added to regexp syntax
                source += ch;
            }
            prev_backslash = false;
        } else if (ch == "[") {
            in_class = true;
            source += ch;
        } else if (ch == "]" && in_class) {
            in_class = false;
            source += ch;
        } else if (ch == "/" && !in_class) {
            break;
        } else if (ch == "\\") {
            prev_backslash = true;
        } else {
            source += ch;
        }
        const flags = read_name();
        return token("regexp", "/" + source + "/" + flags);
    });

    function read_operator(prefix) {
        function grow(op) {
            if (!peek()) return op;
            var bigger = op + peek();
            if (OPERATORS.has(bigger)) {
                next();
                return grow(bigger);
            } else {
                return op;
            }
        }
        return token("operator", grow(prefix || next()));
    }

    function handle_slash() {
        next();
        switch (peek()) {
          case "/":
            next();
            return skip_line_comment("comment1");
          case "*":
            next();
            return skip_multiline_comment();
        }
        return S.regex_allowed ? read_regexp("") : read_operator("/");
    }

    function handle_eq_sign() {
        next();
        if (peek() === ">") {
            next();
            return token("arrow", "=>");
        } else {
            return read_operator("=");
        }
    }

    function handle_dot() {
        next();
        if (is_digit(peek().charCodeAt(0))) {
            return read_num(".");
        }
        if (peek() === ".") {
            next();  // Consume second dot
            next();  // Consume third dot
            return token("expand", "...");
        }

        return token("punc", ".");
    }

    function read_word() {
        var word = read_name();
        if (prev_was_dot) return token("name", word);
        return KEYWORDS_ATOM.has(word) ? token("atom", word)
            : !KEYWORDS.has(word) ? token("name", word)
            : OPERATORS.has(word) ? token("operator", word)
            : token("keyword", word);
    }

    function read_private_word() {
        next();
        return token("privatename", read_name());
    }

    function with_eof_error(eof_error, cont) {
        return function(x) {
            try {
                return cont(x);
            } catch(ex) {
                if (ex === EX_EOF) parse_error(eof_error);
                else throw ex;
            }
        };
    }

    function next_token(force_regexp) {
        if (force_regexp != null)
            return read_regexp(force_regexp);
        if (shebang && S.pos == 0 && looking_at("#!")) {
            start_token();
            forward(2);
            skip_line_comment("comment5");
        }
        for (;;) {
            skip_whitespace();
            start_token();
            if (html5_comments) {
                if (looking_at("<!--")) {
                    forward(4);
                    skip_line_comment("comment3");
                    continue;
                }
                if (looking_at("-->") && S.newline_before) {
                    forward(3);
                    skip_line_comment("comment4");
                    continue;
                }
            }
            var ch = peek();
            if (!ch) return token("eof");
            var code = ch.charCodeAt(0);
            switch (code) {
              case 34: case 39: return read_string();
              case 46: return handle_dot();
              case 47: {
                  var tok = handle_slash();
                  if (tok === next_token) continue;
                  return tok;
              }
              case 61: return handle_eq_sign();
              case 63: {
                  if (!is_option_chain_op()) break;  // Handled below

                  next(); // ?
                  next(); // .

                  return token("punc", "?.");
              }
              case 96: return read_template_characters(true);
              case 123:
                S.brace_counter++;
                break;
              case 125:
                S.brace_counter--;
                if (S.template_braces.length > 0
                    && S.template_braces[S.template_braces.length - 1] === S.brace_counter)
                    return read_template_characters(false);
                break;
            }
            if (is_digit(code)) return read_num();
            if (PUNC_CHARS.has(ch)) return token("punc", next());
            if (OPERATOR_CHARS.has(ch)) return read_operator();
            if (code == 92 || is_identifier_start(ch)) return read_word();
            if (code == 35) return read_private_word();
            break;
        }
        parse_error("Unexpected character '" + ch + "'");
    }

    next_token.next = next;
    next_token.peek = peek;

    next_token.context = function(nc) {
        if (nc) S = nc;
        return S;
    };

    next_token.add_directive = function(directive) {
        S.directive_stack[S.directive_stack.length - 1].push(directive);

        if (S.directives[directive] === undefined) {
            S.directives[directive] = 1;
        } else {
            S.directives[directive]++;
        }
    };

    next_token.push_directives_stack = function() {
        S.directive_stack.push([]);
    };

    next_token.pop_directives_stack = function() {
        var directives = S.directive_stack[S.directive_stack.length - 1];

        for (var i = 0; i < directives.length; i++) {
            S.directives[directives[i]]--;
        }

        S.directive_stack.pop();
    };

    next_token.has_directive = function(directive) {
        return S.directives[directive] > 0;
    };

    next_token.peek_next_token_start_or_newline = peek_next_token_start_or_newline;
    next_token.ch_starts_binding_identifier = ch_starts_binding_identifier;

    return next_token;

}

/* -----[ Parser (constants) ]----- */

var UNARY_PREFIX = makePredicate([
    "typeof",
    "void",
    "delete",
    "--",
    "++",
    "!",
    "~",
    "-",
    "+"
]);

var UNARY_POSTFIX = makePredicate([ "--", "++" ]);

var ASSIGNMENT = makePredicate([ "=", "+=", "-=", "??=", "&&=", "||=", "/=", "*=", "**=", "%=", ">>=", "<<=", ">>>=", "|=", "^=", "&=" ]);

var LOGICAL_ASSIGNMENT = makePredicate([ "??=", "&&=", "||=" ]);

var PRECEDENCE = (function(a, ret) {
    for (var i = 0; i < a.length; ++i) {
        for (const op of a[i]) {
            ret[op] = i + 1;
        }
    }
    return ret;
})(
    [
        ["||"],
        ["??"],
        ["&&"],
        ["|"],
        ["^"],
        ["&"],
        ["==", "===", "!=", "!=="],
        ["<", ">", "<=", ">=", "in", "instanceof"],
        [">>", "<<", ">>>"],
        ["+", "-"],
        ["*", "/", "%"],
        ["**"]
    ],
    {}
);

var ATOMIC_START_TOKEN = makePredicate([ "atom", "num", "big_int", "string", "regexp", "name"]);

/* -----[ Parser ]----- */

function parse($TEXT, options) {
    // maps start tokens to count of comments found outside of their parens
    // Example: /* I count */ ( /* I don't */ foo() )
    // Useful because comments_before property of call with parens outside
    // contains both comments inside and outside these parens. Used to find the
    // right #__PURE__ comments for an expression
    const outer_comments_before_counts = new WeakMap();

    options = defaults(options, {
        bare_returns   : false,
        ecma           : null,  // Legacy
        expression     : false,
        filename       : null,
        html5_comments : true,
        module         : false,
        shebang        : true,
        strict         : false,
        toplevel       : null,
    }, true);

    var S = {
        input         : (typeof $TEXT == "string"
                         ? tokenizer($TEXT, options.filename,
                                     options.html5_comments, options.shebang)
                         : $TEXT),
        token         : null,
        prev          : null,
        peeked        : null,
        in_function   : 0,
        in_async      : -1,
        in_generator  : -1,
        in_directives : true,
        in_loop       : 0,
        labels        : []
    };

    S.token = next();

    function is(type, value) {
        return is_token(S.token, type, value);
    }

    function peek() { return S.peeked || (S.peeked = S.input()); }

    function next() {
        S.prev = S.token;

        if (!S.peeked) peek();
        S.token = S.peeked;
        S.peeked = null;
        S.in_directives = S.in_directives && (
            S.token.type == "string" || is("punc", ";")
        );
        return S.token;
    }

    function prev() {
        return S.prev;
    }

    function croak(msg, line, col, pos) {
        var ctx = S.input.context();
        js_error(msg,
                 ctx.filename,
                 line != null ? line : ctx.tokline,
                 col != null ? col : ctx.tokcol,
                 pos != null ? pos : ctx.tokpos);
    }

    function token_error(token, msg) {
        croak(msg, token.line, token.col);
    }

    function unexpected(token) {
        if (token == null)
            token = S.token;
        token_error(token, "Unexpected token: " + token.type + " (" + token.value + ")");
    }

    function expect_token(type, val) {
        if (is(type, val)) {
            return next();
        }
        token_error(S.token, "Unexpected token " + S.token.type + " «" + S.token.value + "»" + ", expected " + type + " «" + val + "»");
    }

    function expect(punc) { return expect_token("punc", punc); }

    function has_newline_before(token) {
        return token.nlb || !token.comments_before.every((comment) => !comment.nlb);
    }

    function can_insert_semicolon() {
        return !options.strict
            && (is("eof") || is("punc", "}") || has_newline_before(S.token));
    }

    function is_in_generator() {
        return S.in_generator === S.in_function;
    }

    function is_in_async() {
        return S.in_async === S.in_function;
    }

    function can_await() {
        return (
            S.in_async === S.in_function
            || S.in_function === 0 && S.input.has_directive("use strict")
        );
    }

    function semicolon(optional) {
        if (is("punc", ";")) next();
        else if (!optional && !can_insert_semicolon()) unexpected();
    }

    function parenthesised() {
        expect("(");
        var exp = expression(true);
        expect(")");
        return exp;
    }

    function embed_tokens(parser) {
        return function _embed_tokens_wrapper(...args) {
            const start = S.token;
            const expr = parser(...args);
            expr.start = start;
            expr.end = prev();
            return expr;
        };
    }

    function handle_regexp() {
        if (is("operator", "/") || is("operator", "/=")) {
            S.peeked = null;
            S.token = S.input(S.token.value.substr(1)); // force regexp
        }
    }

    var statement = embed_tokens(function statement(is_export_default, is_for_body, is_if_body) {
        handle_regexp();
        switch (S.token.type) {
          case "string":
            if (S.in_directives) {
                var token = peek();
                if (!LATEST_RAW.includes("\\")
                    && (is_token(token, "punc", ";")
                        || is_token(token, "punc", "}")
                        || has_newline_before(token)
                        || is_token(token, "eof"))) {
                    S.input.add_directive(S.token.value);
                } else {
                    S.in_directives = false;
                }
            }
            var dir = S.in_directives, stat = simple_statement();
            return dir && stat.body instanceof AST_String ? new AST_Directive(stat.body) : stat;
          case "template_head":
          case "num":
          case "big_int":
          case "regexp":
          case "operator":
          case "atom":
            return simple_statement();

          case "name":
            if (S.token.value == "async" && is_token(peek(), "keyword", "function")) {
                next();
                next();
                if (is_for_body) {
                    croak("functions are not allowed as the body of a loop");
                }
                return function_(AST_Defun, false, true, is_export_default);
            }
            if (S.token.value == "import" && !is_token(peek(), "punc", "(") && !is_token(peek(), "punc", ".")) {
                next();
                var node = import_statement();
                semicolon();
                return node;
            }
            if (S.token.value == "using" && is_token(peek(), "name") && !has_newline_before(peek())) {
                next();
                var node = using_();
                semicolon();
                return node;
            }
            if (S.token.value == "await" && can_await() && is_token(peek(), "name", "using") && !has_newline_before(peek())) {
                var next_next = S.input.peek_next_token_start_or_newline();
                if (S.input.ch_starts_binding_identifier(next_next.char, next_next.pos)) {
                    next();
                    // The "using" token will be consumed by the await_using_ function.
                    var node = await_using_();
                    semicolon();
                    return node;
                }
            }
            return is_token(peek(), "punc", ":")
                ? labeled_statement()
                : simple_statement();

          case "privatename":
            if(!S.in_class)
              croak("Private field must be used in an enclosing class");
            return simple_statement();

          case "punc":
            switch (S.token.value) {
              case "{":
                return new AST_BlockStatement({
                    start : S.token,
                    body  : block_(),
                    end   : prev()
                });
              case "[":
              case "(":
                return simple_statement();
              case ";":
                S.in_directives = false;
                next();
                return new AST_EmptyStatement();
              default:
                unexpected();
            }

          case "keyword":
            switch (S.token.value) {
              case "break":
                next();
                return break_cont(AST_Break);

              case "continue":
                next();
                return break_cont(AST_Continue);

              case "debugger":
                next();
                semicolon();
                return new AST_Debugger();

              case "do":
                next();
                var body = in_loop(statement);
                expect_token("keyword", "while");
                var condition = parenthesised();
                semicolon(true);
                return new AST_Do({
                    body      : body,
                    condition : condition
                });

              case "while":
                next();
                return new AST_While({
                    condition : parenthesised(),
                    body      : in_loop(function() { return statement(false, true); })
                });

              case "for":
                next();
                return for_();

              case "class":
                next();
                if (is_for_body) {
                    croak("classes are not allowed as the body of a loop");
                }
                if (is_if_body) {
                    croak("classes are not allowed as the body of an if");
                }
                return class_(AST_DefClass, is_export_default);

              case "function":
                next();
                if (is_for_body) {
                    croak("functions are not allowed as the body of a loop");
                }
                return function_(AST_Defun, false, false, is_export_default);

              case "if":
                next();
                return if_();

              case "return":
                if (S.in_function == 0 && !options.bare_returns)
                    croak("'return' outside of function");
                next();
                var value = null;
                if (is("punc", ";")) {
                    next();
                } else if (!can_insert_semicolon()) {
                    value = expression(true);
                    semicolon();
                }
                return new AST_Return({
                    value: value
                });

              case "switch":
                next();
                return new AST_Switch({
                    expression : parenthesised(),
                    body       : in_loop(switch_body_)
                });

              case "throw":
                next();
                if (has_newline_before(S.token))
                    croak("Illegal newline after 'throw'");
                var value = expression(true);
                semicolon();
                return new AST_Throw({
                    value: value
                });

              case "try":
                next();
                return try_();

              case "var":
                next();
                var node = var_();
                semicolon();
                return node;

              case "let":
                next();
                var node = let_();
                semicolon();
                return node;

              case "const":
                next();
                var node = const_();
                semicolon();
                return node;

              case "with":
                if (S.input.has_directive("use strict")) {
                    croak("Strict mode may not include a with statement");
                }
                next();
                return new AST_With({
                    expression : parenthesised(),
                    body       : statement()
                });

              case "export":
                if (!is_token(peek(), "punc", "(")) {
                    next();
                    var node = export_statement();
                    if (is("punc", ";")) semicolon();
                    return node;
                }
            }
        }
        unexpected();
    });

    function labeled_statement() {
        var label = as_symbol(AST_Label);
        if (label.name === "await" && is_in_async()) {
            token_error(S.prev, "await cannot be used as label inside async function");
        }
        if (S.labels.some((l) => l.name === label.name)) {
            // ECMA-262, 12.12: An ECMAScript program is considered
            // syntactically incorrect if it contains a
            // LabelledStatement that is enclosed by a
            // LabelledStatement with the same Identifier as label.
            croak("Label " + label.name + " defined twice");
        }
        expect(":");
        S.labels.push(label);
        var stat = statement();
        S.labels.pop();
        if (!(stat instanceof AST_IterationStatement)) {
            // check for `continue` that refers to this label.
            // those should be reported as syntax errors.
            // https://github.com/mishoo/UglifyJS2/issues/287
            label.references.forEach(function(ref) {
                if (ref instanceof AST_Continue) {
                    ref = ref.label.start;
                    croak("Continue label `" + label.name + "` refers to non-IterationStatement.",
                          ref.line, ref.col, ref.pos);
                }
            });
        }
        return new AST_LabeledStatement({ body: stat, label: label });
    }

    function simple_statement(tmp) {
        return new AST_SimpleStatement({ body: (tmp = expression(true), semicolon(), tmp) });
    }

    function break_cont(type) {
        var label = null, ldef;
        if (!can_insert_semicolon()) {
            label = as_symbol(AST_LabelRef, true);
        }
        if (label != null) {
            ldef = S.labels.find((l) => l.name === label.name);
            if (!ldef)
                croak("Undefined label " + label.name);
            label.thedef = ldef;
        } else if (S.in_loop == 0)
            croak(type.TYPE + " not inside a loop or switch");
        semicolon();
        var stat = new type({ label: label });
        if (ldef) ldef.references.push(stat);
        return stat;
    }

    function for_() {
        var for_await_error = "`for await` invalid in this context";
        var await_tok = S.token;
        if (await_tok.type == "name" && await_tok.value == "await") {
            if (!can_await()) {
                token_error(await_tok, for_await_error);
            }
            next();
        } else {
            await_tok = false;
        }
        expect("(");
        var init = null;
        if (!is("punc", ";")) {
            init =
                is("keyword", "var") ? (next(), var_(true)) :
                is("keyword", "let") ? (next(), let_(true)) :
                is("keyword", "const") ? (next(), const_(true)) :
                is("name", "using") && is_token(peek(), "name") && (peek().value != "of" || S.input.peek_next_token_start_or_newline().char == "=") ? (next(), using_(true)) :
                is("name", "await") && can_await() && is_token(peek(), "name", "using") ? (next(), await_using_(true)) :
                                       expression(true, true);
            var is_in = is("operator", "in");
            var is_of = is("name", "of");
            if (await_tok && !is_of) {
                token_error(await_tok, for_await_error);
            }
            if (is_in || is_of) {
                if (init instanceof AST_DefinitionsLike) {
                    if (init.definitions.length > 1)
                        token_error(init.start, "Only one variable declaration allowed in for..in loop");
                    if (is_in && init instanceof AST_Using) {
                        token_error(init.start, "Invalid using declaration in for..in loop");
                    }
                } else if (!(is_assignable(init) || (init = to_destructuring(init)) instanceof AST_Destructuring)) {
                    token_error(init.start, "Invalid left-hand side in for..in loop");
                }
                next();
                if (is_in) {
                    return for_in(init);
                } else {
                    return for_of(init, !!await_tok);
                }
            }
        } else if (await_tok) {
            token_error(await_tok, for_await_error);
        }
        return regular_for(init);
    }

    function regular_for(init) {
        expect(";");
        var test = is("punc", ";") ? null : expression(true);
        expect(";");
        var step = is("punc", ")") ? null : expression(true);
        expect(")");
        return new AST_For({
            init      : init,
            condition : test,
            step      : step,
            body      : in_loop(function() { return statement(false, true); })
        });
    }

    function for_of(init, is_await) {
        var lhs = init instanceof AST_DefinitionsLike ? init.definitions[0].name : null;
        var obj = expression(true);
        expect(")");
        return new AST_ForOf({
            await  : is_await,
            init   : init,
            name   : lhs,
            object : obj,
            body   : in_loop(function() { return statement(false, true); })
        });
    }

    function for_in(init) {
        var obj = expression(true);
        expect(")");
        return new AST_ForIn({
            init   : init,
            object : obj,
            body   : in_loop(function() { return statement(false, true); })
        });
    }

    var arrow_function = function(start, argnames, is_async) {
        if (has_newline_before(S.token)) {
            croak("Unexpected newline before arrow (=>)");
        }

        expect_token("arrow", "=>");

        var body = _function_body(is("punc", "{"), false, is_async);

        return new AST_Arrow({
            start    : start,
            end      : body.end,
            async    : is_async,
            argnames : argnames,
            body     : body
        });
    };

    var function_ = function(ctor, is_generator, is_async, is_export_default) {
        var in_statement = ctor === AST_Defun;
        if (is("operator", "*")) {
            is_generator = true;
            next();
        }

        var name = is("name") ? as_symbol(in_statement ? AST_SymbolDefun : AST_SymbolLambda) : null;
        if (in_statement && !name) {
            if (is_export_default) {
                ctor = AST_Function;
            } else {
                unexpected();
            }
        }

        if (name && ctor !== AST_Accessor && !(name instanceof AST_SymbolDeclaration))
            unexpected(prev());

        var args = [];
        var body = _function_body(true, is_generator, is_async, name, args);
        return new ctor({
            start : args.start,
            end   : body.end,
            is_generator: is_generator,
            async : is_async,
            name  : name,
            argnames: args,
            body  : body
        });
    };

    class UsedParametersTracker {
        constructor(is_parameter, strict, duplicates_ok = false) {
            this.is_parameter = is_parameter;
            this.duplicates_ok = duplicates_ok;
            this.parameters = new Set();
            this.duplicate = null;
            this.default_assignment = false;
            this.spread = false;
            this.strict_mode = !!strict;
        }
        add_parameter(token) {
            if (this.parameters.has(token.value)) {
                if (this.duplicate === null) {
                    this.duplicate = token;
                }
                this.check_strict();
            } else {
                this.parameters.add(token.value);
                if (this.is_parameter) {
                    switch (token.value) {
                      case "arguments":
                      case "eval":
                      case "yield":
                        if (this.strict_mode) {
                            token_error(token, "Unexpected " + token.value + " identifier as parameter inside strict mode");
                        }
                        break;
                      default:
                        if (RESERVED_WORDS.has(token.value)) {
                            unexpected();
                        }
                    }
                }
            }
        }
        mark_default_assignment(token) {
            if (this.default_assignment === false) {
                this.default_assignment = token;
            }
        }
        mark_spread(token) {
            if (this.spread === false) {
                this.spread = token;
            }
        }
        mark_strict_mode() {
            this.strict_mode = true;
        }
        is_strict() {
            return this.default_assignment !== false || this.spread !== false || this.strict_mode;
        }
        check_strict() {
            if (this.is_strict() && this.duplicate !== null && !this.duplicates_ok) {
                token_error(this.duplicate, "Parameter " + this.duplicate.value + " was used already");
            }
        }
    }

    function parameters(params) {
        var used_parameters = new UsedParametersTracker(true, S.input.has_directive("use strict"));

        expect("(");

        while (!is("punc", ")")) {
            var param = parameter(used_parameters);
            params.push(param);

            if (!is("punc", ")")) {
                expect(",");
            }

            if (param instanceof AST_Expansion) {
                break;
            }
        }

        next();
    }

    function parameter(used_parameters, symbol_type) {
        var param;
        var expand = false;
        if (used_parameters === undefined) {
            used_parameters = new UsedParametersTracker(true, S.input.has_directive("use strict"));
        }
        if (is("expand", "...")) {
            expand = S.token;
            used_parameters.mark_spread(S.token);
            next();
        }
        param = binding_element(used_parameters, symbol_type);

        if (is("operator", "=") && expand === false) {
            used_parameters.mark_default_assignment(S.token);
            next();
            param = new AST_DefaultAssign({
                start: param.start,
                left: param,
                operator: "=",
                right: expression(false),
                end: S.token
            });
        }

        if (expand !== false) {
            if (!is("punc", ")")) {
                unexpected();
            }
            param = new AST_Expansion({
                start: expand,
                expression: param,
                end: expand
            });
        }
        used_parameters.check_strict();

        return param;
    }

    function binding_element(used_parameters, symbol_type) {
        var elements = [];
        var first = true;
        var is_expand = false;
        var expand_token;
        var first_token = S.token;
        if (used_parameters === undefined) {
            const strict = S.input.has_directive("use strict");
            const duplicates_ok = symbol_type === AST_SymbolVar;
            used_parameters = new UsedParametersTracker(false, strict, duplicates_ok);
        }
        symbol_type = symbol_type === undefined ? AST_SymbolFunarg : symbol_type;
        if (is("punc", "[")) {
            next();
            while (!is("punc", "]")) {
                if (first) {
                    first = false;
                } else {
                    expect(",");
                }

                if (is("expand", "...")) {
                    is_expand = true;
                    expand_token = S.token;
                    used_parameters.mark_spread(S.token);
                    next();
                }
                if (is("punc")) {
                    switch (S.token.value) {
                      case ",":
                        elements.push(new AST_Hole({
                            start: S.token,
                            end: S.token
                        }));
                        continue;
                      case "]": // Trailing comma after last element
                        break;
                      case "[":
                      case "{":
                        elements.push(binding_element(used_parameters, symbol_type));
                        break;
                      default:
                        unexpected();
                    }
                } else if (is("name")) {
                    used_parameters.add_parameter(S.token);
                    elements.push(as_symbol(symbol_type));
                } else {
                    croak("Invalid function parameter");
                }
                if (is("operator", "=") && is_expand === false) {
                    used_parameters.mark_default_assignment(S.token);
                    next();
                    elements[elements.length - 1] = new AST_DefaultAssign({
                        start: elements[elements.length - 1].start,
                        left: elements[elements.length - 1],
                        operator: "=",
                        right: expression(false),
                        end: S.token
                    });
                }
                if (is_expand) {
                    if (!is("punc", "]")) {
                        croak("Rest element must be last element");
                    }
                    elements[elements.length - 1] = new AST_Expansion({
                        start: expand_token,
                        expression: elements[elements.length - 1],
                        end: expand_token
                    });
                }
            }
            expect("]");
            used_parameters.check_strict();
            return new AST_Destructuring({
                start: first_token,
                names: elements,
                is_array: true,
                end: prev()
            });
        } else if (is("punc", "{")) {
            next();
            while (!is("punc", "}")) {
                if (first) {
                    first = false;
                } else {
                    expect(",");
                }
                if (is("expand", "...")) {
                    is_expand = true;
                    expand_token = S.token;
                    used_parameters.mark_spread(S.token);
                    next();
                }
                if (is("name") && (is_token(peek(), "punc") || is_token(peek(), "operator")) && [",", "}", "="].includes(peek().value)) {
                    used_parameters.add_parameter(S.token);
                    var start = prev();
                    var value = as_symbol(symbol_type);
                    if (is_expand) {
                        elements.push(new AST_Expansion({
                            start: expand_token,
                            expression: value,
                            end: value.end,
                        }));
                    } else {
                        elements.push(new AST_ObjectKeyVal({
                            start: start,
                            key: value.name,
                            value: value,
                            end: value.end,
                        }));
                    }
                } else if (is("punc", "}")) {
                    continue; // Allow trailing hole
                } else {
                    var property_token = S.token;
                    var property = as_property_name();
                    if (property === null) {
                        unexpected(prev());
                    } else if (prev().type === "name" && !is("punc", ":")) {
                        elements.push(new AST_ObjectKeyVal({
                            start: prev(),
                            key: property,
                            value: new symbol_type({
                                start: prev(),
                                name: property,
                                end: prev()
                            }),
                            end: prev()
                        }));
                    } else {
                        expect(":");
                        elements.push(new AST_ObjectKeyVal({
                            start: property_token,
                            quote: property_token.quote,
                            key: property,
                            value: binding_element(used_parameters, symbol_type),
                            end: prev()
                        }));
                    }
                }
                if (is_expand) {
                    if (!is("punc", "}")) {
                        croak("Rest element must be last element");
                    }
                } else if (is("operator", "=")) {
                    used_parameters.mark_default_assignment(S.token);
                    next();
                    elements[elements.length - 1].value = new AST_DefaultAssign({
                        start: elements[elements.length - 1].value.start,
                        left: elements[elements.length - 1].value,
                        operator: "=",
                        right: expression(false),
                        end: S.token
                    });
                }
            }
            expect("}");
            used_parameters.check_strict();
            return new AST_Destructuring({
                start: first_token,
                names: elements,
                is_array: false,
                end: prev()
            });
        } else if (is("name")) {
            used_parameters.add_parameter(S.token);
            return as_symbol(symbol_type);
        } else {
            croak("Invalid function parameter");
        }
    }

    function params_or_seq_(allow_arrows, maybe_sequence) {
        var spread_token;
        var invalid_sequence;
        var trailing_comma;
        var a = [];
        expect("(");
        while (!is("punc", ")")) {
            if (spread_token) unexpected(spread_token);
            if (is("expand", "...")) {
                spread_token = S.token;
                if (maybe_sequence) invalid_sequence = S.token;
                next();
                a.push(new AST_Expansion({
                    start: prev(),
                    expression: expression(),
                    end: S.token,
                }));
            } else {
                a.push(expression());
            }
            if (!is("punc", ")")) {
                expect(",");
                if (is("punc", ")")) {
                    trailing_comma = prev();
                    if (maybe_sequence) invalid_sequence = trailing_comma;
                }
            }
        }
        expect(")");
        if (allow_arrows && is("arrow", "=>")) {
            if (spread_token && trailing_comma) unexpected(trailing_comma);
        } else if (invalid_sequence) {
            unexpected(invalid_sequence);
        }
        return a;
    }

    function _function_body(block, generator, is_async, name, args) {
        var loop = S.in_loop;
        var labels = S.labels;
        var current_generator = S.in_generator;
        var current_async = S.in_async;
        ++S.in_function;
        if (generator)
            S.in_generator = S.in_function;
        if (is_async)
            S.in_async = S.in_function;
        if (args) parameters(args);
        if (block)
            S.in_directives = true;
        S.in_loop = 0;
        S.labels = [];
        if (block) {
            S.input.push_directives_stack();
            var a = block_();
            if (name) _verify_symbol(name);
            if (args) args.forEach(_verify_symbol);
            S.input.pop_directives_stack();
        } else {
            var a = [new AST_Return({
                start: S.token,
                value: expression(false),
                end: S.token
            })];
        }
        --S.in_function;
        S.in_loop = loop;
        S.labels = labels;
        S.in_generator = current_generator;
        S.in_async = current_async;
        return a;
    }

    function _await_expression() {
        // Previous token must be "await" and not be interpreted as an identifier
        if (!can_await()) {
            croak("Unexpected await expression outside async function",
                S.prev.line, S.prev.col, S.prev.pos);
        }
        // the await expression is parsed as a unary expression in Babel
        return new AST_Await({
            start: prev(),
            end: S.token,
            expression : maybe_unary(true),
        });
    }

    function _yield_expression() {
        var start = S.token;
        var star = false;
        var has_expression = true;

        // Attempt to get expression or star (and then the mandatory expression)
        // behind yield on the same line.
        //
        // If nothing follows on the same line of the yieldExpression,
        // it should default to the value `undefined` for yield to return.
        // In that case, the `undefined` stored as `null` in ast.
        //
        // Note 1: It isn't allowed for yield* to close without an expression
        // Note 2: If there is a nlb between yield and star, it is interpret as
        //         yield <explicit undefined> <inserted automatic semicolon> *
        if (
            can_insert_semicolon()
            || is("punc") && PUNC_AFTER_EXPRESSION.has(S.token.value)
            || is("template_cont")
        ) {
            has_expression = false;
        } else if (is("operator", "*")) {
            star = true;
            next();
        }

        return new AST_Yield({
            start      : start,
            is_star    : star,
            expression : has_expression ? expression() : null,
            end        : prev()
        });
    }

    function if_() {
        var cond = parenthesised(), body = statement(false, false, true), belse = null;
        if (is("keyword", "else")) {
            next();
            belse = statement(false, false, true);
        }
        return new AST_If({
            condition   : cond,
            body        : body,
            alternative : belse
        });
    }

    function block_() {
        expect("{");
        var a = [];
        while (!is("punc", "}")) {
            if (is("eof")) unexpected();
            a.push(statement());
        }
        next();
        return a;
    }

    function switch_body_() {
        expect("{");
        var a = [], cur = null, branch = null, tmp;
        while (!is("punc", "}")) {
            if (is("eof")) unexpected();
            if (is("keyword", "case")) {
                if (branch) branch.end = prev();
                cur = [];
                branch = new AST_Case({
                    start      : (tmp = S.token, next(), tmp),
                    expression : expression(true),
                    body       : cur
                });
                a.push(branch);
                expect(":");
            } else if (is("keyword", "default")) {
                if (branch) branch.end = prev();
                cur = [];
                branch = new AST_Default({
                    start : (tmp = S.token, next(), expect(":"), tmp),
                    body  : cur
                });
                a.push(branch);
            } else {
                if (!cur) unexpected();
                cur.push(statement());
            }
        }
        if (branch) branch.end = prev();
        next();
        return a;
    }

    function try_() {
        var body, bcatch = null, bfinally = null;
        body = new AST_TryBlock({
            start : S.token,
            body  : block_(),
            end   : prev(),
        });
        if (is("keyword", "catch")) {
            var start = S.token;
            next();
            if (is("punc", "{")) {
                var name = null;
            } else {
                expect("(");
                var name = parameter(undefined, AST_SymbolCatch);
                expect(")");
            }
            bcatch = new AST_Catch({
                start   : start,
                argname : name,
                body    : block_(),
                end     : prev()
            });
        }
        if (is("keyword", "finally")) {
            var start = S.token;
            next();
            bfinally = new AST_Finally({
                start : start,
                body  : block_(),
                end   : prev()
            });
        }
        if (!bcatch && !bfinally)
            croak("Missing catch/finally blocks");
        return new AST_Try({
            body     : body,
            bcatch   : bcatch,
            bfinally : bfinally
        });
    }

    /**
     * var
     *   vardef1 = 2,
     *   vardef2 = 3;
     */
    function vardefs(no_in, kind) {
        var var_defs = [];
        var def;
        for (;;) {
            var sym_type =
                kind === "var" ? AST_SymbolVar :
                kind === "const" ? AST_SymbolConst :
                kind === "let" ? AST_SymbolLet :
                kind === "using" ? AST_SymbolUsing :
                kind === "await using" ? AST_SymbolUsing : null;
            var def_type = kind === "using" || kind === "await using" ? AST_UsingDef : AST_VarDef;
            // var { a } = b
            if (is("punc", "{") || is("punc", "[")) {
                def = new def_type({
                    start: S.token,
                    name: binding_element(undefined, sym_type),
                    value: is("operator", "=") ? (expect_token("operator", "="), expression(false, no_in)) : null,
                    end: prev()
                });
            } else {
                def = new def_type({
                    start : S.token,
                    name  : as_symbol(sym_type),
                    value : is("operator", "=")
                        ? (next(), expression(false, no_in))
                        : !no_in && (kind === "const" || kind === "using" || kind === "await using")
                            ? croak("Missing initializer in " + kind + " declaration") : null,
                    end   : prev()
                });
                if (def.name.name == "import") croak("Unexpected token: import");
            }
            var_defs.push(def);
            if (!is("punc", ","))
                break;
            next();
        }
        return var_defs;
    }

    var var_ = function(no_in) {
        return new AST_Var({
            start       : prev(),
            definitions : vardefs(no_in, "var"),
            end         : prev()
        });
    };

    var let_ = function(no_in) {
        return new AST_Let({
            start       : prev(),
            definitions : vardefs(no_in, "let"),
            end         : prev()
        });
    };

    var const_ = function(no_in) {
        return new AST_Const({
            start       : prev(),
            definitions : vardefs(no_in, "const"),
            end         : prev()
        });
    };

    var using_ = function(no_in) {
        return new AST_Using({
            start       : prev(),
            await       : false,
            definitions : vardefs(no_in, "using"),
            end         : prev()
        });
    };

    var await_using_ = function(no_in) {
        // Assumption: When await_using_ is called, only the `await` token has been consumed.
        return new AST_Using({
            start       : prev(),
            await       : true,
            definitions : (next(), vardefs(no_in, "await using")),
            end         : prev()
        });
    };

    var new_ = function(allow_calls) {
        var start = S.token;
        expect_token("operator", "new");
        if (is("punc", ".")) {
            next();
            expect_token("name", "target");
            return subscripts(new AST_NewTarget({
                start : start,
                end   : prev()
            }), allow_calls);
        }
        var newexp = expr_atom(false), args;
        if (is("punc", "(")) {
            next();
            args = expr_list(")", true);
        } else {
            args = [];
        }
        var call = new AST_New({
            start      : start,
            expression : newexp,
            args       : args,
            end        : prev()
        });
        annotate(call);
        return subscripts(call, allow_calls);
    };

    function as_atom_node() {
        var tok = S.token, ret;
        switch (tok.type) {
          case "name":
            ret = _make_symbol(AST_SymbolRef);
            break;
          case "num":
            if (tok.value === Infinity) {
                // very large float values are parsed as Infinity
                ret = new AST_Infinity({
                    start: tok,
                    end: tok,
                });
            } else {
                ret = new AST_Number({
                    start: tok,
                    end: tok,
                    value: tok.value,
                    raw: LATEST_RAW
                });
            }
            break;
          case "big_int":
            ret = new AST_BigInt({
                start: tok,
                end: tok,
                value: tok.value,
                raw: LATEST_RAW,
            });
            break;
          case "string":
            ret = new AST_String({
                start : tok,
                end   : tok,
                value : tok.value,
                quote : tok.quote
            });
            annotate(ret);
            break;
          case "regexp":
            const [_, source, flags] = tok.value.match(/^\/(.*)\/(\w*)$/);

            ret = new AST_RegExp({ start: tok, end: tok, value: { source, flags } });
            break;
          case "atom":
            switch (tok.value) {
              case "false":
                ret = new AST_False({ start: tok, end: tok });
                break;
              case "true":
                ret = new AST_True({ start: tok, end: tok });
                break;
              case "null":
                ret = new AST_Null({ start: tok, end: tok });
                break;
            }
            break;
        }
        next();
        return ret;
    }

    function to_fun_args(ex, default_seen_above) {
        var insert_default = function(ex, default_value) {
            if (default_value) {
                return new AST_DefaultAssign({
                    start: ex.start,
                    left: ex,
                    operator: "=",
                    right: default_value,
                    end: default_value.end
                });
            }
            return ex;
        };
        if (ex instanceof AST_Object) {
            return insert_default(new AST_Destructuring({
                start: ex.start,
                end: ex.end,
                is_array: false,
                names: ex.properties.map(prop => to_fun_args(prop))
            }), default_seen_above);
        } else if (ex instanceof AST_ObjectKeyVal) {
            ex.value = to_fun_args(ex.value);
            return insert_default(ex, default_seen_above);
        } else if (ex instanceof AST_Hole) {
            return ex;
        } else if (ex instanceof AST_Destructuring) {
            ex.names = ex.names.map(name => to_fun_args(name));
            return insert_default(ex, default_seen_above);
        } else if (ex instanceof AST_SymbolRef) {
            return insert_default(new AST_SymbolFunarg({
                name: ex.name,
                start: ex.start,
                end: ex.end
            }), default_seen_above);
        } else if (ex instanceof AST_Expansion) {
            ex.expression = to_fun_args(ex.expression);
            return insert_default(ex, default_seen_above);
        } else if (ex instanceof AST_Array) {
            return insert_default(new AST_Destructuring({
                start: ex.start,
                end: ex.end,
                is_array: true,
                names: ex.elements.map(elm => to_fun_args(elm))
            }), default_seen_above);
        } else if (ex instanceof AST_Assign) {
            return insert_default(to_fun_args(ex.left, ex.right), default_seen_above);
        } else if (ex instanceof AST_DefaultAssign) {
            ex.left = to_fun_args(ex.left);
            return ex;
        } else {
            croak("Invalid function parameter", ex.start.line, ex.start.col);
        }
    }

    var expr_atom = function(allow_calls, allow_arrows) {
        if (is("operator", "new")) {
            return new_(allow_calls);
        }
        if (is("name", "import") && is_token(peek(), "punc", ".")) {
            return import_meta(allow_calls);
        }
        var start = S.token;
        var peeked;
        var async = is("name", "async")
            && (peeked = peek()).value != "["
            && peeked.type != "arrow"
            && as_atom_node();
        if (is("punc")) {
            switch (S.token.value) {
              case "(":
                if (async && !allow_calls) break;
                var exprs = params_or_seq_(allow_arrows, !async);
                if (allow_arrows && is("arrow", "=>")) {
                    return arrow_function(start, exprs.map(e => to_fun_args(e)), !!async);
                }
                var ex = async ? new AST_Call({
                    expression: async,
                    args: exprs
                }) : to_expr_or_sequence(start, exprs);
                if (ex.start) {
                    const outer_comments_before = start.comments_before.length;
                    outer_comments_before_counts.set(start, outer_comments_before);
                    ex.start.comments_before.unshift(...start.comments_before);
                    start.comments_before = ex.start.comments_before;
                    if (outer_comments_before == 0 && start.comments_before.length > 0) {
                        var comment = start.comments_before[0];
                        if (!comment.nlb) {
                            comment.nlb = start.nlb;
                            start.nlb = false;
                        }
                    }
                    start.comments_after = ex.start.comments_after;
                }
                ex.start = start;
                var end = prev();
                if (ex.end) {
                    end.comments_before = ex.end.comments_before;
                    ex.end.comments_after.push(...end.comments_after);
                    end.comments_after = ex.end.comments_after;
                }
                ex.end = end;
                if (ex instanceof AST_Call) annotate(ex);
                return subscripts(ex, allow_calls);
              case "[":
                return subscripts(array_(), allow_calls);
              case "{":
                return subscripts(object_or_destructuring_(), allow_calls);
            }
            if (!async) unexpected();
        }
        if (allow_arrows && is("name") && is_token(peek(), "arrow")) {
            var param = new AST_SymbolFunarg({
                name: S.token.value,
                start: start,
                end: start,
            });
            next();
            return arrow_function(start, [param], !!async);
        }
        if (is("keyword", "function")) {
            next();
            var func = function_(AST_Function, false, !!async);
            func.start = start;
            func.end = prev();
            return subscripts(func, allow_calls);
        }
        if (async) return subscripts(async, allow_calls);
        if (is("keyword", "class")) {
            next();
            var cls = class_(AST_ClassExpression);
            cls.start = start;
            cls.end = prev();
            return subscripts(cls, allow_calls);
        }
        if (is("template_head")) {
            return subscripts(template_string(), allow_calls);
        }
        if (ATOMIC_START_TOKEN.has(S.token.type)) {
            return subscripts(as_atom_node(), allow_calls);
        }
        unexpected();
    };

    function template_string() {
        var segments = [], start = S.token;

        segments.push(new AST_TemplateSegment({
            start: S.token,
            raw: TEMPLATE_RAWS.get(S.token),
            value: S.token.value,
            end: S.token
        }));

        while (!S.token.template_end) {
            next();
            handle_regexp();
            segments.push(expression(true));

            segments.push(new AST_TemplateSegment({
                start: S.token,
                raw: TEMPLATE_RAWS.get(S.token),
                value: S.token.value,
                end: S.token
            }));
        }
        next();

        return new AST_TemplateString({
            start: start,
            segments: segments,
            end: S.token
        });
    }

    function expr_list(closing, allow_trailing_comma, allow_empty) {
        var first = true, a = [];
        while (!is("punc", closing)) {
            if (first) first = false; else expect(",");
            if (allow_trailing_comma && is("punc", closing)) break;
            if (is("punc", ",") && allow_empty) {
                a.push(new AST_Hole({ start: S.token, end: S.token }));
            } else if (is("expand", "...")) {
                next();
                a.push(new AST_Expansion({start: prev(), expression: expression(),end: S.token}));
            } else {
                a.push(expression(false));
            }
        }
        next();
        return a;
    }

    var array_ = embed_tokens(function() {
        expect("[");
        return new AST_Array({
            elements: expr_list("]", !options.strict, true)
        });
    });

    var create_accessor = embed_tokens((is_generator, is_async) => {
        return function_(AST_Accessor, is_generator, is_async);
    });

    var object_or_destructuring_ = embed_tokens(function object_or_destructuring_() {
        var start = S.token, first = true, a = [];
        expect("{");
        while (!is("punc", "}")) {
            if (first) first = false; else expect(",");
            if (!options.strict && is("punc", "}"))
                // allow trailing comma
                break;

            start = S.token;
            if (start.type == "expand") {
                next();
                a.push(new AST_Expansion({
                    start: start,
                    expression: expression(false),
                    end: prev(),
                }));
                continue;
            }
            if(is("privatename")) {
                croak("private fields are not allowed in an object");
            }
            var name = as_property_name();
            var value;

            // Check property and fetch value
            if (!is("punc", ":")) {
                var concise = object_or_class_property(name, start);
                if (concise) {
                    a.push(concise);
                    continue;
                }

                value = new AST_SymbolRef({
                    start: prev(),
                    name: name,
                    end: prev()
                });
            } else if (name === null) {
                unexpected(prev());
            } else {
                next(); // `:` - see first condition
                value = expression(false);
            }

            // Check for default value and alter value accordingly if necessary
            if (is("operator", "=")) {
                next();
                value = new AST_Assign({
                    start: start,
                    left: value,
                    operator: "=",
                    right: expression(false),
                    logical: false,
                    end: prev()
                });
            }

            // Create property
            const kv = new AST_ObjectKeyVal({
                start: start,
                quote: start.quote,
                key: name,
                value: value,
                end: prev()
            });
            a.push(annotate(kv));
        }
        next();
        return new AST_Object({ properties: a });
    });

    function class_(KindOfClass, is_export_default) {
        var start, method, class_name, extends_, properties = [];

        S.input.push_directives_stack(); // Push directive stack, but not scope stack
        S.input.add_directive("use strict");

        if (S.token.type == "name" && S.token.value != "extends") {
            class_name = as_symbol(KindOfClass === AST_DefClass ? AST_SymbolDefClass : AST_SymbolClass);
        }

        if (KindOfClass === AST_DefClass && !class_name) {
            if (is_export_default) {
                KindOfClass = AST_ClassExpression;
            } else {
                unexpected();
            }
        }

        if (S.token.value == "extends") {
            next();
            extends_ = expression(true);
        }

        expect("{");
        // mark in class feild,
        const save_in_class = S.in_class;
        S.in_class = true;
        while (is("punc", ";")) { next(); }  // Leading semicolons are okay in class bodies.
        while (!is("punc", "}")) {
            start = S.token;
            method = object_or_class_property(as_property_name(), start, true);
            if (!method) { unexpected(); }
            properties.push(method);
            while (is("punc", ";")) { next(); }
        }
        // mark in class feild,
        S.in_class = save_in_class;

        S.input.pop_directives_stack();

        next();

        return new KindOfClass({
            start: start,
            name: class_name,
            extends: extends_,
            properties: properties,
            end: prev(),
        });
    }

    function object_or_class_property(name, start, is_class) {
        const get_symbol_ast = (name, SymbolClass) => {
            if (typeof name === "string") {
                return new SymbolClass({ start, name, end: prev() });
            } else if (name === null) {
                unexpected();
            }
            return name;
        };

        var is_private = prev().type === "privatename";
        const is_not_method_start = () =>
            !is("punc", "(") && !is("punc", ",") && !is("punc", "}") && !is("punc", ";") && !is("operator", "=") && !is_private;

        var is_async = false;
        var is_static = false;
        var is_generator = false;
        var accessor_type = null;

        if (is_class && name === "static" && is_not_method_start()) {
            const static_block = class_static_block();
            if (static_block != null) {
                return static_block;
            }
            is_static = true;
            name = as_property_name();
        }
        if (name === "async" && is_not_method_start()) {
            is_async = true;
            name = as_property_name();
        }
        if (prev().type === "operator" && prev().value === "*") {
            is_generator = true;
            name = as_property_name();
        }
        if ((name === "get" || name === "set") && is_not_method_start()) {
            accessor_type = name;
            name = as_property_name();
        }
        if (!is_private && prev().type === "privatename") {
            is_private = true;
        }

        const property_token = prev();

        if (accessor_type != null) {
            if (!is_private) {
                const AccessorClass = accessor_type === "get"
                    ? AST_ObjectGetter
                    : AST_ObjectSetter;

                name = get_symbol_ast(name, AST_SymbolMethod);
                return annotate(new AccessorClass({
                    start,
                    static: is_static,
                    key: name,
                    quote: name instanceof AST_SymbolMethod ? property_token.quote : undefined,
                    value: create_accessor(),
                    end: prev()
                }));
            } else {
                const AccessorClass = accessor_type === "get"
                    ? AST_PrivateGetter
                    : AST_PrivateSetter;

                return annotate(new AccessorClass({
                    start,
                    static: is_static,
                    key: get_symbol_ast(name, AST_SymbolMethod),
                    value: create_accessor(),
                    end: prev(),
                }));
            }
        }

        if (is("punc", "(")) {
            name = get_symbol_ast(name, AST_SymbolMethod);
            const AST_MethodVariant = is_private
                ? AST_PrivateMethod
                : AST_ConciseMethod;
            var node = new AST_MethodVariant({
                start       : start,
                static      : is_static,
                key         : name,
                quote       : name instanceof AST_SymbolMethod ?
                              property_token.quote : undefined,
                value       : create_accessor(is_generator, is_async),
                end         : prev()
            });
            return annotate(node);
        }

        if (is_class) {
            const AST_SymbolVariant = is_private
                ? AST_SymbolPrivateProperty
                : AST_SymbolClassProperty;
            const AST_ClassPropertyVariant = is_private
                ? AST_ClassPrivateProperty
                : AST_ClassProperty;

            const key = get_symbol_ast(name, AST_SymbolVariant);
            const quote = key instanceof AST_SymbolClassProperty
                ? property_token.quote
                : undefined;
            if (is("operator", "=")) {
                next();
                return annotate(
                    new AST_ClassPropertyVariant({
                        start,
                        static: is_static,
                        quote,
                        key,
                        value: expression(false),
                        end: prev()
                    })
                );
            } else if (
                is("name")
                || is("privatename")
                || is("punc", "[")
                || is("operator", "*")
                || is("punc", ";")
                || is("punc", "}")
                || is("string")
                || is("num")
                || is("big_int")
            ) {
                return annotate(
                    new AST_ClassPropertyVariant({
                        start,
                        static: is_static,
                        quote,
                        key,
                        end: prev()
                    })
                );
            }
        }
    }

    function class_static_block() {
        if (!is("punc", "{")) {
            return null;
        }

        const start = S.token;
        const body = [];

        next();

        while (!is("punc", "}")) {
            body.push(statement());
        }

        next();

        return new AST_ClassStaticBlock({ start, body, end: prev() });
    }

    function maybe_import_attributes() {
        if (
            (is("keyword", "with") || is("name", "assert"))
            && !has_newline_before(S.token)
        ) {
            next();
            return object_or_destructuring_();
        }
        return null;
    }

    function import_statement() {
        var start = prev();

        var imported_name;
        var imported_names;
        if (is("name")) {
            imported_name = as_symbol(AST_SymbolImport);
        }

        if (is("punc", ",")) {
            next();
        }

        imported_names = map_names(true);

        if (imported_names || imported_name) {
            expect_token("name", "from");
        }
        var mod_str = S.token;
        if (mod_str.type !== "string") {
            unexpected();
        }
        next();

        const attributes = maybe_import_attributes();

        return new AST_Import({
            start,
            imported_name,
            imported_names,
            module_name: new AST_String({
                start: mod_str,
                value: mod_str.value,
                quote: mod_str.quote,
                end: mod_str,
            }),
            attributes,
            end: S.token,
        });
    }

    function import_meta(allow_calls) {
        var start = S.token;
        expect_token("name", "import");
        expect_token("punc", ".");
        expect_token("name", "meta");
        return subscripts(new AST_ImportMeta({
            start: start,
            end: prev()
        }), allow_calls);
    }

    function map_name(is_import) {
        function make_symbol(type, quote) {
            return new type({
                name: as_property_name(),
                quote: quote || undefined,
                start: prev(),
                end: prev()
            });
        }

        var foreign_type = is_import ? AST_SymbolImportForeign : AST_SymbolExportForeign;
        var type = is_import ? AST_SymbolImport : AST_SymbolExport;
        var start = S.token;
        var foreign_name;
        var name;

        if (is_import) {
            foreign_name = make_symbol(foreign_type, start.quote);
        } else {
            name = make_symbol(type, start.quote);
        }
        if (is("name", "as")) {
            next();  // The "as" word
            if (is_import) {
                name = make_symbol(type);
            } else {
                foreign_name = make_symbol(foreign_type, S.token.quote);
            }
        } else {
            if (is_import) {
                name = new type(foreign_name);
            } else {
                foreign_name = new foreign_type(name);
            }
        }

        return new AST_NameMapping({
            start: start,
            foreign_name: foreign_name,
            name: name,
            end: prev(),
        });
    }

    function map_nameAsterisk(is_import, import_or_export_foreign_name) {
        var foreign_type = is_import ? AST_SymbolImportForeign : AST_SymbolExportForeign;
        var type = is_import ? AST_SymbolImport : AST_SymbolExport;
        var start = S.token;
        var name, foreign_name;
        var end = prev();

        if (is_import) {
            name = import_or_export_foreign_name;
        } else {
            foreign_name = import_or_export_foreign_name;
        }

        name = name || new type({
            start: start,
            name: "*",
            end: end,
        });

        foreign_name = foreign_name || new foreign_type({
            start: start,
            name: "*",
            end: end,
        });

        return new AST_NameMapping({
            start: start,
            foreign_name: foreign_name,
            name: name,
            end: end,
        });
    }

    function map_names(is_import) {
        var names;
        if (is("punc", "{")) {
            next();
            names = [];
            while (!is("punc", "}")) {
                names.push(map_name(is_import));
                if (is("punc", ",")) {
                    next();
                }
            }
            next();
        } else if (is("operator", "*")) {
            var name;
            next();
            if (is("name", "as")) {
                next();  // The "as" word
                name = is_import ? as_symbol(AST_SymbolImport) : as_symbol_or_string(AST_SymbolExportForeign);
            }
            names = [map_nameAsterisk(is_import, name)];
        }
        return names;
    }

    function export_statement() {
        var start = S.token;
        var is_default;
        var exported_names;

        if (is("keyword", "default")) {
            is_default = true;
            next();
        } else if (exported_names = map_names(false)) {
            if (is("name", "from")) {
                next();

                var mod_str = S.token;
                if (mod_str.type !== "string") {
                    unexpected();
                }
                next();

                const attributes = maybe_import_attributes();

                return new AST_Export({
                    start: start,
                    is_default: is_default,
                    exported_names: exported_names,
                    module_name: new AST_String({
                        start: mod_str,
                        value: mod_str.value,
                        quote: mod_str.quote,
                        end: mod_str,
                    }),
                    end: prev(),
                    attributes
                });
            } else {
                return new AST_Export({
                    start: start,
                    is_default: is_default,
                    exported_names: exported_names,
                    end: prev(),
                });
            }
        }

        var node;
        var exported_value;
        var exported_definition;
        if (is("punc", "{")
            || is_default
                && (is("keyword", "class") || is("keyword", "function"))
                && is_token(peek(), "punc")) {
            exported_value = expression(false);
            semicolon();
        } else if ((node = statement(is_default)) instanceof AST_Definitions && is_default) {
            unexpected(node.start);
        } else if (
            node instanceof AST_Definitions
            || node instanceof AST_Defun
            || node instanceof AST_DefClass
        ) {
            exported_definition = node;
        } else if (
            node instanceof AST_ClassExpression
            || node instanceof AST_Function
        ) {
            exported_value = node;
        } else if (node instanceof AST_SimpleStatement) {
            exported_value = node.body;
        } else {
            unexpected(node.start);
        }

        return new AST_Export({
            start: start,
            is_default: is_default,
            exported_value: exported_value,
            exported_definition: exported_definition,
            end: prev(),
            attributes: null
        });
    }

    function as_property_name() {
        var tmp = S.token;
        switch (tmp.type) {
          case "punc":
            if (tmp.value === "[") {
                next();
                var ex = expression(false);
                expect("]");
                return ex;
            } else unexpected(tmp);
          case "operator":
            if (tmp.value === "*") {
                next();
                return null;
            }
            if (!["delete", "in", "instanceof", "new", "typeof", "void"].includes(tmp.value)) {
                unexpected(tmp);
            }
            /* falls through */
          case "name":
          case "privatename":
          case "string":
          case "keyword":
          case "atom":
            next();
            return tmp.value;
          case "num":
          case "big_int":
            next();
            return "" + tmp.value;
          default:
            unexpected(tmp);
        }
    }

    function as_name() {
        var tmp = S.token;
        if (tmp.type != "name" && tmp.type != "privatename") unexpected();
        next();
        return tmp.value;
    }

    function _make_symbol(type) {
        var name = S.token.value;
        return new (name == "this" ? AST_This :
                    name == "super" ? AST_Super :
                    type)({
            name  : String(name),
            start : S.token,
            end   : S.token
        });
    }

    function _verify_symbol(sym) {
        var name = sym.name;
        if (is_in_generator() && name == "yield") {
            token_error(sym.start, "Yield cannot be used as identifier inside generators");
        }
        if (S.input.has_directive("use strict")) {
            if (name == "yield") {
                token_error(sym.start, "Unexpected yield identifier inside strict mode");
            }
            if (sym instanceof AST_SymbolDeclaration && (name == "arguments" || name == "eval")) {
                token_error(sym.start, "Unexpected " + name + " in strict mode");
            }
        }
    }

    function as_symbol(type, noerror) {
        if (!is("name")) {
            if (!noerror) croak("Name expected");
            return null;
        }
        var sym = _make_symbol(type);
        _verify_symbol(sym);
        next();
        return sym;
    }

    function as_symbol_or_string(type) {
        if (!is("name")) {
            if (!is("string")) {
                croak("Name or string expected");
            }
            var tok = S.token;
            var ret = new type({
                start : tok,
                end   : tok,
                name : tok.value,
                quote : tok.quote
            });
            next();
            return ret;
        }
        var sym = _make_symbol(type);
        _verify_symbol(sym);
        next();
        return sym;
    }

    // Annotate AST_Call, AST_Lambda or AST_New with the special comments
    function annotate(node, before_token = node.start) {
        var comments = before_token.comments_before;
        const comments_outside_parens = outer_comments_before_counts.get(before_token);
        var i = comments_outside_parens != null ? comments_outside_parens : comments.length;
        while (--i >= 0) {
            var comment = comments[i];
            if (/[@#]__/.test(comment.value)) {
                if (/[@#]__PURE__/.test(comment.value)) {
                    set_annotation(node, _PURE);
                    break;
                }
                if (/[@#]__INLINE__/.test(comment.value)) {
                    set_annotation(node, _INLINE);
                    break;
                }
                if (/[@#]__NOINLINE__/.test(comment.value)) {
                    set_annotation(node, _NOINLINE);
                    break;
                }
                if (/[@#]__KEY__/.test(comment.value)) {
                    set_annotation(node, _KEY);
                    break;
                }
                if (/[@#]__MANGLE_PROP__/.test(comment.value)) {
                    set_annotation(node, _MANGLEPROP);
                    break;
                }
            }
        }
        return node;
    }

    var subscripts = function(expr, allow_calls, is_chain) {
        var start = expr.start;
        if (is("punc", ".")) {
            next();
            if(is("privatename") && !S.in_class) 
                croak("Private field must be used in an enclosing class");
            const AST_DotVariant = is("privatename") ? AST_DotHash : AST_Dot;
            return annotate(subscripts(new AST_DotVariant({
                start      : start,
                expression : expr,
                optional   : false,
                property   : as_name(),
                end        : prev()
            }), allow_calls, is_chain));
        }
        if (is("punc", "[")) {
            next();
            var prop = expression(true);
            expect("]");
            return annotate(subscripts(new AST_Sub({
                start      : start,
                expression : expr,
                optional   : false,
                property   : prop,
                end        : prev()
            }), allow_calls, is_chain));
        }
        if (allow_calls && is("punc", "(")) {
            next();
            var call = new AST_Call({
                start      : start,
                expression : expr,
                optional   : false,
                args       : call_args(),
                end        : prev()
            });
            annotate(call);
            return subscripts(call, true, is_chain);
        }

        // Optional chain
        if (is("punc", "?.")) {
            next();

            let chain_contents;

            if (allow_calls && is("punc", "(")) {
                next();

                const call = new AST_Call({
                    start,
                    optional: true,
                    expression: expr,
                    args: call_args(),
                    end: prev()
                });
                annotate(call);

                chain_contents = subscripts(call, true, true);
            } else if (is("name") || is("privatename")) {
                if(is("privatename") && !S.in_class) 
                    croak("Private field must be used in an enclosing class");
                const AST_DotVariant = is("privatename") ? AST_DotHash : AST_Dot;
                chain_contents = annotate(subscripts(new AST_DotVariant({
                    start,
                    expression: expr,
                    optional: true,
                    property: as_name(),
                    end: prev()
                }), allow_calls, true));
            } else if (is("punc", "[")) {
                next();
                const property = expression(true);
                expect("]");
                chain_contents = annotate(subscripts(new AST_Sub({
                    start,
                    expression: expr,
                    optional: true,
                    property,
                    end: prev()
                }), allow_calls, true));
            }

            if (!chain_contents) unexpected();

            if (chain_contents instanceof AST_Chain) return chain_contents;

            return new AST_Chain({
                start,
                expression: chain_contents,
                end: prev()
            });
        }

        if (is("template_head")) {
            if (is_chain) {
                // a?.b`c` is a syntax error
                unexpected();
            }

            return subscripts(new AST_PrefixedTemplateString({
                start: start,
                prefix: expr,
                template_string: template_string(),
                end: prev()
            }), allow_calls);
        }
        return expr;
    };

    function call_args() {
        var args = [];
        while (!is("punc", ")")) {
            if (is("expand", "...")) {
                next();
                args.push(new AST_Expansion({
                    start: prev(),
                    expression: expression(false),
                    end: prev()
                }));
            } else {
                args.push(expression(false));
            }
            if (!is("punc", ")")) {
                expect(",");
            }
        }
        next();
        return args;
    }

    var maybe_unary = function(allow_calls, allow_arrows) {
        var start = S.token;
        if (start.type == "name" && start.value == "await" && can_await()) {
            next();
            return _await_expression();
        }
        if (is("operator") && UNARY_PREFIX.has(start.value)) {
            next();
            handle_regexp();
            var ex = make_unary(AST_UnaryPrefix, start, maybe_unary(allow_calls));
            ex.start = start;
            ex.end = prev();
            return ex;
        }
        var val = expr_atom(allow_calls, allow_arrows);
        while (is("operator") && UNARY_POSTFIX.has(S.token.value) && !has_newline_before(S.token)) {
            if (val instanceof AST_Arrow) unexpected();
            val = make_unary(AST_UnaryPostfix, S.token, val);
            val.start = start;
            val.end = S.token;
            next();
        }
        return val;
    };

    function make_unary(ctor, token, expr) {
        var op = token.value;
        switch (op) {
          case "++":
          case "--":
            if (!is_assignable(expr))
                croak("Invalid use of " + op + " operator", token.line, token.col, token.pos);
            break;
          case "delete":
            if (expr instanceof AST_SymbolRef && S.input.has_directive("use strict"))
                croak("Calling delete on expression not allowed in strict mode", expr.start.line, expr.start.col, expr.start.pos);
            break;
        }
        return new ctor({ operator: op, expression: expr });
    }

    var expr_op = function(left, min_prec, no_in) {
        var op = is("operator") ? S.token.value : null;
        if (op == "in" && no_in) op = null;
        if (op == "**" && left instanceof AST_UnaryPrefix
            /* unary token in front not allowed - parenthesis required */
            && !is_token(left.start, "punc", "(")
            && left.operator !== "--" && left.operator !== "++")
                unexpected(left.start);
        var prec = op != null ? PRECEDENCE[op] : null;
        if (prec != null && (prec > min_prec || (op === "**" && min_prec === prec))) {
            next();
            var right = expr_ops(no_in, prec, true);
            return expr_op(new AST_Binary({
                start    : left.start,
                left     : left,
                operator : op,
                right    : right,
                end      : right.end
            }), min_prec, no_in);
        }
        return left;
    };

    function expr_ops(no_in, min_prec, allow_calls, allow_arrows) {
        // maybe_unary won't return us a AST_SymbolPrivateProperty
        if (!no_in && min_prec < PRECEDENCE["in"] && is("privatename")) {
            if(!S.in_class) {
                croak("Private field must be used in an enclosing class");
            }

            const start = S.token;
            const key = new AST_SymbolPrivateProperty({
                start,
                name: start.value,
                end: start
            });
            next();
            expect_token("operator", "in");

            const private_in = new AST_PrivateIn({
                start,
                key,
                value: expr_ops(no_in, PRECEDENCE["in"], true),
                end: prev()
            });

            return expr_op(private_in, 0, no_in);
        } else {
            return expr_op(maybe_unary(allow_calls, allow_arrows), min_prec, no_in);
        }
    }

    var maybe_conditional = function(no_in) {
        var start = S.token;
        var expr = expr_ops(no_in, 0, true, true);
        if (is("operator", "?")) {
            next();
            var yes = expression(false);
            expect(":");
            return new AST_Conditional({
                start       : start,
                condition   : expr,
                consequent  : yes,
                alternative : expression(false, no_in),
                end         : prev()
            });
        }
        return expr;
    };

    function is_assignable(expr) {
        return expr instanceof AST_PropAccess || expr instanceof AST_SymbolRef;
    }

    function to_destructuring(node) {
        if (node instanceof AST_Object) {
            node = new AST_Destructuring({
                start: node.start,
                names: node.properties.map(to_destructuring),
                is_array: false,
                end: node.end
            });
        } else if (node instanceof AST_Array) {
            var names = [];

            for (var i = 0; i < node.elements.length; i++) {
                // Only allow expansion as last element
                if (node.elements[i] instanceof AST_Expansion) {
                    if (i + 1 !== node.elements.length) {
                        token_error(node.elements[i].start, "Spread must the be last element in destructuring array");
                    }
                    node.elements[i].expression = to_destructuring(node.elements[i].expression);
                }

                names.push(to_destructuring(node.elements[i]));
            }

            node = new AST_Destructuring({
                start: node.start,
                names: names,
                is_array: true,
                end: node.end
            });
        } else if (node instanceof AST_ObjectProperty) {
            node.value = to_destructuring(node.value);
        } else if (node instanceof AST_Assign) {
            node = new AST_DefaultAssign({
                start: node.start,
                left: node.left,
                operator: "=",
                right: node.right,
                end: node.end
            });
        }
        return node;
    }

    // In ES6, AssignmentExpression can also be an ArrowFunction
    var maybe_assign = function(no_in) {
        handle_regexp();
        var start = S.token;

        if (start.type == "name" && start.value == "yield") {
            if (is_in_generator()) {
                next();
                return _yield_expression();
            } else if (S.input.has_directive("use strict")) {
                token_error(S.token, "Unexpected yield identifier inside strict mode");
            }
        }

        var left = maybe_conditional(no_in);
        var val = S.token.value;

        if (is("operator") && ASSIGNMENT.has(val)) {
            if (is_assignable(left) || (left = to_destructuring(left)) instanceof AST_Destructuring) {
                next();

                return new AST_Assign({
                    start    : start,
                    left     : left,
                    operator : val,
                    right    : maybe_assign(no_in),
                    logical  : LOGICAL_ASSIGNMENT.has(val),
                    end      : prev()
                });
            }
            croak("Invalid assignment");
        }
        return left;
    };

    var to_expr_or_sequence = function(start, exprs) {
        if (exprs.length === 1) {
            return exprs[0];
        } else if (exprs.length > 1) {
            return new AST_Sequence({ start, expressions: exprs, end: peek() });
        } else {
            croak("Invalid parenthesized expression");
        }
    };

    var expression = function(commas, no_in) {
        var start = S.token;
        var exprs = [];
        while (true) {
            exprs.push(maybe_assign(no_in));
            if (!commas || !is("punc", ",")) break;
            next();
            commas = true;
        }
        return to_expr_or_sequence(start, exprs);
    };

    function in_loop(cont) {
        ++S.in_loop;
        var ret = cont();
        --S.in_loop;
        return ret;
    }

    if (options.expression) {
        return expression(true);
    }

    return (function parse_toplevel() {
        var start = S.token;
        var body = [];
        S.input.push_directives_stack();
        if (options.module) S.input.add_directive("use strict");
        while (!is("eof")) {
            body.push(statement());
        }
        S.input.pop_directives_stack();
        var end = prev();
        var toplevel = options.toplevel;
        if (toplevel) {
            toplevel.body = toplevel.body.concat(body);
            toplevel.end = end;
        } else {
            toplevel = new AST_Toplevel({ start: start, body: body, end: end });
        }
        TEMPLATE_RAWS = new Map();
        return toplevel;
    })();

}

export {
    get_full_char_code,
    get_full_char,
    is_identifier_char,
    is_basic_identifier_string,
    is_identifier_string,
    is_surrogate_pair_head,
    is_surrogate_pair_tail,
    js_error,
    JS_Parse_Error,
    parse,
    PRECEDENCE,
    ALL_RESERVED_WORDS,
    tokenizer,
};
