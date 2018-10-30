#!/usr/bin/env bash

rm 10*.txt
for n in 10 100 1000; do
  node log.js 0 $n stdout stderr &> $n-stdout-stderr.txt
  node log.js 0 $n stdout &> $n-stdout.txt
  node log.js 0 $n stderr &> $n-stderr.txt
done
