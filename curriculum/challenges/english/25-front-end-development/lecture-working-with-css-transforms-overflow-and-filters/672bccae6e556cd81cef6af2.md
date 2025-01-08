---
id: 672bccae6e556cd81cef6af2
title: What Is Margin Collapsing, and How Does It Work?
challengeType: 11
videoId: MMWBC8duT_0
dashedName: what-is-margin-collapsing
---

# --description--

Watch the lecture video and answer the questions below.

# --questions--

## --text--

In which direction does margin collapsing occur?

## --distractors--

Horizontal margins only.

### --feedback--

Think about which margins (top, bottom, left, right) are affected by this behavior.

---

Both horizontal and vertical margins.

### --feedback--

Think about which margins (top, bottom, left, right) are affected by this behavior.

---

Diagonal margins.

### --feedback--

Think about which margins (top, bottom, left, right) are affected by this behavior.

## --answer--

Vertical margins only.

## --text--

What happens when two adjacent elements have different margin values?

## --distractors--

The margins add up.

### --feedback--

Consider which margin "wins" when collapsing occurs.

---

The smaller margin is used.

### --feedback--

Consider which margin "wins" when collapsing occurs.

---

The average of the two margins is used.

### --feedback--

Consider which margin "wins" when collapsing occurs.

## --answer--

The larger margin is used.

## --text--

Which of the following will NOT prevent margin collapsing between a parent and its first child?

## --distractors--

Adding a `border` to the parent.

### --feedback--

Think about which properties create a separation between the parent and child margins.

---

Setting `padding-top: 1px;` on the parent.

### --feedback--

Think about which properties create a separation between the parent and child margins.

---

Using `display: inline-block;` on the child.

### --feedback--

Think about which properties create a separation between the parent and child margins.

## --answer--

Setting `margin-top: 0;` on the child.

