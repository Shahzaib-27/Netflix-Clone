import React from 'react'
import styles5 from "./Footer.module.css"

export default function Footer() {
return (
<div>
    <footer>
        <div className={styles5.footcontainerback}>

        <div className={styles5.footcontainer}>
    
    <div className={styles5.fa1}>
        <h2>Questions?<br />
        <a href="">Contact us</a></h2>
        <a href="">FAQ</a><br />
        <a href="">Cookie Preference</a>
    </div>
   
    <div className={styles5.fa2}>
        <a href="">Help Center</a> <br />
        <a href="">Corporate Information</a>
    </div>

    <div className={styles5.fa2}>
        <a href="">Term of Use</a>
    </div>

    <div className={styles5.fa2}>
        <a href="">Privacy</a>
    </div>

        </div>

        </div>

    </footer>
</div>
)
}
