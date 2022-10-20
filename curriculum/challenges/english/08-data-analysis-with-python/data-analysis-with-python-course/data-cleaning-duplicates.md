---
id: 5e9a093a74c4063ca6f7c15f
title: Data Cleaning Duplicates
challengeType: 11
videoId: kj7QqjXhH6A
bilibiliIds:
  aid: 675611672
  bvid: BV1VU4y1A7tu
  cid: 409019368
dashedName: data-cleaning-duplicates
---

# --description--

*Instead of using notebooks.ai like it shows in the video, you can use Google Colab instead.*

More resources:

-  <a href="https://github.com/ine-rmotr-curriculum/data-cleaning-rmotr-freecodecamp" target="_blank" rel="noopener noreferrer nofollow">Notebooks on GitHub</a>
-  <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer nofollow">How to open Notebooks from GitHub using Google Colab.</a>

# --question--

## --text--

The Python method `.duplicated()` returns a boolean Series for your DataFrame. `True` is the return value for rows that:

## --answers--
```
import pandas as pd
 
# making data frame from csv file
data = pd.read_csv("/content/employees.csv")
 
# sorting by first name
data.sort_values("First Name", inplace = True)
 
# making a bool series
bool_series = data["First Name"].duplicated()
print(bool_series)

101    False
327     True
440     True
937     True
137    False
       ...  
902     True
925     True
946     True
947     True
951     True
Name: First Name, Length: 1000, dtype: bool

```
Link to Colab: https://colab.research.google.com/drive/1BEpuZ4CUzp4Or3IfG4QuTZ1OKkQR1qZ2?usp=sharing
## --video-solution--

2

