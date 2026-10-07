const Spacer = require('./Spacer.js');
const theme = require('../theme.js');

/**
 * @typedef {Object} PageHeaderProps
 * @property {string} [message]
 * @property {string} title
 * @property {string} [topOffset]
 */

/**
 * The header of the overlay.
 * @param {Document} document
 * @param {HTMLElement} root
 * @param {PageHeaderProps} props
 * @returns {void}
 */
function PageHeader(document, root, props) {
  const pageHeaderContainer = document.createElement('div');
  pageHeaderContainer.style.background = '#' + theme.dimgrey;
  pageHeaderContainer.style.boxShadow = '0 1px 4px rgba(0, 0, 0, 0.3)';
  pageHeaderContainer.style.color = '#' + theme.white;
  pageHeaderContainer.style.left = '0';
  pageHeaderContainer.style.right = '0';
  pageHeaderContainer.style.padding = '1rem 1.5rem';
  pageHeaderContainer.style.paddingLeft = 'max(1.5rem, env(safe-area-inset-left))';
  pageHeaderContainer.style.paddingRight = 'max(1.5rem, env(safe-area-inset-right))';
  pageHeaderContainer.style.position = 'fixed';
  pageHeaderContainer.style.top = props.topOffset || '0';

  const title = document.createElement('h3');
  title.innerText = props.title;
  title.style.color = '#' + theme.red;
  title.style.fontSize = '1.125rem';
  title.style.lineHeight = '1.3';
  title.style.margin = '0';
  pageHeaderContainer.appendChild(title);

  if (props.message) {
    title.style.margin = '0 0 0.5rem';

    const message = document.createElement('span');
    message.innerText = props.message;
    message.style.color = '#' + theme.white;
    message.style.wordBreak = 'break-word';
    pageHeaderContainer.appendChild(message);
  }

  root.appendChild(pageHeaderContainer);

  // This has to run after appending elements to root
  // because we need to actual mounted height.
  Spacer(document, root, {
    space: pageHeaderContainer.offsetHeight.toString(10),
  });
}

module.exports = PageHeader;
