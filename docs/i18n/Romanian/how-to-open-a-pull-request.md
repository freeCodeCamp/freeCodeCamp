# Cum să deschizi o cerere de tragere (PR)

O cerere de tragere vă permite să trimiteți modificări de pe furculița dvs. pe GitHub în depozitul principal freeCodeCamp.org. Odată ce ați terminat, efectuați modificări ale codului, sau provocări de codificare ar trebui să urmați aceste recomandări pentru a trimite un PR.

## Pregătiţi un titlu PR bun

Recomandăm utilizarea [titlului și mesajelor convenționale](https://www.conventionalcommits.org/) pentru comitete și tragere de cereri. Convenţia are următorul format:

> `<type>([Domeniu opțional(e)]): <description>`
> 
> De exemplu:
> 
> `fix(învăță): teste pentru do...în timp ce provocarea buclei`

La deschiderea unei Cereri Pull (PR), puteți utiliza mai jos pentru a determina tipul, domeniul de aplicare (opțional) și descrierea.

**Tip:**

| Tip       | Când se selectează                                                                        |
|:--------- |:----------------------------------------------------------------------------------------- |
| repară    | Modificat sau actualizat/îmbunătățit funcționalitate, teste, verbiage a unei lecții, etc. |
| fetiță    | Numai dacă adaugi funcţionalităţi noi, teste, etc.                                        |
| nucleu    | Modificări care nu sunt legate de cod, teste sau verbale ale unei lecții.                 |
| documente | Modificări la directorul `/docs` sau la ghidurile de contribuție, etc.                    |

**Domeniu de aplicare:**

Puteți selecta un domeniu din [această listă de etichete](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Descriere:**

Păstraţi-l scurt (mai puţin de 30 de caractere) şi simplu, puteţi adăuga mai multe informaţii în caseta de descriere PR şi comentarii.

Câteva exemple de titluri de bune PR-uri ar fi:

- `fix(a11y): contrast îmbunătățit al barei de căutare`
- `vezi: adaugă mai multe teste la provocările cu html și css`
- `fix(api,client): prevenirea erorilor CORS la trimiterea formularului`
- `docs(i18n): Traducerea în limba chineză a configurației locale`

## Se propune o cerere pull

1. Odată ce editările au fost dedicate, vi se va solicita să creați o cerere de tragere pe pagina GitHub a furculii dvs.

   ![Imagine - Compară solicitarea pull request pe GitHub](./images/github/compare-pull-request-prompt.png)

2. În mod implicit, toate cererile pull ar trebui să fie împotriva repozitorului principal freeCodep, `master` ramură.

   Asigură-te că Fork-ul tău de bază este setat pe freeCodeCamp/freeCodeCamp atunci când dai o Cerere Pull

   ![Imagine - Compararea furculițelor când se face o cerere de tragere](./images/github/comparing-forks-for-pull-request.png)

3. Trimite cererea pull din sucursala ta către sucursala `principală` a freeCodeCamp.

4. În corpul PR, veţi include un rezumat mai detaliat al modificărilor pe care le-aţi făcut şi de ce.

   - Vi se va prezenta un șablon de cerere pull Aceasta este o listă de verificare pe care ar trebui să o urmăriți înainte de a deschide cererea de tragere.

   - Completează detaliile după cum consideri potrivit. Aceste informații vor fi revizuite și revizorii vor decide dacă solicitarea dvs. de tragere este sau nu acceptată.

   - Dacă PR este menit să abordeze o problemă GitHub existentă, atunci, la sfârșitul lui corpul de descriere al PR, utilizaţi cuvântul cheie _Închide_ cu numărul de emitere pentru a [închide automat acea problemă dacă PR este acceptat şi fuzionat](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Exemplu: `Închizările #123` vor închide problema 123

5. Indicați dacă ați testat pe o copie locală a site-ului sau nu.

   Acest lucru este foarte important atunci când se fac modificări care nu sunt doar editate la conținut text ca documentație sau o descriere a provocării. Exemple de modificări care necesită testare locală includ JavaScript, CSS, sau HTML care ar putea schimba funcționalitatea sau aspectul unei pagini.

## Feedback la cererile pull

> Felicitări! :tada: pentru a face un PR și mulțumesc mult pentru că ai nevoie de timp pentru a contribui,

Moderatorii noștri vor arunca o privire și îți vor lăsa un feedback. Vă rugăm să aveţi răbdare cu colegii moderatori şi să respectaţi timpul. Toate cererile de tragere sunt revizuite în timp util.

Dacă ai nevoie de asistență, te rugăm să discuți în [camera de chat a contributorilor](https://gitter.im/FreeCodeCamp/Contributors), suntem mai mult decât bucuroși să te ajutăm.

> [!TIP] Dacă doriți să contribuiți cu mai multe solicitări, îți recomandăm să citești [făcând modificări și sincronizând](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally?id=making-changes-locally) ghidurile pentru a evita ștergerea furculii tale.

## Conflicte la o cerere de tragere

Pot apărea conflicte pentru că mulți contribuitori lucrează în depozit, iar modificările vă pot întrerupe PR care este în așteptarea unei evaluări și a unei fuziuni.

De cele mai multe ori, este posibil să nu aveți nevoie de o rebază, pentru că zdrobim toate comitetele, Cu toate acestea, dacă este solicitată o rebază aici, este ceea ce ar trebui să faceți.

### Pentru remedieri și caracteristici obișnuite ale erorilor

Când lucrezi la bug-uri și funcții obișnuite pe ramura noastră de dezvoltare `master`, poți să faci o simplă rebază:

1. Rebasează-ți copia locală:

   ```console
   git checkout <pr-branch>
   git pull --rebase upstream master
   ```

2. Rezolvați orice conflicte și adăugați/editați comitete

   ```console
   # Fie
   git adaugă .
   git commit -m "chore: resolve conflicts"

   # or
   git add .
   git commit --amende--no-edit
   ```

3. Împingeţi înapoi modificările la PR

   ```console
   git push --force origin <pr-branch>
   ```

### Pentru curriculum și caracteristici viitoare

Când lucrezi la caracteristici pentru viitoarele noastre curriculum `următoare-*` ramuri, ai un cherry pick:

1. Asigură-te că amfiti sincronizați cu localul tău:

   ```console
   git checkout master
   git fetch --all --prune
   git checkout next-python-projects
   git reset --hard upstream/next-python-projects
   ```

2. Faceți o copie de rezervă

   a. Fie ştergeţi ramura locală după ce aţi făcut o copie de rezervă (dacă încă o aveţi local):

      ```console
      git checkout <pr-branch-name>

      # example:
      # git checkout feat/add-numpy-video-question

      git checkout -b <backup-branch-name>

      # example:
      # git checkout -b backup-feature-feature/add-numpy-video-question

      git branch -D <pr-branch-name>
      ```

   b Sau doar o copie de rezervă a ramurii dvs. pr (dacă nu o aveți la nivel local):

      ```console
      git checkout -b <backup-branch-name> origin/<pr-branch-name>

      # exemplu:
      # git checkout -b backup-feature-add-numpy-video-question origin/feat/add-numpy-video-question
      ```

4. Începeți cu o listă curată:

   ```console
   git checkout -b <pr-branch-name> next-python-projects
   git cherry-pick <commit-hash>
   ```

5. Rezolvă orice conflicte și curățare, instalați teste

   ```console
   npm run clean

   npm ci
   npm run test:curriculum --superblock =<superblock-name>

   # exemplu:

   # npm run test:curriculum --superblock=python-for-toți

   ```

6. Dacă totul arată bine, împinge înapoi la PR

   ```console
   git push --force origin <pr-branch-name>
   ```
