otp = () =>
{
  let digits = "0123456789";
  let OTP = "";
  for(let i = 0; i < 4; i++){
    OTP = OTP + digits[Math.floor(Math.random()*10)]
  }

  document.querySelector("#showotp").innerHTML = OTP;
}