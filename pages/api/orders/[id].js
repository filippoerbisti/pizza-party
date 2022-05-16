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
        
    }

    if (method === "PUT") {
        
    }

    if (method === "DELETE") {
        
    }
}

export default handler
  