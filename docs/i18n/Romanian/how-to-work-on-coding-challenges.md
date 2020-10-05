# Cum se lucrează la provocările programării

Scopul nostru este să dezvoltăm o experienţă de învăţare interactivă şi amuzantă.

Este dificil de creat provocări de codificare interactivă. Ar fi mult mai ușor să scrii o explicație lungă sau să creezi un tutorial video, Și e un loc pentru cei de pe mediu și YouTube. Cu toate acestea, pentru programa noastră de bază, rămânem cu ceea ce funcționează cel mai bine pentru majoritatea oamenilor - o experiență complet interactivă, ca un joc video.

Vrem ca camerele de luat vederi să atingă o stare de flux. Vrem ca ei să dea un impuls și să exploreze programa noastră cu cât mai puține impedimente posibil. Dorim ca acestea să intre în proiecte cu încredere şi să obţină o expunere largă la conceptele de programare.

Crearea acestor provocări necesită o creativitate și o atenție uriașă pentru detalii. Există destul ajutor disponibil. Vei avea sprijin de la o întreagă echipă de colaboratori la care poți sări ideile și să demonstri provocările tale. Rămâi activ în [camera contributorilor](https://gitter.im/freecodecamp/contributors) și pune o mulțime de întrebări.

Cu ajutorul tău putem proiecta o programă de programare interactivă care va ajuta milioane de oameni să învețe programare ani de acum încolo.

Conținutul fiecărei provocări este stocat în propriul fișier markdown. Acest fișier markdown este transformat mai târziu în HTML folosind uneltele noastre pentru a crea pagini web interactive.

Puteţi găsi tot conţinutul curricular al freeCodeCamp.org-ului în directorul [`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges).

## Configurați instrumentul pentru curriculum

Înainte de a lucra la curriculum, ar trebui să setați niște instrumente pentru a vă ajuta să vă testați modificările. Puteți utiliza orice opțiune din cele de mai jos:

- Poți [configura tabăra freeCodep locală](how-to-setup-freecodecamp-locally.md). Acesta este **recomandat** pentru contribuții regulate/repetate. Această configurare vă permite să lucrați și să testați modificările.
- Folosește Gitpod, un mediu de dezvoltatori online gratuit. Apăsând pe butonul de mai jos va porni un mediu dev gata de cod pentru tabăra freeCodep din browser-ul tău. Durează doar câteva minute.

  [![Deschide în Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Editează fișierele pe interfața GitHub, făcând clic pe pictograma creion pentru fișierul corespunzător. Deși aceasta este cea mai rapidă cale, **nu este recomandat**, deoarece nu puteți testa modificările pe GitHub. Dacă susținătorii noștri concluzionează că modificările pe care le-ați făcut trebuie să fie testate la nivel local, ar trebui să urmați metodele de mai sus din nou.

## Șablon provocare

Mai jos este un şablon pentru cum arată fişierele markdown provocări, în prezent.  Pentru a vedea șablonul raționalizat pe care îl vom adopta, a se vedea [mai jos](#upcoming-challenge-template).

````md
---
id: Identificator unic (alfanumeric, MongoDB_id)
titlu: Challenge Title
challengeType: 0
videoUrl: 'url of video explanation'
---

## Descrierea

<section id='description'>
Descrierea provocării și ce este necesar pentru a trece
</section>

## Instrucțiuni

<section id='instructions'>
Instrucțiuni despre ce trebuie făcut.
</section>

## Testele

<section id='tests'>

``yml
tests:
  - text: Ar trebui să se returneze "foo"
    de test: 'O funcție stricată posibil folosind aserturi Chai'
````

</section>

## Seed-ul provocării

<section id='challengeSeed'>

<div id='{ext}-seed'>

```{ext}
Cod afişat în editor în mod implicit.

Aceasta este o secțiune necesară pentru provocare.
```

</div>

### Înainte de testare

<div id='{ext}-setup'>

```{ext}
Cod de configurare opțional test.
```

</div>

### După Test

<div id='{ext}-teardown'>

```{ext}
Cod de test opțional rupt.
```

</div>

</section>

## Soluţie

<section id='solution'>

```{ext}
// soluție a necesitat
```

</section>

````

> [!NOTĂ]
>
> 1. În secțiunea de mai sus, exemple de `{ext}` sunt:
>
>   - `html` - HTML/CSS
>   - `js` - JavaScript
>   - `jsx` - JSX
>
> 2. Pentru secţiunea `Tests` de mai sus, `text` şi `testString` ar trebui să fie un şir YAML valid. `testString` poate fi o funcţie stricată sau o expresie folosind aserturi Chai.

## Numărătoarea provocărilor

Fiecare provocare are nevoie de un `id`. Dacă nu specificați una, atunci MongoDB va crea unul nou la întâmplare când salvează datele; cu toate acestea, nu vrem să facă asta, pentru că vrem ca provocarea să fie consecventă în diferite medii (etape, producţia, o mulţime de dezvoltatori diferiţi etc.).

Pentru a genera unul nou într-o scoică (presupunând că MongoDB rulează separat):

1. Rulează comanda `mongo`.
2. Rulați comanda `ObjectId()`.

De exemplu:

```bash
$ mongo
MongoDB shell versiunea v3.6.1
conectând la: mongodb://127.0.1:27017
Versiune server MongoDB: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

Rezultatul este un nou id, de exemplu `5a474d78df58bafeb35d34` de mai sus.

Odată ce ai dispozitivul tău, îl pui în fișierul markdown ca `id` câmp în partea de sus, ex.

```yml
---
id: 5a474d78df58bafeb3535d34
title: Challenge Title
```

## Provocările numirii

Numirea lucrurilor este grea. Am simplificat acest lucru prin impunerea unor constrângeri.

Toate titlurile de provocare trebuie să fie explicite și trebuie să urmeze acest model:

\[verb\]\[Clauza obiectului\]

Iată câteva exemple de nume de provocări:

- Utilizați Nota în sensul acelor de ceasornic pentru a specifica adăugarea unui element
- Condense matrice cu .reduce
- Folosește Nota Bracket pentru a găsi Primul Caracter într-un Șir

## Descrierea/instrucțiunile provocării

Sentinţele ar trebui să fie clare şi concise cu jargon minim. Dacă este utilizat, jargonul ar trebui definit imediat în limba engleză simplă.

Mențineți alineatele scurte (aproximativ 1-4 propoziții). Este mai probabil ca oamenii să citească mai multe paragrafe scurte decât un zid de text.

Textul provocării ar trebui să utilizeze a doua persoană („tu”) pentru a-i ajuta să dea un ton conversațional. În acest fel, textul și instrucțiunile par să se adreseze direct camerei care lucrează cu provocarea. Încercați să evitați să utilizați prima persoană ("I", "noi", "let's" și "noi").

Nu folosi link-uri de ieşire. Acestea întrerup cursul. Camerele nu ar trebui să fie niciodată nevoite să accepte nimic în timpul acestor provocări. Dacă există resurse de care crezi că ar beneficia camerele de luat vederi, adaugă-le la articolul referitor la provocare.

Puteți adăuga diagrame dacă este absolut necesar.

Nu folosi emoji-uri sau emoticoane în provocări. Tabăra freeCodep are o comunitate globală, iar sensul cultural al unui emoji sau emoticon poate fi diferit în întreaga lume. De asemenea, emoji-urile pot deveni diferite în sisteme diferite.

Umbrele corecte ar trebui să folosească capitalizarea corectă atunci când este posibil. Mai jos este o listă de cuvinte așa cum ar trebui să apară în provocări.

- JavaScript (majuscule în "J" și "S" și fără abrevierii)
- Node.js
- Dezvoltarea front-end (formă adjectivă cu o cratimă) este când lucrezi la partea frontală (formă nouă, fără cratime). Același lucru este valabil și pentru sfârșitul din spate, stiva completă, și mulți alți termeni compuși.

### Regula de 2 minute

Fiecare provocare ar trebui să poată fi rezolvată în termen de 120 de secunde de către un vorbitor englez nativ, care a finalizat provocările care o aşteaptă. Aceasta include perioada de timp necesară pentru a citi direcțiile/instrucțiunile care înțeleg codul seeded, scrie propriul cod și obțineți toate testele pentru a trece.

Dacă este nevoie de mai mult de două minute pentru a finaliza provocarea, aveți două opțiuni:

- Simplifică provocarea, sau
- Împărțiți provocarea în două provocări.

Regula de 2 minute te forțează pe tine, designerul provocării, să faci direcțiile concise, codul tău seed-ului tău clar și testele tale imediat.

Urmărim cât timp durează ca camerele să rezolve schimbările şi să folosească aceste informaţii pentru a identifica provocările care trebuie simplificate sau divizate.

### Modularitate

Fiecare provocare ar trebui să predea exact un concept, iar acest concept ar trebui să fie evident din numele provocării.

Putem consolida conceptele acoperite anterior prin repetiție și variații - de exemplu, introducerea elementelor h1 într-o singură provocare, apoi h3 prezintă câteva provocări mai târziu.

Scopul nostru este să avem mii de provocări de 2 minute. Acestea pot fi combinate şi reiterate conceptele acoperite anterior.

### Text provocare de formatare

Iată câteva orientări specifice de formatare pentru a contesta textul și exemplele:

- Cuvintele cheie de limbă intră în `<code>` etichete. De exemplu, nume de tag-uri HTML sau nume de proprietate CSS
- Prima instanță a unui cuvânt cheie atunci când este definit, sau cuvinte cheie generale (ex: "obiect" sau "immutabil") intră în etichetele `<dfn>`
- Referinţele la părţile de cod (ex. funcţia, metoda sau numele variabilelor) ar trebui să fie înfăşurate în etichetele `<code>`. Vezi exemplul de mai jos:
- Folosește <code>parseInt</code> pentru a converti variabila <code>realNumber</code> într-un număr întreg.
- Blocurile de cod multi-linie **trebuie precedate de o linie goală**. Următoarea linie trebuie să înceapă cu trei backticks urmate imediat de una dintre [limbile acceptate](https://prismjs.com/#supported-languages). Pentru a finaliza blocul de cod, trebuie să porniți o nouă linie care are doar trei backticks și **o altă linie goală**. **Notă:** Dacă vei folosi un exemplu de cod în YAML, folosește `yaml` în loc de `yml` pentru limba din dreapta backtick-urilor.

Vezi exemplul de mai jos:

````md
Următoarea este un exemplu de cod:

```{language}

[CODUL TĂU HERE]

````
````

- Informaţii suplimentare sub forma unei note ar trebui formatate "<strong>Notă:</strong> Rest of note text...
- Dacă sunt necesare mai multe note, apoi listaţi toate notele în propoziţii separate folosind formatul "<strong>Note:</strong> Textul primei note. A doua notă text."
- Folosește ghilimele duble unde este cazul

## Testele de scriere

Provocările ar trebui să aibă numărul minim de teste necesare pentru a verifica dacă o camperă înțelege un concept.

Scopul nostru este să comunicăm singurul punct pe care provocarea încearcă să îl predea și să testăm că au înțeles acel punct.

Testele de provocare pot folosi bibliotecile Node.js și Chai.js . De asemenea, dacă este necesar, codul generat de utilizator poate fi accesat în variabila `code`.

## Formatând codul seed

Aici sunt ghiduri specifice de formatare pentru codul seed provocare:

- Foloseşte două spaţii la liniuţa
- Declaraţii JavaScript se termină cu punct şi virgulă
- Foloseşte ghilimele duble unde este cazul
- Comentariile făcute ar trebui să aibă un spaţiu între caracterele de comentariu şi comentariul însuşi

  `// Repară această linie`

## Sugestiile şi soluţiile

Fiecare provocare are un buton `Obţine o indicie`, astfel încât un utilizator să poată accesa orice indicii/soluţii care au fost create pentru provocare. Sugestiile curriculum/soluţiile subiectele sunt localizate pe [forumul nostru](https://forum.freecodecamp.org/c/guide) sub categoria `Guide`.

Dacă găsești o problemă cu subiectul unei provocări existente, poți face sugestii în [categoria contributorilor](https://forum.freecodecamp.org/c/contributors) pe forum. Moderatorii și utilizatorii cu nivel de încredere 3 vor revizui observațiile și vor decide dacă vor include sau nu modificările subiectului indicativ/soluții corespunzător.

### Adăugarea de noi sugestii de provocări/soluţii Subiecte

Efectuează următorii paşi la adăugarea de noi indicii de provocare/soluţii legate de subiecte.

1. Începeți prin a urma aceiași pași pentru a crea un subiect nou, dar examinați următorul pentru a crea titlul.
2. Titlul subiectului ar trebui să înceapă cu `Ghidul de provocare freeCodep: ` concatenat cu titlul real al provocării curriculumului. De exemplu, dacă provocarea se numește "Chunky Monkey`", titlul subiectului ar fi "Ghidul provocării taberei freeCodep: Chunky Monkey`".
3. `camperbot` ar trebui să fie proprietarul acestor subiecte/postări, astfel încât va trebui să ceri unui administrator să schimbe proprietatea postării principale în `camperbot`.
4. Odată ce a fost creat noul subiect, se creează un id subiect de forum Este localizată la sfârşitul URL-ului subiectului pe forum. Acest id trebuie adăugat în frontmatter al fișierului provocării curriculum prin procesul normal pull request pentru butonul `Obține un indiciu` pentru a conecta la subiect.

### Linii directoare pentru conținutul de sugestii și subiecte de soluție

Când propuneți o soluție pentru un subiect de discuţie legat de provocarea programei, codul complet trebuie adăugat. Aceasta include tot codul seed-ului original plus orice modificări necesare pentru a trece toate testele de provocare. Următorul șablon ar trebui să fie folosit când se creează noi sugestii / soluții:

```md
# Challenge Name Goes aici

---

## Explicație pentru probleme

Aceasta rezumă ce trebuie făcut fără a reproșa doar descrierea și/sau instrucțiunile provocării. Aceasta este o secțiune opțională

#### Link-uri relevante

- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

---

## Hints

### Hint 1

Sint merge aici

### Hint 2

Indică merge aici

---

## Soluții

<details><summary><summary> Soluție 1 (Click to Show/Hide)</summary></summary>

`````js
function myFunc() {
  consolă. og('Salut lume!');
}
````

#### Explicație cod

- Explicația codului merge aici
- Explicația codului merge aici

#### Link-uri relevante

- [Text link](link_url_goes_here)
- [Text link](link_url_goes_here)

</details>
````

## Testând provocări

Înainte de a [crea o pull request](how-to-open-a-pull-request. d) pentru modificările dvs., trebuie să validați că modificările pe care le-ați făcut nu cauzează probleme cu provocarea. 

1. Pentru a testa toate provocările, executați comanda de mai jos din directorul rădăcină

````
npm run test:curriculum
``` 

2. De asemenea, poți testa un bloc sau un superbloc de provocări cu aceste comenzi

```
npm run test:curriculum --block='Basic HTML and HTML5'
```

```
npm run test:curriculum --superblock=responsive-web-design
```

De asemenea, poți testa o provocare în mod individual prin efectuarea următorilor pași:

1. Treceți la folderul `curriculum`:

   ```
   cd curriculum
   ```

2. Executaţi următoarele pentru fiecare fişier provocare pentru care aţi modificat:

   ```
   testul npm rulat -- - g "titlul integral în limba engleză al provocării"
   ```

Odată ce ați verificat că fiecare provocare la care ați lucrat trece trece testele, [vă rugăm să creați o cerere pull ](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/how-to-open-a-pull-request.md).

> [!TIP]
> Puteţi seta variabila de mediu `LOCALE` în `.env` în limba provocării pe care trebuie să o testaţi.
> 
> Valorile acceptate în prezent sunt `english` şi `chinese`, iar `english` sunt setate în mod implicit.

## Șablonul Provocării care urmează

Șablonul provocării în procesul de actualizare la o structură mai curată, mai puțin îmbricată.  Acest lucru nu a fost complet finalizat, dar următoarele ar trebui să se apropie de structura finală:

````mdx

---
id: identificator unic (alfanumeric), Titlu MongoDB_id)
: 'Titlu provocare'
ChallengeType: Integer, definit în `client/utils/challengeTypes. s'
videoUrl: 'url of video explanation'
forumTopicId: 12345
---

import Script din './script. dx';

## --step-description--

Text descriere, în markdown

```html
<div> 
  exemplu cod
</div>
```

## --step-hints--

![test-id-1]

Va exista un număr arbitrar de tripluri de id-uri, instrucțiuni (în marcaj) și blocuri de cod.

```js
Cod pentru test 1
```

![test-id-2]

Mai multe instrucțiuni în sintaxa markdown

```js
Mai mult cod
```

## --pas cu sămânţă--

### --înainte de cod

```lang
Cod evaluat înaintea utilizatorului
```

### --după cod utilizator --

```lang
Cod evaluat după utilizator și chiar înainte de teste
```

### --conţinut de seminţe--

![index-html]

```html
Câteva html
```

```css
Câteva css
```

```js
Câteva js
```

![index-js]

<Script ></p>


<h1 spaces-before="0">
  --solution-marker--
</h1>



<p spaces-before="0">
  Exact la fel ca secțiunea de semințe
</p>

<h2 spaces-before="0">
  --next-solution-marker
</h2>



<p spaces-before="0">
  La fel din nou
</p>

<h1 spaces-before="0">
  --semne de întrebare--
</h1>

<h2 spaces-before="0">
  --text-marker--
</h2>



<p spaces-before="0">
  Întrebarea ar ajunge aici (utilizată doar pentru provocările video)
</p>

<h2 spaces-before="0">
  --raspunsuri-marker--
</h2>



<p spaces-before="0">
  Răspuns 1
</p>

<hr />

<p spaces-before="0">
  Răspuns 2
</p>

<hr />

<p spaces-before="0">
  Răspuns 2
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
  Link-uri utile
</h3>



<p spaces-before="0">
  Crearea și editarea provocărilor:
</p>



<ol start="1">
  <li>
    <p spaces-before="0">
      <a href="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/client/utils/challengeTypes.js#L1-L13">Tipuri de provocări</a> - ce înseamnă valorile numerice tip provocare (numere).
    </p>
  </li>

  
  <li>
    <p spaces-before="0">
      <a href="https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s">Contributing to FreeCodecampp - Scriind ES6 Challenge Tests</a> - un videoclip urmând <a href="https://twitter.com/ArrowoodTech">Ethan Arrowood</a> în timp ce contribuie la vechea versiune a curriculumului.
    </p>
  </li>

</ol>
