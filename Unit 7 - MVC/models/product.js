const fs = require ('fs');
const path = require ('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "prodcuts.json"
  );   

const getProductsFromFile =(cb) => {     
    fs.readFile (p, (err,fileContent) => {
        if (err) {
            cb([])
        } else {
            cb(JSON.parse(fileContent));
        }
    })
};

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        getProductsFromFile(prodcuts => {
            prodcuts.push(this);
            fs.writeFile(p, JSON.stringify(prodcuts), (err) => {
                console.log (err);
            });            
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}