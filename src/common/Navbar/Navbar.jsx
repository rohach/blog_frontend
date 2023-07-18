import React from 'react';
import './navbar_style.css';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <nav>
        <ul className="nav_ul">
          <li className="nav_links">
            <Button ref={btnRef} bg={'ButtonFace'} onClick={onOpen}>
              <BiMenuAltLeft size={'xl'} />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton size={'xl'} bg={'ghostwhite'} />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                  <Input placeholder="Type here..." />
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue">Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </li>
          <li>BLOG</li>
          <li>PROFILE</li>
          <li>WRITE</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
