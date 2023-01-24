'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/



let nickNameEl = document.getElementById('nickname');
nickNameEl.textContent = 'Dodi';

let favFoodEl = document.getElementById('fav-food');
favFoodEl.textContent = 'Cag kebap';

let homeTownEl = document.getElementById('hometown');
homeTownEl.textContent = 'Antalya';

let liEls = document.querySelectorAll('li');
liEls.forEach(item => {
  item.className = 'list-item';
})