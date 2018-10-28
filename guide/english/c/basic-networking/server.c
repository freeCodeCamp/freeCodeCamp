#include <stdio.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <string.h>
#include <sys/types.h>
#include <netinet/in.h>
#include <pthread.h>
struct arg
{
   int sid;
};
void handleClient(int sock)
{
   printf("Connection Established\n");
   
   char buf[500];
   recv(sock,buf,400,0);
   printf("Client sent : %c\n",buf[0]);
   char *msg="Hello ";
   send(sock,msg,strlen(msg),0);
}
void *f(void *ptr)
{
   struct arg* p= (struct arg*)ptr;
   int newsock=p->sid;
   handleClient(newsock);
}

int main()
{
   int sockid;
   if( (sockid=socket(AF_INET,SOCK_STREAM,IPPROTO_TCP)) <0)
      perror("Socket failed");
   pthread_t pid;
   struct sockaddr_in sock,sockcl;
   socklen_t sz;
   sock.sin_family = AF_INET;
   sock.sin_port = htons(8189);
   sock.sin_addr.s_addr = htonl(INADDR_ANY);
   
   if( bind(sockid,(struct sockaddr*)&sock,sizeof(sock))<0)
      perror("bind failed");
      
   if(listen(sockid,5)<0)
      perror("listen failed");
   struct arg x;
   printf("Server listening on port 5555\n");
   while(1)
   {
   int newsock= accept(sockid, (struct sockaddr*)&sockcl,&sz);
   x.sid=newsock;
   pthread_create(&pid,0,f,(void*)&x);
   }
   close(sockid);
   return 0;
}
