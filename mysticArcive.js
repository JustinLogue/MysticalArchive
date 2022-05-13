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
    //     collegeImg: "",
    //     college: "",
    //     addtionNotes: "",
    //     tags: {
    //         1: "",
    //     },
    //     range: "",
    //     components: "",
    //     cost: false,
    //     spellText: "",
    //     atHigherLevel: "",
    //     imageUrl: "assets/.png",
    //     imageDiscription: "",
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
        collegeImg: "",
        addtionNotes: "",
        tags: {
            1: "Utility"
        },
        range: "Touch",
        components: "V, S, M(Grain of Wheat)",
        cost: false,
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
        classNames: "Bard, Cleric, Druid, Ranger, Paladin",
        classes: {
            1: "Bard",
            2: "Cleric",
            3: "Druid",
            4: "Ranger",
            5: "Paladin"
        },
        set: "Mystic Archive",
        college: "Lorehold",
        collegeImg: "",
        addtionNotes: "",
        tags: {
            1: "Utility",
        },
        range: "Self",
        components: "V, S",
        cost: false,
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
        duration: "Conceration, up to 1 Minute",
        classNames: "Warlock",
        classes: {
            1: "Warlock",
        },
        set: "Mystic Archive",
        college: "Oriq",
        collegeImg: "",
        addtionNotes: "",
        tags: {
            1: "Damage",
            2: "Control"
        },
        range: "30 feet",
        components: "V, S",
        cost: false,
        spellText: "You fill the target full of remorse at the bare through of hurting you. The target must make a wisdom saving throw, on a failed save the remorse lache into the tragets pysche and will now take 2d6 psychic damage when ever it tires to make an attack action against you or targets you with a spell. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.",
        atHigherLevel: "<strong>At Higher Levels. </strong>When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
        imageUrl: "AgonizingRemorse",
        imageDiscription: "A man being haunted by a bloody memory",
        // I'm saving duress for actually blocking spells,so i went with a spell that fit the name
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
        college: "Lorehold",
        collegeImg: "",
        addtionNotes: "",
        tags: {
            1: "Healing",
        },
        range: "Touch",
        components: "V, S, M(a shard of stained glass)",
        cost: false,
        spellText: "You a touch a creature and fill it with the energy of a second sun rise over the desert as radiant grow rises above your head. If this is the first time you cast this spell since your last long rest then the target gains 70 hit points. If this is the second time or more then instead, the target is healed to full hit points, cured of all non-magic disease and cured of any conditions (etc ...blinded, deafened, paralyzed and posioned).",
        atHigherLevel: "",
        imageUrl: "ApproachOfTheSecondSun",
        imageDiscription: "An image of two suns rising through the entrace of a cave shaped liek the profile of a head.",
        // So i made this a healing spell with extra effects if it cast twice in a "day"
    },
    BrainStorm: {
        name: "Brain Storm",
        level: 1,
        levelName: "1st",
        school: "Divination",
        ritual: "(ritual)",
        castingTime: "1 action",
        duration: "Instantaneous",
        classNames: "Wizard",
        classes: {
            1: "Wizard",
        },
        set: "Mystic Archive",
        college: "Quandrix",
        addtionNotes: "",
        tags: {
            1: "Utility",
        },
        range: "Self",
        components: "V, S, M (caster's spell book)",
        cost: false,
        spellText: "Choose three spells your character knows but does not have prepaired. These spells are know prepaired untill you next long rest. Pick two spells your character has prepaired, these spells are now no longer perpaired.",
        atHigherLevel: "",
        imageUrl: "brainStorm",
        imageDiscription: "A young wizard having an epiphany.",
        // this was the easiest one to adapt, it only works with a wizard spell book rules but should be useful when learned
    },
    Channel: {
        name: "Channel",
        level: 5,
        levelName: "5th",
        school: "Conjuration",
        ritual: "",
        castingTime: "1 Action",
        duration: "Concentration, up to 1 mintue",
        classNames: "Druid, Sorcerer",
        classes: {
            1: "Druid",
            2: "Sorcerer"
        },
        set: "Mystic Archive",
        collegeImg: "",
        college: "Witherbloom",
        addtionNotes: "",
        tags: {
            1: "Buff",
        },
        range: "Self",
        components: "V, S, M(a seed acorn or bulb)",
        cost: false,
        spellText: "You focus on pulling raw magic through the weave itself to empower you. For the remainer of the spell's duration, whenever you expend a spell slot 1st level or higher to cast a spell you many choose to cast that spell at a higher level. You may not choose to cast that spell at a spell level you don't yet have the ability to cast it at yet. For each level above the orignal spell slot expended you choose you take 1d20 nercotic damage per level, effects or ablities can not reduce this damage or redirect it.",
        atHigherLevel: "",
        imageUrl: "channel",
        imageDiscription: "A shaman drawing magic from the land itself",
        // I'm not sure how to power this spell, the idea was to use mana ramp as free higher level spell slots with damage and some limitations as a drawback
    },
    ChaosWarp: {
        name: "Chaos Warp",
        level: 3,
        levelName: "3rd",
        school: "Transmutation",
        ritual: "",
        castingTime: "1 action",
        duration: "Instantaneous",
        classNames: "Sorcerer, Wizard, Warlock",
        classes: {
            1: "Sorcerer",
            2: "Wizard",
            3: "Warlock"
        },
        set: "Mystic Archive",
        collegeImg: "",
        college: "Oriq",
        addtionNotes: "",
        tags: {
            1: "Random",
            2: "Combat"
        },
        range: "60 feet",
        components: "V, S, M(a die with 6 or more sides that isn't loaded)",
        cost: false,
        spellText: "You call on the chaotic energies of the weave to change a single creature within range. The creature being targeted makes a charisma saving throw, on a failure roll a 1d100 and then replace the targeted creature with another creature or object on the table matching the roll. Any non-magic gear the creature had on them before the spell was cast melds into the creatures or object new form. Any magic items on the creature become unequipped and unattuned and fall on the ground direct beneath the creature. If the creature was perviously hostile then it remains hostile if it becomes a new creature.The target assumes the hit points of its new form.<br><b>1</b> - The Deck of Many Things<br><b>2</b> - A diamond worth 500 gp<br><b>3</b> - A +1 long bow<br><b>4</b> - A +1 longsword<br><b>5</b> - A gold necklace worth 50 gp<br><b>6</b> - A 5 foot by 3 foot framed painting of the creature<br><b>7</b> - A single gold piece<br><b>8</b> - A single Copper piece<br><b>9-10</b> - Awakened shrub<br><b>11-12</b> - A goat<br><b>13-14</b> - A zombie<br><b>15-16</b> - A Rust monster<br><b>17-18</b> - A Bugbear<br><b>19-20</b> - A Dire wolf 500 gp<br><b>21-22</b> - A mimic pretending to be a object of the DM's choice<br><b>23-24</b> - An Ogre<br><b>25-26</b> - A Gelatinous Cube<br><b>27-28</b> - A Displacer beast<br><b>29-30</b> - A Hell hound<br><b>31-32</b> - A Manticore<br><b>33-34</b> - An Owl bear<br><b>35-36</b> - A Black pudding<br><b>37-38</b> - A Ghost<br><b>39-40</b> - A Troll<br><b>41-42</b> - An Air elemental<br><b>43-44</b> - An Earth elemental<br><b>45-46</b> - A Fire elemental<br><b>47-48</b> - A Water elemental<br><b>49-50</b> - A Mammoth<br><b>51-52</b> - A Medusa<br><b>53-54</b> - A Wyren<br><b>55-56</b> - A Stone giant<br><b>57-58</b> - A Hydra<br><b>59-60</b> - A Treant gp<br><b>61-62</b> - A Stone Golem<br><b>63-64</b> - A Young Gold Dragon<br><b>65-66</b> - A Young Red Dragon<br><b>67-68</b> - A Djinni<br><b>69-70</b> - A Roc<br><b>71-72</b> - A Beholder<br><b>73-74</b> - A Storm Giant<br><b>75-76</b> - A Vampire<br><b>77-78</b> - A Purple Worm<br><b>79-80</b> - An Iron Golem<br><b>81-82</b> - An Androsphinx<br><b>83-84</b> - A Death Knight<br><b>85-86</b> - A Dragon Turtle<br><b>87-88</b> - A Balor<br><b>89-90</b> - A Pit Fiend<br><b>91-92</b> - A Solar<br><b>93-94</b> - A Kraken<br><b>95-96</b> - An Ancient Gold Dragon<br><b>97-98</b> - An Ancient Red Dragon<br><b>99</b> - A Tarrasque<br><b>100</b> - Roll two more times a create both rolls<br>",
        atHigherLevel: "<strong>At Higher Levels. </strong>When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.",
        imageUrl: "chaosWarp",
        imageDiscription: "A Dragon being transformed into a box",
        // So I made a point to make creatures from each cr and then some items 
    },
    CruxOfFate: {
        name: "Crux of Fate",
        level: 5,
        levelName: "5th",
        school: "Divination",
        ritual: "",
        castingTime: "1 action",
        duration: "Instantaneous",
        classNames: "Cleric, Wizard, Warlock",
        classes: {
            1: "Cleric",
            2: "Wizard",
            3: "Warlock"
        },
        set: "Mystic Archive",
        collegeImg: "",
        college: "Oriq",
        addtionNotes: "",
        tags: {
            1: "Combat",
            2: "Modular"
        },
        range: "personal",
        components: "V, S, M(a coin with a dragon on one side, worth 1 gp)",
        cost: true,
        spellText: "You call upon the strands of fate to unleash raw potential power. You pick dragon or non-dragon, then each creature of the chosen type within a 120 feet circle centered on you makes a constitution saving throw. All creatures take 10d10 damage on a failed save, half that on a successful one. All dragons within 100 miles of the caster become instantly aware that this spell was cast and where it was cast. The caster has disadvantage on all wisdom saving throws against the scry spell cast by dragons for the next 24 hours. ",
        atHigherLevel: "",
        imageUrl: "CruxOfFate",
        imageDiscription: "",
        // This is does damage to dragon or non-dragons like the card but the damage is not yet set in stone. Right now it's high so that if you cast it to hit no dragons it will hurt your party as well as the enemy npcs
    },
    Despark: {
        name: "Despark",
        level: 4,
        levelName: "4th",
        school: "necromancy",
        ritual: "",
        castingTime: "1 Action",
        duration: "Instantaneous",
        classNames: "Druid, Sorcerer, Cleric",
        classes: {
            1: "Druid",
            2:"Sorcerer",
            3:"Cleric",
        },
        set: "Mystic Archive",
        collegeImg: "",
        college: "Prismari",
        addtionNotes: "",
        tags: {
            1: "Damage",
        },
        range: "30 Feet",
        components: "V, S",
        cost: false,
        spellText: "You call upon the forces of death to sever a soul's attachment to the body it is in. You choose one target within range, they make a Constitution saving throw. On a sucess nothing happens. On a failure the target takes 10d8 necrotic damage. If this damage would be enough to kill the target and the target has someway of rejuvenating or resurrecting its body, such as devils reappearing in the nine hells when killed or a lich spawning a new body from it's phylactery, then this spell prevents that rejuvenation and they die like most other creatures. This spell doesn't stop future creatures using magic to bring the target back to life, such as with a Resurrection spell.",
        atHigherLevel: "<strong>At Higher Levels. </strong> When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.",
        imageUrl: "Despark",
        imageDiscription: "A dragon pulling the life force out of several people",
    },
    DoomBlade: {
        name: "Doom Blade",
        level: 2,
        levelName: "2nd",
        school: "Necromancy",
        ritual: "",
        castingTime: "1 action",
        duration: "Instantaneous",
        classNames: "Cleric, Warlock, Sorcerer, Wizard",
        classes: {
            1: "Cleric",
            2: "Warlock",
            3: "Sorcercer",
            4: "Wizard"
        },
        set: "Mystic Archive",
        collegeImg: "",
        college: "Silverquill",
        addtionNotes: "",
        tags: {
            1: "Damage",
            2: "Debuff"
        },
        range: "60 feet",
        components: "V, S, ",
        cost: false,
        spellText: "You channel the engeries of doom itself to harm a foe. Make an ranged attack role against a target in range. On a hit the target takes 3d6 necrotic damage and 3d6 psychic damage. The target's mind is then filled with throughts of it's own doom. The target has disadvantage on attack roles made against you until your next turn.",
        atHigherLevel: "<strong>At Higher Levels. </strong> When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 nerotic and psychic for each slot level above 2nd.",
        imageUrl: "DoomBlade",
        imageDiscription: "An angel being harm by a dark blade",
    },
    Duress: {
        name: "Duress",
        level: 1,
        levelName: "1st",
        school: "Abjuration",
        ritual: "",
        castingTime: "1 action",
        duration: "1 round",
        classNames: "Bard, Wizard, Paladin, Sorcerer",
        classes: {
            1: "Bard",
            2: "Wizard",
            3: "Paladin",
            4: "Sorcerer"
        },
        set: "Mystic Archive",
        collegeImg: "",
        college: "Silver Quil",
        addtionNotes: "",
        tags: {
            1: "Control",
        },
        range: "30 feet",
        components: "V, S",
        cost: false,
        spellText: "You tax the mind of foe. One target in range makes a Wisdom saving throw. On a failure they have disadvanatge on concentration checks for the duration of the spell.",
        atHigherLevel: "<strong>At Higher Levels. </strong> When you cast this spell using a spell slot of 2nd level or higher, the duration increases by 1 round for each slot level above 2nd.",
        imageUrl: "duress",
        imageDiscription: "",
        // orginally I was thinking of allowing this spell to see a spell caster's spell list and block one spell for a round but then i decided to give that to Inquisition of Kozilek because the name is better, so I went with an effect that matches the name of the spell while still affecting spell casting so it's "somewhat" similar to hand attack.
    },
    Eliminate: {
        name: "Eliminate",
        level: 5,
        levelName: "5th",
        school: "Necromancy",
        ritual: "",
        castingTime: "1 action",
        duration: "Instantaneous",
        classNames: "Sorcerer, Warlock, Wizard",
        classes: {
            1: "Sorcerer",
            2: "Warlock",
            3: "Wizard",
        },
        set: "Mystic Archive",
        collegeImg: "",
        college: "Silverquill",
        addtionNotes: "",
        tags: {
            1: "Damage",
        },
        range: "60 ft",
        components: "V, S",
        cost: false,
        spellText: "You focus on ending the life force of one creature. Choose a target in range, if the creature you choose currently has 50 hit points or fewer, it dies. Otherwise, the spell has no effect.",
        atHigherLevel: "",
        imageUrl: "eliminate",
        imageDiscription: "A person disinitgating starting at the back of the head",
        // this was fairly easy, I just made a half power word kill. I removed bard because that makes more sense for a word based spell and made it necromancy cause I feel it makes more sense
    },
}

app.innit = () => {
    console.log("started")
    app.populate();
    app.levelSelect();
    app.clear();
    app.schoolSelect();
    var userlevel;

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
            <div class="spellInfo">
                <h2>${spellBook[spell].name}</h2>
                <p><strong>Origin: </strong> ${spellBook[spell].set}<br></p>
                <p><strong>College: </strong> ${spellBook[spell].college}<br></p>
                <p>${spellBook[spell].levelName} Level ${spellBook[spell].school} Spell ${spellBook[spell].ritual}<br></p>
                <p><strong>Casting Time: </strong> ${spellBook[spell].castingTime} ${spellBook[spell].ritual}<br></p>
                <p><strong>Range: </strong> ${spellBook[spell].range}<br></p>
                <p><strong>Components: </strong> ${spellBook[spell].components}<br></p>
                <p><strong>Duration: </strong> ${spellBook[spell].duration}<br></p>
                <p><strong>Classes: </strong> ${spellBook[spell].classNames}<br></p>
                <p>${spellBook[spell].addtionNotes}</p>
                <p>${spellBook[spell].spellText}</p><br>
                <p>${spellBook[spell].atHigherLevel}</p>
                </div>
                    <div class="spellImg">
                    <img src="assets/${spellBook[spell].imageUrl}.jpg" alt="${spellBook[spell].imageDiscription}" width="300" height="300">
                    </div>
           
        </div>
        `;
    }
    $(".spellArea").append(html1);
}

app.levelSelect = () =>{
    $("#levelSelection").on('change', function(){
        userLevel =$('option:selected').val();
        console.log(userLevel);
        $(".spellBook").empty();
        app.depopulate();
        // app.getSpell(userLevel);
        var html1 = "";
        for (spell in spellBook){
            if (userLevel == spellBook[spell].level){
                console.log(spellBook[spell].name)
                // html1 += `<p>${spellBook[spell].name}</p><br>`
                html1 +=`<div class="spellContainer">
                <div class="spellInfo">
                    <h2>${spellBook[spell].name}</h2>
                    <p><strong>Origin: </strong> ${spellBook[spell].set}<br></p>
                    <p><strong>College: </strong> ${spellBook[spell].college}<br></p>
                    <p>${spellBook[spell].levelName} Level ${spellBook[spell].school} Spell ${spellBook[spell].ritual}<br></p>
                    <p><strong>Casting Time: </strong> ${spellBook[spell].castingTime} ${spellBook[spell].ritual}<br></p>
                    <p><strong>Range: </strong> ${spellBook[spell].range}<br></p>
                    <p><strong>Components: </strong> ${spellBook[spell].components}<br></p>
                    <p><strong>Duration: </strong> ${spellBook[spell].duration}<br></p>
                    <p><strong>Classes: </strong> ${spellBook[spell].classNames}<br></p>
                    <p>${spellBook[spell].addtionNotes}</p>
                    <p>${spellBook[spell].spellText}</p><br>
                    <p>${spellBook[spell].atHigherLevel}</p>
                </div>
                    <div class="spellImg">
                    <img src="assets/${spellBook[spell].imageUrl}.jpg" alt="${spellBook[spell].imageDiscription}" width="300" height="300">
                    </div>
                </div>
                `;
        }}
        $(".spellArea").append(html1);
        
    })
    
}

app.schoolSelect = () =>{
    $("#schoolSelection").on('change', function(){
        userLevel =$('option:selected').val();
        console.log(userLevel);
        $(".spellBook").empty();
        app.depopulate();
        // app.getSpell(userLevel);
        var html1 = "";
        for (spell in spellBook){
            if (userLevel == spellBook[spell].school){
                console.log(spellBook[spell].name)
                // html1 += `<p>${spellBook[spell].name}</p><br>`
                html1 +=`<div class="spellContainer">
                <div class="spellInfo">
                    <h2>${spellBook[spell].name}</h2>
                    <p><strong>Origin: </strong> ${spellBook[spell].set}<br></p>
                    <p><strong>College: </strong> ${spellBook[spell].college}<br></p>
                    <p>${spellBook[spell].levelName} Level ${spellBook[spell].school} Spell ${spellBook[spell].ritual}<br></p>
                    <p><strong>Casting Time: </strong> ${spellBook[spell].castingTime} ${spellBook[spell].ritual}<br></p>
                    <p><strong>Range: </strong> ${spellBook[spell].range}<br></p>
                    <p><strong>Components: </strong> ${spellBook[spell].components}<br></p>
                    <p><strong>Duration: </strong> ${spellBook[spell].duration}<br></p>
                    <p><strong>Classes: </strong> ${spellBook[spell].classNames}<br></p>
                    <p>${spellBook[spell].addtionNotes}</p>
                    <p>${spellBook[spell].spellText}</p><br>
                    <p>${spellBook[spell].atHigherLevel}</p>
                </div>
                    <div class="spellImg">
                    <img src="assets/${spellBook[spell].imageUrl}.jpg" alt="${spellBook[spell].imageDiscription}" width="300" height="300">
                    </div>
                </div>
                `;
        }}
        $(".spellArea").append(html1);
        
    })
    
}

app.depopulate = () => {
    // console.log("Depopluate Spell Area!")
    $(".spellArea").empty();

}

app.clear = () => {
    $("#depopulateButton").on('click', function(){
        // console.log("Clicked Depopulate!")
        app.depopulate();
    })
}

$(function(){
    app.innit();
    
})