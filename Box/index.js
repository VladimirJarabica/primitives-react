"use strict";
const PropTypes = require("prop-types");

const Margin = require("../Margin");

const Box = Margin.extend`
  height: ${props => props.height}px;
`;

Box.propTypes = {
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  height: PropTypes.number.isRequired
};

Box.defaultProps = {
  marginTop: 0,
  marginBottom: 0
};

module.exports = Box;
