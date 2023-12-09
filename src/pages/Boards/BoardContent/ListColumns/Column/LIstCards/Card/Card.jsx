import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import AttachmentIcon from '@mui/icons-material/Attachment'


function Card({ temporaryHidenMedia }) {
  if (temporaryHidenMedia) {
    return (
      <MuiCard sx={{
        cursor: 'pionter',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}>
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography>Card 01</Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard sx={{
      cursor: 'pionter',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://1.bp.blogspot.com/-RoOiYu8pweY/YGLZiX0bQ_I/AAAAAAAArE4/4AUbslYlESME_-arrxmvha763Te_jh1kwCNcBGAsYHQ/s0/ff99e81f59e3a9c02ff4f799f35cfc90.jpeg"
        title="green iguana"
      />
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>NguyenVuuDev</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8x 4px' }}>
        <Button size="small" startIcon={<GroupIcon />}>20</Button>
        <Button size="small" startIcon={<InsertCommentIcon />}>16</Button>
        <Button size="small" startIcon={<AttachmentIcon />}>10</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card