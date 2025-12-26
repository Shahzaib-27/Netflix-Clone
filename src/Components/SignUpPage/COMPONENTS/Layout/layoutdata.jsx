import React from 'react'

import style6 from "./layout.module.css"

import SignindataHeader from "../Header/Header.jsx"
import SignindataMainSEction from "../MainSection/MainSection.jsx"
import SignindataFooterSection from "../Footer/Footer.jsx"



export default function layoutdata() {
  return (
    <div className={style6.body}>
      <>
      <SignindataHeader/>
      <SignindataMainSEction/>
      <SignindataFooterSection/>
      </>
    </div>
  )
}
