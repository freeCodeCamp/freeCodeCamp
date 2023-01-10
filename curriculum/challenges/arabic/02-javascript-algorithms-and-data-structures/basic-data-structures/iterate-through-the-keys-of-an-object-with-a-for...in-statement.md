---
id: 587d7b7d367417b2b2512b1d
title: المرور علي هُوِيَّات الكائن باستخدام for في تعبيرات (Iterate Through the Keys of an Object with a for...in Statement)
challengeType: 1
forumTopicId: 301162
dashedName: iterate-through-the-keys-of-an-object-with-a-for---in-statement
---

# --description--

في بعض الأحيان قد تحتاج إلى المرور علي جميع keys داخل object. يتطلب هذه صياغة محددة في JavaScript تسمى <dfn>for...in</dfn>. بالنسبة إلى object باسم `users`، يمكن أن يبدو هذا كالتالي:

```js
for (let user in users) {
  console.log(user);
}
```

سيؤدي هذا إلى تسجيل `Alan`, و `Jeff`, و `Sarah` - كل قيمة على سطرها الخاص.

في هذه العبارة حددت متغيرًا `user`، وكما ترى, تمت إعادة تعيين هذا المتغير خلال كل دورة لكل key من keys في object، مما أدى إلى ظهور اسم كل مستخدم مطبوع في وحدة التحكم.

**ملاحظة:** لا تحتفظ كائن (objects) بترتيب هُوِيَّات (keys) المخزنة مثل قوائم (arrays)؛ لذا فإنّ مكان الهُوِيَّة (key) على كائن (object) ما، أو الترتيب النسبي الذي يظهر به، لا يهم عند الإشارة إلى تلك الهُوِيَّة (key) أو الوصول إليه.

# --instructions--

لقد حددنا وظيفة `countOnline` التي تقبل حجة (argument) واحدة (وهي users object). استخدم <dfn>for...in</dfn> داخل هذه الوظيفة (function) للمرور بتكرار علي users object الذي تم تمريره في (function) وإنتاج عدد المستخدمين الذين تم تعيين خاصية `online` الخاصة بهم إلى `true`. مثال على users object الذي يمكن تمريره إلى `countOnline` يظهر أدناه. سيكون لكل مستخدم خاصية `online` بقيمة `true` أو `false`.

```js
{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
```

# --hints--

الوظيفة `countOnline` يجب أن تستخدم `for in` للمرور علي هُوِيَّات الكائن (object keys) من كائن (object) المّرر إليه.

```js
assert(
  code.match(
    /for\s*\(\s*(var|let|const)\s+[a-zA-Z_$]\w*\s+in\s+[a-zA-Z_$]\w*\s*\)/
  )
);
```

الوظيفة `countOnline` يجب أن تنتج `1` عندما يمّرر إليها الكائن (object) الآتي `{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }`

```js
assert(countOnline(usersObj1) === 1);
```

الوظيفة `countOnline` يجب أن تنتج `2` عندما يمّرر إليها الكائن (object) الآتي `{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }`

```js
assert(countOnline(usersObj2) === 2);
```

الوظيفة `countOnline` يجب أن تنتج `0` عندما يمّرر إليها الكائن (object) الآتي `{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }`

```js
assert(countOnline(usersObj3) === 0);
```

# --seed--

## --after-user-code--

```js
const usersObj1 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

const usersObj2 = {
  Alan: {
    online: true
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: true
  }
}


const usersObj3 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: false
  }
}
```

## --seed-contents--

```js
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(countOnline(users));
```

# --solutions--

```js
function countOnline(usersObj) {
  let online = 0;
  for(let user in usersObj){
    if(usersObj[user].online) {
      online++;
    }
  }
  return online;
}
```
