#!/usr/bin/bash

FILE_EXT="md"

#get target files with FILE_EXT
TGT_FILES=`find . -name "*.$FILE_EXT" -print`

for f in $TGT_FILES
do
   sed -i -e "s/## Description/## Descrição/g" $f
   sed -i -e "s/## Instructions/## Instruções/g" $f
   sed -i -e "s/## Tests/## Testes/g" $f
   sed -i -e "s/## Challenge Seed/## Semente do Desafio/g" $f
   sed -i -e "s/## Solution/## Solução/g" $f
done

