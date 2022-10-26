import requests
from bs4 import BeautifulSoup


response = requests.get("https://stackoverflow.com/questions")

soup = BeautifulSoup(response.text,"html.parser")

questionsall = soup.select(".s-post-summary--content")
votes=soup.select(".s-post-summary--stats-item-number")
# print(votes[0].text)


i=0
for question in questionsall:
    title=question.select_one(".s-link")
    containt=question.select_one(".s-post-summary--content-excerpt")
    print(title.text.lstrip())
    print('- - - - - - - - - - - - -  - - - - ')
    print(containt.text.lstrip())
    print('\n votes : '+str(votes[i].text))
    i=i+1
    
    print("________________________\n")
























