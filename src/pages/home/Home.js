import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Featured from "../../components/navbar/featured/Featured";
import Header from "../../components/navbar/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css"

const Home = () => {
  return <div>

      <Navbar/>
      <Header />
      <div className="homeContainer"> 
      <Featured />
     <h1 className="homeTitle"> Browse by property type </h1>
    <PropertyList/>
    <h1 className="homeTitle">Homes guests love</h1>
    <FeaturedProperties />
    <MailList/>
    <Footer/>
      </div>
  </div>;
};

export default Home;
