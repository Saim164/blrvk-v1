import "./Stats.css";
import {
  BoltIcon,
  TrendingUpIcon,
  UsersIcon,
  TargetIcon,
} from "../../components/Icons";

function Stats() {
  const STATS = [
    { icon: BoltIcon, value: "AI", label: "Powered Systems" },
    { icon: TrendingUpIcon, value: "30%+", label: "Average Time Saved" },
    { icon: UsersIcon, value: "API", label: "Integration" },
    { icon: TargetIcon, value: "100%", label: "Focus on Results" },
  ];
  return (
    <div className="hero-stats">
      {STATS.map(({ icon: Icon, value, label }) => (
        <div className="stat" key={label}>
          <span className="stat-icon">
            <Icon />
          </span>
          <div className="stat-body">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stats;
