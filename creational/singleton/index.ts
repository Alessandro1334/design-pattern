// Singleton digunakan agar object tidak lebih dari satu kali. Kegunaannya untuk membuat global variabel contohnya profile login, koneksi database

class Me {
    private firstName: string = '';
    private lastName: string = '';

    getFullName(): string {
        // akses db, select user
        this.firstName = "Alessandro";
        this.lastName = "Sinambela";

        return `${this.firstName} ${this.lastName}`;
    }
}

const fullName = new Me();
console.log(fullName.getFullName());

const fullName2 = new Me();
console.log(fullName2.getFullName());

console.log(fullName === fullName2)
