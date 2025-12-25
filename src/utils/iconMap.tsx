import {
  Crown,
  Target,
  Lock,
  Zap,
  Mail,
  DollarSign,
  Calendar,
  Grid3x3,
  Users,
  TrendingUp,
  CreditCard,
  History,
  CheckSquare,
  Clock,
  BarChart3,
  Share2,
  Users2,
  Receipt,
  Palette,
  Repeat,
  BookOpen,
  FileText,
  Shield,
  CheckCircle,
  LifeBuoy,
  Inbox,
  Link,
  Eye,
  BarChart2,
  MinusCircle,
  PieChart,
  Settings,
  Timer,
  Layers,
  Code,
  GitBranch,
  Brain,
  Activity,
  Gauge,
  Monitor,
  HelpCircle,
  Bell,
  Heart,
  Gift,
  Wrench,
  Sliders,
  Headphones,
  PlayCircle,
  Truck,
  Handshake,
  Rocket,
  ShieldCheck,
  File,
  LucideIcon,
} from 'lucide-react';

type IconName =
  | 'crown'
  | 'target'
  | 'lock'
  | 'zap'
  | 'mail'
  | 'dollar'
  | 'calendar'
  | 'grid'
  | 'users'
  | 'trend-up'
  | 'card'
  | 'history'
  | 'tasks'
  | 'clock'
  | 'bar-chart'
  | 'share'
  | 'users-alt'
  | 'receipt'
  | 'palette'
  | 'repeat'
  | 'credit-card'
  | 'book'
  | 'file-text'
  | 'shield'
  | 'check-circle'
  | 'life-buoy'
  | 'inbox'
  | 'link'
  | 'eye'
  | 'bar-chart-2'
  | 'minus-circle'
  | 'pie-chart'
  | 'settings'
  | 'timer'
  | 'layers'
  | 'code'
  | 'git-branch'
  | 'brain'
  | 'activity'
  | 'gauge'
  | 'monitor'
  | 'help-circle'
  | 'bell'
  | 'heart'
  | 'gift'
  | 'wrench'
  | 'sliders'
  | 'headphones'
  | 'play-circle'
  | 'truck'
  | 'handshake'
  | 'dollar-sign'
  | 'rocket'
  | 'shield-check'
  | 'file'
  | 'book-open'
  | 'flow';

export const iconMap: Record<IconName, LucideIcon> = {
  crown: Crown,
  target: Target,
  lock: Lock,
  zap: Zap,
  mail: Mail,
  dollar: DollarSign,
  calendar: Calendar,
  grid: Grid3x3,
  users: Users,
  'trend-up': TrendingUp,
  card: CreditCard,
  history: History,
  tasks: CheckSquare,
  clock: Clock,
  'bar-chart': BarChart3,
  share: Share2,
  'users-alt': Users2,
  receipt: Receipt,
  palette: Palette,
  repeat: Repeat,
  'credit-card': CreditCard,
  book: BookOpen,
  'file-text': FileText,
  shield: Shield,
  'check-circle': CheckCircle,
  'life-buoy': LifeBuoy,
  inbox: Inbox,
  link: Link,
  eye: Eye,
  'bar-chart-2': BarChart2,
  'minus-circle': MinusCircle,
  'pie-chart': PieChart,
  settings: Settings,
  timer: Timer,
  layers: Layers,
  code: Code,
  'git-branch': GitBranch,
  brain: Brain,
  activity: Activity,
  gauge: Gauge,
  monitor: Monitor,
  'help-circle': HelpCircle,
  bell: Bell,
  heart: Heart,
  gift: Gift,
  wrench: Wrench,
  sliders: Sliders,
  headphones: Headphones,
  'play-circle': PlayCircle,
  truck: Truck,
  handshake: Handshake,
  'dollar-sign': DollarSign,
  rocket: Rocket,
  'shield-check': ShieldCheck,
  file: File,
  'book-open': BookOpen,
  'trending-up': TrendingUp,
  flow: Code,
};

export const getIcon = (iconName?: string): LucideIcon => {
  if (!iconName) return Grid3x3;
  return iconMap[iconName as IconName] || Grid3x3;
};
