import React from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Grid,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const OrderConfirmation = () => {
  const { currentOrder } = useSelector((state) => state.orders);

  if (!currentOrder) {
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Order Not Found
        </Typography>
        <Button
          component={RouterLink}
          to="/products"
          variant="contained"
          color="primary"
        >
          Continue Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Card>
        <CardContent>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <CheckCircleIcon
              color="success"
              sx={{ fontSize: 80, mb: 2 }}
            />
            <Typography variant="h4" gutterBottom>
              Thank You for Your Order!
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              Order #{currentOrder._id}
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Order Details
              </Typography>
              {currentOrder.items.map((item) => (
                <Box key={item._id} sx={{ mb: 1 }}>
                  <Typography>
                    {item.name} x {item.quantity} - ${item.price * item.quantity}
                  </Typography>
                </Box>
              ))}
              <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                Total: ${currentOrder.totalAmount.toFixed(2)}
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Shipping Address
              </Typography>
              <Typography>
                {currentOrder.shippingAddress.firstName}{' '}
                {currentOrder.shippingAddress.lastName}
              </Typography>
              <Typography>{currentOrder.shippingAddress.address}</Typography>
              <Typography>
                {currentOrder.shippingAddress.city},{' '}
                {currentOrder.shippingAddress.state}{' '}
                {currentOrder.shippingAddress.zipCode}
              </Typography>
              <Typography>{currentOrder.shippingAddress.country}</Typography>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button
              component={RouterLink}
              to="/products"
              variant="contained"
              color="primary"
            >
              Continue Shopping
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default OrderConfirmation; 