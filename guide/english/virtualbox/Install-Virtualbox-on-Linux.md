# Oracle VirtualBox:

...Oracle VirtualBox 5.2.8 has been released on February 27th, 2018. Oracle VirtualBox 5.2 is the latest major release after 
...launched by Oracle team. This version has the new feature to export VM to Oracle Cloud, Unattended guest installation, 
...improved tools handling with more attractive icons. Oracle team also added an experimental feature for audio support for 
...video recording. See the ChangeLog for more details.

# This article helps you to install VirtualBox on Ubuntu 18.04 LTS, 16.04 LTS systems.

## Step 1 – Prerequsities
...You must have logged in to your server using root or sudo privileged user. After login to your system update current 
...packages of the system to the latest version.

```sudo apt-get update```
```sudo apt-get upgrade```

## Step 2 – Configure Apt Repository
...Let’s import the Oracle public key to your system signed the Debian packages using the following commands.

```wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -```
```wget -q https://www.virtualbox.org/download/oracle_vbox.asc -O- | sudo apt-key add -```
...Now, you need to add Oracle VirtualBox PPA to Ubuntu system. You can do this by running the below command on your system.

```sudo add-apt-repository "deb http://download.virtualbox.org/virtualbox/debian `lsb_release -cs` contrib"```
...This command will add an entry to /etc/apt/sources.list at end of the file.

## Step 3 – Install Oracle VirtualBox
...After completing the above steps, let’s install VirtualBox using the following commands. If you have already installed an older version of VirtualBox, Below command will update it automatically.

```sudo apt-get update```
```sudo apt-get install virtualbox-5.2```

## Step 4 – Launch VirtualBox
...We can use dashboard shortcuts to start VirtualBox or simply run following command from a terminal.

```virtualbox```
