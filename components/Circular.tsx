import { useState, useEffect } from 'react'
import { Box, CircularProgress, CircularProgressLabel, Button } from '@chakra-ui/react'

export function Circular() {
  const [circularProgress, setCircularProgress] = useState(0)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if(circularProgress >= 0) {
      timer = setTimeout(() => {
        setCircularProgress(circularProgress + 1)
      }, 100)
    }

    if(circularProgress > 99 || circularProgress === 100) {
      clearTimeout(timer)
    }
  }, [circularProgress])

  function handleRedirect(link: string) {
    return window.open(link)
  }

  function handleResetCircular() {
    return setCircularProgress(0)
  }

  return (
    <Box bg="#e5e5e5" width="300px" height="230px" align="center" display="flex" flexDirection="column" borderRadius={5}>
      <label>Circular progress</label>
      <CircularProgress value={circularProgress} size="80px" thickness="7xpx" marginTop="15px">
        <CircularProgressLabel>{circularProgress}%</CircularProgressLabel>
      </CircularProgress>

      <Button onClick={() => handleRedirect('/circular')} width="100px" alignSelf="center" marginTop="15px" marginBottom="8px">Source code</Button>
      <Button onClick={handleResetCircular} width="110px" alignSelf="center" marginTop="15px" marginBottom="8px">Reset percent</Button>
    </Box>
  )
}