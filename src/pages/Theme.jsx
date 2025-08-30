import PageNav from "../components/PageNav";
import styles from "./Theme.module.scss";
import { themes } from "../../data/themes";

function Theme() {
  const toRgbTuple = (rgbaStr) => rgbaStr.replace(/^rgba?\(|\)$/g, "");

  return (
    <>
      <PageNav />
      <section className="section__theme__cards">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Most popular themes</h2>
        </div>
        <div className={styles.card_container}>
          {themes.map((theme) => (
            <div key={theme.id} className={styles.card}>
              <div className={styles.card__front}>
                <div
                  className={styles.card__front__imageWrap}
                  style={theme.rgbaPalette.reduce(
                    (acc, color, i) => ({
                      ...acc,
                      [`--c${i + 1}`]: toRgbTuple(color),
                    }),
                    {}
                  )}
                >
                  <img
                    src={theme.image}
                    alt={theme.name}
                    className={styles.card__front__image}
                  />
                </div>
                {/* <div className={styles.card__image}>&nbsp;</div> */}

                <h3 className={styles.card__front__heading}>
                  {theme.name} {theme.icon}
                </h3>
                <div className={styles.card__front__tags}>
                  <span className={styles.card__front__tags__label}>
                    Tags:{" "}
                  </span>
                  <div className={styles.card__front__tags__badges}>
                    {theme.tags.map((t) => (
                      <span className={styles.card__front__tags__badge} key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className={styles.card__front__moods}>
                  <span className={styles.card__front__moods__span}>Mood:</span>{" "}
                  {theme.mood}
                </p>
              </div>
              <div className={styles.card__back}>
                <div className={styles.card__back__palette}>
                  {theme.palette.map((color, i) => (
                    <div
                      className={styles.card__back__swatch}
                      style={{ backgroundColor: color }}
                      title={color}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* <div className={styles.card}>
            <h3 className={styles.card__heading}>Calm Sea 🌊</h3>
            <h3 className={styles.card__mood}>subtle, calm</h3>
          </div>
          <div className={styles.card}>Card 2</div>
          <div className={styles.card}>Card 3</div>
          <div className={styles.card}>Card 4</div>
          <div className={styles.card}>Card 5</div>
          <div className={styles.card}>Card 6</div>
          <div className={styles.card}>Card 7</div> */}

          {/* <div className="col-1-of-3">
            <div className="card">
              <div class="card__side card__side--front"></div>
              <div class="card__side card__side--back"></div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Theme;
