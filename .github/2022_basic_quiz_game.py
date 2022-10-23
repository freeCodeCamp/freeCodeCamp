print("Welcome to Computer Quiz Game !!!")

playing = input("Do you want to play? ")

if playing.lower() != "yes":
    quit()

print("Okay! Let's play.")

score = 0

answer = input("\nQuestion 1 \nWhat's the commercial city of Sri Lanka? ")
if answer.lower() == "colombo":
    print("Yes, it is correct")
    score = score + 1
else:
    print("No, it is not correct. The answer is Colombo.")

answer = input("\nQuestion 2 \nWhat's the population of Sri Lanka? ")
if answer.lower() == "22 million":
    print("Yes, it is correct")
    score = score + 1
else:
    print("No, it is not correct. The answer is 22 million.")

answer = input("\nQuestion 3 \nWhat's the biggest export of Sri Lanka? ")
if answer.lower() == "clothes":
    print("Yes, it is correct")
    score = score + 1
else:
    print("No, it is not correct. The answer is clothes.")

answer = input("\nQuestion 4 \nWhat's the national sport of Sri Lanka? ")
if answer.lower() == "volleyball":
    print("Yes, it is correct")
    score = score + 1
else:
    print("No, it is not correct. The answer is volleyball.")

answer = input("\nQuestion 5 \nWhat's the currency of Sri Lanka? ")
if answer.lower() == "rupees":
    print("Yes, it is correct")
    score = score + 1
else:
    print("No, it is not correct. The answer is rupees.")

print("\nYour score is " + str(score) + "/5 = " + str((score/5) * 100) + "%.")

if score == 5:
    print("Congratulations you achieved the highest score !!!")
elif score > 2:
    print("Congratulations you achieved a good score !!!")
else:
    print("Nice try !!!")
