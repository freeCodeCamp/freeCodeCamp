---
title: League of legends prediction algorithm and visualization for the data
---
Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @KevorkSulahian Sign out
1
6 0 KevorkSulahian/Predicting-League-of-Legends-games
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights  Settings
Predicting-League-of-Legends-games/Final2.0.r
62a9b5a  on Dec 11, 2017
@KevorkSulahian KevorkSulahian Updating
    
232 lines (170 sloc)  7.33 KB
#Used librarys
library(ggplot2)
library(dplyr)
library(gridExtra)
library(grid)
library(RColorBrewer)
library(fmsb)
library(ggrepel)
library(ggthemes)
library(ggdendro)
library(NbClust)
library(factoextra)
library(viridis)
library(plyr)
library(BradleyTerry2)


## Preparing the data
#setwd("") 

players <- read.csv(file='LCSSummer.csv', sep=',', stringsAsFactors = F)
colnames(players)<-c("Name","Role","Team","Results","Total.Points",
                     "Avg.Points.Per.Game","Game.Played","Kill","Death","Assists",
                     "Creep.Kill","ten.A","triple.quadra.penta.kills")


players$triple.quadra.penta.kills<-NULL


#remove rows for players who never played
players <- players %>% dplyr::filter(Game.Played>0)


#make index for summary/details datasets
players$my_index<-ifelse(players$Name=="",2,1)


#function to impute the Name/Role in missing rows
#knowing that the first row -> summary --> not empty

for(i in 1:nrow(players)){
  if(players$Name[i]!=""){
    currentName <- players$Name[i]
    currentRole <- players$Role[i]
  }
  else if (players$Name[i]==""){
    players$Name[i] <- currentName
    players$Role[i] <- currentRole
  }       
}


#players_details
## players_details is the detail of each player on every unique game they have played
players_details <- players %>% dplyr::filter(my_index==2) %>% dplyr::select(-c(my_index))
players_details$Team1<-sapply(players_details$Team, function(x) strsplit(x," ")[[1]][1])
players_details$Team2<-sapply(players_details$Team, function(x) strsplit(x," ")[[1]][3])
players_details$Result<- sapply(players_details$Results, function(x) strsplit(x," ")[[1]][1])
players_details$KDA<-ifelse(players_details$Death>0,players_details$Kill*players_details$Assists/players_details$Death,players_details$Kill)
players_details$Multi<-ifelse(players_details$triple.kills>0 | players_details$quadra.kills>0 | players_details$penta.kills>0,'yes','no')
players_details$Team<-NULL
players_details$Results<-NULL


#players_summary
## players_summary is the sum of all the games each player has played
players_summary <- players %>% dplyr::filter(my_index==1) %>% dplyr::select(-c(my_index))



players_summary$KDA <- (players_summary$Kill + players_summary$Assists) / players_summary$Death

# KDA for each role
roles<-unique(players_summary$Role) #getting unique roles(Top, Jungle, Mid, ADC, Support)

## KDA based on Role
listPlot1<-list()
for(i in 1:length(roles)){
  listPlot1[[i]]<-players_summary %>% 
    dplyr::filter(Role==roles[i]) %>% 
    ggplot(aes(x= reorder(Name,KDA),y= KDA,fill=Team)) + 
    geom_bar(stat='identity',width=.5) + coord_flip() + 
    scale_fill_manual(values=colorRampPalette(brewer.pal(9, "Set1"))(length(unique(players_summary$Team)))) + 
    theme_fivethirtyeight() + ggtitle(paste0('KDA\n',roles[i])) + 
    theme(axis.text.y = element_text(size=8),
          legend.title=element_blank(),legend.direction='vertical',
          legend.position='right',
          legend.text=element_text(size=8),
          legend.key.size = unit(.3, "cm"))
}
do.call(grid.arrange, c(listPlot1, ncol=2))
# KDA overall
ggplot(players_summary,aes( x = Death , y= reorder(Name,Kill +Assists))) +
  geom_point(aes(color=Team), size = 3, alpha = 0.75) +
  scale_color_manual(values=colorRampPalette(brewer.pal(8, "Set1"))(length(unique(players_summary$Team)))) + 
  theme_fivethirtyeight()  + 
  ggtitle('x = Death,y = Kill + Assist') +
  theme(legend.position='right',legend.direction='vertical')
  
### CALCULATING NUMBER OF WINS AND LOSS

## Turning win and loss into numbers easier to count
players_details$Result[players_details$Result=="Win"]<- 1
players_details$Result[players_details$Result=="Loss"]<- 0
players_details$Result <- as.numeric(as.character(players_details$Result))
a <-aggregate(players_details$Result, by=list(name=players_details$Name), FUN=sum)
a
#for loose
players_details$Result[players_details$Result==1]<- 0
players_details$Result[players_details$Result==0]<- 1
players_details$Result <- as.numeric(as.character(players_details$Result))
b <-aggregate(players_details$Result, by=list(name=players_details$Name), FUN=sum)
b

#ordering the players summary to add the result of games
players_summary <-players_summary[order(players_summary$Name), ]
players_summary$SeriesWon <- a
players_summary$Series<- b

#calculating the WP of players
players_summary$WP<-players_summary$SeriesWon[2] / players_summary$Series[2]
players_summary$WP <- as.numeric(unlist(players_summary$WP))

mod <- lm(WP~KDA, data=players_summary)
summary(mod)

coefficients(mod)


#intercept: If run differential is 0, thus the team makes and allows equal number of points
# then you expect to win 50% of the games.

#slope: 1 unit increase in run differential increases the winning percentage by 0.1


# exponent is needed in order to complete the formula
# Link for exponent formula (https://en.wikipedia.org/wiki/Pythagorean_expectation)
exponent <- 1.50 + log((sum(players_summary$Kill) + sum(players_summary$Death))/sum(players_summary$Series[2])) + 0.45
exponent
# 4.4
## calculating the pythagorean WP
players_summary$WP_P <- players_summary$Kill^exponent/(players_summary$Kill^exponent + players_summary$Death^exponent)
players_summary$WP_P
## Getting the errors
errors <- players_summary$WP - players_summary$WP_P
errors
plot(errors, pch=16)
sqrt(mean(errors^3))


## make team with this probabilities
players_summary$SeriesWon <- NULL
players_summary$Series <- NULL

## calculating manuly

TSM_PY <- players_summary %>% filter(Team=="TSM") %>% summarise(kills= sum(Kill), deaths= sum(Death))
C9_PY <- players_summary %>% filter(Team=="Cloud9") %>% summarise(kills= sum(Kill), deaths= sum(Death))

#win percantage of TSM
TSM_PY$WP <- TSM_PY$kills^exponent/(TSM_PY$kills^exponent + TSM_PY$deaths^exponent)
TSM_PY$WP
#win percantage of C9
C9_PY$WP <- C9_PY$kills^exponent/(C9_PY$kills^exponent + C9_PY$deaths^exponent)
C9_PY$WP
## note for py try to do for all teams

team_summary <- ddply(players_summary, .(Team), summarize, kill = sum(Kill), death = sum(Death))
team_summary$WP <- team_summary$kill^exponent/(team_summary$kill^exponent + team_summary$death^exponent)
team_summary
#PY formula for all teams done

## now BTM

BTM <- players_details %>%
  group_by(Name, Team1, Team2) %>%
  summarise(kill = sum(Kill), death = sum(Death))

BTM <- ddply(players_details, .(Name, Team1, Team2), summarize, kill = sum(Kill), death = sum(Death))


head(BTM, n=5)

model<- BTm(cbind(Kill,Death),Team1,Team2,data=players_details, id="")
summary(model)

coef <- model$coefficients
sort(coef, decreasing = T)

length(unique(players_details$Team1))
# 20 teams overall

length(coef)
# and we 19 coefs

BTabilities(model)

coef1 <- as.data.frame(BTabilities(model))
coef1 <- coef1[order(coef1$ability, decreasing = T),]
coef1

TeamSoloMid <- data.frame(Team1=rep("TSM", 2),
                          Team2=c("Cloud9", "H2K"))

#
TeamSoloMid
team <- model$coefficients
TeamSoloMid$Team1<- factor(TeamSoloMid$Team1,levels=team_summary$Team)

TeamSoloMid$Team2<-factor(TeamSoloMid$Team2,levels=team_summary$Team)

  
str(TeamSoloMid)

#automatic pob calc

TSM_P <- predict(model, newdata = TeamSoloMid, level = 2, type = "response",scale=NULL)

TSM_P

TSM_df <- data.frame(TeamSoloMid, Team1= TSM_P, Team2 = 1- TSM_P)

TSM_df
#manual prob cal
TSM_ab <- coef1[rownames(coef1)=="TSM",1]
CLG_ab<- coef1[rownames(coef1)=="CLG",1]
TL_ab <- coef1[rownames(coef1)=="TL",1]

exp(TSM_ab)/(exp(TSM_ab)+(exp(CLG_ab)))

exp(TSM_ab)/(exp(TSM_ab)+(exp(TL_ab)))
