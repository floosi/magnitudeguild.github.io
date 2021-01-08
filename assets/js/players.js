"use strict";

document.addEventListener('DOMContentLoaded', function() {

  /* crests */
  let classes = {
    deathknight : {name: 'death-knight', src: '/assets/img/class-crests/death_knight_crest.png', srcset: '/assets/img/class-crests/death_knight_crest.webp'},
    demonhunter : {name: 'demon-hunter', src: '/assets/img/class-crests/demon_hunter_crest.png', srcset: '/assets/img/class-crests/demon_hunter_crest.webp'},
    druid : {name: 'druid', src: '/assets/img/class-crests/druid_crest.png', srcset: '/assets/img/class-crests/druid_crest.webp'},
    hunter : {name: 'hunter', src: '/assets/img/class-crests/hunter_crest.png', srcset: '/assets/img/class-crests/hunter_crest.webp'},
    mage : {name: 'mage', src: '/assets/img/class-crests/mage_crest.png', srcset: '/assets/img/class-crests/mage_crest.webp'},
    monk : {name: 'monk', src: '/assets/img/class-crests/monk_crest.png', srcset: '/assets/img/class-crests/monk_crest.webp'},
    paladin : {name: 'paladin', src: '/assets/img/class-crests/paladin_crest.png', srcset: '/assets/img/class-crests/paladin_crest.webp'},
    priest : {name: 'priest', src: '/assets/img/class-crests/priest_crest.png', srcset: '/assets/img/class-crests/priest_crest.webp'},
    rogue : {name: 'rogue', src: '/assets/img/class-crests/rogue_crest.png', srcset: '/assets/img/class-crests/rogue_crest.webp'},
    shaman : {name: 'shaman', src: '/assets/img/class-crests/shaman_crest.png', srcset: '/assets/img/class-crests/shaman_crest.webp'},
    warlock : {name: 'warlock', src: '/assets/img/class-crests/warlock_crest.png', srcset: '/assets/img/class-crests/warlock_crest.webp'},
    warrior : {name: 'warrior', src: '/assets/img/class-crests/warrior_crest.png', srcset: '/assets/img/class-crests/warrior_crest.webp'}
  }

  for (let value of Object.values(classes)) {
    const players = document.querySelectorAll('picture.' + value.name);
    for (let i = 0; i < players.length; i++) {
      players[i].querySelector('source').srcset = value.srcset;
      players[i].querySelector('img').src = value.src;
      players[i].querySelector('img').alt = value.name;
    }
  }

});
