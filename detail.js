let params = new URLSearchParams(document.location.search);
 let id = params.get("id");
 console.log(id);

function  detailsEmployee(id) {
    fetch(`http://localhost:3000/employees/${id}`,{
        method:"GET",
    })
     .then(res => res.json())
     .then(employee => { 
              console.log(employee);

        const employeeDetails = document.getElementById('empolyesheet');

        employeeDetails .innerHTML =
         `
         <div class="image">
         <img src="photo/img10.png" alt="">
         <div class="sub_img">
         <img src="http://localhost:3000/employees/${employee.id}/avatar" alt="">
         </div>
        </div>
        <div class="text text-center">
                <h3>${employee.firstName}</h3>
                 <h6>${employee.email}</h6>       
         </div>

         <div class="detiles">
         <div class="row">
           <div class="col">
             <h6>Gender</h6>
             <h5>${employee.gender}</h5>
         </div>
         <div class="col">
           <h6>Age</h6>
           <h5>38</h5>
       </div>
       <div class="col">
         <h6>Date of Birth</h6>
        <h5>${employee.dob}</h5>
     </div>
           </div>
           <div class="row">
            <div class="col">
              <h6>Mobile Number</h6>
               <h5>${employee.phone}</h5>
             </div>
             <div class="col">
               <h6>Qualifications</h6>
              <h5>${employee.qualifications}</h5>
            </div>
          </div>
          <div class="row">
             <div class="col">
               <h6>Address</h6>
               <h5>${employee.address}</h5>
             </div>
           <div class="col">
              <h6>Username</h6>
               <h5>${employee.username}</h5>
             </div>
          </div>
         
         </div>
         <div class="submit_btn mt-4">
                <button type="button" class="btn-btn bg-danger">Delete</button>
                <button type="button" class="btn-btn bg-primary">Edit Details</button>
              </div> 

        `
        

          
     })
}

 detailsEmployee(id); 
