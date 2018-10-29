---
title: Mailto Links
---

## Mailto Links

A mailto link is a kind of hyperlink (`<a href=""></a>`) with special parameters that lets you specify additional recipients, a subject line, and/or a body text.

### The basic syntax with a recipient is:

```html
<a href="mailto:friend@something.com">Some text</a>
```

### More customization!

#### Adding a subject to that mail:

If you want to add a specific subject to that mail, be careful to add `%20` or `+` everywhere there's a space in the subject line. An easy way to ensure that it is properly formatted is to use a [URL Decoder / Encoder](https://meyerweb.com/eric/tools/dencoder/).

#### Adding body text:

Similarly, you can add a specific message in the body portion of the email:
Again, spaces have to be replaced by `%20` or `+`.
After the subject paramater, any additional parameter must be preceded by `&`

Example: Say you want users to send an email to their friends about their progress at Free Code Camp:

Address: empty

Subject: Great news

Body: I am becoming a developer

Your html link now:
```html
<a href="mailto:?subject=Great%20news&body=I%20am%20becoming%20a%20developer">Send mail!</a>
```
Here, we've left mailto empty (mailto:?). This will open the user's email client and the user will add the recipient address themselves.

#### Adding more recipients:

In the same manner, you can add CC and bcc parameters. 
Seperate each address by a comma!

Additional parameters must be preceded by `&`.
```html
<a href="mailto:firstfriend@something.com?subject=Great%20news&cc=secondfriend@something.com,thirdfriend@something.com&bcc=fourthfriend@something.com">Send mail!</a>
```

#### More Information:

[MDN - E-mail links](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#E-mail_links)



There are two ways to create links.

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
I'm an inline-style link

I'm an inline-style link with title

I'm a reference-style link

I'm a relative reference to a repository file

You can use numbers for reference-style link definitions

Or leave it empty and use the link text itself.

URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com or http://www.example.com and sometimes example.com (but not on Github, for example).

Some text to show that the reference links can follow later
