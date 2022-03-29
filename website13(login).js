function validatename(){
    let name=document.getElementById('name').value;
    let block=document.getElementById('myname');
    if(name.length==0)
    {document.getElementById('idout').innerHTML="Please Enter Your Name";
     document.getElementById('idout').style.color=("red")
     block.style.color='red'}
    else
    {document.getElementById('idout').innerHTML="";
     block.classList.remove('red');
     block.style.color='green'}
}
function validatepwd(){
    let password=document.getElementById('pwd').value;
    
    if(password.length==0)
    {document.getElementById('pwdout').innerHTML="Please Enter password";
     document.getElementById('pwdout').style.color=("red");
    }
    else if(password.length<4)
    {document.getElementById('pwdout').innerHTML="Password strength is POOR!";
     document.getElementById('pwdout').style.color="red";
     mypwd.style.color="green"}
    else if(password.length<10)
    {document.getElementById('pwdout').innerHTML="Password strength is AVERAGE";
     document.getElementById('pwdout').style.color='orange'}

    else
    {document.getElementById('pwdout').innerHTML="Password strength is GOOD";
    document.getElementById('pwdout').style.color='green'}

}

function showpwd(){
    pwd=document.getElementById('pwd');
 if(pwd.type=='password'){
     pwd.type="text"
 }
 else
 {pwd.type=`password`}
}
function go(){
    let block=document.getElementById('myname');
    if(block.style.color =="green" && pwdout.style.color=="green" || pwdout.style.color=="orange" || pwdout.style.color=="red" ){
        window.location.href='website13.html';
    }
    else{
        window.location.href='#'
    }
}
