const lineReader = require('line-reader');
let max = 0;
let cpt = 0;
lineReader.eachLine('inputData.txt', function(line, last) {
  if (line == '') {
    if (cpt > max) max = cpt;
    cpt = 0;
    return;
  }
  cpt = cpt + parseInt(line);

  if (last) console.log(max);
});
