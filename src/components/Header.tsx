import { Box, Button, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

interface HeaderProps {
  backBtn?: boolean;
}

export default function Header({ backBtn = false }: HeaderProps) {
  return (
    <Flex height={100}  align="center" justify={ backBtn ? 'space-around' : 'center' }>
      {backBtn && (
        <Link href="/" passHref >
          <Button 
            width="8" 
            height="8" 
            cursor="pointer" 
            variant="unstyled" 
            colorScheme="whiteAlpha" 
            alignContent="center"
            justifyContent="center"
          >
            <Image src="./back.svg" alt="Back Button" />
          </Button>
        </Link>
      )}
      
      <Box>
        <Image src="./Logo.svg" alt="Logo World Trip" />
      </Box>
    </Flex>
  )
}