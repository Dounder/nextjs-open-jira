import { NextPage } from 'next';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { Layout } from '../layouts';
import { EntryList, NewEntry } from '../components/entries';

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 85px)' }}>
            <CardHeader title="Pending" />
            <CardContent sx={{ padding: '1vmin' }}>
              <NewEntry />
              <EntryList status="pending" />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 85px)' }}>
            <CardHeader title="In Progress" />
            <CardContent sx={{ padding: '1vmin' }}>
              <EntryList status="in-progress" />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 85px)' }}>
            <CardHeader title="Finished" />
            <CardContent sx={{ padding: '1vmin' }}>
              <EntryList status="finished" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
