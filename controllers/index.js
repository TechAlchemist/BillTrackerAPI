function getIntroMessage(req, res) {
    return res.json({"Message": "Chore Tracker is Online."});
}

module.exports = {
    getIntroMessage
}