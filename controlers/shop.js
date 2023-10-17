const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products,
            pageName: 'Shop',
            path: '/'
        });
    });
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageName: 'All Products',
            path: '/products'
        });
    });
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageName: 'Your orders',
        path: '/orders'
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageName: 'Your Cart',
        path: '/cart'
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageName: 'Checkout',
        path: '/checkout'
     });
};