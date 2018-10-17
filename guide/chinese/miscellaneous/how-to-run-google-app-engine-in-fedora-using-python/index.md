---
title: How to Run Google App Engine in Fedora Using Python
localeTitle: 如何使用Python在Fedora中运行Google App Engine
---
本文介绍了使用python在Fedora操作系统上安装Google App Engine的分步指南。

*   按照[Google的](https://cloud.google.com/appengine/docs/python/#uploading_the_application)此文档中的步骤操作[。](https://cloud.google.com/appengine/docs/python/#uploading_the_application)

如上文所述，测试应用程序可能对许多人不起作用。

因此，尝试[这种](http://stackoverflow.com/a/16970921)由柯霖给出。

另外，请遵循Brice Lin提供的部署策略。要做到这一点，打开另一个终端（如果你愿意）。

*   在部署之前，您必须在Google Cloud Platform中创建项目。按照[上传应用程序中](https://cloud.google.com/appengine/docs/python/#uploading_the_application)的步骤操作
    
*   但仍然遵循上述部署策略可能对许多人不起作用。这样的错误可能如下：
    
    `ERROR appcfg.py:2396 An error occurred processing file '': HTTP Error 400: Bad Request Unexpected HTTP status 400\. Aborting. Error 400: --- begin server output --- A version or backend parameter is required. --- end server output ---`
    

由于文件**app.yaml中**缺少Version语句，因此发生此错误。因此，在应用程序库中的**app.yaml**文件中添加`version: 1` 。在这里， `helloworld`是存储库。现在它会起作用。快乐的编码和制作应用程序。

不要忘记查看此链接： [在Youtube上的Google App Engine上开发和部署应用程序。](https://www.youtube.com/watch?v=bfgO-LXGpTM)