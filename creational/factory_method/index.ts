class Truck {
    private qty: number;
    
    constructor(qty: number) {
        this.qty = qty;
    }

    deliver(): void {
        console.log(`Kirim ${this.qty} menggunakan truk`);
    }
}

class Ship {
    private qty: number;
    
    constructor(qty: number) {
        this.qty = qty;
    }

    deliver(): void {
        console.log(`Kirim ${this.qty} menggunakan truk`);
    }
} 

new Truck(100);
