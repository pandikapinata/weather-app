var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Pinata'
    };

    setTimeout(() => {
        callback(user);
    },3000);
};

getUser(21, (userObject) => {
    console.log(userObject);
});