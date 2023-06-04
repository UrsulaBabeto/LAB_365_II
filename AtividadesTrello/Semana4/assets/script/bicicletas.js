const bike = [
  {
    title: "Nimbus Stark",
    description:
      "A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.",
    image: new URL(
      "https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus.jpg"
    ),
    price: "R$ 3999",
  },
  {
    title: "Magic Might",
    description:
      "A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.",
    image: new URL(
      "https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic.jpg"
    ),
    price: "R$ 3999",
  },
  {
    title: "Nebula Cosmic",
    description:
      "A Nebula Cosmic é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.",
    image: new URL(
      "https://www.origamid.com/projetos/bikcraft/img/bicicletas/nebula.jpg"
    ),
    price: "R$ 3999",
  },
];

function loadBikes() {
  const bikeList = document.querySelector("#content");
  bike.forEach((e) => {
    let divCard = document.createElement("div");
    divCard.className = "col-12 d-flex m-5 p-5 ";

    let colDiv = document.createElement("div");
    colDiv.className = "col-7 bike-container ";

    let price = document.createElement("p");
    price.className = "price";
    price.textContent = e.price;
    colDiv.appendChild(price);

    let image = document.createElement("img");
    image.className = "bike-image col-12 m-b-120";
    image.src = e.image;
    colDiv.appendChild(image);

    let colDiv1 = document.createElement("div");
    colDiv1.className = "col-5 d-flex flex-column";

    let bikeTitle = document.createElement("h1");
    bikeTitle.textContent = e.title;
    bikeTitle.className = "titulo2";
    colDiv1.appendChild(bikeTitle);

    let bikeDescription = document.createElement("h6");
    bikeDescription.textContent = e.description;
    bikeDescription.className = "description";
    colDiv1.appendChild(bikeDescription);

    // -----------------------------------
    let colDiv2 = document.createElement("div");
    colDiv2.className = "col-6 d-flex";

    let bikeDetails = document.createElement("ul");
    bikeDetails.className = " col-6 d-flex flex-column";

    let item1 = document.createElement("li");
    let icon1 = document.createElement("i");
    icon1.className = "bi bi-bicycle";
    icon1.style.color = "#e4a30b";
    item1.appendChild(icon1);
    item1.style.color = "#ededed";
    item1.textContent += " Motor Elétrico";
    bikeDetails.appendChild(item1);

    let item2 = document.createElement("li");
    let icon2 = document.createElement("i");
    icon2.className = "bi bi-speedometer";
    icon2.style.color = "#e4a30b";
    item2.appendChild(icon2);
    item2.style.color = "#ededed";
    item2.textContent += " 50km/h";
    bikeDetails.appendChild(item2);

    let item3 = document.createElement("li");
    let icon3 = document.createElement("i");
    icon3.className = "bi bi-compass";
    icon3.style.color = "#e4a30b";
    item3.appendChild(icon3);
    item3.style.color = "#ededed";
    item3.textContent += " Rastreador";

    bikeDetails.appendChild(item3);

    /*  -------------button---------------------- */
    let buttonDiv = document.createElement("div");
    buttonDiv.className = "btn";

    let bikeButton = document.createElement("button");
    bikeButton.textContent = "MAIS SOBRE";
    bikeButton.className = "btn-active btnToGreen";
    buttonDiv.appendChild(bikeButton);

    colDiv2.appendChild(bikeDetails);
    colDiv2.appendChild(buttonDiv);
    colDiv1.appendChild(colDiv2);

    divCard.appendChild(colDiv);
    divCard.appendChild(colDiv1);

    bikeList.appendChild(divCard);

    bikeButton.addEventListener("click", () => {
      console.log(
        `Name: ${e.title};\n Description:${e.description};\n Price:${e.price}`
      );
    })
  });
}

loadBikes();

  
