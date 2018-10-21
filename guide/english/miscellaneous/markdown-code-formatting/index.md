---
title: Markdown Code Formatting
---
# Markdown Code Formatting

There are two ways to format code in Markdown. You can either use inline code, by putting backticks around parts of a line, or you can use a code block, which some renderers will apply syntax highlighting to.

## Inline Code
You can use inline code formatting to emphasise a small command or piece of syntax within a line you're writing.

For example, you may wish to mention Javascript's `Array.protoype.map()` function. By using inline code formatting, it is clear that this is a piece of code. You might also use it to illustrate a terminal command, like `yarn install`.

To use inline code formatting, simply wrap the code you wish to format in backticks. On a standard US layout QWERTY keyboard, this can be found to the left of '1', and above Tab. More information on the location of the backtick on international keyboards is provided below.

For instance, writing \`Array.prototype.map()\` in markdown will render as `Array.prototype.map()`.

## Code Blocks
To write longer or more detailed snippets of code, it is often better to place them inside a code block. Code blocks allow you to use multiple lines, and markdown will render it inside its own box and with code type font.

To achieve this, start your block with a line of three backticks. This signals to markdown that you are creating a code block. You will need to finish with another line of three backticks. For example:

\`\`\`

var add2 = function(number) {

   return number + 2;

}

\`\`\`

will render in markdown as:

```
var add2 = function(number) {
	return number + 2;
}
```

While not supported natively by markdown, many markdown engines, including the one used by GitHub, will support syntax highlighting. This means that by telling markdown what language we're using inside our block, it will add colours like an IDE would. You can do this by adding the name of the language on the same line as your opening three back ticks. In the example above, if instead of the first line being \`\`\` we use \`\`\`js, then highlighting will be applied to our block.

```js
var add2 = function(number) {
	return number + 2;
}
```

This can be applied to more than just javascript though. I can use \`\`\`html:

```html
<div class="row">
	<div class="col-md-6 col-md-offset-3">
		<h1>Hello World</h1>
	</div>
</div>
```

\`\`\`ruby:
```ruby
"Hello World".split('').each do |letter|
	puts letter
end
```

or \`\`\`python:
```python
a, b = 0, 1
while b < 10:
	print(b)
	a, b = a, a + b
```

plus many others. But remember, not all markdown engines will apply syntax highlighting.

## Typing Backticks

The location of the backtick key can be different on differnt keyboards, and if you're not using a US layout QWERTY keyboard, it may be tricky to find. [This](http://superuser.com/a/254077/122424) helpful guide lists some of the ways to find your backtick key, which we've collected here below.

#### QWERTY and QWERTZ (Key that's been marked with red border)

![QWERTY](//discourse-user-assets.s3.amazonaws.com/optimized/2X/a/a7daf1d707e12e207d47f0eb70ba01d97ffd1924_1_690x327.png)

#### AZERTY France (<kbd>Alt Gr</kbd> + Key that's been marked with red border)

![AZERTY](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8f65c339ce4eefd9d79841f3dc54f4c37cab2e77.png)

#### AZERTY Belgium (<kbd>Alt Gr</kbd> + Key that's been marked with red border)

![enter image description here](//discourse-user-assets.s3.amazonaws.com/original/2X/d/de291f0895b0fed992726a62d654f4e1f0e421f3.png)

#### QWERTY Estonian (Key's that have been marked with red border)

![Estonian Keyboard layout](//discourse-user-assets.s3.amazonaws.com/optimized/2X/0/089b26510b1dcc7553625ba162582cf55837b6cd_1_690x230.png)

### Alt Code
Finally, the backtick key has an alt code, which should work on any keybord. If you can't find a backtick key on your keyboard, you can hold the Alt key, and press 9, then 6 (Alt + 9, 6). This will insert a backtick.
