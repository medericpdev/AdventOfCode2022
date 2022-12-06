const lineReader = require('line-reader');

let cpt = 0;
const list = [0, 0, 0];

lineReader.eachLine('inputData.txt', function(line, last) {
  if (line == '') {
    let min = Number.MAX_SAFE_INTEGER;
    let tmp = false;
    let i = 0;

    list.forEach(function(item, index) {
      if (item < cpt) tmp = true;
      if (item < min) {
        min = item;
        i = index;
      }
    });

    if (tmp) list[i] = cpt;

    cpt = 0;
    tmp = false;

    return;
  }
  cpt = cpt + parseInt(line);

  if (last) console.log(list[0] + list[1] + list[2]);
});
