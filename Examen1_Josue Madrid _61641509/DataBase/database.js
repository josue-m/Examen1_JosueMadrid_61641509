const mongoose = require('mongoose');



var BDConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://josue_ror:Madrid2022@cluster0.yt2fa.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("BD Connection Success");
    } catch (err) {
        console.log(err);
        throw new Error("BD Connection Error");
    }
}

module.exports = BDConnect

