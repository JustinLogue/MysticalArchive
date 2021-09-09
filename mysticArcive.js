const app={};
    
const spellBook ={
    // name: {
    //     name: "",
    //     level: ,
    //     levelName: "",
    //     school: "",
    //     ritual: "",
    //     castingTime: "",
    //     duration: "",
    //     classNames: "",
    //     classes: {
    //         1: "",
    //     },
    //     set: "",
    //     college: "",
    //     addtionNotes: "",
    //     tags: {
    //         1: "",
    //     },
    //     range: "",
    //     components: "",
    //     spellText: "",
    //     atHigherLevel: "",
    //     imageUrl: "assets/.png",
    //     imageDiscription: ,
    // },
    AbundantHarvest: {
        name: "Abundant Harvest",
        level: 1,
        levelName: "1st",
        school: "Transmutation",
        ritual: "",
        castingTime: "1 Action",
        duration: "10 Minutes",
        classNames: "Druid",
        classes: {
            1: "Druid",
        },
        set: "Mystic Archive",
        college: "Witherbloom",
        addtionNotes: "",
        tags: {
            1: "Witherbloom",
            2: "Utility"
        },
        range: "Touch",
        components: "V, S, M(Grain of Wheat)",
        spellText: "You touch a plant which bears food and channel life force into it, upon which it starts to grow until, at end of spell duration, it has reached maturity and is ready to havest. Any plants or planted seeds in a 5 by 5 foot area are now fully grown into a tree, brush or whatever they gorw into and are ready to harvest.",
        atHigherLevel: "",
        imageUrl: "AbundantHarvest",
        imageDiscription: "A woman harvesting bright furit.",
        //land related spell are diffcult to translate into D&D so I just went with the spell's name rather than its effect for what the D&D version should do
    },
    AdventurousImpulse: {
        name: "Adventurous Impulse",
        level: 3,
        levelName: "3rd",
        school: "Divination",
        ritual: "",
        castingTime: "1 action",
        duration: "Instantaneous",
        classNames: "Bard, Cleric, Druid",
        classes: {
            1: "Bard",
            2: "Cleric",
            3: "Druid"
        },
        set: "Mystic Archive",
        college: "None",
        addtionNotes: "",
        tags: {
            1: "Utility",
        },
        range: "Self",
        components: "V, S",
        spellText: "You think of a object or person as you cast the spell. Upon casting you now know the exact direction from where you cast the spell at the time or casting. This spell can't tell you if the object or person is moving. The spell doesn't tell you the path you can take or the distance you need to go, only the direction.",
        atHigherLevel: "",
        imageUrl: "AdventurousImpulse",
        imageDiscription: "A person setting off for an adventure in a forest",
        //This is intented to be a weaker version of find the path. Working with the name to give you a impluse to direct your adventure
    },
    AgonizingRemorse: {
        name: "Agonizing Remorse",
        level: 2,
        levelName: "2nd",
        school: "Enchantment",
        ritual: "",
        castingTime: "1 Action",
        duration: "1 Minute (Conceration)",
        classNames: "Warlock",
        classes: {
            1: "Warlock",
        },
        set: "Mystic Archive",
        college: "Silverquill",
        addtionNotes: "",
        tags: {
            1: "Damage",
            2: "Control"
        },
        range: "30 feet",
        components: "V, S",
        spellText: "You fill the target full of remorse at the bare through of hurting you. The target must make a wisdom saving throw, on a failed save the remorse lache into the tragets pysche and will now take 2d6 psychic damage when ever it tires to make an attack action against you or targets you with a spell. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.",
        atHigherLevel: "<strong>When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.</strong>",
        imageUrl: "AgonizingRemorse",
        imageDiscription: "A man being haunted by a bloody memory",
    },
    ApproachoftheSecondSun: {
        name: "Approach of the Second Sun",
        level: 7,
        levelName: "7th",
        school: "Abjuration",
        ritual: "",
        castingTime: "1 Action",
        duration: "Instantaneous",
        classNames: "Druid, Cleric",
        classes: {
            1: "Druid",
            2: "Cleric"
        },
        set: "Mystic Archive",
        college: "",
        addtionNotes: "",
        tags: {
            1: "Healing",
        },
        range: "Touch",
        components: "V, S, M(a shard of stained glass)",
        spellText: "You a touch a creature and fill it with the energy of a second sun rise over the desert. If this is the first time you cast this spell since your last long rest then the target gains 70 hit points. If this is the second time or more then instead, the target is healed to full hit points, cured of all non-magic disease and cured of any blinded, deafened, paralyzed and posioned conditions.",
        atHigherLevel: "",
        imageUrl: "ApproachOfTheSecondSun",
        imageDiscription: "An image of two suns rising through the entrace of a cave shaped liek the profile of a head.",
    },
        // BrainStrom: {
    //     name: "",
    //     level: ,
    //     levelName: "",
    //     school: "",
    //     ritual: "",
    //     castingTime: "",
    //     duration: "",
    //     classNames: "",
    //     classes: {
    //         1: "",
    //     },
    //     set: "",
    //     college: "",
    //     addtionNotes: "",
    //     tags: {
    //         1: "",
    //     },
    //     range: "",
    //     components: "",
    //     spellText: "",
    //     atHigherLevel: "",
    //     imageUrl: "assets/.png",
    //     imageDiscription: ,
    // },
}

app.innit = () => {
    // console.log("started")
    app.populate();
    // app.displayAll();
    // app.depopulate();
};

app.populate = () => {
    $("#populateButton").on('click', function(){
        // console.log("Clicked Populate!")
        app.displayAll();
    })
}

app.displayAll = () => {
    app.depopulate();
    var html1 = "";
    for (spell in spellBook){
        console.log(spellBook[spell].name)
        // html1 += `<p>${spellBook[spell].name}</p><br>`
        html1 +=`<div class="spellContainer">
        <h2>${spellBook[spell].name}</h2>
        <p><strong>Origin: </strong> ${spellBook[spell].set}<br></p>
        <p><strong>College: </strong> ${spellBook[spell].college}<br></p>
        <p>${spellBook[spell].levelName} Level ${spellBook[spell].school} Spell ${spellBook[spell].ritual}<br></p>
        <p><strong>Casting Time: </strong> ${spellBook[spell].castingTime}<br></p>
        <p><strong>Components: </strong> ${spellBook[spell].components}<br></p>
        <p><strong>Duration: </strong> ${spellBook[spell].duration}<br></p>
        <p><strong>Classes: </strong> ${spellBook[spell].classNames}<br></p>
        <p>${spellBook[spell].addtionNotes}</p>
        <p>${spellBook[spell].spellText}</p><br>
        <p>${spellBook[spell].atHigherLevel}</p>
            <div class="spellImg">
            <img src="assets/${spellBook[spell].imageUrl}.jpg" alt="${spellBook[spell].imageDiscription}" width="300" height="300">
            </div>
        </div>
        `;
    }
    $(".spellArea").append(html1);
}

app.depopulate = () => {
    // console.log("Depopluate Spell Area!")
    $(".spellArea").empty();

}

$(function(){
    app.innit();
    
})