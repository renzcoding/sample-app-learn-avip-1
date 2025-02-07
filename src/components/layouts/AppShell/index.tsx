import { useRouter } from "next/router";
import Footer from "../Footer";
import Navbar from "../Navbar";

type AppShellProps = {
  children: React.ReactNode;
};

const disableNavbar = ["/auth/login", "/auth/register"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
      <Footer />
    </main>
  );
};

export default AppShell;
