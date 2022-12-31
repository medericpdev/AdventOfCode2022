const lineReader = require('line-reader');
let opponent;
let me;
let point = 0;
let tmp;

const shapePoint = new Map([
    ["A", 1],
    ["B", 2],
    ["C", 3]
]);

//A = rock, B = paper, C = scissors
//X = rock, Y = paper, Z = scissors
const mapPoint = new Map([
    ["X", 0],
    ["Y", 3],
    ["Z", 6]
]);

//A = rock, B = paper, C = scissors
//X = rock, Y = paper, Z = scissors
const winMap = new Map([
    ["A", "Z"],
    ["B", "X"],
    ["C", "Y"]
]);

const loseMap = new Map([
    ["A", "Y"],
    ["B", "Z"],
    ["C", "X"]
]);

const mapping = new Map([
    ["X", "A"],
    ["Y", "B"],
    ["Z", "C"]
]);

function getRoundPoint(a, b){
    if(a == 3) return shapePoint.get(b);
    else if (a == 6) return shapePoint.get(mapping.get(winMap.get(b)));
    else return shapePoint.get(mapping.get(loseMap.get(b)));
}

lineReader.eachLine('inputData.txt', function(line, last) {
    tmp = 0;
    opponent = Array.from(line)[0];
    me = Array.from(line)[2];

    console.log(point);
    point += mapPoint.get(me);
    console.log(point);
    tmp = mapPoint.get(me);
    point += getRoundPoint(tmp, opponent);
    console.log(point);


    if(last) console.log(point); 
});