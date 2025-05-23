import React from 'react';
import HighchartsReact from 'highcharts-react-official';

import Highcharts, { type HighchartsOptions, type HTMLDOMElement } from "../lib/index.js";

import 'highcharts/esm/highcharts-more.js';
import 'highcharts/esm/modules/drilldown.js';

'use client';

interface IChartProps {
    callback: Highcharts.ChartLoadCallbackFunction;
    config: Highcharts.Options;
};

export class Chart extends React.Component<IChartProps> {
    public chart?: React.ReactElement;

    // ...implementation
    public createChart(config: HighchartsOptions): void {
        const options: Highcharts.Options = {
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
