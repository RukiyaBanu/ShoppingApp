import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import { Provider } from "react-redux";
import Store from "../pages/Stateredux/store";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <div className="wrapper">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
