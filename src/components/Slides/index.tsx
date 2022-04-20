import { Flex, Text } from "@chakra-ui/react";
import {Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';

import "swiper/css";
import "swiper/css/pagination";

import config from './config.json';

function Slides() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {config.continents.map((continent, index) => (
          <SwiperSlide key={index}>
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

              <br/>

              <Text
                color="#fff"
                fontWeight={500}
                fontSize={26}
              >
                {continent.description}
              </Text>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Slides;