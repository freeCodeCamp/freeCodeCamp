---
title: Cordova iOS Application Development Setup to Deployment
---
# Cordova iOS Application Development Setup to Deployment
<img src="https://image.ibb.co/iKCSuQ/Xz_J197k8_QI32.jpg" alt="iphone_1737513_1920" width="100%">

Hybrid Application development for android is a breeze, be it for development or production configuration, however i personally find cordova iOS setup, development and deployment a bit complicated.

Most of the Hybrid Application Developers who are in learning stage are not able to explore hybrid iOS app development process due to the simple reason that they dont own a mac, since developing iOS apps requires the iOS SDK and XCode unlike Android SDK which runs on any Desktop OS. Therefore the aim of this guide is to show the basic workflow of hybrid iOS app development on a mac, so that a developer even if he/she cannot develop iOS apps, is atleast familiar with how its done.


## Creating cordova project 
Begin by opening the terminal and creating a new cordova project ( use sudo only if you have permission issues, ie. EACCESS errors ) :
```
sudo cordova create iosdemo
cd iosdemo
sudo cordova platform add ios
```
At the time of writing this guide cordova iOS platform version is : 4.3.1

We wont modify any source code of the app and simple continue with the default sample code that is added by cordova automatically when we run the create command. However it is assumed we will add plugins modify code in the ```www``` folder during normal development flow. 

Next step is to run the cordova build command. This will convert our app code to an .xcodeproj file which we will use next.
```
sudo cordova build ios
```

The generated Xcode Project file will be in : 
```
[Your App Folder]/platforms/ios/[Your App Name].xcodeproj
```

Now in case of Android the code signing is done using the Keystore file which is in .jks format.
However in case of iOS for distributing iOS apps it is required that you have an Apple developer account,
This is so that we can generate the *Certificates* and *Provisioning Profiles* required for distributing the app.

For pricing of an Developer account refer <a href='https://developer.apple.com/support/purchase-activation/' alt='apple developer account pricing' target='_blank'>this page</a>

## Creating Development Certificates
Once you have the account ready we can proceed further and login to <a href='https://developer.apple.com/account/' alt='apple developer dashboard' target='_blank'>Apple developer account</a>

The dashboard screen should look something like this :
<img src="https://image.ibb.co/j0d8zQ/Clipboard_image_2017_09_18_11_35_58.png" alt="Project opening in Xcode" width="100%">

Click on ```Certificates, Identifiers & Profiles``` 
This should take you to the following screen, which by default displays Certificates issued from your account :
<img src="https://image.ibb.co/fk8mm5/1.png" alt="Certificates, Identifiers & Profiles" width="100%">

iOS Certficates are of mainly two types : Development or Distribution, click on the Plus (+) button on the top right corner of the list which will open the following page :
<img src="https://image.ibb.co/dksXtk/2.png" alt="Add iOS Certificate" width="100%">

First lets create a development profile :
Select *iOS App Development* and click continue.

This should bring you to the following screen, where you are asked to create and upload a Certificate Signing Request or CSR file.
<img src="https://image.ibb.co/iwBE65/3.png" alt="Upload CSR file" width="100%">

 Follow the on-screen instructions to generate it, and continue.
 Once the certificate is ready, download it to your Mac, and double click it.
 This will add it to Keychain Access in the Mac. 
<img src="https://image.ibb.co/dJg6m5/4.png" alt="Download development certificate" width="100%">

## Creating Distribution Certificates
Creating distribution certificates is similar to the process for creating development certificates,
However here we select ```App Store and Ad Hoc``` from ```Production``` section in the ```Add iOS Certificate Page``` 

<img src="https://image.ibb.co/bEKFeQ/5.png" alt="Add iOS Certificate" width="100%">

## Creating the App ID

Select ```App IDs``` from ```Identifiers``` section, this will open the list of existing app IDs,
Next click on the Plus button on the top right (+), This will open the *Register iOS App IDs* page.

<img src="https://image.ibb.co/iXTuOk/6.png" alt="Register iOS App IDs" width="100%">

Select Explicit App ID

App Description can be any related name this will be displayed in the app id list against the particular app id.

An app id is a string in the format *AB11A1ABCD.com.mycompany.myapp* where *AB11A1ABCD* is the app id prefix which is by default the team ID and *com.mycompany.myapp* is the bundle ID which is unique to each app.
It's recommended that the bundle id must be in a reverse-domain name style string for example, the company MYCOMPANY may have two apps (App1 and App2), therefore the http url for each app is usually app1.mycompany.com and app2.mycompany.com,
Hence the bundle IDs for each app will be com.mycompany.app1 and com.mycompany.app2

Next select any services from the checklist that you need to use in your app, such as Push Notifications, Wallet etc.
Next click on continue and confirm the details to finally register the app id.

## Adding devices to developer account

Select ```All``` from ```Devices``` section, this will open the list of already added devices to your apple developer account,
Only these devices are allowed to run the app during development.
To add a new device Next click on the Plus button on the top right (+)
The following screen will be displayed:
<img src="https://image.ibb.co/gTmW3k/8.png" alt="add device screen" width="100%">

Here name can be any easily undertandable name example, iPhone 5s ABC Pvt Ltd.
The device UDID is the unique ID associated with each Apple device.

To find the UDID of a device follow the below mentioned steps:
1) Connect the device to your Mac.
2) Open the System Information app located in the /Applications/Utilities folder.
3) Select USB under Hardware in the left column.
4) On the right, select the connected device under USB Device Tree.
The device ID, or “Serial Number”, appears below.

Once you have entered the device UDID and name click continue, then confirm the details and register.

## Creating Development Provisioning Profile
To create a development Provisioning Profile click on Provisioning Profiles -> All
This should show all the profiles, development as well as distribution.
Next click on the Plus button on the top right (+)
This should show the following page :
<img src="https://image.ibb.co/dk3KOk/7.png" alt="Creating a development provisioning profile" width="100%">

Here select ```iOS App Development``` and click continue.
In the dropdown that is displayed select the App ID we created previously and continue.

Next A checklist list of certificates is displayed from which we can select one or multiple.
These are development certificates and not distribution ones.
The generated provisioning profile will be linked to these certificates.

On click of continue a checklist of devices is displayed, select one, multiples or all.
Only selected devices will be allowed to run the app using this provisioning profile.

Next on clicking continue, enter the name for the provisioning profile, and download the generated .mobileprovision file.

## Creating Adhoc Distribution Provisioning Profile
This process is same as Development Profile Creation

## Creating AppStore Distribution Provisioning Profile
This process is same as the Development Profile Creation, except here we don't select devices, as the app will be available publicly through AppStore.

Now that we have all that we need, we can continue generating the actual ipa using Xcode.

*Note: cordova build command converts our app code to xcode project, using Xcode we create an .ipa file which is the actual app to be installed.*

---

Before moving forward double tap on both Certificates to add them to keychain

## Continuing in Xcode
Next, double tap the .xcodeproj file which should open it in Xcode.
( Please use the latest version of Xcode, I have used Xcode 8.3.2 )

<img src="https://image.ibb.co/mPdGKQ/Screen_Shot_2017_09_18_at_11_06_55_AM.png" alt="Project opening in Xcode" width="100%">
The Xcode screen should look something like this.

Click on the App Name on the top left corner for the window, this will open the detailed view on the right side.
<img src="https://image.ibb.co/fqb3ZQ/Screen_Shot_2017_09_18_at_5_07_53_PM.png" alt="Project settings" width="100%">

Then click on Targets-> App Name 

<img src="https://image.ibb.co/i0znTk/Screen_Shot_2017_09_18_at_5_11_28_PM.png" alt="targets" width="50%">

This will display the following details tab :
<img src="https://image.ibb.co/ksBj8k/Screen_Shot_2017_09_18_at_5_15_29_PM.png" alt="target details" width="100%">

Click on general, which should display :
<img src="https://image.ibb.co/k8KFEQ/Screen_Shot_2017_09_18_at_5_18_29_PM.png" alt="general details" width="100%">

Uncheck the Automatically Manage Signing Checkbox

This should display the following error, stating AppNAme requires provisioning profile
<img src="https://image.ibb.co/mDq5EQ/Screen_Shot_2017_09_18_at_5_20_35_PM.png" alt="profile error" width="100%">

Next, under Signing (Debug) Click the Provisioning Profile Dropdown and select the *import profile* option.
In the file selection dialog that pops, navigate to the path where the development provisoning profile is downloaded, and select it. It will have an extension of *.mobileprovision*

After selection the error should be gone, and it should show Team as the Team Name in Apple developer account and Signing Certificate Name.

Do the same thing for Signing (Release) section, however in the file selection dialog select the Ad Hoc distribution Profile.

Now that the Code signing steps are done we either 
* run the app directly on device
* run the app on a simulator
* generate an ipa file for distribution
* upload app to appstore

## Running the app directly on device

To run the app on device connect the device to the Mac via USB,
then in the top left corner in the list of devices select the connected device, and click the run or play button (black triangular button)
<img src="https://image.ibb.co/k4xo15/Screen_Shot_2017_09_18_at_5_34_14_PM.png" alt="run device" width="100%">
<img src="https://image.ibb.co/hjzhuQ/Screen_Shot_2017_09_18_at_5_36_55_PM.png" alt="run device" width="100%">

The build status will be displayed in the status bar on the top of the window.
If all goes fine, the app should be installed on the device, and automatically load in a while.

## Running the app on a simulator

The steps are same as running on device, but instead of an actual device we use the available iPhone and iPad simulators from the device list.

## Generate an ipa file for distribution

This approach can be done in case you require to distribute the app to the testing team, etc. However the device used by them must have a UDID present in the provisioning profile.

From the Xcode menu select ```Product``` -> ```Clean```,
Then ```Product``` -> ```Archive```,
The Archives organizer appears and displays the new archive.
<img src="https://image.ibb.co/iunfMG/6_ios_archive_organizer_2x.png" alt="ios archive organizer" width="100%">
In the righthand side panel select Export option, a list of options will appear.

To distribute your app to users with designated devices, select “Save for Ad Hoc Deployment.” The app will be code signed with the distribution certificate.

To distribute your app for internal testing, select “Save for Development Deployment.” The app will be code signed with your development certificate.
<img src="https://image.ibb.co/jQJLMG/6_ios_createappstorepackage_1_2x.png" alt="ios archive organizer export as ad hoc" width="100%">

In the dialog that appears, choose a team from the pop-up menu and click Choose.
<img src="https://image.ibb.co/gH2VMG/6_ios_export_choose_team_2x.png" alt="ios export select team"  width="100%">

Next the device selection dialog pops up
Select either *All devices* or *specific devices* click next.

Next the review dialog is displayed,
Here it will show the signing certificate and provisioning profile used for generating the build.
Review and click next.
Finally the file save as popup is displayed to select the location in the file system to store the exported app file.

The app is exported as ``.ipa``` file .

To run this file on a device simply double tap it which will open it in itunes.

Then connect your device (This should show a small device icon on the top left corner of the itunes window )
tapping on it will show the device summary such as apps, music etc on the device.
Select the apps tab,
in the left pane, select the app to be installed and click install.
Wait for the process to complete and click apply,
This should install the ipa file on your device.

To debug the app : 
1) Open safari, 
2) open the app on device
3) In the Safari menu bar select ``` Develop --> Your Device Name --> Your App ```.

## Thats all Folks !!!

