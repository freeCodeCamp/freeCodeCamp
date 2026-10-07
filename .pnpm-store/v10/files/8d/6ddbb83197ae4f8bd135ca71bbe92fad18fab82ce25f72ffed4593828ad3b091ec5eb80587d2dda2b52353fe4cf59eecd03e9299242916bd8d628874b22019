> The following is an article written by Eran Hammer.
> It is reproduced here for posterity [with permission](https://github.com/fastify/fastify/issues/1426#issuecomment-817957913).
> It has been reformatted from the original HTML source to Markdown source,
> but otherwise remains the same. The original HTML can be retrieved from the
> above permission link.

## History behind prototype poisoning
<a id="pp"></a>

Based on the article by Eran Hammer,the issue is created by a web security bug.
It is also a perfect illustration of the efforts required to maintain
open-source software and the limitations of existing communication channels.

But first, if we use a JavaScript framework to process incoming JSON data, take
a moment to read up on [Prototype Poisoning](https://medium.com/intrinsic/javascript-prototype-poisoning-vulnerabilities-in-the-wild-7bc15347c96)
in general, and the specific
[technical details](https://github.com/hapijs/hapi/issues/3916) of this issue.
This could be a critical issue so, we might need to verify your own code first.
It focuses on specific framework however, any solution that uses `JSON.parse()`
to process external data is potentially at risk.

### BOOM
<a id="pp-boom"></a>

The engineering team at Lob (long time generous supporters of my work!) reported
a critical security vulnerability they identified in our data validation
module — [joi](https://github.com/hapijs/joi). They provided some technical
details and a proposed solution.

The main purpose of a data validation library is to ensure the output fully
complies with the rules defined. If it doesn't, validation fails. If it passes,
we can blindly trust that the data you are working with is safe. In fact, most
developers treat validated input as completely safe from a system integrity
perspective which is crucial!

In our case, the Lob team provided an example where some data was able to escape
by the validation logic and pass through undetected. This is the worst possible
defect a validation library can have.

### Prototype in a nutshell
<a id="pp-nutshell"></a>

To understand this, we need to understand how JavaScript works a bit.
Every object in JavaScript can have a prototype. It is a set of methods and
properties it "inherits" from another object. I have put inherits in quotes
because JavaScript isn't really an object-oriented language. It is a prototype-
based object-oriented language.

A long time ago, for a bunch of irrelevant reasons, someone decided that it
would be a good idea to use the special property name `__proto__` to access (and
set) an object's prototype. This has since been deprecated but nevertheless,
fully supported.

To demonstrate:

```
> const a = { b: 5 };
> a.b;
5
> a.__proto__ = { c: 6 };
> a.c;
6
> a;
{ b: 5 }
```

The object doesn't have a `c` property, but its prototype does.
When validating the object, the validation library ignores the prototype and
only validates the object's own properties. This allows `c` to sneak in via the
prototype.

Another important part is the way `JSON.parse()` — a utility
provided by the language to convert JSON formatted text into
objects  —  handles this magic `__proto__` property name.

```
> const text = '{"b": 5, "__proto__": { "c": 6 }}';
> const a = JSON.parse(text);
> a;
{b: 5, __proto__: { c: 6 }}
```
Notice how `a` has a `__proto__` property. This is not a prototype reference. It
is a simple object property key, just like `b`. As we've seen from the first
example, we can't actually create this key through assignment as that invokes
the prototype magic and sets an actual prototype. `JSON.parse()` however, sets a
simple property with that poisonous name.

By itself, the object created by `JSON.parse()` is perfectly safe. It doesn't
have a prototype of its own. It has a seemingly harmless property that just
happens to overlap with a built-in JavaScript magic name.

However, other methods are not as lucky:

```
> const x = Object.assign({}, a);
> x;
{ b: 5}
> x.c;
6;
```

If we take the `a` object created earlier by `JSON.parse()` and pass it to the
helpful `Object.assign()` method (used to perform a shallow copy of all the top
level properties of `a` into the provided empty `{}` object), the magic
`__proto__` property "leaks" and becomes `x` 's actual prototype.

Surprise!

If you get some external text input and parse it with `JSON.parse()`
then perform some simple manipulation of that object (e.g shallow clone and add
an `id` ), and pass it to our validation library, it would sneak in undetected
via `__proto__`.

### Oh joi!
<a id="pp-oh-joi"></a>

The first question is, of course, why does the validation module **joi** ignore
the prototype and let potentially harmful data through? We asked ourselves the
same question and our instant thought was "it was an oversight". A bug - a really
big mistake. The joi module should not have allowed this to happen. But…

While joi is used primarily for validating web input data, it also has a
significant user base using it to validate internal objects, some of which have
prototypes. The fact that joi ignores the prototype is a helpful "feature". It
allows validating the object's own properties while ignoring what could be a
very complicated prototype structure (with many methods and literal properties).

Any solution at the joi level would mean breaking some currently working code.

### The right thing
<a id="pp-right-thing"></a>

At this point, we were looking at a devastatingly bad security vulnerability.
Right up there in the upper echelons of epic security failures. All we knew is
that our extremely popular data validation library fails to block harmful data,
and that this data is trivial to sneak through. All you need to do is add
`__proto__` and some crap to a JSON input and send it on its way to an
application built using our tools.

(Dramatic pause)

We knew we had to fix joi to prevent this but given the scale of this issue, we
had to do it in a way that will put a fix out without drawing too much attention
to it — without making it too easy to exploit — at least for a few days until
most systems received the update.

Sneaking a fix isn't the hardest thing to accomplish. If you combine it with an
otherwise purposeless refactor of the code, and throw in a few unrelated bug
fixes and maybe a cool new feature, you can publish a new version without
drawing attention to the real issue being fixed.

The problem was, the right fix was going to break valid use cases. You see, joi
has no way of knowing if you want it to ignore the prototype you set, or block
the prototype set by an attacker. A solution that fixes the exploit will break
code and breaking code tends to get a lot of attention.

On the other hand, if we released a proper ([semantically
versioned](https://semver.org/)) fix, mark it as a breaking change, and add a
new API to explicitly tell joi what you want it to do with the prototype, we
will share with the world how to exploit this vulnerability while also making it
more time consuming for systems to upgrade (breaking changes never get applied
automatically by build tools).


### A detour
<a id="pp-detour"></a>

While the issue at hand was about incoming request payloads, we had to pause and
check if it could also impact data coming via the query string, cookies, and
headers. Basically, anything that gets serialized into objects from text.

We quickly confirmed node default query string parser was fine as well as its
header parser. I identified one potential issue with base64-encoded JSON cookies
as well as the usage of custom query string parsers. We also wrote some tests to
confirm that the most popular third-party query string parser  —
[qs](https://www.npmjs.com/package/qs) —  was not vulnerable (it is not!).

### A development
<a id="pp-a-development"></a>

Throughout this triage, we just assumed that the offending input with its
poisoned prototype was coming into joi from hapi, the web framework connecting
the hapi.js ecosystem. Further investigation by the Lob team found that the
problem was a bit more nuanced.

hapi used `JSON.parse()` to process incoming data. It first set the result
object as a `payload` property of the incoming request, and then passed that
same object for validation by joi before being passed to the application
business logic for processing. Since `JSON.parse()` doesn't actually leak the
`__proto__` property, it would arrive to joi with an invalid key and fail
validation.

However, hapi provides two extension points where the payload data can be
inspected (and processed) prior to validation. It is all properly documented and
well understood by most developers. The extension points are there to allow you
to interact with the raw inputs prior to validation for legitimate (and often
security related) reasons.

If during one of these two extension points, a developer used `Object.assign()`
or a similar method on the payload, the `__proto__` property would leak and
become an actual prototype.

### Sigh of relief
<a id="pp-sigh-of-relief"></a>

We were now dealing with a much different level of awfulness. Manipulating the
payload object prior to validation is not common which meant this was no longer
a doomsday scenario. It was still potentially catastrophic but the exposure
dropped from every joi user to some very specific implementations.

We were no longer looking at a secretive joi release. The issue in joi is still
there, but we can now address it properly with a new API and breaking release
over the next few weeks.

We also knew that we can easily mitigate this vulnerability at the framework
level since it knows which data is coming from the outside and which is
internally generated. The framework is really the only piece that can protect
developers against making such unexpected mistakes.

### Good news, bad news, no news?
<a id="pp-good-news-no-news"></a>

The good news was that this wasn't our fault. It wasn't a bug in hapi or joi. It
was only possible through a complex combination of actions that was not unique
to hapi or joi. This can happen with every other JavaScript framework. If hapi
is broken, then the world is broken.

Great — we solved the blame game.

The bad news is that when there is nothing to blame (other than JavaScript
itself), it is much harder getting it fixed.

The first question people ask once a security issue is found is if there is
going to be a CVE published. A CVE — Common Vulnerabilities and Exposures — is a
[database](https://cve.mitre.org/) of known security issues. It is a critical
component of web security. The benefit of publishing a CVE is that it
immediately triggers alarms and informs and often breaks automated builds until
the issue is resolved.

But what do we pin this to?

Probably, nothing. We are still debating whether we should tag some versions of
hapi with a warning. The "we" is the node security process. Since we now have a
new version of hapi that mitigate the problem by default, it can be considered a
fix. But because the fix isn't to a problem in hapi itself, it is not exactly
kosher to declare older versions harmful.

Publishing an advisory on previous versions of hapi for the sole purpose of
nudging people into awareness and upgrade is an abuse of the advisory process.
I'm personally fine with abusing it for the purpose of improving security but
that's not my call. As of this writing, it is still being debated.

### The solution business
<a id="pp-solution-business"></a>

Mitigating the issue wasn't hard. Making it scale and safe was a bit more
involved. Since we knew where harmful data can enter the system, and we knew
where we used the problematic `JSON.parse()` we could replace it with a safe
implementation.

One problem. Validating data can be costly and we are now planning on validating
every incoming JSON text. The built-in `JSON.parse()` implementation is fast.
Really really fast. It is unlikely we can build a replacement that will be more
secure and anywhere as fast. Especially not overnight and without introducing
new bugs.

It was obvious we were going to wrap the existing `JSON.parse()` method with
some additional logic. We just had to make sure it was not adding too much
overhead. This isn't just a performance consideration but also a security one.
If we make it easy to slow down a system by simply sending specific data, we
make it easy to execute a [DoS
attack](https://en.wikipedia.org/wiki/Denial-of-service_attack) at very low
cost.

I came up with a stupidly simple solution: first parse the text using the
existing tools. If this didn't fail, scan the original raw text for the
offending string "__proto__". Only if we find it, perform an actual scan of the
object. We can't block every reference to "__proto__" — sometimes it is
perfectly valid value (like when writing about it here and sending this text
over to Medium for publication).

This made the "happy path" practically as fast as before. It just added one
function call, a quick text scan (again, very fast built-in implementation), and
a conditional return. The solution had negligible impact on the vast majority of
data expected to pass through it.

Next problem. The prototype property doesn't have to be at the top level of the
incoming object. It can be nested deep inside. This means we cannot just check
for the presence of it at the top level. We need to recursively iterate through
the object.

While recursive functions are a favorite tool, they could be disastrous when
writing security-conscious code. You see, recursive function increase the size
of the runtime call stack. The more times you loop, the longer the call stack
gets. At some point — KABOOM— you reach the maximum length and the process dies.

If you cannot guarantee the shape of the incoming data, recursive iteration
becomes an open threat. An attacker only needs to craft a deep enough object to
crash your servers.

I used a flat loop implementation that is both more memory efficient (less
function calls, less passing of temporary arguments) and more secure. I am not
pointing this out to brag, but to highlight how basic engineering practices can
create (or avoid) security pitfalls.

### Putting it to the test
<a id="pp-putting-to-test"></a>

I sent the code to two people. First to [Nathan
LaFreniere](https://github.com/nlf) to double check the security properties of
the solution, and then to [Matteo Collina](https://github.com/mcollina) to
review the performance. They are among the very best at what they do and often
my go-to people.

The performance benchmarks confirmed that the "happy path" was practically
unaffected. The interesting findings was that removing the offending values was
faster then throwing an exception. This raised the question of what should be
the default behavior of the new module — which I called
[**bourne**](https://github.com/hapijs/bourne) —  error or sanitize.

The concern, again, was exposing the application to a DoS attack. If sending a
request with `__proto__` makes things 500% slower, that could be an easy vector
to exploit. But after a bit more testing we confirmed that sending **any**
invalid JSON text was creating a very similar cost.

In other words, if you parse JSON, invalid values are going to cost you more,
regardless of what makes them invalid. It is also important to remember that
while the benchmark showed the significant % cost of scanning suspected objects,
the actual cost in CPU time was still in the fraction of milliseconds. Important
to note and measure but not actually harmful.

### hapi ever-after
<a id="pp-hapi-ever-after"></a>

There are a bunch of things to be grateful for.

The initial disclosure by the Lob team was perfect. It was reported privately,
to the right people, with the right information. They followed up with
additional findings, and gave us the time and space to resolve it the right way.
Lob also was a major sponsor of my work on hapi over the years and that
financial support is critical to allow everything else to happen. More on that
in a bit.

Triage was stressful but staffed with the right people. Having folks like
[Nicolas Morel](https://github.com/Marsup), Nathan, and Matteo, available and
eager to help is critical. This isn't easy to deal with without the pressure,
but with it, mistakes are likely without proper team collaboration.

We got lucky with the actual vulnerability. What started up looking like a
catastrophic problem, ended up being a delicate but straight-forward problem to
address.

We also got lucky by having full access to mitigate it at the source — didn't
need to send emails to some unknown framework maintainer and hope for a quick
answer. hapi's total control over all of its dependencies proved its usefulness
and security again. Not using [hapi](https://hapi.dev)? [Maybe you
should](https://hueniverse.com/why-you-should-consider-hapi-6163689bd7c2).

### The after in happy ever-after
<a id="pp-after-ever-after"></a>

This is where I have to take advantage of this incident to reiterate the cost
and need for sustainable and secure open source.

My time alone on this one issue exceeded 20 hours. That's half a working week.
It came at the end of a month were I already spent over 30 hours publishing a
new major release of hapi (most of the work was done in December). This puts me
at a personal financial loss of over $5000 this month (I had to cut back on paid
client work to make time for it).

If you rely on code I maintain, this is exactly the level of support, quality,
and commitment you want (and lets be honest — expect). Most of you take it for
granted — not just my work but the work of hundreds of other dedicated open
source maintainers.

Because this work is important, I decided to try and make it not just
financially sustainable but to grow and expand it. There is so much to improve.
This is exactly what motivates me to implement the new [commercial licensing
plan](https://web.archive.org/web/20190201220503/https://hueniverse.com/on-hapi-licensing-a-preview-f982662ee898)
coming in March. You can read more about it
[here](https://web.archive.org/web/20190201220503/https://hueniverse.com/on-hapi-licensing-a-preview-f982662ee898).


