// Demonstrates indirect Highcharts reference for additional typing

import Highcharts from "highcharts/esm/highcharts.js";

export type HTMLDOMElement = Highcharts.HTMLDOMElement;
export type SVGDOMElement = Highcharts.SVGDOMElement;
export type HighchartsOptions = Highcharts.Options;

export default Highcharts;
