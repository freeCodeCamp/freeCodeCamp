---
id: 587d774c367417b2b2512a9c
title: Add a Text Alternative to Images for Visually Impaired Accessibility
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7VfD'
forumTopicId: 16628
---

## Desksripsi
<section id='description'>
Seperti yang sudah anda lihat<code>alt</code> atribute pada <code>img</code> tag dalam tantangan yang lain. Text <code>Alt</code>
mendeskripsikan content gambar dan menyediakan alternatif text untuk itu. Ini membantu dalam kasus dimana gambar gagal untuk di load
atau tidak dapat di lihat oleh user. Dan juga digunakan untuk halaman pencarian untuk mengerti apa gambar ini terkait dalam hasil pencarian. Untun Contohnya : <img src="importantLogo.jpeg" alt ="Company Logo"> user dengan gangguan penglihatan mengandalkan 
pembaca layar untuk mengonveri konten website menjadi tampilan suara. Mereka tidak akan mendapatkan informasi jika hanya disajikan 
secara visual. Untuk gambar, pembaca dapat melihatnya dengan <code>alt</code> atribut dan membaca isi konten untuk menyampaikan
isi dari informasi.
Teks <code>alt</code> yang baik memberi pembaca deskripsi singkat tentang gambar tersebut. Anda harus selalu menyertakan <code>alt</code>atribut pada gambar anda. Untuk spesifikasi HTML5, ini sekarang dianggap wajib.
</section>

## Instruksi
<section id='instructions'>

Camper Cat terjadi untuk keduanya dimana ninja koding dan ninja sebagaimana mestinya, yang membangun website untuk sharing pengetahuan. Photo profile yang inign dia gunakan menunjukkan keahliannya dan harus diapresiai oleh semua pengunjung halaman tersebut. Penambahan <code>alt</code> pada atributi tag <code>img</code>, menjelaskan apa yang Camper Cat lakukan adalah karate.(<code>src</code> dari gambar tidak langsung menuju tautan berkas aslinya. jadi kamu harus melihat <code>alt</ code> teks pada layar.)

</section>

## Uji Coba
<section id='tests'>

```yml
tests:
  - text: Gambar kamu <code>img</code> harus mempunyai atrribut tag <code>alt</code> dan itu tidak boleh kosong.
    testString: assert($('img').attr('alt'));

```

</section>

## Tantangan
<section id='challengeSeed'>

<div id='html-seed'>

```html
<img src="doingKarateWow.jpeg">
```

</div>



</section>

## Solusi
<section id='solution'>

```html
<img src="doingKarateWow.jpeg" alt="Someone doing karate">
```

</section>
