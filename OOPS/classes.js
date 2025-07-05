class js {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encrytPassword() {
        return `${this.password}7645`;
    }

    changeusername() {
        return `${this.username.toUpperCase()}`
    }

}

const user = new js("Prachi", "prachi123Srivastava@gmail.com", "123");
console.log(user.encrytPassword());
console.log(user.changeusername())