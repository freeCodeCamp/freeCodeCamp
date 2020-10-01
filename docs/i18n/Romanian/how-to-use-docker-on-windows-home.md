# Cum să utilizaţi Docker pe Windows Home

Există câteva capcane care trebuie evitate când se configurează docker-ul pe Windows Home. În primul rând trebuie să folosești [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) ca Administrator. Din păcate Windows Home nu acceptă Docker pentru Windows Desktop, astfel încât Toolbox trebuie folosit în schimb. Trebuie să fie rulat ca Administrator deoarece instalarea folosește link-uri simbolice, care nu pot fi create altfel.

Odată ce ai instalat toolbox-ul, rulează Docker Quickstart Terminal ca Administrator. Acest lucru va crea o `mașinărie implicită` virtuală, dacă nu există deja. Odată ce aceasta s-a întâmplat, închideţi terminalul şi deschideţi VirtualBox (din nou ca administrator). Ar trebui să poți vedea `mașinăria implicită`. Site-ul consumă destul de multe resurse, astfel încât opriți mașina virtuală și ridicați setările cât de mult puteți - memoria în special. S-a confirmat că funcţionează cu 4GB de ram.

Odată ce ești fericit că Docker funcționează, clonează depozitul freeCodeCamp într-un director din interiorul `C:\Users`. Aceste directoare sunt partajate oferind Docker acces la directoarele locale, de care are nevoie în timpul instalării.

Dacă vezi mesaje ca

```shell
bash: change_volumes_owner.sh: Niciun astfel de fișier sau director
```

când `npm run docker:init` este probabil vinovat.
