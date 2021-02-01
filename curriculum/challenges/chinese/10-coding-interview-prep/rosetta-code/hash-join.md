---
id: 5956795bc9e2c415eb244de1
title: 哈希加入
challengeType: 5
videoUrl: ''
dashedName: hash-join
---

# --description--

<p> <a href='https://en.wikipedia.org/wiki/Join_(SQL)#Inner_join' title='wp：Join_（SQL）#Inner_join'>内连接</a>是一种操作，它根据匹配的列值将两个数据表组合到一个表中。实现此操作的最简单方法是<a href='https://en.wikipedia.org/wiki/Nested loop join' title='wp：嵌套循环连接'>嵌套循环连接</a>算法，但更可扩展的替代方法是<a href='https://en.wikipedia.org/wiki/hash join' title='wp：哈希联接'>散列连接</a>算法。 </p><p>实现“散列连接”算法，并演示它通过下面列出的测试用例。 </p><p>您应该将表表示为在编程语言中感觉自然的数据结构。 </p><p> “散列连接”算法包含两个步骤： </p>哈希阶段：从两个表中的一个表创建一个<a href='https://en.wikipedia.org/wiki/Multimap' title='wp：Multimap'>多</a>图，从每个连接列值映射到包含它的所有行。多图必须支持基于散列的查找，它比简单的线性搜索更好地扩展，因为这是该算法的重点。理想情况下，我们应该为较小的表创建多图，从而最小化其创建时间和内存大小。加入阶段：扫描另一个表，通过查看之前创建的多图来查找匹配的行。 <p>在伪代码中，算法可以表示如下： </p><pre>让A =第一个输入表（或理想情况下，更大的输入表）
设B =第二个输入表（或理想情况下，较小的输入表）
令j <sub>A</sub> =表A的连接列ID
令j <sub>B</sub> =表B的连接列ID
让M <sub>B</sub> =一个多图，用于从单个值映射到表B的多行（从空白开始）
让C =输出表（从空开始）
对于表B中的每一行b：
  将b放在密钥b（j <sub>B</sub> ）下的多映射M <sub>B中</sub>
对于表A中的每一行a：
  对于a（j <sub>A</sub> ）项下多图M <sub>B中的</sub>每一行b：
    设c =第a行和第b行的串联
    将行c放在表C中<p></p>
</pre>测试用例<p>输入</p><table><tbody><tr><td style='padding: 4px; margin: 5px;'><table style='border:none; border-collapse:collapse;'><tbody><tr><td style='border:none'> <i>A =</i> </td><td style='border:none'><table><tbody><tr><th style='padding: 4px; margin: 5px;'>年龄</th><th style='padding: 4px; margin: 5px;'>名称</th></tr><tr><td style='padding: 4px; margin: 5px;'> 27 </td><td style='padding: 4px; margin: 5px;'>约拿</td></tr><tr><td style='padding: 4px; margin: 5px;'> 18 </td><td style='padding: 4px; margin: 5px;'>艾伦</td></tr><tr><td style='padding: 4px; margin: 5px;'> 28 </td><td style='padding: 4px; margin: 5px;'>荣耀</td></tr><tr><td style='padding: 4px; margin: 5px;'> 18 </td><td style='padding: 4px; margin: 5px;'>大力水手</td></tr><tr><td style='padding: 4px; margin: 5px;'> 28 </td><td style='padding: 4px; margin: 5px;'>艾伦</td></tr></tbody></table></td><td style='border:none; padding-left:1.5em;' rowspan='2'></td><td style='border:none'> <i>B =</i> </td><td style='border:none'><table><tbody><tr><th style='padding: 4px; margin: 5px;'>字符</th><th style='padding: 4px; margin: 5px;'>复仇者</th></tr><tr><td style='padding: 4px; margin: 5px;'>约拿</td><td style='padding: 4px; margin: 5px;'>鲸鱼</td></tr><tr><td style='padding: 4px; margin: 5px;'>约拿</td><td style='padding: 4px; margin: 5px;'>蜘蛛</td></tr><tr><td style='padding: 4px; margin: 5px;'>艾伦</td><td style='padding: 4px; margin: 5px;'>鬼</td></tr><tr><td style='padding: 4px; margin: 5px;'>艾伦</td><td style='padding: 4px; margin: 5px;'>植物大战僵尸</td></tr><tr><td style='padding: 4px; margin: 5px;'>荣耀</td><td style='padding: 4px; margin: 5px;'>巴菲</td></tr></tbody></table></td></tr><tr><td style='border:none'> <i>j <sub>A</sub> =</i> </td><td style='border:none'> <i><code>Name</code> （即第1栏）</i> </td><td style='border:none'> <i>j <sub>B</sub> =</i> </td><td style='border:none'> <i><code>Character</code> （即第0列）</i> </td></tr></tbody></table></td><td style='padding: 4px; margin: 5px;'></td></tr></tbody></table><p>产量</p><table><tbody><tr><th style='padding: 4px; margin: 5px;'> A.Age </th><th style='padding: 4px; margin: 5px;'>一个名字</th><th style='padding: 4px; margin: 5px;'> B.Character </th><th style='padding: 4px; margin: 5px;'> B.Nemesis </th></tr><tr><td style='padding: 4px; margin: 5px;'> 27 </td><td style='padding: 4px; margin: 5px;'>约拿</td><td style='padding: 4px; margin: 5px;'>约拿</td><td style='padding: 4px; margin: 5px;'>鲸鱼</td></tr><tr><td style='padding: 4px; margin: 5px;'> 27 </td><td style='padding: 4px; margin: 5px;'>约拿</td><td style='padding: 4px; margin: 5px;'>约拿</td><td style='padding: 4px; margin: 5px;'>蜘蛛</td></tr><tr><td style='padding: 4px; margin: 5px;'> 18 </td><td style='padding: 4px; margin: 5px;'>艾伦</td><td style='padding: 4px; margin: 5px;'>艾伦</td><td style='padding: 4px; margin: 5px;'>鬼</td></tr><tr><td style='padding: 4px; margin: 5px;'> 18 </td><td style='padding: 4px; margin: 5px;'>艾伦</td><td style='padding: 4px; margin: 5px;'>艾伦</td><td style='padding: 4px; margin: 5px;'>植物大战僵尸</td></tr><tr><td style='padding: 4px; margin: 5px;'> 28 </td><td style='padding: 4px; margin: 5px;'>荣耀</td><td style='padding: 4px; margin: 5px;'>荣耀</td><td style='padding: 4px; margin: 5px;'>巴菲</td></tr><tr><td style='padding: 4px; margin: 5px;'> 28 </td><td style='padding: 4px; margin: 5px;'>艾伦</td><td style='padding: 4px; margin: 5px;'>艾伦</td><td style='padding: 4px; margin: 5px;'>鬼</td></tr><tr><td style='padding: 4px; margin: 5px;'> 28 </td><td style='padding: 4px; margin: 5px;'>艾伦</td><td style='padding: 4px; margin: 5px;'>艾伦</td><td style='padding: 4px; margin: 5px;'>植物大战僵尸</td></tr></tbody></table><p></p><p></p><p>输出表中行的顺序并不重要。 </p><p>如果你使用数字索引数组来表示表行（而不是按名称引用列），你可以用<code style='white-space:nowrap'>[[27, "Jonah"], ["Jonah", "Whales"]]</code>的形式表示输出行。 。 </p><hr>

# --hints--

`hashJoin`是一个函数。

```js
assert(typeof hashJoin === 'function');
```

`hashJoin([{ age: 27, name: "Jonah" }, { age: 18, name: "Alan" }, { age: 28, name: "Glory" }, { age: 18, name: "Popeye" }, { age: 28, name: "Alan" }], [{ character: "Jonah", nemesis: "Whales" }, { character: "Jonah", nemesis: "Spiders" }, { character: "Alan", nemesis: "Ghosts" }, { character:"Alan", nemesis: "Zombies" }, { character: "Glory", nemesis: "Buffy" }, { character: "Bob", nemesis: "foo" }])`应该返回`[{"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Whales"}, {"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Spiders"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}, {"A_age": 28,"A_name": "Glory", "B_character": "Glory", "B_nemesis": "Buffy"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}]`

```js
assert.deepEqual(hashJoin(hash1, hash2), res);
```

# --seed--

## --after-user-code--

```js
const hash1 = [
    { age: 27, name: 'Jonah' },
    { age: 18, name: 'Alan' },
    { age: 28, name: 'Glory' },
    { age: 18, name: 'Popeye' },
    { age: 28, name: 'Alan' }
];

const hash2 = [
    { character: 'Jonah', nemesis: 'Whales' },
    { character: 'Jonah', nemesis: 'Spiders' },
    { character: 'Alan', nemesis: 'Ghosts' },
    { character: 'Alan', nemesis: 'Zombies' },
    { character: 'Glory', nemesis: 'Buffy' },
    { character: 'Bob', nemesis: 'foo' }
];

const res = [
    { A_age: 27, A_name: 'Jonah', B_character: 'Jonah', B_nemesis: 'Whales' },
    { A_age: 27, A_name: 'Jonah', B_character: 'Jonah', B_nemesis: 'Spiders' },
    { A_age: 18, A_name: 'Alan', B_character: 'Alan', B_nemesis: 'Ghosts' },
    { A_age: 18, A_name: 'Alan', B_character: 'Alan', B_nemesis: 'Zombies' },
    { A_age: 28, A_name: 'Glory', B_character: 'Glory', B_nemesis: 'Buffy' },
    { A_age: 28, A_name: 'Alan', B_character: 'Alan', B_nemesis: 'Ghosts' },
    { A_age: 28, A_name: 'Alan', B_character: 'Alan', B_nemesis: 'Zombies' }
];

const bench1 = [{ name: 'u2v7v', num: 1 }, { name: 'n53c8', num: 10 }, { name: 'oysce', num: 9 }, { name: '0mto2s', num: 1 }, { name: 'vkh5id', num: 4 }, { name: '5od0cf', num: 8 }, { name: 'uuulue', num: 10 }, { name: '3rgsbi', num: 9 }, { name: 'kccv35r', num: 4 }, { name: '80un74', num: 9 }, { name: 'h4pp3', num: 6 }, { name: '51bit', num: 7 }, { name: 'j9ndf', num: 8 }, { name: 'vf3u1', num: 10 }, { name: 'g0bw0om', num: 10 }, { name: 'j031x', num: 7 }, { name: 'ij3asc', num: 9 }, { name: 'byv83y', num: 8 }, { name: 'bjzp4k', num: 4 }, { name: 'f3kbnm', num: 10 }];
const bench2 = [{ friend: 'o8b', num: 8 }, { friend: 'ye', num: 2 }, { friend: '32i', num: 5 }, { friend: 'uz', num: 3 }, { friend: 'a5k', num: 4 }, { friend: 'uad', num: 7 }, { friend: '3w5', num: 10 }, { friend: 'vw', num: 10 }, { friend: 'ah', num: 4 }, { friend: 'qv', num: 7 }, { friend: 'ozv', num: 2 }, { friend: '9ri', num: 10 }, { friend: '7nu', num: 4 }, { friend: 'w3', num: 9 }, { friend: 'tgp', num: 8 }, { friend: 'ibs', num: 1 }, { friend: 'ss7', num: 6 }, { friend: 'g44', num: 9 }, { friend: 'tab', num: 9 }, { friend: 'zem', num: 10 }];
```

## --seed-contents--

```js
function hashJoin(hash1, hash2) {

  return [];
}
```

# --solutions--

```js
function hashJoin(hash1, hash2) {
  const hJoin = (tblA, tblB, strJoin) => {
    const [jA, jB] = strJoin.split('=');
    const M = tblB.reduce((a, x) => {
      const id = x[jB];
      return (
        a[id] ? a[id].push(x) : (a[id] = [x]),
        a
      );
    }, {});

    return tblA.reduce((a, x) => {
      const match = M[x[jA]];
      return match ? (
                a.concat(match.map(row => dictConcat(x, row)))
            ) : a;
    }, []);
  };

  const dictConcat = (dctA, dctB) => {
    const ok = Object.keys;
    return ok(dctB).reduce(
            (a, k) => (a[`B_${k}`] = dctB[k]) && a,
            ok(dctA).reduce(
                (a, k) => (a[`A_${k}`] = dctA[k]) && a, {}
            )
        );
  };

  return hJoin(hash1, hash2, 'name=character');
}
```
