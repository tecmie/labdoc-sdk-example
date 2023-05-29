import { LabProvider } from "@tecmie/labdoc-sdk";

const MyApp = ({ Component, pageProps }) => {
  return (
    <LabProvider 
      secretOrKey={process.env.NEXT_PUBLIC_LAB_SECRET as string} 
      // customHttpLink="http://localhost:3001/api/trpc"
    >
      <Component {...pageProps} />
    </LabProvider>
  );
};
export default MyApp;
