## Vue.js Directives

Directives are like HTML attributes added inside templates. They start with `v-` to indicate that it is a Vue special attribute. 
There are two types of directives: built-in and user defined.

Directive attribute values are expected to be a single JavaScript expression. Their job is to reactively apply side effects to the DOM when the value of its expression changes.

## List of built-in directives

- v-text - updates the element's `textContent`

    ```
    <span v-text="msg"></span>
    ```
- v-html - updates the element's `innerHTML`. Content is inserted as plain HTML.

  ```
  <div v-html="html"></div>
  ```
- v-show - depending on truthy-ness of binding value will set the element's display to `none` or its original value

  ```
  <div v-show="isTrue">
    This element is displayed.
  </div>
  <div v-show="isFalse">
    This element will have display sets to none.
  </div>
  ```
- v-if, v-else and v-else-if - conditionally render the element based on the truthy-ness of the expression value

  ```
  <div v-if="Math.random() > 0.5">
    There is 50 % chance that you see me.
  </div>
  <div v-else>
    And 50 % that you see this.
  </div>
  ```
- v-for - render the element or template block multiple times based on the source data

  ```
  <div v-for="user in users">
    {{ user.name }}
  </div>
  ```
- v-on - attaches an event listener to the element

  ```
  <button v-on:click="handleClick">Click me</button>
  ```
- v-bind - dynamically bind one or more attributes or components prop to an expression

  ```
  <span v-bind:class="bold: isImportant">
    Text will be bold if isImportant value is truthy-ness.
  </span>
  ```
- v-model - create a two-way binding on a form input element or a component


**Source**: [Official vue.js documentation](https://vuejs.org/v2/api/#Directives)
