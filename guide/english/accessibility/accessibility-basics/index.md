---
title: Accessibility Basics
---

## Accessibility Basics

> "The Dark Arts are many, varied, ever-changing, and eternal. Fighting them is like fighting a many-headed monster, which, each time a neck is severed, sprouts a head even fiercer and cleverer than before. You are fighting that which is unfixed, mutating, indestructible."
>
> --Professor Severus Snape, Harry Potter Series

Accessibility's role in development is understanding the user's perspective and needs.

As more and more new technologies are being created, the toolbox of a developer becomes ever-changing and complicated.

One tool in that toolbox should be accessibility. It should be one of the very first steps of creating any form of web content, yet is not considered enough. This could be due to a simple case of not knowing it even exists or an extreme case like not caring about it at all.

If you are reading this article, you may be in one of the following categories:

*   You are a novice web developer and would like to know more about accessibility.
*   You are a seasoned web developer and have lost your way. (More on that later.)
*   You feel that there is a legal obligation from your employer, and you need to learn more about it.

Implementing accessibility impacts the entire team, including the designer, the copywriter, and the developer.

## So, what is accessibility anyway?

The word "accessibility" in itself can be a bit misleading at times, especially if English is your second language. It is sometimes referred to as "inclusive design".

In one sense, if your site is public on the Internet, that website is accessible to everyone with a web browser.

But is all the content on your website actually readable, usable, and understandable for everyone? Are there no thresholds that bar certain  people from "accessing" all the information you are exposing?

You could ask yourself questions such as the following:

*   If you add information contained in an audio file, can a deaf person still get that information?
*   If you denote an important piece of content with a certain color, will a colorblind person know about it?
*   If you add images that convey important data, how will a person with low vision get that information?
*   Is it easy to navigate the application with only a keyboard or mouth-stick?
*   Does your application assume the orientation of the device? What if the user can’t physically turn the device?
*   Are the timed aspects of your application forgiving to someone that might need more time to fill in a form?
*   Does your application still work even if JavaScript does not load in time?
*   If your website is very resource-heavy, will someone on a slow internet connection be able to read your content?

This is where accessibility comes into play. Accessibility entails making your content as friendly, as easy to "access", as possible  for the largest amount of people. This includes people who are older, are deaf, have low-vision, are blind, are dyslexic, are colorblind, have epilepsy, have mental fatigue, have physical limitations, cannot afford new devices or high-speed Internet connections, etc.

## Why worry about accessibility?

You may think that accessibility doesn’t apply to you or to your  users, so why bother implementing it? What would a blind person do with a photo editing tool?

The truth is, you're right to a certain degree. If you have done meticulous user research and have excluded any chance of a certain group of people visiting your website, the priority for catering to that group diminishes quite a bit.

However, doing this research is actually key in defending the need for accessibility. Did you know there are [blind gamers](http://audiogames.net)? Or even [blind photographers](http://peteeckert.com/)? What about [deaf musicians](http://mentalfloss.com/article/25750/roll-over-beethoven-6-modern-deaf-musicians)?

There is also legislation that actually forces you to make certain websites and web apps accessible. A prime example is the US-based <a href='http://jimthatcher.com/webcourse1.htm' target='_blank' rel='nofollow'>Section 508</a>. Right now, this law mainly refers to government organizations and public sector websites. However, laws can change.

The picture gets even more complicated when we look at legislation that actually forces you to make certain websites and web apps accessible. A prime example is the US-based <a href='http://jimthatcher.com/webcourse1.htm' target='_blank' rel='nofollow'>Section 508</a>. Right now, this law mainly refers to government organizations, public sector websites, etc. However, laws change.

Last year, airline websites were included in this list which meant that in Europe, airline website devs scrambled to make their content accessible. Not doing so can get your company a fine of literally tens of thousands of dollars for each day the problem isn't fixed.

There are variations on this legislation all over the world, some more severe and all-encompassing than others. Not knowing about that fact doesn't make the lawsuit go away.

## Ok, so accessibility is a big deal. Now how do we implement it?
That question, sadly, is harder to answer than it may seem.

As stated above, accessibility is important for a large group of different people, each with their own needs. Making your website work for everyone is a large, on-going task.

The Web Content Accessibility Guidelines or <a href='https://www.wuhcag.com/web-content-accessibility-guidelines/' target='_blank' rel='nofollow'>WCAG</a> were composed to help developers create accessible content. This document contains a number of criteria you can use to check your website. There are also advanced techniques like [WAI-ARIA] that are important for JavaScript-based apps.

### Talk like the natives

The HTML specification is a document that describes how the language should be used to build websites. Assistive technologies, like screen-readers, speech recognition programs, etc. are aware of this document. Web developers, however, often are not, or at least not enough, and think something like this is ok:
```html
    <div class="epic-button"></div>

    <span><strong>Huge heading I will style with CSS later</strong></span>

    <span class="clickable-with-JavaScript">English</span>
```
Guess what? All three of these elements break several criteria of WCAG and therefore are not accessible at all.

The first element breaks the ‘name, role, value’-criterium, which states that all elements on a web page should expose their name, role (e.g. button) and value (e.g. the contents of an edit field) to assistive technologies. This div actually doesn’t provide any of the three, rendering it invisible to screen-readers.

Visually, the second element looks like a heading after styling it with CSS, but semantically it is a `span`. Thus, assistive technologies won’t know it's a heading. A screen-reader will read this element as regular text instead of a heading. Screen-readers that use a hotkey to jump between headings would skip this element.

The third element could be something used to change the language of the website. Perhaps a fancy animated menu of languages will expand on click. However, because it is a `span` and does not define its role as link or button, assistive technologies will think this is simple text with some styling.

Spans and divs are not semantic elements; they do not provide the contextual meaning of a particular element to web browsers, search engines, or assistive technology.  You can fix these in two ways:
*   You can manually add ARIA-attributes to the elements above. This is an advanced topic and outside the scope of this article.
*   Or, you can simply do this:
```html
    <button>This is a button</button>

    <h2>Here's a heading level two</h2>

    <a href="JavascriptThing">English</a>
```
Boom. Suddenly, all these elements are now perfectly accessible, just by using native HTML. HTML used as intended, in other  words.

### How do pages begin?
```html
    <html lang="en-us">
```
We copy it from some template and mostly don't even know it is there. These words tell the screen-readers what language to read. When your site is in English, there is no problem. But when you write your site in another language and you forget you actually have this tag, blind readers will have to listen to an English person reading another language like it is English... So be aware of this little tag that can mean the world to some visitors.

### A foundation cannot stand without structure

As mentioned earlier, screen-readers have hotkeys to jump from  heading to heading. There are also hotkeys to jump to the next table, form field, link, etc. Thus, it is good practice to make sure these headings are actually in logical places.  It also decreases users’ stress levels, which encourages them to keep coming back to your website.

Also remember that headings are hierarchical. If you use an `h2`, make sure the `h3`s that follow it actually have something to do with that `h2`. Don't put an `h3` for contact details under your `h2` for recent blog posts. A good analogy here is a book with chapters, that have subsections. You wouldn't put a section on baking cookies in the middle of a chapter on preparing vegetables, right?

### What's the alternative?
Images on a website are great. They add a new layer to your content, make experiences more immersive, and generally look good among all the text. A picture can say more than a thousand words, right?

Certainly. That is, if you can see them. In the HTML5-specification,  an img-attribute must always have an alt-attribute. This attribute is  meant as an alternative to the image in case it is not visible. This  would be true for blind visitors to your website, but also when your  image doesn't load for some reason. Not adding an alt-tag to an  img-attribute not only breaks accessibility, it goes against the HTML5-spec.

Now, there is one caveat here. Alt-attributes are mandatory according to the HTML5-spec, but it is not mandatory to fill them in. `<img src="awesome-image.jpg", alt="">` is therefore legal HTML5 code.

Should you fill in alt-tags for all images? It depends on the image. For background images, the answer is usually no, but you should use CSS for those anyway.

For purely decorative images that have no information in them at all, you're free to choose. Either put in something useful and descriptive, or nothing at all.

For images that contain information, like a map or chart, not adding alt text breaks WCAG unless you provide a textual alternative. This is usually an alt-attribute, but can also be a block of text right below or next to the image.

For images of text, the text can either be included in the  alt-attribute or offered in some alternative manner. The problem with adding the textual alternative on the same page is that the same content would show twice for people who can see the image, making the alt-attribute a better option.

The text should provide the context and information that is an alternative to seeing the image. It is simply not enough to write "image of hot air balloons" – why are the balloon pictures there? If the image is stylized or conveys an emotional meaning, this can be included.

### I can't read your scrawl, son

Even people who have no issues with eyesight will benefit from a legible font and proper contrast. You would likely cringe if you had to fill in a form with light yellow loopy letters on a white background. For people with poor eyesight, this becomes far worse.

The WCAG defines ideal color contrast ratios for small and large text. There are plenty of tools to check if your contrast ratios are strong enough. The information and tooling are there, go use it.

A good place to start checking color contrast is the [WebAIM](https://webaim.org/resources/contrastchecker/) color contrast checker.

### What does this button do?
While on the topic of forms, let's look at the <code>input</code> tag. This little guy is kinda important.  

When you put input fields on a page, you can use `labels` to label them. However, putting them next to each other is not quite enough. The attribute you want is the for-attribute, which takes the ID of a subsequent input field. This way, assistive technologies know what label to associate with what form field.  

The best way to illustrate this is by giving an example:
```html
    <label for='username'>

    <input type='text' id='username'>
```

This will make a screen-reader say “username, text edit field”, instead of just reporting “text edit field” and requiring the user to find a label. This also helps people who use speech recognition software.

### That's a tall order

Let’s take a small break. Go look at a really well-designed web page. It can be any page. Go on.

Back? Ok, great. Now, look at the page again but disable all CSS. Does it still look good? Is the content on the page still in a logical order? If so, great. You found a page with decent HTML structure. (One way to easily view a page without CSS is to load the site in WebAIM's <a href='http://wave.webaim.org' target='_blank' rel='nofollow'>WAVE Web Accessibility Evaluation Tool</a>. Then click on the "No Styles" tab to see it without styles.)

If not, great. Now you get an impression of what people using assistive technologies have to deal with  on a daily basis.

Why is this such a big deal?

_spoiler alert!_ To those who have only covered the HTML/CSS curriculum so far, we're going to skip ahead a little.

Screen-readers and other assistive technologies render a top-to-bottom representation of a web page based on your website's DOM. All positional CSS is ignored in this version of the web page.

DOM stands for Document Object Model and is the tree-like structure of your website's HTML elements. All the HTML elements are nodes that hierarchically interlink based on the HTML tags and JavaScript. Screen-readers use this DOM tree to work with your HTML code.

If you put your element at the top of your element, it will show up at the top of your DOM tree as well. Thus, the screen-reader will put it at the top as well, even if you move it to the bottom of the page using CSS.  

So a final tip to give you all is to pay attention to the order of your HTML, not just your finished website with CSS added in. Does it still make sense without CSS? Great!

If it doesn't, go fix it!

### Color Contrast
Color contrast should be a minimum of 4.5:1 for normal text and 3:1 for large text. “Large text” is defined as text that is at least 18 point (24px) or 14 point (18.66px) and bold. [Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Conclusion
Now you know about accessibility, what it is, what it's not and why it's important.  

You also have the basics, the very basics, of getting accessibility right. These basics are very powerful and can make your life a lot easier when coding for accessibility.  

In FCC terms, you should keep these in mind while doing the HTML/CSS curriculum as well as the JavaScript curriculum.  
Subsequent articles will touch on some more niche topics. Questions to be answered include:

*   Adding structured headings sounds like a good idea, but they don't fit in my design. What do I do?
*   Is there a way for me to write content only screen-readers and other assistive technologies see?
*   How do I make custom JavaScript components accessible?
*   What tools are there, in addition to inclusive user testing, that can be used to develop the most robust and accessible experience for the largest group of users?
