import NavLink from './NavLink';
import { Upwork } from '../../Icons/Icons';
import ToggleButton from './ToggleButton';

// This is a server component
export default function Nav() {
  return (
    <nav className="flex justify-between px-2 sm:px-4 md:px-8 lg:px-20 xl:px-52 py-2 items-center bg-white">
      {/* Render the toggle button as a client component */}
      <ToggleButton />
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="flex-col md:flex-row flex md:space-x-6 lg:space-x-16 items-center">
          <li><NavLink href=".">Intro</NavLink></li>
          <li><NavLink href="#skills">Skills</NavLink></li>
          <li><NavLink href="/portfolio/">Projects</NavLink></li>
          <li><NavLink href="#contact">Contact me</NavLink></li>
        </ul>
      </div>
      <div>
        <Upwork />
      </div>
    </nav>
  );
}
