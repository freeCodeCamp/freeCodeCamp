# So verwendest du Docker unter Windows Home

Bei der Einrichtung von Docker unter Windows Home gibt es einige Fallstricke, die du vermeiden solltest. Als erstes musst du die [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) als Administrator verwenden. Leider unterstützt Windows Home kein Docker für Windows Desktop, sodass stattdessen Toolbox verwendet werden muss. Es muss als Administrator ausgeführt werden, da die Installation Symlinks verwendet, die sonst nicht erstellt werden können.

Sobald du die Toolbox installiert hast, führe das Docker Quickstart Terminal als Administrator aus. Damit wird eine `default` virtuelle Maschine erstellt, wenn sie noch nicht existiert. Wenn das geschehen ist, schließe das Terminal und öffne VirtualBox (wieder als Administrator). Du solltest die `default` Maschine sehen können. Die Website ist ziemlich ressourcenintensiv, also halte die virtuelle Maschine an und erhöhe die Einstellungen so weit wie möglich - vor allem den Arbeitsspeicher. Es wurde bestätigt, dass sie mit 4 GB Arbeitsspeicher funktioniert.

Wenn du sicher bist, dass Docker funktioniert, klone das freeCodeCamp Repository in ein Verzeichnis innerhalb von `C:\Users`. Diese Verzeichnisse werden gemeinsam genutzt, so dass Docker Zugriff auf die lokalen Verzeichnisse hat, die es während der Installation benötigt.

Wenn du Meldungen siehst wie

```shell
bash: change_volumes_owner.sh: No such file or directory
```

when you `pnpm run docker:init` this is likely the culprit.
