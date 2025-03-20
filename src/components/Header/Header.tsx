import clsx from 'clsx';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className={s.head}>
			<div className={clsx('container', s.container)}>
				<h2 className={s.logo}>CompanyName</h2>
				<nav className={s.navList}>
					<li>
						<Link to="/">Главная</Link>
					</li>
					<li>
						<Link to="/about">О нас</Link>
					</li>
					<li>
						<Link to="/services">Услуги</Link>
					</li>
					<li>
						<Link to="/portfolio">Портфолио</Link>
					</li>
					<li>
						<Link to="/contacts">Контакты</Link>
					</li>
				</nav>
			</div>
		</header>
	);
}
