// Prototype digunakan untuk menggandakan suatu class yang sudah ada

namespace PrototypePattern {
    class User {
        public name: string = '';
        public username: string = '';
        public password: string = '';
        public email: string = '';
        public phone: string = '';

        constructor(name: string, username: string, password: string, email: string, phone: string) {
            this.name = name;
            this.username = username;
            this.password = password;
            this.email = email;
            this.phone = phone;
        }

        public clone(): this {
            console.log(this);
            const clone = Object.assign({}, this);
            return clone;
        }
    }
    const user1 = new User('Alessandro', 'alessandro', '123', 'asd@kjdsf.com', '2342');
    const user2 = new User('Alessandro', 'alessandro', '123', 'asd@kjdsf.com', '2342');
    const user3 = new User('Alessandro', 'alessandro', '123', 'asd@kjdsf.com', '2342');

    const user4 = user1.clone();
    user4.name = 'Sinambela';
    console.log(user4);
}