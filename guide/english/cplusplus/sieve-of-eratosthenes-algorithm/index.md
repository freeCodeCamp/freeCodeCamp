### Function to Print all prime no.less or equal to n using sieve of Erastosthenes

'''
void SieveOfEratosthenes(int n) 
    {
      bool pr[n+1]; 
      memset(pr, true, sizeof(pr)); 
  
      for (int p=2; p*p<=n; p++) 
      { 
        
        if (pr[p] == true) 
        { 
         
            for (int i=p*2; i<=n; i += p) 
                pr[i] = false; 
        } 
    } 
  
     
    for (int p=2; p<=n; p++) 
       if (pr[p]) 
          cout << p << " "; 
} 
'''
