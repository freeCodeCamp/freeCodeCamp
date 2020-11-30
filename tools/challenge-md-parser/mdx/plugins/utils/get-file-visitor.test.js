describe('get-file-visitor', () => {
  it('should join code with newlines', () => {
    /* i.e. if you've got two js code blocks it should do this

    ```js
    one
    ```

    ```js
    two
    ```

    become

    ```js
    one
    two
    ```

    not

    ```js
    onetwo
    ```
    or
    ```js

    one
    two
    ```
    */
  });
});
