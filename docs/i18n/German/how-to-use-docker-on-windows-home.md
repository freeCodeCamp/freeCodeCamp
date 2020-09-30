# Wie man Docker unter Windows Home nutzt

Beim Einrichten von Docker auf Windows Home sind einige Fallstricke zu vermeiden. Zuerst müssen Sie [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) als Administrator verwenden. Leider unterstützt Windows Home Docker für Windows Desktop nicht, daher muss Toolbox stattdessen verwendet werden. Es muss als Administrator ausgeführt werden, da die Installation Symlinks verwendet, die sonst nicht erstellt werden können.

Wenn Sie die Toolbox installiert haben, führen Sie Docker Quickstart Terminal als Administrator aus. Erstellt eine `-Standard-` virtuelle Maschine, falls sie noch nicht existiert. Nachdem das geschehen ist, schließen Sie das Terminal und öffnen Sie die VirtualBox (erneut als Administrator). Sie sollten in der Lage sein, den `-Standardsystem` zu sehen. Die Seite ist ziemlich ressourcenintensiv, also stoppen Sie die virtuelle Maschine und erhöhen Sie die Einstellungen so viel wie möglich - insbesondere Speicher. Es wurde bestätigt, dass sie mit 4 GB RAM arbeiten.

Sobald du glücklich bist, dass Docker arbeitet, klone das FreeCodeCamp Repository in ein Verzeichnis in `C:\Users`. Diese Verzeichnisse werden gemeinsam genutzt, um Docker Zugriff auf die lokalen Verzeichnisse zu geben, die es während der Installation benötigt.

Wenn du Nachrichten siehst, wie

```shell
bash: change_volumes_owner.sh: Keine solche Datei oder Verzeichnis
```

wenn Sie `npm mit Docker:init` laufen, ist dies wahrscheinlich der Schuldige zu sein.
