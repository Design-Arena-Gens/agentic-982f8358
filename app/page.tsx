"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Flag,
  MessageCircle,
  TimerReset
} from "lucide-react";

const columns = [
  {
    title: "Backlog",
    count: 5,
    tasks: [
      {
        title: "Pesquisa com clientes premium",
        tag: "Pesquisa",
        avatar: "AM",
        status: "Baixa prioridade",
        comments: 4
      },
      {
        title: "Mapear integrações críticas",
        tag: "Integração",
        avatar: "LS",
        status: "Média prioridade",
        comments: 3
      }
    ]
  },
  {
    title: "Em progresso",
    count: 3,
    tasks: [
      {
        title: "Refatorar onboarding workspace",
        tag: "Produto",
        avatar: "VA",
        status: "Alta prioridade",
        comments: 12
      },
      {
        title: "Melhorar performance da timeline",
        tag: "Performance",
        avatar: "JW",
        status: "Alta prioridade",
        comments: 6
      }
    ]
  },
  {
    title: "Revisão",
    count: 2,
    tasks: [
      {
        title: "Especificação do modo escuro",
        tag: "Design",
        avatar: "FP",
        status: "Aguardando QA",
        comments: 2
      },
      {
        title: "Teste: fluxo completo de billing",
        tag: "QA",
        avatar: "AG",
        status: "Alta prioridade",
        comments: 1
      }
    ]
  },
  {
    title: "Concluído",
    count: 7,
    tasks: [
      {
        title: "Sprint review com stakeholders",
        tag: "Reunião",
        avatar: "RM",
        status: "Finalizado",
        comments: 5
      }
    ]
  }
];

const insightCards = [
  {
    title: "Tempo médio de ciclo",
    value: "3.1 dias",
    diff: "-12%",
    icon: TimerReset,
    color: "from-primary/30 via-primary/10 to-transparent"
  },
  {
    title: "Taxa de aprovação em review",
    value: "88%",
    diff: "+6%",
    icon: Flag,
    color: "from-secondary/40 via-secondary/10 to-transparent"
  }
];

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {insightCards.map((card) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="relative overflow-hidden rounded-3xl border border-border/40 bg-surface/70 p-5 shadow-glow"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-70`}
            />
            <div className="relative flex flex-col gap-6">
              <card.icon className="size-5 text-muted" />
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">
                  {card.title}
                </p>
                <h2 className="mt-1 text-2xl font-semibold">{card.value}</h2>
                <p className="text-xs text-secondary">{card.diff} vs. última sprint</p>
              </div>
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="col-span-1 rounded-3xl border border-dashed border-border/60 bg-surface/30 p-5 text-muted"
        >
          <div className="flex h-full flex-col items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide">Automação</p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                Orquestre novas automações sem código
              </h2>
            </div>
            <button className="mt-6 inline-flex items-center gap-2 text-sm text-primary transition hover:text-primary/80">
              Configurar agora
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </motion.div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Quadro da sprint</h2>
            <p className="text-sm text-muted">
              Acompanhe as iniciativas em andamento com foco no impacto.
            </p>
          </div>
          <button className="rounded-xl border border-border/60 bg-white/5 px-4 py-2 text-sm text-muted transition hover:bg-white/10 hover:text-white">
            Exportar relatório
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {columns.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-surface/70 p-4 shadow-glow"
            >
              <header className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">{column.title}</p>
                  <span className="text-xs text-muted">{column.count} itens</span>
                </div>
                <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-muted">
                  {Math.max(column.count, column.tasks.length)}
                </span>
              </header>
              <div className="space-y-3">
                {column.tasks.map((task, taskIndex) => (
                  <motion.article
                    key={task.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: taskIndex * 0.04 }}
                    className="group rounded-2xl border border-transparent bg-white/[0.04] p-4 transition hover:border-primary/30"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-wide text-muted">
                        {task.tag}
                      </span>
                      <span className="text-xs text-secondary">{task.status}</span>
                    </div>
                    <h3 className="mt-2 text-base font-medium text-white">
                      {task.title}
                    </h3>
                    <footer className="mt-3 flex items-center justify-between text-xs text-muted">
                      <div className="flex items-center gap-2">
                        <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">
                          {task.avatar}
                        </span>
                        <span className="rounded-full bg-white/5 px-2 py-0.5">
                          {task.comments} comentários
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-muted">
                        <MessageCircle className="size-3" />
                        Acompanhar
                      </span>
                    </footer>
                  </motion.article>
                ))}
                <button className="self-start rounded-xl border border-dashed border-border/60 px-3 py-2 text-xs text-muted transition hover:border-primary/40 hover:text-white">
                  Adicionar tarefa
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
