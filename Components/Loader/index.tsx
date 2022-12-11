import { FC, ReactElement } from "react";

/**
 * @name Loader
 * @component
 * @param {object} props
 * @param {string} props.style
 * @param {string} props.className
 * @returns {JSX.Element}
 */
const Loader: FC<{
  style?: any;
  className?: string;
}> = ({ style, className }): ReactElement => {
  return <div className={`skeleton ${className || ""}`} style={style || {}} />;
};

export default Loader;
