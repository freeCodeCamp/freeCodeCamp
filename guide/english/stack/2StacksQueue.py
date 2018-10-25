#This specific stack class contains the functions required to implement a 2StackQueue
class Stack:
    def __init__(self):
        self.data = []

    def isEmpty(self):
        return self.data == []

    def push(self, element):
        self.data.append(element)

    def pop(self):
        return self.data.pop()

class TwoStackQueue:    
    def __init__(self):
        self.qStack = Stack()

# This function creates a second stack to reverse the contents of qStack
# Think like flipping over a pile of papers... the bottom paper is now on top
    def flipStack(self):         
        temp = Stack()
        while(not self.qStack.isEmpty()):
            temp.push(self.qStack.pop())
        self.qStack = temp

    def enqueue(self, element):
        if(self.qStack.isEmpty()):
            self.qStack.push(element)
        else:
            self.flipStack()
            self.qStack.push(element)
            self.flipStack()

    def dequeue(self):
        return self.qStack.pop()

q = TwoStackQueue()
# Example test: should print in the order that they are enqueued
q.enqueue(99)
q.enqueue(7)
q.enqueue(100)
print(q.dequeue())
print(q.dequeue())
print(q.dequeue())