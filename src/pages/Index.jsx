import { useState } from "react";
import { ChakraProvider, Box, VStack, HStack, Button, Text, Container, IconButton } from "@chakra-ui/react";
import { FaUser, FaSignOutAlt, FaList, FaBuilding, FaBed, FaUsers, FaCog } from "react-icons/fa";

const pages = {
  LOGIN: "Login",
  LOGOUT: "Logout",
  STUDENT_LIST: "Student List",
  ACCOUNTS: "Accounts",
  DORM_LIST: "Dorm List",
  ROOM_LIST: "Room List",
  USER_LIST: "User List",
  SETTINGS: "Settings",
};

const NavBar = ({ setPage }) => (
  <HStack spacing={4} p={4} bg="gray.100" w="full" justifyContent="center">
    <IconButton aria-label="Login" icon={<FaUser />} onClick={() => setPage(pages.LOGIN)} />
    <IconButton aria-label="Logout" icon={<FaSignOutAlt />} onClick={() => setPage(pages.LOGOUT)} />
    <IconButton aria-label="Student List" icon={<FaList />} onClick={() => setPage(pages.STUDENT_LIST)} />
    <IconButton aria-label="Accounts" icon={<FaUser />} onClick={() => setPage(pages.ACCOUNTS)} />
    <IconButton aria-label="Dorm List" icon={<FaBuilding />} onClick={() => setPage(pages.DORM_LIST)} />
    <IconButton aria-label="Room List" icon={<FaBed />} onClick={() => setPage(pages.ROOM_LIST)} />
    <IconButton aria-label="User List" icon={<FaUsers />} onClick={() => setPage(pages.USER_LIST)} />
    <IconButton aria-label="Settings" icon={<FaCog />} onClick={() => setPage(pages.SETTINGS)} />
  </HStack>
);

const PageContent = ({ page }) => {
  switch (page) {
    case pages.LOGIN:
      return <Text fontSize="2xl">Login Page</Text>;
    case pages.LOGOUT:
      return <Text fontSize="2xl">Logout Page</Text>;
    case pages.STUDENT_LIST:
      return <Text fontSize="2xl">Student List Page</Text>;
    case pages.ACCOUNTS:
      return <Text fontSize="2xl">Accounts Page</Text>;
    case pages.DORM_LIST:
      return <Text fontSize="2xl">Dorm List Page</Text>;
    case pages.ROOM_LIST:
      return <Text fontSize="2xl">Room List Page</Text>;
    case pages.USER_LIST:
      return <Text fontSize="2xl">User List Page</Text>;
    case pages.SETTINGS:
      return <Text fontSize="2xl">Settings Page</Text>;
    default:
      return <Text fontSize="2xl">Welcome to the Dormitory Management System</Text>;
  }
};

const Index = () => {
  const [page, setPage] = useState("");

  return (
    <ChakraProvider>
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4} w="full">
          <NavBar setPage={setPage} />
          <Box p={4} bg="white" shadow="md" borderRadius="md" w="full" textAlign="center">
            <PageContent page={page} />
          </Box>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
