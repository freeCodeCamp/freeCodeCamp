＃如何在本地捕獲外發電子郵件（用於電子郵件工作流程）

> **注意：**這是**可選**步驟 - 僅在使用電子郵件工作流程時需要

＃＃ 介紹

某些電子郵件工作流程（如更新使用者的電子郵件）需要後端api-server發送電子郵件。在開發過程中，您可以使用工具在本地捕獲這些電子郵件，而不必使用電子郵件提供商並發送實際的電子郵件。 MailHog是一種用於開發人員的電子郵件測試工具，可以捕獲本地freeCodeCamp實例發送的電子郵件。

##安裝MailHog

如何安裝和運行MailHog取決於您的作業系統

 -  [在macOS上安裝MailHog]（#instalting-mailhog-on-macos）
 -  [在Windows上安裝MailHog]（#instalting-mailhog-on-windows）
 -  [在Linux上安裝MailHog]（#instalting-mailhog-on-linux）

###在macOS上安裝MailHog

以下是如何使用[Homebrew]（https://brew.sh/）在macOS上設置MailHog：

```慶典
brew安裝mailhog
brew服務啟動mailhog
```

這將在後臺啟動mailhog服務。

接下來，您可以轉到[使用MailHog]（＃using-mailhog）。

###在Windows上安裝MailHog

從[MailHog的官方存儲庫]（https://github.com/mailhog/MailHog/releases）下載最新的MailHog版本。按一下Windows版本（32或64位元）的連結，然後將.exe檔下載到您的電腦。

完成下載後，按一下該檔。您可能會收到Windows防火牆通知，您必須允許訪問MailHog。完成後，將打開標準Windows命令列提示符，MailHog已在運行。

要關閉MailHog，請關閉命令提示符。要再次運行它，請按一下相同的.exe文件。您無需下載新的。

接下來，您可以轉到[使用MailHog]（＃using-mailhog）。

###在Linux上安裝MailHog

首先安裝[Go](https://golang.org）。

對於像Ubuntu和Linux Mint這樣的基於Debian的系統，運行：

```慶典
sudo apt-get install golang
```

對於CentOS，Fedora，Red Hat Linux和其他基於RPM的系統，運行：

```慶典
sudo dnf install golang
```

要麼：

```慶典
sudo yum install golang
```

設置Go的路徑：

```慶典
echo“export GOPATH = $ HOME / go”>>〜/ .profile
echo'export PATH = $ PATH：/ usr / local / go / bin：$ GOPATH / bin'>>〜/ .profile
來源〜/ .profile
```

然後安裝並運行MailHog：

```慶典
去獲取github.com/mailhog/MailHog
sudo cp / home / $（whoami）/ go / bin / MailHog / usr / local / bin / mailhog
mailhog
```

接下來，您可以轉到[使用MailHog]（＃using-mailhog）。

##使用MailHog

安裝MailHog並開始運行後，需要在流覽器中打開MailHog收件箱，打開新選項卡或視窗並導航到[http：// localhost：8025]（http：// localhost：8025）。
您現在應該看到如下螢幕：

![MailHog截屏1]（/docs/images / mailhog / 1.jpg）

當你的freeCodeCamp安裝發送電子郵件時，你會看到它出現在這裡。如下所示：

![MailHog截圖2]（/docs/images / mailhog / 2.jpg）

打開郵件，您應該看到兩個選項卡，您可以在其中查看內容 - 純文字和原始檔案。確保您在純文字選項卡上。

![MailHog截屏3]（/docs/images / mailhog / 3.jpg）

電子郵件中的任何連結都應該是可點擊的。

##有用的連結

 - 有關MailHog的任何其他問題或有關自訂配置的說明，請查看[MailHog]（https://github.com/mailhog/MailHog）存儲庫。
