# Hvordan du bruker Docker på Windows Home

Det er noen fallgruver å unngå når du setter opp docker på Windows Home. Først av alt må du bruke [Docker Verktøykasse](https://docs.docker.com/toolbox/toolbox_install_windows/) som administrator. Dessverre støtter Windows Home ikke Docker for Windows Desktop, så verktøykassen må brukes i stedet. Den må kjøres som administrator da installasjonen bruker symkoblinger, som ikke kan opprettes annet.

Når du har installert verktøykassen, kjør Docker Quickstart Terminal som Administrator. Dette vil opprette en `standard` virtuell maskin, hvis den ikke allerede eksisterer. Når det har skjedd, lukk terminalen og åpne VirtualBox (igjen som Administrator). Du bør kunne se `standard` maskinen. Nettstedet er ganske ressurskrevende, så stopper den virtuelle maskinen og hever innstillingene så mye som du kan – spesielt minne. Det er bekreftet å arbeide med 4GB ram.

Når du er fornøyd med at Docker virker, klone the freeCodeCamp repository to a directory in `C:\Users`. Disse mappene deles som gir legen tilgang til lokale kataloger, som den trenger under installasjon.

Hvis du ser meldinger som

```shell
bash: change_volumes_owner.sh: Ingen slik fil eller mappe
```

når du `npm kjører docker:init` dette er sannsynlig hvilken kulprit.
