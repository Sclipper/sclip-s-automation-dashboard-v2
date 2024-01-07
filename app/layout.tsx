'use client'

import * as React from 'react'
// import Fonts from './Fonts'
// import Header from './components/Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ height: '100vh' }}>
        {/* <Header /> */}

        {children}
      </body>
    </html>
  )
}
