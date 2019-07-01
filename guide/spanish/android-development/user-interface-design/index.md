---
title: User Interface Design
localeTitle: Diseño de Interfaz de Usuario
---
# Diseño de Interfaz de Usuario
El layout define la interfaz de usuario(UI) de un activity o un [widget de una app](https://developer.android.com/guide/topics/appwidgets/?hl=en-419). Puedes declarar el layout de 2 maneras:
1. Declarar elementos en la UI en XML.
2. Crear instancias de elementos de diseño de manera programática.

Generalmente los programadores usan diseños predeterminados de la app en XML, luego  modificamos el estado de los objetos en la pantalla mediante código, incluidos los declarados en XML.

El SDK de Android incluye muchos elementos de diseño, los cuales puedes configurar hasta lograr la apariencia y el comportamiento deseado. Cada uno de estos elementos es una instancia de la clase View o de una de sus subclases, por ejemplo TextView o Button.

## ViewGroup vs View
![ViewGroup vs View](https://github.com/FahedHermoza/ResourcesImages-Contribution-FreeCodeCamp/blob/master/UserInterface%20Desing/ViewGroup%20vs%20View-UserInterfaceDesign.png)
La View es la súper clase de todos los componentes de Android. Estos son algunos de los componentes derivados de View : TextView, EditText, ImageView, ProgressBar, Button, ImageButton, CheckBox, DatePicker y otros

ViewGroup es una colección de Views, similar a un contenedor. Puede contener Views y otros ViewGroups. Algunos de estos componentes derivados de ViewGroup son los siguientes: LinearLayout, RelativeLayout, CoordinatorLayout, ListView, GridView, ConstraintLayout, RecyclerView.

## La jerarquía de vistas
Los elementos de diseño se encuentran en una jerarquía de objetos View denominado jerarquía de vistas.
![The hierarchy of views](https://github.com/FahedHermoza/ResourcesImages-Contribution-FreeCodeCamp/blob/master/UserInterface%20Desing/The%20hierarchy%20of%20views-UserInterfaceDesign.png)
El elemento raíz de esta vista jerárquica mostrado en la imagen es un objeto LinearLayout. LinearLayout hereda de una subclase de View llamada ViewGroup. Utilizamos LinearLayout para ordenar los elementos en una sola fila o columna.
 
## Atributos
Cada objeto View y ViewGroup admite su propia variedad de atributos XML. 
Algunos atributos son comunes entre todos los elementos porque heredan de View, como los siguiente:
```
android:id="@+id/button"
```
- El atributo **android:id** permite tener a cualquier elemento un ID para identificarlo de forma exclusiva en la jerarquía de vistas.
```
android:layout_width="wrap_parent"
android:layout_height="match_parent"
```
- Los atributos **android:layout_width** y **android:layout_height** se utilizan para casi cualquier elemento de diseño. Sus valores típicos son match_parent o wrap_content.
    - match_parent: La vista será tan grande como su padre.
    - wrap_content: La vista será tan grande como lo necesite los elementos que lo contengan.

Otros atributos son específicos, los cuales varían dependiendo del elemento:
```
android:orientation="horizontal"
```
- El atributo **android:orientation** presente en el elemento LinearLayout determina si sus hijos aparecen de forma horizontal o vertical.
```
android:textSize="10sp"
```
- El atributo **android:textsize** presente en Button o TextView. Le indica a los elementos el tamaño de texto a usar.

## Recursos de cadenas de caracteres
En cada proyecto Android se tiene el archivo llamado **string.xml**, para almacenar las cadena de caracteres. Recomendado juntar todas la cadenas de caracteres en este archivo y luego hacemos referencia a ella desde cada elemento particular, esto nos permite encontrar fácilmente su ubicación.

Aunque de forma predeterminada el archivo con los recursos de cadenas de caracteres se denomina **string.xml** lo podemos llamar como queramos e incluso tener varios en el proyecto, mientras mantengamos su formato.

## De layout.xml a View
Toda Activity creada necesita una UI que gestionar, para proporcionársela llamamos al método setContentView de la Activity. 
```
setContentView(R.layout.main_activity);
```
El método setContentView despliega un layout, es decir una interfaz y la muestra en pantalla. Al desplegar un layout, se crea una instancia de cada elemento de diseño contenido en el archivo de layout, de acuerdo con la definición de sus atributos. Para especificar que layout se despliega pasamos al método el Id de recurso de dicho layout. 
```
Button button = (Button) findViewById(R.id.button);
```
Para conectar un elemento del archivo layout a la Activity utilizamos el método findViewById. Este método acepta el Id de recurso de un widget como argumento y devuelve un objeto View.

### Más Información
- [Layouts](https://developer.android.com/guide/topics/ui/declaring-layout?hl=en-419)
- [Layout resource](https://developer.android.com/guide/topics/resources/layout-resource?hl=es-419)

### Cursos
- [Material Design for Android Developers](https://www.udacity.com/course/material-design-for-android-developers--ud862)
- [CodeLabs](https://codelabs.developers.google.com/codelabs/material-design-style-sp/index.html#0)