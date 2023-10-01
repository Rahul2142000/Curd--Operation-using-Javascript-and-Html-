

// edit
 
function edit(id){
  
    document.getElementById('edit_modal_bg').click();
    fetch(`http://localhost:3000/employees/${id}`,{
          method:"GET",
      })
       .then(response => response.json())
       .then(data => {
         const picupload = document.getElementById('view-img-section')
         const upimg= `http://localhost:3000/employees/${data.id}/avatar`
         picupload.src  =upimg
         console.log(upimg)
            document.getElementById("Salutationedit").value=data.salutation;
            document.getElementById("fnameedit").value=data.firstName;
        
            document.getElementById("lnameedit").value=data.lastName;
            document.getElementById("emailedit").value=data.email;
            document.getElementById("mobileedit").value=data.phone;
            function changeformat(val) {
                const dobstore = val.split("-");
                let year = dobstore[2];
                let month = dobstore[1];
                let day = dobstore[0];
                let formattebirthday =year + "-" + month + "-" + day;
                return formattebirthday;
              }
              const formateddob = changeformat(data.dob);
              console.log(formateddob);
              

              document.getElementById("birthdayedit").value = formateddob;


        var radio=document.getElementsByName('genderedit')
        const userradio=data.gender
        for(var i=0 ; i < radio.length ; i++){
            if(radio[i].value === userradio){
                radio[i].checked=true;
            }
        }

              
            
              document.getElementsByName("genderedit").value=data.savegender;
             

            document.getElementById("Qualificationsedit").value=data.qualifications;
            document.getElementById("Usernameedit").value=data.username;
             document.getElementById("inputPasswordedit").value=data.password5;
             console.log()
            document.getElementById("Addressedit").value=data.address;
            document.getElementById("countryidedit").value=data.country;
            document.getElementById("inputStateedit").value=data.state;
            document.getElementById("cityidedit").value=data.city;
            document.getElementById("inputpinzipedit").value=data.pinzip;
       })
        
       var editform=document.getElementById("conform_edit_emp")
       editform.addEventListener('click',(e)=>{
        
         e.preventDefault();

         editvalidateForm()
         var birthday = document.getElementById('birthdayedit').value;
         var dob = changeformat(birthday);
        
            function changeformat(val){
             const dobstore = val.split("-");
               let year = dobstore[0];
               let month = dobstore[1];
               let day = dobstore[2];
               let formattebirthday = day + "-" + month + "-" + year;
               return formattebirthday;
            }
             console.log(dob)
             
        
     
  
  
       var editemp = {
  
        salutation:document.getElementById("Salutationedit").value,
        firstName:document.getElementById("fnameedit").value,
        lastName:document.getElementById("lnameedit").value,
        email:document.getElementById("emailedit").value,
        phone:document.getElementById("mobileedit").value,
         dob:dob,
         gender: document.querySelector('input[name="genderedit"]:checked').value,
        qualifications:document.getElementById("Qualificationsedit").value,
        username:document.getElementById("Usernameedit").value,
        password:document.getElementById("inputPasswordedit").value,
        address:document.getElementById("Addressedit").value,
        country:document.getElementById("countryidedit").value,
        state:document.getElementById("inputStateedit").value,
        city:document.getElementById("cityidedit").value,
        pinzip:document.getElementById("inputpinzipedit").value,
       } 
       console.log(editemp);
       
       
     fetch(`http://localhost:3000/employees/${id}`,{
      method:"PUT",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify(editemp)
      
  })
  editsucess()

//   try {

//     // Use await to wait for the fetch request to complete
//     const response = await fetch(`http://localhost:3000/employees/${id}`, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json',
//         },
//         body: JSON.stringify(editemp),
//     });
//     const fileUpload = document.getElementById("file-input-EDIT");
    
//     const formData = new FormData();
    
//     formData.append("avatars", fileUpload.files[0]);
    
//     console.log(id,"idddd");
//     alert(id)
//     fetch(`http://localhost:3000/employees/${id}/avatars`, {
//         method: 'POST',
//         body: formData,
//     })
    
//     // edit employee update image 


//     if (!response.ok) {
//         throw new Error('Error updating employee data');
//     }


//     const data = await response.json();
    
//     console.log(data);
//     alert( data,"jhdhfh")
   

// }
// catch (error) {
//     console.error(error);
// }

     });
  
     
}


function editimage() {
  document.getElementById('file-input-EDIT').click();
}

document.getElementById('file-input-EDIT').addEventListener('change', function () {
  const fileInput = this;
  const imgElement = document.getElementById('view-img-section');

  // Check if a file is selected
  if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      // Set up a callback function to run when the image is loaded
      reader.onload = function (e) {
          imgElement.src = e.target.result;
      };

      // Read the selected image file as a data URL and display it
      reader.readAsDataURL(fileInput.files[0]);
  }
});
