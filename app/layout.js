import Header from "@/components/header";
import "./globals.css";
// import { Inter } from "next/font/google";
import Footer from "@/components/footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fat Burgers",
  description: "Order your burger",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
