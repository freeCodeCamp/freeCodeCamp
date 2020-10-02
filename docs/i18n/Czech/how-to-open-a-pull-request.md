# Jak otevřít požadavek na natažení (PR)

Požadavek na natažení umožňuje odesílat změny z tvého rozštěpení na GitHubu na hlavní repositář FreeCodeCamp.org. Jakmile provedete změny kódu, nebo kódovací výzvy, měli byste se řídit těmito pokyny a poslat PR.

## Připravte dobrý PR název

Doporučujeme použít [běžný název a zprávy](https://www.conventionalcommits.org/) pro revize a požadavek na natažení. Úmluva má tento formát:

> `<type>([volitelný rozsah(y)]): <description>`
> 
> Například:
> 
> `fix(naučení): testy pro to... zatímco smyčka výzva`

Při otevírání Pull Request(PR) můžete použít níže uvedené k určení typu, rozsahu (volitelné) a popisu.

**Typ:**

| Typ         | Kdy vybrat                                                                   |
|:----------- |:---------------------------------------------------------------------------- |
| opravit     | Změněná nebo aktualizovaná/vylepšená/funkčnost, zkoušky, verbiáž lekce, atd. |
| pek         | Pouze pokud přidáváte nové funkce, testy atd.                                |
| koruna      | Změny, které se nevztahují k kódu, testům nebo slovnímu znění lekce.         |
| dokumentace | Změny adresáře `/docs` nebo pokynů pro přispívání atd.                       |

**Oblast působnosti:**

Můžete si vybrat rozsah z [tohoto seznamu štítků](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Popis:**

Zachovejte ji krátkou (méně než 30 znaků) a jednoduše můžete přidat více informací do políčka pro popis PR a komentáře.

Některé příklady dobrých PRS by byly:

- `fixa11y): zlepšený kontrast vyhledávací lišty`
- `funkce: přidejte další testy do html a css challenge`
- `oprava (api,client): brání chybám CORS při vkládání formulářů`
- `Dokumenty(i18n): Čínský překlad lokálního nastavení`

## Návrh požadavku na natažení

1. Jakmile budou provedeny úpravy, budete vyzváni k vytvoření požadavku na natažení na GitHubu stránce.

   ![Obrázek - Porovnat požadavek na natažení na GitHubu](./images/github/compare-pull-request-prompt.png)

2. Ve výchozím nastavení by všechny požadavky na natažení měly být proti hlavnímu repozitáři freeCamp `, master` větvi.

   Ujistěte se, že při zvednutí požadavku na natažení je vaše základní rozštěpení nastaveno na volný CodeCamp/freeCodeCamp

   ![Obrázek - porovnávání vidlic při požadavku na natažení](./images/github/comparing-forks-for-pull-request.png)

3. Odešlete požadavek na natažení od větev na pobočku freeCodeCamp's `master` FreeCamp.

4. V těle vašeho PR uveďte podrobnější shrnutí změn, které jste provedli a proč.

   - Budete prezentováni s šablonou požadavku na natažení. Toto je kontrolní seznam, který jste měli před otevřením požadavku na natažení následovat.

   - Vyplňte podrobnosti, jak to považujete za vhodné. Tyto informace budou přezkoumány a hodnotitelé rozhodnou, zda je vaše žádost o natažení přijata, či nikoli.

   - Pokud má PR řešit existující GitHub problém, pak na konci popisného orgánu vašeho PR, použít klíčové slovo _Zavře_ s číslem úkolu [automaticky zavřít tento úkol, pokud je PR přijat a sloučen](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Příklad: `Uzavře #123` zavře úkol 123

5. Uveďte, zda jste testovali na místní kopii stránky, nebo ne.

   To je velmi důležité při provádění změn, které nejsou pouhými úpravami textového obsahu, jako je dokumentace nebo popis výzvy. Příklady změn, které vyžadují místní testování, zahrnují JavaScript, CSS nebo HTML, které mohou změnit funkčnost nebo rozložení stránky.

## Zpětná vazba na požadavky na natažení

> Blahopřejeme! :tada: při vytváření PR a moc děkujeme za to, že věnoval čas na příspěvek.

Naši moderátoři se nyní podívají a zanechají vám zpětnou vazbu. Buďte prosím trpěliví s kolegy moderátory a respektujte jejich čas. Všechny požadavky na natažení jsou včas přezkoumány.

Pokud potřebujete pomoc, prosím diskutujte v chatovací místnosti [přispěvatelů](https://gitter.im/FreeCodeCamp/Contributors), rádi Vám pomůžeme.

> [!TIP] Pokud chcete přispět dalšími požadavky na natažení, doporučujeme přečíst si [dělat změny a synchronizovat](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally?id=making-changes-locally) pokyny, abyste nemuseli mazat vaše rozštěpení.

## Konflikty na žádost o stažení

Konflikty mohou nastat, protože mnoho přispěvatelů pracuje v úložišti a změny mohou poškodit váš PR, který čeká na recenzi a fúzi.

Častěji než nemusíte vyžadovat rebázi, protože všechny závazky rozmělňujeme, Nicméně pokud je zde požadována rebace, je to, co byste měli udělat.

### Pro běžné opravy chyb a funkce

Když pracujete na běžných chybách a funkcích na naší vývojové větvi `master`můžete udělat jednoduchou rebázi:

1. Rebujte svou místní kopii:

   ```console
   git checkout <pr-branch>
   git pull --rebase proti master
   ```

2. Vyřešit konflikty a přidat / upravit revize

   ```console
   # Buď
   git add .
   git commit -m "chore: resolve conflicts"

   # Or
   git add .
   git commit --amend --no-edit
   ```

3. Přesuňte změny zpět do PR

   ```console
   git push --force původ <pr-branch>
   ```

### Pro nadcházející učební plány a funkce

Když pracujete na funkcích pro naše nadcházející učební osnovy `další*` pobočky, máte možnost vybrat:

1. Ujistěte se, že váš předcházející stream je synchronizován s vašimi lokálními:

   ```console
   git checkout master
   git fetch --all --prune
   git checkout next-python-projects
   git reset --hard upstream/next-python-projects
   ```

2. Vytvořit zálohu

   „Technologie“ ve smyslu všeobecné poznámky k technologii pro „vývoj“, „výrobu“ nebo „užití“ zařízení nebo „softwaru“ uvedených v položkách 3A, 3B nebo 3D. Buď smažte svou místní větev po přijetí zálohy (pokud ji stále lokálně máte):

      ```console
      git checkout <pr-branch-name>

      # příklad:
      # git checkout feat/add-numpy-video-question

      git checkout -b <backup-branch-name>

      # příklad:
      # git checkout -b backup-feat/add-numpy-video-question

      git branch -D <pr-branch-name>
      ```

   „Technologie“ ve smyslu všeobecné poznámky k technologii pro „vývoj“, „výrobu“ nebo „užití“ zařízení nebo „softwaru“ uvedených v položkách 7A, 7B nebo 7C. Nebo jen zálohu vaší pr větve (pokud ji lokálně nemáte):

      ```console
      git checkout -b <backup-branch-name> origin/<pr-branch-name>

      # příklad:
      # git checkout -b backup-feat/add-numpy-video-question origin/feat/add-numpy-video-question
      ```

4. Začněte s čistým slatem:

   ```console
   git checkout -b <pr-branch-name> next-python-projects
   git cherry-pick <commit-hash>
   ```

5. Vyřešit konflikty a vyčistit, nainstalovat testy

   ```console
   npm run clean

   npm ci
   npm run test:curriculum --superblock=<superblock-name>

   # example:

   # npm run test:curriculum --superblock=python-for-everybody

   ```

6. Pokud vše vypadá dobře zpátky do PR

   ```console
   git push --force původ <pr-branch-name>
   ```
