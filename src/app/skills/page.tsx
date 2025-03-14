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
      title="Meine Tech-Stack und Zertifikate"
      intro="Hier findest Du meinen Tech-Stack und meine Zertifikate. Keine endlose Liste, sondern das, womit ich arbeite und was mich weitergebracht hat."
      >
      <div className="space-y-20">
        <ToolsSection title="Backend">
        <Tool title="Datenbanken">
          Hauptsächlich Erfahrung mit Microsoft SQL Server und PostgreSQL. Basiswissen in MySQL, DuckDB und Elasticsearch.
        </Tool>

        <Tool title="Programmiersprachen">
          Erfahrung mit Python (Flask, FastAPI). Golang – aktuell in der Lernphase. JavaScript für grundlegende DOM-Manipulation.
        </Tool>

        <Tool title="Frontend">
          Grundkenntnisse in HTML, CSS, Tailwind CSS und Bootstrap 5.
        </Tool>
        <Tool title="DevOps">
          Git(Gitlab) und Docker. 
          GitHub Actions, Prometheus, Docker Compose und Terraform setze ich gelegentlich in Nebenprojekten ein.
        </Tool>
        </ToolsSection>
        <ToolsSection title="Zertifikate">
        <Tool title="CompTIA CySA+">
          Grundlagen der Cybersecurity-Analyse, inkl. Threat Detection und Incident Response.
        </Tool>
          <Tool title="Microsoft Azure DP-203">
              Zertifizierung in Data Engineering auf Microsoft Azure.
          </Tool>
          <Tool title="IHK Data Analyst">
            Weiterbildung im Thema Daten Analyse bei der IHK.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
