import { Poppins } from "next/font/google";
import Navbar from "./navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const Layout = ({ children }) => {
  return (
    <>
      <div className={`${poppins.className}`}>
        <Navbar />
        <div>
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;