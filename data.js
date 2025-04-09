const techTerms = [
    {
      term: "Memoization",
      definition: "Memoization is an optimization technique used to speed up programs by storing the results of expensive function calls. It avoids repeated calculations by caching previously computed results.",
      quiz: {
        question: "What does memoization help with?",
        answers: [
          { text: "Increasing memory usage", correct: false },
          { text: "Avoiding repeated computation", correct: true },
          { text: "Debugging", correct: false },
          { text: "Sorting arrays", correct: false }
        ]
      },
      resource: "https://github.com/trekhleb/javascript-algorithms#memoization"
    },
    {
      term: "Race Condition",
      definition: "A race condition happens when multiple threads access shared data at the same time, and the final outcome depends on the timing of those accesses. This leads to unpredictable bugs.",
      quiz: {
        question: "Which tool is used to prevent race conditions?",
        answers: [
          { text: "For loop", correct: false },
          { text: "Mutex", correct: true },
          { text: "Console.log", correct: false },
          { text: "Global variable", correct: false }
        ]
      },
      resource: "https://www.youtube.com/watch?v=0ZEX4DO5hco"
    },
    {
      term: "Big O Notation",
      definition: "Big O notation describes the performance or complexity of an algorithm in terms of input size. It helps in comparing the efficiency of algorithms.",
      quiz: {
        question: "What does O(n) mean?",
        answers: [
          { text: "Constant time", correct: false },
          { text: "Linear time", correct: true },
          { text: "Quadratic time", correct: false },
          { text: "Logarithmic time", correct: false }
        ]
      },
      resource: "https://www.youtube.com/watch?v=Mo4vesaut8g"
    },
    {
      term: "Recursion",
      definition: "Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem. It usually includes a base case to stop the calls.",
      quiz: {
        question: "What must every recursive function have?",
        answers: [
          { text: "Loop", correct: false },
          { text: "Base case", correct: true },
          { text: "Global variable", correct: false },
          { text: "Timer", correct: false }
        ]
      },
      resource: "https://visualgo.net/en/recursion"
    },
    {
      term: "Hash Table",
      definition: "A hash table stores key-value pairs and provides fast data retrieval using a hash function. It is widely used in maps and dictionaries.",
      quiz: {
        question: "What causes collisions in hash tables?",
        answers: [
          { text: "Duplicate keys", correct: true },
          { text: "Loops", correct: false },
          { text: "Slow memory", correct: false },
          { text: "Stack overflow", correct: false }
        ]
      },
      resource: "https://visualgo.net/en/hashtable"
    },
    {
      term: "Binary Search",
      definition: "Binary search is an efficient algorithm for finding an item in a sorted array by repeatedly dividing the search interval in half. It has a time complexity of O(log n).",
      quiz: {
        question: "What is a requirement for binary search to work?",
        answers: [
          { text: "The array must be sorted", correct: true },
          { text: "The array must be reversed", correct: false },
          { text: "The array must contain duplicates", correct: false },
          { text: "None of the above", correct: false }
        ]
      },
      resource: "https://www.youtube.com/watch?v=P3YID7liBug"
    },
    {
      term: "Deadlock",
      definition: "A deadlock occurs in concurrent systems when processes are waiting on each other, preventing further execution. It usually happens due to improper resource allocation.",
      quiz: {
        question: "Which of the following prevents deadlocks?",
        answers: [
          { text: "Circular wait", correct: false },
          { text: "Resource hierarchy", correct: true },
          { text: "Busy waiting", correct: false },
          { text: "Polling", correct: false }
        ]
      },
      resource: "https://www.geeksforgeeks.org/deadlock-in-operating-system/"
    },
    {
      term: "Normalization",
      definition: "Normalization is a database design technique that reduces data redundancy and ensures data integrity. It divides larger tables into smaller, related tables.",
      quiz: {
        question: "Which normal form eliminates partial dependency?",
        answers: [
          { text: "1NF", correct: false },
          { text: "2NF", correct: true },
          { text: "3NF", correct: false },
          { text: "BCNF", correct: false }
        ]
      },
      resource: "https://www.youtube.com/watch?v=UrYLYV7WSHM"
    },
    {
      term: "Heap",
      definition: "A heap is a special tree-based data structure used in priority queues. A max-heap maintains the largest element at the root.",
      quiz: {
        question: "What is the time complexity to access the root of a heap?",
        answers: [
          { text: "O(n)", correct: false },
          { text: "O(log n)", correct: false },
          { text: "O(1)", correct: true },
          { text: "O(n^2)", correct: false }
        ]
      },
      resource: "https://visualgo.net/en/heap"
    },
    {
      term: "Stack",
      definition: "A stack is a linear data structure that follows Last In First Out (LIFO) order. You can only insert and remove items from the top.",
      quiz: {
        question: "Which operation adds an element to the top of a stack?",
        answers: [
          { text: "Pop", correct: false },
          { text: "Push", correct: true },
          { text: "Insert", correct: false },
          { text: "Enqueue", correct: false }
        ]
      },
      resource: "https://visualgo.net/en/list"
    },
    {
      term: "Queue",
      definition: "A queue is a linear data structure that follows First In First Out (FIFO) order. It is used in scheduling and buffering applications.",
      quiz: {
        question: "Which operation removes an element from the front of a queue?",
        answers: [
          { text: "Dequeue", correct: true },
          { text: "Pop", correct: false },
          { text: "Push", correct: false },
          { text: "Append", correct: false }
        ]
      },
      resource: "https://visualgo.net/en/list"
    },
    {
      term: "Object-Oriented Programming",
      definition: "OOP is a programming paradigm based on the concept of objects that contain data and methods. It supports encapsulation, inheritance, and polymorphism.",
      quiz: {
        question: "Which is NOT an OOP principle?",
        answers: [
          { text: "Encapsulation", correct: false },
          { text: "Abstraction", correct: false },
          { text: "Recursion", correct: true },
          { text: "Polymorphism", correct: false }
        ]
      },
      resource: "https://github.com/topics/oop"
    },
    {
      term: "REST API",
      definition: "REST is an architectural style for designing networked applications using stateless communication and standard HTTP methods. It stands for Representational State Transfer.",
      quiz: {
        question: "Which HTTP method is used to retrieve data?",
        answers: [
          { text: "GET", correct: true },
          { text: "POST", correct: false },
          { text: "DELETE", correct: false },
          { text: "PUT", correct: false }
        ]
      },
      resource: "https://restfulapi.net/"
    },
    {
      term: "Virtual Memory",
      definition: "Virtual memory is a memory management technique that gives an application the illusion of having contiguous memory, even if it's fragmented. It allows programs to use more memory than physically available.",
      quiz: {
        question: "Virtual memory uses which mechanism?",
        answers: [
          { text: "Paging", correct: true },
          { text: "Recursion", correct: false },
          { text: "Iteration", correct: false },
          { text: "Sorting", correct: false }
        ]
      },
      resource: "https://www.geeksforgeeks.org/virtual-memory-in-operating-system/"
    },
    {
      term: "Binary Tree",
      definition: "A binary tree is a tree data structure where each node has at most two children. It's used in searching and sorting algorithms.",
      quiz: {
        question: "What’s the max number of children in a binary tree node?",
        answers: [
          { text: "1", correct: false },
          { text: "2", correct: true },
          { text: "3", correct: false },
          { text: "4", correct: false }
        ]
      },
      resource: "https://visualgo.net/en/bst"
    },
    {
      term: "Git",
      definition: "Git is a distributed version control system that tracks code changes and allows multiple developers to collaborate efficiently. It's widely used in software development.",
      quiz: {
        question: "What does `git clone` do?",
        answers: [
          { text: "Deletes a repo", correct: false },
          { text: "Creates a new repo", correct: false },
          { text: "Copies a repo to your machine", correct: true },
          { text: "Commits a file", correct: false }
        ]
      },
      resource: "https://github.com/git-guides"
    },
    {
      term: "Encapsulation",
      definition: "Encapsulation is the concept of hiding internal object details and exposing only necessary parts. It improves modularity and reduces complexity.",
      quiz: {
        question: "Which keyword is used to enforce encapsulation in most languages?",
        answers: [
          { text: "public", correct: false },
          { text: "private", correct: true },
          { text: "static", correct: false },
          { text: "global", correct: false }
        ]
      },
      resource: "https://www.geeksforgeeks.org/encapsulation-in-java/"
    },
    {
      term: "Linked List",
      definition: "A linked list is a linear data structure where each element points to the next. It allows efficient insertion and deletion.",
      quiz: {
        question: "What does each node in a linked list contain?",
        answers: [
          { text: "Data and pointer", correct: true },
          { text: "Only data", correct: false },
          { text: "Only pointer", correct: false },
          { text: "Stack", correct: false }
        ]
      },
      resource: "https://visualgo.net/en/list"
    },
    {
      term: "Load Balancing",
      definition: "Load balancing distributes network or application traffic across multiple servers. It increases scalability and reliability.",
      quiz: {
        question: "Which device helps with load balancing?",
        answers: [
          { text: "Router", correct: false },
          { text: "Load balancer", correct: true },
          { text: "Firewall", correct: false },
          { text: "Switch", correct: false }
        ]
      },
      resource: "https://www.cloudflare.com/learning/performance/what-is-load-balancing/"
    }
  ];
  