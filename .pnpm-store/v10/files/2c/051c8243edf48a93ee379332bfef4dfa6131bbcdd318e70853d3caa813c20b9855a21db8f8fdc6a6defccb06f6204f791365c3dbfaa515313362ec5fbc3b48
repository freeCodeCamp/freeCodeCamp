/**
 * @flow
 */

import { dom, roles } from 'aria-query';
import includes from 'array-includes';
import fromEntries from 'object.fromentries';

import JSXAttributeMock from './JSXAttributeMock';
import JSXElementMock from './JSXElementMock';

import type { JSXAttributeMockType } from './JSXAttributeMock';
import type { JSXElementMockType } from './JSXElementMock';

const domElements = dom.keys();
const roleNames = roles.keys();

const interactiveElementsMap = {
  a: [{ prop: 'href', value: '#' }],
  area: [{ prop: 'href', value: '#' }],
  audio: [],
  button: [],
  canvas: [],
  datalist: [],
  embed: [],
  input: [],
  'input[type="button"]': [{ prop: 'type', value: 'button' }],
  'input[type="checkbox"]': [{ prop: 'type', value: 'checkbox' }],
  'input[type="color"]': [{ prop: 'type', value: 'color' }],
  'input[type="date"]': [{ prop: 'type', value: 'date' }],
  'input[type="datetime"]': [{ prop: 'type', value: 'datetime' }],
  'input[type="email"]': [{ prop: 'type', value: 'email' }],
  'input[type="file"]': [{ prop: 'type', value: 'file' }],
  'input[type="image"]': [{ prop: 'type', value: 'image' }],
  'input[type="month"]': [{ prop: 'type', value: 'month' }],
  'input[type="number"]': [{ prop: 'type', value: 'number' }],
  'input[type="password"]': [{ prop: 'type', value: 'password' }],
  'input[type="radio"]': [{ prop: 'type', value: 'radio' }],
  'input[type="range"]': [{ prop: 'type', value: 'range' }],
  'input[type="reset"]': [{ prop: 'type', value: 'reset' }],
  'input[type="search"]': [{ prop: 'type', value: 'search' }],
  'input[type="submit"]': [{ prop: 'type', value: 'submit' }],
  'input[type="tel"]': [{ prop: 'type', value: 'tel' }],
  'input[type="text"]': [{ prop: 'type', value: 'text' }],
  'input[type="time"]': [{ prop: 'type', value: 'time' }],
  'input[type="url"]': [{ prop: 'type', value: 'url' }],
  'input[type="week"]': [{ prop: 'type', value: 'week' }],
  menuitem: [],
  option: [],
  select: [],
  summary: [],
  // Whereas ARIA makes a distinction between cell and gridcell, the AXObject
  // treats them both as CellRole and since gridcell is interactive, we consider
  // cell interactive as well.
  td: [],
  th: [],
  tr: [],
  textarea: [],
  video: [],
};

const nonInteractiveElementsMap: {[string]: Array<{[string]: string}>} = {
  abbr: [],
  address: [],
  article: [],
  aside: [],
  blockquote: [],
  br: [],
  caption: [],
  code: [],
  dd: [],
  del: [],
  details: [],
  dfn: [],
  dialog: [],
  dir: [],
  dl: [],
  dt: [],
  em: [],
  fieldset: [],
  figcaption: [],
  figure: [],
  footer: [],
  form: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  hr: [],
  html: [],
  iframe: [],
  img: [],
  ins: [],
  label: [],
  legend: [],
  li: [],
  main: [],
  mark: [],
  marquee: [],
  menu: [],
  meter: [],
  nav: [],
  ol: [],
  optgroup: [],
  output: [],
  p: [],
  pre: [],
  progress: [],
  ruby: [],
  'section[aria-label]': [{ prop: 'aria-label' }],
  'section[aria-labelledby]': [{ prop: 'aria-labelledby' }],
  strong: [],
  sub: [],
  sup: [],
  table: [],
  tbody: [],
  tfoot: [],
  thead: [],
  time: [],
  ul: [],
};

const indeterminantInteractiveElementsMap: { [key: string]: Array<any> } = fromEntries(domElements.map((name) => [name, []]));

Object.keys(interactiveElementsMap)
  .concat(Object.keys(nonInteractiveElementsMap))
  .forEach((name) => delete indeterminantInteractiveElementsMap[name]);

const abstractRoles = roleNames.filter((role) => roles.get(role).abstract);

const nonAbstractRoles = roleNames.filter((role) => !roles.get(role).abstract);

const interactiveRoles = []
  .concat(
    roleNames,
    // 'toolbar' does not descend from widget, but it does support
    // aria-activedescendant, thus in practice we treat it as a widget.
    'toolbar',
  )
  .filter((role) => (
    !roles.get(role).abstract
    && roles.get(role).superClass.some((klasses) => includes(klasses, 'widget'))
  ));

const nonInteractiveRoles = roleNames
  .filter((role) => (
    !roles.get(role).abstract
    && !roles.get(role).superClass.some((klasses) => includes(klasses, 'widget'))

    // 'toolbar' does not descend from widget, but it does support
    // aria-activedescendant, thus in practice we treat it as a widget.
    && !includes(['toolbar'], role)
  ));

export function genElementSymbol(openingElement: Object): string {
  return (
    openingElement.name.name + (openingElement.attributes.length > 0
      ? `${openingElement.attributes.map((attr) => `[${attr.name.name}="${attr.value.value}"]`).join('')}`
      : ''
    )
  );
}

export function genInteractiveElements(): Array<JSXElementMockType> {
  return Object.keys(interactiveElementsMap).map((elementSymbol: string): JSXElementMockType => {
    const bracketIndex = elementSymbol.indexOf('[');
    let name = elementSymbol;
    if (bracketIndex > -1) {
      name = elementSymbol.slice(0, bracketIndex);
    }
    const attributes = interactiveElementsMap[elementSymbol].map(({ prop, value }) => JSXAttributeMock(prop, value));
    return JSXElementMock(name, attributes);
  });
}

export function genInteractiveRoleElements(): Array<JSXElementMockType> {
  return interactiveRoles.concat('button article', 'fakerole button article').map((value): JSXElementMockType => JSXElementMock(
    'div',
    [JSXAttributeMock('role', value)],
  ));
}

export function genNonInteractiveElements(): Array<JSXElementMockType> {
  return Object.keys(nonInteractiveElementsMap).map((elementSymbol): JSXElementMockType => {
    const bracketIndex = elementSymbol.indexOf('[');
    let name = elementSymbol;
    if (bracketIndex > -1) {
      name = elementSymbol.slice(0, bracketIndex);
    }
    const attributes = nonInteractiveElementsMap[elementSymbol].map(({ prop, value }) => JSXAttributeMock(prop, value));
    return JSXElementMock(name, attributes);
  });
}

export function genNonInteractiveRoleElements(): Array<JSXElementMockType> {
  return [
    ...nonInteractiveRoles,
    'article button',
    'fakerole article button',
  ].map((value) => JSXElementMock('div', [JSXAttributeMock('role', value)]));
}

export function genAbstractRoleElements(): Array<JSXElementMockType> {
  return abstractRoles.map((value) => JSXElementMock('div', [JSXAttributeMock('role', value)]));
}

export function genNonAbstractRoleElements(): Array<JSXElementMockType> {
  return nonAbstractRoles.map((value) => JSXElementMock('div', [JSXAttributeMock('role', value)]));
}

export function genIndeterminantInteractiveElements(): Array<JSXElementMockType> {
  return Object.keys(indeterminantInteractiveElementsMap).map((name) => {
    const attributes = indeterminantInteractiveElementsMap[name].map(({ prop, value }): JSXAttributeMockType => JSXAttributeMock(prop, value));
    return JSXElementMock(name, attributes);
  });
}
