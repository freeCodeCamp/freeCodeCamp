b = [
    [7,8,0,4,0,0,1,2,0],
    [6,0,0,0,7,5,0,0,9],
    [0,0,0,6,0,1,0,7,8],
    [0,0,7,0,4,0,2,6,0],
    [0,0,1,0,5,0,9,3,0],
    [9,0,4,0,6,0,0,0,5],
    [0,7,0,3,0,0,0,1,2],
    [1,2,0,0,0,7,4,0,0],
    [0,4,9,2,0,6,0,0,7]
]

def solve(b):
    find = find_empty(b) # Check empty box
    if not find:
        return True # Final state of the board when every box is filled
    else:
        row, col = find

    for i in range(1,10):
        if valid(b, i, (row, col)):
            b[row][col] = i # Place the number in the board if its valid

            if solve(b):
                return True # Continue from that board state onwards
                
            b[row][col] = 0

    return False

def valid(b, num, pos):
    
    for i in range(len(b[0])): # Check row
        if b[pos[0]][i] == num and pos[1] != i: # Check element in row if its equal to the number added and if its the current position being added to then ignore it
            return False

   
    for i in range(len(b)):  # Check column
        if b[i][pos[1]] == num and pos[0] != i: # Check element column-wise if it equals the number added and its not the position that the new number was just added into
            return False

    box_x = pos[1] // 3 # Check 3x3 box
    box_y = pos[0] // 3

    for i in range(box_y*3, box_y*3 + 3): # Loop through the 3x3 boxes
        for j in range(box_x * 3, box_x*3 + 3):
            if b[i][j] == num and (i,j) != pos: # Check if same number exits in the 3x3 box and (i, j) was the position the new number was just added to
                return False

    return True

def print_board(b):
    for i in range(len(b)):
        if i % 3 == 0 and i != 0:
            print("- - - - - - - - - - - - - ") # Separate sections of the board row-wise (Every 3x3 box)

        for j in range(len(b[0])):
            if j % 3 == 0 and j != 0:
                print(" | ", end="") # Separate sections of the board column-wise

            if j == 8:
                print(b[i][j])
            else:
                print(str(b[i][j]) + " ", end="")


def find_empty(b):
    for i in range(len(b)):
        for j in range(len(b[0])):
            if b[i][j] == 0: # Check if there is a 0 in each position of the box
                return (i, j)   # Return the  row and column

    return None

print_board(b)
print(" ")
solve(b)
print_board(b)
