const prodcuts = [];

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        prodcuts.push(this);
    }

    static fetchAll() {
        return prodcuts;
    }
}