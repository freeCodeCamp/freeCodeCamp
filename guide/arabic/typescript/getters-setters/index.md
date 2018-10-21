---
title: Getters & Setters
localeTitle: رسائل ورسائل
---# رسائل ورسائل

يدعم Typescript أيضًا `get` الخاصية `set` . تسمى Get و Set Properties (الخصائص) بالفعل Accessors. يحتوي الواصلون في خاصية على بيانات قابلة للتنفيذ مرتبطة بالحصول على (قراءة) أو إعداد (كتابة) الخاصية. يمكن أن تحتوي التصريحات على الحصول على ملحق أو تعيين ملحق أو كليهما.

 `class User { 
    private _fullName: string = ''; 
 
    get fullName() { 
        return this._fullName; 
    } 
 
    set fullName(name) { 
        this._fullName = name; 
    } 
 } 
 
 let user = new User(); 
 
 user.fullName = 'John Doe'; 
 
 console.log(user.fullName); 
`