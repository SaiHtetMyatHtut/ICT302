import { Container } from '@/components/Container'

export function AboutLayout({ children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}
