import React from 'react'
import Layout from '../components/Layout'
import {Link} from '../routes'


export default class extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Welcome!</h1>



        <br/>
        <Link route='about-kat'>
          <a>About Kat</a>
        </Link> | <Link route='about-yin-yoga'>
          <a>About Yin Yoga</a>
        </Link>

        <br/>
        <Link route='book'>
          <a>Book</a>
        </Link>

        <br/>
        <Link route='shop'>
          <a>Shop</a>
        </Link>

        <br/>
        <Link route='thai-yoga-massage'>
          <a>Thai Yoga Massage</a>
        </Link>

        <br/>
        <Link route='workshop'>
          <a>Workshop</a>
        </Link>


      </Layout>
    )
  }
}
