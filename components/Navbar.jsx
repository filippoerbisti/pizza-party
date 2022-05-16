import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import { useSelector } from "react-redux"
import Link from "next/link"

const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity)

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="callButton" width="32" height="32" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>348 2359226</div>
                </div>
            </div>

            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href="/" passHref>
                        <li className={styles.listItem}>Homepage</li>
                    </Link>
                    <Link href="/cart" passHref>
                        <li className={styles.listItem}>Products</li>
                    </Link>
                    <Link href="/cart" passHref>
                        <li className={styles.listItem}>Menu</li>
                    </Link>
                    <Image src="/img/logo.png" alt="logo" width="160px" height="69px" />
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>

            <Link href="/cart" passHref>
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image src="/img/cart.png" alt="cart" width="30px" height="30px" />
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Navbar