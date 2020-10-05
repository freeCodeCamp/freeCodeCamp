# Operace vývojáře na freeCodeCamp.org

Tento průvodce vám pomůže pochopit náš stack infrastruktury a jak udržujeme naše platformy. Ačkoli tato příručka nemá vyčerpávající podrobnosti pro všechny operace, mohla by být použita jako reference pro vaše pochopení systémů.

Dejte nám vědět, pokud máte zpětnou vazbu nebo dotazy a rádi si vyjasníme.

## Jak vytvoříme, otestujeme a nasadíme kódovou základnu?

Tento repozitář je neustále budován, testován a nasazen do **oddělených souborů infrastruktury (Servers, databáze, CDN atd.)**.

To zahrnuje tři kroky, které je třeba dodržovat v posloupnosti:

1. Nové změny (opravy i funkce) jsou sloučeny do naší primární vývojové větve (`master`) prostřednictvím požadavků na natažení.
2. Tyto změny probíhají prostřednictvím řady automatizovaných testů.
3. Jakmile testy projdou, uvolníme změny (nebo je v případě potřeby aktualizujte) na nasazení do naší infrastruktury.

#### Vytváření kódové základny - mapování větví Gitu k zaměstnancům.

Typically, [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master) (the default development branch) is merged into the [`production-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) branch once a day and is released into an isolated infrastructure.

Jedná se o průběžné vydání pro naše vývojáře a dobrovolnické přispěvatele. Je také známá jako naše "staging" nebo "beta".

Je identický s naším živým produkčním prostředím na `freeCodeCamp.org`jiné než pomocí samostatného souboru databází, serverů, web-proxies, atd. Tato izolace nám umožňuje testovat probíhající vývoj a vlastnosti v "výrobě" jako scénář, aniž by ovlivňovala běžné uživatele hlavních platforem FreeCodeCamp.org.

Jakmile je vývojářský tým [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) spokojen se změnami na přípravné platformě, tyto změny se přesouvají každých několik dní do větví [`produkčních a aktuálních`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current).

Toto je finální verze, která přesouvá změny do našich produkčních platforem na freeCodeCamp.org.

#### Testování změn - testování integrace a akceptace uživatelů.

Pro kontrolu kvality kódu používáme různé úrovně integrace a testování. Všechny naše testy jsou prováděny prostřednictvím softwaru jako [Travis CI](https://travis-ci.org/freeCodeCamp/freeCodeCamp) a [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

Máme jednotkové testy pro testování našich challenge řešení, API serveru a uživatelských rozhraní klienta. Ty nám pomáhají otestovat integraci mezi různými složkami.

> [!POZNÁMKA] Jsme také v procesu psaní konečných uživatelských testů, které pomohou při kopírování scénářů reálného světa, jako je aktualizace e-mailu nebo volání na API nebo služby třetích stran.

Tyto testy společně pomáhají zabránit opakování problémů a zajistit, že při práci s jinou chybou nebo funkcí nezavádíme chybu.

#### Publikování změn - Odesílání změn na servery.

Nakonfigurovali jsme kontinuální doručovací software, který tlačí změny na naše vývojové a výrobní servery.

Jakmile jsou změny odeslány do chráněných distribučních větví, spustí se pro větvi automaticky spustí stavěný potrubí. Stavební plynovody jsou zodpovědné za výstavbu artefaktů a jejich udržování v chladírenském skladu pro pozdější použití.

Stavební plynovod pokračuje tak, aby spustil odpovídající vypouštěcí plynovod po dokončení úspěšného jízdy. Vypouštěcí potrubí jsou zodpovědná za sběr stavěných artefaktů, jejich přesun na servery a život.

Stav sestavení a vydání je [k dispozici zde](#build-test-and-deployment-status).

## Spuštění sestavení, testování a nasazení.

V současné době mohou do výrobních větví tlačit pouze členové vývojářského týmu. The changes to the `production-*` branches can land only via fast-forward merge to the [`upstream`](https://github.com/freeCodeCamp/freeCodeCamp).

> [!POZNÁMKA] V nadcházejících dnech bychom zlepšili tento tok pomocí požadavků na natažení, pro lepší řízení přístupu a transparentnost.

### Odesílání změn do Přípravných aplikací.

1. Konfigurace dálkových ovladačů správně.

   ```sh
   git remote -v
   ```

   **Výsledky:**

   ```
   původ git@github.com:raisedadead/freeCodeCamp.git (fetch)
   origin git@github.com:raisedadead/freeCodeCamp.git (push)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. Ujistěte se, že vaše `master` větev je nepravdivá a synchronizuje s upstreamem.

   ```sh
   git checkout master
   git fetch --all --prune
   git reset --hard upstream/master
   ```

3. Zkontrolujte, zda Cesta CI pokračuje na značce `master` pro předcházející proud.

   Testy [kontinuální integrace](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) by měly být zelené a PASIVNÍ pro hlavu ``.

    <details> <summary> Kontrola stavu Travis CI (screenshot) </summary>
      <br>
      ![Zkontrolovat stav sestavení na Cestě CI](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/devops/travis-build.png)
    </details>

   Pokud to chybí, měli byste se zastavit a vyšetřit chyby.

4. Potvrďte, že jste schopni vytvořit repozitář lokálně.

   ```
   npm běh čištění a vývoj
   ```

5. Přesunout změny z `master` do `přípravné výroby` rychlým sloučením

   ```
   git Checkout production-staging
   sloučení git master
   git push upstream
   ```

   > [!POZNÁMKA] Nebudeš moci vynutit tlačení a pokud jsi přepsal historii tak, že tyto příkazy budou chybné.
   > 
   > Pokud ano, možná jste udělali něco nesprávně a měli byste začít znovu.

Výše uvedené kroky automaticky spustí běh na stavěném potrubí pro větev `výroby`. Po dokončení sestavení jsou artefakty uloženy jako `.zip` soubory v chladném úložišti, které mají být načteny a použity později.

Vypouštěcí potrubí se spustí automaticky, pokud je k dispozici čerstvý artefakt z připojeného stavebního potrubí. Pro přípravné platformy tento proces nezahrnuje ruční schválení a artefakty jsou přenášeny na servery CDN a API.

> [!TIP|label:Estimates] Dokončování běhu sestavení trvá obvykle ~20-25 minut a následně běh verze trvá ~15-20 minut pro klienta, a ~5-10 minut pro API je dostupné živé. Od volání kódu k živému na přípravných platformách trvá celý proces **~35-45 minut**.

### Tlačítko změn výrobních aplikací.

Proces je většinou stejný jako přípravné platformy, s několika dalšími kontrolami. To je jen proto, abychom se ujistili, že nerozbijeme nic na freeCodeCamp.org, který může vidět stovky uživatelů, kteří jej používají kdykoliv.

| Neprovádět tyto příkazy, pokud jste neověřili, že vše pracuje na platformě pro přípravu. Neměl bys obcházet ani přeskočit žádné testování přípravy, než budeš pokračovat. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                           |


1. Ujistěte se, že vaše `výrobní příprava` větev je nedokonalá a synchronizovaná s předním proudem.

   ```sh
   git checkout production-staging
   git fetch --all --prune
   git reset --hard upstream/production-staging
   ```

2. Přesunout změny z `výroby` do `produkčního proudu` rychlým sloučením

   ```
   git checkout produkci-aktuální
   sloučení výroby
   git push proti stream
   ```

   > [!POZNÁMKA] Nebudeš moci vynutit tlačení a pokud jsi přepsal historii tak, že tyto příkazy budou chybné.
   > 
   > Pokud ano, možná jste udělali něco nesprávně a měli byste začít znovu.

Výše uvedené kroky automaticky spustí běh na vývojovém potrubí pro větev `produkčně proudu` </code>. Jakmile bude stavební artefakt připraven, spustí běh na vypouštěcí potrubí.

> [!TIP|label:Estimates] Dokončování běhu sestavení trvá obvykle ~20-25 minut.

**Další kroky pro činnost zaměstnanců**

Jeden běh vydání je spuštěn, členové týmu vývojáře obdrží automatický manuální zásahový e-mail. Mohou buď _schválit_ nebo _odmítnout_ spuštění vydání.

Pokud změny fungují pěkně a byly testovány na přípravné plošině, pak mohou být schváleny. Schválení musí být uděleno do čtyř hodin od spuštění uvolnění před automatickým odmítnutím. Personál může pro odmítnuté jízdy znovu spustit spuštění ručně, nebo počkat na další cyklus vydání.

Pro zaměstnance:

| Zkontrolujte svůj e-mail pro přímý odkaz nebo [přejděte na dashboard vydání](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) po dokončení spuštění sestavení. |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                             |


Jakmile jeden z zaměstnanců schválí vydání, bude plynovod tlačit změny na produkční CDN a API servery freeCodeCamp.org. Obvykle zabírají ~15-20 minut pro klienta a ~5 minut pro servery API, aby byly k dispozici živé.

> [!TIP|label:Estimates] Běh vydání obvykle trvá ~15-20 minut pro každou instanci klienta a ~5-10 minut pro každou instanci API je k dispozici naživu. Od kódového tlačení k živému na produkčních platformách celý proces trvá **~90-120 minut** celkem (nezapočítává se doba čekání na schválení personálem).

## Postavení, test a stav nasazení

Zde je aktuální test, sestavení a stav nasazení kódové základny.

| Typ              | Větev                                                                                        | Stav                                                                                                                                                                                                                                                  | Nástěnka                                                                                   |
|:---------------- |:-------------------------------------------------------------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------ |
| Zkoušky CI       | [`mistr`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master)                          | ![Stav sestavení cestování CI](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=master)                                                                                                                                                     | [Přejít na stavový panel](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Zkoušky CI       | [`přípravná produkce`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | ![Stav sestavení cestování CI](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-staging)                                                                                                                                         | [Přejít na stavový panel](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Sestavit potrubí | [`přípravná produkce`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | [![Stav sestavení](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-dev-ci?branchName=production-staging)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=15&branchName=production-staging) | [Přejít na stavový panel](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Uvolnit potrubí  | [`přípravná produkce`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) |                                                                                                                                                                                                                                                       | [Přejít na stavový panel](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |
| Zkoušky CI       | [`výrobní proud`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current)      | ![Stav sestavení cestování CI](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-current)                                                                                                                                         | [Přejít na stavový panel](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Sestavit potrubí | [`výrobní proud`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)      | [![Stav sestavení](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-org-ci?branchName=production-current)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=17&branchName=production-current) | [Přejít na stavový panel](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Uvolnit potrubí  | [`výrobní proud`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)      |                                                                                                                                                                                                                                                       | [Přejít na stavový panel](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |

## Předčasný přístup a beta testování

Vítáme Vás otestovat tyto verze v režimu **"Public beta testing"** a získat včasný přístup k nadcházejícím funkcím platform. Někdy jsou tyto funkce/změny označovány jako **další, beta, staging,** atd. zaměnitelné.

Vaše příspěvky prostřednictvím zpětné vazby a hlášení problémů nám pomohou vytvořit produkční platformy na `freeCodeCamp. rg` více **odolné**, **konzistentní** a **stabilní** pro všechny.

Děkujeme vám za hlášení chyb, se kterými jste narazili a pomohli zlepšit freeCodeCamp.org. bubble raider

### Určení nadcházející verze platforem

V současné době je veřejná beta testovací verze k dispozici na:

<h1 align="center"><a href='https://www.freecodecamp.dev' _target='blank'>freecodecamp.dev</a></h1>

> [!POZNÁMKA] Název domény se liší od **`freeCodeCamp.org`**. Toto je záměrem zabránit indexování vyhledávačů a vyhnout se nejasnostem pro běžné uživatele platformy.

### Identifikace aktuální verze platforem

**Aktuální verze platformy je vždy k dispozici na [`freeCodeCamp.org`](https://www.freecodecamp.org).**

dev-team spojuje změny z `výrobní přípravy` větví na `produkčně aktuálně` , když se změní. Nejlepší commit by měl být, co vidíte na webu.

Přesnou verzi zavedenou můžete identifikovat návštěvou protokolů sestavení a nasazení dostupných ve stavové sekci. Případně nás můžete také kontaktovat v [přispěvatelské chatovací místnosti](https://gitter.im/FreeCodeCamp/Contributors) pro potvrzení.

### Známá omezení

Při používání beta verze platformy existují některá známá omezení a kompromisy.

- #### Všechna data / osobní postup na těchto beta platformách `NEBUDE uložena nebo přenesena` do produkce.

  **Uživatelé na beta verzi budou mít oddělený účet od produkce.** Beta verze používá fyzicky oddělenou databázi od produkce. To nám dává možnost zabránit náhodným ztrátám údajů nebo úpravám. Dev tým může vymazat databázi v této beta verzi, jak je potřeba.

- #### Na počátku a spolehlivost beta platforem nejsou žádné záruky.

  Očekává se, že nasazení bude časté a v rychlých iteracích, někdy několikanásobně denně. Výsledkem bude neočekávaná výpadek v časech nebo porušená funkčnost v beta verzi.

- #### Neposílejte na tento web běžné uživatele jako měřítko potvrzení opravy

  Beta stránka je a vždy byla rozšiřovat místní vývoj a testování, nic jiného. Není to příslib toho, co se blíží, ale pouhý pohled na to, na co se pracuje.

- #### Značka může vypadat jinak než v produkci

   Používáme testovacího nájemníka pro freecodecamp.dev na Auth0, a proto nemáme možnost nastavit vlastní doménu. Tím se všechny přesměrované volání a přihlašovací stránka zobrazí na výchozí doméně, jako: `https://freecodecamp-dev.auth0.com/`. To nemá vliv na funkčnost co nejblíže k produkci, jak můžeme získat.

## Hlášení problémů a zanechání zpětné vazby

Prosím otevřete nové problémy pro diskuzi a hlášení chyb. Můžete je označit jako **[`vydání: next/beta`](https://github.com/freeCodeCamp/freeCodeCamp/labels/release%3A%20next%2Fbeta)** pro triage.

Pokud máte nějaké dotazy, můžete poslat e-mail na `vývojáře[at]freecodecamp.org`. Jako vždy by všechny bezpečnostní chyby měly být nahlášeny na `bezpečnost[at]freecamp.org` namísto veřejného trackeru a fóra.
