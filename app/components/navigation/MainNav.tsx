
import Link from "next/link";

import style from "./mainNav.module.css";

export interface Route {
  path: string,
  name: string,
};

const ROUTES: Array<Route> = [
  { path: '/', name: 'Accueil' },
  { path: '/inputs', name: 'Inputs' },
  { path: '/charts', name: 'Charts' },
  { path: '/d3js', name: 'D3Js' },
  { path: '/form-validator', name: 'Form Validator' },
];

export default function MainNav() {
  return (
    <nav className={style.nav}>
      <ul className={style.nav_list}>
        { ROUTES.map(({ path, name }) => (
          <li key={`nav_${name}`}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
