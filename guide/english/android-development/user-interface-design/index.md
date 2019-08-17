---
title: User Interface Design
---
# User Interface Design
The layout defines the user interface (UI) of an activity or [widget of an app](https://developer.android.com/guide/topics/appwidgets/?hl=en-419). You can declare the layout in 2 ways:
1. Declare elements in the UI in XML.
2. Create instances of design elements programmatically.

Programmers usually use default app layouts in XML, then we modify the state of the objects on the screen using the code, including those declared in XML.

The Android SDK includes many design elements, which you can configure to achieve the desired appearance and behavior. Each of these elements is an instance of the View class or one of its subclasses, for example, TextView or Button.

## ViewGroup vs View
![ViewGroup vs View](https://github.com/FahedHermoza/ResourcesImages-Contribution-FreeCodeCamp/blob/master/UserInterface%20Desing/ViewGroup%20vs%20View-UserInterfaceDesign.png)
The view is the superclass of all Android components. These are some of the components derived from View: TextView, EditText, ImageView, ProgressBar, Button, ImageButton, CheckBox, DatePicker, and others

ViewGroup is a collection of Views, similar to a container. It can contain Views and other ViewGroups. Some of these components derived from ViewGroup are the following: LinearLayout, RelativeLayout, CoordinatorLayout, ListView, GridView, ConstraintLayout, RecyclerView.

## The hierarchy of views
The design elements are in a hierarchy of View objects called the view hierarchy.
![The hierarchy of views](https://github.com/FahedHermoza/ResourcesImages-Contribution-FreeCodeCamp/blob/master/UserInterface%20Desing/The%20hierarchy%20of%20views-UserInterfaceDesign.png)
The root element of this hierarchical view shown in the image is a LinearLayout object. LinearLayout inherits from a subclass of View called ViewGroup. We use LinearLayout to sort the elements in a single row or column.
 
## Attributes
Each View and ViewGroup object supports its own variety of XML attributes.
Some attributes are common among all elements because they inherit from View, such as the following:
```
android:id="@+id/button"
```
- The attribute **android:id** allows to have any element an ID to identify it exclusively in the hierarchy of views
```
android:layout_width="wrap_parent"
android:layout_height="match_parent"
```
- The attributes **android:layout_width** and **android:layout_height**. Any design element uses them. Its typical values are match_parent or wrap_content.
  - match_parent: The view will be as big as your father.
  - wrap_content: The view will be as large as you need the elements that contain it.

Other attributes are specific, which vary depending on the element:
```
android:orientation="horizontal"
```
- The **android:orientation** attribute present in the LinearLayout element determines whether your children appear horizontally or vertically.
```
android:textSize="10sp"
```
- The **android:textsize** attribute present in Button or TextView. It tells the elements the size of the text to be used.

## Character string resources
In each Android project, you have the file called **string.xml**, to store the character string. Recommended to put all the strings of characters in this file and then we refer to it from each particular element, this allows us to easily find its location.

Although by default the file with the character string resources is called **string.xml** we can call it as we want and even have several in the project, as long as we maintain its format.

## From layout.xml to View
Every Activity created needs a UI to manage, to provide it we call the setContentView method of the Activity.
```
setContentView(R.layout.main_activity);
```
The setContentView method displays a layout, that is, an interface and displays it on the screen. When deploying a layout, an instance of each design element contained in the layout file is created, according to the definition of its attributes. To specify which layout is deployed, we pass to the method the resource Id of that layout.
```
Button button = (Button) findViewById(R.id.button);
```
To connect an element of the layout file to the Activity we use the findViewById method. This method accepts the resource Id of a widget as an argument and returns a View object.

### More Information
- [Layouts](https://developer.android.com/guide/topics/ui/declaring-layout?hl=en-419)
- [Layout resource](https://developer.android.com/guide/topics/resources/layout-resource?hl=es-419)

### Courses
- [Material Design for Android Developers](https://www.udacity.com/course/material-design-for-android-developers--ud862)
- [CodeLabs](https://codelabs.developers.google.com/codelabs/material-design-style-sp/index.html#0)