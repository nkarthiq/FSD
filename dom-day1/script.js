let div1=document.createElement("div");
div1.innerHTML="<p>this is div</p>";
document.body.append(div1);
let div2=document.createElement("div");
div2.innerText="<p>this is div</p>";
document.body.append(div2);
div1.setAttribute("class","main");
div1.setAttribute("id","div1");
div1.append(div2);

let box=document.createElement("div");
box.className="box";

let cont=document.createElement("div");
cont.className="container";
box.append(cont);
let row1=document.createElement("div");
row1.className="row";
cont.append(row1);
let col1=document.createElement("div");
col1.className="col-md-4";
row1.append(col1);

let boxpart=document.createElement("div");
boxpart.className="box-part text-center";
col1.append(col1);

<div class="box">
<div class="container">
    <div class="row">
        <div class="col-md-4">
            <div class="box-part text-center">
                <i class="fa fa-instagram fa-3x" aria-hidden="true"></i>
                <h4>Instagram</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    culpa accusantium recusandae doloremque iusto
                </p>
                <a href="#" target="_blank">Learn More</a>
            </div>
        </div>