---
title: Git Pull Vs Git Fetch
---
Bu iki komut git kullanıcıları tarafından düzenli olarak kullanılmaktadır. 

Bağlamın hatrına, bir klon depoda çalıştığımızı hatırlayalım. Klon nedir? basitçe başka bir deponun kopyasıdır. Esasında, başka birine ait kaynak kodun kendinize ait kopyanızı yapmanızdır.

Bununla beraber, kopyanızı orjinal koda uygulanan değişikliklerle güncel tutmak için, bunları kendi klonunuza getirmelisiniz. İşte bunu da 'fetch' ve 'pull' ile yapabilirsiniz. `git fetch` yerel git'e orjinalden güncel metaveri'yi getirir (ama herhangi bir dosya transeri yapmaz. daha çok herhangi bir değişiklik uygun mu onu kontrol eder). Diğer yandan `git pull` uzak depoda ki değişiklikleri yerel kopyanıza getirir.

Örnek:

    git pull origin ankur bugfix

Bilgisayarınızda bir projenin en az üç kopyası olduğunuzu unutmayın. Biri kendi değişiklik geçmişinizle birlikte kendinize ait olan (hali hazırda kaydedilmiş olan). İkincisi değişiklik yapıp, inşa ettiğiniz çalışan kopyadır(ama hala değişiklik eklenmemiştir). Üçüncüsü ise, uzak deponun bilgisayarınızda önbelleğe alınmış kopyasıdır(büyük ihtimalle sizin kopyaladığınız deponun orjinalidir.). Uzak depo/dal'da son güncellemenizden bu yana yapılan değişiklikleri öğrenmek için 'git fetch' komutunu kullanabilirsiniz. Bu, güncellemenizin, kendi dalınızda ve çalışan kopyanızda herhangi bir değişiklik yapmadan neleri değiştireceğini görmenize yaradığı için kullanışlıdır.



    git fetch    
    git diff ...origin
