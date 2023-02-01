import React, { useState } from "react";
import { Button, Flex, Heading, Image, Link, Menu, MenuButton, MenuItem, MenuList, Select, Spacer } from "@chakra-ui/react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import styled from 'styled-components';
import { useModalController } from "../hooks/util";
import { HamburgerIcon } from "@chakra-ui/icons";
import EnquireWindow from "./enquireWindow";
const StyledHeader = styled.div`
    background-color: rgba(0,0,0,0.2);
    .collapsible-list-button{
      display:flex;
      cursor: pointer;
      width: 100%;
    }
    .collapsible-list-button:hover{

    }
    .collapsible-content{
      display: none;
      list-style-type: none;
    }
    .collapsible-content1{
      display: none;
      list-style-type: none;
    }
    .collapsible-content2{
      display: none;
      list-style-type: none;
    }
    .collapsible-content3{
      display: none;
      list-style-type: none;
      top:65%;
      position: absolute;
      background-color: #f1f1f1;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.8);
      z-index: 1;
    }
    .collapsible-content4{
      display: none;
      list-style-type: none;
    }
    .collapsible-content5{
      display: none;
      list-style-type: none;
    }
  `
const Header = () => {
  const [isOpen, setIsOpen]= useState(false);
  const closeEnquire =() =>{
    setIsOpen(false);
  }
  const openEnquire =() =>{
    setIsOpen(true);
  }
  const {isModalOpen,close,open} = useModalController();
  const [navbar, setNavbar] = useState(false);

  const changeBg = () => {
    try{
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  catch{};
  };

  window.addEventListener("scroll", changeBg);
  return (
    <StyledHeader>
    {isOpen?<EnquireWindow isOpen={isOpen} onClose={()=>closeEnquire()} />:<></>}
    <Flex
      pos="fixed"
      top="0"
      w="100%"
      h="4.375rem"
      bgColor={navbar ? "#fff" : "rgba(0,0,0,70%)"}
      transition="all 2s"
      align="center"
      justify="center"
      zIndex="999"
      color={navbar ? "black" : "white"}
      boxShadow={navbar ? "2xl" : ""}
    >
      {" "}
      <Flex w="20%"></Flex>
      <Flex alignItems={"center"} w="50%" justifyContent={"center"}>
        <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir" px="1rem">
          <Link href="/expertise" style={{textDecoration:"none"}}>EXPERTISE</Link>
        </Heading>
        <Menu>
        <MenuButton _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} _active={{bgColor:"inherit"}} bgColor="inherit"mr="1rem" as={Button} fontSize="1rem" fontFamily="avenir" px="1rem">
          <Link style={{textDecoration:"none"}}>PROJECTS</Link>
        </MenuButton>
        <MenuList boxShadow={navbar ? "2xl" : ""} fontFamily="avenir" fontSize="1rem" mt=".5rem" bgColor={navbar ? "#fff" : "rgba(0,0,0,70%)"} border="none" borderRadius="none">
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/arete-homes" style={{textDecoration:"none"}}>ARETE HOMES</Link>
        </MenuItem>
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/sky-high" style={{textDecoration:"none"}}>SKY HIGH</Link>
        </MenuItem>
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/commercial-properties" onClick={()=>window.localStorage.setItem('commercialPage',true)} style={{textDecoration:"none"}}>ARETE PLAZA</Link>
        </MenuItem>
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/commercial-properties" onClick={()=>window.localStorage.setItem('commercialPage',false)} style={{textDecoration:"none"}}>ARETE MALL</Link>
        </MenuItem>
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link style={{textDecoration:"none"}}>POONERI GYMKHANA CLUB</Link>
        </MenuItem>
        </MenuList>
        </Menu>
        <Flex minW="18.75rem" minH="3.75rem" px="1rem" align="center">
          <Image _hover={{cursor:"pointer"}} onClick={()=>window.location.replace("/")} src="/images/logo.png" />
        </Flex>
        <Flex align="center">
        <Menu>
        <MenuButton _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} _active={{bgColor:"inherit"}} bgColor="inherit" as={Button} fontSize="1rem" fontFamily="avenir" px="1rem">
          INVEST
        </MenuButton>
        <MenuList boxShadow={navbar ? "2xl" : ""} fontFamily="avenir" fontSize="1rem" mt=".5rem" bgColor={navbar ? "#fff" : "rgba(0,0,0,70%)"} border="none" borderRadius="none">
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/why-invest" style={{textDecoration:"none"}}>WHY INVEST</Link>
        </MenuItem>
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/arete-homes-invest" onClick={()=>window.localStorage.setItem('areteInvest',true)} style={{textDecoration:"none"}}>8% ROI ON HOMES</Link>
        </MenuItem>
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/sky-high-invest" style={{textDecoration:"none"}}>7% ROI ON HOMES</Link>
        </MenuItem>
        </MenuList>
        </Menu>
        <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir" px="1rem">
          <Link href="/serviced-apartments" style={{textDecoration:"none"}}>HOUSING</Link>
        </Heading>
      </Flex>
      </Flex>
      <Flex w="25%" justify="flex-end" align="center">
        <Heading as="span" fontFamily="avenir">
          <Button
            onClick={()=>openEnquire()}
            h="3.125rem"
            my="1rem"
            p="6"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="1rem"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
          >
            ENQUIRE
          </Button>
        </Heading>
        <button style={{marginRight:"50px"}} onClick={()=>open()} >
          <HamburgerIcon  _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} my="1rem" w="5rem" h="3.125rem"/>
        </button>
        {isModalOpen?
        <Flex style={{position:"absolute",top:"0",left:"0",zIndex:"999"}}>
          <div style={{width:"80vw",height:"100vh",backgroundColor: "rgba(0,0,0,0.7)",}} onClick={()=>close()}>
          </div>
          <div style={{width:"20vw",color:"black",backgroundColor:"white",paddingLeft:"2rem",paddingRight:"2rem",position:'relative'}}>
              <button style={{fontSize:"2rem", marginLeft:"auto", height:"2rem",width:"2rem",align:"right",backgroundColor:"grey",borderRadius:"50%",position:'absolute',right:"0"}} onClick={()=>close()}><sup>X</sup></button>
              <br/>
              <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir" px="1rem">
                <Link href="/about-us" style={{textDecoration:"none"}}>ABOUT US</Link>
              </Heading>
              <hr/>
              <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir" px="1rem">
                <Link href="/expertise" style={{textDecoration:"none"}}>EXPERTISE</Link>
              </Heading>
              <hr/>
              <Menu>
        <MenuButton _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} _active={{bgColor:"inherit"}} bgColor="inherit" as={Button} fontSize="1rem" fontFamily="avenir" px="1rem">
          <Link style={{textDecoration:"none"}}>PROJECTS</Link>
        </MenuButton>
        <MenuList boxShadow={navbar ? "2xl" : ""} fontFamily="avenir" fontSize="1rem" mt="-2.8rem" mr="9vw" bgColor="white" border="none" borderRadius="none">
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/arete-homes" style={{textDecoration:"none"}}>ARETE HOMES</Link>
        </MenuItem>
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/sky-high" style={{textDecoration:"none"}}>SKY HIGH</Link>
        </MenuItem>
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/commercial-properties" onClick={()=>window.localStorage.setItem('commercialPage',true)} style={{textDecoration:"none"}}>ARETE PLAZA</Link>
        </MenuItem>
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/commercial-properties" onClick={()=>window.localStorage.setItem('commercialPage',false)} style={{textDecoration:"none"}}>ARETE MALL</Link>
        </MenuItem>
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link style={{textDecoration:"none"}}>POONERI GYMKHANA CLUB</Link>
        </MenuItem>
        </MenuList>
              </Menu>
              <hr/>
              <Menu>
        <MenuButton _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} _active={{bgColor:"inherit"}} bgColor="inherit" as={Button} fontSize="1rem" fontFamily="avenir" px="1rem">
          INVEST
        </MenuButton>
        <MenuList boxShadow={navbar ? "2xl" : ""} fontFamily="avenir" fontSize="1rem" mt="-2.8rem" mr="9vw" bgColor="white" border="none" borderRadius="none">
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/why-invest" style={{textDecoration:"none"}}>WHY INVEST</Link>
        </MenuItem>
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/arete-homes-invest" onClick={()=>window.localStorage.setItem('areteInvest',true)} style={{textDecoration:"none"}}>8% ROI ON HOMES</Link>
        </MenuItem>
        <MenuItem fontWeight="bold" _hover={{bgColor:"rgba(0,0,0,0)",cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}}>
            <Link href="/sky-high-invest" style={{textDecoration:"none"}}>7% ROI ON HOMES</Link>
        </MenuItem>
        </MenuList>
              </Menu>
              <hr/>
              <Link _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} style={{textDecoration:"none"}}>PGC MEMBERSHIP</Link>
              <hr/>
              <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir" px="1rem">
                <Link href="/serviced-apartments" style={{textDecoration:"none"}}>SERVICED HOUSING</Link>
              </Heading>
              <br/>
              <br/>
              <br/>
              <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir" px="1rem">
                <Link href="/channel-partner" style={{textDecoration:"none"}}>CHANNEL PARTNER LOGIN</Link>
              </Heading>
              <hr/>
              <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir" px="1rem">
                <Link href="/news-and-media" style={{textDecoration:"none"}}>NEWS & MEDIA</Link>
              </Heading>
              <hr/>
              <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir" px="1rem">
                <Link href="/refer-and-earn" onClick={()=>window.localStorage.setItem('referEarnPage',true)} style={{textDecoration:"none"}}>REFER & EARN</Link>
              </Heading>
              <hr/>
              <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir" px="1rem">
                <Link href="/contact-us" style={{textDecoration:"none"}}>CONTACT US</Link>
              </Heading>
              <hr/>
              <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir" px="1rem">
                <Link href="/careers" style={{textDecoration:"none"}}>CAREERS</Link>
              </Heading>
              <hr/>
              <Heading _hover={{cursor:"pointer",color: navbar?"#B88746":"#DFBD69"}} as="span" fontSize="1rem" fontFamily="avenir" px="1rem">
                <Link href="/blog" style={{textDecoration:"none"}}>BLOG</Link>
              </Heading>
          </div>
        </Flex>
        :<></>}
      </Flex>
    </Flex>
    </StyledHeader>
  );
};

export default Header;
