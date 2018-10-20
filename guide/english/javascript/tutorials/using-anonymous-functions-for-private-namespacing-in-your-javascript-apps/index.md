---
title: Using Anonymous Functions for Private Namespacing in Your JavaScript Apps
---
Let's take a look at what a namespace is when it comes to building JavaScript applications and some of the benefits from using a private namespace when building your apps.

**Please note that this article references anonymous self-executing functions. If you're unaware of what this is, please read this excellent article by Noah Stokes: <a href='http://esbueno.noahstokes.com/post/77292606977/self-executing-anonymous-functions-or-how-to-write' target='_blank' rel='nofollow'>Self-Executing Anonymous Functions or How to Write Clean Javascript</a>. This article will go into detail about anonymous self-executing functions.**

## What is a Namespace?

To put it simply, a namespace is just a section of code that has its own space. When you first begin writing JS apps, you generally just type the code out and run it. This puts all of the code into what's known as the **global namespace**, which contains all of the code for the window you're working in.

If you keep all of your code in the **global namespace**, though, you can run into problems with collisions, naming conventions, etc. especially in large JS applications/games.

Let's take a look at an example of how using only the **global namespace** to develop a game is a bad idea.

So, let's say we have a game that is keep tracking of the points that the player has:

    var points = 0;

A lot of games track points to add a competitive edge to the game. By simply typing that line into a script, we've created a variable named _points_ that can track the points gained by the user.

And that's all fine and well, but let's say that we have a more advanced user playing the game. This user knows how to look at the source of a web page, and so this person takes a peek at the source behind the JS game and realizes that the _points_ variable is just sitting there in the **global namespace**. An evil smirk descends across their face as they contemplate the points they can achieve! They decide that they don't want to wait to beat some baddies up, or smash some mushrooms, or what have you, to rack up a bunch of points. They want their points now! Well, how does _a quadrillion billion million_ points sound?! So, they load up the console on their favorite browser, and simply type into the console:

    points = 34750925489459203859095480917458059034;

Once the user hits enter, the _points_ variable is updated in the game. Now, the user has a truly humongous, and likely unrealistic, amount of points in the game, and he can brag to his friends that no one can possibly beat his awesome score.

So, how do we prevent this from occurring? This is where **private namespaces** come into play.

## Private Namespaces

**Private namespaces** allow developers to put their code into sections (or **namespaces**). These sections operate independently of each other but can still read and write from the **global namespace**.

To break this down into simpler terms from a real life scenario, let's say you are working in an office building. You have your own office, and you see others with their own offices. Each office is locked, and only the person who owns the office has a key to this office. Let's also say that you have some type of new super lock that makes your office impenetrable by any other person in the building. Let's consider the office building itself as the **global namespace** and each office as a **private namespace**. You don't have access to anyone else's office nor do they have access to yours. But, each one of you have access to the rest of the office building, whether that's getting coffee, grabbing a snack, etc. Each one of you can grab something from the **global namespace** (or create/modify something there), but you can't create/modify/grab anything from each other's offices; you can only create/modify/grab from your own **private namespace**/office.

## Achieving a Private Namespace

So, how do we achieve this **private namespace** in JavaScript? Use an anonymous self-executing function! If you didn't read the article by Noah Stokes, <a href='http://esbueno.noahstokes.com/post/77292606977/self-executing-anonymous-functions-or-how-to-write' target='_blank' rel='nofollow'>Self-Executing Anonymous Functions or How to Write Clean Javascript</a>, please do so now. This article will go into detail about anonymous self-executing functions.

Let's take a look at using that _points_ variable from earlier, but let's separate it into a **private namespace**:

    //The most common way you'll see an anonymous self-executing function
    (function () {
        var points = 0;
    })();

    //This is just one of many more alternative ways to use an anonymous self-executing function
    /*
    !function () {
        var points = 0;
    }();
    */

Now, when the user gets to the page, they will be unable to open up the console in their browser and change the value of the points variable as they wish! Awesome!

## Namespace and Document Interaction

The above code was but one use for using an anonymous self-executing function to give code its own **private namespace**. Keep in mind that namespaces only affect JS code (variables/arrays/objects/etc.), not code that pertains to the document itself.

Any code within a namespace still has the same access to the HTML document, and CSS, as you would normally in the **global namespace**. Take a look at the next two code samples. They both perform the same functionality, and neither is more beneficial, or more efficient, than the other.

    <script type="text/javascript">
        (function () {
            document.querySelector('body').style.background = 'blue';
        })();
    </script>

is the same as:

    <script type="text/javascript">
        document.querySelector('body').style.background = 'blue';
    </script>

Keep in mind that this is just one way to use namespaces in JavaScript applications. Adapt your code to what best fits the situation at hand.