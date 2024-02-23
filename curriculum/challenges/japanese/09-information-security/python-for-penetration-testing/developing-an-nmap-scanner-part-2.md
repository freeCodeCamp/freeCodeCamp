---
id: 5ea9997bbec2e9bc47e94db2
title: 'Nmap スキャンの開発: パート 2'
challengeType: 11
videoId: a98PscnUsTg
bilibiliIds:
  aid: 505526943
  bvid: BV1Hg411c7oE
  cid: 409034761
dashedName: developing-an-nmap-scanner-part-2
---

# --question--

## --text--

21 から 443 までの UDP ポートをスキャンできるのは次のうちどれですか？

## --answers--

`.scan(ip_addr, '21-443', '-v -sU')`

---

`.scan(ip_addr, '1-1024', '-v -sS')`

---

`.scan(ip_addr, '21-443', '-v -sS')`

## --video-solution--

1

