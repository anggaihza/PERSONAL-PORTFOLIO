import "../styles/globals.css";

import Layout from "../components/Layout";
import Transition from "../components/Transition";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// router
import { useRouter } from "next/router";

// framer motion
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Head>
            <link rel="icon" href="/favicon.png" />
          </Head>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout >
  );
}

export default MyApp;
