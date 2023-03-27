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

> [!NOTE] Ми додамо вас до одної або більше команд на GitHub, форумі нашої спільноти та чат-серверах. Якщо у вас немає дозволу до платформи, яку хочете модерувати, [зверніться до персоналу](FAQ.md#additional-assistance).

## Moderating GitHub

Moderators have two primary responsibilities on GitHub:

1. Triaging and responding to issues.
2. Reviewing and merging pull requests (aka QA).

### Moderating GitHub Issues

We use our main [`freeCodeCamp/freeCodeCamp`](https://github.com/freeCodeCamp/freeCodeCamp/issues) repository as a common issue tracker for all of our repositories. We get new issues every day, all of which need to be triaged, labeled, and addressed. This is also a great place to start helping with open-source codebase contributions.

#### Issue Triage

[Triaging](https://en.wikipedia.org/wiki/Triage) is a process of prioritizing attention to each new issue report. We have an extensive list of labels that we use to mark each issue's priority, category, status, and scope.

You can help us organize and triage the issue reports by applying labels from [this list](https://github.com/freeCodeCamp/freeCodeCamp/labels). Usually, a description is available alongside the label explaining its meaning.

Please pay special attention to the labels `"help wanted"` and `"first timers only"`. These are to be added to threads that you think can be opened up to potential contributors for making a pull request.

A `"first timers only"` label should be applied to a trivial issue (ie a typo fix) and should include additional information. You can use this [reply template](moderator-handbook.md#first-timer-only-issues) for triage.

#### Closing Stale, Outdated, Inactive Issues and Pull Requests

- Stale issues or PRs are those that have not seen any activity from the author for 21 days (3 weeks from the last activity), but only after a moderator has requested more information/changes.

- Activity is defined as: Comments requesting an update on the PR and triages like `status: update needed` label, etc.

- If the contributor asks for additional assistance or even time, the above can be relaxed and revisited after a response is given. In any case, the mods should use their best judgment to resolve the outstanding PR's status.

> [!TIP] We recommend you use this list of standard [reply templates](moderator-handbook.md#reply-templates) while triaging issues.

### Moderating Pull Requests

Pull Requests (PRs) are how contributors submit changes to freeCodeCamp's repository. We must perform Quality Assurance (QA) on pull requests before we decide whether to merge them, request changes, or close them.

#### Types of Pull Requests

1. **Challenge instruction edits**

   These are changes to the text of challenges - the description, instructions, or test text.

   You can also review these right on GitHub and decide whether to merge them. We need to be a bit more careful about these because millions of people will encounter this text as they work through the freeCodeCamp curriculum. Does the pull request make the text more clear without making it much longer? Are the edits relevant and not overly pedantic? Remember that our goal is for challenges to be as clear and as short as possible. They aren't the place for obscure details. Contributors may try to add links to resources to the challenges.

   You can close invalid pull requests and reply to them with these [reply templates](moderator-handbook.md#closing-invalid-pull-requests).

   If the changes look good, please ensure to leave an approval with a "LGTM" (Looks Good To Me) comment. Once a pull request gets at least two approvals (including yours) from the moderators or the dev-team, you can go ahead and merge it.

2. **Challenge code edits**

   These are changes to the code in a challenge - the challenge seed, challenge solution, and test strings.

   These pull requests need to be pulled down from GitHub and tested on your local computer or Gitpod to make sure the challenge tests can still be passed with the current solution and to make sure the new code doesn't introduce any errors.

   Some contributors may try to add additional tests to cover pedantic corner-cases. We need to be careful to not make the challenge too complicated. These challenges and their tests should be as simple and intuitive as possible. Aside from the algorithm challenges and interview prep section, learners should be able to solve each challenge within about 2 minutes.

   You can close invalid pull requests and reply to them with these [reply templates](moderator-handbook.md#closing-invalid-pull-requests).

   If the changes look good, please ensure to leave an approval with a "LGTM" comment. Once a pull request gets at least two approvals (including yours) from the moderators or the dev-team, you can go ahead and merge it.

3. **Platform changes**

   These code edits change the functionality of the freeCodeCamp platform itself.

   Sometimes contributors try to make changes without much explanation, but for code changes, we need to make sure there's a genuine need for the change. These pull requests should reference an existing GitHub issue where the reasons for the change are discussed. Then you can open the pull request on your computer and test them out locally.

   After you've done so, if the changes look good, don't merge them quite yet. You can comment on the pull request saying "LGTM", then mention **"@freeCodeCamp/dev-team"** so they can take a final look.

4. **Automated PRs (Dependabot)**

   Some PRs are automated dependency updates made via an integration. You should not merge or approve these PRs. One of the dev-team members will take care of reviewing and merging such automated PRs.

#### How to review, merge or close pull requests

##### Assign yourself to a pull request:

First of all, when you choose a pull request to review, you should assign yourself to it. You can do this by clicking the "assign yourself" link below the "assignees" part on the right-hand column of GitHub's interface.

Depending on the type of pull request it is, follow the corresponding rules listed previously.

##### Ensure the CI checks are passing:

Before merging any pull request, make sure that GitHub is reporting all checks to be passing (green check marks) on the pull requests. If you see any of the checks failing, please investigate and clarify the root cause. Is the change being made breaking our tests? Will the site build correctly if the PR is merged? These checks are critical for the stability of the platform.

> [!WARNING] Merging a PR that fails CI/CD checks can cause difficulties for all stakeholders, including the dev-team and contributors.

##### Handling Merge Conflicts:

Sometimes there will be a merge conflict.

This means that another pull request has made a change to that same part of that same file. GitHub has a tool for addressing these merge conflicts right on GitHub. You can try to address these conflicts. Use your best judgment.

The pull request's changes will be on top, and the main branch's changes will be on the bottom. Sometimes there will be redundant information in there that can be deleted. Before you finish, be sure to delete the `<<<<<<`, `======`, and `>>>>>>` that Git adds to indicate areas of conflict.

If you are uncertain, please ask one of the fellow moderators or the dev-team for assistance.

##### Merging a valid pull request:

If the pull request looks ready to merge (and doesn't require additional approvals - remember we require at least two), you can go ahead and merge it. Be sure to use the default **"Squash and Merge"** option. This will squash all the pull requests commits down into a single commit, making the Git history much easier to read.

> You should then comment on the pull request, thanking the contributor in your own personal way!

If the pull request author is a "first-time contributor" you should also congratulate them on their first merged pull request to the repository. You can look at the upper right-hand corner of the PR's body to determine a first-time contributor. It will show `First-time contributor` as shown below:

<details>
   <summary>
      First-time contributor badge on pull requests (screenshot)
   </summary>

   <br>
   <img src="https://i.imgur.com/dTQMjGM.png" alt="First time contributor badge on pull requests" />
</details>

If the pull request doesn't look ready to merge, you can politely reply telling the author what they should do to get it ready. Hopefully, they will reply and get their pull request closer to ready.

If you need a second opinion on a pull request, go ahead and leave your comments on the pull request, then add the "discussing" label to the pull request.

##### Closing an Invalid Pull Request:

Often, a pull request will be low effort. You can usually tell this immediately when the contributor didn't bother checking the checkboxes in the Pull Request Template or used a generic pull request title like "Made changes" or "Update index.md".

There are also situations where the contributor is trying to add a link to their website, include a library they created, or have a frivolous edit that doesn't help anyone but themselves.

You can close these invalid pull requests and reply to them with these [reply templates](moderator-handbook.md#closing-invalid-pull-requests).

#### Other Guidelines for Moderators on GitHub

Though you will have write access to freeCodeCamp's repository, **you should never push code directly to freeCodeCamp repositories**. All code should enter freeCodeCamp's codebase in the form of a pull request from a fork of the repository.

Also, you should never accept your own PRs. They must be reviewed by another moderator, just like any other PR.

If you notice anyone breaking the [Code of Conduct](https://code-of-conduct.freecodecamp.org) on GitHub issues, or opening pull requests with malicious content or code, email `support[at]freecodecamp.org` with a link to the offending pull request, and we can consider banning them from freeCodeCamp's GitHub organization entirely.

## Moderating the Forum

As a moderator, you help keep our community an enjoyable place for anyone to learn and get help. You will deal with flagged posts and handle spam, off-topic, and other inappropriate conversations.

Note that once you are a moderator on the forum, you will start to see blue moderator hints about forum members, like "this is the first time [person] has posted - let's welcome them to the community!" or "[person] hasn't posted in a long time - let's welcome them back."

![A blue text message saying "this is the first time [person] has posted - let's welcome them to the community!](https://i.imgur.com/mPmVgzK.png)

These are opportunities for you to welcome them and make them feel extra special. You never know which person who's marginally involved may become our next super-helper, helping many other people in their coding journey. Even the slightest kindness may trigger a cascade of good deeds.

### Видалення повідомлень на форумі

Модератори форуму можуть видаляти дописи користувачів. Це потрібно робити лише в таких випадках:

1. Користувач опублікував зображення порнографічного характеру або насильницького змісту.
2. Користувач розмістив посилання або код зловмисного характеру, що може завдати шкоди іншим користувачам, які натискають на них.
3. Користувач заповнив тред величезною кількістю спаму.
4. Обліковий запис був створений, без сумніву, для спаму.

### Dealing with Spam

For the first spam post of a legitimate user (ie. whose intent isn't to spam the forum but to learn/contribute to the forum), send them a message explaining the problem, and remove the link or post as appropriate. Leave a note on the user's profile explaining the action you have taken. If the problem persists, then quietly block the user from posting (using the silence option on the User Admin panel). Send the user a warning with the [Code of Conduct](https://code-of-conduct.freecodecamp.org). Check the box in the private message indicating that your message is a "formal warning."

As a moderator, you can ask questions and report incidents in the [mod-team forum section](https://forum.freecodecamp.org/c/mod-team/4).

### Що робити із розмовами поза темою

Дописи або теми, які розміщені в неправильному місці, можна перемістити або перейменувати так, щоб це було доречним.

За виняткових обставин модератор може поділити дискусію на декілька тредів.

Знову ж таки, якщо у вас виникають проблеми чи запитання, напишіть у категорії `«Staff»` та позначте іншого модератора, аби він переглянув ваші дії.

### Що робити з опублікованим розв'язком

Якщо у своїй відповіді користувач надсилає розв'язок до навчальної програми freeCodeCamp, видаліть її та використайте відповідь **Solution Instead of Help** (або іншу своїми словами).

Якщо у своїй відповіді дописувальник надсилає кінцевий розв'язок навчальної програми freeCodeCamp, розмийте її та використайте відповідь **Blurred Spoiler Solution**.

Якщо користувач просить відгук щодо розв'язку, перемістіть тред до підфоруму зворотного зв'язку та розмийте розв'язок за потреби. Якщо користувач публікує розв'язок для того, щоб похвастатися, вилучіть тред зі списку та використайте відповідь **Solutions Thread**.

### Користувачі, які не досягнули відповідного віку

Наші [Умови користування](https://freecodecamp.org/terms) вимагають, щоб користувачі freeCodeCamp досягли 13-річного віку. Якщо користувач зізнався, що не досягнув 13-річного віку, надішліть йому повідомлення (нижче) та призупиніть обліковий запис. Потім **напишіть на `support[at]freecodecamp.org` для видалення облікових записів на /learn та форумі (із посиланням на обліковий запис на форумі).**

```markdown
SUBJECT: Users under 13 are not allowed to use the forum per our Terms of Service.

It has come to our attention that you are under 13 years of age. Per the [freeCodeCamp Terms of Service](https://freecodecamp.org/terms), you must be at least 13 years old to use the site or the forum. We will be deleting both your freeCodeCamp account and your forum account. This restriction keeps us in compliance with United States laws.

Please rejoin once you have reached at least 13 years of age.

Thank you for understanding.
```

### Moderating Via Cell-phone

Moderating the forum is possible via a cell-phone but you may encounter some usage quirks. This is not an exhaustive list.

- When trying to include a "Canned reply" in a response, if the menu doesn't open (after clicking on the gear), click on the text area first then try it again.
- The moderator's 'wrench' is at the bottom of the view-port but if you click it and cannot see the "Select Posts" button because it has scrolled out of view, you may need to try to scroll to it, though sometimes that doesn't work in which case moving to a desktop/laptop monitor may be needed.
- Sometimes clicking on the three-dot menu below a post can hide the reply icon. Reload the page to get it back.

## Модерація фейсбуку

Якщо ви помітили будь-що, що порушує наш [Кодекс поведінки](https://code-of-conduct.freecodecamp.org/), вам необхідно негайно це видалити.

Іноді люди публікують те, що вважають смішним. Вони не усвідомлюють, що те, що вони сказали чи поширили, може трактуватися як образа.  Такі дописи потрібно видаляти, але немає потреби кидати користувача в бан. Ми надіємося, що користувач зрозуміє, що його допис був неприйнятним та, відповідно, видаленим.

Іноді допис є кричущим порушенням норм і не може бути розумно обґрунтованим з позиції культурних відмінностей чи нерозуміння англійської мови.  У такому випадку вам слід серйозно розглянути можливість заблокувати користувача у групі на фейсбуці.

## Модерація дискорду

Модератори вирішують порушення нашого [Кодексу поведінки](https://code-of-conduct.freecodecamp.org/) у чаті наступним чином:

> [!NOTE] Camperbot служить нашим ботом та всі команди використовують дискордовий інтерфейс команд. Ви можете переглянути список всіх команд, ввівши `/` у будь-якому каналі.

1. **Переконайтеся, що користувач навмисно порушив [Кодекс поведінки](https://code-of-conduct.freecodecamp.org).**

   Не всі порушення [Кодексу поведінки](https://code-of-conduct.freecodecamp.org) є навмисними. Нові користувачі можуть публікувати велику кількість коду для допомоги, не знаючи, що це може заважати розмові. У таких випадках ви можете просто попросити їх скористатися такими сервісами, як CodePen чи Pastebin.

2. **Якщо користувач безсумнівно та навмисно порушує [Кодекс поведінки](https://code-of-conduct.freecodecamp.org), модератор робить наступне:**

   Через незначне порушення можна видати попередження за допомогою команди `/warn`. Через грубші порушення користувача можна видалити із сервера тимчасово (за допомогою команди `/kick`) або назавжди (за допомогою команди `/ban`). У деяких випадках користувачу просто потрібен час, щоб охолонути та зібрати свої думки: команда `/mute` дозволяє запобігти взаємодії користувача зі спільнотою на встановлений час. Заглушений користувач бачить розмову, але не може публікувати повідомлення чи додавати реакції.

   Усі модераційні команди приймають параметр `reason`, що вимагає короткого пояснення вжитих дій. Модераційні дії, виконані із допомогою бота, будуть записані до `#mod-log`, що дозволяє нам залишатись на одній хвилі. Вбудовані інструменти дискорду не записуються, тому їх потрібно уникати.

   > [!WARNING] Причина модераційної команди буде додана до особистого повідомлення користувачу. Не забудьте бути професіоналом.

3. **Створення приватного обговорення**

   Можуть виникнути ситуації, коли до користувача варто звернутися особисто. Цього не варто робити в особистих повідомленнях, бо це може призвести до ситуацій, коли ви заявляєте одне, а учасник – інше. Замість цього використайте функціональність бота та створіть приватне обговорення:

   - Викличте команду `/private`, де `target` – користувач, із яким ви бажаєте відкрити особисте обговорення.
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

   Не ставте себе вище спільноти.  **Ви – спільнота.** І спільнота довірила вам захищати щось особливе, що ми всі розділяємо: _привітне_ місце для нових розробників.

   Якщо ви вихваляєтесь своє посадою модератора, люди можуть почуватися некомфортно поруч з вами, так само, як почуваються некомфортно поруч із поліцією, попри те, що не порушували закон. Це лише людська природа.

7. **Не суперечте іншим модераторам**

   Якщо ви не погоджуєтесь із діями іншого модератора, обговоріть це особисто з ним або у каналі #mod-chat. Ніколи не відхиляйте дії модератора і ніколи не суперечте іншим модераторам привселюдно. Натомість спокійно все обговоріть у `#mod-chat` та переконайте модератора, що він сам повинен скасувати бан або змінити свою думку.

   _Пам'ятайте: ми всі в одній команді. Ми хочемо гідно представляти роль модераторів і діяти у взаємній згоді._

8. **Бесіда з іншими модераторами**

   У нас є кімната `#mod-chat` лише для модераторів. Скористайтеся нею! Якщо ви сумніваєтесь в тій чи іншій ситуації, зверніться за допомогою до інших модераторів. Якщо ви вважаєте, що якісь питання потрібно обговорити – зробіть це. Ви – частина команди, а ми цінуємо вклад кожного! Навіть якщо ви не погоджуєтесь із цими рекомендаціями або [Кодексом поведінки](https://code-of-conduct.freecodecamp.org)!

9. **Тимчасова неактивність**

   Якщо протягом певного часу ви не можете бути активним модератором у зв'язку із відпусткою, хворобою чи іншою причиною, упевніться, що ви попередили інших у каналі `#mod-chat`. Це для того, щоб ми розуміли, чи зможемо розраховувати на вашу регулярну активність на сервері чи ні.

## Як стати модератором

Припустимо, ви допомагаєте іншим у спільноті протягом певного часу. У такому випадку наша команда модераторів зверне на вас увагу та запропонує вас як потенційного модератора [нашому персоналу](https://forum.freecodecamp.org/g/Team). Легшого та коротшого шляху немає.

Якщо вас затвердили, ми додамо вас до команд модераторів на [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [форумі](https://forum.freecodecamp.org/g/moderators), чаті тощо.

> [!NOTE] Для GitHub: після того, як вас затвердять модератором, ви отримаєте запрошення до репозиторію Github. Вам потрібно перейти за посиланням [freeCodeCamp GitHub Organization Invitation](https://github.com/orgs/freeCodeCamp/invitation), щоб отримати запрошення.
> 
> Це необхідно для того, щоб ми могли надати вам дозвіл робити записи у наших репозиторіях.

## Як ми звільняємо неактивних модераторів

Зверніть увагу, що ми часто видаляємо модераторів, яких вважаємо неактивними. Коли ми так робимо, то надсилаємо наступне повідомлення:

```markdown
This is a standard message notifying you that, since you don't seem to have been an active moderator recently, we're removing you from our moderator team. We deeply appreciate your help in the past.

If you think we did this in error, or once you're ready to come back and contribute more, just reply to this message letting us know.
```

## Як працює кімната помічників

Ми вітаємо кожного у [кімнаті помічників на нашому чат-сервері](https://discord.gg/PRyKn3Vbay). Ми створили її для модераторів та інших кемперів, які роблять внесок до нашої спільноти будь-яким чином, включно з навчальними групами.

Ми прискаємо, що помічники читають всі повідомлення, у яких вони згадуються через **@username**. Все інше за бажанням, однак не соромтесь читати інші дописи та взаємодіяти з ними.

## Комунікація із посередниками

До вас можуть звернутися організації, які хочуть стати партнерами або співвласниками бренду freeCodeCamp. Як тільки ви зрозумієте їхні наміри, **закінчуйте діалог** та направте їх на пошту `team[at]freecodecamp.org`.

Нам часто надходять такі пропозиції, тому вигоду співпраці для нашої спільноти краще вирішувати персоналу (зазвичай воно того не варте).

## Як діяти при зверненнях щодо (психічного) здоров'я

Іноді трапляються ситуації, коли користувачам потрібна медична допомога, або у них наявні ментальні порушення та вони шукають підтримки.

Згідно з нашою політикою вам варто уникати приватних розмов щодо таких речей. Якщо ситуація напряму стосується freeCodeCamp, потрібно мати запис розмови. Дайте зрозуміти, що ми не медичні працівники та заохотьте користувача звернутись по медичну допомогу.

Попри те, що іноді це важко, уникайте підказок чи порад, а радше направте користувача на пошук професійної допомоги!

Якщо таке трапилося у чаті, створіть приватний канал для користувача та команди модераторів. Це можна зробити за допомогою команди `private`.

- Користувачу гарантована конфіденційність.
- У публічному чаті більше немає порушень.
- Інші учасники команди можуть втрутитися, якщо вам некомфортно справлятися із ситуацією самостійно.

Корисні посилання:

http://suicide.org/international-suicide-hotlines.html

## Примітка щодо свободи слова

Інколи люди захищатимуть щось образливе або провокативне, обґрунтовуючи це «свободою слова».

Цей вебкомікс від XKCD ідеально підсумовує думки більшості спільнот стосовно свободи слова.

<div align="center"><img src='./images/github/xkcd-free-speech.png' width="400" height="400" /></div>

Дякуємо за увагу та допомогу спільноті розробників!

## Зразки відповідей

Це зразки відповідей, які можна використовувати під час розгляду запитів на злиття та їх сортування.

> Ви можете створити власний список збережених відповідей за допомогою вбудованої функції [збережені відповіді](https://github.com/settings/replies/) на GitHub або використовувати подані нижче.

### Подяка

```markdown
Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 🎉
```

### Подяка та вітання

> Подяка та заохочення помічників-початківців.

```markdown
Hi @username. Congrats on your first pull request (PR)! 🎉

Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 📝
```

### Помилка збірки

```markdown
Hey @username

We would love to be able to merge your changes but it looks like there is an error with the CI build. ⚠️

Once you resolve these issues, we will be able to review your PR and merge it. 😊

---

Feel free to reference the [contributing guidelines](how-to-work-on-coding-challenges.md#testing-challenges) for instructions on running the CI build locally. ✅
```

### Синхронізація форку

> Якщо PR не відповідає даті гілки `main`.

````markdown
Hey @username

We would love to be able to merge your changes, but it looks like the branch is not up to date. ⚠️

To resolve this error, you will have to sync the latest changes from the `main` branch of the `freeCodeCamp/freeCodeCamp` repo.

Using the command line, you can do this in three easy steps:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream main
````

Якщо ви використовуєте графічний інтерфейс користувача, просто виконайте команду `Add a new remote...` та використайте посилання `git://github.com/freeCodeCamp/freeCodeCamp.git`.

Once you sync your fork and pass the build, we will be able to review your PR and merge it. 😊

---

Feel free to reference the ["Syncing a fork"](https://help.github.com/articles/syncing-a-fork/) article on GitHub for more insight on how to keep your fork up-to-date with the upstream repository. 🔄
````

### Merge Conflicts

> When PR has merge conflicts that need to be resolved.¹

```markdown
Hey @username

We would love to be able to merge your changes, but it looks like you have some merge conflicts. ⚠️

Once you resolve these conflicts, we will be able to review your PR and merge it. 😊

---

If you're not familiar with the merge conflict process, feel free to look over GitHub's guide on ["Resolving a merge conflict"](https://help.github.com/articles/resolving-a-merge-conflict-on-github/). 🔍️

Also, it's good practice on GitHub to write a brief description of your changes when creating a PR. 📝
````

¹ Якщо у новачка виникає конфлікт злиття, то спеціалісти розв’яжуть цю проблему замість нього.

### Дублікат

> Якщо PR повторюється або є дублікатом.

```markdown
Hey @username

This PR seems to make similar changes as the existing PR <#number>. As such, we are going to close this as duplicate.

If you feel you have additional changes to expand upon this PR, please feel free to push your commits and request this PR be reopened.

Thanks again! 😊

---

If you have any questions, feel free to ask questions on the ["Contributors" category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://discord.gg/PRyKn3Vbay).
```

### Закриття недійсних запитів на злиття

> Якщо PR недійсний.

```markdown
Hey @username

Thank you for opening this pull request.

This is a standard message notifying you that we've reviewed your pull request and have decided not to merge it. We would welcome future pull requests from you.

Thank you and happy coding.
```

> Якщо PR містить посилання на зовнішні джерела.

```markdown
Thank you for your pull request.

We are closing this pull request. Please suggest links and other details to add the challenge's corresponding guide post through [a forum topic](https://forum.freecodecamp.org/new-topic?category=Contributors&title=&body=**What%20is%20your%20hint%20or%20solution%20suggestion%3F**%0A%0A%0A%0A%0A**Challenge%3A**%0A%0A%0A**Link%20to%20the%20challenge%3A**) instead.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

### Додавання коментарів про помилки новачків

```markdown
As a new contributor, we encourage you to read our [contributing guidelines](https://contribute.freecodecamp.org).

We expect our contributors to be aware of the process specific to this project. Following the guidelines religiously earns you the respect of fellow maintainers and saves everyone time.

Some examples of this are:

1. Do not edit files directly through GitHub – while you can, it's not a good idea.
2. Make sure you follow the PR checklist and not just tick things off; otherwise, we won't take you seriously.
3. Use the correct way to link issues in the description of the PR by updating the `XXXXXX`. Do not just add issue numbers everywhere and anywhere you feel like.
4. Keep mentions and review requests to a minimum. We understand you are excited about contributing, and our maintainers will get back to you as soon as they get a chance.
5. Do not work directly off your `main` branch - create a new branch for the changes you are working on.

We appreciate you taking the time to help us, and we hope to see more contributions from you.

Happy Contributing.
```

### Закриття недійсних завдань

> Якщо завдання стосується коду користувача.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue seems to be a request for help. Instead of asking for help here, please click the **"Get Help"** button on the challenge on freeCodeCamp and choose the **"Ask for help"** option, which will help you create a question in the right part of the forum. Volunteers on the forum usually respond to questions within a few hours and can help determine if there is an issue with your code or the challenge's tests.

If the forum members determine there is nothing wrong with your code, you can request this issue to be reopened.

Thank you and happy coding.
```

> Якщо завдання повторює вже наявне.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue appears to be very similar to issue #XXXXX, so we are closing it as a duplicate.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

> Якщо завдання вирішено на проміжній версії.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that the problem you mentioned here is present in production, but that it has already been fixed in staging. This means that the next time we push our staging branch to production, this problem should be fixed. Because of this, we're closing this issue.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

### Завдання `first timer only`

> Якщо завдання вважається прийнятним для тих, хто робить внесок до коду вперше.

```markdown
Thanks for opening this issue.

This looks like something that can be fixed by "first-time" code contributors to this repository. Here are the files that you should be looking at to work on a fix:

List of files:

1. ...
2. ...
3. ...

Please make sure you read our [guidelines for contributing](https://contribute.freecodecamp.org/#/), we prioritize contributors following the instructions in our guides. Join us in our [chat room](https://discord.gg/PRyKn3Vbay) or our [forum](https://forum.freecodecamp.org/c/contributors/3) if you need help contributing; our moderators will guide you through this.

Sometimes we may get more than one pull request. We typically accept the most quality contribution followed by the one that is made first.

Happy contributing.
```

### Запити на призначення

```md
We typically do not assign issues. Instead, we accept the first pull request that comprehensively solves the issue.

Issues labelled with `help wanted` or `first timers only` are open for contributions.

Please make sure you read [our guidelines for contributing](https://contribute.freecodecamp.org/#/). We prioritize contributors following the instructions in our guide. Join us in [our chat room](https://discord.gg/PRyKn3Vbay) or [the forum](https://forum.freecodecamp.org/c/contributors/3) if you need help contributing - our community will be happy to assist you.
```
