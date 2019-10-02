const arr = [2, 3, 4];
arr.push(5,6,7);
arr.unshift(1);
arr.unshift(0);
console.log(arr);

const arr = [5,7,9,6];

console.log(arr1.slice(3));

const rainbowColors = [];
rainbowColors.push("orange");
rainbowColors.unshift("red");
rainbowColors.push("yellow");
rainbowColors.push("green");
rainbowColors.push("blue");
rainbowColors.push("indigo");
rainbowColors.push("violt");
rainbowColors.length
7
rainbowColors[1];
"orange"
rainbowColors[6];
"violt"
rainbowColors.indexOf("blue");
4
rainbowColors.slice(1,3);
(2) ["red", "yellow"]

const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
arrOfArrs[0][0];
arrOfArrs[1][2];