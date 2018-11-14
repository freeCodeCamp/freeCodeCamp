---
title: Throws
localeTitle: يلقي
---
## يلقي

يتم استخدام الكلمة الأساسية Java لخطاب للإعلان عن استثناء. يعطي معلومات للمبرمج أنه قد تحدث استثناء لذلك فمن الأفضل للمبرمج توفير رمز معالجة الاستثناء بحيث يمكن الحفاظ على التدفق العادي.

**_مثال:_**

 `import java.io.IOException; 
 class Testthrows1{ 
  void m()throws IOException{ 
    throw new IOException("device error");//checked exception 
  } 
  void n()throws IOException{ 
    m(); 
  } 
  void p(){ 
   try{ 
    n(); 
   }catch(Exception e){System.out.println("exception handled");} 
  } 
  public static void main(String args[]){ 
   Testthrows1 obj=new Testthrows1(); 
   obj.p(); 
   System.out.println("normal flow..."); 
  } 
 } 
`