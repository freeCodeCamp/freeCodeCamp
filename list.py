if __name__ == '__main__':
    dicts = {}

    for _ in range(int(input())):
        name, *scorelist = input().split()
        score = list(map(float,scorelist))
        dicts[name] = score

    avg_name = input()

    if avg_name in dicts:
        avg_score = (sum((dicts[avg_name])))/(len((dicts[avg_name])))
        print(f'{avg_score:.2f}')
