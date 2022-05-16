// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../../lib/mongo.js"
import Product from "../../../models/Product.js"

const handler =  async (req, res) => {
    
    const { 
        method, 
        query: { id },
    } = req;

    await dbConnect();

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
            await Product.findByIdAndDelete(id);
            res.status(201).json("The product has been deleted");
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

export default handler
  