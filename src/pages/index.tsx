import { Flex, Image, Divider, Center, Text, Box } from "@chakra-ui/react";
import BannerInfo from "../components/BannerInfo";
import Header from "../components/Header";


export default function Home() {
  return (
    <Box
      height="100vh"
    >
      <Header backBtn />

      <BannerInfo />

      <Flex
        alignItems="center"
        justifyContent="center"
        mt="20"
      >
        <Image src="./TravelTypes.png" alt="Travel Types" />
      </Flex>

      <Center mt="20">
        <Divider width={90} borderColor="#47585B" orientation="horizontal" />
      </Center>

      <Text
        fontSize={36}
        fontWeight={500}
        color="#47585B"
        textAlign="center"
        mt={13}
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

    </Box>
  )
}
