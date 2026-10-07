import { webSegment } from '../../webSegment.js';
import { array } from '../../array.js';
import { segmentsToPathMapper, segmentsToPathUnmapper } from '../mappers/SegmentsToPath.js';
import { oneof } from '../../oneof.js';
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
    return array(webSegment({ size: segmentSize }), { size: numSegmentSize }).map(segmentsToPathMapper, segmentsToPathUnmapper);
}
export function buildUriPathArbitrary(resolvedSize) {
    const [segmentSize, numSegmentSize] = sqrtSize(resolvedSize);
    if (segmentSize === numSegmentSize) {
        return buildUriPathArbitraryInternal(segmentSize, numSegmentSize);
    }
    return oneof(buildUriPathArbitraryInternal(segmentSize, numSegmentSize), buildUriPathArbitraryInternal(numSegmentSize, segmentSize));
}
