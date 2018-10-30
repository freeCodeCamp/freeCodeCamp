# {%= name %} {%= badge("fury") %}

> {%= description %}

Useful for protecting tokens, like templates in HTML, from being mutated when the string is transformed in some way, like from a formatter/beautifier.

**Example without `preserve`**

Let's say you want to use [js-beautify] on a string of html with Lo-Dash/Underscore templates, such as: `<ul><li><%= name %></li></ul>`:

js-beautify will render the template unusable (and apply incorrect formatting because of the unfamiliar syntax from the Lo-Dash template):

```html
<ul>
  <li>
    <%=n ame %>
  </li>
</ul>
```

**Example with `preserve`**

Correct.

```html
<ul>
  <li><%= name %></li>
</ul>
```

For the record, this is just a random example, I've had very few issues with js-beautify in general. But with or without js-beautify, this kind of token mangling does happen sometimes when you use formatters, beautifiers or similar tools.

## Install
{%= include("install-npm", {save: true}) %}

## Run tests

```bash
npm test
```

## API
{%= apidocs("index.js") %}

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue]({%= bugs.url %})

## Author
{%= include("author") %}

## License
{%= copyright() %}
{%= license() %}

***

{%= include("footer") %}

[js-beautify]: https://github.com/beautify-web/js-beautify