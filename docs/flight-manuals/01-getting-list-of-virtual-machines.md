### Getting a list of the VMs from Azure

Install Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> (onetime) Install on macOS with [`homebrew`](https://brew.sh):

```
brew install azure-cli
```

> (onetime) Login:

```
az login
```

> **Get the list of VM names and IP addresses:**

```
az vm list-ip-addresses --output table
```

### Getting a list of the VMs from Digital Ocean

Install Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> (onetime) Install on macOS with [`homebrew`](https://brew.sh):

```
brew install doctl
```

> (onetime) Login:

Authentication and context switching: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
doctl auth init
```

> **Get the list of VM names and IP addresses:**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```
