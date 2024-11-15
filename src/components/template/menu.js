import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ReceiptIcon from '@material-ui/icons/Receipt';
import QrCode2 from '@mui/icons-material/QrCode2';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HomeIcon from '@material-ui/icons/Home';
import DiscountRequestsIcon from '@mui/icons-material/QrCodeScanner';

export const menu = [
  { path: '/', label: 'Início', icon: HomeIcon, roles: [] },
  {
    path: '/users',
    label: 'Usuários',
    icon: PeopleAltIcon,
    roles: ['admin'],
  },
  {
    path: '/companies',
    label: 'Empresas',
    icon: SupervisorAccountOutlinedIcon,
    roles: ['admin', 'manager'],
  },
  {
    label: 'Faturas',
    path: '/invoices',
    icon: ReceiptIcon,
    roles: ['admin', 'customer'],
  },
  {
    path: '/discount_requests',
    label: 'Requisições de desconto',
    icon: DiscountRequestsIcon,
    roles: ['manager'],
  },
  {
    label: 'Obter QR CODE',
    path: '?qrcode',
    icon: QrCode2,
    roles: ['manager', 'admin'],
  },
  {
    label: 'Convidar novo empregado',
    path: '/invite-employee',
    icon: PersonAddIcon,
    roles: ['manager'],
  },
];
