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
#### Usage
```
<Margin marginTop={10} marginHorizontal={20}>
  <span>Content</span>
</Margin>
```

# Flex
Extends Margin with properties of flexbox
#### Options:   
- x - horizontal axis `justify-content` property
- y - vertical axis `align-items` propery
- direction - `flex-direction`
- flex
- space - right margin of each child except last one
#### Usage
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

# Padding
Border box component with adjustable margin.  
#### Options:  
- paddingTop
- paddingBottom
- paddingLeft
- paddingRight
- paddingVertical - sets top and bottom padding, if they are not specified
- paddingHorizontal - sets left and right padding, if they are not specified
#### Usage
```
<Padding paddingTop={10} paddingHorizontal={20}>
  <span>Content</span>
</Padding>
```

# Line
Inline block span component
#### Options:  
- fontSize
- lineHeight
- marginTop
- marginBottom
- color
#### Usage
```
<Line fontSize={16} color="pink">
  Content
</Line>
```

# Box
Extends Margin with addition height property  
#### Options:  
- height
#### Usage
```
<Box height={300} marginHorizontal={30}>
  <span>Content</span>
</Box>
```

# BoxLine
Extends Margin with addition properties
#### Options:  
- height
- fontSize
- lineHeight
- color
#### Usage
```
<BoxLine color="#123" height={300} marginHorizontal={30}>
  <span>Content</span>
</BoxLine>
```