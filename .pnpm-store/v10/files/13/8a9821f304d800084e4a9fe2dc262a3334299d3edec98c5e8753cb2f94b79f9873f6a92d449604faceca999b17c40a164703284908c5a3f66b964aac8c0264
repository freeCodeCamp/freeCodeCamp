import { styleText } from 'node:util';
import figures from '@inquirer/figures';
export const defaultTheme = {
    prefix: {
        idle: styleText('blue', '?'),
        done: styleText('green', figures.tick),
    },
    spinner: {
        interval: 80,
        frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'].map((frame) => styleText('yellow', frame)),
    },
    style: {
        answer: (text) => styleText('cyan', text),
        message: (text) => styleText('bold', text),
        error: (text) => styleText('red', `> ${text}`),
        defaultAnswer: (text) => styleText('dim', `(${text})`),
        help: (text) => styleText('dim', text),
        highlight: (text) => styleText('cyan', text),
        key: (text) => styleText('cyan', styleText('bold', `<${text}>`)),
    },
};
