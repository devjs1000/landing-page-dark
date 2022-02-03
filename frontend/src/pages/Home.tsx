import Quote from "../components/Quote";
import backgroundImg from "../../images/background.jpg";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
const Home = () => {
  return (
    <>
      <div>
        <div className="flex flex-wrap justify-around bg-black items-center min-h-[90vh] bg-contain bg-no-repeat bg-center" style={{backgroundImage:`url(${backgroundImg})`}}>
         <Quote />
         <Heading />
         <Footer/>
         <Sidebar/>
        </div>
        
      </div>
    </>
  );
};
export default Home;
