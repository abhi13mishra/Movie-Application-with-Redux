import { Box, Image, Text, Badge, Button, VStack } from '@chakra-ui/react';

const MovieCard = ({ movie }) => {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/300x450';

  return (
    <Box borderWidth="1px" borderRadius="md" p="4" shadow="md" w="250px">
      <Image src={poster} alt={movie.title} borderRadius="md" />
      <VStack mt="3" align="start">
        <Text fontWeight="bold">{movie.title}</Text>
        <Badge colorScheme="purple">{movie.release_date}</Badge>
        <Button size="sm" colorScheme="blue">Details</Button>
      </VStack>
    </Box>
  );
};

export default MovieCard;