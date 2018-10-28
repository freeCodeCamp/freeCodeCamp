#include <stdio.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <string.h>
#include <sys/types.h>
#include <netinet/in.h>

int main()
{
   int sockid;
   if( (sockid=socket(AF_INET,SOCK_STREAM,IPPROTO_TCP)) <0)
      perror("Socket failed");
      
   struct sockaddr_in sock;
   socklen_t sz;
   sock.sin_family = AF_INET;
   sock.sin_port = htons(8189);
  
   if(connect(sockid,(struct sockaddr*)&sock,sizeof(sock))<0)
      perror("connect failed\n");
      
   
   char *msg="1";
   send(sockid,msg,strlen(msg),0);
   
   char buf[500];
   recv(sockid,buf,400,0);
   printf("server sent : %s\n",buf);
   close(sockid);
   return 0;
}
