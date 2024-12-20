import localFont from "next/font/local";
import "./../globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../../components/app-sidebar";
import Breadcrumbs from "@/src/components/breadcrumbs";
import { NavbarMobile } from "@/src/components/navbar-mobile";


const geistSans = localFont({
  src: "./../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger id="sidebarTrigger" className="hidden md:inline-flex"/>
            
            <NavbarMobile/>
            <div className="container px-3 md:px-6 lg:px-8 mx-auto">
              <Breadcrumbs/>
              {children}
              </div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
