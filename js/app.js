"use strict";

const member1 = {
  firstName: `Wayne`,
  lastName: `Barnett`,
  position: `Founder & CEO`,
  thumbnail: `wayne-barnett-founder-ceo.jpg`,
};
const member2 = {
  firstName: `Angela`,
  lastName: `Caroll`,
  position: `Chief Editor`,
  thumbnail: `angela-caroll-chief-editor.jpg`,
};
const member3 = {
  firstName: `Walter`,
  lastName: `Gordon`,
  position: `Office Manager`,
  thumbnail: `walter-gordon-office-manager.jpg`,
};
const member4 = {
  firstName: `Angela`,
  lastName: `Lopez`,
  position: `Social Media Manager`,
  thumbnail: `angela-lopez-social-media-manager.jpg`,
};
const member5 = {
  firstName: `Scott`,
  lastName: `Estrada`,
  position: `Developer`,
  thumbnail: `scott-estrada-developer.jpg`,
};
const member6 = {
  firstName: `Barbara`,
  lastName: `Ramos`,
  position: `Graphic Designer`,
  thumbnail: `barbara-ramos-graphic-designer.jpg`,
};

const team = [member1, member2, member3, member4, member5, member6];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// for (let i = 0; i < team.length; i++) {
//   for (let key in team[i]) {
//     console.log(key, team[i][key]);
//   }
// }
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sotto forma di stringhe
// const memberList = document.getElementById("members-list");
// for (let i = 0; i < team.length; i++) {
//   const member = document.createElement("li");
//   for (let key in team[i]) {
//     // BONUS 1 :
//     // Trasformare la stringa foto in una immagine effettiva
//     if (key === "thumbnail") {
//       member.innerHTML += `<img src="img/${team[i][key]}" alt="" />`;
//     } else {
//       member.innerHTML += `${team[i][key]} `;
//     }
//   }
//   memberList.append(member);
// }

// BONUS 2:
// Organizzare i singoli membri in card/schede
const memberList = document.getElementById("members-list");
for (let i = 0; i < team.length; i++) {
  const member = document.createElement("li");
  member.innerHTML = `<div class="card">
    <img src="img/${team[i]["thumbnail"]}" alt="thumbnail${team[i]["firstName"]}" />
    <h3>${team[i]["firstName"]} ${team[i]["lastName"]}</h3>
    <h4>${team[i]["position"]}</h4>
  </div>`;
  memberList.append(member);
}
