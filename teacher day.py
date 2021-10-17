#import the files which are needed

import turtle
import random
screen = turtle.Screen()                                        # Create a screen
turtle.title('HAPPY TEACHERS DAY')                              # Set title of the screen
screen.setup(width=800,height=500)                              # Set screen width and height
screen.bgcolor('black')                                         # Set Background color of Screen
screen.tracer(0)                                                # Apply tracer On Screen So screen will refresh very fast
tt = turtle.Turtle()                                            # Create a pen by which we will write any thing
tt.hideturtle()                                                 # Hide the Pen Arrow
                                                                # Create List Of Random Colors
colors_pen = ['green', 'white', 'blue', 'yellow', 'pink', 'purple', 'violet', 'gray']
colors_fill = ['green', 'blue', 'white', 'yellow', 'pink', 'purple', 'violet', 'gray']
tt.speed('fastest')                                            # Set tt pen Speed Very Fast
def gg():
    for i in range(16):                                        # Create A loop so 16 stars will create
        
        # get a random co-ordinates to creae Stars
        
        x,y = random.randrange(-350,350),random.randrange(-230,230)
        tt1 = turtle.Turtle() # create a new pen
        tt1.color(random.choice(colors_pen)) # choose a random tt1 pen color
        
        # Write HAPPY TEACHERS DAY using tt1 pen
        
        tt1.write('HAPPY TEACHERS DAY',font=('chiller',95,'italic bold'),align='center')
        tt1.clear()                                            # clear the tt1 pen so speed will maintain
        tt.penup()                                             # up the pen
        tt.goto(x,y)                                           # goto in the random co-ordinates
        tt.pendown()                                           # down the pen
        tt.begin_fill()                                        # call the begin_fill so star is in filled with color
        tt.color(random.choice(colors_pen))                    # choose a random color for star
        for i in range(6):                                     # create a star
            tt.forward(30)
            tt.right(144)
        tt.end_fill()                                          # now call end fill so star will filled with color
while True:                                                    # create a infinite loop
    gg()                                                       # call gg function
    tt.clear()                                                 # clear the tt pen (stars)
turtle.mainloop()                                              # hold turtle screen in a loop so it will be visible