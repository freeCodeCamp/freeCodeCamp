import java.util.Scanner;

class Largerno {

    public static void main(String[] args)

    {
        Scanner sc = new Scanner(System.in);
        int n1, n2;
        System.out.println("Enter first number");
        n1 = sc.nextInt();
        System.out.println("Enter second number");
        n2 = sc.nextInt();
        if (n1 > n2) {
            System.out.println("the largest number is" + n1);
        } else {
            System.out.println("the largest number is" + n2);
        }
    }
}
