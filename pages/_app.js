// pages/_app.js
import Layout from './Layout';
import '../styles/globals.css'; // Import your global styles here
import { ThemeProvider } from '@/context/ThemeContext';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
