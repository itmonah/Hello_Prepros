//@prepros-prepend jq-start.js
// @prepros-append jq-medium.js
/*
while (condition =  условие) {
	body for cycle = тело цикла
}

let num = 5;
while (num) {
	console.log(num);
	num--;
}

let nums = 0;
while (nums) 	console.log(nums--);

let numer = 0;
do {
	console.log(numer);
	numer++;
} while (numer < 0);



for (Начало; Условие; Шаг) {
	// Тело циклаб то есть код
}

for (beginning; condition; step) {
	// body for cycle
}


let num = 0;
for (; num < 7; 	num++) {
	console.log(num);
	if (num == "3") break;
}
console.log (`Работа окончена на перерыве: ${num}`);

let num = 0;
for (; num < 6; num++) {
	if (num== 2) continue;
	console.log(num);
}
*/

// let num = 8;
// while (num) {
// 	console.log(num);
// 	num--;
// }


// for (let nums = 0 ; nums < 3; nums++) {
// 	console.log(`Number: ${nums}`);
// }

// for (let numes = 0 ; numes < 2; numes++) {
// 	for (let size = 0; size < 3; size++){
// 		console.log(size);
// 	}
// }
"use strict"
function showName( ) {
	console.log ("Vasya");
}

setTimeout(showName, 0);
console.log("Kolya");

showMessage( );
function showMessage( ) {
	console.log("SMS");
}


let showMess = function ( ) {
	console.log ("Soobshchenie");
}
showMess( );