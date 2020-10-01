# Jak používat Docker na Windows Home

Při nastavení doku na Windows Home je třeba se vyhnout několika nástrahám. Nejprve musíte použít [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) jako správce. Windows Home bohužel nepodporuje Docker pro Windows Desktop, proto musí být místo toho použit panel nástrojů. Musí být spuštěn jako administrátor, protože instalace používá symlinky, které nelze vytvořit jinak.

Po instalaci panelu nástrojů spusťte Docker Quickstart Terminal jako správce. Tímto vytvoříte `výchozí` virtuální stroj, pokud již neexistuje. Jakmile k tomu došlo, zavřete terminál a otevřete VirtualBox (opět jako Administrator). Měli byste mít možnost vidět `výchozí` počítač. Stránka je poměrně náročná na zdroje, takže zastavit virtuální stroj a zvýšit nastavení co nejvíce můžete - zejména paměť. Bylo potvrzeno, že pracuje se 4GB rázu.

Jakmile jste spokojeni, že Docker funguje, naklonujte freeCodeCamp repositář do adresáře uvnitř `C:\Users`. Tyto adresáře jsou sdíleny tak, aby dokovací adresáře měly přístup k místním adresářům, které potřebuje během instalace.

Pokud vidíte zprávy jako

```shell
bash: change_volumes_owner.sh: žádný takový soubor nebo adresář
```

když `npm spustíte docker:init` je to pravděpodobně viník.
