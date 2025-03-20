import { Link, useLocation } from 'react-router-dom';
import s from './ServicesNavigation.module.scss';

export default function ServicesNavigation() {
	const location = useLocation();

	return (
		<nav className={s.nav}>
			{[
				{ path: '/', label: 'Главная' },
				{ path: '/about', label: 'О нас' },
				{ path: '/services', label: 'Услуги' },
				{ path: '/portfolio', label: 'Портфолио' },
				{ path: '/contacts', label: 'Контакты' },
			].map(({ path, label }) => (
				<li key={path}>
					<Link
						to={path}
						className={location.pathname === path ? s.active : ''}
					>
						{label}
					</Link>
				</li>
			))}
		</nav>
	);
}
