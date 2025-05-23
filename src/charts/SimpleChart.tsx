import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import ErrorBoundary from '../ErrorBoundary';

export function Chart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadIt = async () => {
            setData(
                await fetch('/something.json')
                    .then(response => response.json())
            );
        };
        loadIt();
    }, []);

    const options: Highcharts.Options = {
        series: [{
            type: 'line',
            data: [1, 2, 3]
        }]
    };

    return <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </ErrorBoundary>;
}

export default Chart;
