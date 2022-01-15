
function Read(){
    full_name=document.getElementById("full_name").value;
    email=document.getElementById("email").value;
    subject=document.getElementById("subject").value;
    msg=document.getElementById("msg").value;
  
      firebase.database().ref('users/'+full_name).set({
          name:full_name,
          email:email,
          subject:subject,
          message: msg
        }, function(error){
              if(error){
                //the value failed
                alert("the value failed");
              }
              else{
                  alert("Hoiseee🥳!");
              }
              
          
      });
   
  }
  