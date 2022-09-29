"use strict";

let arr = [123, 24, 317, 456, 57, 41, 27];

console.log(arr.filter(n => !!~[2,4].indexOf(+n.toString()[0])));