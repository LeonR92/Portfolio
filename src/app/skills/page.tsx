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
  description: 'Meine Tech-Stack und Zertifikate',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Tech-Stack und Zertifikate"
      intro="Kernkompetenzen und Qualifikationen. Für detaillierte Projektbeispiele und Code-Samples, besuche mein GitHub-Profil."
      >
      <div className="space-y-20">
        <ToolsSection title="Kernkompetenzen">
          <Tool title="Python-Entwicklung">
            Spezialisierung auf Backend-Entwicklung mit Flask. Erfahrung mit FastAPI und Django. SQLAlchemy für ORM-Implementierungen und Datenbankmigrationen.
          </Tool>
          
          <Tool title="Datenbanken & Storage">
            Microsoft SQL Server und PostgreSQL für relationale Datenmodelle. MongoDB und Elasticsearch für dokumentenbasierte und vectorisierte Suchszenarien.
          </Tool>
          
          <Tool title="DevOps & Infrastruktur">
            Docker-Containerisierung und Orchestrierung. CI/CD mit GitLab/GitHub Actions. Infrastructure-as-Code mit Terraform. Monitoring-Setups mit Prometheus.
          </Tool>
        </ToolsSection>
        
        <ToolsSection title="Erweiterte Fähigkeiten">
          <Tool title="Web-Technologien">
            Frontend-Grundlagen mit HTML, CSS (Tailwind, Bootstrap) und JavaScript. Derzeit Golang in der Lernphase.
          </Tool>
          
          <Tool title="Datenanalyse">
            ETL-Prozesse und Datenverarbeitung mit Python (pandas, numpy). Erfahrung mit Azure-Datendiensten. Datenvisualisierung und Reporting (Streamlit, plotly dash).
          </Tool>
        </ToolsSection>
        
        <ToolsSection title="Zertifikate">
          <Tool title="Microsoft Azure DP-203">
            Data Engineering auf Microsoft Azure. Fähigkeiten in Datenbanksystemen, Datenverarbeitung und -analyse in der Cloud.
          </Tool>
          
          <Tool title="CompTIA CySA+">
            Cybersecurity-Analyse, Threat Detection und Incident Response. Sicherheitseinbindung in Entwicklungsprozesse.
          </Tool>
          
          <Tool title="IHK Data Analyst">
            Fundierte Datenanalyse-Kompetenzen mit Fokus auf geschäftsorientierte Auswertungen.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
