
let data = [
  {
    id: 1,
    imageUrl:
      "https://futbol4life.com/wp-content/uploads/2021/03/7-ngo-help-children-intro-750x330.jpg",
    title: "children",
  },
  {
    id: 2,
    imageUrl:
      "https://images.news18.com/ibnlive/uploads/2022/06/children-day-16549327443x2.jpg?impolicy=website&width=510&height=356",
    title: "children 2",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/psychlopaedia/image/upload/w_1200,h_500,c_fill,g_face/q_40/remote/2016/09/89506247_children-lying-in-circle-on-grass_web.jpg",
    title: "children 3",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "children 4",
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
