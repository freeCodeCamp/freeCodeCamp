---
title: What is Minecraft Forge?
localeTitle: Что такое Minecraft Forge?
---
Если вы читаете эту статью, вы, вероятно, уже знаете Minecraft. Мы используем Forge для манипулирования игрой Minecraft, чтобы заставить ее делать то, что хотим. Это может быть что угодно: от новых крутых существ до целых новых систем в игре.

Кузница является modding api. Minecraft Forge (или Forge for short) - это слой между нашим кодом и самим Minecraft. Мы не можем напрямую просить Minecraft добавлять предметы и делать специальные классные вещи. Вот почему нам нужен API (интерфейс прикладного программирования) для обработки нашей логики и принятия Minecraft.

## Звучит круто! Как мне начать?

*   Вам понадобится JDK (набор для разработки Java), который представляет собой набор библиотек, инструментов и среды выполнения для создания программ Java и их запуска.
*   Аккаунт Minecraft, который можно купить с официального сайта. (Https://minecraft.net/en-us/store/)
*   Для разработки Minecraft рекомендуется IDE (Eclipe или IntelliJ)

После установки / приобретения этих программных продуктов загрузите нужную версию Forge по адресу https://files.minecraftforge.net/ ( _СОВЕТ._ Наведите указатель мыши на информационную кнопку и нажмите прямую загрузку, чтобы избежать вируса «Адлета»!). Как только вы загрузите этот ZIP-адрес, вы сможете его распаковать. Сделайте так и cd (команда cmd) в каталог со всеми файлами Forge. Запустить `gradlew setupDecompWorkspace`

Затем вы выбираете IDE (интегрированную среду разработки). Затмение? `gradlew eclipse` IntelliJ? Импортируйте файл build.gradle в настройку IntelliJ!

## Ладно, что теперь? Как добавить новые новинки? (Базовая настройка мод)

Придержи лошадей. Там гораздо больше. Вам придется текстурировать элемент, конечно, добавить код и многое другое! В этой статье мы рассмотрим только простой пример кода, который я также использую для своих модов. Вот!

\` @ Mod.EventBusSubscriber @Mod (modid = _ID_ Version.MOD _, name = Version.MOD_ NAME, версия = Version.VERSION) открытый класс TheMod {
```
public static ModMetadata metadata; 
 
 public static File baseDir; 
 public static Configuration config; 
 
 @SidedProxy(clientSide="com.ciphry.client.ClientProxy", serverSide="com.ciphry.common.CommonProxy") 
 public static CommonProxy proxy; 
 
 @Mod.EventHandler 
 public void preInit(FMLPreInitializationEvent event) { 
    proxy.preInit(event); 
 
    baseDir = new File(event.getModConfigurationDirectory(), MOD_ID); 
    config = new Configuration(event.getSuggestedConfigurationFile()); 
 
    if (!baseDir.exists()) 
        baseDir.mkdir(); 
 } 
 
 @Mod.EventHandler 
 public void init(FMLInitializationEvent event) { 
    proxy.init(event); 
 
 } 
 
 @Mod.EventHandler 
 public void postInit(FMLPostInitializationEvent event) { 
    proxy.postInit(event); 
 } 
```

} \`

Используйте этот код, как вам угодно, убедитесь, что вы редактируете, например, строки прокси и многое другое! Это должно дать вам общее представление о том, как выглядит основной класс mod.