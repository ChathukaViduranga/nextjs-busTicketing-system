import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./providers";
//import Navbar from "./components/Navbar";
import Navprovider from "./Navprovider";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Easy Travel",
  description: "book your bus rides easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans&family=Poppins:wght@300&family=Roboto:wght@100&family=Tinos&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Navprovider />
        <AuthProvider>{children}</AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
