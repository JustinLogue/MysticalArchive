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
    //     cost: "No",
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
        set: "Mystical Archive",
        college: "Witherbloom",
        collegeImg: "",
        addtionNotes: "",
        tags: {
            1: "Utility"
        },
        range: "Touch",
        components: "V, S, M(Grain of Wheat)",
        cost: "No",
        spellText: "You touch a plant which bears food and channel life force into it, upon which it starts to grow until, at end of spell's duration, it has reached maturity and is ready to harvest. Any plants or planted seeds in a 5 by 5 foot area are now fully grown into a tree, brush or whatever they grow into and are ready to harvest.",
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
        castingTime: "1 Action",
        duration: "Instantaneous",
        classNames: "Bard, Cleric, Druid, Ranger, Paladin",
        classes: {
            1: "Bard",
            2: "Cleric",
            3: "Druid",
            4: "Ranger",
            5: "Paladin"
        },
        set: "Mystical Archive",
        college: "Lorehold",
        collegeImg: "",
        addtionNotes: "",
        tags: {
            1: "Utility",
        },
        range: "Self",
        components: "V, S",
        cost: "No",
        spellText: "You think of an object or person as you cast the spell. Upon casting, you now know the exact direction from where you cast the spell at the time or casting. This spell can't tell you if the object or person is moving. The spell doesn't tell you the path you can take or the distance you need to go, only the direction.",
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
        set: "Mystical Archive",
        college: "Oriq",
        collegeImg: "",
        addtionNotes: "",
        tags: {
            1: "Damage",
            2: "Control"
        },
        range: "30 feet",
        components: "V, S",
        cost: "No",
        spellText: "You fill the target full of remorse at the bare through of hurting you. The target must make a wisdom saving throw, on a failed save the remorse leaches into the taaget's psyche and will now take 2d6 psychic damage when ever it tires to make an attack action against you or targets you with a spell. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.",
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
        cost: "No",
        spellText: "You a touch a creature and fill it with the energy of a second sun rise over the desert as radiant grow rises above your head. If this is the first time you cast this spell since your last long rest, then the target gains 70 hit points. If this is the second time or more then instead the target is healed to full hit points and cured of all non-magic disease and cured of any conditions (etc. ...blinded, deafened, paralyzed and poisoned).",
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
        set: "Mystical Archive",
        college: "Quandrix",
        addtionNotes: "",
        tags: {
            1: "Utility",
        },
        range: "Self",
        components: "V, S, M (caster's spell book)",
        cost: "No",
        spellText: "Choose three spells your character knows but does not have prepared. These spells are now prepared until you next long rest. Pick two spells your character has prepared, these spells are now no longer perpared.",
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
        duration: "",
        classNames: "Druid, Sorcerer",
        classes: {
            1: "Druid",
            2: "Sorcerer"
        },
        set: "Mystical Archive",
        collegeImg: "",
        college: "Witherbloom",
        addtionNotes: "",
        tags: {
            1: "Buff",
        },
        range: "Self",
        components: "V, S, M(a seed acorn or bulb)",
        cost: "No",
        spellText: "You focus on pulling raw magic through the weave itself to empower you. For the remainder of the spell's duration, whenever you expend a spell slot 1st level or higher to cast a spell you many choose to cast that spell at a higher level. You may not choose to cast that spell at a spell level you don't yet have the ability to cast it at yet. For each level above the original spell slot expended you choose, you take 1d20 necrotic damage per level, effects or abilities cannot reduce this damage or redirect it.",
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
        set: "Mystical Archive",
        collegeImg: "",
        college: "Oriq",
        addtionNotes: "",
        tags: {
            1: "Random",
            2: "Combat"
        },
        range: "60 feet",
        components: "V, S, M(a die with 6 or more sides that isn't loaded)",
        cost: "No",
        spellText: "You call on the chaotic energies of the weave to change a single creature within range. The creature being targeted makes a charisma saving throw, on a failed roll a 1d100 and then replace the targeted creature with another creature or object on the table matching the roll. Any non-magic gear the creature had on them before the spell was cast melds into the creatures or object new form. Any magic items on the creature become unequipped and unattuned and fall on the ground directly beneath the creature. If the creature was previously hostile, then it remains hostile if it becomes a new creature.The target assumes the hit points of its new form.<br><b>1</b> - The Deck of Many Things<br><b>2</b> - A diamond worth 500 gp<br><b>3</b> - A +1 long bow<br><b>4</b> - A +1 longsword<br><b>5</b> - A gold necklace worth 50 gp<br><b>6</b> - A 5 foot by 3 foot framed painting of the creature<br><b>7</b> - A single gold piece<br><b>8</b> - A single Copper piece<br><b>9-10</b> - Awakened shrub<br><b>11-12</b> - A goat<br><b>13-14</b> - A zombie<br><b>15-16</b> - A Rust monster<br><b>17-18</b> - A Bugbear<br><b>19-20</b> - A Dire wolf 500 gp<br><b>21-22</b> - A mimic pretending to be a object of the DM's choice<br><b>23-24</b> - An Ogre<br><b>25-26</b> - A Gelatinous Cube<br><b>27-28</b> - A Displacer beast<br><b>29-30</b> - A Hell hound<br><b>31-32</b> - A Manticore<br><b>33-34</b> - An Owl bear<br><b>35-36</b> - A Black pudding<br><b>37-38</b> - A Ghost<br><b>39-40</b> - A Troll<br><b>41-42</b> - An Air elemental<br><b>43-44</b> - An Earth elemental<br><b>45-46</b> - A Fire elemental<br><b>47-48</b> - A Water elemental<br><b>49-50</b> - A Mammoth<br><b>51-52</b> - A Medusa<br><b>53-54</b> - A Wyren<br><b>55-56</b> - A Stone giant<br><b>57-58</b> - A Hydra<br><b>59-60</b> - A Treant gp<br><b>61-62</b> - A Stone Golem<br><b>63-64</b> - A Young Gold Dragon<br><b>65-66</b> - A Young Red Dragon<br><b>67-68</b> - A Djinni<br><b>69-70</b> - A Roc<br><b>71-72</b> - A Beholder<br><b>73-74</b> - A Storm Giant<br><b>75-76</b> - A Vampire<br><b>77-78</b> - A Purple Worm<br><b>79-80</b> - An Iron Golem<br><b>81-82</b> - An Androsphinx<br><b>83-84</b> - A Death Knight<br><b>85-86</b> - A Dragon Turtle<br><b>87-88</b> - A Balor<br><b>89-90</b> - A Pit Fiend<br><b>91-92</b> - A Solar<br><b>93-94</b> - A Kraken<br><b>95-96</b> - An Ancient Gold Dragon<br><b>97-98</b> - An Ancient Red Dragon<br><b>99</b> - A Tarrasque<br><b>100</b> - Roll two more times a create both rolls<br>",
        atHigherLevel: "<strong>At Higher Levels. </strong>When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.",
        imageUrl: "chaosWarp",
        imageDiscription: "A Dragon being transformed into a box",
        // So I made a point to make creatures from each cr and then some items 
    },
    Counterspell: {
        name: "Counterspell",
        level: 3,
        levelName: "3rd",
        school: "Abjuration",
        ritual: "",
        castingTime: "1 Reaction *",
        duration: "Instantaneous",
        classNames: "Sorcerer, Warlock, Wizard",
        classes: {
            1: "Sorcerer",
            2: "Wizard",
            3: "Warlock",
        },
        set: "Mystical Archive",
        collegeImg: "",
        college: "Quandrix",
        addtionNotes: "* - which you take when you see a creature within 60 feet of you casting a spell",
        tags: {
            1: "Negation",
        },
        range: "60 ft",
        components: "S",
        cost: "No",
        spellText: "You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails and has no effect.<br>",
        atHigherLevel: "<strong>At Higher Levels.</strong> When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used.",
        imageUrl: "counterspell",
        imageDiscription: "A hand canceling out another person's spell",
        //Same as the PHB
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
        set: "Mystical Archive",
        collegeImg: "",
        college: "Oriq",
        addtionNotes: "",
        tags: {
            1: "Combat",
            2: "Modular",
            3: "AoE",
        },
        range: "personal",
        components: "V, S, M(a coin with a dragon on one side, worth 1 gp)",
        cost: "Yes",
        spellText: "You call upon the strands of fate to unleash the raw power of potential futures. You pick dragon or non-dragon, then each creature of the chosen type within a 120 foot circle centered on you makes a constitution saving throw. All creatures take 10d10 damage on a failed save, half that on a successful one. All dragons within 100 miles of the caster become instantly aware that this spell was cast and where it was cast. The caster has disadvantage on all wisdom saving throws against the scry spell cast by dragons for the next 24 hours. ",
        atHigherLevel: "",
        imageUrl: "CruxOfFate",
        imageDiscription: "To dragons in a duel",
        // This is does damage to dragon or non-dragons like the card but the damage is not yet set in stone. Right now it's high so that if you cast it to hit no dragons it will hurt your party as well as the enemy npcs
    },
    Despark: {
        name: "Despark",
        level: 4,
        levelName: "4th",
        school: "Necromancy",
        ritual: "",
        castingTime: "1 Action",
        duration: "Instantaneous",
        classNames: "Druid, Cleric",
        classes: {
            1: "Druid",
            2:"Cleric",
        },
        set: "Mystical Archive",
        collegeImg: "",
        college: "Oriq",
        addtionNotes: "",
        tags: {
            1: "Damage",
        },
        range: "30 Feet",
        components: "V, S",
        cost: "No",
        spellText: "You call upon the forces of death to sever a soul's attachment to the body it is in. You choose one target within range, they make a Constitution saving throw. On a success nothing happens. On a failure, the target takes 10d8 necrotic damage. If this damage would be enough to kill the target and the target has some way of rejuvenating or resurrecting its body, such as devils reappearing in the nine hells when killed or a lich spawning a new body from it's phylactery, then this spell prevents that rejuvenation and they die like most other creatures. This spell doesn't stop future creatures using magic to bring the target back to life, such as with a Resurrection spell.",
        atHigherLevel: "<strong>At Higher Levels. </strong> When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.",
        imageUrl: "Despark",
        imageDiscription: "A dragon pulling the life force out of several people",
        //I decided to involve the exile effect of the spell
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
        set: "Mystical Archive",
        collegeImg: "",
        college: "Silverquill",
        addtionNotes: "",
        tags: {
            1: "Damage",
            2: "Debuff"
        },
        range: "60 feet",
        components: "V, S",
        cost: "No",
        spellText: "You channel the energies of doom itself to harm a foe. Make a ranged attack roll against a target in range. On a hit, the target takes 3d6 necrotic damage and 3d6 psychic damage. The target's mind is then filled with thoughts of its own doom. The target has disadvantage on attack roles made against you until your next turn.",
        atHigherLevel: "<strong>At Higher Levels. </strong> When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 nerotic and psychic for each slot level above 2nd.",
        imageUrl: "DoomBlade",
        imageDiscription: "An angel being harm by a dark blade",
        //I knew it needed to be a necrotic damage spell, i then decided to double down on the doom part of doomblade
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
        set: "Mystical Archive",
        collegeImg: "",
        college: "Silverquill",
        addtionNotes: "",
        tags: {
            1: "Control",
        },
        range: "30 feet",
        components: "V, S, M(a rusty nail)",
        cost: "No",
        spellText: "You tax the mind of the foe. One target in range makes a Wisdom saving throw. On a failure, they have disadvanatge on concentration checks for the duration of the spell.",
        atHigherLevel: "<strong>At Higher Levels. </strong> When you cast this spell using a spell slot of 2nd level or higher, the duration increases by 1 round for each slot level above 2nd.",
        imageUrl: "duress",
        imageDiscription: "",
        // orginally I was thinking of allowing this spell to see a spell caster's spell list and block one spell for a round but then i decided to give that to Inquisition of Kozilek because the name is better, so I went with an effect that matches the name of the spell while still affecting spell casting so it's "somewhat" similar to hand attack.
    },
    Electrolyze: {
        name: "Electrolyze",
        level: 2,
        levelName: "2nd",
        school: "Evocation",
        ritual: "",
        castingTime: "1 action",
        duration: "Instantaneous",
        classNames: "Sorcerer, Wizard, Artificer",
        classes: {
            1: "Sorcerer",
            2: "Wizard",
            3: "Artificer"
        },
        set: "Mystical Archive",
        collegeImg: "",
        college: "Prismari",
        addtionNotes: "",
        tags: {
            1: "Damage",
        },
        range: "120 ft",
        components: "V, S, M (Two peices of copper wire twisted together)",
        cost: "No",
        spellText: "You create three rays of lightning and shoot them at targets within range. You can shoot them at one target or several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 lightning damage.",
        atHigherLevel: "<strong>At Higher Levels. </strong> When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd.",
        imageUrl: "electrolyze",
        imageDiscription: "A mage chaennling a ball of lightning",
        // literally just scoring ray but with lightning damage
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
        set: "Mystical Archive",
        collegeImg: "",
        college: "Silverquill",
        addtionNotes: "",
        tags: {
            1: "Damage",
        },
        range: "60 ft",
        components: "V, S",
        cost: "No",
        spellText: "You focus on ending the life force of one creature. Choose a target in range, if the creature you choose currently has 50 hit points or less, it dies. Otherwise, the spell has no effect.",
        atHigherLevel: "",
        imageUrl: "eliminate",
        imageDiscription: "A person disinitgating starting at the back of the head",
        // this was fairly easy, I just made a half power word kill. I removed bard because that makes more sense for a word based spell and made it necromancy cause I feel it makes more sense
    },
    Ephemerate: {
        name: "Ephemerate",
        level: 1,
        levelName: "1st",
        school: "Abjuration",
        ritual: "",
        castingTime: "1 action",
        duration: "1 round",
        classNames: "Cleric",
        classes: {
            1: "Cleric",
        },
        set: "Mystical Archive",
        collegeImg: "",
        college: "Silverquill",
        addtionNotes: "",
        tags: {
            1: "Protect",
        },
        range: "30 ft",
        components: "V, S",
        cost: "No",
        spellText: "You call upon the forces of the void to shield an ally. Choose a willing target, they are sent to a harmless demiplane for the duration of the spell. While there, the target cannot be targeted with any form of magic (such as a scrying spell), and if they are below 0 hit points they are stabilized at one hit point. If they were prone when this spell was cast, they may choose to be upright when it ends.",
        atHigherLevel: "",
        imageUrl: "ephemerate",
        imageDiscription: "An angel phasing out of reality",
        //Couldn't think a way to put rebound into the spell so know it's just the classic flicker to dodge damage or spells
    },
    Grapeshot: {
        name: "Grapeshot",
        level: 1,
        levelName: "1st",
        school: "Evocation",
        ritual: "",
        castingTime: "1 action",
        duration: "Instantaneous",
        classNames: "Wizard, Sorcerer",
        classes: {
            1: "Wizard",
            2: "Sorcerer",
        },
        set: "Mystical Archive",
        collegeImg: "",
        college: "Prismari",
        addtionNotes: "",
        tags: {
            1: "Damage",
            2: "Storm"
        },
        range: "60 ft",
        components: "V, S, M(three or more ball bearings)",
        cost: "No",
        spellText: "You pull upon the strings of the The Weave to cast magic based on the echo of spells cast before. You create a ray and fire it at a target within range. Make a ranged spell attack, on a hit, it deals 2d6 fire damage to the target.<br> <strong>Storm: </strong> For each other spell cast with in 120 ft. since the end of your last turn create a copy of this spell, you make choose new targets that are within range for each copy of this spell.",
        atHigherLevel: "",
        imageUrl: "grapeshot",
        imageDiscription: "A wizard casting a spell hit several monsters at once.",
        // pretty straight forward, a scoring ray with a storm ability stabled on to it
    },
    InquisitionOfKozilek: {
        name: "Inquisition of Kozilek",
        level: 1,
        levelName: "1st",
        school: "Enchantment",
        ritual: "",
        castingTime: "1 action",
        duration: "Concentration, up to 1 mintue",
        classNames: "Warlock",
        classes: {
            1: "Warlock",
        },
        set: "Mystical Archive",
        collegeImg: "",
        college: "Oriq",
        addtionNotes: "",
        tags: {
            1: "Control",
        },
        range: "120 ft.",
        components: "V, S, M(a shard of black ceramic material)",
        cost: "No",
        spellText: "You call upon the eldrict power of the 'Butcher of Truth' to block the spells of another creature. Choose a target in range, that target makes an Intelligence saving throw. On a failure, you now know all spells that creature has perpared if they have any. Choose one of those spells from 1st to 3rd level, for the duration of this spell that creature cannot cast that spell, even if they use a spell slot above 3rd level. At the end of each of its turns, the target can make another Intelligence saving throw. On a success, the spell ends on the target.",
        atHigherLevel: "",
        imageUrl: "InquisitionOfKozilek",
        imageDiscription: "A giant eldritch being attacking the mind of a human",
        //Thought this was a way to do hand attack in D&D
    },
    LightningBolt
    : {
        name: "Lightning Bolt",
        level: 3,
        levelName: "3rd",
        school: "Evocation",
        ritual: "",
        castingTime: "1 Action",
        duration: "Instantaneous",
        classNames: "Sorcerer, Wizard",
        classes: {
            1: "Sorcerer",
            2: "Wizard",
        },
        set: "Mystical Archive",
        collegeImg: "",
        college: "Prismari",
        addtionNotes: "",
        tags: {
            1: "Damage",
        },
        range: "Self (100 ft.)",
        components: "V, S, M (a bit of fur and a rod of amber, crystal, or glass)",
        cost: "No",
        spellText: "A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one.<br> The lightning ignites flammable objects in the area that aren't being worn or carried.",
        atHigherLevel: "<strong>At Higher Levels.</strong> When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
        imageUrl: "lightningBolt",
        imageDiscription: "A wizard throwing a bolt of lightning.",
        //just the spell PHB
    },
    LightningHelix: {
        name: "Lightning Helix",
        level: 2,
        levelName: "2nd",
        school: "Evocation",
        ritual: "",
        castingTime: "1 Action",
        duration: "Instantaneous",
        classNames: "Cleric, Paladin",
        classes: {
            1: "Cleric",
            2: "Paladin"
        },
        set: "Mystical Archive",
        collegeImg: "",
        college: "Lorehold",
        addtionNotes: "",
        tags: {
            1: "Damage",
            2: "Healing" 
        },
        range: "30 ft.",
        components: "V, S, M (a bit of cotton and a rod of amber, crystal, or glass)",
        cost: "No",
        spellText: "You channel a paradox of harm and healing and channel it into a blast of lightning. Make a ranged attack roll against a target in range. On a hit, you deal 4d6 lightning damage to the target, then you regain Hit Points equal to half the damage dealt.",
        atHigherLevel: "<strong>At Higher Levels. </strong> When you cast this spell using a spell slot of 3th Level or higher, the damage increases by 1d6 for each slot level above 2rd. ",
        imageUrl: "lightningHelix",
        imageDiscription: "A warrior channeling a ball of lightning",
        //Lighting strike with a healing ability
    },
    ManaTithe: {
        name: "Mana Tithe",
        level: 1,
        levelName: "1st",
        school: "Abjuration",
        ritual: "",
        castingTime: "1 Reaction *",
        duration: "Instantaneous",
        classNames: "Cleric",
        classes: {
            1: "Cleric",
        },
        set: "Mystical Archive",
        collegeImg: "Silverquill",
        college: "Silverquill",
        addtionNotes: "* - which you take when you see a creature within 60 feet of you casting a spell ",
        tags: {
            1: "Negation",
        },
        range: "60 ft",
        components: "",
        cost: "No",
        spellText: "You call upon threads of The Weave to tax another spellcasters's spell. Pick a target in range that is casting a spell. The spellcaster may now use up a spell slot of 1st level or higher, if they don't its spell fails and has no effect.",
        atHigherLevel: "",
        imageUrl: "manaTithe",
        imageDiscription: "A wizard cowing to a scale with money falling off of it.",
        //a soft counterspell
    },
    MemoryLapse: {
        name: "Memory Lapse",
        level: 2,
        levelName: "2nd",
        school: "Abjuration",
        ritual: "",
        castingTime: "1 Reaction *",
        duration: "Instantaneous",
        classNames: "Sorcerer, Warlock, Wizard",
        classes: {
            1: "Sorcerer",
            2: "Wizard",
            3: "Warlock",
        },
        set: "Mystical Archive",
        collegeImg: "",
        college: "Quandrix",
        addtionNotes: "* - which you take when you see a creature within 60 feet of you casting a spell. ",
        tags: {
            1: "Negation",
        },
        range: "60 ft",
        components: "s",
        cost: "No",
        spellText: "You attempt to interrupt a creature in the process of casting a spell. Make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails and has no effect however the target gets any spent spell slots used by the countered spell restored.",
        atHigherLevel: "",
        imageUrl: "memoryLapse",
        imageDiscription: "A woman reading a book. While she is reading the infromation she is learning is falling out of her head.",
        //This might be overpower, its doesn't lose the oppents spell slots but it could nerf enemy caster's move economy
    },
    MindsDesire: {
        name: "Mind's Desire",
        level: 6,
        levelName: "6th",
        school: "Conjuration",
        ritual: "",
        castingTime: "1 action",
        duration: "Instantaneous",
        classNames: "Wizard, Sorcerer",
        classes: {
            1: "Wizard",
            2: "Sorcerer"
        },
        set: "MysticalArchive",
        collegeImg: "",
        college: "Quandrix",
        addtionNotes: "",
        tags: {
            1: "Storm",
            2: "Random"
        },
        range: "Self",
        components: "V, S, M(a crystal with multi facets when held up to the eye)",
        cost: "No",
        spellText: "You call upon the magic inside of you to explode form into the world in every way imaginable. Pick any 1st level or higher spell you have perpared at random. You may cast that spell without using a spell slot. <br> <strong>Storm: </strong> For each other spell cast within 120 ft. since the end of your last turn, create a copy of this spell, you may choose new targets that are within range for each copy of this spell.",
        atHigherLevel: "",
        imageUrl: "mindsDesire",
        imageDiscription: "A wizard meditating, envision themelves traveling down a spiral stairway into their own mind",
        //Thinking of swtiching from prepared to known
    },
    Shock: {
        name: "Shock",
        level: 1,
        levelName: "1st",
        school: "Evocation",
        ritual: "",
        castingTime: "1 Action",
        duration: "Instantaneous",
        classNames: "Sorcerer, Wizard, Druid",
        classes: {
            1: "Sorcerer",
            2: "Wizard",
            3: "Druid"
        },
        set: "Mystical Archive",
        collegeImg: "",
        college: "Prismari",
        addtionNotes: "",
        tags: {
            1: "Damage",
        },
        range: "60 ft",
        components: "V, S",
        cost: "No",
        spellText: "You charge a quick bolt of lightning and throw it at a foe. Choose a target in range then make a ranged spell attack. On a hit, the target takes 3d8 lightning damage.",
        atHigherLevel: "<strong>At Higher Levels.</strong> When you cast this spell using a spell slot of 2rd level or higher, the damage increases by 1d8 for each slot level above 1st.",
        imageUrl: "shock",
        imageDiscription: "A wizard throwning a ray of lgihtning",
        //a lower level lightning damage spell for lower level casters
    },
    TendrilsOfAgony: {
        name: "Tendrils of Agony",
        level: 4,
        levelName: "4th",
        school: "Necromancy",
        ritual: "",
        castingTime: "1 action",
        duration: "Instantaneous",
        classNames: "Wizard, Sorcerer, Warlock",
        classes: {
            1: "Wizard",
            2: "Sorcerer",
            3: "Warlock"
        },
        set: "Mystical Archive",
        collegeImg: "",
        college: "Oriq",
        addtionNotes: "",
        tags: {
            1: "Storm",
            2: "Damage",
            3: "Healing",
        },
        range: "60 ft..",
        components: "V, S",
        cost: "No",
        spellText: "You call on shadowy tendrils to attack your foes and heal your wounds. Make a ranged attack roll against a target in range, on hit you deal 2d6 necrotic damage to the target and you heal for half that amount <strong>Storm: </strong> For each other spell cast with in 120 ft. since the end of your last turn, create a copy of this spell, you make choose new targets that are within range for each copy of this spell.",
        atHigherLevel: "",
        imageUrl: "TendrilsOfAgony",
        imageDiscription: "A person's body being striped away by black magic",
        //vampirc touch with storm
    },
    WeatherTheStorm: {
            name: "Weather The Storm",
            level: 2,
            levelName: "2nd",
            school: "Evocation ",
            ritual: "",
            castingTime: "1 action",
            duration: "Instantaneous",
            classNames: "Druid, Ranger",
            classes: {
                1: "Druid",
                2: "Ranger",
            },
            set: "Mystical Archive",
            collegeImg: "",
            college: "Witherbloom",
            addtionNotes: "",
            tags: {
                1: "Storm",
                2: "Healing"
            },
            range: "30 ft",
            components: "",
            cost: "No",
            spellText: "Choose a willing target with 30 ft. They regain a number of Hit Points equal to 1d8 + your Spellcasting ability modifier. This spell has no Effect on Undead or Constructs. <strong>Storm: </strong> For each other spell cast within 120 ft. since the end of your last turn create a copy of this spell, you make choose new targets that are within range for each copy of this spell.",
            atHigherLevel: "",
            imageUrl: "weatherTheStorm",
            imageDiscription: "An elf meditating under a tree during a storm",
            //heal spell with storm
    },
    SnakeskinVeil: {
        name: "Snakeskin Veil",
        level: 1,
        levelName: "1st",
        school: "Transmutation",
        ritual: "",
        castingTime: "1 action",
        duration: "Instantaneous",
        classNames: "Druid, Ranger",
        classes: {
            1: "Druid",
            2: "Ranger"
        },
        set: "Mystical Archive",
        collegeImg: "",
        college: "Witherbloom",
        addtionNotes: "",
        tags: {
            1: "Healing",
            2: "Buff"
        },
        range: "Self",
        components: "V, S, M(a piece of repitlian shedded skin)",
        cost: "No",
        spellText: "You call on natural forces to shed damage from your body and shield you from future attacks. You regain hit points equal to 1d8 + your spellcasting ability modifier, until your next turn ranged spell attacks against you gain disadvantage.",
        atHigherLevel: "",
        imageUrl: "snakeskinVeil",
        imageDiscription: "An sylvan man sheding skin while embraced by two snakes",
        //the disadvantage should mimic hexproof
    },
    UrzasRage: {
        name: "Urza's Fiery Rage",
        level: 3,
        levelName: "3rd",
        school: "Evocation",
        ritual: "",
        castingTime: "1 Action",
        duration: "Instantaneous",
        classNames: "Wizard, Sorcerer",
        classes: {
            1: "Wizard",
            2: "Sorcerer"
        },
        set: "Mystical Archive",
        collegeImg: "",
        college: "Lorehold",
        addtionNotes: "",
        tags: {
            1: "Damage",
        },
        range: "60 ft",
        components: "V, S, M(a copper cog)",
        cost: "No",
        spellText: "You channel righteous anger to lash out at a foe. Choose a target in range then make a ranged spell attack. On a hit, the target takes 5d10 fire damage.",
        atHigherLevel: "<strong>At Higher Levels.</strong> You may cast this spell at 8th level, if you do the damage is 15d10 fire damage on hit and ignore any fire resistance or immunity the target has, this spell also cannot be countered. (You can only cast this at level 3 or 8)",
        imageUrl: "urzasRage",
        imageDiscription: "An old wizard channeling fire while looking angry",
        //This is a more experimental spell, I tried to mimic the kicker ability by only allowing one higher level spell slot
    },
    CompulsiveResearch: {
        name: "Compulsive Research",
        level: 3,
        levelName: "3rd",
        school: "Divination",
        ritual: "Yes",
        castingTime: "10 mintues",
        duration: "1 Day",
        classNames: "Wizard",
        classes: {
            1: "Wizard",
        },
        set: "Mystical Archive",
        collegeImg: "",
        college: "Quandrix",
        addtionNotes: "",
        tags: {
            1: "",
        },
        range: "Self",
        components: "V, S, M(a cup of coffee)",
        cost: "No",
        spellText: "You call upon the desperation of students past to study your ass off. For the spell's duration, you can read or study all night without suffering exhaustion damage. You also gain advantage on one of either investigation, arcane, history, nature religion. You will not, however, gain any of the benefits on a long rest, such as healing, regaining spell slots or abilities.",
        atHigherLevel: "",
        imageUrl: "CompulsiveResearch",
        imageDiscription: "A man looking and three different magic glyths",
        //I thought it would good to add a more non-comabt spells, I thought this would be a spell that encouages players to do reaserch
    },
    StoneRain: {
        name: "Stone Rain",
        level: 3,
        levelName: "3rd",
        school: "Evocation",
        ritual: "",
        castingTime: "1 action",
        duration: "1 Minute",
        classNames: "Druid, Cleric",
        classes: {
            1: "Druid",
            2: "Cleric"
        },
        set: "Mystical Archive",
        collegeImg: "",
        college: "Lorehold",
        addtionNotes: "",
        tags: {
            1: "Damage",
            2: "Control",
            3: "AoE"
        },
        range: "100 ft",
        components: "V, S, M(a pebble)",
        cost: "No",
        spellText: "You channel stone rain from the heavens. Each creature in a 20-foot-radius cylinder must make a Dexterity saving throw. A target takes 6d6 bludgeoning damage on a failed save, or half as much damage on a successful one. The targeted area then becomes rough terrian for the spell's duration.",
        atHigherLevel: "<strong>At Higher Levels.</strong> When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
        imageUrl: "stoneRain",
        imageDiscription: "A man summoning a meter shower",
        //Land desstruction is to diffcult translate so I had a spell that made rough terrain
    },
    Infuriate: {
    name: "Infuriate",
        level: 1,
        levelName: "1st",
        school: "Enchantment",
        ritual: "",
        castingTime: "1 action",
        duration: "One round",
        classNames: "Bard, Wizard, Sorcerer",
        classes: {
            1: "Bard",
            2: "Wizard",
            3: "Sorcerer"
        },
        set: "Mystical Archive",
        collegeImg: "",
        college: "Prismari",
        addtionNotes: "",
        tags: {
            1: "Buff",
        },
        range: "Touch",
        components: "V, S",
        cost: "No",
        spellText: "You touch a willing creature and channel pure anger into it. Until the start of your next round, the target has advantage on melee attack rolls it makes and any creature making melee attacks against it also gain advantage.",
        atHigherLevel: "",
        imageUrl: "infuriate",
        imageDiscription: "An angry woman with buring fists.",
        //Functionally just barbarian rage
    },
    SignInBlood: {
        name: "Sign in Blood",
        level: 2,
        levelName: "2nd",
        school: "Divination",
        ritual: "Yes",
        castingTime: "1 mintue",
        duration: "1 month",
        classNames: "Warlock, Cleric",
        classes: {
            1: "Warlock",
            2: "Cleric"
        },
        set: "Mystical Archive",
        collegeImg: "",
        college: "Oriq",
        addtionNotes: "",
        tags: {
            1: "Knowledge",
            2: "Damage"
        },
        range: "Touch",
        components: "V, S, M(a vial of your own blood)",
        cost: "No",
        spellText: "You sign your name as a blood sigil on a flat surface or peice of paper. The first creature that reads it must make a wisdom saving throw. On a failure, they take 8d6 damage. The creature that first reads the sigil now knows you name, location at time of reading, how long it as been since you cast the spell and your likeness (this can be used for scrying purposes).",
        atHigherLevel: "<strong>At Higher Levels.</strong> When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d6 for each slot level above 2nd.",
        imageUrl: "signInBlood",
        imageDiscription: "A man putting his blood on a spell book",
        //this was a weird one, it was kind of expolsive runes 
    },
    TimeWarp: {
        name: "Time Warp",
        level: 9,
        levelName: "9th",
        school: "Transmutation",
        ritual: "",
        castingTime: "1 action",
        duration: "Instantaneous",
        classNames: "Sorcerer, Wizard",
        classes: {
            1: "Sorcerer",
            2: "Wizard"
        },
        set: "Mystical Archive",
        collegeImg: "Quandrix",
        college: "Quandrix",
        addtionNotes: "",
        tags: {
            1: "Control",
        },
        range: "Self",
        components: "V, S, M(a clockwork gear)",
        cost: "No",
        spellText: "Choose a target. You stop time for everyone but the target. No time passes for other Creatures, your current turn ends, while the target takes an extra turn during which it can use actions and move as normal.",
        atHigherLevel: "",
        imageUrl: "timeWarp",
        imageDiscription: "A mage spining a time vortex",
    },
    TeferisProtection: {
        name: "Teferi's Temporal Protection",
        level: 9,
        levelName: "9th",
        school: "Conjuration ",
        ritual: "",
        castingTime: "1 Action",
        duration: "1 Day",
        classNames: "Wizard, Sorcerer, Warlock",
        classes: {
            1: "Wizard",
            2: "Sorcerer",
            3: "Warlock"
        },
        set: "Mystical Archive",
        collegeImg: "",
        college: "Lorehold",
        addtionNotes: "",
        tags: {
            1: "Control",
            2: ""
        },
        range: "Self",
        components: "V, S",
        cost: "No",
        spellText: "You sunder time itself you protect those closest to you. Everything in a 30 ft sphere centered on you phases out of time. You cannot be perceived by anything outside of the sphere unless it can perceive time non linearly. Nothing can interact with the sphere. The area where the sphere is appears to have everything removed from it, this includes the ground. Anything that enters the space will not interact with anything in the sphere. Inside the sphere time does not function properly. You cannot lose hit points or die, any effect that would disappear after a set amount of time are frozen at the time of casting. You don't reroll any saves for effects that can be ended prematurely like being charmed. You cannot have short or long rests. You can see outside of the sphere and figures that enter the space the sphere was in casting appear semi-transparent inside of the relative location within the sphere. If you or any other creature inside the sphere step outside of the sphere you appear in the real timeline and it's time freezing effect not longer effect you. You cannot then reenter the time sphere. When the spell ends, the sphere reappears in the exact location that it was first cast in. Any creatures that occupy the same space as any other creature or object when the spell ends takes 10d10 force damage and is then push 5 ft toward an unoccupied space, if there is no direct in 5 ft that unoccuiped then this process repeats until they enter an unoccuiped space the short distance from when they started.",
        atHigherLevel: "",
        imageUrl: "teferisProtection",
        imageDiscription: "The Arch-Chronomancer Teferi casting the spell to hide a city.",
    },
    
};





app.innit = () => {
    console.log("started")
    app.populate();
    app.levelSelect();
    app.clear();
    app.schoolSelect();
    app.classSelect();
    app.costSelect();
    app.intro();
    app.collegeSelect();
    app.sourceSelect();
    app.tagPopulate();
    app.tagSelect();
    app.artSwitch();
    app.durationPopulate();
    app.durationSelect();
    var userlevel;
    var choosenSchool;
    var pickedClass;
    var pickedCost

};

app.populate = () => {
    $("#populateButton").on('click', function(){
        // console.log("Clicked Populate!")
        app.displayAll();
    })
}

app.displayAll = () => {
    app.depopulate();
    var pickedArt =$('#artSelection').val();
    console.log(pickedArt)
    var html1 = "";
    for (spell in spellBook){
        console.log(spellBook[spell].name)
        // html1 += `<p>${spellBook[spell].name}</p><br>`
        if (pickedArt == "MYA"){
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
                
            <div class="watermark">
                <img src="assets/${spellBook[spell].college}.png">
            </div>
        </div>
        `;
        }
        else if(pickedArt =="JAP"){
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
                    <img src="assets/${spellBook[spell].imageUrl}Alt.jpg" alt="${spellBook[spell].imageDiscription}" width="300" height="300">
                    </div>
                <img src="assets/${spellBook[spell].college}.png">
           
        </div>
        `;
        }
 
}
$(".spellArea").append(html1);

}

app.levelSelect = () =>{
    $("#levelSelection").on('change', function(){
        console.log("clicked level selection")
        userLevel =$('#levelSelection').val();
        var pickedArt =$('#artSelection').val();
        console.log(userLevel);
        // $(".spellBook").empty();
        app.depopulate();
        // app.getSpell(userLevel);
        var html1 = "";
        for (spell in spellBook){
            if (userLevel == spellBook[spell].level){
                console.log(spellBook[spell].name)
                // html1 += `<p>${spellBook[spell].name}</p><br>`
                if (pickedArt == "MYA"){
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
                        <div class="watermark">
                            <img src="assets/${spellBook[spell].college}.png">
                        </div>
                   
                </div>
                `;
                }
                else if(pickedArt =="JAP"){
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
                            <img src="assets/${spellBook[spell].imageUrl}Alt.jpg" alt="${spellBook[spell].imageDiscription}" width="300" height="300">
                            </div>
                        <div class="watermark">
                            <img src="assets/${spellBook[spell].college}.png">
                        </div>
                   
                </div>
                `;
        }}
        
     }$(".spellArea").append(html1);
    })}
    


app.schoolSelect = () =>{
    $("#schoolSelection").on('change', function(){
        console.log("clicked school selection")
        choosenSchool =$('#schoolSelection').val();
        var pickedArt =$('#artSelection').val();
        console.log(choosenSchool);
        // $(".spellBook").empty();
        app.depopulate();
        // app.getSpell(userLevel);
        var html1 = "";
        for (spell in spellBook){
            if (choosenSchool == spellBook[spell].school){
                console.log(spellBook[spell].name)
                // html1 += `<p>${spellBook[spell].name}</p><br>`
                if (pickedArt == "MYA"){
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
                        <div class="watermark">
                            <img src="assets/${spellBook[spell].college}.png">
                        </div>
                   
                </div>
                `;
                }
                else if(pickedArt =="JAP"){
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
                            <img src="assets/${spellBook[spell].imageUrl}Alt.jpg" alt="${spellBook[spell].imageDiscription}" width="300" height="300">
                            </div>
                        <div class="watermark">
                            <img src="assets/${spellBook[spell].college}.png">
                        </div>
                   
                </div>
                `;
        }}
        
     }$(".spellArea").append(html1);
    })}

app.classSelect = () =>{
    $("#classSelection").on('change', function(){
        console.log("clicked class selection")
        choosenClass =$('#classSelection').val();
        var pickedArt =$('#artSelection').val();
        console.log(choosenClass);
        // $(".spellBook").empty();
        app.depopulate();
        // app.getSpell(userLevel);
        var html1 = "";
        for (spell in spellBook){
            for (pickedClass in spellBook[spell].classes){
                if (spellBook[spell].classes[pickedClass] == choosenClass){
                    console.log(spellBook[spell].name);
                    if (pickedArt == "MYA"){
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
                            <div class="watermark">
                                <img src="assets/${spellBook[spell].college}.png">
                            </div>
                       
                    </div>
                    `;
                    }
                    else if(pickedArt =="JAP"){
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
                                <img src="assets/${spellBook[spell].imageUrl}Alt.jpg" alt="${spellBook[spell].imageDiscription}" width="300" height="300">
                                </div>
                            <div class="watermark">
                                <img src="assets/${spellBook[spell].college}.png">
                            </div>
                       
                    </div>
                    `;
            }}
            
         }
    }$(".spellArea").append(html1);
})}

app.collegeSelect = () =>{
    $("#collegeSelection").on('change', function(){
        console.log("clicked college selection")
        choosenCollege =$('#collegeSelection').val();
        var pickedArt =$('#artSelection').val();
        console.log(choosenCollege);
        // $(".spellBook").empty();
        app.depopulate();
        // app.getSpell(userLevel);
        var html1 = "";
        for (spell in spellBook){
            if (choosenCollege == spellBook[spell].college){
                console.log(spellBook[spell].name)
                // html1 += `<p>${spellBook[spell].name}</p><br>`
                if (pickedArt == "MYA"){
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
                        <div class="watermark">
                            <img src="assets/${spellBook[spell].college}.png">
                        </div>
                   
                </div>
                `;
                }
                else if(pickedArt =="JAP"){
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
                            <img src="assets/${spellBook[spell].imageUrl}Alt.jpg" alt="${spellBook[spell].imageDiscription}" width="300" height="300">
                            </div>
                        <div class="watermark">
                            <img src="assets/${spellBook[spell].college}.png">
                        </div>
                   
                </div>
                `;
        }}
        
    }$(".spellArea").append(html1);
})}

app.sourceSelect = () =>{
    $("#sourceSelection").on('change', function(){
        console.log("clicked source selection")
        choosenSource =$('#sourceSelection').val();
        var pickedArt =$('#artSelection').val();
        console.log(sourceSelection);
        // $(".spellBook").empty();
        app.depopulate();
        // app.getSpell(userLevel);
        var html1 = "";
        for (spell in spellBook){
            if (choosenSource == spellBook[spell].set){
                console.log(spellBook[spell].name)
                // html1 += `<p>${spellBook[spell].name}</p><br>`
                if (pickedArt == "MYA"){
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
                        <div class="watermark">
                            <img src="assets/${spellBook[spell].college}.png">
                        </div>
                   
                </div>
                `;
                }
                else if(pickedArt =="JAP"){
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
                            <img src="assets/${spellBook[spell].imageUrl}Alt.jpg" alt="${spellBook[spell].imageDiscription}" width="300" height="300">
                            </div>
                        <div class="watermark">
                            <img src="assets/${spellBook[spell].college}.png">
                        </div>
                   
                </div>
                `;
        }}
        
    }$(".spellArea").append(html1);
})}

app.costSelect = () =>{
    $("#costSelection").on('change', function(){
        console.log("clicked cost selection")
        pickedCost =$('#costSelection').val();
        var pickedArt =$('#artSelection').val();
        console.log(pickedCost);
        // $(".spellBook").empty();
        app.depopulate();
        // app.getSpell(userLevel);
        var html1 = "";
        for (spell in spellBook){
            if (pickedCost == spellBook[spell].cost){
                console.log(spellBook[spell].name)
                // html1 += `<p>${spellBook[spell].name}</p><br>`
                if (pickedArt == "MYA"){
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
                        <div class="watermark">
                            <img src="assets/${spellBook[spell].college}.png">
                        </div>
                   
                </div>
                `;
                }
                else if(pickedArt =="JAP"){
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
                            <img src="assets/${spellBook[spell].imageUrl}Alt.jpg" alt="${spellBook[spell].imageDiscription}" width="300" height="300">
                            </div>
                        <div class="watermark">
                            <img src="assets/${spellBook[spell].college}.png">
                        </div>
                   
                </div>
                `;
        }}
        
    }$(".spellArea").append(html1);
})}
    

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

app.intro = () => {
    $(".book").on('click', function(){
        console.log("Book Clicked!")
        
        var introArea = document.querySelector('.Intro');
        introArea.style.display = "none"
        var selectorArea = document.querySelector('.mainBody');
        selectorArea.style.display = "inline-block"
    })
}

app.tagPopulate = () => {
    var html2 = `<select name="tagSelection" id="tagSelection">
    <option value="">---</option>`;
    var uniqueTags = [];
    for(spell in spellBook){
        for(tag in spellBook[spell].tags){
            if(uniqueTags.includes((spellBook[spell].tags[tag])) == false)
            uniqueTags.push(spellBook[spell].tags[tag]);
        }

        // console.log(spellBook[spell].tags[tag])


    }
    console.log(uniqueTags)
    var tagLength = uniqueTags.length;
    for(var n = 0;  n < tagLength; n++){
        // console.log(uniqueTags[n])
        html2 +=`
        <option value="${uniqueTags[n]}">${uniqueTags[n]}</option>
        `
    }
    html2 +="</select>"
    $(".tagArea").append(html2);

}



app.tagSelect = () =>{
    $("#tagSelection").on('change', function(){
        console.log("clicked tag selection")
        choosenTag =$('#tagSelection').val();
        var pickedArt =$('#artSelection').val();
        console.log(choosenTag);
        // $(".spellBook").empty();
        app.depopulate();
        // app.getSpell(userLevel);
        var html1 = "";
        for (spell in spellBook){
            for (pickedTag in spellBook[spell].tags){
                if (spellBook[spell].tags[pickedTag] == choosenTag){
                    console.log(spellBook[spell].name);
                    if (pickedArt == "MYA"){
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
                            <div class="watermark">
                                <img src="assets/${spellBook[spell].college}.png">
                            </div>
                       
                    </div>
                    `;
                    }
                    else if(pickedArt =="JAP"){
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
                                <img src="assets/${spellBook[spell].imageUrl}Alt.jpg" alt="${spellBook[spell].imageDiscription}" width="300" height="300">
                                </div>
                            <div class="watermark">
                                <img src="assets/${spellBook[spell].college}.png">
                            </div>
                       
                    </div>
                    `;
            }}
            
         }
    }$(".spellArea").append(html1);
})}

app.durationPopulate = () => {
    var html2 = `<select name="durationSelection" id="durationSelection">
    <option value="">---</option>`;
    var uniqueDuration = [];
    for(spell in spellBook){
        if(uniqueDuration.includes((spellBook[spell].duration)) == false)
        uniqueDuration.push(spellBook[spell].duration);
        

        // console.log(spellBook[spell].tags[tag])


    }
    console.log(uniqueDuration)
    var durationLength = uniqueDuration.length;
    for(var n = 0;  n < durationLength; n++){
        // console.log(uniqueTags[n])
        html2 +=`
        <option value="${uniqueDuration[n]}">${uniqueDuration[n]}</option>
        `
    }
    html2 +="</select>"
    $(".durationArea").append(html2);

}

app.durationSelect = () =>{
    $("#durationSelection").on('change', function(){
        console.log("clicked duration selection")
        choosenDuration =$('#durationlSelection').val();
        var pickedArt =$('#artSelection').val();
        console.log(choosenDuration);
        // $(".spellBook").empty();
        app.depopulate();
        // app.getSpell(userLevel);
        var html1 = "";
        for (spell in spellBook){
            if (durationSchool == spellBook[spell].duration){
                console.log(spellBook[spell].duration)
                // html1 += `<p>${spellBook[spell].name}</p><br>`
                if (pickedArt == "MYA"){
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
                        <div class="watermark">
                            <img src="assets/${spellBook[spell].college}.png">
                        </div>                   
                </div>
                `;
                }
                else if(pickedArt =="JAP"){
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
                            <img src="assets/${spellBook[spell].imageUrl}Alt.jpg" alt="${spellBook[spell].imageDiscription}" width="300" height="300">
                            </div>
                        <div class="watermark">
                            <img src="assets/${spellBook[spell].college}.png">
                        </div>
                   
                </div>
                `;
        }}
        
     }$(".spellArea").append(html1);
    })}


app.artSwitch = () =>{
    console.log("art switch active")
    var switchcounter = 0;
    $("#AltButton").on('click', function(){

        console.log("art switch clicked")
        $("#spellImg").empty();
        if (switchcounter % 2 == 0){
            var htmlspell = '<img src="assets/${spellBook[spell].imageUrl}Alt.jpg" alt="${spellBook[spell].imageDiscription}" width="300" height="300"></img>'
        }
        else {
            var htmlspell = '<img src="assets/${spellBook[spell].imageUrl}.jpg" alt="${spellBook[spell].imageDiscription}" width="300" height="300"></img>'
        }
        $(".spellImg").append(htmlspell);
        switchcounter += 1;

    })
}

$(function(){
    app.innit();
    
})