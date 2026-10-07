import { resolve } from 'path';
import { parseArgs } from 'util';
import { prettyToken } from './parse/cst.js';
import { Lexer } from './parse/lexer.js';
import { Parser } from './parse/parser.js';
import { Composer } from './compose/composer.js';
import { LineCounter } from './parse/line-counter.js';
import { prettifyError } from './errors.js';
import { visit } from './visit.js';

const help = `\
yaml: A command-line YAML processor and inspector

Reads stdin and writes output to stdout and errors & warnings to stderr.

Usage:
  yaml          Process a YAML stream, outputting it as YAML
  yaml cst      Parse the CST of a YAML stream
  yaml lex      Parse the lexical tokens of a YAML stream
  yaml valid    Validate a YAML stream, returning 0 on success

Options:
  --help, -h    Show this message.
  --json, -j    Output JSON.
  --indent 2    Output pretty-printed data, indented by the given number of spaces.
  --merge, -m   Enable support for "<<" merge keys.

Additional options for bare "yaml" command:
  --doc, -d     Output pretty-printed JS Document objects.
  --single, -1  Require the input to consist of a single YAML document.
  --strict, -s  Stop on errors.
  --visit, -v   Apply a visitor to each document (requires a path to import)
  --yaml 1.1    Set the YAML version. (default: 1.2)`;
class UserError extends Error {
    constructor(code, message) {
        super(`Error: ${message}`);
        this.code = code;
    }
}
UserError.ARGS = 2;
UserError.SINGLE = 3;
async function cli(stdin, done, argv) {
    let args;
    try {
        args = parseArgs({
            args: argv,
            allowPositionals: true,
            options: {
                doc: { type: 'boolean', short: 'd' },
                help: { type: 'boolean', short: 'h' },
                indent: { type: 'string', short: 'i' },
                merge: { type: 'boolean', short: 'm' },
                json: { type: 'boolean', short: 'j' },
                single: { type: 'boolean', short: '1' },
                strict: { type: 'boolean', short: 's' },
                visit: { type: 'string', short: 'v' },
                yaml: { type: 'string', default: '1.2' }
            }
        });
    }
    catch (error) {
        return done(new UserError(UserError.ARGS, error.message));
    }
    const { positionals: [mode], values: opt } = args;
    let indent = Number(opt.indent);
    stdin.setEncoding('utf-8');
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    switch (opt.help || mode) {
        /* istanbul ignore next */
        case true: // --help
            console.log(help);
            break;
        case 'lex': {
            const lexer = new Lexer();
            const data = [];
            const add = (tok) => {
                if (opt.json)
                    data.push(tok);
                else
                    console.log(prettyToken(tok));
            };
            stdin.on('data', (chunk) => {
                for (const tok of lexer.lex(chunk, true))
                    add(tok);
            });
            stdin.on('end', () => {
                for (const tok of lexer.lex('', false))
                    add(tok);
                if (opt.json)
                    console.log(JSON.stringify(data, null, indent));
                done();
            });
            break;
        }
        case 'cst': {
            const parser = new Parser();
            const data = [];
            const add = (tok) => {
                if (opt.json)
                    data.push(tok);
                else
                    console.dir(tok, { depth: null });
            };
            stdin.on('data', (chunk) => {
                for (const tok of parser.parse(chunk, true))
                    add(tok);
            });
            stdin.on('end', () => {
                for (const tok of parser.parse('', false))
                    add(tok);
                if (opt.json)
                    console.log(JSON.stringify(data, null, indent));
                done();
            });
            break;
        }
        case undefined:
        case 'valid': {
            const lineCounter = new LineCounter();
            const parser = new Parser(lineCounter.addNewLine);
            // @ts-expect-error Version is validated at runtime
            const composer = new Composer({ version: opt.yaml, merge: opt.merge });
            const visitor = opt.visit
                ? (await import(resolve(opt.visit))).default
                : null;
            let source = '';
            let hasDoc = false;
            let reqDocEnd = false;
            const data = [];
            const add = (doc) => {
                if (hasDoc && opt.single) {
                    return done(new UserError(UserError.SINGLE, 'Input stream contains multiple documents'));
                }
                for (const error of doc.errors) {
                    prettifyError(source, lineCounter)(error);
                    if (opt.strict || mode === 'valid')
                        return done(error);
                    console.error(error);
                }
                for (const warning of doc.warnings) {
                    prettifyError(source, lineCounter)(warning);
                    console.error(warning);
                }
                if (visitor)
                    visit(doc, visitor);
                if (mode === 'valid')
                    doc.toJS();
                else if (opt.json)
                    data.push(doc);
                else if (opt.doc) {
                    Object.defineProperties(doc, {
                        options: { enumerable: false },
                        schema: { enumerable: false }
                    });
                    console.dir(doc, { depth: null });
                }
                else {
                    if (reqDocEnd)
                        console.log('...');
                    try {
                        indent || (indent = 2);
                        const str = doc.toString({ indent });
                        console.log(str.endsWith('\n') ? str.slice(0, -1) : str);
                    }
                    catch (error) {
                        done(error);
                    }
                }
                hasDoc = true;
                reqDocEnd = !doc.directives?.docEnd;
            };
            stdin.on('data', (chunk) => {
                source += chunk;
                for (const tok of parser.parse(chunk, true)) {
                    for (const doc of composer.next(tok))
                        add(doc);
                }
            });
            stdin.on('end', () => {
                for (const tok of parser.parse('', false)) {
                    for (const doc of composer.next(tok))
                        add(doc);
                }
                for (const doc of composer.end(false))
                    add(doc);
                if (opt.single && !hasDoc) {
                    return done(new UserError(UserError.SINGLE, 'Input stream contained no documents'));
                }
                if (mode !== 'valid' && opt.json) {
                    console.log(JSON.stringify(opt.single ? data[0] : data, null, indent));
                }
                done();
            });
            break;
        }
        default:
            done(new UserError(UserError.ARGS, `Unknown command: ${JSON.stringify(mode)}`));
    }
}

export { UserError, cli, help };
