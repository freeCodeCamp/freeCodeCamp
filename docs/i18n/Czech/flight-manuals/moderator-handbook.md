# Oficiální příručka FreeCodeCamp Moderator.

To vám pomůže zvládnout různá místa v naší komunitě, včetně:

- Problémy s GitHub & tahání žádostí
- Fórum, chatovací místnosti, Facebookové skupiny a další online zasedací místa
- Události v osobách, jako jsou studijní skupiny, hackathony a konference

**Všichni moderátoři FreeCodeCamp jsou moderátoři v celé komunitě. To znamená, že věříme, že budete na kterékoliv z těchto míst dohlížet.**

To znamená, že můžete sloužit jako moderátor na všech místech, která vás nejvíce zajímají. Někteří moderátoři jen pomáhají na GitHubu. Jiní jen pomáhají na fóru. Někteří moderátoři jsou aktivní všude.

Rozhodující je, že chceme, abyste byl moderátorem, a investujte svůj vzácný čas do míst, která vás zajímají.

> [!POZNÁMKA] "S velmocí přichází velká odpovědnost." - Strýc Ben

Jako moderátor je temperament důležitější než technické dovednosti.

Poslouchejte. Buďte nápomocní. Nezneužívejte své pravomoci.

freeCodeCamp je inkluzivní komunita a my ji musíme udržet tímto způsobem.

Máme jednotný kodex chování, který řídí celou naši komunitu. Čím méně pravidel, tím snazší budou mít na paměti. Tato pravidla si můžete přečíst a vložit je do paměti [zde](https://code-of-conduct.freecodecamp.org).

# Moderating GitHub

Moderátoři mají možnost zavřít problémy a přijmout nebo zavřít požadavky na natažení.

Moderátoři mají v souvislosti s GitHubem dvě hlavní odpovědnosti:

1. QA'ing a sloučení požadavků na natažení
2. Hodnocení otázek a odpovědi na ně

## Moderování požadavků na natažení

Pull requesty (PR) jsou způsob, jakým přispěvatelé odesílají změny do úložiště freeCodeCamp. Je důležité, abychom na žádost o stažení provedli zabezpečování kvality (QA) dříve, než se rozhodneme, zda je sloučíme, nebo je zavřete.

### Typy požadavků na natažení

1. **Edity instrukcí výzvy** Toto jsou změny textu challenge - popis, instrukce nebo testovací text. Můžete také zkontrolovat toto právo na GitHubu a rozhodnout, zda je sloučit. Musíme být v této věci trochu opatrnější, protože miliony lidí se s tímto textem setkají při práci prostřednictvím osnov FreeCodeCamp . Dává požadavek na natažení text jasněji, aniž by ho dával mnohem déle? Jsou úpravy relevantní a nejsou příliš pedantické? Nezapomeňte, že naším cílem je, aby byly výzvy co nejjasnější a co nejkratší. Nejsou místem pro skryté detaily. Také přispěvatelé se mohou pokusit přidat odkazy na zdroje k výzvám. Tyto požadavky na natažení můžete zavřít a odpovědět na ně takto:

   > Děkujeme za váš požadavek na natažení.
   > 
   > Tento požadavek na natažení uzavírám. Přidejte místo toho odkazy a další podrobnosti do odpovídajícího průvodce výzvy.
   > 
   > Pokud si myslíte, že se mýlím při uzavírání tohoto problému, otevřete jej prosím znovu a přidejte další vysvětlení. Děkuji vám a šťastné kódování.

2. **Editace kódu Výzvy** Toto jsou změny kódu v challenge - Zdroj výzvy, řešení výzev a testovací řetězce. Tyto požadavky na natažení musí být staženy z GitHubu a testovány na vašem místním počítači, aby se zajistilo, že testovací testy budou i nadále vyhovovat současnému řešení, a nový kód nezavádí žádné chyby. Někteří přispěvatelé se mohou pokusit přidat další testy k pokrytí rohových případů u pedanů. Musíme být opatrní, abychom tuto výzvu příliš nekomplikovali. Tyto výzvy a jejich testy by měly být co nejjednodušší a intuitivnější. Vedle výzev algoritmu a náhledu by studenti měli být schopni vyřešit každou výzvu asi do 2 minut.

3. **Codebase mění** Tento kód mění funkčnost platformy freeCodeCamp samotné. Někdy se přispěvatelé snaží provádět změny bez velkého vysvětlení, ale pro změny kódu musíme zajistit, aby byla změna skutečně potřebná. Takže tyto žádosti o stažení by měly odkazovat na existující GitHub, kde se diskutuje o důvodech změny. Pak můžete otevřít požadavek na natažení na vašem počítači a vyzkoušet jej lokálně. Poté co to uděláte, pokud změny vypadají dobře, nesloučte je docela docela docela docela docela dohromady. Můžete komentovat požadavek na natažení a označit @raisedadead, aby se mohl konečně podívat.

### Jak sloučit nebo zavřít požadavky na natažení

Za prvé, když zvolíte požadavek na natažení pro QA, měli byste se k němu přiřadit. Můžete to udělat kliknutím na odkaz "přiřadit sebe" pod částí "pověřenci" v pravém sloupci rozhraní GitHubu.

V závislosti na typu žádosti o natažení se řídí příslušnými výše uvedenými pravidly.

Před sloučením požadavku na natažení se ujistěte, že GitHub má zelené zaškrtávací značky pro všechno. Pokud existuje nějaký X, nejprve je prozkoumejte a zjistěte, jak je nejdříve změnit na zelené zaškrtávací značky.

Někdy dojde ke konfliktu o sloučení. To znamená, že jiná žádost o natažení provedla změnu přesně stejné části stejného souboru. GitHub má nástroj pro řešení těchto fúzních konfliktů přímo na GitHubu. Můžete se pokusit tyto konflikty řešit. Použijte pouze svůj nejlepší úsudek. Změny požadavku na natažení budou nahoře a změny v hlavní větvi budou dole nastaveny. Někdy budou k dispozici nadbytečné informace, které lze odstranit. Než skončíte, nezapomeňte odstranit `<<<<<<` `======`a `>>>>>>` , které Git přidává k označení oblastí konfliktu.

Vypadá to, že požadavek na natažení je připraven ke sloučení (a nevyžaduje schválení od @raisedadead), můžete ho dále sloučit a sloučit. Ujistěte se, že používáte výchozí funkci "Squash and Merge" na GitHubu. Tím se všechny požadavky na natažení převedou do jediného úkolu, díky čemuž je Git historie mnohem snazší přečíst.

Poté byste se měli vyjádřit k žádosti o natažení, poděkování přispěvateli vlastním osobním způsobem.

Pokud autor žádosti o natažení je "poprvé přispěvatel", měli byste jim také poblahopřát k jejich prvnímu sloučenému požadavku na natažení do úložiště. Můžete se podívat na horní pravý roh těla PR, abyste určili prvního přispěvatele.  Zobrazí `přispěvatele na první úvazek` , jak je uvedeno níže:

![Copy_edits_for_<unk> _arrays_article_by_karentobo_%C2%B7_Pull_Request__20615_%C2%B7_freeCodeCamp_freeCodeCamp|690x281](https://i.imgur.com/dTQMjGM.png)

Pokud požadavek na natažení nevypadá jako připravený ke sloučení, můžete zdvořile odpovědět autorovi, co by měli udělat, aby byl připraven. Doufejme, že na svůj požadavek na natažení odpoví a připraví jej.

Často bude požadavek na natažení očividně malé úsilí. Často to můžete okamžitě sdělit, když přispěvatel neobtěžoval zaškrtávací políčka v šabloně Pull Request Template, nebo použil obecný název požadavku na natažení jako "made changes" nebo "Update index. d“.

Existují také situace, kdy se přispěvatel snaží přidat odkaz na své vlastní webové stránky, nebo zahrnout knihovnu, kterou sami vytvořili, nebo má lehkovážnou úpravu, která neslouží nikomu jinému, ale samému.

V obou těchto situacích byste měli pokračovat a uzavřít jejich žádost o natažení a odpovědět na tuto standardní zprávu:

> Děkujeme vám za otevření tohoto požadavku na natažení.
> 
> Toto je standardní zpráva upozorňující vás, že jsme zkontrolovali váš požadavek na natažení a rozhodli jsme se jej nesloučit. Uvítali bychom, že vás budou stahovat budoucí požadavky.
> 
> Děkujeme vám a šťastné kódování.

Pokud potřebujete druhé stanovisko k žádosti o natažení, pokračujte a nechte své připomínky k žádosti o natažení, poté přidejte štítek "diskuze" k požadavku na natažení.

## Moderování GitHub problémů

freeCodeCamp je aktivní open source projekt. Každý den se dostáváme k novým otázkám, které je třeba vyzkoušet a oklamat.

### Typy GitHub problémů

1. **Požadavky na pomoc s kódem**, pro které lidé chybně vytvořili GitHub problémy. Pokud někdo žádá o pomoc, vložte následující zprávu, zavřete problém.

   > Děkuji vám za nahlášení tohoto problému.
   > 
   > Toto je standardní zpráva, která vás upozorňuje, že tento problém se zdá být požadavkem na pomoc. Namísto žádání o pomoc zde prosím klikněte na tlačítko \*\*"Nápověda"\*\* na tlačítko výzvy na bezplatném CodeCamp, která vám pomůže vytvořit otázku v správné části fóra. Dobrovolníci na fóru obvykle reagují na otázky během několika hodin a mohou pomoci zjistit, zda je problém s vaším kódem nebo testem výzvy.
   > 
   > Pokud členové fóra zjistí, že není nic špatného s vaším kódem, můžete požádat o znovuotevření tohoto problému. 
   > 
   > Děkujeme vám a šťastné kódování.

2. **Problémy s chybou nebo vyjasněním** Pokuste se reprodukovat chybu sami, pokud můžete. Pokud ne, požádejte je o kroky k reprodukci chyby a zda mají nějaké snímky obrazovky, videa, nebo další podrobnosti, které vám mohou pomoci s reprodukcí problému. Jakmile můžete problém reprodukovat - nebo alespoň potvrdit, že se jedná o problém legit - označte ho `potvrzený`. Poté

- Pokud je to jednoduchá změna na existující výzvu, označte ji jako `první časovače pouze`, jinak označte jako `pomoc s přáním`. V případě potřeby použijte jiné štítky.
- Pokud je problém významnější, označte jako `chybu`. &nbsp; Pokud existuje nějaká nejasnost, pokud jde o správný průběh jednání v otázce, neváhejte označit @raisedadead na tuto problematiku a pak přidejte značku `s diskuzí`.

3. **Duplicitní problémy** Pokud je úkol stejný jako jiný hlášený úkol, měl by mít přednost předchozí hlášené úkoly. Označit jako `Duplikát`, vložte následující zprávu nahrazující `#XXXXX` číslem problému a pak problém uzavřete.

   > Děkuji vám za nahlášení tohoto problému.
   > 
   > Toto je standardní zpráva, která vás oznamuje, že tento problém se zdá být velmi podobný problému #XXXXX, uzavírám ji jako duplikát.
   > 
   > Pokud si myslíte, že se mýlím při uzavírání tohoto problému, otevřete jej prosím znovu a přidejte další vysvětlení. Děkujeme vám a šťastné kódování.

4. **Opraveno ve stadiu** Některé problémy již byly opraveny ve stadiu, ale nemáte přiřazený problém na GitHubu. Pokud tomu tak je, můžete vložit následující zprávu, zavřít problém a přidat stav `: vyřešený/dodací štítek`:

   > Děkuji vám za nahlášení tohoto problému.
   > 
   > Toto je standardní zpráva, která vás oznamuje, že problém, který jste zde zmínili, se vyskytuje ve výrobě, ale že již byla opravena ve stagnaci. To znamená, že až příště nasměrujeme svou přípravnou větvi na výrobu, měl by být tento problém napraven. Z toho důvodu tento problém uzavírám.
   > 
   > Pokud si myslíte, že se mýlím při uzavírání tohoto problému, otevřete jej prosím znovu a přidejte další vysvětlení. Děkujeme vám a šťastné kódování.

### Uzavírací schel, zastaralé, neaktivní problémy a požadavky na natažení

- Stale Issues or PRS jsou ty, které nevidí žádnou činnost z OP po dobu 21 dnů (3 týdny od poslední činnosti), ale až poté, co moderátor požaduje více informací/změn.  Ty mohou být uzavřeny ve skriptu automatického bota nebo samotnými moderátory.

- Aktivita je definována jako: Komentáře vyžadující aktualizaci PR a triages jako `stav: potřebná aktualizace` popisek atd.

- Pokud OPP požádá o další pomoc, nebo dokonce o dobu, lze výše uvedené uvolnit a revidovat po obdržení odpovědi. V každém případě by měly modifikace využít svého nejlepšího úsudku k vyřešení stavu zbývajících PR.

### Další pokyny pro moderátory na GitHub

Přestože budete mít přístup k úložišti freeCodeCamp, **nikdy byste neměli odesílat kód přímo do repozitářů zdarma CodeCamp**. Veškerý kód by měl vložit kódovací základnu bezplatného CodeCampu ve formě žádosti o natažení z vidlice úložiště.

Také byste nikdy neměli přijímat vlastní PR. Musí být QA jiným moderátorem, stejně jako u jiných PR.

Pokud si všimnete někoho, kdo porušuje [kodex chování](https://code-of-conduct.freecodecamp.org) na GitHub problémy, nebo otevírání požadavků na stažení se škodlivým obsahem nebo kódem, napište na e-mail dev@freecodecamp. rg s odkazem na urážející požadavek na natažení a můžeme zvážit jejich zákaz v GitHubu organizaci freeCodeCamp.

# Moderování fóra

Jako moderátor pomáháte udržet naši komunitu v příjemném místě pro každého, kdo se může naučit a získat pomoc. Budete se zabývat označenými příspěvky a zpracovat spam, offtopy a další nevhodné konverzace.

Všimněte si, že jakmile budete moderátorem na fóru, začnete vidět modré moderátorské nápovědy o členech fóra, jako "toto je poprvé, co [person] zveřejnil - pojďme je přivítat v komunitě! nebo "[person] neodeslal za dlouhou dobu - pojďme je přivítat zpět."

![Modrá textová zpráva, která říká "toto je poprvé, [person] zveřejnila - pojďme je přivítat v komunitě!](https://i.imgur.com/mPmVgzK.png)

Toto jsou příležitosti, jak je přivítat a donutit je k tomu, aby se cítili zvláštní. Nikdy nevíte, který člověk, který je okrajově zapojen, se může stát naším dalším superpomocníkem, který pomůže mnoha dalším lidem v jejich cestě. I nejmenší laskavost může vyvolat kaskádu dobrých činů.

### Mazání příspěvků na fóru

Moderátoři fóra mají možnost odstranit příspěvky uživatele. Měli byste to udělat pouze pro následující instance:

1. Někdo zveřejnil pornografický nebo graficky násilný obraz.
2. Někdo zveřejnil odkaz nebo kód, který je svou povahou škodlivý a mohl by poškodit jiné kamery, kteří na něj kliknou.
3. Někdo zaplavil vlákno se spoustou nevyžádaných zpráv.

### Řešení se spamem

Pro první spam post uživatele jim pošlete zprávu vysvětlující problém a podle potřeby odstraňte odkaz nebo příspěvek. Ponechte na profilu uživatele poznámku vysvětlující opatření, která jste provedli. Pokud problém přetrvává, pak postupujte podle výše uvedeného procesu. V tichosti zablokovat uživateli publikování (pomocí možnosti ticha na panelu Správce uživatelů), poté poslat varování s kodexem chování. Zaškrtněte políčko v soukromé zprávě označující, že vaše zpráva je "formální varování".

Můžete klást otázky a nahlásit incidenty v [fóru](https://forum.freecodecamp.com/c/staff).

### Řešení konverzací mimo téma

Příspěvky nebo témata, která se zdají být na nesprávném místě, mohou být přeřazeny do nové kategorie nebo přejmenovány na cokoli, co by bylo vhodné.

Ve výjimečných případech může být vhodné, aby moderátor rozeslal diskusi o více vláknech.

Pokud máte nějaké problémy nebo otázky, proveďte příspěvek se svými akcemi v kategorii zaměstnanců, a označte jiného moderátora, pokud chcete, aby přezkoumali své moderátorské akce.

### Uživatelé nezletilých

Naše smluvní podmínky vyžadují, aby uživatelé bezplatného CodeCamp měli alespoň 13 let. V případě, že uživatel zjistí, že je mladší 13 let, pošlete jim níže uvedenou zprávu a smažte jejich účet na fóru (pokud není smazání dostupné, pozastavení účtu je dostatečné). Potom napište e-mail [Quincy](https://forum.freecodecamp.org/u/QuincyLarson) (quincy@freecodecamp.org) nebo [Mrugesh](https://forum.freecodecamp.org/u/raisedadead) (mrugesh@freecodecamp.org) pro odstranění uživatelova účtu zdarmaCodeCamp

```markdown
PŘEDMĚT: Uživatelé mladší 13 let nesmějí používat fórum pro smluvní podmínky

Upozornili na to, že jste mladší 13 let. Za [freeCodeCamp podmínky služby](https://www.freecodecamp.org/news/terms-of-service), musíte být alespoň 13 let, abyste mohli používat tuto stránku nebo fórum. Budeme odstraňovat jak váš účet zdarmaCodeCamp tak váš účet na fóru. Toto omezení nás drží v souladu s právními předpisy Spojených států.

Připojte se prosím znovu, jakmile dosáhnete alespoň 13 let věku.

Děkuji vám za pochopení.
```

# Moderování Facebooku

Pokud uvidíte cokoliv, co se zdá být porušením našeho [Kodexu chování](https://code-of-conduct.freecodecamp.org/), měli byste jej okamžitě odstranit.

Někdy lidé publikují věci, o nichž si myslí, že jsou zábavné. Neuvědomují si, že to, co řekli nebo co sdíleli, by bylo možné interpretovat jako urážlivé. V těchto případech by jejich funkce měla být odstraněna, ale osoba, která ji vyslala, nemusí být nutně zakázána. Doufejme, že tím, že své místo vymažou, pochopí, že to, co vyslali, je nevhodné.

Jenže je-li to nehorázný přestupek, který nelze přiměřeně přičítat kulturním rozdílům nebo nedorozumění angličtině, pak byste měli důkladně zvážit blokování člena z Facebookové skupiny.

# Moderování Discordu

Zde je, jak moderátoři řeší porušování našeho [kodexu chování](https://code-of-conduct.freecodecamp.org/) na Discordu:

1. **Ujistěte se, že mělo být porušeno kodex chování.** Ne všechna porušení kodexu chování byla jako taková zamýšlena. Nový kamerátor by mohl odeslat velké množství kódu pro pomoc, nevědí, že to může být považováno za spamming. V těchto případech je můžete požádat o vložení jejich kódu se službami, jako jsou Codepen nebo Pastebin.

2. **Pokud kamper jasně porušuje kodex chování, moderátor postupuje takto:**

- Pozastavit útočného kamaráda, ale nevarovat ani hrozit. Namísto toho jim v tichosti dáte pozastavenou roli na Discordu, pak jim pošlete následující zprávu:

```
Toto je standardní zpráva oznamující, že jsem tě musel dočasně pozastavit od rozhovorů na serveru Discord freeCodeCamp.

Jsem moderátor jednající jménem naší komunity s otevřeným zdrojovým kódem. Mohu zvážit odstranění vašeho pozastavení, ale nejdříve musíte udělat tři následující kroky:

1. Přečtěte si náš kodex chování: https://code-of-conduct.freecodecamp.org/
2. Napište mi zpět potvrzení, že jste ji dokončili.
3. Vysvětlete mi, proč si myslíte, že vás pozastavil a proč bych měl vaše pozastavení zrušit.
```

- Nahlaste krátké shrnutí události a jak na ni reagovali v #admin kanálu. Zde je příklad toho, jak by takové shrnutí mohlo vypadat:

```
Pozastaveno: _@username_
Důvod(y): _Spamming, trolling_
Událost: _Jedno nebo více odkazů na urážející zprávu(y)_
CoC: _Sent_
```

- Zpráva o odstranění pozastavení by měla vypadat takto:

```
Odebral jsem pozastavení z ` @username `. Poslal jsem jim kodex chování. Právě dnes si uvědomili, že byli pozastaveni a omluveni za to, co udělali.
```

- Na základě odpovědi pachatelů se moderátor rozhodne, zda odebere pozastavení z útočného kamera. Pokud se zdají být uctivé a omluvitelné, moderátor může pozastavení odstranit. Moderátoři budou v rámci politiky během tohoto procesu zdvořilí, ať už se urážející kamera chová jakkoliv. Pokud nejsou respektováni nebo ochotni CoC přijmout, mělo by po pozastavení následovat zákaz na serveru Discord. Použijte stejný souhrn jako výše, ale nahraďte "Pozastaveno:" "Zablokováno:".

3. **Jak zakázat a/nebo odbanovat**

- Chcete-li někomu zakázat, klikněte pravým tlačítkem myši na jeho uživatelské jméno/profilový obrázek a vyberte "Zabanovat" <username>". Budete mít možnost odstranit jejich předchozí zprávy - vyberte "Neodstraňovat niko", zprávy by měly zůstat zachovány jako historický záznam.
- Pokud se rozhodnete někoho zakázat, znamená to, že nejsou ochotni dodržovat náš kodex chování. Proto by k odblokování kamery mělo dojít jen zřídka. Pokud je to potřeba, můžete tak učinit kliknutím na název serveru, zvolením "Nastavení serveru", výběrem "Bans", výběrem uživatele, kterého chcete odbanovat, a kliknutím na tlačítko "Zrušit ban".

Discord Bany jsou globální - nelze zablokovat uživatele z konkrétního kanálu, pouze z celého serveru.

4. **Odstranění zpráv** moderátoři mají možnost odstranit zprávy na Discordu. Tuto schopnost by měli vykonávat pouze ve čtyřech velmi specifických situacích:

- Někdo zveřejnil pornografický nebo graficky násilný obraz.
- Někdo zveřejnil odkaz nebo kód, který je svou povahou škodlivý a mohl by poškodit jiné kamery, kteří na něj kliknou.
- Někdo zaplavil chat tak extrémním způsobem (obvykle s pomocí robotů), že je chatování zcela nepoužitelné.
- Někdo zveřejnil reklamu a / nebo samopropagující zprávu / obrázek (sociální média).

Ve všech ostatních situacích - a to i v situacích, kdy je kodex chování porušován - by moderátoři neměli tuto zprávu smazat, protože se jedná o významný historický záznam. Když odstraníte zprávu, ujistěte se, že jste si ji nejdříve pořídili! Snímek obrazovky lze přihlásit do kanálu #mod-log, ale pokud jde o #activity-log, stačí říci, že důkazy byly "odstraněny z důvodu citlivého obsahu". Poznámka: Pokud zpráva obsahuje materiál, který by byl nezákonný pro pořízení snímku obrazovky, místo toho zkopírujte odkaz na zprávu - poskytněte odkaz na zprávu @raisedadead pro přeposlání do týmu důvěry a bezpečnosti Discordu.

5. **Nepoužívejte @everyone nebo @here** Nepoužívejte @everyone nebo @here za žádných okolností! Každá osoba v této chatovací místnosti obdrží oznámení. V některých případech desetitisíce lidí. Místo toho chcete-li, aby lidé viděli oznámení, můžete ho připnout k kanálu, aby ho všichni mohli přečíst.

6. **Nevyhrožujte zákazem nebo pozastavením** Pokud kamera porušuje kodex chování, nehrozit jejich zákazem nebo pozastavením a nikdy je na veřejnosti nevarovat. Namísto toho s nimi soukromě, nebo jim pošlete DM a vystavte pozastavení (podle výše uvedeného protokolu). Nikdo jiný v tomto kanálu nepotřebuje vědět, že jste zakázán/pozastavil osobu - kamery mohou zobrazit shrnutí v #aktivita-log kanálu, pokud chtějí držet krok s těmito informacemi. Pokud bylo porušení zjevně nezamýšleno a neopravňuje k pozastavení nebo soukromé konverzaci, aby urážlivý kamera věděl o svých / svých akcích, aniž by přišel jako varování. Například:

- Kampaň publikuje zeď kódu pro žádost o pomoc

  Moderátor: @username použijte prosím Codepen nebo Pastebin při vkládání velkých množství kódu.

- Nebo pokud opravdu musíte vysvětlit, proč:

  Moderátor: @username použijte prosím Codepen nebo Pastebin při vkládání velkého množství kódu, protože narušuje chat pro každého a mohl by být považován za spamování podle našeho kodexu chování.

- V případě mírného a neúmyslného porušení kodexu chování

  Moderátor: Toto je přátelská připomínka pro každého, aby dodržoval kodex chování: https://code-of-conduct.freecodecamp.org/

7. **Nedělejte se stát moderátorem** Nevidějte se jako nad komunitou. Jste komunita. Komunita vám věřila, že vám pomůže chránit něco vzácného, co všichni sdílíme - _vítající_ místo pro nové vývojáře. Pokud se budete chtít stát moderátorem, lidé se mohou cítit znepokojeni kolem vás, stejným způsobem, jakým se lidé mohou cítit znepokojeni kolem policisty, i když nedělají nic špatného. To je jen lidská povaha.

8. **Neodporujte ostatním moderátorům** Pokud nesouhlasíte s akcí moderátora, mluví s nimi v soukromém nebo ho vychatu na #mod-chatu. Nikdy zákaz nenahrazovat a nikdy neodporovat ostatním moderátorům/moderátorům veřejnosti. Místo toho se v mod-chatu diskutuje s chladnou hlavou a umírněnce přesvědčuje, že by sami měli zrušit zákaz nebo změnit svůj názor. Nezapomeňte: jsme všichni ve stejném týmu. Chceme důstojně plnit úlohu moderátorů a vystupovat jednotně.

9. **Mluvte s ostatními moderátory** Máme místo pouze pro moderátory. Použij ho! Pokud se vám nelíbí, jak zvládnout určitou situaci, požádejte ostatní moderátory o pomoc. Pokud si myslíte, že by se o něčem mělo diskutovat, udělejte to. Jste součástí týmu a my si ceníme vstupu každého člena týmu! I když naprosto nesouhlasíte s něčím v těchto pokynech nebo s kodexem chování!

10. **Dočasně neaktivní** Pokud nebudete kvůli dovolené aktivní jako moderátor, nemoc nebo jiný důvod se ujistěte, že ostatní vědí v kanálu #mod-chatu. To je tak, že víme, zda se můžeme spolehnout na tebe pravidelně na serveru, nebo ne.

# Jak se stát moderátorem

Pokud pomáháte lidem v komunitě důsledně v průběhu času, náš moderátorský tým si nakonec všimne, a jeden z nich vás zmíní jako možného moderátora [našeho personálu](https://forum.freecodecamp.org/g/Team). Neexistují žádné zkratky, které by se mohly stát moderátorem.

Pokud jste schváleni, přidáme vás do našich moderátorových týmů na [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [fóru](https://forum.freecodecamp.org/g/moderators)atd.

> [!POZNÁMKA] > **Pro GitHub:** Po přijetí jako moderátor obdržíte pozvánku na repozitář Github. Abyste mohli přijmout pozvánku, musíte přejít na [bezplatného CodeCamp GitHub organizace](https://github.com/orgs/freeCodeCamp/invitation). Toto je vyžadováno, abychom vám mohli dát přístup k zápisu do některých našich repozitářů.

# Jak odcházíme do důchodu neaktivní moderátoři

Vezměte prosím na vědomí, že budeme často odstraňovat mody, které považujeme za neaktivní. Až tak učiníme, pošleme následující zprávu:

> Toto je standardní zpráva, která vás o tom informuje: protože se zdá, že jste v poslední době nebyl aktivním moderátorem, odstraňujeme vás z našeho moderátorského týmu. Velice si vážíme vaší pomoci v minulosti.

> Pokud si myslíte, že jsme to udělali omylem, nebo jakmile jste připraveni se vrátit a přispět více, stačí odpovědět na tuto zprávu, která mi dá vědět.

# Jak funguje naše přispěvatelská místnost

Kdokoli je vítán v [přispěvatelské místnosti na našem Discordu](https://discord.gg/KVUmVXA). Je to určená chatovací místnost pro moderátory a další kamery, kteří přispívají do naší komunity všemi způsoby, včetně prostřednictvím skupin studií.

Předpokládáme, že přispěvatelé si v této místnosti přečtou cokoli, co je přímo zmiňuje s `@username`. Všechno ostatní je nepovinné. Ale neváhejte si přečíst cokoliv, co tam někdo příspěvky a komunikovat.

# Zacházení s advokáty

K vám mohou přistupovat organizace, které chtějí nějakým způsobem partnera nebo spoluznačky s freeCodeCamp. Jakmile si uvědomíte, že to je to, co jsou, přestaňte s nimi mluvit a řekněte jim, aby zaslali e-mail quincy@freecodecamp.org. Takovýto návrh dostává vždy a je v nejlepším postavení, aby mohl posoudit, zda takový vztah bude pro naši komunitu cenný (a jen zřídka).

# Řešení (duševních) zdravotních šetření

Můžete se setkat se situacemi, kdy uživatelé hledají lékařskou radu nebo se zabývají otázkami duševního zdraví a hledají podporu. Pokud jde o politiku, neměli byste o těchto záležitostech hovořit soukromě. Pokud by se situace v určitém okamžiku odrazila zpět na fCC, chceme, aby byla konverzace zaznamenána. Dejte jasně najevo, že nejsme lékaři a že doporučujete uživateli, aby našel profesionální pomoc. Jak obtížné, jak to může někdy být, vyhněte se poskytovat tipy nebo rady jiné než ukazovat uživatele ve směru profesionální pomoci!

Pokud se tak stane na Discordu: Pozastavte uživatele. Tím nechci je trestat! Pozastavení uživatele vytvoří soukromý kanál, který je přístupný pouze uživateli a týmu. Z toho bude mít prospěch jak uživatel, tak i fCC několika způsoby:

- Uživatel má zaručeno nějaké soukromí
- Veřejný chat již není přerušen
- Další členové týmu se mohou stavět, pokud byste nebyli spokojeni se situací sami

> [!POZNÁMKA] Pozastavení uživatele automaticky dává zprávu o čtení našeho kodexu chování. Ujistěte se, že jste uživatele pozastavili, abyste jim poskytli nějaké soukromí a že nejsou potrestáni. To je velmi důležité! Naprosto se chceme vyhnout tomu, abychom uživatelům dali představu, že jsou trestáni za oslovení a získání pomoci!

Pokud se domníváte, že se uživatel může připojit k komunitě, klikněte pravým tlačítkem myši na soukromý kanál a zkopírujte ID. Vložte následující zprávu do #mod-log:

> Referenční lékařská poradenství: <channel ID> <username>

Poté můžete odebrat pozastavení uživatele jako obvykle.

Pomocné URL:

http://www.suicide.org/international-suicide-hotlines.html

# Poznámka ke svobodnému projevu

Někdy budou lidé hájit něco urážlivého či zápalného, co řekli jako ,,svobodný projev".

Tento XKCD komic dokonale shrnuje myšlenky většiny komunit na svobodu projevu. Pokud tedy někdo obhajuje něco, co říká jako ,,svobodný projev", má se k tomu svobodný pocit, že jim to posílá.

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

Děkujeme, že jste si to přečetli, a děkuji za pomoc vývojářské komunitě!
