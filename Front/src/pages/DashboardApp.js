// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppNewUsers,
  AppWithoutMask,
  AppMaskWornIncorrectly,
  AppWithMask,
  AppCurrentVisits,
  AppWebsiteVisits
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Cozy Koalas">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWithMask />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppMaskWornIncorrectly />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWithoutMask />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
