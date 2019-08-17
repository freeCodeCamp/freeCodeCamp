---
title: Merge Sort
localeTitle: Merge Sort
---
## Merge Sort

Merge Sort é um algoritmo [Divide and Conquer](https://guide.freecodecamp.org/algorithms/divide-and-conquer-algorithms) . Ele divide a matriz de entrada em duas metades, chama-se para as duas metades e, em seguida, mescla as duas metades classificadas. A maior parte do algoritmo recebe dois arrays ordenados, temos que mesclá-los em um único array ordenado. Existe algo conhecido como o [Algoritmo de Dois Dedos](http://www.geeksforgeeks.org/merge-two-sorted-arrays/) que nos ajuda a juntar duas matrizes ordenadas. Usando esta sub-rotina e chamando a função de mesclagem de mesclagem nas metades da matriz recursivamente nos dará a matriz ordenada final que estamos procurando.

Como esse é um algoritmo baseado em recursão, temos uma relação de recorrência para ele. Uma relação de recorrência é simplesmente uma maneira de representar um problema em termos de seus subproblemas.

`T(n) = 2 * T(n / 2) + O(n)`

Colocando-o em inglês simples, dividimos o subproblema em duas partes em cada etapa e temos uma quantidade linear de trabalho que temos que fazer para mesclar as duas metades classificadas juntas em cada etapa.
```
T(n) = 2T(n/2) + n 
     = 2(2T(n/4) + n/2) + n 
     = 4T(n/4) + n + n 
     = 4(2T(n/8) + n/4) + n + n 
     = 8T(n/8) + n + n + n 
     = nT(n/n) + n + ... + n + n + n 
     = n + n + ... + n + n + n 
```

Contando o número de repetições de n na soma no final, vemos que há lg n + 1 delas. Assim, o tempo de execução é n (lg n + 1) = n l n n + n. Observamos que n ng n + n <n lg n + n lg n = 2n lg n para n> 0, então o tempo de execução é O (n lg n).

```
MergeSort(arr[], left,  right): 
 If right > l: 
     1. Find the middle point to divide the array into two halves: 
             mid = (left+right)/2 
     2. Call mergeSort for first half: 
             Call mergeSort(arr, left, mid) 
     3. Call mergeSort for second half: 
             Call mergeSort(arr, mid+1, right) 
     4. Merge the two halves sorted in step 2 and 3: 
             Call merge(arr, left, mid, right) 
 ``` 
 
 ![Merge Sort Algorithm](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Merge_sort_algorithm_diagram.svg/300px-Merge_sort_algorithm_diagram.svg.png) 
 
 ### Propriedades: 
 * Complexidade Espacial: O(n) 
 * Complexidade Temporal: O(n*log(n)). A complexidade temporal para o Merge Sort pode não ser óbvia desde o primeiro olhar. O fator log (n) que entra é por causa da relação de recorrência que mencionamos antes. 
 * Classificação no local: não em uma implementação típica 
 * Estável: Sim
 * Paralelizável: Sim (Várias variantes paralelas são discutidos na terceira edição do Cormen, Leiserson, Rivest, e Introdução de Stein aos algoritmos.) 
 
 ### Visualização: 
 * <a href='https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html'>USFCA</a> 
 * <a href='https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/'>HackerEarth</a> 
  
 ### Implementação em JS
```js
const list = [23, 4, 42, 15, 16, 8, 3]

const mergeSort = (list) =>{
  if(list.length <= 1) return list;
  const middle = list.length / 2 ;
  const left = list.slice(0, middle);
  const right = list.slice(middle, list.length);
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  var result = [];
  while(left.length || right.length) {
    if(left.length && right.length) {
      if(left[0] < right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    } else if(left.length) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }
  return result;
}

console.log(mergeSort(list)) // [ 3, 4, 8, 15, 16, 23, 42 ]
```

### Implementação em C 
```C
#include<stdlib.h> 
#include<stdio.h>
void merge(int arr[], int l, int m, int r) 
{ 
    int i, j, k; 
    int n1 = m - l + 1; 
    int n2 =  r - m; 
  
    
    int L[n1], R[n2]; 
  
    for (i = 0; i < n1; i++) 
        L[i] = arr[l + i]; 
    for (j = 0; j < n2; j++) 
        R[j] = arr[m + 1+ j];
    i = 0; 
    j = 0; 
    k = l; 
    while (i < n1 && j < n2) 
    { 
        if (L[i] <= R[j]) 
        { 
            arr[k] = L[i]; 
            i++; 
        } 
        else
        { 
            arr[k] = R[j]; 
            j++; 
        } 
        k++; 
    } 
  
    
    while (i < n1) 
    { 
        arr[k] = L[i]; 
        i++; 
        k++; 
    } 
  
    while (j < n2) 
    { 
        arr[k] = R[j]; 
        j++; 
        k++; 
    } 
} 
  
void mergeSort(int arr[], int l, int r) 
{ 
    if (l < r) 
    {  
        int m = l+(r-l)/2; 
  
        
        mergeSort(arr, l, m); 
        mergeSort(arr, m+1, r); 
  
        merge(arr, l, m, r); 
    } 
}
void printArray(int A[], int size) 
{ 
    int i; 
    for (i=0; i < size; i++) 
        printf("%d ", A[i]); 
    printf("\n"); 
} 
int main() 
{ 
    int arr[] = {12, 11, 13, 5, 6, 7}; 
    int arr_size = sizeof(arr)/sizeof(arr[0]); 
  
    printf("Given array is \n"); 
    printArray(arr, arr_size); 
  
    mergeSort(arr, 0, arr_size - 1); 
  
    printf("\nSorted array is \n"); 
    printArray(arr, arr_size); 
    return 0; 
```

### Implementação em C++ 
 
Vamos considerar o array A = {2,5,7,8,9,12,13}
e array B = {3,5,6,9,15} e queremos que o array C esteja em ordem crescente também. 
```cpp
void mergesort(int A[],int size_a,int B[],int size_b,int C[])
{
     int token_a,token_b,token_c;
     for(token_a=0, token_b=0, token_c=0; token_a<size_a && token_b<size_b; )
     {
          if(A[token_a]<=B[token_b])
               C[token_c++]=A[token_a++];
          else
               C[token_c++]=B[token_b++];
      }
      
      if(token_a<size_a)
      {
          while(token_a<size_a)
               C[token_c++]=A[token_a++];
      }
      else
      {
          while(token_b<size_b)
               C[token_c++]=B[token_b++];
      }

void merge(int arr[], int l, int m, int r) 
{ 
    int i, j, k; 
    int n1 = m - l + 1; 
    int n2 =  r - m; 
    int L[n1], R[n2]; 
  
    for (i = 0; i < n1; i++) 
        L[i] = arr[l + i]; 
    for (j = 0; j < n2; j++) 
        R[j] = arr[m + 1+ j]; 
        
    i = 0; 
    j = 0;
    k = l;  
    while (i < n1 && j < n2) 
    { 
        if (L[i] <= R[j]) 
        { 
            arr[k] = L[i]; 
            i++; 
        } 
        else
        { 
            arr[k] = R[j]; 
            j++; 
        } 
        k++; 
    } 
    
    while (i < n1) 
    { 
        arr[k] = L[i]; 
        i++; 
        k++; 
    } 
    
    while (j < n2) 
    { 
        arr[k] = R[j]; 
        j++; 
        k++; 
    } 
} 

void mergeSort(int arr[], int l, int r) 
{ 
    if (l < r) 
    { 
        int m = l+(r-l)/2; 
  
        mergeSort(arr, l, m); 
        mergeSort(arr, m+1, r); 
  
        merge(arr, l, m, r); 
    } 
} 
```

### Implementação em Python

```python
def merge(left,right,compare):
	result = [] 
	i,j = 0,0
	while (i < len(left) and j < len(right)):
		if compare(left[i],right[j]):
			result.append(left[i])
			i += 1
		else:
			result.append(right[j])
			j += 1
	while (i < len(left)):
		result.append(left[i])
		i += 1
	while (j < len(right)):
		result.append(right[j])
		j += 1
	return result

def merge_sort(arr, compare = lambda x, y: x < y):
     #Used lambda function to sort array in both(increasing and decresing) order.
     #By default it sorts array in increasing order
	if len(arr) < 2:
		return arr[:]
	else:
		middle = len(arr) // 2
		left = merge_sort(arr[:middle], compare)
		right = merge_sort(arr[middle:], compare)
		return merge(left, right, compare) 

arr = [2,1,4,5,3]
print(merge_sort(arr))
```

### Implementação em Java
```java
public class mergesort {

	public static int[] mergesort(int[] arr,int lo,int hi) {
		
		if(lo==hi) {
			int[] ba=new int[1];
			ba[0]=arr[lo];
			return ba;
		}
		
		int mid=(lo+hi)/2;
		int arr1[]=mergesort(arr,lo,mid);
		int arr2[]=mergesort(arr,mid+1,hi);
		return merge(arr1,arr2);
	}
	
	public static int[] merge(int[] arr1,int[] arr2) {
		int i=0,j=0,k=0;
		int n=arr1.length;
		int m=arr2.length;
		int[] arr3=new int[m+n];
		while(i<n && j<m) {
			if(arr1[i]<arr2[j]) {
				arr3[k]=arr1[i];
				i++;
			}
			else {
				arr3[k]=arr2[j];
				j++;
			}
			k++;
		}
		
		while(i<n) {
			arr3[k]=arr1[i];
			i++;
			k++;
		}
		
		while(j<m) {
			arr3[k]=arr2[j];
			j++;
			k++;
		}
		
		return arr3;
		
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int arr[]= {2,9,8,3,6,4,10,7};
		int[] so=mergesort(arr,0,arr.length-1);
		for(int i=0;i<arr.length;i++)
			System.out.print(so[i]+" ");
	}

}

```
### Exemplo em Java
```java
public class mergesort {
  public static int[] mergesort(int[] arr, int lo, int hi) {
    if (lo == hi) {
      int[] ba = new int[1];
      ba[0] = arr[lo];
      return ba;
    }
    int mid = (lo + hi) / 2;
    int arr1[] = mergesort(arr, lo, mid);
    int arr2[] = mergesort(arr, mid + 1, hi);
    return merge(arr1, arr2);
  }

  public static int[] merge(int[] arr1, int[] arr2) {
    int i = 0, j = 0, k = 0;
    int n = arr1.length;
    int m = arr2.length;
    int[] arr3 = new int[m + n];
    while (i < n && j < m) {
      if (arr1[i] < arr2[j]) {
        arr3[k] = arr1[i];
        i++;
      } else {
        arr3[k] = arr2[j];
        j++;
      }
      k++;
    }
    while (i < n) {
      arr3[k] = arr1[i];
      i++;
      k++;
    }
    while (j < m) {
      arr3[k] = arr2[j];
      j++;
      k++;
    }
    return arr3;
  }

  public static void main(String[] args) {
    int arr[] = {2, 9, 8, 3, 6, 4, 10, 7};
    int[] so = mergesort(arr, 0, arr.length - 1);
    for (int i = 0; i < arr.length; i++)
      System.out.print(so[i] + " ");
  }
}
```

### Implementação em MATLAB
```matlab

a = [9,4,7,3,8,5,1,6,2];

[sorted] = mergeSort(a);

function [sorted] = mergeSort(unsorted)
    len = length(unsorted);
    if len == 1
        sorted = unsorted;
        return;
    end
    mid = ceil((len)/2);
    left = mergeSort(unsorted(1:mid));
    right = mergeSort(unsorted(mid+1:end));
    
    sorted = mergeLR(left, right);
       
end

function [sorted] = mergeLR(left, right)
    sorted = [left right];                              % add two splited array together
    j = 1;                                              % index for 'sorted'
    k = 1;                                              % index for 'left'
    for i = 1:1:length(right)
        % going through every element of the 'right'
        if right(i) < left(k)
            sorted(j) = right(i);                       % move the 'right' element before 
            sorted(j+1:(j+length(left(k:end)))) = left(k:end);      % shift the left elemts 
            j = j+1;
        else
            while (k <= length(left)) && (right(i) > left(k))
                k = k+1;
                j = j+1;
            end
            sorted(j) = right(i);
            sorted(j+1:(j+length(left(k:end)))) = left(k:end);
            j = j+1;
        end
    end

end

```

### Implementação em Java
```Java
class MergeSort 
{
    void merge(int arr[], int l, int m, int r) 
    {
        int n1 = m - l + 1; 
        int n2 = r - m; 
        int L[] = new int [n1]; 
        int R[] = new int [n2];
        for (int i=0; i<n1; ++i) 
            L[i] = arr[l + i]; 
        for (int j=0; j<n2; ++j) 
            R[j] = arr[m + 1+ j]; 
        int i = 0, j = 0; 
        int k = l; 
        while (i < n1 && j < n2) 
        { 
            if (L[i] <= R[j]) 
            { 
                arr[k] = L[i]; 
                i++; 
            } 
            else
            { 
                arr[k] = R[j]; 
                j++; 
            } 
            k++; 
        } 
        while (i < n1) 
        { 
            arr[k] = L[i]; 
            i++; 
            k++; 
        } 
        while (j < n2) 
        { 
            arr[k] = R[j]; 
            j++; 
            k++; 
        } 
    } 
    void sort(int arr[], int l, int r) 
    { 
        if (l < r) 
        {
            int m = (l+r)/2;
            sort(arr, l, m); 
            sort(arr , m+1, r); 
            merge(arr, l, m, r); 
        } 
    } 
    static void printArray(int arr[]) 
    { 
        int n = arr.length; 
        for (int i=0; i<n; ++i) 
            System.out.print(arr[i] + " "); 
        System.out.println(); 
    }
    public static void main(String args[]) 
    { 
        int arr[] = {12, 11, 13, 5, 6, 7}; 
        System.out.println("Given Array"); 
        printArray(arr); 
        MergeSort ob = new MergeSort(); 
        ob.sort(arr, 0, arr.length-1);
        System.out.println("\n The Sorted array is : "); 
        printArray(arr); 
    } 
}
```

 ### Vídeos relevantes no canal do YouTube freeCodeCamp
 * <a href='https://youtu.be/TzeBrDU-JaY'>Merge Sort algorithm - MyCodeSchool</a>
 
 ### Outros recursos:
 * <a href='https://en.wikipedia.org/wiki/Merge_sort' target='_blank' rel='nofollow'>Wikipedia</a>
 * <a href='www.geeksforgeeks.org/merge-sort' target='_blank' rel='nofollow'>GeeksForGeeks</a>
 * <a href='https://youtu.be/sWtYJv_YXbo' target='_blank' rel='nofollow'>Merge Sort - CS50</a>
