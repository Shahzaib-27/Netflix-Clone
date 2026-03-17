import React from 'react'

import HeaderPages from '../NetflixLoginPage/header.jsx'
import MainsectionPages from '../NetflixLoginPage/mainsection.jsx'
import FooterPages from '../NetflixLoginPage/footer.jsx'

export default function Index() {
  return (
    <div>
      <HeaderPages />
      <MainsectionPages />
      <FooterPages />
    </div>
  )
}