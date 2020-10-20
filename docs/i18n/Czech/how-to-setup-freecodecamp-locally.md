Postupujte podle těchto pravidel pro lokální nastavení freeCodeCamp ve vašem systému. To je velmi doporučeno, pokud chcete přispívat pravidelně.

Pro některé příspěvkové workflow, musíte mít freeCodeCamp běžet lokálně. Například, prohlížení výzev kódování nebo ladění a opravování chyb v kódu.

> [!TIP] Pokud nemáte zájem o nastavení bezplatného CodeCamp lokálně zvážit použití Gitpod, bezplatné online prostředí pro vývojáře.
> 
> [![Otevřít v Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
> 
> (Spustí prostředí vývojáře připraveného ke kódu pro freeCodeCamp ve vašem prohlížeči.)

## Připravte svůj místní stroj

Začněte instalací nezbytného softwaru pro váš operační systém.

Podporujeme především vývoj na **\*nix** systémech. Naši zaměstnanci a přispěvatelé komunity pravidelně pracují s kódovou databází pomocí nástrojů nainstalovaných na Ubuntu a macOS.

Podporujeme také Windows 10 prostřednictvím WSL2, který můžete připravit na [čtení tohoto průvodce](/how-to-setup-wsl).

Někteří členové komunity se také vyvíjejí na Windows 10 nativně s Git pro Windows (Git Bash) a dalšími nástroji nainstalovanými v Windows. V tuto chvíli nemáme oficiální podporu pro takové nastavení, doporučujeme místo toho použít WSL2.

**Předpoklady:**

| Předpokladem                                                                                  | Verze | Poznámky                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                  | `12x` | [LTS rozvrh](https://github.com/nodejs/Release#release-schedule)                                                                                                                                |
| npm (přichází s Nodem)                                                                        | `6.x` | Nemá žádné verze LTS, používáme verzi propojenou s Node LTS                                                                                                                                     |
| [MongoDB komunitní server](https://docs.mongodb.com/manual/administration/install-community/) | `3.6` | [Poznámky k vydání](https://docs.mongodb.com/manual/release-notes/), Poznámka: Aktuálně jsme na `3.6`, [aktualizace je naplánována](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275). |

> [!DANGER] Pokud máte jinou verzi, nainstalujte prosím doporučenou verzi. Podporujeme pouze problémy s instalací doporučených verzí. Detaily viz [řešení problémů](#troubleshooting).

Pokud je Node.js již nainstalován na vašem počítači, spusťte následující příkazy pro ověření verzí:

```console
uzel -v
npm -v
```

> [!TIP] Důrazně doporučujeme aktualizovat na nejnovější stabilní verze výše uvedeného softwaru, známého také jako Long Term Support (LTS) release.

Jakmile máte nainstalované předpoklady, musíte připravit své vývojové prostředí. To je běžné u mnoha vývojových pracovních postupů a budete to muset udělat pouze jednou.

**Postupujte podle těchto kroků, abyste mohli své vývojové prostředí připravit:**

1. Nainstalujte [Git](https://git-scm.com/) nebo Vašeho oblíbeného Git klienta, pokud již nemáte. Aktualizujte na nejnovější verzi; verze, která byla připojena k vašemu OS může být zastaralá.

2. (Volitelné, ale doporučeno) [Nastavte klíč SSH](https://help.github.com/articles/generating-an-ssh-key/) pro GitHub.

3. Nainstalujte si editor kódu dle vašeho výběru.

   Důrazně doporučujeme používat [Visual Studio Code](https://code.visualstudio.com/) nebo [Atom](https://atom.io/). Jsou to skvělé, zdarma a open source editory.

4. Nastavte odkaz pro editor kódu.

   V editoru byste měli mít [ESLint](http://eslint.org/docs/user-guide/integrations.html), a zvýrazní vše, co neodpovídá

   > [!TIP] Neignorujte prosím žádné chyby odkazu. Mají pomoci **vám** a zajistit čistou a jednoduchou kódovou základnu.

## Rozštěpit úložiště na GitHubu

příručce JavaScriptů [ freeCodeCamp.](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

Toto je nezbytné, protože umožňuje pracovat na vlastní kopii freeCodeCamp na GitHubu, nebo stáhnout (klonovat) váš repozitář, aby fungoval lokálně. Později budete moci prostřednictvím požadavku na natažení (PR) požádat o změny na hlavní repozitář.

> [!TIP] Hlavní repozitář na `https://github.com/freeCodeCamp/freeCodeCamp` je často označován jako `předcházející repozitář`.
> 
> Vaše rozštěpení na `https://github.com/YOUR_USER_NAME/freeCodeCamp` je často označováno jako `původ`.

**Postupujte podle těchto kroků a rozštěpte repozitář `https://github.com/freeCodeCamp/freeCodeCamp`:**

1. Přejděte do repositáře freeCodeCamp na GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>

2. Klikněte na tlačítko "Fork" v pravém horním rohu rozhraní ([Další podrobnosti](https://help.github.com/articles/fork-a-repo/))

3. Po rozdělení repozitáře budete pořízeni do kopie repositáře freeCodeCamp na `https://github.com/YOUR_USER_NAME/freeCodeCamp`

<details>
   <summary>
      Jak rozštěpit volný CodeCamp na GitHubu (snímek obrazovky)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="Jak rozštěpit bezplatný CodeCamp na GitHubu" />
</details>

## Klonovat rozštěpení z GitHub

[Klonování](https://help.github.com/articles/cloning-a-repository/) je místo, kde **stáhnete** kopii repozitáře z `vzdálené` polohy, kterou buď vlastníte, nebo někdo jiný. V takovém případě je toto vzdálené umístění vaší `fork` z repozitáře freeCodeCamp, který by měl být k dispozici na `https://github.com/YOUR_USER_NAME/freeCodeCamp`.

Spustit tyto příkazy na vašem lokálním počítači:

1. Otevřete Terminál / Příkazový příkaz / Shell v adresáři projektů

   _tj.: `/yourprojectsdirectory/`_

2. Klonujte si rozštěpení volného CodeCamp, nahrazte `YOUR_USER_NAME` vaším GitHub uživatelským jménem

   ```console
   git klonovat --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

Spustit tyto příkazy na vašem lokálním počítači:

Toto stáhne celý freeCodeCamp repositář do adresáře projektů.

## Nastavit synchronizaci od nadřazeného

Poznámka: `--depth=1` vytvoří mělký klon tvého vidlice s nejaktuálnější historií/commit.

[Jak již bylo zmíněno](#fork-the-repository-on-github), hlavní repozitář je určen `před repozitářem`. Vaše rozštěpení označované jako `původ`.

Potřebujete odkaz z vašeho lokálního klonu do `předcházejícího` repozitáře kromě `původu`. To je tak, že můžete synchronizovat změny z hlavního repositáře bez požadavku na opakované vytváření a klonování.

1. Změnit adresář na nový freeCodeCamp adresář:

   ```console
   cd bezplatný CodeCamp
   ```

2. Přidat vzdálený odkaz do hlavního repositáře freeCodeCamp:

   ```console
   git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Ujistěte se, že konfigurace vypadá správně:

   ```console
   git remote -v
   ```

   Výstup by měl vypadat jako níže:

   ```console
   původ https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   původ https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   upstream https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   upstream https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## Místně spuštěný bezplatný CodeCamp

Nyní, když máte lokální kopii freeCodeCamp, můžete sledovat tyto instrukce a spustit je lokálně. To vám umožní:

- Náhled úprav na stránky, jak by se objevily na platformě učení.
- Práce na problémech a vylepšeních souvisejících s uživatelským rozhraním.
- Ladit a opravit problémy s aplikačními servery a klientskými aplikacemi.

Pokud se narazíte na problémy, nejprve proveďte vyhledání vašeho problému a zjistěte, zda byl již zodpovězen. Pokud nemůžete najít řešení, prosím prohledejte naše [GitHub problémy](https://github.com/freeCodeCamp/freeCodeCamp/issues) pro řešení a nahlaste problém, pokud ještě nebyl nahlášen.

A jako vždy, neváhejte skočit na naši [Chatovací místnost na Gitteru](https://gitter.im/FreeCodeCamp/Contributors) nebo [náš Discord server](https://discord.gg/pFspAhS), pro rychlé dotazy.

> [!TIP] Pokud jednoduše upravujete soubory, můžete ho přeskočit lokálně. Například provedení `rebase`nebo řešení `sloučení` konfliktů.
> 
> Do této části pokynů se vždy můžete vrátit později. Měli byste **** tento krok přeskočit, pokud nepotřebujete spouštět aplikace na vašem počítači.
> 
> [Přeskočit na provedení změn](#making-changes-locally).

### Nastavení závislostí

#### Krok 1: Nastavte proměnnou prostředí

Výchozí API klíče a proměnné prostředí jsou uloženy v souboru `sample.env`. Tento soubor musí být zkopírován do nového souboru s názvem `.env` , který je dynamicky přístupný během instalačního kroku.

```console
# Vytvořte kopii "sample.env" a pojmenujte ji ".env".
# Vyplňte potřebné API klíče a tajné klíče:

# macOS / Linux
cp vzorek. nv .env

# Windows
copy sample.env .env
```

Klávesy v souboru `.env` nejsou __ vyžadovány pro místní spuštění aplikace. Můžete ponechat výchozí hodnoty zkopírované z `vzor.env` jako.

> [!TIP] Mějte na paměti, pokud chcete používat služby jako Auth0 nebo Algolia, pro tyto služby budete muset získat vlastní API klíče a odpovídajícím způsobem upravit položky v `. nv` soubor.

#### Krok 2: Instalovat závislosti

Tento krok nainstaluje závislosti, které jsou nezbytné pro spuštění aplikace:

```console
npm ci
```

#### Krok 3: Start MongoDB a seed databáze

Než budete moci spustit aplikaci lokálně, budete muset spustit službu MongoDB.

> [!POZNÁMKA] Pokud není MongoDB spuštěno v jiném nastavení, než je výchozí nastavení, URL uložená jako hodnota `MONGOHQ_URL` v `. nv` soubor by měl fungovat v pořádku. Pokud používáte vlastní konfiguraci, upravte tuto hodnotu podle potřeby.

Tento krok nainstaluje závislosti, které jsou nezbytné pro spuštění aplikace:

- Na macOS & Ubuntu:

  ```console
  mongod
  ```

- V systému Windows musíte zadat úplnou cestu k binárnímu `mongod`

  ```console
  "C:\Program Soubory\MongoDB\Server\3.6\bin\mongod"
  ```

  Ujistěte se, že chcete nahradit `3.6` verzí, kterou jste nainstalovali

> [!TIP] Můžete se vyhnout tomu, abyste MongoDB museli kdykoliv spustit instalací služby na pozadí. Můžete se o tom [dozvědět více v jejich dokumentaci pro váš OS](https://docs.mongodb.com/manual/administration/install-community/)

Dále pojďme získat databázi. V tomto kroku spustíme níže uvedený příkaz, který vyplňuje server MongoDB s počátečními datovými sadami, které jsou vyžadovány službami. Patří k nim mimo jiné několik schémat.

```console
npm run seed
```

#### Krok 4: Spusťte klientskou aplikaci FreeCamp a API server

Spusťte MongoDB server v samostatném terminálu:

```console
vývoj npm běhu
```

Ujistěte se, že chcete nahradit `3.6` verzí, kterou jste nainstalovali

> [!POZNÁMKA] Jakmile je tento prohlížeč připraven, otevřete webový prohlížeč a **navštivte <http://localhost:8000>**. Pokud se aplikace načítá, blahopřejeme – vše je nastaveno! Nyní máte kopii celé vzdělávací platformy FreeCodeCamp, která běží na vašem místním počítači.

> [!TIP] API Server slouží API na `http://localhost:3000`. Aplikace Gatsby slouží klientské aplikaci na `http://localhost:8000`

> Pokud navštívíte [http://localhost:3000/Explorer](http://localhost:3000/explorer) , měli byste vidět dostupné API.

## Přihlásit se s místním uživatelem

Vaše místní nastavení automaticky vyplní místního uživatele v databázi. Kliknutím na tlačítko `Přihlásit se` vás automaticky ověří do místní aplikace.

Nicméně přístup k uživatelským portfoliovým stránkám je trochu trický. Ve vývoji, Gatsby přebírá obsluhu stránek na straně klienta a proto dostanete `404` stránku pro uživatelské portfolio při lokálním fungování.

Tento jediný příkaz spustí všechny služby, včetně API serveru a klientských aplikací, na kterých můžete pracovat.

<details>
   <summary>
      Jak se přihlásit při práci na místě (snímek obrazovky)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="Jak se přihlásit při práci na místě" />
</details>

## Probíhá lokální změny

Nyní můžete provést změny v souborech a provést změny v místním klonu rozštěpení.

Postupujte podle těchto kroků:

1. Ověřte, že jste na `master` větvi:

   ```console
   git status
   ```

   Měli byste získat výstup takto:

   ```console
   Na pobočce master
   Vaše větev je aktuální s 'původ/mistrovství'.

   nic k ověření, čištění pracovního adresáře
   ```

   Pokud nejste na mistru nebo není váš pracovní adresář čistý, vyřešte všechny nevyřízené soubory/commity a pokladnu `master`:

   ```console
   mistr git pokladny
   ```

2. Synchronizujte nejnovější změny z volné CodeCamp proti proudu `master` do vaší místní hlavní větve:

   > [!VAROVÁNÍ] Pokud máte nějaký nevyřízený požadavek na natažení, který jste podali od `master` větve tvého vidlice, na konci tohoto kroku je ztratíte.
   > 
   > Před provedením tohoto kroku byste měli zajistit, aby byl váš požadavek na natažení sloučen moderátorem. Abychom se tomuto scénáři vyhnuli, měli byste **vždy** pracovat na jiné větvi než je `master`.

   Tento krok **synchronizuje nejnovější změny** z hlavního repositáře freeCodeCamp. Je důležité, abyste přeorientovali větev na nejnovější `upstream/master` co nejčastěji, abyste se později vyhnuli konfliktům.

   Aktualizujte svou lokální kopii repositáře freeCodeCamp před repozitářem:

   ```console
   git načíst proti proudu
   ```

   Těžko resetovat svou hlavní větev pomocí volného CodeCamp master:

   ```console
   git resetuje --hard upstream/master
   ```

   Stiskněte svou hlavní větev do svého původu, abyste měli čistou historii na tvém forku na GitHubu:

   ```console
   git push origin master --force
   ```

   Váš aktuální mistr se shoduje s aktuálním streamem/mistrem tím, že provedete rozdíl:

   ```console
   git odlišit nahoru/master
   ```

   Výsledný výstup by měl být prázdný.

3. Vytvořit novou větev:

   Práce na samostatné pobočce pro každý problém vám pomůže udržet vaši místní kopii čistý. Nikdy byste neměli pracovat na `mistrovi`. Uloží vaši kopii freeCodeCamp a možná budete muset začít s novým klonem nebo vidlicí.

   Zkontrolujte, zda jste na `master` , jak bylo vysvětleno výše, a odsud odešlete od:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Název větve by měl začínat `fix/`, `funkcí/`, `dokumentací/`, atd. Vyhněte se používání čísel úkolů v větvích. Uchovávejte je krátké, smysluplné a jedinečné.

   Mezi dobré názvy poboček patří:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Upravte stránky a pracujte na kódu v oblíbeném textovém editoru.

5. Jakmile jste spokojeni se změnami, měli byste volitelně spustit freeCodeCamp pro zobrazení změn.

6. Ujistěte se, že jste opravili chyby a zkontrolujte formátování změn.

7. Zkontrolujte a potvrďte aktualizované soubory:

   ```console
   git status
   ```

   Toto by mělo zobrazit seznam `nefázovaných` souborů, které jste upravili.

   ```console
   Funkce větev / dokumentace
   Vaše větev je aktuální s 'upstream/feat/documentation'.

   Změny nejsou ve stadiu pro commit:
   (použijte "git add/rm <file>... pro aktualizaci toho, co bude přidáno)
   (použijte "git checkout -- <file>. " pro odstranění změn v pracovním adresáři)

       změněny: PŘÍSPĚVEK d
       změněn: dokumenty/README.md
       změněny: dokumenty/how-to-setup-freecodecamp-local. d
       změněny: dokumentaci/jak-work-on-guide-articles.md
...
   ```

8. Funguje změny a učiní závazek:

   V tomto kroku byste měli označit pouze soubory, které jste upravili nebo přidali. Můžete provést resetování a vyřešit soubory, které jste v případě potřeby nezamýšleli změnit.

   ```console
   git přidat cestu/do/my/changed/file.ext
   ```

   Nebo můžete přidat všechny `nefázované` soubory do oblasti přípravy:

   ```console
   git add .
   ```

   Až vytvoříte commit, budou přidány pouze soubory, které byly přesunuty do přípravné oblasti.

   ```console
   git status
   ```

   Výstup:

   ```console
   Funkce větev / dokumentace
   Vaše větev je aktuální s 'upstream/feat/documentation'.

   Změny, které mají být provedeny:
   (použijte "git reset HEAD <file>..." to unstage)

       změněny: CONTRIBUTING.md
       změněny: docs/README.md
       změněny: docs/how-to-setup-freecodecamp-locally.md
       upraveno: docs/how-to-work-on-guide-articles.md
   ```

   Nyní můžete provést své změny s krátkou zprávou, jako je toto:

   ```console
   git commit -m "opravit: moje krátká zpráva commitu"
   ```

   Některé příklady:

   ```md
   oprava: update guide article for Java - for smyčka
   feat: add guide article for alexa skills
   ```

   Nepovinné:

   Důrazně doporučujeme vytvořit konvenční zprávu commitu. Toto je dobrá praxe, kterou uvidíte u některých populárních Open Source repozitářů. Jako vývojář vás to povzbuzuje ke sledování standardních postupů.

   Některé příklady konvenčních zpráv commitů jsou:

   ```md
   oprava: update HTML guide article
   fix: update build scripts for Travis-CI
   feat: add article for JavaScript hoisting
   docs: update přispívající pravidla
   ```

   Zachovat tyto krátké, ne více než 50 znaků. V popisu zprávy commitu můžete vždy přidat další informace.

   Netrvá to více času než nekonvenční zpráva jako 'update file' nebo 'add index.md'

   Více informací o tom, proč byste měli používat konvenční commity [zde](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Pokud si uvědomíte, že po provedení revize je třeba upravit soubor nebo aktualizovat zprávu commitu, můžete tak učinit po úpravě souborů:

   ```console
   git commit --amend
   ```

   Tímto se otevře výchozí textový editor, jako je `nano` nebo `vi` , kde můžete upravit název zprávy a přidat/upravit popis.

10. Dále můžete odeslat své změny na rozštěpení:

    ```console
    git push origin branch/name-here
    ```

## Návrh požadavku na natažení (PR)

Poté, co jste změnili své změny, podívejte se zde na [jak otevřít Pull Request](how-to-open-a-pull-request.md).

## Odkaz na rychlé příkazy

Nyní můžete provést změny v souborech a provést změny v místním klonu rozštěpení.

| příkaz                                                         | Popis                                                                                 |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `npm ci`                                                       | Instalujte / přeinstalujte všechny závislosti a bootstrapy různé služby.              |
| `npm run seed`                                                 | Analyzuje všechny soubory challenge markdown a vloží je do MongoDB.                   |
| `vývoj npm běhu`                                               | Spustí Free CodeCamp API Server a aplikace klienta.                                   |
| `npm test`                                                     | Spustit všechny JS testy v systému, včetně klienta, serveru, linky a challenge testů. |
| `npm run test:klient`                                          | Spustit klientskou testovací sadu.                                                    |
| `npm run test:curriculum`                                      | Spustit testovací sadu učebních plánů.                                                |
| `npm run test:curriculum --block='Základní HTML a HTML5'`      | Vyzkoušejte specifický blok.                                                          |
| `npm run test:curriculum --superblock='responsive-web-design'` | Vyzkoušejte specifický SuperBlock.                                                    |
| `npm run test-curriculum full-výstup`                          | Po první chybě spustit testovací sadu učebních osnov                                  |
| `npm run test:server`                                          | Spustit serverovou testovací sadu.                                                    |
| `npm běh e2e`                                                  | Spusťte konec Cypresu pro ukončení testů.                                             |
| `npm vyčistit`                                                 | Odinstaluje všechny závislosti a vyčistí mezipaměti.                                  |

## Řešení problémů

### Problémy s instalací doporučených předpokladů

Postupujte podle těchto kroků:

Doporučujeme prozkoumat váš konkrétní problém u zdrojů, jako je Google, Stack Overflow nebo Stack Exchange. Existuje velká šance, že někdo čelil stejnému problému a na váš konkrétní dotaz již existuje odpověď.

Pokud jste na jiném OS a/nebo stále běžejí problémy, podívejte se na [získání nápovědy](#getting-help).

> Pokud navštívíte [http://localhost:3000/Explorer](http://localhost:3000/explorer) , měli byste vidět dostupné API.
> 
> Vyhněte se prosím vytváření GitHub problémů v nezbytných podmínkách. Jsou mimo rozsah tohoto projektu.

### Problémy s uživatelským rozhraním, písmy, chyby sestavení atd.

Pokud narazíte na problémy s UI, fonty nebo uvidíte chyby sestavení, může být čištění užitečné:

```console
npm run clean
npm ci
npm run seed
npm run develop
```

NEBO

Použít zástupce

```
npm běh čištění a vývoj
```

Výsledný výstup by měl být prázdný.

Použít `git čištění` v interativním režimu:

```
git clean -ifdX
```

<details>
   <summary>
      Jak vyčistit git nesledované soubory (screenshot)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="Jak vyčistit git nesledované soubory" />
</details>

### Problémy s API, přihlášením, podáním výzvy atd.

Pokud se nemůžete přihlásit a místo toho uvidíte banner s chybovou zprávou, že bude nahlášen na freeCodeCamp, prosím zkontrolujte, zda váš místní port `3000` není používán jiným programem.

**Na Linuxu / macOS / WSL na Windows - Z terminálu:**

```console
netstat -ab | grep "3000"

tcp4 0 0.0.0.0:3000 DESKTOP LISTEN
```

**Na Windows - Z Elevated PowerShell:**

```powershell
netstat -ab | Vybraný řetězec "3000"

TCP 0.0.0:3000 DESKTOP LISTENING
```

### Problémy při instalaci závislostí

Nepovinné:

Nastavení může chvíli trvat poprvé, v závislosti na šířce pásma. Buďte trpěliví, a pokud jste stále uvězněni, obnovujeme místo offline nastavení GitPod.

## Získávání nápovědy

Pokud jste uvízli a potřebujete pomoc, dejte nám vědět tím, že se zeptáte v kategorii ['přispěvatelé' na našem fóru](https://forum.freecodecamp.org/c/contributors) nebo [přispěvatelé](https://gitter.im/FreeCodeCamp/Contributors) na Gitteru.

V konzoli prohlížeče nebo v Bash / Terminálu / příkazovém řádku může být chyba, která pomůže identifikovat problém. Zadejte tuto chybovou zprávu v popisu problému, aby ostatní mohli problém snadněji identifikovat a pomohli vám najít řešení.
