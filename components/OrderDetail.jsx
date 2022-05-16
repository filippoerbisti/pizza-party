import { useState } from "react"
import styles from "../styles/OrderDetail.module.css"

const OrderDetail = ({ total, createOrder }) => {

  const [customer, setCustomer] = useState("")
  const [address, setAddress] = useState("")

  const handleClick = () => {
    createOrder({
      customer, 
      address, 
      total, 
      method: 0
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay $ 12 after delivery.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Name Surname</label>
          <input 
            type="text" 
            placeholder="Filippo Erbisti" 
            className={styles.input} 
            onChange={(e) => setCustomer(e.target.value)} 
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label>
          <input
            type="number" 
            placeholder="+39 348 2359226" 
            className={styles.input} 
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <textarea
            rows={5}
            type="text" 
            placeholder="Via Ghetto, 3 Gargagnago (VR)" 
            className={styles.textarea} 
            onChange={(e) => setAddress(e.target.value)} 
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          ORDER
        </button>
      </div>

    </div>
  )
}

export default OrderDetail