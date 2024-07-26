function findAndSaveUser(Users) {
    Users.findOne({}, (err, user) => { // 첫번째 콜백
        if(err) {
            return console.error(err);
        }
        user.name = 'zero';
        user.save((err) => { // 두번째 콜백
            if (err) {
                return console.error(err);
            }
            Users.findOne({gender: 'm' }, (err, user) => { // 세번째 콜백
                //생략
            });
        });
    });
}