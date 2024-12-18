import React from 'react';

const reactI18next = jest.genMockFromModule('react-i18next');

// modified from https://github.com/i18next/react-i18next/blob/master/example/test-jest/src/__mocks__/react-i18next.js
const hasChildren = node =>
  node && (node.children || (node.props && node.props.children));

const getChildren = node =>
  node && node.children ? node.children : node.props && node.props.children;

const renderNodes = reactNodes => {
  if (typeof reactNodes === 'string') {
    return reactNodes;
  }

  return Object.keys(reactNodes).map((key, i) => {
    const child = reactNodes[key];
    const isElement = React.isValidElement(child);

    if (typeof child === 'string') {
      return child;
    }
    if (hasChildren(child)) {
      const inner = renderNodes(getChildren(child));
      return React.cloneElement(child, { ...child.props, key: i }, inner);
    }
    if (typeof child === 'object' && !isElement) {
      return Object.keys(child).reduce(
        (str, childKey) => `${str}${child[childKey]}`,
        ''
      );
    }

    return child;
  });
};

const withTranslation = () => Component => {
  Component.defaultProps = { ...Component.defaultProps, t: str => str };
  return Component;
};

const useTranslation = () => {
  return {
    t: str => str,
    i18n: {
      changeLanguage: () => new Promise(() => {})
    }
  };
};

const Trans = ({ children }) =>
  Array.isArray(children) ? renderNodes(children) : renderNodes([children]);

// translate isn't being used anywhere, uncomment if needed
/* const translate = () => Component => props => (
  <Component t={() => ''} {...props} />
); */

// reactI18next.translate = translate;
reactI18next.withTranslation = withTranslation;
reactI18next.useTranslation = useTranslation;
reactI18next.Trans = Trans;

module.exports = reactI18next;
