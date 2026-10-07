import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_sliced_to_array.js';
import { _ } from '@swc/helpers/esm/_type_of.js';
import { serializePayload } from './serializer.js';

function chunk(arr) {
    var chunkSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 20;
    var chunks = [];
    for(var i = 0; i < Math.ceil(arr.length / chunkSize); i++){
        chunks.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
    }
    return chunks;
}
function _buildEventPayloadsForHits(param) {
    var helper = param.helper, widgetType = param.widgetType; param.methodName; var args = param.args, instantSearchInstance = param.instantSearchInstance;
    // when there's only one argument, that means it's custom
    if (args.length === 1 && _(args[0]) === 'object') {
        return [
            args[0]
        ];
    }
    var _args__split = _$1(args[0].split(':'), 2), eventType = _args__split[0], eventModifier = _args__split[1];
    var hits = args[1];
    var eventName = args[2];
    var additionalData = args[3] || {};
    if (!hits) {
        {
            return [];
        }
    }
    if ((eventType === 'click' || eventType === 'conversion') && !eventName) {
        {
            return [];
        }
    }
    var hitsArray = Array.isArray(hits) ? hits : [
        hits
    ];
    if (hitsArray.length === 0) {
        return [];
    }
    var queryID = hitsArray[0].__queryID;
    var hitsChunks = chunk(hitsArray);
    var objectIDsByChunk = hitsChunks.map(function(batch) {
        return batch.map(function(hit) {
            return hit.objectID;
        });
    });
    var positionsByChunk = hitsChunks.map(function(batch) {
        return batch.map(function(hit) {
            return hit.__position;
        });
    });
    if (eventType === 'view') {
        if (instantSearchInstance.status !== 'idle') {
            return [];
        }
        return hitsChunks.map(function(batch, i) {
            var _helper_lastResults;
            return {
                insightsMethod: 'viewedObjectIDs',
                widgetType: widgetType,
                eventType: eventType,
                payload: _$2({
                    eventName: eventName || 'Hits Viewed',
                    index: ((_helper_lastResults = helper.lastResults) === null || _helper_lastResults === void 0 ? void 0 : _helper_lastResults.index) || helper.state.index,
                    objectIDs: objectIDsByChunk[i]
                }, additionalData),
                hits: batch,
                eventModifier: eventModifier
            };
        });
    } else if (eventType === 'click') {
        return hitsChunks.map(function(batch, i) {
            var _helper_lastResults;
            return {
                insightsMethod: 'clickedObjectIDsAfterSearch',
                widgetType: widgetType,
                eventType: eventType,
                payload: _$2({
                    eventName: eventName || 'Hit Clicked',
                    index: ((_helper_lastResults = helper.lastResults) === null || _helper_lastResults === void 0 ? void 0 : _helper_lastResults.index) || helper.state.index,
                    queryID: queryID,
                    objectIDs: objectIDsByChunk[i],
                    positions: positionsByChunk[i]
                }, additionalData),
                hits: batch,
                eventModifier: eventModifier
            };
        });
    } else if (eventType === 'conversion') {
        return hitsChunks.map(function(batch, i) {
            var _helper_lastResults;
            return {
                insightsMethod: 'convertedObjectIDsAfterSearch',
                widgetType: widgetType,
                eventType: eventType,
                payload: _$2({
                    eventName: eventName || 'Hit Converted',
                    index: ((_helper_lastResults = helper.lastResults) === null || _helper_lastResults === void 0 ? void 0 : _helper_lastResults.index) || helper.state.index,
                    queryID: queryID,
                    objectIDs: objectIDsByChunk[i]
                }, additionalData),
                hits: batch,
                eventModifier: eventModifier
            };
        });
    } else {
        return [];
    }
}
function createSendEventForHits(param) {
    var instantSearchInstance = param.instantSearchInstance, helper = param.helper, widgetType = param.widgetType;
    var sentEvents = {};
    var timer = undefined;
    var sendEventForHits = function sendEventForHits() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var payloads = _buildEventPayloadsForHits({
            widgetType: widgetType,
            helper: helper,
            methodName: 'sendEvent',
            args: args,
            instantSearchInstance: instantSearchInstance
        });
        payloads.forEach(function(payload) {
            if (payload.eventType === 'click' && payload.eventModifier === 'internal' && sentEvents[payload.eventType]) {
                return;
            }
            sentEvents[payload.eventType] = true;
            instantSearchInstance.sendEventToInsights(payload);
        });
        clearTimeout(timer);
        timer = setTimeout(function() {
            sentEvents = {};
        }, 0);
    };
    return sendEventForHits;
}
function createBindEventForHits(param) {
    var helper = param.helper, widgetType = param.widgetType, instantSearchInstance = param.instantSearchInstance;
    var bindEventForHits = function bindEventForHits() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var payloads = _buildEventPayloadsForHits({
            widgetType: widgetType,
            helper: helper,
            methodName: 'bindEvent',
            args: args,
            instantSearchInstance: instantSearchInstance
        });
        return payloads.length ? "data-insights-event=".concat(serializePayload(payloads)) : '';
    };
    return bindEventForHits;
}

export { _buildEventPayloadsForHits, createBindEventForHits, createSendEventForHits };
