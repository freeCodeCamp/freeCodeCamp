# Офіційний довідник мовного керівника freeCodeCamp

Цей посібник допоможе вам налаштувати та використовувати інструменти для локалізації.

## Як запросити нових помічників до Ghost

Ghost дозволяє налаштувати декілька рівнів користувачів.

Більшість запрошень матимуть рівень «Contributor». Цей рівень дозволяє користувачеві створювати чернетки. Обирайте цю роль, коли запрошуєте нового перекладача.

Рівень «Author» дозволяє користувачу створювати чернетки та публікувати їх.

Рівень «Editor» дозволяє користувачу переглядати всі чернетки та публікувати їх. Обирайте цю роль, коли запрошуєте нового редактора.

Рівень «Administrator» використовується для персоналу freeCodeCamp та мовних керівників.

### Як побудовані статті

Ми використовуємо підхід на основі [JAMStack](https://www.google.com/search?q=what+is+jamstack), щоб імплементувати статті. Ця стратегія призводить до того, що статичний вебсайт швидко кешується та обслуговується з CDN.

[Ghost](https://ghost.org) діє як наша платформа керування вмістом, а [11ty](https://11ty.dev) надає статтям статичних ресурсів (HTML, JavaScript та CSS). На наших серверах розгортаються тільки ці статичні ресурси.

Цей процес автоматичний та запускається періодично. Якщо ви опублікуєте щось зараз, на сайті новин воно з’явиться через пару годин.

Ви можете знайти розклад збірки та статус тут: https://github.com/freeCodeCamp/news#build

## Як вказати автора перекладеної статті

Автор та оригінал статті прив’язуються автоматично, якщо цей код додано до Code Injection -> головної секції в налаштуваннях чернеток на Ghost.

```html
<script>
  const fccOriginalPost = 'link';
</script>
```

Де `link` — посилання на оригінал статті.

## Як оновити популярні статті

> [!TIP] Змінювати статті у нижньому колонтитулі принаймні раз на місяць дозволяє покращити результати пошуку в гуглі.

Існує два місця, в яких потрібно змінювати популярні статті.

- [Репозиторій навчальної програми](https://github.com/freeCodeCamp/freeCodeCamp/)
- [Репозиторій CDN](https://github.com/freeCodeCamp/cdn)

Для кожної статті потрібно створювати коротший заголовок, який використовуватиметься у нижньому колонтитулі.

### Зміна популярних статей у навчальній програмі

Популярні статті у нижньому колонтитулі навчальної програми можна змінити, відредагувавши файл у `client/i18n/locales/<language>/trending.json`.

Цей файл є файлом `*.json`, який має форму об’єкта з ключами властивостей у формі `article0title` та `article0link`.

Кожне число представляє одну із 30 статей у колонтитулі. Переконайтесь, що заголовок та посилання відповідають один одному.

Ось приклад того, як повинна виглядати частина файлу `trending.json`.

```json
{
  "article0title": "Unire CSV con Python",
  "article0link": "https://www.freecodecamp.org/italian/news/come-combinare-file-multipli-in-formato-csv-con-8-righe-di-codice/",
  "article1title": "Il comando Git push",
  "article1link": "https://www.freecodecamp.org/italian/news/il-comando-git-push-spiegato/",
  "article2title": "Centrare immagini in CSS",
  "article2link": "https://www.freecodecamp.org/italian/news/come-centrare-un-immagine-usando/",
  "article3title": "I codici Alt",
  "article3link": "https://www.freecodecamp.org/italian/news/codici-alt/",
  "article4title": "Tenere a bada il footer",
  "article4link": "https://www.freecodecamp.org/italian/news/come-mantenere-il-footer-al-suo-posto/",
  "article5title": "Cosa è un'API?",
  "article5link": "https://www.freecodecamp.org/italian/news/cose-un-api-in-italiano-per-favore/",
  ...
}
```

Вам доведеться [побудувати перекладеного клієнта локально](how-to-enable-new-languages.md), щоб переконатись, що довжина заголовків правильна. Кожен заголовок повинен залишатися в одному рядку та не переходити в інший.

### Зміна популярних статей у CDN

Файлом у репозиторії CDN є файл `universal/trending/<language>.yaml`.

Цей файл має іншу форму. Наприклад, ось вміст файлу для перших шести статей:

```yaml
article0title: 'Unire CSV con Python'
article0link: 'https://www.freecodecamp.org/italian/news/come-combinare-file-multipli-in-formato-csv-con-8-righe-di-codice/'
article1title: 'Il comando Git push'
article1link: 'https://www.freecodecamp.org/italian/news/il-comando-git-push-spiegato/'
article2title: 'Centrare immagini in CSS'
article2link: 'https://www.freecodecamp.org/italian/news/come-centrare-un-immagine-usando/'
article3title: 'I codici Alt'
article3link: 'https://www.freecodecamp.org/italian/news/codici-alt/'
article4title: 'Tenere a bada il footer'
article4link: 'https://www.freecodecamp.org/italian/news/come-mantenere-il-footer-al-suo-posto/'
article5title: 'Cosa è API?'
article5link: 'https://www.freecodecamp.org/italian/news/cose-un-api-in-italiano-per-favore/'
```

Ви можете вручну перетворити один формат в інший. Або ви можете використати [цей скрипт](https://replit.com/@Ieahleen/convert-json-to-yaml).

> [!TIP] Розробляється новий робочий процес, тому у майбутньому потрібно буде змінювати лише одне місце.

## Як перекладати статті в нижньому колонтитулі

У нижньому колонтитулі наявні певні посилання (про нас,  спільнота випускників, відкритий вихідний код тощо), деякі з яких можна перекласти так само, як і статті.

Статті, які можна перекладати:

- Про нас
- Допомога
- Академічна доброчесність
- Кодекс поведінки

Статті,  які **не** потрібно перекладати:

- Магазин
- Спонсори
- Політика конфіденційності
- Умови надання послуг
- Політика захисту авторських прав

Наступні посилання вказують на зовнішні сайти і не можуть бути перекладені:

- Спільнота випускників
- Відкритий вихідний код

### Як змінити посилання у нижньому колонтитулі новин

Як тільки ви переклали та опублікували статті, позначені вище як «можна перекладати», ви можете оновити посилання у нижньому колонтитулі для `/news`, відредагувавши файл `news/config/i18n/locales/<your language>/links.json` у репозиторії [freeCodeCamp/news](https://github.com/freeCodeCamp/news).

> [!NOTE] Наразі PR цього репозиторію доступні лише робочому персоналу. Якщо ви хочете оновити цей файл, попросіть персонал про допомогу.

Оновіть наступну частину файлу:

```json
{
  ...
  "footer": {
    "about": "https://www.freecodecamp.org/news/about/",
    "support": "https://www.freecodecamp.org/news/support/",
    "honesty": "https://www.freecodecamp.org/news/academic-honesty-policy/",
    "coc": "https://www.freecodecamp.org/news/code-of-conduct/"
  }
}
```

### Як змінити посилання у нижньому колонтитулі навчальної програми

Як тільки ви переклали та опублікували статті, позначені вище як «можна перекладати», ви можете оновити посилання у нижньому колонтитулі для`/learn`, відредагувавши файл `client/i18n/locales/<your language>/links.json` у репозиторії [freeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp).

> [!WARNING] Можна перекладати лише «Про нас», «Допомога», «Академічна доброчесність» та «Кодекс поведінки». Не змінюйте інших URL.

Оновіть наступну частину файлу:

```json
{
  ...
  "footer": {
    "about-url": "https://www.freecodecamp.org/news/about/",
    "shop-url": "https://www.freecodecamp.org/shop/",
    "support-url": "https://www.freecodecamp.org/news/support/",
    "sponsors-url": "https://www.freecodecamp.org/news/sponsors/",
    "honesty-url": "https://www.freecodecamp.org/news/academic-honesty-policy/",
    "coc-url": "https://www.freecodecamp.org/news/code-of-conduct/",
    "privacy-url": "https://www.freecodecamp.org/news/privacy-policy/",
    "tos-url": "https://www.freecodecamp.org/news/terms-of-service/",
    "copyright-url": "https://www.freecodecamp.org/news/copyright-policy/"
  },
  ...
}
```

## Як перекладати інформаційні коробочки документації

Ви можете знайти безліч таких коробочок у документації:

> [!NOTE] Я ділюсь нотатками

> [!TIP] Я ділюсь порадами

> [!WARNING] Я ділюсь попередженнями

> [!ATTENTION] Я ділюсь важливою інформацією

Заголовки за замовчуванням з’являються англійською мовою навіть у перекладених файлах.

Ви можете перекласти заголовки своєю мовою, змінивши файл `docs/index.html` таким чином:

Всередині елементу `script` є об’єкт, знайдіть властивість `flexibleAlerts` з такою формою:

```js
flexibleAlerts: {
  note: {
    label: {
      '/': 'Note'
    }
  },
  tip: {
    label: {
      '/': 'Tip'
    }
  },
  warning: {
    label: {
      '/': 'Warning'
    }
  },
  attention: {
    label: {
      '/': 'Attention'
    }
  }
}
```

Всередині об’єкта властивості label, перед властивістю `'/'`, додайте нову властивість для своєї мови, схоже до `/i18n/<language>/`.

Наприклад, це виглядатиме так, якщо додати переклади португальською:

```js
flexibleAlerts: {
  note: {
    label: {
      '/i18n/portuguese/': 'Observação',
      '/': 'Note'
    }
  },
  tip: {
    label: {
      '/i18n/portuguese/': 'Dica',
      '/': 'Tip'
    }
  },
  warning: {
    label: {
      '/i18n/portuguese/': 'Aviso',
      '/': 'Warning'
    }
  },
  attention: {
    label: {
      '/i18n/portuguese/': 'Atenção',
      '/': 'Attention'
    }
  }
}
```

## Як перекладати мотиваційні цитати

Мотиваційні цитати можна знайти в [репозиторії навчальної програми](https://github.com/freeCodeCamp/freeCodeCamp/) у файлі `/client/i18n/locales/<language>/motivation.json`.

Цей файл має загальну структуру:

```json
{
  "compliments": [],
  "motivationalQuotes": []
}
```

Компліменти — це короткі фрази, які з’являються після виконання завдання.

Не потрібно перекладати речення з англійської буквально. Можна написати пару коротких речень, які доречні для завершення завдання.

Масив `compliments` є масивом рядків. Тому ви б писали:

```json
{
  "compliments": ["A tutta birra!", "Pikachu, scelgo te!"],
  "motivationalQuotes": []
}
```

> [!TIP] Для різноманіття вам потрібно почати з принаймні десяти компліментів.

Мотиваційні цитати — це цитати, які з’являються на https://freecodecamp.org/learn.

Масив `motivationalQuotes` — це масив об’єктів, які повинні містити властивість `quote` та властивість `author`. Ось так:

```json
{
  "compliments": [],
  "motivationalQuotes": [
    {
      "quote": "Se i costruttori costruissero come i programmatori programmano, il primo picchio che passa potrebbe distruggere la civiltà.",
      "author": "Artur Bloch, Seconda legge di Weinberg"
    },
    {
      "quote": "I bravi programmatori sanno cosa scrivere. I migliori sanno cosa riscrivere.",
      "author": "Eric Steven Raymond"
    }
  ]
}
```

> [!TIP] Для різноманіття вам потрібно почати принаймні з десяти цитат. Нова цитата відображається кожного разу, коли користувач перезавантажує сторінку.

## Як оновити загальні посилання

Ми підтримуємо файл загальних посилань, які використовуються на нашому [сайті навчальної програми](https://github.com/freecodecamp/freecodecamp) у файлі `/client/i18n/locales/<language>/links.json`.

Деякі з цих посилань не змінюються. Але вам потрібно оновлювати посилання статей `/news`, які вказуватимуть на перекладену версію цієї статті.

Вам також потрібно оновлювати категорії `help`, щоб вказувати на підфорум вашої мови (зазвичай `language/category`, як-от `Italiano/HTML-CSS`). Це допоможе кемперам створити «допис допомоги» у правильному місці.

## Як оновити метадані сайту

Метадані сайту знаходяться у файлі `/client/i18n/locales/<language>/meta-tags.json`. Цей файл має п’ять ключів: `title`, `description`, `social-description`, `keywords` та `youre-unsubscribed`.

Значення `youre-unsubscribed` повинне бути перекладене дослівно. Інші значення потрібно перекладати якомога ближче, зважаючи на поширені пошукові запити вашої мови.

Якщо вам потрібна допомога, зв’яжіться з нами у [чаті](https://discord.gg/PRyKn3Vbay)

## Попередній переклад на Crowdin

Попередній переклад можна використовувати, щоб застосувати переклади з пам’яті перекладів.

> [!TIP] Особливо корисно відновлювати переклади з пам’яті перекладів, якщо оновлена велика кількість файлів.

Ви можете знайти попередній переклад у верхній частині сторінки на консолі проєкту. Якщо ви бачите кнопку «Go to console» у верхньому правому куті, натисніть на неї.

![кнопка переходу до консолі](./images/crowdin/pre-translate2.png)

![попередній переклад](./images/crowdin/pre-translate1.png)

Ви можете обрати «From Machine Translation» або «From Translation Memory». Оберіть «Translation Memory», щоб відновити переклади з пам’яті.

Залишається виконати три кроки:

1. Files. Виберіть файли, які потрібно перекласти (ви можете обрати цілий проєкт або певну папку чи файл).
2. Languages. Вкажіть свою мову.
3. Existing Translations. Найкращою комбінацією є «100% match» та «Apply to untranslated strings only». Не затверджуйте їх автоматично,  оскільки завжди краще перевіряти вручну.

![попередній переклад наявних перекладів](./images/crowdin/pre-translate3.png)

Коли ви закінчите, натисніть кнопку «Pre-Translate» та зачекайте. Вас попередять, коли робота закінчиться. Час залежить від кількості неперекладених рядків у вибраних файлах.

## Як оновити глосарій Crowdin

> [!TIP] Оновлений глосарій дозволяє дотримуватись однорідного перекладу технічних термінів.

Глосарій Crowdin зберігається у репозиторії [crowdin-glossaries](https://github.com/freeCodeCamp/crowdin-glossaries).

У папці `glossaries` розміщено декілька файлів `*.csv` (значення, розділені комою), по одному для кожного проєкту на Crowdin, що мають глосарій.

Файл `client.csv` використовується для інтерфейсу користувача, файл `curriculum.csv` — для навчальної програми, а файл `docs.csv` — для документації.

Щоб оновити глосарії Crowdin, вам потрібно клонувати репозиторій локально. Відкрийте файл `.csv` за допомогою відповідної програми (наприклад, Microsoft Excel).

У файлі `.csv` ви побачите, що перші три стовпчики написані англійською мовою: `Term:English` для терміна англійською мовою, `Description:English` для опису англійською мовою та `Part:English` для частини мови (іменник, дієслово тощо).

Кожна цільова мова має два стовпчики. Якщо ви перекладаєте на дотракійську мову, вам потрібні стовпчики `Term:Dothraki` та `Description:Dothraki`. Стовпчик `Term:Dothraki` використовується для перекладу терміну на дотракійську мову, а `Description:Dothraki` — для опису терміну дотракійською мовою.

> [!TIP] У деяких програмах (наприклад, Microsoft Excel) можна приховати стовпчики з іншими мовами, щоб звільнити місце на екрані та бачити англомовні стовпчики поруч із потрібною мовою.

Після того, як ви внесли зміни та зберегли файл, потрібно створити PR із запропонованими змінами. Як тільки PR буде прийнятий, вам потрібно запустити GitHub Action, щоб оновити глосарій Crowdin. Внесені зміни до глосарію не набудуть чинності одразу, а з’являться пізніше.

## Як підвищити помічника до редактора

Якщо ви вважаєте, що помічника можна підвищити до редактора на Crowdin, ви можете надати йому цю посаду наступним чином:

Перейдіть до `User management` в меню зліва на Crowdin.

Це відкриє панель керування, де ви побачите список всіх користувачів.

Знайдіть користувача, який стане редактором. Натисніть на три крапки та оберіть «Add to team». Команди редакторів мають стандартну назву `Proof Readers (<language>)`, тому ви можете знайти команду, використавши назву мови. Як тільки ви обрали команду, використайте кнопку «ADD», щоб завершити.

Тепер користувач є редактором.

> [!TIP] Новий редактор може багато чого дізнатись, прочитавши [як редагувати файли](how-to-proofread-files.md).
