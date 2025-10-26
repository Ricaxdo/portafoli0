import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="font-mono text-lg md:text-xl"></span>
          Sobre mí
        </h2>

        <div className="space-y-8">
          <Card className="p-6 md:p-8 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p className="text-foreground">
                Soy un{" "}
                <span className="text-primary font-semibold">
                  Frontend Developer
                </span>{" "}
                con experiencia en la construcción de aplicaciones web y móviles
                utilizando tecnologías modernas como{" "}
                <span className="text-primary">React.js</span>,{" "}
                <span className="text-primary">Next.js</span> y{" "}
                <span className="text-primary">React Native</span>. Actualmente
                contribuyo al desarrollo de herramientas de productividad para
                microempresas en una startup.
              </p>

              <p className="text-muted-foreground">
                Mi formación como{" "}
                <span className="text-foreground font-semibold">
                  Ingeniero en Nanotecnología
                </span>{" "}
                me ha proporcionado una base sólida en resolución de problemas y
                pensamiento analítico, habilidades que aplico diariamente en el
                desarrollo de soluciones de software mantenibles y eficientes.
              </p>

              <p className="text-muted-foreground">
                Me apasiona crear interfaces de usuario intuitivas y optimizar
                el rendimiento de las aplicaciones. Valoro el aprendizaje
                continuo, la colaboración en equipo y la responsabilidad en cada
                proyecto.
              </p>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-6 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">
                  Desarrollo Colaborativo
                </h3>
                <p className="text-sm text-muted-foreground">
                  Trabajo efectivo en equipos multifuncionales
                </p>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">
                  UI/UX Awareness
                </h3>
                <p className="text-sm text-muted-foreground">
                  Enfoque en experiencia de usuario y diseño
                </p>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Optimización</h3>
                <p className="text-sm text-muted-foreground">
                  Mejora continua de rendimiento y código
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
