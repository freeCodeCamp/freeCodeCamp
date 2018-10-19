# Bash Passwd

The Bash *passwd* command is used to modify a user's password. 

* Please always use a strong, randomly generated password.* If you choose a poor password, 'passwd' will try to prevent its use via the pam_cracklim PAM module. When changing passwords using this command, you will prompted for the user's old and new passwords. Use *passwd* with no options to change the password of the user you are currently logged in as. 


## Usage
```bash
passwd [options...]
```

##Options

* `-d`, `--delete` Only root may use this flag to delete the password for the named account, making the account passwordless. 
* `-e`, `--expire` Option to expire an account's password by setting it to empty. This is good for forcing a user to change thier password. 
* `-f`, `--force`  This option is used only by root to force the specified operation.
* `-i`, `--inactive INACTIVE` Option used to disable an account after the password has been expired for INACTIVE number of days. Only available to root.
* `-k`, `--keep-tokens`  This option is used to keep non-expired authentication tokens. Password change will only apply to expired tokens.
* `-l`, `--lock`  Only root may use this flag to lock the account specified. This adds a '!' at the beginning to the password so that no possible encrypted value will match, effectively disabling the password. 
* '-n', '--mindays' MIN_DAYS This options sets a minimum number of days between password changes to that of MIN_DAYS specified.
* `-q`, `--quiet` This is option signifies to run the command in quiet mode. 
* `-r`, `--repository REPOSITORY` This option is used to change the password in REPOSITORY repository.
* `-R`, `--root CHROOT_DIR` This option causes the changes to applied in the CHROOT_DIR directory using the configuration files located there.
* -`S`, `--status` Only root may use this flag to view a password status report for the account specified
* `--stdin` Only root may use this flag to read new tokens from stdin
* `-u`, `--unlock` Only root may use this flag to unlock the specified account
* `--usage` Option that displays a breif usage message
* `-w`, `--warndays WARN_DAYS` This option sets the number of days prior to a password expiring that a user will be warned. Usage is restricted to root only.
* `-x`, `--maxdays MAX_DAYS` This option declares the password may only remain valid for MAX_DAYS number of days before it must be changed. Usage is restricted to root only.
* `-?`, `--help` Option used to show the help message


## Example
When logged in as the 'root' user, the following command will forcefully change the password for the user *doug*:
```bash
passwd doug --force
```

### More Information
[Man Pages](http://man7.org/linux/man-pages/man1/passwd.1.html)

*Flags may become deprecated, added, removed, or changed. Always check your system's man pages for the command to confirm what usage is avialable to you.*
