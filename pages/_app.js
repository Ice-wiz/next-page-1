import "../styles/globals.css";
import { VWOScript } from "inject-smartcode-next";

export default function App({ Component, pageProps }) {
  return (
    <>
      <VWOScript 
        accountId="955578"
        type="ASYNC"
        settingsTimeout={2000}
        hideElement="body"
        hideElementStyle="opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;transition:none !important;"
        scriptAttributes={{
          strategy: "beforeInteractive"
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
