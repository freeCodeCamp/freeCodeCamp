---
title: Sass Syntax and Tools
---
_"An artist is only as good as his tools."_

That's not necessarily true, but the tools we use can sure make our lives easier and our tasks more managable. Imagine writing code with no keyboard shortcuts or snippets available! Not the end of the world, but you get the gist.

The "tools", or more commonly refered to as directives, we will be discussing are actually built-in features that come bundled with Sass and can help us as developers to write DRY-er (Don't Repeat Yourself) and cleaner code.

_If you would like to follow along in your own text editor, I recommend installing a **Sass syntax-highlighter**. Atom and Sublime Text as well as a few other editors support these._

## Variables

If you have written code in another programming language (JavaScript, Python, Java, C, etc.) then you're familiar with the concept of variables. If not, then variables are basically statements declared that can store some kind of value like a number or string.

In Sass, variables work essentially the same way and can be declared with a "$" character next to the name of the variable:

    $main-color: #CCCCCC;

The variable above is storing the hex color code for a tone of gray. We can declare this variable inside any `.scss` or `.sass` file that we're working in. We can also incorporate the variable into a tag (HTML5 tag, ID, class, pseudo selectors) when styling:

    $main-color: #CCCCCC;

    header {
      background-color: $main-color;
    }

In this code snippet, we have assigned the value of the header's `background-color` to the value stored in `$main-color`, which (when Sass compiles to CSS) is output as:

    header {
      background-color: #CCCCCC;
    }

Neat! But couldn't we just have set the `background-color` to `#CCCCCC` in the first place? The answer is yes, but there's more to it than that.

Let's say we're styling a multi-page website for a client and we just finished picking out a simple three-color "color scheme". Our navigation bar, footer are one color, and perhaps our article elements, paragraphs, and headers are one of the remaining two colors. Then one day the client changes his/her mind the color scheme we selected, and wants it changed. Great.

So then we are tasked with going through our multiple stylesheets (or maybe one massive stylesheet if you prefer that) and changing all those color values. Maybe we mix one up. Or maybe we miss one and have to keep going back to fix them.

With variables (and the use of Sass partials which we will discuss later) we can adjust the values on the variable declarations, and everywhere else we used the variables in our stylesheet(s) the values will change to reflect the variable assignment we changed. This only one example of how handy variables can be when used accordingly in Sass. Variables become more crucial as we add to our Sass toolbelt.

On that note, let's tackle mixins.

## Mixins

A mixin is a block of re-usable code that can take arguments, much like a function in JavaScript can. However, it is not to be confused with the actual `@function` feature in Sass.

Mixins are declared by prefixing the "@" character in front of the word "mixin", then the name of the mixin. Below is an example of a mixin called btn which takes two arguments and applies them to CSS properties:

    @mixin btn($color, $text-color) {
      background-color: $color;
      color: $text-color;
      padding: 1em;
    }

After writing out a mixin, nothing will happen by default because we have not put the mixin to use (similar to writing a function vs. calling a function). Let's integrate our mixin. We will include it in an HTML5 `button` selector using the `@include` statement:

_The `@include` statement lets us bring in our mixin styling into a CSS selector of our choice. In this case, the `button` selector with the values blue and white passed in as arguments._

    button {
      @include btn(blue, white);
    }

Which is something we can use in any other HTML selector if we chose to. This would compile down to:

    button {
      background-color: blue;
      color: white;
      padding: 1em;
    }

Just by using the single line `@include btn(blue, white);` inside our button selector, we can bring in all the code written out inside our mixin with blue and white passed in as arguments. Additionally, we can set default values for the arguments passed to a mixin. For example, say we wanted our button mixin to default to a specific color and font color if no values were passed when called:

    @mixin button($color: green, $text-color: red) {
      background-color: $color;
      color: $text-color;
      padding: 1em;
    }

By typing in a ":" followed by the default value we want to set, we have assigned green as a default value for our `$color` argument, and red as a default value for our `$text-color` argument.

Now if we were to call our mixin without passing any values...

    button {
      @include btn;
    }

This compiles down into:

    button {
      background-color: green;
      color: red;
      padding: 1em;
    }

If we wanted to put our variables to use with our mixin, we could do so as well:

    $main-color: #CCCCCC;
    $second-color: #FFFFFF;

    @mixin button($color: $main-color, $text-color: $second-color) {
      background-color: $color;
      color: $text-color;
      padding: 1em;
    }

In the example above, we declare two variables with distinct hex color values, then set the arguments `$color` and `$text-color` to default to our variables if no argument is passed.

It's often considered a good practice to set default values for a mixin, but definitely not necessary. You will find that many developers have their own way of writing out code and varying opinions on what is considered the "best".

The fun won't stop here. There's a good handful of other useful tricks we can perform when writing out mixins and an endless amount of possibilities in how to write them. What is important to take away from mixins is that they serve as modules or "objects" in which we can declare certain styles, pass values, and re-use in our code where need be instead of continuously repeating ourselves while styling different elements. They can help us stay truer to the DRY principle.

## Extends

The last tool we will discuss is the extend directive. Extends can be used to duplicate a style we have applied previously to another element. However, there is much more happening behind the scenes when implementing an extend and this can produce some unintended side-effects on our styling if we are not careful.

Below is an example of an extend directive being put to use:

    .primary-module {
      color: red;
    }

    .another-module {
      @extend .primary-module;
    }

    // This ouputs the following CSS

    .primary-module, .another-module {
      color: red;
    }

Nothing too shady going here yet. We have a selector targeting `.another-module` which uses an extend to clone styling which was applied to the selector `.primary-module`. This outputs a styling of `color: red;` being applied to the class `.primary-module` and `.another-module`. Logical so far and a tool that has a similar effect to including a mixin on several elements that need to share the same styling.

Now let's take a closer look at a different example and pick out where an extend directive complicates a bit:

    .primary-module p {
      color: red;
    }

    .another-module {
      @extend .primary-module;
    }

    // This outputs the following CSS

    .primary-module p, .another-module p {
      color: red;
    }

Did you catch it? The selector of `.another-module` is using an extend on the `.primary-module p` selector. Note that because `.primary-module` has a descent selector of `p` (paragraph tag), when the extend is called and our Sass code is compiled, the style of `color: red;` is being applied to `.primary-module p` and `.another-module p`.

What's happening is that the extend directive is not only cloning the style from `.primary-module p`, but it is cloning the descent selector tag of `p` and adding that to `.another-module`. We are copying the styling and the descendant selector of what we borrowed from. As a result, the style we extended is being applied to paragraph elements which are descendants of `.another-module` and not simply on elements with a class of `.another-module`.

You can see where something like this can get hairy if we're not aware of what extend is doing.

So we've taken look behind the curtains on extends and now you may be thinking _What's the point of using extends? Is it worth it or can I just use mixins?_

The short answer (there is much more to be said on this topic) is that often extends will be used to purposefully tap into inheritance of styles being applied to other elements or to make particular use of what is known as **silent classes** in Sass. Extends can generally accomplish what mixins can when used carefully, but one should not be thoughtlessly used in place of another. Practice extends and use them with a specific purpose in mind.

As for silent classes, this is something which will hopefully be covered in an upcoming section to this article. For now just know that silent classes are selectors in Sass which are prefixed with a "%" character and will not be compiled at all unless called by an extend.

## Conclusion

If you've made it to the end of this article, you deserve some recognition. I wrote this in the hopes of explaining Sass in a way that I wish it would've been taught to me when I first began messing around with it. If CSS is something you struggle with or have always felt apprehensive towards because of how quickly it becomes a mess, then hopefully Sass will begin to alleviate some of those frustrations.

This article is meant as a "crash course" of sorts to get your feet wet in the world of Sass. There is still a significant amount of tools and features that make Sass shine, as well as best practices when it comes to **structuring your stylesheets and breaking them up into partials**.

My advice is to start sandboxing in your own text editor and on <a href='http://www.sassmeister.com/' target='_blank' rel='nofollow'>Sassmeister</a> to get more comfortable with the concepts this article has covered. Also be on the lookout for the Free Code Camp Sass course coming soon.

Get out there and level up your Sass game.