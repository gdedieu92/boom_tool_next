

import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

export default function PageLayout({children}) {
  return (
    <SidebarProvider>
    <AppSidebar />
    <main>
      <SidebarTrigger />
      {children}
    </main>
  </SidebarProvider>
  )
}


 
function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

//Regular layout empty, above exampling is inserting the sidebar component from shadcn
// export default function BackofficeLayout({ children }) {
//   return (
//     <section>
//       Backoffice layout, maybe navbsr and those things goes here.
//       {children}
//     </section>
//   );
// }