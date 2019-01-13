import {Link} from '../../routes'
import Layout from '../../components/Layout'
import marked from 'marked'

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {pageContent: props.page.data.story.content}
  }

  static async getInitialProps({ asPath, query }) {
  	console.log(query)
    let page = {
    	data: {
    		story: {
    			content: {
		    		body: "## hello\nWelcome to the blog ok?"
    			}
    		}
    	}
    }
    let settings = {}

    return {
      page,
      settings
    }
  }


  body() {
    let rawMarkup = marked(this.state.pageContent.body)
    return { __html:  rawMarkup}
  }

  render() {
    return (
      <Layout>
		<div className="blog">
			<h1>{this.state.pageContent.name}</h1>
			<div dangerouslySetInnerHTML={this.body()} className="blog__body"></div>
		</div>

        <style jsx>{`
          .blog {
            padding: 0 20px;
            max-width: 600px;
            margin: 40px auto 100px;
          }

          .blog :global(img) {
            width: 100%;
            height: auto;
          }

          .blog__body {
            line-height: 1.6;
          }
        `}</style>
      </Layout>
    )
  }
}
