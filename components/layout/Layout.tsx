"use client";

import { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-canvas text-white">
      <Sidebar expanded={sidebarOpen} onToggle={() => setSidebarOpen((v) => !v)} />
      <div className="flex-1 overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto px-10 pb-10 pt-6">{children}</main>
      </div>
    </div>
  );
};
