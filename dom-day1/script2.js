
function foo(){
    let data = document.getElementById("firstname").value;
    data=data+"\n"+document.getElementById("middlename").value;
    data=data+"\n"+document.getElementById("lastname").value;
    data=data+"\n"+document.getElementById("email").value;
    data=data+"\n"+document.getElementById("address").value;         
    console.log(data); 
}