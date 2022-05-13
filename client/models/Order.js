import moongose from "moongose"

const OrderSchema = new moongose.Schema (
    {
        customer: {
            type: String,
            required: true,
            maxlength: 60,
        },
        address: {
            type: String,
            required: true,
            maxlength: 200,
        },
        total: {
            type: Number,
            required: true,
        },
        status: {
            type: Number,
            default: 0,
        },
        method: {
            type: Number,
            required: true,
        },
    }, { timestamps: true }
)

export default moongose.models.Order || 
    moongose.model("Order", OrderSchema)