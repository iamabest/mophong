import { AppFooter } from "./AppFooter";
import { Hero } from "./Hero";
import { SiteHeader } from "./SiteHeader";

function PageLayout({ children }) {
  return (
    <>
      <SiteHeader />
      <main>

        {children}
      </main>
      <AppFooter />
    </>
  );
}

export default PageLayout;
