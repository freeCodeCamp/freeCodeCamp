---
title: Iterator Pattern
---

## Iterator Pattern

Iterator pattern tries to separate the job of traversing a Collection or Container of objects from the implementation of the Collection.

Idea is to have an Iterator object that will be implemented by the Container. The iterator object will be aware of the internal implementation of the Container.

Iterator object is supposed to have methods that will
1. Tell the caller if there is any more objects to be visited
2. Give the next object to the caller.

An outside entity wishing to traverse the Container objects will just have to get hold of this Iterator object and get the next object from the iterator until iterator says there is no more objects remaining.

#### Java sample  ( Pseudocode just for reference )

```java


public Interface IIterator{
  public boolean hasNext();
  public MyObject getNext();
}

public interface IIterable{
  public IIterator getIterator();
}

public class MyIterableContainer implements Iterable{

     // Define collection of objects here..
     ArrayList<MyObject> list = new ArrayList<MyObject>();

    private MyIterator iterator = new MyIterator(this);
    
    public IITerator getIterator(){
      return this.iterator;
    }
    
    public MyIterableContainer(){
      //populate the list
    }

}

public class MyObject[
    //An Object inside the container..
}

public class MyIterator implements IITerator{
      private MyIterableContainer container;
      
      //Track the iteration here using some logic.. 
      //private int iterationIndex = 0;
      
      
      public MyIterator(MyIterableContainer container){
        this.container = container;
      }
      
      private MyIterator(){
      }
      
      public boolean hasNext(){
        //Check if the iterationIndex passed the container size
        //and set isThereMore variable.
        
        return isThereMore;
      }


      public MyObject getNext(){
      //get the object at current index
        MyObject object = container.objectAtIndex(iterationIndex);
        //increment the index tracking
        // iterationIndex++
        return object;
      }
    
    
}

```
