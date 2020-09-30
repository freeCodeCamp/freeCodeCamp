# Kuinka auttaa videon haasteissa

Videon haasteet ovat uudenlainen haaste freeCodeCampin opetussuunnitelmassa.

Videon haaste on pieni osa koko pitkien videokurssien tietyssä aiheessa. Videon haaste-sivu upottaa YouTube-videon. Jokaisella haasteen sivulla on yksi monivalintakysymys, joka liittyy videoon. Käyttäjän on vastattava kysymykseen oikein, ennen kuin hän siirtyy kurssilla seuraavaan videohaasteeseen.

Videon haastesivujen ovat luoneet freeCodeCamp tiimin jäsenet. YouTube-videot on ladattu myös freeCodeCamp tiimin jäseniltä. Monilla videon haasteista ei vielä ole niihin liittyviä kysymyksiä.

Voit auttaa luomalla video-osioihin liittyviä monivalintakysymyksiä ja lisäämällä kysymyksiä videon haasteiden markdown tiedostoihin.


## Haasteen Malli

Alla on malli siitä, miltä haasteen markdown tiedostot näyttävät.

````md
---
id: Yksilöllinen tunniste (aakkosnumeerinen, MongoDB_id)
otsikko: Challenge Title
challengeType: 11
videoId: 'YouTube videoId for video challenge'
---

## Kuvaus

<section id='description'>
Valinnainen kuvaus videoon liittyvillä hyödyllisillä tiedoilla.
</section>

## Testit

<section id='tests'>

````yml
kysymys:
  tekstiä: 'Kysymys'
  vastauksia:
    - 'Vastaus yksi'
    - 'Vastaus kaksi'
    - 'Vastaus kolmi'
  ratkaisu: 3
````

</section>
````

## Kysymysten luominen videon haasteita varten

### Käytä videon haasteen kuvaustiedostoja

Löydät kuvaustiedostot videon haasteen kuvaustiedostoista opetussuunnitelmassa:

- [Data Analysis with Python Course](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [TensorFlow 2.0 Course](https://github. om/freeCodeCamp/freeCodeCamp/tree/tree/master/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Numpy Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/numpy)
- [How Neural Networks Work Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/how-neural-networks-work)

Pick a challenge markdown file from the options above.

### Hiipii haasteeseen liittyvän videon läpi ja luo mutipla valintakysymys

Ensinnäkin, etsi videoId.

Esimerkiksi, seuraavassa koodissa otsikko video haaste markdown tiedoston, videoId on "nVAaxZ34khk". GitHubissa tiedot on sijoitettava taulukon muotoon.
````
---
id: 5e9a093a74c4063ca6f7c14d otsikko: Data Analysis Example A challengeType: 11
videoId: nVAaxZ34khk
---
```

Seuraavaksi käytä YouTube-videota tuolla videotunnuksella. Videon url-osoite on:
https://www.youtube. om/watch?v=[videoId]    (lisää videoID URL ilman hakasulkuja)

Yllä olevassa esimerkissä url on https://www. outube.com/watch?v=nVAaxZ34khk

Skim the YouTube video with that videoID and think of multiple choice question based on the content of the video.

### Lisää kysymys merkkikansioon

Voit lisätä kysymyksen paikallisesti tai suoraan sulkemalla GitHubin käyttöliittymän. Lisätäksesi kysymyksen paikallisesti, sinun täytyy [määrittää freeCodeCamp paikallinen](how-to-setup-freecodecamp-locally.md). Voit myös löytää tiedoston GitHubista ja klikkaa muokkaa painiketta lisätäksesi kysymyksen suoraan selaimessasi.

Jos kysymystä ei ole vielä lisätty tiettyyn videon haasteeseen, sillä on seuraava oletuskysymys:

````yml
kysymys:
  teksti: •
    Kysymys
  vastauksia:
    - ¶
      yksi
    - −
      kaksi
    - −
      kolme
  ratkaisu: 3
```

Päivitä sana “Kysymys” kysymykselläsi. Päivitä “yksi”, “kaksi”, ja “kolme” kanssa mahdollisia vastauksia. Varmista, että päivitä ratkaisun numero, jolla vastaus on oikea. Voit lisätä enemmän mahdollisia vastauksia käyttäen samaa muotoa. Kysymystä ja vastauksia voidaan ympäröidä lainausmerkeillä.

#### Käytä merkintää muotoillaksesi kysymyksesi

Käsiteltävänä oleva teksti on luokiteltu merkiksi. Yksinkertaisin tapa varmistaa, että se on muotoiltu oikein on aloittaa kysymys `teksti: ¶`, kuten tämä:

```yml
kysymys:
  teksti: ¶
    Kysymys
```

Sitten sinun täytyy varmistaa, että kysymyksesi on uudella rivillä ja indented yhdellä tasolla enemmän kuin `tekstiä: ¶`.

Samaa lähestymistapaa voidaan käyttää vastauksissa, joten koko kysymys tulee

```yml
kysymys:
  teksti: ¶
    Kysymys
  vastauksia:
  - ·
    Ensimmäinen vastaus
  - ·
    Toinen
  - −
    Kolmas
  ratkaisu: 2
```

Varmista, että jokainen vastaus on uskottava, mutta on vain yksi oikea vastaus.

#### HTML:n käyttö

Kysymykset ja vastaukset voivat sisältää tiettyjä HTML-tageja, kuten `<br>` uudelle riville. HTML-tunnisteita tulee käyttää säästeliäästi, kun kysymyksiä ei voida ilmaista ilman niitä.

### Esimerkit kysymyksistä

#### Esimerkkejä ilman HTML

````yml
kysymys:
  teksti: ¶
    Mitä tämä JavaScript-koodi kirjautuu konsoliin?
    ``js
    console.log('hello world');
    ````


    Valitse vastaus!
  vastaukset:
    - ¶ hello *maailma*
    - ¶ **hello** maailma
    - ¶ hello maailma ratkaisu: 3
````

````yml
kysymys:
  teksti: ¶
    Mitä tulostaa tämän koodin käytön jälkeen:
    ```py
    leveys = 15
    korkeus = 12.
    print(korkeus/3)
    ````
  vastaukset:
    - | 39
    - | 4
    - ¶ 4,0
    - ¶ 5,0
    - ¶ 5 ratkaisu: 3
````

#### Esimerkki HTML:llä

```yml
kysymys:
  teksti: ¶
    Mitä tulostaa tämän koodin käytön jälkeen:
    <pre><code>leveys = 15<br>korkeus = 12.<br>print(height/3)<code></pre>
  vastauksia:
    - pt
      39
    - pt
      4
    - pt
      4.
    - ¶
      5.
    - ¶
      5
  liuos: 3
````

Lopullinen esimerkki osoittaa, että HTML voidaan käyttää, mutta se ei ole yhtä luettavissa kuin versio ilman sitä.

Lisää esimerkkejä, voit katsoa seuraavan videokurssin merkkilevyjä varten. Kaikilla haasteilla on jo kysymyksiä: [Python kaikille -kurssi](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## Avaa pull-pyyntö

Kun olet luonut yhden tai useamman kysymyksen, voit toimittaa muutokset uuteen haaraan ja [avaa pull-pyynnön](how-to-open-a-pull-request.md).
