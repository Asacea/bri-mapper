#include<stdio.h>
#include<stdlib.h>
#include<unistd.h>
#include<pthread.h>
#include<semaphore.h>

int philosopher[]={0,1,2,3,4};
sem_t chopsticks[5];
sem_t room ;


void philosopher_eat(void *arg)
{
  int i =*(int*)arg;
  printf("philosopher %d is thinking\n",i);
  
  sem_wait(&room);
  sem_wait(&chopsticks[i]);
  printf("philosopher %d has No.%d chopstick \n",i,i);
  sem_wait(&chopsticks[(i+1)%5]);
  printf("philosopher %d has No.%d chopstick \n",i,(i+1)%5);
  printf("philosopher %d is eating\n",i);
  sleep(2);
  sem_post(&chopsticks[i]);
  printf("philosopher %d drops No.%d chopstick \n",i,i);
  sem_post(&chopsticks[(i+1)%5]);
  printf("philosopher %d drops No.%d chopstick \n",i,(i+1)%5);
  sem_post(&room);
  
}
int main(int argc,char const *argv[])
{
//循环
for(int i=0;i<31;i++){
  printf("===========================%d==============================\n",i);
  pthread_t pids[5];
  //初始化信号量
  for(int j=0;j<5;j++)
  {
    sem_init(&chopsticks[j],0,1);
  }
  sem_init(&room,0,4);
  
  //创建
  for(int j=0;j<5;j++){
    pthread_create(&pids[j],NULL,(void*)philosopher_eat,&philosopher[j]);
  }
  //加入
  for(int j=0;j<5;j++)
  {
    pthread_join(pids[j],NULL);
  }
  //销毁信号量
  for(int j=0;j<5;j++)
  {
    sem_destroy(&chopsticks[j]);
  }
  sem_destroy(&room);
 }
 return 0;
}