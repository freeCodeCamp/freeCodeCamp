"""
Name : Fake Detail Generator
Authon : Devesh Singh
Description : This Script generates fake details which is used for various purpose.
Generated details are Name, Email, Phone, Age, Address, Credit Number, etc.
"""

import random,os
try:
    import getindianname as name
    from indian_cities.dj_city import cities as city
except:
    print("\n Installing dependency... Please wait...\n\n")
    os.system("pip install getindianname")
    os.system("pip install indian-cities")
    os.system("cls||clear")

def make_random_number(number_of_element):
    random_numbers = []
    for i in range(number_of_element):
        random_numbers.append(random.randint(0, 9))
    return random_numbers

def creditcard():
    ccno = ''
    random_master_int = make_random_number(13)
    random_master_int.insert(0,5)
    random_master_int.insert(1,4)
    sum_even = []
    sum_odd = []
    for index,element in enumerate(random_master_int):
        if index % 2 != 0:
            r = random_master_int[index] * 2
            character_string = list(str(r))
            character_int = map(int, character_string)
            sum_even.append(sum(character_int))
        if index % 2 == 0:
            sum_odd.append(element)
    total_sum = sum(sum_even)+sum(sum_odd) * 9
    random_master_int.append(total_sum % 10)
    ccno = ''.join(map(str, random_master_int))
    return ccno

def generate(gender):
    if gender.lower() == "male":
        mname = name.male()
    elif gender.lower() == "female":
        mname = name.female()
    elif gender.lower() == "random":
        genk = ["male","female"]
        gender = random.choice(genk)
        if gender.lower() == "male":
            mname = name.male()
        else :
            mname = name.female()
    else:
        print("Please Enter valid Gender")
        exit()
        
    age = random.randint(17,60)
    cityk = random.randint(0,33)
    address = city[cityk][1][random.randint(0,len(city[cityk][1])-1)][0]+", "+city[cityk][0]
    domains = ["@gmail.com", "@outlook.com", "@hotmail.com", "@yahoo.com", "@aol.com", "@rediffmail.com", "@mail.com", "@yandex.com"]
    email = (mname.replace(" ","")).lower()+str(random.randint(10,1000))+random.choice(domains)
    phone = str(random.randint(6,9))+str(random.randint(100101010,999999999))
    username = (mname[:mname.index(" ")]+str(random.randint(1,10000))).lower()
    passwords = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#&"
    password = "".join(random.choice(passwords) for i in range(10))
    cvv = random.randint(101,999)
    expiry = str(random.randint(1,12))+"/"+str(random.randint(2023,2030))
    print("Name %15s" % ": "+mname)
    print("Age %16s" % ": "+str(age))
    print("Gender %13s" % ": "+gender.capitalize())
    print("Email %14s" % ": "+email)
    print("Phone %14s" % ": "+str(phone))
    print("Address %12s" % ": "+address)
    print("Username %11s" % ": "+username)
    print("Password %11s" % ": "+password)
    print("Credit Number %6s" % ": "+str(creditcard()))
    print("CVV %16s" % ": "+str(cvv))
    print("Expiry %13s" % ": "+expiry)
    print("\n")

if __name__ == "__main__":
    count = int(input("Enter number of data required : "))
    gender = input("Enter gender [male/female/random] : ")
    for i in range(count):
        generate(gender)
