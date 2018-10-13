---
title: The Auto Feature
localeTitle: La característica de auto
---
## La característica de auto

`auto` es una característica de C ++ 11 que le permite al compilador inferir el tipo de datos para usted en una definición. Esto puede ahorrarle mucho escribir, especialmente con tipos complicados.

Sin `auto`

```cpp
double x = 10.425; 
 double y = x * x; 
```

Con `auto`

```cpp
double x = 10.425; 
 auto y = x * x; 
```

Si bien puede parecer trivial, se vuelve increíblemente útil cuando los tipos de datos comienzan a complicarse. Por ejemplo, suponga que desea almacenar un [`vector`](https://guide.freecodecamp.org/cplusplus/vector) de empleados y que solo está interesado en su nombre y edad. Una forma de almacenar el nombre y la edad podría ser un `pair` con una `string` y un `unsigned int` . Esto se declara como `std::vector<std::pair<std::string, unsigned int>> employees` . Ahora suponga que desea acceder al último empleado agregado:

```cpp
std::vector<std::pair<std::string, unsigned int>> employees; 
 
 // without auto, you have to write: 
 std::pair<std::string, unsigned int>> last_employee = employees.back(); 
 
 // with auto, you just have to write: 
 auto last_employee = employees.back(); 
```

Una vez que el compilador determina el tipo en el lado derecho de `=` , reemplaza `auto` con ese tipo.

En las versiones modernas de C ++ (desde C ++ 14), `auto` también se puede usar en una declaración de función como tipo de retorno. El compilador luego inferirá el tipo de retorno de la declaración de retorno dentro de la función. Siguiendo el ejemplo con los empleados:
```
std::vector<std::pair<std::string, unsigned int>> employees; 
 auto get_last_employee() { 
    return employees.back(); // Compiler knows the return type from this line. 
 } 
```

El compilador sabrá por la línea con la declaración de retorno que el tipo de retorno de la función debe ser `std::vector<std::pair<std::string, unsigned int>>` .

Si bien es bastante técnico, la [página cppreference en auto](http://en.cppreference.com/w/cpp/language/auto) describe muchos más usos de `auto` y los detalles de cuándo se puede y no se puede usar.

### `auto` antes de C ++ 11

En algunos libros de texto antiguos que contienen código _muy_ antiguo, la palabra clave `auto` se utiliza de una manera muy diferente.

Este `auto` particular fue una palabra clave prestada de C, y probablemente fue la palabra clave menos utilizada de todos los tiempos.

En C ++, todas las variables tienen _una duración automática_ , es decir, se definen hasta que se sale de la función en la que están definidas.

Por ejemplo:

\`\` \`cpp

# incluir

int main () { int a a = 1; // tiene sentido, como se definió en la misma función
```
    return 0; 
```

} a = 2; // no tiene sentido, ya que no se define aquí \`\` \`

Esto se da en C ++, y se especifica `auto` que la variable debe tener una _duración automática_ , de ahí la falta de uso.

## Otras lecturas :

*   http://www.stroustrup.com/C++11FAQ.html#auto