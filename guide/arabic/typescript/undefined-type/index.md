---
title: Undefined Type
localeTitle: نوع غير معرف
---
## نوع غير معرف

في TypeScript ، نفس النوع الفارغ ، يكون للنوع غير المحدد قيم غير محددة. غير محددة هي قيم صالحة من كل نوع.

 `let u: undefined = undefined; 
` 

عند استخدام - علامة `--strictNullChecks` ، غير قابل `--strictNullChecks` فقط لإبطال ونوعها.

 `let s = "foo"; 
 s = null; // error, 'null' is not assignable to 'string' 
 let sn: string | null = "bar"; 
 sn = null; // ok 
 
 sn = undefined; // error, 'undefined' is not assignable to 'string | null' 
` 

مع `--strictNullChecks` ، مقياس اختياري تلقائيا بإضافة `| undefined` :

 `function f(x: number, y?: number) { 
    return x + (y || 0); 
 } 
 f(1, 2); 
 f(1); 
 f(1, undefined); 
 f(1, null); // error, 'null' is not assignable to 'number | undefined' 
`