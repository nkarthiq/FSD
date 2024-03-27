function label_create(tagname, attr1, attrval1, content){
    var ele =document.createElement(tagname);
    ele.setAttribute(attr1,attrval1);
    ele.innerHTML=content;
    return ele;
}
function break_create(){
    var break_ele=document.createElement("br");
    return break_ele;
}
function input_create(tagname, attr1, attrval1, idname,act="",actval=""){
var input_ele=document.createElement(tagname);
input_ele.setAttribute(attr1,attrval1);
input_ele.id=idname;
if(act){
    input_ele.setAttribute(act,actval);
}
return input_ele;
}

var firstnm_ele=label_create("label", "for","Firstname","Firstname");
var  labelfn_break=break_create();
var input_firstnm=input_create("input","type","input","Firstname");
var  inputfn_break=break_create();

var middlenm_ele=label_create("label", "for","Middlename","Middlename");
var  labelmn_break=break_create();
var input_middlenm=input_create("input","type","input","Middlename");
var  inputmn_break=break_create();

var lastnm_ele=label_create("label", "for","Lastname","Lastname");
var  labelln_break=break_create();
var input_lastnm=input_create("input","type","input","Lastname");
var  inputln_break=break_create();

var email_ele=label_create("label", "for","Email","Email");
var  labelemail_break=break_create();
var input_email=input_create("input","type","email","Email");
var  inputemail_break=break_create();

var address_ele=label_create("label", "for","Address","Address");
var  address_break=break_create();
var input_addr=input_create("input","type","input","Address");
var  inputaddr_break=break_create();

var input_submit=input_create("input","type","submit","Submit","onclick","foo()");


document.body.append(firstnm_ele,labelfn_break,input_firstnm,inputfn_break,middlenm_ele,labelmn_break,input_middlenm,inputmn_break,lastnm_ele,
    labelln_break,input_lastnm,inputln_break,email_ele,labelemail_break,input_email,input_email,inputemail_break,address_ele,address_break,input_addr,inputaddr_break,input_submit);


    function foo(){
        let data = document.getElementById("Firstname").value;
        data=data+"\n"+document.getElementById("Middlename").value;
        data=data+"\n"+document.getElementById("Lastname").value;
        data=data+"\n"+document.getElementById("Email").value;
        data=data+"\n"+document.getElementById("Address").value;         
        console.log(data); 
    }
