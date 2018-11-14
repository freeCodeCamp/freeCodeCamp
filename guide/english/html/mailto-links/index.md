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

In the same manner, you can add CC (Carbon Copy) and BCC (Blind Carbon Copy) parameters. 
Seperate each address by a comma!

Additional parameters must be preceded by `&`.
```html
<a href="mailto:firstfriend@something.com?subject=Great%20news&cc=secondfriend@something.com,thirdfriend@something.com&bcc=fourthfriend@something.com">Send mail!</a>
```

#### More Information:

[MDN - E-mail links](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#E-mail_links)
