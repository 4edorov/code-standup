## Code Standup #1

> 17.09.2024

### Issue:
- learning course The Last Algorithms Course You'll Need

### Resources:
- https://frontendmasters.com/courses/algorithms/

### Code examples:

```
// LinearSearchList
export default function linear_search(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }
  return false;
}

// BinarySearchList
export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;

  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const v = haystack[m];

    if (v === needle) {
      return true;
    } else if (v > needle) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while (lo < hi);

  return false;
}

// TwoCrystalBalls
export default function two_crystal_balls(breaks: boolean[]): number {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jmpAmount;

  for (; i < breaks.length; i += jmpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jmpAmount;

  for (let j = 0; j <= jmpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}
```

## Code Standup #2

> 18.09.2024

### Issue:
  - learning course The Last Algorithms Course You'll Need: Bubble Sort

### Code examples:

```
// BubbleSort
export default function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
```

## Code Standup #3

> 19.09.2024

### Issue:
  - learning course The Last Algorithms Course You'll Need: Queue and Stack

### Code examples:

```
// Queue
type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail || !this.head) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        if (!this.head) {
            return;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;

        head.next = undefined;

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}

// Stack
type Node<T> = {
    value: T,
    prev?: Node<T>
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }
        node.prev = this.head;
        this.head = node;
    }
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);

        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }

        const head = this.head;
        this.head = this.head?.prev;
        return head?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
```

## Code Standup #4

> 12.10.2024

### Issue: 
 - solving different problems with a recursion, e.g. it can help to construct a parents-children tree. In this case, it can create a tree from a literal string: `1 2 3 (4 5 (51 52 (521 522) 53) 6 7) 8 (81 82) 9`.

### Code examples:

```
function parseTreeRecursive(input) {
  const elements = input.match(/\(|\)|\d+/g);

  function helper() {
    let currentNode = null;
    const root = [];

    while (elements.length > 0) {
      const item = elements.shift();

      if (item === "(") {
        if (currentNode) {
          currentNode.children = helper();
        }
      } else if (item === ")") {
        return root;
      } else {
        currentNode = { value: item, children: [] };
        root.push(currentNode);
      }
    }
    return root;
  }

  return helper();
};

const str = "1 2 3 (4 5 (51 52 (521 522) 53) 6 7) 8 (81 82) 9";
console.log(JSON.stringify(parseTreeRecursive(str), null, 2));
```

## Code Standup #5

> 22.11.2024

### Issue:
- while starting a new project with Next.js, I've found a good articles about things related to styled components and RSC.

### Resources:
- [Demystifying styled-components](https://www.joshwcomeau.com/react/demystifying-styled-components/);
- [CSS in React Server Components](https://www.joshwcomeau.com/react/css-in-rsc/);

### Issue:
- construct a dashboard with grid layout.

### Resources:
- [Art & Design by Matthew James Taylor](https://matthewjamestaylor.com/)
