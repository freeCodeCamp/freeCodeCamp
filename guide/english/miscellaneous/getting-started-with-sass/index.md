---
title: Getting Started with Sass
---
### Introduction

Sass stands for "Syntactically Awesome Stylesheets" and is a CSS Pre-Processor. A Pre-Processor compiles code written in a specific language down to "product" code that is machine-readable (browser-readable). Basically, Sass compiles code down to regular CSS that our browsers can interpret! _Why write code in Sass when CSS already exists?_ The short answer is Sass comes with more powerful features built into its syntax that allow developers to write DRY-er, scalable, and more maintainable front-end code.

If you're familiar with CSS, then learning Sass will come a little easier to you. If not, it might be ideal to start learning some CSS basics on Free Code Camp's HTML5 & CSS section in their Front End Development Certification course, as well as taking a look at <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' rel='nofollow'>MDN's CSS Article</a>.

In Part 1 of this article, I will explain how to get Sass installed on your computer and how to compile your Sass-written code into CSS.

## Installation

The simplest way to install Sass onto your machine is through the command line. Sass is a Ruby gem and will require the following command:

For Macs and PCs:

`sudo gem install sass`

For Linux you will need to install the Ruby language first, then:

`sudo su -c "gem install sass"`

You should now be able to check the version of Sass installed:

`sass -v`

And it should return something similar to:

`Sass 3.4.21 (Selective Steve)`

If so, congrats, you've just installed Sass! Now onto using Sass.

## Basic Use & Syntax

Let's begin with a very simple example to illustrate how Sass actually works. You can follow along with the steps or simply read along.

_An import sidenote: Sass can be written in two slightly different styles, each of which has its own benefits. One style will use the file extension_ `.sass` _and the other will use_ `.scss`. _Brief explanations will be given on the differences of the two styles later on. For an in-depth explanation, check out John W. Long's_ <a href='http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better' target='_blank' rel='nofollow'>Sass vs. SCSS article</a>.

_For the sake of consistency, this article will provide code examples in `.scss` format, however both styles are equally popular._

Alright, let's get started. We will create a new folder to house our example files (you may do this anywhere on your computer, and can use the command line or do this manually).

In the folder, we will create a file called `style.scss` and an HTML file to style called `index.html`:

_The `tree` command in the image above is from an npm package you can install and is not native to the command line. The `ls` command essentially does the same._

Now that we have our project folder setup, we can use the Sass watch command to "keep an eye" on our Sass file and compile our code when it detects a change in the file. We type in the watch command on the file we want to watch:

`sass --watch style.scss`

The next step is to open up the project folder in your text editor of choice. Once we have our files opened and ready for editing, we can add in a very basic HTML page (for us to style) which will look like the following:

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Sass!</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <article>
        <h1>Hello World</h1>
        <p class="cat-paragraph-1">Cat ipsum dolor sit amet, stand in front of the computer screen, so chase imaginary bugs has closed eyes but still sees you caticus cuteicus.</p>
        <p class="cat-paragraph-2">Drink water out of the faucet chew on cable or if it fits, i sits roll on the floor purring your whiskers off.</p>
      </article>
    </body>
    </html>

After setting up the HTML we can open up our `style.scss` file and begin styling in Sass. In the sample code below, you will probably notice how some the style selectors are nested within the article selector; something unique to Sass. Don't fret, the syntax will be explained in Part 2\. For now we just want to acquire an understanding of how Sass works in its simplest form.

    article {
      h2 {
        font-family: Arial;
        color: blue;
      }
      .cat-paragraph-1 {
        color: red;
      }
      .cat-paragraph-2 {
        color: green;
      }
    }

Once that code has been typed and saved into the `style.scss` file, the watch task we punched into the command line will have detected a change in the file, compiled our Sass to CSS, and output a new file titled `style.css`. You may also see a file called `style.css.map` in your project folder that has magically appeared as well. This file is called a sourcemap and is of great use when debugging Sass, but for now we'll just leave it be.

Below we can see the files listed in the project folder.

And now if we open up `index.html` in a web browser, we can see our HTML page styled using CSS which was compiled from the sample Sass code. Similarly, we can open up the `style.css` file to see how Sass output the original Sass code. Compact, isn't it?

## Where To Go From Here?

_Great! Now I know how to compile Sass on my computer. Is that it?_

Not by a long shot. This was a bare-bones example of how Sass works, therefore the benefits of writing in Sass over vanilla CSS may not be apparent. We wrote 12 lines of "Sass" and got 7 lines of CSS as a result. Not exactly a major difference by any standards. In Part 2 we will explain the **magic** behind Sass syntax such as variables and mixins, and how the use of such tools can lend us superpowers when styling.

If you're still stuck on how Sass is magically compiling down into CSS or maybe you would like to mess with sample code some more, <a href='http://www.sassmeister.com/' target='_blank' rel='nofollow'>Sassmeister</a> is a great online interface which lets you write in Sass syntax and instantly see your code compiled into CSS without having to install anything or do any setup on your computer. It's a very useful resource for sandboxing and trying out your Sass code.