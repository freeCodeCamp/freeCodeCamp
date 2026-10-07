import colors from 'yoctocolors-cjs';
import figures from '@inquirer/figures';
export const defaultTheme = {
    prefix: {
        idle: colors.blue('?'),
        done: colors.green(figures.tick),
    },
    spinner: {
        interval: 80,
        frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'].map((frame) => colors.yellow(frame)),
    },
    style: {
        answer: colors.cyan,
        message: colors.bold,
        error: (text) => colors.red(`> ${text}`),
        defaultAnswer: (text) => colors.dim(`(${text})`),
        help: colors.dim,
        highlight: colors.cyan,
        key: (text) => colors.cyan(colors.bold(`<${text}>`)),
    },
};
