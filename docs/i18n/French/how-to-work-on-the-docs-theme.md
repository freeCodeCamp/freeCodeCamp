# Comment travailler sur le thème de la documentation

> [!NOTE] Un rappel rapide que vous n'avez pas besoin de configurer quoi que ce soit pour travailler sur le contenu du site de documentation.
> 
> Pour travailler sur les directives de contribution, vous pouvez modifier ou ajouter des fichiers dans le répertoire `docs` [disponible ici](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/docs). Lorsque vos modifications seront fusionnées, elles seront mises à disposition automatiquement sur le site de documentation.

## Structure du site web de la documentation

Le site est généré en utilisant [`docsify`](https://docsify.js.org), et servi en utilisant des pages GitHub.

Généralement, vous n'aurez pas besoin de modifier une configuration ou de construire le site localement. Au cas où vous seriez intéressé, voici comment ça marche :

- La source de la page d'accueil pour ce site est disponible dans [`docs/index.html`](index.html).
- Nous servons ce fichier comme SPA en utilisant `docsify` et GitHub Pages.
- Le script `docsify` génère le contenu des fichiers `markdown` dans le répertoire `docs` à la demande.
- La page d'accueil est générée à partir de la [`_coverpage.md`](_coverpage.md).
- la navigation dans la barre latérale est générée depuis [`_sidebar.md`](_sidebar.md).

## Servir le site de documentation localement

Cloner le camp de code libre:

```sh
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify serve docs
```

Installer `docsify`:

```sh
npm install -g docsify
```

et servir le répertoire `/docs`

```sh
docsify serve docs
```

Alternativement, si vous avez installé freeCodeCamp localement (voir le guide de configuration locale), nous regroupons le CLI avec les outils de développement pour que vous puissiez exécuter `docs:serve` depuis la racine du dépôt.
