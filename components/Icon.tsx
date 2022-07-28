import { useFloating, offset, flip } from '@floating-ui/react-dom';
import { 
  HiPencilAlt,
  HiTrash,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineX,
  HiDotsVertical
} from 'react-icons/hi'
import { RiLeafLine } from 'react-icons/ri';
import classNames from 'classnames';
import tooltipStyle from '@/styles/Tooltip.module.css';

type IconType = {
    name: string;
    size?: IconSize;
    disabled?: boolean;
    className?: string;
    tooltip?: string;
    onClick?: () => void;
}

type IconSize = 'small' | 'middle' | 'large';

/**
 * 필요한 아이콘이 생기면 직접 import 후 name을 지정 후 추가해서 사용
 */
const iconList = {
  pencilAlt: HiPencilAlt,
  trash: HiTrash,
  outlineChevronLeft: HiOutlineChevronLeft,
  outlineChevronRight: HiOutlineChevronRight,
  outlineX: HiOutlineX,
  dotsVertical: HiDotsVertical,
  leafLine: RiLeafLine
}

export default function Icon({
  name,
  size = 'middle',
  disabled = false,
  className,
  tooltip = '',
  onClick = null
}: IconType) {
  const { x, y, reference, floating, strategy } = useFloating({
    middleware: [offset(4), flip()]
  });
  const iconContainerSize = [
    {'w-4 h-4' : size === 'small'},
    {'w-5 h-5' : size === 'middle'},
    {'w-6 h-6' : size === 'large'}
  ];
  const iconSize = [
    {'w-4 h-4' : size === 'small'},
    {'w-5 h-5' : size === 'middle'},
    {'w-6 h-6' : size === 'large'},
  ]
  const Icon = iconList[name];

  if (!Icon) return null;

  if (onClick) return (<button
    ref={reference}
    className={classNames(
      ...iconContainerSize,
      {'text-gray-400 cursor-not-allowed' : disabled},
      'relative flex items-center justify-center hover:bg-gray-200 rounded-md group'
    )}
    disabled={disabled}
    onClick={onClick}
  >
    <Icon className={classNames(
      ...iconSize,
      className
    )} />
    <div
      className={classNames(tooltipStyle.tooltip, 'invisible group-hover:visible')}
      ref={floating}
      style={{ position: strategy, top: y, left: x }}
      role="tooltip">
      {tooltip}
    </div>
  </button>)

  return (<div
    ref={reference}
    className={classNames(
      ...iconContainerSize,
      'relative flex items-center justify-center group'
    )}
  >
    <Icon className={classNames(
      ...iconSize,
      className
    )} /> 
    <div 
      className={classNames(tooltipStyle.tooltip, 'invisible group-hover:visible')}
      ref={floating}
      style={{ position: strategy, top: y, left: x }}
      role="tooltip">
      {tooltip}
    </div>
  </div>)
}
