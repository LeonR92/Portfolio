import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Skills',
  description: 'Mein Tech-Stack und meine Zertifizierungen im Bereich DevSecOps.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Technologien & Qualifikationen"
      intro="Ein Überblick über die Technologien, die ich einsetze, um robuste, sichere und automatisierte Softwarelösungen zu entwickeln. Für einen tieferen Einblick in meine Arbeit, besuchen Sie mein GitHub-Profil."
    >
      <div className="space-y-20">
        <ToolsSection title="Kernkompetenzen">
          <Tool title="Backend-Entwicklung mit Python">
            Spezialisiert auf Backend-Entwicklung mit Python (Flask, FastAPI). Mein Fokus liegt auf testgetriebener Entwicklung (TDD) und der Umsetzung sauberer Architekturen durch SOLID-Prinzipien und Design Patterns wie Repository und Dependency Injection.
          </Tool>
          <Tool title="Datenbanken & Architektur">
            Kenntnisse in relationalen (PostgreSQL, MS SQL, Elasticsearch). Praktische Erfahrung in der Konzeption skalierbarer Datenbank-Architekturen, inklusive Caching, Replikation und Load Balancing.
          </Tool>
          <Tool title="Künstliche Intelligenz">
            KI-Agentik mit PydanticAI & lokale LLM-Inferenz (vLLM, Ollama)
          </Tool>
          <Tool title="Weitere Technologien">
            Vertraut mit Frontend-Grundlagen (HTML, CSS, JavaScript, Tailwind und React). Aktueller Fokus: Vertiefung meiner Kenntnisse in Go (Golang) für hochperformante Systementwicklung.
          </Tool>
        </ToolsSection>

        <ToolsSection title="DevOps & Cloud">
          <Tool title="Infrastruktur als Code (IaC) & Containerisierung">
            Erstellung und Verwaltung von Cloud-Infrastruktur mit Terraform und Azure Bicep. Umfassende Erfahrung in der Containerisierung von Anwendungen mit Docker.
          </Tool>
          <Tool title="CI/CD & Automatisierung">
            Design und Implementierung von CI/CD-Pipelines mit Azure DevOps und GitHub Actions zur Automatisierung von Build-, Test- und Deployment-Prozessen.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Zertifizierungen">
          <Tool title="Microsoft Certified: DevOps Engineer Expert (AZ-400)">
            Beherrschung von DevOps-Strategien und deren Implementierung auf Azure. Umfasst CI/CD, Infrastructure as Code, Konfigurationsmanagement, Sicherheit und die Orchestrierung von Release-Prozessen.
          </Tool>
          <Tool title="CompTIA CySA+">
            Cybersecurity-Analyse, Threat Detection und Incident Response. Integration von Sicherheitspraktiken in den gesamten Entwicklungszyklus (DevSecOps).
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}