const containerBoxGift =
  document.getElementsByClassName("container_box-gift")[0];
const boxMerry = document.getElementsByClassName("box-merry")[0];
const formLogin = document.getElementsByClassName("form-login")[0];
const boxCircle = document.getElementsByClassName("box-circle")[0];
const btnLoginSubmit = document.getElementsByClassName("btn-login-submit")[0];
const boxError = document.getElementsByClassName("box-error")[0];
const userName = document.getElementById("username");
const passWord = document.getElementById("password");
console.log(containerBoxGift, boxCircle);
console.log(boxMerry, formLogin);
const resultLogin = [
  {
    name: "thanh loan",
    password: "15012003",
  },
];
//check data login
btnLoginSubmit.addEventListener("click", () => {
  let result = resultLogin.some((item) => {
    return item.name === userName.value && item.password === passWord.value;
  });
  if (!result) {
    boxError.classList.add("d-block");
    boxError.insertAdjacentText("afterbegin", "Lỗi thông tin đăng nhập");
    btnLoginSubmit.disabled = true;
    let i = setTimeout(() => {
      boxError.classList.remove("d-block");
      boxError.innerHTML = "";
      btnLoginSubmit.disabled = false;
    }, 3000);
  } else {
    boxCircle.classList.add("d-none");
    boxMerry.classList.add("d-block");
    let i = setTimeout(() => {
      boxMerry.classList.remove("d-block");
      containerBoxGift.classList.add("d-block");
    }, 8000);
  }
});
