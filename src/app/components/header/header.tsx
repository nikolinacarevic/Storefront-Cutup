'use client'
import React, { useEffect } from "react";
import styles from './header.module.css'
import Link from "next/link";
import { useState } from "react";

function Header() {
    return <>
        <div id={styles.HeaderContainer}>
            <img id={styles.filter} src='/images/filter.png'></img>
            <Link href="/" id={styles.logo}>
                <img src='/images/logotype.png'></img>
            </Link>
        </div>
    </>
}

export default Header;