var btn_login=document.getElementById("login");
var main=document.getElementById("container");
var married_btn=document.getElementById("married");
var spouse=document.getElementById("spouse_name");
var inp=document.getElementById("inp");
var having_child=document.getElementById("having_child");
var plus=document.getElementById("plus");
var minus=document.getElementById("minus");
var children=document.getElementById("children");
var dark_mode=document.getElementById("darkmode");
var child_list=document.getElementById("child_list");
function login(){
  main.style.display="block";
}
function darkmode(){
    main.style.backgroundColor="skyblue";
}
function single(){
    spouse.style.display="none";
    inp.style.display="none";
    main.style.height="auto" ;
}
function married(){
    spouse.style.display="block";
    inp.style.display="block";
    main.style.height="auto" ;
}
function child(){
    children.style.display="block";
    plus.style.display="inline-block";
    minus.style.display="inline-block";
}
function add_input(){
    var input=document.createElement("INPUT");
    input.type='text';
    var child=document.createElement("LI");
    child_list.appendChild(child);
    child.appendChild(input);
    main.style.height="auto" ;
}
function remove_input(){
    child_list.removeChild(child_list.childNodes[0]);
}