#include<iostream>
using namespace std;
int main(){
	
	//Array:-
	int Marks[]={96,97,98,99};
	cout<<"Showing Marks:"<<endl;
	cout<<Marks[0]<<endl;
	cout<<Marks[1]<<endl;
	cout<<Marks[2]<<endl;
	 Marks[3]=98; //Modification:-
	cout<<Marks[3]<<endl;
	
	int MathMarks[4];
	MathMarks[0]=91;
	MathMarks[1]=92;
	MathMarks[2]=93;
	MathMarks[3]=94;
	
	cout<<"Showing Maths Marks:"<<endl;
	cout<<MathMarks[0]<<endl;
	cout<<MathMarks[1]<<endl;
	cout<<MathMarks[2]<<endl;
	cout<<MathMarks[3]<<endl;
	
	//Using While loop:-
	cout<<"marks using while loop:"<<endl;
	int i=0;
	do
{
		cout<<"The value of Marks "<<i<<" is: "<<Marks[i]<<endl;
		i++;
	}	while(i<4);
	
	
	
	return 0;
}
