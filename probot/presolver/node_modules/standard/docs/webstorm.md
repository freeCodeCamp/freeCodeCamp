# [WebStorm][webstorm-1] configuration for Standard Style

## Native support for `standard`

WebStorm [recently announced native support](https://blog.jetbrains.com/webstorm/2017/01/webstorm-2017-1-eap-171-2272/)
for `standard` directly in the IDE!

This applies to all JetBrains products, including PhpStorm, IntelliJ, RubyMine, etc.

If you still prefer to configure `standard` manually, use the following guide.

## Configure `standard` support manually

1. Close your IDE.
2. [Figure out where your configuration lives][webstorm-2] (_IDE Settings_ section)
3. Navigate to `your-config-dir/codestyles`. If this directory doesn't exist,
   create it in the WebStorm config settings directory
4. Create a `Standard.xml` file:
  ```xml
    <code_scheme name="Standard">
      <JSCodeStyleSettings>
        <option name="USE_SEMICOLON_AFTER_STATEMENT" value="false" />
        <option name="USE_DOUBLE_QUOTES" value="false" />
        <option name="SPACES_WITHIN_IMPORTS" value="true" />
      </JSCodeStyleSettings>
      <codeStyleSettings language="JavaScript">
        <option name="KEEP_BLANK_LINES_IN_CODE" value="1" />
        <option name="SPACE_BEFORE_METHOD_PARENTHESES" value="true" />
        <option name="KEEP_SIMPLE_BLOCKS_IN_ONE_LINE" value="true" />
        <option name="KEEP_SIMPLE_METHODS_IN_ONE_LINE" value="true" />
        <indentOptions>
          <option name="INDENT_SIZE" value="2" />
          <option name="CONTINUATION_INDENT_SIZE" value="2" />
          <option name="TAB_SIZE" value="2" />
        </indentOptions>
      </codeStyleSettings>
    </code_scheme>
  ```

5. You may install dependencies and config globally or locally and with support of ES7 or without it
  - **Local** install:
    - `npm install --save-dev eslint-config-standard eslint-config-standard-jsx eslint-plugin-promise eslint-plugin-react eslint-plugin-standard`
    - `echo '{"extends": ["standard", "standard-jsx"]}' > .eslintrc`
  - **Global** install:
    - `npm install --global eslint-config-standard eslint-config-standard-jsx eslint-plugin-promise eslint-plugin-react eslint-plugin-standard`
    - `echo '{"extends": ["standard", "standard-jsx"]}' > ~/.eslintrc`

  Be aware: The second command above will overwrite an existing `.eslintrc` if one exists.

  If you choose global install, the first command may require you to use `sudo`. If
  it does require sudo, that means you do not have permission to write to the
  directories that npm uses to store global packages. `Standard` will work, but if
  you would like to fix it, [read this article][npm-article].

6. Start up the IDE and open a _Settings_/_Preferences_ screen (choose between project and default settings accordingly to your preference)
7. Under `Editor > Code Style > JavaScript` change `Scheme` to `Standard`
8. Under `Editor > Code Style > HTML` just select `Other`, in `Spaces` setting, check `In empty tag`
9. Under `Editor > Inspections > JavaScript > Code style issues` untick `Unterminated statement`
10. Under `Languages & Frameworks > JavaScript > Code Quality Tools > ESLint` just select `Enable`. If you didn't install `ESLint` before and you don't have it in your dependencies - that's all. If you do - be sure to use `ESLint package` of the same version as current version of `standard` is using. Or just remove your old one - you probably won't need it anymore

---

[npm-article]: https://docs.npmjs.com/getting-started/fixing-npm-permissions
[webstorm-1]: https://www.jetbrains.com/webstorm/
[webstorm-2]: https://www.jetbrains.com/help/phpstorm/2016.1/directories-used-by-phpstorm-to-store-settings-caches-plugins-and-logs.html?origin=old_help#d66583e60
