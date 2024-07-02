---
id: 66629f407d679d3105e8317f
title: Побудуйте гру «Камінь-ножиці-папір»
challengeType: 14
dashedName: top-build-a-rock-paper-scissors-game
---

# --description--
У грі буде двоє гравців: людина і комп’ютер. Ви напишете функцію, яка випадковим чином повертає `"rock"`, `"paper"` або `"scissors"`.

Не турбуйтесь про фронт енд гри. Ви писатимете лише логіку гри. Відкрийте `script.js` та дотримуйтесь інструкцій нижче.

**Історія користувача:**

1. Ви повинні мати функцію під назвою `getComputerChoice`.

1. Функція `getComputerChoice` має повернути `"rock"`, `"paper"` або `"scissors"` (випадковим чином).

**Підказка:** метод [Math.random](https://webdoky.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random/) повертає випадкове число, яке більше або дорівнює 0, але менше за 1. Подумайте, як його можна використати, щоб умовно повернути один з декількох виборів.

Гру гратиме людина. Ви напишете функцію, яка приймає вибір користувача та повертає його.

1. Створіть функцію під назвою `getHumanChoice`.

1. Напишіть такий код, щоб функція `getHumanChoice` повернула один з дійсних виборів залежно від вхідних даних користувача.

**Підказка:** використайте метод [prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt), щоб отримати вхідні дані користувача.

Гра вестиме рахунок. Для цього ви напишете змінні.

1. У глобальній області створіть дві змінні під назвами `humanScore` та `computerScore`.

1. Надайте цим змінним значення `0`.

Після кожного раунду буде інший. Ви напишете функцію, яка приймає вибори гравців як аргументи, грає один раунд, збільшує очки переможця та оголошує переможця.

1. Створіть нову функцію під назвою `playRound`.

1. Визначте два параметри для `playRound`: `humanChoice` та `computerChoice`. Використайте ці два параметри, щоб прийняти вибори людини та комп’ютера як аргументи.

1. Зробіть параметр `humanChoice` нечутливим до регістру, щоб гравці могли вводити `"rock"`, `"ROCK"`, `"RocK"` чи інші варіанти.

1. Напишіть код для функції `playRound`, що повертає рядок із переможцем раунду.

- Якщо нічия, вона має повернути `"It's a tie!"`.

- Якщо перемогла людина, вона має повернути `"You win! [player choice] beats [computer choice]"`.

- Якщо переміг комп’ютер, вона має повернути `"You lose! [computer choice] beats [player choice]"`.

1. Збільште змінну `humanScore` або `computerScore` залежно від переможця раунду.

Гра складається з 3 раундів. Ви напишете функцію `playGame`, яка викликає `playRound`, щоб зіграти 3 раунди, веде рахунок та оголошує переможця вкінці.

1. Створіть нову функцію під назвою `playGame`.

1. Створіть цикл, який грає 3 раунди і кожного разу викликає функцію `playRound`, аргументами якої є вибори людини та комп’ютера.

1. У кінці гри поверніть переможця гри на основі того, хто виграв більше раундів.

- Якщо людина перемагає більше раундів, ніж комп’ютер, поверніть повідомлення `"You win the game!"`.

- Якщо комп’ютер перемагає більше раундів, ніж людина, поверніть повідомлення `"You lose the game!"`.

# --hints--

Ви повинні мати функцію під назвою `getComputerChoice`

```js
assert.isFunction(getComputerChoice);
```

Функція `getComputerChoice` має повернути `"rock"`, `"paper"` або `"scissors"` (випадковим чином).

```js
const counts = {}
for (let i = 0; i < 100; i++) {
  const result = getComputerChoice();
  counts[result] = (counts[result] ?? 0) + 1;
}
assert.lengthOf(Object.keys(counts), 3);
assert.include(Object.keys(counts), "rock");
assert.include(Object.keys(counts), "paper"); 
assert.include(Object.keys(counts), "scissors");
```

Ви повинні мати функцію під назвою `getHumanChoice`

```js
assert.isFunction(getHumanChoice);
```

Ви повинні мати дві змінні (`humanScore` та `computerScore`) у глобальній області.

```js
assert.exists(humanScore);
assert.exists(computerScore);
```

Ви повинні мати функцію під назвою `playRound`

```js
assert.isFunction(playRound);
```

Функція `playRound` має приймати вибори людини і комп’ютера як аргументи у вигляді параметрів `humanChoice` та `computerChoice`.

```js
assert.match(playRound.toString(), /\s*(?:\bhumanChoice\b\s*,\s*\bcomputerChoice\b)/);
```

Функція `playRound` має бути нечутливою до регістру, щоб гравці могли вводити `"rock"`, `"ROCK"`, `"RocK"` чи інші варіанти.

```js
assert.match(playRound.toString(), /\bhumanChoice\s*\.toLowerCase\(\)/);
```

Функція `playRound` має повернути рядок `"It's a tie!"`, якщо вибір людини та комп’ютера однаковий.

```js
assert.equal(playRound("rock", "rock"), "It's a tie!");
```

Функція `playRound` має повернути рядок `"You win! [player choice] beats [computer choice]"`, якщо перемогла людина.

```js
assert.equal(playRound("rock", "scissors"), "You win! rock beats scissors");
```

Функція `playRound` має повернути рядок `"You lose! [computer choice] beats [player choice]"`, якщо переміг комп’ютер.

```js
assert.equal(playRound("rock", "paper"), "You lose! paper beats rock");
```

Функція `playRound` має збільшити змінну `humanScore` або `computerScore` залежно від переможця раунду.

```js
humanScore = 0;
computerScore = 0;
playRound("rock", "scissors");
assert.equal(humanScore, 1);
```

Ви повинні мати функцію під назвою `playGame`.

```js
assert.isFunction(playGame);
```

Використайте цикл, щоб зіграти 3 раунди.

```js
assert.match(playGame.toString(), /\bfor\s*\(/);
```

Поверніть переможця гри на основі того, хто виграв більше раундів.

```js
window.prompt = () => "rock";
assert.match(playGame(), /You (win|lose) the game!/);
```

# --seed--

## --seed-contents--

```js
const hand = ['rock', 'paper', 'scissor'];
```

```html
<html lang="en">
<head>
  <script src="script.js"></script>
</head>
</html>
```

# --solutions--

```html
<html lang="en">
<head>
  <script src="script.js"></script>
</head>
</html>
```

```js
const hand = ['rock', 'paper', 'scissors'];


let computerScore = 0;
let humanScore = 0;

const getComputerChoice = () => {
  return hand[Math.floor(Math.random() * hand.length)];
}

const getHumanChoice = () => {
  return prompt();
}

const playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toLowerCase()

  const tie = "It's a tie!"
  const win = `You win! ${humanChoice} beats ${computerChoice}`
  const lose = `You lose! ${computerChoice} beats ${humanChoice}`


  if (humanChoice == 'rock') {
    if (computerChoice == 'rock') {
      computerScore++;
      humanScore++;
      return tie;
    } else if (computerChoice == 'paper') {
      computerScore++;
      return lose;
    } else {
      humanScore++;
      return win;
    }
  } else if (humanChoice == 'paper') {
    if (computerChoice == 'rock') {
      humanScore++;
      return win;
    } else if (computerChoice == 'paper') {
      computerScore++;
      humanScore++;
      return tie;
    } else {
      computerScore++;
      return lose;
    }
  } else if (humanChoice == 'scissors') {
    if (computerChoice == 'rock') {
      computerScore++;
      return lose;
    } else if (computerChoice == 'paper') {
      humanScore++;
      return win;
    } else {
      computerScore++;
      humanScore++;
      return tie;
    }
  }
}

const playGame = () => {
  for(let i = 0; i < 3; i++){
    playRound(getHumanChoice(), getComputerChoice())
  }

  return humanScore > computerScore ? "You win the game!" : "You lose the game!"
}

```

