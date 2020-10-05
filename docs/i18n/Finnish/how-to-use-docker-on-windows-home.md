# Miten Dockeria käytetään Windows Home -käyttöjärjestelmässä

On olemassa muutamia sudenkuoppia on vältettävä, kun perustetaan telakka Windows Home. Ensinnäkin sinun täytyy käyttää [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) järjestelmänvalvojana. Valitettavasti Windows Home ei tue Dockeria Windows-työpöydälle, joten sen sijaan on käytettävä työkalupakkia. Se on ajettava järjestelmänvalvojana, koska asennus käyttää symlinkkejä, joita ei voi luoda toisin.

Kun olet asentanut työkalulaatikon, suorita Docker Quickstart Terminal järjestelmänvalvojaksi. Tämä luo `oletuksen` virtuaalisen koneen, jos sitä ei ole jo olemassa. Kun se on tapahtunut, sulje terminaali ja avaa VirtualBox (jälleen järjestelmänvalvoja). Sinun pitäisi pystyä näkemään `oletus` kone. Sivusto on varsin resurssiintensiivinen, joten lopeta virtuaalinen kone ja nostaa asetuksia niin paljon kuin voit - muistia erityisesti. Se on vahvistettu, että työskentely 4 Gt ram.

Kun olet iloinen, että Docker toimii, kloonaa freeCodeCamp repo kansioon sisällä `C:\Käyttäjät`. Nämä hakemistot jaetaan, jolloin Docker pääsee paikallisiin hakemistoihin, joita se tarvitsee asennuksen aikana.

Jos näet tällaisia viestejä

```shell
bash: change_volumes_owner.sh: Ei tällaista tiedostoa tai kansiota
```

kun olet `npm ajaa telakka:init` tämä on todennäköisesti syyllinen.
