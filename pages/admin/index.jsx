import axios from "axios"
import Image from "next/image"
import { useState } from "react"
import styles from "../../styles/Admin.module.css"

const index = ({orders, products}) => {

    const [productList, setProductList] = useState(products);
    const [orderList, setOrderList] = useState(orders);

    const status = ["Preparing", "On the way", "Delivered"];

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete("http://localhost:3000/api/products/" + id);
            setProductList(productList.filter(product => product._id !== id));
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <h1 className={styles.title}>Products</h1>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                        <th>Image</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </tbody>
                {productList.map(product => (
                    <tbody key={product._id}>
                        <tr className={styles.trTitle}>
                            <td>
                                <Image 
                                    src={product.img}
                                    width={50}
                                    height={50}
                                    objectFit="cover"
                                    alt=""
                                />
                            </td>
                            <td>{product._id.slice(0,10)}...</td>
                            <td>{product.title}</td>
                            <td>${product.prices[0]}</td>
                            <td>
                                <button 
                                    className={styles.button}
                                >
                                    Edit
                                </button>
                                <button 
                                    className={styles.button} 
                                    onClick={() => handleDelete(product._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>

        <div className={styles.item}>
            <h1 className={styles.title}>Orders</h1>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                        <th>Id</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </tbody>
                {orderList.map(order => (
                    <tbody key={order._id}>
                        <tr className={styles.trTitle}>
                            <td>{order._id.slice(0,10)}...</td>
                            <td>{order.customer}</td>
                            <td>${order.total}</td>
                            <td>
                                {order.methos === 0 ? (<span>Cash</span>) : (<span>Paid</span>)}
                            </td>
                            <td>{status[order.status]}</td>
                            <td>
                                <button>Next Stage</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>

    </div>
  )
}

export const getServerSideProps = async () =>{
    const productRes = await axios.get("http://localhost:3000/api/products")
    const orderRes = await axios.get("http://localhost:3000/api/orders")

    return {
        props: {
            orders: orderRes.data,
            products: productRes.data
        }
    }
}

export default index