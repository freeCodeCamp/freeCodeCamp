import redent from 'redent';
import { parse } from '@adobe/css-tools';
import { computeAccessibleDescription, computeAccessibleName } from 'dom-accessibility-api';
import { elementRoles, roles } from 'aria-query';
import pico from 'picocolors';
import escape from 'css.escape';

class GenericTypeError extends Error {
  constructor(expectedString, received, matcherFn, context) {
    super();

    /* istanbul ignore next */
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, matcherFn);
    }
    let withType = '';
    try {
      withType = context.utils.printWithType(
        'Received',
        received,
        context.utils.printReceived,
      );
    } catch (e) {
      // Can throw for Document:
      // https://github.com/jsdom/jsdom/issues/2304
    }
    this.message = [
      context.utils.matcherHint(
        `${context.isNot ? '.not' : ''}.${matcherFn.name}`,
        'received',
        '',
      ),
      '',
      // eslint-disable-next-line new-cap
      `${context.utils.RECEIVED_COLOR(
        'received',
      )} value must ${expectedString}.`,
      withType,
    ].join('\n');
  }
}

class HtmlElementTypeError extends GenericTypeError {
  constructor(...args) {
    super('be an HTMLElement or an SVGElement', ...args);
  }
}

class NodeTypeError extends GenericTypeError {
  constructor(...args) {
    super('be a Node', ...args);
  }
}

function checkHasWindow(htmlElement, ErrorClass, ...args) {
  if (
    !htmlElement ||
    !htmlElement.ownerDocument ||
    !htmlElement.ownerDocument.defaultView
  ) {
    throw new ErrorClass(htmlElement, ...args)
  }
}

function checkNode(node, ...args) {
  checkHasWindow(node, NodeTypeError, ...args);
  const window = node.ownerDocument.defaultView;

  if (!(node instanceof window.Node)) {
    throw new NodeTypeError(node, ...args)
  }
}

function checkHtmlElement(htmlElement, ...args) {
  checkHasWindow(htmlElement, HtmlElementTypeError, ...args);
  const window = htmlElement.ownerDocument.defaultView;

  if (
    !(htmlElement instanceof window.HTMLElement) &&
    !(htmlElement instanceof window.SVGElement)
  ) {
    throw new HtmlElementTypeError(htmlElement, ...args)
  }
}

class InvalidCSSError extends Error {
  constructor(received, matcherFn, context) {
    super();

    /* istanbul ignore next */
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, matcherFn);
    }
    this.message = [
      received.message,
      '',
      // eslint-disable-next-line new-cap
      context.utils.RECEIVED_COLOR(`Failing css:`),
      // eslint-disable-next-line new-cap
      context.utils.RECEIVED_COLOR(`${received.css}`),
    ].join('\n');
  }
}

function parseCSS(css, ...args) {
  const ast = parse(`selector { ${css} }`, {silent: true}).stylesheet;

  if (ast.parsingErrors && ast.parsingErrors.length > 0) {
    const {reason, line} = ast.parsingErrors[0];

    throw new InvalidCSSError(
      {
        css,
        message: `Syntax error parsing expected css: ${reason} on line: ${line}`,
      },
      ...args,
    )
  }

  const parsedRules = ast.rules[0].declarations
    .filter(d => d.type === 'declaration')
    .reduce(
      (obj, {property, value}) => Object.assign(obj, {[property]: value}),
      {},
    );
  return parsedRules
}

function display(context, value) {
  return typeof value === 'string' ? value : context.utils.stringify(value)
}

function getMessage(
  context,
  matcher,
  expectedLabel,
  expectedValue,
  receivedLabel,
  receivedValue,
) {
  return [
    `${matcher}\n`,
    // eslint-disable-next-line new-cap
    `${expectedLabel}:\n${context.utils.EXPECTED_COLOR(
      redent(display(context, expectedValue), 2),
    )}`,
    // eslint-disable-next-line new-cap
    `${receivedLabel}:\n${context.utils.RECEIVED_COLOR(
      redent(display(context, receivedValue), 2),
    )}`,
  ].join('\n')
}

function matches(textToMatch, matcher) {
  if (matcher instanceof RegExp) {
    return matcher.test(textToMatch)
  } else {
    return textToMatch.includes(String(matcher))
  }
}

function deprecate(name, replacementText) {
  // Notify user that they are using deprecated functionality.
  // eslint-disable-next-line no-console
  console.warn(
    `Warning: ${name} has been deprecated and will be removed in future updates.`,
    replacementText,
  );
}

function normalize(text) {
  return text.replace(/\s+/g, ' ').trim()
}

function getTag(element) {
  return element.tagName && element.tagName.toLowerCase()
}

function getSelectValue({multiple, options}) {
  const selectedOptions = [...options].filter(option => option.selected);

  if (multiple) {
    return [...selectedOptions].map(opt => opt.value)
  }
  /* istanbul ignore if */
  if (selectedOptions.length === 0) {
    return undefined // Couldn't make this happen, but just in case
  }
  return selectedOptions[0].value
}

function getInputValue(inputElement) {
  switch (inputElement.type) {
    case 'number':
      return inputElement.value === '' ? null : Number(inputElement.value)
    case 'checkbox':
      return inputElement.checked
    default:
      return inputElement.value
  }
}

const rolesSupportingValues = ['meter', 'progressbar', 'slider', 'spinbutton'];
function getAccessibleValue(element) {
  if (!rolesSupportingValues.includes(element.getAttribute('role'))) {
    return undefined
  }
  return Number(element.getAttribute('aria-valuenow'))
}

function getSingleElementValue(element) {
  /* istanbul ignore if */
  if (!element) {
    return undefined
  }

  switch (element.tagName.toLowerCase()) {
    case 'input':
      return getInputValue(element)
    case 'select':
      return getSelectValue(element)
    default: {
      return element.value ?? getAccessibleValue(element)
    }
  }
}

function toSentence(
  array,
  {wordConnector = ', ', lastWordConnector = ' and '} = {},
) {
  return [array.slice(0, -1).join(wordConnector), array[array.length - 1]].join(
    array.length > 1 ? lastWordConnector : '',
  )
}

function compareAsSet(val1, val2) {
  if (Array.isArray(val1) && Array.isArray(val2)) {
    return [...new Set(val1)].every(v => new Set(val2).has(v))
  }
  return val1 === val2
}

function toBeInTheDOM(element, container) {
  deprecate(
    'toBeInTheDOM',
    'Please use toBeInTheDocument for searching the entire document and toContainElement for searching a specific container.',
  );

  if (element) {
    checkHtmlElement(element, toBeInTheDOM, this);
  }

  if (container) {
    checkHtmlElement(container, toBeInTheDOM, this);
  }

  return {
    pass: container ? container.contains(element) : !!element,
    message: () => {
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeInTheDOM`,
          'element',
          '',
        ),
        '',
        'Received:',
        `  ${this.utils.printReceived(
          element ? element.cloneNode(false) : element,
        )}`,
      ].join('\n')
    },
  }
}

function toBeInTheDocument(element) {
  if (element !== null || !this.isNot) {
    checkHtmlElement(element, toBeInTheDocument, this);
  }

  const pass =
    element === null
      ? false
      : element.ownerDocument === element.getRootNode({composed: true});

  const errorFound = () => {
    return `expected document not to contain element, found ${this.utils.stringify(
      element.cloneNode(true),
    )} instead`
  };
  const errorNotFound = () => {
    return `element could not be found in the document`
  };

  return {
    pass,
    message: () => {
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeInTheDocument`,
          'element',
          '',
        ),
        '',
        // eslint-disable-next-line new-cap
        this.utils.RECEIVED_COLOR(this.isNot ? errorFound() : errorNotFound()),
      ].join('\n')
    },
  }
}

function toBeEmpty(element) {
  deprecate(
    'toBeEmpty',
    'Please use instead toBeEmptyDOMElement for finding empty nodes in the DOM.',
  );
  checkHtmlElement(element, toBeEmpty, this);

  return {
    pass: element.innerHTML === '',
    message: () => {
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeEmpty`,
          'element',
          '',
        ),
        '',
        'Received:',
        `  ${this.utils.printReceived(element.innerHTML)}`,
      ].join('\n')
    },
  }
}

function toBeEmptyDOMElement(element) {
  checkHtmlElement(element, toBeEmptyDOMElement, this);

  return {
    pass: isEmptyElement(element),
    message: () => {
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeEmptyDOMElement`,
          'element',
          '',
        ),
        '',
        'Received:',
        `  ${this.utils.printReceived(element.innerHTML)}`,
      ].join('\n')
    },
  }
}

/**
 * Identifies if an element doesn't contain child nodes (excluding comments)
 * ℹ Node.COMMENT_NODE can't be used because of the following issue 
 * https://github.com/jsdom/jsdom/issues/2220
 *
 * @param {*} element an HtmlElement or SVGElement
 * @return {*} true if the element only contains comments or none
 */
function isEmptyElement(element){
  const nonCommentChildNodes = [...element.childNodes].filter(node => node.nodeType !== 8);
  return nonCommentChildNodes.length === 0;
}

function toContainElement(container, element) {
  checkHtmlElement(container, toContainElement, this);

  if (element !== null) {
    checkHtmlElement(element, toContainElement, this);
  }

  return {
    pass: container.contains(element),
    message: () => {
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toContainElement`,
          'element',
          'element',
        ),
        '',
        // eslint-disable-next-line new-cap
        this.utils.RECEIVED_COLOR(`${this.utils.stringify(
          container.cloneNode(false),
        )} ${
          this.isNot ? 'contains:' : 'does not contain:'
        } ${this.utils.stringify(element ? element.cloneNode(false) : element)}
        `),
      ].join('\n')
    },
  }
}

function getNormalizedHtml(container, htmlText) {
  const div = container.ownerDocument.createElement('div');
  div.innerHTML = htmlText;
  return div.innerHTML
}

function toContainHTML(container, htmlText) {
  checkHtmlElement(container, toContainHTML, this);

  if (typeof htmlText !== 'string') {
    throw new Error(`.toContainHTML() expects a string value, got ${htmlText}`)
  }

  return {
    pass: container.outerHTML.includes(getNormalizedHtml(container, htmlText)),
    message: () => {
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toContainHTML`,
          'element',
          '',
        ),
        'Expected:',
        // eslint-disable-next-line new-cap
        `  ${this.utils.EXPECTED_COLOR(htmlText)}`,
        'Received:',
        `  ${this.utils.printReceived(container.cloneNode(true))}`,
      ].join('\n')
    },
  }
}

function toHaveTextContent(
  node,
  checkWith,
  options = {normalizeWhitespace: true},
) {
  checkNode(node, toHaveTextContent, this);

  const textContent = options.normalizeWhitespace
    ? normalize(node.textContent)
    : node.textContent.replace(/\u00a0/g, ' '); // Replace &nbsp; with normal spaces

  const checkingWithEmptyString = textContent !== '' && checkWith === '';

  return {
    pass: !checkingWithEmptyString && matches(textContent, checkWith),
    message: () => {
      const to = this.isNot ? 'not to' : 'to';
      return getMessage(
        this,
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toHaveTextContent`,
          'element',
          '',
        ),
        checkingWithEmptyString
          ? `Checking with empty string will always match, use .toBeEmptyDOMElement() instead`
          : `Expected element ${to} have text content`,
        checkWith,
        'Received',
        textContent,
      )
    },
  }
}

function toHaveAccessibleDescription(
  htmlElement,
  expectedAccessibleDescription,
) {
  checkHtmlElement(htmlElement, toHaveAccessibleDescription, this);
  const actualAccessibleDescription = computeAccessibleDescription(htmlElement);
  const missingExpectedValue = arguments.length === 1;

  let pass = false;
  if (missingExpectedValue) {
    // When called without an expected value we only want to validate that the element has an
    // accessible description, whatever it may be.
    pass = actualAccessibleDescription !== '';
  } else {
    pass =
      expectedAccessibleDescription instanceof RegExp
        ? expectedAccessibleDescription.test(actualAccessibleDescription)
        : this.equals(
            actualAccessibleDescription,
            expectedAccessibleDescription,
          );
  }

  return {
    pass,

    message: () => {
      const to = this.isNot ? 'not to' : 'to';
      return getMessage(
        this,
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.${toHaveAccessibleDescription.name}`,
          'element',
          '',
        ),
        `Expected element ${to} have accessible description`,
        expectedAccessibleDescription,
        'Received',
        actualAccessibleDescription,
      )
    },
  }
}

const ariaInvalidName = 'aria-invalid';
const validStates = ['false'];

// See `aria-errormessage` spec at https://www.w3.org/TR/wai-aria-1.2/#aria-errormessage
function toHaveAccessibleErrorMessage(
  htmlElement,
  expectedAccessibleErrorMessage,
) {
  checkHtmlElement(htmlElement, toHaveAccessibleErrorMessage, this);
  const to = this.isNot ? 'not to' : 'to';
  const method = this.isNot
    ? '.not.toHaveAccessibleErrorMessage'
    : '.toHaveAccessibleErrorMessage';

  // Enforce Valid Id
  const errormessageId = htmlElement.getAttribute('aria-errormessage');
  const errormessageIdInvalid = !!errormessageId && /\s+/.test(errormessageId);

  if (errormessageIdInvalid) {
    return {
      pass: false,
      message: () => {
        return getMessage(
          this,
          this.utils.matcherHint(method, 'element'),
          "Expected element's `aria-errormessage` attribute to be empty or a single, valid ID",
          '',
          'Received',
          `aria-errormessage="${errormessageId}"`,
        )
      },
    }
  }

  // See `aria-invalid` spec at https://www.w3.org/TR/wai-aria-1.2/#aria-invalid
  const ariaInvalidVal = htmlElement.getAttribute(ariaInvalidName);
  const fieldValid =
    !htmlElement.hasAttribute(ariaInvalidName) ||
    validStates.includes(ariaInvalidVal);

  // Enforce Valid `aria-invalid` Attribute
  if (fieldValid) {
    return {
      pass: false,
      message: () => {
        return getMessage(
          this,
          this.utils.matcherHint(method, 'element'),
          'Expected element to be marked as invalid with attribute',
          `${ariaInvalidName}="${String(true)}"`,
          'Received',
          htmlElement.hasAttribute('aria-invalid')
            ? `${ariaInvalidName}="${htmlElement.getAttribute(ariaInvalidName)}`
            : null,
        )
      },
    }
  }

  const error = normalize(
    htmlElement.ownerDocument.getElementById(errormessageId)?.textContent ?? '',
  );

  return {
    pass:
      expectedAccessibleErrorMessage === undefined
        ? Boolean(error)
        : expectedAccessibleErrorMessage instanceof RegExp
        ? expectedAccessibleErrorMessage.test(error)
        : this.equals(error, expectedAccessibleErrorMessage),

    message: () => {
      return getMessage(
        this,
        this.utils.matcherHint(method, 'element'),
        `Expected element ${to} have accessible error message`,
        expectedAccessibleErrorMessage ?? '',
        'Received',
        error,
      )
    },
  }
}

const elementRoleList = buildElementRoleList(elementRoles);

function toHaveRole(htmlElement, expectedRole) {
  checkHtmlElement(htmlElement, toHaveRole, this);

  const actualRoles = getExplicitOrImplicitRoles(htmlElement);
  const pass = actualRoles.some(el => el === expectedRole);

  return {
    pass,

    message: () => {
      const to = this.isNot ? 'not to' : 'to';
      return getMessage(
        this,
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.${toHaveRole.name}`,
          'element',
          '',
        ),
        `Expected element ${to} have role`,
        expectedRole,
        'Received',
        actualRoles.join(', '),
      )
    },
  }
}

function getExplicitOrImplicitRoles(htmlElement) {
  const hasExplicitRole = htmlElement.hasAttribute('role');

  if (hasExplicitRole) {
    const roleValue = htmlElement.getAttribute('role');

    // Handle fallback roles, such as role="switch button"
    // testing-library gates this behind the `queryFallbacks` flag; it is
    // unclear why, but it makes sense to support this pattern out of the box
    // https://testing-library.com/docs/queries/byrole/#queryfallbacks
    return roleValue.split(' ').filter(Boolean)
  }

  const implicitRoles = getImplicitAriaRoles(htmlElement);

  return implicitRoles
}

function getImplicitAriaRoles(currentNode) {
  for (const {match, roles} of elementRoleList) {
    if (match(currentNode)) {
      return [...roles]
    }
  }

  /* istanbul ignore next */
  return [] // this does not get reached in practice, since elements have at least a 'generic' role
}

/**
 * Transform the roles map (with required attributes and constraints) to a list
 * of roles. Each item in the list has functions to match an element against it.
 *
 * Essentially copied over from [dom-testing-library's
 * helpers](https://github.com/testing-library/dom-testing-library/blob/bd04cf95a1ed85a2238f7dfc1a77d5d16b4f59dc/src/role-helpers.js#L80)
 *
 * TODO: If we are truly just copying over stuff, would it make sense to move
 * this to a separate package?
 *
 * TODO: This technique relies on CSS selectors; are those consistently
 * available in all jest-dom environments? Why do other matchers in this package
 * not use them like this?
 */
function buildElementRoleList(elementRolesMap) {
  function makeElementSelector({name, attributes}) {
    return `${name}${attributes
      .map(({name: attributeName, value, constraints = []}) => {
        const shouldNotExist = constraints.indexOf('undefined') !== -1;
        if (shouldNotExist) {
          return `:not([${attributeName}])`
        } else if (value) {
          return `[${attributeName}="${value}"]`
        } else {
          return `[${attributeName}]`
        }
      })
      .join('')}`
  }

  function getSelectorSpecificity({attributes = []}) {
    return attributes.length
  }

  function bySelectorSpecificity(
    {specificity: leftSpecificity},
    {specificity: rightSpecificity},
  ) {
    return rightSpecificity - leftSpecificity
  }

  function match(element) {
    let {attributes = []} = element;

    // https://github.com/testing-library/dom-testing-library/issues/814
    const typeTextIndex = attributes.findIndex(
      attribute =>
        attribute.value &&
        attribute.name === 'type' &&
        attribute.value === 'text',
    );

    if (typeTextIndex >= 0) {
      // not using splice to not mutate the attributes array
      attributes = [
        ...attributes.slice(0, typeTextIndex),
        ...attributes.slice(typeTextIndex + 1),
      ];
    }

    const selector = makeElementSelector({...element, attributes});

    return node => {
      if (typeTextIndex >= 0 && node.type !== 'text') {
        return false
      }

      return node.matches(selector)
    }
  }

  let result = [];

  for (const [element, roles] of elementRolesMap.entries()) {
    result = [
      ...result,
      {
        match: match(element),
        roles: Array.from(roles),
        specificity: getSelectorSpecificity(element),
      },
    ];
  }

  return result.sort(bySelectorSpecificity)
}

function toHaveAccessibleName(htmlElement, expectedAccessibleName) {
  checkHtmlElement(htmlElement, toHaveAccessibleName, this);
  const actualAccessibleName = computeAccessibleName(htmlElement);
  const missingExpectedValue = arguments.length === 1;

  let pass = false;
  if (missingExpectedValue) {
    // When called without an expected value we only want to validate that the element has an
    // accessible name, whatever it may be.
    pass = actualAccessibleName !== '';
  } else {
    pass =
      expectedAccessibleName instanceof RegExp
        ? expectedAccessibleName.test(actualAccessibleName)
        : this.equals(actualAccessibleName, expectedAccessibleName);
  }

  return {
    pass,

    message: () => {
      const to = this.isNot ? 'not to' : 'to';
      return getMessage(
        this,
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.${toHaveAccessibleName.name}`,
          'element',
          '',
        ),
        `Expected element ${to} have accessible name`,
        expectedAccessibleName,
        'Received',
        actualAccessibleName,
      )
    },
  }
}

function printAttribute(stringify, name, value) {
  return value === undefined ? name : `${name}=${stringify(value)}`
}

function getAttributeComment(stringify, name, value) {
  return value === undefined
    ? `element.hasAttribute(${stringify(name)})`
    : `element.getAttribute(${stringify(name)}) === ${stringify(value)}`
}

function toHaveAttribute(htmlElement, name, expectedValue) {
  checkHtmlElement(htmlElement, toHaveAttribute, this);
  const isExpectedValuePresent = expectedValue !== undefined;
  const hasAttribute = htmlElement.hasAttribute(name);
  const receivedValue = htmlElement.getAttribute(name);
  return {
    pass: isExpectedValuePresent
      ? hasAttribute && this.equals(receivedValue, expectedValue)
      : hasAttribute,
    message: () => {
      const to = this.isNot ? 'not to' : 'to';
      const receivedAttribute = hasAttribute
        ? printAttribute(this.utils.stringify, name, receivedValue)
        : null;
      const matcher = this.utils.matcherHint(
        `${this.isNot ? '.not' : ''}.toHaveAttribute`,
        'element',
        this.utils.printExpected(name),
        {
          secondArgument: isExpectedValuePresent
            ? this.utils.printExpected(expectedValue)
            : undefined,
          comment: getAttributeComment(
            this.utils.stringify,
            name,
            expectedValue,
          ),
        },
      );
      return getMessage(
        this,
        matcher,
        `Expected the element ${to} have attribute`,
        printAttribute(this.utils.stringify, name, expectedValue),
        'Received',
        receivedAttribute,
      )
    },
  }
}

function getExpectedClassNamesAndOptions(params) {
  const lastParam = params.pop();
  let expectedClassNames, options;

  if (typeof lastParam === 'object' && !(lastParam instanceof RegExp)) {
    expectedClassNames = params;
    options = lastParam;
  } else {
    expectedClassNames = params.concat(lastParam);
    options = {exact: false};
  }
  return {expectedClassNames, options}
}

function splitClassNames(str) {
  if (!str) return []
  return str.split(/\s+/).filter(s => s.length > 0)
}

function isSubset$1(subset, superset) {
  return subset.every(strOrRegexp =>
    typeof strOrRegexp === 'string'
      ? superset.includes(strOrRegexp)
      : superset.some(className => strOrRegexp.test(className)),
  )
}

function toHaveClass(htmlElement, ...params) {
  checkHtmlElement(htmlElement, toHaveClass, this);
  const {expectedClassNames, options} = getExpectedClassNamesAndOptions(params);

  const received = splitClassNames(htmlElement.getAttribute('class'));
  const expected = expectedClassNames.reduce(
    (acc, className) =>
      acc.concat(
        typeof className === 'string' || !className
          ? splitClassNames(className)
          : className,
      ),
    [],
  );

  const hasRegExp = expected.some(className => className instanceof RegExp);
  if (options.exact && hasRegExp) {
    throw new Error('Exact option does not support RegExp expected class names')
  }

  if (options.exact) {
    return {
      pass: isSubset$1(expected, received) && expected.length === received.length,
      message: () => {
        const to = this.isNot ? 'not to' : 'to';
        return getMessage(
          this,
          this.utils.matcherHint(
            `${this.isNot ? '.not' : ''}.toHaveClass`,
            'element',
            this.utils.printExpected(expected.join(' ')),
          ),
          `Expected the element ${to} have EXACTLY defined classes`,
          expected.join(' '),
          'Received',
          received.join(' '),
        )
      },
    }
  }

  return expected.length > 0
    ? {
        pass: isSubset$1(expected, received),
        message: () => {
          const to = this.isNot ? 'not to' : 'to';
          return getMessage(
            this,
            this.utils.matcherHint(
              `${this.isNot ? '.not' : ''}.toHaveClass`,
              'element',
              this.utils.printExpected(expected.join(' ')),
            ),
            `Expected the element ${to} have class`,
            expected.join(' '),
            'Received',
            received.join(' '),
          )
        },
      }
    : {
        pass: this.isNot ? received.length > 0 : false,
        message: () =>
          this.isNot
            ? getMessage(
                this,
                this.utils.matcherHint('.not.toHaveClass', 'element', ''),
                'Expected the element to have classes',
                '(none)',
                'Received',
                received.join(' '),
              )
            : [
                this.utils.matcherHint(`.toHaveClass`, 'element'),
                'At least one expected class must be provided.',
              ].join('\n'),
      }
}

function getStyleDeclaration(document, css) {
  const styles = {};

  // The next block is necessary to normalize colors
  const copy = document.createElement('div');
  Object.keys(css).forEach(property => {
    copy.style[property] = css[property];
    styles[property] = copy.style[property];
  });

  return styles
}

function isSubset(styles, computedStyle) {
  return (
    !!Object.keys(styles).length &&
    Object.entries(styles).every(([prop, value]) => {
      const isCustomProperty = prop.startsWith('--');
      const spellingVariants = [prop];
      if (!isCustomProperty) spellingVariants.push(prop.toLowerCase());

      return spellingVariants.some(
        name =>
          computedStyle[name] === value ||
          computedStyle.getPropertyValue(name) === value,
      )
    })
  )
}

function printoutStyles(styles) {
  return Object.keys(styles)
    .sort()
    .map(prop => `${prop}: ${styles[prop]};`)
    .join('\n')
}

// Highlights only style rules that were expected but were not found in the
// received computed styles
function expectedDiff(diffFn, expected, computedStyles) {
  const received = Array.from(computedStyles)
    .filter(prop => expected[prop] !== undefined)
    .reduce(
      (obj, prop) =>
        Object.assign(obj, {[prop]: computedStyles.getPropertyValue(prop)}),
      {},
    );
  const diffOutput = diffFn(printoutStyles(expected), printoutStyles(received));
  // Remove the "+ Received" annotation because this is a one-way diff
  return diffOutput.replace(`${pico.red('+ Received')}\n`, '')
}

function toHaveStyle(htmlElement, css) {
  checkHtmlElement(htmlElement, toHaveStyle, this);
  const parsedCSS =
    typeof css === 'object' ? css : parseCSS(css, toHaveStyle, this);
  const {getComputedStyle} = htmlElement.ownerDocument.defaultView;

  const expected = getStyleDeclaration(htmlElement.ownerDocument, parsedCSS);
  const received = getComputedStyle(htmlElement);

  return {
    pass: isSubset(expected, received),
    message: () => {
      const matcher = `${this.isNot ? '.not' : ''}.toHaveStyle`;
      return [
        this.utils.matcherHint(matcher, 'element', ''),
        expectedDiff(this.utils.diff, expected, received),
      ].join('\n\n')
    },
  }
}

function toHaveFocus(element) {
  checkHtmlElement(element, toHaveFocus, this);

  return {
    pass: element.ownerDocument.activeElement === element,
    message: () => {
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toHaveFocus`,
          'element',
          '',
        ),
        '',
        ...(this.isNot
          ? [
              'Received element is focused:',
              `  ${this.utils.printReceived(element)}`,
            ]
          : [
              'Expected element with focus:',
              `  ${this.utils.printExpected(element)}`,
              'Received element with focus:',
              `  ${this.utils.printReceived(
                element.ownerDocument.activeElement,
              )}`,
            ]),
      ].join('\n')
    },
  }
}

// Returns the combined value of several elements that have the same name
// e.g. radio buttons or groups of checkboxes
function getMultiElementValue(elements) {
  const types = [...new Set(elements.map(element => element.type))];
  if (types.length !== 1) {
    throw new Error(
      'Multiple form elements with the same name must be of the same type',
    )
  }
  switch (types[0]) {
    case 'radio': {
      const theChosenOne = elements.find(radio => radio.checked);
      return theChosenOne ? theChosenOne.value : undefined
    }
    case 'checkbox':
      return elements
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value)
    default:
      // NOTE: Not even sure this is a valid use case, but just in case...
      return elements.map(element => element.value)
  }
}

function getFormValue(container, name) {
  const elements = [...container.querySelectorAll(`[name="${escape(name)}"]`)];
  /* istanbul ignore if */
  if (elements.length === 0) {
    return undefined // shouldn't happen, but just in case
  }
  switch (elements.length) {
    case 1:
      return getSingleElementValue(elements[0])
    default:
      return getMultiElementValue(elements)
  }
}

// Strips the `[]` suffix off a form value name
function getPureName(name) {
  return /\[\]$/.test(name) ? name.slice(0, -2) : name
}

function getAllFormValues(container) {
  const names = Array.from(container.elements).map(element => element.name);
  return names.reduce(
    (obj, name) => ({
      ...obj,
      [getPureName(name)]: getFormValue(container, name),
    }),
    {},
  )
}

function toHaveFormValues(formElement, expectedValues) {
  checkHtmlElement(formElement, toHaveFormValues, this);
  if (!formElement.elements) {
    // TODO: Change condition to use instanceof against the appropriate element classes instead
    throw new Error('toHaveFormValues must be called on a form or a fieldset')
  }
  const formValues = getAllFormValues(formElement);
  return {
    pass: Object.entries(expectedValues).every(([name, expectedValue]) =>
      compareAsSet(formValues[name], expectedValue),
    ),
    message: () => {
      const to = this.isNot ? 'not to' : 'to';
      const matcher = `${this.isNot ? '.not' : ''}.toHaveFormValues`;
      const commonKeyValues = Object.keys(formValues)
        .filter(key => expectedValues.hasOwnProperty(key))
        .reduce((obj, key) => ({...obj, [key]: formValues[key]}), {});
      return [
        this.utils.matcherHint(matcher, 'element', ''),
        `Expected the element ${to} have form values`,
        this.utils.diff(expectedValues, commonKeyValues),
      ].join('\n\n')
    },
  }
}

function isStyleVisible(element) {
  const {getComputedStyle} = element.ownerDocument.defaultView;

  const {display, visibility, opacity} = getComputedStyle(element);
  return (
    display !== 'none' &&
    visibility !== 'hidden' &&
    visibility !== 'collapse' &&
    opacity !== '0' &&
    opacity !== 0
  )
}

function isAttributeVisible(element, previousElement) {
  let detailsVisibility;

  if (previousElement) {
    detailsVisibility =
      element.nodeName === 'DETAILS' && previousElement.nodeName !== 'SUMMARY'
        ? element.hasAttribute('open')
        : true;
  } else {
    detailsVisibility =
      element.nodeName === 'DETAILS' ? element.hasAttribute('open') : true;
  }

  return !element.hasAttribute('hidden') && detailsVisibility
}

function isElementVisible(element, previousElement) {
  return (
    isStyleVisible(element) &&
    isAttributeVisible(element, previousElement) &&
    (!element.parentElement || isElementVisible(element.parentElement, element))
  )
}

function toBeVisible(element) {
  checkHtmlElement(element, toBeVisible, this);
  const isInDocument =
    element.ownerDocument === element.getRootNode({composed: true});
  const isVisible = isInDocument && isElementVisible(element);
  return {
    pass: isVisible,
    message: () => {
      const is = isVisible ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeVisible`,
          'element',
          '',
        ),
        '',
        `Received element ${is} visible${
          isInDocument ? '' : ' (element is not in the document)'
        }:`,
        `  ${this.utils.printReceived(element.cloneNode(false))}`,
      ].join('\n')
    },
  }
}

// form elements that support 'disabled'
const FORM_TAGS$2 = [
  'fieldset',
  'input',
  'select',
  'optgroup',
  'option',
  'button',
  'textarea',
];

/*
 * According to specification:
 * If <fieldset> is disabled, the form controls that are its descendants,
 * except descendants of its first optional <legend> element, are disabled
 *
 * https://html.spec.whatwg.org/multipage/form-elements.html#concept-fieldset-disabled
 *
 * This method tests whether element is first legend child of fieldset parent
 */
function isFirstLegendChildOfFieldset(element, parent) {
  return (
    getTag(element) === 'legend' &&
    getTag(parent) === 'fieldset' &&
    element.isSameNode(
      Array.from(parent.children).find(child => getTag(child) === 'legend'),
    )
  )
}

function isElementDisabledByParent(element, parent) {
  return (
    isElementDisabled(parent) && !isFirstLegendChildOfFieldset(element, parent)
  )
}

function isCustomElement(tag) {
  return tag.includes('-')
}

/*
 * Only certain form elements and custom elements can actually be disabled:
 * https://html.spec.whatwg.org/multipage/semantics-other.html#disabled-elements
 */
function canElementBeDisabled(element) {
  const tag = getTag(element);
  return FORM_TAGS$2.includes(tag) || isCustomElement(tag)
}

function isElementDisabled(element) {
  return canElementBeDisabled(element) && element.hasAttribute('disabled')
}

function isAncestorDisabled(element) {
  const parent = element.parentElement;
  return (
    Boolean(parent) &&
    (isElementDisabledByParent(element, parent) || isAncestorDisabled(parent))
  )
}

function isElementOrAncestorDisabled(element) {
  return (
    canElementBeDisabled(element) &&
    (isElementDisabled(element) || isAncestorDisabled(element))
  )
}

function toBeDisabled(element) {
  checkHtmlElement(element, toBeDisabled, this);

  const isDisabled = isElementOrAncestorDisabled(element);

  return {
    pass: isDisabled,
    message: () => {
      const is = isDisabled ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeDisabled`,
          'element',
          '',
        ),
        '',
        `Received element ${is} disabled:`,
        `  ${this.utils.printReceived(element.cloneNode(false))}`,
      ].join('\n')
    },
  }
}

function toBeEnabled(element) {
  checkHtmlElement(element, toBeEnabled, this);

  const isEnabled = !isElementOrAncestorDisabled(element);

  return {
    pass: isEnabled,
    message: () => {
      const is = isEnabled ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeEnabled`,
          'element',
          '',
        ),
        '',
        `Received element ${is} enabled:`,
        `  ${this.utils.printReceived(element.cloneNode(false))}`,
      ].join('\n')
    },
  }
}

// form elements that support 'required'
const FORM_TAGS$1 = ['select', 'textarea'];

const ARIA_FORM_TAGS = ['input', 'select', 'textarea'];

const UNSUPPORTED_INPUT_TYPES = [
  'color',
  'hidden',
  'range',
  'submit',
  'image',
  'reset',
];

const SUPPORTED_ARIA_ROLES = [
  'checkbox',
  'combobox',
  'gridcell',
  'listbox',
  'radiogroup',
  'spinbutton',
  'textbox',
  'tree',
];

function isRequiredOnFormTagsExceptInput(element) {
  return FORM_TAGS$1.includes(getTag(element)) && element.hasAttribute('required')
}

function isRequiredOnSupportedInput(element) {
  return (
    getTag(element) === 'input' &&
    element.hasAttribute('required') &&
    ((element.hasAttribute('type') &&
      !UNSUPPORTED_INPUT_TYPES.includes(element.getAttribute('type'))) ||
      !element.hasAttribute('type'))
  )
}

function isElementRequiredByARIA(element) {
  return (
    element.hasAttribute('aria-required') &&
    element.getAttribute('aria-required') === 'true' &&
    (ARIA_FORM_TAGS.includes(getTag(element)) ||
      (element.hasAttribute('role') &&
        SUPPORTED_ARIA_ROLES.includes(element.getAttribute('role'))))
  )
}

function toBeRequired(element) {
  checkHtmlElement(element, toBeRequired, this);

  const isRequired =
    isRequiredOnFormTagsExceptInput(element) ||
    isRequiredOnSupportedInput(element) ||
    isElementRequiredByARIA(element);

  return {
    pass: isRequired,
    message: () => {
      const is = isRequired ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeRequired`,
          'element',
          '',
        ),
        '',
        `Received element ${is} required:`,
        `  ${this.utils.printReceived(element.cloneNode(false))}`,
      ].join('\n')
    },
  }
}

const FORM_TAGS = ['form', 'input', 'select', 'textarea'];

function isElementHavingAriaInvalid(element) {
  return (
    element.hasAttribute('aria-invalid') &&
    element.getAttribute('aria-invalid') !== 'false'
  )
}

function isSupportsValidityMethod(element) {
  return FORM_TAGS.includes(getTag(element))
}

function isElementInvalid(element) {
  const isHaveAriaInvalid = isElementHavingAriaInvalid(element);
  if (isSupportsValidityMethod(element)) {
    return isHaveAriaInvalid || !element.checkValidity()
  } else {
    return isHaveAriaInvalid
  }
}

function toBeInvalid(element) {
  checkHtmlElement(element, toBeInvalid, this);

  const isInvalid = isElementInvalid(element);

  return {
    pass: isInvalid,
    message: () => {
      const is = isInvalid ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeInvalid`,
          'element',
          '',
        ),
        '',
        `Received element ${is} currently invalid:`,
        `  ${this.utils.printReceived(element.cloneNode(false))}`,
      ].join('\n')
    },
  }
}

function toBeValid(element) {
  checkHtmlElement(element, toBeValid, this);

  const isValid = !isElementInvalid(element);

  return {
    pass: isValid,
    message: () => {
      const is = isValid ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeValid`,
          'element',
          '',
        ),
        '',
        `Received element ${is} currently valid:`,
        `  ${this.utils.printReceived(element.cloneNode(false))}`,
      ].join('\n')
    },
  }
}

function toHaveValue(htmlElement, expectedValue) {
  checkHtmlElement(htmlElement, toHaveValue, this);

  if (
    htmlElement.tagName.toLowerCase() === 'input' &&
    ['checkbox', 'radio'].includes(htmlElement.type)
  ) {
    throw new Error(
      'input with type=checkbox or type=radio cannot be used with .toHaveValue(). Use .toBeChecked() for type=checkbox or .toHaveFormValues() instead',
    )
  }

  const receivedValue = getSingleElementValue(htmlElement);
  const expectsValue = expectedValue !== undefined;

  let expectedTypedValue = expectedValue;
  let receivedTypedValue = receivedValue;
  if (expectedValue == receivedValue && expectedValue !== receivedValue) {
    expectedTypedValue = `${expectedValue} (${typeof expectedValue})`;
    receivedTypedValue = `${receivedValue} (${typeof receivedValue})`;
  }

  return {
    pass: expectsValue
      ? compareAsSet(receivedValue, expectedValue)
      : Boolean(receivedValue),
    message: () => {
      const to = this.isNot ? 'not to' : 'to';
      const matcher = this.utils.matcherHint(
        `${this.isNot ? '.not' : ''}.toHaveValue`,
        'element',
        expectedValue,
      );
      return getMessage(
        this,
        matcher,
        `Expected the element ${to} have value`,
        expectsValue ? expectedTypedValue : '(any)',
        'Received',
        receivedTypedValue,
      )
    },
  }
}

function toHaveDisplayValue(htmlElement, expectedValue) {
  checkHtmlElement(htmlElement, toHaveDisplayValue, this);
  const tagName = htmlElement.tagName.toLowerCase();

  if (!['select', 'input', 'textarea'].includes(tagName)) {
    throw new Error(
      '.toHaveDisplayValue() currently supports only input, textarea or select elements, try with another matcher instead.',
    )
  }

  if (tagName === 'input' && ['radio', 'checkbox'].includes(htmlElement.type)) {
    throw new Error(
      `.toHaveDisplayValue() currently does not support input[type="${htmlElement.type}"], try with another matcher instead.`,
    )
  }

  const values = getValues(tagName, htmlElement);
  const expectedValues = getExpectedValues(expectedValue);
  const numberOfMatchesWithValues = expectedValues.filter(expected =>
    values.some(value =>
      expected instanceof RegExp
        ? expected.test(value)
        : this.equals(value, String(expected)),
    ),
  ).length;

  const matchedWithAllValues = numberOfMatchesWithValues === values.length;
  const matchedWithAllExpectedValues =
    numberOfMatchesWithValues === expectedValues.length;

  return {
    pass: matchedWithAllValues && matchedWithAllExpectedValues,
    message: () =>
      getMessage(
        this,
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toHaveDisplayValue`,
          'element',
          '',
        ),
        `Expected element ${this.isNot ? 'not ' : ''}to have display value`,
        expectedValue,
        'Received',
        values,
      ),
  }
}

function getValues(tagName, htmlElement) {
  return tagName === 'select'
    ? Array.from(htmlElement)
        .filter(option => option.selected)
        .map(option => option.textContent)
    : [htmlElement.value]
}

function getExpectedValues(expectedValue) {
  return expectedValue instanceof Array ? expectedValue : [expectedValue]
}

function toBeChecked(element) {
  checkHtmlElement(element, toBeChecked, this);

  const isValidInput = () => {
    return (
      element.tagName.toLowerCase() === 'input' &&
      ['checkbox', 'radio'].includes(element.type)
    )
  };

  const isValidAriaElement = () => {
    return (
      roleSupportsChecked(element.getAttribute('role')) &&
      ['true', 'false'].includes(element.getAttribute('aria-checked'))
    )
  };

  if (!isValidInput() && !isValidAriaElement()) {
    return {
      pass: false,
      message: () =>
        `only inputs with type="checkbox" or type="radio" or elements with ${supportedRolesSentence()} and a valid aria-checked attribute can be used with .toBeChecked(). Use .toHaveValue() instead`,
    }
  }

  const isChecked = () => {
    if (isValidInput()) return element.checked
    return element.getAttribute('aria-checked') === 'true'
  };

  return {
    pass: isChecked(),
    message: () => {
      const is = isChecked() ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeChecked`,
          'element',
          '',
        ),
        '',
        `Received element ${is} checked:`,
        `  ${this.utils.printReceived(element.cloneNode(false))}`,
      ].join('\n')
    },
  }
}

function supportedRolesSentence() {
  return toSentence(
    supportedRoles().map(role => `role="${role}"`),
    {lastWordConnector: ' or '},
  )
}

function supportedRoles() {
  return roles.keys().filter(roleSupportsChecked)
}

function roleSupportsChecked(role) {
  return roles.get(role)?.props['aria-checked'] !== undefined
}

function toBePartiallyChecked(element) {
  checkHtmlElement(element, toBePartiallyChecked, this);

  const isValidInput = () => {
    return (
      element.tagName.toLowerCase() === 'input' && element.type === 'checkbox'
    )
  };

  const isValidAriaElement = () => {
    return element.getAttribute('role') === 'checkbox'
  };

  if (!isValidInput() && !isValidAriaElement()) {
    return {
      pass: false,
      message: () =>
        'only inputs with type="checkbox" or elements with role="checkbox" and a valid aria-checked attribute can be used with .toBePartiallyChecked(). Use .toHaveValue() instead',
    }
  }

  const isPartiallyChecked = () => {
    const isAriaMixed = element.getAttribute('aria-checked') === 'mixed';

    if (isValidInput()) {
      return element.indeterminate || isAriaMixed
    }

    return isAriaMixed
  };

  return {
    pass: isPartiallyChecked(),
    message: () => {
      const is = isPartiallyChecked() ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBePartiallyChecked`,
          'element',
          '',
        ),
        '',
        `Received element ${is} partially checked:`,
        `  ${this.utils.printReceived(element.cloneNode(false))}`,
      ].join('\n')
    },
  }
}

// See algoritm: https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
function toHaveDescription(htmlElement, checkWith) {
  deprecate(
    'toHaveDescription',
    'Please use toHaveAccessibleDescription.',
  );

  checkHtmlElement(htmlElement, toHaveDescription, this);

  const expectsDescription = checkWith !== undefined;

  const descriptionIDRaw = htmlElement.getAttribute('aria-describedby') || '';
  const descriptionIDs = descriptionIDRaw.split(/\s+/).filter(Boolean);
  let description = '';
  if (descriptionIDs.length > 0) {
    const document = htmlElement.ownerDocument;
    const descriptionEls = descriptionIDs
      .map(descriptionID => document.getElementById(descriptionID))
      .filter(Boolean);
    description = normalize(descriptionEls.map(el => el.textContent).join(' '));
  }

  return {
    pass: expectsDescription
      ? checkWith instanceof RegExp
        ? checkWith.test(description)
        : this.equals(description, checkWith)
      : Boolean(description),
    message: () => {
      const to = this.isNot ? 'not to' : 'to';
      return getMessage(
        this,
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toHaveDescription`,
          'element',
          '',
        ),
        `Expected the element ${to} have description`,
        this.utils.printExpected(checkWith),
        'Received',
        this.utils.printReceived(description),
      )
    },
  }
}

// See aria-errormessage spec https://www.w3.org/TR/wai-aria-1.2/#aria-errormessage
function toHaveErrorMessage(htmlElement, checkWith) {
  deprecate('toHaveErrorMessage', 'Please use toHaveAccessibleErrorMessage.');
  checkHtmlElement(htmlElement, toHaveErrorMessage, this);

  if (
    !htmlElement.hasAttribute('aria-invalid') ||
    htmlElement.getAttribute('aria-invalid') === 'false'
  ) {
    const not = this.isNot ? '.not' : '';

    return {
      pass: false,
      message: () => {
        return getMessage(
          this,
          this.utils.matcherHint(`${not}.toHaveErrorMessage`, 'element', ''),
          `Expected the element to have invalid state indicated by`,
          'aria-invalid="true"',
          'Received',
          htmlElement.hasAttribute('aria-invalid')
            ? `aria-invalid="${htmlElement.getAttribute('aria-invalid')}"`
            : this.utils.printReceived(''),
        )
      },
    }
  }

  const expectsErrorMessage = checkWith !== undefined;

  const errormessageIDRaw = htmlElement.getAttribute('aria-errormessage') || '';
  const errormessageIDs = errormessageIDRaw.split(/\s+/).filter(Boolean);

  let errormessage = '';
  if (errormessageIDs.length > 0) {
    const document = htmlElement.ownerDocument;

    const errormessageEls = errormessageIDs
      .map(errormessageID => document.getElementById(errormessageID))
      .filter(Boolean);

    errormessage = normalize(
      errormessageEls.map(el => el.textContent).join(' '),
    );
  }

  return {
    pass: expectsErrorMessage
      ? checkWith instanceof RegExp
        ? checkWith.test(errormessage)
        : this.equals(errormessage, checkWith)
      : Boolean(errormessage),
    message: () => {
      const to = this.isNot ? 'not to' : 'to';
      return getMessage(
        this,
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toHaveErrorMessage`,
          'element',
          '',
        ),
        `Expected the element ${to} have error message`,
        this.utils.printExpected(checkWith),
        'Received',
        this.utils.printReceived(errormessage),
      )
    },
  }
}

/**
 * Returns the selection from the element.
 *
 * @param element {HTMLElement} The element to get the selection from.
 * @returns {String} The selection.
 */
function getSelection(element) {
  const selection = element.ownerDocument.getSelection();

  if (['input', 'textarea'].includes(element.tagName.toLowerCase())) {
    if (['radio', 'checkbox'].includes(element.type)) return ''
    return element.value
      .toString()
      .substring(element.selectionStart, element.selectionEnd)
  }

  if (selection.anchorNode === null || selection.focusNode === null) {
    // No selection
    return ''
  }

  const originalRange = selection.getRangeAt(0);
  const temporaryRange = element.ownerDocument.createRange();

  if (selection.containsNode(element, false)) {
    // Whole element is inside selection
    temporaryRange.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(temporaryRange);
  } else if (
    element.contains(selection.anchorNode) &&
    element.contains(selection.focusNode)
  ) ; else {
    // Element is partially selected
    const selectionStartsWithinElement =
      element === originalRange.startContainer ||
      element.contains(originalRange.startContainer);
    const selectionEndsWithinElement =
      element === originalRange.endContainer ||
      element.contains(originalRange.endContainer);
    selection.removeAllRanges();

    if (selectionStartsWithinElement || selectionEndsWithinElement) {
      temporaryRange.selectNodeContents(element);

      if (selectionStartsWithinElement) {
        temporaryRange.setStart(
          originalRange.startContainer,
          originalRange.startOffset,
        );
      }
      if (selectionEndsWithinElement) {
        temporaryRange.setEnd(
          originalRange.endContainer,
          originalRange.endOffset,
        );
      }

      selection.addRange(temporaryRange);
    }
  }

  const result = selection.toString();

  selection.removeAllRanges();
  selection.addRange(originalRange);

  return result
}

/**
 * Checks if the element has the string selected.
 *
 * @param htmlElement {HTMLElement} The html element to check the selection for.
 * @param expectedSelection {String} The selection as a string.
 */
function toHaveSelection(htmlElement, expectedSelection) {
  checkHtmlElement(htmlElement, toHaveSelection, this);

  const expectsSelection = expectedSelection !== undefined;

  if (expectsSelection && typeof expectedSelection !== 'string') {
    throw new Error(`expected selection must be a string or undefined`)
  }

  const receivedSelection = getSelection(htmlElement);

  return {
    pass: expectsSelection
      ? compareAsSet(receivedSelection, expectedSelection)
      : Boolean(receivedSelection),
    message: () => {
      const to = this.isNot ? 'not to' : 'to';
      const matcher = this.utils.matcherHint(
        `${this.isNot ? '.not' : ''}.toHaveSelection`,
        'element',
        expectedSelection,
      );
      return getMessage(
        this,
        matcher,
        `Expected the element ${to} have selection`,
        expectsSelection ? expectedSelection : '(any)',
        'Received',
        receivedSelection,
      )
    },
  }
}

function toBePressed(element) {
  checkHtmlElement(element, toBePressed, this);

  const roles = (element.getAttribute('role') || '')
    .split(' ')
    .map(role => role.trim());

  const isButton =
    element.tagName.toLowerCase() === 'button' ||
    (element.tagName.toLowerCase() === 'input' && element.type === 'button') ||
    roles.includes('button');

  const pressedAttribute = element.getAttribute('aria-pressed');

  const isValidAriaElement =
    pressedAttribute === 'true' || pressedAttribute === 'false';

  if (!isButton || !isValidAriaElement) {
    return {
      pass: false,
      message: () =>
        `Only button or input with type="button" or element with role="button" and a valid aria-pressed attribute can be used with .toBePressed()`,
    }
  }

  const isPressed = pressedAttribute === 'true';

  return {
    pass: isButton && isPressed,

    message: () => {
      const matcher = this.utils.matcherHint(
        `${this.isNot ? '.not' : ''}.toBePressed`,
        'element',
        '',
      );

      return getMessage(
        this,
        matcher,
        `Expected element to have`,
        `aria-pressed="${this.isNot ? 'false' : 'true'}"`,
        `Received`,
        `aria-pressed="${pressedAttribute}"`,
      )
    },
  }
}

function toBePartiallyPressed(element) {
  checkHtmlElement(element, toBePartiallyPressed, this);

  const roles = (element.getAttribute('role') || '')
    .split(' ')
    .map(role => role.trim());

  const isButton =
    element.tagName.toLowerCase() === 'button' ||
    (element.tagName.toLowerCase() === 'input' && element.type === 'button') ||
    roles.includes('button');

  const pressedAttribute = element.getAttribute('aria-pressed');

  const isValidAriaElement =
    pressedAttribute === 'true' ||
    pressedAttribute === 'false' ||
    pressedAttribute === 'mixed';

  if (!isButton || !isValidAriaElement) {
    return {
      pass: false,
      message: () =>
        `Only button or input with type="button" or element with role="button" and a valid aria-pressed attribute can be used with .toBePartiallyPressed()`,
    }
  }

  const isPartiallyPressed = pressedAttribute === 'mixed';

  return {
    pass: isButton && isPartiallyPressed,

    message: () => {
      const to = this.isNot ? 'not to' : 'to';

      const matcher = this.utils.matcherHint(
        `${this.isNot ? '.not' : ''}.toBePartiallyPressed`,
        'element',
        '',
      );

      return getMessage(
        this,
        matcher,
        `Expected element ${to} have`,
        `aria-pressed="mixed"`,
        `Received`,
        `aria-pressed="${pressedAttribute}"`,
      )
    },
  }
}

// ref: https://dom.spec.whatwg.org/#dom-node-document_position_disconnected
const DOCUMENT_POSITION_DISCONNECTED = 0x01;
const DOCUMENT_POSITION_PRECEDING = 0x02;
const DOCUMENT_POSITION_FOLLOWING = 0x04;
const DOCUMENT_POSITION_CONTAINS = 0x08;
const DOCUMENT_POSITION_CONTAINED_BY = 0x10;
const DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20;

// ref: https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
const DOCUMENT_POSITIONS_STRINGS = {
  [DOCUMENT_POSITION_DISCONNECTED]: 'Node.DOCUMENT_POSITION_DISCONNECTED',
  [DOCUMENT_POSITION_PRECEDING]: 'Node.DOCUMENT_POSITION_PRECEDING',
  [DOCUMENT_POSITION_FOLLOWING]: 'Node.DOCUMENT_POSITION_FOLLOWING',
  [DOCUMENT_POSITION_CONTAINS]: 'Node.DOCUMENT_POSITION_CONTAINS',
  [DOCUMENT_POSITION_CONTAINED_BY]: 'Node.DOCUMENT_POSITION_CONTAINED_BY',
  [DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC]:
    'Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC',
};

function makeDocumentPositionErrorString(documentPosition) {
  if (documentPosition in DOCUMENT_POSITIONS_STRINGS) {
    return `${DOCUMENT_POSITIONS_STRINGS[documentPosition]} (${documentPosition})`
  }

  return `Unknown document position (${documentPosition})`
}

function checkToAppear(methodName, targetDocumentPosition) {
  // eslint-disable-next-line func-names
  return function (element, secondElement) {
    checkHtmlElement(element, toAppearBefore, this);
    checkHtmlElement(secondElement, toAppearBefore, this);

    const documentPosition = element.compareDocumentPosition(secondElement);
    const pass = documentPosition === targetDocumentPosition;

    return {
      pass,
      message: () => {
        return [
          this.utils.matcherHint(
            `${this.isNot ? '.not' : ''}.${methodName}`,
            'element',
            'secondElement',
          ),
          '',
          `Received: ${makeDocumentPositionErrorString(documentPosition)}`,
        ].join('\n')
      },
    }
  }
}

function toAppearBefore(element, secondElement) {
  return checkToAppear('toAppearBefore', DOCUMENT_POSITION_FOLLOWING).apply(
    this,
    [element, secondElement],
  )
}

function toAppearAfter(element, secondElement) {
  return checkToAppear('toAppearAfter', DOCUMENT_POSITION_PRECEDING).apply(
    this,
    [element, secondElement],
  )
}

var extensions = /*#__PURE__*/Object.freeze({
  __proto__: null,
  toAppearAfter: toAppearAfter,
  toAppearBefore: toAppearBefore,
  toBeChecked: toBeChecked,
  toBeDisabled: toBeDisabled,
  toBeEmpty: toBeEmpty,
  toBeEmptyDOMElement: toBeEmptyDOMElement,
  toBeEnabled: toBeEnabled,
  toBeInTheDOM: toBeInTheDOM,
  toBeInTheDocument: toBeInTheDocument,
  toBeInvalid: toBeInvalid,
  toBePartiallyChecked: toBePartiallyChecked,
  toBePartiallyPressed: toBePartiallyPressed,
  toBePressed: toBePressed,
  toBeRequired: toBeRequired,
  toBeValid: toBeValid,
  toBeVisible: toBeVisible,
  toContainElement: toContainElement,
  toContainHTML: toContainHTML,
  toHaveAccessibleDescription: toHaveAccessibleDescription,
  toHaveAccessibleErrorMessage: toHaveAccessibleErrorMessage,
  toHaveAccessibleName: toHaveAccessibleName,
  toHaveAttribute: toHaveAttribute,
  toHaveClass: toHaveClass,
  toHaveDescription: toHaveDescription,
  toHaveDisplayValue: toHaveDisplayValue,
  toHaveErrorMessage: toHaveErrorMessage,
  toHaveFocus: toHaveFocus,
  toHaveFormValues: toHaveFormValues,
  toHaveRole: toHaveRole,
  toHaveSelection: toHaveSelection,
  toHaveStyle: toHaveStyle,
  toHaveTextContent: toHaveTextContent,
  toHaveValue: toHaveValue
});

export { toBePartiallyChecked as A, toHaveDescription as B, toHaveErrorMessage as C, toHaveSelection as D, toBePressed as E, toBePartiallyPressed as F, toAppearBefore as G, toAppearAfter as H, toBeInTheDocument as a, toBeEmpty as b, toBeEmptyDOMElement as c, toContainElement as d, extensions as e, toContainHTML as f, toHaveTextContent as g, toHaveAccessibleDescription as h, toHaveAccessibleErrorMessage as i, toHaveRole as j, toHaveAccessibleName as k, toHaveAttribute as l, toHaveClass as m, toHaveStyle as n, toHaveFocus as o, toHaveFormValues as p, toBeVisible as q, toBeDisabled as r, toBeEnabled as s, toBeInTheDOM as t, toBeRequired as u, toBeInvalid as v, toBeValid as w, toHaveValue as x, toHaveDisplayValue as y, toBeChecked as z };
