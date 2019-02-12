"use strict";
const PropTypes = require("prop-types");

const Margin = require("../Margin");

const Flex = styled(Margin)`
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
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginVertical: PropTypes.number,
  marginHorizontal: PropTypes.number,
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
  marginLeft: 0,
  marginRight: 0,
  marginVertical: 0,
  marginHorizontal: 0,
  x: "",
  y: "",
  direction: "",
  space: null
};

module.exports = Flex;
