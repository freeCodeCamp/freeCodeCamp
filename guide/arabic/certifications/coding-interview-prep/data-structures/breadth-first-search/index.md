---
title: Breadth-First Search
localeTitle: اتساع البحث الأول
---
## اتساع البحث الأول

دعونا أولا تحديد فئة `Tree` لاستخدامها لتنفيذ خوارزمية Breadth First Search.

 `class Tree: 
  def __init__(self, x): 
    self.val = x 
    self.left = None 
    self.right = None 
` 

تنتقل خوارزمية البحث الأولى والاتساع من مستوى إلى آخر بدءًا من جذر الشجرة. سنستخدم `queue` لهذا الغرض.

 `def bfs(root_node): 
  queue = [root_node] 
 
  while queue: 
    top_element = queue.pop() 
    print("Node processed: ",top_element) 
 
    if top_element.left: 
      queue.append(top_element.left) 
 
    if top_element.right: 
      queue.append(top_element.right) 
` 

يمكننا بسهولة تعديل التعليمات البرمجية المذكورة أعلاه لطباعة مستوى كل عقدة كذلك.

 `def bfs(root_node): 
  queue = [(root_node, 0)] 
 
  while queue: 
    top_element, level = queue.pop() 
    print("Node processed: {} at level {}".format(top_element, level)) 
 
    if top_element.left: 
      queue.append((top_element.left, level + 1)) 
 
    if top_element.right: 
      queue.append((top_element.right, level + 1)) 
` 

| التعقيد | الوقت | الفضاء | ----- | ------ | ------ | | BFS | ن | ن |