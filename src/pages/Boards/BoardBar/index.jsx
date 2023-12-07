import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import VpnLockRoundedIcon from '@mui/icons-material/VpnLockRounded'
import AddToDriveRoundedIcon from '@mui/icons-material/AddToDriveRounded'
import BoltRoundedIcon from '@mui/icons-material/BoltRounded'
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  px: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingX: 2,
      gap: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      borderBottom: '1px solid white'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardRoundedIcon />}
          label="NguyenVuuDev"
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockRoundedIcon />}
          label="Public/ Private Workspace"
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveRoundedIcon />}
          label="Add To Google Drive"
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<BoltRoundedIcon />}
          label="Automation"
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<FilterListRoundedIcon />}
          label="Filters"
          clickable
        />


      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&: hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={5}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              wwith: 15,
              height: 30,
              fontSize: 15,
              border: 'none'
            }
          }}
        >
          <Tooltip title="nguyenvuudev">
            <Avatar
              alt="nguyenvuudev"
              src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-1/273826441_989941201882923_4029786380806544640_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGd5hZb4SKbUbqzrCpNQEQEJW6ZYsSWBv0lbplixJYG_SsIEJpzEHu3vuPIyWAEF6pfQHNU-KCZxpMU-39xJYfO&_nc_ohc=8EQphvdHAYUAX971CjK&_nc_ht=scontent.fhan3-1.fna&oh=00_AfDhTEduXJFzSRugBvVDqmKm8xw0ZoomgXBX1nkb_bOjRQ&oe=65757123" />
          </Tooltip>
          <Tooltip title="nguyenvuudev">
            <Avatar
              alt="nguyenvuudev"
              src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/376700900_857822409244202_1895036766992620366_n.jpg?stp=c72.0.200.200a_dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeFRON0CkQhfby_e6MYD7w63B-WFJb8vfGwH5YUlvy98bGzC8lnZycqmd-PirZUbzl0c1idOf8f4hLAMY-yoI6yA&_nc_ohc=wjuzzSn-MH0AX8JlQsA&_nc_ht=scontent.fhan3-2.fna&oh=00_AfDxnaSrJ7ABq9XlSyS2fX1RvaPLnObAuw3zGsqt1mr4ZA&oe=65745DAE" />
          </Tooltip>

          <Tooltip title="nguyenvuudev">
            <Avatar
              alt="nguyenvuudev"
              src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-1/406874273_1045708819978355_5807915613268095728_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeG1eewR4hRZ0T7nf4-5lmqPcwRKr1qeJxpzBEqvWp4nGtY6cw3tUlPrUoWwd6dpYprbs6GhG22nn5CyzBbNHdnJ&_nc_ohc=XGv3-4ZwogwAX_ScnCe&_nc_ht=scontent.fhan3-1.fna&oh=00_AfCsqj8OxnUgRVr4NBEHJvBMmmbVdTFAK8Vc7PoBtmDuag&oe=6574A6D5" />
          </Tooltip>

          <Tooltip title="nguyenvuudev">
            <Avatar
              alt="nguyenvuudev"
              src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/386771408_1475507526580891_3770080665868861280_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeFrzOIndI8PCPd4QR3d4GDlilh0_e2HrXWKWHT97YetdYG2qTf0gjW3qDNFgTNUCzkhse9QMrGgtF5sNASWlfb4&_nc_ohc=6eQr8aFL2h8AX9Qeyjr&_nc_ht=scontent.fhan3-2.fna&oh=00_AfCUyNuMBbelG2zLF4T2NQeOK1OzP4XmnJOTFJUsEff6_Q&oe=65745ED7" />
          </Tooltip>

          <Tooltip title="nguyenvuudev">
            <Avatar
              alt="nguyenvuudev"
              src="/static/images/avatar/1.jpg" />
          </Tooltip>

          <Tooltip title="nguyenvuudev">
            <Avatar
              alt="nguyenvuudev"
              src="/static/images/avatar/1.jpg" />
          </Tooltip>

          <Tooltip title="nguyenvuudev">
            <Avatar
              alt="nguyenvuudev"
              src="/static/images/avatar/1.jpg" />
          </Tooltip>

          <Tooltip title="nguyenvuudev">
            <Avatar
              alt="nguyenvuudev"
              src="/static/images/avatar/1.jpg" />
          </Tooltip>

          <Tooltip title="nguyenvuudev">
            <Avatar
              alt="nguyenvuudev"
              src="/static/images/avatar/1.jpg" />
          </Tooltip>

        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
