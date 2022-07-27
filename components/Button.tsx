import classNames from 'classnames';

/**
 * @param {string} text - 'primary' = 파랑 | 'submit' = 초록 | 'cancle' = 흰색 | 'delete' = '빨강' | 'new' = 그라데이션 초록
 */
export default function Button({
  text,
  icon = null,
  type = 'primary',
  size = 'middle',
  outline = false,
  dashed = false,
  disabled = false,
  customCSS = '',
  onClick,
}) {
  return (
    <button
      type="button"
      className={classNames(
        customCSS,
        { 'button-primary': type === 'primary' && !outline },
        { 'button-submit': type === 'submit' && !outline },
        { 'button-cancel': type === 'cancel' && !outline },
        { 'button-delete': type === 'delete' && !outline },
        { 'button-warn': type === 'warn' && !outline },
        { 'button-new': type === 'new' && !outline },
        { 'button-sm': size === 'small' },
        { 'button-md': size === 'middle' },
        { 'button-lg': size === 'large' },
        { 'outline-button-primary': type === 'primary' && outline },
        { 'outline-button-submit': type === 'submit' && outline },
        { 'outline-button-cancel': type === 'cancel' && outline },
        { 'outline-button-delete': type === 'delete' && outline },
        { 'outline-button-warn': type === 'warn' && outline },
        { 'outline-button-new': type === 'new' && outline },
        { 'border-dashed': dashed && outline },
        'flex items-center justify-center align-middle disabled:opacity-40 disabled:cursor-not-allowed',
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={classNames({'mr-2': icon})}>
        {icon}
      </span>
      {text}
    </button>
  );
}
