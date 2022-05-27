import React from "react";
import { Footer, Header } from "../components";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="min-h-[100vh]">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
