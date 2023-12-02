import { Box } from "@mui/material";
import { ReactNode } from "react";
import TopBar from "./TopBar";
import Footer from "./Footer";
interface Prop {
  children: ReactNode;
}

const Layout = ({ children }: Prop) => {
  return (
    <Box>
      <TopBar />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};
export default Layout;
