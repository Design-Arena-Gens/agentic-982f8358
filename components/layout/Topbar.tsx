"use client";

import { Bell, Command, Search } from "lucide-react";

export const Topbar = () => (
  <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border/60 bg-surface/80 px-10 backdrop-blur-lg">
    <div className="flex items-center gap-3">
      <div className="rounded-full border border-border/60 bg-canvas px-2 py-0.5 text-xs uppercase tracking-wider text-muted">
        Sprint 12
      </div>
      <h1 className="text-lg font-semibold tracking-tight text-white">
        Design System Evolution
      </h1>
    </div>

    <div className="flex items-center gap-4">
      <div className="group flex items-center gap-2 rounded-xl border border-transparent bg-white/5 px-4 py-2 text-sm text-muted transition hover:border-border/40 hover:text-white">
        <Search className="size-4 text-muted group-hover:text-white" />
        <span className="hidden md:block">Buscar</span>
        <kbd className="flex items-center gap-1 rounded-md border border-border/60 px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted">
          <Command className="size-3" />
          K
        </kbd>
      </div>
      <button className="relative rounded-full border border-border/60 bg-white/5 p-2 text-muted transition hover:bg-white/10 hover:text-white">
        <Bell className="size-4" />
        <span className="absolute right-1 top-1 size-2 rounded-full bg-secondary" />
      </button>
    </div>
  </header>
);
