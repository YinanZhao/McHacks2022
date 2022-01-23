import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Container, Stack, Typography, Button } from '@mui/material';
import plusFill from '@iconify/icons-eva/plus-fill';
// components
import Page from '../components/Page';
import { ProductList } from '../components/_dashboard/products';
//
import PRODUCTS from '../_mocks_/products';

// ----------------------------------------------------------------------

export default function Products() {
  return (
    <Page title="Dashboard: Cameras | Cozy Koalas">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Cameras
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Icon icon={plusFill} />}
          >
            New Camera
          </Button>
        </Stack>
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        />

        <ProductList products={PRODUCTS} />
      </Container>
    </Page>
  );
}
