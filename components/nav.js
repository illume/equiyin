import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/about-kat', label: 'About Kat' },
  { href: '/about-yin-yoga', label: 'About Yin Yoga' },
  { href: '/workshop', label: 'Workshops' },
  { href: '/thai-yoga-massage', label: 'Thai Yoga Massage' },
  { href: '/shop', label: 'Shop' },

].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #FFF;
        text-decoration: none;
        font-size: 14px;
      }
    `}</style>
  </nav>
)

export default Nav
