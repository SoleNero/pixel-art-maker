'use strict';
window.onload = function () {

//create table
  let table = document.getElementsByClassName('pure-table');
  let tbody = document.querySelector('tbody');

  let tr = document.querySelector('tr');
  let td = document.createElement('td');
  tr.appendChild(td);

//boxes
(function rowsBoxes(){
   for(let i=0; i<21; i++){
      let secBox = td.cloneNode(true);
        tr.appendChild(secBox); 
     } 
    for(let j=0; j<21; j++){
      let secRow = tr.cloneNode(true);
        tbody.appendChild(secRow);
    } 
}());

//colors
  let color = document.querySelectorAll('div.color');
  console.log(color);

  








  
};
