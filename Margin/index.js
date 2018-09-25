"use strict";
const PropTypes = require("prop-types");
const styled = require("styled-components").default;

const Margin = styled.div`
  box-sizing: border-box;
  margin-top: ${props => props.marginTop || props.marginVertical}px;
  margin-bottom: ${props => props.marginBottom || props.marginVertical}px;
  margin-left: ${props => props.marginLeft || props.marginHorizontal}px;
  margin-right: ${props => props.marginRight || props.marginHorizontal}px;
`;

Margin.propTypes = {
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginVertical: PropTypes.number,
  marginHorizontal: PropTypes.number
};

Margin.defaultProps = {
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginVertical: 0,
  marginHorizontal: 0
};

module.exports = Margin;
