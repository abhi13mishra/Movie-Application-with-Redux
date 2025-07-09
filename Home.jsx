import { useState, useEffect } from 'react';
import { Box, Input, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { searchMovies } from '../api/tmdb';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await searchMovies(query);
      setMovies(data);
    } catch (e) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.trim()) fetchMovies();
    }, 500); // debounce

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <Box p="5">
      <Input
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        mb="5"
      />
      {loading ? (
        <Spinner />
      ) : error ? (
        <Text color="red">{error}</Text>
      ) : (
        <SimpleGrid columns={[1, 2, 3]} spacing="5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Home;