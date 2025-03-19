const form=document.querySelector("#form");
const username=document.querySelector("#username");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const cpassword=document.querySelector("#cpassword");

form.addEventListener("submit",function(event){
   
   if(!validateInputs()){
    event.preventDefault();
   }
})
  


function validateInputs(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal =password.value.trim();
    const cpasswordVal =cpassword.value.trim();
    let success =true

    if(usernameVal===""){
        success=false;
        setError(username,"username is required")
    }
    else{
        setSuccess(username)
    }
    if(emailVal===""){
        success=false;
        setError(email,"email is required")
    }
    else{
        setSuccess(email)
    }
    if(passwordVal===""){
        success=false;
        setError(password,"password is required")
    }
    else if(passwordVal.length<8){
        success=false;
        setError(password,"password must be atleast 8 character")
    }
    else{
        setSuccess(password)
    }
    if(cpasswordVal===""){
        success=false;
        setError(cpassword,"confirm password is required")
    }
    else if(cpasswordVal!==passwordVal){
        success=false;
        setError(cpassword," password does not match")
    }
    else{
        setSuccess(cpassword)
    }
    return success;

    }


function setError(element,message){
    const input=element.parentElement;
    const errorElement=input.querySelector(".error")
    errorElement.innerText=message;
    input.classList.add("error")
    input.classList.remove("success")
}

function setSuccess(element){
    const input=element.parentElement;
    const errorElement=input.querySelector(".error")
    errorElement.innerText="";
    input.classList.add("success")
    input.classList.remove("remove")
}
