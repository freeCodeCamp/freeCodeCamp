---
id: 5900f4231000cf542c50ff35
challengeType: 5
title: 'Problem 182: RSA encryption'
forumTopicId: 301818
---

## Description

<section id='description'>

The RSA encryption is based on the following procedure:

Generate two distinct primes p and q.Compute n=pq and φ=(p-1)(q-1).

Find an integer e, 1&lt;e&lt;φ, such='' that='' gcd(e,φ)='1.' a='' message='' in='' this='' system='' is='' number='' the='' interval='' \[0,n-1].='' text='' to='' be='' encrypted='' then='' somehow='' converted='' messages='' (numbers='' \[0,n-1]).='' encrypt='' text,='' for='' each='' message,='' m,='' c='me' mod='' n='' calculated.='' decrypt='' following='' procedure='' needed:='' calculate='' d='' ed='1' φ,='' c,='' m='cd' n.='' there='' exist='' values='' of='' e='' and='' me='' call='' which='' unconcealed='' messages.='' an='' issue='' when='' choosing='' should='' not='' too='' many='' instance,='' let='' p='19' q='37.' φ='18\*36=648.' if='' we='' choose='' then,='' although='' gcd(181,648)='1' it='' turns='' out='' all='' possible='' messagesm='' (0≤m≤n-1)='' are='' calculating='' any='' valid='' choice='' some='' it's='' important='' at='' minimum.='' find='' sum='' e,='' 1&lt;e&lt;φ(1009,3643)='' so='' value='' &lt;='' section=''>&lt;/e&lt;φ,>

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>euler182()</code> should return 399788195976.
    testString: assert.strictEqual(euler182(), 399788195976);

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler182() {

  return true;
}

euler182();
```

</div>

</section>

## Solution

<section id='solution'>

```js
// solution required
```

</section>
