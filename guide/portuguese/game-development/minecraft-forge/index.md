---
title: What is Minecraft Forge?
localeTitle: O que é o Minecraft Forge?
---
Se você está lendo este artigo, provavelmente já conhece o Minecraft. Usamos o Forge para manipular o jogo Minecraft para fazer o que queremos. Isso pode ser qualquer coisa, desde novas criaturas legais até novos sistemas inteiros no jogo.

Forge é uma API modding. O Minecraft Forge (ou Forge for short) é uma camada entre o nosso código e o próprio Minecraft. Não podemos pedir diretamente ao Minecraft para adicionar itens e fazer coisas legais especiais. É por isso que precisamos de uma API (interface de programação de aplicativos) para lidar com nossa lógica e fazer com que o Minecraft a reconheça.

## Parece legal! Como eu começo?

*   Você precisará do JDK (Java development kit), que é um conjunto de bibliotecas, ferramentas e o ambiente de tempo de execução para criar programas Java e executá-los.
*   Uma conta Minecraft que pode ser comprada em seu site oficial. (https://minecraft.net/pt-br/store/)
*   Um IDE (Eclipe ou IntelliJ são recomendados para desenvolvimento de Minecraft)

Depois de instalar / adquirir estes softwares, baixe a versão desejada do Forge em https://files.minecraftforge.net/ ( _DICA:_ Passe o mouse sobre o botão de informações e pressione o download direto para evitar um vírus da Adfly!) Depois de baixar este ZIP, você poderá descompactá-lo. Faça isso e cd (comando cmd) no diretório com todos os arquivos do Forge. Executar `gradlew setupDecompWorkspace`

O próximo passo é escolher o seu IDE (ambiente de desenvolvimento integrado). Eclipse? `gradlew eclipse` IntelliJ? Importe o arquivo build.gradle na sua configuração do IntelliJ!

## Ok, agora o que? Como adiciono novos itens extravagantes? (Configuração básica do mod)

Segure seus cavalos. Há muito mais nisso. Você terá que texturizar um item, claro, adicionar código e muito mais! Neste artigo, vamos ver apenas alguns códigos de exemplo simples que eu também uso para meus próprios mods. Aqui está!

\` @ Mod.EventBusSubscriber @Mod (modid = Version.MOD _ID, nome = Version.MOD_ NAME, version = Version.VERSION) classe pública TheMod {
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

Use este código como quiser, certifique-se de editar, por exemplo, as strings de proxy e mais! Isso deve fornecer uma visão geral básica de como é uma classe básica de mod.