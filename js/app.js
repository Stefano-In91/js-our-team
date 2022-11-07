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
for (let i = 0; i < team.length; i++) {
  for (let key in team[i]) {
    console.log(key, team[i][key]);
  }
}
