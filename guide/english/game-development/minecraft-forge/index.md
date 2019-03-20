---
title: What is Minecraft Forge?
---

If you are reading this article you probably already know Minecraft. We use Forge to manipulate the game Minecraft to make it do what we want. This could be anything, ranging from new cool creatures to entire new systems in the game. 

Forge is a modding api. Minecraft Forge (or Forge for short) is a layer between our code and Minecraft itself. We cannot directly ask Minecraft to add items and do special cool things. That's why we need an API (application programming interface) to handle our logic and make Minecraft recognise it.

## Sounds cool! How do I get started?

* You'll need the JDK (Java development kit) which is a set of libraries, tools and the runtime environment to make Java programs and run them.
* A Minecraft account which can be bought from their official website. (https://minecraft.net/en-us/store/)
* An IDE (Eclipe or IntelliJ are recommended for Minecraft development)

After installing/acquiring these pieces of software, download your desired Forge version at https://files.minecraftforge.net/ (*TIP:* Hover over the information button and press direct download to avoid an Adfly virus!)
Once you have downloaded this ZIP you'll be able to unzip it. Do so and cd (cmd command) into the directory with all of the Forge files. 
Run `gradlew setupDecompWorkspace`

Next up is picking your IDE (integrated development environment). Eclipse? `gradlew eclipse` IntelliJ? Import the build.gradle file in your IntelliJ setup!

## Okay now what? How do I add fancy new items? (Basic mod setup)

Hold your horses. There's much more to it. You'll have to texture an item of course, add code and so much more! In this article we'll only look at some simple sample code which I also use for my own mods. Here it is!

```
@Mod.EventBusSubscriber
@Mod(modid = Version.MOD_ID, name = Version.MOD_NAME, version = Version.VERSION)
public class TheMod {

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
}
```

Use this code as you please, make sure you edit for instance the proxy strings and more! This should give you a basic overview of what a basic mod class looks like.
