import { Box, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Footer() {
  return (
    <Box as="footer" bg="brand.800" p={4} color="white" textAlign="center">
      © 2023 Todo App, Inc. | <Link as={RouterLink} to="/privacy-policy" color="white">Privacy Policy</Link>
    </Box>
  );
}

export default Footer;