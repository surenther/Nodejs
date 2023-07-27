const Product = require ('../models/product');

exports.getAddProdcut = (req, res, next) => {
    res.render("add-product", {
      pageTitle: "Add Product",
      path: "/admin/add-product"
    });
  }

exports.postAddProduct = (req, res, next) => {
    const product = new Product (req.body.title);
    product.save();
    res.redirect('/');
  }

exports.getProdcuts = (req, res, next) => {
 Product.fetchAll((products) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/"
  });
  });
  }