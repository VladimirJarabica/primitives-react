"use strict";
const PropTypes = require("prop-types");
const styled = require("styled-components").default;

const Margin = styled.div`
  box-sizing: border-box;
  margin-top: ${props => props.marginTop}px;
  margin-bottom: ${props => props.marginBottom}px;
`;

Margin.propTypes = {
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number
};

Margin.defaultProps = {
  marginTop: 0,
  marginBottom: 0
};

module.exports = Margin;
