// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../../lib/mongo"
import Order from "../../../models/Order"

const handler =  async (req, res) => {
    
    const { 
        method, 
        query: { id },
    } = req;

    dbConnect()

    if (method === "GET") {
        try {
            const product = await Product.findById(id);
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "PUT") {
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "DELETE") {
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

export default handler
  