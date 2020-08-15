---
id: 58a25bcff9fc0f352b528e7e
title: Hash and Compare Passwords Synchronously
challengeType: 2
isHidden: false
forumTopicId: 301579
localeTitle: 同步哈希和比较密码 
---

## Description
<section id='description'>
温馨提醒，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-bcrypt/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-bcrypt/'> GitHub </a>上克隆。
同步哈希也是非常简单的，但是会造成延迟特别是在哈希计算量大并且次数多的情况下。同步进行哈希是通过调用 

```js
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
```

<hr>把同步哈希添加到你的代码并输入到控制台，和之前一样，需要用到的变量已经提前定义好，你不需要做任何改动。你可能已经注意到，即使你是用异步的方式哈希同一个密码，结果也是不一样的。这是因为每次哈希的盐都是随机生成的，你可以通过第三个哈希字符串的头22的字符来验证。
当你需要对比用户输入的值, 你只需要使用 compareSync 方法: 

```js
var result = bcrypt.compareSync(myPlaintextPassword, hash);
```

返回的结果为 ``true`` 或者 ``false``。
</section>

## Instructions
<section id='instructions'>
添加这个方法并输出把控制台来验证同步哈希已经成功了。
提交页面当你觉得已经完成的时候。如果你遇到任何错误，你可以参考这个<a href='https://gist.github.com/JosephLivengood/9a2698fb63e42d9d8b4b84235c08b4c4'>链接</a>中已经完成的代码。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 同步生成哈希并正确地对比
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /START_SYNC[^]*hash.*=.*bcrypt.hashSync.*myPlaintextPassword( |),( |)saltRounds[^]*END_SYNC/gi, 'You should call bcrypt.hashSync on myPlaintextPassword with saltRounds'); assert.match(data, /START_SYNC[^]*result.*=.*bcrypt.compareSync.*myPlaintextPassword( |),( |)hash[^]*END_SYNC/gi, 'You should call bcrypt.compareSync on myPlaintextPassword with the hash generated in the last line'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
