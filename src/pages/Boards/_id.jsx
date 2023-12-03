import Container from '@mui/material/Container'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'
import AppBar from '@mui/material'


function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}

export default Board

