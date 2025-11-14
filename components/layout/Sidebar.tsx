"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import {
  ArrowRightLeft,
  BarChart3,
  CalendarCheck,
  ChevronLeft,
  Layers,
  LucideIcon,
  MessageSquare,
  Plus,
  Settings,
  UserRound
} from "lucide-react";
import classNames from "classnames";

const navItems: { icon: LucideIcon; label: string }[] = [
  { icon: Layers, label: "Projetos" },
  { icon: MessageSquare, label: "Discussões" },
  { icon: CalendarCheck, label: "Sprints" },
  { icon: BarChart3, label: "Relatórios" },
  { icon: ArrowRightLeft, label: "Fluxos" },
  { icon: Settings, label: "Configurações" }
];

interface SidebarProps {
  expanded: boolean;
  onToggle: () => void;
}

const Item = ({
  icon: Icon,
  label,
  expanded
}: {
  icon: LucideIcon;
  label: string;
  expanded: boolean;
}) => (
  <motion.li
    className="group flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-muted transition hover:bg-white/5 hover:text-white"
    whileHover={{ x: 4 }}
  >
    <Icon className="size-4" />
    {expanded && <span className="font-medium tracking-wide">{label}</span>}
  </motion.li>
);

const QuickCreate = ({ expanded }: { expanded: boolean }) => (
  <button
    className={classNames(
      "flex w-full items-center justify-between rounded-xl bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition hover:bg-primary/20",
      !expanded && "justify-center"
    )}
  >
    <div className="flex items-center gap-2">
      <Plus className="size-4" />
      {expanded && <span>Novo Item</span>}
    </div>
    {expanded && (
      <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs uppercase tracking-wide">
        N
      </span>
    )}
  </button>
);

export const Sidebar = ({ expanded, onToggle }: SidebarProps) => {
  const width = useMemo(() => (expanded ? 260 : 88), [expanded]);

  return (
    <motion.aside
      animate={{ width }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
      className="relative flex flex-col border-r border-border/60 bg-surface/80 backdrop-blur-xl"
    >
      <div className="flex h-20 items-center gap-3 px-5">
        <div className="flex size-10 items-center justify-center rounded-2xl bg-primary text-base font-semibold ">
          PL
        </div>
        {expanded && (
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-white">
              Plataforma Linear
            </span>
            <span className="text-xs text-muted">Operações e Produto</span>
          </div>
        )}
      </div>

      <div className="px-4">
        <QuickCreate expanded={expanded} />
      </div>

      <nav className="mt-6 flex-1 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <Item key={item.label} expanded={expanded} {...item} />
          ))}
        </ul>
      </nav>

      <div className="border-t border-border/60 px-4 py-4">
        <div
          className={classNames(
            "flex items-center gap-3 rounded-xl bg-white/5 px-3 py-3",
            !expanded && "justify-center"
          )}
        >
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary/20 text-primary">
            <UserRound className="size-4" />
          </div>
          {expanded && (
            <div>
              <p className="text-sm font-medium text-white">Vitória Andrade</p>
              <p className="text-xs text-muted">Product Designer</p>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={onToggle}
        className="absolute -right-3 top-20 flex size-7 items-center justify-center rounded-full border border-border/60 bg-surface shadow-lg transition hover:bg-white/10"
        aria-label="Alternar sidebar"
      >
        <ChevronLeft
          className={classNames("size-4 transition", !expanded && "rotate-180")}
        />
      </button>
    </motion.aside>
  );
};
