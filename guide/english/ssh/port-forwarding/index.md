---
title: Port Forwarding
---

# Port Forwarding

### Introduction
Port forwarding via SSH creates a secure connection between a local computer and a remote machine. To use port forwarding, you need to make sure port forwarding is enabled in your server. You also need to tell your client the source and destination port numbers to use. If you're using **local** or **remote** forwarding, you need to tell your client the destination server. If you're using **dynamic** port forwarding, you need to configure your programs to use a SOCKS proxy server. 

#### Types of port forwarding
##### Local port forwarding
Local port forwarding is used to connect from your local computer to another server.  
I you want to connect from your computer to https://www.freecodecamp.org using an SSH tunnel. You would use source port number 8080 (the alternate http port), destination port 80 (the http port), and destination server (ssh host).
```bash
ssh -L 8080:www.freecodecamp.org.org:80 guest@my-server.com
```
##### Remote port forwarding
Remote port forwarding is used to connect from the remote SSH server to another server. 
If you want to let a colleague access your remote desktop, using the command-line SSH client. You would use port number 5900 (the first VNC port), and destination server localhost:

```bash
ssh -R 5900:localhost:5900 guest@johns-pc
```

##### Dynamic port forwarding
Dynamic port forwarding turns your SSH client into a SOCKS proxy server. 
For example, say you wanted Firefox to connect to every web page through your SSH server. First you would use dynamic port forwarding with the default SOCKS port:

```bash
ssh -C -D 1080 guest@my-server.com
```

#### Resources
* [Ubuntu OpenSSH Port Forwarding](https://help.ubuntu.com/community/SSH/OpenSSH/PortForwarding)

