let Sabrina = {
    needs: [],
    phrases: {
        "howareyou": "I'm doing good thank you for asking",
        "sabrina": "You look sexy saying my name",
        "dougsdog": "I was having a good day until you said that"
    },
    err: [
        "I don't know what you mean by that, but okay",
        "Cool story bro, but I'm not sure what you mean",
        "Yea dude, You are not making any sense",
        "Really? That makes no sense. Idiot",
        "Hey stupid, speak english next time"
    ]
};

module.exports = (app) => {

    app.get('/api/getNeeds', (req, res) => {
        res.json(Sabrina.needs);
    });

    app.get('/api/addNeed/:need', (req, res) => {
        let currentNeeds = Sabrina.needs;
        currentNeeds.push(req.params.need);
        Sabrina.needs = currentNeeds;
        res.json(req.params.need);
    });

    app.get('/api/clearNeeds/', (req, res) => {
        Sabrina.needs = [];
        res.json(Sabrina.needs);
    });

    app.get('/api/phrase/:phrase', (req, res) => {
        const phrase = req.params.phrase;
        if(Sabrina.phrases[phrase]) {
            res.json({
                status: "success",
                message: Sabrina.phrases[phrase.replace(/\s/g, '').toLowerCase()]
            });
        } else {
            res.json({
                status: "error",
                message: Sabrina.err[Math.floor(Math.random() * Sabrina.err.length)]
            });
        }
    });
};
