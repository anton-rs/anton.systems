import { Hero, Container, Footer } from '../components'

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Footer>
      © {new Date().getFullYear()} Anton Systems
    </Footer>
  </Container>
)

export default Index
