---
title: If in Go
localeTitle: إذا كان في الذهاب
---
# إذا كان في الذهاب

الذهاب ل `if` التصريحات هي مثل لها `for` حلقات. لا يجب أن يكون التعبير محاطًا بأقواس `(` `)` لكن الأقواس `{` `}` مطلوبة.

 `func sqrt(x float64) string { 
    if x < 0 { 
        return sqrt(-x) + "i" 
    } 
    return fmt.Sprint(math.Sqrt(x)) 
 } 
` 

مثل `for` ، و `if` يمكن بيان تبدأ بيان مقتضب لتنفيذ قبل الشرط.

المتغيرات التي أعلنها البيان هي فقط في نطاق حتى نهاية `if` .

 `func pow(x, n, lim float64) float64 { 
    if v := math.Pow(x, n); v < lim { 
        return v 
    } 
    return lim 
 } 
` 

## إذا و غير ذلك

المتغيرات أعلن داخل `if` بيان مقتضب تتوفر داخل أي من أيضا `else` كتل.

 `package main 
 
 import ( 
    "fmt" 
    "math" 
 ) 
 
 func pow(x, n, lim float64) float64 { 
    if v := math.Pow(x, n); v < lim { 
        return v 
    } else { 
        fmt.Printf("%g >= %g\n", v, lim) 
    } 
    // can't use v here, though 
    return lim 
 } 
 
 func main() { 
    fmt.Println( 
        pow(3, 2, 10), 
        pow(3, 3, 20), 
    ) 
 } 
` 

تشغيل البرنامج أعلاه ينتج مخرجات مشابهة للإخراج التالي - `$ go run if.go 27 >= 20 9 20`