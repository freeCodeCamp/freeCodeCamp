/* eslint-disable import/no-extraneous-dependencies */
import { DebugInfo, MockSpan } from './mock_span';

/**
 * Index a collection of reported MockSpans in a way that's easy to run unit
 * test assertions against.
 */
export class MockReport {

    spans: MockSpan[];
    private spansByUUID: { [uuid: string]: MockSpan };
    private spansByTag: { [key: string]: { [value: string]: MockSpan[] } };
    private debugSpans: DebugInfo[];
    private unfinishedSpans: MockSpan[];

    constructor(spans: MockSpan[]) {
        this.spans = spans;
        this.spansByUUID = {};
        this.spansByTag = {};
        this.debugSpans = [];

        this.unfinishedSpans = [];

        spans.forEach(span => {
            if (span._finishMs === 0) {
                this.unfinishedSpans.push(span);
            }

            this.spansByUUID[span.uuid()] = span;
            this.debugSpans.push(span.debug());

            const tags = span.tags();

            Object.keys(tags).forEach((key: string) => {
                const val = tags[key];
                this.spansByTag[key] = this.spansByTag[key] || {};
                this.spansByTag[key][val] = this.spansByTag[key][val] || [];
                this.spansByTag[key][val].push(span);
            });
        });
    }

    firstSpanWithTagValue(key: string, val: any): MockSpan | null {
        const m = this.spansByTag[key];
        if (!m) {
            return null;
        }
        const n = m[val];
        if (!n) {
            return null;
        }
        return n[0];
    }
}

export default MockReport;
