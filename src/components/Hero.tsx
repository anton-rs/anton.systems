import { Flex, Image } from '@chakra-ui/react'

const Hero = () => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgClip="text"
  >
    <Image src="/anton.png" alt="Anton Labs" width="300" height="300" />
  </Flex>
)

export default Hero
