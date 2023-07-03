import { Link } from 'gatsby'
import React from 'react';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/home" className="site-title">
        GatorAdvisor
      </Link>
      <ul>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
      </ul>
    </nav>
  )
}

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }
