# Jak korzystać z Dockera na Windows Home

Istnieje kilka pułapek do unikania podczas ustawiania docker na Windows Home. Najpierw musisz użyć [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) jako Administrator. Niestety Windows Home nie obsługuje Dockera dla pulpitu Windows, więc narzędzie musi być użyte. Musi być uruchomiony jako Administrator, ponieważ instalacja wykorzystuje dowiązania symboliczne, których nie można utworzyć w innym przypadku.

Po zainstalowaniu przybornika uruchom Docker Terminal Quickstart jako Administrator. Spowoduje to utworzenie `domyślnej` maszyny wirtualnej, jeśli jeszcze nie istnieje. Kiedy to się wydarzyło, zamknij terminal i otwórz VirtualBox (ponownie jako Administrator). Powinieneś być w stanie zobaczyć `domyślną` maszynę. Witryna jest dość zasobochłonna, więc zatrzymaj maszynę wirtualną i podnieś ustawienia tak daleko, jak tylko potrafisz - w szczególności pamięć. Potwierdzono, że praca z 4GB trybu.

Gdy jesteś zadowolony, że Docker działa, sklonuj repozytorium freeCodeCamp do katalogu wewnątrz `C:\Users`. Te katalogi są udostępniane, dając Dockerowi dostęp do lokalnych katalogów, których potrzebuje podczas instalacji.

Jeśli widzisz wiadomości jak

```shell
bash: change_volumes_owner.sh: Brak takiego pliku lub katalogu
```

kiedy `npm uruchom docker:init` to prawdopodobnie jest winowajca.
