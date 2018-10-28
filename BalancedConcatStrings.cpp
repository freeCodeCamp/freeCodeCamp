#include <iostream>
#include <stack>

using namespace std;

int main() {

	string s1 = "(()))(";
	string s2 = "())())";
	
	stack <char> strStk1;
	
	string s3 = s1 + s2 + "-";
	
	bool flag1 = true, flag2 = true;
	int i = 0;
	while(s3.at(i) != '-') {
	    if(s3.at(i) == '(') {
			strStk1.push(s3.at(i));
		} else if(s3.at(i) == ')') {
			if(strStk1.empty() != true && strStk1.top() == '(') {
				strStk1.pop();
			} else {
				flag1 = false;
				break;
			}
		}
	    i++;
	}
	
	s3 = s2 + s1 + "-";
	
	i = 0;
	
	stack<char> strStk2;
	
	while(s3.at(i) != '-') {
	    if(s3.at(i) == '(') {
			strStk2.push(s3.at(i));
		} else if(s3.at(i) == ')') {
			if(strStk2.empty() != true && strStk2.top() == '(') {
				strStk2.pop();
			} else {
				flag2 = false;
				break;
			}
		}
	    i++;
	}
	
	if(flag1 == true || flag2 == true) {
		cout << "Balanced";
	} else {
		cout << "Not Balanced";
	}
	
	return 0;

}
