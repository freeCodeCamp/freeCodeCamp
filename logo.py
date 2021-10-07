import turtle
colors=['orange','red','pink','yellow','blue','green']
screen=turtle.Screen()
trtl=turtle.Turtle()
trtl.speed(0)
screen.bgcolor('black')
for x in range(360):
    trtl.pencolor(colors[x % 6])
    trtl.width(x / 5 + 1)
    trtl.forward(x)
    trtl.left(20)
