// based on https://github.com/microsoft/AL/blob/master/grammar/alsyntax.tmlanguage

Prism.languages.al = {
	'comment': /\/\/.*|\/\*[\s\S]*?\*\//,
	'string': {
		pattern: /'(?:''|[^'\r\n])*'(?!')|"(?:""|[^"\r\n])*"(?!")/,
		greedy: true
	},
	'function': {
		pattern: /(\b(?:event|procedure|trigger)\s+|(?:^|[^.])\.\s*)[a-z_]\w*(?=\s*\()/i,
		lookbehind: true
	},
	'keyword': [
		// keywords
		/\b(?:array|asserterror|begin|break|case|do|downto|else|end|event|exit|for|foreach|function|if|implements|in|indataset|interface|internal|local|of|procedure|program|protected|repeat|runonclient|securityfiltering|suppressdispose|temporary|then|to|trigger|until|var|while|with|withevents)\b/i,
		// objects and metadata that are used like keywords
		/\b(?:action|actions|addafter|addbefore|addfirst|addlast|area|assembly|chartpart|codeunit|column|controladdin|cuegroup|customizes|dataitem|dataset|dotnet|elements|enum|enumextension|extends|field|fieldattribute|fieldelement|fieldgroup|fieldgroups|fields|filter|fixed|grid|group|key|keys|label|labels|layout|modify|moveafter|movebefore|movefirst|movelast|page|pagecustomization|pageextension|part|profile|query|repeater|report|requestpage|schema|separator|systempart|table|tableelement|tableextension|textattribute|textelement|type|usercontrol|value|xmlport)\b/i
	],
	'number': /\b(?:0x[\da-f]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)(?:F|LL?|U(?:LL?)?)?\b/i,
	'boolean': /\b(?:false|true)\b/i,
	'variable': /\b(?:Curr(?:FieldNo|Page|Report)|x?Rec|RequestOptionsPage)\b/,
	'class-name': /\b(?:automation|biginteger|bigtext|blob|boolean|byte|char|clienttype|code|completiontriggererrorlevel|connectiontype|database|dataclassification|datascope|date|dateformula|datetime|decimal|defaultlayout|dialog|dictionary|dotnetassembly|dotnettypedeclaration|duration|errorinfo|errortype|executioncontext|executionmode|fieldclass|fieldref|fieldtype|file|filterpagebuilder|guid|httpclient|httpcontent|httpheaders|httprequestmessage|httpresponsemessage|instream|integer|joker|jsonarray|jsonobject|jsontoken|jsonvalue|keyref|list|moduledependencyinfo|moduleinfo|none|notification|notificationscope|objecttype|option|outstream|pageresult|record|recordid|recordref|reportformat|securityfilter|sessionsettings|tableconnectiontype|tablefilter|testaction|testfield|testfilterfield|testpage|testpermissions|testrequestpage|text|textbuilder|textconst|textencoding|time|transactionmodel|transactiontype|variant|verbosity|version|view|views|webserviceactioncontext|webserviceactionresultcode|xmlattribute|xmlattributecollection|xmlcdata|xmlcomment|xmldeclaration|xmldocument|xmldocumenttype|xmlelement|xmlnamespacemanager|xmlnametable|xmlnode|xmlnodelist|xmlprocessinginstruction|xmlreadoptions|xmltext|xmlwriteoptions)\b/i,
	'operator': /\.\.|:[=:]|[-+*/]=?|<>|[<>]=?|=|\b(?:and|div|mod|not|or|xor)\b/i,
	'punctuation': /[()\[\]{}:.;,]/
};
