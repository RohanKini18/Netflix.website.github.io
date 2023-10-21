function validateform(){  
    var nam=document.myform.email.value;  
     
      
    if (nam==null || nam==""){  
      alert("Email can't be blank") 
      return false;  
    }else if(nam=='nnm22cs187@nmamit.in'){       //T Rohan Kini
        alert("Loading......✔️✔️✔️");
        window.location.assign("login.html");      //next page after login   //pending
    }else if(nam=='nnm22cs178@nmamit.in'){       //T Rohan Kini
        alert("Loading...✔️✔️✔️")
        window.location.assign("#.html");       //next page after login   //pending
    }
    else
    {
        alert("❌Invalid Email❌")
        return false;
    } 
    } 