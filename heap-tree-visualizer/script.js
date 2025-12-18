let heap = [];
const svg = document.getElementById('tree');

const NODE_RADIUS = 20;
const LEVEL_HEIGHT = 80;
const SVG_WIDTH = 900;

// Insert value
window.insertValue = function () {
  const input = document.getElementById('valueInput');
  const value = Number(input.value);

  if (isNaN(value)) return;

  heap.push(value);
  heapifyUp(heap.length - 1);
  input.value = '';

  drawHeap();
};

// Heapify up (Min Heap)
function heapifyUp(index) {
  let parent = Math.floor((index - 1) / 2);

  while (index > 0 && heap[index] < heap[parent]) {
    [heap[index], heap[parent]] = [heap[parent], heap[index]];
    index = parent;
    parent = Math.floor((index - 1) / 2);
  }
}

// Calculate node position
function getNodePosition(index) {
  const level = Math.floor(Math.log2(index + 1));
  const levelStart = Math.pow(2, level) - 1;
  const positionInLevel = index - levelStart;
  const nodesInLevel = Math.pow(2, level);

  const xSpacing = SVG_WIDTH / (nodesInLevel + 1);
  const x = xSpacing * (positionInLevel + 1);
  const y = LEVEL_HEIGHT * (level + 1);

  return { x, y };
}

// Draw heap tree
function drawHeap() {
  svg.innerHTML = '';

  // Draw edges
  heap.forEach((_, index) => {
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    if (left < heap.length) drawLine(index, left);
    if (right < heap.length) drawLine(index, right);
  });

  // Draw nodes
  heap.forEach((value, index) => {
    const { x, y } = getNodePosition(index);

    const circle = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle'
    );
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', NODE_RADIUS);

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x);
    text.setAttribute('y', y);
    text.textContent = value;

    svg.appendChild(circle);
    svg.appendChild(text);
  });
}

// Draw connecting line
function drawLine(parentIndex, childIndex) {
  const p = getNodePosition(parentIndex);
  const c = getNodePosition(childIndex);

  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', p.x);
  line.setAttribute('y1', p.y + NODE_RADIUS);
  line.setAttribute('x2', c.x);
  line.setAttribute('y2', c.y - NODE_RADIUS);

  svg.appendChild(line);
}
