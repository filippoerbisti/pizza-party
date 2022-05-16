// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../../lib/mongo.js"
import Product from "../../../models/Product.js"

export default async function handler(req, res) {
    
    const { method } = req;

    dbConnect()

    if (method === "GET") {
        try {
            const product = await Product.find();
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "POST") {
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}
  