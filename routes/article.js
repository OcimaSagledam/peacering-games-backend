var express = require('express');
var router = express.Router();

const Article = require('../models/article')

router.get('/test', async function (req, res, next) {
    console.log("entered article route !!!")
    const newPost = new Article({
        title: "test",
        short_description: "Lorem ipsum dolor sit amet.",
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet elit justo, id mattis dolor porttitor a. Praesent et sem at enim malesuada euismod sed sed purus. Phasellus sit amet faucibus ex, ac feugiat enim. Curabitur odio magna, posuere ac sodales vel, molestie vitae arcu. Sed nec vulputate sapien. Fusce scelerisque sit amet sapien imperdiet convallis. Maecenas nec volutpat mauris. Quisque nunc lacus, rhoncus non magna non, convallis volutpat ex. Morbi quis odio sem.",
        url: "/"
    })

    try {
        await newPost.save()
        res.send(newPost);
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
});

router.get('/seed', async function (req, res, next) {
    const articles = [{
        title: "Storybuilding: Rumors and Story Hooks",
        short_description: "Central to many adventures are the investigations. In addition to searching a scene, researching ancient tomes, or casting divinations; characters frequently need to ask around town to find the next thread of their inquiry. The scene is a staple of intrigue and crime...",
        article: "Central to many adventures are the investigations. In addition to searching a scene, researching ancient tomes, or casting divinations; characters frequently need to ask around town to find the next thread of their inquiry. The scene is a staple of intrigue and crime stories. A hero heads to the right part of town and starts buying drinks, asking questions, and maybe greasing a few palms. Eventually they find the juicy rumor that leads them to the next stage of their investigation. In our latest edition of Storybuilding, we’ll explore some mechanics for Gathering Rumors as a method for roleplaying scenes of social investigation. We’ll also discuss Story Hooks, which allow the GM to prepare a number of possible rumors that can feed into their campaign whenever the players are ready to chase them. There are many methods by which a character might ask around, but the first requirement is ensuring they’re asking in the right place. If there are no rumors to be learned, then no matter how many times the characters question an NPC, no one will have anything to share. Directing players to where their characters can start asking questions is the best way to set the scene. Perhaps this is a seedy dive bar, the back alleys of a bustling market, or the gossip laden halls of the royal court. Once established, then the characters can try to locate those interesting rumors. Gathering rumors takes a character 1d4 hours and requires the expenditure of gold for buying drinks, losing at games of chance, or paying small bribes. The cost varies with the class of the neighborhood that the character is canvassing.",
        url: "/"
    }, {
        title: "Running an Evil Campaign: Villains vs Villains",
        short_description: "Welcome back to this veritably villainous blog series! Over the course of five articles, we'll be chatting about the need-to-knows of building and running evil campaigns for the 5th Edition! So, sharpen your soul stealing blades and don your spiked armor, because...",
        article: "Welcome back to this veritably villainous blog series! Over the course of five articles, we’ll be chatting about the need-to-knows of building and running evil campaigns for the 5th Edition! So, sharpen your soul stealing blades and don your spiked armor, because we’re in for a wicked ride. Why are villains so important? In most stories, you can count on the appearance of two things: protagonists and antagonists. In 5th Edition, your player characters are obviously the protagonists (yes, even in evil campaigns), but let’s pause and chat about the role of antagonists in campaigns. Antagonists don’t necessarily have to be a person. A narrative antagonist can be the self, society, nature, machine, or fate itself. However, when it comes to TTRPG’s, the most successful antagonists are the ones with a face. It’s all well and good to say your campaign is about overthrowing oppression, but if you don’t have a central figure who represents that oppression, your players will never quite know how to solve the problem. Similarly, while Robin Hood can’t singlehandedly end the economic brutalism of his era, it sure does feel like a victory when the Sheriff of Nottingham gets thrown in jail. This example shows why villains are so important in your stories. They are the defeat-able embodiments of concepts we may never be able to conquer truly.",
        url: "/"
    }, {
        title: "Running an Evil Campaign: Session 0",
        short_description: "Welcome to this nefarious new blog series! Throughout a course of five articles, we'll be chatting about the need-to-knows of building and running evil campaigns for 5th edition! So, get out your skull jewellery and patent leather capes because we're in for a wicked...",
        article: "Welcome to this nefarious new blog series! Throughout a course of five articles, we’ll be chatting about the need-to-knows of building and running evil campaigns for 5th edition! So, get out your skull jewellery and patent leather capes because we’re in for a wicked ride. What is an evil campaign? For those of you new to the idea of an evil campaign, let’s break down exactly what we’re going to be talking about in this blog series, the fabled evil campaign. Essentially an evil campaign works like any other, except that all of the player characters are evil-aligned. Most GMs at some point or another have thought about running an evil campaign, but while the mechanics might look the same on paper, the actual practice of handling a group of evil characters is a true challenge. Successfully building and maintaining an evil campaign requires a lot of skill and a lot of legwork since D&D resources aren’t typically tailored to support such a different narrative. Most products out there assume that characters will go on adventures because ‘it’s the right thing to do,’ which honestly doesn’t cut it for evil characters.",
        url: "/"
    }, {
        title: "The Sphinx and the Riddle of Non-Combat Encounters",
        short_description: "Welcome back to this blog series on how Classical mythology can offer guidance to our TTRPG encounter design! So far, we’ve talked about the power in conforming to or defying ancient narrative conventions, and how we can make combat more dynamic by following the...",
        article: "Welcome back to this blog series on how Classical mythology can offer guidance to our TTRPG encounter design! So far, we’ve talked about the power in conforming to or defying ancient narrative conventions, and how we can make combat more dynamic by following the example of Hercules’ battle with the Hydra. This time we’re talking about something a little bit more nebulous and trickier to pin down – clashing with the bad guys without actually fighting. Of course, we all know that combat isn’t the only way to handle conflict in 5th Edition. Such versatility in play is something that sets Tabletop Roleplaying apart from a video game like Halo or a board game like Monopoly; in those games, violence is the only path*. However, when so much of a TTRPG character sheet is dedicated to what spells you can sling, how much damage you can soak, and how hard you can swing a sword; combat can understandably become players’ instinctive response. The danger of such a ‘to the death’ mentality is that it can potentially sap out all the variety and tension from the encounter because the stakes are often the same across different fights – try not to die. We want to try and bring the tension back. Today we’re going to look at a famous example of a non-combat monster encounter from Greek myth – Oedipus and the riddle of the Sphinx – and see what wisdom we can take and apply to running a 5e game.",
        url: "/"
    }, {
        title: "Running an Evil Campaign: Maintaining Your Game",
        short_description: "Welcome back to this dangerously diabolical blog series! Over the course of five articles, we've been chatting about the need-to-knows of building and running evil campaigns for 5th Edition! So, choose a shadowy lair and get those evil monologues ready, because we're...",
        article: "Welcome back to this dangerously diabolical blog series! Over the course of five articles, we’ve been chatting about the need-to-knows of building and running evil campaigns for 5th Edition! So, choose a shadowy lair and get those evil monologues ready, because we’re in for a wicked ride. Maintaining the Fun for Players. We’ve reached the last installment of our evil campaign series, so we wanted to send you off with some tips to maintain your evil campaign. Campaign maintenance, in general, doesn’t get enough spotlight. So before we dig into the how-to’s, let’s break down exactly what ‘player maintenance’ means. Maintaining the fun for players involves routine conversations with your players about your campaign while not actually playing it. Too often in our hectic lives, we forget to take the time to check in with our players to see how everything is going. We often default to just playing the game whenever we get some spare time and gloss over issues, concerns, or questions the people at the table might have. Like any relationship, regular opportunities to share concerns or goals are vital to the health of a long-term gaming group. And because evil campaigns deal with heavier themes than standard campaigns, regular player check-ins are incredibly important.",
        url: "/"
    }, {
        title: "For the Love of Adventure – A Valentine’s 5e Adventure",
        short_description: "5th Edition Game Masters looking to add a little adventure for date night this Valentine’s Day need only draw inspiration from the romantic tales made famous by the Brothers Grimm. Love stories come in all forms and whether it’s a duet-style adventure with one GM and...",
        article: "5th Edition Game Masters looking to add a little adventure for date night this Valentine’s Day need only draw inspiration from the romantic tales made famous by the Brothers Grimm. Love stories come in all forms and whether it’s a duet-style adventure with one GM and one player or a group made up of romantic partners, there are plenty of tales as old as time that can be reworked into a 5e one-shot or as part of a campaign. The easiest example is taking some well-known classic Western fairytales and altering the characters, setting, points of view, or plots. In many cases, these tales have been cleaned up for a modern audience to reflect more family-friendly sensibilities. Of course, the original Grimm versions were grisly and often contained disturbing details. Depending on your players, you could lean into these gruesome origins or maintain a more romantic atmosphere. Romantic Adventure Hooks. Fairy tale adventures take place in familiar settings like dark forests, expansive oceans, or sprawling manors that can easily be dropped into most campaign settings. You can place these types of adventures into a campaign as a surprise or run them as a special one-shot. The key to keeping your players on their toes is keeping some of the more familiar elements of the tale and then mixing things up to defy expectations. Here we’ll be looking at three specific examples to get you started: Beauty and the Beast, The Little Mermaid, and Snow White.",
        url: "/"
    }, {
        title: "Running a Dark Fantasy Campaigns – The Atmosphere Heist",
        short_description: "In this, the second instalment of our “Running a Dark Fantasy TTRPG” blog series, we’ll explore how to capture and maintain what makes dark fantasy such an alluring genre to inhabit - atmosphere. If settling on dark fantasy as the genre for your 5e campaign is the...",
        article: "In this, the second instalment of our “Running a Dark Fantasy TTRPG” blog series, we’ll explore how to capture and maintain what makes dark fantasy such an alluring genre to inhabit – atmosphere. If settling on dark fantasy as the genre for your 5e campaign is the first step to defining the gaming experience you want to have, and safety tools serve as the second by delineating what terrible things may not (and therefore may) occur in your game, then conveying the atmosphere comes next. Atmosphere determines how your game feels. A consistent and ever-present atmosphere is an alchemical treasure capable of transmuting campaign sessions into memorable experiences. In dark fantasy stories, it raises goosebumps, widens eyes, evokes cries of triumph, and summons the silence of shock and despair. Atmosphere brings your campaign to life. There are three components to achieving truly atmospheric gameplay: defining it, communicating it, and making it real. The easiest way to define how you want your game to feel is by referencing (read, stealing** from) media that captures what you’re aiming for. It’s likely you’ll find inspiration in several sources, so communicating with your own deliberate language and tone creates consistency. Finally, you can give weight to your words by using appropriate assets. This whole process begins with some respectful theft, so I think we should execute a “dark fantasy atmosphere heist”. ** Clarification here is necessary in the way that warning labels on chainsaws to “not hold wrong end” are necessary: please don’t actually commit crimes. Check licenses (creative commons is your friend), attribute appropriately, and do not do the piracy. To the greatest possible extent of your means, pay artists. Otherwise, go forth unto the public domain.",
        url: "/"
    }, {
        title: "Running an Evil Campaign : Evil Characters",
        short_description: "Welcome back to this insidious blog series! Over the course of five articles, we're chatting about the need-to-knows of building and running evil campaigns for 5th edition! So, swill your blood chalice while you grin maliciously because we're in for a wicked ride....",
        article: "Welcome back to this insidious blog series! Over the course of five articles, we’re chatting about the need-to-knows of building and running evil campaigns for 5th edition! So, swill your blood chalice while you grin maliciously because we’re in for a wicked ride. What is an evil character? So, you want to make an evil character! But how do we accomplish that in 5th edition, a game that is mechanically built almost exclusively for heroism? There is a lot more than mechanics to consider when crafting a character that can successfully play in an evil campaign. Player characters have to be multi-dimensional to be interesting. They need just as much going on from a roleplaying perspective as a mechanical one. Like good-aligned characters, evil characters have goals, morals (yes, they do), desires, and fears. Building these elements of your character is a little more challenging than standard character creation. You need to have actionable ambitions that don’t make your GM and fellow party members want to tear out their hair in frustration. With these thoughts in mind, let’s discuss a few things every awesome evil character needs: A reason (or multiple reasons) they are evil. Were you raised in an evil society? Do past experiences shape your proclivities? Are you transformed in some way? Are you drawn to taboo practices or beliefs? A strategy for interacting with non-evil society. Do you have a façade that conceals your true nature? Do you avoid major settlements and towns? Is your appearance intentionally frightening to dissuade strangers from speaking to you? A measurable goal. Do you seek to resurrect a dark god? Are you searching for the secrets of immortality? Have you sworn to assassinate every living member of a noble family? A reason to join an adventuring party. Do you need others like you to protect you from harm? Are you searching for like-minded thinkers to help pursue your goals? Are you lonely and simply looking for somewhere to belong?",
        url: "/"
    }
    ]

    try {
        const data = await Article.insertMany(articles)
        res.send(data);
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
});

router.get('/', async function (req, res, next) {
    try {
        const articles = await Article.find()
        res.send(articles);
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
});

router.get('/:id', async function (req, res, next) {
    try {
        const article = await Article.findById(req.params.id)
        res.send(article);
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
});

router.get('/search/:search', async function (req, res, next) {
    try {
        const articles = await Article.find({
            title: { $regex: req.params.search, $options: "i" }
        }).exec();
        res.send(articles);
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
});

module.exports = router;
