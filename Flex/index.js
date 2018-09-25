"use strict";
const PropTypes = require("prop-types");

const Margin = require("../Margin");

const Flex = Margin.extend`
  display: flex;
  ${props =>
    props.x &&
    `justify-content: ${props.direction === "column" ? props.y : props.x}`};
  ${props =>
    props.y &&
    `align-items: ${props.direction === "column" ? props.x : props.y}`};
  ${props => props.direction && `flex-direction: ${props.direction}`};
  ${props => (props.flex ? `flex: ${props.flex}` : "")};
  & > *:not(:last-child) {
    ${props => props.space && `margin-right: ${props.space}px`};
  }
`;

Flex.propTypes = {
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  x: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "initial",
    "inherit",
    ""
  ]),
  y: PropTypes.oneOf([
    "stretch",
    "center",
    "flex-start",
    "flex-end",
    "baseline",
    "initial",
    "inherit",
    ""
  ]),
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
    "initial",
    "inherit",
    ""
  ]),
  flex: PropTypes.number,
  space: PropTypes.number
};

Flex.defaultProps = {
  marginTop: 0,
  marginBottom: 0,
  x: "",
  y: "",
  direction: "",
  space: null
};

module.exports = Flex;
