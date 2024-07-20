const my_result = document.querySelector('#output')
const randomNumber= Math.floor(Math.random() * 100 )
const form = document.querySelector('#form')
const userInput = document.querySelector('#input')
// const btn = document.querySelector('btn')

form.addEventListener('submit', function(e){
    //stop form from submitting by it self
    e.preventDefault();

const uservalue = parseInt(userInput.value)

if(uservalue == randomNumber){
  my_result.innerHTML = `Congratulations! You guessed the correct number.`
  //my_result.innerHTML = `Congratulations! You guessed the correct number.  ${randomNumber}`
  my_result.style.color = "green";
}else if(uservalue > randomNumber){
  my_result.innerHTML = `Sorry, your guess was too high. The correct number is downward.`;   
  //my_result.innerHTML = `Sorry, your guess was too high. The correct number was ${randomNumber}.`;   
  my_result.style.color = "red";
}else if(uservalue < randomNumber){
  my_result.innerHTML = `Sorry, your guess was too low. The correct number is upward.`;
  //my_result.innerHTML = `Sorry, your guess was too low. The correct number was ${randomNumber}.`;
  my_result.style.color = "red";
}

userInput.value = ''
})

console.log()