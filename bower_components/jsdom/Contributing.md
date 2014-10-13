## Mission

jsdom is, as said in our tagline, “A JavaScript implementation of the DOM and HTML standards.” Anything that helps us be better at that is welcome.

## Status

We're transitioning from an older model based on separate and obsolete "DOM1," "DOM2," and "DOM3" specs, into one based on the modern DOM and HTML living standards. Nobody has really set aside the time to do the proper sort of architectural overhaul this transition necessitates, so things might seem a bit strange, but in the meantime we're doing OK with the current structure.

## Existing Tests

The DOM, thankfully, has lots of tests already out there. Those already included in the repository are of two types:

* Auto-generated or adapted from older W3C tests.
* Written by contributors to plug gaps in those tests.

Of these, of course, the first is preferable. When we find gaps, we usually add the tests at the bottom of the relevant auto-generated test suite, e.g. in `test/level2/html.js`.

The current test compliance is tracked [in the README](https://github.com/tmpvar/jsdom#test-compliance).

## Contributing

When contributing, the first question you should ask is:

**Can I exhibit how the browsers differ from what jsdom is doing?**

If you can, then you've almost certainly found a bug in or missing feature of jsdom, and we'd love to have your contribution. In that case, move on to:

**What WHATWG spec covers this potential contribution?**

Almost all of our relevant functionality is covered in either the [DOM Living Standard](http://dom.spec.whatwg.org/) or the [HTML Living Standard](http://www.whatwg.org/specs/web-apps/current-work/). There are various obsolete W3C specs ("DOM Level 2" etc.) that were never really implemented in browsers, and there is also the "DOM Level 4" W3C fork of the WHATWG DOM Living Standard. But we try to stick to the two main WHATWG specs for jsdom these days.

Once you have that nailed down, you'll want to ask:

**Where can I get an official test for this functionality?**

We ported in some of the tests for the old DOM1 and DOM2 specs, as well as some DOM3 ones that are currently disabled. These are sometimes wrong however (given that browsers never really implemented those specs), and we have had to change, add to, or remove them in the past.

These days the [w3c/web-platform-tests](https://github.com/w3c/web-platform-tests) project has an ever-growing set of tests for the DOM and HTML standards, and is the best place to try to find good tests to adapt. jsdom doesn't yet have the ability to run those tests directly (that's [#666](https://github.com/tmpvar/jsdom/issues/666)), but you can copy and adapt them as you see fit. If you can't find anything, you can always ask [public-webapps-testsuite@w3.org](mailto:public-webapps-testsuite@w3.org), [like I did](http://lists.w3.org/Archives/Public/public-webapps-testsuite/2012Aug/0001.html), or stop into the #whatwg IRC channel.

If there is no official test covering the functionality you're after, then you can write your own. You might want to submit a pull request to the web-platform-tests repo too!

## Issues

Finally, we have [an active and full issue tracker](https://github.com/tmpvar/jsdom/issues) that we'd love you to help with. Go find something broken, and fix it!
