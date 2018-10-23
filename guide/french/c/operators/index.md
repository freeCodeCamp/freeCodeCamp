---
title: Operateurs
---
# Operateurs en C

## 1. Operateurs arithmetiques
- `+` Additionne deux opérandes 
     ```C
     int a = 6;
     int c = a + 1; // c = 7
     ```
- `-`Soustrait le second opérande du premier
     ```C
     int a = 8;
     int b = 9;
     int c = a - b; // c = -1
     ```
- `*` Multiplie deux opérandes
     ```C
     int a = 8;
     int b = 9;
     int c = a * b; // c = 72
     ```
- `/` Divises le premier opérande par le second
     ```C
     int a = 8;
     int b = 4;
     int c = a / b; // c = 2
     ```
- `%` Donne le reste après une division
     ```C
     int a = 8;
     int b = 9;
     int c = b % a; // c = 1 because b = 1*a + 1 = 8 + 1
     ```
- `++` Augmente la valeur d'un entier de +1
     ```C
     int a = 8;
     a++; // a = 9
     int b = a++; // postfix operator; a = 10, b = 9
     int c = ++a; // prefix operator; a = 11, c = 11
     ```
- `--` Décrémente la valeur d'un entier de 1
     ```C
     int a = 8;
     a--; // a = 7
     int b = a--; // postfix operator; a = 6, b = 7
     int c = --a; // prefix operator; a = 5, c = 5
     ```
// Programme C qui montre comment fonctionnent les opérateurs arithmetiques en C
#include <stdio.h>
int main()
{
    int a = 9,b = 4, c;
    
    c = a+b;
    printf("a+b = %d \n",c);

    c = a-b;
    printf("a-b = %d \n",c);
    
    c = a*b;
    printf("a*b = %d \n",c);
    
    c=a/b;
    printf("a/b = %d \n",c);
    
    c=a%b;
    printf("Reste quand a est divisé par b = %d \n",c);
    
    return 0;
}

## 2. Opérateurs relationnels

- `==` Egalité - vrai (true) quand les deux opérandes sont égaux
  ```C
  int a = 5, b = 5;
  bool c = (a == b); // c = true
  ```
- `!=` Non egal - vrai (true) quand les deux opérandes NE sont PAS égaux
  ```C
  int a = 5, b = 6;
  bool c = (a != b); // c = true
  ```
- `>` Plus grand que - vrai (true) quand le premier opérande est strictement plus grand que le second
  ```C
  int a = 8, b = 5;
  bool c = (a > b); // c = true
  ```
- `<` Plus petit que - vrai (true) quand le premier opérande est strictement plus petit que le second
  ```C
  int a = 5, b = 8;
  bool c = (a < b); // c = true
  ```
- `>=` Plus grand ou égal - vrai (true) quand le premier opérande est plus grand ou égal que le second.
  ```C
  int a = 8, b = 5;
  bool c = (a >= b); // c = true
  bool d = (a >= 8); // d = true
  ```
- `<=` Plus petit ou égal - vrai (true) quand le premier opérande est plus petit ou égal que le second.
  ```C
  int a = 5, b = 8;
  bool c = (a <= b); // c = true
  ```

## 3. Opérateurs logiques

- `&&` ET - Vrai quand les 2 opérandes sont vrais.
  ```C
  bool c = (5 < 6) && (8!=7); // deux opérandes à true, donc c = true
  ```
- `||` OU - Vrai lorsqu'au moins un des deux opérandes est vrai (true)
  ```C
  bool c = (5 < 6) || (8 == 7) // premier opérande true, donc c = true
  ```
- `!` NON (ou opérateur inverse) - Vrai lorsque l'opérande est faux. 
  ```C
  bool c = !(8 == 7) // traduire: NON (false), donc c = true
  ```

## 4. Operateur de bits

- `&` ET  - S'il y a un bit de chaque côté, alors le bit est mis en sortie
  ```C
  A = 11001
  B = 01000
  RESULT = 01000
  ```
- `|` OU - Si on a un bit de l'un des deux côté de l'opérande, alors il est copié
  ```C
  A = 11001
  B = 01000
  RESULT = 11001
  ```
- `^` XOR (OU Exclusif) - Si on a un bit de l'un des deux côté (mais pas des deux côté), alors il est copié
  ```C
  A = 11001
  B = 01000
  RESULT = 10001
  ```
- `~` Negation - Inverse les bits. 1 -> 0, 0 -> 1
  ```C
  C = 01000
  RESULT = 10111
  ```
- `<<` Left shift - L'opérande de gauche est bougé à gauche du nombre de bit indiqué par le nombre de droite
  ```C
  A = 11001
     A << 2
  RESULT = 00100
  ```
- `>>` Right shift - L'opérande de gauche est bougé à droite du nombre de bit indiqué par le nombre de droite
  ```C
  A = 11001
     A >> 2
  RESULT = 00110
  ```

## 5. Operateur d'assignation
- `=`
  ```C
  int a = 7; // 'a' sera égal à 7
  ```
- `+=`
  ```C
  int a = 7;
  a += 5; // equivalent à a = a + 5 = 7 + 5 = 12
  ```
- `-=`
  ```C
  int a = 7;
  a -= 2; // equivalent à a = a - 2 = 7 - 2 = 5
  ```
- `*=`
  ```C
  int a = 7;
  a *= 3; // equivalent à a = a * 3 = 7 * 3 = 21
  ```
- `/=`
  ```C
  int a = 21;
  a /= 3; // equivalent à a = a / 3 = 21 / 3 = 7
  ```
- `%=`  
  ```C
  int a = 21;
  a %= 5; // equivalent à a = a % 5 = 21 % 5 = 1
  ```
     
Opérateurs divers ↦ sizeof & ternary
En dehors des opérateurs discutés plus haut, il existe quelques opérateurs supplémentaires, tel sizeof et ?

Operateur	               Description	                                        example
sizeof()	               Retourne la taille de la variable.	                    sizeof(a), où a est in entier, retourne 4.
&	                    Retourne l'adresse de la variable.	                    &a; retourne l'adresse de la variable.
*	                    Pointe sur l'adresse d'une variable.	                              *a;
? :	                    Expression conditionnelle.	                              Est ce que condition vraie ? alors valeur X : autrement valeur Y


## 6. Précédence des opérateurs en C
Ordre des opérateurs : (ils seront executés précisément dans cet ordre décroissant)
- Postfix `() [] -> . ++ --`
- Unary `+ - ! ~ ++ -- (type)* & sizeof`
- Multiplicative `* / %`
- Additive `+ -`
- Shift `<< >>`
- Relational `< <= > >=`
- Equality `== !=`
- Bitwise AND `&`
- Bitwise XOR `^`
- Bitwise OR `|`
- Logical AND `&&`
- Logical OR `||`
- Conditional `?:`
- Assignment `= += -= *= /= %= >>= <<= &= ^= |=`
- Comma `,`
