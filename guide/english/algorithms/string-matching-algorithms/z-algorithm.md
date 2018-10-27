Z Algorithm

Suppose we are given a string s of length n. The Z-function for this string is an array of length n where the i-th element is equal to the greatest number of characters starting from the position i that coincide with the first characters of s.
In other words, z[i] is the length of the longest common prefix between s and the suffix of s starting at i.

Z function can be calculated in O(n) time.

Sample Code in C++ 
*****************************************************************
#include <bits/stdc++.h>
using namespace std;
int z[100005];
void Zfunction(string &s)
{
    int n=s.size();
    int L = 0, R = 0;
    for (int i = 1; i < n; i++)
    {
        if (i > R) 
        {
            L = R = i;
            while (R < n && s[R-L] == s[R]) R++;
                z[i] = R-L; R--;
        }
        else
        {
            int k = i-L;
            if (z[k] < R-i+1) z[i] = z[k];
            else 
            {
                L = i;
                while (R < n && s[R-L] == s[R]) R++;
                z[i] = R-L; R--;
            }
        }
    }
    for(int i=0;i<n;i++)
    cout<<z[i]<<" ";
    cout<<endl;
    return;
}
int main()
{
    string x;
    cin>>x;
    Zfunction(x);   
    return 0;
}
***************************************************************

This algorithm can be used for string matching also.
The problem is: find all occurrences of the pattern p inside the text t.

To solve this problem, we create a new string s=p+⋄+t, that is, we apply string concatenation to p and t but we also put a separator character ⋄ in the middle (we'll choose ⋄ so that it will certainly not be present anywhere in the strings p or t).

Compute the Z-function for s. Then, for any i in the interval [0;length(t)−1], we will consider the corresponding value k=z[i+length(p)+1]. If k is equal to length(p) then we know there is one occurrence of p in the i-th position of t, otherwise there is no occurrence of p in the i-th position of t.

The running time (and memory consumption) is O(length(t)+length(p)).

