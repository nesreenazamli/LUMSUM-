import Checkout from "./pages/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import { InnerSection } from "./App.Styles";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      {" "}
      <InnerSection>
        <NavBar />
        <Checkout />{" "}
      </InnerSection>
      <Footer />
    </>
  );
}

export default App;
