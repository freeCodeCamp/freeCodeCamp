---
title: Heapsort
localeTitle: نوع كومة
---
## نوع كومة

يعد Heapsort خوارزمية فرز فعالة تعتمد على استخدام أكوام أقصى / دقيقة. كومة الذاكرة المؤقتة هي بنية بيانات تستند إلى شجرة تفي خاصية كومة الذاكرة المؤقتة - وهي بحد أقصى كومة الذاكرة المؤقتة ، ويكون مفتاح أي عقدة أقل من أو يساوي مفتاح أصله (إذا كان له أصل). يمكن الاستفادة من هذه الخاصية للوصول إلى العنصر الأقصى في كومة الذاكرة المؤقتة في وقت O (logn) باستخدام أسلوب maxHeapify. نقوم بإجراء هذه العملية n مرة ، في كل مرة تحريك العنصر الأقصى في كومة الذاكرة المؤقتة إلى أعلى كومة الذاكرة المؤقتة واستخراجها من كومة الذاكرة المؤقتة إلى مصفوفة مفروزة. وهكذا ، بعد التكرارات n ، سيكون لدينا نسخة مرتبة لصفيف الإدخال. تعمل هذه الخوارزمية في زمن O (nlogn) و O (1) مساحة إضافية \[O (n) بما في ذلك المساحة المطلوبة لتخزين بيانات الإدخال\] نظرًا لأن جميع العمليات تتم في مكانها تمامًا.

أسوأ وقت لمتوسط ​​وقت اكتمال Heapsort هو O (nlogn). على الرغم من أن heapsort له تعقيد أفضل من حالة quicksort ، إلا أن التشغيل السريع الذي يتم تنفيذه بشكل جيد يعمل بشكل أسرع في الممارسة العملية. هذه خوارزمية تستند إلى مقارنة بحيث يمكن استخدامها لمجموعات البيانات غير عددية بقدر ما يمكن تعريف بعض العلاقة (خاصية كومة الذاكرة المؤقتة) عبر العناصر.

تطبيق في Java كما هو موضح أدناه:

 `import java.util.Arrays; 
 public class Heapsort { 
 
    public static void main(String[] args) { 
        //test array 
        Integer[] arr = {1, 4, 3, 2, 64, 3, 2, 4, 5, 5, 2, 12, 14, 5, 3, 0, -1}; 
        String[] strarr = {"hope you find this helpful!", "wef", "rg", "q2rq2r", "avs", "erhijer0g", "ewofij", "gwe", "q", "random"}; 
        arr = heapsort(arr); 
        strarr = heapsort(strarr); 
        System.out.println(Arrays.toString(arr)); 
        System.out.println(Arrays.toString(strarr)); 
    } 
 
    //O(nlogn) TIME, O(1) SPACE, NOT STABLE 
    public static <E extends Comparable<E>> E[] heapsort(E[] arr){ 
        int heaplength = arr.length; 
        for(int i = arr.length/2; i>0;i--){ 
            arr = maxheapify(arr, i, heaplength); 
        } 
 
        for(int i=arr.length-1;i>=0;i--){ 
            E max = arr[0]; 
            arr[0] = arr[i]; 
            arr[i] = max; 
            heaplength--; 
            arr = maxheapify(arr, 1, heaplength); 
        } 
 
        return arr; 
    } 
 
    //Creates maxheap from array 
    public static <E extends Comparable<E>> E[] maxheapify(E[] arr, Integer node, Integer heaplength){ 
        Integer left = node*2; 
        Integer right = node*2+1; 
        Integer largest = node; 
 
        if(left.compareTo(heaplength) <=0 && arr[left-1].compareTo(arr[node-1]) >= 0){ 
            largest = left; 
        } 
        if(right.compareTo(heaplength) <= 0 && arr[right-1].compareTo(arr[largest-1]) >= 0){ 
            largest = right; 
        } 
        if(largest != node){ 
            E temp = arr[node-1]; 
            arr[node-1] = arr[largest-1]; 
            arr[largest-1] = temp; 
            maxheapify(arr, largest, heaplength); 
        } 
        return arr; 
    } 
 } 
` 

التنفيذ في C ++

 `#include <iostream> 
 using namespace std; 
 void heapify(int arr[], int n, int i) 
 { 
    int largest = i; 
    int l = 2*i + 1; 
    int r = 2*i + 2; 
    if (l < n && arr[l] > arr[largest]) 
        largest = l; 
    if (r < n && arr[r] > arr[largest]) 
        largest = r; 
    if (largest != i) 
    { 
        swap(arr[i], arr[largest]); 
 
 
        heapify(arr, n, largest); 
    } 
 } 
 
 
 void heapSort(int arr[], int n) 
 { 
 
    for (int i = n / 2 - 1; i >= 0; i--) 
        heapify(arr, n, i); 
 
 
    for (int i=n-1; i>=0; i--) 
    { 
 
        swap(arr[0], arr[i]); 
 
 
        heapify(arr, i, 0); 
    } 
 } 
 void printArray(int arr[], int n) 
 { 
    for (int i=0; i<n; ++i) 
        cout << arr[i] << " "; 
    cout << "\n"; 
 } 
 int main() 
 { 
    int arr[] = {12, 11, 13, 5, 6, 7}; 
    int n = sizeof(arr)/sizeof(arr[0]); 
 
    heapSort(arr, n); 
 
    cout << "Sorted array is \n"; 
    printArray(arr, n); 
 } 
` 

### تصور

*   [USFCA](https://www.cs.usfca.edu/~galles/visualization/HeapSort.html)
*   [HackerEarth](https://www.hackerearth.com/practice/algorithms/sorting/heap-sort/tutorial/)

#### معلومات اكثر:

*   [ويكيبيديا](https://en.wikipedia.org/wiki/Quicksort)