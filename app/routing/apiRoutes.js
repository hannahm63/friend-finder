const friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function (req, res) {
        console.log("post api called");

        const newFriend = req.body;
        
        friends.push(newFriend);
        res.json(newFriend);
    })
}