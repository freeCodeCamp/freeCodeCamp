# Getting a list of the Virtual Machines

As a member of the staff or the dev-team, you may have been given access to our cloud vendors like Azure, Digital Ocean, etc. Here are some handy commands that you can use to list the Public IP addresses for the Virtual machine instances that are live and deployed.

> [!NOTE]
> You may already have SSH access, but it will not let you list VMs unless you also have access to the vendor portals themselves.

## Azure

Install Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(One-time) Install on macOS with [`homebrew`](https://brew.sh):**

```
brew install azure-cli
```

> **(One-time) Login:**

```
az login
```

> **Get the list of VM names and IP addresses:**

```
az vm list-ip-addresses --output table
```

## Digital Ocean

Install Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(One-time) Install on macOS with [`homebrew`](https://brew.sh):**

```
brew install doctl
```

> **(One-time) Login:**

Authentication and context switching: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
doctl auth init
```

> **Get the list of VM names and IP addresses:**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```
