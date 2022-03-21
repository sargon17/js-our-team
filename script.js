const teamMembres = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    img: "img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    img: "img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    img: "img/walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    img: "img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    img: "img/scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    img: "img/barbara-ramos-graphic-designer.jpg",
  },
];

const teamContainer = document.querySelector(".team-container");
const addMemberButton = document.querySelector("#addMemberButton");
cardsSectionMaker(teamMembres);

function cardsSectionMaker(array) {
  teamContainer.innerHTML = "";
  for (let index = 0; index < array.length; index++) {
    cardMaker(array[index]);
  }
}

function cardMaker(member) {
  // Creating the card
  card = myCreateElement("div", "team-card");

  // Creating the image
  cardImg = myCreateElement("div", "card-image");
  cardImg.innerHTML = `<img src=${member.img} alt=${member.name} />`;

  // Creating the text
  cardText = myCreateElement("div", "card-text");
  cardText.innerHTML = `<h3>${member.name}</h3><p>${member.role}</p>`;

  // appending all the sections
  card.appendChild(cardImg);
  card.appendChild(cardText);
  teamContainer.appendChild(card);
}

function myCreateElement(type = "div", elementClass) {
  let element = document.createElement(`${type}`);
  element.className = `${elementClass}`;
  return element;
}

function createNewMember() {
  let name = document.querySelector("#name").value;
  let role = document.querySelector("#role").value;
  let img = document.querySelector("#image").value;

  let member = {
    name: name,
    role: role,
    img: img,
  };
  teamMembres.push(member);
  cardsSectionMaker(teamMembres);
}

addMemberButton.addEventListener("click", () => {
  createNewMember();
});
