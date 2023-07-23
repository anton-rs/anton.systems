import { Flex, FlexProps } from '@chakra-ui/react'

const Footer = (props: FlexProps) => (
  <Flex as="footer" color="white" position="absolute" marginBottom="2rem" bottom="0px" {...props} />
)

export default Footer
