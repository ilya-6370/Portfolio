import {NavItem} from './NavLink';
import { Upwork } from '../../Icons/Icons';
import ToggleButton from './ToggleButton';

// This is a server component
export default function Nav() {
  return (
    <nav className="flex justify-between px-2 sm:px-4 md:px-8 lg:px-20 xl:px-52 py-2 items-center bg-white z-20">
      {/* Render the toggle button as a client component */}
      <ToggleButton />
      <div className="bg-white h-full right-0 top-16 flex items-center justify-center fixed hidden md:bg-transparent md:static md:top-0 w-full md:block md:w-auto" id="navbar-default">
        <ul className="flex-col md:flex-row flex md:space-x-6 lg:space-x-16 items-center">
          <NavItem href=".">Intro</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="/portfolio/">Projects</NavItem>
          <NavItem href="#contact">Contact me</NavItem>
        </ul>
      </div>
      <div>
        <Upwork />
      </div>
    </nav>
  );
}
