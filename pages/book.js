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

        <p>Kat is currently researching equestrian biomechanics, rider mobility and recovery from trauma + injury. 
	   She is the creator of the Equiyin Program and author of the forthcoming book Yin Yoga for Equestrians (Jan 2021)</p>

      </Layout>
    )
  }
}
