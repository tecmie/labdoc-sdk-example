import { LabAIClientProvider } from "@tecmie/labdoc-sdk";

const MyApp = ({ Component, pageProps }) => {
  return (
    <LabAIClientProvider secret="secret">
      <Component {...pageProps} />
    </LabAIClientProvider>
  );
};
export default MyApp;
