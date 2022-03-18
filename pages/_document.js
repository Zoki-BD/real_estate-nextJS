import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import theme from '../theme'


export default function Document() {
   return (
      <Html>
         <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer" />
         </Head>
         <body>
            <Main />

            {/* 👇 Here's the script for dark mode*/}
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />


            <NextScript />
         </body>
      </Html>
   )
}