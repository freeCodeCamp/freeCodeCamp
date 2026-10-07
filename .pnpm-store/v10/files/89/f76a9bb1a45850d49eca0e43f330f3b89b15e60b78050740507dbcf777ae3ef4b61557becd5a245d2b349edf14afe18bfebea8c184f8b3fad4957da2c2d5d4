import cliWidth from 'cli-width';
import wrapAnsi from 'wrap-ansi';
import { readline } from "./hook-engine.js";
/**
 * Force line returns at specific width. This function is ANSI code friendly and it'll
 * ignore invisible codes during width calculation.
 * @param {string} content
 * @param {number} width
 * @return {string}
 */
export function breakLines(content, width) {
    return content
        .split('\n')
        .flatMap((line) => wrapAnsi(line, width, { trim: false, hard: true })
        .split('\n')
        .map((str) => str.trimEnd()))
        .join('\n');
}
/**
 * Returns the width of the active readline, or 80 as default value.
 * @returns {number}
 */
export function readlineWidth() {
    return cliWidth({ defaultWidth: 80, output: readline().output });
}
