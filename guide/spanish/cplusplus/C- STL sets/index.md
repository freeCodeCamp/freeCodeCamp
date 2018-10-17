InlocaleTitle: undefined
tReproducción de conjuntos en la librería STL de C ++. Los conjuntos son un tipo de contenedores asociativos en los que cada elemento debe ser único. El valor del elemento no se puede modificar una vez que se agrega al conjunto, aunque es posible eliminar y agregar el valor modificado de ese elemento. Se implementan utilizando el árbol rojo-negro.

Beneficios de usar conjuntos

1.  Almacena solo valores únicos.
2.  El valor del elemento se identifica. El valor de un elemento es también la clave utilizada para identificarlo.
3.  Proporciona una búsqueda rápida (O (log n)) usando las teclas, es decir, el elemento en sí.
4.  Hay muchas funciones incorporadas en los conjuntos de definición de clase que facilitan la programación.

Ejemplo: '' 'c ++

# incluir

utilizando namespace std; int main () { conjunto s;

inserto (2); // inserta el elemento 2 en el conjunto s inserto (3); inserto (5); inserto (2); // insertando el mismo elemento 2 inserto (6); para (auto i: s) cout << i << ""; cout << s.size () << endl; // da el tamaño del conjunto

s.erase (5); // borrando el elemento 5 del set s devuelve 0; } '' ' Creando un objeto establecido '' 'c ++ conjunto s; '' '

Inserción '' 'c ++ s.insert (valor _a_ ser\_insertado); '' '

Accediendo a los elementos establecidos. '' 'c ++ conjunto :: iterador it; para (it = s.begin (); it! = s.end (); ++ it) cout << \* it; '' '