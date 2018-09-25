"use strict";
const PropTypes = require("prop-types");

const Margin = require("../Margin");

const BoxLine = Margin.extend`
  height: ${props => props.height}px;
  font-size: ${props => props.fontSize}px;
  line-height: ${props => props.lineHeight}px;
  color: ${props => props.color}px;
`;

BoxLine.propTypes = {
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginVertical: PropTypes.number,
  marginHorizontal: PropTypes.number,
  height: PropTypes.number.isRequired,
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["initial", "inherit"])
  ]),
  lineHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["initial", "inherit"])
  ]),
  color: PropTypes.string
};

BoxLine.defaultProps = {
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginVertical: 0,
  marginHorizontal: 0,
  fontSize: "inherit",
  lineHeight: "inherit",
  color: "inherit"
};

module.exports = BoxLine;
