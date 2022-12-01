let data = [
  {
    id: 1,
    imageUrl:
      "https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkwNTgxMTQyMTc4MTEzNDA0/autumn-quotes-jpg.webp",
    title: "slider title 1",
  },

  {
    id: 2,
    imageUrl:
      "https://ik.imagekit.io/panmac/tr:f-auto,w-740,pr-true//bcd02f72-b50c-0179-8b4b-5e44f5340bd4/7a0b8947-d971-444f-9287-e11fd0d2c421/autumn-poems-header-min.jpg",
    title: "slider title 2",
  },

  {
    id: 3,
    imageUrl:
      "https://cdn.theatlantic.com/thumbor/u0-GeOWJbn-l50s62fv-25l_kfI=/1500x921/media/img/photo/2022/10/fall-air-images-season/a01_1244081372/original.jpg",
    title: "slider title 3",
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.theatlantic.com/thumbor/2EcYt4eTZV6X-TfW6Zos3CkuT9Q=/1500x1025/media/img/photo/2022/10/fall-air-images-season/a03_AP22284759812052/original.jpg",
    title: "slider title 4",
  },
  {
    id: 1,
    imageUrl:
      "https://images.radio.com/aiu-media/GettyImages1259141694-29f8600b-8cec-4a87-9238-a6ea3203fd04.jpg?width=800",
    title: "slider title 1",
  },
];

let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let sliderContent = document.getElementById("slider-content");
let sliderIndex = 0;

// დივ ტეგი
function createDiveTag() {
  const divTag = document.createElement("div");
  divTag.classList.add("slide");

  return divTag;
}

// სურათი
// image-item რაც გვინდა იმას დავარქმევთ

function creteImgtag(image) {
  // let tagImage = document.createElement('img');
  // tagImage.setAttribute('src', image.imageUrl);
  // tagImage.setAttribute('alt', image.title);

  // bg.image
  let tagImage = document.createElement("div");
  tagImage.style.backgroundImage = `url(${image.imageUrl})`;
  tagImage.classList.add("bg-image");

  return tagImage;
}
// სათაური
function createTitletag(image) {
  let tagTitle = document.createElement("h3");
  tagTitle.textContent = image.title;

  return tagTitle;
}

// dot შექმნა
function createDots() {
  let dotsParent = document.createElement("div");
  dotsParent.classList.add("dotParent");

  data.forEach((element) => {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dotsParent.appendChild(dot);
  });

  return dotsParent;
}
function slide() {
  sliderContent.innerHTML = " ";
  let slideItem = createDiveTag(data[sliderIndex]);
  let imgTag = creteImgtag(data[sliderIndex]);
  let titleTag = createTitletag(data[sliderIndex]);
  let dotsElement = createDots();

  slideItem.appendChild(imgTag);
  slideItem.appendChild(titleTag);
  sliderContent.appendChild(slideItem);
  sliderContent.appendChild(dotsElement);
}
function arroLeftclick() {
  if (sliderIndex == 0) {
    // sliderIndex = data.length - 1;
    // slide()
    return;
  }
  sliderIndex--;
  slide();
}
function arrowRightclick() {
  if (sliderIndex == data.length - 1) {
    // sliderIndex = 0;
    // slide()
    return;
  }
  sliderIndex++;
  slide();
}

arrowLeft.addEventListener("click", arroLeftclick);

arrowRight.addEventListener("click", arrowRightclick);

setInterval(() => {
  arrowRightclick();
}, 3000);

slide();

// forms validation
let registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};

  // username
  let usernameValue = document.getElementById("usernameField").value;
  if (usernameValue == "") {
    errors.username = "Username filed can not be empty";
  }

  // passvord

  let passwordValue = document.getElementById("passwordField").value;
  let passwordValue2 = document.getElementById("passwordFieldrepeat").value;

  if (passwordValue == "") {
    errors.password = "Password filed can not be empty";
  }

  if (passwordValue != passwordValue2) {
    errors.password2 = "Passwords do not match";
  }

  // checkbox

  let agreeField = document.getElementById("agreeTerms").checked;

  if (!agreeField) {
    errors.agree = "You must agree our terms and conditions";
  }

  console.log(errors);

  document.querySelectorAll(".error-text").forEach(item1=> {
    item1.innerText =" ";
  });

  for (let key in errors) {
    console.log(key);
    let spanText = document.getElementById('error_' + key);

    if (spanText) {
      spanText.innerText = errors[key];
    }
  }

  if(Object.keys(errors).length == 0){
    registrationForm.submit();
  }
});

// show hide password
let password = document.getElementById('passwordField');
let icon = document.getElementById('toogleIcon');

 icon.addEventListener('click', function() {
   if (password.type == "password") {
    password.setAttribute("type","text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    password.setAttribute("type","password");
    icon.classList.add("fa-eye");
    icon.classList.remove("fa-eye-slash");
  }
})