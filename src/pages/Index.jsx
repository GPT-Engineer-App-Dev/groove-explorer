import { Container, VStack, Heading, Text, Button, HStack, Box, Image, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Box width="100%" textAlign="center">
          <Image src="https://images.unsplash.com/photo-1489602642804-64dea1e3ebc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwcGVyZm9ybWluZyUyMGxpdmV8ZW58MHx8fHwxNzE3NDUzOTg2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Band performing live" borderRadius="md" />
        </Box>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to [Band Name]'s Official Tour Page
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Join us on our journey as we tour across the country, bringing our music to a city near you!
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Tickets
        </Button>
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
