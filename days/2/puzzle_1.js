const lineReader = require('line-reader');
let opponent;
let me;
let point = 0;

const shapePoint = new Map([
    ["X", 1],
    ["Y", 2],
    ["Z", 3]
]);

//A = rock, B = paper, C = scissors
//X = rock, Y = paper, Z = scissors
const winMap = new Map([
    ["A", "Z"],
    ["B", "X"],
    ["C", "Y"]
]);

const mapping = new Map([
    ["A", "X"],
    ["B", "Y"],
    ["C", "Z"]
]);

function getRoundPoint(a, b){
    if(mapping.get(a) == b) return 3;
    if(winMap.get(a) == b) return 0;
    else return 6;
}

lineReader.eachLine('inputData.txt', function(line, last) {
    opponent = Array.from(line)[0];
    me = Array.from(line)[2];

    point += shapePoint.get(me);
    point += getRoundPoint(opponent, me); 

    if(last) console.log(point); 
});