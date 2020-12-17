# How the formatter works

## Validation

There are two scripts that validate challenges: validate-text and
validate-hints. validate-text ensures that any code inside <code> tags can
be converted to backticks.  For example <code>var x = 'y';</code> is fine, but
<code><span>not okay</span><code> is not, since `<span>not okay</span>` becomes
<code>&lt;span&gt;not okay&lt;/span&gt;<code> which is not the intention.

In contrast <code>&lt;span&gt;span we want&lt;/span&gt;<code> is perfectly fine.
The script will parse this and replace it with `<span>span we want</span>`.

Some challenges will break, so it's worth checking how they're rendered after
transform-challenges has done its work.

validate-hints operates differently. It checks to see if there is any markdown
syntax inside the test text and flags up challenges that *may* not be being
rendered correctly. Unfortunately there are a lot of false positives, a human
needs to see if the challenge author intended for the text to be parsed as
markdown or not.  Also bare email addresses name@address.com should be
highlighted by this tool and will need wrapping with backticks.

## How to use

mmv is great, so I recommend installing that first.  Then:

cd curriculum/challenges/chinese/12-certificates
mmv ";*.md" "#1#2.markdown"
cd ../../../../tools/scripts/formatter/fcc-md-to-gfm/
node formatCurriculum.js
cd ../md-to-mdx
node md-to-mdx # this might have warnings and errors.  Errors need fixing, but warnings just need checking
cd ../../../../curriculum/challenges/chinese/
mmv -md ";*.mdx" "#1#2.md"
