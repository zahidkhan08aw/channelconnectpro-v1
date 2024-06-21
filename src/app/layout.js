import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Whatsapp from "../../Components/Whatsapp"
import "./globals.css";

export const metadata = {
  title: "ChannelConnectPRO",
  description: "ChannelConnectPRO is Help you to get InterNet and TV Best Services",
};

export default function RootLayout({ children }) {
  return (
    <html >

      <body >
        <Navbar/>
        {children}
        <Whatsapp/>
        <Footer/>
        </body>
    </html>
  );
}
