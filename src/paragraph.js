import React from "react";
import ReactDOM from "react-dom";
import { withTheme } from 'emotion-theming';
import { css } from 'react-emotion';

export default withTheme(function Paragraph(props) {
  return (
    <p className={css(props.theme.p)}>{props.children}</p>
  );
});