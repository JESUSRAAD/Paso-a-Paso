import { dataFood } from "./data.js";

const selectFirstButton = document.getElementById("Firstbutton");
const selectSecondDiv = document.getElementById("secondDiv");

selectFirstButton.addEventListener("click", () => {
  if (selectSecondDiv.style.visibility === "visible") {
    selectSecondDiv.style.visibility = "hidden";
    selectFirstButton.textContent = "Mostrar";
  } else {
    selectSecondDiv.style.visibility = "visible";
    selectFirstButton.textContent = "Ocultar";
  }

  //   selectSecondDiv.style.visibility === "hidden"
  //     ? (selectSecondDiv.style.visibility = "visible")
  //     : (selectSecondDiv.style.visibility = "hidden");
});
//////////////////////////////////////////////////////////////////////////////////////////////
const cards = document.getElementById("secondSection");
const miniArray = [];
const containerMiniDivs = document.querySelector("#containerMiniDivs");

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
    let foodSelection = {
      id: food.id,
      img: food.img,
      name: food.productName,
      price: food.price.toFixed(2),
      acc: 1,
    };
    const pushOrAcc=((newObjet,arr)=>{
       const encontrado= arr.reduce((encontrado,elementArray)=>{
            if (elementArray.id===newObjet.id) {
                elementArray.acc++
                return true
            }
            return
        },false)
            if (!encontrado) {
                
                    arr.push(newObjet)
                
            }
            return arr 
    
    })
    pushOrAcc(foodSelection,miniArray)
    // miniArray.push(foodSelection);
    containerMiniDivs.innerHTML=""
    console.log(miniArray);

    miniArray.forEach((order) => {
      const miniCard = document.createElement("div");
      miniCard.className = "miniCard";

      const imgMiniCard = document.createElement("img");
      imgMiniCard.className = "imgMiniCard";
      imgMiniCard.src = order.img;
      miniCard.appendChild(imgMiniCard);

      const infoMiniCard = document.createElement("div");
      infoMiniCard.className = "infoMiniCard";
      miniCard.appendChild(infoMiniCard);

      const nameCard = document.createElement("p");
      nameCard.className = "nameCard";
      nameCard.textContent = order.name;
      infoMiniCard.appendChild(nameCard);

      const priceCard = document.createElement("p");
      priceCard.className = "priceCard";
      priceCard.textContent = order.price;
      infoMiniCard.appendChild(priceCard);

      const accAndBtnX = document.createElement("div");
      accAndBtnX.className = "accAndBtnX";
      miniCard.appendChild(accAndBtnX);

      const acc = document.createElement("p");
      acc.className = "acc";
      acc.textContent = order.acc;
      accAndBtnX.appendChild(acc);

      const btnMiniCard = document.createElement("button");
      btnMiniCard.className = "buttoMiniCardStyle";
      btnMiniCard.textContent = "X";
      accAndBtnX.appendChild(btnMiniCard);

      const containerMiniDivs = document.querySelector("#containerMiniDivs");
      containerMiniDivs.appendChild(miniCard);

      btnMiniCard.addEventListener("click", (event) => {
        event.target.parentElement.parentElement.remove();
      });
    });
  });
});

const buttonClearDivHidden = document.createElement("button");
buttonClearDivHidden.textContent = "Clear";
buttonClearDivHidden.id = "btnClear";
selectSecondDiv.appendChild(buttonClearDivHidden);
buttonClearDivHidden.addEventListener("click", () => {
  containerMiniDivs.innerHTML = "";
});
