import type { Rule } from 'eslint';

export type Extension = `.${string}`;

export type ESLintSettings = NonNullable<Rule.RuleContext['settings']> & {
    'import/extensions'?: Extension[];
    'import/parsers'?: { [k: string]: Extension[] };
    'import/cache'?: { lifetime: number | '∞' | 'Infinity' };
};
