const btnSignUp = document.querySelector(".btn-signup");
const inputNameSelector = document.querySelector(".name");

// btnSignUp.addEventListener('click',handleSignClick())

// function handleSignClick()
// {
//     event.preventDefault();
//     console("hellp")

// }
// btnSignUp.addEventListener('click',handleSignClick())

// Viet code theo Arrow Function syntax

btnSignUp.addEventListener("click", () => {
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
});

// //option 2
// btnSignUp.addEventListener("click", (event) => handleSignClick(event)); // Pass 'event' as argument

// function handleSignClick(event) {
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

    
// }
