/**
 * @fileoverview Enforce a clickable non-interactive element has at least 1 keyboard event listener.
 * @author Ethan Cohen
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/click-events-have-key-events';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const errorMessage = 'Visible, non-interactive elements with click handlers must have at least one keyboard listener.';

const expectedError = {
  message: errorMessage,
  type: 'JSXOpeningElement',
};

ruleTester.run('click-events-have-key-events', rule, {
  valid: parsers.all([].concat(
    { code: '<div onClick={() => void 0} onKeyDown={foo}/>;' },
    { code: '<div onClick={() => void 0} onKeyUp={foo} />;' },
    { code: '<div onClick={() => void 0} onKeyPress={foo}/>;' },
    { code: '<div onClick={() => void 0} onKeyDown={foo} onKeyUp={bar} />;' },
    { code: '<div onClick={() => void 0} onKeyDown={foo} {...props} />;' },
    { code: '<div className="foo" />;' },
    { code: '<div onClick={() => void 0} aria-hidden />;' },
    { code: '<div onClick={() => void 0} aria-hidden={true} />;' },
    { code: '<div onClick={() => void 0} aria-hidden={false} onKeyDown={foo} />;' },
    {
      code: '<div onClick={() => void 0} onKeyDown={foo} aria-hidden={undefined} />;',
    },
    { code: '<input type="text" onClick={() => void 0} />' },
    { code: '<input onClick={() => void 0} />' },
    { code: '<button onClick={() => void 0} className="foo" />' },
    { code: '<option onClick={() => void 0} className="foo" />' },
    { code: '<select onClick={() => void 0} className="foo" />' },
    { code: '<textarea onClick={() => void 0} className="foo" />' },
    { code: '<a onClick={() => void 0} href="http://x.y.z" />' },
    { code: '<a onClick={() => void 0} href="http://x.y.z" tabIndex="0" />' },
    { code: '<input onClick={() => void 0} type="hidden" />;' },
    { code: '<div onClick={() => void 0} role="presentation" />;' },
    { code: '<div onClick={() => void 0} role="none" />;' },
    { code: '<TestComponent onClick={doFoo} />' },
    { code: '<Button onClick={doFoo} />' },
    { code: '<Footer onClick={doFoo} />' },
  )).map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    { code: '<div onClick={() => void 0} />;', errors: [expectedError] },
    {
      code: '<div onClick={() => void 0} role={undefined} />;',
      errors: [expectedError],
    },
    { code: '<div onClick={() => void 0} {...props} />;', errors: [expectedError] },
    { code: '<section onClick={() => void 0} />;', errors: [expectedError] },
    { code: '<main onClick={() => void 0} />;', errors: [expectedError] },
    { code: '<article onClick={() => void 0} />;', errors: [expectedError] },
    { code: '<header onClick={() => void 0} />;', errors: [expectedError] },
    { code: '<footer onClick={() => void 0} />;', errors: [expectedError] },
    {
      code: '<div onClick={() => void 0} aria-hidden={false} />;',
      errors: [expectedError],
    },
    { code: '<a onClick={() => void 0} />', errors: [expectedError] },
    { code: '<a tabIndex="0" onClick={() => void 0} />', errors: [expectedError] },
    { code: '<Footer onClick={doFoo} />', errors: [expectedError], settings: { 'jsx-a11y': { components: { Footer: 'footer' } } } },
  )).map(parserOptionsMapper),
});
