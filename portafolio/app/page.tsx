import Link from "next/link";

const demoHighlights = [
  "Gestion de compras, ventas e inventario en una sola plataforma.",
  "Interfaz clara para equipos pequenos y medianas empresas.",
  "Base ideal para una implementacion SaaS personalizada.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-20 md:px-10">
        <div className="inline-flex w-fit rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
          Demo funcional desplegada en Vercel
        </div>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Software para pymes con enfoque en operacion, control y crecimiento.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Esta demo presenta una base moderna para digitalizar procesos clave de una pyme:
            compras, ventas, inventario y reportes, con una experiencia agil y lista para
            evolucionar segun las necesidades del negocio.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/demo"
            className="rounded-full bg-emerald-500 px-6 py-3 text-center font-medium text-white transition hover:bg-emerald-400"
          >
            Ver recorrido de la demo
          </Link>
          <a
            href="https://demo-pymes.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 text-center font-medium text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Abrir aplicacion en vivo
          </a>
          <a
            href="https://giovannycol25.github.io/#contacto"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-sky-400/30 px-6 py-3 text-center font-medium text-sky-200 transition hover:border-sky-300/50 hover:bg-sky-400/10"
          >
            Solicitar una version similar
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {demoHighlights.map((item) => (
            <article
              key={item}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-200"
            >
              <h2 className="mb-3 text-lg font-semibold text-white">Valor para negocio</h2>
              <p className="leading-7">{item}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
