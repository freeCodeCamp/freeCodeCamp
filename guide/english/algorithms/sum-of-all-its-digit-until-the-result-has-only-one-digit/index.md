Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.


using namespace std;
int main()
 {
	//code
        int  t;
        cin>>t;
        while(t--)
       {
           int x,n;
           cin>>n;
           x=n;
           while(x>=10)
           {
               n=x;
               x=0;
               while(n)
               {
                   x+=n%10;
                   n=n/10;
               }
           }
           cout<<x<<endl;
       }
       return 0;
}
