import React from 'react';

// modified from https://github.com/i18next/react-i18next/blob/master/example/test-jest/src/__mocks__/react-i18next.js
const hasChildren = node =>
  node && (node.children || (node.props && node.props.children));

const getChildren = node =>
  node && node.children ? node.children : node.props && node.props.children;

const mockTranslations = {
  'profile.tweet':
    'I just earned the {{certTitle}} certification @freeCodeCamp! Check it out here: {{certURL}}'
};

const interpolate = (str, values = {}) =>
  str.replace(/\{\{\s*(\w+)\s*\}\}/g, (_match, key) =>
    values[key] === undefined ? `{{${key}}}` : String(values[key])
  );

const t = (str, options) => {
  const defaultValue =
    typeof options === 'string' ? options : options?.defaultValue;
  const translation = mockTranslations[str] ?? defaultValue ?? str;
  return interpolate(translation, options);
};

const renderNodes = (reactNodes, values = {}) => {
  if (typeof reactNodes === 'string') {
    return interpolate(reactNodes, values);
  }

  // a single element child (e.g. <h1><strong>text</strong></h1>) must be
  // wrapped, otherwise Object.keys iterates the element object itself
  if (React.isValidElement(reactNodes)) {
    return renderNodes([reactNodes], values);
  }

  return Object.keys(reactNodes).map((key, i) => {
    const child = reactNodes[key];
    const isElement = React.isValidElement(child);

    if (typeof child === 'string') {
      return interpolate(child, values);
    }
    if (hasChildren(child)) {
      const inner = renderNodes(getChildren(child), values);
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
  const WrappedComponent = props =>
    React.createElement(Component, {
      ...props,
      t: props.t ?? t
    });

  WrappedComponent.WrappedComponent = Component;
  WrappedComponent.displayName = `withTranslation(${Component.displayName || Component.name || 'Component'})`;

  return WrappedComponent;
};

const useTranslation = () => {
  return {
    t,
    i18n: {
      changeLanguage: () => new Promise(() => {})
    }
  };
};

const Trans = ({ children, values = {} }) =>
  Array.isArray(children)
    ? renderNodes(children, values)
    : renderNodes([children], values);

// translate isn't being used anywhere, uncomment if needed
/* const translate = () => Component => props => (
  <Component t={() => ''} {...props} />
); */

module.exports = { withTranslation, useTranslation, Trans };
