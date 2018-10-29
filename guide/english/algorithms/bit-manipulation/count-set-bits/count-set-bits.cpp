#include <iostream>

using namespace std;
int countSetBits (int x) {
    int count = 0;
    while (x) {
        x = x & (x - 1);
        count++;
    }

    return count;
}

int main(void) {
    int num;
    cout << "Enter a number: ";
    cin >> num;

    printf("The number of set bits (ones) in the given number are %d\n", countSetBits(num));

    return 0;
}
