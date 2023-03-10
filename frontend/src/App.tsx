import './index.css';
import './App.scss';
import { useApi, useAccount } from '@gear-js/react-hooks';
import { Header } from 'components/layout';
import { ApiLoader } from 'components/loaders/api-loader';
import { withProviders } from 'app/hocs';
import { Routing } from './pages';

const Component = () => {
  const { isApiReady } = useApi();
  const { isAccountReady } = useAccount();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col flex-1 pt-3 pb-5">
        {isApiReady && isAccountReady ? <Routing /> : <ApiLoader />}
      </main>
    </div>
  );
};

export const App = withProviders(Component);
