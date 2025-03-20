import { FC } from 'react';
import s from './HomePage.module.scss';

import FeatureSection from '@/components/FeatureSection/FeatureSection';
import ServicesSection from '@/components/ServicesSection/ServicesSection';

export const HomePage: FC = () => {
	return (
		<div>
			<FeatureSection />
			<ServicesSection />
		</div>
	);
};
