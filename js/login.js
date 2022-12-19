function clearerror(){
    errors = document.getElementsByClassName("formerror");

    for( let items of errors){
        items.innerHTML="";
    }
}

function seterror(id,error){
    Element=document.getElementById(id);
       Element.getElementsByClassName('formerror')[0].innerHTML=error;
}

function validate(){

    
let returnvalue =true;
clearerror()

     let name = document.forms["myForm"]["fname"].value
    
     if(name.length<5){
          seterror("name","*Name is too short!!")
    
          returnvalue=false;
     } 

     let email = document.forms["myForm"]["femail"].value
    
     if(email.length>30){
          seterror("email","*Email is too long!!")
    
          returnvalue=false;
     } 

     let phone = document.forms["myForm"]["fphone"].value
    
     if(phone.length!=10){
          seterror("phone","*Invlaid Phone Number!!")
    
          returnvalue=false;
     } 

     let password = document.forms["myForm"]["fpass"].value
      

     if(password.length<6){
          seterror("pass","*Password should be atleast 6 chr long!!")
          returnvalue=false;
     } 
     let confirm = document.forms["myForm"]["fcpass"].value
    
     if(confirm!=password){
          seterror("cpass","*You Enterd Different Passwrod Here!!")
    
          returnvalue=false;
     } 

        return returnvalue;
    }

    function myFunction() {
        let x = document.getElementsByClassName("password")[0];
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }
    

