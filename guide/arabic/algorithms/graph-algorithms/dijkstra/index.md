---
title: Dijkstra's Algorithm
localeTitle: خوارزمية Dijkstra
---
# خوارزمية Dijkstra

خوارزمية Dijkstra هي خوارزمية رسم بياني قدمها EW Dijkstra. يجد مسار أقصر مصدر مفرد في الرسم البياني مع حواف غير سالبة. (لماذا؟)

نقوم بإنشاء صفيفين: زيارة والمسافة ، والتي تسجل ما إذا كان يتم زيارة قمة الرأس وما هي المسافة الدنيا من قمة الرأس على التوالي. يتم تعيين المصفوفة التي تمت زيارتها في البداية على أنها خاطئة والمسافة باعتبارها لانهائية.

نبدأ من قمة الرأس المصدر. دع الذروة الحالية تكون u والقرناصات المتاخمة لها v الآن لكل v الذي يكون متجها إلى u ، يتم تحديث المسافة إذا لم يتم زيارتها من قبل والمسافة من u أقل من المسافة الحالية. ثم نختار قمة الرأس التالية بأقل مسافة والتي لم يتم زيارتها.

غالبًا ما يتم استخدام قائمة انتظار الأولوية للوفاء بهذا المطلب الأخير في أقل وقت ممكن. فيما يلي تنفيذ نفس الفكرة باستخدام طابور الأولوية في Java.

 `import java.util.*; 
 public class Dijkstra { 
    class Graph { 
    LinkedList<Pair<Integer>> adj[]; 
    int n; // Number of vertices. 
    Graph(int n) { 
        this.n = n; 
        adj = new LinkedList[n]; 
        for(int i = 0;i<n;i++) adj[i] = new LinkedList<>(); 
    } 
    // add a directed edge between vertices a and b with cost as weight 
    public void addEdgeDirected(int a, int b, int cost) { 
        adj[a].add(new Pair(b, cost)); 
    } 
    public void addEdgeUndirected(int a, int b, int cost) { 
        addEdgeDirected(a, b, cost); 
        addEdgeDirected(b, a, cost); 
    } 
    } 
    class Pair<E> { 
    E first; 
    E second; 
    Pair(E f, E s) { 
        first = f; 
        second = s; 
    } 
    } 
 
    // Comparator to sort Pairs in Priority Queue 
    class PairComparator implements Comparator<Pair<Integer>> { 
    public int compare(Pair<Integer> a, Pair<Integer> b) { 
        return a.second - b.second; 
    } 
    } 
 
    // Calculates shortest path to each vertex from source and returns the distance 
    public int[] dijkstra(Graph g, int src) { 
    int distance[] = new int[gn]; // shortest distance of each vertex from src 
    boolean visited[] = new boolean[gn]; // vertex is visited or not 
    Arrays.fill(distance, Integer.MAX_VALUE); 
    Arrays.fill(visited, false); 
    PriorityQueue<Pair<Integer>> pq = new PriorityQueue<>(100, new PairComparator()); 
        pq.add(new Pair<Integer>(src, 0)); 
    distance[src] = 0; 
    while(!pq.isEmpty()) { 
        Pair<Integer> x = pq.remove(); // Extract vertex with shortest distance from src 
        int u = x.first; 
        visited[u] = true; 
        Iterator<Pair<Integer>> iter = g.adj[u].listIterator(); 
        // Iterate over neighbours of u and update their distances 
        while(iter.hasNext()) { 
        Pair<Integer> y = iter.next(); 
        int v = y.first; 
        int weight = y.second; 
        // Check if vertex v is not visited 
        // If new path through u offers less cost then update distance array and add to pq 
        if(!visited[v] && distance[u]+weight<distance[v]) { 
            distance[v] = distance[u]+weight; 
            pq.add(new Pair(v, distance[v])); 
        } 
        } 
    } 
    return distance; 
    } 
 
    public static void main(String args[]) { 
    Dijkstra d = new Dijkstra(); 
    Dijkstra.Graph g = d.new Graph(4); 
    g.addEdgeUndirected(0, 1, 2); 
    g.addEdgeUndirected(1, 2, 1); 
    g.addEdgeUndirected(0, 3, 6); 
    g.addEdgeUndirected(2, 3, 1); 
    g.addEdgeUndirected(1, 3, 3); 
 
    int dist[] = d.dijkstra(g, 0); 
    System.out.println(Arrays.toString(dist)); 
    } 
 } 
`