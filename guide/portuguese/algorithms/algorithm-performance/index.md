---
title: Algorithm Performance
localeTitle: Desempenho do Algoritmo
---
Em matemática, notação big-O é um simbolismo usado para descrever e comparar o _comportamento limitante_ de uma função.  
O comportamento limitador de uma função é como a função atua à medida que tende a um valor particular e, na notação big-O, é geralmente como ela se aproxima do infinito.  
Em resumo, a notação big-O é usada para descrever o crescimento ou declínio de uma função, geralmente com relação a outra função.

no design de algoritmos, normalmente usamos notação big-O, porque podemos ver quão bom ou ruim um algoritmo funcionará no pior modo. mas tenha isso em mente, nem sempre é o caso, porque o pior caso pode ser super raro e, nesses casos, calculamos o caso médio. por ora, para que não seja notado a notação big-O.

Em matemática, notação big-O é um simbolismo usado para descrever e comparar o _comportamento limitante_ de uma função.

O comportamento limitante de uma função é como a função atua à medida que ela se aproxima de um valor particular e, na notação big-O, geralmente ela se aproxima do infinito.

Em resumo, a notação big-O é usada para descrever o crescimento ou declínio de uma função, geralmente com relação a outra função.

NOTA: x ^ 2 é equivalente a x \* x ou 'x-quadrado'\]

Por exemplo, dizemos que x = O (x ^ 2) para todo x> 1 ou, em outras palavras, x ^ 2 é um limite superior em x e, portanto, cresce mais rápido.  
O símbolo de uma afirmação como x = O (x ^ 2) para todo x> _n_ pode ser substituído por x <= x ^ 2 para todo x> _n_ onde _n_ é o número mínimo que satisfaz a afirmação, neste caso 1.

Efetivamente, dizemos que uma função f (x) que é O (g (x)) cresce mais lentamente que g (x).

Comparativamente, na ciência da computação e no desenvolvimento de software, podemos usar a notação big-O para descrever a eficiência dos algoritmos por meio de sua complexidade de tempo e espaço.

**Complexidade** de **espaço** de um algoritmo refere-se à sua pegada de memória em relação ao tamanho de entrada.

Especificamente, ao usar a notação big-O, estamos descrevendo a eficiência do algoritmo em relação a uma entrada: _n_ , geralmente à medida que _n se_ aproxima do infinito.  
Ao examinar algoritmos, geralmente queremos menor complexidade de tempo e espaço. A complexidade temporal de o (1) é indicativa de tempo constante.

Através da comparação e análise de algoritmos, somos capazes de criar aplicações mais eficientes.

Para o desempenho do algoritmo, temos dois fatores principais:

*   **Tempo** : precisamos saber quanto tempo leva para executar um algoritmo para nossos dados e como ele crescerá de acordo com o tamanho dos dados (ou, em alguns casos, outros fatores, como número de dígitos e etc).
    
*   **Espaço** : nossa memória é fina, então temos que saber quanto espaço livre precisamos para esse algoritmo e, como o tempo, precisamos ser capazes de rastrear seu crescimento.
    

As seguintes 3 notações são usadas principalmente para representar a complexidade de tempo dos algoritmos:

1.  **Θ Notação** : A notação teta limita as funções acima e abaixo, de modo que define o comportamento exato. podemos dizer que temos a notação theta quando o pior e o melhor caso são os mesmos.
    
    > G (g (n)) = {f (n): existem constantes positivas c1, c2 e n0 tais que 0 <= c1 _g (n) <= f (n) <= c2_ g (n) para todo n> = n0}
    
2.  **Big O Notation** : A notação Big O define um limite superior de um algoritmo. Por exemplo, Insertion Sort toma o tempo linear no melhor caso e no tempo quadrático no pior dos casos. Podemos dizer com segurança que a complexidade temporal da ordenação Insertion é _O_ ( _n ^ 2_ ).
    
    > O (g (n)) = {f (n): existem constantes positivas c e n0 tais que 0 <= f (n) <= cg (n) para todo n> = n0}
    
3.  **Ω Notação** : Ω notação fornece um limite inferior ao algoritmo. mostra a resposta mais rápida possível para esse algoritmo. > Ω (g (n)) = {f (n): existem constantes positivas c e n0 tais que 0 <= cg (n) <= f (n) para todo n> = n0}.
    

## Exemplos

Como exemplo, podemos examinar a complexidade temporal do algoritmo [\[bubble sort\]](https://github.com/FreeCodeCamp/wiki/blob/master/Algorithms-Bubble-Sort.md#algorithm-bubble-sort) e expressá-lo usando a notação big-O.

#### Tipo de bolha:

```javascript
    // Function to implement bubble sort 
    void bubble_sort(int array<a href='http://bigocheatsheet.com/' target='_blank' rel='nofollow'>], int n) 
    { 
        // Here n is the number of elements in array 
        int temp; 
        for(int i = 0; i < n-1; i++) 
        { 
            // Last i elements are already in place 
            for(int j = 0; j < ni-1; j++) 
            { 
                if (array[j] > array[j+1]) 
                { 
                    // swap elements at index j and j+1 
                    temp = array[j]; 
                    array[j] = array[j+1]; 
                    array[j+1] = temp; 
                } 
            } 
        } 
    } 
```

Observando esse código, podemos ver que, no melhor cenário em que a matriz já está classificada, o programa fará apenas _n_ comparações, pois não ocorrerão swaps.  
Portanto, podemos dizer que a melhor complexidade de tempo do tipo bubble type é O ( _n_ ).

Examinando o pior cenário em que o array está em ordem reversa, a primeira iteração fará _n_ comparações, enquanto o próximo terá que fazer comparações _n_ - 1 e assim por diante, até que apenas uma comparação seja feita.  
A notação big-O para este caso é, portanto, _n_ \* \[( _n_ - 1) / 2\] que = 0.5 _n_ ^ 2 - 0.5 _n_ = O ( _n_ ^ 2) como o termo _n_ ^ 2 domina a função que nos permite ignore o outro termo na função.

Podemos confirmar esta análise usando \[esta útil folha de fraude big-O que apresenta a grande complexidade de tempo de muitas estruturas e algoritmos de dados comumente usados

É muito aparente que, enquanto para casos de uso pequenos, essa complexidade de tempo pode ser boa, em uma bolha de grande escala, simplesmente não é uma boa solução para classificação.  
Esse é o poder da notação big-O: ela permite que os desenvolvedores vejam facilmente os gargalos potenciais de seus aplicativos e tomem medidas para torná-los mais escalonáveis.

Para mais informações sobre porque a notação big-O e a análise de algoritmos são importantes, visite este [desafio de vídeo](https://www.freecodecamp.com/videos/big-o-notation-what-it-is-and-why-you-should-care) !