import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "DataStai",
    location: "Guadalajara, Jalisco, México",
    period: "Marzo 2024 - Presente",
    description: [
      "Desarrollo y mantenimiento de aplicación multiplataforma para microempresas usando React.js y React Native",
      "Colaboración con equipos multifuncionales para crear herramientas digitales (web y móvil)",
      "Construcción de componentes UI modulares y optimización de rendimiento",
      "Participación en el ciclo completo de desarrollo: planificación, prototipado, testing y deployment",
    ],
    tags: ["React.js", "React Native", "JavaScript", "UI/UX"],
  },
  {
    title: "Jr. Test Engineer",
    company: "Foxconn Paragon Solutions",
    location: "Tlaquepaque, Jalisco, México",
    period: "Agosto 2022 - Presente",
    description: [
      "Mantenimiento preventivo y correctivo de equipos FBT con yield rate superior al 95%",
      "Monitoreo y análisis de datos de rendimiento para identificar problemas tempranamente",
      "Desarrollo de scripts de automatización en Linux que redujeron el tiempo de prueba en ~20%",
      "Capacitación de técnicos en procedimientos actualizados y protocolos de seguridad",
    ],
    tags: ["Linux", "Bash", "Automatización", "Testing"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Experiencia</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mt-1">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mt-1">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 ml-14">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1.5 text-xs">▹</span>
                      <span className="text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 ml-14">
                  {exp.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
