---
id: 5895f70cf9fc0f352b528e66
title: Serialization of a User Object
challengeType: 2
forumTopicId: 301563
localeTitle: Сериализация пользовательского объекта
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Сериализация и десериализация являются важными понятиями в отношении аутентификации. Сериализация объекта означает преобразование его содержимого в небольшой <em>ключ, по</em> существу, который затем может быть десериализован в исходный объект. Это то, что позволяет нам узнать, кто передал сервер без необходимости отправлять данные аутентификации, такие как имя пользователя и пароль, при каждом запросе на новую страницу. Чтобы правильно установить это, нам нужно иметь функцию сериализации и функцию десериализации. В паспорте мы создаем их с <code>passport.serializeUser( OURFUNCTION )</code> и <code>passport.deserializeUser( OURFUNCTION )</code> . Сериализуемый вызов вызывается с двумя аргументами, полным пользовательским объектом и обратным вызовом, используемым паспортом. Возвращенный в обратном вызове должен быть уникальным ключом для идентификации этого пользователя - самым простым из них является использование пользователями _id в объекте, поскольку оно должно быть уникальным по мере его создания MongoDb. Аналогичным образом десериализуется вызов с этим ключом и функцией обратного вызова для паспорта, но на этот раз нам нужно взять этот ключ и вернуть полный объект пользователей на обратный вызов. Чтобы выполнить поиск по запросу Mongo _id, вам нужно будет создать <code>const ObjectID = require(&#39;mongodb&#39;).ObjectID;</code> , а затем для его использования вы вызываете <code>new ObjectID(THE_ID)</code> . Обязательно добавьте MongoDB в качестве зависимости. Вы можете увидеть это в следующих примерах: <pre> passport.serializeUser ((пользователь, сделано) =&gt; {
   done (null, user._id);
 }); </pre><br><pre> passport.deserializeUser ((id, done) =&gt; {
        db.collection ( &#39;пользователи&#39;). findOne (
            {_id: новый ObjectID (id)},
            (err, doc) =&gt; {
                done (null, doc);
            }
        );
    }); </pre> ПРИМЕЧАНИЕ. Этот deserializeUser выдает ошибку до тех пор, пока мы не настроим БД на следующем шаге, поэтому закомментируем весь блок и просто <code>done(null, null)</code> вызов <code>done(null, null)</code> в функции deserializeUser. Представьте свою страницу, когда вы думаете, что у вас все в порядке.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Serialize user function correct
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /passport.serializeUser/gi, 'You should have created your passport.serializeUser function'); assert.match(data, /null, user._id/gi, 'There should be a callback in your serializeUser with (null, user._id)'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Deserialize user function correct
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /passport.deserializeUser/gi, 'You should have created your passport.deserializeUser function'); assert.match(data, /null,( |)null/gi, 'There should be a callback in your deserializeUser with (null, null) for now'); }, xhr => { throw new Error(xhr.statusText); })
  - text: MongoDB is a dependency
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'mongodb', 'Your project should list "mongodb" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Mongodb properly required including the ObjectId
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require.*("|')mongodb("|')/gi, 'You should have required mongodb'); assert.match(data, /new ObjectID.*id/gi, 'Even though the block is commented out, you should use new ObjectID(id) for when we add the database'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
