---
title: Creating a Web Server inside Docker
---

# Creating a Web Server inside Docker

### Start docker and it’s container -
	```
	$ systemctl restart docker
	$ systemctl enable docker
	$ docker run -it --name webserver centos:latest
	```

### Install httpd
- **yum** is already configured in centos docker image.
So directly install **httpd** software -
`$ yum install httpd -y`

- Create a dummy web page to check the server -
	```
	$ cd /var/www/html
	$ vi index.html
	```

### Start services -
  - If we use **systemctl** to start the services, this will not work and gives an error.
  - **systemctl** doesn't work in docker.
  - In actual RedHat system, when we start a service it actually runs a script in background. That script starts daemons.
  - To find the path of that script, check status of service
`$ systemctl status httpd`
`Loaded` option shows script file path.
  - In that file, we have a line which actually starts service -
`ExecStart = /usr/sbin/httpd....... `
So the command `/usr/sbin/httpd` actually starts **httpd** server.

- Service is running or not, can be checked by -
`$ ps -aux | grep httpd`

- So we don't require `systemctl` we can directly start our web server using-
`$ /usr/sbin/httpd`
This will start the web server.

- `ifconfig` doesn't work in docker.
  - So install software, which gives `ifconfig` command.
  - It can be checked in actual Redhat system by running this command-
  `$ rpm -qf /usr/sbin/ifconfig`
  - This comes from **net-tools** package.
  - So Install **net-tools** in docker os.

- Making _image_ of created web server -
`$ docker commit webserver apacheimg:v1`
  - Name of container is _webserver_.
  - This image can be share with exact setup with other users.

- To save created image -
`$ docker save apacheimg:v1 -o mywebserver.tar`

- To start **httpd** service automatically when container starts -
  - Write `/usr/sbin/httpd` in following file.
	`$ vim /root/.bashrc`

- To copy a file in container from the base system -
`$ docker cp /root/form.txt  myconatiner:/`

## Summary
Summary of all the commands -
```
$ docker run -it --name webserver centos:latest
$ yum install httpd -y
$ rpm -q httpd
$ cd /var/www/html
$ vi index.html
// write some web content

$ /usr/sbin/httpd
$ yum install net-tool

$ ifconfig
```
