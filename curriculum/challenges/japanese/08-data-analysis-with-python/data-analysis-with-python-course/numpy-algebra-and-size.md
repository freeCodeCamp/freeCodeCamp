---
id: 5e9a093a74c4063ca6f7c157
title: Numpy の代数とサイズ
challengeType: 11
videoId: XAT97YLOKD8
bilibiliIds:
  aid: 250621433
  bvid: BV1hv41137uM
  cid: 409013128
dashedName: numpy-algebra-and-size
---

# --description--

*動画で説明しているように、notebooks.ai を使用する代わりに Google Colab を使用することができます。*

その他のリソース:

-  <a href="https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-numpy" target="_blank" rel="noopener noreferrer nofollow">GitHub のノート</a>
-  <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer nofollow">Google Colab を使用して GitHub からノートを開く方法</a>

# --question--

## --text--

Python の標準ライブラリと Numpy ライブラリとの間で、メモリ内のオブジェクト (リストやデータ型など) のサイズの関係はどうなっていますか？ そのことを踏まえるとパフォーマンスにどのような影響が生じますか？

## --answers--

標準的な Python オブジェクトは、NumPy オブジェクトよりも多くのメモリを消費する。標準的な Python オブジェクトと NumPy オブジェクトの演算はほぼ同じ時間で実行される。

---

NumPy オブジェクトは、標準的な Python オブジェクトよりもはるかに多くのメモリを消費する。NumPy オブジェクトに対する演算は、同等の標準的な Python オブジェクトに対する演算と比べて非常に高速に実行される。

---

NumPy オブジェクトは、標準的な Python オブジェクトよりもはるかに少ないメモリしか使用しない。標準的な Python オブジェクトに対する演算は、同等の NumPy オブジェクトに対する演算と比べて非常に高速に実行される。

---

標準的な Python オブジェクトは、NumPy オブジェクトよりも多くのメモリを消費する。NumPy オブジェクトに対する演算は、同等の標準的な Python オブジェクトに対する演算と比べて非常に高速に実行される。

## --video-solution--

4

