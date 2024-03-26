

let box=document.createElement("div");
box.className="box";
document.body.append(box);

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
col1.append(boxpart);

let instaicon=document.createElement("i");
instaicon.className="fa fa-instagram fa-3x";
instaicon.setAttribute("aria-hidden","true")
boxpart.append(instaicon);

let instahead=document.createElement("h4");
instahead.innerText="Instagram";
boxpart.append(instahead);

let para=document.createElement("p");
para.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. culpa accusantium recusandae doloremque iusto";
boxpart.append(para);

let link=document.createElement("a");
link.innerText="Learn More";
link.href="#";
link.target="_blank";
boxpart.append(link);



