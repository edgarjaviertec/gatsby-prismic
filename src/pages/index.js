import * as React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
query MyQuery {
  allPrismicPage {
      edges {
              node {
              id,
              data{
                  ttile {
                      text 
                  },
                  body {
                      html
                  }
                  date,
              }
          }
      }
  }
}
`

const IndexPage = (props) => (
    <Layout>
        {props.data.allPrismicPage.edges?.map((pagina, index) => (
            <div key={index}>
                <h2>{pagina.node.data.ttile.text}</h2>
                <p>{pagina.node.data.date}</p>
                <div dangerouslySetInnerHTML={{__html: pagina.node.data.body.html}}></div>
            </div>
        ))}
    </Layout>
)

export default IndexPage
