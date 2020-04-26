import React from "react"
import { graphql } from "gatsby"

const TestPage = ({ data }) => (
  <div>
    <ul>
      {data.allTestDataJson.nodes.map((node, index) => (
        <li key={index}>
          {node.name} - {node.profession}
        </li>
      ))}
    </ul>
  </div>
)

export const query = graphql`
  query TestPageQuery {
    allTestDataJson {
      nodes {
        name
        profession
      }
    }
  }
`

export default TestPage
