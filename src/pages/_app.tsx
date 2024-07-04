import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import { Auth } from "@/components/Auth";

export default function App({ Component, pageProps: {
  session, 
  ...pageProps
}}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Auth>
        <Component {...pageProps} />
      </Auth>
    </SessionProvider>
  );
}
