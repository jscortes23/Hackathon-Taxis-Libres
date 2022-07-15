const sendBtn = document.querySelector('input[type="submit"]');
const form = document.getElementById("form");
const inputs = document.querySelectorAll(".start--container__form input");
const acordeon = document.getElementsByClassName('topic');

const statesField = {
  firstName: false,
  lastName: false,
  birthDate: false,
  email: false,
  country: false,
  city: false,
  phone: false,
  levelStudy: false
}

/* Acordeon */
for (i=0; i<acordeon.length; i++ ){
  acordeon[i].addEventListener('click',function(){
    this.classList.toggle('active');
  })
};

const validateForm = (e) => {
  validateField(e.target, e.target.name);
};

const validateField = (input, field) => {
  if (input.value.length > 3 && input.value !== "Enviar") {
    // let group = document.querySelector(`#group__${field} .form__input`).classList.contains("form__input--invalid")
      document
        .querySelector(`#group__${field} .form__input`)
        .classList.remove("form__input--invalid");
      document
        .querySelector(`#group__${field} .form__alert`)
        .classList.remove("form__alert--active");
      statesField[field] = true;
  } else {
    document
      .querySelector(`#group__${field} .form__input`)
      .classList.add("form__input--invalid");
    document
      .querySelector(`#group__${field} .form__alert`)
      .classList.add("form__alert--active");
    statesField[field] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validateForm);
  input.addEventListener("blur", validateForm);
});

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  if (statesField.birthDate && statesField.city && statesField.country && statesField.email && statesField.firstName && statesField.lastName && statesField.levelStudy && statesField.phone) {
    form.reset();
    
    document.querySelector('.form__success').style.display="block";
    setTimeout(() => {
      document.querySelector('.form__success').style.display="none";
    }, 3000);
  }
});

