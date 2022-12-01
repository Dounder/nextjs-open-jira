import { Typography } from '@mui/material';
import { FC } from 'react';
import { Layout } from '../layouts';

const HomePage: FC = () => {
  return (
    <Layout title="Home">
      <Typography variant="h1" color="primary">
        Hello world
      </Typography>
    </Layout>
  );
};

export default HomePage;
