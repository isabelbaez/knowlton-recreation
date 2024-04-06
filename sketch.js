let img;
let imgWidth = 360;
let imgHeight = 450;

let numPent = (((imgWidth/10)*(imgHeight/10))/12)/5;

let pentominoes = {
  "F": [
    [[0, 1], [1, 0], [1, 1], [1, 2], [2, 0]],
    [[0, 1], [1, 0], [1, 1], [2, 1], [2, 2]],
    [[0, 2], [1, 0], [1, 1], [1, 2], [2, 1]],
    [[0, 0], [0, 1], [1, 1], [1, 2], [2, 1]],
    [[0, 0], [1, 0], [1, 1], [1, 2], [2, 1]],
    [[0, 1], [1, 1], [2, 1], [1, 2], [2, 0]],
    [[0, 1], [1, 0], [1, 1], [1, 2], [2, 2]],
    [[0, 1], [0, 2], [1, 1], [1, 0], [2, 1]]
  ],
  "I": [
    [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]],
    [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]]
  ],
  "L": [

    [[0, 0], [0, 1], [0, 2], [0, 3], [1, 3]],
    [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1]],
    [[0, 0], [1, 0], [1, 1], [1, 2], [1, 3]],
    [[3, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
    [[0, 3], [1, 0], [1, 1], [1, 2], [1, 3]],
    [[0, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
    [[0, 0], [0, 1], [0, 2], [0, 3], [1, 0]],
    [[0, 0], [1, 0], [2, 0], [3, 0], [3, 1]]
  ],
  "N": [
    [[0, 0], [1, 0], [1, 1], [2, 1], [3, 1]],
    [[1, 0], [1, 1], [0, 1], [0, 2], [0, 3]],
    [[0, 0], [1, 0], [2, 0], [2, 1], [3, 1]],
    [[1, 0], [1, 1], [1, 2], [0, 2], [0, 3]],
    [[0, 1], [1, 1], [1, 0], [2, 0], [3, 0]],
    [[0, 0], [0, 1], [1, 1], [1, 2], [1, 3]],
    [[0, 1], [1, 1], [2, 1], [2, 0], [3, 0]],
    [[0, 0], [0, 1], [0, 2], [1, 2], [1, 3]]
  ],
  "P": [
    [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1]],
    [[0, 0], [1, 0], [2, 0], [1, 1], [2, 1]],
    [[0, 1], [0, 2], [1, 0], [1, 1], [1, 2]],
    [[0, 0], [0, 1], [1, 0], [1, 1], [2, 1]],
    [[0, 0], [0, 1], [1, 0], [1, 1], [1, 2]],
    [[0, 1], [1, 1], [2, 1], [1, 0], [2, 0]],
    [[0, 0], [0, 1], [0, 2], [1, 1], [1, 2]],
    [[0, 0], [0, 1], [1, 0], [1, 1], [2, 0]]
  ],
  "T": [
    [[0, 0], [1, 0], [2, 0], [1, 1], [1, 2]],
    [[0, 1], [1, 1], [2, 1], [2, 0], [2, 2]],
    [[1, 0], [1, 1], [1, 2], [0, 2], [2, 2]],
    [[0, 0], [0, 1], [0, 2], [1, 1], [2, 1]]
  ],
  "U": [
    [[0, 0], [1, 0], [2, 0], [0, 1], [2, 1]],
    [[0, 0], [0, 1], [0, 2], [1, 0], [1, 2]],
    [[0, 0], [2, 0], [1, 1], [0, 1], [2, 1]],
    [[0, 0], [1, 0], [1, 1], [1, 2], [0, 2]]
  ],
  "V": [
    [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]],
    [[0, 2], [1, 2], [2, 2], [2, 0], [2, 1]],
    [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2]],
    [[0, 0], [0, 1], [0, 2], [1, 0], [2, 0]]
  ],
  "W": [
    [[0, 2], [1, 2], [1, 1], [2, 1], [2, 0]],
    [[0, 0], [0, 1], [1, 1], [1, 2], [2, 2]],
    [[0, 2], [0, 1], [1, 1], [1, 0], [2, 0]],
    [[0, 0], [1, 0], [1, 1], [2, 1], [2, 2]]
  ],
  "X": [
    [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]]
  ],
  "Y": [
    [[0, 1], [1, 1], [2, 1], [3, 1], [2, 0]],
    [[0, 0], [0, 1], [0, 2], [0, 3], [1, 2]],
    [[0, 0], [1, 0], [2, 0], [3, 0], [1, 1]],
    [[1, 3], [1, 0], [1, 1], [1, 2], [0, 1]],
    [[0, 0], [1, 0], [2, 0], [3, 0], [2, 1]],
    [[1, 3], [1, 0], [1, 1], [1, 2], [0, 2]],
    [[0, 1], [1, 1], [2, 1], [3, 1], [1, 0]],
    [[0, 0], [0, 1], [0, 2], [0, 3], [1, 1]]
  ],
  "Z": [
    [[0, 0], [0, 1], [1, 1], [2, 1], [2, 2]],
    [[0, 2], [0, 1], [1, 1], [2, 1], [2, 0]],
    [[0, 2], [1, 2], [1, 1], [1, 0], [2, 0]],
    [[0, 0], [1, 2], [1, 1], [1, 0], [2, 2]]
  ]
};

let pentCountsMap = {
  "F": numPent,
  "I": numPent,
  "L": numPent,
  "N": numPent,
  "P": numPent,
  "T": numPent,
  "U": numPent,
  "V": numPent,
  "W": numPent,
  "X": numPent,
  "Y": numPent,
  "Z": numPent,
};

let pixel_r_avg = [];
let pixel_g_avg = [];
let pixel_b_avg = [];

// Load the image.
function preload() {
  img = loadImage('/golombb.png');
}

function setup() {
  randomSeed(99);
  
  img.resize(imgWidth, imgHeight);
  createCanvas(img.width, img.height);
  img.loadPixels();
  for (let y = 0; y < img.height; y ++) {
    for (let x = 0; x < img.width; x ++) {
      
      index = (y*img.width + x)*4
      if (floor(x/10) == x/10 && floor(y/10) == y/10) {
        pixel_r_avg.push(img.pixels[index])
        pixel_g_avg.push(img.pixels[index + 1])
        pixel_b_avg.push(img.pixels[index + 2])
      } else {
        pixel_r_avg[pixel_r_avg.length-1] += img.pixels[index]
        pixel_g_avg[pixel_g_avg.length-1] += img.pixels[index + 1]
        pixel_b_avg[pixel_b_avg.length-1] += img.pixels[index + 2]
      }
      img.pixels[index + 3] = 0;
    }
  }
    img.updatePixels();  
  
    let coords = [];
    // solve(coords); - UNCOMMENT TO SOLVE PUZZLE NOT RANDOMLY - Endless recursion call
    solveRandom(coords, pentCountsMap);
}

function solveRandom(coords, pentCounts) {
    for (let y = 0; y < img.height; y += 10) { 
        for (let x = 0; x < img.width; x += 10) {
   
            if (!containsCord(coords, x, y)){
                let shape = [];
                let count = 0;
         
                while (!isValidPlacement(shape, coords, pentCounts, true)) {
                    shape = randShape(x, y);
                    if (count > 400) {
                        shape = [];
                        break
                    }
                    count += 1;
                }
                [coords, pentCounts] = placeShape(shape, coords, pentCounts, true);
            }
        }
    }
}

function createShape(x, y, config) {
  let shape = []; 
  for (let coord of config) {
    shape.push([x + coord[0]*10, y + coord[1]*10]);
  }
  return shape;
}

function randShape(x, y) {
  let neighbors = getNeighbors(x,y);
  let curr_shape = [[x,y]];
  
  for (let i = 0; i < 4; i++) {
    
     curr_shape.push(random(neighbors));
    
    let new_neighbors = [];
    let all_coords = [];
    
    for (let shape_coord of curr_shape) {
      all_coords = all_coords.concat(getNeighbors(shape_coord[0],shape_coord[1]))
    }
    
    for (let coord of all_coords) {
      if (!containsCord(curr_shape, coord[0], coord[1])) {
        new_neighbors.push(coord);
      }
    }
    neighbors = new_neighbors;
  }
  return curr_shape;
}


function getNeighbors(x,y) {
  let neighbors = [];
  if (x > 9) {
    neighbors.push([x-10,y]);
  }
  if (x < img.width - 10) {
    neighbors.push([x+10,y]);
  }
  if (y > 9) {
    neighbors.push([x,y-10]);
  }
  if (y < img.height - 10) {
    neighbors.push([x,y+10]);
  }
  return neighbors;
}
  
function getSideLines(shape, side) {
  let prim_cord = 0;
  let sec_cord = 1;
  
  if (side == "bottom" || side == "top") {
    prim_cord = 1;
    sec_cord = 0;
  }
  
  function ascSort(a, b) {
      return a[prim_cord] - b[prim_cord];
    }
  
  function descSort(a, b) {
      return b[prim_cord] - a[prim_cord];
    }
  
  let sortFn = ascSort;
  
  if (side == "bottom" || side == "right") {
    sortFn = descSort;
  }
  
  let final_squares = []
  
  let squares = [...shape];
  let sec_coords = new Set([]);
  let count;
  
  while (count != 0 && squares.length != 0) {
    
    let max_coord = squares.sort(sortFn)[0][prim_cord];
    
    count = 0;
    let rest = [];

    for (let coord of squares) {
      if (coord[prim_cord] == max_coord && !sec_coords.has(coord[sec_cord])) {
        final_squares.push(coord);
        sec_coords.add(coord[sec_cord]);
        count += 1;
      } else {
        rest.push(coord);
      }
    }
    squares = rest;
  } 
  return final_squares;
}

function containsCord(coords,x,y) {
  for (let coord of coords) {
    if (x == coord[0] && y == coord[1]) {
      return true;
    }
  }
  return false;
}
  
function identifyPentomino(coords) {

  const xCoords = [...coords];
  let xSortedCoords = xCoords.sort((a, b) => {
          return a[0] - b[0];
  });

  const yCoords = [...coords];
  let ySortedCoords = yCoords.sort((a, b) => {
          return a[1] - b[1];
  });

  let baseCoord = [xSortedCoords[0][0], ySortedCoords[0][1]];

  for (let type in pentominoes) {
      let orientations = pentominoes[type];
      for (let orientation of orientations) {
          let matched = true;

          for (let cell of orientation) {

              if (!coords.some(([x, y]) => round((x - baseCoord[0])/10) === cell[0] && round((y - baseCoord[1])/10) === cell[1])) {
                  matched = false;
                  break;
              }
          }
          if (matched) {
              return type;
          }
      }
  }

  return "Unknown";
}

function checkEnclosed(coords, shape) {

    free_neighbors = [];
    outisde_neighbors = [];
    
    for (let square of shape) {
        free_neighbors = free_neighbors.concat(getNeighbors(square[0],square[1]));
    }
    
    free_neighbors = free_neighbors.filter(function(neighbor) {
        return !(containsCord(shape, neighbor[0],neighbor[1])) &&
                !(containsCord(coords, neighbor[0],neighbor[1]));
    });
    
    for (let neighbor of free_neighbors) {

        let neighborhood = getNeighbors(neighbor[0],neighbor[1]).filter(
            function(neigh) {
                return !(containsCord(shape,neigh[0],neigh[1])) &&
                        !(containsCord(coords,neigh[0],neigh[1]));
            });
        
        if (neighborhood.length == 0) {
            return true;
        }

        let total_neighborhood = [...neighborhood];

        while (neighborhood.length !== 0) {
            let new_neighbors = [];

            for (let curr_neighbor of neighborhood) {

                let curr_neighbors = getNeighbors(curr_neighbor[0],curr_neighbor[1]).filter(
                        function(neigh) { 
                        return !(neighbor[0] == neigh[0] && neighbor[1] == neigh[1]) &&
                                !(containsCord(shape, neigh[0], neigh[1])) &&
                                !(containsCord(coords, neigh[0], neigh[1])) &&
                                !(containsCord(total_neighborhood, neigh[0], neigh[1])) &&
                                !(containsCord(new_neighbors, neigh[0], neigh[1]));
                        });
                new_neighbors = new_neighbors.concat(curr_neighbors);
            }
            neighborhood = new_neighbors;
            total_neighborhood = total_neighborhood.concat(new_neighbors);
        }

        if ((total_neighborhood.length + 1)%5 !== 0) {
            return true;
        }
    }
    return false;
}
  
function isValidPlacement(shape, coords, pentCounts, isRandom) {
  
  if (shape.length !== 5) {
    return false;
  }

  if (!isRandom && checkEnclosed(coords, shape)) {
    return false;
  }
          
  for (let coord of shape) {
    x = coord[0];
    y = coord[1];
    
    if (containsCord(coords, x, y)) {
      return false;
    }

    if (x < 0 || x > img.width - 10 || y < 0 || y > img.height - 10) {
      return false;
    }
  }
  
  let type = identifyPentomino(shape);
  if (!isRandom && pentCounts[type] <= 0) {
    return false;
  }
  return true;
}
  
  
function drawShape(shape) {

  let r = 0;
  let g = 0;
  let b = 0;

  for (let squr of shape) {
    x = squr[0];
    y = squr[1];

    r += pixel_r_avg[(y/10)*(img.width/10) + (x/10)];
    g += pixel_g_avg[(y/10)*(img.width/10) + (x/10)]
    b += pixel_b_avg[(y/10)*(img.width/10) + (x/10)]
  }

  fill(color(round(r/5/10),round(g/5/10),round(b/5/10)))

  let type = identifyPentomino(shape);

  for (let squr of shape) {
    noStroke();
    square(squr[0], squr[1], 10);
  }

  stroke(0,0,0);

  let bottomSquares = getSideLines(shape, "bottom");
  for (let bottomSquare of bottomSquares) {
    btmX = bottomSquare[0];
    btmY = bottomSquare[1];
    line(btmX, btmY + 10, btmX + 10, btmY + 10);
  }

  let topSquares = getSideLines(shape, "top");
  for (let topSquare of topSquares) {
    topX = topSquare[0];
    topY = topSquare[1];
    line(topX + 10, topY, topX, topY);
  }

  let leftSquares = getSideLines(shape, "left");
  for (let leftSquare of leftSquares) {
    leftX = leftSquare[0];
    leftY = leftSquare[1];
    line(leftX, leftY, leftX, leftY + 10);
  }

  let rightSquares = getSideLines(shape, "right");
  for (let rightSquare of rightSquares) {
    rightX = rightSquare[0];
    rightY = rightSquare[1];
    line(rightX + 10, rightY, rightX + 10, rightY + 10);
  }
}

function placeShape(shape, coords, pentCounts, rnd) {

    let new_cords = [...coords];

    if (isValidPlacement(shape, coords, pentCounts, rnd)) {
      let type = identifyPentomino(shape);
  
      for (let squr of shape) {
        new_cords.push(squr);
      }
      drawShape(shape);
      pentCounts[type] -= 1;
    }
    return [new_cords, pentCounts];
  }
    
    
function eraseShape(shape) {
    fill(255,0,0);
    stroke(255,0,0);
  
    for (let squr of shape) {
      square(squr[0], squr[1], 10);
    }
}

function removeShape(shape, coords, pentCounts) {
  let type = identifyPentomino(shape);
  let new_cords = [];
  
  for (let coord of coords) {
    if (!containsCord(shape, coord[0], coord[1])) {
      new_cords.push(coord);
    }
  }
  pentCounts[type] += 1;
  return [new_cords, pentCounts];
}


function solve(coords, pentCounts) {
    console.log("solving...");

    let values = Object.values(pentCounts);
    let remainingShapes = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    if (remainingShapes === 0) {
        return [true, coords];
    }

    for (let x = 0; x < img.width; x += 10) {
        for (let y = 0; y < img.height; y += 10) {    
            for (let pentType of Object.keys(pentominoes)) {
                for (let index = 0; index < pentominoes[pentType].length; index++) {

                    let config = pentominoes[pentType][index];
                    let shape = createShape(x, y, config);

                    if (isValidPlacement(shape, coords, pentCounts)) {

                        let editedCoords = [...coords];

                        [coords, pentCounts] = placeShape(shape, editedCoords, pentCounts);
                        editedCoords = [...coords];

                        let [solved, newCoords] = solve(editedCoords, pentCounts);

                        if (solved) {
                            return [true, newCoords];
                        }
                        editedCoords = [...coords];
                        [coords, pentCounts] = removeShape(shape, editedCoords, pentCounts);
                    }
                }
            }
        }
    }
        
    return [false, coords];
}