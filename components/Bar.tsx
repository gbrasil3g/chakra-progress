import { useState, useEffect } from 'react'
import { Box, Progress, Button } from '@chakra-ui/react'

export function Bar() {
  const [progressBar, setProgressBar] = useState(0)
  
  useEffect(() => {
    let timer: NodeJS.Timeout

    if(progressBar >= 0) {
      timer = setTimeout(() => {
        setProgressBar(progressBar + 1)
      }, 100)
    }

    if(progressBar > 99 || progressBar === 100) {
      clearTimeout(timer)
    }
  }, [progressBar])

  function handleRedirect(link: string) {
    return window.open(link)
  }

  function handleResetBar() {
    return setProgressBar(0)
  }

  return (
    <Box bg="#e5e5e5" width="300px" height="220px" align="center" display="flex" flexDirection="column" marginTop="50px" borderRadius={5}>
      <label margin-top="30px">Progress bar</label>
      <Box alignContent="center" marginTop="45px">
        <Progress hasStripe value={progressBar} maxWidth={200}/>

        <Button onClick={() => handleRedirect('https://github.com/gbrasil3g')} width="100px" alignSelf="center" marginTop="30px" marginBottom="8px">Source code</Button>
      </Box>
      <Button onClick={handleResetBar} width="110px" alignSelf="center" marginTop="15px" marginBottom="8px">Reset percent</Button>
    </Box>
  )
}