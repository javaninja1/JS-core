const _ = require('underscore')
const cl = (str) => {console.log(str);}

text = 'this is,, input ^^text red#red'
var arr = text.match(/[A-Za-z0-9]+/g);

let countMap = new Map();
_.each(arr, (e) => {
    cl(e);
    if (countMap.get(e)== undefined) {
        countMap.set(e,1);
    } else {
       countMap.set(e,countMap.get(e)+1);
    }    
} );

cl(countMap);

let itr = countMap.keys();
for (const itItem of itr) {
    console.log(itItem);
}


