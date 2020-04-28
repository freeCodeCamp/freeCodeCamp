# Working on Virtual Machines


As a member of the staff or the dev-team, you may have been given access to our cloud vendors like Azure, Digital Ocean, etc. 

Here are some handy commands that you can use to work on the VMs, for instance performing maintenance updates or doing general houeskeeping. 
# Keeping Virtual Machines Updated

You should keep the Virtual Machines up to date by performing updates and upgrades. This will ensure that the virtual machine is patched with latest security fixes. 

> [!WARNING] 
> Before you run these commands: 
> - Make sure that the VM has been provisioned completely and there is no post-install steps running. 
> - If you are updating packages on a VM that is already serving an application, make sure the app has been stopped / saved. Package updates will cause network bandwidth, memory and/or CPU usage spikes leading to outages on running applications.

Update package information

```console
sudo apt update
```

Upgrade installed packages

```console
sudo apt upgrade -y
```

Cleanup unused packages

```console
sudo apt autoremove -y
```

# Getting a list of the Virtual Machines


> [!NOTE]
> You may already have SSH access to virtual machines, but that alone will not let you list VMs unless you also have access to the vendor portals as well.

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
