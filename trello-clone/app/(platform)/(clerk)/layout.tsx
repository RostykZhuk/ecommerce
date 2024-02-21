import { ReactNode } from "react";

const ClerkLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-between">{children}</div>
  );
};
export default ClerkLayout;
