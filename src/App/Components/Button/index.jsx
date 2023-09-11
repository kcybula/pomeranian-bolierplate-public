import './styles.css';

// variant value - primary, secondary, tetriary

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  ...otherProps
}) => {
  return (
    <div>
      <button
        className={`main-button main-button-${variant}`}
        onClick={onClick}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};
