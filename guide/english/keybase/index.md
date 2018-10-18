# keybase
Add email to Keybase.io PGP Key (Public Key)


Export your public key:

keybase pgp export > keybase-public.key
Export your private key:

$ keybase pgp export --secret > keybase-private.key

# Let's import and edit:

$ gpg --allow-secret-key-import --import keybase-private.key

$ gpg --import keybase-public.key

$ gpg --edit-key MYEMAIL@DOMAIN.COM

# Inside the gnupg shell:

gpg> adduid

Real name: YOUR NAME

Email address: MYOTHEREMAIL@DOMAIN.COM

Comment: <just left empty, hit enter>

Out of the gnupg shell, update your keybase account with the new public key:

$ keybase pgp update

Check your new public key: 

$ keybase pgp export

Update your github or whatever accounts you need to recognize the new email as "verified".
