---
title: Write and Run Es6 Code in the Browser
---
> Include the following code in the page.

    <!-- Write these first. Here `bootstrap.js` doesn't mean Twitter Bootstrap. -->
    <script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script>
    <script src="https://google.github.io/traceur-compiler/src/bootstrap.js"></script>

    <!-- Edit the src. Write `type="module"` (important) for linked script -->
    <script src="app.js" type="module"></script>

    <!-- Remember to write `type="module"` for embedded script -->
    <script type="module">
        //→ write your script here
    </script>

**See:** <a href='https://github.com/google/traceur-compiler/wiki/Getting-Started' target='_blank' rel='nofollow'>Traceur Compiler Getting Started</a>

**Demo:** <a href='https://github.com/abhisekp/JS-Weird-Parts/tree/109ab3b0c94d1fbf9bbc402dd36e9bca60d5b456' target='_blank' rel='nofollow'>ES6 Demo Repo Source</a>