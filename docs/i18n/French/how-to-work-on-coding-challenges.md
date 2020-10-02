# Comment travailler sur les défis de codage

Notre objectif est de développer une expérience d'apprentissage interactif amusante et claire.

Il est difficile de concevoir des défis de codage interactifs. Il serait beaucoup plus facile d'écrire une longue explication ou de créer un tutoriel vidéo, et il y a une place pour ceux sur Medium et YouTube. Cependant, pour notre programme de base, nous restons fidèles à ce qui fonctionne le mieux pour la plupart des gens - une expérience totalement interactive, comme le jeu vidéo.

Nous voulons que les campeurs atteignent un état de débit. Nous voulons qu'ils prennent de l'élan et qu'ils fassent preuve de dynamisme à travers notre programme d'études avec le moins d'accrochages possible. Nous voulons qu'ils entrent dans les projets en toute confiance et qu'ils soient largement exposés aux concepts de programmation.

La création de ces défis exige une immense créativité et une grande attention aux détails. Il y a beaucoup d'aide disponible. Vous aurez le soutien d'une équipe entière de contributeurs à qui vous pouvez rebondir vos idées et faire une démonstration de vos défis. Restez actif dans la [salle des contributeurs](https://gitter.im/freecodecamp/contributors) et posez de nombreuses questions.

Avec votre aide, nous pouvons concevoir un programme de codage interactif qui aidera des millions de personnes à apprendre à coder pour les années à venir.

Le contenu de chaque challenge est stocké dans son propre fichier markdown. Ce fichier markdown est ensuite converti en HTML à l'aide de nos outils pour créer des pages Web interactives.

Vous pouvez trouver tout le contenu du programme de freeCodeCamp.org dans le répertoire [`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges).

## Mettre en place les outils pour le programme

Avant de travailler sur le curriculum, vous devrez mettre en place des outils pour vous aider à tester vos changements. Vous pouvez utiliser n'importe quelle option à partir de ce qui suit:

- Vous pouvez [configurer freeCodeCamp localement](how-to-setup-freecodecamp-locally.md). Ceci est **fortement recommandé** pour les contributions régulières/répétées. Cette configuration vous permet de travailler et de tester vos modifications.
- Utilisez Gitpod, un environnement de développement en ligne gratuit. En cliquant sur le bouton ci-dessous, vous démarrerez un environnement de développement prêt à coder pour freeCodeCamp dans votre navigateur. Cela ne prend que quelques minutes.

  [![Ouvrir dans Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Modifiez les fichiers sur l'interface de GitHub en cliquant sur l'icône crayon du fichier correspondant. Bien que c'est la façon la plus rapide, il n'est pas recommandé ****, car vous ne pouvez pas tester vos modifications sur GitHub. Si nos responsables concluent que les modifications que vous avez apportées doivent être testées localement, vous devrez suivre à nouveau les méthodes ci-dessus.

## Modèle de défi

Ci-dessous est un modèle de ce à quoi ressemblent les fichiers de markdown de challenge actuellement.  Pour voir le modèle simplifié, nous allons adopter voir [ci-dessous](#upcoming-challenge-template).

````md
---
id : Identifiant unique (alphanumérique, MongoDB_id)
title: Challenge Title
challengeType: 0
videoUrl: 'url de l'explication vidéo'
---

## Description

<section id='description'>
Une description du challenge et ce qui est requis pour passer
</section>

## Instructions

<section id='instructions'>
Instructions sur ce qu'il faut faire.
</section>

## Tests

<section id='tests'>

tests ```yml
:
  - texte : Devrait retourner "foo"
    chaîne de test: 'Une fonction stringifiée utilisant éventuellement des asserts Chai'
````

</section>

## Graine de Défi

<section id='challengeSeed'>

<div id='{ext}-seed'>

```{ext}
Code affiché dans l'éditeur par défaut.

Il s'agit d'une section requise pour relever le défi.
```

</div>

### Avant le test

<div id='{ext}-setup'>

```{ext}
Code de configuration de test optionnel.
```

</div>

### Après le test

<div id='{ext}-teardown'>

```{ext}
Optional Test tear down code.
```

</div>

</section>

## Solution

<section id='solution'>

La solution ```{ext}
// est requise
```

</section>

````

> [!NOTE]
>
> 1. Dans les sections ci-dessus, les exemples de `{ext}` sont:
>
>   - `html` - HTML/CSS
>   - `js` - JavaScript
>   - `jsx` - JSX
>
> 2. Pour la section `Tests` ci-dessus, `text` et `testString` doivent être des chaînes YAML valides. `testString` peut être une fonction ou une expression stringifiée en utilisant les assertions Chai.

Chaque défi a besoin d'un <code>id</code>. Si vous ne le spécifiez pas, MongoDB en créera un nouveau au hasard lorsqu'il enregistrera les données; cependant, nous ne voulons pas qu'il le fasse, car nous voulons que les identifiants de défis soient cohérents entre les différents environnements (mise en scène, production, beaucoup de développeurs différents, etc.).

Pour générer un nouveau dans un shell (en supposant que MongoDB tourne séparément) :

1. Exécutez la commande `mongo`.
2. Exécutez la commande `ObjectId()`.

$ mongo
version du shell MongoDB v3.6.1
connexion à: mongodb://127.0.0.1:27017
Version du serveur MongoDB : 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````
. Si vous ne le spécifiez pas, MongoDB en créera un nouveau au hasard lorsqu'il enregistrera les données; cependant, nous ne voulons pas qu'il le fasse, car nous voulons que les identifiants de défis soient cohérents entre les différents environnements (mise en scène, production, beaucoup de développeurs différents, etc.).

Pour générer un nouveau dans un shell (en supposant que MongoDB tourne séparément) :

1. Exécutez la commande `mongo`.
2. Exécutez la commande `ObjectId()`.

$ mongo
version du shell MongoDB v3.6.1
connexion à: mongodb://127.0.0.1:27017
Version du serveur MongoDB : 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
</code>

Le résultat est un nouvel identifiant, par exemple `5a474d78df58bafeb3535d34` ci-dessus.

La solution ```{ext} // est requise

```yml
---
id: 5a474d78df58bafeb3535d34
titre : Titre du défi
```

## Défi de numérotation

Nommer les choses est difficile. Nous avons facilité la tâche en imposant des contraintes.

Pour générer un nouveau dans un shell (en supposant que MongoDB tourne séparément) :

Par exemple :

Le résultat est un nouvel identifiant, par exemple `5a474d78df58bafeb3535d34` ci-dessus.

- Utiliser la note dans le sens horaire pour spécifier le rembourrage d'un élément
- Tableaux condensés avec .reduce
- Utiliser la note de crochet pour trouver le premier caractère dans une chaîne de caractères

## Défis de nommage

Les phrases doivent être claires et concises avec un jargon minimal. S'il est utilisé, le jargon devrait être immédiatement défini en anglais clair.

Garder les paragraphes courts (environ 1-4 phrases). Les gens sont plus susceptibles de lire plusieurs paragraphes courts qu'un mur de texte.

Le texte de défi devrait utiliser la deuxième personne (« vous ») pour lui donner un ton de conversation. De cette façon, le texte et les instructions semblent parler directement au campeur travaillant dans le cadre du défi. Essayez d'éviter d'utiliser la première personne ("I", "nous", "let's", et "nous").

Ne pas utiliser de liens sortants. Celles-ci interrompent le flux. Les campeurs ne devraient jamais avoir à Google quoi que ce soit pendant ces défis. S'il y a des ressources dont vous pensez que les campeurs pourraient bénéficier, ajoutez-les à l'article du Guide du défi.

Voici quelques exemples de noms de défis :

N'utilisez pas d'émoticônes ou d'émoticônes dans les défis. freeCodeCamp a une communauté mondiale, et la signification culturelle d'un emoji ou d'une émoticône peut être différente dans le monde. En outre, les émoticônes peuvent se rendre différemment sur différents systèmes.

Les bons noms devraient utiliser la majuscule correcte lorsque possible. Vous trouverez ci-dessous une liste de mots tels qu'ils devraient apparaître dans les défis.

- JavaScript (lettres majuscules dans "J" et "S" et sans abréviations)
- Node.js
- Le développement du front-end (formulaire adjectif avec un tireur) est quand vous travaillez sur le front-end (formulaire de nom sans tireur). Il en va de même pour les termes "back end", "full stack" et beaucoup d'autres termes composés.

### La règle de 2 minutes

Chaque défi doit être résolu en 120 secondes par un anglophone natif qui a relevé les défis qui l'attendent. Cela inclut le temps nécessaire pour lire les directions/instructions comprendre le code source écrire leur propre code et faire passer tous les tests.

Si cela prend plus de deux minutes pour compléter le défi, vous avez deux options :

- Simplifiez le défi, ou
- Divisez le défi en deux défis.

Vous pouvez ajouter des diagrammes si nécessaire.

Nous vérifions combien de temps il faut aux campeurs pour résoudre les changements et utiliser cette information pour identifier les défis qui doivent être simplifiés ou fractionnés.

### Modularité

Chaque défi devrait enseigner exactement un concept, et ce concept devrait apparaître dans le nom du défi.

Nous pouvons renforcer les concepts précédemment couverts par la répétition et les variations - par exemple, introduire les éléments h1 dans un défi, puis h3 éléments quelques défis plus tard.

Notre objectif est d'avoir des milliers de défis de 2 minutes. Ils peuvent se regrouper et réitérer des concepts déjà couverts.

### Mise en forme du texte du défi

La règle de 2 minutes oblige vous, le concepteur de défi, à rendre vos instructions concises, votre code de graine clair et vos tests directement.

- Les mots-clés de la langue vont dans les balises `<code>`. Par exemple, les noms de balises HTML ou les noms de propriétés CSS
- La première instance d'un mot clé lorsqu'il est défini, ou des mots-clés généraux (c'est-à-dire "objet" ou "immuable") va dans les balises `<dfn>`
- Les références aux parties de code (c'est-à-dire les noms de fonction, de méthode ou de variable) doivent être enveloppées dans les balises `<code>`. Voir l'exemple ci-dessous:
- Utilisez <code>parseInt</code> pour convertir la variable <code>realNumber</code> en un entier.
- Les blocs de code multi-lignes **doivent être précédés d'une ligne vide**. La ligne suivante doit commencer par trois backticks suivis immédiatement par une des langues [prises en charge](https://prismjs.com/#supported-languages). Pour compléter le bloc de code, tu dois commencer une nouvelle ligne qui n'a que trois ticks et **une autre ligne vide**. **Remarque :** Si vous allez utiliser un exemple de code dans YAML, utiliser `yaml` au lieu de `yml` pour la langue à droite des backticks.

Nous vérifions combien de temps il faut aux campeurs pour résoudre les changements et utiliser cette information pour identifier les défis qui doivent être simplifiés ou fractionnés.

````md
---
id: 5a474d78df58bafeb3535d34
titre : Titre du défi

````
````

- Des informations supplémentaires sous la forme d'une note doivent être formatées `<strong>Note :</strong> Reste du texte de la note ... - Si plusieurs notes sont nécessaires, puis listez toutes les notes en phrases séparées en utilisant le format `<strong>Informations :</strong> First note text. Texte de la deuxième note.`.
- Utilisez des guillemets doubles le cas échéant

## Écrire des tests

Les défis doivent avoir le nombre minimum de tests nécessaires pour vérifier qu'un campeur comprend un concept.

Notre objectif est de communiquer le seul point que le défi essaie d'enseigner, et de tester qu'ils ont compris ce point.

Les tests de défi peuvent utiliser les bibliothèques d'assertion Node.js et Chai.js. En outre, si nécessaire, le code généré par l'utilisateur peut être accédé dans la variable `code`.

## Formatage du code de la seed

Voici des directives de mise en forme spécifiques pour le code de la seed de challenge :

- Utilisez deux espaces pour indenter
- Les déclarations JavaScript se terminent par un point-virgule
- Utilisez des guillemets doubles le cas échéant
- Les commentaires faits devraient avoir un espace entre les caractères de commentaire et le commentaire eux-mêmes

  `// Réparez cette ligne`

## Indices et solutions

Chaque défi a un bouton `Obtenir un indice`, afin qu'un utilisateur puisse accéder aux astuces ou solutions qui ont été créées pour le défi. Les sujets des hints/solutions du programme se trouvent sur [notre forum](https://forum.freecodecamp.org/c/guide) dans la catégorie `Guide`.

Si vous trouvez un problème avec le sujet des hints/solutions d'un défi existant, vous pouvez faire des suggestions dans la [catégorie des contributeurs](https://forum.freecodecamp.org/c/contributeurs) sur le forum. Les modérateurs et les utilisateurs ayant le niveau de confiance 3 examineront les commentaires et décideront si oui ou non inclure les changements dans le sujet des astuces et des solutions correspondantes.

### Ajout de nouveaux sujets sur les astuces du défi/solutions

Faites les étapes suivantes en ajoutant un nouveau sujet lié aux astuces et solutions de défi.

1. Commencez par suivre les mêmes étapes pour créer un nouveau sujet, mais passez en revue le suivant pour créer le titre.
2. Le titre du sujet devrait commencer par `freeCodeCamp Challenge Guide: ` concaténé avec le titre réel du défi du programme. Par exemple, si le défi est nommé "`Chunky Monkey`", le titre du sujet serait "`freeCodeCamp Challenge Guide: Chunky Monkey`".
3. `camperbot` devrait être le propriétaire de ces sujets/posts, vous devrez donc demander à un administrateur de changer la propriété du message principal à `camperbot`.
4. Une fois le nouveau sujet créé, un identifiant de sujet de forum est créé. Il se trouve à la fin de l'URL du sujet du forum. Cet identifiant doit être ajouté à la première question du fichier de défi du programme d'études via le processus normal de pull request pour le bouton `Obtenir un indice` pour le lien vers le sujet.

### Lignes directrices pour le contenu des astuces et des sujets sur les solutions

Lorsque vous proposez une solution pour un sujet lié au programme d'étude, le code complet doit être ajouté. Ceci inclut tout le code original de la graine ainsi que toutes les modifications nécessaires pour passer tous les tests de défi. Le modèle suivant devrait être utilisé lors de la création de nouveaux sujets de hints/solutions :

``md
# Challenge Name Goes Here

---

## Problème d'explication

Ceci résume ce qui doit être fait sans simplement redéfinir la description et/ou les instructions du défi. Il s'agit d'une section optionnelle

#### Liens pertinents

- [Texte de lien](link_url_goes_here)
- [Texte de lien](link_url_goes_here)

---

## Indices

### Indice 1

Indice va ici

### Indice 2

Indice va ici

---

## Solutions

<details><summary>Solution 1 (Cliquez pour afficher/cacher)</summary>

```js
function myFunc() {
  console. og('Bonjour le monde !');
}
````

#### Explication de code

- Explication de code ici
- Explication de code ici

#### Liens pertinents

- [Texte du lien](link_url_goes_here)
- [Texte du lien](link_url_goes_here)

</details>
````

## Testing Challenges

Avant de [créer une pull request](how-to-open-a-pull-request. d) pour vos modifications, vous devez valider que les modifications que vous avez apportées ne causent pas de problèmes avec le défi. 

1. Pour tester tous les challenges exécutez la commande ci-dessous depuis le répertoire racine

````
Nous pouvons renforcer les concepts précédemment couverts par la répétition et les variations - par exemple, introduire les éléments h1 dans un défi, puis h3 éléments quelques défis plus tard.
``` 

2. Vous pouvez également tester un bloc ou un superbloc de défis avec ces commandes

```
npm exécuter test:curriculum --superblock=responsive-web-design
```

```
Voici des directives de mise en forme spécifiques pour le texte du challenge et des exemples:
```

Vous pouvez également tester un défi individuellement en effectuant les étapes suivantes :

1. Basculer vers le répertoire `curriculum`:

   ```
   Programme de Cd
   ```

2. Exécutez ce qui suit pour chaque fichier de challenge pour lequel vous avez changé :

   ```
   test de course npm -- -g 'le titre anglais complet du défi'
   ```

Une fois que vous avez vérifié que chaque défi sur lequel vous avez travaillé passe les tests, [veuillez créer une pull request](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/how-to-open-a-pull-request.md).

> [!TIP]
> Vous pouvez définir la variable d'environnement `LOCALE` dans le `.env` dans la langue du (des) challenge(s) que vous devez tester.
> 
> Les valeurs actuellement acceptées sont `english` et `chinese`, avec `english` étant défini par défaut.

## Modèle de défi à venir

Le modèle de challenge en cours de mise à jour vers une structure plus propre et moins imbriquée.  Cela n'a pas été entièrement finalisé, mais les éléments suivants devraient être proches de la structure finale :

``mdx

---
id : Identifiant unique (alphanumérique, MongoDB_id)
title: 'Challenge Title'
challengeType: Integer, defined in `client/utils/challengeTypes. s`
videoUrl: 'url d'explication vidéo'
forumTopicId: 12345
---

import Script de './script. dx';

## --step-description--

Texte de description dans markdown

```html
<div> 
  exemple de code
</div>
```

## --step-hints--

![test-id-1]

npm exécuter test:curriculum --block='HTML de base et HTML5'

```js
Code pour le test 1
```

![test-id-2]

Plus d'instructions dans la syntaxe markdown

```js
Code pour le test 1
```

## --step-seed--

### --before-user-code--

```lang
Plus de code
```

### --after-user-code--

```lang
Code évalué avant l'utilisateur
```

### --seed-content--

![index-html]

```html
Code évalué après l'utilisateur et juste avant les tests
```

```css
Quelques html
```

```js
Quelques css
```

![index-js]

<Script ></p>


<h1 spaces-before="0">
  --marqueur-solution-
</h1>



<p spaces-before="0">
  Exactement la même chose que la section graines
</p>

<h2 spaces-before="0">
  --next-solution-marker
</h2>



<p spaces-before="0">
  Plus d'instructions dans la syntaxe markdown
</p>

<h1 spaces-before="0">
  --marqueur-question--
</h1>

<h2 spaces-before="0">
  --marqueur-solution-
</h2>



<p spaces-before="0">
  La question irait ici (uniquement utilisé pour les défis vidéo)
</p>

<h2 spaces-before="0">
  --marqueur-texte-
</h2>



<p spaces-before="0">
  Réponse 2
</p>

<hr />

<p spaces-before="0">
  Réponse 2
</p>

<hr />

<p spaces-before="0">
  Exactement la même chose que la section graines
</p>

<h2 spaces-before="0">
  --réponses-marqueur--
</h2>



<p spaces-before="0">
  \<number of correct answer\>
</p>



<p spaces-before="0">
  ````
</p>

<h3 spaces-before="0">
  Liens utiles
</h3>



<p spaces-before="0">
  Réponse 1
</p>



<ol start="1">
  <li>
    <p spaces-before="0">
      <a href="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/client/utils/challengeTypes.js#L1-L13">Type de défi</a> - ce que les valeurs de type challenge numérique signifient (enum).
    </p>
  </li>

  
  <li>
    <p spaces-before="0">
      <a href="https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s">Contribuer à FreeCodeCamp - Écrire des tests de défi ES6</a> - une vidéo suivant <a href="https://twitter.com/ArrowoodTech">Ethan Arrowood</a> car il contribue à l'ancienne version du curriculum.
    </p>
  </li>

</ol>
