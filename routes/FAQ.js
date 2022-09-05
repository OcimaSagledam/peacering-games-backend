var express = require('express');
var router = express.Router();

const FAQ = require('../models/FAQ')

router.get('/test', async function (req, res, next) {
    console.log("entered FAQ route !!!")
    const newPost = new FAQ({
        title: "test",
        question: "Test Question",
        date: "06.10.1998",
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
    const FAQs = [{
        title: "General FAQ",
        question: "I have reached a download limit on my Digital Download?",
        date: "22.07.2022",
    }, {
        title: "General FAQ",
        question: "My account says it no longer exists?",
        date: "14.07.2022",
    }, {
        title: "General FAQ",
        question: "How long is your Support Response time?",
        date: "12.07.2022",
    }, {
        title: "Shipping, Tracking and Fulfilment Questions?",
        question: "Jan 18, 2022 - All Things Shipping!",
        date: "18.01.2022",
    }, {
        title: "General FAQ",
        question: "I have questions that haven’t been answered here; where should I direct those to?",
        date: "14.01.2022",
    }, {
        title: "General FAQ",
        question: "How do I sync my order to my Ghostfire Gaming Account?",
        date: "14.01.2022",
    }
    ]

    try {
        const data = await FAQ.insertMany(FAQs)
        res.send(data);
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
});

router.get('/', async function (req, res, next) {
    try {
        const FAQs = await FAQ.find()
        res.send(FAQs);
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
});

router.get('/:id', async function (req, res, next) {
    try {
        const FAQ = await FAQ.findById(req.params.id)
        res.send(FAQ);
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
});

router.get('/search/:search', async function (req, res, next) {
    try {
        const FAQs = await FAQ.find({
            title: { $regex: req.params.search, $options: "i" }
        }).exec();
        res.send(FAQs);
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
});

module.exports = router;