
import NavbarItem from './NavbarItem/NavbarItem'
import './Navbar.css'

const sections = [
  { name: 'Trainings', slug: 'usertraininglist' },
  { name: 'Add Training', slug: 'addtraining' },
  { name: 'Stats', slug: 'stats' }
]
/**
 * Navbar Component
 */
const Navbar = () => {
  return (
    <aside className='menu-navbar'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Menu</h5>
          <ul className='nav nav-nav flex-column nav-pills'>
            {sections.map(({ name, slug}) => (
              <NavbarItem name={name} slug={slug} key={slug} />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Navbar
