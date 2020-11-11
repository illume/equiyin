import React from 'react'
import Layout from '../components/Layout'
import {Link} from '../routes'
import Contact from '../components/contact'


export default class extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Thai Yoga Massage</h1>
		<Contact/>

        <p>Info coming soon.
        </p>

      </Layout>
    )
  }
}
