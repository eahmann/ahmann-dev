import { NextComponentType, NextPage } from "next";
import { FunctionComponent } from "react";

interface LayoutProps {
  children: React.ReactNode
}
 
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return ( <div className="flex flex-col justify-between min-h-screen bg-slate-900">
    <main className="flex-1"> {children} </main>
    <footer className="text-white text-center">
      
      </footer>
  </div> );
}
 
export default Layout;