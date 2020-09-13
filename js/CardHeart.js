class Card {
    constructor(name, mana, color, rarity, type, subType, stats, attributes, collectorID, description, img = null){
        this.name = name;
        this.mana = mana;
        this.color = color;
        this.rarity = rarity;
        this.type = type;
        this.subType = subType;
        this.stats = stats;
        this.attributes = attributes;
        this.collectorID = collectorID;
        this.description = description;
        this.img = img;
    };

}

export { Card };