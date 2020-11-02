import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useRef, useState } from "react"
import { Provider } from "reakit"
import styled from "styled-components"
import { GlobalStyle, theme } from "../../theme"
import { AnimatePresence, motion } from "framer-motion"
import { Navigate } from "../Navigate"

const SiteLayout = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fed330;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
`

const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 20px;
  :first-child {
    /* flex: 33%; */
  }

  :last-child {
    /* flex: 66%; */
  }
`

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 200px;
`

const Layout: React.FC = ({ children }) => {
  return (
    <Provider>
      <GlobalStyle />
      <SiteLayout>
        <Header>
          <Link to="/" activeClassName={"active-link"}>
            home
          </Link>
        </Header>
        <Content>
          <Navigate />
          <Main>{children}</Main>
        </Content>
      </SiteLayout>
    </Provider>
  )
}

export default Layout