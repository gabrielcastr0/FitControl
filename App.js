import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/store';

import MainStack from './src/navigators/MainStack';

/*
1. Preload
2. StarterStack
3. AppTab
*/

//criando provider
export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainStack />
    </PersistGate>
  </Provider>
);
