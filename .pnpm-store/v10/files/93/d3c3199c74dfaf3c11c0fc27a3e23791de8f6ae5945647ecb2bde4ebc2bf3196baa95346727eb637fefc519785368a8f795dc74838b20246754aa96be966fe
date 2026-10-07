"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildUriPathArbitrary = buildUriPathArbitrary;
const webSegment_1 = require("../../webSegment");
const array_1 = require("../../array");
const SegmentsToPath_1 = require("../mappers/SegmentsToPath");
const oneof_1 = require("../../oneof");
function sqrtSize(size) {
    switch (size) {
        case 'xsmall':
            return ['xsmall', 'xsmall'];
        case 'small':
            return ['small', 'xsmall'];
        case 'medium':
            return ['small', 'small'];
        case 'large':
            return ['medium', 'small'];
        case 'xlarge':
            return ['medium', 'medium'];
    }
}
function buildUriPathArbitraryInternal(segmentSize, numSegmentSize) {
    return (0, array_1.array)((0, webSegment_1.webSegment)({ size: segmentSize }), { size: numSegmentSize }).map(SegmentsToPath_1.segmentsToPathMapper, SegmentsToPath_1.segmentsToPathUnmapper);
}
function buildUriPathArbitrary(resolvedSize) {
    const [segmentSize, numSegmentSize] = sqrtSize(resolvedSize);
    if (segmentSize === numSegmentSize) {
        return buildUriPathArbitraryInternal(segmentSize, numSegmentSize);
    }
    return (0, oneof_1.oneof)(buildUriPathArbitraryInternal(segmentSize, numSegmentSize), buildUriPathArbitraryInternal(numSegmentSize, segmentSize));
}
