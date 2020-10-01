# Manualul oficial al moderatorului taberei freeCodep.

Acest lucru vă va ajuta să moderați diferite locuri din comunitatea noastră, inclusiv:

- Probleme GitHub & pull requests
- Forumul, camere de discuţii, grupuri Facebook şi alte locuri de întâlniri online
- Evenimente în persoană, cum ar fi grupuri de studiu, hackatons și conferințe

**Toți moderatorii freeCodeCamp sunt moderatori la nivelul întregii comunități. Asta înseamnă că avem încredere că veți supraveghea oricare dintre aceste locuri.**

Acestea fiind spuse, poți servi ca moderator în locurile în care ești cel mai interesat de tine. Unii moderatori doar ajută pe GitHub. Alţii ajută pur şi simplu la forum. Unii moderatori sunt activi peste tot.

Concluzia este că vrem să îți place să fii moderator, și investiți timp redus în locuri care vă interesează.

> [!NOTĂ] "Cu o mare putere vine o mare responsabilitate". - Uncle Ben

Ca moderator, temperamentul este mai important decât competențele tehnice.

Ascultă. Fii ajutător. Nu abuzați de putere.

FreeCodeCamp este o comunitate inclusivă, și trebuie să o păstrăm așa.

Avem un cod de conduită unic care guvernează întreaga noastră comunitate. Cu cât regulile sunt mai puține, cu atât mai ușor să își amintească. Poți citi aceste reguli și să le dedici memoriei [aici](https://code-of-conduct.freecodecamp.org).

# Moderating GitHub

Moderatorii au capacitatea de a închide problemele și de a accepta sau închide cererile de tragere.

Moderatorii au două responsabilități principale cu privire la GitHub:

1. Întrebări și îmbinări cereri pull
2. Evaluarea problemelor și răspunsul la acestea

## Moderarea cererilor Pull

Solicitările Pull (PR) sunt modul în care contribuitorii depun modificările la depozitul freeCodeCamp. Este important să efectuăm Asigurarea Calităţii (QA) în cererile de tragere înainte de a decide fuzionarea sau închiderea lor.

### Tipuri de cereri pull

1. **Edituri de instrucțiuni provocare** Acestea sunt modificări în textul provocărilor - Descriere, instrucțiuni sau Test Text. Puteți, de asemenea, să revizuiți aceste drepturi pe GitHub și să decideți dacă să le fuzionați. Trebuie să fim puţin mai atenţi la acestea, pentru că milioane de oameni vor întâlni acest text în timp ce lucrează prin programa freeCodeCamp. Solicitarea de tragere face textul mai clar fără a-l face mult mai lung? Modificările sunt relevante și nu prea pedante? Amintiţi-vă că scopul nostru este ca provocările să fie cât mai clare şi mai scurte posibil. Nu sunt locul pentru detalii obscure. De asemenea, contribuabilii pot încerca să adauge legături cu resursele la provocări. Puteți închide aceste cereri pull și să le răspundeți astfel:

   > Vă mulțumim pentru cererea dvs. de tragere.
   > 
   > Închid această cerere de tragere. Vă rugăm să adăugați în schimb link-uri și alte detalii la articolul orientativ corespunzător al provocării.
   > 
   > Dacă credeți că greșesc în închiderea acestei probleme, vă rugăm să o redeschideți și să adăugați clarificări suplimentare. Mulțumesc și codificare fericită.

2. **Editarea codului provocării** Acestea sunt modificări ale codului într-o provocare - provocarea seed-ului provocării, soluția provocării și șirurile de teste. Aceste cereri de tragere trebuie retrase din GitHub și testate pe calculatorul local pentru a se asigura că testele de provocare pot fi transmise în continuare cu soluția curentă, iar noul cod nu introduce nicio eroare. Unii contribuabili ar putea încerca să adauge teste suplimentare pentru a acoperi cazurile pedantice. Trebuie să fim atenţi să nu complicăm prea mult această provocare. Aceste provocări şi testele lor ar trebui să fie cât mai simple şi intuitive posibil. În afară de provocările legate de algoritm și de secțiunea de predare a interviului, cursanții ar trebui să poată rezolva fiecare provocare în aproximativ 2 minute.

3. **Modificări de Codebase** Aceste modificări de cod schimbă funcționalitatea platformei freeCodeCamp în sine. Uneori contribuitorii încearcă să facă schimbări fără prea multă explicație, dar pentru modificările de cod trebuie să ne asigurăm că este nevoie cu adevărat de schimbare. Așadar, aceste solicitări de tragere ar trebui să facă referire la un subiect GitHub existent, în care să fie discutate motivele modificării. Apoi poți deschide cererea de tragere pe computer și să le testezi local. După ce aţi făcut, dacă schimbările arată bine, nu le îmbinaţi încă. Puteți comenta cererea de tragere spunând "LGTM", apoi menționați @raisedadead pentru a putea arunca o privire finală.

### Cum să fuzionezi sau să închizi cererile de tragere

În primul rând, când alegi o cerere de tragere la QA, ar trebui să o atribuiţi. Puteți face acest lucru făcând clic pe link-ul "atribuiți" de sub partea "cesionar" din coloana din dreapta a interfeței GitHub.

În funcție de tipul de cerere de tragere, urmează regulile corespunzătoare enumerate mai sus.

Înainte de a îmbina orice cerere de tragere, asigură-te că GitHub are bife verzi pentru orice. Dacă există vreo X, investigați-le mai întâi și dați-le seama cum să le transformați în bife verzi.

Uneori va exista un conflict de fuziune. Asta înseamnă că o altă cerere de tragere a făcut o modificare în exact aceeași parte a aceluiași fișier. GitHub are un instrument pentru abordarea acestor conflicte de fuziune chiar pe GitHub. Poți încerca să rezolvi aceste conflicte. Folosiți doar cea mai bună judecată. Modificările cererii de tragere vor fi în partea de sus, iar modificările ramurii principale vor fi în jos. Uneori vor exista informații redundante în această privință, care pot fi șterse. Înainte de a termina, asigură-te că ștergi `<<<<<<`, `=======`, şi `>>>>>>` pe care Git le adaugă pentru a indica zonele de conflict.

Dacă cererea pull pare pregătită pentru îmbinare (și nu necesită aprobare de la @raisedadead), puteți merge înainte și fuziona. Asigurați-vă că utilizați funcționalitatea implicită "Squash and Merge" pe GitHub. Acest lucru va strivi toate tragerile de cereri comit în jos într-un singur comitet, ceea ce va face istoria Git mult mai ușor de citit.

Ar trebui apoi să comentați cu privire la cererea de tragere, mulțumind contribuitorului în propriul dvs. mod personal.

Dacă autorul cererii de tragere este un "contribuitor pentru prima dată", ar trebui să îi felicitați și pentru prima lor cerere de îmbinare în arhivă. Vă puteţi uita la colţul din dreapta sus al corpului propunerii de regulament pentru a determina un contribuitor pentru prima dată.  Va afișa `primul contributor` după cum se arată mai jos:

![Copy_edits_for_Java_arrays_article_by_karentobo_%C2%B7_Pull_Request__20615_%C%B7_freeCodeCamp_freeCodeCamp<unk> 690x281](https://i.imgur.com/dTQMjGM.png)

Dacă cererea pull nu pare gata să se îmbine, poți răspunde politicos spunând autorului ce ar trebui să facă pentru a-l pregăti. Să sperăm că vor răspunde și vor obține cererea lor de tragere mai aproape de pregătire.

Adesea, o cerere de tragere va fi evident un efort redus. Adesea puteți spune acest lucru imediat când contribuitorul nu s-a deranjat să bifeze căsuțele din șablonul Solicitare Pull sau a folosit un titlu generic pull request cum ar fi "made changes" sau "Update index. d."

Există, de asemenea, situații în care contribuitorul încearcă să adauge un link la propriul său site, sau include o bibliotecă pe care au creat-o ei înșiși, sau are o editare neserioasă care nu ajută pe nimeni, ci pe toate.

În ambele situații, ar trebui să continuați și să închideți cererea de tragere și să răspundeți cu acest mesaj standard:

> Vă mulțumim pentru deschiderea acestei cereri de tragere.
> 
> Acesta este un mesaj standard care vă anunță că v-am revizuit cererea pull și am decis să nu îl îmbinăm. Dorim să salutăm viitoarele solicitări de tragere din partea dumneavoastră.
> 
> Vă mulţumesc şi vă mulţumesc pentru codificare.

Dacă aveți nevoie de o a doua opinie cu privire la o cerere de tragere, continuați și lăsați comentariile dvs. cu privire la cererea de tragere, apoi adăugați eticheta "discussing" la cererea de tragere.

## Moderarea problemelor GitHub

freeCodeCamp este un proiect open source activ. Avem noi probleme în fiecare zi, toate acestea trebuind să fie testate și etichetate.

### Tipuri de probleme GitHub

1. **Cereri de ajutor cod**, pentru care oamenii au creat greșit probleme GitHub. Dacă cineva cere ajutor, adaugă următorul mesaj, apoi închide problema.

   > Vă mulţumim că aţi raportat această problemă.
   > 
   > Acesta este un mesaj standard care vă anunță că această problemă pare să fie o solicitare de ajutor. În loc să cereţi ajutor aici, vă rugăm să faceţi clic pe butonul \*\*"Ajutor\*\* la provocare pe freeCodeCamp, care vă va ajuta să creaţi o întrebare în partea dreaptă a forumului. Voluntarii de pe forum răspund de obicei la întrebări în câteva ore şi pot ajuta la determinarea dacă există o problemă cu codul sau testele provocării.
   > 
   > Dacă membrii forumului determină că nu este nimic în neregulă cu codul dvs., puteți solicita redeschiderea acestei probleme. 
   > 
   > Vă mulţumesc şi vă mulţumesc pentru codificare.

2. **Probleme de eroare sau Clarificare** Încercați să reproduceți singur eroarea dacă puteți. Dacă nu, cereți-le pașii pentru a reproduce eroarea și dacă au capturi de ecran, videoclipuri sau detalii suplimentare care vă pot ajuta să reproduceți problema. Odată ce poți reproduce problema - sau cel puțin să confirmi că este o problemă cu legit-ul - eticheta `a confirmat`. Atunci:

- Dacă este o schimbare simplă la o provocare existentă, eticheta este doar `primele cronometre`, altfel eticheta ca `ajutor dorit`. Utilizaţi alte etichete după caz.
- Dacă problema este mai semnificativă, marcați ca `bug`. &nbsp; Dacă există vreo ambiguitate în ceea ce privește cursul adecvat de acțiune în legătură cu o problemă, nu ezitați să etichetați @raisedadead pe această temă, primiți opinia sa pe această temă, apoi adăugați eticheta `Discussing`.

3. **Duplicate Probleme** Dacă o problemă este identică cu o altă problemă raportată, problema raportată anterior ar trebui să aibă prioritate. Marchează ca `duplicat`, adaugă următorul mesaj înlocuind `#XXXXX` cu numărul de emisiune, apoi închide problema.

   > Vă mulţumim că aţi raportat această problemă.
   > 
   > Acesta este un mesaj standard care vă anunță că această problemă pare să fie foarte asemănătoare cu problema #XXXXX, Aşa că îl închei ca pe un duplicat.
   > 
   > Dacă credeți că greșesc în închiderea acestei probleme, vă rugăm să o redeschideți și să adăugați clarificări suplimentare. Vă mulţumesc şi vă mulţumesc pentru codificare.

4. **Reparat în organizare** Unele probleme au fost deja rezolvate în etape, dar nu au o problemă GitHub asociată cu ele. În acest caz, puteți adăuga următorul mesaj, să închideți problema și să adăugați o etichetă `stare: rezolvat/livrare`:

   > Vă mulţumim că aţi raportat această problemă.
   > 
   > Acesta este un mesaj standard care vă anunţă că problema pe care aţi menţionat-o aici este prezentă în producţie, dar acesta a fost deja fixat treptat. Aceasta înseamnă că data viitoare când ne împingem sucursala de scenă spre producţie, această problemă ar trebui rezolvată. Din această cauză, închei problema.
   > 
   > Dacă credeți că greșesc în închiderea acestei probleme, vă rugăm să o redeschideți și să adăugați clarificări suplimentare. Vă mulţumesc şi vă mulţumesc pentru codificare.

### Închide Stale, învechite, Probleme inactive și Solicitări Pull

- Problemele persistente sau PR-urile sunt cele care nu au mai observat nicio activitate din partea OP-ului timp de 21 de zile (3 săptămâni de la ultima activitate), dar numai după ce un moderator a solicitat mai multe informații/schimbări.  Acestea pot fi închise într-un script automat/bot sau de către moderatorii înșiși.

- Activitatea este definită ca: Comentarii care solicită o actualizare în PR și triage-uri ca `stare: actualizare necesară` etichetă etc.

- În cazul în care OP solicită asistență suplimentară sau chiar timp, după ce i se dă un răspuns, acesta poate fi relaxat și revizitat. În orice caz, modalitățile ar trebui să se folosească de cea mai bună apreciere pentru a soluționa situația nerezolvată a propunerii de regulament.

### Alte orientări pentru moderatori pe GitHub

Deşi aveţi acces la scriere la depozitul freeCodeCamp, **nu ar trebui să împingeţi codul direct în depozitele freeCodeCamp**. Codul ar trebui să introducă codul freeCodeCamp, sub forma unei cereri de tragere de la o furcă a depozitului.

De asemenea, nu ar trebui să acceptați niciodată propriile dvs. PR. Ele trebuie să fie făcute de un alt moderator, exact ca orice alt PR.

Dacă observați că cineva încalcă codul de conduită [](https://code-of-conduct.freecodecamp.org) pe probleme GitHub, sau deschiderea cererilor de tragere cu conținut rău intenționat sau cod, e-mail dev@freecodecamp. rg cu un link către cererea de tragere ofensivă și putem lua în considerare interzicerea completă a acesteia de la organizația GitHub a freeCodeCamp.

# Moderarea forumului

Ca moderator, te ajuți să menții comunitatea noastră un loc plăcut pentru oricine să învețe și să primească ajutor. Vei avea de-a face cu postări steaguri și spam, off-topic și alte conversații nepotrivite.

Reţineţi că odată ce sunteţi moderator pe forum, veţi începe să vedeţi sugestii de moderator albastru despre membrii forumului, ca "aceasta este prima dată când [person] a postat un post - hai să îi urăm bun venit în comunitate! sau "[person] nu a fost postat mult timp - hai să îi urăm înapoi."

![Un mesaj albastru care spune "este prima dată [person] a fost postat - hai să-i întâmpinăm în comunitate!](https://i.imgur.com/mPmVgzK.png)

Acestea sunt oportunităţi pentru ca dumneavoastră să le primiţi şi să le faceţi să se simtă mai speciale. Nu știți niciodată care persoană care este puțin implicată ar putea deveni următorul nostru super-ajutor, ajutând mulți alți oameni în călătoria lor de programare. Chiar și cea mai mică bunătate poate declanșa o cascadă de fapte bune.

### Ştergere postări pe forum

Moderatorii forumului au posibilitatea de a șterge postările utilizatorului. Ar trebui să faceți acest lucru doar pentru următoarele cazuri:

1. Cineva a postat o imagine pornografică sau violentă.
2. Cineva a postat un link sau un cod care este răuvoitor în natură și care ar putea dăuna altor camere care fac clic pe el.
3. Cineva a inundat un subiect cu multe mesaje spam.

### Tratarea spam-ului

Pentru prima postare de tip spam a unui utilizator, trimite-le un mesaj care explică problema și elimină link-ul sau postarea, după caz. Lăsați o notă pe profilul utilizatorului explicând acțiunile pe care le-ați luat. Dacă problema persistă, urmaţi procesul de mai sus. Blocați silențios utilizatorul de la postare (folosind opțiunea de tăcere din panoul de administrare al utilizatorului), apoi trimiteți un avertisment cu Codul de conduită. Bifați căsuța din mesajul privat care indică faptul că mesajul dvs. este un "avertisment oficial".

Puteți pune întrebări și raporta incidente în secțiunea [a forumului pentru personal](https://forum.freecodecamp.com/c/staff).

### Abordarea conversațiilor în afara subiectului

Postările sau subiectele care par să fie în locul greșit pot fi reclasificate sau redenumite orice ar fi potrivit.

În circumstanțe excepționale, un moderator ar putea purta o discuție în mai multe subiecte.

Din nou, dacă ai probleme sau întrebări, fă un post cu acțiunile tale în categoria Personalului, și etichetați un alt moderator dacă doriți ca acesta să revizuiască acțiunile dvs. de moderare.

### Utilizatori minori

Termenii noștri de utilizare impun ca utilizatorii de tabăra freeCodep să aibă cel puțin 13 ani. În cazul în care un utilizator dezvăluie că are mai puțin de 13 ani; trimite-le mesajul de mai jos şi şterge contul forumului (dacă ştergerea nu este disponibilă, suspendarea contului este suficientă). Apoi e-mail [Quincy](https://forum.freecodecamp.org/u/QuincyLarson) (quincy@freecodecamp.org) sau [Mrugesh](https://forum.freecodecamp.org/u/raisedadead) (mrugesh@freecodecamp.org) pentru a șterge și contul gratuit al utilizatorului.

```markdown
OBIECT: Utilizatorilor cu vârsta sub 13 ani nu li se permite să folosească forumul per Termeni ai Serviciului

A ajuns la concluzia că ai mai puțin de 13 ani. Per [termenii de utilizare freeCodeCampp](https://www.freecodecamp.org/news/terms-of-service), trebuie să ai cel puțin 13 ani pentru a folosi site-ul sau forul. Vom șterge atât contul tău freeCodep, cât și contul tău de forum. Această restricţie ne menţine în conformitate cu legislaţia Statelor Unite.

Te rugăm să te alături din nou odată ce ai împlinit cel puțin 13 ani.

Vă mulțumesc pentru înțelegere.
```

# Moderarea Facebook

Dacă vezi orice ce pare să încalce [Codul nostru de conduită](https://code-of-conduct.freecodecamp.org/), ar trebui să-l ștergi imediat.

Uneori oamenii vor posta lucruri pe care le consideră amuzante. Nu îşi dau seama că ceea ce au spus sau ceea ce împărtăşesc ar putea fi interpretat ca fiind ofensator. În aceste cazuri, postul lor ar trebui eliminat, dar persoana care l-a postat nu trebuie neapărat să fie interzisă. Prin ștergerea postării, sperăm că vor ajunge să înțeleagă că ceea ce au postat era nepotrivit.

Dar dacă este o ofensivă egoistă care nu poate fi atribuită în mod rezonabil unei diferenţe culturale sau unei neînţelegeri a limbii engleze, atunci ar trebui să iei în considerare blocarea membrului din grupul Facebook.

# Moderarea Discord

Here's how moderators deal with violations of our [Code of Conduct](https://code-of-conduct.freecodecamp.org/) on Discord:

1. **Asiguraţi-vă că a fost intenţionat să încalce Codul de conduită.** Nu toate încălcările CoC au fost intenţionate ca atare. Un cameramator nou poate posta o cantitate mare de cod pentru ajutor, nu știți că acest lucru poate fi considerat spamming. În aceste cazuri, le puteți cere să livreze codul lor cu servicii precum Codepen sau Pastebin.

2. **În cazul în care cameramanul încalcă în mod clar codul de conduită, moderatorul va proceda după cum urmează:**

- Suspendă cameraşul ofensator, dar nu îi avertizează sau îi ameninţa. În schimb, acordați-le în mod liniștit rolul suspendat pe Discord, apoi trimiteți-le următorul mesaj:

```
Acesta este un mesaj standard care te anunță că a trebuit să te suspende temporar de la a vorbi pe serverul freeCodeCamp Discord.

Sunt un moderator care acționează în numele comunității noastre cu sursă deschisă. Pot lua în considerare eliminarea suspensiei tale, dar am nevoie să faceți mai întâi următorii 3 pași:

1. Citiți Codul nostru de conduită: https://code-of-conduct.freecodecamp.org/
2. Trimite-mi un mesaj înapoi confirmând că ai terminat de citit.
3. Explică-mi de ce crezi că te-am suspendat și de ce ar trebui să vă elimin suspendarea.
```

- Raportează un scurt rezumat al evenimentului și modul în care au răspuns la acesta pe canalul #admin. Iată un exemplu despre cum ar putea arăta un astfel de rezumat:

```
Suspendat: _@nume de utilizator_
Motiv(motive): _spamming, troling_
Dovezi: _Unul sau mai multe link-uri către mesajul(ele) contraventiv(itoare)_
CoC: _Sent_
```

- Un raport pentru eliminarea unei suspensii ar trebui să arate astfel:

```
Am eliminat suspensia de la ` @username `. I-am trimis codul de conduită. Chiar azi şi-au dat seama că au fost suspendate şi şi-au cerut scuze pentru ceea ce au făcut.
```

- Pe baza răspunsului autorilor infracțiunii, moderatorul va decide dacă să elimine suspendarea din camera care a săvârșit infracțiunea. Dacă par respectuoase şi apologice, moderatorul poate elimina suspensia. Ca o chestiune de politică, moderatorii vor fi politicoși în timpul acestui proces, indiferent de cât de slab s-a comportat cameramanul care a comis infracțiunea. Dacă nu sunt respectuoase sau nu sunt dispuse să accepte CoC, suspendarea ar trebui urmărită cu o interdicție de la serverul Discord. Utilizaţi acelaşi rezumat ca mai sus, dar înlocuiţi "Suspended:" cu "Banned:".

3. **Cum să banezi şi/sau să dezbanezi**

- Pentru a bloca pe cineva, click dreapta pe numele de utilizator/profil și selectează "Ban <username>". Vi se va da opţiunea de a şterge mesajele anterioare - selectaţi "Nu şterge pe nimeni", întrucât mesajele ar trebui să rămână prezente ca o înregistrare istorică.
- Dacă decizi să interzici pe cineva, înseamnă că nu sunt dispuşi să respecte Codul nostru de conduită. Prin urmare, ar trebui să se renunţe rar la interzicerea unui Camper. Cu toate acestea, dacă este nevoie, poți face acest lucru dând click pe numele serverului, alegând "Setări server", alegând "Bans", selectând utilizatorul pe care dorești să-l debanezi, și făcând clic pe "Revoke Ban".

Banii Discord sunt globali - nu poți interzice un utilizator dintr-un anumit canal, doar de pe întregul server.

4. **Ștergerea mesajelor** Moderatorii au posibilitatea de a șterge mesajele de pe Discord. Acestea ar trebui să își exercite această capacitate numai în patru situații foarte specifice:

- Cineva a postat o imagine pornografică sau violentă.
- Cineva a postat un link sau un cod care este răuvoitor în natură și care ar putea dăuna altor camere care fac clic pe el.
- Cineva a inundat discuția cu o mulțime de mesaje spam într-o măsură atât de mare (implicând de obicei bot-uri) încât chat-ul să devină complet inutilizabil.
- Cineva a postat publicitate și/sau un mesaj de autopromovare / imagine (social media).

În toate celelalte situații - chiar și în situațiile în care codul de conduită este încălcat - moderatorii nu ar trebui să șteargă mesajul, deoarece acestea sunt o înregistrare istorică importantă. Când ștergeți un mesaj, asigurați-vă că ați făcut o captură de ecran mai întâi! Captura de ecran poate fi autentificată în canalul #mod-log, dar pentru jurnalul de #activitate-activitate este suficient să spui că dovezile au fost "eliminate din cauza conţinutului sensibil". Notă: Dacă mesajul conține materiale care ar fi ilegale pentru a face o captură de ecran, copiază în schimb link-ul mesajului - furnizează link-ul mesajului către @raisedadead pentru a redirecționa echipa de încredere și securitate Discord.

5. **Nu utilizați @everyone sau @aici** Nu utilizați @toată lumea sau @aici, în nicio circumstanță! Fiecare persoană din acea cameră de chat va primi o notificare. În unele cazuri, zeci de mii de oameni. În schimb, dacă vrei ca oamenii să vadă un anunț, îl poți fixa la canal pentru a permite tuturor să îl citească.

6. **Nu amenința să interzică sau să suspende** Dacă un cameron încalcă codul de conduită, nu ameninţă să le interzică sau să le suspende şi nu le avertizează niciodată în public. În schimb, vorbiți cu ei în mod privat sau trimiteți-le un DM și eliberați o suspendare (conform protocolului de mai sus). Nimeni altcineva din acel canal nu trebuie să ştie că ai interzis / suspendat persoana - camerele pot vizualiza rezumatul în canalul #activity-log dacă vor să ţină pasul cu aceste informaţii. Dacă o încălcare a fost în mod clar nedorită şi nu justifică o suspendare sau o conversaţie privată, sensibilizează-i camerorul cu privire la acțiunile sale fără a le face să apară ca un avertisment. De exemplu:

- Camperul postează un zid de cod pentru a solicita ajutor

  Moderator: @username Te rugăm să folosești Codepen sau Pastebin pentru a posta cantități mari de cod.

- Sau dacă chiar trebuie să explicați de ce:

  Moderator: @username Te rugăm să folosești Codepen sau Pastebin pentru a posta cantități mari de cod, pentru că perturbă discuția pentru toată lumea și ar putea fi considerată spam în conformitate cu Codul nostru de conduită.

- În cazul încălcărilor ușoare și neintenționate ale codului de conduită

  Moderator: Acesta este un memento prietenos pentru toată lumea să urmeze codul de conduită: https://code-of-conduct.freecodecamp.org/

7. **Nu ezitați să fiți moderator** Nu vă considerați deasupra comunității. Tu ești comunitatea. Și comunitatea a avut încredere în tine să ajuți să protejezi ceva rar pe care îl împărtășim cu toții - un loc _bun venit_ pentru noi dezvoltatori. Dacă te prefaci că ești moderator, oamenii se pot simți neliniștit în jurul tău, în acelaşi mod în care oamenii se pot simţi neliniştiţi în jurul unui ofiţer de poliţie, chiar dacă nu fac nimic greşit. Aceasta este doar natura umană.

8. **Nu contrazice alți moderatori** Dacă nu ești de acord cu acțiunea unui moderator, vorbește cu ei în privat sau spune-o în canalul #mod-chat. Nu suprascrie o interdicție și nu contrazice niciodată celălalt moderator (celorlalți) în mod public. În schimb, au o discuție răsunătoare în modchat și îl convinge pe moderator că ar trebui să își inverseze interdicția sau să își schimbe punctul de vedere. Ține minte: suntem cu toții în aceeași echipă. Vrem să demnizăm rolul moderatorilor și să prezentăm un front unificat.

9. **Vorbiți cu alți moderatori** Avem loc doar pentru moderatori. Folosește-o! Dacă nu vă simțiți confortabil în a face față unei anumite situații, cereți ajutorul altor moderatori. Dacă credeţi că ar trebui discutat ceva, faceţi acest lucru. Tu faci parte din echipă și apreciem intrarea fiecărui membru al echipei! Chiar dacă nu sunteţi de acord cu ceva din aceste linii directoare sau cu Codul de conduită!

10. **Temporar inactiv** Dacă nu vei fi activ ca Moderator pentru o vreme din cauza vacanței, boală sau orice alt motiv, asigurați-vă că informați ceilalți pe canalul #mod-chat. Așa că știm dacă putem conta pe tine pentru a fi activ în mod regulat pe server sau nu.

# Cum să devii un moderator

Dacă ajuți oamenii din comunitate în mod consecvent de-a lungul timpului, echipa noastră de moderatori va lua în cele din urmă observație, și unul dintre ele vă va menționa ca posibil moderator la [personalul nostru](https://forum.freecodecamp.org/g/Team). Nu există comenzi rapide pentru a deveni moderator.

Dacă sunteți aprobat, vă vom adăuga la echipele noastre de moderatori pe [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [forum](https://forum.freecodecamp.org/g/moderators), etc.

> [!NOTĂ] > **Pentru GitHub:** După ce ați fost acceptat ca moderator, veți primi o invitație pentru un depozit Github. Va trebui să te îndrepți spre [freeCodeCamp GitHub Organization Invitation](https://github.com/orgs/freeCodeCamp/invitation) pentru a putea accepta invitația. Acest lucru este necesar pentru ca noi să vă putem oferi acces la scriere în unele dintre depozitele noastre.

# Cum pensionăm moderatori inactivi

Vă rugăm să rețineți că în mod frecvent vom elimina modurile pe care le considerăm inactive. Când vom face acest lucru, vom trimite următorul mesaj:

> Acesta este un mesaj standard care vă anunță că, pentru că se pare că nu ai fost un moderator activ recent, te eliminăm din echipa noastră de moderatori. Apreciem foarte mult ajutorul dumneavoastră din trecut.

> Dacă crezi că am făcut asta din greșeală, sau odată ce ești gata să te întorci și să contribui mai mult, doar răspunde la acest mesaj spunându-mi să ştiu.

# Cum funcționează camera noastră de colaboratori

Oricine este binevenit în [sala Contributorilor pe Discord](https://discord.gg/KVUmVXA). Este sala de discuții desemnată pentru moderatori și alți camere de luat vederi care contribuie la comunitatea noastră în orice număr de moduri, inclusiv prin intermediul grupurilor de studiu.

Presupunerea noastră este că contributorii vor citi orice informații din această încăpere care le menționează direct cu un `@username`. Orice altceva este opţional. Dar nu ezitaţi să citiţi orice postează acolo cineva şi interacţionaţi.

# Confruntarea cu solicitanţii

Este posibil să fiți abordați de organizațiile care doresc să se asocieze sau să co-brandeze cu freeCodeCamp într-un fel. Odată ce îți dai seama că asta e ceea ce au urmat, te rugăm să oprești să vorbească cu ei și să le spui să trimită un e-mail la quincy@freecodecamp.org. El primeşte propuneri ca acesta tot timpul şi este în poziţia cea mai bună pentru a aprecia dacă o astfel de relaţie ar merita pentru comunitatea noastră (şi rareori).

# Tratarea anchetelor medicale (mentale)

Puteţi întâlni situaţii în care utilizatorii solicită asistenţă medicală sau se ocupă de probleme de sănătate mintală şi caută asistenţă. Ca o chestiune de politică, ar trebui să evitaţi să vorbiţi privat despre aceste chestiuni. În cazul în care situaţia de la un moment dat se reflectă în fCC, dorim ca conversaţia (conversaţiile) să fie consemnată. Spuneți clar că noi nu suntem profesioniști din domeniul medical și că încurajați utilizatorul să găsească ajutor profesional. Oricât de dificil poate fi, evită să dai alte sfaturi sau sfaturi decât să indici utilizatorul în direcţia asistenţei profesionale!

Dacă asta se întâmplă pe Discord: Suspendă utilizatorul. Nu trebuie să-i pedepsim pe ei! Suspendarea unui utilizator va crea un canal privat care este accesibil doar de către utilizator și echipă. Acest lucru va aduce beneficii atât utilizatorului, cât și fCC în mai multe moduri:

- Utilizatorului i se garantează confidențialitatea datelor
- Chat-ul public nu mai este perturbat
- Alţi membri ai echipei se pot avea, dacă nu te simţi confortabil în a te confrunta cu situaţia în sine.

> [!NOTĂ] Suspendarea automată a unui utilizator îi dă un mesaj despre citirea codului nostru de conduită. Asigură-te că îi informezi pe utilizator că ai suspendat să le acorzi o anumită intimitate și că nu sunt pedepsiți. Este foarte important! Vrem absolut să evităm să le dăm utilizatorilor ideea că sunt pedepsiți pentru că au contactat pentru a obține ajutor!

Dacă crezi că utilizatorul este capabil de a reintra în comunitate, fă click dreapta pe canalul privat și copiază ID-ul. Pune următorul mesaj in #mod-log:

> Consultanţă medicală de referinţă: <channel ID> <username>

După aceea, puteți elimina suspensia de la utilizator în mod normal.

URL-uri utile

http://www.suicide.org/international-suicide-hotlines.html

# O notă privind libertatea de exprimare

Uneori oamenii vor apăra ceva ofensiv sau incendiar pe care l-au spus ca "libertate de exprimare".

Această comică XKCD rezumă perfect gândurile celor mai multe comunități cu privire la libertatea de exprimare. Aşa că dacă cineva apără ceva ce spune ca "libera exprimare", simţiţiţi-l liber să le trimită.

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

Mulțumim pentru citirea acestui lucru și mulțumim pentru ajutorul acordat comunității dezvoltatorilor!
