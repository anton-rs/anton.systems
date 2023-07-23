import { Hero, Container, Footer } from '../components'

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Footer>
      © {new Date().getFullYear()} Anton Labs
    </Footer>
  </Container>
)

export default Index
