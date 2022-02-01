import Default from '@layout/Default/Default';
import HomePage from '@template/HomePage/HomePage';
import Head from 'next/head';

const App = () => (
  <Default>
    <Head>
      <title>NextJs Boiler Plate</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <HomePage />
  </Default>
);

export default App;
