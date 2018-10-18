---
title: Setting up Firebase Storage
localeTitle: Configurando o Firebase Storage
---
# Configurando o Firebase Storage

## Pré-requisitos

1.  A versão mais recente do Android Studio
2.  Conecte-se ao Firebase manualmente ou por meio do Firebase Assistant (consulte [Conexão ao Firebase](guide/src/pages/android-development/firebase/connecting-to-firebase) ).

É recomendável que você faça isso para não ser confundido com instruções parciais relacionadas a isso nos documentos mencionados abaixo.

## Configurando com o Android Studio

Depois de adicionar o Firebase ao seu projeto, você precisará adicionar dependências extras e fazer algumas outras coisas para configurar o Firebase Storage. Há a seguinte documentação sobre isso:

*   [Firebase](https://firebase.google.com/docs/storage/android/start)

Pode haver possibilidade de confusão nessa documentação ou se você é novo no firebase, então pode ser um pouco difícil entendê-lo. Então siga os passos abaixo cuidadosamente:

**Adicionar dependências Gradle**

No seu arquivo build.gradle no nível do aplicativo, adicione o seguinte

```java
dependencies { 
    implementation 'com.google.firebase:firebase-storage:16.0.2' 
 } 
```

## Instalação do Firebase Android SDK, permissões e código de configuração

Instruções detalhadas para estas podem ser encontradas [aqui](https://firebase.google.com/docs/android/setup) .

## Recursos

Para saber mais sobre como ler e gravar no armazenamento em seu aplicativo Android, consulte os documentos listados abaixo.

*   [Carregar arquivos do Android Guia do Firebase](https://firebase.google.com/docs/storage/android/upload-files)
    
*   [Download de arquivos para o Android Guia do Firebase](https://firebase.google.com/docs/storage/android/download-files)
    

## Projetos de amostra dos desenvolvedores do Firebase

Você pode acompanhar essas amostras de desenvolvedores do Firebase para iniciar o armazenamento do Firebase Android [\-amostra do](https://github.com/firebase/quickstart-android/tree/master/storage) Firebase Quickstart-Android

## Nota

Google agora depreciado 'compilar' e no lugar de que você precisa usar 'implementação'.