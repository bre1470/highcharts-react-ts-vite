import React from 'react';
import HighchartsReact from 'highcharts-react-official';

// Demonstrates indirect type references
import Highcharts, { type HighchartsOptions } from '../lib/highcharts.js';
// or use: import Highcharts, { type HighchartsOptions } from 'highcharts/esm/highcharts.js';

import 'highcharts/esm/highcharts-more.js';
import 'highcharts/esm/modules/drilldown.js';

'use client';

interface IChartProps {
    callback: Highcharts.ChartLoadCallbackFunction;
    config: HighchartsOptions;
};

export class Chart extends React.Component<IChartProps> {
    public chart?: React.ReactElement;

    // ...implementation
    public createChart(config: HighchartsOptions): void {
        const options: HighchartsOptions = {
            ...config,
            chart: {
                ...config.chart,
                events: {
                    ...config.chart?.events,
                    load: this.props.callback
                }
            }
        };

        this.chart = <HighchartsReact
            highcharts={Highcharts}
            options={options}
        ></HighchartsReact>;
    }

    public render() {
        this.createChart(this.props.config);
        return this.chart;
    }
}

export default Chart;
