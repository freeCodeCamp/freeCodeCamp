# So funktioniert der Benutzer-Token-Workflow

Benutzer-Tokens werden verwendet, um die Benutzer/innen gegenüber Dritten zu identifizieren, damit Aufgaben, die bei diesen Diensten erledigt werden, im Konto der Benutzer/innen gespeichert werden können.

## So werden sie erstellt

Im Moment werden die Token nur für die Einreichung der Aufgaben für relationale Datenbanken verwendet. Ein Token wird erstellt, wenn ein angemeldeter Benutzer auf die Schaltflächen "Hier klicken, um den Kurs zu starten" oder "Hier klicken, um das Projekt zu starten" klickt, um einen der Kurse oder Projekte zu relationalen Datenbanken zu starten.

## Wann sie gelöscht werden

Ein Benutzer-Token wird gelöscht, wenn sich ein Benutzer aus dem freeCodeCamp abmeldet, seinen Fortschritt zurücksetzt, sein Konto löscht oder den Token manuell über das Widget auf der Einstellungsseite löscht.

## Wie sie funktionieren

Token werden in einer `UserToken`-Sammlung in der Datenbank gespeichert. Jeder Datensatz hat eine eindeutige `_id`, die der Token ist, und eine `user_id`, die auf das Konto des Benutzers aus der `user`-Sammlung verweist. Das Token wird mit JWT kodiert und an den Client gesendet, wenn es erstellt wird. Dieser verschlüsselte Token wird dann an Drittanbieterdienste weitergegeben, die ihn benötigen, und von diesen an unsere API gesendet, wenn eine Aufgabe abgeschlossen ist. Wenn unsere API sie erhält, wird sie dekodiert, damit wir den Benutzer, der eine Aufgabe einreicht, identifizieren und die abgeschlossene Aufgabe in seinem `completedChallenges` speichern können.
