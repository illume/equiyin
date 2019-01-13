import React from 'react'
import Layout from '../components/Layout'
import {Link} from '../routes'


export default class extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Welcome to Next!</h1>

        <Link route='blog/detail' params={{language: 'en', slug: 'lalalala'}}>
          <a>Hello world</a>
        </Link>
      </Layout>
    )
  }
}
