import { Rule } from 'eslint';
import type { ESLintSettings, Extension } from './types';

declare function ignore(path: string, context: Rule.RuleContext): boolean;

declare function getFileExtensions(settings: ESLintSettings): Set<Extension>;

declare function hasValidExtension(path: string, context: Rule.RuleContext): path is `${string}${Extension}`;

export default ignore;

export { getFileExtensions, hasValidExtension }
