import React, { ReactChildren, ReactChild } from "react";

interface LayoutProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
