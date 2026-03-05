import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BarChart({ labels, data }) {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Regional Sales",
        data,
        backgroundColor: ["#00ff9c", "#4cc9f0", "#f72585", "#fca311"]
      }
    ]
  };

  return <Bar data={chartData} />;
}
