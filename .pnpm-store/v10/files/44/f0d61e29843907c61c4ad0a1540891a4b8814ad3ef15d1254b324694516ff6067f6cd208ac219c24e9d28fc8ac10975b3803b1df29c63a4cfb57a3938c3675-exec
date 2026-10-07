import {type ARIARole} from 'aria-query'

declare namespace matchers {
  interface TestingLibraryMatchers<E, R> {
    /**
     * @deprecated
     * since v1.9.0
     * @description
     * Assert whether a value is a DOM element, or not. Contrary to what its name implies, this matcher only checks
     * that you passed to it a valid DOM element.
     *
     * It does not have a clear definition of what "the DOM" is. Therefore, it does not check whether that element
     * is contained anywhere.
     * @see
     * [testing-library/jest-dom#toBeInTheDom](https://github.com/testing-library/jest-dom#toBeInTheDom)
     */
    toBeInTheDOM(container?: HTMLElement | SVGElement): R
    /**
     * @description
     * Assert whether an element is present in the document or not.
     * @example
     * <svg data-testid="svg-element"></svg>
     *
     * expect(queryByTestId('svg-element')).toBeInTheDocument()
     * expect(queryByTestId('does-not-exist')).not.toBeInTheDocument()
     * @see
     * [testing-library/jest-dom#tobeinthedocument](https://github.com/testing-library/jest-dom#tobeinthedocument)
     */
    toBeInTheDocument(): R
    /**
     * @description
     * This allows you to check if an element is currently visible to the user.
     *
     * An element is visible if **all** the following conditions are met:
     * * it does not have its css property display set to none
     * * it does not have its css property visibility set to either hidden or collapse
     * * it does not have its css property opacity set to 0
     * * its parent element is also visible (and so on up to the top of the DOM tree)
     * * it does not have the hidden attribute
     * * if `<details />` it has the open attribute
     * @example
     * <div
     *   data-testid="zero-opacity"
     *   style="opacity: 0"
     * >
     *   Zero Opacity
     * </div>
     *
     * <div data-testid="visible">Visible Example</div>
     *
     * expect(getByTestId('zero-opacity')).not.toBeVisible()
     * expect(getByTestId('visible')).toBeVisible()
     * @see
     * [testing-library/jest-dom#tobevisible](https://github.com/testing-library/jest-dom#tobevisible)
     */
    toBeVisible(): R
    /**
     * @deprecated
     * since v5.9.0
     * @description
     * Assert whether an element has content or not.
     * @example
     * <span data-testid="not-empty">
     *   <span data-testid="empty"></span>
     * </span>
     *
     * expect(getByTestId('empty')).toBeEmpty()
     * expect(getByTestId('not-empty')).not.toBeEmpty()
     * @see
     * [testing-library/jest-dom#tobeempty](https://github.com/testing-library/jest-dom#tobeempty)
     */
    toBeEmpty(): R
    /**
     * @description
     * Assert whether an element has content or not.
     * @example
     * <span data-testid="not-empty">
     *   <span data-testid="empty"></span>
     * </span>
     *
     * expect(getByTestId('empty')).toBeEmptyDOMElement()
     * expect(getByTestId('not-empty')).not.toBeEmptyDOMElement()
     * @see
     * [testing-library/jest-dom#tobeemptydomelement](https://github.com/testing-library/jest-dom#tobeemptydomelement)
     */
    toBeEmptyDOMElement(): R
    /**
     * @description
     * Allows you to check whether an element is disabled from the user's perspective.
     *
     * Matches if the element is a form control and the `disabled` attribute is specified on this element or the
     * element is a descendant of a form element with a `disabled` attribute.
     * @example
     * <button
     *   data-testid="button"
     *   type="submit"
     *   disabled
     * >
     *   submit
     * </button>
     *
     * expect(getByTestId('button')).toBeDisabled()
     * @see
     * [testing-library/jest-dom#tobedisabled](https://github.com/testing-library/jest-dom#tobedisabled)
     */
    toBeDisabled(): R
    /**
     * @description
     * Allows you to check whether an element is not disabled from the user's perspective.
     *
     * Works like `not.toBeDisabled()`.
     *
     * Use this matcher to avoid double negation in your tests.
     * @example
     * <button
     *   data-testid="button"
     *   type="submit"
     * >
     *   submit
     * </button>
     *
     * expect(getByTestId('button')).toBeEnabled()
     * @see
     * [testing-library/jest-dom#tobeenabled](https://github.com/testing-library/jest-dom#tobeenabled)
     */
    toBeEnabled(): R
    /**
     * @description
     * Check if a form element, or the entire `form`, is currently invalid.
     *
     * An `input`, `select`, `textarea`, or `form` element is invalid if it has an `aria-invalid` attribute with no
     * value or a value of "true", or if the result of `checkValidity()` is false.
     * @example
     * <input data-testid="no-aria-invalid" />
     *
     * <form data-testid="invalid-form">
     *   <input required />
     * </form>
     *
     * expect(getByTestId('no-aria-invalid')).not.toBeInvalid()
     * expect(getByTestId('invalid-form')).toBeInvalid()
     * @see
     * [testing-library/jest-dom#tobeinvalid](https://github.com/testing-library/jest-dom#tobeinvalid)
     */
    toBeInvalid(): R
    /**
     * @description
     * This allows you to check if a form element is currently required.
     *
     * An element is required if it is having a `required` or `aria-required="true"` attribute.
     * @example
     * <input data-testid="required-input" required />
     * <div
     *   data-testid="supported-role"
     *   role="tree"
     *   required />
     *
     * expect(getByTestId('required-input')).toBeRequired()
     * expect(getByTestId('supported-role')).not.toBeRequired()
     * @see
     * [testing-library/jest-dom#toberequired](https://github.com/testing-library/jest-dom#toberequired)
     */
    toBeRequired(): R
    /**
     * @description
     * Allows you to check if a form element is currently required.
     *
     * An `input`, `select`, `textarea`, or `form` element is invalid if it has an `aria-invalid` attribute with no
     * value or a value of "false", or if the result of `checkValidity()` is true.
     * @example
     * <input data-testid="aria-invalid" aria-invalid />
     *
     * <form data-testid="valid-form">
     *   <input />
     * </form>
     *
     * expect(getByTestId('no-aria-invalid')).not.toBeValid()
     * expect(getByTestId('invalid-form')).toBeInvalid()
     * @see
     * [testing-library/jest-dom#tobevalid](https://github.com/testing-library/jest-dom#tobevalid)
     */
    toBeValid(): R
    /**
     * @description
     * Allows you to assert whether an element contains another element as a descendant or not.
     * @example
     * <span data-testid="ancestor">
     *   <span data-testid="descendant"></span>
     * </span>
     *
     * const ancestor = getByTestId('ancestor')
     * const descendant = getByTestId('descendant')
     * const nonExistantElement = getByTestId('does-not-exist')
     * expect(ancestor).toContainElement(descendant)
     * expect(descendant).not.toContainElement(ancestor)
     * expect(ancestor).not.toContainElement(nonExistantElement)
     * @see
     * [testing-library/jest-dom#tocontainelement](https://github.com/testing-library/jest-dom#tocontainelement)
     */
    toContainElement(element: HTMLElement | SVGElement | null): R
    /**
     * @description
     * Assert whether a string representing a HTML element is contained in another element.
     * @example
     * <span data-testid="parent"><span data-testid="child"></span></span>
     *
     * expect(getByTestId('parent')).toContainHTML('<span data-testid="child"></span>')
     * @see
     * [testing-library/jest-dom#tocontainhtml](https://github.com/testing-library/jest-dom#tocontainhtml)
     */
    toContainHTML(htmlText: string): R
    /**
     * @description
     * Allows you to check if a given element has an attribute or not.
     *
     * You can also optionally check that the attribute has a specific expected value or partial match using
     * [expect.stringContaining](https://jestjs.io/docs/en/expect.html#expectnotstringcontainingstring) or
     * [expect.stringMatching](https://jestjs.io/docs/en/expect.html#expectstringmatchingstring-regexp).
     * @example
     * <button
     *   data-testid="ok-button"
     *   type="submit"
     *   disabled
     * >
     *   ok
     * </button>
     *
     * expect(button).toHaveAttribute('disabled')
     * expect(button).toHaveAttribute('type', 'submit')
     * expect(button).not.toHaveAttribute('type', 'button')
     * @see
     * [testing-library/jest-dom#tohaveattribute](https://github.com/testing-library/jest-dom#tohaveattribute)
     */
    toHaveAttribute(attr: string, value?: unknown): R
    /**
     * @description
     * Check whether the given element has certain classes within its `class` attribute.
     *
     * You must provide at least one class, unless you are asserting that an element does not have any classes.
     * @example
     * <button
     *   data-testid="delete-button"
     *   class="btn xs btn-danger"
     * >
     *   delete item
     * </button>
     *
     * <div data-testid="no-classes">no classes</div>
     *
     * const deleteButton = getByTestId('delete-button')
     * const noClasses = getByTestId('no-classes')
     * expect(deleteButton).toHaveClass('btn')
     * expect(deleteButton).toHaveClass('btn-danger xs')
     * expect(deleteButton).toHaveClass(/danger/, 'xs')
     * expect(deleteButton).toHaveClass('btn xs btn-danger', {exact: true})
     * expect(deleteButton).not.toHaveClass('btn xs btn-danger', {exact: true})
     * expect(noClasses).not.toHaveClass()
     * @see
     * [testing-library/jest-dom#tohaveclass](https://github.com/testing-library/jest-dom#tohaveclass)
     */
    toHaveClass(...classNames: Array<string | RegExp>): R
    toHaveClass(classNames: string, options?: {exact: boolean}): R
    /**
     * @description
     * This allows you to check whether the given form element has the specified displayed value (the one the
     * end user will see). It accepts <input>, <select> and <textarea> elements with the exception of <input type="checkbox">
     * and <input type="radio">, which can be meaningfully matched only using toBeChecked or toHaveFormValues.
     * @example
     * <label for="input-example">First name</label>
     * <input type="text" id="input-example" value="Luca" />
     *
     * <label for="textarea-example">Description</label>
     * <textarea id="textarea-example">An example description here.</textarea>
     *
     * <label for="single-select-example">Fruit</label>
     * <select id="single-select-example">
     *   <option value="">Select a fruit...</option>
     *   <option value="banana">Banana</option>
     *   <option value="ananas">Ananas</option>
     *   <option value="avocado">Avocado</option>
     * </select>
     *
     * <label for="mutiple-select-example">Fruits</label>
     * <select id="multiple-select-example" multiple>
     *   <option value="">Select a fruit...</option>
     *   <option value="banana" selected>Banana</option>
     *   <option value="ananas">Ananas</option>
     *   <option value="avocado" selected>Avocado</option>
     * </select>
     *
     * const input = screen.getByLabelText('First name')
     * const textarea = screen.getByLabelText('Description')
     * const selectSingle = screen.getByLabelText('Fruit')
     * const selectMultiple = screen.getByLabelText('Fruits')
     *
     * expect(input).toHaveDisplayValue('Luca')
     * expect(textarea).toHaveDisplayValue('An example description here.')
     * expect(selectSingle).toHaveDisplayValue('Select a fruit...')
     * expect(selectMultiple).toHaveDisplayValue(['Banana', 'Avocado'])
     *
     * @see
     * [testing-library/jest-dom#tohavedisplayvalue](https://github.com/testing-library/jest-dom#tohavedisplayvalue)
     */
    toHaveDisplayValue(value: string | RegExp | Array<string | RegExp>): R
    /**
     * @description
     * Assert whether an element has focus or not.
     * @example
     * <div>
     *   <input type="text" data-testid="element-to-focus" />
     * </div>
     *
     * const input = getByTestId('element-to-focus')
     * input.focus()
     * expect(input).toHaveFocus()
     * input.blur()
     * expect(input).not.toHaveFocus()
     * @see
     * [testing-library/jest-dom#tohavefocus](https://github.com/testing-library/jest-dom#tohavefocus)
     */
    toHaveFocus(): R
    /**
     * @description
     * Check if a form or fieldset contains form controls for each given name, and having the specified value.
     *
     * Can only be invoked on a form or fieldset element.
     * @example
     * <form data-testid="login-form">
     *   <input type="text" name="username" value="jane.doe" />
     *   <input type="password" name="password" value="123" />
     *   <input type="checkbox" name="rememberMe" checked />
     *   <button type="submit">Sign in</button>
     * </form>
     *
     * expect(getByTestId('login-form')).toHaveFormValues({
     *   username: 'jane.doe',
     *   rememberMe: true,
     * })
     * @see
     * [testing-library/jest-dom#tohaveformvalues](https://github.com/testing-library/jest-dom#tohaveformvalues)
     */
    toHaveFormValues(expectedValues: Record<string, unknown>): R
    /**
     * @description
     * Check if an element has specific css properties with specific values applied.
     *
     * Only matches if the element has *all* the expected properties applied, not just some of them.
     * @example
     * <button
     *   data-testid="submit-button"
     *   style="background-color: green; display: none"
     * >
     *   submit
     * </button>
     *
     * const button = getByTestId('submit-button')
     * expect(button).toHaveStyle('background-color: green')
     * expect(button).toHaveStyle({
     *   'background-color': 'green',
     *   display: 'none'
     * })
     * @see
     * [testing-library/jest-dom#tohavestyle](https://github.com/testing-library/jest-dom#tohavestyle)
     */
    toHaveStyle(css: string | Record<string, unknown>): R
    /**
     * @description
     * Check whether the given element has a text content or not.
     *
     * When a string argument is passed through, it will perform a partial case-sensitive match to the element
     * content.
     *
     * To perform a case-insensitive match, you can use a RegExp with the `/i` modifier.
     *
     * If you want to match the whole content, you can use a RegExp to do it.
     * @example
     * <span data-testid="text-content">Text Content</span>
     *
     * const element = getByTestId('text-content')
     * expect(element).toHaveTextContent('Content')
     * // to match the whole content
     * expect(element).toHaveTextContent(/^Text Content$/)
     * // to use case-insentive match
     * expect(element).toHaveTextContent(/content$/i)
     * expect(element).not.toHaveTextContent('content')
     * @see
     * [testing-library/jest-dom#tohavetextcontent](https://github.com/testing-library/jest-dom#tohavetextcontent)
     */
    toHaveTextContent(
      text: string | RegExp,
      options?: {normalizeWhitespace: boolean},
    ): R
    /**
     * @description
     * Check whether the given form element has the specified value.
     *
     * Accepts `<input>`, `<select>`, and `<textarea>` elements with the exception of `<input type="checkbox">` and
     * `<input type="radiobox">`, which can be matched only using
     * [toBeChecked](https://github.com/testing-library/jest-dom#tobechecked) or
     * [toHaveFormValues](https://github.com/testing-library/jest-dom#tohaveformvalues).
     * @example
     * <input
     *   type="number"
     *   value="5"
     *   data-testid="input-number" />
     *
     * const numberInput = getByTestId('input-number')
     * expect(numberInput).toHaveValue(5)
     * @see
     * [testing-library/jest-dom#tohavevalue](https://github.com/testing-library/jest-dom#tohavevalue)
     */
    toHaveValue(value?: string | string[] | number | null): R
    /**
     * @description
     * Assert whether the given element is checked.
     *
     * It accepts an `input` of type `checkbox` or `radio` and elements with a `role` of `radio` with a valid
     * `aria-checked` attribute of "true" or "false".
     * @example
     * <input
     *   type="checkbox"
     *   checked
     *   data-testid="input-checkbox" />
     * <input
     *   type="radio"
     *   value="foo"
     *   data-testid="input-radio" />
     *
     * const inputCheckbox = getByTestId('input-checkbox')
     * const inputRadio = getByTestId('input-radio')
     * expect(inputCheckbox).toBeChecked()
     * expect(inputRadio).not.toBeChecked()
     * @see
     * [testing-library/jest-dom#tobechecked](https://github.com/testing-library/jest-dom#tobechecked)
     */
    toBeChecked(): R
    /**
     * @deprecated
     * since v5.14.1
     * @description
     * Check the accessible description for an element.
     * This allows you to check whether the given element has a description or not.
     *
     * An element gets its description via the
     * [`aria-describedby` attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute).
     * Set this to the `id` of one or more other elements. These elements may be nested
     * inside, be outside, or a sibling of the passed in element.
     *
     * Whitespace is normalized. Using multiple ids will
     * [join the referenced elements’ text content separated by a space](https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description).
     *
     * When a `string` argument is passed through, it will perform a whole
     * case-sensitive match to the description text.
     *
     * To perform a case-insensitive match, you can use a `RegExp` with the `/i`
     * modifier.
     *
     * To perform a partial match, you can pass a `RegExp` or use
     * `expect.stringContaining("partial string")`.
     *
     * @example
     * <button aria-label="Close" aria-describedby="description-close">
     *   X
     * </button>
     * <div id="description-close">
     *   Closing will discard any changes
     * </div>
     *
     * <button>Delete</button>
     *
     * const closeButton = getByRole('button', {name: 'Close'})
     *
     * expect(closeButton).toHaveDescription('Closing will discard any changes')
     * expect(closeButton).toHaveDescription(/will discard/) // to partially match
     * expect(closeButton).toHaveDescription(expect.stringContaining('will discard')) // to partially match
     * expect(closeButton).toHaveDescription(/^closing/i) // to use case-insensitive match
     * expect(closeButton).not.toHaveDescription('Other description')
     *
     * const deleteButton = getByRole('button', {name: 'Delete'})
     * expect(deleteButton).not.toHaveDescription()
     * expect(deleteButton).toHaveDescription('') // Missing or empty description always becomes a blank string
     * @see
     * [testing-library/jest-dom#tohavedescription](https://github.com/testing-library/jest-dom#tohavedescription)
     */
    toHaveDescription(text?: string | RegExp | E): R
    /**
     * @description
     * This allows to assert that an element has the expected [accessible description](https://w3c.github.io/accname/).
     *
     * You can pass the exact string of the expected accessible description, or you can make a
     * partial match passing a regular expression, or by using either
     * [expect.stringContaining](https://jestjs.io/docs/en/expect.html#expectnotstringcontainingstring)
     * or [expect.stringMatching](https://jestjs.io/docs/en/expect.html#expectstringmatchingstring-regexp).
     * @example
     * <a data-testid="link" href="/" aria-label="Home page" title="A link to start over">Start</a>
     * <a data-testid="extra-link" href="/about" aria-label="About page">About</a>
     * <img src="avatar.jpg" data-testid="avatar" alt="User profile pic" />
     * <img src="logo.jpg" data-testid="logo" alt="Company logo" aria-describedby="t1" />
     * <span id="t1" role="presentation">The logo of Our Company</span>
     *
     * expect(getByTestId('link')).toHaveAccessibleDescription()
     * expect(getByTestId('link')).toHaveAccessibleDescription('A link to start over')
     * expect(getByTestId('link')).not.toHaveAccessibleDescription('Home page')
     * expect(getByTestId('extra-link')).not.toHaveAccessibleDescription()
     * expect(getByTestId('avatar')).not.toHaveAccessibleDescription()
     * expect(getByTestId('logo')).not.toHaveAccessibleDescription('Company logo')
     * expect(getByTestId('logo')).toHaveAccessibleDescription('The logo of Our Company')
     * @see
     * [testing-library/jest-dom#tohaveaccessibledescription](https://github.com/testing-library/jest-dom#tohaveaccessibledescription)
     */
    toHaveAccessibleDescription(text?: string | RegExp | E): R

    /**
     * @description
     * This allows you to assert that an element has the expected
     * [accessible error message](https://w3c.github.io/aria/#aria-errormessage).
     *
     * You can pass the exact string of the expected accessible error message.
     * Alternatively, you can perform a partial match by passing a regular expression
     * or by using either
     * [expect.stringContaining](https://jestjs.io/docs/en/expect.html#expectnotstringcontainingstring)
     * or [expect.stringMatching](https://jestjs.io/docs/en/expect.html#expectstringmatchingstring-regexp).
     *
     * @example
     * <input aria-label="Has Error" aria-invalid="true" aria-errormessage="error-message" />
     * <div id="error-message" role="alert">This field is invalid</div>
     *
     * <input aria-label="No Error Attributes" />
     * <input aria-label="Not Invalid" aria-invalid="false" aria-errormessage="error-message" />
     *
     * // Inputs with Valid Error Messages
     * expect(getByRole('textbox', {name: 'Has Error'})).toHaveAccessibleErrorMessage()
     * expect(getByRole('textbox', {name: 'Has Error'})).toHaveAccessibleErrorMessage('This field is invalid')
     * expect(getByRole('textbox', {name: 'Has Error'})).toHaveAccessibleErrorMessage(/invalid/i)
     * expect(
     *   getByRole('textbox', {name: 'Has Error'}),
     * ).not.toHaveAccessibleErrorMessage('This field is absolutely correct!')
     *
     * // Inputs without Valid Error Messages
     * expect(
     *   getByRole('textbox', {name: 'No Error Attributes'}),
     * ).not.toHaveAccessibleErrorMessage()
     *
     * expect(
     *   getByRole('textbox', {name: 'Not Invalid'}),
     * ).not.toHaveAccessibleErrorMessage()
     *
     * @see
     * [testing-library/jest-dom#tohaveaccessibleerrormessage](https://github.com/testing-library/jest-dom#tohaveaccessibleerrormessage)
     */
    toHaveAccessibleErrorMessage(text?: string | RegExp | E): R

    /**
     * @description
     * This allows to assert that an element has the expected [accessible name](https://w3c.github.io/accname/).
     * It is useful, for instance, to assert that form elements and buttons are properly labelled.
     *
     * You can pass the exact string of the expected accessible name, or you can make a
     * partial match passing a regular expression, or by using either
     * [expect.stringContaining](https://jestjs.io/docs/en/expect.html#expectnotstringcontainingstring)
     * or [expect.stringMatching](https://jestjs.io/docs/en/expect.html#expectstringmatchingstring-regexp).
     * @example
     * <img data-testid="img-alt" src="" alt="Test alt" />
     * <img data-testid="img-empty-alt" src="" alt="" />
     * <svg data-testid="svg-title"><title>Test title</title></svg>
     * <button data-testid="button-img-alt"><img src="" alt="Test" /></button>
     * <p><img data-testid="img-paragraph" src="" alt="" /> Test content</p>
     * <button data-testid="svg-button"><svg><title>Test</title></svg></p>
     * <div><svg data-testid="svg-without-title"></svg></div>
     * <input data-testid="input-title" title="test" />
     *
     * expect(getByTestId('img-alt')).toHaveAccessibleName('Test alt')
     * expect(getByTestId('img-empty-alt')).not.toHaveAccessibleName()
     * expect(getByTestId('svg-title')).toHaveAccessibleName('Test title')
     * expect(getByTestId('button-img-alt')).toHaveAccessibleName()
     * expect(getByTestId('img-paragraph')).not.toHaveAccessibleName()
     * expect(getByTestId('svg-button')).toHaveAccessibleName()
     * expect(getByTestId('svg-without-title')).not.toHaveAccessibleName()
     * expect(getByTestId('input-title')).toHaveAccessibleName()
     * @see
     * [testing-library/jest-dom#tohaveaccessiblename](https://github.com/testing-library/jest-dom#tohaveaccessiblename)
     */
    toHaveAccessibleName(text?: string | RegExp | E): R
    /**
     * @description
     * This allows you to assert that an element has the expected
     * [role](https://www.w3.org/TR/html-aria/#docconformance).
     *
     * This is useful in cases where you already have access to an element via
     * some query other than the role itself, and want to make additional
     * assertions regarding its accessibility.
     *
     * The role can match either an explicit role (via the `role` attribute), or
     * an implicit one via the [implicit ARIA
     * semantics](https://www.w3.org/TR/html-aria/).
     *
     * Note: roles are matched literally by string equality, without inheriting
     * from the ARIA role hierarchy. As a result, querying a superclass role
     * like 'checkbox' will not include elements with a subclass role like
     * 'switch'.
     *
     * @example
     * <button data-testid="button">Continue</button>
     * <div role="button" data-testid="button-explicit">Continue</button>
     * <button role="switch button" data-testid="button-explicit-multiple">Continue</button>
     * <a href="/about" data-testid="link">About</a>
     * <a data-testid="link-invalid">Invalid link<a/>
     *
     * expect(getByTestId('button')).toHaveRole('button')
     * expect(getByTestId('button-explicit')).toHaveRole('button')
     * expect(getByTestId('button-explicit-multiple')).toHaveRole('button')
     * expect(getByTestId('button-explicit-multiple')).toHaveRole('switch')
     * expect(getByTestId('link')).toHaveRole('link')
     * expect(getByTestId('link-invalid')).not.toHaveRole('link')
     * expect(getByTestId('link-invalid')).toHaveRole('generic')
     *
     * @see
     * [testing-library/jest-dom#tohaverole](https://github.com/testing-library/jest-dom#tohaverole)
     */
    toHaveRole(
      // Get autocomplete for ARIARole union types, while still supporting another string
      // Ref: https://github.com/microsoft/TypeScript/issues/29729#issuecomment-567871939
      role: ARIARole | (string & {}),
    ): R
    /**
     * @description
     * This allows you to check whether the given element is partially checked.
     * It accepts an input of type checkbox and elements with a role of checkbox
     * with a aria-checked="mixed", or input of type checkbox with indeterminate
     * set to true
     *
     * @example
     * <input type="checkbox" aria-checked="mixed" data-testid="aria-checkbox-mixed" />
     * <input type="checkbox" checked data-testid="input-checkbox-checked" />
     * <input type="checkbox" data-testid="input-checkbox-unchecked" />
     * <div role="checkbox" aria-checked="true" data-testid="aria-checkbox-checked" />
     * <div
     *   role="checkbox"
     *   aria-checked="false"
     *   data-testid="aria-checkbox-unchecked"
     * />
     * <input type="checkbox" data-testid="input-checkbox-indeterminate" />
     *
     * const ariaCheckboxMixed = getByTestId('aria-checkbox-mixed')
     * const inputCheckboxChecked = getByTestId('input-checkbox-checked')
     * const inputCheckboxUnchecked = getByTestId('input-checkbox-unchecked')
     * const ariaCheckboxChecked = getByTestId('aria-checkbox-checked')
     * const ariaCheckboxUnchecked = getByTestId('aria-checkbox-unchecked')
     * const inputCheckboxIndeterminate = getByTestId('input-checkbox-indeterminate')
     *
     * expect(ariaCheckboxMixed).toBePartiallyChecked()
     * expect(inputCheckboxChecked).not.toBePartiallyChecked()
     * expect(inputCheckboxUnchecked).not.toBePartiallyChecked()
     * expect(ariaCheckboxChecked).not.toBePartiallyChecked()
     * expect(ariaCheckboxUnchecked).not.toBePartiallyChecked()
     *
     * inputCheckboxIndeterminate.indeterminate = true
     * expect(inputCheckboxIndeterminate).toBePartiallyChecked()
     * @see
     * [testing-library/jest-dom#tobepartiallychecked](https://github.com/testing-library/jest-dom#tobepartiallychecked)
     */
    toBePartiallyChecked(): R
    /**
     * @deprecated
     * since v5.17.0
     *
     * @description
     * Check whether the given element has an [ARIA error message](https://www.w3.org/TR/wai-aria/#aria-errormessage) or not.
     *
     * Use the `aria-errormessage` attribute to reference another element that contains
     * custom error message text. Multiple ids is **NOT** allowed. Authors MUST use
     * `aria-invalid` in conjunction with `aria-errormessage`. Learn more from the
     * [`aria-errormessage` spec](https://www.w3.org/TR/wai-aria/#aria-errormessage).
     *
     * Whitespace is normalized.
     *
     * When a `string` argument is passed through, it will perform a whole
     * case-sensitive match to the error message text.
     *
     * To perform a case-insensitive match, you can use a `RegExp` with the `/i`
     * modifier.
     *
     * To perform a partial match, you can pass a `RegExp` or use
     * expect.stringContaining("partial string")`.
     *
     * @example
     * <label for="startTime"> Please enter a start time for the meeting: </label>
     * <input id="startTime" type="text" aria-errormessage="msgID" aria-invalid="true" value="11:30 PM" />
     * <span id="msgID" aria-live="assertive" style="visibility:visible">
     *   Invalid time: the time must be between 9:00 AM and 5:00 PM"
     * </span>
     *
     *
     * const timeInput = getByLabel('startTime')
     *
     * expect(timeInput).toHaveErrorMessage(
     *   'Invalid time: the time must be between 9:00 AM and 5:00 PM',
     * )
     * expect(timeInput).toHaveErrorMessage(/invalid time/i) // to partially match
     * expect(timeInput).toHaveErrorMessage(expect.stringContaining('Invalid time')) // to partially match
     * expect(timeInput).not.toHaveErrorMessage('Pikachu!')
     * @see
     * [testing-library/jest-dom#tohaveerrormessage](https://github.com/testing-library/jest-dom#tohaveerrormessage)
     */
    toHaveErrorMessage(text?: string | RegExp | E): R
    /**
     * @description
     * This allows to assert that an element has a
     * [text selection](https://developer.mozilla.org/en-US/docs/Web/API/Selection).
     *
     * This is useful to check if text or part of the text is selected within an
     * element. The element can be either an input of type text, a textarea, or any
     * other element that contains text, such as a paragraph, span, div etc.
     *
     * NOTE: the expected selection is a string, it does not allow to check for
     * selection range indeces.
     *
     * @example
     * <div>
     * <input type="text" value="text selected text" data-testid="text" />
     * <textarea data-testid="textarea">text selected text</textarea>
     * <p data-testid="prev">prev</p>
     * <p data-testid="parent">text <span data-testid="child">selected</span> text</p>
     * <p data-testid="next">next</p>
     * </div>
     *
     * getByTestId('text').setSelectionRange(5, 13)
     * expect(getByTestId('text')).toHaveSelection('selected')
     *
     * getByTestId('textarea').setSelectionRange(0, 5)
     * expect('textarea').toHaveSelection('text ')
     *
     * const selection = document.getSelection()
     * const range = document.createRange()
     * selection.removeAllRanges()
     * selection.empty()
     * selection.addRange(range)
     *
     * // selection of child applies to the parent as well
     * range.selectNodeContents(getByTestId('child'))
     * expect(getByTestId('child')).toHaveSelection('selected')
     * expect(getByTestId('parent')).toHaveSelection('selected')
     *
     * // selection that applies from prev all, parent text before child, and part child.
     * range.setStart(getByTestId('prev'), 0)
     * range.setEnd(getByTestId('child').childNodes[0], 3)
     * expect(queryByTestId('prev')).toHaveSelection('prev')
     * expect(queryByTestId('child')).toHaveSelection('sel')
     * expect(queryByTestId('parent')).toHaveSelection('text sel')
     * expect(queryByTestId('next')).not.toHaveSelection()
     *
     * // selection that applies from part child, parent text after child and part next.
     * range.setStart(getByTestId('child').childNodes[0], 3)
     * range.setEnd(getByTestId('next').childNodes[0], 2)
     * expect(queryByTestId('child')).toHaveSelection('ected')
     * expect(queryByTestId('parent')).toHaveSelection('ected text')
     * expect(queryByTestId('prev')).not.toHaveSelection()
     * expect(queryByTestId('next')).toHaveSelection('ne')
     *
     * @see
     * [testing-library/jest-dom#tohaveselection](https://github.com/testing-library/jest-dom#tohaveselection)
     */
    toHaveSelection(selection?: string): R
    /*
     * @description
     * This allows to check whether given element has been [pressed](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
     *
     * It accepts elements with explicit or implicit `button` role and valid `aria-pressed`
     * attribute of `"true"` or `"false"`.
     *
     * @example
     * <button aria-pressed="true">Pressed</button>
     * <button aria-pressed="false">Released</button>
     *
     * <input type="button" aria-pressed="true" value="Pressed input button" />
     * <input type="button" aria-pressed="false" value="Released input button" />
     *
     * <span role="button" aria-pressed="true">Pressed span</span>
     * <span role="button" aria-pressed="false">Released span</span>
     *
     * screen.getByRole('button', { name: 'Pressed' }).toBePressed();
     * screen.getByRole('button', { name: 'Released' }).not.toBePressed();
     *
     * screen.getByRole('button', { name: 'Pressed input button' }).toBePressed();
     * screen.getByRole('button', { name: 'Released input button' }).not.toBePressed();
     *
     * screen.getByRole('button', { name: 'Pressed span' }).toBePressed();
     * screen.getByRole('button', { name: 'Released span' }).not.toBePressed();
     *
     * @see
     * [testing-library/jest-dom#tobepressed](https://github.com/testing-library/jest-dom#tobepressed)
     */
    toBePressed(): R
    /*
     * @description
     * This allows to check whether given element has been [partially pressed](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
     *
     * It accepts elements with explicit or implicit `button` role and valid `aria-pressed` of `"mixed"`.
     *
     * @example
     * <button aria-pressed="mixed">Partially Pressed</button>
     * <input type="button" aria-pressed="mixed" value="Partially pressed input button" />
     * <span role="button" aria-pressed="mixed">Partially pressed span</span>
     *
     * screen.getByRole('button', { name: 'Partially Pressed' }).toBePartiallyPressed();
     * screen.getByRole('button', { name: 'Partially pressed input button' }).toBePartiallyPressed();
     * screen.getByRole('button', { name: 'Partially pressed span' }).toBePartiallyPressed();
     *
     * @See
     * [testing-library/jest-dom#tobepartiallypressed](https://github.com/testing-library/jest-dom#tobepartiallypressed)
     */
    toBePartiallyPressed(): R
    /*
     * @description
     * This checks if a given element appears before another element in the DOM tree, as per [`compareDocumentPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
     *
     * @example
     * <div>
     *   <span data-testid="text-a">Text A</span>
     *   <span data-testid="text-b">Text B</span>
     * </div>
     *
     * const textA = queryByTestId('text-a')
     * const textB = queryByTestId('text-b')
     *
     * expect(textA).toAppearBefore(textB)
     * expect(textB).not.toAppearBefore(textA)
     *
     * @See
     * [testing-library/jest-dom#toappearbefore](https://github.com/testing-library/jest-dom#toappearbefore)
     */
    toAppearBefore(element: HTMLElement | SVGElement): R
    /*
     * @description
     * This checks if a given element appears after another element in the DOM tree, as per [`compareDocumentPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
     *
     * @example
     * <div>
     *   <span data-testid="text-a">Text A</span>
     *   <span data-testid="text-b">Text B</span>
     * </div>
     *
     * const textA = queryByTestId('text-a')
     * const textB = queryByTestId('text-b')
     *
     * expect(textB).toAppearAfter(textA)
     * expect(textA).not.toAppearAfter(textB)
     *
     * @See
     * [testing-library/jest-dom#toappearafter](https://github.com/testing-library/jest-dom#toappearafter)
     */
    toAppearAfter(element: HTMLElement | SVGElement): R
  }
}

// Needs to extend Record<string, any> to be accepted by expect.extend()
// as it requires a string index signature.
declare const matchers: matchers.TestingLibraryMatchers<any, void> &
  Record<string, any>
export = matchers
