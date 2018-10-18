---
title: What is Minecraft Forge?
localeTitle: ¿Qué es Minecraft Forge?
---
Si estás leyendo este artículo, probablemente ya conozcas Minecraft. Usamos Forge para manipular el juego Minecraft para que haga lo que queremos. Esto podría ser cualquier cosa, desde nuevas criaturas geniales hasta sistemas completamente nuevos en el juego.

Forge es una api modding. Minecraft Forge (o Forge para abreviar) es una capa entre nuestro código y el propio Minecraft. No podemos pedir directamente a Minecraft que agregue artículos y haga cosas geniales especiales. Es por eso que necesitamos una API (interfaz de programación de aplicaciones) para manejar nuestra lógica y hacer que Minecraft lo reconozca.

## ¡Suena bien! ¿Cómo empiezo?

*   Necesitará el JDK (kit de desarrollo de Java), que es un conjunto de bibliotecas, herramientas y el entorno de ejecución para hacer que los programas de Java se ejecuten.
*   Una cuenta de Minecraft que se puede comprar en su sitio web oficial. (https://minecraft.net/en-us/store/)
*   Un IDE (Eclipe o IntelliJ se recomiendan para el desarrollo de Minecraft)

Después de instalar / adquirir estas piezas de software, descargue la versión Forge que desee en https://files.minecraftforge.net/ ( _CONSEJO:_ desplace el mouse sobre el botón de información y presione descargar directamente para evitar un virus Adfly). Una vez que hayas descargado este ZIP podrás descomprimirlo. Hazlo y cd (comando cmd) en el directorio con todos los archivos de Forge. Ejecutar `gradlew setupDecompWorkspace`

Lo siguiente es elegir su IDE (entorno de desarrollo integrado). ¿Eclipse? `gradlew eclipse` IntelliJ? ¡Importe el archivo build.gradle en su configuración de IntelliJ!

## Bien. ¿Ahora que? ¿Cómo agrego nuevos artículos de lujo? (Configuración de mod básica)

Calma. Hay mucho más que eso. Tendrás que texturizar un artículo, por supuesto, agregar código y mucho más. En este artículo solo veremos un código de ejemplo simple que también uso para mis propios mods. ¡Aquí está!

\` @ Mod.EventBusSubscriber @Mod (modid = Version.MOD _ID, nombre = Version.MOD_ NAME, version = Version.VERSION) clase pública TheMod {
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

Use este código como le plazca, ¡asegúrese de editar, por ejemplo, las cadenas de proxy y más! Esto debería darle una descripción básica de cómo se ve una clase mod básica.
