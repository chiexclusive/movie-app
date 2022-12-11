import { FC, ReactElement } from "react";

/**
 * @name Loader
 * @component
 * @param {object} props - props
 * @param {string} props.style - style props
 * @param {string} props.className - prop classes
 * @returns {JSX.Element} element
 */
const Loader: FC<{
  style?: any;
  className?: string;
}> = ({ style, className }): ReactElement => {
  return <div className={`skeleton ${className || ""}`} style={style || {}} />;
};

export default Loader;
