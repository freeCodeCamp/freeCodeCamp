import random

print("Number Guessing Game")

top_range = input("\nEnter a number to be the top range: ")

if top_range.isdigit():
    top_range = int(top_range)
    if top_range <= 0:
        print("Please enter a larger number than 0.")
        quit()
else:
    print("Please enter a number.")
    quit()

random_num = random.randint(0, top_range)
num_guess = 0

while True:
    num_guess = num_guess + 1
    user_guess = input("Make a guess: ")
    if user_guess.isdigit():
        user_guess = int(user_guess)
    else:
        print("Enter a number.")
        continue

    if user_guess == random_num:
        print("You got it right.")
        break
    elif user_guess > random_num:
        print("Your guess was greater than the random number.")
    else:
        print("Your guess was less than the random number.")

print("Congrats! You got it right in " + str(num_guess) + " guesses.")
quit()
