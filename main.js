/*global document*/
var print1 = document.getElementById('pram1');
var print2 = document.getElementById('pram2');
var print3 = document.getElementById('pram3');
var print4 = document.getElementById('pram4');
var size = 8;
let output1 = '';
let output2 = '';
let output3 = '';
let output4 = '';

for(let row = 0; row < size; row++) {
    for(let col = 0; col <= row; col++){
        output1 += ((col + row ) % 2 === 0) ? "<span style='color:red'>*</span>" : "<span style='color:green'>*</span>";
        output2 +=((col + row ) % 2 !== 0) ? "<span style='color:red'>*</span>" : "<span style='color:green'>*</span>";
        output3 +=(row % 2 === 0) ? "<span style='color:red'>*</span>" : "<span style='color:green'>*</span>";
        output4 +=(row % 2 !== 0) ? "<span style='color:red'>*</span>" : "<span style='color:green'>*</span>";
    }
    output1 += "<br />";
    output2 += '<br />';
    output3 += '<br />';
    output4 += '<br />';
}
print1.innerHTML = output1;
print2.innerHTML = output2;
print3.innerHTML = output3;
print4.innerHTML = output4;