import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@components/Navbar";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "../lib/context";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { auth, firestore } from "@lib/firebase";
import useUserData from "@lib/hooks";

function MyApp({ Component, pageProps }: AppProps) {
  const userData = useUserData();

  return (
    <>
      <UserProvider value={userData}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserProvider>
    </>
  );
}

export default MyApp;
