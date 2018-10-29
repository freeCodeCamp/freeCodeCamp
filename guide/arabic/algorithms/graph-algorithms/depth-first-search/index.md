---
title: Depth First Search (DFS)
localeTitle: عمق البحث الأول (DFS)
---
## عمق البحث الأول (DFS)

يعد Depth First Search واحدًا من أكثر خوارزميات الرسم البياني بسيطة. إنها تعبر الرسم البياني عن طريق التحقق أولاً من العقدة الحالية ومن ثم الانتقال إلى أحد مساعديها لتكرار العملية. إذا لم يكن لدى العقدة الحالية أي اختبار للتحقق ، فإننا ننتقل إلى سابقه وتستمر العملية (بالانتقال إلى سواقة أخرى). إذا تم العثور على الحل يتوقف البحث.

### تصور

![](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)

### التنفيذ (C ++ 14)

\`\` \`ج ++

# تتضمن

# تتضمن

# تتضمن

# تتضمن

استخدام اسم للمحطة؛

الرسم البياني للفئة { في التلفاز؛ // عدد القمم

 `// pointer to a vector containing adjacency lists 
 vector < int > *adj; 
` 

عامة: الرسم البياني (كثافة العمليات) ؛ // البناء

 ``// function to add an edge to graph 
 void add_edge(int v, int w); 
 
 // prints dfs traversal from a given source `s` 
 void dfs(); 
 void dfs_util(int s, vector < bool> &visited); 
`` 

}؛

الرسم البياني :: Graph (int v) { هذا -> v = v؛ adj = new vector <int> \[v\]؛ }

void Graph :: add _edge (int u، int v) { adj \[u\] .الرجوع_ مرة أخرى (v)؛ // add v to u's list adj \[v\] .العودة _(v)؛ // add u to v's list (أزل هذا البيان إذا تم توجيه الرسم البياني!) } void Graph :: dfs () { // زار متجه - لتتبع العقد التي تمت زيارتها خلال DFS تمت زيارة vector <bool> (v، false)؛ // بمناسبة جميع العقد / الرؤوس كما لم تتم زيارته لـ (int i = 0؛ i <v؛ i ++) إذا (! زار \[أنا\]) dfs_ util (i، visited)؛ } // لاحظ استخدام استدعاء من قبل هنا! void Graph :: dfs\_util (int s، vector <bool> & visited) { // قم بتمييز العقدة / قمة الرأس الحالية كما تمت زيارتها زار \[ص\] = صحيح. // إخراجها إلى الإخراج القياسي (الشاشة) cout << s << ""؛

 `// traverse its adjacency list and recursively call dfs_util for all of its neighbours! 
 // (only if the neighbour has not been visited yet!) 
 for(vector < int > :: iterator itr = adj[s].begin(); itr != adj[s].end(); itr++) 
    if(!visited[*itr]) 
        dfs_util(*itr, visited); 
` 

}

انت مين() { // أنشئ رسمًا بيانيًا باستخدام طبقة الرسم البياني التي حددناها أعلاه الرسم البياني (4) ؛ g.add _edge (0، 1)؛ g.add_ edge (0، 2)؛ g.add _edge (1، 2)؛ g.add_ edge (2، 0)؛ g.add _edge (2، 3)؛ g.add_ edge (3، 3)؛

 `cout << "Following is the Depth First Traversal of the provided graph" 
     << "(starting from vertex 0): "; 
 g.dfs(); 
 // output would be: 0 1 2 3 
 return 0; 
` 

}

 `### Evaluation 
 
 Space Complexity: O(n) 
 
 Worse Case Time Complexity: O(n) 
 Depth First Search is complete on a finite set of nodes. I works better on shallow trees. 
 
 ### Implementation of DFS in C++ 
` 

ج ++

# تتضمن

# تتضمن

# تتضمن

استخدام اسم للمحطة؛

الرسم البياني للهيكل { في التلفاز؛ bool \* _adj؛ عامة: الرسم البياني (كثافة العمليات vcount) ؛ void addEdge (int u، int v)؛ void deleteEdge (int u، int v)؛ قوه موجهة_ _DFS (int s) ؛ void DFSUtil (int s، vector_ _وDFS، ناقلات_ _وزار)؛ }؛ Graph :: Graph (int vcount) { هذا-> v = vcount ؛ this-> adj = new bool_ \[vcount\]؛ ل (int i = 0؛ i

void Graph :: addEdge (int u، int w) { هذا-> صفة \[ش\] \[ث\] = صحيح. هذا-> صفة \[ث\] \[ش\] = صحيح. }

void Graph :: deleteEdge (int u، int w) { هذا-> صفة \[ش\] \[ث\] = كاذبة؛ هذا-> صفة \[ث\] \[ش\] = كاذبة؛ }

void Graph :: DFSUtil (int s، vector & DFS ، ناقلات وزار) { زار \[ق\] = صحيح. dfs.push\_back (ق)؛ ل (int i = 0؛ i الخامس، وأنا ++) { if (this-> adj \[s\] \[i\] == true && visited \[i\] == false) DFSUtil (ط، DFS، زار)؛ } }

قوه موجهة الرسم البياني :: DFS (int s) { قوه موجهة زار (هذا-> الخامس)؛ قوه موجهة DFS. DFSUtil (ق، DFS، زار)؛ العودة dfs؛ } \`\` \`

#### معلومات اكثر:

[الرسوم البيانية](https://github.com/freecodecamp/guides/computer-science/data-structures/graphs/index.md)

[نطاق البحث الأول (BFS)](https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/graph-algorithms/breadth-first-search/index.md)

[عمق البحث الأول (DFS) - ويكيبيديا](https://en.wikipedia.org/wiki/Depth-first_search)