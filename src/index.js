class Vertex {
  constructor(x, y) {
    this.coords = [x, y];
    this.moves = [];
  }

  addEdge(edge) {
    this.moves.push(edge);
  }

  // findMoves(possibleMoves) {
  //   possibleMoves.map((move) => {
  //     this.moves.push([move[0] + this.coords[0], move[1] + this.coords[1]]);
  //     return this.moves;
  //   });

  //   const validMoves = this.moves.filter(
  //     (move) => move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7
  //   );
  //   return (this.moves = validMoves);
  // }
}

function createGraph() {
  const graph = [];

  const possibleMoves = [
    [2, 1],
    [2, -1],
    [1, -2],
    [1, 2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [-1, -2],
  ];

  for (let i = 0; i < 8; i++) {
    graph[i] = [];
    for (let j = 0; j < 8; j++) {
      graph[i][j] = new Vertex(i, j);
    }
  }

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      for (const [dx, dy] of possibleMoves) {
        const newX = x + dx;
        const newY = y + dy;

        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
          graph[x][y].addEdge(graph[newX][newY]);
        }
      }
    }
  }

  return graph;
}

let graph = createGraph();
console.log(graph);

const knightMoves = (start, end) => {
  let [startX, startY] = start;
  let [endX, endY] = end;

  if (startX === endX && startY === endY) {
    return graph[endX][endY].coords;
  }
  let queue = [graph[startX][startY]];

  let visited = new Set();
  const predecessors = [];
  predecessors[[startX, startY]] = null;
  visited.add(`${startX}, ${startY}`);

  const buildPath = (goal, root, predecessors) => {
    const stack = [];
    stack.push(goal);

    let u = predecessors[goal];

    while (u != root) {
      stack.push(u);
      u = predecessors[u];
    }

    stack.push(root);

    let path = stack.reverse();
    console.log(path);
    return path;
  };

  while (queue.length > 0) {
    let pointer = queue.shift();

    for (let move of pointer.moves) {
      let [x, y] = move.coords;
      queue.push(graph[x][y]);

      if (!visited.has(`${x}, ${y}`)) {
        visited.add(`${x}, ${y}`);
        predecessors[[x, y]] = pointer.coords;
      }

      if (graph[x][y] === graph[endX][endY]) {
        const path = buildPath(
          graph[endX][endY].coords,
          graph[startX][startY].coords,
          predecessors
        );
        const formattedPath = path.map((vertex) => `[${vertex}]`).join("\n");
        return `You made it in ${
          path.length - 1
        } moves! Here's your path:\n${formattedPath}`;
      }
      console.log(visited);
    }
  }
};
console.log(knightMoves([1, 2], [2, 1]));
