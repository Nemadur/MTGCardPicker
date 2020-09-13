import CardHeart from './CardHeart.js';

class MTGCard extends CardHeart{
    constructor(data){
        super(
            data.name,
            data.mana,
            data.color,
            data.rarity,
            data.type,
            data.subType,
            data.stats,
            data.attributes,
            data.collectorID,
            data.description,
            data.img
        )
    }
}

export { MTGCard };