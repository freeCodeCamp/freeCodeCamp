import { prefixedUuid } from '../../base/common/uuid.js';
import { TextLength } from './core/text/textLength.js';

const privateSymbol = Symbol('TextModelEditSource');
class TextModelEditSource {
    constructor(metadata, _privateCtorGuard) {
        this.metadata = metadata;
    }
    toString() {
        return `${this.metadata.source}`;
    }
    getType() {
        const metadata = this.metadata;
        switch (metadata.source) {
            case 'cursor':
                return metadata.kind;
            case 'inlineCompletionAccept':
                return metadata.source + (metadata.$nes ? ':nes' : '');
            case 'unknown':
                return metadata.name || 'unknown';
            default:
                return metadata.source;
        }
    }
    /**
     * Converts the metadata to a key string.
     * Only includes properties/values that have `level` many `$` prefixes or less.
    */
    toKey(level, filter = {}) {
        const metadata = this.metadata;
        const keys = Object.entries(metadata).filter(([key, value]) => {
            const filterVal = filter[key];
            if (filterVal !== undefined) {
                return filterVal;
            }
            const prefixCount = (key.match(/\$/g) || []).length;
            return prefixCount <= level && value !== undefined && value !== null && value !== '';
        }).map(([key, value]) => `${key}:${value}`);
        return keys.join('-');
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createEditSource(metadata) {
    // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
    return new TextModelEditSource(metadata, privateSymbol);
}
const EditSources = {
    unknown(data) {
        return createEditSource({
            source: 'unknown',
            name: data.name,
        });
    },
    rename: () => createEditSource({ source: 'rename' }),
    chatApplyEdits(data) {
        return createEditSource({
            source: 'Chat.applyEdits',
            $modelId: avoidPathRedaction(data.modelId),
            $extensionId: data.extensionId?.extensionId,
            $extensionVersion: data.extensionId?.version,
            $$languageId: data.languageId,
            $$sessionId: data.sessionId,
            $$requestId: data.requestId,
            $$mode: data.mode,
            $$codeBlockSuggestionId: data.codeBlockSuggestionId,
        });
    },
    chatUndoEdits: () => createEditSource({ source: 'Chat.undoEdits' }),
    chatReset: () => createEditSource({ source: 'Chat.reset' }),
    inlineCompletionAccept(data) {
        return createEditSource({
            source: 'inlineCompletionAccept',
            $nes: data.nes,
            ...toProperties(data.providerId),
            $$requestUuid: data.requestUuid,
            $$languageId: data.languageId,
        });
    },
    inlineCompletionPartialAccept(data) {
        return createEditSource({
            source: 'inlineCompletionPartialAccept',
            type: data.type,
            $nes: data.nes,
            ...toProperties(data.providerId),
            $$requestUuid: data.requestUuid,
            $$languageId: data.languageId,
        });
    },
    inlineChatApplyEdit(data) {
        return createEditSource({
            source: 'inlineChat.applyEdits',
            $modelId: avoidPathRedaction(data.modelId),
            $extensionId: data.extensionId?.extensionId,
            $extensionVersion: data.extensionId?.version,
            $$sessionId: data.sessionId,
            $$requestId: data.requestId,
            $$languageId: data.languageId,
        });
    },
    reloadFromDisk: () => createEditSource({ source: 'reloadFromDisk' }),
    cursor(data) {
        return createEditSource({
            source: 'cursor',
            kind: data.kind,
            detailedSource: data.detailedSource,
        });
    },
    setValue: () => createEditSource({ source: 'setValue' }),
    eolChange: () => createEditSource({ source: 'eolChange' }),
    applyEdits: () => createEditSource({ source: 'applyEdits' }),
    snippet: () => createEditSource({ source: 'snippet' }),
    suggest: (data) => createEditSource({ source: 'suggest', ...toProperties(data.providerId) }),
    codeAction: (data) => createEditSource({ source: 'codeAction', $kind: data.kind, ...toProperties(data.providerId) })
};
function toProperties(version) {
    if (!version) {
        return {};
    }
    return {
        $extensionId: version.extensionId,
        $extensionVersion: version.extensionVersion,
        $providerId: version.providerId,
    };
}
function avoidPathRedaction(str) {
    if (str === undefined) {
        return undefined;
    }
    // To avoid false-positive file path redaction.
    return str.replaceAll('/', '|');
}
class EditDeltaInfo {
    static fromText(text) {
        const linesAdded = TextLength.ofText(text).lineCount;
        const charsAdded = text.length;
        return new EditDeltaInfo(linesAdded, 0, charsAdded, 0);
    }
    static tryCreate(linesAdded, linesRemoved, charsAdded, charsRemoved) {
        if (linesAdded === undefined || linesRemoved === undefined || charsAdded === undefined || charsRemoved === undefined) {
            return undefined;
        }
        return new EditDeltaInfo(linesAdded, linesRemoved, charsAdded, charsRemoved);
    }
    constructor(linesAdded, linesRemoved, charsAdded, charsRemoved) {
        this.linesAdded = linesAdded;
        this.linesRemoved = linesRemoved;
        this.charsAdded = charsAdded;
        this.charsRemoved = charsRemoved;
    }
}
var EditSuggestionId;
(function (EditSuggestionId) {
    /**
     * Use AiEditTelemetryServiceImpl to create a new id!
    */
    function newId(genPrefixedUuid) {
        const id = genPrefixedUuid ? genPrefixedUuid('sgt') : prefixedUuid('sgt');
        return toEditIdentity(id);
    }
    EditSuggestionId.newId = newId;
})(EditSuggestionId || (EditSuggestionId = {}));
function toEditIdentity(id) {
    return id;
}

export { EditDeltaInfo, EditSources, EditSuggestionId, TextModelEditSource };
