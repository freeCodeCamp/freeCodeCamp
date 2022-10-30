"""
Name : IP2Location
Authon : Devesh Singh
Description : This Script grabs the information about the given IP Address using API.
Extracted details includes the City, Country, Latitude, Longitude, and if the IP is proxy or not and many things.
"""

import json
import requests as r

def ipinfo(ip):
  url = "http://ip-api.com/json/"+ip+"?fields=10184703"
  ipdataraw = r.get(url).text
  ipdata = json.loads(ipdataraw)
  if ipdata["status"] == "success":
    print("You Searched for : "+ipdata["query"]+"\n\n")
    print("City %16s" % ": "+ipdata["city"])
    print("State %15s" % ": "+ipdata["regionName"])
    print("Country %13s" % ": "+ipdata["country"])
    print("Zip Code %12s" % ": "+ipdata["zip"])
    print("Continent %11s" % ": "+ipdata["continent"])
    print("Latitude %12s" % ": "+str(ipdata["lat"]))
    print("Longitude %11s" % ": "+str(ipdata["lon"]))
    lurl = "https://www.google.com/maps/place/"+str(ipdata["lat"])+","+str(ipdata["lon"])
    print("Location URL %8s" % ": "+lurl)
    print("Timezone %12s" % ": "+ipdata["timezone"])
    print("Currency %12s" % ": "+ipdata["currency"])
    print("Internet Provider %3s" % ": "+ipdata["isp"])
    print("Is mobile ? %9s" % ": "+str(ipdata["mobile"]))
    print("Is Proxy ? %10s" % ": "+str(ipdata["proxy"]))
  else:
    print("Something Went Wrong..!!\n Please Internet Connection")

if __name__ == "__main__":
  ip = input("Enter IP Address to search : ")
  ipinfo(ip) # example : ipinfo("203.145.142.86")
