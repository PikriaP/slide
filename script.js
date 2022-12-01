
let data = [
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?cs=srgb&dl=pexels-pixabay-268941.jpg&fm=jpg",
    title: "slider title 1",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1528465424850-54d22f092f9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80",
    title: "slider title 2",
  },
  {
    id: 3,
    imageUrl:
      "https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?cs=srgb&dl=pexels-pixabay-268941.jpg&fm=jpg",
    title: "slider title 3",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1528465424850-54d22f092f9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80",
    title: "slider title 4",
  },
];

let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let sliderCOntent = document.getElementById("slider-content");
let sliderIndex = 0;



function createDivTag() {
  let divTag = document.createElement("div");
  divTag.classList.add("slide");

  return divTag;
}

function createImgTag(item) {
    let tagImage = document.createElement("img");
    tagImage.setAttribute("src", item.imageUrl);
    tagImage.setAttribute("alt", item.title);

  return tagImage;
}


function createTitleTag(item) {
  let tagTitle = document.createElement("h3");
  tagTitle.textContent = item.title;

  return tagTitle;
}


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
  sliderCOntent.innerHTML = " ";
  const slideItem = createDivTag(data[sliderIndex]);
  const imgTag = createImgTag(data[sliderIndex]);
  const titleTag = createTitleTag(data[sliderIndex]);
  const dotsElement = createDots();

  slideItem.appendChild(imgTag);
  slideItem.appendChild(titleTag);
  sliderCOntent.appendChild(slideItem);
  sliderCOntent.appendChild(dotsElement);
}

function arrowLeftClick() {
  if (sliderIndex == 0) {
    sliderIndex = data.length - 1;
    slide();
    return;
  }
  sliderIndex--;
  slide();
}

function arrowRightClick() {
  if (sliderIndex == data.length - 1) {
    sliderIndex = 0;
    slide();
    return;
  }
  sliderIndex++;
  slide();
}

arrowLeft.addEventListener("click", arrowLeftClick);
arrowRight.addEventListener("click", arrowRightClick);

// setInterval(() => {
//   arrowRightClick();
// }, 3000);

slide();



//form validation
let registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};

  //username
  let usernameValue = document.getElementById("usernameField").value;
  if (usernameValue == "" && usernameValue.length < 5) {
    errors.username =
      "Username field can not be empty and must be more then 5 chaarcters";
  }

  //password
  let passwordValue = document.getElementById("passwordField").value;
  let passwordValue2 = document.getElementById("passwordFieldrepeat").value;

  if (passwordValue == "") {
    errors.password = "Password field can not be empty";
  }
  if (passwordValue != passwordValue2) {
    errors.password2 = "Passwords do not match";
  }

  //checkbox
  let agreeField = document.getElementById("agreeTerms").checked;

  if (!agreeField) {
    errors.agree = "You must egree our terms and contiions";
  }

  console.log(errors);

  document.querySelectorAll(".error-text").forEach((item) => {
    item.innerText = " ";
  });

  for (let key in errors) {
    let spanText = document.getElementById("error_" + key);

    if (spanText) {
      spanText.innerText = errors[key];
    }
  }

  if (Object.keys(errors).length == 0) {
    registrationForm.submit();
  }
});

//show hide password
let password = document.getElementById("passwordField");
let icon = document.getElementById("Icon");

icon.addEventListener("click", function () {
  if (password.type == "password") { 
    password.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    password.setAttribute("type", "password");
    icon.classList.add("fa-eye");
    icon.classList.remove("fa-eye-slash");
  }
});
