function getPossibleMoves([x, y]) {
  const moves = [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
  ];
  return moves.filter(([mx, my]) => mx >= 0 && mx < 8 && my >= 0 && my < 8);
}

function knightMoves(start, end) {
  if (start[0] == end[0] && start[1] == end[1]) {
    return {
      path: start,
      message: "Already in finish",
    };
  }
  const queue = [[start, [start]]];
  const visited = new Set([start.toString()]);
  while (queue.length > 0) {
    const [pos, path] = queue.shift();
    const moves = getPossibleMoves(pos);
    for (const move of moves) {
      if (!visited.has(move.toString())) {
        visited.add(move.toString());
        const newPath = path.concat([move]);

        if (move[0] == end[0] && move[1] == end[1]) {
          const moveCount = newPath.length - 1;
          return {
            path: newPath,
            message: `Finished after ${moveCount} moves`,
          };
        }
        queue.push([move, newPath]);
      }
    }
  }start
  return { path: [], message: "No path found" };
}
const res = knightMoves([0, 0], [3, 3]);
console.log(res);
