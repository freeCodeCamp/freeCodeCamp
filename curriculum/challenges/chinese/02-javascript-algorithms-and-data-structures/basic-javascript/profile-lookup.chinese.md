---
id: 5688e62ea601b2482ff8422b
title: Profile Lookup
challengeType: 1

videoUrl: ''
localeTitle: Profile Lookup
---

## Description
<section id='description'>
这一节我们将要学习的是<code>do...while</code>循环，它会先执行<code>do</code>里面的代码，如果<code>while</code>表达式为真则重复执行，反之则停止执行。我们来看一个例子。
<blockquote>var ourArray = [];<br>var i = 0;<br>do {<br>&nbsp;&nbsp;ourArray.push(i);<br>&nbsp;&nbsp;i++;<br>} while (i < 5);</blockquote>
这看起来和其他循环语句差不多，返回的结果是<code>[0, 1, 2, 3, 4]</code>，<code>do...while</code>与其他循环不同点在于，初始条件为假时的表现，让我们通过实际的例子来看看。
这是一个普通的 while 循环，只要<code>i < 5</code>，它就会在循环中运行代码。
<blockquote>var ourArray = []; <br>var i = 5;<br>while (i < 5) {<br>&nbsp;&nbsp;ourArray.push(i);<br>&nbsp;&nbsp;i++;<br>}</blockquote>
注意，我们首先将<code>i</code>的值初始化为 5。执行下一行时，注意到<code>i</code>不小于 5，循环内的代码将不会执行。所以<code>ourArray</code>最终没有添加任何内容，因此示例中的所有代码执行完时，<code>ourArray</code>仍然是<code>[]</code>。
现在，看一下<code>do...while</code>循环。
<blockquote>var ourArray = []; <br>var i = 5;<br>do {<br>&nbsp;&nbsp;ourArray.push(i);<br>&nbsp;&nbsp;i++;<br>} while (i < 5);</blockquote>
在这里，和使用 while 循环时一样，我们将<code>i</code>的值初始化为 5。执行下一行时，没有检查<code>i</code>的值，直接执行花括号内的代码。数组会添加一个元素，并在进行条件检查之前递增<code>i</code>。然后，在条件检查时因为<code>i</code>等于 6 不符合条件<code>i < 5</code>，所以退出循环。最终<code>ourArray</code>的值是<code>[5]</code>。
本质上，<code>do...while</code>循环确保循环内的代码至少运行一次。
让我们通过<code>do...while</code>循环将值添加到数组中。
</section>

## Instructions
<section id='instructions'>
将代码中的<code>while</code>循环更改为<code>do...while</code>循环，实现数字 10 添加到<code>myArray</code>中，代码执行完时，<code>i</code>等于<code>11</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>'Kristian', 'lastName'</code>应该返回 <code>'Vos'</code>"
    testString: assert(lookUpProfile('Kristian','lastName') === "Vos", '<code>"Kristian", "lastName"</code>应该返回 <code>"Vos"</code>');
  - text: "<code>'Sherlock', 'likes'</code>应该返回 <code>['Intriguing Cases', 'Violin']</code>"
    testString: assert.deepEqual(lookUpProfile("Sherlock", "likes"), ["Intriguing Cases", "Violin"], '<code>"Sherlock", "likes"</code>应该返回 <code>["Intriguing Cases", "Violin"]</code>');
  - text: "<code>'Harry','likes'</code>应该返回 an array"
    testString: assert(typeof lookUpProfile("Harry", "likes") === "object", '<code>"Harry","likes"</code>应该返回 an array');
  - text: "<code>'Bob', 'number'</code>应该返回 'No such contact'"
    testString: assert(lookUpProfile("Bob", "number") === "No such contact", '<code>"Bob", "number"</code>应该返回 "No such contact"');
  - text: "<code>'Bob', 'potato'</code>应该返回 'No such contact'"
    testString: assert(lookUpProfile("Bob", "potato") === "No such contact", '<code>"Bob", "potato"</code>应该返回 "No such contact"');
  - text: "<code>'Akira', 'address'</code>应该返回 'No such property'"
    testString: assert(lookUpProfile("Akira", "address") === "No such property", '<code>"Akira", "address"</code>应该返回 "No such property"');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    },
];


//Write your function in between these comments
function lookUpProfile(name, prop){
    for(var i in contacts){
      if(contacts[i].firstName === name) {
        return contacts[i][prop] || "No such property";
      }
    }
   return "No such contact";
}
//Write your function in between these comments

lookUpProfile("Akira", "likes");
```

</section>
              