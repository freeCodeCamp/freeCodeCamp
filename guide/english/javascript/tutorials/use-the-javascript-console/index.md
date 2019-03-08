---
title: Use the JavaScript Console
---
Both Chrome and Firefox have excellent JavaScript consoles, also known as DevTools, for debugging your JavaScript.

You can find Developer tools in your Chrome's menu or Web Console in FireFox's menu. If you're using a different browser, or a mobile phone, we strongly recommend switching to desktop Firefox or Chrome.

You can also use <a href='https://repl.it/' target='_blank' rel='nofollow'>https://repl.it/</a> to run code online.

This is how you print to the console:

    console.log('Hello world!')

Also You can print an error log in the console with this code:

    console.error('I am an error!')

Or you can print warning logs with the following code:

    console.warn('I am a warning!')

If you want to group multiple console messages, you can use the `console.group`:

    console.group();
    console.log('Nothing happend yet...');
    console.log('Yet nothing to report');
    console.warn('Warning! Something went wrong');
    console.groupEnd();
    console.error('I am not part of the group');
    
Above example of the group is not collapsed by default, if you want to, use `console.groupCollapsed` instead.

#### More Information
- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Console" target="_blank" rel="noopener noreferrer">MDN</a>

