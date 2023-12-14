const btnSignUp=document.querySelector('.btn-signup')

// btnSignUp.addEventListener('click',handleSignClick())

// function handleSignClick()
// {
//     event.preventDefault();
//     console("hellp")

// }
// btnSignUp.addEventListener('click',handleSignClick())

// Viet code theo Arrow Function syntax

btnSignUp.addEventListener('click', () => {
    event.preventDefault();
    console.log("hello");
  });




//option 2 
btnSignUp.addEventListener('click', (event) => handleSignClick(event)); // Pass 'event' as argument

function handleSignClick(event) {
  event.preventDefault();
  console.log("hello");
}
