---
title: Evented Servers
---
## Evented Servers

Evented servers run a single event loop that handles events for all connected clients. This is opposed to Threaded servers, which use multiple concurrently executing threads, where each thread handles one client request.

In simple terms, Evented servers have only one main thread that is shared amongst all client requests.
What is special with Evented servers is the fact that they can prioritize the work that needs to be done with clients' requests.
We'll illustrate this with an example.

Let's say you are the owner of a cab company (let it be known as the Server) and you have people calling your company (let them be known as Clients) that want to arrange a pickup (let those be known as Requests). You hire operators (let them be known as Processes/Threads) to take orders from the Clients. Your business logic states that your operator must stay on the line until a cab driver has been dispatched to the client. So essentially, you would want to hire as many operators as the amount of cab drivers that you can dispatch.

With an Evented server, there is only one operator that is able to take the pickup details from the customers, but knows to call the customer back once the cab driver has been dispatched to him. One more advantage is that, because of a single thread, there are no race conditions. So, locking/unlocking is not required. Cpu utilization is also high since the thread does not have to wait.

These kind of servers use callbacks to let the clients know when their requests have been dealt with.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

[Even-driven architecture on Wikipedia](https://en.wikipedia.org/wiki/Event-driven_architecture)
