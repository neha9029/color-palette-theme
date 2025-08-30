import { useReducer, useState } from "react";
import { moodColors } from "../../data/moodColorPalette";
import PageNav from "../components/PageNav";
import styles from "./Mood.module.scss";

const initialMood = {
  mood: "",
  colors: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "Set_Mood":
      return {
        ...state,
        mood: action.payload,
        colors: moodColors[action.payload],
      };
    default:
      return state;
  }
}
function Mood() {
  const size = Object.keys(moodColors).length;

  const [state, dispatch] = useReducer(reducer, initialMood);

  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <>
      <PageNav />
      <div className={styles.mainContainer}>
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Mood based palette</h2>
        </div>
        <label>Select your mood:</label>
        <select
          className={styles.moodDropdown}
          value={state.mood}
          onChange={(e) =>
            dispatch({ type: "Set_Mood", payload: e.target.value })
          }
        >
          <option value="">Select your mood</option>
          {Object.keys(moodColors).map((mood) => (
            <option className={styles.moodoption} key={mood} value={mood}>
              {mood}
            </option>
          ))}
        </select>
        <div className={styles.palette}>
          {state.colors &&
            state.colors.map((color, index) => (
              <div
                key={index}
                className={`${styles.colorBox} ${
                  selectedColor === color ? styles.selected : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
                // onMouseEnter={() => setHover(true)}
                // onMouseLeave={() => setHover(false)}
              >
                <span className={styles.hexText}>{color}</span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Mood;
