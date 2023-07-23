import './style.css';

export const AboutUsSection = () => {
  return (
    <section className="about-us-wrapper">
      <div className="about-us-main-wrapper">
        <aside className="about-us-article-wrapper">
          <p className="about-us-little-title">about us</p>
          <h2 className="about-us-article-title">
            It’s our job to make your home feel like it belongs to you
          </h2>
          <p className="about-us-article-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula, libero vel
            egestas fringilla, purus sit amet ante vel odio condimentum tortor.
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a risus ac mauris
            cursus tempor at sit amet orci. Suspendisse vel laoreet mauris. Donec sit amet ante vel
            odio condimentum lobortis in nec ex. Curabitur varius iaculis vehicula. Vestibulum quis
            venenatis lorem at, suscipit vel mauris purus.
          </p>
        </aside>
        <aside>
          <div className="about-us-another-article-wrapper">
            <p className="about-us-another-article-date">
              news<span className="about-us-another-article-date-dash">-</span>Mar 1, 2022
            </p>
            <h3 className="about-us-another-article-title">
              Incidunt eveniet lorem adipisci quod est quaerat
            </h3>
          </div>
          <div className="about-us-another-article-wrapper">
            <p className="about-us-another-article-date">
              news<span className="about-us-another-article-date-dash">-</span>Mar 1, 2022
            </p>
            <h3 className="about-us-another-article-title">
              Excepturi nulla lorem quam velit error qui dolor
            </h3>
          </div>
        </aside>
      </div>
      <div className="about-us-numbers-wrapper">
        <div>
          <p className="about-us-main-number">500K</p>
          <p className="about-us-number-subtitle">projects</p>
        </div>
        <div className="about-us-numbers-point" />
        <div>
          <p className="about-us-main-number">575K</p>
          <p className="about-us-number-subtitle">sketches</p>
        </div>
        <div className="about-us-numbers-point" />
        <div>
          <p className="about-us-main-number">250K</p>
          <p className="about-us-number-subtitle">clients</p>
        </div>
        <div className="about-us-numbers-point" />
        <div>
          <p className="about-us-main-number">365K</p>
          <p className="about-us-number-subtitle">likes</p>
        </div>
        <div className="about-us-numbers-point" />
        <div>
          <p className="about-us-main-number">500K</p>
          <p className="about-us-number-subtitle">likes</p>
        </div>
      </div>
    </section>
  );
};
