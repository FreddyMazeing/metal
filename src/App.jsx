import AboutUs from "./compo/AboutUs";
import Testimonials from "./compo/Testimonials";
import GalleryLink from "./compo/GalleryLink";
import Homepage from "./compo/Homepage";
import Services from "./compo/Services";
import Navbar from "./compo/Navbar";
import ContactForm from "./compo/ContactForm";
import Footer from "./compo/Footer";
import Image from "./compo/Image";

const App = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <div className="max-w-full min-h-screen bg-[#000000]">
        <div className="max-w-[2000px] mx-auto">
          <Services />
          <Image />
          <GalleryLink />

          <AboutUs />
          <Testimonials />
          <ContactForm />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
