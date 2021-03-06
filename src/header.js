import React from "react";
import ReactDOM from "react-dom";
import { withTheme } from 'emotion-theming';
import { css } from 'react-emotion';

export default withTheme(function Header(props) {
  return (
    <h1 className={css(props.theme.h1)}>{props.children}</h1>
  );
})
