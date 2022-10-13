#include<iostream>
#include<cmath>
// the user define function is declaired here to get the factorial
unsigned int fac(unsigned int n);

using namespace std;


int main()
{
//-------defining variables and initializing them-------------    
    double n,x,i,ans=0,ans1=0,ans2=0,ans3=0,ans4=0,ans5=0,power;
    char redo;
//--------Printing my name on screen----------------    
    cout<<"Welcome to the series program  written by Amit Dudhankar"<<endl;
    cout<<"***************************************************************"<<endl;
    cout<<endl<<endl<<endl;
//--here do loop is used so that the program can be used more then one time
//without exiting the run screen---------------------------    
    do
    {
 //----receiving the variables from input--------------         
    
     cout<<" Please enter two numbers to apply your requested operation"<<endl;
    cout<<"enter the value of n:";
    cin>>n;
    cout<<"enter the value of x:" ;
    cin>>x;
    cout<<endl;
/*If the series 1+((n*x)/fac(1))-(n*(n-1)*pow(x,2)/fac(2))+(n*(n-1)*(n-2)*pow(x,3)/fac(3))
........is  considered as binomial series then the result equal to (2-pow((1-x),n)
therefore below formulae is used*/

         ans=2-pow((1-x),n);
cout<<"-------------------------------------------------------------------------"<<endl;         
cout<<"The result of the n term if the series is considered as Binomial series\n";
cout<<"(1+((n*x)/fac(1))-(n*(n-1)*pow(x,2)/fac(2))+(n*(n-1)*(n-2)*pow(x,3)/fac(3))....\n";
cout<<"is ="<<ans<<endl;
cout<<"-------------------------------------------------------------------------"<<endl;
         
         
/* 1+((n*x)/fac(1))-(n*(n-1)*pow(x,2)/fac(2))+(n*((n-2)*pow(x,3)/fac(3))......
 i considered then the reault is given below*/      

  ans3=1+((n*x)/fac(1));
  //the ans2 and ans5 has to be done zero every time it enters the loop
  ans2=0;
  ans5=0;
   // initialising for loop  
  for( i=1;i<=n;i++){
  //------calculating the requested equation for inputs------------- 
                    ans2=ans2+ans5;
                    ans5=-(n*(n-i)*pow((-x),(i+1))/fac(i+1));
//the below expressions are to check the status of the loop so thet we can moniter the loop at everzý point                    
                    /*cout<<"value of i after each loop="<<i<<endl;
                    cout<<"valu of n after each loop="<<n<<endl;
                    power=pow((-x),(i+1));
                   cout<<"valu of power term after each loop="<< power<<endl;
                    cout<<"valu of ans2 after each loop="<<ans2<<endl;
                    cout<<"valu of ans5 after each loop="<<ans5<<endl;
                    */
                    
                    }
 //------- printing the results on screen----------- 
 cout<<endl;                    
 cout<<endl;                    
 cout<<"-------------------------------------------------------------------------"<<endl;
 cout<<"The result of the n term if the series is not considered as Binomial\n ";
 cout<<"series is given below"<<endl;
cout<<endl;  
 cout<<"The sum of  1st two termsof n termseries is ="<<ans3<<endl;                    
 cout<<"The sum of n terms except 1st two term ="<<ans2<<endl;
 cout<<endl;         
                                      
                    ans4=ans2+ans3;
cout<<"The final result of the n term  series is  ="<<ans4; 
cout<<endl;
cout<<"-------------------------------------------------------------------------"<<endl;           
         
     //----now once again the program will ask the user if want to continue or not          
           cout<<"enter y or Y to continue:";
           cin>>redo;
           cout<<endl<<endl;

           }
           while(redo=='y'||redo=='Y');
           
   system("pause");
    return 0;
    
    }
// the user body of function is given below    
    unsigned int fac(unsigned int n)
     {
if (n == 0)
 {
return 1;
}
else {
return n * fac(n-1);
}
}
