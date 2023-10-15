def isPalindrome(self, x: int) -> bool:
        str_x = str(x)
        m = len(str_x)
        lst = []
        for i in range(m):
            idx = str_x[i]
            lst.append(idx)
        new_str = ''
        for i in lst[::-1]:
            new_str += i        
        return new_str == str_x
