import java.util.Scanner;

public class findOccurrences {
    public static void findallOccurences(int arr[],int key,int i){
        if(arr.length==i){
            return ;
        }

        if(arr[i]==key){
            System.out.print(i+" ");
        }
        findallOccurences(arr, key,i+1);
    }

    public static void main(String[] args){
        int arr[]={3,2,4,5,6,2,7,2,2};
        int key=2;
        findallOccurences(arr, key, 0);
    }
}
