//CDL list
#include<stdio.h>
#include<stdlib.h>
#include<string.h>
struct stud{
		char Roll_No[9];
		char Name[20];
		float CGPA;
		struct stud*next;
		struct stud*prev;
}*head=NULL,*temp,*save,*save2;
void ins_last()
{
	char roll[9],name[20];
	float cg;
	printf("Enter Student Roll no.:\n");
	scanf("%s",roll);
	printf("Enter Student Name:\n");
	scanf("%s",name);
	printf("Enter Student CGPA:\n");
	scanf("%f",&cg);
	temp=(struct stud*)malloc(sizeof(struct stud));
	strcpy(temp->Roll_No,roll);	
	strcpy(temp->Name,name);
	temp->CGPA=cg;
	temp->next=NULL;	
	temp->prev=NULL;
	if(head==NULL)
	{
		head=temp;
		head->next=head;
		head->prev=head;
	}
	else	
   	{   
		temp->next=head;
		head->prev=temp;
		save=head;
		while(save->next!=head)
			save=save->next;
		save->next=temp;
		temp->prev=save;
	}
}
void ins_beg()
{
	char roll[9],name[20];
	float cg;
	printf("Enter Student Roll no.:\n");
	scanf("%s",roll);
	printf("Enter Student Name:\n");
	scanf("%s",name);
	printf("Enter Student CGPA:\n");
	scanf("%f",&cg);
	temp=(struct stud*)malloc(sizeof(struct stud));
	strcpy(temp->Roll_No,roll);	
	strcpy(temp->Name,name);
	temp->CGPA=cg;
	temp->next=NULL;
	temp->prev=NULL;	
	if(head==NULL)
	{
		head=temp;
		head->next=head;
		head->prev=head;
	}
	else
	{
		temp->next=head;
                head->prev=temp;
                save=head;
                while(save->next!=head)
                        save=save->next;
                save->next=temp;
                temp->prev=save;
		head=temp;
	}
}
void ins_pos()
{
	int pos;
    	char roll[9],name[20];
	float cg;
	printf("Enter Student Roll no.:\n");
	scanf("%s",roll);
	printf("Enter Student Name:\n");
	scanf("%s",name);
	printf("Enter Student CGPA:\n");
	scanf("%f",&cg);
	printf("Enter Position:\n");
	scanf("%d",&pos);
    	temp=(struct stud*)malloc(sizeof(struct stud));
	strcpy(temp->Roll_No,roll);	
	strcpy(temp->Name,name);
	temp->CGPA=cg;
	temp->next=NULL;
	temp->prev=NULL;	
	if(head==NULL)
		head=temp;
	else
	{   
		save=head;
        	pos-=1;
		while(--pos)
            		save=save->next;
        	
		save2=save->next;
        	save->next=temp;
        	temp->prev=save;
		temp->next=save2;
		save2->prev=temp;
	}
}
void del_beg()
{
	if(head->next==head)
		head=NULL;
	if(head==NULL)
		printf("Underflow\n");
	else
	{
		temp=head;
		do
		{
			temp=temp->next;
		}while(temp->next!=head);
		temp->next=head->next;
		head=head->next;
		head->prev=temp;
	}
}
void del_pos()
{
	int pos;
    printf("Enter Position:\n");
	scanf("%d",&pos);
	if(head->next==head)
		head=NULL;
    if(head==NULL)
		printf("Underflow\n");
	else
    {
        save=head;
        pos--;
        while(--pos)
            save=save->next;
	save->next->next->prev=save;	
	save->next=save->next->next;
    }
}
void del_end()
{
	if(head->next==head)
		head=NULL;
	if(head==NULL)
		printf("Underflow\n");
	else
    	{
        	temp=head;
       		do
		{
			temp=temp->next;
		}while(temp->next->next!=head);
		temp->next=head;
		head->prev=temp;
    	}
}
void disp()
{
	temp=head;
	do
	{
		printf("Student Roll no.:%s\n",temp->Roll_No);
		printf("Student Name:%s\n",temp->Name);
		printf("Student CGPA:%f\n",temp->CGPA);
		save=temp;
		temp=temp->next;
	}while(temp!=head);
	printf("\nReverse Traversal\n");
	do
	{
		printf("Student Roll no.:%s\n",save->Roll_No);
                printf("Student Name:%s\n",save->Name);
                printf("Student CGPA:%f\n",save->CGPA);
                //save=temp;
                save=save->prev;
	}while(save!=head->prev);
}
void search()
{
    char s[100];
    int flag=0;
    printf("Enter Roll no:\n");
    scanf("%s",s);
    temp=head;
    do
    {
        if(!strcmp(s,temp->Roll_No))
        {
            flag=1;
            save=temp;
            break;            
        }
        else
            flag=0;
        temp=temp->next;
    }while(temp!=head);
    if(flag==1)
    {
        printf("Student Roll no.:%s\n",save->Roll_No);
        printf("Student Name:%s\n",save->Name);
        printf("Student CGPA:%f\n",save->CGPA);
    }
    else
        printf("Not Found\n");
            
}
int main()
{
        printf("This program creates linear doubly circular linked list.\n");
	int choice=0;
	while(choice!=9)
	{
		printf("1.Insert Beginning\n");
        	printf("2.Insert Between\n");
        	printf("3.Insert End\n");
		printf("4.Delete Beginning\n");
        	printf("5.Delete between\n");
        	printf("6.Delete End\n");
        	printf("7.Search\n");
		printf("8.Display\n");
		printf("9.Exit\n");
		scanf("%d",&choice);
		switch(choice)
		{
			case 1:ins_beg();break;
			case 2:ins_pos();break;
			case 3:ins_last();break;
			case 4:del_beg();break;
            		case 5:del_pos();break;
            		case 6:del_end();break;
          		case 7:search();break;
           		case 8:disp();break;    
        	}
	}
    return 0;
}

