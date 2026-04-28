import React from "react";
import Link from "next/link";

const DEMO_URL = "https://demo-pymes.vercel.app/";

export default function DemoPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Demo SaaS para Pymes",
    description:
      "Demo interactiva de gestión para pymes: compras, ventas, inventario y reportes.",
    url: DEMO_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
  };

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Demo SaaS para Pymes</h1>
      <p className="mb-4">
        Esta demo muestra las funciones clave de un SaaS para pequeñas y medianas empresas:
        gestión de compras, ventas, inventario y reportes. Puedes usarla para evaluar la
        experiencia de usuario y las funcionalidades principales.
      </p>

      <div className="flex gap-4 mb-6">
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Abrir demo (nueva pestaña)
        </a>

        <Link href="/" className="px-4 py-2 border rounded">
          Volver al portafolio
        </Link>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Credenciales de prueba</h2>
        <p>
          Si decides compartir accesos de prueba, añade aquí solo credenciales creadas para demo
          o habilita un flujo de prueba controlado. No publiques contraseñas sensibles.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Notas para el despliegue</h2>
        <ul className="list-disc ml-6">
          <li>La demo ya está conectada a la URL pública de Vercel.</li>
          <li>Verificar que Forms o endpoints de demo no envíen datos sensibles a producción.</li>
          <li>Activar Google Analytics y Search Console para la URL de la demo si quieres medir tráfico.</li>
        </ul>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}
