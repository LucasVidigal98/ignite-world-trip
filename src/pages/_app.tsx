import { ChakraProvider } from '@chakra-ui/react';

import '../styles/swiper.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
