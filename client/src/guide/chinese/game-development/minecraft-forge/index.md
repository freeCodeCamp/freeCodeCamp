---
title: What is Minecraft Forge?
localeTitle: 什么是Minecraft Forge？
---
如果您正在阅读本文，您可能已经了解了Minecraft。我们使用Forge来操纵Minecraft游戏，让它做我们想要的。这可以是任何东西，从新的酷生物到游戏中的全新系统。

Forge是一个modding api。 Minecraft Forge（或简称Forge）是我们的代码和Minecraft之间的一层。我们不能直接要求Minecraft添加物品并做一些特别酷的事情。这就是为什么我们需要一个API（应用程序编程接口）来处理我们的逻辑并让Minecraft识别它。

## 听起来很酷！我该如何开始？

*   您将需要JDK（Java开发工具包），它是一组库，工具和运行时环境，用于制作Java程序并运行它们。
*   一个Minecraft帐户，可以从他们的官方网站购买。 （https://minecraft.net/en-us/store/）
*   IDE（推荐使用Eclipe或IntelliJ进行Minecraft开发）

安装/获取这些软件之后，请通过https://files.minecraftforge.net/下载所需的Forge版本（ _提示：将_鼠标悬停在信息按钮上并按直接下载以避免Adfly病毒！） 下载此ZIP后，您将能够解压缩它。执行此操作并将cd（cmd命令）放入包含所有Forge文件的目录中。 运行`gradlew setupDecompWorkspace`

接下来是挑选您的IDE（集成开发环境）。日食？ `gradlew eclipse` IntelliJ？在IntelliJ设置中导入build.gradle文件！

## 好的，现在呢？如何添加花哨的新商品？ （基本mod设置）

稍安毋躁。还有更多内容。你必须纹理一个项目，添加代码等等！在本文中，我们将只看一些简单的示例代码，我也将其用于自己的mod。这里是！

\` @ Mod.EventBusSubscriber @Mod（modid = Version.MOD _ID，name = Version.MOD_ NAME，version = Version.VERSION） 公共课TheMod {
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

请根据需要使用此代码，确保编辑代理字符串等等！这应该为您提供基本mod类的基本概述。