import random

print("Rock Paper Scissors Game\n")

user_wins = 0
computer_wins = 0
options = ["rock", "paper", "scissors"]

while True:
    user_input = input("Enter rock/paper/scissors or q to quit: ").lower()
    if user_input == 'q':
        break

    if user_input not in options:
        print("Enter valid entry.")
        continue

    random_number = random.randint(0,2)
    # 0 - rock, 1 - paper, 2 - scissors
    computer_pick = options[random_number]
    print("Computer's Choice - " + str(computer_pick))

    if user_input == "rock" and computer_pick == "scissors":
        print("You won!")
        user_wins = user_wins + 1

    elif user_input == "paper" and computer_pick == "rock":
        print("You won!")
        user_wins = user_wins + 1

    elif user_input == "scissors" and computer_pick == "paper":
        print("You won!")
        user_wins = user_wins + 1

    else:
        print("Computer won!")
        computer_wins = computer_wins + 1

print("You won " + str(user_wins) + " times.")
print("Computer won " + str(computer_wins) + " times.")
print("Nice Game!!!")
