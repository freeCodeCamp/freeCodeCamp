---
id: 6331d233b51aeedd1a2bd645
title: "Розв’язок рівняння: додатково"
challengeType: 15
videoId: lFTCVUCbNoM
dashedName: how-to-solve-for-x-extra
---

# --description--

У цьому відео ви детальніше ознайомитесь з SymPy, розглянувши більше прикладів. Ви також дізнаєтесь, як функції генерують випадкові вирази.

Ось <a href="https://colab.research.google.com/drive/1Jv6WxW93J_1GZao8DkNb4X0D93oVibbs" target="_blank" rel="noopener noreferrer nofollow">блокнот Colab для цього відео.</a> Використайте його, щоб заповнити свій блокнот Colab з алгебри.

# --question--

## --assignment--

Додайте код з відео для інших розв’язків рівняння до свого блокноту Colab.

---

Відкрийте наступний блокнот Colab, запустіть секцію та <a href="https://colab.research.google.com/drive/1XjmHoERFKcvol7FPidQE-wgdvR82HV45" target="_blank" rel="noopener noreferrer nofollow">попрактикуйтесь над розв’язком прикладів з однією й двома діями.</a> Як бонус, гляньте на код, який генерує приклади для практики.

## --text--

Якщо ви імпортуєте SymPy та визначите x як змінну, то який вивід ви отримаєте з наступного коду?

```py
example = 3*x - 12
equation = Eq(example,0)
solution = solve(equation,x)
print(solution)
```

## --answers--

3

---

4

---

[4]

---

x = 4

## --video-solution--

3
