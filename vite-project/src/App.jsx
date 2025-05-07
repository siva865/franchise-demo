import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import MenuShowcase from "./Menushowcase";
import FranchiseBenefits from "./Franchise";
import Testimonials from "./Testimonial";
import ContactForm from "./Conatct";
import Footer from "./Footer";

function App()
{
  return(
    <div className="font-sans bg-gray-50">
      <Header></Header>
      <Hero></Hero>
      <MenuShowcase></MenuShowcase>
      <FranchiseBenefits></FranchiseBenefits>
      <Testimonials></Testimonials>
      <ContactForm></ContactForm>
      <Footer></Footer>

    </div>
  )
}

export default App