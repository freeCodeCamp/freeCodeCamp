# Jak pomoci s výzvami videa

Video výzvy jsou novým typem výzvy v osnovách freeCodeCamp.

Video výzva je malá část videohovoru s plnou délkou na konkrétní téma. Stránka s výzvou pro video vloží YouTube video. Každá stránka s výzvou má jednu otázku s možností výběru z více možností, která se týká videa. Uživatel musí odpovědět na otázku správně, než v kurzu přejde na další videohovor.

Stránky video challenge jsou vytvořeny členy týmu freeCodeCamp. YouTube videa jsou také nahrávána členy FreeCodeCamp týmu. Mnohé z videohovorů s nimi ještě nejsou spojeny.

Můžete pomoci vytvořením otázek s více možnostmi souvisejících s kapitolami video a přidáním otázek do souborů markdown pro videohovory.


## Šablona výzvy

Níže je šablona toho, jak vypadají soubory challenge markdown.

````md
---
id: jedinečný identifikátor (alfanumerický, MongoDB_id)
název: Challenge Title
challengeType: 11
videoId: 'YouTube videoId pro video challenge'
---

## Popis

<section id='description'>
Volitelný popis s užitečnými informacemi o videu.
</section>

## Testy

<section id='tests'>

```yml
otázka:
  text: 'Otázka'
  odpovědi:
    - 'Odpovězte na jedno'
    - 'Odpověď'
    - 'Odpověď'
  řešení: 3
````

</section>
````

## Vytváření otázek pro videohovory challenge markdown

### Přístup k souborům pro video challenge markdown

Najdete soubory markdown pro videohovory na následujících místech ve učebních osnovách:

- [Datová analýza s Pythonovým kurzem](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [TensorFlow 2.0 Course](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Numpy Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/numpy)
- [How Neural Networks Work Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/how-neural-networks-work)

Pick a challenge markdown soubor z možností výše.

### Skim přes video spojené s výzvou a vytvořte otázku "mutiple select"

Nejprve najděte videoId.

Například, v následujícím kódu z záhlaví video challenge markdown souboru, videoId je "nVAaxZ34khk". Na GitHubu by informace měly být rozvrženy ve formátu tabulky.
````
---
id: 5e9a093a74c4063ca6f7c14d title: Data Analysis Příklad A challengeType: 11
videoId: nVAaxZ34khk
---
```

Dále získejte přístup k YouTube video s tímto videem. Adresa url videa bude:
https://www.youtube. om/watch?v=[videoId]    (přidat videoID k URL bez hranatých závorek)

V příkladu výše je url https://www. outube.com/watch?v=nVAaxZ34khk

Skim YouTube video s tímto videoID a přemýšlejte o otázce s vícenásobným výběrem na základě obsahu videa.

### Přidejte otázku do souboru markdown

Otázku můžete přidat lokálně nebo přímo přes rozhraní GitHub. Chceš-li tuto otázku lokálně přidat, musíš [nastavit freeCodeCamp lokálně](how-to-setup-freecodecamp-locally.md). Na GitHub můžete také najít soubor a kliknout na tlačítko upravit pro přidání otázky přímo ve vašem prohlížeči.

Pokud otázka ještě nebyla přidána do konkrétní video výzvy, bude mít následující výchozí otázku:

```yml
otázka:
  text: |
    Odpovědi
  :
    - |
      jeden
    - |
      dva
    - |
      tři
  řešení: 3
```

Aktualizujte slovo „otázka“ na vaši otázku. Aktualizujte „jeden“, „dva“ a „tři“ s možnými odpověďmi. Ujistěte se, že aktualizujete číslo řešení, se kterým je odpověď správná. Můžete přidat více možných odpovědí pomocí stejného formátu. Otázka a odpovědi mohou být obklopeny uvozovkami.

#### Použijte markdown pro formátování otázky

Text v této otázce je uveden jako markdown. Nejjednodušším způsobem, jak se ujistit, že je správně naformátovaný, je začít s `textem: |`, jako je toto:

```yml
otázka:
  text: |
    Otázka
```

Potom se musíte ujistit, že vaše otázka je na nové řádce a odsazená o jednu úroveň je více než `text: |`.

Stejný přístup lze použít i pro odpovědi, takže se celá otázka stane

```yml
Otázka:
  text: |
    Odpovědi

  - |
    První odpověď
  - |
    Druhý
  - |
    Třetí
  řešení: 2
```

Ujistěte se, že je každá odpověď věrohodná, ale existuje pouze jedna správná odpověď.

#### Použití HTML

Otázky a odpovědi mohou obsahovat určité HTML tagy jako `<br>` pro nový řádek. HTML tagy by měly být používány opatrně, když bez nich nemohou být vyjádřeny otázky.

### Příklady otázek

#### Příklady bez HTML

````yml
Otázka:
  text: |
    Co dělá tento JavaScript kód log?
    ```js
    console.log('hello world');
    ````


    Vyberte odpověď!
  odpovědi:
    - | ahoj *svět*
    - | **ahoj** svět
    - | Ahoj svět řešení: 3
````

````yml
otázka:
  text: |
    Co se vytiskne po spuštění tohoto kódu:
    ```py
    šířka = 15
    výška = 12.
    vytisknout (výška/3)
    ````
  odpovědi:
    - | 39
    - | 4
    - | 4.0
    - | 5.0
    - | 5 roztok: 3
````

#### Příklad s HTML

```yml
otázka:
  text: |
    Co se vytiskne po spuštění tohoto kódu:
    <pre><code>šířka = 15<br>výška = 12.<br>tiskárny (výška/3)<code></pre>
  odpovědí:
    - |
      39
    - |
      4
    - |
      4.
    - |
      5.
    - |
      5
  roztok: 3
````

Konečný příklad ukazuje, že HTML lze použít, ale není tak čitelná jako verze bez ní.

Více příkladů se můžete podívat na soubory markdown pro následující video kurz. Všechny challenge keše již mají otázky: [Python pro každý kurz](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## Otevřít požadavek na natažení

Po vytvoření jedné nebo více otázek můžete provést změny do nové větve a [otevřít požadavek na natažení](how-to-open-a-pull-request.md).
