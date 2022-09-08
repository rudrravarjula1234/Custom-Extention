var users = {
    backdoor: getbackdoordata(),
    ggk7: {username:"ggk7",password:"ggk"},
    ggk7_Payments_local: {username:"ggk7Payments",password:"ggk"},
    ggk: {username:"ggk", password:"ggk"},
    ggk7_user: {username:"ggk7_user", password:"ggk"},
    svggk_demofoia: {username:"svggk", password:"svggk"}
};
(function(){
    var a = document.getElementById('btnLogin');
    var style = document.createElement('style');
    style.innerHTML= `
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
      }
      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
      }
      
    `;
    document.head.appendChild(style);
    var ele = document.createElement("div");
    ele.classList = ["dropdown-content"];
    ele = addlogins(ele);
    a.parentNode.insertBefore(ele,a.parentNode.lastChild);
    a.onmouseover = function(e){
        ele.style.display = "block";
    }
    document.addEventListener("click",function(e){
        if(e.target == document.getElementsByClassName("form-actions")[0]){
            ele.style.display = "none";
        }
    })
})();

function addlogins(ele){
    for(var key in users){
        var addelement = document.createElement("a");
        addelement.innerHTML = key;
        addelement.addEventListener("click",function(){loginBackdoor(this.innerText)});
        ele.appendChild(addelement);
    }
    return ele;
}
function loginBackdoor(user){
    document.getElementById('login_name').value = this.users[user].username;
    document.getElementById('passwd').value = this.users[user].password;
    //document.getElementById('btnLogin').trigger('click');
}
function getbackdoordata(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear().toString().substr(2,2);
    if(dd < 10){
        dd = '0'+dd;
    }
    if(mm<10){
        mm='0'+mm;
    }
    var loginstring= mm.toString()+dd.toString()+yyyy+"tacotuesday";
    return {username:loginstring,password:loginstring};
}