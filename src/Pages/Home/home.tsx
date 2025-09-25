import CollectionComponent from "../components/CollectionComponent";
import DualImageComponent from "../components/dualimage";
import RelatedShop from "../jsoBin/related";
// import FeaturedProduct from "../products/FeaturedProd";
import Carousel from "./carousel"



const Home: React.FC = () => {
  

  return (
    <>
    <Carousel/>
     <RelatedShop/>
    {/* <FeaturedProduct/> */}
   
    <CollectionComponent/>
    <DualImageComponent/>
    </>
   
  );
};

export default Home;
