
#include <iostream>
using namespace std;

int main() {
	int n;
	cin>>n;
	while(n--)
	{
	    int a;
	    cin>>a;
	    if(a==3)
	    {
	        cout<<1<<" "<<2<<" "<<3<<endl;
	        continue;
	    }
	    cout<<a<<" "<<a-2<<" ";
	    for(int i=1;i<a-3;i++)
	    {
	        cout<<i<<" ";}
	        cout<<a-3<<" "<<a-1<<" "<<endl;
	    
	}
	return 0;
}