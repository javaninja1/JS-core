const _ = require('underscore');

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#static_methods

const ln = () => {cl("~~~~~~~~~~~~~~~~~~~~~~~~~~~~");}
const cl = (str) => {console.log(str);}

cl(":Node js - feature catalog:");
cl ("import underscore:" +  _.contains([1, 2, 3], 3) );
ln();

//Arrays, conditional 

(2>1)? cl('yes') : cl('no');

arr = [1,2,3,4];

arr.forEach(element => {
    cl("array: " + element);
});
cl("mapped values: " + 
            arr.map(function (x, i) { return i*2 }));
cl("array apply: " + Array.apply(null,Array(5)).map(function (x, i) { return i*2 }));
ln();

arr = arr.concat([8,9]);
_.each(arr, e => cl(e) ) ;

const aboveNum = e => e > 3;
cl ("all are aboveNum:" + arr.every(aboveNum) );
cl ("some are aboveNum:" + arr.some(aboveNum) );

cl ( "even:" + arr.filter (e => e%2 === 0))

cl ("flatMap" + arr.flatMap(x => [x, x*2]) );

const sumUp = (e1, e2) => e1+e2;
cl ("sum:" + arr.reduce(sumUp));

months = ["jan","apr"]
months.splice(1,0,"feb","mar");  //index, num to delete, values to insert
cl("splice:" + months);
cl("reverse:" + months.reverse());