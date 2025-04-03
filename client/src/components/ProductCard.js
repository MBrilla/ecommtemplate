import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';

const ProductCard = ({ product: propProduct }) => {
  const product = propProduct;

  if (!product) {
    return null;
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography>
            {product.description}
          </Typography>
          <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
            ${product.price}
          </Typography>
          <Button
            component={RouterLink}
            to={`/product/${product._id}`}
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            View Details
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard; 