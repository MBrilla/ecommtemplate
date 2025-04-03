import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Box,
  CircularProgress,
} from '@mui/material';
import { fetchProducts } from '../store/slices/productSlice';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Box>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 4,
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Our E-Commerce Store
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Discover amazing products at great prices
          </Typography>
          <Button
            component={RouterLink}
            to="/products"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 2 }}
          >
            Shop Now
          </Button>
        </Container>
      </Box>

      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {loading ? (
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress />
            </Grid>
          ) : products.length > 0 ? (
            products.slice(0, 3).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <Grid item xs={12}>
              <Typography>No products available.</Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 