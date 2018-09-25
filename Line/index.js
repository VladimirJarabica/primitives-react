"use strict";
const PropTypes = require("prop-types");
const styled = require("styled-components").default;

const Line = styled.span`
  display: inline-block;
  font-size: ${props => props.fontSize}px;
  line-height: ${props => props.lineHeight}px;
  margin-top: ${props => props.marginTop}px;
  margin-bottom: ${props => props.marginBottom}px;
  color: ${props => props.color}px;
`;

Line.propTypes = {
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["initial", "inherit"])
  ]),
  lineHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["initial", "inherit"])
  ]),
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  color: PropTypes.string
};

Line.defaultProps = {
  fontSize: "inherit",
  lineHeight: "inherit",
  marginTop: 0,
  marginBottom: 0,
  color: "inherit"
};

module.exports = Line;
