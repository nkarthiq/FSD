
var res=fetch("https://restcountries.com/v3.1/all")
res.then((data)=> data.json())
.then((data1)=>foo(data1))
/*
var res=fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
res.then((data)=> data.json())
.then((data1)=>foo(data1))
*/
var container= document.createElement("div")
container.className="container"

var row= document.createElement("div")
row.className="row"



function foo(data1){
    for(var i=0;i<data1.length;i++){    
    var col= document.createElement("div")
    col.className="col-lg-4";
    col.innerHTML=`<div class="card border-primary mb-3" style="padding: 15px; max-width: 18rem;mb-3">
    <div class="card-header text-white text-center" style="background-color:black;">${data1[i].name.common}</div>
    <img src="${data1[i].flags.png}" class="card-img-top" alt="Flags" style="padding-top: 15px;" >
    <div class="card-body text-primary text-center">
      <p class="card-title">Capital: ${data1[i].capital}</p>
      <p class="card-text">Region: ${data1[i].region}</p>
      <p class="card-text">Country Code: ${data1[i].cca3}</p>
      <a href="#" class="btn btn-primary" target="_blank">Click for Weather</a>
    </div>
  </div>`
    row.append(col);
    container.append(row);
    document.body.append(container);
    }
}