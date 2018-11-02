---
title: Java
localeTitle: Java
---
**O que é Java?**

[Java](https://www.oracle.com/java/index.html) é uma linguagem de programação desenvolvida pela [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems) em 1995, que foi posteriormente adquirida pela [Oracle](http://www.oracle.com/index.html) . Agora é uma plataforma completa com muitas APIs padrão, APIs de código-fonte aberto, ferramentas, grande comunidade de desenvolvedores e é usada para criar as soluções corporativas mais confiáveis ​​por grandes e pequenas empresas. [O](https://www.android.com/) desenvolvimento de aplicativos [Android](https://www.android.com/) é feito totalmente com o Java e seu ecossistema. Para saber mais sobre Java, leia [isto](https://java.com/en/download/faq/whatis_java.xml) e [isto](http://tutorials.jenkov.com/java/what-is-java.html) .

## Versão

A versão mais recente é o [Java 11](http://www.oracle.com/technetwork/java/javase/overview) , que foi lançado em 2018 com [várias melhorias em](https://www.oracle.com/technetwork/java/javase/11-relnote-issues-5012449.html) relação à versão anterior, o Java 10. Mas, para todos os efeitos, usaremos o Java 8 neste wiki para todos os tutoriais.

Java também é dividido em várias "Edições":

*   [SE](http://www.oracle.com/technetwork/java/javase/overview/index.html) - Standard Edition - para aplicativos de servidor desktop e standalone
*   [EE](http://www.oracle.com/technetwork/java/javaee/overview/index.html) - Enterprise Edition - para desenvolver e executar componentes Java que são executados incorporados em um servidor Java
*   [ME](http://www.oracle.com/technetwork/java/embedded/javame/overview/index.html) - Micro Edition - para desenvolver e executar aplicativos Java em telefones celulares e dispositivos embarcados

## Instalação: JDK ou JRE?

Faça o download dos últimos binários do Java no [site oficial](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) . Aqui você pode enfrentar uma pergunta, qual baixar, JDK ou JRE? JRE significa Java Runtime Environment, que é a Java Virtual Machine dependente de plataforma para executar códigos Java, e JDK significa Java Development Kit, que consiste na maioria das ferramentas de desenvolvimento, o mais importante é o compilador `javac` e também o JRE. Portanto, para um usuário médio, o JRE seria suficiente, mas como estaríamos desenvolvendo com Java, faríamos o download do JDK.

## Instruções de instalação específicas da plataforma

### janelas

*   Baixe o arquivo [.msi](https://en.wikipedia.org/wiki/Windows_Installer) relevante (x86 / i586 para 32bits, x64 para 64bits)
*   Execute o arquivo .msi. É um arquivo executável auto-extraível que irá instalar o Java em seu sistema!

### Linux

*   Faça o download do arquivo [tar.gz](http://www.cyberciti.biz/faq/linux-unix-bsd-extract-targz-file/) relevante para o seu sistema e instale:

`bash $ tar zxvf jdk-8uversion-linux-x64.tar.gz`

*   [Plataformas Linux baseadas em RPM](https://en.wikipedia.org/wiki/List_of_Linux_distributions#RPM-based) baixam o arquivo [.rpm](https://en.wikipedia.org/wiki/RPM_Package_Manager) relevante e instalam:

`bash $ rpm -ivh jdk-8uversion-linux-x64.rpm`

*   Os usuários têm a opção de instalar uma versão de código aberto do Java, OpenJDK ou Oracle JDK. Enquanto o OpenJDK está em desenvolvimento ativo e em sincronia com o Oracle JDK, eles diferem apenas em termos de [licenciamento](http://openjdk.java.net/faq/) . No entanto, poucos desenvolvedores reclamam da estabilidade do Open JDK. Instruções para o **Ubuntu** :

Abra a instalação do JDK:  
`bash sudo apt-get install openjdk-8-jdk`

Instalação do Oracle JDK:  
`bash sudo add-apt-repository ppa:webupd8team/java sudo apt-get update sudo apt-get install oracle-java8-installer`

### Mac

*   Faça o download do Mac OSX .dmg executável no Oracle Downloads
*   Ou use o [Homebrew](http://brew.sh/) para [instalar](http://stackoverflow.com/a/28635465/2861269) :

`bash brew tap caskroom/cask brew install brew-cask brew cask install java`

### Verificar a instalação

Verifique se o Java foi instalado corretamente em seu sistema abrindo o Prompt de Comando (Windows) / Windows Powershell / Terminal (Mac OS e \* Unix) e verificando as versões do Java Runtime e do Compilador:
```
$ java -version 
 java version "1.8.0_66" 
 Java(TM) SE Runtime Environment (build 1.8.0_66-b17) 
 Java HotSpot(TM) 64-Bit Server VM (build 25.66-b17, mixed mode) 
 
 $ javac -version 
 javac 1.8.0_66 
```

**Dica** : Se você receber um erro como "Comando não encontrado" em `java` ou `javac` ou em ambos, não entre em pânico, apenas o PATH do seu sistema não está definido corretamente. Para Windows, veja [esta resposta do StackOverflow](http://stackoverflow.com/questions/15796855/java-is-not-recognized-as-an-internal-or-external-command) ou [este artigo](http://javaandme.com/) sobre como fazer isso. Também existem guias para o [Ubuntu](http://stackoverflow.com/questions/9612941/how-to-set-java-environment-path-in-ubuntu) e [Mac](http://www.mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/) também. Se você ainda não consegue descobrir, não se preocupe, basta perguntar-nos na nossa [sala Gitter](https://gitter.im/FreeCodeCamp/java) !

## JVM

Ok, agora que terminamos as instalações, vamos começar a entender primeiro o âmago da questão do ecossistema Java. Java é uma linguagem [interpretada e compilada](http://stackoverflow.com/questions/1326071/is-java-a-compiled-or-an-interpreted-programming-language) , ou seja, o código que escrevemos é compilado para bytecode e interpretado para ser executado. Nós escrever o código em arquivos .java, Java compila-los em [bytecodes](https://en.wikipedia.org/wiki/Java_bytecode) que são executados em uma máquina virtual Java ou JVM para execução. Esses bytecodes geralmente possuem uma extensão .class.

Java é uma linguagem bastante segura, pois não permite que seu programa seja executado diretamente na máquina. Em vez disso, seu programa é executado em uma máquina virtual chamada JVM. Esta Máquina Virtual expõe várias APIs para interações de máquina de baixo nível que você pode fazer, mas além disso, você não pode jogar com instruções de máquina explicitamente. Isso adiciona um bônus enorme de segurança.

Além disso, uma vez que seu bytecode é compilado, ele pode ser executado em qualquer Java VM. Esta máquina virtual é dependente da máquina, ou seja, possui diferentes implementações para Windows, Linux e Mac. Mas seu programa é garantido para rodar em qualquer sistema graças a essa VM. Essa filosofia é chamada ["Write Once, Run Anywhere"](https://en.wikipedia.org/wiki/Write_once,_run_anywhere) .

## Olá Mundo!

Vamos escrever um exemplo de aplicativo Hello World. Abra qualquer editor / IDE de escolha e crie um arquivo `HelloWorld.java` .
```
public class HelloWorld { 
 
    public static void main(String[] args) { 
        // Prints "Hello, World" to the terminal window. 
        System.out.println("Hello, World"); 
    } 
 
 } 
```

**NB** Lembre-se de que o nome do arquivo Java deve ser **exatamente o mesmo nome da classe pública** para poder compilar!

Agora abra o terminal / prompt de comando. Altere seu diretório atual no terminal / Prompt de Comando para o diretório em que seu arquivo está localizado. E compile o arquivo:
```
$ javac HelloWorld.java 
```

Agora execute o arquivo usando o comando `java` !
```
$ java HelloWorld 
 Hello, World 
```

Parabéns! Seu primeiro programa Java foi executado com sucesso. Aqui estamos apenas imprimindo uma string passando-a para a API `System.out.println` . Vamos cobrir todos os conceitos do código, mas você é bem-vindo para dar uma [olhada mais de perto](https://docs.oracle.com/javase/tutorial/getStarted/application/) ! Se você tiver alguma dúvida ou precisar de ajuda adicional, sinta-se à vontade para nos contatar a qualquer momento em nossa [Gitter Chatroom](https://gitter.im/FreeCodeCamp/java) !

## Documentação

Java é fortemente [documentado](https://docs.oracle.com/javase/8/docs/) , pois suporta grandes quantidades de APIs. Se você estiver usando qualquer IDE principal, como Eclipse ou IntelliJ IDEA, encontrará a Documentação Java incluída.

Além disso, aqui está uma lista de IDEs livres para codificação Java:

*   [NetBeans](https://netbeans.org/)
*   [Eclipse](https://eclipse.org/)
*   [IntelliJ IDEA](https://www.jetbrains.com/idea/features/)
*   [Estúdio Android](https://developer.android.com/studio/index.html)
*   [BlueJ](https://www.bluej.org/)
*   [jEdit](http://www.jedit.org/)
*   [Oracle JDeveloper](http://www.oracle.com/technetwork/developer-tools/jdev/overview/index-094652.html)