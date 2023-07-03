# Офіційний довідник модератора freeCodeCamp

Цей довідник допоможе із модерацією у нашій спільноті. Сюди входять розмови та взаємодії у завданнях та запитах на злиття на GitHub, форумі, чатах та інших офіційних спільнотах, які ми підтримуємо.

> [!NOTE] Модератори freeCodeCamp мають доступ до всіх частин спільноти. Це означає, що ми довіряємо вам наглядати за будь-якою з них.

Ви можете стати модератором будь-якої цікавої вам платформи. Деякі модератори допомагають тільки на GitHub, а інші залучені на форумі. Деякі модератори активні всюди.

Для нас важливо, щоб ви насолоджувались роллю модератора та проводили свій час там, де вам цікаво.

> «З великою владою приходить велика відповідальність.» - Дядько Бен

Темперамент модератора важливіший за технічні навички.

Слухайте. Допомагайте. Не зловживайте владою.

Спільнота freeCodeCamp вітає кожного і ми хочемо, щоб так було надалі.

У нас є [Кодекс поведінки](https://code-of-conduct.freecodecamp.org), який керує нашою спільнотою. Чим менше правил, тим легше їх запам’ятати. Ви можете прочитати ці правила та закріпити їх у пам’яті [тут](https://code-of-conduct.freecodecamp.org).

> [!NOTE] Ми додамо вас до однієї або більше команд на GitHub, форумі нашої спільноти та чат-серверах. Якщо у вас немає дозволу до платформи, яку хочете модерувати, [зверніться до персоналу](FAQ.md#additional-assistance).

## Mодерація GitHub

Модератори мають два головних обов’язки на GitHub:

1. Сортувати завдання та відповідати на них.
2. Переглядати та сортувати запити на злиття (тобто QA).

### Модерація завдань на GitHub

Ми використовуємо головний репозиторій [`freeCodeCamp/freeCodeCamp`](https://github.com/freeCodeCamp/freeCodeCamp/issues), щоб відстежувати завдання всіх репозиторіїв. Щодня ми отримуємо завдання, які потрібно відсортувати, позначити та вирішити. Це також чудове місце, щоб почати робити внески до відкритої кодової бази.

#### Сортування завдань

[Сортування](https://en.wikipedia.org/wiki/Triage) — це процес визначення пріоритету кожного нового завдання. У нас є список позначок, які ми використовуємо для визначення пріоритету, категорії, статусу та масштабу завдання.

Ви можете допомогти нам організовувати та сортувати завдання, використовуючи позначки з [цього списку](https://github.com/freeCodeCamp/freeCodeCamp/labels). Зазвичай поруч біля кожної позначки описано її значення.

Зверніть увагу на позначки `"help wanted"` та `"first timers only"`. Їх потрібно додавати до тредів, які підійдуть потенційним помічникам для створення запиту на злиття.

Для розв’язання незначної проблеми, як-от друкарської помилки, рекомендовано застосувати позначку «first timers only» разом із додатковою інформацією. Для цього ви можете використати [шаблони відповідей](reply-templates.md#first-timer-only-issues).

#### Закриті, застарілі, неактивні завдання та запити на злиття

- Старими завданнями або PR називають ті, на яких не було жодної активності від автора протягом 21 дня (3 тижні від останньої активності), але лише після того, як модератор запросив більше інформації/змін.

- Ми визначаємо активність як коментарі із запитом оновлення PR та сортування типу `status: update needed` тощо.

- Якщо помічнику потрібні допомога або час, ми повернемося до нього після отримання відповіді. У будь-якому випадку, модератори повинні розсудливо вирішувати спірні статуси запитів.

> [!TIP] Рекомендуємо використовувати список стандартних [шаблонів відповідей](reply-templates.md) під час сортування завдань.

### Модерація запитів на злиття

Помічники вносять зміни до репозиторію freeCodeCamp завдяки запитам на злиття (PR). Нам потрібно перевірити запит на злиття на забезпечення якості (QA) перед тим, як об’єднати чи закрити його.

#### Види запитів на злиття

1. **Редагування інструкції завдань**

   Ці зміни стосуються тексту завдань (опису, інструкції або тесту).

   Це можна зробити одразу на GitHub та вирішити, чи потрібно їх об’єднувати. Нам потрібно подбати про мільйони людей, які працюють з цим текстом під час навчання на freeCodeCamp. Чи дійсно текст буде зрозумілішим, але не стане більшим? Чи доречні ці зміни? Пам’ятайте, що наша ціль — зробити завдання зрозумілими та короткими. Зайві деталі лише відволікають. Можна додати посилання на ресурс, який стосується теми завдання.

   Ви можете закрити недійсний PR та відповісти на нього за допомогою [шаблона](reply-templates.md#closing-invalid-pull-requests).

   Якщо зміни позитивні, залиште коментар «LGTM» (Looks Good To Me). Як тільки запит отримає принаймні два схвалення від модераторів чи розробників (включно з вашим), ви можете об’єднати його.

2. **Редагування коду завдань**

   Це зміни коду завдання: початок виконання, розв’язок завдання та тестові рядки.

   Такі PR необхідно обрати зі списку GitHub і перевірити на локальному комп’ютері або Gitpod, щоб переконатися, що тести завдань працюватимуть з поточним розв’язком та новий код не призводить до помилок.

   Деякі помічники можуть спробувати додати додаткові тести, щоб покрити всі можливі випадки. Важливо, аби завдання не виявилось занадто складним. Завдання та їх тести повинні бути максимально простими для розуміння. Окрім алгоритмічних завдань та розділу з інтерв’ю, учні повинні вирішити кожне завдання протягом двох хвилин.

   Ви можете закрити недійсний PR та відповісти на нього за допомогою [шаблона](reply-templates.md#closing-invalid-pull-requests).

   Якщо зміни позитивні, залиште коментар «LGTM». Як тільки запит отримає принаймні два схвалення від модераторів чи розробників (включно з вашим), ви можете об’єднати його.

3. **Зміни до платформи**

   Ці зміни коду змінюють функціональність платформи freeCodeCamp.

   Часом розробники вносять зміни без пояснень, але нам потрібно знати причину для зміни коду. Такі PR мають містити посилання на наявне завдання на GitHub, де обговорюються причини внесення змін. Тоді ви зможете відкрити PR на своєму комп’ютері та протестувати їх локально.

   Якщо ви бачите позитивні зміни, не об’єднуйте їх одразу. Напишіть коментар «LGTM» та згадайте **@freeCodeCamp/dev-team**, щоб вони остаточно затвердили зміни.

4. **Автоматизовані PR (Dependabot)**

   Деякі PR є автоматизованими оновленнями залежностей, які відбуваються через інтеграцію. Вам не потрібно об’єднувати чи схвалювати такі запити. Хтось із команди розробників займеться переглядом і об’єднанням цих автоматизованих PR.

#### Як переглядати, об’єднувати та закривати PR

##### Призначте собі запит на злиття:

Перш за все, якщо ви обираєте запит для перегляду, його потрібно призначити собі. Для цього потрібно натиснути на посилання «assign yourself» під «assignees» у правій частині інтерфейсу GitHub.

Дотримуйтесь вищевказаних правил залежно від виду запиту на злиття.

##### Переконайтеся, що пройшла перевірка CI:

Перед об’єднанням будь-якого запиту потрібно переконатись, що GitHub звітує проходження перевірки (повинні стояти зелені прапорці). Якщо бракує якогось з прапорців, виявіть причину. Внесена зміна заважає тестам? Якщо об’єднати запит, чи функціонуватиме сайт? Такі перевірки важливі для стійкості платформи.

> [!WARNING] Об’єднання запитів, які не пройшли перевірку CI/CD, може спричинити труднощі зацікавленим сторонам, включно з розробниками та помічниками.

##### Як діяти при конфлікті об’єднання:

Інколи виникають конфлікти об’єднання.

Це означає, що зроблено інший запит, який вносить зміни до тієї самої частини файлу. GitHub має інструмент для боротьби з конфліктами об’єднання. Ви можете спробувати розв’язати ці конфлікти. Будьте розсудливими.

Зміни запиту знаходяться зверху, а головної гілки — знизу. Інколи там буде багато непотрібної інформації, яку можна видалити. Як закінчите, не забудьте видалити `<<<<<<`, `======` та `>>>>>>`, які Git додає для визначення місць конфлікту.

Якщо ви невпевнені, попросіть допомоги в когось з модераторів чи розробників.

##### Об’єднання дійсного запиту на злиття:

Якщо запит вже готовий і він не вимагає додаткових схвалень (пам’ятайте, що потрібно принаймні два), його потрібно об’єднати. Використайте опцію за замовчуванням **"Squash and Merge"**. Це збере всі запити на злиття в одне затвердження, що зробить історію Git легкою для читання.

> Після цього потрібно залишити коментар на запиті та особисто подякувати помічнику!

Якщо автором є «first-time contributor», привітайте його з першим успішним запитом, об’єднаним з репозиторієм. Статус автора можна побачити у правому верхньому куті запиту. Ви побачите `First-time contributor`:

<details>
   <summary>
      Значок нового помічника на запиті (знімок екрана)
   </summary>

   <br>
   <img src="https://i.imgur.com/dTQMjGM.png" alt="Значок нового помічника на запиті" />
</details>

Якщо запит не готовий до об’єднання, надайте автору ввічливу відповідь щодо подальших дій. Сподіваємося, вони нададуть відповідь та внесуть зміни до свого запиту.

Якщо вам потрібна чиясь думка щодо запиту, залиште коментар та додайте позначку «discussing».

##### Закриття недійсного запиту на злиття:

Запитам часто приділяють мало уваги та зусиль. Це помітно з того, що помічник не відмітив прапорці або використав загальні назви, схожі до «Made changes» чи «Update index.md».

Бувають і ситуації, коли помічник додає посилання на свій вебсайт, включно зі створеною ним бібліотекою, або вносить поверхневі зміни, які на користь лише йому.

Ви можете закрити недійсні PR та відповісти на них за допомогою [шаблона](reply-templates.md#closing-invalid-pull-requests).

#### Filtering Pull Requests

To sort Pull Requests for Quality Assurance for quick access to PRs that are ready for review, do not have a merge conflict, are not blocked, and have all status checks in green, use the following link to apply the filters:

[Direct link with filter applied](https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=is%3Aopen+is%3Apr+-label%3A%22status%3A+blocked%22+-label%3A%22status%3A+merge+conflict%22+status%3Asuccess+draft%3Afalse)

#### Other Guidelines for Moderators on GitHub

Though you will have write access to freeCodeCamp's repository, **you should never push code directly to freeCodeCamp repositories**. All code should enter freeCodeCamp's codebase in the form of a pull request from a fork of the repository.

Also, you should never accept your own PRs. They must be reviewed by another moderator, just like any other PR.

If you notice anyone breaking the [Code of Conduct](https://code-of-conduct.freecodecamp.org) on GitHub issues, or opening pull requests with malicious content or code, email `support[at]freecodecamp.org` with a link to the offending pull request, and we can consider banning them from freeCodeCamp's GitHub organization entirely.

## Модерація форуму

As a moderator, you help keep our community an enjoyable place for anyone to learn and get help. You will deal with flagged posts and handle spam, off-topic, and other inappropriate conversations.

Note that once you are a moderator on the forum, you will start to see blue moderator hints about forum members, like "this is the first time [person] has posted - let's welcome them to the community!" or "[person] hasn't posted in a long time - let's welcome them back."

![A blue text message saying "this is the first time [person] has posted - let's welcome them to the community!](https://i.imgur.com/mPmVgzK.png)

These are opportunities for you to welcome them and make them feel extra special. You never know which person who's marginally involved may become our next super-helper, helping many other people in their coding journey. Even the slightest kindness may trigger a cascade of good deeds.

### Видалення повідомлень на форумі

Forum moderators can delete users' posts. You should only do this for the following instances:

1. Користувач опублікував зображення порнографічного характеру або насильницького змісту.
2. Користувач розмістив посилання або код зловмисного характеру, що може завдати шкоди іншим користувачам, які натискають на них.
3. Користувач заповнив тред величезною кількістю спаму.
4. Обліковий запис був створений, без сумніву, для спаму.

### Що робити зі спамом

For the first spam post of a legitimate user (ie. whose intent isn't to spam the forum but to learn/contribute to the forum), send them a message explaining the problem, and remove the link or post as appropriate. Leave a note on the user's profile explaining the action you have taken. If the problem persists, then quietly block the user from posting (using the silence option on the User Admin panel). Send the user a warning with the [Code of Conduct](https://code-of-conduct.freecodecamp.org). Check the box in the private message indicating that your message is a "formal warning."

As a moderator, you can ask questions and report incidents in the [mod-team forum section](https://forum.freecodecamp.org/c/mod-team/4).

### Що робити із розмовами поза темою

Posts or topics that seem to be in the wrong place can be recategorized or renamed to whatever would be appropriate.

In exceptional circumstances, it may be appropriate for a moderator to fork a discussion into multiple threads.

Again, if you have any problems or questions, make a post with your actions in the `"Staff"` category, and tag another moderator if you want them to review your moderating actions.

### Що робити з опублікованим розв’язком

If a user replies in a help thread for the freeCodeCamp curriculum with a solution, remove it and use the **Solution Instead of Help** canned reply (or a similar response in your own words).

If the OP (Original Poster) replies within a freeCodeCamp curriculum help thread with their final solution, blur it, and use the **Blurred Spoiler Solution** canned reply.

If a user creates a thread asking for feedback on a solution, move the thread to the feedback subforum and blur the solution, as necessary. If the user is only posting the solution to show it off, then unlist the thread and use the **Solutions Thread** canned reply.

### Користувачі, які не досягнули відповідного віку

Our [Terms of Service](https://freecodecamp.org/terms) require that freeCodeCamp users be at least 13 years of age. If a user reveals that they are under the age of 13, send them the message (below), suspend the account then **Email `support[at]freecodecamp.org` to delete the user's freeCodeCamp /learn and forum accounts as well (providing a link to the offending forum account).**

```markdown
SUBJECT: Users under 13 are not allowed to use the forum per our Terms of Service.

It has come to our attention that you are under 13 years of age. Per the [freeCodeCamp Terms of Service](https://freecodecamp.org/terms), you must be at least 13 years old to use the site or the forum. We will be deleting both your freeCodeCamp account and your forum account. This restriction keeps us in compliance with United States laws.

Please rejoin once you have reached at least 13 years of age.

Thank you for understanding.
```

### Модерація через мобільний телефон

Moderating the forum is possible via a cell phone but you may encounter some usage quirks. This is not an exhaustive list.

- Якщо при спробі «заготовленої відповіді» не відкривається меню (після натискання на зубчасте колесо), натисніть на текстове поле та спробуйте ще раз.
- Модераторський «гайковий ключ» знаходиться в нижній частині вікна попереднього перегляду, але якщо ви натиснете на нього, і не бачите кнопку «Select Posts», тому що вона поза полем зору, вам доведеться прокрутити екран, хоча іноді це не працює. У такому випадку вам потрібно перейти на монітор комп’ютера/ноутбука.
- Іноді значок відповіді може приховатись, якщо натиснути на меню з трьома крапками під публікацією. Перезавантажте сторінку, щоб повернути його.

## Модерація Facebook

If you see anything that seems to break our [Code of Conduct](https://code-of-conduct.freecodecamp.org/), you should delete it immediately.

Sometimes people will post things that they think are funny. They don't realize that what they said or what they shared could be interpreted as offensive. You should delete such posts, but not necessarily ban the person. Hopefully, the user will come to understand that what they posted was inappropriate because the post was deleted.

But if it is an egregious offense that can't reasonably be attributed to a cultural difference or a misunderstanding of the English language. In that case, you should strongly consider blocking the member from the Facebook group.

## Модерація Discord

Here's how moderators deal with violations of our [Code of Conduct](https://code-of-conduct.freecodecamp.org/) on our chat server:

> [!NOTE] Camperbot служить нашим ботом та всі команди використовують дискордовий інтерфейс команд. Ви можете переглянути список всіх команд, ввівши `/` у будь-якому каналі.

1. **Переконайтеся, що користувач навмисно порушив [Кодекс поведінки](https://code-of-conduct.freecodecamp.org).**

   Не всі порушення [Кодексу поведінки](https://code-of-conduct.freecodecamp.org) є навмисними. Нові користувачі можуть публікувати велику кількість коду для допомоги, не знаючи, що це може заважати розмові. У таких випадках ви можете просто попросити їх скористатися такими службами, як CodePen чи Pastebin.

2. **Якщо користувач безсумнівно та навмисно порушує [Кодекс поведінки](https://code-of-conduct.freecodecamp.org), модератор робить наступне:**

   Через незначне порушення можна видати попередження за допомогою команди `/warn`. Через грубші порушення користувача можна видалити із сервера тимчасово (за допомогою команди `/kick`) або назавжди (за допомогою команди `/ban`). У деяких випадках користувачу просто потрібен час, щоб охолонути та зібрати свої думки: команда `/mute` дозволяє запобігти взаємодії користувача зі спільнотою на встановлений час. Заглушений користувач бачить розмову, але не може публікувати повідомлення чи додавати реакції.

   Усі модераційні команди приймають параметр `reason`, що вимагає короткого пояснення вжитих дій. Модераційні дії, виконані із допомогою бота, будуть записані до `#mod-log`, що дозволяє нам залишатись на одній хвилі. Вбудовані інструменти дискорду не записуються, тому їх потрібно уникати.

   > [!WARNING] Причина модераційної команди буде додана до особистого повідомлення користувачу. Не забудьте бути професіоналом.

3. **Створення приватного обговорення**

   Можуть виникнути ситуації, коли до користувача варто звернутися особисто. Цього не варто робити в особистих повідомленнях, бо це може призвести до ситуацій, коли ви заявляєте одне, а кемпер — інше. Замість цього використайте функціональність бота та створіть приватне обговорення:

   - Викличте команду `/private`, де `target` — користувач, з яким ви бажаєте відкрити особисте обговорення.
   - Бот створить новий канал та додасть згаданого користувача, а також всіх модераторів із роллю `Your Friendly Moderator`. До каналу додані усі модератори для прозорості, але лише модератор, який викликав команду може взаємодіяти з учасником. Виняток: модератор просить допомоги.
   - Коли обговорення закінчено, натисніть кнопку `❌ Close` _на першому повідомленні у приватному каналі_, щоб бот закрив та видалив канал.

4. **Видалення повідомлень**

   Наш бот автоматично вносить видалені повідомлення до каналу `#mod-log`. Якщо повідомлення не відповідає нашому Кодексу поведінки або є неприпустимим для нашої спільноти, його можна видалити.

   Зауважте: якщо повідомлення порушує умови використання дискорду, про це потрібно повідомити через https://dis.gd/report **перед** видаленням.

5. **Не погрожуйте вжити заходів**

   Якщо користувач порушує [Кодекс поведінки](https://code-of-conduct.freecodecamp.org), ніколи не погрожуйте вжити заходів та не попереджайте їх публічно. Натомість поговоріть приватно, використовуючи команду `/private` або модераційні команди бота.

   Якщо порушення очевидно ненавмисне і не потребує модерації чи приватної бесіди, повідомте користувача-правопорушника про його дії.

   Наприклад:

   - Користувач публікує великий код та просить допомоги:

     Модератор: **@username**, будь ласка, використовуйте CodePen або Pastebin, коли публікуєте довгий код.

   - Або вам потрібно пояснити причину:

     Модератор: **@username**, будь ласка, використовуйте CodePen або Pastebin, коли публікуєте довгий код, оскільки це порушує чат та може вважатися спамом згідно із нашим [Кодексом поведінки](https://code-of-conduct.freecodecamp.org).

   - Дрібні та ненавмисні порушення [Кодексу поведінки](https://code-of-conduct.freecodecamp.org):

     Модератор: дружнє нагадування дотримуватись [Кодексу поведінки](https://code-of-conduct.freecodecamp.org): https://code-of-conduct.freecodecamp.org/

6. **Не хвастайтесь тим, що ви модератор**

   Не ставте себе вище спільноти.  **Ви — спільнота.** І спільнота довірила вам захищати щось особливе, що ми всі розділяємо: _привітне_ місце для нових розробників.

   Якщо ви вихваляєтесь своєю посадою модератора, люди можуть почуватися некомфортно поруч з вами так само, як почуваються некомфортно поруч із поліцією, попри те, що не порушували закон. Це лише людська природа.

7. **Не суперечте іншим модераторам**

   Якщо ви не погоджуєтесь із діями іншого модератора, обговоріть це особисто з ним або у каналі #mod-chat. Ніколи не відхиляйте дії модератора і ніколи не суперечте іншим модераторам привселюдно. Натомість спокійно все обговоріть у `#mod-chat` та переконайте модератора, що він сам повинен скасувати бан або змінити свою думку.

   _Пам’ятайте: ми всі в одній команді. Ми хочемо гідно представляти роль модераторів і діяти у взаємній згоді._

8. **Бесіда з іншими модераторами**

   У нас є кімната `#mod-chat` лише для модераторів. Скористайтеся нею! Якщо ви сумніваєтесь в тій чи іншій ситуації, зверніться за допомогою до інших модераторів. Якщо ви вважаєте, що якісь питання потрібно обговорити — зробіть це. Ви — частина команди, а ми цінуємо вклад кожного! Навіть якщо ви не погоджуєтесь із цими рекомендаціями або [Кодексом поведінки](https://code-of-conduct.freecodecamp.org)!

9. **Тимчасова неактивність**

   Якщо протягом певного часу ви не можете бути активним модератором у зв’язку із відпусткою, хворобою чи іншою причиною, переконайтесь, що ви попередили інших у каналі `#mod-chat`. Це для того, щоб ми розуміли, чи зможемо розраховувати на вашу регулярну активність на сервері чи ні.

## Як стати модератором

Suppose you are helping people in the community consistently over time. In that case, our moderator team will eventually take notice, and one of them will mention you as a possible moderator to [our staff](https://forum.freecodecamp.org/g/Team). There are no shortcuts to becoming a moderator.

If you are approved, we will add you to our moderator teams on [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [forum](https://forum.freecodecamp.org/g/moderators), chat, etc.

> [!NOTE] Для GitHub: після того, як вас затвердять модератором, ви отримаєте запрошення до репозиторію Github. Вам потрібно перейти за посиланням [freeCodeCamp GitHub Organization Invitation](https://github.com/orgs/freeCodeCamp/invitation), щоб отримати запрошення.
> 
> Це необхідно для того, щоб ми могли надати вам дозвіл робити записи у наших репозиторіях.

## Як працює кімната помічників

Anyone is welcome in the [contributors room on our chat server](https://discord.gg/PRyKn3Vbay). It is the designated chat room for moderators and other campers who contribute to our community in any number of ways, including through study groups.

We assume contributors will read anything in this room that directly mentions them with an **@username**. Everything else is optional, but feel free to read anything anyone posts in there and interact.

## Комунікація із посередниками

You may be approached by organizations who want to partner or co-brand with freeCodeCamp somehow. Once you realize that this is what they're after, **please stop talking to them** and tell them to email `team[at]freecodecamp.org`.

We get proposals like this all the time, and the staff are in the best position to judge whether such a relationship will be worth it for our community (and it rarely is).

## Як діяти при зверненнях щодо (психічного) здоров’я

You may come across situations where users seek medical advice or are dealing with mental health issues and are looking for support.

As a matter of policy, you should avoid talking privately about these matters. Should the situation reflect back to freeCodeCamp, we want to have the conversation(s) on record. Make it clear that we are not medical professionals and that you encourage the user to find professional help.

As difficult as it sometimes can be, avoid giving any tips or advice and rather point the user in the direction of seeking professional help!

If this happens on our chat server: Create a private channel for the user and the moderator team. This can be done with the bot's `private` command.

- Користувачу гарантована конфіденційність.
- У публічному чаті більше немає порушень.
- Інші учасники команди можуть втрутитися, якщо вам некомфортно справлятися із ситуацією самостійно.

Helpful URLs:

http://suicide.org/international-suicide-hotlines.html

## Примітка щодо свободи слова

Sometimes people will defend something offensive or incendiary that they said as "free speech."

This XKCD comic summarizes perfectly most communities' thoughts on free speech.

<div align="center"><img src='./images/github/xkcd-free-speech.png' width="400" height="400" /></div>

Thanks for reading this, and thanks for helping the developer community!
