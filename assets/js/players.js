"use strict";

document.addEventListener('DOMContentLoaded', function() {

  /* crests */
  let classes = {
    deathknight : {name: 'death-knight', src: '/assets/img/class-crests/death_knight_crest.png'},
    demonhunter : {name: 'demon-hunter', src: '/assets/img/class-crests/demon_hunter_crest.png'},
    druid : {name: 'druid', src: '/assets/img/class-crests/druid_crest.png'},
    hunter : {name: 'hunter', src: '/assets/img/class-crests/hunter_crest.png'},
    mage : {name: 'mage', src: '/assets/img/class-crests/mage_crest.png'},
    monk : {name: 'monk', src: '/assets/img/class-crests/monk_crest.png'},
    paladin : {name: 'paladin', src: '/assets/img/class-crests/paladin_crest.png'},
    priest : {name: 'priest', src: '/assets/img/class-crests/priest_crest.png'},
    rogue : {name: 'rogue', src: '/assets/img/class-crests/rogue_crest.png'},
    shaman : {name: 'shaman', src: '/assets/img/class-crests/shaman_crest.png'},
    warlock : {name: 'warlock', src: '/assets/img/class-crests/warlock_crest.png'},
    warrior : {name: 'warrior', src: '/assets/img/class-crests/warrior_crest.png'}
  }

  for (let value of Object.values(classes)) {
    const players = document.querySelectorAll('img.' + value.name);
    for (let i = 0; i < players.length; i++) {
      players[i].src = value.src;
    }
  }

});
