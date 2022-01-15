
function Show(){
  full_name=document.getElementById("full_name").value;
  id=document.getElementById("id").value;
  email=document.getElementById("email").value;
  comment=document.getElementById("comment").value;

    firebase.database().ref('users/'+id).set({
        full_name:full_name,
        id: id,
        email:email,
        comment: comment
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
  
    //retrieve data
    //var users=document.getElementById("users").value;
  
