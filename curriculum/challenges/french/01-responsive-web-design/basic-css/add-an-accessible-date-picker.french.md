---
id: 587d778b367417b2b2512aa8
title: Ajouter un sélecteur de date accessible
challengeType: 0
videoUrl: 'https://scrimba.com/c/cD9DJHr'
---

## Description
<section id='description'>
Les formulaires incluent souvent le champ <code>input</code>, qui peut être utilisé pour créer plusieurs contrôles de formulaire différents. L'attribut <code>type</code> de cet élément indique quel type d'entrée sera créé.
Vous avez peut-être remarqué les types de saisie <code>text</code> et <code>submit</code> dans les défis précédents, et HTML5 introduisent une option pour spécifier un champ <code>date</code>. Selon la prise en charge du navigateur, un sélecteur de date apparaît dans le champ <code>input</code>lorsqu'il obtient le focus, ce qui facilite le remplissage d'un formulaire pour tous les utilisateurs.

Pour les navigateurs plus anciens, le type sera par défaut <code>text</code>, il est donc utile d'afficher le format de date prévu sur l'étiquette ou sous forme de texte de remplacement au cas où.
En voici un exemple :

<blockquote>&lt;label for=&quot;input1&quot;&gt;Entrer une date :&lt;/label&gt;<br>&lt;input type=&quot;date&quot; id=&quot;input1&quot; name=&quot;input1&quot;&gt;<br></blockquote>
</section>

Camper Cat est en train d'organiser un tournoi de Mortal Kombat et veut demander à ses compétiteurs de voir quelle date est la meilleure. Ajouter un tag <code>input</code> avec un attribut <code>type</code> "date", un attribut <code>id</code> "pickdate", et un attribut <code>name</code> "date".
</section> </section

## Tests
<section id='tests'>

```yml
tests:
  - text: Votre code doit ajouter une balise <code>input</code> pour le champ de sélection de la date.
    testString: assert($('input').length == 2, 'Votre code doit ajouter une balise <code>input</code> pour le champ de sélection de la date.') ;
  - text: Votre balise <code>input</code> doit avoir un attribut <code>type</code> avec une valeur de date.
    testString: assert($('input').attr('type') =='date', 'Votre balise <code>input</code> devrait avoir un attribut <code>type</code> avec la valeur date') ;
  - text: Votre balise <code>input</code> doit avoir un attribut <code>id</code> avec la valeur pickdate.
    testString: assert($('input').attr('id') =='pickdate', 'Votre balise <code>input</code> doit avoir un attribut <code>id</code> avec la valeur pickdate') ;
  - text: Votre balise <code>input</code> doit avoir un attribut <code>name</code> avec une valeur de date.
    testString : assert($('input').attr('name') =='date', 'Votre balise <code>input</code> devrait avoir un attribut <code>name</code> avec le valeur date') ;
    
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Tournois</h1>
  </header>
  <main>
    <section>
      <h2>Sondage pour le tournoi Mortal Kombat</h2>
      <form>
        <p>Veuillez indiquer votre meilleur choix de date pour la compétition</p>
        <label for="pickdate">Date préférée</label>

        <!-- Ajoutez votre code sous cette ligne -->



        <!-- Ajoutez votre code au dessus de cette ligne -->

        <input type="submit" name="submit" value="Soumettre">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution requise
```
</section>
