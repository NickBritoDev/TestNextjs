/* eslint-disable react/prop-types */
import React from 'react'
import { Providers } from '@/app/provider'

export default function RootLayout ({
  children
}) {
  return (
    <html lang='en'>
      <body style={{ overflow: 'hidden' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
