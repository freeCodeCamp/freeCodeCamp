/**
 * File that tests whether the TypeScript typings work as expected.
 */

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import {expect} from '@jest/globals'
import * as matchers from '../../matchers'

expect.extend(matchers)

const element: HTMLElement = document.body

function customExpect(
  _actual: HTMLElement,
):
  | matchers.TestingLibraryMatchers<unknown, void>
  | matchers.TestingLibraryMatchers<unknown, Promise<void>> {
  throw new Error('Method not implemented.')
}

customExpect(element).toBeInTheDOM()
customExpect(element).toBeInTheDOM(document.body)
customExpect(element).toBeInTheDocument()
customExpect(element).toBeVisible()
customExpect(element).toBeEmpty()
customExpect(element).toBeDisabled()
customExpect(element).toBeEnabled()
customExpect(element).toBeInvalid()
customExpect(element).toBeRequired()
customExpect(element).toBeValid()
customExpect(element).toContainElement(document.body)
customExpect(element).toContainElement(null)
customExpect(element).toContainHTML('body')
customExpect(element).toHaveAttribute('attr')
customExpect(element).toHaveAttribute('attr', true)
customExpect(element).toHaveAttribute('attr', 'yes')
customExpect(element).toHaveClass()
customExpect(element).toHaveClass('cls1')
customExpect(element).toHaveClass('cls1', 'cls2', 'cls3', 'cls4')
customExpect(element).toHaveClass('cls1', {exact: true})
customExpect(element).toHaveDisplayValue('str')
customExpect(element).toHaveDisplayValue(['str1', 'str2'])
customExpect(element).toHaveDisplayValue(/str/)
customExpect(element).toHaveDisplayValue([/str1/, 'str2'])
customExpect(element).toHaveFocus()
customExpect(element).toHaveFormValues({foo: 'bar', baz: 1})
customExpect(element).toHaveStyle('display: block')
customExpect(element).toHaveStyle({display: 'block', width: 100})
customExpect(element).toHaveTextContent('Text')
customExpect(element).toHaveTextContent(/Text/)
customExpect(element).toHaveTextContent('Text', {normalizeWhitespace: true})
customExpect(element).toHaveTextContent(/Text/, {normalizeWhitespace: true})
customExpect(element).toHaveValue()
customExpect(element).toHaveValue('str')
customExpect(element).toHaveValue(['str1', 'str2'])
customExpect(element).toHaveValue(1)
customExpect(element).toHaveValue(null)
customExpect(element).toBeChecked()
customExpect(element).toHaveDescription('some description')
customExpect(element).toHaveDescription(/some description/)
customExpect(element).toHaveDescription(expect.stringContaining('partial'))
customExpect(element).toHaveDescription()
customExpect(element).toHaveAccessibleDescription('some description')
customExpect(element).toHaveAccessibleDescription(/some description/)
customExpect(element).toHaveAccessibleDescription(
  expect.stringContaining('partial'),
)
customExpect(element).toHaveAccessibleDescription()

customExpect(element).toHaveAccessibleErrorMessage()
customExpect(element).toHaveAccessibleErrorMessage(
  'Invalid time: the time must be between 9:00 AM and 5:00 PM',
)
customExpect(element).toHaveAccessibleErrorMessage(/invalid time/i)
customExpect(element).toHaveAccessibleErrorMessage(
  expect.stringContaining('Invalid time'),
)

customExpect(element).toHaveAccessibleName('a label')
customExpect(element).toHaveAccessibleName(/a label/)
customExpect(element).toHaveAccessibleName(
  expect.stringContaining('partial label'),
)
customExpect(element).toHaveAccessibleName()
customExpect(element).toHaveErrorMessage(
  'Invalid time: the time must be between 9:00 AM and 5:00 PM',
)
customExpect(element).toHaveErrorMessage(/invalid time/i)
customExpect(element).toHaveErrorMessage(
  expect.stringContaining('Invalid time'),
)

// @ts-expect-error The types accidentally allowed any property by falling back to "any"
customExpect(element).nonExistentProperty()
