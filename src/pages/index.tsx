import type { NextPage } from 'next'
import Head from 'next/head';
import { useMoralis } from 'react-moralis';

import LoginPage from "../components/sections/login";
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
  const { isAuthenticated, logout } = useMoralis();
  
  if (!isAuthenticated) {
  return (
    <div>
      <LoginPage />
    </div>
  )
}
  return (
    <div>
      <Head>
        <title>NFTPLACE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
          <Sidebar />
        </main>
    </div>
  )
}

export default Home
