/*-- Author: Rodney Milburn
    Webpage: Dad Jokes */

const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()


 USING .then()
 function generateJoke() {
  const config = {
    headers: {Accept: 'application/json',},
  }

  fetch('https://icanhazdadjoke.com', config)  /* location of jokes API */
     .then((res) => res.json())
    .then((data) => {jokeEl.innerHTML = data.joke})
 }

