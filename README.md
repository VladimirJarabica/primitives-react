# primitives-react
Simple HTML primitives build by using styled-components

# Installation
```
npm install --save primitives-react
```
or
```
yarn add primitives-react
```

# Margin
Border box component with adjustable margin.  
#### Options:  
- marginTop
- marginBottom
- marginLeft
- marginRight
- marginVertical - sets top and bottom margin, if they are not specified
- marginHorizontal - sets left and right margin, if they are not specified
### Usage
```
<Margin marginTop={10} marginHorizontal={20}>
  <span>Content</span>
</Margin>
```

# Flex
Extends Margin with properties of flexbox
Additional options:  
- x - horizontal axis `justify-content` property
- y - vertical axis `align-items` propery
- direction - `flex-direction`
- flex
- space - right margin of each child except last one
### Usage
```
<Flex x="space-between" direction="column">
  <Flex flex={1}>Item 1</Flex>
  <Flex flex={3}>Item 2</Flex>
</Flex>
```

#### TODO:
- flex-wrap
- order
- justify-self
- align-self