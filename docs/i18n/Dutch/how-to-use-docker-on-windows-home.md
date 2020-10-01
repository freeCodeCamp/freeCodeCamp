# Hoe gebruik je Docker op Windows Home

Er zijn een paar valkuilen te voorkomen bij het instellen van een docker op Windows Home. Eerst moet je [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) gebruiken als beheerder. Helaas ondersteunt Windows Home geen Docker voor Windows Desktop, dus Toolbox moet in plaats daarvan worden gebruikt. Het moet als beheerder worden uitgevoerd omdat de installatie symlinks gebruikt, die anders niet kunnen worden gecreëerd.

Zodra je de werkset hebt geïnstalleerd, voer Docker Quickstart Terminal uit als Administrator. Dit zal een `standaard` virtuele machine maken, als deze nog niet bestaat. Zodra dat is gebeurd, sluit je de terminal en open VirtualBox (opnieuw als beheerder). Je zou de `standaard` machine moeten kunnen zien. De site is zeer intensief, dus stop de virtuele machine en verhoog de instellingen zoveel mogelijk - met name geheugen. Het is bevestigd dat het werkt met 4GB ram.

Zodra u blij bent dat Docker werkt, kloon de freeCodeCamp repository naar een map binnen `C:\Users`. Deze mappen worden gedeeld en geven Docker toegang tot de lokale mappen, die het nodig heeft tijdens de installatie.

Als je berichten zoals

```shell
bash: change_volumes_owner.sh: Geen dergelijk bestand of map
```

wanneer je `npm run docker:init` dit is waarschijnlijk de boot.
