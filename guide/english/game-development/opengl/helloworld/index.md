# Hello World

This is a Hello World application of OpenGL

```C
 #include <GLFW/glfw3.h>

GLFWwindow* window = NULL;

int main(void)
{
    // Initialize GLFW
    if (!glfwInit())
        return -1;

    // Create window with dimensions 640 x 480
    window = glfwCreateWindow(640, 480, "Hello World", NULL, NULL);
    if (!window)
    {
        glfwTerminate();
        return -1;
    }

    // Make the window to the current OpenGL context
    glfwMakeContextCurrent(window);

    // Loop until the window gets closed
    while (!glfwWindowShouldClose(window))
    {
        // Clear Screen with default color black
        glClear(GL_COLOR_BUFFER_BIT);

        // Render triangle
        glBegin(GL_TRIANGLES);
        // Left Down
        glColor3f(1.0f,0.0,0.0f);
        glVertex2f(-0.5f,-0.5f);
        // Right Down
        glColor3f(0.0f,1.0,0.0f);        
        glVertex2f( 0.5f,-0.5f);
        // Mid Up
        glColor3f(0.0f,0.0f,1.0f);        
        glVertex2f( 0.0f, 0.5f);
        glEnd();

        // Swap Buffers to render the new frame to the window
        glfwSwapBuffers(window);

        // Poll events to get the window close event
        glfwPollEvents();
    }

    // Terminate GLFW
    glfwTerminate();
    return 0;
}
```

This code renders a triangle to a black window. To build this example you need the library [GLFW](https://www.glfw.org). <br>
```
sudo apt-get install libglfw-dev
```