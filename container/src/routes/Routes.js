import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Loading from '../components/Loading';
import MicroFrontendLoader from '../components/MicroFrontendLoader';

import Welcome from '../pages/Welcome';

const Checkout = ({ history }) => (
  // <MicroFrontendLoader history={history} name="Checkout" host={browseHost} />
  <MicroFrontendLoader history={history} name="Checkout" />
);

const Markeplace = ({ history }) => (
  // <MicroFrontendLoader history={history} name="Marketplace" host={restaurantHost} />
  <MicroFrontendLoader history={history} name="Marketplace" />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<Loading />}>
        <Route exact path="/" component={Welcome} />
        <Route path="/checkout/:id" component={Checkout} />
        <Route path="/marketplace" component={Markeplace} />
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default Routes;
