const containerBoxGift =
  document.getElementsByClassName("container_box-gift")[0];
const boxMerry = document.getElementsByClassName("box-merry")[0];
const formLogin = document.getElementsByClassName("form-login")[0];
const boxCircle = document.getElementsByClassName("box-circle")[0];
const btnLoginSubmit = document.getElementsByClassName("btn-login-submit")[0];
const boxError = document.getElementsByClassName("box-error")[0];
const userName = document.getElementById("username");
const passWord = document.getElementById("password");

const resultLogin = [
  {
    name: "thanh loan",
    password: "15012003",
  },
];
//check data login
btnLoginSubmit.addEventListener("click", () => {
  let result = resultLogin.some((item) => {
    return (
      item.name === userName.value.trim().toLocaleLowerCase() &&
      item.password === passWord.value.trim()
    );
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
const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2"),
};

const texts = ["Em", "là", "bông hoa", "xinh đẹp", "nhất", "của anh"];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }

    doMorph();
  } else {
    doCooldown();
  }
}

animate();
