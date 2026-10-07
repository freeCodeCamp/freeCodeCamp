const CompileErrorTrace = require('../components/CompileErrorTrace.js');
const PageHeader = require('../components/PageHeader.js');
const Spacer = require('../components/Spacer.js');

/**
 * @typedef {Object} CompileErrorContainerProps
 * @property {string} errorMessage
 */

/**
 * A container to render Webpack compilation error messages with source trace.
 * @param {Document} document
 * @param {HTMLElement} root
 * @param {CompileErrorContainerProps} props
 * @returns {void}
 */
function CompileErrorContainer(document, root, props) {
  PageHeader(document, root, {
    title: 'Failed to compile.',
  });
  CompileErrorTrace(document, root, { errorMessage: props.errorMessage });
  Spacer(document, root, { space: '1rem' });
}

module.exports = CompileErrorContainer;
