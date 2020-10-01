# Comment utiliser Docker sur Windows Home

Il y a quelques pièges à éviter lors de l'installation de docker sur Windows Home. Tout d'abord, vous devez utiliser [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) en tant qu'administrateur. Malheureusement, Windows Home ne prend pas en charge Docker pour Windows Desktop, donc Toolbox doit être utilisé à la place. Il doit être exécuté en tant qu'administrateur car l'installation utilise des liens symboliques, qui ne peuvent pas être créés autrement.

Une fois la boîte à outils installée, exécutez Docker Quickstart Terminal en tant qu'administrateur. Cela créera une machine virtuelle `par défaut` si elle n'existe pas déjà. Une fois que cela s'est produit, fermez le terminal et ouvrez VirtualBox (encore en tant qu'administrateur). Vous devriez pouvoir voir la machine `par défaut`. Le site est assez intensif de ressources, donc arrêtez la machine virtuelle et augmentez les paramètres autant que vous pouvez - la mémoire en particulier. Il a été confirmé de fonctionner avec 4Go de bélier.

Une fois que vous êtes heureux que Docker fonctionne, clonez le dépôt freeCodeCamp dans un répertoire dans `C:\Users`. Ces répertoires sont partagés en donnant à Docker l'accès aux répertoires locaux, dont il a besoin pendant l'installation.

Si vous voyez des messages comme

```shell
bash : change_volumes_owner.sh: Aucun fichier ou répertoire de ce type
```

lorsque vous `npm exécutez docker:init` c'est probablement le coupable.
