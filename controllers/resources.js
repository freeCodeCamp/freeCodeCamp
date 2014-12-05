/**
 * GET /
 * Resources.
 */

exports.learnToCode = function(req, res) {
    res.render('learn-to-code',  {
        title: 'Learn to Code'
    });
}

exports.privacy = function(req, res) {
    res.render('privacy',  {
        title: 'Privacy'
    });
}

exports.firelane = function(req, res) {
    res.render('firelane',  {
        title: "I got a ticket for parking in a fire lane. It wasn't a fire lane when I parked there"
    });
}

exports.jqueryExercises = function(req, res) {
    res.render('jquery-exercises',  {
        title: 'jQuery Exercises'
    });
}

exports.about = function(req, res) {
    res.render('about', {
        title: 'Who We Are'
    });
}

exports.interviewQuestions = function(req, res) {
    res.json([
        {
            question: "Time Complexity of Accessing Array Index (int a = ARR[5];)",
            answer: "O(1)"
        },
        {
            question: "Time Complexity of Inserting a node in Linked List",
            answer: "O(1)"
        },
        {
            question: "Time Complexity of Pushing and Popping on Stack",
            answer: "O(1)"
        },
        {
            question: "Time Complexity of Insertion and Removal from Queue",
            answer: "O(1)"
        },
        {
            question: "Time Complexity of Finding out the parent or left/right child of a node in a tree stored in Array",
            answer: "O(1)"
        },
        {
            question: "Time Complexity of Jumping to Next/Previous element in Doubly Linked List",
            answer: "O(1)"
        },
        {
            question: "Time Complexity of Traversing an array",
            answer: "O(n)"
        },
        {
            question: "Time Complexity of Traversing a linked list",
            answer: "O(n)"
        },
        {
            question: "Time Complexity of Linear Search",
            answer: "O(n)"
        },
        {
            question: "Time Complexity of Deletion of a specific element in a Linked List (Not sorted)",
            answer: "O(n)"
        },
        {
            question: "Time Complexity of Comparing two strings",
            answer: "O(n)"
        },
        {
            question: "Time Complexity of Checking for Palindrome",
            answer: "O(n)"
        },
        {
            question: "Time Complexity of Counting/Bucket Sort",
            answer: "O(n)"
        },
        {
            question: "Time Complexity of Binary Search",
            answer: "O(log n)"
        },
        {
            question: "Time Complexity of Finding largest/smallest number in a binary search tree",
            answer: "O(log n)"
        },
        {
            question: "Time Complexity of Certain Divide and Conquer Algorithms based on Linear functionality",
            answer: "O(log n)"
        },
        {
            question: "Time Complexity of Calculating Fibonacci Numbers - Best Method",
            answer: "O(log n)"
        },
        {
            question: "Time Complexity of Merge Sort",
            answer: "O(nlogn)"
        },
        {
            question: "Time Complexity of Heap Sort",
            answer: "O(nlogn)"
        },
        {
            question: "Time Complexity of Quick Sort",
            answer: "O(nlogn)"
        },
        {
            question: "Time Complexity of Certain Divide and Conquer Algorithms based on optimizing O(n^2) algorithms",
            answer: "O(nlogn)"
        },
        {
            question: "Time Complexity of Bubble Sort",
            answer: "O(n^2)"
        },
        {
            question: "Time Complexity of Insertion Sort",
            answer: "O(n^2)"
        },
        {
            question: "Time Complexity of Selection Sort",
            answer: "O(n^2)"
        },
        {
            question: "Time Complexity of Traversing a simple 2D array",
            answer: "O(n^2)"
        },
        {
            question: "Latency of L1 cache reference",
            answer: "0.5 nanoseconds"
        },
        {
            question: "Latency of Branch mispredict",
            answer: "5 nanoseconds"
        },
        {
            question: "Latency of L2 cache reference",
            answer: "7 nanoseconds"
        },
        {
            question: "Latency of Mutex lock/unlock",
            answer: "25 nanoseconds"
        },
        {
            question: "Latency of Main memory reference",
            answer: "100 nanoseconds"
        },
        {
            question: "Latency of Compressing 1K bytes with Zippy",
            answer: "3,000 nanoseconds"
        },
        {
            question: "Latency of Sending 1K bytes over a 1 Gbps network",
            answer: "10,000 nanoseconds"
        },
        {
            question: "Latency of Reading 4K randomly from SSD",
            answer: "150,000 nanoseconds"
        },
        {
            question: "Latency of Reading 1 MB sequentially from memory",
            answer: "250,000 nanoseconds"
        },
        {
            question: "Latency of a Round trip within the same datacenter",
            answer: "500,000 nanoseconds"
        },
        {
            question: "Latency of Reading 1 MB sequentially from SSD",
            answer: "1,000,000 nanoseconds"
        },
        {
            question: "Latency of Disk seek",
            answer: "10,000,000 nanoseconds"
        },
        {
            question: "Latency of Reading 1 MB sequentially from disk",
            answer: "20,000,000 nanoseconds"
        },
        {
            question: "Latency of Sending a packet from California to the Netherlands and back",
            answer: "150,000,000 nanoseconds"
        }
    ]);
};