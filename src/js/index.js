
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const orderTypes = {
  ASCEND:'ascend',
  DESCEND:'descend',
  SHUFFLE:'shuffle',
}
const squareContainer = document.querySelector('#squareContainer');
const buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
  button.addEventListener('click', buttonClickHandler);
});

function buttonClickHandler(event){
  const buttonClass = event.target.className.split(' ')[1];
  buttonClass && changetextContent(buttonClass);
}

function drawSquares(nums) {
  nums.forEach(thisNumber => {
    const divNode = document.createElement("div"); 
    divNode.classList.add('square');
    const textnode = document.createTextNode(thisNumber);
    divNode.appendChild(textnode);     
    squareContainer.appendChild(divNode);
  });
}

function changetextContent(orderType) {
  if(orderType === orderTypes.SHUFFLE) {
    numbers.sort((a, b) => 0.5 - Math.random());
  } else if (orderType === orderTypes.DESCEND) {
    numbers.sort((a, b) => b - a);
  } else {
    numbers.sort((a, b) => a - b);
  }
  const squares = document.querySelectorAll('.square');
  squares.forEach((square, sIndex) => {
    square.textContent = numbers[sIndex];
  });
}

drawSquares(numbers);