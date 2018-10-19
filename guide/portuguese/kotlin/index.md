---
title: Kotlin
localeTitle: Kotlin
---
**O que é o Kotlin?**

[Kotlin](https://kotlinlang.org/) é uma linguagem de programação desenvolvida pela [Jetbrains](https://www.jetbrains.com) , a empresa por trás de alguns IDEs mais populares do mundo, como IntelliJ e Pycharm.

Ele serve como um substituto para Java e é executado na JVM. Está em desenvolvimento há quase 6 anos e atingiu 1.0 há apenas um ano.

A comunidade de desenvolvedores adotou o Kotlin de tal forma que o Google anunciou o suporte de primeira classe para o idioma do Android Development no [Google I / O 2017](https://blog.jetbrains.com/kotlin/2017/05/kotlin-on-android-now-official/) .

## Versão

Como desta escrita, a última versão estável do Kotlin passa a ser a [versão 1.2.71](https://blog.jetbrains.com/kotlin/2018/09/kotlin-1-2-70-is-out/)

## Instalação

Antes de prosseguir com as instruções de instalação do Kotlin, é necessário certificar-se de que você configurou o **JDK (Java Development Kit)** configurado em seu sistema.

Se você não tiver o JDK instalado em seu computador, vá para a **seção Instalação** [neste link para saber](https://guide.freecodecamp.org/java) como configurá-lo.

O Kotlin funciona com o **JDK 1.6+,** portanto, certifique-se de instalar a versão correta. Quando terminar de configurar o JDK, continue com as etapas a seguir.

*   \## IntelliJ IDEA A maneira mais rápida de usar o Kotlin em suas máquinas é usá-lo junto com o **IntelliJ IDEA** . Este é o IDE recomendado para o Kotlin por causa do suporte de ferramentas fornecido pela Jetbrains. Você pode pegar o [Community Edition](http://www.jetbrains.com/idea/download/index.html) do IntelliJ da [JetBrains](https://www.jetbrains.com) .

Uma vez que você tenha instalado o IntelliJ, você pode basicamente iniciar seu primeiro projeto no Kotlin sem nenhuma configuração adicional.

Crie um **novo projeto** e certifique-se de selecionar o módulo Java. Selecione a caixa de seleção Kotlin nessa tela

![nova tela de projeto](https://kotlinlang.org/assets/images/tutorials/getting-started/new_project_step1.png)

Dê um nome ao seu projeto e clique em Concluir.

![Nome do Projeto](https://kotlinlang.org/assets/images/tutorials/getting-started/project_name.png)

Agora você será levado ao editor principal, onde verá seus arquivos de projeto organizados da seguinte maneira.

![estrutura do projeto](https://kotlinlang.org/assets/images/tutorials/getting-started/folders.png)

Para verificar sua instalação, crie um novo arquivo Kotlin na pasta **src** e nomeie-o como **aplicativo** (ou qualquer outra coisa que lhe agrade)

![estrutura do projeto](https://kotlinlang.org/assets/images/tutorials/getting-started/new_file.png)

Depois de criar o arquivo, digite o seguinte código Hello World Cremonial. Não se preocupe se não fizer sentido imediatamente, será tratado em detalhes mais adiante no guia.

\`\` \` diversão principal (args: Array ) { println ("Hello World!") }
```
![project structure ](https://kotlinlang.org/assets/images/tutorials/getting-started/hello_world.png) 
 
 You can now run this program by either clicking on the Kotlin icon on the gutter (left side of your editor with line numbers) 
 
 ![hello world ](https://kotlinlang.org/assets/images/tutorials/getting-started/run_default.png) 
 
 If everything goes fine, you should see the message Hello World! in your Run window as shown below 
 
 ![run window ](https://kotlinlang.org/assets/images/tutorials/getting-started/run_window.png) 
 
 
 
 * ## Eclipse 
 
 While IntelliJ is the recommended IDE for developing with Kotlin, it is definitely not the only option out there. **Eclipse** happens to be another popular IDE of choice among Java developers and Kotlin is supported by Eclipse as well. 
 
 After setting up the **JDK** on your system, follow the instructions below. 
 
 Download <a href='https://www.eclipse.org/downloads/'>**Eclipse Neon** </a>for your operating system and once you have successfully installed it on your system, download the **Kotlin Plugin** for Eclipse from the <a href='http://marketplace.eclipse.org/content/kotlin-plugin-eclipse'>**Eclipse Marketplace**</a>. 
 
 ![eclipse marketplace ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/marketplace.png) 
 
 ***NOTE: You can also do the same by going into Help -> Eclipse Marketplace and then search for Kotlin Plugin*** 
 
 Once, the plugin is installed you are pretty much done but it would be a good idea to take the IDE for a spin with a quick Hello World sample. 
 
 Create a new Kotlin Project by clicking on File -> New -> Kotlin Project 
 
 ![new kotlin project ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/new-project.png) 
 
 An empty project will be created with a directory structure quite similar to a Java project. It would look something like this 
 
 ![empty kotlin project ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/empty-project.png) 
 
 Go ahead and create a new Kotlin file in the **src** folder 
 
 Once that is done go ahead and type out the following code. Don't worry if it does not make sense right now, it will be covered later in the guide. 
```

diversão principal (args: Array ) { println ("Hello World!") }
```
![eclipse hello world ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/hello-world.png) 
 
 Now that you are done typing out the Hello World code, go ahead and run it. To run the file, right click anywhere inside the editor and click on ***Run As -> Kotlin Application*** 
 
 
 ![eclipse run app](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/run-as.png) 
 
 If all goes well, the console window would open to show you the output. 
 
 ![eclipse run app](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/output.png) 
 
 * ## Using the standalone compiler on the terminal 
 If you are someone who prefers doing things in a more manual way and do not want to tie yourself down to an editor/IDE you might wanna use the Kotlin compiler. 
 
 ### Downloading the compiler 
 
 With every release of Kotlin, Jetbrains ship a standalone compiler which can be downloaded from the <a href='https://github.com/JetBrains/kotlin/releases/tag/v1.1.51'>GitHub releases</a>. Version 1.1.51 happens to be the latest at the time of this writing. 
 
 
 </br> 
 
 **Manual Installation** 
 
 Once you have downloaded the compiler you need to unzip it and proceed with the standard installation using the installation wizard. Adding the **bin** directory to the system path is an optional step. It contains the scripts that are necessary to compile and run Kotlin on Windows, Linux and macOS. 
 
 </br> 
 
 **Installation via Homebrew** 
 
 You can install the compiler on macOS using <a href='http://brew.sh/'>Homebrew </a>which is a package manager for macOS. Launch the Terminal app and issue the following commands 
```

$ brew update $ brew install kotlin
```
**Installation via SDKMAN!** 
 
 Another simple way of installing the Kotlin compiler on macOS, Linux, Cygwin, FreeBSD and Solaris is by using <a href='http://sdkman.io/'>SDKMAN!</a>. Launch the terminal and issue the following commands 
```

$ curl -s https://get.sdkman.io | bash\`\`\`

Siga as instruções na tela e uma vez SDKMAN! é questão de configuração o comando follwoing dentro do terminal

`$ sdk install kotlin`

Como com todas as opções de instalação anteriores, seria uma boa ideia testar a instalação.

Abra um editor de texto de sua escolha e escreva um programa Kotlin básico abaixo
```
fun main(args: Array<String>) { 
    println("Hello, World!") 
 } 
```

Salve este arquivo com uma extensão **.kt** . Agora você está pronto para compilá-lo e ver os resultados. Para fazer isso, emita o seguinte comando

`$ kotlinc hello.kt -include-runtime -d hello.jar`

a opção `-d` informa ao compilador o que você deseja que a saída seja chamada. A opção `-include-runtime` torna o arquivo .jar independente e executável incluindo a biblioteca de tempo de execução do Kotlin.

Se não houver erros de compilação, execute o aplicativo usando o seguinte comando

`$ java -jar hello.jar`

Se tudo correr bem, você deve ver o **Hello World!** impresso na tela do seu terminal
```
$ java -jar hello.jar 
 Hello, World! 
```

Parabéns, você configurou com sucesso o ambiente de desenvolvimento e o compilador Kotlin em seu sistema. Vamos abordar todas as complexidades e partes divertidas de Kotlin neste guia, mas você pode conseguir um avanço se quiser indo ao site da [Try Kotlin](https://try.kotlinlang.org/) e passando pelos exercícios lá.

## Documentação

Uma das melhores coisas sobre o Kotlin é sua documentação abrangente e bem estruturada. Mesmo se você é novo em programação, você vai encontrar-se em casa com os documentos. Eles fazem um trabalho incrível em colocar tudo de uma maneira bem estruturada. Você pode conferir a documentação oficial [neste link](https://kotlinlang.org/docs/reference/) .