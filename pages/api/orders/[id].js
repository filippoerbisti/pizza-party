// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../../lib/mongo"
import Order from "../../../models/Order"

const handler =  async (req, res) => {
    
    const { 
        method, 
        query: { id },
    } = req;

    await dbConnect();

    if (method === "GET") {
        try {
            const order = await Order.findById(id);
            res.status(200).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "PUT") {
        
    }

    if (method === "DELETE") {
        try {
            await Order.findByIdAndDelete(id);
            res.status(201).json("The order has been deleted");
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

export default handler
  