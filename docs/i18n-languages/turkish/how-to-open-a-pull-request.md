<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# Nasıl Pull Request açılır

## İyi bir Pull Request başlığı nasıl oluşturulur:

Bir Pull Request(PR) açarken, aşağıdaki formatta PR başlığının ne olmasına karar vermek için aşağıdaki kapsam tablosunu kullan
`fix/feat/chore/refactor/docs/perf (scope): PR Başlığı`

Bir örnek: `fix(learn): Testler düzeltildi yapmak için...while loop challenge`.

| Kapsam | Dokümantasyon |
|---|---|
| `learn`,`curriculum` | Öğretim meydan okumalarında değişiklik yapan Pull Requestler için. |
| `client` | Kullanıcı platformunun mantığında veya arayüzünde değişiklik yapan Pull Requestler için. |
| `guide` | Kılavuzda değişiklik yapan Pull Requestler için. |
| `docs` | Proje dokümantasyonunda değişiklik yapan Pull Requestler için. |

## Bir Pull Request (PR) Hazırlarken 

1. Düzenlemeler commitlenince, Fork edilmiş GitHub sayfanda bir Pull Request oluşturmak için yönlendirilirsin.

    ![Image - Compare pull request prompt on GitHub](/docs/images/github/compare-pull-request-prompt.png)

2. Varsayılan olarak, bütün Pull Requestler freeCodeCamp ana repo, `master` dalına dayanmalıdır.

    Forku yükseltirken, Baz alınan forkun freeCodeCamp/freeCodeCamp olarak yerleştirildiğinden emin ol.

    ![Image - Comparing forks when making a pull request](/docs/images/github/comparing-forks-for-pull-request.png)

3. Pull Request'i senin dalından freeCodeCamp'ın `master` dalına teslim et.

4. PR'in ana blokuna yaptığın değişikliğin detaylandırılmış özetini ve niçin yapıldığını dahil et. 

    - Sana bir Pull Request teması sunulur. Pull Request'i açmadan önce takip etmen gerekenleri gösteren bir kontrol listesidir.

    - Ayrıntıları size uygun şekilde doldurun. Bu bilgiler incelenecek ve çekme isteğinizin kabul edilip edilmeyeceğine karar verilecek.

    - Eğerki bu PR varolan bir hata/problem'i onarıyorsa, PR tarifinin sonuna, 
      `closes` kelimesini ve #xxxx(xxxx problem numarasıdır) ekleyin. Örnek: `closses #1337` .
      Eğerki bu PR kabul edilirse, bu GitHub'a otomatik olarak bu problemin kapatılmasını belirtir.

5. Lokal bir kopyada test edip etmediğini belirt.
    Bu, yalnızca bir Rehber makalesinin yayınlanması gibi metin içeriğinde düzenlemeler yapmayan değişiklikler yaparken çok önemlidir. Yerel sınama gerektiren değişikliklere örnek olarak, sayfanın işlevselliğini veya düzenini değiştirebilecek JavaScript, CSS veya HTML verilebilir.
