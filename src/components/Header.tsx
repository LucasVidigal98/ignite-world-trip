import { Box, Button, Flex, Image } from "@chakra-ui/react";

interface HeaderProps {
  backBtn?: boolean;
}

export default function Header({ backBtn = false }: HeaderProps) {
  console.log(backBtn);
  return (
    <Flex maxWidth={1440} height={100}  align="center" justify={ backBtn ? 'space-around' : 'center' }>
      {backBtn && (
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
      )}
      
      <Box>
        <Image src="./Logo.svg" alt="Logo World Trip" />
      </Box>
    </Flex>
  )
}