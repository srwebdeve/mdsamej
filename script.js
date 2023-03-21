var homebtn = document.querySelector(".homebtn");
var contactbtn=document.querySelector(".contactbtn");
var socialbtn = document.querySelector(".socialbtn");
var dis = document.querySelector(".dis");

var home = document.querySelector(".home");
var contact = document.querySelector(".contact");
var social = document.querySelector(".social");
var discription = document.querySelector(".description");

homebtn.addEventListener("click",function(){
    home.style.zIndex="10";
    contact.style.zIndex="0";
    social.style.zIndex="0";
    discription.style.zIndex="0";
});
contactbtn.addEventListener("click",function(){
    home.style.zIndex="0";
    contact.style.zIndex="10";
    social.style.zIndex="0";
    discription.style.zIndex="0";
});
socialbtn.addEventListener("click",function(){
    home.style.zIndex="0";
    contact.style.zIndex="0";
    social.style.zIndex="10";
    discription.style.zIndex="0";
});
dis.addEventListener("click",function(){
    home.style.zIndex="0";
    contact.style.zIndex="0";
    social.style.zIndex="0";
    discription.style.zIndex="10";
});