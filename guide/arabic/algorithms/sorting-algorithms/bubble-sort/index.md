---
title: Bubble Sort
localeTitle: فقاعة الفرز
---
## فقاعة الفرز

Bubble Sort هي أبسط خوارزمية الفرز التي تعمل من خلال تبديل العناصر المتجاورة بشكل متكرر إذا كانت بترتيب خاطئ.

هذه خوارزمية فرز بطيئة جدًا مقارنة مع خوارزميات مثل Quicksort ، مع تعقيد الحالة الأسوأ O (n ^ 2). ومع ذلك ، فإن المقايضة هي أن هذا النوع من الفقاعات هو واحد من أسهل خوارزميات الفرز لتطبيق من الصفر.

### مثال:

#### أول إجتياز:

(5 1 4 2 8) -> (1 5 4 2 8) ، هنا ، تقارن الخوارزمية بين العنصرين الأولين ، ومقايضات منذ 5> 1.

(1 5 4 2 8) -> (1 4 5 2 8) ، مبادلة منذ 5> 4

(1 4 5 2 8) -> (1 4 2 5 8) ، مبادلة منذ 5> 2

(1 4 2 5 8) -> (1 4 2 5 8) ، الآن ، بما أن هذه العناصر مرتبة بالفعل (8> 5) ، لا تقوم الخوارزمية بتبديلها.

#### الممر الثاني:

(1 4 2 5 8) -> (1 4 2 5 8)

(1 4 2 5 8) -> (1 2 4 5 8) ، مبادلة منذ 4> 2

(1 2 4 5 8) -> (1 2 4 5 8)

(1 2 4 5 8) -> (1 2 4 5 8)

الآن ، تم فرز الصفيف بالفعل ، لكن خوارزمياتنا لا تعرف ما إذا كانت قد اكتملت. تحتاج الخوارزمية إلى تمرير كامل بدون أي مبادلة لمعرفة أنه يتم فرزها.

#### الممر الثالث:

(1 2 4 5 8) -> (1 2 4 5 8)

(1 2 4 5 8) -> (1 2 4 5 8)

(1 2 4 5 8) -> (1 2 4 5 8)

(1 2 4 5 8) -> (1 2 4 5 8)

#### الخصائص

*   تعقيد الفضاء: O (1)
*   أفضل أداء للحالة: O (n)
*   متوسط ​​أداء الحالة: O (n \* n)
*   أسوأ أداء للحالة: O (n \* n)
*   مستقرة: نعم

### شرح الفيديو

[نوع فقاعة بطريقة سهلة](https://www.youtube.com/watch?v=Jdtq5uKz-w4)

سيستخدم هذا الرمز الفرز الفقاعي لفرز الصفيف.

 `let arr = [1, 4, 7, 45, 7,43, 44, 25, 6, 4, 6, 9]; 
 let sorted = false 
 
 while(!sorted) { 
  sorted = true 
  for(var i=0; i < arr.length; i++) { 
    if(arr[i] < arr[i-1]) { 
      let temp = arr[i]; 
      arr[i] = arr[i-1]; 
      arr[i-1] = temp; 
      sorted = false; 
    } 
  } 
 } 
` 

### الخصائص:

*   تعقيد الفضاء: O (1)
*   تعقيد الوقت: O (n)، O (n \* n)، O (n \* n) لحالات أفضل ومتوسط ​​وأسوأ على التوالي.
*   في المكان: نعم
*   مستقرة: نعم

\======= هنا هو خوارزمية مكتوبة في جاوة.

 `public class bubble-sort { 
    static void sort(int[] arr) { 
        int n = arr.length; 
        int temp = 0; 
         for(int i=0; i < n; i++){ 
                 for(int x=1; x < (ni); x++){ 
                          if(arr[x-1] > arr[x]){ 
                                 temp = arr[x-1]; 
                                 arr[x-1] = arr[x]; 
                                 arr[x] = temp; 
                         } 
 
                 } 
         } 
 
    } 
    public static void main(String[] args) { 
 
        for(int i=0; i < 15; i++){ 
            int arr[i] = (int)(Math.random() * 100 + 1); 
        } 
 
                System.out.println("array before sorting\n"); 
                for(int i=0; i < arr.length; i++){ 
                        System.out.print(arr[i] + " "); 
                } 
                bubbleSort(arr); 
                System.out.println("\n array after sorting\n"); 
                for(int i=0; i < arr.length; i++){ 
                        System.out.print(arr[i] + " "); 
                } 
 
        } 
 } 
` 

\=======

### التنفيذ المتكرر للفرز الفقاعي.

 `void bubblesort(int arr[], int n) 
 { 
    if(n==1)    //Initial Case 
        return; 
 
    for(int i=0;i<n-1;i++)  //After this pass the largest element will move to its desired location. 
    { 
        if(arr[i]>arr[i+1]) 
        { 
            temp=arr[i]; 
            arr[i]=arr[i+1]; 
            arr[i+1]=temp; 
        } 
    } 
 
    bubblesort(arr,n-1);    //Recursion for remaining array 
 } 
` 

### معلومات اكثر

*   [ويكيبيديا](https://en.wikipedia.org/wiki/Bubble_sort)
*   [خوارزمية فرز الفقاعة - CS50](https://youtu.be/Ui97-_n5xjo)
*   [خوارزمية فرز الفقاعة - GeeksForGeeks (مقالة)](http://www.geeksforgeeks.org/bubble-sort)
*   [خوارزمية فرز الفقاعة - MyCodeSchool (فيديو)](https://www.youtube.com/watch?v=Jdtq5uKz-w4)
*   [Algorithms: Bubble Sort - HackerRank (فيديو)](https://www.youtube.com/watch?v=6Gv8vg0kcHc)
*   [خوارزمية فرز الفقاعة - GeeksForGeeks (فيديو)](https://www.youtube.com/watch?v=nmhjrI-aW5o)
*   [فرز التصور فقاعة](https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/)