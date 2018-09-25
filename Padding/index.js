"use strict";
const PropTypes = require("prop-types");
const styled = require("styled-components").default;

const Padding = styled.div`
  box-sizing: border-box;
  padding-top: ${props => props.paddingTop || props.paddingVertical}px;
  padding-bottom: ${props => props.paddingBottom || props.paddingVertical}px;
  padding-left: ${props => props.paddingLeft || props.paddingHorizontal}px;
  padding-right: ${props => props.paddingRight || props.paddingHorizontal}px;
`;

Padding.propTypes = {
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingVertical: PropTypes.number,
  paddingHorizontal: PropTypes.number
};

Padding.defaultProps = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingVertical: 0,
  paddingHorizontal: 0
};

module.exports = Padding;
