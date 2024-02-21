import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

const PlatformLayout = ({ children }: { children: ReactNode }) => {
  <ClerkProvider>{children}</ClerkProvider>;
};

export default PlatformLayout;
