import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code2, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Around React",
    description:
      "Aplicación web interactiva desarrollada con React y Vite para compartir y gestionar fotografías. Incluye funcionalidades de perfil de usuario, galería de imágenes y sistema de likes.",
    technologies: ["React", "Vite", "JavaScript", "CSS", "HTML", "BEM"],
    github: "https://github.com/Ricaxdo/web_project_around_react",
    demo: null,
    features: [
      "Diseño Responsivo con Media Queries",
      "Componentes modulares en React",
      "Gestión de estado con hooks",
      "Metodología BEM para estilos",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
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

                <ul className="space-y-2 ml-14">
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
