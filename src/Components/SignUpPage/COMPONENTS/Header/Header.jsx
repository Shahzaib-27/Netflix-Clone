import React from 'react'
import styles3 from "./Header.module.css"
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();
  return (
    <div>
<>
<header>

    <nav>
        <div class={styles3.container}>
            <div class={styles3.border}>            
                <img src="/Sign_Up_Images/Netflix_Logo_PMS.png"
                    onClick={() => navigate("/")}
                />
            </div>
        </div>
    </nav>

</header>

</>
</div>

);
}
