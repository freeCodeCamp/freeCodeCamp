---
title: Using Browsec for Securing Your Connection to Freecodecampcom
---
### Why do I need an plugin or add-on?

Lately some of the campers started facing strange problems, namely "Content Modification" by some Internet Service Providers (ISP), leading to the <a href='http://freecodecamp.com' target='_blank' rel='nofollow'>FreeCodeCamp.com</a> (FCC) website being broken sometimes.

This came to light with some of the issues logged by campers :

*   <a href='https://github.com/FreeCodeCamp/FreeCodeCamp/issues/5999' target='_blank' rel='nofollow'>#5999 : Indian ISP's injecting Ads breaks site</a>
*   <a href='https://github.com/FreeCodeCamp/FreeCodeCamp/issues/6122' target='_blank' rel='nofollow'>#6122 : Serious Problem using the FCC IDE, console showing error...</a>
*   <a href='https://github.com/FreeCodeCamp/FreeCodeCamp/issues/6381' target='_blank' rel='nofollow'>#6381 : Unable to view the Code editor in the browser</a>

## TL;DR : What's Wrong, again?

Well, for some campers, this is a classic case of <a href='https://en.wikipedia.org/wiki/Man-in-the-middle_attack' target='_blank' rel='nofollow'>man in the middle attack</a>.

For instance, as seen in the issue <span class="hashtag">#5999</span>, the ISP of some campers from India is deliberately injecting Ads into the user's visited websites that's causing problems.

While, in other cases, ISPs sometimes use a similar strategy to cache the websites visited by consumers, so that they can serve the cached content to other consumers visiting the same websites, this saves them bandwidth costs, while making websites available faster.

But when this is not done correctly (or is done malaciously as in the first case), this modifies essential content for websites, and prevents them from running properly.

## What's the fix, then?

Simple, we need to encrypt our connection to the FCC website. By encrypting our traffic we bypass the ISP's ability to modify or cache our content as it passes through their infrastructure.

This can be done with a useful browser add-on called <a href='https://browsec.com/en/' target='_blank' rel='nofollow'>Browsec</a>.

### How does the add-on work?

The add-on creates a VPN connection between your device and the outside world. That is, Mr. Peeping Tom (ISP), can't mess with your connection to the FCC website. Its technically same as if you were not in your home, but accessing the FCC website from US, Netherlands, or other similar places.

_Behind the scenes it encrypts the data transmission, and hides your IP._

## I am sold, Show me the steps.

There you go!

### For Google Chrome :

#### Step 1 : Install the browsec extension.

You can <a href='https://chrome.google.com/webstore/detail/browsec/omghfjlpggmjjaagoclmmobgdodcjboh' target='_blank' rel='nofollow'>download and install the browsec plugin</a> for Chrome from the offical WebStore.

![Image for 'Browsec on Google Chrome WebStore'](//discourse-user-assets.s3.amazonaws.com/original/2X/6/61bd52ed78c56369e62ca376b6dd9e56abcb6363.png)

#### Step 2 : Clear your browser cookies and cache (optional).

It's a good thing if you clear your browser cache for the first time you are going to use browsec, so that your browser loads all the files from scratch.

#### Step 3 : Restart your browser, and visit <a href='http://freecodecamp.com' target='_blank' rel='nofollow'>FreeCodeCamp.com</a>

Just close your browser, and restart it. Check the browsec extention, for your desired endpoint location.

### For Mozilla Firefox :

Download a portable Firefox version, with bundled add-on, from the <a href='https://browsec.com/en/dashboard/main' target='_blank' rel='nofollow'>Browsec website</a>.

![Image for 'Browsec on Google Chrome WebStore'](//discourse-user-assets.s3.amazonaws.com/original/2X/b/b30fbf3bade330044e18b3c37409f2437a3810c1.png)

That's it! Happy Coding! If this works then do let us know in the <a href='https://gitter.im/FreeCodeCamp/Help' target='_blank' rel='nofollow'>Help Chat</a>

## FAQs

### How do I know, if I am facing a "man in the middle" attack?

When you visit the FCC website, or do the challenges, if you look at your browser's Developer console (Press F12 > Console tab), you should see similar errors like below.

![Image for 'Error'](//discourse-user-assets.s3.amazonaws.com/original/2X/4/4949599e3143f454fc5a7174a81e65fa68d04c77.png)

![Image for 'Error'](//discourse-user-assets.s3.amazonaws.com/original/2X/0/039acb319bae57f31ebd78aa3c8987f324a37f84.png)

![Image for 'Error'](//discourse-user-assets.s3.amazonaws.com/original/2X/2/25dcc04ecddc422fb7ba113ddac3378d5decd905.png)

These are classic cases of the issue.

### Wait a minute, Can I use any alternate mechanism, to Browsec?

Yes, why not, you can use any available VPN clients in the market, but keep in mind that Browsec is free and works just great!

### Hey what about other browsers, Internet Explorer, Safari, e.t.c.?

Hmm, go for any VPN add-on that you can find for these browsers, <a href='https://www.torproject.org/' target='_blank' rel='nofollow'>Tor</a>, is one such client, but they come with paid subscriptions, you can basically use any anonymizer that you want, however Chrome and Browsec are tried and tested and have worked for most campers in the past.

### Can I use the anonymizer for using websites other than FCC?

Of course yes. Why not? However remember that this does not make you invisible to law, so be careful of what you are doing! ![:wink:](//forum.freecodecamp.com/images/emoji/emoji_one/wink.png?v=2 ":wink:")

### What if this doesn't work for me?

Please let us know in the <a href='https://gitter.im/FreeCodeCamp/Help' target='_blank' rel='nofollow'>Help Chat</a>, we will try our best to find a workaround.

#### _Disclaimer_

**_FreeCodeCamp does NOT endorse any of the softwares mentioned in this article, please use them at your own discretion. Some VPN clients may track your activity, also there could be side-effects such as slow speeds or delay in page loads._**