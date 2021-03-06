import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme'

import Layout from '../components/Layout';



function MyApp({ Component, pageProps }) {
   NProgress.configure({ showSpinner: false });

   Router.events.on('routeChangeStart', () => {
      NProgress.start();
   });

   return (
      <>
         <Head>
            {/* <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' /> */}
         </Head>
         <ChakraProvider theme={theme}>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </ChakraProvider>
      </>
   )
}

export default MyApp


// What does Babelrc file do?
// babelrc file is your local configuration for your code in your project. Generally you would put it in the root of your application repo. It will affect all files that Babel processes that are in the same directory or in sibling directories of the . babelrc 

//Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.


//    .babelrc is never auto created.You must go to the root directory of your project.Create a file - touch.babelrc, open the file and enter the babel settings here, then save.If you are following https://babeljs.io/blog/2015/10/31/setting-up-babel-6, Setting up Babel 6 and installed all the plugins and presets as stated, this may help.

// {
//    "presets": [
//       "es2015",
//       "env",
//       "react",
//       "stage-2"
//    ]
// },

// {
//    "plugins": [
//       "transform-es2015-arrow-functions",
//       "check-es2015-constants",
//       "transform-es2015-block-scoping"
//    ]
// }