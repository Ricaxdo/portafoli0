import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Award, GraduationCap } from "lucide-react";

const certifications = [
  "TripleTen Bootcamp - Web Developer | UX/UI Designer (2025)",
  "Lean Six Sigma Yellow Belt - LeanAcademy (2023)",
  "Git y GitHub Profesional - Platzi (2023)",
  "Python: De 0 a Developer - Udemy (2022)",
];

const achievements = [
  "Consejero Divisional en el Consejo Universitario - UdeG (2020)",
  'Top 10 proyectos "Sembrando una idea contra el cambio climático" (2019)',
  "Ponente en Congreso Internacional XXV Verano de Investigación (2019)",
];

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Educación y Certificaciones
        </h2>

        <div className="space-y-6">
          <Card className="p-6 md:p-8 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">
                  Ingeniería en Nanotecnología
                </h3>
                <p className="text-primary font-medium">
                  Universidad de Guadalajara
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Agosto 2017 - Junio 2021
                </p>
                <div className="mt-3">
                  <Badge variant="secondary">Promedio: 95.14/100</Badge>
                </div>
                <p className="text-muted-foreground mt-4">
                  Formación especializada en microscopía de fuerza atómica,
                  difracción de rayos X, determinación experimental de
                  estructura de bandas electrónicas, espectroscopía UV y FTIR.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 md:p-8 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Certificaciones</h3>
            </div>
            <ul className="space-y-2 ml-16">
              {certifications.map((cert, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-accent mt-1.5">•</span>
                  <span className="text-muted-foreground">{cert}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 md:p-8 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-xl font-bold mb-4">Reconocimientos y Logros</h3>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
