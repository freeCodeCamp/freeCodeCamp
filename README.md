
Code: To implement the singly circular link list 
 #include<stdio.h> 
 struct node 
{ 
 int data; 
 struct node *next;
}; 
struct node *head=NULL, int 
num, pos, i; 
 void addatbegin( ) 
{ 
//create new node 
struct node *temp,*p; 
 temp = (struct node *)malloc(sizeof(struct node)); 
printf(“Enter any number”); 
scanf(“%d”,&num); 
if(head == NULL) //Linked List is Empty 
{ 
temp->data = num; 
temp->next = temp; 
head = temp; 
} 
else 
{ //Add newly created node before the first node of Linked List 
p=head; 
while(p->next!=NULL)// Pointer p traverses LL and reaches to last node of 
LL 
{ 
p=p->next 
} temp->data = num; 
 temp->next= head; 
 head = temp;// brings the pointer head on newly created node 
 p->next=head; // store address of newly created node in the next part of the last
node 
} 
} 
void display() 
{ 
struct node p* = head; 
printf(“\nContent of Linked List\n”); 
do 
{ 
printf (“%d\n”, p->data); p 
= p->next; 
} while(p!=head); 
} 
void main( ) 
{ addatbegin(); 
addatbegin(); 
addatbegin(); 
addatbegin(); 
 display();
}
