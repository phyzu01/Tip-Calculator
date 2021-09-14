import React from 'react';
import ReactDOM from 'react-dom';
// import App from "./components/App"

import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'

const style = css`
  color: hotpink;
  &:focus {color:blue}
`

const SomeComponent = ({ children }) => (
  <button css={style}>
    Some hotpink text.
    {children}
  </button>
)

const anotherStyle = css({
  textDecoration: 'underline'
})

const AnotherComponent = () => (
  <div css={anotherStyle}>Some text with an underline.</div>
)

let Button = styled.button`
    color: red;
    &:focus {
        color: ${"blue"};
      }
`

ReactDOM.render(<div>
    <SomeComponent>
      <AnotherComponent />
    </SomeComponent>
    <Button>Hello World!</Button> 
    </div>,document.getElementById('root')
);



// 565 X 298 >