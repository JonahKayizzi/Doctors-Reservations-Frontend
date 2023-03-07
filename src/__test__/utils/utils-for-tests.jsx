import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { reducer } from '../../redux/configureStore';

const middlewares = [logger, thunk];

const renderWithProviders = (
  ui,
  {
    // eslint-disable-next-line no-unused-vars
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer,
    }, applyMiddleware(...middlewares)),
    ...renderOptions
  } = {},
) => {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => <Router><Provider store={store}>{children}</Provider></Router>;

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;
