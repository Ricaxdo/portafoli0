import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-20 relative"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="space-y-6">
          <p className="text-primary font-mono text-sm md:text-base animate-in fade-in slide-in-from-bottom-4 duration-700">
            Hola
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Ricardo Castro
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Construyo experiencias web modernas
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Soy un <span className="text-primary">Frontend Developer</span>{" "}
            especializado en crear interfaces limpias y eficientes con{" "}
            <span className="text-primary">React.js</span> y{" "}
            <span className="text-primary">Next.js</span>. Actualmente
            contribuyendo al desarrollo de herramientas de productividad para
            microempresas.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-white transition-all duration-300 hover:scale-110 bg-transparent"
            >
              <a
                href="https://github.com/Ricaxdo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-white transition-all duration-300 hover:scale-110 bg-transparent"
            >
              <a
                href="https://www.linkedin.com/in/ricardo-antonio-castro-rojas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
