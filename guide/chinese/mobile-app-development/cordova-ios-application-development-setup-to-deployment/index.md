---
title: Cordova iOS Application Development Setup to Deployment
localeTitle: Cordova iOS应用程序开发设置到部署
---
# Cordova iOS应用程序开发设置到部署

![iphone_1737513_1920](https://image.ibb.co/iKCSuQ/Xz_J197k8_QI32.jpg)

Android的混合应用程序开发是轻而易举的，无论是用于开发还是生产配置，但我个人认为cordova iOS的设置，开发和部署有点复杂。

大多数处于学习阶段的混合应用程序开发人员都无法探索混合iOS应用程序开发过程，原因很简单，因为他们不拥有Mac，因为开发iOS应用程序需要iOS SDK和XCode，而不是Android SDK。桌面操作系统因此，本指南的目的是展示在Mac上混合iOS应用程序开发的基本工作流程，以便即使他/她无法开发iOS应用程序，开发人员至少熟悉它的完成方式。

## 创建cordova项目

首先打开终端并创建一个新的cordova项目（仅当您有权限问题时才使用sudo，即EACCESS错误）：
```
sudo cordova create iosdemo 
 cd iosdemo 
 sudo cordova platform add ios 
```

在撰写本指南时，cordova iOS平台版本为：4.3.1

我们不会修改应用程序的任何源代码，并且在运行create命令时会自动继续使用cordova自动添加的默认示例代码。但是假设我们将在正常开发流程中在`www`文件夹中添加插件修改代码。

下一步是运行cordova build命令。这会将我们的应用程序代码转换为我们将在下一步使用的.xcodeproj文件。
```
sudo cordova build ios 
```

生成的Xcode Project文件将位于：
```
[Your App Folder]/platforms/ios/[Your App Name].xcodeproj 
```

现在，通过Android，代码签名使用.jks格式的密钥库文件完成。 但是，如果iOS用于分发iOS应用程序，则需要拥有Apple开发者帐户， 这样我们就可以生成分发应用程序所需的_证书_和_配置文件_ 。

有关开发者帐户的定价，请参阅[此页面](https://developer.apple.com/support/purchase-activation/)

## 创建开发证书

准备好帐户后，我们可以继续操作并登录[Apple开发者帐户](https://developer.apple.com/account/)

仪表板屏幕应如下所示： ![项目在Xcode中开放](https://image.ibb.co/j0d8zQ/Clipboard_image_2017_09_18_11_35_58.png)

单击`Certificates, Identifiers & Profiles` 这会将您带到以下屏幕，默认情况下显示从您的帐户发出的证书： ![证书，标识符和配置文件](https://image.ibb.co/fk8mm5/1.png)

iOS Certficates主要有两种类型：开发或分发，单击列表右上角的加号（+）按钮，将打开以下页面： ![添加iOS证书](https://image.ibb.co/dksXtk/2.png)

首先，让我们创建一个开发配置 选择_iOS App Development_ ，然后单击继续。

这会将您带到以下屏幕，要求您创建并上载证书签名请求或CSR文件。 ![上传CSR文件](https://image.ibb.co/iwBE65/3.png)

按照屏幕上的说明生成它，然后继续。 证书准备好后，将其下载到Mac，然后双击它。 这将把它添加到Mac中的Keychain Access。 ![下载开发证书](https://image.ibb.co/dJg6m5/4.png)

## 创建分发证书

创建分发证书与创建开发证书的过程类似， 但是，我们在`Add iOS Certifcate Page`选择`App Store and Ad Hoc` from `Production`部分

![添加iOS证书](https://image.ibb.co/bEKFeQ/5.png)

## 创建应用程序ID

从`Identifiers`部分选择`App IDs` ，这将打开现有应用ID列表， 然后单击右上角的加号按钮（+），这将打开_注册iOS应用程序ID_页面。

![注册iOS App ID](https://image.ibb.co/iXTuOk/6.png)

选择显式应用程序ID

应用说明可以是任何相关名称，它将显示在针对特定应用ID的应用ID列表中。

app id是_AB11A1ABCD.com.mycompany.myapp_格式的字符串，其中_AB11A1ABCD_是应用程序ID前缀，默认情况下是团队ID， _com.mycompany.myapp_是每个应用程序唯一的软件包ID。 它建议bundle id必须是反向域名样式字符串，例如，公司MYCOMPANY可能有两个应用程序（App1和App2），因此每个应用程序的http url通常是app1.mycompany.com和app2.mycompany .COM， 因此，每个应用程序的包ID将是com.mycompany.app1和com.mycompany.app2

接下来，选择您需要在应用中使用的chceklist中的任何服务，例如推送通知，电子钱包等。 然后单击继续并确认详细信息，最后注册应用程序ID。

## 将设备添加到开发者帐户

从“ `Devices`部分中选择“ `All` ，这将打开已添加到Apple开发者帐户的设备列表， 在开发期间，只允许这些设备运行应用程序。 添加新设备接下来单击右上角的加号按钮（+） 将显示以下屏幕： ![添加设备屏幕](https://image.ibb.co/gTmW3k/8.png)

这里的名字可以是任何容易进行名称的例子，iPhone 5s ABC Pvt Ltd. 设备UDID是与每个Apple设备关联的唯一ID。

要查找设备的UDID，请按照以下步骤操作： 1）将设备连接到Mac。 2）打开位于/ Applications / Utilities文件夹中的System Information应用程序。 3）在左栏中选择硬件下的USB。 4\_在右侧，选择USB设备树下的已连接设备。 设备ID或“序列号”显示在下方。

输入设备UDID并输入名称后，单击“继续”，然后确认详细信息并注册。

## 创建开发配置文件

要创建开发配置文件，请单击“配置配置文件” - >“全部” 这应该显示所有配置文件，开发和分发。 接下来点击右上角的加号按钮（+） 这应该显示以下页面： ![创建开发配置文件](https://image.ibb.co/dk3KOk/7.png)

在这里选择`iOS App Development`并单击继续。 在显示的下拉列表中，选择我们之前创建的App ID并继续。

Next显示证书清单列表，我们可以从中选择一个或多个证书。 这些是开发证书而不是分发证书。 生成的配置文件将链接到这些证书。

点击继续显示设备清单，选择一个，倍数或全部。 只允许选定的设备使用此配置文件运行应用程序。

接下来，单击“继续”，输入配置文件的名称，然后下载生成的.mobileprovision文件。

## 创建临时分发配置文件

此过程与开发配置文件创建相同

## 创建AppStore分发配置文件

此过程与开发配置文件创建相同，但此处我们不选择设备，因为该应用程序将通过AppStore公开提供。

现在我们拥有了所需的一切，我们可以继续使用Xcode生成实际的ipa。

_注意：cordova build命令将我们的应用程序代码转换为xcode项目，使用Xcode我们创建一个.ipa文件，这是要安装的实际应用程序。_

* * *

在前进双击两个证书之前，将它们添加到钥匙串

## 继续在Xcode

接下来，双击.xcodeproj文件，该文件应该在Xcode中打开它。 （请使用最新版本的Xcode，我使用的是Xcode 8.3.2）

![项目在Xcode中开放](https://image.ibb.co/mPdGKQ/Screen_Shot_2017_09_18_at_11_06_55_AM.png) Xcode屏幕看起来应该是这样的。

单击窗口左上角的App Name，这将打开右侧的详细视图。 ![项目设置](https://image.ibb.co/fqb3ZQ/Screen_Shot_2017_09_18_at_5_07_53_PM.png)

然后单击Targets-> App Name

![目标](https://image.ibb.co/i0znTk/Screen_Shot_2017_09_18_at_5_11_28_PM.png)

这将显示以下详细信息选项卡： ![目标细节](https://image.ibb.co/ksBj8k/Screen_Shot_2017_09_18_at_5_15_29_PM.png)

Clik一般，应该显示： ![一般细节](https://image.ibb.co/k8KFEQ/Screen_Shot_2017_09_18_at_5_18_29_PM.png)

取消选中自动管理签名复选框

这应显示以下错误，说明AppNAme需要配置配置文件 ![档案错误](https://image.ibb.co/mDq5EQ/Screen_Shot_2017_09_18_at_5_20_35_PM.png)

接下来，在“签名（调试）”下单击“配置配置文件”下拉列表，然后选择“ _配额配置文件”_选项。 在弹出的文件选择对话框中，导航到下载开发过程配置文件的路径，然后选择它。它将扩展_.mobileprovision_

选择后，错误应该消失，它应该显示Team作为Apple eveloper帐户中的团队名称和签名证书名称。

对签名（发布）部分执行相同的操作，但是在文件选择对话框中选择Ad Hoc分发配置文件。

既然我们已经完成了代码签名步骤

*   直接在设备上运行应用程序
*   在模拟器上运行应用程序
*   生成一个ipa文件以供分发
*   将应用上传到appstore

## 直接在设备上运行应用程序

要在设备上运行应用程序，请通过USB将设备连接到Mac， 然后在设备列表的左上角选择已连接的设备，并单击运行或播放按钮（黑色三角形按钮） ![运行设备](https://image.ibb.co/k4xo15/Screen_Shot_2017_09_18_at_5_34_14_PM.png) ![运行设备](https://image.ibb.co/hjzhuQ/Screen_Shot_2017_09_18_at_5_36_55_PM.png)

构建状态将显示在窗口顶部的状态栏中。 如果一切顺利，应该将应用程序安装在设备上，并在一段时间内自动加载。

## 在模拟器上运行应用程序

这些步骤与在设备上运行相同，但我们使用设备列表中的可用iPhone和iPad模拟器而不是实际设备。

## 生成ipa文件以进行分发

如果您需要将应用程序分发给测试团队等，则可以执行此方法。但是，他们使用的设备必须在配置文件中包含UDID。

从Xcode菜单中选择`Product` - > `Clean` ， 然后`Product` - > `Archive` ， Archives组织器出现并显示新存档。 ![ios档案管理器](https://image.ibb.co/iunfMG/6_ios_archive_organizer_2x.png) 在右侧面板中选择“导出”选项，将显示optios。

要将您的应用分发给具有指定设备的用户，请选择“保存以进行特别部署。”该应用将使用分发证书进行代码签名。

要分发您的应用程序以进行内部测试，请选择“保存以进行开发部署”。该应用程序将使用您的开发证书进行代码签名。 ![ios归档组织者导出为临时](https://image.ibb.co/jQJLMG/6_ios_createappstorepackage_1_2x.png)

在出现的对话框中，从弹出菜单中选择一个团队，然后单击“选择”。 ![ios导出精选团队](https://image.ibb.co/gH2VMG/6_ios_export_choose_team_2x.png)

然后弹出设备选择对话框 选择_所有设备_或_特定设备_单击下一步。

接下来显示审阅对话框， 这里将显示用于生成构建的签名证书和配置文件。 查看并单击下一步。 最后显示文件另存为弹出窗口，以选择文件系统中存储导出的应用程序文件的位置。

该应用程序导出为\`\`.ipa\`\`\`文件。

要在设备上运行此文件，只需双击它将在iTunes中打开它。

然后连接你的设备（这应该在itunes窗口的左上角显示一个小设备图标） 点击它将在设备上显示设备摘要，例如应用程序，音乐等。 选择应用标签， 在左侧窗格中，选择要安装的应用程序，然后单击“安装”。 等待该过程完成，然后单击“应用”， 这应该在您的设备上安装ipa文件。

要调试应用程序： 1）开放野生动物园， 2）在设备上打开应用程序 3）在Safari菜单栏中选择`Develop --> Your Device Name --> Your App` 。

## 多数民众赞成！