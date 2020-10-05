# Jak pracovat na programování úkolů

Naším cílem je rozvíjet zábavné a jasné interaktivní učení.

Navrhování interaktivních úkolů kódování je obtížné. Bylo by mnohem snazší napsat dlouhé vysvětlení nebo vytvořit video tutoriál, a je zde místo pro lidi na středním a YouTube. Nicméně pro naše základní osnovy se držíme toho, co funguje nejlépe pro většinu lidí - plně interaktivní zážitek z videoher.

Chceme kamery, aby se dosáhlo stavu toku. Chceme, aby prostřednictvím našich osnov vytvořili hybnou sílu a s co nejmenším počtem hlemýžďů. Chceme, aby se zapojili do projektů s důvěrou a získali velké vystavení koncepcím programování.

Vytváření těchto výzev vyžaduje obrovskou tvořivost a pozornost k detailům. K dispozici je spousta pomoci. Budete mít podporu od celého týmu přispěvatelů, kterým se můžete odvracet nápady a demo své výzvy. Zůstaňte aktivní v [přispěvatelském sále](https://gitter.im/freecodecamp/contributors) a položte mnoho otázek.

S Vaší pomocí můžeme navrhnout interaktivní programovací osnovy, které pomohou milionům lidí naučit se programovat v následujících letech.

Obsah každé výzvy je uložen v jeho vlastním markdown souboru. Tento soubor markdown je později převeden na HTML pomocí našich nástrojů pro vytváření interaktivních webových stránek.

Veškerý obsah měn freeCodeCamp.org naleznete v adresáři [`/curriculum/challenge`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges).

## Nastavit nástroj pro učební plány

Než budete pracovat na učebních plánech, musíte nastavit nějaké nástroje, které vám pomohou vyzkoušet vaše změny. Můžete použít libovolnou možnost z níže:

- Můžete [nastavit volný CodeCamp lokálně](how-to-setup-freecodecamp-locally.md). To je **vysoce doporučeno** pro pravidelné/opakované příspěvky. Toto nastavení vám umožní pracovat a otestovat vaše změny.
- Použijte Gitpod, bezplatné online prostředí pro vývojáře. Kliknutím na tlačítko níže spustíte prostředí pro vývojáře freeCodeCamp ve vašem prohlížeči. Trvá to jen několik minut.

  [![Otevřít v Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Upravte soubory na rozhraní GitHubu kliknutím na ikonu tužky pro odpovídající soubor. I když je to nejrychlejší způsob, není doporučeno ****, protože nejste schopni otestovat změny na GitHubu. Pokud naši správci dospějí k závěru, že změny, které jste provedli, musí být vyzkoušeny lokálně, musíte místo toho znovu použít výše uvedené metody.

## Šablona výzvy

Níže je šablona toho, jak vypadají soubory challenge markdown v současné době.  Chcete-li zobrazit zjednodušenou šablonu, uvidíme [níže](#upcoming-challenge-template).

````md
---
id: jedinečný identifikátor (alfanumerický, MongoDB_id)
název: Challenge Title
challengeType: 0
videoUrl: 'url of video explanation'
---

## Popis

<section id='description'>
Popis challenge a co je nutné předat
</section>

## Instrukce

<section id='instructions'>
Instrukce o tom, co přesně je třeba udělat.
</section>

## Testy

<section id='tests'>

```yml
testy:
  - text: Měl by vrátit "foo"
    testString: 'Stringified funkce možná pomocí Chai asserts'
````

</section>

## Seed výzvy

<section id='challengeSeed'>

<div id='{ext}-seed'>

```{ext}
Kód zobrazený ve výchozím nastavení v editoru.

Toto je požadovaná sekce pro výzvu.
```

</div>

### Před zkouškou

<div id='{ext}-setup'>

```{ext}
Volitelný kód pro testovací nastavení.
```

</div>

### Po zkoušce

<div id='{ext}-teardown'>

```{ext}
Volitelný kód testu dolů.
```

</div>

</section>

## Roztok

<section id='solution'>

```{ext}
// řešení vyžadováno
```

</section>

````

> [!POZNÁMKA]
>
> 1. Ve výše uvedených oddílech příklady `{ext}` jsou:
>
>   - `html` - HTML/CSS
>   - `js` - JavaScript
>   - `jsx` - JSX
>
> 2. Pro část `Tests` výše, `text` a `testString` by měly být platné YAML řetězce. `testString` může být stringified funkce nebo výraz, který může používat Chai tvrzení.

## Číslování výzev

Každá výzva potřebuje `id`. Pokud jej nespecifikujete, MongoDB vytvoří náhodně nový při ukládání dat; nechceme to však udělat, protože chceme, aby byly děti spojené s výzvou napříč různými prostředími (stagnace, výroba, spousta různých vývojářů atd.).

Možnost generovat nový ve skořápce (za předpokladu, že MongoDB běží samostatně):

1. Spustit příkaz `mongo`.
2. Spustit příkaz `ObjectId()`.

Například:

```bash
$ mongo
MongoDB shell verze v3.6.1
připojující se k: mongodb://127.0.0.1:27017
MongoDB verze serveru: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

Výsledkem je nový id, například `5a474d78df58bafeb35d34`.

Jakmile budete mít své id , vložte jej do souboru markdown jako pole `id` nahoře, např.

```yml
---
id: 5a474d78df58bafeb35d34
název: Challenge Title
```

## Pojmenovávání úkolů

Pojmenování věcí je těžké. Usnadnili jsme to zavedením určitých omezení.

Všechny názvy výzev by měly být explicitní a měly by odpovídat tomuto vzoru:

\[verb\]\[klauzule objektu\]

Zde je několik příkladů názvů výzev:

- Použít upozornění ve směru hodinových ručiček pro zadání Padding prvku
- Kondenzovaná pole s .redukcí
- Použijte poznámku závorek k nalezení první postavy v řetězci

## Popisy/pokyny k výzvě

Věty by měly být jasné a stručné s minimálním žargonem. V případě použití by měl být žargon okamžitě definován v jednoduché angličtině.

Zachovejte odstavce krátké (kolem 1-4 vět). Pravděpodobně si lidé přečtou několik krátkých odstavců než zeď textu.

Text výzvy by měl použít druhou osobu („vy“), aby jí pomohl dát konverzační tón. Tímto způsobem text a instrukce vypadají, že mluví přímo s kamerem, který pracuje výzvou. Zkuste se vyhnout používání první osoby ("I", "my", "let's" a "ná").

Nepoužívat odchozí odkazy. To přerušilo tok. Kameraři by nikdy neměli v těchto výzvách nic vygoognovat. Pokud existují zdroje, které by podle vás mohly mít užitek, přidejte je do článku příručky pro výzvu.

V případě potřeby můžete přidat diagramy.

Nepoužívat emoji ani emotikony v výzvách. freeCodeCamp má globální komunitu a kulturní význam emoji nebo emotikonu se může po celém světě lišit. Na různých systémech se mohou zobrazovat emoji odlišně.

Řádné nouny by měly používat správnou kapitalizaci, pokud je to možné. Níže je seznam slov, která by se měla objevit v výzvách.

- JavaScript (velká písmena v "J" a "S" a bez zkratek)
- Node.js
- Vývoj front-end (přídavný formulář s pomlčkou) je při práci na předním konci (jmenný formulář bez pomlčky). Totéž platí pro "back end", "full stack" a mnoho dalších složených termínů.

### Dvouminutové pravidlo

Každá výzva by měla být vyřešena do 120 sekund rodilým anglickým mluvčím, který dokončil výzvy, které jí přináší. To zahrnuje dobu potřebnou k přečtení směrů/instrukcí rozumí kódu seedu, napište svůj vlastní kód a získejte všechny testy.

Pokud to trvá déle než dvě minuty, máte dvě možnosti:

- Zjednodušit výzvu, nebo
- Rozdělte výzvu na dvě výzvy.

Dvouminutové pravidlo tlačí tvůj návrhář, aby tvé pokyny byly stručné, aby tvůj zdrojový kód byl jasný a tvé testy byly jednoduché.

Sledujeme, jak dlouho trvá kamera, aby vyřešili změny a použili tyto informace k identifikaci výzev, které je třeba zjednodušit nebo rozdělit.

### Modularita

Každá výzva by měla naučit přesně jeden koncept a tento koncept by měl být zřejmý z názvu výzvy.

Dříve zakryté koncepty můžeme posílit opakováním a odlišnostmi - například zavedení prvků h1 do jedné výzvy, poté h3 bude mít později několik výzev.

Naším cílem je mít tisíce dvouminutových výzev. Ty mohou společně proudit a zopakovat dříve zakryté koncepce.

### Formátování textu výzvy

Zde jsou konkrétní směry formátování pro text výzvy a příklady:

- Klíčová slova jazyka jdou do značek `<code>`. Například, názvy HTML značek nebo názvy CSS vlastností
- První instance klíčového slova, když je definováno, nebo obecná klíčová slova (např. "objekt" nebo "neměnitelná") jdou na `<dfn>` tagy
- Odkazy na části kódu (tj. funkce, metoda nebo názvy proměnných) by měly být baleny do značek `<code>`. Viz příklad níže:
- Použijte <code>parseInt</code> k převodu proměnné <code>realNumber</code> na celé číslo.
- Bloky víceřádkových kódů **musí předcházet prázdný řádek**. Další řádek musí začínat třemi zadními vrátky, po nichž bezprostředně následuje jeden z [podporovaných jazyků](https://prismjs.com/#supported-languages). Chcete-li dokončit blok kódu, musíte spustit novou řádek, který má pouze tři zadky a **další prázdný řádek**. **Poznámka:** Pokud chcete použít příklad kódu v YAML, použít `yaml` místo `yml` pro jazyk vpravo od backtiků.

Viz příklad níže:

````md
Příklad kódu:

```{language}

[VAŠE KÓD ŠERE]

````
````

- Další informace ve formě poznámky by měly být formátovány `<strong>Poznámka:</strong> Zbytek textu poznámky...
- Pokud je zapotřebí více poznámek, pak uveďte všechny poznámky v samostatných větách ve formátu `<strong>Poznámky:</strong> Text první poznámky. Text druhé poznámky.`.
- Použijte v případě potřeby dvojí uvozovky

## Testy psaní

Výzvy by měly mít minimální počet zkoušek nutný k ověření, že kampery rozumí koncepci.

Naším cílem je komunikovat o jediném bodu, který se výzva snaží vyučovat, a otestovat, zda tento bod pochopili.

Testy výzev mohou využít výpočetní knihovny Node.js a Chai.js. V případě potřeby je k dispozici uživatelsky generovaný kód v proměnné `code`.

## Formátování kódu seedu

Zde jsou specifické pokyny pro formátování kódu challenge seedu:

- Používejte dvě mezery k odsazení
- příkazy JavaScriptu končí středníkem
- Použijte dvojité uvozovky, kde je to na místě,
- Komentáře by měly mít mezeru mezi znaky komentáře a komentářem samotným

  `// Opravit tuto řádek`

## Hints and Solutions

Každá výzva má tlačítko `Získat nápovědu`, aby uživatel měl přístup k jakýmkoli nápovědám/řešením, která byla vytvořena pro výzvu. Témata kuriculum hints/solutions jsou umístěna na [našem fórum](https://forum.freecodecamp.org/c/guide) v kategorii `Guide`.

Pokud najdeš problém s tématem nápovědy/řešení existující výzvy, můžeš předložit návrhy v kategorii [přispěvatelů](https://forum.freecodecamp.org/c/contributors) na fóru. Moderátoři a uživatelé s úrovní důvěry 3 prověří připomínky a rozhodnou, zda zahrnou změny do příslušného tématu h/řešení.

### Přidání nových nápověd/řešení výzev

Proveďte následující kroky při přidání nových nápověd/řešení souvisejících otázek.

1. Začněte sledováním stejných kroků pro vytvoření nového tématu, ale podívejte se na další pro vytvoření titulku.
2. Titulek tématu by měl začínat `freeCodeCamp Challenge Guide: ` spojen se skutečným názvem výzvy učebních plánů. Například, pokud je výzva pojmenována ""Chunky Monkey", titulek tématu bude ""freeCodeCamp Challenge Guide: Chunky Monkey".
3. `camperbot` by měl být vlastníkem těchto témat/příspěvků, takže budete muset požádat správce, aby změnil vlastnictví hlavního příspěvku na `camperbot`.
4. Jakmile je nové téma vytvořeno, je vytvořeno ID tématu fóra. Je umístěn na konci URL tématu fóra. Toto ID musí být přidáno do fronty souboru výzev učebních plánů pomocí normálního procesu požadavku na natažení pro tlačítko `Získat nápovědu` pro propojení s tématem.

### Pokyny pro obsah témat tipů a řešení

Při navrhování řešení pro téma průvodce učebních osnov, musí být přidán celý kód. To zahrnuje všechny původní kódy osiva a veškeré změny potřebné k provedení všech provokačních testů. Následující šablona by měla být použita při vytváření nových témat nápověd/řešení:

````md
# Challenge Name Goes Here

---

## Vysvětlení problémů

Toto shrnuje, co je třeba udělat, aniž by jen opakovalo popis challenge a/nebo pokyny. Toto je volitelná sekce

#### Relevant Links

- [Link Text](link_url_goes_here e)
- [Link Text](link_url_goes_here)

---

## Hints

### Hint 1

Hint zde

### Hint 2

Hint zde

---

## Solutions

<details><summary>Řešení 1 (Click to Show/Hide)</summary>

```js
funkce myFunc() {
  konzola. og('Hello World!');
}
````

#### Vysvětlení kódu

- Vysvětlení kódu je zde
- Vysvětlení kódu je zde

#### Relevantní odkazy

- [Text odkazu](link_url_goes_here)
- [Text odkazu](link_url_goes_here)

</details>
````

## Testování výzev

Předtím, než [vytvoříš požadavek na natažení](how-to-open-a-pull-request. d) pro vaše změny, musíte potvrdit, že změny, které jste provedli, nezpůsobují neúmyslně problémy s výzvou. 

1. Pro otestování všech challenge spusťte příkaz níže z kořenového adresáře

````
npm run test:curriculum
``` 

2. Můžeš také otestovat blok nebo superblok výzev pomocí těchto příkazů

```
npm run test:curriculum --block='Základní HTML a HTML5'
```

```
npm run test:curriculum --superblock=responsive-web-design
```

Můžete také vyzkoušet jednu výzvu individuálně provedením následujících kroků:

1. Přepněte do adresáře `curriculum`:

   ```
   cd osnovy
   ```

2. Spusťte následující pro každý soubor s výzvou, pro který jste změnili:

   ```
   npm run test -- -g 'The full Czech title of the challenge'
   ```

Jakmile jste ověřili, že každá výzva prošla testy, [prosím vytvořte požadavek na natažení](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/how-to-open-a-pull-request.md).

> [!TIP]
> Můžete nastavit proměnnou prostředí `LOCALE` v jazyce `.env` na jazyk výzev, které musíte testovat.
> 
> Aktuálně přijaté hodnoty jsou `english` a `chinese`, přičemž `english` je ve výchozím nastavení nastaveno.

## Nadcházející šablona výzvy

Šablona výzvy v procesu aktualizace na čistší, méně vnořenou strukturu.  Toto nebylo úplně dokončeno, ale následující by měly být blízko konečné struktury:

``mdx

---
id: jedinečný identifikátor (alfanumerický, Název MongoDB_id)
: 'Název výzvy'
challengeType: Integer, definovaný v `client/utils/challengeTypes. s`
videoUrl: 'url of video explanation'
forumTopicId: 12345
---

import skriptu z './script. dx';

## --step-description--

Popis textu v markdown

```html
<div> 
  příklad kódu
</div>
```

## --step-hints--

![test-id-1]

Bude existovat libovolný počet trojic idů, instrukcí (v markdown) a kódových bloků.

```js
Kód pro zkoušku č. 1
```

![test-id-2]

Další pokyny v markdown syntaxi

```js
Další kód
```

## --step-seed--

### --before-user-code--

```lang
Kód vyhodnocen před uživatelem.
```

### --after-user-code--

```lang
Kód vyhodnocen po provedení testu uživatele a těsně před testy.
```

### --seed-content--

![index-html]

```html
Některé html
```

```css
Nějaký css
```

```js
Několik js
```

![index-js]

<Script ></p>


<h1 spaces-before="0">
  --solution-marker--
</h1>



<p spaces-before="0">
  Přesně stejná jako sekce osiva
</p>

<h2 spaces-before="0">
  --next-solution-marker
</h2>



<p spaces-before="0">
  Znovu stejné
</p>

<h1 spaces-before="0">
  --question-marker--
</h1>

<h2 spaces-before="0">
  --text-marker--
</h2>



<p spaces-before="0">
  Otázka by šla sem (pouze pro videohovory)
</p>

<h2 spaces-before="0">
  --answers-marker--
</h2>



<p spaces-before="0">
  Odpověď 1
</p>

<hr />

<p spaces-before="0">
  Odpověď 2
</p>

<hr />

<p spaces-before="0">
  Odpověď 2
</p>

<h2 spaces-before="0">
  --solution-marker--
</h2>



<p spaces-before="0">
  \<number of correct answer\>
</p>



<p spaces-before="0">
  ````
</p>

<h3 spaces-before="0">
  Užitečné odkazy
</h3>



<p spaces-before="0">
  Vytváření a editace výzev:
</p>



<ol start="1">
  <li>
    <p spaces-before="0">
      <a href="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/client/utils/challengeTypes.js#L1-L13">Typy výzev</a> - co znamenají numerické hodnoty typu výzvy (enum).
    </p>
  </li>

  
  <li>
    <p spaces-before="0">
      <a href="https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s">Přispění k FreeCodeCamp - psaní testů výzev ES6</a> - video po <a href="https://twitter.com/ArrowoodTech">Ethan Arrowood</a> , protože přispívá ke staré verzi učebních plánů.
    </p>
  </li>

</ol>
