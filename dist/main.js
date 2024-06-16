(self["webpackChunkknights_travails"] = self["webpackChunkknights_travails"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

class Vertex {
  constructor(row, col) {
    this.coords = [row, col];
    this.moves = [];
  }

  findMoves() {
    console.log(this.coords);
  }
}

function createGraph() {
  const graph = [];
  for (let i = 0; i < 8; i++) {
    graph[i] = [];
    for (let j = 0; j < 8; j++) {
      graph[i][j] = new Vertex(i, j);
    }
  }

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

  // const findMoves = (vertex) => {
  //   moves.map((move, index) => {
  //     vertex.moves = move[index] + vertex[index];
  //     return vertex.moves;
  //   });
  // };
  return graph;
}

let graph = createGraph();
console.log(graph);
console.log(graph[0][0].findMoves());
// console.log(graph.possibleMoves);
// console.log(graph[0][3].coords);
// console.log(graph.findMoves(graph[0][3].coords));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKHJvdywgY29sKSB7XG4gICAgdGhpcy5jb29yZHMgPSBbcm93LCBjb2xdO1xuICAgIHRoaXMubW92ZXMgPSBbXTtcbiAgfVxuXG4gIGZpbmRNb3ZlcygpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvb3Jkcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlR3JhcGgoKSB7XG4gIGNvbnN0IGdyYXBoID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgZ3JhcGhbaV0gPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xuICAgICAgZ3JhcGhbaV1bal0gPSBuZXcgVmVydGV4KGksIGopO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBvc3NpYmxlTW92ZXMgPSBbXG4gICAgWzIsIDFdLFxuICAgIFsyLCAtMV0sXG4gICAgWzEsIC0yXSxcbiAgICBbMSwgMl0sXG4gICAgWy0yLCAtMV0sXG4gICAgWy0yLCAxXSxcbiAgICBbLTEsIDJdLFxuICAgIFstMSwgLTJdLFxuICBdO1xuXG4gIC8vIGNvbnN0IGZpbmRNb3ZlcyA9ICh2ZXJ0ZXgpID0+IHtcbiAgLy8gICBtb3Zlcy5tYXAoKG1vdmUsIGluZGV4KSA9PiB7XG4gIC8vICAgICB2ZXJ0ZXgubW92ZXMgPSBtb3ZlW2luZGV4XSArIHZlcnRleFtpbmRleF07XG4gIC8vICAgICByZXR1cm4gdmVydGV4Lm1vdmVzO1xuICAvLyAgIH0pO1xuICAvLyB9O1xuICByZXR1cm4gZ3JhcGg7XG59XG5cbmxldCBncmFwaCA9IGNyZWF0ZUdyYXBoKCk7XG5jb25zb2xlLmxvZyhncmFwaCk7XG5jb25zb2xlLmxvZyhncmFwaFswXVswXS5maW5kTW92ZXMoKSk7XG4vLyBjb25zb2xlLmxvZyhncmFwaC5wb3NzaWJsZU1vdmVzKTtcbi8vIGNvbnNvbGUubG9nKGdyYXBoWzBdWzNdLmNvb3Jkcyk7XG4vLyBjb25zb2xlLmxvZyhncmFwaC5maW5kTW92ZXMoZ3JhcGhbMF1bM10uY29vcmRzKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=