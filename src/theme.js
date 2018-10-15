export default ((theme) => ({
  p: {
    fontFamily: theme.font,
    color: theme.bodyColor,
  },
  h1: {
    fontFamily: theme.font,
    color: theme.headerColor,
  }
}))(Config.theme);