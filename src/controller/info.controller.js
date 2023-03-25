const { counterModel, stduentModel } = require("../models/school.model");

exports.AddInfo = (req, res) => {

    counterModel.findOneAndUpdate(
        { seq: "autoval" },
        { "$inc": { "_id": 1 } },
        { new: true }, (err, cb) => {
            let _idSeq;
            if (cb == null) {
                const newval = new counterModel({ seq: "autoval", _id: 1 });
                newval.save();
                _idSeq = 1;
            }
            else {
                _idSeq = cb._id;
            }

            const student = new stduentModel({
                name: req.body.name,
                currentClass: req.body.currentClass,
                division: req.body.division
            })
            const creation = async () => {
                try {
                    const data = await student.save();
                    res.json({ id: data._id });
                }
                catch (err) {
                    res.status(400).send("incomplete details about student");
                }

            }
            creation();
        }
    )
}

