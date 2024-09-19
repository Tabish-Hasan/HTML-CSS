/* Start Coding For Sign-Up... */
let signup_frm = document.getElementById("signup_frm");

signup_frm.onsubmit = function()
{
  let user = btoa(document.getElementById("username").value);
  let phone = btoa(document.getElementById("phone").value);
  let email = btoa(document.getElementById("email").value);
  let pass = btoa(document.getElementById("password").value);

  let user_object_data = 
  {
    username:user,
    phone:phone,
    email:email,
    password:pass,
  };

  let user_text_data = JSON.stringify(user_object_data); 

  if(user != "" && phone != "" && email != "" && pass != "")
  {
    localStorage.setItem(email,user_text_data);
    let signup_btn = document.getElementById("signup_btn");
    signup_btn.style.background = "#14b129";
    signup_btn.innerHTML = "<i class='fa-solid fa-circle-check'></i> sign-Up Successful !";

    setTimeout(function()
    {
      signup_btn.style.background = "linear-gradient(to right, #240b36, #c31432)";
      signup_btn.innerHTML = "Sign-Up";
      signup_frm.reset();
      window.location = "index.html";
    },3000);
    return false;
  }
}

/* Start Coding For Email Validation... */ 
  let email_input = document.getElementById("email");
  email_input.onchange = function()
{
  let email = btoa(document.getElementById("email").value);
  let warning = document.getElementById("email_notice");
  let signup_btn = document.getElementById("signup_btn");
  if(localStorage.getItem(email) != null)
  {
    warning.style.display = "block";
    email_input.style.borderBottomColor = "red";
    signup_btn.disabled = true; 
    signup_btn.style.background = "#ccc";

    email_input.onclick = function()
    {
      email_input.value = "";
      email_input.style.borderBottomColor = "#ccc";
      warning.style.display = "none";
      signup_btn.disabled = false;
      signup_btn.style.background = "linear-gradient(to right, #240b36, #c31432)";
    }
  }
}

/* Start Coding For Login... */ 
let login_frm = document.getElementById("login_frm");

login_frm.onsubmit = function()
{
  let email = document.getElementById("login_email");
  let password = document.getElementById("login_password");
  let login_email_war = document.getElementById("login_email_warning");
  let login_password_war = document.getElementById("login_password_warning");

  if (localStorage.getItem(btoa(email.value)) == null)
  {
    login_email_war.style.display = "block";
    email.style.borderBottomColor = "red";
    
    email.onclick = function ()
    {
      email.value = "";
      login_email_war.style.display = "none";
      email.style.borderBottomColor = "#ccc";
    }
  }
  else
  {
    let text_data = localStorage.getItem(btoa(email.value));
    let obj_data = JSON.parse(text_data);
    let correct_email = obj_data.email;
    let correct_password = obj_data.password;

    if(btoa(email.value) == correct_email)
    {
      if(btoa(password.value) == correct_password)
      {
        sessionStorage.setItem("user",btoa(email.value));
        window.location.replace("profile/profile.html");
      }
      else
      {
        login_password_war.style.display = "block";
        password.style.borderBottomColor = "red";
    
        password.onclick = function ()
    {
        password.value = "";
        login_password_war.style.display = "none";
        password.style.borderBottomColor = "#ccc";
    }
      }
    }
  }
  return false;
}