//Check if inputs is empty
let btn_register = document.querySelector(".btn_register");
let btn_Login = document.querySelector(".btn_Login");
let logOutBtn = document.querySelector(".logOutBtn");
let nameInput = document.querySelector(".nameInput");
let emailInput = document.querySelector(".emailInput");
let passwordInput = document.querySelector(".passwordInput");
let content = document.querySelectorAll(".content");
let UsersData;

//check if local storage empty or not
if (localStorage.getItem("MyProducts") == null) {
  UsersData = [];
} else {
  UsersData = JSON.parse(localStorage.getItem("userData"));
}

//pages name
for (let i = 0; i < content.length; i++) {
  if (content[i].classList.contains("register")) {
    btn_register.addEventListener("click", function () {
      let userForm = {
        userName: nameInput.value,
        userPass: passwordInput.value,
        userEmail: emailInput.value,
      };
      let { userName, userPass, userEmail } = userForm;

      if (userName == "" || userPass == "" || userEmail == "") {
        document.querySelector(".registerError").innerHTML =
          "All inputs is required";
      } else {
        let checker = UsersData.find(
          (obj) => obj.userEmail === emailInput.value
        );
        if (checker) {
          document.querySelector(".registerError").innerHTML =
            "Pleaze choose anther Email";
        } else if (!checker) {
          UsersData.push(userForm);
          localStorage.setItem("userData", JSON.stringify(UsersData));
          document.querySelector(".registerError").innerHTML = "";
          window.location.href = "index.html";
        }
      }
    });
  } else if (content[i].classList.contains("login")) {
    btn_Login.addEventListener("click", function () {
      if (emailInput.value == "" || passwordInput.value == "") {
        document.querySelector(".registerError").innerHTML =
          "All inputs is required";
      } else {
        let objectr = UsersData.find(
          (obj) =>
            obj.userEmail === emailInput.value &&
            obj.userPass === passwordInput.value
        );
        console.log("result is ", objectr);
        if (objectr) {
          window.location.href = "home.html";
        } else if (!objectr) {
          document.querySelector(".registerError").innerHTML =
            "your data  ara invalid";
        }
      }
    });
  } else if (content[i].classList.contains("home")) {
    logOutBtn.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
}
