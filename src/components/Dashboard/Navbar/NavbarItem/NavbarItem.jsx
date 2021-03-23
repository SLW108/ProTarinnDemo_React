/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useRouteMatch } from 'react-router-dom'
/**
 * NavbarItem
 * @param {object} props
 */
const NavbarItem = ({ slug, name}) => {
  const { url } = useRouteMatch()
  return (
    <li className='nav-item'>
      <Link to={`${url}/${slug}`}>{name}</Link>
    </li>
  )
}

export default NavbarItem
