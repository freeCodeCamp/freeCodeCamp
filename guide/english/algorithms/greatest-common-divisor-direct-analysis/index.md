---
title: Greatest Common Divisor Direct Analysis
---
## Greatest Common Divisor Direct Analysis

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/greatest-common-divisor-direct-analysis/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

## Algorithm Explanation

This algorithm takes any two numbers and finds the greatest common divisor. To do this, it reads in any two numbers (a & b) and makes sure that a is greater than b. It then divides a by b and calculates the remainder. Once it finds this, the value of b becomes a, and the value of the remainder overwrites b. The program repeats itself until b = 0. Once this happens, the value of a will be the greatest common divisor of the two numbers. 

#### Java for Greatest Common Divisor Direct Analysis

import java.util.Scanner;

class GCD {
 
    public static void main(String[] args) {
       
       int a; //larger number
       int b; //smaller number
       int r; //remainer variable
       int t; //used to make a > b
       Scanner input = new Scanner( System.in );
       
       System.out.println(" Input a number ");
       a = input.nextInt(); //allows the user to input a number and reads it in
       
       System.out.println("Input another number ");
       b = input.nextInt(); //allows the user to input a number and reads it in
       
       while (b > a) //this loop assures that a will be greater than b
       {
        t = a;
        a = b;
        b = t;
       }
       
       while (b > 0)
       {
        r= a % b; //calculates the remainer of a/b
        a = b; //moves variables
        b = r; //moves variables
       }
       
       System.out.println("The GCD is " + a); //prints results in the program
       
     }// of main
} // of program

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


