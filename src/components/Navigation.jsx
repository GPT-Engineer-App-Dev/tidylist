import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Navigation() {
  return (
    <Flex as="nav" bg="brand.800" p={4} color="white" justifyContent="space-between">
      <Box>
        <Link as={RouterLink} to="/" px={2}>Home</Link>
        <Link as={RouterLink} to="/todo" px={2}>Todo App</Link>
      </Box>
    </Flex>
  );
}

export default Navigation;