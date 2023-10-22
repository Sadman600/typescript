var addFriend = function () {
    var friends = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        friends[_i] = arguments[_i];
    }
    friends.forEach(function (friend) { return console.log(friend); });
};
addFriend("Sadman", "sakib", "jhon");
