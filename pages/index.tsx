import { Flex, Heading, Text } from '@chakra-ui/react'

import { Bar } from '../components/Bar'
import { Circular } from '../components/Circular'

export default function Home() {
  return (
    <Flex direction="column" alignItems="center">
        <Heading fontSize="4xl" marginBottom="15px">Progress</Heading>
        <Text fontSize="2xl" marginBottom="50px">Here are some examples using progress bars in Chakra-ui</Text>

        <Circular/>

        <Bar />
    </Flex>
  )
}
