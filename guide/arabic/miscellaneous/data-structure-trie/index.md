---
title: Data Structure Trie
localeTitle: هيكل البيانات تري
---
## مقدمة في تري

كلمة trie هي عبارة عن inflix لكلمة "re **trie** val" ، لأن trie يمكنه العثور على كلمة واحدة في قاموس يحتوي على بادئة الكلمة فقط.  
Trie هي بنية بيانات استرجاع البيانات الفعالة ، باستخدام trie ، يمكن إدخال تعقيدات البحث إلى الحد الأمثل ، أي طول السلسلة.  
إنه هيكل شجرة متعدد الاتجاهات مفيد لتخزين السلاسل على الأبجدية ، عندما نقوم بتخزينها.  
وقد تم استخدامه لتخزين قواميس كبيرة من اللغة الإنجليزية ، على سبيل المثال ، الكلمات في برامج التدقيق الإملائي.  
ومع ذلك ، فإن عقوبة على tries هي متطلبات التخزين.

## ما هو تري؟

إن trie عبارة عن شجرة تشبه بنية البيانات التي تخزن السلاسل ، وتساعدك في العثور على البيانات المرتبطة بهذه السلسلة باستخدام بادئة السلسلة.  
على سبيل المثال ، لنفترض أنك تخطط لإنشاء قاموس لتخزين السلاسل مع معانيها. يجب أن تتساءل لماذا لا يمكنني ببساطة استخدام جدول تجزئة ، للحصول على المعلومات.  
نعم ، من الواضح أنك تستطيع الحصول على معلومات باستخدام جدول تجزئة ، لكن جداول التجزئة لا يمكنها العثور إلا على البيانات التي تتطابق فيها السلسلة تمامًا مع تلك التي أضفناها. ولكن تري يعطينا القدرة على العثور على سلاسل مع البادئات المشتركة ، حرف مفقود في وقت أقل ، بالمقارنة مع جدول تجزئة.  
تريلي عادة ، يبدو شيء من هذا القبيل ،

![حاكموا](//discourse-user-assets.s3.amazonaws.com/original/2X/c/c43e222a6f9152512d73f97b8117db5c074bbc8e.png)

هذه صورة لتري ، الذي يخزن الكلمات {assoc، algo، all، also، tree، trie}.

## كيفية تنفيذ تري؟

دعونا تنفيذ trie في python ، لتخزين الكلمات مع معانيها من القاموس الإنجليزي.

 `ALPHABET_SIZE = 26 # For English 
 
 class TrieNode: 
    def __init__(self): 
        self.edges = [None]*(ALPHABET_SIZE) # Each index respective to each character. 
        self.meaning = None # Meaning of the word. 
        self.ends_here = False # Tells us if the word ends here. 
` 

وكما ترى ، يبلغ طول الحواف 26 حرفًا ، حيث يشير كل مؤشر إلى كل حرف في الأبجدية. 'A' المقابلة لـ 0 ، 'B' to 1 ، 'C' to 2… 'Z' to 25th index. إذا كان الحرف الذي تبحث عنه يشير إلى `None` ، فهذا يعني أن الكلمة غير موجودة في trie.

يجب على Trie نموذجية تنفيذ هاتين الوظيفتين على الأقل:

*   `add_word(word,meaning)`
*   `search_word(word)`
*   `delete_word(word)`

بالإضافة إلى ذلك ، يمكن للمرء أيضا إضافة شيء من هذا القبيل

*   `get_all_words()`
*   `get_all_words_with_prefix(prefix)`

#### مضيفا كلمة إلى تري

 `    def add_word(self,word,meaning): 
        if len(word)==0: 
            self.ends_here = True # Because we have reached the end of the word 
            self.meaning = meaning # Adding the meaning to that node 
            return 
        ch = word[0] # First character 
        # ASCII value of the first character (minus) the ASCII value of 'a'-> the first character of our ALPHABET gives us the index of the edge we have to look up. 
        index = ord(ch) - ord('a') 
        if self.edges[index] == None: 
            # This implies that there's no prefix with this character yet. 
            new_node = TrieNode() 
            self.edges[index] = new_node 
 
        self.edges[index].add(word[1:],meaning) #Adding the remaining word 
` 

#### استرجاع البيانات

 `    def search_word(self,word): 
        if len(word)==0: 
            if self.ends_here: 
                return True 
            else: 
                return "Word doesn't exist in the Trie" 
        ch = word[0] 
        index = ord(ch)-ord('a') 
        if self.edge[index]== None: 
            return False 
        else: 
            return self.edge[index].search_word(word[1:]) 
` 

`search_word` الدالة `search_word` ما إذا كانت الكلمة موجودة في Trie أم لا. بما أن قاموسنا هو قاموس ، فنحن بحاجة إلى جلب المعنى أيضًا ، والآن دعونا نعلن عن وظيفة للقيام بذلك.

 `    def get_meaning(self,word): 
        if len(word)==0 : 
            if self.ends_here: 
                return self.meaning 
            else: 
                return "Word doesn't exist in the Trie" 
        ch = word[0] 
        index = ord(ch) - ord('a') 
        if self.edges[index] == None: 
            return "Word doesn't exist in the Trie" 
        else: 
            return self.edges[index].get_meaning(word[1:]) 
` 

#### حذف البيانات

بحذف البيانات ، تحتاج فقط إلى تغيير المتغير `ends_here` إلى `False` . فعل ذلك لا يغير البادئات ، لكن اللقطات تحذف معنى ووجود الكلمة من trie.

 `    def delete_word(self,word): 
        if len(word)==0: 
            if self.ends_here: 
                self.ends_here = False 
                self.meaning = None 
                return "Deleted" 
            else: 
                return "Word doesn't exist in the Trie" 
        ch = word[0] 
        index = ord(ch) - ord('a') 
        if self.edges[index] == None: 
            return "Word doesn't exist in the Trie" 
        else: 
            return self.edges[index].delete_word(word[1:]) 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CWbr)

## مصادر

*   لمزيد من القراءة ، يمكنك تجربة هذا البرنامج التعليمي [Topcoder](https://www.topcoder.com/community/data-science/data-science-tutorials/using-tries/) .
*   أيضا ، تعليمي من [geeksforgeeks](http://www.geeksforgeeks.org/trie-insert-and-search/)