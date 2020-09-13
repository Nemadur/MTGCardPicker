import {MTGCard} from './MTGCard.js'

let deck = [
    new MTGCard({
        name: 'test',
        mana: '4U',
        color: 'burgundy',
        rarity: 'rare',
        type: 'test',
        subType: 'subtest',
        stats: {
            power: 0,
            toughness: 0
        },
        attributes: 'none',
        collectorID: '000',
        description: 'test Description',
    })
];

export {deck};