# Mousetrap

Mousetrap is a simple library for handling keyboard shortcuts in Javascript.

It is licensed under the Apache 2.0 license.

It is around **2kb** minified and gzipped and **4.5kb** minified, has no external dependencies, and has been tested in the following browsers:

- Internet Explorer 6+
- Safari
- Firefox
- Chrome

It has support for ``keypress``, ``keydown``, and ``keyup`` events on specific keys, keyboard combinations, or key sequences.

If you would like to donate to help support Mousetrap development use [Gittip](https://www.gittip.com/ccampbell).

## Getting started

1.  Include mousetrap on your page before the closing ``</body>`` tag

    ```html
    <script src="/path/to/mousetrap.min.js"></script>
    ```

2.  Add some keyboard events to listen for

    ```html
    <script>
        // single keys
        Mousetrap.bind('4', function() { console.log('4'); });
        Mousetrap.bind("?", function() { console.log('show shortcuts!'); });
        Mousetrap.bind('esc', function() { console.log('escape'); }, 'keyup');

        // combinations
        Mousetrap.bind('command+shift+k', function() { console.log('command shift k'); });

        // map multiple combinations to the same callback
        Mousetrap.bind(['command+k', 'ctrl+k'], function() {
            console.log('command k or control k');

            // return false to prevent default browser behavior
            // and stop event from bubbling
            return false;
        });

        // gmail style sequences
        Mousetrap.bind('g i', function() { console.log('go to inbox'); });
        Mousetrap.bind('* a', function() { console.log('select all'); });

        // konami code!
        Mousetrap.bind('up up down down left right left right b a enter', function() {
            console.log('konami code');
        });
    </script>
    ```

## Why Mousetrap?

There are a number of other similar libraries out there so what makes this one different?

- There are no external dependencies, no framework is required
- You are not limited to ``keydown`` events (You can specify ``keypress``, ``keydown``, or ``keyup`` or let Mousetrap choose for you).
- You can bind key events directly to special keys such as ``?`` or ``*`` without having to specify ``shift+/`` or ``shift+8`` which are not consistent across all keyboards
- It works with international keyboard layouts
- You can bind Gmail like key sequences in addition to regular keys and key combinations
- You can programatically trigger key events with the ``trigger()`` method
- It works with the numeric keypad on your keyboard
- The code is well documented/commented

## Tests

Unit tests run via <a href="http://mochajs.org/" target="_blank">mocha</a>.

### Running in browser

Download the repo and go to `tests/mousetrap.html` in your browser.

### Running with Grunt and PhantomJS

1.  Install grunt-cli

    ```bash
    npm install -g grunt-cli
    ```

2.  Install npm packages

    ```bash
    cd /path/to/repo
    npm install
    ```

3.  Run tests

    ```bash
    grunt mocha
    ```

## Documentation

Full documentation can be found at https://craig.is/killing/mice
