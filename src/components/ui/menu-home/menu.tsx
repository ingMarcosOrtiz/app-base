import { MenuItem } from '@/interfaces/menuItems'
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined'
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined'
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined'
import PlaylistAddCheckCircleOutlinedIcon from '@mui/icons-material/PlaylistAddCheckCircleOutlined'
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'

const menuItems: MenuItem[] = [
  {
    path: '/noticias',
    title: 'Noticias',
    icon: <NewspaperOutlinedIcon />,
    notification: 1,
  },
  {
    path: '/pqr',
    title: 'PQR',
    icon: <FactCheckOutlinedIcon />,
  },
  {
    path: '/pagos',
    title: 'Realizar Pagos',
    icon: <MonetizationOnOutlinedIcon />,
  },
  {
    path: '/publicidad',
    title: 'Clasificados',
    icon: <ContentPasteSearchOutlinedIcon />,
    // notification: 3,
  },
  {
    path: '/auth/login',
    title: 'Iniciar Sesión',
    icon: <PersonOutlineOutlinedIcon />,
  },
]

export default menuItems
