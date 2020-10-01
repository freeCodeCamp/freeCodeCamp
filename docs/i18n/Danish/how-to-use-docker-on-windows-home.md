# Sådan bruger du Docker på Windows Home

Der er et par faldgruber, der skal undgås, når du opretter docker på Windows Home. Først og fremmest skal du bruge [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) som administrator. Desværre understøtter Windows Home ikke Docker til Windows Desktop, så værktøjskassen skal bruges i stedet. Det skal køres som Administrator, da installationen bruger symlinks, som ikke kan oprettes på anden måde.

Når du har installeret værktøjskassen, skal du køre Docker Quickstart terminal som administrator. Dette vil oprette en `standard` virtuel maskine, hvis den ikke allerede eksisterer. Når det er sket, lukke terminalen og åbne VirtualBox (igen som administrator). Du bør være i stand til at se `standard` maskine. Webstedet er ganske ressourceintensiv, så stop den virtuelle maskine og hæve indstillingerne så meget som du kan - hukommelse i særdeleshed. Det er blevet bekræftet at arbejde med 4 GB ram.

Når du er glad for, at Docker arbejder, klone freeCodeCamp repository til en mappe inde i `C:\Brugere`. Disse mapper deles giver Docker adgang til de lokale mapper, som den skal bruge under installationen.

Hvis du ser beskeder som

```shell
bash: change_volumes_owner.sh: Ingen sådan fil eller mappe
```

når du `npm kører docker:init` dette er sandsynligvis synderen.
