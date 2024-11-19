
export interface IRoute{
  title:string;
  url:string;
  private:Boolean;
}

const routes:IRoute[] = [
  {
    title: "Dashboard",
    url: "/backoffice/dashboard",
    private:true,
  },
  {
    title: "Invoices",
    url: "/invoices",
    private:true,
  },
  {
    title: "Clients",
    url: "/backoffice/clients",
    private:true,
  },
  {
    title: "Team Members",
    url: "/backoffice/team-members",
    private:true,
  },
  {
    title: "Search",
    url: "/search",
    private:true,
  },
  {
    title: "Settings",
    url: "/settings",
    private:true,
  },
  {
    title: "Login",
    url: "/login",
    private:false,
  },
]

export {routes};