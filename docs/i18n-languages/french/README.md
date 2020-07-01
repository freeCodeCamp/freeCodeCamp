![freeCodeCamp.org Social Banner](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)
[![Build Status](https://travis-ci.org/freeCodeCamp/freeCodeCamp.svg?branch=staging)](https://travis-ci.org/freeCodeCamp/freeCodeCamp)
[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![first-timers-only Friendly](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)](http://www.firsttimersonly.com/)
[![Known Vulnerabilities](https://snyk.io/test/github/freecodecamp/freecodecamp/badge.svg)](https://snyk.io/test/github/freecodecamp/freecodecamp)

## Bienvenue sur le code source et le curriculum open source de freeCodeCamp.org !

[freeCodeCamp.org](https://www.freecodecamp.org) est une communauté conviviale où vous pouvez apprendre à coder gratuitement. Elle est gérée par [un organisme à but non lucratif 501 (c) (3)](https://donate.freecodecamp.org) et soutenue par des donateurs dans le but d'aider des millions d'adultes à se reconvertir vers l'informatique. Notre communauté a déjà aidé plus de 10 000 personnes à décrocher leur premier emploi de développeur.

Notre programme complet de développement Web est entièrement gratuit et vous permet d'étudier à votre rythme. Nous avons des milliers de défis de codage interactif pour vous aider à développer vos compétences.

## Table des matières

- [Certifications](#certifications)
- [La plateforme d'apprentissage](#the-learning-platform)
- [Reporter un bug](#found-a-bug)
- [Reporter un problème de sécurité](#found-a-security-issue)
- [Contribuer](#contributing)
- [Licence](#license)

### Certifications

freeCodeCamp.org propose plusieurs certifications gratuites de développeur. Chacune de ces certifications implique la création obligatoire de 5 projets d'applications Web, ainsi que des centaines de défis de codage facultatifs pour vous aider à préparer ces projets. Nous estimons que chaque certification prendra environ 300 heures à un programmeur débutant.

Chacun de ces 30 projets du programme freeCodeCamp.org a ses propres scénarios d'utilisation agiles et ses tests automatisés. Ces derniers vous aident à construire votre projet progressivement et garantissent que vous avez validé tous les scénarios utilisateurs avant de le soumettre.

Vous pouvez extraire ces suites de tests via [le CDN de freeCodeCamp](https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js). Autrement dit, vous pouvez construire ces projets sur des sites Web tels que CodePen et Glitch - ou même sur l'environnement local de développement de votre ordinateur.

Une fois une certification obtenue, vous la gardez à vie. Vous pourrez y accéder depuis votre profil LinkedIn ou votre CV. Lorsque vos employeurs potentiels ou vos clients indépendants cliquent sur le lien, ils voient une certification vérifiée qui vous est propre.

La seule exception à cette règle serait dans le cas où que nous découvrions des violations de notre [politique d'honnêteté académique](https://www.freecodecamp.org/academic-honesty). Lorsque nous surprenons des personnes qui plagient sans ambiguïté (soumettant le code ou les projets d'autres personnes sans les citer), nous faisons ce que toutes les institutions rigoureuses d'apprentissage doivent faire, nous révoquons leurs certifications et bannissons ces personnes.

Voici nos six certifications principales :

#### 1. Certification Responsive Web Design

- [Introduction à HTML et HTML5](https://learn.freecodecamp.org/responsive-web-design/basic-html-and-html5)
- [Introduction à CSS](https://learn.freecodecamp.org/responsive-web-design/basic-css)
- [Conception visuelle appliquée](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design)
- [Accessibilité appliquée](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility)
- [Principes de conception Web réactifs](https://learn.freecodecamp.org/responsive-web-design/responsive-web-design-principles)
- [CSS Flexbox](https://learn.freecodecamp.org/responsive-web-design/css-flexbox)
- [CSS Grid](https://learn.freecodecamp.org/responsive-web-design/css-grid)
  <br />
  <br />
  **Projets**: page d'hommage, formulaire d'enquête, page de promotion, page de documentation technique, portfolio personnel.

#### 2. Certification des algorithmes JavaScript et des structures de données

- [Introduction au JavaScript](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript)
- [l'ES6](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6)
- [Les expressions régulières](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions)
- [Le débugage](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/debugging)
- [Introduction aux Structures de données](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures)
- [Introduction aux Algorithmes](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting)
- [La programmation orientée objet](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming)
- [Programmation fonctionnelle](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming)
- [Les Algorithmes - niveau intermédiaire](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting)
  <br />
  <br />
  **Projets**: vérificateur de palindrome, convertisseur de chiffres romains, chiffrement de César, validateur de numéros de téléphone, caisse enregistreuse.

#### 3. Certification des bibliothèques Front End

- [Bootstrap](https://learn.freecodecamp.org/front-end-libraries/bootstrap)
- [jQuery](https://learn.freecodecamp.org/front-end-libraries/jquery)
- [Sass](https://learn.freecodecamp.org/front-end-libraries/sass)
- [React](https://learn.freecodecamp.org/front-end-libraries/react)
- [Redux](https://learn.freecodecamp.org/front-end-libraries/redux)
- [React et Redux](https://learn.freecodecamp.org/front-end-libraries/react-and-redux)
  <br />
  <br />
  **Projets**: Générateur aléatoire de citations, Prévisualisation de documents Markdown, Boîte à rythmes, Calculatrice JavaScript, Horloge Pomodoro.

#### 4. Certification de visualisation des données

- [Visualisation des données avec D3](https://learn.freecodecamp.org/data-visualization/data-visualization-with-d3)
- [API JSON et Ajax](https://learn.freecodecamp.org/data-visualization/json-apis-and-ajax)
  <br />
  <br />
  **Projets**: Diagramme à barres, Diagramme à nuages de points, Carte de chaleur, Carte de Choroplèthes, Diagramme Treemap.

#### 5. Certification API et Microservices

- [Gestion des dépendances avec Npm](https://learn.freecodecamp.org/apis-and-microservices/managing-packages-with-npm)
- [Introduction à Node et Express](https://learn.freecodecamp.org/apis-and-microservices/basic-node-and-express)
- [MongoDB et Mongoose](https://learn.freecodecamp.org/apis-and-microservices/mongodb-and-mongoose)
  <br />
  <br />
  **Projets**: Microservice Horodateur, Analyseur d'en-tête de requête, Raccourcisseur d'URL, Suivi des exercices, Analyseur de métadonnées.

#### 6. Certification de sécurité de l'information et d'assurance qualité

- [Sécurité de l'information avec HelmetJS](https://learn.freecodecamp.org/information-security-and-quality-assurance/information-security-with-helmetjs)
- [Assurance qualité et tests avec Chai](https://learn.freecodecamp.org/information-security-and-quality-assurance/quality-assurance-and-testing-with-chai)
- [Node et Express avancés](https://learn.freecodecamp.org/information-security-and-quality-assurance/advanced-node-and-express)
  <br />
  <br />
  **Projets**: convertisseur métrique-impérial, suivi des problèmes, bibliothèque personnelle, vérificateur du prix des actions, forum de discussion anonyme.

#### Certification complète de développement.

Une fois que vous aurez obtenu ces 6 certifications, vous pourrez réclamer votre certification de développeur full stack freeCodeCamp.org. Cette distinction finale signifie que vous avez effectué environ 1 800 heures de programmation avec un large éventail d’outils de développement Web.

#### Anciennes Certifications

Nous avons également 3 anciennes certifications de notre programme de 2015, qui sont encore disponibles. Tous les projets requis pour ces anciennes certifications resteront disponibles sur freeCodeCamp.org.

- Ancienne Certification de développeur Front End
- Ancienne Certification de visualisation des données
- Ancienne Certification de développeur Back End

### La plateforme d'apprentissage

Ce code est exécuté en direct sur [freeCodeCamp.org](https://www.freecodecamp.org).

Notre communauté a aussi:

- Un [forum](https://forum.freecodecamp.org) où vous pouvez généralement avoir de l'aide en programmation ou des feedbacks sur vos projets.
- Une chaîne [YouTube](https://youtube.com/freecodecamp) avec des cours gratuits sur Python, SQL, Android et une grande variété d'autres sujets.
- Un [podcast](https://podcast.freecodecamp.org/) avec des discussions techniques autour de nouvelles technologies et des histoires inspirantes de développeurs.
- [Des groupes d'études locaux](https://study-group-directory.freecodecamp.org/), situés partout dans le monde où vous pourrez programmer ensemble et en face en face.
- Un [guide complet couvrant des milliers de sujets différents](https://guide.freecodecamp.org/)
- Un [fil d'actualités](https://www.freecodecamp.org/news), gratuit, open source et sans pub, où vous pourrez poster vos articles de blog.
- Un [groupe Facebook](https://www.facebook.com/groups/freeCodeCampEarth/permalink/428140994253892/) avec plus de 100 000 membres autour du monde.

### [Rejoignez notre communauté ici](https://www.freecodecamp.org/signin).

### Vous avez trouvé un bug ?

Si vous pensez avoir trouvé un bug, lisez d’abord l’article d’aide [Help I've Found a Bug](https://forum.freecodecamp.org/t/how-to-report-a-bug/19543) et suivez ses instructions. Si vous êtes sûr qu'il s'agit d'un nouveau bug et que vous avez vérifié que le problème est rencontré par d'autres utilisateurs, créez une nouvelle "issue" sur GitHub. Assurez-vous d'inclure autant d'informations que possible afin que nous puissions reproduire le bug.

### Vous avez trouvé un problème de sécurité?

Veuillez ne pas créer une "issue" sur Github pour des problèmes de sécurité. Au lieu de ça, envoyez un e-mail à l'adresse `security@freecodecamp.org` et nous nous pencherons dessus immédiatement.

### Contribuer

#### [Veuillez suivre ces étapes pour contribuer](CONTRIBUTING.md).

### Licence

Copyright © 2020 freeCodeCamp.org

Le contenu de ce référentiel est protégé par les licences suivantes:

- Le logiciel est sous licence [BSD-3-Clause](LICENSE.md).
- Les ressources d'apprentissage du [curriculum](/curriculum) et du [guide](/guide) ainsi que leurs sous-repertoires sont sous licence [CC-BY-SA-4.0](/curriculum/LICENSE.md).
