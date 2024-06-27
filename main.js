import { dataFood } from "./data.js";

const selectFirstButton = document.getElementById("Firstbutton");
const selectSecondDiv = document.getElementById("secondDiv");

selectFirstButton.addEventListener("click", () => {
  selectSecondDiv.style.visibility === "hidden"
    ? (selectSecondDiv.style.visibility = "visible")
    : (selectSecondDiv.style.visibility = "hidden");
});
const cards = document.getElementById("secondSection");
// const divCardContainer=document.createElement("div")
// divCardContainer.className="divCard"
//  cards.appendChild(divCardContainer)

// divCardContainer.innerHTML='<img src="" id="imgCard"><div id="infoCard"><p id="nameCard">Name</p><p id="priceCard">Price</p></div><button id="buttonCard">Boton</button>'

dataFood.forEach((food, i) => {
  const divCardContainer = document.createElement("div");
  divCardContainer.className = "divCard";
  cards.appendChild(divCardContainer);

  divCardContainer.innerHTML = `<img src=${
    food.img
  } class="imgCard"><div class="infoCard"><p class="nameCard">${
    food.productName
  }</p><p class="priceCard">Price:${food.price.toFixed(
    2
  )}</p></div><button class="buttonCardStyle">Boton</button>`;
  const buttonCard = document.querySelectorAll(".buttonCardStyle");

  buttonCard[i].addEventListener("click", () => {
    const miniCard = document.createElement("div");
    miniCard.className = "miniCard";
    miniCard.innerHTML = `<img src=${
      food.img
    } class="imgMiniCard"><div class="infoMiniCard"><p class="nameCard">${
      food.productName
    }</p><p class="priceCard">Price:${food.price.toFixed(
      2
    )}</p></div><button class="buttoMiniCardStyle">X</button>`;
    selectSecondDiv.appendChild(miniCard);
  
    // console.log(food);
  });
});
const buttonClearDivHidden = document.createElement("button");
buttonClearDivHidden.textContent = "Clear";
selectSecondDiv.appendChild(buttonClearDivHidden);
buttonClearDivHidden.addEventListener("click", () => {
    const miniCard=document.getElementsByClassName("miniCard")
    
});

const buttonX = document.querySelectorAll(".buttoMiniCardStyle");
    
buttonX.addEventListener("click", (event) => {
    
 event.target.parentElement.remove()
});
