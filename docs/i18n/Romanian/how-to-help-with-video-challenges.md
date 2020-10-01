# Cum să ajuti la provocările din domeniul video

Provocările video sunt un nou tip de provocare în programa freeCodecamp.

O provocare video este o mică parte a unui curs video de lungime completă pe un subiect anume. O pagină cu provocarea video încorporează un videoclip YouTube. Fiecare pagină de provocare are o singură întrebare cu variantă multiplă legată de video. Un utilizator trebuie să răspundă corect la întrebare înainte de a trece la următoarea provocare video.

Paginile provocării video sunt create de membrii echipei freeCodeCampp. Videoclipurile YouTube sunt, de asemenea, încărcate de către membrii echipei freeCodeCamp. Multe dintre provocările din domeniul video nu au încă întrebări legate de acestea.

Poți ajuta prin crearea mai multor întrebări de alegere legate de secțiunile video și adăugarea întrebărilor la fișierele markdown pentru provocările video.


## Șablon provocare

Mai jos este un şablon pentru cum arată fişierele markdown provocări.

````md
---
id: Identificator unic (alfanumeric, MongoDB_id)
titlu: Challenge Title
challengeType: 11
videoId: 'YouTube videoId for video challenge'
---

## Descrierea

<section id='description'>
O descriere opțională cu informații utile legate de video.
</section>

## Testele

<section id='tests'>

``yml
întrebare:
  text: 'Întrebare'
  răspunsuri:
    - 'Răspuns unu'
    - 'Răspuns Two'
    - soluția 'Răspuns trei'
  : 3
````

</section>
````

## Creând întrebări pentru provocările video

### Accesează fișierele de marcare ale provocării video

Poți găsi fișierele markdown pentru provocări video în următoarele locații din curriculum:

- [Analiza datelor cu Cursul Python](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [Curs TensorFlow 2.0](https://github. om/freeCodeCamp/freeCodeCamp/tree/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Curs Numpy](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/numpy)
- [Cum Neural Networks Course](https://github.com/freeCodeCamp/freeCodeCamp/Codetre/master/curriculum/challenges/english/11-machlearnine-with-python/how-neural-networkal-work)

opțiunile de mai sus pentru un fișier de lucru.

### Skim prin clipul video asociat provocării și creați o întrebare mutiplă cu alegere

Mai întâi, găsiți ID-ul video.

De exemplu, în următorul cod din antetul unui fișier cu provocare video, ID-ul video este "nVAaxZ34khk". Pe GitHub, informațiile ar trebui să fie prezentate într-un format de tabel.
````
---
id: 5e9a093a74c4063ca6f7c14d titlul: Analiza datelor Exemplul A challenge engeType: 11
videoId: nVAaxZ34khk
---
```

Apoi, accesează videoclipul YouTube cu acel videoId. URL-ul pentru video va fi:
https://www.youtube. om/watch?v=[videoId]    (adaugă videoId la adresa URL fără paranteze pătrate)

În exemplul de mai sus, url-ul este https://www. outube.com/watch?v=nVAaxZ34khk

Skim the YouTube video cu acel videoId și gândiți-vă la o întrebare cu variante multiple bazată pe conținutul video.

### Adăugați întrebarea la fișierul markdown

Puteți adăuga întrebarea la nivel local sau direct interfața GitHub. Pentru a adăuga întrebarea la nivel local, trebuie să [setați tabăra freeCodep local](how-to-setup-freecodecamp-locally.md). De asemenea, puteți găsi fișierul pe GitHub și faceți clic pe butonul de editare pentru a adăuga întrebarea la dreapta în browser-ul dvs.

dacă nu s-a adăugat încă o întrebare la o anumită provocare video, va avea următoarea întrebare implicită:

``yml
întrebare:
  textul: •
    Întrebare
  răspunsuri:
    - <unk>
      una
    - <unk>
      2
    - <unk>
      3
  : 3
```

Actualizaţi cuvântul "Întrebare" cu întrebarea dumneavoastră. Actualizați „unul”, „două” și „trei” cu posibile răspunsuri. Asigurați-vă că actualizați numărul soluției cu care răspunsul este corect. Puteţi adăuga mai multe răspunsuri posibile folosind acelaşi format. Întrebarea și răspunsurile pot fi înconjurate de ghilimele.

#### Folosește markdown pentru a formata întrebarea ta

Textul în cauză este analizat ca marcaj. Cel mai simplu mod de a se asigura că este formatat corect este de a începe întrebarea cu `textul: <unk>`, astfel:

```yml
întrebare:
  text: <unk>
    Întrebare
```

Apoi trebuie să vă asiguraţi că întrebarea dvs. este pe o linie nouă şi să indentaţi un nivel mai mult de `textul: <unk>`.

Aceeași abordare poate fi utilizată și pentru răspunsuri, astfel încât întreaga întrebare să devină

```yml
Întrebare:
  text: 
text:
    Întrebare
  răspunsuri:
  - <unk>
    Primul răspuns
  - <unk>
    Second
  - <unk>
    A treia soluție
  : 2
```

Asiguraţi-vă că fiecare răspuns este plauzibil, dar există un singur răspuns corect.

#### Utilizarea HTML

Întrebările și răspunsurile pot conține anumite etichete HTML ca `<br>` pentru o linie nouă. Tag-urile HTML ar trebui folosite în mod rar, când întrebările nu pot fi exprimate fără ele.

### Exemple de întrebări

#### Exemple fără HTML

````yml
întrebare:
  text:
    Ce face acest jurnal de cod JavaScript în consolă?
    ```js
    console.log('hello world');
    ````


    Selectează un răspuns!
  răspunsuri:
    - Salut *lume*
    - <unk> **salut** lume
    - Salutare soluție: 3
````

````yml
întrebare:
  text:
    Ce va tipări după rularea acestui cod:
    ``py
    width = 15
    height = 12.
    print(înălţime/3)
    ````
  răspunsuri:
    - | 39
    - | 4
    - 4.0
    - 5.0
    - 5 soluție: 3
````

#### Exemplu cu HTML

```yml
întrebare:
  text:
    Ce se va afișa după rularea acestui cod:
    <pre><code>lățime = 15<br>înălțime = 12.<br>print(eight/3)<code></pre>
  răspunsuri:
    - <unk>
      39
    - <unk>
      4
    - <unk>
      4.
    - <unk>
      5.
    - <unk>
      5
  soluție: 3
````

Exemplul final demonstrează că HTML poate fi folosit, dar că nu este la fel de lizibil ca versiunea fără el.

Pentru mai multe exemple, vă puteţi uita la fişierele markdown pentru următorul curs video. Toate provocările au deja întrebări: [Python pentru cursul tuturor](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## Deschide o cerere de tragere

După crearea uneia sau mai multor întrebări, poți angaja modificările la o sucursală nouă și [deschide o pull request](how-to-open-a-pull-request.md).
