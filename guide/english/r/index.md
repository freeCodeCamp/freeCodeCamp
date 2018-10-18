---
title: Data Analysis on the Syrain war with R
---
Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @KevorkSulahian Sign out
1
1 0 KevorkSulahian/Syrian_War
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights  Settings
Syrian_War/main.R
5da0d0b  on Aug 16
@KevorkSulahian KevorkSulahian final
    
218 lines (156 sloc)  7.06 KB
## By Kevork Sulahian

## used Libraries
library(dplyr)
library(ggplot2)
library(lubridate)
library(stringr)
library(ggmap)

## Cleaning the data
syria <- read.csv("data.csv", stringsAsFactors = F)

syria <- syria[-1,]

syria <- syria[c("data_id","event_date", "year", "event_type", "actor1", "assoc_actor_1", "actor2" ,"assoc_actor_2",
                "admin1", "admin2", "admin3", "geo_precision", "fatalities")]



sapply(syria, class)


syria$event_date <- as.Date(syria$event_date, format = "%Y-%m-%d")

syria$fatalities <- as.numeric(syria$fatalities)

colnames(syria) <- c("ID", "date", "year", "type", "team1", "team1_assister", "team2",
                     "team2_assister", "state", "city", "street", "geo_precision", "fatalities")


### Note many of the names were written wrong and I think it would take insane amout of time to correct each and every single one of them
syria$state <- str_replace_all(syria$state, pattern = "^As-", replacement = "Al-")
syria$city <- str_replace_all(syria$city, pattern = "^As-", replacement = "Al-")
syria$city <- str_replace_all(syria$street, pattern = "Ash", replacement = "Al")
syria$street <- str_replace_all(syria$street, pattern = "^As-", replacement = "Al-")
syria$street <- str_replace_all(syria$street, pattern = "^Ash-", replacement = "Al-")
syria$street <- str_replace_all(syria$street, pattern = "Ash", replacement = "Al")
syria <- syria[!grepl("Jizeh", syria$street),]


### Checking the fighting groups in Syria (248 different groups)
fighters <- as.data.frame(unique(syria$team1))

## since there are too many and their names are kinda similar or different from what online data shows
## I believed it would be much easier to show the main battles (Syrian Army vs Rebel/terrorist groups)
military_syria <- str_extract_all(syria$team1, pattern = "^Military Forces of Syria")
military_syria_defend <- str_extract_all(syria$team2, pattern = "^Military Forces of Syria")

syria_attack <- {}
syria_defend <- {}
## Attack
j = 1
for(i in military_syria) {
  if(length(i)> 0) {
    syria_attack[j] = T
    j = j+1
  } else {
    syria_attack[j] = F
    j = j+1
  }
}
## Defend
j = 1
for(i in military_syria_defend) {
  if(length(i)> 0) {
    syria_defend[j] = T
    j = j+1
  } else {
    syria_defend[j] = F
    j = j+1
  }
}
syria$government_attack <- syria_attack
syria$government_defend <- syria_defend


### sorting the data by months
by_month <- syria %>%
  group_by(month = floor_date(date, "month")) %>%
  summarize(death = sum(fatalities),
            attack = sum(government_attack),
            defend = sum(government_defend)) 


by_month$year <- substr(by_month$month, 0,04)
by_month$month_abb <- months(as.Date(by_month$month), abbreviate = TRUE)
by_month$month <- as.numeric(format(as.Date(by_month$month), "%m"))
by_month$attack <- as.numeric(by_month$attack)


### Visualizing the by_month data
ggplot(by_month, aes(x = factor(month, levels = c(1:12)), y = death, group = year, colour=year)) + 
  geom_line() +
  geom_point() +
  scale_x_discrete(breaks = by_month$month, labels = by_month$month_abb) +
  labs(x = "months", y = "deaths", title = "difference in the number of deaths between 2017 and 2018")

ggplot(by_month, aes(x = factor(month, levels = c(1:12)), y = attack, group = year, colour=year)) + 
  geom_line() +
  geom_point() +
  scale_x_discrete(breaks = by_month$month, labels = by_month$month_abb) +
  labs(x = "months", y = "attack", title = "difference in the number of attack by the main Army of Syria between 2017 and 2018")

ggplot(by_month, aes(x = factor(month, levels = c(1:12)), y = defend, group = year, colour=year)) + 
  geom_line() +
  geom_point() +
  scale_x_discrete(breaks = by_month$month, labels = by_month$month_abb) +
  labs(x = "months", y = "defend", title = "difference in the number of times attack by the main Army of Syria was attacked between 2017 and 2018")


### sorting data by state

by_state <- syria %>%
  group_by(state) %>%
  summarize(death = sum(fatalities),
            attack = sum(government_attack),
            defend = sum(government_defend)) 


ggplot(by_state, aes(y  =  death, x = state, fill = state)) + geom_bar(stat = "identity") +
  labs(x = "states of Syria", y = "number of casualties", title = "Number of Casualties per state")

ggplot(by_state, aes(y  =  attack, x = state, fill = state)) + geom_bar(stat = "identity") +
  labs(x = "states of Syria", y = "number of operations by Syrian Army", title = "Number of operations by Syrian Army in each state")

ggplot(by_state, aes(y  =  defend, x = state, fill = state)) + geom_bar(stat = "identity") +
  labs(x = "states of Syria", y = "number of against the Syrian Army", title = "Number of against the Syrian Army in each state")


## function to draw map based on state

draw_map <- function(this_state = NA) {
  
  if(is.na(this_state)) {
  get_states <- distinct(syria, street, .keep_all = TRUE)
  
  df.states_location <- tibble(location = c(get_states$street))
  
  df.states_location <- geocode(df.states_location$location)
  
  return(get_map("Syria", zoom = 6) %>% ggmap() +
  geom_point(data = df.states_location, aes( x = lon, y= lat),
             color = "red", size = 3))
  
  } else {
    get_state <- syria %>%
      filter(state == this_state) 
    
    get_state <- distinct(get_state, street, .keep_all = TRUE)
    
    df.state_locations <- tibble(location = c(get_state$street))
    
    df.state_locations <- geocode(df.state_locations$location)
    
    return(get_map(paste0("Syria,", this_state), zoom = 8) %>% ggmap() +
      geom_point(data = df.state_locations,aes(x = lon, y = lat),
                 color = "red", size = 3))
  }
}

### function to draw map based on Date
draw_map_specific <- function(df) {
  
  df <- distinct(df, street, .keep_all = TRUE)
  
  df.state_locations <- tibble(location = c(df$street))
  
  df.state_locations <- geocode(df.state_locations$location)
  
  df.state_locations <- df.state_locations[complete.cases(df.state_locations), ]
  
  this_state_name <- df$state[1]
  
  return(get_map(paste0("Syria,", this_state_name), zoom = 8) %>% ggmap() +
           geom_point(data = df.state_locations,aes(x = lon, y = lat),
                      color = "red", size = 3))
}
# calling the functions
# Note this will take a lot of time Advise especially all
Aleppo <- draw_map("Aleppo")

all <- draw_map(NA)

### function to get battle by date

as_date <- function(my_date) {
  my_date <- as.Date(my_date)
  my_date2 <- as.Date(my_date)
  month(my_date2) <- month(my_date2) + 1
  by_date <- syria %>%
    filter(date >= my_date,date <= my_date2)
  
  most_fight <- by_date %>%
    count(state) %>%
    slice(which.max(n)) 
  
  most_state <- by_date %>%
    filter(state == as.character(most_fight[1]))
  
  return(most_state)
}

this_month <- function(Year_Month_Day) {
  ### for one month only
  this_date <- as_date(Year_Month_Day)
  # print(this_date)
  this_date_battles <- draw_map_specific(this_date)
  
  ### show who's attacking
  # print(c(sum(this_date$government_attack), sum(this_date$government_defend)))

  return(this_date_battles)
}

## this mapping will also consume a lot of time
September_2017 <- this_month("2017-08-01")
August_2018 <- this_month("2018-06-01")

