---
title: Switch Statement
localeTitle: undefined
---
Una declaración de cambio permite que una variable se pruebe para determinar su igualdad frente a una lista de valores. Cada valor se llama un caso, y la variable que se está activando se comprueba para cada caso.

Sintaxis: interruptor (expresión) { expresión-constante del caso declaración (es); descanso; //Opcional expresión-constante del caso declaración (es); descanso; //Opcional

// puedes tener cualquier número de declaraciones de casos. por defecto: // Opcional declaración (es); }

Las siguientes reglas se aplican a una instrucción de cambio:

La expresión utilizada en una instrucción de conmutación debe tener un tipo integral o enumerado, o debe ser de un tipo de clase en el que la clase tenga una única función de conversión a un tipo integral o enumerado.

Puede tener cualquier número de declaraciones de casos dentro de un interruptor. Cada caso va seguido del valor que se va a comparar y dos puntos.

La expresión constante para un caso debe ser el mismo tipo de datos que la variable en el conmutador, y debe ser una constante o un literal.

Cuando la variable que se está activando es igual a un caso, las sentencias que siguen a ese caso se ejecutarán hasta que se alcance una sentencia de ruptura.

Cuando se alcanza una declaración de interrupción, el interruptor termina y el flujo de control salta a la siguiente línea que sigue a la instrucción de cambio.

No todos los casos necesitan contener un descanso. Si no aparece ninguna ruptura, el flujo de control caerá a los casos subsiguientes hasta que se alcance una ruptura.

Una declaración de cambio puede tener un caso predeterminado opcional, que debe aparecer al final del cambio. El caso predeterminado se puede usar para realizar una tarea cuando ninguno de los casos es verdadero. No se necesita un descanso en el caso predeterminado.

Ejemplo: \`\` \`C ++

# incluir

utilizando namespace std;

int main () { // declaración de variable local: grado de char = 'D';

interruptor (grado) { caso 'A': cout << "Excelente!" << endl; descanso; caso 'B': caso 'C': cout << "Bien hecho" << endl; descanso; caso 'D': cout << "Pasaste" << endl; descanso; caso 'F': cout << "Mejor inténtalo de nuevo" << endl; descanso; defecto : cout << "Grado no válido" << endl; } cout << "Su grado es" << grado << endl;

devuelve 0; } \`\` \`

Salida: Pasaste Tu nota es d

### Fuentes

https://www.tutorialspoint.com