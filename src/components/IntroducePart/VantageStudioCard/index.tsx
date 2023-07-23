import { Button } from '../../Button';
import './style.css';

export const VantageStudioCard = () => {
  return (
    <aside className="vantage-studio-wrapper">
      <div className="vantage-studio">
        <p className="vantage-studio-subtitle">vantage studio</p>
        <p className="vantage-studio-title">Your vision, Our Expertise!</p>
        <p className="vantage-studio-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula, libero vel
          egestas fringilla.
        </p>
        <div className="vantage-studio-buttons-wrapper">
          <Button title="EXPLORE" />
          <Button title="LET'S CHAT" styles={{ background: '#141414' }} />
        </div>
      </div>
    </aside>
  );
};
