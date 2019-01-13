import React from 'react'
import Layout from '../components/Layout'
import {Link} from '../routes'
import Contact from '../components/contact'


export default class extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Book</h1>
		<Contact/>

        <p>The book is coming! Wait for Kat to do writing magic on it ok?</p>

      </Layout>
    )
  }
}
