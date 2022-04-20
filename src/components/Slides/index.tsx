import { Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';

import "swiper/css";
import "swiper/css/pagination";

import config from './config.json';
import Link from "next/link";

function Slides() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {config.continents.map((continent, index) => (
          <SwiperSlide key={index}>
            <Link href="/continent" passHref >
              <Flex
                backgroundImage={continent.image}
                backgroundSize="100%"
                bgRepeat="no-repeat"
                width="100%"
                height="100%"
                fontFamily="Poppins"
                alignItems="center"
                justify="center"
                flexDir="column"
                cursor="pointer"
              >

                <Text
                  color="#fff"
                  fontWeight={500}
                  fontSize={52}
                >
                  {continent.name}
                </Text>

                <Text
                  color="#fff"
                  fontWeight={500}
                  fontSize={26}
                >
                  {continent.description}
                </Text>
              </Flex>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Slides;