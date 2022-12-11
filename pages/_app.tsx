import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";
/**
 * @name App
 * @component
 * @param {object} props - App Props
 * @param {object} props.Component - Component
 * @param {object} props.pageProps - Page props
 * @returns {JSX.Element} - App
 */
const App = ({ Component, pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Component {...props} />;
    </Provider>
  );
};

export default App;
