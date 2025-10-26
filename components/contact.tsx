import { Card } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contacto</h2>

        <Card className="p-6 md:p-8 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground text-balance">
              Estoy abierto a nuevas oportunidades y colaboraciones. Si quieres
              conversar sobre desarrollo frontend, proyectos interesantes o
              simplemente conectar, no dudes en contactarme.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:ricardo.caroj99@gmail.com"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    ricardo.caroj99@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="font-medium">Jalisco, México</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Ricardo Castro. Construido con Next.js
            y Tailwind CSS.
          </p>
        </footer>
      </div>
    </section>
  );
}
