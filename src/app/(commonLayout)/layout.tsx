import PublicNavbar from "@/components/shared/PublicNavbar";
import PublicFooter from "@/components/shared/PublicFooter";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <PublicNavbar />
      {children}
      <PublicFooter />
    </div>
  );
};

export default CommonLayout;
