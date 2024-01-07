---
id: 5ea9997bbec2e9bc47e94db4
title: ポートスキャンの開発
challengeType: 11
videoId: z_qkqZS7KZ4
bilibiliIds:
  aid: 208077317
  bvid: BV1Uh411p7HS
  cid: 409036706
dashedName: developing-a-port-scanner
---

# --question--

## --text--

`.connect()` メソッドと `.connect_ex()` メソッドの主な違いは何ですか？

## --answers--

両者のメソッドに違いはない。

---

エラーが発生した場合、またはホストが見つからなかった場合、`.connect()` はエラーコードを返すが、`.connect_ex()` は例外を発生させる。

---

エラーが発生した場合、またはホストが見つからなかった場合、`.connect()` は例外を発生させるが、`.connect_ex()` はエラーコードを返す。

## --video-solution--

3

