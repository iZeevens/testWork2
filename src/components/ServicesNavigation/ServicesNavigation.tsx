import s from './ServicesNavigation.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '@/assets/data/example';

export default function ServicesNavigation() {
	const location = useLocation();

	return (
		<nav className={s.nav}>
			<ul>
				{navLinks.map(({ path, label }) => (
					<li key={path}>
						<Link
							to={path}
							className={location.pathname === path ? s.active : ''}
						>
							{label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
