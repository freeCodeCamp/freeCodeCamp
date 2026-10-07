/**
 * @fileoverview Control elements must be associated with a text label
 * @author jessebeach
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import { configs } from '../../../src/index';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import ruleOptionsMapperFactory from '../../__util__/ruleOptionsMapperFactory';
import rule from '../../../src/rules/control-has-associated-label';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const ruleName = 'jsx-a11y/control-has-associated-label';

const expectedError = {
  message: 'A control must be associated with a text label.',
  type: 'JSXOpeningElement',
};

const alwaysValid = [
  // Custom Control Components
  { code: '<CustomControl><span><span>Save</span></span></CustomControl>', options: [{ depth: 3, controlComponents: ['CustomControl'] }] },
  { code: '<CustomControl><span><span label="Save"></span></span></CustomControl>', options: [{ depth: 3, controlComponents: ['CustomControl'], labelAttributes: ['label'] }] },
  { code: '<CustomControl>Save</CustomControl>', settings: { 'jsx-a11y': { components: { CustomControl: 'button' } } } },
  // Interactive Elements
  { code: '<button>Save</button>' },
  { code: '<button><span>Save</span></button>' },
  { code: '<button><span><span>Save</span></span></button>', options: [{ depth: 3 }] },
  { code: '<button><span><span><span><span><span><span><span><span>Save</span></span></span></span></span></span></span></span></button>', options: [{ depth: 9 }] },
  { code: '<button><img alt="Save" /></button>' },
  { code: '<button aria-label="Save" />' },
  { code: '<button><span aria-label="Save" /></button>' },
  { code: '<button aria-labelledby="js_1" />' },
  { code: '<button><span aria-labelledby="js_1" /></button>' },
  { code: '<button>{sureWhyNot}</button>' },
  { code: '<button><span><span label="Save"></span></span></button>', options: [{ depth: 3, labelAttributes: ['label'] }] },
  { code: '<a href="#">Save</a>' },
  { code: '<area href="#">Save</area>' },
  { code: '<link>Save</link>' },
  { code: '<menuitem>Save</menuitem>' },
  { code: '<option>Save</option>' },
  { code: '<th>Save</th>' },
  // Interactive Roles
  { code: '<div role="button">Save</div>' },
  { code: '<div role="checkbox">Save</div>' },
  { code: '<div role="columnheader">Save</div>' },
  { code: '<div role="combobox">Save</div>' },
  { code: '<div role="gridcell">Save</div>' },
  { code: '<div role="link">Save</div>' },
  { code: '<div role="menuitem">Save</div>' },
  { code: '<div role="menuitemcheckbox">Save</div>' },
  { code: '<div role="menuitemradio">Save</div>' },
  { code: '<div role="option">Save</div>' },
  { code: '<div role="progressbar">Save</div>' },
  { code: '<div role="radio">Save</div>' },
  { code: '<div role="rowheader">Save</div>' },
  { code: '<div role="searchbox">Save</div>' },
  { code: '<div role="slider">Save</div>' },
  { code: '<div role="spinbutton">Save</div>' },
  { code: '<div role="switch">Save</div>' },
  { code: '<div role="tab">Save</div>' },
  { code: '<div role="textbox">Save</div>' },
  { code: '<div role="treeitem">Save</div>' },
  { code: '<div role="button" aria-label="Save" />' },
  { code: '<div role="checkbox" aria-label="Save" />' },
  { code: '<div role="columnheader" aria-label="Save" />' },
  { code: '<div role="combobox" aria-label="Save" />' },
  { code: '<div role="gridcell" aria-label="Save" />' },
  { code: '<div role="link" aria-label="Save" />' },
  { code: '<div role="menuitem" aria-label="Save" />' },
  { code: '<div role="menuitemcheckbox" aria-label="Save" />' },
  { code: '<div role="menuitemradio" aria-label="Save" />' },
  { code: '<div role="option" aria-label="Save" />' },
  { code: '<div role="progressbar" aria-label="Save" />' },
  { code: '<div role="radio" aria-label="Save" />' },
  { code: '<div role="rowheader" aria-label="Save" />' },
  { code: '<div role="searchbox" aria-label="Save" />' },
  { code: '<div role="slider" aria-label="Save" />' },
  { code: '<div role="spinbutton" aria-label="Save" />' },
  { code: '<div role="switch" aria-label="Save" />' },
  { code: '<div role="tab" aria-label="Save" />' },
  { code: '<div role="textbox" aria-label="Save" />' },
  { code: '<div role="treeitem" aria-label="Save" />' },
  { code: '<div role="button" aria-labelledby="js_1" />' },
  { code: '<div role="checkbox" aria-labelledby="js_1" />' },
  { code: '<div role="columnheader" aria-labelledby="js_1" />' },
  { code: '<div role="combobox" aria-labelledby="js_1" />' },
  { code: '<div role="gridcell" aria-labelledby="Save" />' },
  { code: '<div role="link" aria-labelledby="js_1" />' },
  { code: '<div role="menuitem" aria-labelledby="js_1" />' },
  { code: '<div role="menuitemcheckbox" aria-labelledby="js_1" />' },
  { code: '<div role="menuitemradio" aria-labelledby="js_1" />' },
  { code: '<div role="option" aria-labelledby="js_1" />' },
  { code: '<div role="progressbar" aria-labelledby="js_1" />' },
  { code: '<div role="radio" aria-labelledby="js_1" />' },
  { code: '<div role="rowheader" aria-labelledby="js_1" />' },
  { code: '<div role="searchbox" aria-labelledby="js_1" />' },
  { code: '<div role="slider" aria-labelledby="js_1" />' },
  { code: '<div role="spinbutton" aria-labelledby="js_1" />' },
  { code: '<div role="switch" aria-labelledby="js_1" />' },
  { code: '<div role="tab" aria-labelledby="js_1" />' },
  { code: '<div role="textbox" aria-labelledby="js_1" />' },
  { code: '<div role="treeitem" aria-labelledby="js_1" />' },
  // Non-interactive Elements
  { code: '<abbr />' },
  { code: '<article />' },
  { code: '<blockquote />' },
  { code: '<br />' },
  { code: '<caption />' },
  { code: '<dd />' },
  { code: '<details />' },
  { code: '<dfn />' },
  { code: '<dialog />' },
  { code: '<dir />' },
  { code: '<dl />' },
  { code: '<dt />' },
  { code: '<fieldset />' },
  { code: '<figcaption />' },
  { code: '<figure />' },
  { code: '<footer />' },
  { code: '<form />' },
  { code: '<frame />' },
  { code: '<h1 />' },
  { code: '<h2 />' },
  { code: '<h3 />' },
  { code: '<h4 />' },
  { code: '<h5 />' },
  { code: '<h6 />' },
  { code: '<hr />' },
  { code: '<iframe />' },
  { code: '<img />' },
  { code: '<label />' },
  { code: '<legend />' },
  { code: '<li />' },
  { code: '<link />' },
  { code: '<main />' },
  { code: '<mark />' },
  { code: '<marquee />' },
  { code: '<menu />' },
  { code: '<meter />' },
  { code: '<nav />' },
  { code: '<ol />' },
  { code: '<p />' },
  { code: '<pre />' },
  { code: '<progress />' },
  { code: '<ruby />' },
  { code: '<section />' },
  { code: '<table />' },
  { code: '<tbody />' },
  { code: '<tfoot />' },
  { code: '<thead />' },
  { code: '<time />' },
  { code: '<ul />' },
  // Non-interactive Roles
  { code: '<div role="alert" />' },
  { code: '<div role="alertdialog" />' },
  { code: '<div role="application" />' },
  { code: '<div role="article" />' },
  { code: '<div role="banner" />' },
  { code: '<div role="cell" />' },
  { code: '<div role="complementary" />' },
  { code: '<div role="contentinfo" />' },
  { code: '<div role="definition" />' },
  { code: '<div role="dialog" />' },
  { code: '<div role="directory" />' },
  { code: '<div role="document" />' },
  { code: '<div role="feed" />' },
  { code: '<div role="figure" />' },
  { code: '<div role="form" />' },
  { code: '<div role="group" />' },
  { code: '<div role="heading" />' },
  { code: '<div role="img" />' },
  { code: '<div role="list" />' },
  { code: '<div role="listitem" />' },
  { code: '<div role="log" />' },
  { code: '<div role="main" />' },
  { code: '<div role="marquee" />' },
  { code: '<div role="math" />' },
  { code: '<div role="navigation" />' },
  { code: '<div role="none" />' },
  { code: '<div role="note" />' },
  { code: '<div role="presentation" />' },
  { code: '<div role="region" />' },
  { code: '<div role="rowgroup" />' },
  { code: '<div role="search" />' },
  { code: '<div role="separator" />' },
  { code: '<div role="status" />' },
  { code: '<div role="table" />' },
  { code: '<div role="tabpanel" />' },
  { code: '<div role="term" />' },
  { code: '<div role="timer" />' },
  { code: '<div role="tooltip" />' },
  // Via config
  // Inputs. Ignore them because they might get a label from a wrapping label element.
  { code: '<input />' },
  { code: '<input type="button" />' },
  { code: '<input type="checkbox" />' },
  { code: '<input type="color" />' },
  { code: '<input type="date" />' },
  { code: '<input type="datetime" />' },
  { code: '<input type="email" />' },
  { code: '<input type="file" />' },
  { code: '<input type="hidden" />' },
  { code: '<input type="hidden" name="bot-field"/>' },
  { code: '<input type="hidden" name="form-name" value="Contact Form"/>' },
  { code: '<input type="image" />' },
  { code: '<input type="month" />' },
  { code: '<input type="number" />' },
  { code: '<input type="password" />' },
  { code: '<input type="radio" />' },
  { code: '<input type="range" />' },
  { code: '<input type="reset" />' },
  { code: '<input type="search" />' },
  { code: '<input type="submit" />' },
  { code: '<input type="tel" />' },
  { code: '<input type="text" />' },
  { code: '<label>Foo <input type="text" /></label>' },
  { code: '<input name={field.name} id="foo" type="text" value={field.value} disabled={isDisabled} onChange={changeText(field.onChange, field.name)} onBlur={field.onBlur} />' },
  { code: '<input type="time" />' },
  { code: '<input type="url" />' },
  { code: '<input type="week" />' },
  // Marginal interactive elements. It is difficult to insist that these
  // elements contain a text label.
  { code: '<audio />' },
  { code: '<canvas />' },
  { code: '<embed />' },
  { code: '<textarea />' },
  { code: '<tr />' },
  { code: '<video />' },
  // Interactive roles to ignore
  { code: '<div role="grid" />' },
  { code: '<div role="listbox" />' },
  { code: '<div role="menu" />' },
  { code: '<div role="menubar" />' },
  { code: '<div role="radiogroup" />' },
  { code: '<div role="row" />' },
  { code: '<div role="tablist" />' },
  { code: '<div role="toolbar" />' },
  { code: '<div role="tree" />' },
  { code: '<div role="treegrid" />' },
];
const neverValid = [
  { code: '<button />', errors: [expectedError] },
  { code: '<button><span /></button>', errors: [expectedError] },
  { code: '<button><img /></button>', errors: [expectedError] },
  { code: '<button><span title="This is not a real label" /></button>', errors: [expectedError] },
  { code: '<button><span><span><span>Save</span></span></span></button>', options: [{ depth: 3 }], errors: [expectedError] },
  { code: '<CustomControl><span><span></span></span></CustomControl>', options: [{ depth: 3, controlComponents: ['CustomControl'] }], errors: [expectedError] },
  { code: '<CustomControl></CustomControl>', errors: [expectedError], settings: { 'jsx-a11y': { components: { CustomControl: 'button' } } } },
  { code: '<a href="#" />', errors: [expectedError] },
  { code: '<area href="#" />', errors: [expectedError] },
  { code: '<menuitem />', errors: [expectedError] },
  { code: '<option />', errors: [expectedError] },
  { code: '<th />', errors: [expectedError] },
  { code: '<td />', errors: [expectedError] },
  // Interactive Roles
  { code: '<div role="button" />', errors: [expectedError] },
  { code: '<div role="checkbox" />', errors: [expectedError] },
  { code: '<div role="columnheader" />', errors: [expectedError] },
  { code: '<div role="combobox" />', errors: [expectedError] },
  { code: '<div role="link" />', errors: [expectedError] },
  { code: '<div role="gridcell" />', errors: [expectedError] },
  { code: '<div role="menuitem" />', errors: [expectedError] },
  { code: '<div role="menuitemcheckbox" />', errors: [expectedError] },
  { code: '<div role="menuitemradio" />', errors: [expectedError] },
  { code: '<div role="option" />', errors: [expectedError] },
  { code: '<div role="progressbar" />', errors: [expectedError] },
  { code: '<div role="radio" />', errors: [expectedError] },
  { code: '<div role="rowheader" />', errors: [expectedError] },
  { code: '<div role="scrollbar" />', errors: [expectedError] },
  { code: '<div role="searchbox" />', errors: [expectedError] },
  { code: '<div role="slider" />', errors: [expectedError] },
  { code: '<div role="spinbutton" />', errors: [expectedError] },
  { code: '<div role="switch" />', errors: [expectedError] },
  { code: '<div role="tab" />', errors: [expectedError] },
  { code: '<div role="textbox" />', errors: [expectedError] },
];

const recommendedOptions = (configs.recommended.rules[ruleName][1] || {});
ruleTester.run(`${ruleName}:recommended`, rule, {
  valid: parsers.all([].concat(
    ...alwaysValid,
  ))
    .map(ruleOptionsMapperFactory(recommendedOptions))
    .map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    ...neverValid,
  ))
    .map(ruleOptionsMapperFactory(recommendedOptions))
    .map(parserOptionsMapper),
});

const strictOptions = (configs.strict.rules[ruleName][1] || {});
ruleTester.run(`${ruleName}:strict`, rule, {
  valid: parsers.all([].concat(
    ...alwaysValid,
  ))
    .map(ruleOptionsMapperFactory(strictOptions))
    .map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    ...neverValid,
  ))
    .map(ruleOptionsMapperFactory(strictOptions))
    .map(parserOptionsMapper),
});

ruleTester.run(`${ruleName}:no-config`, rule, {
  valid: parsers.all([].concat(
    { code: '<input type="hidden" />' },
    { code: '<input type="text" aria-hidden="true" />' },
  ))
    .map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    { code: '<input type="text" />', errors: [expectedError] },
  ))
    .map(parserOptionsMapper),
});
