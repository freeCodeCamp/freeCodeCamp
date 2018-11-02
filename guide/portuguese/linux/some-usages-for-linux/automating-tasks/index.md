---
title: Automating Tasks
localeTitle: Automatizando Tarefas
---
### Automatizando tarefas ou agendamento de tarefas

Existe um recurso do Linux que é utilizado exclusivamente em um servidor da Web, conhecido como CRON Como sabemos, um dos recursos mais interessantes sobre qualquer servidor web é que é sempre ligado e sempre conectado à internet. Isso significa que podemos instruir nosso servidor para executar tarefas automaticamente, sem precisar digitar um comando em uma concha. Um dos programas mais usados ​​para executar _outros programas_ com uma freqüência regular é chamada `cron` . Vamos dar uma olhada em como usar `cron` para agendar um programa para ser executado.

O programa `cron` faz parte de uma família de programas chamados **daemons** . Um daemon é um programa que está sempre rodando no background do nosso computador. Primeiro, vamos ver se o `cron` está rodando. Podemos obter uma lista de todos os programas em execução com o comando `ps` ao usar o sinalizador `-A` :

\`\` \`{r, engine = 'bash', eval = FALSE} ps -A

## TEMPO DO PID TTY CMD

## 1? 00:00:13 systemd

## 2? 00:00:00 kthreadd

## 3? 00:00:03 ksoftirqd / 0

## 5? 00:00:00 kworker / 0: 0H

## 7? 00:00:11 rcu\_sched

## 8? 00:00:00 rcu\_bh

## 9? 00:00:00 migration / 0

## …
```
You probably have a huge list of programs in your terminal now! Instead of 
 shifting through this listing line-by-line, let's pipe the output of this command 
 to `grep` and we'll look for `cron`: 
```

{r, engine = 'bash', eval = FALSE} ps-A | grep "cron"

## 1273? 00:00:01 cron
```
# You might or might not get a `cron` running . 
 
 Looks like the `cron` daemon is running! In order to assign programs to be 
 executed with `cron` we need to edit a special text file called the `cron` 
 table. Before we edit the `cron` table we need to select the default text 
 editor. If you like using `nano` (the text editor we've been using throughout 
 this book) then enter `select-editor` into the console, type in the number 
 that corresponds to `nano` (usually `2`) and then press enter: 
```

{r, engine = 'bash', eval = FALSE} editor de seleção

## Selecione um editor. Para mudar mais tarde, execute 'editor de seleção'.

## 1\. / bin / ed

## 2\. / bin / nano <---- mais fácil

## 3\. /usr/bin/vim.basic

## 4\. /usr/bin/vim.tiny

## Escolha 1-4 \[2\]:
```
Now that we've chosen a text editor we can edit the `cron` table using the 
 command `crontab -e` (**`cron`** **tab**le **e**dit) which will automatically 
 open `nano` with the appropriate file. 
```

{r, engine = 'bash', eval = FALSE} crontab -e

# Edite este arquivo para introduzir tarefas a serem executadas pelo cron.

#

# m dom dom dow comando
```
Let's go over the layout of the `cron` table. First you should notice that any 
 text after a pound sign (`#`) is a comment, so it's not seen by `cron` (just 
 like bash comments). The `cron` table has six columns: 
 
 1. Minute (`m`) 
 2. Hour (`h`) 
 3. Day of Month (`dom`) 
 4. Month (`mon`) 
 5. Day of Week (`dow`) 
 6. Command to be run (`command`) 
 
 Each column is separated by a single space in the table. The first five columns 
 allow you to specify when you want a particular command to be run. Only certain 
 values are valid in each column: 
 
 1. Minute: `00 - 59` (A particular minute in an hour) 
 2. Hour: `00 - 23` (0 is the midnight hour) 
 3. Day of Month: `01 - 31` (1 is the first day of the month) 
 4. Month: `01 - 12` (1 is January) 
 5. Day of Week `0 - 6` (0 is Sunday) 
 
 There are also a few other characters that are valid in the `cron` table. The 
 most commonly used character is a star (`*`) which represents *all* of the 
 possible values in a column. So a star in the Minute column means "run every 
 minute," and a star in the Hour column means "run during every hour." 
 Knowing this let's make our first entry in the `cron` table. If we want a 
 command to be executed every minute, during every hour, on every day of the 
 month, during every month, on every day of the week, then we can put stars in 
 all of the first five 
 columns, followed by the command that we want to run. In this case the command 
 that `cron` will run every minute will be `date >> ~/date-file.txt`, which will 
 append the date and time when the command is executed to a file in our home 
 directory called `date-file.txt`. This is what your `cron` table should look 
 like before you save and exit from `nano`: 
```

# Edite este arquivo para introduzir tarefas a serem executadas pelo cron.

#

# m dom dom dow comando

*   \* \* \* \* data >> ~ / date-file.txt
```
Save and exit `nano` just like you would for a regular text file and then wait 
 a little bit! After a minute has gone by use `cat` to look at `~/date-file.txt`: 
```

{r, engine = 'bash', eval = FALSE} CD cat date-file.txt

## Qua Jun 8 18:50:01 UTC 2017
```
Look like our entry in the `cron` table is working! Wait another minute and then 
 look at the file again: 
```

{r, engine = 'bash', eval = FALSE} cat date-file.txt

## Qua Jun 8 18:50:01 UTC 2017

## Qua Jun 8 18:51:01 UTC 2017
```
Unless we delete the line that we entered in the `cron` table, the output from 
 `date` will be appended to `date-file.txt` every minute. 
 
 The single line of bash `date >> ~/date-file.txt` is a much simpler program than 
 we would probably use in a `cron` table, though it's good for illustrating how 
 a `cron` table works. If you want to do more complex tasks with `cron` it's 
 better for `cron` to execute a bash script that you've written in advance. That 
 way you can just specify `bash /path/to/script.sh` in the last column of the 
 table. 
 
 Using stars in all columns is the simplest line of a `cron` table, so let's 
 look at some examples of more complex table entries: 
```

# m dom dom dow comando

00 \* \* \* \* bash /path/to/script.sh # É executado a cada hora no início da hora 00 12 \* \* \* bash /path/to/script.sh # Funciona todos os dias ao meio-dia

*   12 \* \* \* bash /path/to/script.sh # Funciona a cada minuto entre as 12 e as 12:59 00 00 05 \* \* bash /path/to/script.sh # Executa o 5º dia de cada mês à meia-noite 00 00 \* 07 \* bash /path/to/script.sh # Funciona todos os dias no mês de julho à meia-noite 00 00 \* \* 2 bash /path/to/script.sh # É executado todas as terças-feiras à meia-noite
```
Besides numbers and the star there are a few other characters that you can use 
 in `cron` table columns including a hyphen (`-`) for specifying ranges and a 
 comma (`,`) for specifying lists of items. For example `00-29` in the Minutes 
 column would specify the first thirty minutes of an hour, while `1,5` in the 
 Day of Week column would specify Monday and Friday. 
 
 Let's take a look at another example of a `cron` table that uses hyphens and 
 ranges so you can get a sense of how each character works. 
```

# m dom dom dow comando

00-04 \* \* \* \* bash /path/to/script.sh # Funciona a cada minuto durante os primeiros cinco minutos de cada hora 00 00 \* \* 0,6 bash /path/to/script.sh # É executado à meia noite todos os sábados e domingos 00 03 01-15 \* \* bash /path/to/script.sh # Corre às 3h nos primeiros quinze dias de cada mês 00,30 \* \* \* \* bash /path/to/script.sh # É executado no início e no meio de cada hora 00 00,12 \* \* \* bash /path/to/script.sh # Funciona todos os dias à meia-noite e meio-dia 00 \* 01-07 01,06 \* bash /path/to/script.sh # É executado no início de cada hora nos primeiros sete dias dos meses de janeiro e junho \`\` \`

Um programa que está sendo executado pelo `cron` é tão poderoso quanto sua imaginação pode esticar! Se você estiver familiarizado com a rede social [Twitter,](https://twitter.com/) então você pode ter encontrado algum Twitter contas que criam postagens automaticamente como [Aquário Emoji](https://twitter.com/emojiaquarium) , [Fotos de frutas antigas](https://twitter.com/pomological) ou [Gritos sem fim](https://twitter.com/infinite_scream) . Muitos desses "bot" as contas são alimentadas pelo `cron` , que usa a API HTTP do Twitter para postar tweets regularmente.