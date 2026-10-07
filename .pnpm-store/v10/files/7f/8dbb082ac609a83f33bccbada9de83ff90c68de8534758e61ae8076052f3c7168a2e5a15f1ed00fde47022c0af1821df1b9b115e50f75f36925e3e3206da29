/**
 * @fileoverview Enforce onmouseover/onmouseout are accompanied
 *  by onfocus/onblur.
 * @author Ethan Cohen
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/mouse-events-have-key-events';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const mouseOverError = {
  message: 'onMouseOver must be accompanied by onFocus for accessibility.',
  type: 'JSXAttribute',
};
const pointerEnterError = {
  message: 'onPointerEnter must be accompanied by onFocus for accessibility.',
  type: 'JSXAttribute',
};
const mouseOutError = {
  message: 'onMouseOut must be accompanied by onBlur for accessibility.',
  type: 'JSXAttribute',
};
const pointerLeaveError = {
  message: 'onPointerLeave must be accompanied by onBlur for accessibility.',
  type: 'JSXAttribute',
};

ruleTester.run('mouse-events-have-key-events', rule, {
  valid: parsers.all([].concat(
    { code: '<div onMouseOver={() => void 0} onFocus={() => void 0} />;' },
    {
      code: '<div onMouseOver={() => void 0} onFocus={() => void 0} {...props} />;',
    },
    { code: '<div onMouseOver={handleMouseOver} onFocus={handleFocus} />;' },
    {
      code: '<div onMouseOver={handleMouseOver} onFocus={handleFocus} {...props} />;',
    },
    { code: '<div />;' },
    { code: '<div onBlur={() => {}} />' },
    { code: '<div onFocus={() => {}} />' },
    { code: '<div onMouseOut={() => void 0} onBlur={() => void 0} />' },
    { code: '<div onMouseOut={() => void 0} onBlur={() => void 0} {...props} />' },
    { code: '<div onMouseOut={handleMouseOut} onBlur={handleOnBlur} />' },
    { code: '<div onMouseOut={handleMouseOut} onBlur={handleOnBlur} {...props} />' },
    { code: '<MyElement />' },
    { code: '<MyElement onMouseOver={() => {}} />' },
    { code: '<MyElement onMouseOut={() => {}} />' },
    { code: '<MyElement onBlur={() => {}} />' },
    { code: '<MyElement onFocus={() => {}} />' },
    { code: '<MyElement onMouseOver={() => {}} {...props} />' },
    { code: '<MyElement onMouseOut={() => {}} {...props} />' },
    { code: '<MyElement onBlur={() => {}} {...props} />' },
    { code: '<MyElement onFocus={() => {}} {...props} />' },
    /* Passing in empty options doesn't check any event handlers */
    {
      code: '<div onMouseOver={() => {}} onMouseOut={() => {}} />',
      options: [{ hoverInHandlers: [], hoverOutHandlers: [] }],
    },
    /* Passing in custom handlers */
    {
      code: '<div onMouseOver={() => {}} onFocus={() => {}} />',
      options: [{ hoverInHandlers: ['onMouseOver'] }],
    },
    {
      code: '<div onMouseEnter={() => {}} onFocus={() => {}} />',
      options: [{ hoverInHandlers: ['onMouseEnter'] }],
    },
    {
      code: '<div onMouseOut={() => {}} onBlur={() => {}} />',
      options: [{ hoverOutHandlers: ['onMouseOut'] }],
    },
    {
      code: '<div onMouseLeave={() => {}} onBlur={() => {}} />',
      options: [{ hoverOutHandlers: ['onMouseLeave'] }],
    },
    {
      code: '<div onMouseOver={() => {}} onMouseOut={() => {}} />',
      options: [
        { hoverInHandlers: ['onPointerEnter'], hoverOutHandlers: ['onPointerLeave'] },
      ],
    },
    /* Custom options only checks the handlers passed in */
    {
      code: '<div onMouseLeave={() => {}} />',
      options: [{ hoverOutHandlers: ['onPointerLeave'] }],
    },
  )).map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    { code: '<div onMouseOver={() => void 0} />;', errors: [mouseOverError] },
    { code: '<div onMouseOut={() => void 0} />', errors: [mouseOutError] },
    {
      code: '<div onMouseOver={() => void 0} onFocus={undefined} />;',
      errors: [mouseOverError],
    },
    {
      code: '<div onMouseOut={() => void 0} onBlur={undefined} />',
      errors: [mouseOutError],
    },
    {
      code: '<div onMouseOver={() => void 0} {...props} />',
      errors: [mouseOverError],
    },
    {
      code: '<div onMouseOut={() => void 0} {...props} />',
      errors: [mouseOutError],
    },
    /* Custom options */
    {
      code: '<div onMouseOver={() => {}} onMouseOut={() => {}} />',
      options: [
        { hoverInHandlers: ['onMouseOver'], hoverOutHandlers: ['onMouseOut'] },
      ],
      errors: [mouseOverError, mouseOutError],
    },
    {
      code: '<div onPointerEnter={() => {}} onPointerLeave={() => {}} />',
      options: [
        { hoverInHandlers: ['onPointerEnter'], hoverOutHandlers: ['onPointerLeave'] },
      ],
      errors: [pointerEnterError, pointerLeaveError],
    },
    {
      code: '<div onMouseOver={() => {}} />',
      options: [{ hoverInHandlers: ['onMouseOver'] }],
      errors: [mouseOverError],
    },
    {
      code: '<div onPointerEnter={() => {}} />',
      options: [{ hoverInHandlers: ['onPointerEnter'] }],
      errors: [pointerEnterError],
    },
    {
      code: '<div onMouseOut={() => {}} />',
      options: [{ hoverOutHandlers: ['onMouseOut'] }],
      errors: [mouseOutError],
    },
    {
      code: '<div onPointerLeave={() => {}} />',
      options: [{ hoverOutHandlers: ['onPointerLeave'] }],
      errors: [pointerLeaveError],
    },
  )).map(parserOptionsMapper),
});
