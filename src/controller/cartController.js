const cartModel = require('../model/cartModel');
const mongoose = require('mongoose');

class cartController {
    getAllCart(req, res) {
        cartModel.find({})
            .then(carts => {
                res.status(200).send(carts);
            })
            .catch(error => {
                console.error(error);
                res.status(500).send("Internal server error");
            });
    }

    getCartById(req, res) {
        const { id } = req.params;
        cartModel.findById(id)
            .then(cart => {
                if (!cart) {
                    return res.status(404).send("Cart not found");
                }
                res.status(200).send(cart);
            })
            .catch(error => {
                console.error(error);
                res.status(500).send("Internal server error");
            });
    }

    createCart(req, res) {
        const newCart = new cartModel(req.body);
        newCart.save()
            .then(cart => {
                res.status(201).json({ message: "Create Successful", cart });

            })
            .catch(error => {
                console.error(error);
                res.status(400).send("Failed to create cart");
            });
    }

    deleteCartById(req, res) {
        const { id } = req.params;
        cartModel.findByIdAndDelete(id)
            .then(cart => {
                if (!cart) {
                    return res.status(404).send("cart not found");
                }
                res.status(200).send({ message: "cart deleted successfully" });
            })
            .catch(error => {
                console.error(error);
                res.status(500).send("Internal server error");
            });
    }

    updateCartById(req, res) {
        const { id } = req.params;
        cartModel.findByIdAndUpdate(id, req.body, { new: true })
            .then(cart => {
                if (!cart) {
                    return res.status(404).send("Cart not found");
                }
                res.status(200).send(cart);
            })
            .catch(error => {
                console.error(error);
                res.status(500).send("Internal server error");
            });
    }
}

module.exports = new cartController();
 