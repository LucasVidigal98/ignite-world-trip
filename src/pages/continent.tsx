import { Box, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react'
import BannerInfo from '../components/BannerInfo';
import Header from '../components/Header';

function continent() {
  return (
    <Box
      height="100vh"
    >
      <Header backBtn/>

      <BannerInfo isContinent name="Europa" image="./Europa.png" />

      <Flex
        alignItems="center"
        justifyContent="center"
        mt="20"
      >
        <Text
          fontFamily="Poppins"
          fontSize={24}
          lineHeight={1.5}
          color="#47585B"
          width={600}
          textAlign="justify"
        >
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Box
          ml={70}
        >
          <Image src='./Info.png' alt="Info"></Image>
        </Box>
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="center"
        mt="20"
      >
        <Image src='./city.png' alt="Cities" ></Image>
      </Flex>

      <Box height={10} ></Box>

    </Box>
  )
}

export default continent;