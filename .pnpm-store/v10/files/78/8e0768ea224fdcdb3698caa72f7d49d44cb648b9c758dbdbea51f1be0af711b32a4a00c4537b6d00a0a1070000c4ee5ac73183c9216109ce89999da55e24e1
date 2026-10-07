/**
 * @fileoverview Enforce that elements with onClick handlers must be focusable.
 * @author Ethan Cohen
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import includes from 'array-includes';
import { RuleTester } from 'eslint';
import {
  eventHandlers,
  eventHandlersByType,
} from 'jsx-ast-utils';
import { configs } from '../../../src/index';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/interactive-supports-focus';
import ruleOptionsMapperFactory from '../../__util__/ruleOptionsMapperFactory';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

function template(strings, ...keys) {
  return (...values) => keys.reduce(
    (acc, k, i) => acc + (values[k] || '') + strings[i + 1],
    strings[0],
  );
}

const ruleName = 'interactive-supports-focus';
const type = 'JSXOpeningElement';
const codeTemplate = template`<${0} role="${1}" ${2}={() => void 0} />`;
const tabindexTemplate = template`<${0} role="${1}" ${2}={() => void 0} tabIndex="0" />`;
const tabbableTemplate = template`Elements with the '${0}' interactive role must be tabbable.`;
const focusableTemplate = template`Elements with the '${0}' interactive role must be focusable.`;

const componentsSettings = {
  'jsx-a11y': {
    components: {
      Div: 'div',
    },
  },
};

const buttonError = { message: tabbableTemplate('button'), type };

const recommendedOptions = configs.recommended.rules[`jsx-a11y/${ruleName}`][1] || {};

const strictOptions = configs.strict.rules[`jsx-a11y/${ruleName}`][1] || {};

const alwaysValid = [
  { code: '<div />' },
  { code: '<div aria-hidden onClick={() => void 0} />' },
  { code: '<div aria-hidden={true == true} onClick={() => void 0} />' },
  { code: '<div aria-hidden={true === true} onClick={() => void 0} />' },
  { code: '<div aria-hidden={hidden !== false} onClick={() => void 0} />' },
  { code: '<div aria-hidden={hidden != false} onClick={() => void 0} />' },
  { code: '<div aria-hidden={1 < 2} onClick={() => void 0} />' },
  { code: '<div aria-hidden={1 <= 2} onClick={() => void 0} />' },
  { code: '<div aria-hidden={2 > 1} onClick={() => void 0} />' },
  { code: '<div aria-hidden={2 >= 1} onClick={() => void 0} />' },
  { code: '<div onClick={() => void 0} />;' },
  { code: '<div onClick={() => void 0} tabIndex={undefined} />;' },
  { code: '<div onClick={() => void 0} tabIndex="bad" />;' },
  { code: '<div onClick={() => void 0} role={undefined} />;' },
  { code: '<div role="section" onClick={() => void 0} />' },
  { code: '<div onClick={() => void 0} aria-hidden={false} />;' },
  { code: '<div onClick={() => void 0} {...props} />;' },
  { code: '<input type="text" onClick={() => void 0} />' },
  { code: '<input type="hidden" onClick={() => void 0} tabIndex="-1" />' },
  { code: '<input type="hidden" onClick={() => void 0} tabIndex={-1} />' },
  { code: '<input onClick={() => void 0} />' },
  { code: '<input onClick={() => void 0} role="combobox" />' },
  { code: '<button onClick={() => void 0} className="foo" />' },
  { code: '<option onClick={() => void 0} className="foo" />' },
  { code: '<select onClick={() => void 0} className="foo" />' },
  { code: '<area href="#" onClick={() => void 0} className="foo" />' },
  { code: '<area onClick={() => void 0} className="foo" />' },
  { code: '<summary onClick={() => void 0} />' },
  { code: '<textarea onClick={() => void 0} className="foo" />' },
  { code: '<a onClick="showNextPage();">Next page</a>' },
  { code: '<a onClick="showNextPage();" tabIndex={undefined}>Next page</a>' },
  { code: '<a onClick="showNextPage();" tabIndex="bad">Next page</a>' },
  { code: '<a onClick={() => void 0} />' },
  { code: '<a tabIndex="0" onClick={() => void 0} />' },
  { code: '<a tabIndex={dynamicTabIndex} onClick={() => void 0} />' },
  { code: '<a tabIndex={0} onClick={() => void 0} />' },
  { code: '<a role="button" href="#" onClick={() => void 0} />' },
  { code: '<a onClick={() => void 0} href="http://x.y.z" />' },
  { code: '<a onClick={() => void 0} href="http://x.y.z" tabIndex="0" />' },
  { code: '<a onClick={() => void 0} href="http://x.y.z" tabIndex={0} />' },
  { code: '<a onClick={() => void 0} href="http://x.y.z" role="button" />' },
  { code: '<TestComponent onClick={doFoo} />' },
  { code: '<input onClick={() => void 0} type="hidden" />;' },
  { code: '<span onClick="submitForm();">Submit</span>' },
  { code: '<span onClick="submitForm();" tabIndex={undefined}>Submit</span>' },
  { code: '<span onClick="submitForm();" tabIndex="bad">Submit</span>' },
  { code: '<span onClick="doSomething();" tabIndex="0">Click me!</span>' },
  { code: '<span onClick="doSomething();" tabIndex={0}>Click me!</span>' },
  { code: '<span onClick="doSomething();" tabIndex="-1">Click me too!</span>' },
  {
    code: '<a href="javascript:void(0);" onClick="doSomething();">Click ALL the things!</a>',
  },
  { code: '<section onClick={() => void 0} />;' },
  { code: '<main onClick={() => void 0} />;' },
  { code: '<article onClick={() => void 0} />;' },
  { code: '<header onClick={() => void 0} />;' },
  { code: '<footer onClick={() => void 0} />;' },
  { code: '<div role="button" tabIndex="0" onClick={() => void 0} />' },
  { code: '<div role="checkbox" tabIndex="0" onClick={() => void 0} />' },
  { code: '<div role="link" tabIndex="0" onClick={() => void 0} />' },
  { code: '<div role="menuitem" tabIndex="0" onClick={() => void 0} />' },
  { code: '<div role="menuitemcheckbox" tabIndex="0" onClick={() => void 0} />' },
  { code: '<div role="menuitemradio" tabIndex="0" onClick={() => void 0} />' },
  { code: '<div role="option" tabIndex="0" onClick={() => void 0} />' },
  { code: '<div role="radio" tabIndex="0" onClick={() => void 0} />' },
  { code: '<div role="spinbutton" tabIndex="0" onClick={() => void 0} />' },
  { code: '<div role="switch" tabIndex="0" onClick={() => void 0} />' },
  { code: '<div role="tablist" tabIndex="0" onClick={() => void 0} />' },
  { code: '<div role="tab" tabIndex="0" onClick={() => void 0} />' },
  { code: '<div role="textbox" tabIndex="0" onClick={() => void 0} />' },
  { code: '<div role="textbox" aria-disabled="true" onClick={() => void 0} />' },
  { code: '<Foo.Bar onClick={() => void 0} aria-hidden={false} />;' },
  { code: '<Input onClick={() => void 0} type="hidden" />;' },
  { code: '<Div onClick={() => void 0} role="button" tabIndex="0" />', settings: componentsSettings },
];

const neverValid = [
  { code: '<Div onClick={() => void 0} role="button" />', errors: [buttonError], settings: componentsSettings },
];

const interactiveRoles = [
  'button',
  'checkbox',
  'link',
  'gridcell',
  'menuitem',
  'menuitemcheckbox',
  'menuitemradio',
  'option',
  'radio',
  'searchbox',
  'slider',
  'spinbutton',
  'switch',
  'tab',
  'textbox',
  'treeitem',
];

const recommendedRoles = [
  'button',
  'checkbox',
  'link',
  'searchbox',
  'spinbutton',
  'switch',
  'textbox',
];

const strictRoles = [
  'button',
  'checkbox',
  'link',
  'progressbar',
  'searchbox',
  'slider',
  'spinbutton',
  'switch',
  'textbox',
];

const staticElements = [
  'div',
];

const triggeringHandlers = [
  ...eventHandlersByType.mouse,
  ...eventHandlersByType.keyboard,
];

const passReducer = (roles, handlers, messageTemplate) => (
  staticElements.reduce((elementAcc, element) => (
    elementAcc.concat(roles.reduce((roleAcc, role) => (
      roleAcc.concat(handlers.map((handler) => ({
        code: messageTemplate(element, role, handler),
      })))
    ), []))
  ), [])
);

const failReducer = (roles, handlers, messageTemplate) => (
  staticElements.reduce((elementAcc, element) => (
    elementAcc.concat(roles.reduce((roleAcc, role) => (
      roleAcc.concat(handlers.map((handler) => ({
        code: codeTemplate(element, role, handler),
        errors: [{
          type,
          message: messageTemplate(role),
        }],
      })))
    ), []))
  ), [])
);

ruleTester.run(`${ruleName}:recommended`, rule, {
  valid: parsers.all([].concat(
    ...alwaysValid,
    ...passReducer(
      interactiveRoles,
      eventHandlers.filter((handler) => !includes(triggeringHandlers, handler)),
      codeTemplate,
    ),
    ...passReducer(
      interactiveRoles.filter((role) => !includes(recommendedRoles, role)),
      eventHandlers.filter((handler) => includes(triggeringHandlers, handler)),
      tabindexTemplate,
    ),
  ))
    .map(ruleOptionsMapperFactory(recommendedOptions))
    .map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    ...neverValid,
    ...failReducer(recommendedRoles, triggeringHandlers, tabbableTemplate),
    ...failReducer(
      interactiveRoles.filter((role) => !includes(recommendedRoles, role)),
      triggeringHandlers,
      focusableTemplate,
    ),
  ))
    .map(ruleOptionsMapperFactory(recommendedOptions))
    .map(parserOptionsMapper),
});

ruleTester.run(`${ruleName}:strict`, rule, {
  valid: parsers.all([].concat(
    ...alwaysValid,
    ...passReducer(
      interactiveRoles,
      eventHandlers.filter((handler) => !includes(triggeringHandlers, handler)),
      codeTemplate,
    ),
    ...passReducer(
      interactiveRoles.filter((role) => !includes(strictRoles, role)),
      eventHandlers.filter((handler) => includes(triggeringHandlers, handler)),
      tabindexTemplate,
    ),
  ))
    .map(ruleOptionsMapperFactory(strictOptions))
    .map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    ...neverValid,
    ...failReducer(strictRoles, triggeringHandlers, tabbableTemplate),
    ...failReducer(
      interactiveRoles.filter((role) => !includes(strictRoles, role)),
      triggeringHandlers,
      focusableTemplate,
    ),
  ))
    .map(ruleOptionsMapperFactory(strictOptions))
    .map(parserOptionsMapper),
});
