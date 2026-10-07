import type * as ts from 'typescript';
import { Performance } from '../../profile/Performance';
interface TypeScriptPerformance {
    enable?(): void;
    disable?(): void;
    forEachMeasure?(callback: (measureName: string, duration: number) => void): void;
}
declare function connectTypeScriptPerformance(typescript: typeof ts, performance: Performance): Performance;
export { TypeScriptPerformance, connectTypeScriptPerformance };
