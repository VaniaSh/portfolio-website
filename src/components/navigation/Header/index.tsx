import React, {useRef} from 'react';
import styles from './index.module.scss'
import Link from "next/link";
import {FaBars, FaTimes} from "react-icons/fa";

const Header = () => {
    const navRef = useRef(null);

    const showNavbar = () => {
            const node = navRef.current as any
            node.classList.add('responsive_nav')

    };

    return (
        <header className={styles.header}>
            <h3>LOGO</h3>
            <div>
                <nav className={styles.nav} ref={navRef}>
                    <Link href="/contacts">Contacts</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/about">About</Link>
                    <button
                        className={`${styles.navBtn} ${styles.navCloseBtn}`}
                        onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                </nav>
                <button className={styles.navBtn} onClick={showNavbar}>
                    <FaBars/>
                </button>
            </div>
        </header>
    );
};

export default Header;