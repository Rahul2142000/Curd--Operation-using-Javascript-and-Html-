function validateForm(){
 var hasError=true;
 var salutation = document.getElementById('Salutation').value
   if(salutation=""){
    document.getElementById('Salutation').style.border= "1px solid red";
    hasError=false;
   }
   else{
    document.getElementById('Salutation').style.border= "1px solid green";
   }

  // ==============================================
  var maleRadio = document.querySelector('input[name="gender"][value="Male"]');
  var femaleRadio = document.querySelector('input[name="gender"][value="Female"]');
  
  if (!maleRadio.checked && !femaleRadio.checked) {
    document.querySelector(".valid11").style.display="block"
    hasError=false;
  }
     
  else{
    document.querySelector(".valid11").style.display="none"
   
  }
  
  
  // =============================

  var fnamevalidation = document.getElementById("fname").value;
  var fsnamevalidation = (/^[A-Za-z]/);
  if(fsnamevalidation.test(fnamevalidation)){
       document.getElementById("fname").style.border= "1px solid green";
       document.querySelector(".valid").style.display="none"
  }
  else{ 
    document.getElementById("fname").style.border= "1px solid red";
    document.querySelector(".valid").style.display="block"
    hasError=false;
  }
// ==============================================================
  var lnamevalidation = document.getElementById("lname").value;
  var lsnamevalidation = (/^[A-Za-z]/);
  if(lsnamevalidation.test(lnamevalidation)){
       document.getElementById("lname").style.border= "1px solid green";
       document.querySelector(".valid1").style.display="none"
      
       
  }
  else{ 
    document.getElementById("lname").style.border= "1px solid red";
    document.getElementById("lname").focus;
    document.querySelector(".valid1").style.display="block"
    hasError=false;
   
    

  }
// ===============================================================
  var datevalidation = document.getElementById("birthday").value;
  if(datevalidation==""){
       document.getElementById("birthday").style.border= "1px solid red";
       document.getElementById("birthday").focus;
       document.querySelector(".valid4").style.display="block"
      
       hasError=false;

  }
  else{ 
    document.getElementById("birthday").style.border= "1px solid green";
    document.querySelector(".valid4").style.display="none"
  }
// ================================================================ 
  var quavalidation = document.getElementById("Qualifications").value;
  var quasvalidation = (/^[A-Za-z0-9]/);
  if(quasvalidation.test(quavalidation)){
       document.getElementById("Qualifications").style.border= "1px solid green";
       document.querySelector(".valid5").style.display="none"
  }
  else{ 
    document.getElementById("Qualifications").style.border= "1px solid red";
    document.getElementById("Qualifications").focus;
    document.querySelector(".valid5").style.display="block"
    hasError=false;

  }
// ================================================================ 
 var emailvalidation = document.getElementById("email").value;
  var emailsvalidation =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(emailsvalidation.test(emailvalidation)){
       document.getElementById("email").style.border= "1px solid green";
       document.querySelector(".valid2").style.display="none"
  }
  else{ 
    document.getElementById("email").style.border= "1px solid red";
    document.getElementById("email").focus;
    document.querySelector(".valid2").style.display="block"
    hasError=false;
  }
// ================================================================    
  var mobvalidation = document.getElementById("mobile").value;
  var mobsvalidation = /^\d{10}$/;
  if(mobsvalidation.test(mobvalidation)){
       document.getElementById("mobile").style.border= "1px solid green";
       document.querySelector(".valid3").style.display="none"
  } 
  else{ 
    document.getElementById("mobile").style.border= "1px solid red";
    document.getElementById("mobile").focus;
    document.querySelector(".valid3").style.display="block"
    hasError=false;
  }
// ================================================================  
var usernamevalidation = document.getElementById("Username").value;
if(usernamevalidation==""){
   document.getElementById("Username").style.border= "1px solid red";
   document.getElementById("Username").focus;
   document.querySelector(".valid9").style.display="block"
   hasError=false;

}
else{ 
document.getElementById("Username").style.border= "1px solid green";
document.querySelector(".valid9").style.display="none"
}
// ================================================================  
  var passvalidation = document.getElementById("inputPassword5").value;
  if(passvalidation==""){
       document.getElementById("inputPassword5").style.border= "1px solid red";
       document.getElementById("inputPassword5").focus;
       document.querySelector(".valid10").style.display="block"
       hasError=false;

  }
  else{ 
    document.getElementById("inputPassword5").style.border= "1px solid green";
    document.querySelector(".valid10").style.display="none"
  }
// ================================================================  
  var addvalidation = document.getElementById("Address").value;
  var addsvalidation = (/^[A-Za-z0-9]/);
  if(addsvalidation.test(addvalidation)){
       document.getElementById("Address").style.border= "1px solid green";
       document.querySelector(".valid6").style.display="none"
  }
  else{ 
    document.getElementById("Address").style.border= "1px solid red";
    document.querySelector(".valid6").style.display="block"
    document.getElementById("Address").focus;
    hasError=false;

  }
// ================================================================  
  var cityvalidation = document.getElementById("cityid").value;
  if(cityvalidation==""){
       document.getElementById("cityid").style.border= "1px solid red";
       document.getElementById("cityid").focus;
       document.querySelector(".valid7").style.display="block"
       hasError=false;

  }
  else{ 
      document.getElementById("cityid").style.border= "1px solid green";
      document.querySelector(".valid7").style.display="none"

  }
// ================================================================  
   var pinzipvalidation = document.getElementById("inputpinzip").value;
  var pinzipsvalidation = /^\d{3}\s?\d{3}$/;
  if(pinzipsvalidation.test(pinzipvalidation)){
       document.getElementById("inputpinzip").style.border= "1px solid green";
       document.querySelector(".valid8").style.display="none"
  }
  else{ 
    document.getElementById("inputpinzip").style.border= "1px solid red";
    document.querySelector(".valid8").style.display="block"
    document.getElementById("inputpinzip").focus;
    hasError=false;
  }
  
  // =========================================

  var country= document.getElementById ('countryid').value
  if(country=''){
    document.getElementById("countryid").style.border= "1px solid red";
    hasError=false;
  }
  else{
    document.getElementById("countryid").style.border= "1px solid green";
  }

  // ==========================================

  var stat= document.getElementById ('inputState').value
  if(stat=''){
    document.getElementById("inputState").style.border= "1px solid red";
    hasError=false;
  }
  else{
    document.getElementById("inputState").style.border= "1px solid green";
  }
   
  if(hasError==true){
    return true
  }
  else{
    return false
  }

}







// edit validation

function editvalidateForm(){
 var editerror = true
  var salutation = document.getElementById('Salutationedit').value
    if(salutation=""){
     document.getElementById('Salutationedit').style.border= "1px solid red";
     editerror = false
    }
    else{
     document.getElementById('Salutationedit').style.border= "1px solid green";
    }
 
   //  ==============================================
 
   var fnamevalidation = document.getElementById("fnameedit").value;
   var fsnamevalidation = (/^[A-Za-z]/);
   if(fsnamevalidation.test(fnamevalidation)){
        document.getElementById("fnameedit").style.border= "1px solid green";
        document.querySelector(".valid").style.display="none"
   }
   else{ 
     document.getElementById("fnameedit").style.border= "1px solid red";
     document.querySelector(".valid").style.display="block"
     editerror = false
     // return false;
   }
 // ==============================================================
   var lnamevalidation = document.getElementById("lnameedit").value;
   var lsnamevalidation = (/^[A-Za-z]/);
   if(lsnamevalidation.test(lnamevalidation)){
        document.getElementById("lnameedit").style.border= "1px solid green";
        document.querySelector(".valid1").style.display="none"
       
        
   }
   else{ 
     document.getElementById("lnameedit").style.border= "1px solid red";
     document.getElementById("lnameedit").focus;
     document.querySelector(".valid1").style.display="block"
     editerror = false
    
     // return false;
 
   }
 // ===============================================================
   var datevalidation = document.getElementById("birthdayedit").value;
   if(datevalidation==""){
        document.getElementById("birthdayedit").style.border= "1px solid red";
        document.getElementById("birthdayedit").focus;
        document.querySelector(".valid4").style.display="block"
        editerror = false
       
       //  return false;
 
   }
   else{ 
     document.getElementById("birthdayedit").style.border= "1px solid green";
     document.querySelector(".valid4").style.display="none"
   }
 // ================================================================ 
   var quavalidation = document.getElementById("Qualificationsedit").value;
   var quasvalidation = (/^[A-Za-z0-9]/);
   if(quasvalidation.test(quavalidation)){
        document.getElementById("Qualificationsedit").style.border= "1px solid green";
        document.querySelector(".valid5").style.display="none"
   }
   else{ 
     document.getElementById("Qualificationsedit").style.border= "1px solid red";
     document.getElementById("Qualificationsedit").focus;
     document.querySelector(".valid5").style.display="block"
     editerror = false
     // return false;
 
   }
 // ================================================================ 
  var emailvalidation = document.getElementById("emailedit").value;
   var emailsvalidation =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(emailsvalidation.test(emailvalidation)){
        document.getElementById("emailedit").style.border= "1px solid green";
        document.querySelector(".valid2").style.display="none"
   }
   else{ 
     document.getElementById("emailedit").style.border= "1px solid red";
     document.getElementById("emailedit").focus;
     document.querySelector(".valid2").style.display="block"
     editerror = false
     // return false;
 
   }
 // ================================================================    
   var mobvalidation = document.getElementById("mobileedit").value;
   var mobsvalidation = /^\d{10}$/;
   if(mobsvalidation.test(mobvalidation)){
        document.getElementById("mobileedit").style.border= "1px solid green";
        document.querySelector(".valid3").style.display="none"
   } 
   else{ 
     document.getElementById("mobileedit").style.border= "1px solid red";
     document.getElementById("mobileedit").focus;
     document.querySelector(".valid3").style.display="block"
     editerror = false
     // return false;
 
   }
 // ================================================================  
 var usernamevalidation = document.getElementById("Usernameedit").value;
 if(usernamevalidation==""){
    document.getElementById("Usernameedit").style.border= "1px solid red";
    document.getElementById("Usernameedit").focus;
    document.querySelector(".valid9").style.display="block"
    editerror = false
   //  return false;
 
 }
 else{ 
 document.getElementById("Usernameedit").style.border= "1px solid green";
 document.querySelector(".valid9").style.display="none"
 }
 // ================================================================  
   var passvalidation = document.getElementById("inputPasswordedit").value;
   if(passvalidation==""){
        document.getElementById("inputPasswordedit").style.border= "1px solid red";
        document.getElementById("inputPasswordedit").focus;
        document.querySelector(".valid10").style.display="block"
        editerror = false
       //  return false;
 
   }
   else{ 
     document.getElementById("inputPasswordedit").style.border= "1px solid green";
     document.querySelector(".valid10").style.display="none"
   }
 // ================================================================  
   var addvalidation = document.getElementById("Addressedit").value;
   var addsvalidation = (/^[A-Za-z0-9]/);
   if(addsvalidation.test(addvalidation)){
        document.getElementById("Addressedit").style.border= "1px solid green";
        document.querySelector(".valid6").style.display="none"
   }
   else{ 
     document.getElementById("Addressedit").style.border= "1px solid red";
     document.querySelector(".valid6").style.display="block"
     document.getElementById("Addressedit").focus;
     editerror = false
     // return false;
 
   }
 // ================================================================  
   var cityvalidation = document.getElementById("cityidedit").value;
   if(cityvalidation==""){
        document.getElementById("cityidedit").style.border= "1px solid red";
        document.getElementById("cityidedit").focus;
        document.querySelector(".valid7").style.display="block"
        editerror = false
       //  return false;
 
   }
   else{ 
       document.getElementById("cityidedit").style.border= "1px solid green";
       document.querySelector(".valid7").style.display="none"
 
   }
 // ================================================================  
    var pinzipvalidation = document.getElementById("inputpinzipedit").value;
   var pinzipsvalidation = /^\d{3}\s?\d{3}$/;
   if(pinzipsvalidation.test(pinzipvalidation)){
        document.getElementById("inputpinzipedit").style.border= "1px solid green";
        document.querySelector(".valid8").style.display="none"
   }
   else{ 
     document.getElementById("inputpinzipedit").style.border= "1px solid red";
     document.querySelector(".valid8").style.display="block"
     document.getElementById("inputpinzipedit").focus;
     editerror = false
     // return false;
 
   }
   
   // =========================================
 
   var country= document.getElementById ('countryidedit').value
   if(country=''){
     document.getElementById("countryidedit").style.border= "1px solid red";
     editerror = false
   }
   else{
     document.getElementById("countryidedit").style.border= "1px solid green";
   }
 
   // ==========================================
 
   var stat= document.getElementById ('inputStateedit').value
   if(stat=''){
     document.getElementById("inputStateedit").style.border= "1px solid red";
     editerror = false
   }
   else{
     document.getElementById("inputStateedit").style.border= "1px solid green";
   }

   if(editerror=true){
    return true
   }
   else{
    return false
   }
 }
 