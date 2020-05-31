module.exports = class User {
    constructor(username, password, dbKey) {
        this.username = username;
        this.password = password;
        this.dbKey = dbKey;
    }
}