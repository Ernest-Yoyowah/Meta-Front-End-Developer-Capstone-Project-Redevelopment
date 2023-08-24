import React from 'react'
import Navbar from '../../components/navbar/nav';
import Uderconstruction from '../../container/underconstruction/Uderconstruction';
import Line from "../../container/adj/line";
import Main from '../../components/main/Main';
import Footer from '../../components/footer/Footer';
import MenuC from './MenuC';

const Menu = () => {
  return (
    <>
    <Navbar />
    {/* <Line /> */}
    <MenuC />
    <Main />
    <Footer />
    </>
  )
}

export default Menu