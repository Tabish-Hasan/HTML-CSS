function first ()  
{
    var code = document.getElementById("code").value;
    var result_box = document.getElementById("result");
    result_box.innerHTML = code;  
    var code_box = document.getElementById("code_box"); 
    code_box.style.display = "none"; 
    var result_box = document.getElementById("result_box");
    result_box.style.display = "block"; 
    result_box.setAttribute("class","animate__animated animate__slideInRight");  
    var btn = document.getElementById("run_btn");
    btn.style.display = "none"; 
    var b_btn = document.getElementById("icon"); 
    b_btn.style.display = "block"; 
}

function second ()
{
    var result_box = document.getElementById("result_box");
    result_box.style.display = "none";
    var code_box = document.getElementById("code_box");
    code_box.style.display = "block";
    code_box.setAttribute("class","animate__animated animate__slideInLeft");
    var b_btn = document.getElementById("icon");
    b_btn.style.display = "none"; 
    var btn = document.getElementById("run_btn");
    btn.style.display = "block"; 
}


