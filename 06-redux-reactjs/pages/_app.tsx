import "bootstrap/dist/css/bootstrap.min.css"; // import css bootstrap
import "@/styles/globals.css";
import { useEffect } from "react"; // import hook untuk javascript bootstrap

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;