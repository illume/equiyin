import Head from '../components/head'
import Nav from '../components/nav'

export default ({ children, settings = {} }) => (
  <div>
    <Head />
    <Nav settings={settings} />
    <div className="util__container">
      {children}
    </div>

    <style jsx global>{`
      article, aside, footer, header, hgroup, main, nav, section {
        display: block;
      }

      html {
        background: url(/static/background.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      }

      body {
        font-family: 'Zilla Slab', Helvetica, sans-serif;
        line-height: 1;
        font-size: 32px;
        xcolor: #FFF;
        color: #15FFD6;
        margin: 0;
        padding: 0;
      }

      .util__flex {
        display: flex;
      }

      .util__flex-col {
        flex: 0 0 auto;
      }

      .util__flex-eq {
        flex: 1;
      }

      .util__container {
        max-width: 600px;
        margin: 40px auto 60px;


        // max-width: 75rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
      }
      a {
        color: #FFF;
        xcolor: #15FFD6;
        text-decoration: none;
      }
      p {
        xbackground: rgba(0.2, 0.2, 0.2, 0.5);
        padding: 10px;
        border-radius: 15px;
        color: #FFF;
      }
      form input {
        font-size: 1.5rem;
        margin-right: 6px;
      }

    `}</style>
  </div>
)