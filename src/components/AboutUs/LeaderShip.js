import { Box, Center, Divider, Flex, Heading, Icon,Image, Text } from "@chakra-ui/react";
import React from "react";
import { GrLinkedinOption } from "react-icons/gr";

import krunal from "./KRUNAL SHAH.JPG"
import johny from "./JOHNY.JPG"
import pramod from "./PRAMOD.JPG"
import ravi from "./RAVI.JPG"

const LeaderShip =()=>{
    const leaders =[
        {img:krunal, name:"MR. KRUNAL SHAH",team:"Financial Head"},
        {img:pramod, name:"MR. PRAMOD KUMAR",team:"Project Head"},
        {img:johny, name:"MR. JOHNY RAMAN",team:"Technical Head"},
        {img:ravi, name:"MR. RAVI",team:"Design Head"},
    ];
    return (<>
        <Flex direction="column" h="100%"overflow="hidden" w="100%" px="100px">
        <Center pb="1.875rem" className="slidein-top revealOnce" fontFamily="goudy" fontSize="2.5rem">LEADERSHIP TEAM</Center>
        <Flex w="100%" gap="1rem" mb="5rem">
            {leaders.map((leader, index)=>(
            <Flex  w="100%" direction="column" p="1rem" _hover={{boxShadow:"xl"}}
            key={index}
            bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">
                <Image className="expandcar revealOnce" boxShadow="2xl" h="18.75rem" objectFit="cover" src={leader.img}/>
                <Text pt="1.563rem" pb="1rem" fontFamily="avenir" fontWeight="bold" textAlign="center" fontSize="1.2rem">{leader.name}</Text>
                <Text pb="1rem" fontFamily="varela Round" textAlign="center" fontSize="1.125rem">{leader.team}</Text>
                <Icon
                  mb=".563rem"
                  h="5rem"
                  w="5rem"
                  alignSelf="center"
                  bgColor="#0A66C2"
                  color="#fff"
                  p="0.313rem"
                  as={GrLinkedinOption}
                />
            </Flex>))
            }
        </Flex>
        </Flex>
    </>); 
}
export default LeaderShip;