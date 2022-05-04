import { card } from "../components/card.js";
import { referenceList } from "../data/reference.js";
import { renderToDom } from "../utils/renderToDom.js";

console.log("Project Sorting Hat");

// Reusable function to get the cards on the DOM
// .forEach()
const renderCards = (array) => {
  let referenceItems = "";
  array.forEach((item) => {
    referenceItems += card(item);
  });
  renderToDom("#cards", referenceItems);
}


// BUTTON FILTER
// .filter() & .reduce() &.sort() - chaining
const filterButtons = (event) => {
  if(event.target.id.includes('all')) {
    renderCards(referenceList);
    console.log("sfhsdjkdfhskfhjkdsfhjksdfhksjdafhksdf");
  }
  if(event.target.id.includes('gryffindor')) {
    const gryffindor = referenceList.filter(item => item.house.toLowerCase() === 'gryffindor');
    renderCards(gryffindor);
  }
  if(event.target.id.includes('hufflepuff')) {
    const hufflepuff = referenceList.filter(item => item.house.toLowerCase() === 'hufflepuff');
    renderCards(hufflepuff);
  }
  if(event.target.id.includes('ravenclaw')) {
    const ravenclaw = referenceList.filter(item => item.house.toLowerCase() === 'ravenclaw');
    renderCards(ravenclaw);
  }
  if(event.target.id.includes('slytherin')) {
    const slytherin = referenceList.filter(item => item.house.toLowerCase() === 'slytherin');
    renderCards(slytherin);
  }
  if(event.target.id.includes('clearFilter')) {
    renderCards(referenceList);
  }
  
}



// ******* SAVE FOR CONNECTING IT ALL TOGETHER ******
const startApp = () => {
  // PUT ALL CARDS ON THE DOM
  renderCards(referenceList)

  // SELECT THE SEARCH INPUT
  document.querySelector('#sortBtn').addEventListener('keyup', sortBtn)

  // SELECT BUTTON ROW DIV
  document.querySelector('#filterButtons').addEventListener('click', filterButtons);
}

startApp();
