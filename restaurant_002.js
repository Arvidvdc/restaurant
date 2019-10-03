// Defining variables
var arrayPizza= ['Margeritha','Quattro formaggio', 'Al tonno', 'Veggy'],
    arrayPizzaPrice =['9,50','12,50', '15,00', '10,00'];
    rowHTML='<td>Gerecht</td><td>Prijs</td>'

function tableCreate(){
  // Function for creating the main table and filling products 
  var body = document.body,
      tbl  = document.createElement('table');
  tbl.setAttribute('class','lijst');
  tbl.setAttribute('ID','hoofdTabel');
  var trSub = tbl.insertRow();
  trSub.setAttribute('class','SGTTitel');
  trSub.innerHTML='<td>Pizza</td><td></td>';
  trSub = tbl.insertRow();
  trSub.setAttribute('class','head2');
  trSub.innerHTML=rowHTML;

  for(var i = 0; i < arrayPizza.length; i++){
    var tr = tbl.insertRow();
    for(var j = 0; j < 2; j++){
      var td = tr.insertCell();
      // td.style.border = '1px solid black';
      if(j == 1){
        td.setAttribute('ID',arrayPizza[i]);
      } else {
        td.setAttribute('class', 'tabbed');
        td.appendChild(document.createTextNode(arrayPizza[i]));
      }
    }
  }

  body.appendChild(tbl);
}

function addPizzaPrice() {
  // Function for adding prices to the main table
  for(var i=0; i < arrayPizza.length; i++){
    var getPrice = '\u20AC ' + arrayPizzaPrice[i];
    document.getElementById(arrayPizza[i]).innerHTML=getPrice;
  }
}