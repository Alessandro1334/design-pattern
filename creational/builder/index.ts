class User {
    private name: string;
    private username: string;
    private password: string;
    private email: string;
    private phone: string;

    constructor(name: string, username: string, password: string, email: string, phone: string) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }
}

const user = new User('Alessandro', 'alessandro', '1234', 'dfas@fdf.com', '123123');
const user2 = new User('Alessandro2', 'alessandro', '1234', 'dfas@fdf.com', '123123');
const user3 = new User('Alessandr03', 'alessandro', '1234', 'dfas@fdf.com', '123123');
const user4 = new User('Alessandro4', 'alessandro', '1234', 'dfas@fdf.com', '123123');