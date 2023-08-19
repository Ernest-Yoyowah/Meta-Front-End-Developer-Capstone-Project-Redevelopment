import React from 'react'

import Navbar from '../../components/navbar/nav';
import Hero from '../../components/hero/Hero';
import Main from '../../components/main/Main';
import Review from '../../components/review/Review'
import History from '../../components/history/History';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Main />
    <Review />
    <History />
    <Footer />
    </>
  )
}

export default Home