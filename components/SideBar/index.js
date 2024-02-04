import styles from './SideBar.module.css';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SideBar() {
    const [arrow, setArrow] = useState(true);

    const toggleSidebar = () => {
        setArrow(!arrow);
    };

    return (
        <div className={styles.sidebar}>
            <div className={`sidebar ${arrow ? 'expanded' : 'collapsed'}`}>
                <button className={styles.toggleButton} onClick={toggleSidebar}>
                <Image src={'/images/arrow.png'} alt="arrow expand" width="30" height="30"/>
                </button> 
            </div>
            {/* LOGO Image */}
            <div className={styles.logo}>
                <Image className={styles.logoImage} src={'/images/logo.png'} alt="LOGO Image" width="180" height="180"></Image>
            </div>
            
            {/* Side Bar Container */}
            <div className={styles.sideBarContainer}>
                {/* Replace <a> tags with Link components */}
                    <Link style={{ textDecoration: 'none' }} href="/" passHref>
                    <div className={styles.link}>
                        <Image className={styles.sideicon} src="/images/home.png" alt="Home Icon" width={25} height={25} />
                            <h4 className={styles.textLink}>HOME</h4>
                    </div>
                    </Link>
                    <Link  style={{ textDecoration: 'none' }} href="/menu" passHref>
                    <div className={styles.link}>
                    <Image className={styles.sideicon} src="/images/menu.png" alt="Home Icon" width={25} height={25} />
                        <h4 className={styles.textLink}>MENU</h4>
                    </div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="/about" passHref>
                    <div className={styles.link}>
                        <Image className={styles.sideicon} src="/images/info.png" alt="Home Icon" width={25} height={25} />
                        <h4 className={styles.textLink}>ABOUT US</h4>
                    </div>
                    </Link>

            </div>

            {/* Footer nested in Sidebar */}
            <div className={styles.footer}>
                <p> MDIA 2109 <br/> Dynamic Content Design
                    <br/>
                    <br/>
                    @ 2024 Jumi Pham - D3 Set G
                </p>
            </div>
        </div>
    )
}
