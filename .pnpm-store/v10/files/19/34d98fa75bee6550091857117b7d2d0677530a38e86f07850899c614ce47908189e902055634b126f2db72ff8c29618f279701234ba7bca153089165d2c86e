/* eslint-disable valid-jsdoc */
import config from 'prismjs/components.js';
import getLoader from 'prismjs/dependencies.js';

/**
 * @param {string} type
 * @returns {(name: string) => string}
 */
const getPath = type => name =>
    `prismjs/${config[type].meta.path.replace(/\{id\}/g, name)}`;

/**
 * @param {string} dep
 * @returns {boolean}
 */
const isPlugin = dep => config.plugins[dep] != null;

/**
 * @param {string} type
 * @param {string} name
 * @returns {boolean}
 */
const getNoCSS = (type, name) => !!config[type][name].noCSS;

/**
 * @param {string} theme
 * @returns {string}
 */
const getThemePath = theme => {
    if (theme.includes('/')) {
        const [themePackage, themeName] = theme.split('/');
        return `${themePackage}/themes/prism-${themeName}.css`
    }
    if (theme === 'default') {
        theme = 'prism';
    } else {
        theme = `prism-${theme}`;
    }

    return getPath('themes')(theme);
};

const getPluginPath = getPath('plugins');
const getLanguagePath = getPath('languages');

/**
 * @param {Options} [options]
 * @returns {string[]}
 *
 * @typedef Options
 * @property {string[] | 'all'} [languages]
 * @property {string[]} [plugins]
 * @property {string} [theme]
 * @property {boolean} [css]
 */
export default ({ languages = [], plugins = [], theme, css = false } = {}) => {
    if (languages === 'all') {
        languages = Object.keys(config.languages).filter(l => l !== 'meta');
    }

    return [
        ...getLoader(config, [...languages, ...plugins]).getIds().reduce((deps, dep) => {
            // Plugins can have language dependencies.
            const add = [isPlugin(dep) ? getPluginPath(dep) : getLanguagePath(dep)];

            if (css && isPlugin(dep) && !getNoCSS('plugins', dep)) {
                add.unshift(getPluginPath(dep) + '.css');
            }

            return [...deps, ...add];
        }, /** @type {string[]} */([])),
        ...(css && theme ? [getThemePath(theme)] : [])
    ];
};
