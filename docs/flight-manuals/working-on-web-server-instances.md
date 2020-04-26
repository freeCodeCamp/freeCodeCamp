# Work on Web Server instances

We are running load balanced (Azure Load Balancer) instances for our web servers. These servers are running NGINX which reverse proxy all of the traffic to freeCodeCamp.org from various applications running on their own infrastructures.

The NGINX config is available on [this repository](https://github.com/freeCodeCamp/nginx-config).

## Installing pre-requisites

Perform updates to the OS packages by following [this guide](flight-manuals/working-on-virtual-machines).

## First install

> TODO - Detailed Instructions

1. Provision a VM on Azure.
2. Install NGINX and configure from repository.
3. Inatall Cloudflare origin certificates and upstream application config.
4. Setup networking and firewalls.
5. Add the VM to the load balancer backend pool.


## Logging and Monitoring

1. Check status for NGINX service using the below command:

```console
sudo systemctl status nginx
```

2. Logging and monitoring for the servers are available at:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>

## Updating Instances (Maintenance)

Config changes to our NGINX instances are maintained on GitHub, these should be deployed on each instance like so:

1. SSH into the instance and enter sudo

```console
sudo su
```

2. Get the latest config code.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/master
```

3. Test and reload the config [with Signals](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```
