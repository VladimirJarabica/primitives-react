"use strict";
const PropTypes = require("prop-types");

const Margin = require("../Margin");

const Box = styled(Margin)`
  height: ${props => props.height}px;
`;

Box.propTypes = {
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginVertical: PropTypes.number,
  marginHorizontal: PropTypes.number,
  height: PropTypes.number.isRequired
};

Box.defaultProps = {
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginVertical: 0,
  marginHorizontal: 0
};

module.exports = Box;
