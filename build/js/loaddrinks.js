const cards = document.getElementById("cards");

const bebida = document.getElementById("drink");
const container = document.querySelector(".spi");
const logo = document.querySelector(".logo-white");

const loadDrinks = () => {
  cards.style.display = "flex";
  cards.innerHTML = "";

  const spinner = document.createElement("div");
  spinner.classList.add("sk-chase");

  spinner.innerHTML = ` <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>`;

  container.appendChild(spinner);

  logo.classList.add("animate__shakeX");

  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${bebida.value}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);

      if (data.drinks != null) {
        data.drinks.forEach((element) => {
          const {
            strCategory,
            strInstructions,
            strDrink,
            strDrinkThumb,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = element;

          function verifi(ingrediente) {
            if (ingrediente != null) {
              return `<p>${ingrediente}</p>`;
            } else {
              return "";
            }
          }
          const card = document.createElement("DIV");
          card.classList.add("card");

          card.innerHTML = `  
        

      
        <div class="header-card">
          <img src=${strDrinkThumb} alt="" />
        </div>
        <div class="body-card">
          <h3>${strDrink}</h3>
        </div>
        <div class="ingredient"> 
        <h4 class='recipe --orange'>Ingredients</h4>
        ${verifi(strIngredient1)}
        ${verifi(strIngredient2)}
        ${verifi(strIngredient3)}
        ${verifi(strIngredient4)}
        ${verifi(strIngredient5)}  </div>
        <div class="footer-card">

        
      
          
      

         <h4>${strCategory}</h4>
        </div>
        <div class = "overlay-card " id="over">
       
           <h4 class="recipe">Instructions</h4>
           <p class>${strInstructions}</p>
          </div>
    
      `;

          cards.appendChild(card);
          logo.classList.remove("animate__shakeX");
          bebida.value = "";

          container.innerHTML = `   <div
          class="arrow animate__animated animate__heartBeat animate__infinite infinite"
        >
          <a href="#tragos">
          <h3>Success!!</h3>
         

            <img src="./src/img/icons/tostada.png" alt=""
          /></a>
        </div>
      </div>`;
        });
      } else {
        container.innerHTML = ` <div class="alert">
        <p>El trago o ingrediente no existe</p>
      </div>`;

        setTimeout(() => {
          container.innerHTML = "";
        }, 2000);

        bebida.value = "";
      }

      setTimeout(() => {
        container.innerHTML = "";
      }, 3500);
    })
    .catch((err) => console.log(err));
};
