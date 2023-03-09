import './Chart.css';
import ChartBar from '../ChartBar/ChartBar';

function Chart(props) {

    const dataPointValues = props.dataPoints.map(i => i.value);
    const totalMaximum = Math.max(...dataPointValues);

    return(
        <div className='chart'>
            {props.dataPoints.map((i) => (
                <ChartBar
                key={i.label}
                value={i.value}
                maxValue={totalMaximum}
                label={i.label}
                />
            ))}
        </div>
    );
}

export default Chart;