import { Header } from '../../Header';
import { IntroduceFooter } from '../IntroduceFooter';

import './style.css';

export const IntroduceSection = () => {
  return (
    <section className="introduce-wrapper">
      <Header />
      <img
        className="main-bg-img"
        src={require('../../../assets/images/main-bg.jpg')}
        alt="main-bg"
      />
      <IntroduceFooter />
    </section>
  );
};
