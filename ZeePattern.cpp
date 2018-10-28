#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int a[8][8] = {{11,12,13,14,15,16,17,18},
               {21,22,23,24,25,26,27,28},
               {31,32,33,34,35,36,37,38},
               {41,42,43,44,45,46,47,48},
               {51,52,53,54,55,56,57,58},
               {61,62,63,64,65,66,67,68},
               {71,72,73,74,75,76,77,78},
               {81,82,83,84,85,86,87,88}};

void zigzig(int rb, int re, int cb, int ce) {
    //cout << rb << " " << re << " " << cb << " " << ce << endl;
    if(rb==re && cb==ce) {
        cout << a[rb][cb] << " ";
        return;
    }
    zigzig(rb, (rb+re)/2, cb, (cb+ce)/2);
    zigzig(rb, (rb+re)/2, (cb+ce)/2+1, ce);
    zigzig((rb+re)/2+1, re, cb, (cb+ce)/2);
    zigzig((rb+re)/2+1, re, (cb+ce)/2+1, ce);
}

int main() {
    
    
    
    for(int i=0;i<8;i++){
        for(int j=0;j<8;j++){
            cout<<a[i][j]<<" ";
        }
        cout<<endl;
    }
    cout << endl;
    
    zigzig(0, 7, 0, 7);
    
    
    return 0;
}
