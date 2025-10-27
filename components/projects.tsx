import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code2, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SpaceX Launch Dashboard",
    description:
      "Dashboard interactivo para visualizar, filtrar y gestionar lanzamientos espaciales de SpaceX usando su API pública oficial. Incluye mapa interactivo con Google Maps y sistema de favoritos con localStorage.",
    context:
      "Proyecto personal enfocado en la exploración de datos espaciales en tiempo real usando la API pública de SpaceX. Diseñado para ofrecer una experiencia visual y analítica atractiva.",
    analysis:
      "Se integró Next.js con TypeScript y Tailwind para lograr una UI fluida y optimizada. El mapa con Google Maps API permitió representar ubicaciones precisas y mejorar la interacción del usuario.",
    conclusions:
      "El resultado fue un dashboard rápido, informativo y escalable, con datos actualizados dinámicamente y soporte para despliegue con Docker.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Google Maps API",
      "Docker",
      "Tailwind CSS",
    ],
    github: "https://github.com/Ricaxdo/spacex_launch_dashboard",
    demo: null,
    features: [
      "Consumo de API REST de SpaceX con filtros avanzados",
      "Mapa interactivo con Google Maps para visualizar sitios de lanzamiento",
      "Sistema de favoritos persistente con localStorage",
      "Filtros por año, resultado, cohete y búsqueda por misión",
      "UI responsiva y moderna con animaciones suaves",
      "Dockerizado para fácil despliegue",
    ],
    image: "/images/spacex-dashboard.png", // opcional: agrega una imagen o GIF
  },
  {
    title: "Around React",
    description:
      "Aplicación web interactiva desarrollada con React y Vite para compartir y gestionar fotografías. Incluye funcionalidades de perfil de usuario, galería de imágenes y sistema de likes.",
    context:
      "Versión moderna del clásico proyecto ‘Around The U.S.’, reconstruida en React con un enfoque modular, limpio y responsive.",
    analysis:
      "Durante el desarrollo se implementaron hooks para la gestión del estado, metodología BEM para estilos y una estructura escalable para componentes reutilizables.",
    conclusions:
      "Se logró una app visualmente atractiva y fácil de mantener, que demuestra dominio en arquitectura React y principios de diseño UI/UX.",
    technologies: ["React", "Vite", "JavaScript", "CSS", "HTML", "BEM"],
    github: "https://github.com/Ricaxdo/web_project_around_react",
    demo: null,
    features: [
      "Diseño Responsivo con Media Queries",
      "Componentes modulares en React",
      "Gestión de estado con hooks",
      "Metodología BEM para estilos",
    ],
    image: "/images/around-react.png", // opcional
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Proyectos</h2>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mt-1">
                    <Code2 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mt-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* 📄 Bloque de documentación breve */}
                <div className="ml-14 space-y-1 text-sm text-muted-foreground border-l border-border pl-4">
                  <p>
                    <strong>Contexto:</strong> {project.context}
                  </p>
                  <p>
                    <strong>Análisis:</strong> {project.analysis}
                  </p>
                  <p>
                    <strong>Conclusiones:</strong> {project.conclusions}
                  </p>
                </div>

                <ul className="space-y-2 ml-14 pt-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1.5 text-xs">▹</span>
                      <span className="text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 ml-14">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 ml-14 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Ver código</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Ver demo</span>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
