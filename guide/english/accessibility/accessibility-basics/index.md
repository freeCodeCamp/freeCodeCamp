---
title: Accessibility Basics
---

## Accessibility Basics

> "The Dark Arts are many, varied, ever-changing, and eternal. Fighting them is like fighting a many-headed monster, which, each time a neck is severed, sprouts a head even fiercer and cleverer than before. You are fighting that which is unfixed, mutating, indestructible."
>
> --Professor Severus Snape, Harry Potter Series

Accessibility's role in development is essentially understanding the user's perspective and needs, and knowing that the web, and applications are a solution for people with disabilities.

In this day and age, more and more new technologies are invented to make the life of developers, as well as users, easier. To what degree this is a good thing is a debate for another time, for now it's enough to say the toolbox of a developer, especially a web developer, is as ever-changing as the so called "dark arts" are according to our friend Snape.

One tool in that toolbox should be accessibility. It is a tool that should ideally be used in one of the very first steps of writing any form of web content. However, this tool is often not all that well presented in the toolbox of most developers. This could be due to a simple case of not knowing it even exists to extreme cases like not caring about it.

In my life as a user, and later a developer, who benefits from accessibility in any form of content, I have seen both ends of that spectrum. If you are reading this article, I am guessing you are in one of the following categories:

*   You are a novice web developer and would like to know more about accessibility.
*   You are a seasoned web developer and have lost your way (more on that later).
*   You feel that there is a legal obligation from work, and need to learn more about it.

If you fall outside these rather broad categories, please let me know. I always like to hear from the people who read what I write about. Implementing accessibility impacts the entire team, from the colors chosen by the designer, the copy written by the copywriter, and to you, the developer.

## So, what is accessibility anyway?

Accessibility in itself is a bit of a misleading term sometimes, especially if English is your second language. It is sometimes referred to as inclusive design.

If your site is on the Internet, reachable by anyone with a web browser, in one sense that website is accessible to everyone with a web browser.

But, is all content on your website actually readable, usable and understandable for everyone? Are there no thresholds that bar certain people from 'accessing' all the information you are exposing?

You could ask yourself questions like the following:

*   If you add information that is only contained in an audio file, can a deaf person access that information?
*   If you denote an important part of your website with a certain color, will a colorblind person know about it?
*   If you add images on your website that convey important information, how will a blind or low-vision person know about it?
*   If you want to navigate the application with keyboard or mouth-stick, will it be possible and predictable?
*   Does your application assume the orientation of the device, and what if the user can't physically change it?
*   Are there forgiving timed aspects of your application when someone might need more time to fill in a form?
*   Does your application still work (progressive enhancement) assuming that JavaScript does not load in time?
*   If your website is very resource-heavy, will someone on an older device with a slow or spotty connection be able to access your content?

This is where accessibility comes into play. Accessibility basically entails making your content as friendly, as easy to 'access' as possible for the largest amount of people. This includes people who are older, deaf, low-vision, blind, dyslexic, colorblind, have epilepsy, have mental fatigue, have physical limitations, cannot afford new devices or high-speed connections, etc.

## Why implement accessibility?

You may think that accessibility doesn't apply to you or to your users, so why implement it? What would a blind person do with a photo editing tool?

The truth is, you're right to a certain degree. If you have done meticulous user research and have excluded any chance of a certain group of people visiting your website, the priority for catering to that group of people diminishes quite a bit.

However, doing this research is key in actually defending such a statement. Did you know there were <a href='http://audiogames.net' target='_blank' rel='nofollow'>blind gamers?</a> and even <a href='http://peteeckert.com/' target='_blank' rel='nofollow'>blind photographers</a>? Perhaps you knew <a href='http://mentalfloss.com/article/25750/roll-over-beethoven-6-modern-deaf-musicians' target='_blank' rel='nofollow'>musicians can be deaf</a>?

If you did, good for you. If not, I guess this drives my point home all the more.

The picture gets even more complicated when we look at legislation that actually forces you to make certain websites and web apps accessible. A prime example is the US-based <a href='http://jimthatcher.com/webcourse1.htm' target='_blank' rel='nofollow'>section 508</a>. Right now, this law mainly refers to government organizations, public sector websites etc. However, laws change.

Last year, airline websites were included in this list which meant that even here in Europe, airline website devs scrambled to make their content accessible. Not doing so can get your company a fine of literally tens of thousands of dollars for each day the problem isn't fixed.

There are variations on this legislation all over the world, some more severe and all-encompassing than others. Not knowing about that fact doesn't make the lawsuit go away, sadly.

## Ok, so accessibility is a big deal. Now how do we implement it?

That question, sadly, is harder to answer than it may seem. The Harry Potter quote at the top is there for a reason, and it's not my being an avid Fantasy reader.

As I stated above, accessibility is important for a large group of different people, each with their own needs. Making your website work for literally everyone is a large, on-going task.

The Web Content Accessibility Guidelines or <a href='https://www.wuhcag.com/web-content-accessibility-guidelines/' target='_blank' rel='nofollow'>WCAG</a> were composed to help developers create accessible content. This document contains a number of criteria you can use to check your website. For now, I will cover some of the most important basics here. I will point you at the low-hanging fruits, so to speak. In subsequent articles, I will discuss more advanced techniques like [WAI-ARIA] which is important for JavaScript-based apps.

### Talk like the natives

The HTML specification is a document that describes how the language should be used to build websites. Assistive technologies, like screen-readers, speech recognition programs etc. are aware of this document. Web developers however, often are not, or at least not enough, and think something like this is ok:
```html
    <div class="awesome-button"></div>

    <span><strong>Huge heading I will style with CSS later</strong></span>

    <span class="clickable-with-JavaScript">English</span>
```
Guess what? All three of these elements break several criteria of WCAG and therefore are not accessible at all.

The first element breaks the so-called 'name, role, value'-criterium, which states that all elements on a web page should expose their name, their role (like button) and their value (like the contents of an edit field) to assistive technologies. This div actually doesn't provide any of the three, rendering it invisible to screen-readers.

The second element looks like a heading visually after styling it with CSS, but semantically is a span. Therefore, assistive technologies won't know it's a heading. A screen-reader will read this as regular text, instead of a heading. Screen-readers often have a hotkey to quickly jump to the nearest heading, this heading will not be included in that scope.

The third element could for example be an element a user can click to change the language of the website. Maybe a fancy animated menu of languages will expand when it is clicked. However, this is also a span and does not expose its role (link, or button), making assistive technologies think this is just the word English with some styling.

Spans and divs are non-elements. They are meant to contain other elements, not to be elements themselves. You can fix these in two ways:

*   You can manually add ARIA-attributes to the elements above. This is an advanced topic and outside the scope of this article.
*   Or, you can simply do this:
```html
    <button>This is a button</button>

    <h2>Here's a heading level two</h2>

    <a href="JavascriptThing">English</a>
```
Boom. Suddenly, all these elements are now perfectly accessible, just by using native HTML. HTML the way it was meant to be used, in other words.

### How do pages begin?
```html
    <html lang="en-us">
```
We copy it from some template and mostly don't even know it is there. These words tell the screen-readers what language to read. When your site is in English, there is no problem. But when you write your site in another language and you forget you actually have this tag, blind readers will have to listen to an English person reading another language like it is English... So be aware of this little tag that can mean the world to some visitors.

### A foundation cannot stand without structure

A bit earlier, I touched upon a screen-reader's hotkeys to jump from heading to heading. There are in fact many hotkeys like this to quickly jump to the nearest table, form field, link etc. Making sure these headings are actually in logical places is therefore a good practice and really decreases your assistive technology users' stress levels, which is good if you want visitors to keep coming back to your website.

Also remember that headings are hierarchical. If you use an h2, make sure the h3's that follow it actually have something to do with that h2\. Don't put an h3 for contact details under your h2 for recent blog posts. A good analogy here is a book with chapters, that have subsections. You wouldn't put a section on baking cookies in the middle of a chapter on preparing vegetables ...or ...you wouldn't... right?

### What's the alternative?

Images on a website are great. They add a new layer to your content; can really make the experience your site visitors have way more immersive and generally just look good among all that text. A picture can say more than a thousand words, right?

Certainly. That is, if you can see them. In the HTML5-specification, an img-attribute must always have an alt-attribute. This attribute is meant as an alternative to the image in case it can't be seen. This would be true for blind visitors to your website, but also when your image can't be loaded for some reason. Not adding an alt-tag to an img-attribute is therefore not only breaking accessibility, but going against the HTML5-spec.

I implore any web developer who catches themselves doing this to eat their programmer's hat and work on Windows 95 exclusively for a week. After the time is up, write an essay on what you have learned from this ordeal so I can have a laugh during my afternoon coffee.

Now, there is one caveat here. Alt-attributes are mandatory according to the HTML5-spec, but it's not mandatory to actually fill them in. `<img src="awesome-image.jpg", alt="">` is therefore legal HTML5 code.

Should you therefore fill in alt-tags for all images? It depends on the image, really. For background images, the answer is usually no, but you should use CSS for those anyway.

For purely decorative images that have no information in them at all, you're basically free to choose. Either put in something useful and descriptive or nothing at all.

For images that contain information, like a brochure, a map, a chart etc., not adding alt text breaks WCAG unless you provide a textual alternative. This is usually an alt-attribute, but can also be a block of text right below or next to the image.

For images of text, the text can either be included in the alt-attribute or offered in some alternative manner. The problem is that adding the textual alternative on the same page would basically make the same content show twice for people who can see the image, which is why the alt-attribute is better in this case.

The text should provide the context and information that is an alternative to seeing the image. It is simply not enough to write "image of hot air balloons" - why are the balloon pictures there? If the image is stylized or conveys an emotional meaning, this can be included.

### I can't read your scrawl, son

Even people who don't wear glasses and have no problem with their eyesight at all benefit from an easy to read font and proper contrast. I'm sure you would cringe if you had to fill in a form where light yellow, hopelessly loopy letters are placed on a white background. For people whose eyesight is not as good, like your grandma, for example, this becomes hopelessly worse.

The WCAG has contrast ratios for smaller and larger letters and there's plenty of tools out there to check if the contrast ratios are strong enough. The information and tooling are there, go use it.

A good place to start checking color contrast is by using the [WebAIM](https://webaim.org/resources/contrastchecker/) color contrast checker.

### What does this button do?
While we are on the topic of forms, let's quickly glance at the <code>input</code> tag. This little guy is kind of important.  

When you put some input fields on a web page, you can use labels to ...well ...label them. However, putting them next to each other is not quite enough. The attribute you want is the for-attribute, which takes the ID of a subsequent input field. This way, assistive technologies know what label to associate with what form field.  

I guess the best way to illustrate this is by giving an example:
```html
    <label for='username'>

    <input type='text' id='username'>
```

This will make for example a screen-reader say "username, text edit field", instead of just reporting' text edit field' and requiring the user to go look for a label. This also really helps people who use speech recognition software.

### That's a tall order

Let's take a small break. I want you to go look at a really well-designed web page. It can be any page. Go on, I'll wait.

Back? Ok, great. Now, look at the page again but disable all CSS. Does it still look good? Is the content on the page still in a logical order? If so, great. You found a page with decent HTML structure. (One way to easily view a page without CSS is to load the site in WebAIM's <a href='http://wave.webaim.org' target='_blank' rel='nofollow'>WAVE Web Accessibility Evaluation Tool</a>. Then click on the "No Styles" tab to see it without styles.)

If not, great. Now you get an impression of what I have to deal with on a daily basis when I come across a badly structured website.

Full disclosure: I tend to curse when this happens. Loudly. With vigor.

Why is this such a big deal? I'll explain.

_spoiler alert!_ To those who have only covered the HTML/CSS curriculum so far, we're going to skip ahead a little.

Screen-readers and other assistive technologies render a top-to-bottom representation of a web page based on your website's DOM. All positional CSS is ignored in this version of the web page.

DOM stands for Document Object Model and is the tree-like structure of your website's HTML elements. All your HTML elements are nodes that hierarchically interlink based on the HTML tags you use and JavaScript. Screen-readers use this DOM tree to work with your HTML code.

If you put your element at the top of your element, it will show up at the top of your DOM tree as well. therefore, the screen-reader will put it at the top as well, even if you move it to the bottom of the page using CSS.  

So a final tip I want to give you all is to pay attention to the order of your HTML, not just your finished website with CSS added in. Does it still make sense without CSS? Great!

Oh ... it doesn't? In that case ..you might one day hear a muffled curse carried to you on a chilly breeze while walking outside. That will most likely be me, visiting your website. 

In that case I really only have two words for you. Often have I heard those same two words directed at me when I wrote some bad code and it is with great pleasure that I tell you: "go fix!"

### Color Contrast
Color contrast should be a minimum of 4.5:1 for normal text and 3:1 for large text. “Large text” is defined as text that is at least 18 point (24px) or 14 point (18.66px) and bold. [Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Conclusion
I have told you about accessibility, what it is, what it's not and why it's important.  

I have also given you the basics, the very basics, of getting accessibility right. These basics are however very powerful and can make your life a lot easier when coding for accessibility.  

If we talk in FCC terms, you should keep these in mind while doing the HTML/CSS curriculum as well as the JavaScript curriculum.  
In subsequent articles, I will touch on a number of more top notch topics. A number of questions I will answer are:

*   Adding structured headings sounds like a good idea, but they don't fit in my design. What do I do?
*   Is there a way for me to write content only screen-readers and other assistive technologies see?
*   How do I make custom JavaScript components accessible?
*   What tools are there, in addition to inclusive user testing, that can be used to develop the most robust and accessible experience for the largest group of users?
