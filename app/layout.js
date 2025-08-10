import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({
  subsets: ["latin"], weight: [ "100", "200", "300", "400", "500", "600", "700", "800", "900"], style: ["normal", "italic"], variable: "--font-poppins", display: 'swap'});

export const metadata = {
  title: "Netflix-Clone",
  description: "Watch TV Shows Online, Watch Movies Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
