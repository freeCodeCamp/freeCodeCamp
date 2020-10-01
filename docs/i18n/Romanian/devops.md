# Operațiuni pentru dezvoltatori la freeCodeCamp.org

Acest ghid vă va ajuta să înțelegeți stiva noastră de infrastructură și modul în care ne menținem platformele. Deși acest ghid nu are detalii exhaustive pentru toate operațiunile, ar putea fi folosit ca referință pentru înțelegerea sistemelor.

Haideți să știm, dacă aveți feedback sau întrebări și vom fi fericiți să clarificăm.

## Cum construim, testăm şi desfăşurăm codeba?

Acest depozit este construit, testat și implementat în permanență pe **seturi separate de infrastructură (servere, baze de date, CDN-uri etc.)**.

Aceasta implică trei etape care trebuie urmate succesiv:

1. Noile modificări (atât reparații, cât și caracteristici) sunt fuzionate în ramura noastră principală de dezvoltare (`master`) prin pull requests.
2. Aceste modificări sunt efectuate printr-o serie de teste automate.
3. Odată ce testele trec vom lansa modificările (sau le vom actualiza dacă este cazul) la implementări pe infrastructura noastră.

#### Construirea codebazei - cartografierea ramurilor de git la proiectare.

În mod tipic, [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master) (ramura implicită de dezvoltare) este fuzionată în ramura [`de producție-stagaging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) o dată pe zi și este eliberată într-o infrastructură izolată.

Aceasta este o versiune intermediară pentru dezvoltatorii și colaboratorii noștri. Aceasta este cunoscută și sub numele de eliberarea noastră în etape sau în faza „beta”.

Este identic cu mediul nostru de producție live la `freeCodeCamp.org`, altul decât acesta folosind un set separat de baze de date, servere, web-proxy-uri etc. Această izolare ne permite să testăm dezvoltarea continuă şi caracteristicile unui scenariu de „producţie”, fără a afecta utilizatorii obişnuiţi de platformele principale ale freeCodeCamp.org.

Odată ce echipa de dezvoltatori [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) este mulțumită de modificările de pe platforma de stagii, aceste modificări sunt mutate la fiecare câteva zile la ramura [`de producție-curent`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current).

Aceasta este versiunea finala care muta schimbari la platformele noastre de productie pe freeCodeCamp.org.

#### Testare modificări - Testare de integrare și acceptare a utilizatorului.

Folosim diferite niveluri de integrare și testare a acceptării pentru a verifica calitatea codului. Toate testele noastre sunt efectuate prin programe precum [Travis CI](https://travis-ci.org/freeCodeCamp/freeCodeCamp) și [Aur Conducte](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

Avem teste unitare pentru testarea soluțiilor provocatoare, API-uri server și interfețe de Utilizator Client. Acestea ne ajută să testăm integrarea între diferite componente.

> [!NOTĂ] Suntem, de asemenea, în proces de scriere a unor teste de sfârșit care vor ajuta la replicarea scenariilor din lumea reală, cum ar fi actualizarea unui e-mail sau efectuarea unui apel către API sau servicii terțe.

Împreună, aceste teste ajută la prevenirea repetării problemelor și se asigură că nu introducem o eroare atunci când lucrăm la o altă eroare sau la o caracteristică.

#### Schimbări Deploying - Pushing changes to servers.

Am configurat software-ul de livrare continuă pentru a împinge schimbările la serverele noastre de dezvoltare și producție.

Odată ce modificările sunt împinse la ramurile protejate de lansare, o conductă de construcții este activată automat pentru sucursală. Conductele de construcții sunt responsabile de construirea artefactelor și de păstrarea lor într-un depozit frigorific pentru o utilizare ulterioară.

Conducta de construcţii continuă să declanşeze o conductă de eliberare corespunzătoare dacă finalizează o rulare de succes. Conductele de lansare sunt responsabile pentru colectarea artefactelor de construcție, mutarea lor pe servere și începerea activității.

Starea construcțiilor și a versiunilor sunt [disponibile aici](#build-test-and-deployment-status).

## Declanşarea unei construcţii, testări şi implementări.

În prezent, numai membrii echipei de dezvoltatori pot împinge către filialele de producţie. Modificările la filialele `producția-*` pot ateriza doar prin îmbinare rapidă în [`în amonte`](https://github.com/freeCodeCamp/freeCodeCamp).

> [!NOTĂ] În zilele următoare am îmbunătăți acest flux care se face prin cereri de tragere, pentru o mai bună gestionare a accesului și transparență.

### Se trimit modificări la Staging Applications.

1. Configureaza corect telecomenzile.

   ```sh
   git remote -v
   ```

   **Rezultate:**

   ```
   origin git@github.com:raisedadead/freeCodeCamp.git (fetch)
   origin git@github.com:raisedadead/freeCodeCamp.git (push)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   în amonte git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. Asigură-te că `stăpânește` ramura ta este primită și sincronizată cu partea de sus.

   ```sh
   git checkout master
   git fetch --all --prune
   git reset --hard upstream/master
   ```

3. Verificați dacă Travis CI transmite ramura `master` pentru amonte.

   Testele [de integrare continuă](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) ar trebui să fie verzi și PASSING pentru ramura `master`.

    <details> <summary> Verificarea stării pe Travis CI (captura de ecran) </summary>
      <br>
      ![Verifică starea construirii pe Travis CI](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/devops/travis-build.png)
    </details>

   Dacă acest lucru nu reușește, trebuie să opriți și să investigați erorile.

4. Confirmă că poți construi depozitul local.

   ```
   npm curățare și dezvoltare
   ```

5. Mută modificările de la `master` la `producție-stagaging` printr-o îmbinare rapidă înainte

   ```
   git checkout production-staging
   git merge master
   git push upstream
   ```

   > [!NOTĂ] Nu veți putea să apăsați forțat și dacă ați rescris istoricul în oricum aceste comenzi vor era.
   > 
   > Dacă o fac, poate aţi făcut ceva incorect şi ar trebui doar să începeţi din nou.

Pașii de mai sus vor declanșa automat o rulare pe conducta de construcție pentru ramura `production-staging`. Odată ce construcția este completă, artefactele sunt salvate ca `.zip` fișiere într-un depozit rece pentru a fi extrase și utilizate mai târziu.

Conducta de lansare este declanșată automat atunci când un artefact nou este disponibil prin conducta de construcții conectată. Pentru platformele de aşteptare, acest proces nu implică aprobare manuală, iar artefactele sunt împinse către serverele CDN şi API.

> [!TIP<unk> label:Estimări] În mod tipic, construcția durează ~20-25 de minute pentru a fi completată, urmată de o execuție de eliberare, care durează ~15-20 de minute pentru client, ~5-10 minute pentru ca API-ul să fie disponibil în direct. De la apăsarea codului la a fi în direct pe platformele de stagii, întregul proces ia **~35-45 min** în total.

### Se impun modificări aplicațiilor de producție.

Procesul este în mare parte identic cu platformele de așteptare, existând câteva verificări suplimentare. Acest lucru este doar pentru a ne asigura că nu stricăm nimic pe freeCodeCamp.org care poate vedea sute de utilizatori folosindu-l în orice moment.

| NU executați aceste comenzi dacă nu ați verificat că totul funcționează pe platforma de așteptare. Nu trebuie să evitaţi sau să săriţi peste nici un test la punerea în scenă înainte de a continua în continuare. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                                                                                                                    |


1. Asigură-te că ramura ta `production-staging` este curată și sincronizată cu partea de sus.

   ```sh
   git checkout production-staging
   git fetch --all --prune
   git reset --hard upstream/production-staging
   ```

2. Mută modificările de la `production-staging` la `production-current` printr-o fuziune rapidă

   ```
   git checkout production-current
   git fuzionare production-staging
   git push upstream
   ```

   > [!NOTĂ] Nu veți putea să apăsați forțat și dacă ați rescris istoricul în oricum aceste comenzi vor era.
   > 
   > Dacă o fac, poate aţi făcut ceva incorect şi ar trebui doar să începeţi din nou.

Etapele de mai sus vor declanșa automat o rulare pe conducta de construcție pentru ramura `production-current`. Odată ce un artefact de construcție este gata, va declanșa o rulare pe conducta de eliberare.

> [!TIP<unk> label:Estimări] În mod tipic, rularea construcției necesită ~20-25 minute până la finalizare.

**Pași suplimentari pentru acțiunea personalului**

Se declanșează o lansare, membrii echipei de dezvoltatori vor primi un e-mail de intervenție manual automat. Ei pot _aproba_ sau _respinge_ rularea versiunii.

Dacă modificările funcţionează bine şi au fost testate pe platforma de aşteptare, atunci acestea pot fi aprobate. Aprobarea trebuie acordată în termen de 4 ore de la declanşarea versiunii înainte de a fi respinsă automat. Un membru al personalului poate declanșa din nou eliberarea rulată manual pentru curse respinse, sau poate aștepta următorul ciclu de eliberare.

Pentru uzul personalului:

| Verifică-ți e-mailul pentru un link direct sau [mergi la tabloul de bord al lansării](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) după ce construcția este completă. |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                        |


Odată ce unul dintre membrii personalului aprobă o versiune, conducta va împinge schimbările live pe serverele de producție CDN și API ale freeCodeCamp.org. De obicei iau ~15-20 minute pentru client, și ~5 minute pentru ca serverele API să fie disponibile în direct.

> [!TIP<unk> label:Estimări] Versiunea rulează de obicei durează ~15-20 minute pentru fiecare exemplu de client și ~5-10 minute pentru fiecare instanță API pentru a fi disponibil în direct. De la împingerea codului la live pe platformele de producție, întregul proces ia **~90-120 min** în total (fără a număra timpul de așteptare pentru aprobarea personalului).

## Stadiul de construcție, încercare și desfășurare

Iată testul curent, stadiul de construire și implementare a codebasului.

| Tip                   | Sucursala                                                                                      | Status                                                                                                                                                                                                                                                 | Panou                                                                                         |
|:--------------------- |:---------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:--------------------------------------------------------------------------------------------- |
| Teste CI              | [`Maestru`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master)                          | ![Stare Build CI Travis](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=master)                                                                                                                                                            | [Mergeți la tabloul de bord](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Teste CI              | [`stagnarea producției`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | ![Stare Build CI Travis](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-staging)                                                                                                                                                | [Mergeți la tabloul de bord](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Conducta de compilare | [`stagnarea producției`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | [![Stare compilare](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-dev-ci?branchName=production-staging)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=15&branchName=production-staging) | [Mergeți la tabloul de bord](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Conducta de lansare   | [`stagnarea producției`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) |                                                                                                                                                                                                                                                        | [Mergeți la tabloul de bord](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |
| Teste CI              | [`producție-curent`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current)     | ![Stare Build CI Travis](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-current)                                                                                                                                                | [Mergeți la tabloul de bord](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Conducta de compilare | [`producție-curent`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)     | [![Stare compilare](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-org-ci?branchName=production-current)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=17&branchName=production-current) | [Mergeți la tabloul de bord](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Conducta de lansare   | [`producție-curent`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)     |                                                                                                                                                                                                                                                        | [Mergeți la tabloul de bord](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |

## Acces precoce şi testare beta

Vă urăm bun venit pentru a testa aceste versiuni într-un mod **"testare beta publică"** şi obţineţi acces timpuriu la caracteristicile viitoare ale platformelor. Uneori aceste caracteristici/modificări sunt menționate ca **în continuare, beta, staging,** etc. interschimbabil.

Contribuțiile dvs. prin feedback și rapoarte de probleme ne vor ajuta în crearea platformelor de producție pe `freeCodeCamp. rg` mai multe **rezilient**, **consistent** și **stabil** pentru toată lumea.

Vă mulţumim pentru raportarea erorilor cu care vă confruntaţi şi pentru ajutorul în îmbunătăţirea freeCodeCamp.org. Tu stânci!

### Identificarea versiunii viitoare a platformelor

În prezent, o versiune publică de testare beta este disponibilă la adresa:

<h1 align="center"><a href='https://www.freecodecamp.dev' _target='blank'>freecodecamp.dev</a></h1>

> [!NOTĂ] Domeniul este diferit de **`freeCodeCamp.org`**. Acest lucru este intenționat pentru a preveni indexarea motorului de căutare și pentru a evita confuzia în rândul utilizatorilor obișnuiți ai platformei.

### Identificarea versiunii actuale a platformelor

**Versiunea curentă a platformei este întotdeauna disponibilă la [`freeCodeCamp.org`](https://www.freecodecamp.org).**

Echipa dev-team îmbină schimbări din filiala `production-staging` în `production-current` atunci când eliberează modificări. Cel mai important angajament ar trebui să fie ceea ce vezi în direct pe site.

Puteți identifica versiunea exactă implementată vizitând jurnalele de construcție și implementare disponibile în secțiunea de stare. Alternativ, ne poți da și în [camera de chat](https://gitter.im/FreeCodeCamp/Contributors) a contributorilor pentru confirmare.

### Limitări cunoscute

Există unele limitări și compromisuri cunoscute când se utilizează versiunea beta a platformei.

- #### Toate datele / progresul personal pe aceste platforme beta `NU vor fi salvate sau reportate` la producție.

  **Utilizatorii din versiunea beta vor avea un cont separat de producție.** Versiunea beta folosește o bază de date separată fizic de producție. Acest lucru ne permite să prevenim orice pierdere accidentală de date sau modificări. Echipa de dezvoltatori poate şterge baza de date pe această versiune beta în funcţie de necesităţi.

- #### Nu există garanții pentru uptime și fiabilitate a platformelor beta.

  Este de aşteptat ca instalarea să fie frecventă şi, în iteraţii rapide, uneori de mai multe ori pe zi. Drept urmare, va exista o întrerupere neașteptată la anumite momente sau o funcționalitate întreruptă a versiunii beta.

- #### Nu trimite utilizatori obișnuiți pe acest site ca măsură de confirmare a unei reparații

  Situl beta este şi a fost întotdeauna acela de a spori dezvoltarea locală şi testarea, nimic altceva. Nu este o promisiune a ceea ce vine, ci o privire asupra a ceea ce se lucrează.

- #### Pagina de semnare poate arăta diferit de producție

   Folosim un chiriaş de test pentru freecodecamp.dev pe Auth0, şi de aceea nu avem abilitatea de a seta un domeniu personalizat. Acest lucru face ca toate callback-urile de redirecționare și pagina de autentificare să apară într-un domeniu implicit, cum ar fi: `https://freecodecamp-dev.auth0.com/`. Acest lucru nu afectează funcționalitatea este atât de aproape de producție pe cât putem obține.

## Raportarea problemelor și oferirea de feedback

Vă rugăm să deschideți noi probleme pentru discuții și raportare bug-uri. Poți să le etichetezi ca versiune **[`: următorul/beta`](https://github.com/freeCodeCamp/freeCodeCamp/labels/release%3A%20next%2Fbeta)** pentru triaj.

Puteţi trimite un e-mail la `dev[at]freecodecamp.org` dacă aveţi întrebări. Ca întotdeauna, toate vulnerabilităţile de securitate ar trebui raportate `securităţii[at]freecodecamp.org` în loc de public tracker şi forum.
