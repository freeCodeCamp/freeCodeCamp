# Comment aider à relever les défis vidéo

Les défis vidéo sont un nouveau type de défi dans le programme d'études de FreeCodeCamp.

Un défi vidéo est une petite section d'un cours vidéo complet sur un sujet particulier. Une page de défi vidéo embarque une vidéo YouTube. Chaque page de défi a une seule question à choix multiples liée à la vidéo. Un utilisateur doit répondre correctement à la question avant de passer au prochain défi vidéo dans le cours.

Les pages de défi vidéo sont créées par les membres de l'équipe de freeCodeCamp. Les vidéos YouTube sont également téléchargées par les membres de l'équipe de freeCodeCamp. Beaucoup de défis vidéo n'ont pas encore de questions associées à eux.

Vous pouvez aider en créant des questions à choix multiples liées aux sections vidéo et en ajoutant les questions aux fichiers markdown pour les défis vidéo.


## Modèle de défi

Ci-dessous se trouve un modèle de ce à quoi ressemblent les fichiers markdown du défi.

````md
---
id : Identifiant unique (alphanumérique, MongoDB_id)
title: Challenge Title
challengeType: 11
videoId: 'YouTube videoId for video challenge'
---

## Description

<section id='description'>
Une description facultative avec des informations utiles liées à la vidéo.
</section>

## Tests

<section id='tests'>

```yml
question :
  texte : 'Question'
  réponses :
    - 'Répondre un'
    - 'Répondre deux'
    - 'Répondre trois'
  solution : 3
````

</section>
````

## Créer des questions pour les défis vidéo

### Accédez aux fichiers de markdown vidéo

Vous pouvez trouver les fichiers markdown pour les défis vidéo aux endroits suivants dans le curriculum:

- [Analyse des données avec le cours Python](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [Cours TensorFlow 2.0 ](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Numpy Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/numpy)
- [How Neural Networks Work Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/how-neural-networks-work)

Choisissez un fichier markdown parmi les options ci-dessus.

### Skim through the video associated with the challenge and create a mutiple choice question

First, find the videoId.

Par exemple, dans le code suivant de l'en-tête d'un fichier de marquage de challenge vidéo, le videoId est "nVAaxZ34khk". Sur GitHub, les informations doivent être mises en page dans un format de table.
````
---
id : 5e9a093a74c4063ca6f7c14d titre : Analyse de données Exemple A challengeType : 11
videoId: nVAaxZ34khk
---
```

Ensuite, accédez à la vidéo YouTube avec cet identifiant vidéo. L'url de la vidéo sera :
https://www.youtube. om/watch?v=[videoId]    (ajouter videoId à l'URL sans crochets)

Dans l'exemple ci-dessus, l'url est https://www. outube.com/watch?v=nVAaxZ34khk

Skim la vidéo YouTube avec ce videoId et pensez à une question à choix multiple basée sur le contenu de la vidéo.

### Ajoute la question au fichier markdown

Vous pouvez ajouter la question localement ou directement via l'interface GitHub. Pour ajouter la question localement, vous devez [configurer freeCodeCamp localement](how-to-setup-freecodecamp-locally.md). Vous pouvez également trouver le fichier sur GitHub et cliquer sur le bouton d'édition pour ajouter la question directement dans votre navigateur.

Si une question n'a pas encore été ajoutée à un défi vidéo particulier, il aura la question par défaut suivante:

```yml
question :
  texte : |
    Question
  réponses :
    - |
      un
    - |
      deux
    - |
      trois
  solution : 3
```

Mettez à jour le mot « Question » avec votre question. Mettez à jour le « un », « deux » et « trois » avec les réponses possibles. Assurez-vous de mettre à jour le numéro de la solution avec laquelle la réponse est correcte. Vous pouvez ajouter plus de réponses possibles en utilisant le même format. La question et les réponses peuvent être entourées de guillemets.

#### Utilisez markdown pour formater votre question

Le texte de la question est analysé comme markdown. La façon la plus simple de s'assurer qu'il est formaté correctement est de commencer la question avec du texte `: |`, comme ceci :

```yml
Question :
  texte : |
    Question
```

Ensuite, vous devez vous assurer que votre question est sur une nouvelle ligne et a indenté un niveau de plus de `texte : |`.

La même approche peut être utilisée pour les réponses, donc toute la question devient

```yml
Question :
  texte : |
    Question
  réponses :
  - |
    Première réponse
  - |
    Seconde
  - |
    Troisième
  solution : 2
```

Assurez-vous que chaque réponse est plausible, mais il n'y a qu'une seule réponse correcte.

#### Utilisation du HTML

Les questions et réponses peuvent contenir certaines balises HTML comme `<br>` pour une nouvelle ligne. Les balises HTML doivent être utilisées avec parcimonie lorsque les questions ne peuvent pas être exprimées sans elles.

### Exemples de questions

#### Exemples sans HTML

````yml
Question :
  texte : |
    Qu'est-ce que ce code JavaScript log sur la console ?
    ```js
    console.log('bonjour monde');
    ````


    Sélectionnez une réponse !
  réponses:
    - | bonjour *monde*
    - | **Bonjour** monde
    - | Bonjour le monde solution : 3
````

````yml
question:
  text: |
    Ce qui va s'afficher après avoir exécuté ce code :
    ```py
    width = 15
    height = 12. impression(hauteur/3)
    ````
  réponses:
    - | 39
    - | 4
    - | 4.0
    - | 5.0
    - | 5 solution : 3
````

#### Exemple avec HTML

```yml
question :
  text: |
    Qu'est-ce qui va imprimer après avoir exécuté ce code :
    <pre><code>width = 15<br>height = 12.<br>print(height/3)<code></pre>
  réponses:
    - |
      39
    - |
      4
    - |
      4. - |
      5. - |
      5
  solution: 3
````

L'exemple final montre que le HTML peut être utilisé, mais qu'il n'est pas aussi lisible que la version sans lui.

Pour plus d'exemples, vous pouvez consulter les fichiers markdown pour le cours vidéo suivant. Tous les défis ont déjà des questions : [Python pour tout le monde cours](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## Ouvrir une pull request

Après avoir créé une ou plusieurs questions, vous pouvez valider les modifications sur une nouvelle branche et [ouvrir une pull request](how-to-open-a-pull-request.md).
