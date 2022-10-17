import java.util.*;
class MyLinkedList {
	MyNode head, lastNode;
    long size=0;
	static class MyNode {

		int data;
		MyNode next;
		MyNode(int d){
			data = d;
			next = null;
		}
	}
	public void insert(int data) {
		MyNode new_node = new MyNode(data);
		if (this.head == null) {
			this.head = new_node;
            this.lastNode = new_node;
		}else {
            this.lastNode.next = new_node;
            this.lastNode = this.lastNode.next;
        }
        size++;
	}

	public void printList(){
		MyNode currNode = this.head;
	
		System.out.print("LinkedList: ");
		while (currNode.next != null) {
			System.out.print(currNode.data + " -> ");
			currNode = currNode.next;
		}
        System.out.println(currNode.data);
	}

    public void deleteNode(int i) {
        if(i>=size) {
            System.out.println("Incorrect Position");
            
        }else {
            MyNode cur = this.head;
            for(int j=0;j<i;j++) {
                cur=cur.next;
            }
            cur.data=cur.next.data;
            cur.next=cur.next.next;
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        MyLinkedList list = new MyLinkedList();
        list.insert(4);
        list.insert(5);
        list.insert(6);
        list.insert(7);
        list.insert(8);
        list.printList();
        list.deleteNode(3);
        list.printList();
        sc.close();
    }
}
