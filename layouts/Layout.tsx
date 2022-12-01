import { Box } from '@mui/material';
import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import { Navbar, Sidebar } from '../components/ui';

interface Props extends PropsWithChildren {
  title?: string;
}

export const Layout: FC<Props> = ({ title = 'OpenJira', children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <Sidebar />

      <Box sx={{ padding: '1vmin 2vmin' }}>{children}</Box>
    </Box>
  );
};
