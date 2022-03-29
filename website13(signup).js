function validatefname(){
    let firstname=document.getElementById('fname').value;
    if(firstname.trim().length==0){
        document.getElementById('fout').innerHTML="please Enter Your First Name";
        document.getElementById("fout").style.color="red";
        document.getElementById('f').style.color="red"
    }
    else
    {document.getElementById('fout').innerHTML="";
     document.getElementById('fout').style.color="green"
     document.getElementById('f').style.color="green"
    }    
}

function validatelname(){
    let lastname=document.getElementById('lname').value;
    if(lastname.trim().length==0){
        document.getElementById("lout").innerHTML="Please Enter Your Last Name";
        document.getElementById("lout").style.color="red";
        
    }
    else
    {document.getElementById("lout").innerHTML="";
     document.getElementById("lout").style.color="green"
     
    }
}

function validatenumber(){
    let m=document.getElementById('mob').value;

    if(m.trim().length==0)
    {document.getElementById('mout').innerHTML="please Enter Mobile Number"
     document.getElementById('mout').style.color="red"
     document.getElementById("mobile").style.color="red"}
     else
      {if(m.match("^[0-9]$")==null)
          {document.getElementById('mout').innerHTML="please Enter a Valid Mobile Number"
           document.getElementById('mout').style.color="red"
           document.getElementById("mobile").style.color="red"}
        else
     {document.getElementById('mout').innerHTML="";
      document.getElementById("mout").style.color="green";
      document.getElementById("mobile").style.color="green"}
}
}

function email(){
    let e=document.getElementById('e').value;
    if(e.trim().length==0 || e.length>10)
    {document.getElementById("eout").innerHTML="Please Enter Your Email";
     document.getElementById("eout").style.color="red";
     document.getElementById("email").style.color="red";}
     else
     {if(e.match("^[0-9,A-Z,a-z]$")==null)
      {document.getElementById("eout").innerHTML="Please Enter a Valid Email";
       document.getElementById("eout").style.color="red";
       document.getElementById("email").style.color="red"}
       else
       {document.getElementById("eout").innerHTML="";
        document.getElementById("eout").style.color="green"
        document.getElementById("email").style.color="green"}
     }
}

showpwd=() =>{
    let pwd=document.getElementById('pwd');
    if(pwd.type==`password`)
      {pwd.type=`text`}
    else
    {pwd.type=`password`}
  
  }

function validatecpwd(){
    let confirmpassword=document.getElementById('cpwd').value;
    let password=document.getElementById('pwd').value;
    if(password !== confirmpassword)
    {document.getElementById("cpout").innerHTML="Password do not match";
     document.getElementById("cpout").style.color="red";}
    else
    {document.getElementById("cpout").innerHTML="";
     document.getElementById("cpout").style.color="green";}
}

function gofurther(){
    let firstname=document.getElementById('fname').value;
    let lastname=document.getElementById('lname').value;
    let m=document.getElementById('mob').value;
    let confirmpassword=document.getElementById('cpwd').value;
    let password=document.getElementById('pwd').value;
    if(firstname.trim().length==0 || lastname.trim().length==0 || m.trim().length==0 || m.match("^[0-9]$")==null || password !== confirmpassword)
    {window.location.href="http://127.0.0.1:5501/website13(signup).html"}
    else
    {window.location.href="http://127.0.0.1:5501/website13.html"}


}