import { Cat } from '@repro-super-transpile/my-lib';
import { useEffect } from 'react';

/* eslint-disable @typescript-eslint/no-empty-interface */
interface IAppProps {
  //
}

export function App(props: IAppProps) {
  useEffect(() => {
    const cat = new Cat();
    cat.name = 'CoolCat';
  }, []);

  return <div />;
}

export default App;
