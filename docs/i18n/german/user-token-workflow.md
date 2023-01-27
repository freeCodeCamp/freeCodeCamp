# So funktioniert der Benutzer-Token-Workflow

Benutzer-Tokens werden verwendet, um die Benutzer/innen gegenüber Dritten zu identifizieren, damit Aufgaben, die bei diesen Diensten erledigt werden, im Konto der Benutzer/innen gespeichert werden können.

## So werden sie erstellt

Im Moment werden die Token nur für die Einreichung der Aufgaben für relationale Datenbanken verwendet. A token gets created when a signed-in user clicks the "Click here to start the course" or "Click here to start the project" buttons to start one of the Relational Database courses or projects.

## Wann sie gelöscht werden

Ein Benutzer-Token wird gelöscht, wenn sich ein Benutzer aus dem freeCodeCamp abmeldet, seinen Fortschritt zurücksetzt, sein Konto löscht oder den Token manuell über das Widget auf der Einstellungsseite löscht.

## Wie sie funktionieren

Token werden in einer `UserToken`-Sammlung in der Datenbank gespeichert. Jeder Datensatz hat eine eindeutige `_id`, die der Token ist, und eine `user_id`, die auf das Konto des Benutzers aus der `user`-Sammlung verweist. Das Token wird mit JWT kodiert und an den Client gesendet, wenn es erstellt wird. That encoded token is then given to third-party services that need it and sent to our API by them when a challenge is completed. Wenn unsere API sie erhält, wird sie dekodiert, damit wir den Benutzer, der eine Aufgabe einreicht, identifizieren und die abgeschlossene Aufgabe in seinem `completedChallenges` speichern können.
