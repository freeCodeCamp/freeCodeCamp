---
title: Observer pattern
---
The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs.
## Observer pattern
This pattern is the basis of event-driven programming. In Front End Development this is an essential pattern to sturdily scale your application logic. In this pattern, you make a difference between the **subject** and the **observers**. The subjects are the events themselves such as a _click_, a _keypress_ or a signal from the server. All subscribed **observers** are notified when a subject changes state (when an event fires). For more information on events read here [Evenet Driven Programming](https://www.technologyuk.net/software-development/designing-software/event-driven-programming.shtml)

### Subscribing
The advantage of this pattern is having a collection of subscribed objects that will respond to an event instead of calling a function on every object that should be notified. Another advantage is that observers are subscribed through an interface, which allows changes to the event function to be only within the function.

## Other resources
A code example & more at [Observer Design Pattern](http://www.dofactory.com/javascript/observer-design-pattern)
