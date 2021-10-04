def print_rangoli(size):
    import string
    width = 4 * size - 3
    alpha = string.ascii_lowercase
    for i in list(range(size))[::-1] + list(range(1, size)):
        print('*'.join(alpha[size-1:i:-1] + alpha[i:size]).center(width, '*'))
        
if __name__ == '__main__':
    n = int(input())
    print_rangoli(n)