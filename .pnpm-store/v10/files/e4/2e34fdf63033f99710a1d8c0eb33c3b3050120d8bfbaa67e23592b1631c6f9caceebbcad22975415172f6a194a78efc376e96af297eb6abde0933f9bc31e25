import { Codicon } from '../../base/common/codicons.js';
import { URI } from '../../base/common/uri.js';
import { Range } from './core/range.js';
import { TokenizationRegistry as TokenizationRegistry$1 } from './tokenizationRegistry.js';
import { localize } from '../../nls.js';

class Token {
    constructor(offset, type, language) {
        this.offset = offset;
        this.type = type;
        this.language = language;
        this._tokenBrand = undefined;
    }
    toString() {
        return '(' + this.offset + ', ' + this.type + ')';
    }
}
/**
 * @internal
 */
class TokenizationResult {
    constructor(tokens, endState) {
        this.tokens = tokens;
        this.endState = endState;
        this._tokenizationResultBrand = undefined;
    }
}
/**
 * @internal
 */
class EncodedTokenizationResult {
    constructor(
    /**
     * The tokens in binary format. Each token occupies two array indices. For token i:
     *  - at offset 2*i => startIndex
     *  - at offset 2*i + 1 => metadata
     *
     */
    tokens, endState) {
        this.tokens = tokens;
        this.endState = endState;
        this._encodedTokenizationResultBrand = undefined;
    }
}
var HoverVerbosityAction;
(function (HoverVerbosityAction) {
    /**
     * Increase the verbosity of the hover
     */
    HoverVerbosityAction[HoverVerbosityAction["Increase"] = 0] = "Increase";
    /**
     * Decrease the verbosity of the hover
     */
    HoverVerbosityAction[HoverVerbosityAction["Decrease"] = 1] = "Decrease";
})(HoverVerbosityAction || (HoverVerbosityAction = {}));
/**
 * @internal
 */
var CompletionItemKinds;
(function (CompletionItemKinds) {
    const byKind = new Map();
    byKind.set(0 /* CompletionItemKind.Method */, Codicon.symbolMethod);
    byKind.set(1 /* CompletionItemKind.Function */, Codicon.symbolFunction);
    byKind.set(2 /* CompletionItemKind.Constructor */, Codicon.symbolConstructor);
    byKind.set(3 /* CompletionItemKind.Field */, Codicon.symbolField);
    byKind.set(4 /* CompletionItemKind.Variable */, Codicon.symbolVariable);
    byKind.set(5 /* CompletionItemKind.Class */, Codicon.symbolClass);
    byKind.set(6 /* CompletionItemKind.Struct */, Codicon.symbolStruct);
    byKind.set(7 /* CompletionItemKind.Interface */, Codicon.symbolInterface);
    byKind.set(8 /* CompletionItemKind.Module */, Codicon.symbolModule);
    byKind.set(9 /* CompletionItemKind.Property */, Codicon.symbolProperty);
    byKind.set(10 /* CompletionItemKind.Event */, Codicon.symbolEvent);
    byKind.set(11 /* CompletionItemKind.Operator */, Codicon.symbolOperator);
    byKind.set(12 /* CompletionItemKind.Unit */, Codicon.symbolUnit);
    byKind.set(13 /* CompletionItemKind.Value */, Codicon.symbolValue);
    byKind.set(15 /* CompletionItemKind.Enum */, Codicon.symbolEnum);
    byKind.set(14 /* CompletionItemKind.Constant */, Codicon.symbolConstant);
    byKind.set(15 /* CompletionItemKind.Enum */, Codicon.symbolEnum);
    byKind.set(16 /* CompletionItemKind.EnumMember */, Codicon.symbolEnumMember);
    byKind.set(17 /* CompletionItemKind.Keyword */, Codicon.symbolKeyword);
    byKind.set(28 /* CompletionItemKind.Snippet */, Codicon.symbolSnippet);
    byKind.set(18 /* CompletionItemKind.Text */, Codicon.symbolText);
    byKind.set(19 /* CompletionItemKind.Color */, Codicon.symbolColor);
    byKind.set(20 /* CompletionItemKind.File */, Codicon.symbolFile);
    byKind.set(21 /* CompletionItemKind.Reference */, Codicon.symbolReference);
    byKind.set(22 /* CompletionItemKind.Customcolor */, Codicon.symbolCustomColor);
    byKind.set(23 /* CompletionItemKind.Folder */, Codicon.symbolFolder);
    byKind.set(24 /* CompletionItemKind.TypeParameter */, Codicon.symbolTypeParameter);
    byKind.set(25 /* CompletionItemKind.User */, Codicon.account);
    byKind.set(26 /* CompletionItemKind.Issue */, Codicon.issues);
    byKind.set(27 /* CompletionItemKind.Tool */, Codicon.tools);
    /**
     * @internal
     */
    function toIcon(kind) {
        let codicon = byKind.get(kind);
        if (!codicon) {
            console.info('No codicon found for CompletionItemKind ' + kind);
            codicon = Codicon.symbolProperty;
        }
        return codicon;
    }
    CompletionItemKinds.toIcon = toIcon;
    /**
     * @internal
     */
    function toLabel(kind) {
        switch (kind) {
            case 0 /* CompletionItemKind.Method */: return localize(728, 'Method');
            case 1 /* CompletionItemKind.Function */: return localize(729, 'Function');
            case 2 /* CompletionItemKind.Constructor */: return localize(730, 'Constructor');
            case 3 /* CompletionItemKind.Field */: return localize(731, 'Field');
            case 4 /* CompletionItemKind.Variable */: return localize(732, 'Variable');
            case 5 /* CompletionItemKind.Class */: return localize(733, 'Class');
            case 6 /* CompletionItemKind.Struct */: return localize(734, 'Struct');
            case 7 /* CompletionItemKind.Interface */: return localize(735, 'Interface');
            case 8 /* CompletionItemKind.Module */: return localize(736, 'Module');
            case 9 /* CompletionItemKind.Property */: return localize(737, 'Property');
            case 10 /* CompletionItemKind.Event */: return localize(738, 'Event');
            case 11 /* CompletionItemKind.Operator */: return localize(739, 'Operator');
            case 12 /* CompletionItemKind.Unit */: return localize(740, 'Unit');
            case 13 /* CompletionItemKind.Value */: return localize(741, 'Value');
            case 14 /* CompletionItemKind.Constant */: return localize(742, 'Constant');
            case 15 /* CompletionItemKind.Enum */: return localize(743, 'Enum');
            case 16 /* CompletionItemKind.EnumMember */: return localize(744, 'Enum Member');
            case 17 /* CompletionItemKind.Keyword */: return localize(745, 'Keyword');
            case 18 /* CompletionItemKind.Text */: return localize(746, 'Text');
            case 19 /* CompletionItemKind.Color */: return localize(747, 'Color');
            case 20 /* CompletionItemKind.File */: return localize(748, 'File');
            case 21 /* CompletionItemKind.Reference */: return localize(749, 'Reference');
            case 22 /* CompletionItemKind.Customcolor */: return localize(750, 'Custom Color');
            case 23 /* CompletionItemKind.Folder */: return localize(751, 'Folder');
            case 24 /* CompletionItemKind.TypeParameter */: return localize(752, 'Type Parameter');
            case 25 /* CompletionItemKind.User */: return localize(753, 'User');
            case 26 /* CompletionItemKind.Issue */: return localize(754, 'Issue');
            case 27 /* CompletionItemKind.Tool */: return localize(755, 'Tool');
            case 28 /* CompletionItemKind.Snippet */: return localize(756, 'Snippet');
            default: return '';
        }
    }
    CompletionItemKinds.toLabel = toLabel;
    const data = new Map();
    data.set('method', 0 /* CompletionItemKind.Method */);
    data.set('function', 1 /* CompletionItemKind.Function */);
    data.set('constructor', 2 /* CompletionItemKind.Constructor */);
    data.set('field', 3 /* CompletionItemKind.Field */);
    data.set('variable', 4 /* CompletionItemKind.Variable */);
    data.set('class', 5 /* CompletionItemKind.Class */);
    data.set('struct', 6 /* CompletionItemKind.Struct */);
    data.set('interface', 7 /* CompletionItemKind.Interface */);
    data.set('module', 8 /* CompletionItemKind.Module */);
    data.set('property', 9 /* CompletionItemKind.Property */);
    data.set('event', 10 /* CompletionItemKind.Event */);
    data.set('operator', 11 /* CompletionItemKind.Operator */);
    data.set('unit', 12 /* CompletionItemKind.Unit */);
    data.set('value', 13 /* CompletionItemKind.Value */);
    data.set('constant', 14 /* CompletionItemKind.Constant */);
    data.set('enum', 15 /* CompletionItemKind.Enum */);
    data.set('enum-member', 16 /* CompletionItemKind.EnumMember */);
    data.set('enumMember', 16 /* CompletionItemKind.EnumMember */);
    data.set('keyword', 17 /* CompletionItemKind.Keyword */);
    data.set('snippet', 28 /* CompletionItemKind.Snippet */);
    data.set('text', 18 /* CompletionItemKind.Text */);
    data.set('color', 19 /* CompletionItemKind.Color */);
    data.set('file', 20 /* CompletionItemKind.File */);
    data.set('reference', 21 /* CompletionItemKind.Reference */);
    data.set('customcolor', 22 /* CompletionItemKind.Customcolor */);
    data.set('folder', 23 /* CompletionItemKind.Folder */);
    data.set('type-parameter', 24 /* CompletionItemKind.TypeParameter */);
    data.set('typeParameter', 24 /* CompletionItemKind.TypeParameter */);
    data.set('account', 25 /* CompletionItemKind.User */);
    data.set('issue', 26 /* CompletionItemKind.Issue */);
    data.set('tool', 27 /* CompletionItemKind.Tool */);
    /**
     * @internal
     */
    function fromString(value, strict) {
        let res = data.get(value);
        if (typeof res === 'undefined' && !strict) {
            res = 9 /* CompletionItemKind.Property */;
        }
        return res;
    }
    CompletionItemKinds.fromString = fromString;
})(CompletionItemKinds || (CompletionItemKinds = {}));
/**
 * How an {@link InlineCompletionsProvider inline completion provider} was triggered.
 */
var InlineCompletionTriggerKind;
(function (InlineCompletionTriggerKind) {
    /**
     * Completion was triggered automatically while editing.
     * It is sufficient to return a single completion item in this case.
     */
    InlineCompletionTriggerKind[InlineCompletionTriggerKind["Automatic"] = 0] = "Automatic";
    /**
     * Completion was triggered explicitly by a user gesture.
     * Return multiple completion items to enable cycling through them.
     */
    InlineCompletionTriggerKind[InlineCompletionTriggerKind["Explicit"] = 1] = "Explicit";
})(InlineCompletionTriggerKind || (InlineCompletionTriggerKind = {}));
class SelectedSuggestionInfo {
    constructor(range, text, completionKind, isSnippetText) {
        this.range = range;
        this.text = text;
        this.completionKind = completionKind;
        this.isSnippetText = isSnippetText;
    }
    equals(other) {
        return Range.lift(this.range).equalsRange(other.range)
            && this.text === other.text
            && this.completionKind === other.completionKind
            && this.isSnippetText === other.isSnippetText;
    }
}
var InlineCompletionHintStyle;
(function (InlineCompletionHintStyle) {
    InlineCompletionHintStyle[InlineCompletionHintStyle["Code"] = 1] = "Code";
    InlineCompletionHintStyle[InlineCompletionHintStyle["Label"] = 2] = "Label";
})(InlineCompletionHintStyle || (InlineCompletionHintStyle = {}));
/** @internal */
class ProviderId {
    static fromExtensionId(extensionId) {
        return new ProviderId(extensionId, undefined, undefined);
    }
    constructor(extensionId, extensionVersion, providerId) {
        this.extensionId = extensionId;
        this.extensionVersion = extensionVersion;
        this.providerId = providerId;
    }
    toString() {
        let result = '';
        if (this.extensionId) {
            result += this.extensionId;
        }
        if (this.extensionVersion) {
            result += `@${this.extensionVersion}`;
        }
        if (this.providerId) {
            result += `:${this.providerId}`;
        }
        if (result.length === 0) {
            result = 'unknown';
        }
        return result;
    }
    toStringWithoutVersion() {
        let result = '';
        if (this.extensionId) {
            result += this.extensionId;
        }
        if (this.providerId) {
            result += `:${this.providerId}`;
        }
        return result;
    }
}
var InlineCompletionEndOfLifeReasonKind;
(function (InlineCompletionEndOfLifeReasonKind) {
    InlineCompletionEndOfLifeReasonKind[InlineCompletionEndOfLifeReasonKind["Accepted"] = 0] = "Accepted";
    InlineCompletionEndOfLifeReasonKind[InlineCompletionEndOfLifeReasonKind["Rejected"] = 1] = "Rejected";
    InlineCompletionEndOfLifeReasonKind[InlineCompletionEndOfLifeReasonKind["Ignored"] = 2] = "Ignored";
})(InlineCompletionEndOfLifeReasonKind || (InlineCompletionEndOfLifeReasonKind = {}));
/**
 * @internal
 */
var DocumentPasteTriggerKind;
(function (DocumentPasteTriggerKind) {
    DocumentPasteTriggerKind[DocumentPasteTriggerKind["Automatic"] = 0] = "Automatic";
    DocumentPasteTriggerKind[DocumentPasteTriggerKind["PasteAs"] = 1] = "PasteAs";
})(DocumentPasteTriggerKind || (DocumentPasteTriggerKind = {}));
var SignatureHelpTriggerKind;
(function (SignatureHelpTriggerKind) {
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["Invoke"] = 1] = "Invoke";
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["TriggerCharacter"] = 2] = "TriggerCharacter";
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["ContentChange"] = 3] = "ContentChange";
})(SignatureHelpTriggerKind || (SignatureHelpTriggerKind = {}));
/**
 * A document highlight kind.
 */
var DocumentHighlightKind;
(function (DocumentHighlightKind) {
    /**
     * A textual occurrence.
     */
    DocumentHighlightKind[DocumentHighlightKind["Text"] = 0] = "Text";
    /**
     * Read-access of a symbol, like reading a variable.
     */
    DocumentHighlightKind[DocumentHighlightKind["Read"] = 1] = "Read";
    /**
     * Write-access of a symbol, like writing to a variable.
     */
    DocumentHighlightKind[DocumentHighlightKind["Write"] = 2] = "Write";
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
/**
 * @internal
 */
function isLocationLink(thing) {
    return !!thing
        && URI.isUri(thing.uri)
        && Range.isIRange(thing.range)
        && (Range.isIRange(thing.originSelectionRange) || Range.isIRange(thing.targetSelectionRange));
}
/**
 * @internal
 */
const symbolKindNames = {
    [17 /* SymbolKind.Array */]: localize(757, "array"),
    [16 /* SymbolKind.Boolean */]: localize(758, "boolean"),
    [4 /* SymbolKind.Class */]: localize(759, "class"),
    [13 /* SymbolKind.Constant */]: localize(760, "constant"),
    [8 /* SymbolKind.Constructor */]: localize(761, "constructor"),
    [9 /* SymbolKind.Enum */]: localize(762, "enumeration"),
    [21 /* SymbolKind.EnumMember */]: localize(763, "enumeration member"),
    [23 /* SymbolKind.Event */]: localize(764, "event"),
    [7 /* SymbolKind.Field */]: localize(765, "field"),
    [0 /* SymbolKind.File */]: localize(766, "file"),
    [11 /* SymbolKind.Function */]: localize(767, "function"),
    [10 /* SymbolKind.Interface */]: localize(768, "interface"),
    [19 /* SymbolKind.Key */]: localize(769, "key"),
    [5 /* SymbolKind.Method */]: localize(770, "method"),
    [1 /* SymbolKind.Module */]: localize(771, "module"),
    [2 /* SymbolKind.Namespace */]: localize(772, "namespace"),
    [20 /* SymbolKind.Null */]: localize(773, "null"),
    [15 /* SymbolKind.Number */]: localize(774, "number"),
    [18 /* SymbolKind.Object */]: localize(775, "object"),
    [24 /* SymbolKind.Operator */]: localize(776, "operator"),
    [3 /* SymbolKind.Package */]: localize(777, "package"),
    [6 /* SymbolKind.Property */]: localize(778, "property"),
    [14 /* SymbolKind.String */]: localize(779, "string"),
    [22 /* SymbolKind.Struct */]: localize(780, "struct"),
    [25 /* SymbolKind.TypeParameter */]: localize(781, "type parameter"),
    [12 /* SymbolKind.Variable */]: localize(782, "variable"),
};
/**
 * @internal
 */
function getAriaLabelForSymbol(symbolName, kind) {
    return localize(783, '{0} ({1})', symbolName, symbolKindNames[kind]);
}
/**
 * @internal
 */
var SymbolKinds;
(function (SymbolKinds) {
    const byKind = new Map();
    byKind.set(0 /* SymbolKind.File */, Codicon.symbolFile);
    byKind.set(1 /* SymbolKind.Module */, Codicon.symbolModule);
    byKind.set(2 /* SymbolKind.Namespace */, Codicon.symbolNamespace);
    byKind.set(3 /* SymbolKind.Package */, Codicon.symbolPackage);
    byKind.set(4 /* SymbolKind.Class */, Codicon.symbolClass);
    byKind.set(5 /* SymbolKind.Method */, Codicon.symbolMethod);
    byKind.set(6 /* SymbolKind.Property */, Codicon.symbolProperty);
    byKind.set(7 /* SymbolKind.Field */, Codicon.symbolField);
    byKind.set(8 /* SymbolKind.Constructor */, Codicon.symbolConstructor);
    byKind.set(9 /* SymbolKind.Enum */, Codicon.symbolEnum);
    byKind.set(10 /* SymbolKind.Interface */, Codicon.symbolInterface);
    byKind.set(11 /* SymbolKind.Function */, Codicon.symbolFunction);
    byKind.set(12 /* SymbolKind.Variable */, Codicon.symbolVariable);
    byKind.set(13 /* SymbolKind.Constant */, Codicon.symbolConstant);
    byKind.set(14 /* SymbolKind.String */, Codicon.symbolString);
    byKind.set(15 /* SymbolKind.Number */, Codicon.symbolNumber);
    byKind.set(16 /* SymbolKind.Boolean */, Codicon.symbolBoolean);
    byKind.set(17 /* SymbolKind.Array */, Codicon.symbolArray);
    byKind.set(18 /* SymbolKind.Object */, Codicon.symbolObject);
    byKind.set(19 /* SymbolKind.Key */, Codicon.symbolKey);
    byKind.set(20 /* SymbolKind.Null */, Codicon.symbolNull);
    byKind.set(21 /* SymbolKind.EnumMember */, Codicon.symbolEnumMember);
    byKind.set(22 /* SymbolKind.Struct */, Codicon.symbolStruct);
    byKind.set(23 /* SymbolKind.Event */, Codicon.symbolEvent);
    byKind.set(24 /* SymbolKind.Operator */, Codicon.symbolOperator);
    byKind.set(25 /* SymbolKind.TypeParameter */, Codicon.symbolTypeParameter);
    /**
     * @internal
     */
    function toIcon(kind) {
        let icon = byKind.get(kind);
        if (!icon) {
            console.info('No codicon found for SymbolKind ' + kind);
            icon = Codicon.symbolProperty;
        }
        return icon;
    }
    SymbolKinds.toIcon = toIcon;
    const byCompletionKind = new Map();
    byCompletionKind.set(0 /* SymbolKind.File */, 20 /* CompletionItemKind.File */);
    byCompletionKind.set(1 /* SymbolKind.Module */, 8 /* CompletionItemKind.Module */);
    byCompletionKind.set(2 /* SymbolKind.Namespace */, 8 /* CompletionItemKind.Module */);
    byCompletionKind.set(3 /* SymbolKind.Package */, 8 /* CompletionItemKind.Module */);
    byCompletionKind.set(4 /* SymbolKind.Class */, 5 /* CompletionItemKind.Class */);
    byCompletionKind.set(5 /* SymbolKind.Method */, 0 /* CompletionItemKind.Method */);
    byCompletionKind.set(6 /* SymbolKind.Property */, 9 /* CompletionItemKind.Property */);
    byCompletionKind.set(7 /* SymbolKind.Field */, 3 /* CompletionItemKind.Field */);
    byCompletionKind.set(8 /* SymbolKind.Constructor */, 2 /* CompletionItemKind.Constructor */);
    byCompletionKind.set(9 /* SymbolKind.Enum */, 15 /* CompletionItemKind.Enum */);
    byCompletionKind.set(10 /* SymbolKind.Interface */, 7 /* CompletionItemKind.Interface */);
    byCompletionKind.set(11 /* SymbolKind.Function */, 1 /* CompletionItemKind.Function */);
    byCompletionKind.set(12 /* SymbolKind.Variable */, 4 /* CompletionItemKind.Variable */);
    byCompletionKind.set(13 /* SymbolKind.Constant */, 14 /* CompletionItemKind.Constant */);
    byCompletionKind.set(14 /* SymbolKind.String */, 18 /* CompletionItemKind.Text */);
    byCompletionKind.set(15 /* SymbolKind.Number */, 13 /* CompletionItemKind.Value */);
    byCompletionKind.set(16 /* SymbolKind.Boolean */, 13 /* CompletionItemKind.Value */);
    byCompletionKind.set(17 /* SymbolKind.Array */, 13 /* CompletionItemKind.Value */);
    byCompletionKind.set(18 /* SymbolKind.Object */, 13 /* CompletionItemKind.Value */);
    byCompletionKind.set(19 /* SymbolKind.Key */, 17 /* CompletionItemKind.Keyword */);
    byCompletionKind.set(20 /* SymbolKind.Null */, 13 /* CompletionItemKind.Value */);
    byCompletionKind.set(21 /* SymbolKind.EnumMember */, 16 /* CompletionItemKind.EnumMember */);
    byCompletionKind.set(22 /* SymbolKind.Struct */, 6 /* CompletionItemKind.Struct */);
    byCompletionKind.set(23 /* SymbolKind.Event */, 10 /* CompletionItemKind.Event */);
    byCompletionKind.set(24 /* SymbolKind.Operator */, 11 /* CompletionItemKind.Operator */);
    byCompletionKind.set(25 /* SymbolKind.TypeParameter */, 24 /* CompletionItemKind.TypeParameter */);
    /**
     * @internal
     */
    function toCompletionKind(kind) {
        let completionKind = byCompletionKind.get(kind);
        if (completionKind === undefined) {
            console.info('No completion kind found for SymbolKind ' + kind);
            completionKind = 20 /* CompletionItemKind.File */;
        }
        return completionKind;
    }
    SymbolKinds.toCompletionKind = toCompletionKind;
})(SymbolKinds || (SymbolKinds = {}));
class FoldingRangeKind {
    /**
     * Kind for folding range representing a comment. The value of the kind is 'comment'.
     */
    static { this.Comment = new FoldingRangeKind('comment'); }
    /**
     * Kind for folding range representing a import. The value of the kind is 'imports'.
     */
    static { this.Imports = new FoldingRangeKind('imports'); }
    /**
     * Kind for folding range representing regions (for example marked by `#region`, `#endregion`).
     * The value of the kind is 'region'.
     */
    static { this.Region = new FoldingRangeKind('region'); }
    /**
     * Returns a {@link FoldingRangeKind} for the given value.
     *
     * @param value of the kind.
     */
    static fromValue(value) {
        switch (value) {
            case 'comment': return FoldingRangeKind.Comment;
            case 'imports': return FoldingRangeKind.Imports;
            case 'region': return FoldingRangeKind.Region;
        }
        return new FoldingRangeKind(value);
    }
    /**
     * Creates a new {@link FoldingRangeKind}.
     *
     * @param value of the kind.
     */
    constructor(value) {
        this.value = value;
    }
}
var NewSymbolNameTag;
(function (NewSymbolNameTag) {
    NewSymbolNameTag[NewSymbolNameTag["AIGenerated"] = 1] = "AIGenerated";
})(NewSymbolNameTag || (NewSymbolNameTag = {}));
var NewSymbolNameTriggerKind;
(function (NewSymbolNameTriggerKind) {
    NewSymbolNameTriggerKind[NewSymbolNameTriggerKind["Invoke"] = 0] = "Invoke";
    NewSymbolNameTriggerKind[NewSymbolNameTriggerKind["Automatic"] = 1] = "Automatic";
})(NewSymbolNameTriggerKind || (NewSymbolNameTriggerKind = {}));
/**
 * @internal
 */
var Command;
(function (Command) {
    /**
     * @internal
     */
    function is(obj) {
        if (!obj || typeof obj !== 'object') {
            return false;
        }
        return typeof obj.id === 'string' &&
            typeof obj.title === 'string';
    }
    Command.is = is;
})(Command || (Command = {}));
var InlayHintKind;
(function (InlayHintKind) {
    InlayHintKind[InlayHintKind["Type"] = 1] = "Type";
    InlayHintKind[InlayHintKind["Parameter"] = 2] = "Parameter";
})(InlayHintKind || (InlayHintKind = {}));
/**
 * @internal
 */
class LazyTokenizationSupport {
    constructor(createSupport) {
        this.createSupport = createSupport;
        this._tokenizationSupport = null;
    }
    dispose() {
        if (this._tokenizationSupport) {
            this._tokenizationSupport.then((support) => {
                if (support) {
                    support.dispose();
                }
            });
        }
    }
    get tokenizationSupport() {
        if (!this._tokenizationSupport) {
            this._tokenizationSupport = this.createSupport();
        }
        return this._tokenizationSupport;
    }
}
/**
 * @internal
 */
const TokenizationRegistry = new TokenizationRegistry$1();

export { Command, CompletionItemKinds, DocumentHighlightKind, DocumentPasteTriggerKind, EncodedTokenizationResult, FoldingRangeKind, HoverVerbosityAction, InlayHintKind, InlineCompletionEndOfLifeReasonKind, InlineCompletionHintStyle, InlineCompletionTriggerKind, LazyTokenizationSupport, NewSymbolNameTag, NewSymbolNameTriggerKind, ProviderId, SelectedSuggestionInfo, SignatureHelpTriggerKind, SymbolKinds, Token, TokenizationRegistry, TokenizationResult, getAriaLabelForSymbol, isLocationLink, symbolKindNames };
