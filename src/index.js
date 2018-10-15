import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Paragraph from "./paragraph";
import { ThemeProvider, withTheme } from 'emotion-theming';
import { css } from 'react-emotion';
import Theme from './theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className={css(Theme)}>
        <Header>Some header here...</Header>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tellus a dui luctus congue. Donec vel tristique sapien. Praesent suscipit orci ac eros bibendum, at sagittis mauris lobortis. Aenean convallis ultricies dolor, ac ultricies lacus. Ut auctor dapibus quam ut efficitur. Ut varius auctor libero sed tincidunt. Vestibulum vel bibendum lectus. Duis viverra venenatis lacus. Etiam porttitor volutpat turpis, et sollicitudin tortor sodales id. Curabitur interdum vestibulum ex, ut porttitor ipsum laoreet at.</Paragraph>
      </div>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById(Config.div)
);