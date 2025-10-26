import { Card } from "@/components/ui/card";
import { Code2, Layers, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Lenguajes",
    skills: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "TypeScript",
      "Bash",
      "Python",
      "SQL",
    ],
  },
  {
    icon: Layers,
    title: "Frameworks & Librerías",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
    ],
  },
  {
    icon: Wrench,
    title: "Herramientas",
    skills: [
      "Git/GitHub",
      "VS Code",
      "Figma",
      "Linux",
      "Vercel",
      "Docker",
      "PostgreSQL",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Habilidades Técnicas
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>

                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
