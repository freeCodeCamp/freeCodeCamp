import hashlib

# def crack_sha1_hash(hash, use_salts=False):

#     passwordsFile = open('top-10000-passwords.txt', 'r') 
#     for i in range(30):
#         password = passwordsFile.readline() 
#         print(password)
#         print(len(password))
#         password = password.strip()
#         print(password)
#         print(len(password))

#         hashedPassword = hashlib.sha1(password.encode('utf-8')).hexdigest()
#         # hashedPassword.update(password)
#         print(hashedPassword)
#         # result = hashedPassword.hexdigest()
#         # print(result)

#         if hashedPassword == hash:
#             print(1)
#             print(password)
#             return password

#     passwordsFile.close()

# print(crack_sha1_hash(
#   "18c28604dd31094a8d69dae60f1bcd347f1afc5a"))

def crack_sha1_hash(hash, use_salts=False):

    passwordsFile = open('top-10000-passwords.txt', 'r') 
    for i in range(30):
        password = passwordsFile.readline() 
        password = password.strip()

        hashedPassword = hashlib.sha1()
        print(hashedPassword)
        hashedPassword = hashedPassword.update(password.encode('utf-8'))
        print(hashedPassword)
        hashedPassword = hashedPassword.hexdigest()
        print(hashedPassword)

        if hashedPassword == hash:
            return password

    passwordsFile.close()

print(crack_sha1_hash(
  "18c28604dd31094a8d69dae60f1bcd347f1afc5a"))
