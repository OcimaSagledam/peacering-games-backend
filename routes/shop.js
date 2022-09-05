var express = require('express');
var router = express.Router();

const ShopItem = require('../models/shop_item')

router.get('/test', async function (req, res, next) {
    console.log("entered shop route !!!")
    const newItem = new ShopItem({
        name: "Percy's Workshop of Everything",
        price: 60,
        short_description: "Ready to dive into our biggest book yet? Percy’s Workshop of Everything is a book packed with new rules, new subclasses for all of your favorite classes, including the Artificer, new magic items, new spells, new mundane weapons and more. The book also introduces new transmogrifying spells that grow with your character.",
        url: "http://localhost:4000/images/shopItems/percys%20workshop%20storepage.png",
        urlHP: "http://localhost:4000/images/shopItems/percys%20workshop%20homepage.png"
    })

    try {
        await newItem.save()
        res.send(newItem);
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
});

router.get('/seed', async function (req, res, next) {
    const items = [{
        name: "Planejammer for 5e [PDF]",
        price: 5,
        short_description: "Feeling like running a campaign set in space? Don’t know how to handle travel through space in a fantasy setting? Spelljammer for 5e is our reimagining of the rules created in 2e for space traversal in Dungeons & Dragons. This product includes rules for powering your ship in order to fly through space, rules for combat in space, and much more.",
        url: "/"
    }, {
        name: "Artificer Subclass Collection [PDF]",
        price: 2,
        short_description: "Wish you could pilot a powerful machine, or walk away from explosions as the coolest guy around? Artificer Subclass Collection includes the Machinist and Grenadier subclasses created for the Artificer class, as well as including new Artificer Infusions, giving you new ways to create and customize your character.",
        url: "/"
    }, {
        name: "Barbarian Subclass Collection [PDF]",
        price: 3,
        short_description: "Show of natures true wrath with three new subclasses for the Barbarian, including the Path of the Comet, the Path of the Haymaker, and the Path of the Ironblood.",
        url: "/"
    }, {
        name: "Bard Subclass Collection [PDF]",
        price: 2,
        short_description: "Steal the show with two new Bard Colleges, the College of Silence that can create magic without a sound, and the College of the Masks that evokes joy and sorrow upon all who witness their performance.",
        url: "/"
    }, {
        name: "Druid Subclass Collection [PDF]",
        price: 2,
        short_description: "Nature calls for you aid, and you must abid its request! Fend off those that seek to destroy the natural world with two new Druid Subclasses, the ever evolving Circle of Metamorphosis, and the branching Circle of the Rootcaller.",
        url: "/"
    }, {
        name: "Fighter Subclass Collection [PDF]",
        price: 2,
        short_description: "Your friends call to arms. The rise of gunpowder has changed the ways of war forever. Play as The Musketeer or as the Technomancy Knight, one of the two new Martial Archetypes that know their way around these new powerful and destructive firearms.",
        url: "/"
    }, {
        name: "Paladin Subclass Collection [PDF]",
        price: 2,
        short_description: "Abid new oaths and gain new powers with two unique Paladin Subclasses, Oath of Balance and the Oath of Exploration.",
        url: "/"
    }, {
        name: "Ranger Subclass Collection [PDF]",
        price: 2,
        short_description: "New guardians of the world are unearthed! Form a symbiotic replationship with an aberration as a Mind-Meld Guardian, or practice mithridatism as a Venomous Sentry to strengthen yourself while poisoned.",
        url: "/"
    }, {
        name: "Rogue Subclass Collection [PDF]",
        price: 2,
        short_description: "Be as quick as lighting or a silent shadow with two new Rogueish Archetypes: The Ninja and the Arclight.",
        url: "/"
    }
        , {
        name: "Sorcerer Subclass Collection [PDF]",
        price: 3,
        short_description: "Explore new ways to obtain magical abilities through the Heart of the Machine, the Medusa Bloodline, and the Yeti Bloodline Subclasses for the Sorcerer Class.",
        url: "/"
    }, {
        name: "Warlock Subclass Collection [PDF]",
        price: 2,
        short_description: "New dark and powerful magic has been unearthed! Strike a pact with a deathless entity known as the Gravecaller, or a Timeless entitiy with two new Patrons for the Warlock Class.",
        url: "/"
    }

    ]

    try {
        const data = await ShopItem.insertMany(items)
        res.send(data);
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
});

router.get('/', async function (req, res, next) {
    try {
        const items = await ShopItem.find()
        res.send(items);
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
});

router.get('/:id', async function (req, res, next) {
    try {
        const item = await ShopItem.findById(req.params.id)
        res.send(item);
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
});

router.get('/search/:search', async function (req, res, next) {
    try {
        const items = await ShopItem.find({
            name: { $regex: req.params.search, $options: "i" }
        }).exec();
        res.send(items);
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
});

module.exports = router;
