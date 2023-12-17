const btnSignUp = document.querySelector(".btn-signup");
const inputNameSelector = document.querySelector(".name");
const inputEmailSelector = document.querySelector(".email")
const inputPassWord  = document.querySelector(".password")
const inputConfirmPass =document.querySelector(".confirm_password")

// btnSignUp.addEventListener('click',handleSignClick())

// function handleSignClick()
// {
//     event.preventDefault();
//     console("hellp")

// }
// btnSignUp.addEventListener('click',handleSignClick())

// Viet code theo Arrow Function syntax

// btnSignUp.addEventListener("click", () => {
//   event.preventDefault();

//   let inputValueName = inputNameSelector.value;
 
//   let errorNameSelector = inputNameSelector
//     .closest('.form-group')
//     .querySelector('.error_message');
//     if (inputValueName === "")
//     {
//       inputNameSelector.classList.add('error');
//       errorNameSelector.textContent="Ten Khong Duoc Bo Trong"
//     }
//     else
//     {
//       inputNameSelector.classList.remove('error')
//       errorNameSelector.textContent=""

//     }
// });

// //option 2
btnSignUp.addEventListener("click", (event) => handleSignClick(event)); // Pass 'event' as argument

function handleSignClick(event) {
  event.preventDefault();

  let inputValueName = inputNameSelector.value;
 
  let errorNameSelector = inputNameSelector
    .closest('.form-group')
    .querySelector('.error_message');
    if (inputValueName === "")
    {
      inputNameSelector.classList.add('error');
      errorNameSelector.textContent="Ten Khong Duoc Bo Trong"
    }
    else
    {
      inputNameSelector.classList.remove('error')
      errorNameSelector.textContent=""

    }


    let inputEmail = inputEmailSelector.value
    let errorEmailSelector = inputEmailSelector.closest('.form-group').querySelector('.error_message')
  
    if (inputEmail === "")
    {
      inputEmailSelector.classList.add('error');
  errorEmailSelector.textContent="THieu Emial"
    }
    else
    {
      inputEmailSelector.classList.remove('error')
      errorEmailSelector.textContent=""

    }
}
