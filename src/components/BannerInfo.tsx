import { Flex, Box, Text, Image, useBreakpointValue } from "@chakra-ui/react";

function BannerInfo() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Flex
        width="100%"
        height={335}
        backgroundImage="./Background.png"
        backgroundSize="100%"
        bgRepeat="no-repeat"
        justifyContent="space-between"
      >
        <Flex
          ml={140}
          mt="20"
          color="white"
          fontFamily="Poppins"
          flexDir="column"
        >
          <Text
            fontSize={36}
            fontWeight={500}
          >
            5 Continentes, <br />
            Inifinitas Possibilidades
          </Text>

          <Text
            fontSize={20}
            fontWeight={400}
            mt="5"
          >
            Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou.
          </Text>
        </Flex>

        {isWideVersion && (
          <Box
            mr={140}
            mt="20"
          >
            <Image src="./Airplane.svg" alt="Air Plane Logo" />
          </Box>
        )}
      </Flex>
    </>
  )
}

export default BannerInfo;