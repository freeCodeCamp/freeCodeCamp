public class SinglyReverse {

	public static void main(String[] args) {
		SinglyLL sr = new SinglyLL();
		sr.createSinglyLL(5);
		sr.addNode(2);
		sr.addNode(13);
		sr.addNode(7);
		sr.addNode(9);
		sr.traverse();
		sr.reverseSinglyLL();
		sr.traverse();
	}

}





public class Node {
	int data;
	Node next;
	public int getData() {
		return data;
	}
	public void setData(int data) {
		this.data = data;
	}
	public Node getNext() {
		return next;
	}
	public void setNext(Node next) {
		this.next = next;
	}
	public Node(int data) {
		super();
		this.data = data;
	}
}






public class SinglyLL {
	Node head;
	
	public Node createSinglyLL(int data) {
		Node firstNode = new Node(data);
		firstNode.setNext(null);
		firstNode.setData(data);
		head = firstNode;
		return firstNode;
	}
	
	public void addNode(int data) {
		Node temp = head;
		
		while(temp.getNext() != null) {
			temp = temp.getNext();
		}
		
		Node newNode = new Node(data);
		newNode.setNext(null);
		temp.setNext(newNode);
	}
	
	public void traverse() {
		Node temp = head;
		
		while(temp != null) {
			System.out.print(temp.getData() + " -> ");
			temp = temp.getNext();
		}
		System.out.println("null");
		System.out.println();
	}
	
	public void reverseSinglyLL() {
		Node p1, p2, p3;
		p1 = head;
		if(p1.getNext() == null) {
			return;
		}
		
		p2 = p1.getNext();
		
		if(p2.getNext() == null) {
			p2.setNext(p1);
			p1.setNext(null);
			head = p2;
			return;
		}
		
		p1.setNext(null);
		p3 = p2.getNext();
		
		reverse(p1, p2, p3);
	}
	
	public void reverse(Node p1, Node p2, Node p3) {
		
			p2.setNext(p1);
			
			if(p3.getNext() == null) {
				p3.setNext(p2);
				head = p3;
				return;
			}
			
			p1 = p3.getNext();
			
			if(p3.getNext() != null) {
				reverse(p2, p3, p1);
			}
		}
}
