# Hur man använder Docker på Windows Home

Det finns några fallgropar som ska undvikas när du ställer in docker på Windows Home. Först av allt måste du använda [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) som administratör. Tyvärr stöder Windows Home inte Docker för Windows Desktop, så Verktygslådan måste användas istället. Det måste köras som Administratör eftersom installationen använder symlänkar, vilket inte kan skapas på annat sätt.

När du har installerat verktygslådan, kör Docker Quickstart Terminal som administratör. Detta kommer att skapa en `standard` virtuell maskin, om den inte redan finns. När det har hänt, stäng terminalen och öppna VirtualBox (igen som administratör). Du bör kunna se `standard` maskin. Webbplatsen är ganska resurs intensiv, så stoppa den virtuella maskinen och höja inställningarna så mycket du kan - minne i synnerhet. Det har bekräftats att arbeta med 4 GB bagge.

När du är glad att Docker fungerar, klona freeCodeCamp repository till en katalog inuti `C:\Users`. Dessa kataloger delas och ger Docker åtkomst till de lokala katalogerna, som de behöver under installationen.

Om du ser meddelanden som

```shell
bash: change_volumes_owner.sh: Ingen sådan fil eller katalog
```

när du `npm kör docker:init` detta är sannolikt den skyldige.
