import { Box, Button, Container, Divider, FormControl, FormLabel, Input } from '@chakra-ui/react';

import React, { Component ,useState,useEffect} from 'react'
import io from "socket.io-client";
import { ChatState } from '../context/chatProvider';
import Chatbox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";





function Chats() {

  const [fetchAgain, setFetchAgain] = useState(false);
  const {user} = ChatState();
 
  
    return (
      <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
     
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
       { user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
        
      </Box>
    </div>
    )
  
}

export default Chats