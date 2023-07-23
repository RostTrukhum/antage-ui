import { IntroduceFooterLinks } from '../IntroduceFooterLinks';
import { VantageStudioCard } from '../VantageStudioCard';

import './style.css';

export const IntroduceFooter = () => {
  return (
    <footer className="introduce-footer">
      <IntroduceFooterLinks />
      <VantageStudioCard />
    </footer>
  );
};
