import React from 'react';
import axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';
import { Map, CircleMarker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import logo from './logo2.svg';

class CustomScrollbars extends React.Component {
  constructor(props, ...rest) {
        super(props, ...rest);
        this.state = { top: 0 };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.renderView = this.renderView.bind(this);
        this.renderThumb = this.renderThumb.bind(this);
    }

    handleUpdate(values) {
        const { top } = values;
        this.setState({ top });
    }

    renderView({ style, ...props }) {
        return (
            <div
                className="scrollBox"
                style={{ ...style }}
                {...props}/>
        );
    }

    renderThumb({ style, ...props }) {
        return (
            <div className="scrollThumb"
                style={{ ...style }}
                {...props}/>
        );
    }

    render() {
        return (
            <Scrollbars
                renderView={this.renderView}
                renderThumbVertical={this.renderThumb}
                renderTrackVertical={this.renderTrackVertical}
                onUpdate={this.handleUpdate}
                {...this.props}/>
        );
    }
}

var colors  = [
    "#e02020",
    "#fa6400",
    "#f7b500",
    "#e46a6f",
    "#eb7070",
    "#a52a2a"
];

const date = {
    "data": [
        {
            "id": "united-states-of-america",
            "typeId": "country",
            "alpha2code": "US",
            "alpha3code": "USA",
            "hospitalBedOccupancy": 0.64,
            "hospitalBeds": 916877,
            "icuBeds": 114858,
            "dataSource": "https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/",
            "location": {
                "type": "Point",
                "coordinates": [
                    -107.554,
                    43.0005
                ]
            },
            "population": 331002651,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 776215,
                "deaths": 37570,
                "recovered": 30274
            },
            "name": "United States of America"
        },
        {
            "id": "spain",
            "typeId": "country",
            "alpha2code": "ES",
            "alpha3code": "ESP",
            "hospitalBedOccupancy": 0.753,
            "hospitalBeds": 138862,
            "icuBeds": 4535,
            "dataSource": "https://github.com/datadista/datasets/tree/master/COVID%2019",
            "location": {
                "type": "Point",
                "coordinates": [
                    -6.9255,
                    35.712
                ]
            },
            "population": 46754778,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 204178,
                "deaths": 21282,
                "recovered": 82514
            },
            "name": "Spain"
        },
        {
            "id": "italy",
            "typeId": "country",
            "alpha2code": "IT",
            "alpha3code": "ITA",
            "hospitalBedOccupancy": 0.789,
            "hospitalBeds": 192269,
            "icuBeds": 7558,
            "dataSource": "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv",
            "location": {
                "type": "Point",
                "coordinates": [
                    12.5735,
                    41.2935
                ]
            },
            "population": 60461826,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 181228,
                "deaths": 24114,
                "recovered": 48877
            },
            "name": "Italy"
        },
        {
            "id": "united-kingdom",
            "typeId": "country",
            "alpha2code": "GB",
            "alpha3code": "GBR",
            "hospitalBedOccupancy": 0.843,
            "hospitalBeds": 172430,
            "icuBeds": 4480,
            "dataSource": "https://www.gov.scot/coronavirus-covid-19/",
            "location": {
                "type": "Point",
                "coordinates": [
                    -64.7505,
                    32.3078
                ]
            },
            "population": 67886011,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 157040,
                "deaths": 16509,
                "recovered": 16509
            },
            "name": "United Kingdom"
        },
        {
            "id": "germany",
            "typeId": "country",
            "alpha2code": "DE",
            "alpha3code": "DEU",
            "hospitalBedOccupancy": 0.798,
            "hospitalBeds": 670272,
            "icuBeds": 24465,
            "dataSource": "https://raw.githubusercontent.com/jgehrcke/covid-19-germany-gae/master/data.csv",
            "location": {
                "type": "Point",
                "coordinates": [
                    11.2665,
                    50.927
                ]
            },
            "population": 83783942,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 147065,
                "deaths": 4862,
                "recovered": 95200
            },
            "name": "Germany"
        },
        {
            "id": "france",
            "typeId": "country",
            "alpha2code": "FR",
            "alpha3code": "FRA",
            "hospitalBedOccupancy": 0.756,
            "hospitalBeds": 390336,
            "icuBeds": 7572,
            "dataSource": "https://raw.githubusercontent.com/opencovid19-fr/data/master/dist/chiffres-cles.csv",
            "location": {
                "type": "Point",
                "coordinates": [
                    45.158732839739,
                    -12.818387777882
                ]
            },
            "population": 65273511,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-10",
                "cases": 117749,
                "deaths": 12210,
                "recovered": 23206
            },
            "name": "France"
        },
        {
            "id": "turkey",
            "typeId": "country",
            "alpha2code": "TR",
            "alpha3code": "TUR",
            "hospitalBedOccupancy": 0.68,
            "hospitalBeds": 236993,
            "icuBeds": 8434,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    35.2415,
                    38.9565
                ]
            },
            "population": 84339067,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 90980,
                "deaths": 2140,
                "recovered": 13430
            },
            "name": "Turkey"
        },
        {
            "id": "iran",
            "typeId": "country",
            "alpha2code": "IR",
            "alpha3code": "IRN",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    53.685,
                    32.421
                ]
            },
            "population": 83992949,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 84802,
                "deaths": 5297,
                "recovered": 60965
            },
            "name": "Iran"
        },
        {
            "id": "china",
            "typeId": "country",
            "alpha2code": "CN",
            "alpha3code": "CHN",
            "hospitalBeds": 6246665,
            "icuBeds": 51816,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    104.1375,
                    31.1075
                ]
            },
            "population": 1439323776,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 83853,
                "deaths": 4636,
                "recovered": 78023
            },
            "name": "China"
        },
        {
            "id": "russia",
            "typeId": "country",
            "alpha2code": "RU",
            "alpha3code": "RUS",
            "hospitalBeds": 1174772,
            "icuBeds": 12113,
            "dataSource": "https://yandex.ru/maps/api/covid?csrfToken=",
            "location": {
                "type": "Point",
                "coordinates": [
                    39.256808302611,
                    57.7460362819488
                ]
            },
            "population": 145934462,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 52763,
                "deaths": 456,
                "recovered": 3873
            },
            "name": "Russia"
        },
        {
            "id": "belgium",
            "typeId": "country",
            "alpha2code": "BE",
            "alpha3code": "BEL",
            "hospitalBedOccupancy": 0.818,
            "hospitalBeds": 66756,
            "icuBeds": 1843,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    4.475,
                    50.501
                ]
            },
            "population": 11589623,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-14",
                "cases": 52207,
                "deaths": 4157,
                "recovered": 6868
            },
            "name": "Belgium"
        },
        {
            "id": "brazil",
            "typeId": "country",
            "alpha2code": "BR",
            "alpha3code": "BRA",
            "dataSource": "https://covid.saude.gov.br/",
            "location": {
                "type": "Point",
                "coordinates": [
                    -51.4155,
                    -14.2375
                ]
            },
            "population": 212559417,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 40814,
                "deaths": 2588,
                "recovered": 22991
            },
            "name": "Brazil"
        },
        {
            "id": "canada",
            "typeId": "country",
            "alpha2code": "CA",
            "alpha3code": "CAN",
            "hospitalBedOccupancy": 0.916,
            "hospitalBeds": 95110,
            "icuBeds": 5095,
            "dataSource": "https://health-infobase.canada.ca/src/data/covidLive/covid19.csv",
            "location": {
                "type": "Point",
                "coordinates": [
                    -96.812,
                    62.414
                ]
            },
            "population": 37742154,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 37920,
                "deaths": 1753,
                "recovered": 1753
            },
            "name": "Canada"
        },
        {
            "id": "netherlands",
            "typeId": "country",
            "alpha2code": "NL",
            "alpha3code": "NLD",
            "hospitalBedOccupancy": 0.654,
            "hospitalBeds": 56888,
            "icuBeds": 1097,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -31.4185,
                    32.7635
                ]
            },
            "population": 17134872,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 33405,
                "deaths": 3751,
                "recovered": 3751
            },
            "name": "Netherlands"
        },
        {
            "id": "switzerland",
            "typeId": "country",
            "alpha2code": "CH",
            "alpha3code": "CHE",
            "hospitalBedOccupancy": 0.82,
            "hospitalBeds": 39205,
            "icuBeds": 952,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    8.228,
                    46.8115
                ]
            },
            "population": 8654622,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 27944,
                "deaths": 1436,
                "recovered": 18600
            },
            "name": "Switzerland"
        },
        {
            "id": "portugal",
            "typeId": "country",
            "alpha2code": "PT",
            "alpha3code": "PRT",
            "hospitalBedOccupancy": 0.668,
            "hospitalBeds": 34567,
            "icuBeds": 428,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -18.732,
                    36.091
                ]
            },
            "population": 10196709,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 20863,
                "deaths": 735,
                "recovered": 610
            },
            "name": "Portugal"
        },
        {
            "id": "india",
            "typeId": "country",
            "alpha2code": "IN",
            "alpha3code": "IND",
            "dataSource": "https://www.mohfw.gov.in/",
            "location": {
                "type": "Point",
                "coordinates": [
                    87.8586995791223,
                    24.4025083354032
                ]
            },
            "population": 1380004385,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 18658,
                "deaths": 592,
                "recovered": 3273
            },
            "name": "India"
        },
        {
            "id": "peru",
            "typeId": "country",
            "alpha2code": "PE",
            "alpha3code": "PER",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -74.99,
                    -9.1975
                ]
            },
            "population": 32971854,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 16325,
                "deaths": 445,
                "recovered": 6968
            },
            "name": "Peru"
        },
        {
            "id": "ireland",
            "typeId": "country",
            "alpha2code": "IE",
            "alpha3code": "IRL",
            "hospitalBedOccupancy": 0.949,
            "hospitalBeds": 14616,
            "icuBeds": 321,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -8.343,
                    53.4095
                ]
            },
            "population": 4937786,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 15652,
                "deaths": 687,
                "recovered": 77
            },
            "name": "Ireland"
        },
        {
            "id": "austria",
            "typeId": "country",
            "alpha2code": "AT",
            "alpha3code": "AUT",
            "hospitalBedOccupancy": 0.738,
            "hospitalBeds": 66377,
            "icuBeds": 1963,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    13.346,
                    47.696
                ]
            },
            "population": 9006398,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 14873,
                "deaths": 491,
                "recovered": 10971
            },
            "name": "Austria"
        },
        {
            "id": "sweden",
            "typeId": "country",
            "alpha2code": "SE",
            "alpha3code": "SWE",
            "hospitalBeds": 22420,
            "icuBeds": 586,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    17.562,
                    62.1995
                ]
            },
            "population": 10099265,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 14777,
                "deaths": 1580,
                "recovered": 550
            },
            "name": "Sweden"
        },
        {
            "id": "israel",
            "typeId": "country",
            "alpha2code": "IL",
            "alpha3code": "ISR",
            "hospitalBedOccupancy": 0.933,
            "hospitalBeds": 26140,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    35.081,
                    31.4135
                ]
            },
            "population": 8655535,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 13883,
                "deaths": 181,
                "recovered": 4353
            },
            "name": "Israel"
        },
        {
            "id": "japan",
            "typeId": "country",
            "alpha2code": "JP",
            "alpha3code": "JPN",
            "hospitalBedOccupancy": 0.755,
            "hospitalBeds": 1650517,
            "icuBeds": 9233,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    138.4625,
                    32.9745
                ]
            },
            "population": 126476461,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 11135,
                "deaths": 263,
                "recovered": 1239
            },
            "name": "Japan"
        },
        {
            "id": "south-korea",
            "typeId": "country",
            "alpha2code": "KR",
            "alpha3code": "KOR",
            "hospitalBeds": 629073,
            "icuBeds": 5435,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    128.242,
                    35.8695
                ]
            },
            "population": 51269185,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 10683,
                "deaths": 237,
                "recovered": 8213
            },
            "name": "South Korea"
        },
        {
            "id": "chile",
            "typeId": "country",
            "alpha2code": "CL",
            "alpha3code": "CHL",
            "hospitalBedOccupancy": 0.791,
            "hospitalBeds": 40335,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -87.938,
                    -37.018
                ]
            },
            "population": 19116201,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 10507,
                "deaths": 139,
                "recovered": 4676
            },
            "name": "Chile"
        },
        {
            "id": "saudi-arabia",
            "typeId": "country",
            "alpha2code": "SA",
            "alpha3code": "SAU",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    45.0845,
                    24.267
                ]
            },
            "population": 34813871,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 10484,
                "deaths": 103,
                "recovered": 1490
            },
            "name": "Saudi Arabia"
        },
        {
            "id": "ecuador",
            "typeId": "country",
            "alpha2code": "EC",
            "alpha3code": "ECU",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -83.5975,
                    -1.67
                ]
            },
            "population": 17643054,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 10128,
                "deaths": 507,
                "recovered": 1150
            },
            "name": "Ecuador"
        },
        {
            "id": "poland",
            "typeId": "country",
            "alpha2code": "PL",
            "alpha3code": "POL",
            "hospitalBeds": 250545,
            "icuBeds": 2611,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    19.1345,
                    51.9185
                ]
            },
            "population": 37846611,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 9737,
                "deaths": 385,
                "recovered": 1297
            },
            "name": "Poland"
        },
        {
            "id": "romania",
            "typeId": "country",
            "alpha2code": "RO",
            "alpha3code": "ROU",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    25.0165,
                    45.942
                ]
            },
            "population": 19237691,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 9242,
                "deaths": 482,
                "recovered": 2153
            },
            "name": "Romania"
        },
        {
            "id": "pakistan",
            "typeId": "country",
            "alpha2code": "PK",
            "alpha3code": "PAK",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    68.992,
                    30.393
                ]
            },
            "population": 220892340,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 9216,
                "deaths": 192,
                "recovered": 2066
            },
            "name": "Pakistan"
        },
        {
            "id": "singapore",
            "typeId": "country",
            "alpha2code": "SG",
            "alpha3code": "SGP",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    104.009,
                    1.3135
                ]
            },
            "population": 5850342,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 9125,
                "deaths": 11,
                "recovered": 801
            },
            "name": "Singapore"
        },
        {
            "id": "mexico",
            "typeId": "country",
            "alpha2code": "MX",
            "alpha3code": "MEX",
            "hospitalBedOccupancy": 0.74,
            "hospitalBeds": 177927,
            "icuBeds": 1547,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -102.544,
                    23.6245
                ]
            },
            "population": 128932753,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 8772,
                "deaths": 712,
                "recovered": 2627
            },
            "name": "Mexico"
        },
        {
            "id": "united-arab-emirates",
            "typeId": "country",
            "alpha2code": "AE",
            "alpha3code": "ARE",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    53.939,
                    24.351
                ]
            },
            "population": 9890402,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 7755,
                "deaths": 46,
                "recovered": 1443
            },
            "name": "United Arab Emirates"
        },
        {
            "id": "denmark",
            "typeId": "country",
            "alpha2code": "DK",
            "alpha3code": "DNK",
            "hospitalBeds": 15118,
            "icuBeds": 388,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    11.6375,
                    56.153
                ]
            },
            "population": 5792202,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 7695,
                "deaths": 364,
                "recovered": 4312
            },
            "name": "Denmark"
        },
        {
            "id": "norway",
            "typeId": "country",
            "alpha2code": "NO",
            "alpha3code": "NOR",
            "hospitalBedOccupancy": 0.807,
            "hospitalBeds": 19516,
            "icuBeds": 434,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    12.214,
                    13.181
                ]
            },
            "population": 5421241,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 7156,
                "deaths": 182,
                "recovered": 32
            },
            "name": "Norway"
        },
        {
            "id": "indonesia",
            "typeId": "country",
            "alpha2code": "ID",
            "alpha3code": "IDN",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    118.0155,
                    -2.467
                ]
            },
            "population": 273523615,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 7135,
                "deaths": 616,
                "recovered": 842
            },
            "name": "Indonesia"
        },
        {
            "id": "czechia",
            "typeId": "country",
            "alpha2code": "CZ",
            "alpha3code": "CZE",
            "hospitalBedOccupancy": 0.701,
            "hospitalBeds": 71001,
            "icuBeds": 1242,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    15.4745,
                    49.805
                ]
            },
            "population": 10708981,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 6914,
                "deaths": 196,
                "recovered": 1597
            },
            "name": "Czech Republic"
        },
        {
            "id": "australia",
            "typeId": "country",
            "alpha2code": "AU",
            "alpha3code": "AUS",
            "hospitalBeds": 97920,
            "icuBeds": 2320,
            "dataSource": "https://ww2.health.wa.gov.au/Articles/A_E/Coronavirus/COVID19-statistics",
            "location": {
                "type": "Point",
                "coordinates": [
                    120.9625,
                    -24.4405
                ]
            },
            "population": 25499884,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 6645,
                "deaths": 71,
                "recovered": 4275
            },
            "name": "Australia"
        },
        {
            "id": "serbia",
            "typeId": "country",
            "alpha2code": "RS",
            "alpha3code": "SRB",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    20.91,
                    44.21
                ]
            },
            "population": 8737371,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 6630,
                "deaths": 125,
                "recovered": 870
            },
            "name": "Serbia"
        },
        {
            "id": "philippines",
            "typeId": "country",
            "alpha2code": "PH",
            "alpha3code": "PHL",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    120.4445,
                    12.851
                ]
            },
            "population": 109581078,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 6599,
                "deaths": 437,
                "recovered": 654
            },
            "name": "Philippines"
        },
        {
            "id": "qatar",
            "typeId": "country",
            "alpha2code": "QA",
            "alpha3code": "QAT",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    51.574,
                    25.3235
                ]
            },
            "population": 2881053,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 6533,
                "deaths": 9,
                "recovered": 614
            },
            "name": "Qatar"
        },
        {
            "id": "belarus",
            "typeId": "country",
            "alpha2code": "BY",
            "alpha3code": "BLR",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    27.9675,
                    53.7165
                ]
            },
            "population": 9449323,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 6264,
                "deaths": 51,
                "recovered": 514
            },
            "name": "Belarus"
        },
        {
            "id": "ukraine",
            "typeId": "country",
            "alpha2code": "UA",
            "alpha3code": "UKR",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    31.183,
                    48.7805
                ]
            },
            "population": 43733762,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 6125,
                "deaths": 161,
                "recovered": 367
            },
            "name": "Ukraine"
        },
        {
            "id": "malaysia",
            "typeId": "country",
            "alpha2code": "MY",
            "alpha3code": "MYS",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    109.1025,
                    4.1185
                ]
            },
            "population": 32365999,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 5482,
                "deaths": 92,
                "recovered": 3349
            },
            "name": "Malaysia"
        },
        {
            "id": "dominican-republic",
            "typeId": "country",
            "alpha2code": "DO",
            "alpha3code": "DOM",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -70.168,
                    18.7025
                ]
            },
            "population": 10847910,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 4964,
                "deaths": 235,
                "recovered": 416
            },
            "name": "Dominican Republic"
        },
        {
            "id": "panama",
            "typeId": "country",
            "alpha2code": "PA",
            "alpha3code": "PAN",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -80.105,
                    8.4245
                ]
            },
            "population": 4314767,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 4658,
                "deaths": 136,
                "recovered": 204
            },
            "name": "Panama"
        },
        {
            "id": "finland",
            "typeId": "country",
            "alpha2code": "FI",
            "alpha3code": "FIN",
            "hospitalBeds": 18174,
            "icuBeds": 338,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    25.3595,
                    64.798
                ]
            },
            "population": 5540720,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 4014,
                "deaths": 98,
                "recovered": 2000
            },
            "name": "Finland"
        },
        {
            "id": "colombia",
            "typeId": "country",
            "alpha2code": "CO",
            "alpha3code": "COL",
            "hospitalBeds": 86501,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -74.3535,
                    5.828
                ]
            },
            "population": 50882891,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 3977,
                "deaths": 189,
                "recovered": 804
            },
            "name": "Colombia"
        },
        {
            "id": "lithuania",
            "typeId": "country",
            "alpha2code": "LT",
            "alpha3code": "LTU",
            "hospitalBedOccupancy": 0.732,
            "hospitalBeds": 17858,
            "icuBeds": 422,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    23.893,
                    55.172
                ]
            },
            "population": 2722289,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-06",
                "cases": 3613,
                "deaths": 146,
                "recovered": 329
            },
            "name": "Lithuania"
        },
        {
            "id": "luxembourg",
            "typeId": "country",
            "alpha2code": "LU",
            "alpha3code": "LUX",
            "hospitalBedOccupancy": 0.707,
            "hospitalBeds": 2917,
            "icuBeds": 155,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    6.1335,
                    49.8155
                ]
            },
            "population": 625978,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 3558,
                "deaths": 75,
                "recovered": 637
            },
            "name": "Luxembourg"
        },
        {
            "id": "bangladesh",
            "typeId": "country",
            "alpha2code": "BD",
            "alpha3code": "BGD",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    90.344,
                    23.6125
                ]
            },
            "population": 164689383,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 3382,
                "deaths": 110,
                "recovered": 87
            },
            "name": "Bangladesh"
        },
        {
            "id": "egypt",
            "typeId": "country",
            "alpha2code": "EG",
            "alpha3code": "EGY",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    30.7715,
                    26.8355
                ]
            },
            "population": 102334404,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 3333,
                "deaths": 250,
                "recovered": 821
            },
            "name": "Egypt"
        },
        {
            "id": "south-africa",
            "typeId": "country",
            "alpha2code": "ZA",
            "alpha3code": "ZAF",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    27.2265,
                    -34.553
                ]
            },
            "population": 59308690,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 3300,
                "deaths": 58,
                "recovered": 1055
            },
            "name": "South Africa"
        },
        {
            "id": "morocco",
            "typeId": "country",
            "alpha2code": "MA",
            "alpha3code": "MAR",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -9.015,
                    28.6255
                ]
            },
            "population": 36910560,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 3186,
                "deaths": 144,
                "recovered": 359
            },
            "name": "Morocco"
        },
        {
            "id": "argentina",
            "typeId": "country",
            "alpha2code": "AR",
            "alpha3code": "ARG",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -63.5995,
                    -38.4275
                ]
            },
            "population": 45195774,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 3031,
                "deaths": 142,
                "recovered": 737
            },
            "name": "Argentina"
        },
        {
            "id": "thailand",
            "typeId": "country",
            "alpha2code": "TH",
            "alpha3code": "THA",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    101.4905,
                    13.039
                ]
            },
            "population": 69799978,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 2811,
                "deaths": 48,
                "recovered": 2108
            },
            "name": "Thailand"
        },
        {
            "id": "algeria",
            "typeId": "country",
            "alpha2code": "DZ",
            "alpha3code": "DZA",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    1.664,
                    28.03
                ]
            },
            "population": 43851044,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 2718,
                "deaths": 384,
                "recovered": 1099
            },
            "name": "Algeria"
        },
        {
            "id": "moldova",
            "typeId": "country",
            "alpha2code": "MD",
            "alpha3code": "MDA",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    28.39,
                    46.979
                ]
            },
            "population": 4033963,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 2548,
                "deaths": 72,
                "recovered": 505
            },
            "name": "Moldova"
        },
        {
            "id": "greece",
            "typeId": "country",
            "alpha2code": "GR",
            "alpha3code": "GRC",
            "hospitalBedOccupancy": 0.616,
            "hospitalBeds": 43881,
            "icuBeds": 625,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    24.503,
                    38.2755
                ]
            },
            "population": 10423054,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 2245,
                "deaths": 116,
                "recovered": 577
            },
            "name": "Greece"
        },
        {
            "id": "hungary",
            "typeId": "country",
            "alpha2code": "HU",
            "alpha3code": "HUN",
            "hospitalBedOccupancy": 0.655,
            "hospitalBeds": 67816,
            "icuBeds": 1333,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    19.506,
                    47.161
                ]
            },
            "population": 9660351,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 2098,
                "deaths": 213,
                "recovered": 287
            },
            "name": "Hungary"
        },
        {
            "id": "kuwait",
            "typeId": "country",
            "alpha2code": "KW",
            "alpha3code": "KWT",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    47.6655,
                    29.314
                ]
            },
            "population": 4270571,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 2080,
                "deaths": 11,
                "recovered": 412
            },
            "name": "Kuwait"
        },
        {
            "id": "kazakhstan",
            "typeId": "country",
            "alpha2code": "KZ",
            "alpha3code": "KAZ",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    66.9045,
                    48.0055
                ]
            },
            "population": 18776707,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 1967,
                "deaths": 19,
                "recovered": 452
            },
            "name": "Kazakhstan"
        },
        {
            "id": "bahrain",
            "typeId": "country",
            "alpha2code": "BH",
            "alpha3code": "BHR",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    50.6055,
                    26.029
                ]
            },
            "population": 1701575,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 1952,
                "deaths": 7,
                "recovered": 783
            },
            "name": "Bahrain"
        },
        {
            "id": "croatia",
            "typeId": "country",
            "alpha2code": "HR",
            "alpha3code": "HRV",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    16.4685,
                    44.462
                ]
            },
            "population": 4105267,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 1881,
                "deaths": 47,
                "recovered": 771
            },
            "name": "Croatia"
        },
        {
            "id": "iceland",
            "typeId": "country",
            "alpha2code": "IS",
            "alpha3code": "ISL",
            "hospitalBeds": 1044,
            "icuBeds": 31,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -18.905,
                    65.223
                ]
            },
            "population": 341243,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 1773,
                "deaths": 10,
                "recovered": 1362
            },
            "name": "Iceland"
        },
        {
            "id": "uzbekistan",
            "typeId": "country",
            "alpha2code": "UZ",
            "alpha3code": "UZB",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    64.5695,
                    41.3865
                ]
            },
            "population": 33469203,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 1657,
                "deaths": 5,
                "recovered": 261
            },
            "name": "Uzbekistan"
        },
        {
            "id": "iraq",
            "typeId": "country",
            "alpha2code": "IQ",
            "alpha3code": "IRQ",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    43.7045,
                    33.22
                ]
            },
            "population": 40222493,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 1574,
                "deaths": 82,
                "recovered": 1043
            },
            "name": "Iraq"
        },
        {
            "id": "estonia",
            "typeId": "country",
            "alpha2code": "EE",
            "alpha3code": "EST",
            "hospitalBedOccupancy": 0.704,
            "hospitalBeds": 6221,
            "icuBeds": 194,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    24.989,
                    58.668
                ]
            },
            "population": 1326535,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 1552,
                "deaths": 43,
                "recovered": 169
            },
            "name": "Estonia"
        },
        {
            "id": "oman",
            "typeId": "country",
            "alpha2code": "OM",
            "alpha3code": "OMN",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    55.9195,
                    21.5785
                ]
            },
            "population": 5106626,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 1508,
                "deaths": 8,
                "recovered": 238
            },
            "name": "Oman"
        },
        {
            "id": "new-zealand",
            "typeId": "country",
            "alpha2code": "NZ",
            "alpha3code": "NZL",
            "hospitalBeds": 13068,
            "dataSource": "https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-situation/covid-19-current-cases",
            "location": {
                "type": "Point",
                "coordinates": [
                    0.823999999999998,
                    -40.881
                ]
            },
            "population": 4822233,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 1445,
                "deaths": 13,
                "recovered": 1006
            },
            "name": "New Zealand"
        },
        {
            "id": "azerbaijan",
            "typeId": "country",
            "alpha2code": "AZ",
            "alpha3code": "AZE",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    47.8105,
                    40.1505
                ]
            },
            "population": 10139177,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 1436,
                "deaths": 19,
                "recovered": 791
            },
            "name": "Azerbaijan"
        },
        {
            "id": "armenia",
            "typeId": "country",
            "alpha2code": "AM",
            "alpha3code": "ARM",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    45.04,
                    40.0705
                ]
            },
            "population": 2963243,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 1401,
                "deaths": 24,
                "recovered": 609
            },
            "name": "Armenia"
        },
        {
            "id": "bosnia-and-herzegovina",
            "typeId": "country",
            "alpha2code": "BA",
            "alpha3code": "BIH",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    17.6735,
                    43.916
                ]
            },
            "population": 3280819,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 1342,
                "deaths": 51,
                "recovered": 437
            },
            "name": "Bosnia and Herzegovina"
        },
        {
            "id": "slovenia",
            "typeId": "country",
            "alpha2code": "SI",
            "alpha3code": "SVN",
            "hospitalBedOccupancy": 0.695,
            "hospitalBeds": 9355,
            "icuBeds": 133,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    14.986,
                    46.149
                ]
            },
            "population": 2078938,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 1335,
                "deaths": 77,
                "recovered": 193
            },
            "name": "Slovenia"
        },
        {
            "id": "macedonia",
            "typeId": "country",
            "alpha2code": "MK",
            "alpha3code": "MKD",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    21.7445,
                    41.614
                ]
            },
            "population": 2077000,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 1231,
                "deaths": 55,
                "recovered": 224
            },
            "name": "Macedonia"
        },
        {
            "id": "slovakia",
            "typeId": "country",
            "alpha2code": "SK",
            "alpha3code": "SVK",
            "hospitalBedOccupancy": 0.678,
            "hospitalBeds": 31775,
            "icuBeds": 502,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    19.7045,
                    48.6725
                ]
            },
            "population": 5459642,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 1199,
                "deaths": 14,
                "recovered": 258
            },
            "name": "Slovakia"
        },
        {
            "id": "cameroon",
            "typeId": "country",
            "alpha2code": "CM",
            "alpha3code": "CMR",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    12.3445,
                    7.366
                ]
            },
            "population": 26545863,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 1163,
                "deaths": 43,
                "recovered": 329
            },
            "name": "Cameroon"
        },
        {
            "id": "afghanistan",
            "typeId": "country",
            "alpha2code": "AF",
            "alpha3code": "AFG",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    67.704,
                    33.934
                ]
            },
            "population": 38928346,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 1092,
                "deaths": 36,
                "recovered": 150
            },
            "name": "Afghanistan"
        },
        {
            "id": "cuba",
            "typeId": "country",
            "alpha2code": "CU",
            "alpha3code": "CUB",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -79.5415,
                    21.5485
                ]
            },
            "population": 11326616,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 1087,
                "deaths": 36,
                "recovered": 285
            },
            "name": "Cuba"
        },
        {
            "id": "ghana",
            "typeId": "country",
            "alpha2code": "GH",
            "alpha3code": "GHA",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -1.0295,
                    7.96
                ]
            },
            "population": 31072940,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 1042,
                "deaths": 9,
                "recovered": 99
            },
            "name": "Ghana"
        },
        {
            "id": "bulgaria",
            "typeId": "country",
            "alpha2code": "BG",
            "alpha3code": "BGR",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    25.4825,
                    42.726
                ]
            },
            "population": 6948445,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 966,
                "deaths": 45,
                "recovered": 170
            },
            "name": "Bulgaria"
        },
        {
            "id": "puerto-rico",
            "typeId": "country",
            "alpha2code": "PR",
            "alpha3code": "PRI",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -66.589,
                    18.1995
                ]
            },
            "population": 2860853,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-14",
                "cases": 903,
                "deaths": 45,
                "recovered": 0
            },
            "name": "Puerto Rico"
        },
        {
            "id": "tunisia",
            "typeId": "country",
            "alpha2code": "TN",
            "alpha3code": "TUN",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    9.561,
                    33.8925
                ]
            },
            "population": 11818619,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 884,
                "deaths": 38,
                "recovered": 148
            },
            "name": "Tunisia"
        },
        {
            "id": "cote-d-ivoire",
            "typeId": "country",
            "alpha2code": "CI",
            "alpha3code": "CIV",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -5.547,
                    7.551
                ]
            },
            "population": 26378274,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 879,
                "deaths": 10,
                "recovered": 287
            },
            "name": "Cote dIvoire"
        },
        {
            "id": "hong-kong",
            "typeId": "country",
            "alpha2code": "HK",
            "alpha3code": "HKG",
            "hospitalBeds": 40484,
            "icuBeds": 532,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    114.1325,
                    22.3575
                ]
            },
            "population": 7496981,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-05",
                "cases": 862,
                "deaths": 4,
                "recovered": 173
            },
            "name": "Hong Kong"
        },
        {
            "id": "djibouti",
            "typeId": "country",
            "alpha2code": "DJ",
            "alpha3code": "DJI",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    42.611,
                    11.815
                ]
            },
            "population": 988000,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 846,
                "deaths": 2,
                "recovered": 102
            },
            "name": "Djibouti"
        },
        {
            "id": "latvia",
            "typeId": "country",
            "alpha2code": "LV",
            "alpha3code": "LVA",
            "hospitalBedOccupancy": 0.711,
            "hospitalBeds": 10506,
            "icuBeds": 183,
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    24.606,
                    56.8795
                ]
            },
            "population": 1886198,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 845,
                "deaths": 5,
                "recovered": 88
            },
            "name": "Latvia"
        },
        {
            "id": "cyprus",
            "typeId": "country",
            "alpha2code": "CY",
            "alpha3code": "CYP",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    33.441,
                    35.1695
                ]
            },
            "population": 1207359,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 772,
                "deaths": 12,
                "recovered": 81
            },
            "name": "Cyprus"
        },
        {
            "id": "andorra",
            "typeId": "country",
            "alpha2code": "AD",
            "alpha3code": "AND",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    1.601,
                    42.545
                ]
            },
            "population": 77265,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 717,
                "deaths": 37,
                "recovered": 248
            },
            "name": "Andorra"
        },
        {
            "id": "lebanon",
            "typeId": "country",
            "alpha2code": "LB",
            "alpha3code": "LBN",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    35.8645,
                    33.87
                ]
            },
            "population": 6825445,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 677,
                "deaths": 21,
                "recovered": 103
            },
            "name": "Lebanon"
        },
        {
            "id": "nigeria",
            "typeId": "country",
            "alpha2code": "NG",
            "alpha3code": "NGA",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    8.6710775145001,
                    9.07578074450008
                ]
            },
            "population": 206139589,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 665,
                "deaths": 22,
                "recovered": 188
            },
            "name": "Nigeria"
        },
        {
            "id": "costa-rica",
            "typeId": "country",
            "alpha2code": "CR",
            "alpha3code": "CRI",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -84.8265,
                    8.3595
                ]
            },
            "population": 5094118,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 662,
                "deaths": 6,
                "recovered": 124
            },
            "name": "Costa Rica"
        },
        {
            "id": "guinea",
            "typeId": "country",
            "alpha2code": "GN",
            "alpha3code": "GIN",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -11.5015,
                    9.938
                ]
            },
            "population": 13132795,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 622,
                "deaths": 5,
                "recovered": 122
            },
            "name": "Guinea"
        },
        {
            "id": "albania",
            "typeId": "country",
            "alpha2code": "AL",
            "alpha3code": "ALB",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    20.1605,
                    41.1555
                ]
            },
            "population": 2877797,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 609,
                "deaths": 26,
                "recovered": 345
            },
            "name": "Albania"
        },
        {
            "id": "bolivia",
            "typeId": "country",
            "alpha2code": "BO",
            "alpha3code": "BOL",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -63.5475,
                    -16.2835
                ]
            },
            "population": 11673021,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 598,
                "deaths": 34,
                "recovered": 37
            },
            "name": "Bolivia"
        },
        {
            "id": "kyrgyzstan",
            "typeId": "country",
            "alpha2code": "KG",
            "alpha3code": "KGZ",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    74.7485,
                    41.225
                ]
            },
            "population": 6524195,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 590,
                "deaths": 7,
                "recovered": 216
            },
            "name": "Kyrgyzstan"
        },
        {
            "id": "burkina-faso",
            "typeId": "country",
            "alpha2code": "BF",
            "alpha3code": "BFA",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -1.552,
                    12.248
                ]
            },
            "population": 20903273,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 581,
                "deaths": 38,
                "recovered": 357
            },
            "name": "Burkina Faso"
        },
        {
            "id": "uruguay",
            "typeId": "country",
            "alpha2code": "UY",
            "alpha3code": "URY",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -55.838,
                    -32.558
                ]
            },
            "population": 3473730,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 535,
                "deaths": 11,
                "recovered": 313
            },
            "name": "Uruguay"
        },
        {
            "id": "kosovo",
            "typeId": "country",
            "alpha2code": "XK",
            "alpha3code": "XKX",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    20.902,
                    42.5625
                ]
            },
            "population": 1810463,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 510,
                "deaths": 12,
                "recovered": 93
            },
            "name": "Kosovo"
        },
        {
            "id": "honduras",
            "typeId": "country",
            "alpha2code": "HN",
            "alpha3code": "HND",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -85.883,
                    15.199
                ]
            },
            "population": 9904607,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 494,
                "deaths": 46,
                "recovered": 29
            },
            "name": "Honduras"
        },
        {
            "id": "san-marino",
            "typeId": "country",
            "alpha2code": "SM",
            "alpha3code": "SMR",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    12.4595,
                    43.944
                ]
            },
            "population": 33931,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 462,
                "deaths": 39,
                "recovered": 61
            },
            "name": "San Marino"
        },
        {
            "id": "palestine",
            "typeId": "country",
            "alpha2code": "PS",
            "alpha3code": "PSE",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    34.895,
                    31.886
                ]
            },
            "population": 5051953,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 461,
                "deaths": 4,
                "recovered": 71
            },
            "name": "Palestine"
        },
        {
            "id": "malta",
            "typeId": "country",
            "alpha2code": "MT",
            "alpha3code": "MLT",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    14.378,
                    35.931
                ]
            },
            "population": 441543,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 443,
                "deaths": 3,
                "recovered": 150
            },
            "name": "Malta"
        },
        {
            "id": "taiwan",
            "typeId": "country",
            "alpha2code": "TW",
            "alpha3code": "TWN",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    118.2605,
                    18.3855
                ]
            },
            "population": 23816775,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 425,
                "deaths": 6,
                "recovered": 203
            },
            "name": "Taiwan"
        },
        {
            "id": "jordan",
            "typeId": "country",
            "alpha2code": "JO",
            "alpha3code": "JOR",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    37.131,
                    31.279
                ]
            },
            "population": 10203134,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 425,
                "deaths": 7,
                "recovered": 282
            },
            "name": "Jordan"
        },
        {
            "id": "georgia",
            "typeId": "country",
            "alpha2code": "GE",
            "alpha3code": "GEO",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    43.3685,
                    42.322
                ]
            },
            "population": 3989167,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 408,
                "deaths": 4,
                "recovered": 95
            },
            "name": "Georgia"
        },
        {
            "id": "senegal",
            "typeId": "country",
            "alpha2code": "SN",
            "alpha3code": "SEN",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -14.4435,
                    14.5025
                ]
            },
            "population": 16743927,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 377,
                "deaths": 5,
                "recovered": 235
            },
            "name": "Senegal"
        },
        {
            "id": "democratic-republic-of-the-congo",
            "typeId": "country",
            "alpha2code": "CD",
            "alpha3code": "COD",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    21.7395,
                    -4.0405
                ]
            },
            "population": 91931000,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 350,
                "deaths": 25,
                "recovered": 35
            },
            "name": "Democratic Republic of the Congo"
        },
        {
            "id": "mauritius",
            "typeId": "country",
            "alpha2code": "MU",
            "alpha3code": "MUS",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    60.043,
                    -15.435
                ]
            },
            "population": 1271768,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 328,
                "deaths": 9,
                "recovered": 224
            },
            "name": "Mauritius"
        },
        {
            "id": "montenegro",
            "typeId": "country",
            "alpha2code": "ME",
            "alpha3code": "MNE",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    19.395,
                    42.7035
                ]
            },
            "population": 628066,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 313,
                "deaths": 5,
                "recovered": 90
            },
            "name": "Montenegro"
        },
        {
            "id": "sri-lanka",
            "typeId": "country",
            "alpha2code": "LK",
            "alpha3code": "LKA",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    80.701,
                    7.8775
                ]
            },
            "population": 21413249,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 309,
                "deaths": 7,
                "recovered": 100
            },
            "name": "Sri Lanka"
        },
        {
            "id": "guatemala",
            "typeId": "country",
            "alpha2code": "GT",
            "alpha3code": "GTM",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -90.228,
                    15.7815
                ]
            },
            "population": 17915568,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 294,
                "deaths": 7,
                "recovered": 24
            },
            "name": "Guatemala"
        },
        {
            "id": "venezuela",
            "typeId": "country",
            "alpha2code": "VE",
            "alpha3code": "VEN",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -66.574,
                    8.161
                ]
            },
            "population": 28435940,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 285,
                "deaths": 10,
                "recovered": 117
            },
            "name": "Venezuela"
        },
        {
            "id": "kenya",
            "typeId": "country",
            "alpha2code": "KE",
            "alpha3code": "KEN",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    37.9085,
                    -0.058
                ]
            },
            "population": 53771296,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 281,
                "deaths": 14,
                "recovered": 69
            },
            "name": "Kenya"
        },
        {
            "id": "vietnam",
            "typeId": "country",
            "alpha2code": "VN",
            "alpha3code": "VNM",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    108.2365,
                    15.6425
                ]
            },
            "population": 97338579,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-17",
                "cases": 268,
                "deaths": 0,
                "recovered": 198
            },
            "name": "Vietnam"
        },
        {
            "id": "tanzania",
            "typeId": "country",
            "alpha2code": "TZ",
            "alpha3code": "TZA",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    35.0205,
                    -6.3735
                ]
            },
            "population": 59734218,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 254,
                "deaths": 10,
                "recovered": 11
            },
            "name": "Tanzania"
        },
        {
            "id": "mali",
            "typeId": "country",
            "alpha2code": "ML",
            "alpha3code": "MLI",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -3.9865,
                    17.5745
                ]
            },
            "population": 20250833,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 246,
                "deaths": 14,
                "recovered": 56
            },
            "name": "Mali"
        },
        {
            "id": "somalia",
            "typeId": "country",
            "alpha2code": "SO",
            "alpha3code": "SOM",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    46.2015,
                    5.1605
                ]
            },
            "population": 15893222,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 237,
                "deaths": 8,
                "recovered": 4
            },
            "name": "Somalia"
        },
        {
            "id": "el-salvador",
            "typeId": "country",
            "alpha2code": "SV",
            "alpha3code": "SLV",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -88.91,
                    13.8045
                ]
            },
            "population": 6486205,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 225,
                "deaths": 7,
                "recovered": 48
            },
            "name": "El Salvador"
        },
        {
            "id": "jamaica",
            "typeId": "country",
            "alpha2code": "JM",
            "alpha3code": "JAM",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -77.1705,
                    17.7735
                ]
            },
            "population": 2961167,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 223,
                "deaths": 6,
                "recovered": 27
            },
            "name": "Jamaica"
        },
        {
            "id": "niger",
            "typeId": "country",
            "alpha2code": "NE",
            "alpha3code": "NER",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    8.6775,
                    9.0785
                ]
            },
            "population": 24206644,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-06",
                "cases": 214,
                "deaths": 4,
                "recovered": 25
            },
            "name": "Niger"
        },
        {
            "id": "paraguay",
            "typeId": "country",
            "alpha2code": "PY",
            "alpha3code": "PRY",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -58.4525,
                    -23.447
                ]
            },
            "population": 7132538,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 208,
                "deaths": 8,
                "recovered": 53
            },
            "name": "Paraguay"
        },
        {
            "id": "faroe-islands",
            "typeId": "country",
            "alpha2code": "FO",
            "alpha3code": "FRO",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -6.96910559799991,
                    62.0826887065001
                ]
            },
            "population": 48863,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-05",
                "cases": 181,
                "deaths": 0,
                "recovered": 93
            },
            "name": "Faroe Islands"
        },
        {
            "id": "republic-of-the-congo",
            "typeId": "country",
            "alpha2code": "CG",
            "alpha3code": "COG",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    14.885,
                    -0.666
                ]
            },
            "population": 5244359,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 160,
                "deaths": 6,
                "recovered": 16
            },
            "name": "Republic of the Congo"
        },
        {
            "id": "rwanda",
            "typeId": "country",
            "alpha2code": "RW",
            "alpha3code": "RWA",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    29.8805,
                    -1.947
                ]
            },
            "population": 12952218,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 147,
                "deaths": 0,
                "recovered": 80
            },
            "name": "Rwanda"
        },
        {
            "id": "brunei-darussalam",
            "typeId": "country",
            "alpha2code": "BN",
            "alpha3code": "BRN",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    114.7195,
                    4.5245
                ]
            },
            "population": 428697,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 138,
                "deaths": 1,
                "recovered": 116
            },
            "name": "Brunei Darussalam"
        },
        {
            "id": "cambodia",
            "typeId": "country",
            "alpha2code": "KH",
            "alpha3code": "KHM",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    104.981,
                    12.3075
                ]
            },
            "population": 16718965,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-14",
                "cases": 122,
                "deaths": 0,
                "recovered": 91
            },
            "name": "Cambodia"
        },
        {
            "id": "madagascar",
            "typeId": "country",
            "alpha2code": "MG",
            "alpha3code": "MDG",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    46.84,
                    -18.7785
                ]
            },
            "population": 27691018,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 121,
                "deaths": 0,
                "recovered": 44
            },
            "name": "Madagascar"
        },
        {
            "id": "gabon",
            "typeId": "country",
            "alpha2code": "GA",
            "alpha3code": "GAB",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    11.55,
                    -0.812
                ]
            },
            "population": 2225734,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 120,
                "deaths": 1,
                "recovered": 7
            },
            "name": "Gabon"
        },
        {
            "id": "myanmar",
            "typeId": "country",
            "alpha2code": "MM",
            "alpha3code": "MMR",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    96.669,
                    19.0725
                ]
            },
            "population": 54409800,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 119,
                "deaths": 5,
                "recovered": 7
            },
            "name": "Myanmar"
        },
        {
            "id": "ethiopia",
            "typeId": "country",
            "alpha2code": "ET",
            "alpha3code": "ETH",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    40.49,
                    9.1455
                ]
            },
            "population": 114963588,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 114,
                "deaths": 3,
                "recovered": 16
            },
            "name": "Ethiopia"
        },
        {
            "id": "trinidad-and-tobago",
            "typeId": "country",
            "alpha2code": "TT",
            "alpha3code": "TTO",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -61.213,
                    10.703
                ]
            },
            "population": 1399488,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-17",
                "cases": 114,
                "deaths": 8,
                "recovered": 20
            },
            "name": "Trinidad and Tobago"
        },
        {
            "id": "guam",
            "typeId": "country",
            "alpha2code": "GU",
            "alpha3code": "GUM",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    144.7905,
                    13.445
                ]
            },
            "population": 168775,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-06",
                "cases": 112,
                "deaths": 4,
                "recovered": 0
            },
            "name": "Guam"
        },
        {
            "id": "sudan",
            "typeId": "country",
            "alpha2code": "SD",
            "alpha3code": "SDN",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    30.33,
                    15.413
                ]
            },
            "population": 43849260,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 107,
                "deaths": 12,
                "recovered": 8
            },
            "name": "Sudan"
        },
        {
            "id": "liberia",
            "typeId": "country",
            "alpha2code": "LR",
            "alpha3code": "LBR",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -9.4395,
                    6.4525
                ]
            },
            "population": 5057681,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 99,
                "deaths": 8,
                "recovered": 7
            },
            "name": "Liberia"
        },
        {
            "id": "monaco",
            "typeId": "country",
            "alpha2code": "MC",
            "alpha3code": "MCO",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    7.429,
                    43.737
                ]
            },
            "population": 39242,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 94,
                "deaths": 3,
                "recovered": 23
            },
            "name": "Monaco"
        },
        {
            "id": "togo",
            "typeId": "country",
            "alpha2code": "TG",
            "alpha3code": "TGO",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    0.828,
                    8.626
                ]
            },
            "population": 8278724,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 84,
                "deaths": 6,
                "recovered": 53
            },
            "name": "Togo"
        },
        {
            "id": "maldives",
            "typeId": "country",
            "alpha2code": "MV",
            "alpha3code": "MDV",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    73.2025,
                    3.206
                ]
            },
            "population": 540544,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 82,
                "deaths": 0,
                "recovered": 16
            },
            "name": "Maldives"
        },
        {
            "id": "liechtenstein",
            "typeId": "country",
            "alpha2code": "LI",
            "alpha3code": "LIE",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    9.554,
                    47.16
                ]
            },
            "population": 38128,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 81,
                "deaths": 1,
                "recovered": 55
            },
            "name": "Liechtenstein"
        },
        {
            "id": "equatorial-guinea",
            "typeId": "country",
            "alpha2code": "GQ",
            "alpha3code": "GNQ",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    8.4885,
                    1.1505
                ]
            },
            "population": 1402985,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 79,
                "deaths": 0,
                "recovered": 7
            },
            "name": "Equatorial Guinea"
        },
        {
            "id": "barbados",
            "typeId": "country",
            "alpha2code": "BB",
            "alpha3code": "BRB",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -59.5355,
                    13.1935
                ]
            },
            "population": 287375,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-17",
                "cases": 75,
                "deaths": 5,
                "recovered": 15
            },
            "name": "Barbados"
        },
        {
            "id": "zambia",
            "typeId": "country",
            "alpha2code": "ZM",
            "alpha3code": "ZMB",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    27.8365,
                    -13.1855
                ]
            },
            "population": 18383955,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 70,
                "deaths": 3,
                "recovered": 35
            },
            "name": "Zambia"
        },
        {
            "id": "cabo-verde",
            "typeId": "country",
            "alpha2code": "CV",
            "alpha3code": "CPV",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -24.0135,
                    15.999
                ]
            },
            "population": 555987,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 67,
                "deaths": 1,
                "recovered": 1
            },
            "name": "Cabo Verde"
        },
        {
            "id": "guyana",
            "typeId": "country",
            "alpha2code": "GY",
            "alpha3code": "GUY",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -58.939,
                    4.851
                ]
            },
            "population": 786552,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 66,
                "deaths": 7,
                "recovered": 9
            },
            "name": "Guyana"
        },
        {
            "id": "the-bahamas",
            "typeId": "country",
            "alpha2code": "BS",
            "alpha3code": "BHS",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -76.5975,
                    24.0925
                ]
            },
            "population": 393244,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 60,
                "deaths": 9,
                "recovered": 11
            },
            "name": "The Bahamas"
        },
        {
            "id": "haiti",
            "typeId": "country",
            "alpha2code": "HT",
            "alpha3code": "HTI",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -73.3285,
                    19.0565
                ]
            },
            "population": 11402528,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 57,
                "deaths": 3,
                "recovered": 3
            },
            "name": "Haiti"
        },
        {
            "id": "guadeloupe",
            "typeId": "country",
            "alpha2code": "GP",
            "alpha3code": "GLP",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -61.551,
                    16.265
                ]
            },
            "population": 400124,
            "parentId": "earth",
            "latestData": {
                "date": "2020-03-23",
                "cases": 56,
                "deaths": 0,
                "recovered": 0
            },
            "name": "Guadeloupe"
        },
        {
            "id": "uganda",
            "typeId": "country",
            "alpha2code": "UG",
            "alpha3code": "UGA",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    32.2865,
                    1.376
                ]
            },
            "population": 45741007,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 56,
                "deaths": 0,
                "recovered": 38
            },
            "name": "Uganda"
        },
        {
            "id": "benin",
            "typeId": "country",
            "alpha2code": "BJ",
            "alpha3code": "BEN",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    2.311,
                    9.321
                ]
            },
            "population": 12123200,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 54,
                "deaths": 1,
                "recovered": 27
            },
            "name": "Benin"
        },
        {
            "id": "libya",
            "typeId": "country",
            "alpha2code": "LY",
            "alpha3code": "LBY",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    17.2685,
                    26.334
                ]
            },
            "population": 6871292,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 51,
                "deaths": 1,
                "recovered": 15
            },
            "name": "Libya"
        },
        {
            "id": "guinea-bissau",
            "typeId": "country",
            "alpha2code": "GW",
            "alpha3code": "GNB",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -15.1765,
                    11.7755
                ]
            },
            "population": 1968001,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 50,
                "deaths": 0,
                "recovered": 3
            },
            "name": "Guinea-Bissau"
        },
        {
            "id": "macao",
            "typeId": "country",
            "alpha2code": "MO",
            "alpha3code": "MAC",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    113.5605,
                    22.1645
                ]
            },
            "population": 649335,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-05",
                "cases": 43,
                "deaths": 0,
                "recovered": 10
            },
            "name": "Macao"
        },
        {
            "id": "sierra-leone",
            "typeId": "country",
            "alpha2code": "SL",
            "alpha3code": "SLE",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -11.787,
                    8.461
                ]
            },
            "population": 7976983,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 43,
                "deaths": 0,
                "recovered": 6
            },
            "name": "Sierra Leone"
        },
        {
            "id": "eritrea",
            "typeId": "country",
            "alpha2code": "ER",
            "alpha3code": "ERI",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    39.785,
                    15.192
                ]
            },
            "population": 3546421,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 39,
                "deaths": 0,
                "recovered": 3
            },
            "name": "Eritrea"
        },
        {
            "id": "syrian-arab-republic",
            "typeId": "country",
            "alpha2code": "SY",
            "alpha3code": "SYR",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    39.0535,
                    34.7985
                ]
            },
            "population": 17070135,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 39,
                "deaths": 3,
                "recovered": 5
            },
            "name": "Syrian Arab Republic"
        },
        {
            "id": "mozambique",
            "typeId": "country",
            "alpha2code": "MZ",
            "alpha3code": "MOZ",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    35.5255,
                    -18.671
                ]
            },
            "population": 31255435,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 39,
                "deaths": 0,
                "recovered": 8
            },
            "name": "Mozambique"
        },
        {
            "id": "martinique",
            "typeId": "country",
            "alpha2code": "MQ",
            "alpha3code": "MTQ",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -61.0242,
                    14.6415
                ]
            },
            "population": 375265,
            "parentId": "earth",
            "latestData": {
                "date": "2020-03-22",
                "cases": 37,
                "deaths": 1,
                "recovered": 0
            },
            "name": "Martinique"
        },
        {
            "id": "mongolia",
            "typeId": "country",
            "alpha2code": "MN",
            "alpha3code": "MNG",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    103.832,
                    46.8655
                ]
            },
            "population": 3278290,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 34,
                "deaths": 0,
                "recovered": 8
            },
            "name": "Mongolia"
        },
        {
            "id": "chad",
            "typeId": "country",
            "alpha2code": "TD",
            "alpha3code": "TCD",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    18.7365,
                    15.4695
                ]
            },
            "population": 16425864,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 33,
                "deaths": 0,
                "recovered": 8
            },
            "name": "Chad"
        },
        {
            "id": "nepal",
            "typeId": "country",
            "alpha2code": "NP",
            "alpha3code": "NPL",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    84.13,
                    28.397
                ]
            },
            "population": 29136808,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 32,
                "deaths": 0,
                "recovered": 4
            },
            "name": "Nepal"
        },
        {
            "id": "zimbabwe",
            "typeId": "country",
            "alpha2code": "ZW",
            "alpha3code": "ZWE",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    29.1505,
                    -19.017
                ]
            },
            "population": 14862924,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 25,
                "deaths": 3,
                "recovered": 2
            },
            "name": "Zimbabwe"
        },
        {
            "id": "angola",
            "typeId": "country",
            "alpha2code": "AO",
            "alpha3code": "AGO",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    17.8785,
                    -11.2135
                ]
            },
            "population": 32866272,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 24,
                "deaths": 2,
                "recovered": 6
            },
            "name": "Angola"
        },
        {
            "id": "eswatini",
            "typeId": "country",
            "alpha2code": "SZ",
            "alpha3code": "SWZ",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    31.463,
                    -26.5185
                ]
            },
            "population": 1160164,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 24,
                "deaths": 1,
                "recovered": 8
            },
            "name": "Eswatini"
        },
        {
            "id": "antigua-and-barbuda",
            "typeId": "country",
            "alpha2code": "AG",
            "alpha3code": "ATG",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -62.0095,
                    17.333
                ]
            },
            "population": 97929,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-14",
                "cases": 23,
                "deaths": 2,
                "recovered": 3
            },
            "name": "Antigua and Barbuda"
        },
        {
            "id": "timor-leste",
            "typeId": "country",
            "alpha2code": "TL",
            "alpha3code": "TLS",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    125.687,
                    -8.818
                ]
            },
            "population": 1318445,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 23,
                "deaths": 0,
                "recovered": 1
            },
            "name": "Timor-Leste"
        },
        {
            "id": "botswana",
            "typeId": "country",
            "alpha2code": "BW",
            "alpha3code": "BWA",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    24.687,
                    -22.342
                ]
            },
            "population": 2351627,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 20,
                "deaths": 1,
                "recovered": 1
            },
            "name": "Botswana"
        },
        {
            "id": "laos",
            "typeId": "country",
            "alpha2code": "LA",
            "alpha3code": "LAO",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    103.86,
                    18.2095
                ]
            },
            "population": 7275560,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-14",
                "cases": 19,
                "deaths": 0,
                "recovered": 0
            },
            "name": "Laos"
        },
        {
            "id": "belize",
            "typeId": "country",
            "alpha2code": "BZ",
            "alpha3code": "BLZ",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -88.3575,
                    17.192
                ]
            },
            "population": 397628,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-14",
                "cases": 18,
                "deaths": 2,
                "recovered": 2
            },
            "name": "Belize"
        },
        {
            "id": "french-guiana",
            "typeId": "country",
            "alpha2code": "GF",
            "alpha3code": "GUF",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -53.1258,
                    3.9339
                ]
            },
            "population": 298682,
            "parentId": "earth",
            "latestData": {
                "date": "2020-03-23",
                "cases": 18,
                "deaths": 0,
                "recovered": 6
            },
            "name": "French Guiana"
        },
        {
            "id": "fiji",
            "typeId": "country",
            "alpha2code": "FJ",
            "alpha3code": "FJI",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    0,
                    -16.7555
                ]
            },
            "population": 896445,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 18,
                "deaths": 0,
                "recovered": 3
            },
            "name": "Fiji"
        },
        {
            "id": "malawi",
            "typeId": "country",
            "alpha2code": "MW",
            "alpha3code": "MWI",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    34.3135691730001,
                    -13.2659850054999
                ]
            },
            "population": 19129952,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 17,
                "deaths": 2,
                "recovered": 3
            },
            "name": "Malawi"
        },
        {
            "id": "namibia",
            "typeId": "country",
            "alpha2code": "NA",
            "alpha3code": "NAM",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    18.4995,
                    -22.9665
                ]
            },
            "population": 2540905,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-05",
                "cases": 16,
                "deaths": 0,
                "recovered": 3
            },
            "name": "Namibia"
        },
        {
            "id": "dominica",
            "typeId": "country",
            "alpha2code": "DM",
            "alpha3code": "DMA",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -61.3605,
                    15.4245
                ]
            },
            "population": 71986,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-10",
                "cases": 16,
                "deaths": 0,
                "recovered": 5
            },
            "name": "Dominica"
        },
        {
            "id": "saint-kitts-and-nevis",
            "typeId": "country",
            "alpha2code": "KN",
            "alpha3code": "KNA",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -62.7045,
                    17.2565
                ]
            },
            "population": 52441,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 15,
                "deaths": 0,
                "recovered": 0
            },
            "name": "Saint Kitts and Nevis"
        },
        {
            "id": "saint-lucia",
            "typeId": "country",
            "alpha2code": "LC",
            "alpha3code": "LCA",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -60.9765,
                    13.9095
                ]
            },
            "population": 183627,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-14",
                "cases": 15,
                "deaths": 0,
                "recovered": 4
            },
            "name": "Saint Lucia"
        },
        {
            "id": "grenada",
            "typeId": "country",
            "alpha2code": "GD",
            "alpha3code": "GRD",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -61.5915,
                    12.258
                ]
            },
            "population": 112523,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-14",
                "cases": 14,
                "deaths": 0,
                "recovered": 0
            },
            "name": "Grenada"
        },
        {
            "id": "central-african-republic",
            "typeId": "country",
            "alpha2code": "CF",
            "alpha3code": "CAF",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    20.941,
                    6.603
                ]
            },
            "population": 4829767,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-17",
                "cases": 12,
                "deaths": 0,
                "recovered": 4
            },
            "name": "Central African Republic"
        },
        {
            "id": "saint-vincent-and-the-grenadines",
            "typeId": "country",
            "alpha2code": "VC",
            "alpha3code": "VCT",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -61.284,
                    12.957
                ]
            },
            "population": 110211,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-10",
                "cases": 12,
                "deaths": 0,
                "recovered": 1
            },
            "name": "Saint Vincent and the Grenadines"
        },
        {
            "id": "mayotte",
            "typeId": "country",
            "alpha2code": "YT",
            "alpha3code": "MYT",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    45.1662,
                    -12.8275
                ]
            },
            "population": 272815,
            "parentId": "earth",
            "latestData": {
                "date": "2020-03-23",
                "cases": 11,
                "deaths": 0,
                "recovered": 0
            },
            "name": "Mayotte"
        },
        {
            "id": "greenland",
            "typeId": "country",
            "alpha2code": "GL",
            "alpha3code": "GRL",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -42.3805,
                    71.7045
                ]
            },
            "population": 56770,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-06",
                "cases": 11,
                "deaths": 0,
                "recovered": 3
            },
            "name": "Greenland"
        },
        {
            "id": "seychelles",
            "typeId": "country",
            "alpha2code": "SC",
            "alpha3code": "SYC",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    51.2465,
                    -6.9705
                ]
            },
            "population": 98347,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-06",
                "cases": 11,
                "deaths": 0,
                "recovered": 0
            },
            "name": "Seychelles"
        },
        {
            "id": "the-gambia",
            "typeId": "country",
            "alpha2code": "GM",
            "alpha3code": "GMB",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -15.311,
                    13.444
                ]
            },
            "population": 2416668,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 10,
                "deaths": 1,
                "recovered": 2
            },
            "name": "The Gambia"
        },
        {
            "id": "nicaragua",
            "typeId": "country",
            "alpha2code": "NI",
            "alpha3code": "NIC",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -85.2125,
                    12.869
                ]
            },
            "population": 6624554,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 10,
                "deaths": 2,
                "recovered": 6
            },
            "name": "Nicaragua"
        },
        {
            "id": "suriname",
            "typeId": "country",
            "alpha2code": "SR",
            "alpha3code": "SUR",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -56.023,
                    3.921
                ]
            },
            "population": 586632,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-01",
                "cases": 10,
                "deaths": 0,
                "recovered": 0
            },
            "name": "Suriname"
        },
        {
            "id": "vatican-city",
            "typeId": "country",
            "alpha2code": "VA",
            "alpha3code": "VAT",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    12.446,
                    41.902
                ]
            },
            "population": 801,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 9,
                "deaths": 0,
                "recovered": 2
            },
            "name": "Vatican City"
        },
        {
            "id": "papua-new-guinea",
            "typeId": "country",
            "alpha2code": "PG",
            "alpha3code": "PNG",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    150.166,
                    -6.202
                ]
            },
            "population": 8947024,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-17",
                "cases": 7,
                "deaths": 0,
                "recovered": 0
            },
            "name": "Papua New Guinea"
        },
        {
            "id": "mauritania",
            "typeId": "country",
            "alpha2code": "MR",
            "alpha3code": "MRT",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    -10.9505,
                    21.018
                ]
            },
            "population": 4649658,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-10",
                "cases": 7,
                "deaths": 1,
                "recovered": 2
            },
            "name": "Mauritania"
        },
        {
            "id": "western-sahara",
            "typeId": "country",
            "alpha2code": "EH",
            "alpha3code": "ESH",
            "population": 500000,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-14",
                "cases": 6,
                "deaths": 0,
                "recovered": 0
            },
            "name": "Western Sahara"
        },
        {
            "id": "bhutan",
            "typeId": "country",
            "alpha2code": "BT",
            "alpha3code": "BTN",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    90.4335,
                    27.4745
                ]
            },
            "population": 771608,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-21",
                "cases": 6,
                "deaths": 0,
                "recovered": 2
            },
            "name": "Bhutan"
        },
        {
            "id": "northern-mariana-islands",
            "typeId": "country",
            "alpha2code": "MP",
            "alpha3code": "MNP",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    145.469,
                    17.326
                ]
            },
            "population": 57559,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-06",
                "cases": 6,
                "deaths": 1,
                "recovered": 0
            },
            "name": "Northern Mariana Islands"
        },
        {
            "id": "burundi",
            "typeId": "country",
            "alpha2code": "BI",
            "alpha3code": "BDI",
            "dataSource": "https://github.com/CSSEGISandData/COVID-19",
            "location": {
                "type": "Point",
                "coordinates": [
                    29.9255,
                    -3.386
                ]
            },
            "population": 11890784,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-14",
                "cases": 5,
                "deaths": 1,
                "recovered": 1
            },
            "name": "Burundi"
        },
        {
            "id": "south-sudan",
            "typeId": "country",
            "alpha2code": "SS",
            "alpha3code": "SSD",
            "population": 11193725,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-14",
                "cases": 4,
                "deaths": 0,
                "recovered": 0
            },
            "name": "South Sudan"
        },
        {
            "id": "sao-tome-and-principe",
            "typeId": "country",
            "alpha2code": "ST",
            "alpha3code": "STP",
            "population": 211028,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-06",
                "cases": 4,
                "deaths": 0,
                "recovered": 0
            },
            "name": "Sao Tome and Principe"
        },
        {
            "id": "yemen",
            "typeId": "country",
            "alpha2code": "YE",
            "alpha3code": "YEM",
            "population": 29825964,
            "parentId": "earth",
            "latestData": {
                "date": "2020-04-10",
                "cases": 1,
                "deaths": 0,
                "recovered": 0
            },
            "name": "Yemen"
        }
    ]
}

class App extends React.Component {
  state = {
    data: [],
    countryData: date.data,
    totalConfirmed: 0,
    newConfirmed: 0,
    totalRecovered: 0,
    totalDeaths: 0,
    dataAdded: false,
    countries: []
  }

  componentDidMount() {
    axios.get(`https://api.covid19api.com/summary`)
      .then(res => {
        const data = res.data;
        this.setState({
          data: data,
          countries: data.Countries,
          totalConfirmed: data.Global.TotalConfirmed,
          newConfirmed: data.Global.NewConfirmed,
          totalRecovered: data.Global.TotalRecovered,
          totalDeaths: data.Global.TotalDeaths,
          dataAdded: true
        });
      }).catch(err => {
        console.log(err);
      })
      // creating own cors-anywhere
      // https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe

  //   axios.get(`https://cors-anywhere.herokuapp.com/https://api.coronatab.app/places?typeId=country`)
  //     .then(res => {
  //       const resData = res.data.data;
  //       this.setState({
  //         countryData: resData,
  //       });
  //     }).catch(err => {
  //       console.log(err);
  //     })
  }

  render() {
    const { countryData, countries, dataAdded, data, totalConfirmed, newConfirmed, totalRecovered, totalDeaths } = this.state;
    console.log(countryData);
    return (
      <div className="wrapper">
        <div className="navigation">
          <div className="logo">
            <img src={logo} alt="my project" />
          </div>
          <ul className="mainNav">
            <li className="active">
              <a>
                <div className="link-wrap">
                  <svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="m92.488 33.809c-1.7031 0.79297-2.7109 2.457-2.7422 4.1992-1.4922 0.48438-3.2266 0.98047-5.1016 1.3906-1.0352-3.5898-2.6406-6.9414-4.7109-9.9453 1.3047-0.86328 2.6367-1.5586 3.7656-2.0781 0.75781 0.82422 2.0156 1.0391 3.0352 0.44922 1.1797-0.67969 1.5859-2.1758 0.91406-3.3398-0.67188-1.1641-2.1719-1.5586-3.3516-0.87891-0.84375 0.48828-1.2852 1.3945-1.2227 2.3008-1.2695 0.54297-2.8984 1.1289-4.6602 1.5078-1.9766-2.457-4.2891-4.6328-6.8594-6.4648 1.1328-2.6289 2.4102-5.043 3.6016-7.0898-0.36719-0.097656-0.73047-0.22266-1.082-0.38672-0.79297-0.37891-1.4648-0.91406-2.0039-1.5469-1.2852 1.9805-2.8906 4.2227-4.7852 6.4336-2.7031-1.3867-5.6094-2.4297-8.6719-3.0586-0.11328-2.1406 0.13672-4.2617 0.43359-5.9062 1.1094-0.14844 2.0078-1.0547 2.1094-2.2266 0.11719-1.3555-0.875-2.5469-2.2148-2.6641-1.3398-0.11719-2.5234 0.88672-2.6367 2.2422-0.085938 0.97266 0.40625 1.8555 1.1836 2.3203-0.34375 1.6445-0.9375 3.7617-1.9258 5.7539-1.2812-0.14453-2.5859-0.22656-3.9062-0.22656-2.4648 0-4.8672 0.26562-7.1836 0.75781-1.0039-2.3633-1.7656-4.6797-2.3242-6.6719 1.7891-1.1875 2.582-3.5117 1.7695-5.625-0.93359-2.4414-3.6484-3.668-6.0625-2.7422-2.4141 0.92578-3.6133 3.6523-2.6758 6.0938 0.67187 1.7539 2.2617 2.875 4 3.0273 0.50391 2.0078 0.99219 4.4336 1.2695 7.043-3.2305 1.1133-6.2383 2.6953-8.9492 4.6641-1.3047-1.2539-2.4023-2.625-3.2305-3.7852 0.66406-0.89844 0.64062-2.1758-0.125-3.0625-0.89062-1.0273-2.4336-1.1484-3.4531-0.26953-1.0195 0.87891-1.1211 2.4258-0.23047 3.457 0.63672 0.73828 1.6133 1 2.4883 0.76953 0.80859 1.2031 1.7422 2.7812 2.457 4.543-2.2617 1.9297-4.2734 4.1406-5.9727 6.5898-3.1172-1.418-5.9648-3.0859-8.3047-4.6133-0.11328 0.36328-0.26172 0.71484-0.44531 1.0586-0.41406 0.76562-0.97656 1.4141-1.6445 1.9258 2.3398 1.6914 5.0469 3.875 7.5859 6.4727-1.1719 2.4648-2.0586 5.0859-2.6172 7.832-1.3672-0.039063-2.6602-0.19531-3.7461-0.37109-0.16797-1.1055-1.0898-1.9883-2.2656-2.0703-1.3555-0.09375-2.5312 0.91797-2.625 2.2617s0.93359 2.5039 2.2891 2.5977c0.97266 0.066407 1.8477-0.44141 2.3008-1.2266 1.082 0.20703 2.3633 0.51562 3.6836 0.97266-0.21094 1.543-0.32812 3.1133-0.32812 4.7109 0 1.7148 0.12891 3.3984 0.37109 5.043-2.8555 1.1875-5.707 2.0195-8.0938 2.5938-1.1172-1.8359-3.4102-2.7148-5.5508-1.9883-2.4766 0.83984-3.8086 3.5039-2.9805 5.9492 0.82812 2.4492 3.5078 3.75 5.9844 2.9141 1.7773-0.60156 2.9609-2.1484 3.1836-3.8789 2.375-0.49609 5.3203-0.94922 8.4492-1.0625 1.5 5.1719 4.1758 9.8438 7.7305 13.699-1.0391 1.7695-2.2383 3.3477-3.2812 4.582-1.2461-0.51172-2.7266-0.10547-3.5391 1.0547-0.9375 1.3438-0.62109 3.1797 0.70703 4.1094 1.3281 0.92578 3.1641 0.58984 4.1016-0.75 0.67187-0.96484 0.69531-2.1836 0.16797-3.1367 1.0352-1.1562 2.3867-2.5117 3.9648-3.7461 4.0938 3.7305 9.0898 6.4844 14.625 7.8984-0.0625 2.1719-0.25391 4.1992-0.48828 6.0039 0.33594-0.054688 0.67969-0.089844 1.0273-0.089844 0.3125 0 0.625 0.023438 0.9375 0.070313 0.75781 0.10938 1.457 0.35938 2.0977 0.70312 0.50781-1.7773 1.2188-3.7344 2.2109-5.7383 0.90234 0.070313 1.8086 0.11719 2.7266 0.11719 4.3789 0 8.5625-0.82812 12.414-2.3242 1.4414 1.4414 2.625 3.0664 3.4844 4.4062-0.71094 0.86328-0.75 2.1406-0.027344 3.0664 0.83594 1.0742 2.375 1.2734 3.4336 0.44531 1.0625-0.82812 1.2422-2.3672 0.40625-3.4414-0.60156-0.76953-1.5586-1.082-2.4492-0.89453-0.75391-1.2539-1.6172-2.8984-2.2461-4.7148 4.4297-2.1562 8.3242-5.2383 11.434-8.9922 1.7656 0.53125 3.4141 1.1094 4.8984 1.6797 0.035156-0.37891 0.10547-0.75391 0.21484-1.1289 0.24609-0.83203 0.66406-1.5859 1.2109-2.2227-1.1875-0.52344-2.4688-1.1289-3.793-1.8203 3.3867-5.3242 5.3594-11.637 5.3594-18.41 0-2-0.17969-3.957-0.50781-5.8633 1.8438-0.875 3.6289-1.5859 5.2148-2.1562 1.3086 1.7031 3.6836 2.3281 5.7344 1.375 2.3711-1.1016 3.4062-3.8945 2.3164-6.2383-1.1016-2.3359-3.9062-3.3398-6.2773-2.2383zm-27.871 21.59c-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67578 0.53906-1.6641 0.42578-2.207-0.25391zm-9.9805-7.6641c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207zm0.26562 10.168c-0.76953-0.96875-0.60547-2.375 0.35938-3.1445 0.96875-0.76953 2.375-0.60547 3.1445 0.35938 0.76953 0.96875 0.60547 2.375-0.35938 3.1445-0.96875 0.76953-2.3789 0.60938-3.1445-0.35938zm3.9492-14.301c-0.96875 0.76953-2.375 0.60547-3.1445-0.35937-0.76953-0.96875-0.60547-2.375 0.35938-3.1445 0.96875-0.76953 2.375-0.60547 3.1445 0.35938 0.76953 0.96875 0.60937 2.375-0.35938 3.1445zm-4.4336-8.7539c-1.4844-1.8672-1.1719-4.582 0.69531-6.0664 1.8672-1.4844 4.582-1.1719 6.0664 0.69531 1.4844 1.8672 1.1719 4.582-0.69531 6.0664s-4.582 1.1719-6.0664-0.69531zm16.062-3.4883c-0.625 0-1.1289-0.50391-1.1289-1.1289s0.50391-1.1289 1.1289-1.1289 1.1289 0.50391 1.1289 1.1289-0.50781 1.1289-1.1289 1.1289zm-5.1562 16.375c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207zm-0.375-8.5508c0.48828-0.38672 1.1992-0.30469 1.5859 0.18359 0.38672 0.48828 0.30469 1.1992-0.18359 1.5859-0.48828 0.38672-1.1992 0.30469-1.5859-0.18359s-0.30469-1.1953 0.18359-1.5859zm8.7852 1.7695c-0.48828 0.38672-1.1992 0.30469-1.5859-0.18359-0.38672-0.48828-0.30469-1.1992 0.18359-1.5859 0.48828-0.38672 1.1992-0.30469 1.5859 0.18359 0.38672 0.48828 0.30469 1.1992-0.18359 1.5859zm1.3789-7.457c-0.75781 0-1.3711-0.61328-1.3711-1.3711s0.61328-1.3711 1.3711-1.3711c0.75781 0 1.3711 0.61328 1.3711 1.3711s-0.61328 1.3711-1.3711 1.3711zm2.375 6.7383c-0.46875-0.59375-0.37109-1.4531 0.22266-1.9258 0.59375-0.46875 1.4531-0.37109 1.9258 0.22266 0.46875 0.59375 0.37109 1.4531-0.22266 1.9258-0.58984 0.46875-1.4531 0.37109-1.9258-0.22266zm-7.0078-15.809c0.625 0 1.1289 0.50391 1.1289 1.1289s-0.50391 1.1289-1.1289 1.1289-1.1289-0.50391-1.1289-1.1289 0.50391-1.1289 1.1289-1.1289zm-10.723-4.3945c0 0.75781-0.61328 1.3711-1.3711 1.3711-0.75781 0-1.3711-0.61328-1.3711-1.3711s0.61328-1.3711 1.3711-1.3711c0.75781 0 1.3711 0.61719 1.3711 1.3711zm-6.0078-3.0234c0.625 0 1.1289 0.50391 1.1289 1.1289s-0.50391 1.1289-1.1289 1.1289-1.1289-0.50391-1.1289-1.1289c0-0.62109 0.50781-1.1289 1.1289-1.1289zm-3.1797 44.281c-1.8672 1.4844-4.582 1.1719-6.0664-0.69531s-1.1719-4.582 0.69531-6.0664c1.8672-1.4844 4.582-1.1719 6.0664 0.69531 1.4805 1.8672 1.168 4.582-0.69531 6.0664zm-9.3164-41.379c0-0.86719 0.70312-1.5703 1.5703-1.5703 0.86719 0 1.5703 0.70312 1.5703 1.5703 0 0.86719-0.70312 1.5703-1.5703 1.5703-0.86719 0.003906-1.5703-0.69922-1.5703-1.5703zm2.2383 7.0156c0-1.2344 1-2.2383 2.2383-2.2383 1.2344 0 2.2383 1 2.2383 2.2383 0 1.2344-1 2.2383-2.2383 2.2383s-2.2383-1.0039-2.2383-2.2383zm7.4961 18.461c0 1.2344-1 2.2383-2.2383 2.2383-1.2344 0-2.2383-1-2.2383-2.2383 0-1.2344 1-2.2383 2.2383-2.2383s2.2383 1.0039 2.2383 2.2383zm-5.1602-4.9297c-0.59375 0.46875-1.4531 0.37109-1.9258-0.22266-0.46875-0.59375-0.37109-1.4531 0.22266-1.9258 0.59375-0.46875 1.4531-0.37109 1.9258 0.22266 0.46875 0.59375 0.37109 1.4531-0.22266 1.9258zm3.5273-21.512c0.86719 0 1.5703 0.70313 1.5703 1.5703s-0.70312 1.5703-1.5703 1.5703c-0.86719 0-1.5703-0.70313-1.5703-1.5703s0.70312-1.5703 1.5703-1.5703zm-10.277 3.3867c0.86719 0 1.5703 0.70312 1.5703 1.5703 0 0.86719-0.70313 1.5703-1.5703 1.5703s-1.5703-0.70312-1.5703-1.5703c0-0.86719 0.70313-1.5703 1.5703-1.5703zm-6.9766 5.9453c0.38672 0.48828 0.30469 1.1992-0.18359 1.5859s-1.1992 0.30469-1.5859-0.18359c-0.38672-0.48828-0.30469-1.1992 0.18359-1.5859 0.48828-0.38281 1.1992-0.30469 1.5859 0.18359zm-4.3242 31.094c0.96875-0.76953 2.375-0.60547 3.1445 0.35938 0.76953 0.96875 0.60547 2.375-0.35938 3.1445-0.96875 0.76953-2.375 0.60547-3.1445-0.35938-0.76953-0.96875-0.60547-2.375 0.35938-3.1445zm3.5078-6.1797c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207zm2.4102-2.9961c-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207zm-0.74609-10.828c0.38672 0.48828 0.30469 1.1992-0.18359 1.5859s-1.1992 0.30469-1.5859-0.18359c-0.38672-0.48828-0.30469-1.1992 0.18359-1.5859 0.48828-0.38672 1.1992-0.30469 1.5859 0.18359zm-5.8047-5.3086c0 0.625-0.50391 1.1289-1.1289 1.1289s-1.1289-0.50391-1.1289-1.1289 0.50391-1.1289 1.1289-1.1289 1.1289 0.50781 1.1289 1.1289zm-4.1406 16.137c-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207zm14.227-6.0469c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.54297-0.67969-0.42578-1.668 0.25391-2.207zm0.36719 9.8945c-0.76953-0.96875-0.60547-2.375 0.35938-3.1445 0.96875-0.76953 2.375-0.60547 3.1445 0.35937 0.76953 0.96875 0.60547 2.375-0.35937 3.1445-0.96875 0.76953-2.375 0.60938-3.1445-0.35938zm18.738 14.508c-1.4844-1.8672-1.1719-4.582 0.69531-6.0664s4.582-1.1719 6.0664 0.69531c1.4844 1.8672 1.1719 4.582-0.69531 6.0664-1.8672 1.4844-4.582 1.1719-6.0664-0.69531zm5.6211 10.801c-0.85156-0.16797-1.4062-0.99219-1.2383-1.8477 0.16797-0.85156 0.99219-1.4062 1.8477-1.2383 0.85156 0.16797 1.4062 0.99219 1.2383 1.8477-0.17188 0.85156-0.99609 1.4062-1.8477 1.2383zm11.332-6.375c-0.14453 0.74219-0.86719 1.2266-1.6094 1.082-0.74219-0.14453-1.2266-0.86719-1.082-1.6094 0.14453-0.74219 0.86719-1.2266 1.6094-1.082 0.74609 0.14453 1.2305 0.86719 1.082 1.6094zm-4.3438-3.8125c-0.12109 0.61328-0.71484 1.0117-1.3242 0.89063-0.61328-0.12109-1.0117-0.71484-0.89062-1.3242 0.12109-0.61328 0.71484-1.0117 1.3242-0.89062 0.61328 0.11719 1.0117 0.71094 0.89062 1.3242zm7.1797-2.7383c-0.57422 0.49219-1.4414 0.42188-1.9336-0.15625-0.49219-0.57422-0.42188-1.4414 0.15625-1.9336 0.57422-0.49219 1.4414-0.42188 1.9336 0.15625 0.48828 0.57422 0.41797 1.4414-0.15625 1.9336zm-0.0625-6.25c0.47266-0.40625 1.1875-0.34766 1.5898 0.12891 0.40234 0.47266 0.34766 1.1875-0.12891 1.5898-0.47266 0.40625-1.1875 0.34766-1.5898-0.12891s-0.34375-1.1875 0.12891-1.5898zm6.4336-4.0938c-0.47266 0.40625-1.1875 0.34766-1.5898-0.12891-0.40234-0.47266-0.34766-1.1875 0.12891-1.5898 0.47266-0.40625 1.1875-0.34766 1.5898 0.12891 0.40625 0.47266 0.34766 1.1875-0.12891 1.5898zm-5.1016-6.9961c0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67578-0.53906 1.668-0.42578 2.207 0.25391z"/>
                    <path d="m74.574 12.426c0.66406 0.31641 1.375 0.47656 2.1055 0.47656 1.9102 0 3.6836-1.125 4.5156-2.8672 1.1914-2.4922 0.15625-5.4766-2.3047-6.6484-0.66406-0.31641-1.375-0.47656-2.1055-0.47656-1.9102 0-3.6836 1.125-4.5156 2.8672-1.1914 2.4883-0.15625 5.4727 2.3047 6.6484z"/>
                    <path d="m84.762 75.477c0.64453 1.1641 1.707 2.0117 2.9922 2.3867 0.46484 0.13672 0.94531 0.20703 1.4258 0.20703 2.1953 0 4.1602-1.457 4.7695-3.543 0.76562-2.6172-0.76562-5.3789-3.418-6.1523-0.46484-0.13672-0.94531-0.20703-1.4258-0.20703-2.1953 0-4.1602 1.457-4.7695 3.543-0.37109 1.2695-0.21875 2.6055 0.42578 3.7656z"/>
                    <path d="m44.453 89.348c-0.25391-0.039062-0.51172-0.054687-0.76562-0.054687-2.6055 0-4.8594 1.9727-5.2461 4.5859-0.42969 2.9219 1.5703 5.6445 4.4531 6.0664 0.25391 0.039063 0.51172 0.054688 0.76562 0.054688 2.6055 0 4.8594-1.9727 5.2461-4.5859 0.42969-2.9219-1.5664-5.6445-4.4531-6.0664z"/>
                    <path d="m6.8984 27.242c0.73828 0.39844 1.5664 0.60937 2.3984 0.60937 1.8281 0 3.5-0.98828 4.3594-2.582 0.62891-1.1602 0.75781-2.5 0.37109-3.7695-0.38672-1.2734-1.25-2.3242-2.4297-2.9609-0.73828-0.39844-1.5664-0.60937-2.3984-0.60937-1.8281 0-3.5 0.98828-4.3594 2.582-1.293 2.3984-0.37109 5.418 2.0586 6.7305z"/>
                  </svg>
                  <span className="text">Overview</span>
                </div>
              </a>
            </li>
            <li>
              <a>
                <div className="link-wrap">
                  <svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="m92.488 33.809c-1.7031 0.79297-2.7109 2.457-2.7422 4.1992-1.4922 0.48438-3.2266 0.98047-5.1016 1.3906-1.0352-3.5898-2.6406-6.9414-4.7109-9.9453 1.3047-0.86328 2.6367-1.5586 3.7656-2.0781 0.75781 0.82422 2.0156 1.0391 3.0352 0.44922 1.1797-0.67969 1.5859-2.1758 0.91406-3.3398-0.67188-1.1641-2.1719-1.5586-3.3516-0.87891-0.84375 0.48828-1.2852 1.3945-1.2227 2.3008-1.2695 0.54297-2.8984 1.1289-4.6602 1.5078-1.9766-2.457-4.2891-4.6328-6.8594-6.4648 1.1328-2.6289 2.4102-5.043 3.6016-7.0898-0.36719-0.097656-0.73047-0.22266-1.082-0.38672-0.79297-0.37891-1.4648-0.91406-2.0039-1.5469-1.2852 1.9805-2.8906 4.2227-4.7852 6.4336-2.7031-1.3867-5.6094-2.4297-8.6719-3.0586-0.11328-2.1406 0.13672-4.2617 0.43359-5.9062 1.1094-0.14844 2.0078-1.0547 2.1094-2.2266 0.11719-1.3555-0.875-2.5469-2.2148-2.6641-1.3398-0.11719-2.5234 0.88672-2.6367 2.2422-0.085938 0.97266 0.40625 1.8555 1.1836 2.3203-0.34375 1.6445-0.9375 3.7617-1.9258 5.7539-1.2812-0.14453-2.5859-0.22656-3.9062-0.22656-2.4648 0-4.8672 0.26562-7.1836 0.75781-1.0039-2.3633-1.7656-4.6797-2.3242-6.6719 1.7891-1.1875 2.582-3.5117 1.7695-5.625-0.93359-2.4414-3.6484-3.668-6.0625-2.7422-2.4141 0.92578-3.6133 3.6523-2.6758 6.0938 0.67187 1.7539 2.2617 2.875 4 3.0273 0.50391 2.0078 0.99219 4.4336 1.2695 7.043-3.2305 1.1133-6.2383 2.6953-8.9492 4.6641-1.3047-1.2539-2.4023-2.625-3.2305-3.7852 0.66406-0.89844 0.64062-2.1758-0.125-3.0625-0.89062-1.0273-2.4336-1.1484-3.4531-0.26953-1.0195 0.87891-1.1211 2.4258-0.23047 3.457 0.63672 0.73828 1.6133 1 2.4883 0.76953 0.80859 1.2031 1.7422 2.7812 2.457 4.543-2.2617 1.9297-4.2734 4.1406-5.9727 6.5898-3.1172-1.418-5.9648-3.0859-8.3047-4.6133-0.11328 0.36328-0.26172 0.71484-0.44531 1.0586-0.41406 0.76562-0.97656 1.4141-1.6445 1.9258 2.3398 1.6914 5.0469 3.875 7.5859 6.4727-1.1719 2.4648-2.0586 5.0859-2.6172 7.832-1.3672-0.039063-2.6602-0.19531-3.7461-0.37109-0.16797-1.1055-1.0898-1.9883-2.2656-2.0703-1.3555-0.09375-2.5312 0.91797-2.625 2.2617s0.93359 2.5039 2.2891 2.5977c0.97266 0.066407 1.8477-0.44141 2.3008-1.2266 1.082 0.20703 2.3633 0.51562 3.6836 0.97266-0.21094 1.543-0.32812 3.1133-0.32812 4.7109 0 1.7148 0.12891 3.3984 0.37109 5.043-2.8555 1.1875-5.707 2.0195-8.0938 2.5938-1.1172-1.8359-3.4102-2.7148-5.5508-1.9883-2.4766 0.83984-3.8086 3.5039-2.9805 5.9492 0.82812 2.4492 3.5078 3.75 5.9844 2.9141 1.7773-0.60156 2.9609-2.1484 3.1836-3.8789 2.375-0.49609 5.3203-0.94922 8.4492-1.0625 1.5 5.1719 4.1758 9.8438 7.7305 13.699-1.0391 1.7695-2.2383 3.3477-3.2812 4.582-1.2461-0.51172-2.7266-0.10547-3.5391 1.0547-0.9375 1.3438-0.62109 3.1797 0.70703 4.1094 1.3281 0.92578 3.1641 0.58984 4.1016-0.75 0.67187-0.96484 0.69531-2.1836 0.16797-3.1367 1.0352-1.1562 2.3867-2.5117 3.9648-3.7461 4.0938 3.7305 9.0898 6.4844 14.625 7.8984-0.0625 2.1719-0.25391 4.1992-0.48828 6.0039 0.33594-0.054688 0.67969-0.089844 1.0273-0.089844 0.3125 0 0.625 0.023438 0.9375 0.070313 0.75781 0.10938 1.457 0.35938 2.0977 0.70312 0.50781-1.7773 1.2188-3.7344 2.2109-5.7383 0.90234 0.070313 1.8086 0.11719 2.7266 0.11719 4.3789 0 8.5625-0.82812 12.414-2.3242 1.4414 1.4414 2.625 3.0664 3.4844 4.4062-0.71094 0.86328-0.75 2.1406-0.027344 3.0664 0.83594 1.0742 2.375 1.2734 3.4336 0.44531 1.0625-0.82812 1.2422-2.3672 0.40625-3.4414-0.60156-0.76953-1.5586-1.082-2.4492-0.89453-0.75391-1.2539-1.6172-2.8984-2.2461-4.7148 4.4297-2.1562 8.3242-5.2383 11.434-8.9922 1.7656 0.53125 3.4141 1.1094 4.8984 1.6797 0.035156-0.37891 0.10547-0.75391 0.21484-1.1289 0.24609-0.83203 0.66406-1.5859 1.2109-2.2227-1.1875-0.52344-2.4688-1.1289-3.793-1.8203 3.3867-5.3242 5.3594-11.637 5.3594-18.41 0-2-0.17969-3.957-0.50781-5.8633 1.8438-0.875 3.6289-1.5859 5.2148-2.1562 1.3086 1.7031 3.6836 2.3281 5.7344 1.375 2.3711-1.1016 3.4062-3.8945 2.3164-6.2383-1.1016-2.3359-3.9062-3.3398-6.2773-2.2383zm-27.871 21.59c-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67578 0.53906-1.6641 0.42578-2.207-0.25391zm-9.9805-7.6641c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207zm0.26562 10.168c-0.76953-0.96875-0.60547-2.375 0.35938-3.1445 0.96875-0.76953 2.375-0.60547 3.1445 0.35938 0.76953 0.96875 0.60547 2.375-0.35938 3.1445-0.96875 0.76953-2.3789 0.60938-3.1445-0.35938zm3.9492-14.301c-0.96875 0.76953-2.375 0.60547-3.1445-0.35937-0.76953-0.96875-0.60547-2.375 0.35938-3.1445 0.96875-0.76953 2.375-0.60547 3.1445 0.35938 0.76953 0.96875 0.60937 2.375-0.35938 3.1445zm-4.4336-8.7539c-1.4844-1.8672-1.1719-4.582 0.69531-6.0664 1.8672-1.4844 4.582-1.1719 6.0664 0.69531 1.4844 1.8672 1.1719 4.582-0.69531 6.0664s-4.582 1.1719-6.0664-0.69531zm16.062-3.4883c-0.625 0-1.1289-0.50391-1.1289-1.1289s0.50391-1.1289 1.1289-1.1289 1.1289 0.50391 1.1289 1.1289-0.50781 1.1289-1.1289 1.1289zm-5.1562 16.375c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207zm-0.375-8.5508c0.48828-0.38672 1.1992-0.30469 1.5859 0.18359 0.38672 0.48828 0.30469 1.1992-0.18359 1.5859-0.48828 0.38672-1.1992 0.30469-1.5859-0.18359s-0.30469-1.1953 0.18359-1.5859zm8.7852 1.7695c-0.48828 0.38672-1.1992 0.30469-1.5859-0.18359-0.38672-0.48828-0.30469-1.1992 0.18359-1.5859 0.48828-0.38672 1.1992-0.30469 1.5859 0.18359 0.38672 0.48828 0.30469 1.1992-0.18359 1.5859zm1.3789-7.457c-0.75781 0-1.3711-0.61328-1.3711-1.3711s0.61328-1.3711 1.3711-1.3711c0.75781 0 1.3711 0.61328 1.3711 1.3711s-0.61328 1.3711-1.3711 1.3711zm2.375 6.7383c-0.46875-0.59375-0.37109-1.4531 0.22266-1.9258 0.59375-0.46875 1.4531-0.37109 1.9258 0.22266 0.46875 0.59375 0.37109 1.4531-0.22266 1.9258-0.58984 0.46875-1.4531 0.37109-1.9258-0.22266zm-7.0078-15.809c0.625 0 1.1289 0.50391 1.1289 1.1289s-0.50391 1.1289-1.1289 1.1289-1.1289-0.50391-1.1289-1.1289 0.50391-1.1289 1.1289-1.1289zm-10.723-4.3945c0 0.75781-0.61328 1.3711-1.3711 1.3711-0.75781 0-1.3711-0.61328-1.3711-1.3711s0.61328-1.3711 1.3711-1.3711c0.75781 0 1.3711 0.61719 1.3711 1.3711zm-6.0078-3.0234c0.625 0 1.1289 0.50391 1.1289 1.1289s-0.50391 1.1289-1.1289 1.1289-1.1289-0.50391-1.1289-1.1289c0-0.62109 0.50781-1.1289 1.1289-1.1289zm-3.1797 44.281c-1.8672 1.4844-4.582 1.1719-6.0664-0.69531s-1.1719-4.582 0.69531-6.0664c1.8672-1.4844 4.582-1.1719 6.0664 0.69531 1.4805 1.8672 1.168 4.582-0.69531 6.0664zm-9.3164-41.379c0-0.86719 0.70312-1.5703 1.5703-1.5703 0.86719 0 1.5703 0.70312 1.5703 1.5703 0 0.86719-0.70312 1.5703-1.5703 1.5703-0.86719 0.003906-1.5703-0.69922-1.5703-1.5703zm2.2383 7.0156c0-1.2344 1-2.2383 2.2383-2.2383 1.2344 0 2.2383 1 2.2383 2.2383 0 1.2344-1 2.2383-2.2383 2.2383s-2.2383-1.0039-2.2383-2.2383zm7.4961 18.461c0 1.2344-1 2.2383-2.2383 2.2383-1.2344 0-2.2383-1-2.2383-2.2383 0-1.2344 1-2.2383 2.2383-2.2383s2.2383 1.0039 2.2383 2.2383zm-5.1602-4.9297c-0.59375 0.46875-1.4531 0.37109-1.9258-0.22266-0.46875-0.59375-0.37109-1.4531 0.22266-1.9258 0.59375-0.46875 1.4531-0.37109 1.9258 0.22266 0.46875 0.59375 0.37109 1.4531-0.22266 1.9258zm3.5273-21.512c0.86719 0 1.5703 0.70313 1.5703 1.5703s-0.70312 1.5703-1.5703 1.5703c-0.86719 0-1.5703-0.70313-1.5703-1.5703s0.70312-1.5703 1.5703-1.5703zm-10.277 3.3867c0.86719 0 1.5703 0.70312 1.5703 1.5703 0 0.86719-0.70313 1.5703-1.5703 1.5703s-1.5703-0.70312-1.5703-1.5703c0-0.86719 0.70313-1.5703 1.5703-1.5703zm-6.9766 5.9453c0.38672 0.48828 0.30469 1.1992-0.18359 1.5859s-1.1992 0.30469-1.5859-0.18359c-0.38672-0.48828-0.30469-1.1992 0.18359-1.5859 0.48828-0.38281 1.1992-0.30469 1.5859 0.18359zm-4.3242 31.094c0.96875-0.76953 2.375-0.60547 3.1445 0.35938 0.76953 0.96875 0.60547 2.375-0.35938 3.1445-0.96875 0.76953-2.375 0.60547-3.1445-0.35938-0.76953-0.96875-0.60547-2.375 0.35938-3.1445zm3.5078-6.1797c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207zm2.4102-2.9961c-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207zm-0.74609-10.828c0.38672 0.48828 0.30469 1.1992-0.18359 1.5859s-1.1992 0.30469-1.5859-0.18359c-0.38672-0.48828-0.30469-1.1992 0.18359-1.5859 0.48828-0.38672 1.1992-0.30469 1.5859 0.18359zm-5.8047-5.3086c0 0.625-0.50391 1.1289-1.1289 1.1289s-1.1289-0.50391-1.1289-1.1289 0.50391-1.1289 1.1289-1.1289 1.1289 0.50781 1.1289 1.1289zm-4.1406 16.137c-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207zm14.227-6.0469c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.54297-0.67969-0.42578-1.668 0.25391-2.207zm0.36719 9.8945c-0.76953-0.96875-0.60547-2.375 0.35938-3.1445 0.96875-0.76953 2.375-0.60547 3.1445 0.35937 0.76953 0.96875 0.60547 2.375-0.35937 3.1445-0.96875 0.76953-2.375 0.60938-3.1445-0.35938zm18.738 14.508c-1.4844-1.8672-1.1719-4.582 0.69531-6.0664s4.582-1.1719 6.0664 0.69531c1.4844 1.8672 1.1719 4.582-0.69531 6.0664-1.8672 1.4844-4.582 1.1719-6.0664-0.69531zm5.6211 10.801c-0.85156-0.16797-1.4062-0.99219-1.2383-1.8477 0.16797-0.85156 0.99219-1.4062 1.8477-1.2383 0.85156 0.16797 1.4062 0.99219 1.2383 1.8477-0.17188 0.85156-0.99609 1.4062-1.8477 1.2383zm11.332-6.375c-0.14453 0.74219-0.86719 1.2266-1.6094 1.082-0.74219-0.14453-1.2266-0.86719-1.082-1.6094 0.14453-0.74219 0.86719-1.2266 1.6094-1.082 0.74609 0.14453 1.2305 0.86719 1.082 1.6094zm-4.3438-3.8125c-0.12109 0.61328-0.71484 1.0117-1.3242 0.89063-0.61328-0.12109-1.0117-0.71484-0.89062-1.3242 0.12109-0.61328 0.71484-1.0117 1.3242-0.89062 0.61328 0.11719 1.0117 0.71094 0.89062 1.3242zm7.1797-2.7383c-0.57422 0.49219-1.4414 0.42188-1.9336-0.15625-0.49219-0.57422-0.42188-1.4414 0.15625-1.9336 0.57422-0.49219 1.4414-0.42188 1.9336 0.15625 0.48828 0.57422 0.41797 1.4414-0.15625 1.9336zm-0.0625-6.25c0.47266-0.40625 1.1875-0.34766 1.5898 0.12891 0.40234 0.47266 0.34766 1.1875-0.12891 1.5898-0.47266 0.40625-1.1875 0.34766-1.5898-0.12891s-0.34375-1.1875 0.12891-1.5898zm6.4336-4.0938c-0.47266 0.40625-1.1875 0.34766-1.5898-0.12891-0.40234-0.47266-0.34766-1.1875 0.12891-1.5898 0.47266-0.40625 1.1875-0.34766 1.5898 0.12891 0.40625 0.47266 0.34766 1.1875-0.12891 1.5898zm-5.1016-6.9961c0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67578-0.53906 1.668-0.42578 2.207 0.25391z"/>
                    <path d="m74.574 12.426c0.66406 0.31641 1.375 0.47656 2.1055 0.47656 1.9102 0 3.6836-1.125 4.5156-2.8672 1.1914-2.4922 0.15625-5.4766-2.3047-6.6484-0.66406-0.31641-1.375-0.47656-2.1055-0.47656-1.9102 0-3.6836 1.125-4.5156 2.8672-1.1914 2.4883-0.15625 5.4727 2.3047 6.6484z"/>
                    <path d="m84.762 75.477c0.64453 1.1641 1.707 2.0117 2.9922 2.3867 0.46484 0.13672 0.94531 0.20703 1.4258 0.20703 2.1953 0 4.1602-1.457 4.7695-3.543 0.76562-2.6172-0.76562-5.3789-3.418-6.1523-0.46484-0.13672-0.94531-0.20703-1.4258-0.20703-2.1953 0-4.1602 1.457-4.7695 3.543-0.37109 1.2695-0.21875 2.6055 0.42578 3.7656z"/>
                    <path d="m44.453 89.348c-0.25391-0.039062-0.51172-0.054687-0.76562-0.054687-2.6055 0-4.8594 1.9727-5.2461 4.5859-0.42969 2.9219 1.5703 5.6445 4.4531 6.0664 0.25391 0.039063 0.51172 0.054688 0.76562 0.054688 2.6055 0 4.8594-1.9727 5.2461-4.5859 0.42969-2.9219-1.5664-5.6445-4.4531-6.0664z"/>
                    <path d="m6.8984 27.242c0.73828 0.39844 1.5664 0.60937 2.3984 0.60937 1.8281 0 3.5-0.98828 4.3594-2.582 0.62891-1.1602 0.75781-2.5 0.37109-3.7695-0.38672-1.2734-1.25-2.3242-2.4297-2.9609-0.73828-0.39844-1.5664-0.60937-2.3984-0.60937-1.8281 0-3.5 0.98828-4.3594 2.582-1.293 2.3984-0.37109 5.418 2.0586 6.7305z"/>
                  </svg>
                  <span className="text">Australia</span>
                </div>
              </a>
            </li>
            <li>
              <a>
                <div className="link-wrap">
                  <svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="m92.488 33.809c-1.7031 0.79297-2.7109 2.457-2.7422 4.1992-1.4922 0.48438-3.2266 0.98047-5.1016 1.3906-1.0352-3.5898-2.6406-6.9414-4.7109-9.9453 1.3047-0.86328 2.6367-1.5586 3.7656-2.0781 0.75781 0.82422 2.0156 1.0391 3.0352 0.44922 1.1797-0.67969 1.5859-2.1758 0.91406-3.3398-0.67188-1.1641-2.1719-1.5586-3.3516-0.87891-0.84375 0.48828-1.2852 1.3945-1.2227 2.3008-1.2695 0.54297-2.8984 1.1289-4.6602 1.5078-1.9766-2.457-4.2891-4.6328-6.8594-6.4648 1.1328-2.6289 2.4102-5.043 3.6016-7.0898-0.36719-0.097656-0.73047-0.22266-1.082-0.38672-0.79297-0.37891-1.4648-0.91406-2.0039-1.5469-1.2852 1.9805-2.8906 4.2227-4.7852 6.4336-2.7031-1.3867-5.6094-2.4297-8.6719-3.0586-0.11328-2.1406 0.13672-4.2617 0.43359-5.9062 1.1094-0.14844 2.0078-1.0547 2.1094-2.2266 0.11719-1.3555-0.875-2.5469-2.2148-2.6641-1.3398-0.11719-2.5234 0.88672-2.6367 2.2422-0.085938 0.97266 0.40625 1.8555 1.1836 2.3203-0.34375 1.6445-0.9375 3.7617-1.9258 5.7539-1.2812-0.14453-2.5859-0.22656-3.9062-0.22656-2.4648 0-4.8672 0.26562-7.1836 0.75781-1.0039-2.3633-1.7656-4.6797-2.3242-6.6719 1.7891-1.1875 2.582-3.5117 1.7695-5.625-0.93359-2.4414-3.6484-3.668-6.0625-2.7422-2.4141 0.92578-3.6133 3.6523-2.6758 6.0938 0.67187 1.7539 2.2617 2.875 4 3.0273 0.50391 2.0078 0.99219 4.4336 1.2695 7.043-3.2305 1.1133-6.2383 2.6953-8.9492 4.6641-1.3047-1.2539-2.4023-2.625-3.2305-3.7852 0.66406-0.89844 0.64062-2.1758-0.125-3.0625-0.89062-1.0273-2.4336-1.1484-3.4531-0.26953-1.0195 0.87891-1.1211 2.4258-0.23047 3.457 0.63672 0.73828 1.6133 1 2.4883 0.76953 0.80859 1.2031 1.7422 2.7812 2.457 4.543-2.2617 1.9297-4.2734 4.1406-5.9727 6.5898-3.1172-1.418-5.9648-3.0859-8.3047-4.6133-0.11328 0.36328-0.26172 0.71484-0.44531 1.0586-0.41406 0.76562-0.97656 1.4141-1.6445 1.9258 2.3398 1.6914 5.0469 3.875 7.5859 6.4727-1.1719 2.4648-2.0586 5.0859-2.6172 7.832-1.3672-0.039063-2.6602-0.19531-3.7461-0.37109-0.16797-1.1055-1.0898-1.9883-2.2656-2.0703-1.3555-0.09375-2.5312 0.91797-2.625 2.2617s0.93359 2.5039 2.2891 2.5977c0.97266 0.066407 1.8477-0.44141 2.3008-1.2266 1.082 0.20703 2.3633 0.51562 3.6836 0.97266-0.21094 1.543-0.32812 3.1133-0.32812 4.7109 0 1.7148 0.12891 3.3984 0.37109 5.043-2.8555 1.1875-5.707 2.0195-8.0938 2.5938-1.1172-1.8359-3.4102-2.7148-5.5508-1.9883-2.4766 0.83984-3.8086 3.5039-2.9805 5.9492 0.82812 2.4492 3.5078 3.75 5.9844 2.9141 1.7773-0.60156 2.9609-2.1484 3.1836-3.8789 2.375-0.49609 5.3203-0.94922 8.4492-1.0625 1.5 5.1719 4.1758 9.8438 7.7305 13.699-1.0391 1.7695-2.2383 3.3477-3.2812 4.582-1.2461-0.51172-2.7266-0.10547-3.5391 1.0547-0.9375 1.3438-0.62109 3.1797 0.70703 4.1094 1.3281 0.92578 3.1641 0.58984 4.1016-0.75 0.67187-0.96484 0.69531-2.1836 0.16797-3.1367 1.0352-1.1562 2.3867-2.5117 3.9648-3.7461 4.0938 3.7305 9.0898 6.4844 14.625 7.8984-0.0625 2.1719-0.25391 4.1992-0.48828 6.0039 0.33594-0.054688 0.67969-0.089844 1.0273-0.089844 0.3125 0 0.625 0.023438 0.9375 0.070313 0.75781 0.10938 1.457 0.35938 2.0977 0.70312 0.50781-1.7773 1.2188-3.7344 2.2109-5.7383 0.90234 0.070313 1.8086 0.11719 2.7266 0.11719 4.3789 0 8.5625-0.82812 12.414-2.3242 1.4414 1.4414 2.625 3.0664 3.4844 4.4062-0.71094 0.86328-0.75 2.1406-0.027344 3.0664 0.83594 1.0742 2.375 1.2734 3.4336 0.44531 1.0625-0.82812 1.2422-2.3672 0.40625-3.4414-0.60156-0.76953-1.5586-1.082-2.4492-0.89453-0.75391-1.2539-1.6172-2.8984-2.2461-4.7148 4.4297-2.1562 8.3242-5.2383 11.434-8.9922 1.7656 0.53125 3.4141 1.1094 4.8984 1.6797 0.035156-0.37891 0.10547-0.75391 0.21484-1.1289 0.24609-0.83203 0.66406-1.5859 1.2109-2.2227-1.1875-0.52344-2.4688-1.1289-3.793-1.8203 3.3867-5.3242 5.3594-11.637 5.3594-18.41 0-2-0.17969-3.957-0.50781-5.8633 1.8438-0.875 3.6289-1.5859 5.2148-2.1562 1.3086 1.7031 3.6836 2.3281 5.7344 1.375 2.3711-1.1016 3.4062-3.8945 2.3164-6.2383-1.1016-2.3359-3.9062-3.3398-6.2773-2.2383zm-27.871 21.59c-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67578 0.53906-1.6641 0.42578-2.207-0.25391zm-9.9805-7.6641c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207zm0.26562 10.168c-0.76953-0.96875-0.60547-2.375 0.35938-3.1445 0.96875-0.76953 2.375-0.60547 3.1445 0.35938 0.76953 0.96875 0.60547 2.375-0.35938 3.1445-0.96875 0.76953-2.3789 0.60938-3.1445-0.35938zm3.9492-14.301c-0.96875 0.76953-2.375 0.60547-3.1445-0.35937-0.76953-0.96875-0.60547-2.375 0.35938-3.1445 0.96875-0.76953 2.375-0.60547 3.1445 0.35938 0.76953 0.96875 0.60937 2.375-0.35938 3.1445zm-4.4336-8.7539c-1.4844-1.8672-1.1719-4.582 0.69531-6.0664 1.8672-1.4844 4.582-1.1719 6.0664 0.69531 1.4844 1.8672 1.1719 4.582-0.69531 6.0664s-4.582 1.1719-6.0664-0.69531zm16.062-3.4883c-0.625 0-1.1289-0.50391-1.1289-1.1289s0.50391-1.1289 1.1289-1.1289 1.1289 0.50391 1.1289 1.1289-0.50781 1.1289-1.1289 1.1289zm-5.1562 16.375c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207zm-0.375-8.5508c0.48828-0.38672 1.1992-0.30469 1.5859 0.18359 0.38672 0.48828 0.30469 1.1992-0.18359 1.5859-0.48828 0.38672-1.1992 0.30469-1.5859-0.18359s-0.30469-1.1953 0.18359-1.5859zm8.7852 1.7695c-0.48828 0.38672-1.1992 0.30469-1.5859-0.18359-0.38672-0.48828-0.30469-1.1992 0.18359-1.5859 0.48828-0.38672 1.1992-0.30469 1.5859 0.18359 0.38672 0.48828 0.30469 1.1992-0.18359 1.5859zm1.3789-7.457c-0.75781 0-1.3711-0.61328-1.3711-1.3711s0.61328-1.3711 1.3711-1.3711c0.75781 0 1.3711 0.61328 1.3711 1.3711s-0.61328 1.3711-1.3711 1.3711zm2.375 6.7383c-0.46875-0.59375-0.37109-1.4531 0.22266-1.9258 0.59375-0.46875 1.4531-0.37109 1.9258 0.22266 0.46875 0.59375 0.37109 1.4531-0.22266 1.9258-0.58984 0.46875-1.4531 0.37109-1.9258-0.22266zm-7.0078-15.809c0.625 0 1.1289 0.50391 1.1289 1.1289s-0.50391 1.1289-1.1289 1.1289-1.1289-0.50391-1.1289-1.1289 0.50391-1.1289 1.1289-1.1289zm-10.723-4.3945c0 0.75781-0.61328 1.3711-1.3711 1.3711-0.75781 0-1.3711-0.61328-1.3711-1.3711s0.61328-1.3711 1.3711-1.3711c0.75781 0 1.3711 0.61719 1.3711 1.3711zm-6.0078-3.0234c0.625 0 1.1289 0.50391 1.1289 1.1289s-0.50391 1.1289-1.1289 1.1289-1.1289-0.50391-1.1289-1.1289c0-0.62109 0.50781-1.1289 1.1289-1.1289zm-3.1797 44.281c-1.8672 1.4844-4.582 1.1719-6.0664-0.69531s-1.1719-4.582 0.69531-6.0664c1.8672-1.4844 4.582-1.1719 6.0664 0.69531 1.4805 1.8672 1.168 4.582-0.69531 6.0664zm-9.3164-41.379c0-0.86719 0.70312-1.5703 1.5703-1.5703 0.86719 0 1.5703 0.70312 1.5703 1.5703 0 0.86719-0.70312 1.5703-1.5703 1.5703-0.86719 0.003906-1.5703-0.69922-1.5703-1.5703zm2.2383 7.0156c0-1.2344 1-2.2383 2.2383-2.2383 1.2344 0 2.2383 1 2.2383 2.2383 0 1.2344-1 2.2383-2.2383 2.2383s-2.2383-1.0039-2.2383-2.2383zm7.4961 18.461c0 1.2344-1 2.2383-2.2383 2.2383-1.2344 0-2.2383-1-2.2383-2.2383 0-1.2344 1-2.2383 2.2383-2.2383s2.2383 1.0039 2.2383 2.2383zm-5.1602-4.9297c-0.59375 0.46875-1.4531 0.37109-1.9258-0.22266-0.46875-0.59375-0.37109-1.4531 0.22266-1.9258 0.59375-0.46875 1.4531-0.37109 1.9258 0.22266 0.46875 0.59375 0.37109 1.4531-0.22266 1.9258zm3.5273-21.512c0.86719 0 1.5703 0.70313 1.5703 1.5703s-0.70312 1.5703-1.5703 1.5703c-0.86719 0-1.5703-0.70313-1.5703-1.5703s0.70312-1.5703 1.5703-1.5703zm-10.277 3.3867c0.86719 0 1.5703 0.70312 1.5703 1.5703 0 0.86719-0.70313 1.5703-1.5703 1.5703s-1.5703-0.70312-1.5703-1.5703c0-0.86719 0.70313-1.5703 1.5703-1.5703zm-6.9766 5.9453c0.38672 0.48828 0.30469 1.1992-0.18359 1.5859s-1.1992 0.30469-1.5859-0.18359c-0.38672-0.48828-0.30469-1.1992 0.18359-1.5859 0.48828-0.38281 1.1992-0.30469 1.5859 0.18359zm-4.3242 31.094c0.96875-0.76953 2.375-0.60547 3.1445 0.35938 0.76953 0.96875 0.60547 2.375-0.35938 3.1445-0.96875 0.76953-2.375 0.60547-3.1445-0.35938-0.76953-0.96875-0.60547-2.375 0.35938-3.1445zm3.5078-6.1797c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207zm2.4102-2.9961c-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207zm-0.74609-10.828c0.38672 0.48828 0.30469 1.1992-0.18359 1.5859s-1.1992 0.30469-1.5859-0.18359c-0.38672-0.48828-0.30469-1.1992 0.18359-1.5859 0.48828-0.38672 1.1992-0.30469 1.5859 0.18359zm-5.8047-5.3086c0 0.625-0.50391 1.1289-1.1289 1.1289s-1.1289-0.50391-1.1289-1.1289 0.50391-1.1289 1.1289-1.1289 1.1289 0.50781 1.1289 1.1289zm-4.1406 16.137c-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207zm14.227-6.0469c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.54297-0.67969-0.42578-1.668 0.25391-2.207zm0.36719 9.8945c-0.76953-0.96875-0.60547-2.375 0.35938-3.1445 0.96875-0.76953 2.375-0.60547 3.1445 0.35937 0.76953 0.96875 0.60547 2.375-0.35937 3.1445-0.96875 0.76953-2.375 0.60938-3.1445-0.35938zm18.738 14.508c-1.4844-1.8672-1.1719-4.582 0.69531-6.0664s4.582-1.1719 6.0664 0.69531c1.4844 1.8672 1.1719 4.582-0.69531 6.0664-1.8672 1.4844-4.582 1.1719-6.0664-0.69531zm5.6211 10.801c-0.85156-0.16797-1.4062-0.99219-1.2383-1.8477 0.16797-0.85156 0.99219-1.4062 1.8477-1.2383 0.85156 0.16797 1.4062 0.99219 1.2383 1.8477-0.17188 0.85156-0.99609 1.4062-1.8477 1.2383zm11.332-6.375c-0.14453 0.74219-0.86719 1.2266-1.6094 1.082-0.74219-0.14453-1.2266-0.86719-1.082-1.6094 0.14453-0.74219 0.86719-1.2266 1.6094-1.082 0.74609 0.14453 1.2305 0.86719 1.082 1.6094zm-4.3438-3.8125c-0.12109 0.61328-0.71484 1.0117-1.3242 0.89063-0.61328-0.12109-1.0117-0.71484-0.89062-1.3242 0.12109-0.61328 0.71484-1.0117 1.3242-0.89062 0.61328 0.11719 1.0117 0.71094 0.89062 1.3242zm7.1797-2.7383c-0.57422 0.49219-1.4414 0.42188-1.9336-0.15625-0.49219-0.57422-0.42188-1.4414 0.15625-1.9336 0.57422-0.49219 1.4414-0.42188 1.9336 0.15625 0.48828 0.57422 0.41797 1.4414-0.15625 1.9336zm-0.0625-6.25c0.47266-0.40625 1.1875-0.34766 1.5898 0.12891 0.40234 0.47266 0.34766 1.1875-0.12891 1.5898-0.47266 0.40625-1.1875 0.34766-1.5898-0.12891s-0.34375-1.1875 0.12891-1.5898zm6.4336-4.0938c-0.47266 0.40625-1.1875 0.34766-1.5898-0.12891-0.40234-0.47266-0.34766-1.1875 0.12891-1.5898 0.47266-0.40625 1.1875-0.34766 1.5898 0.12891 0.40625 0.47266 0.34766 1.1875-0.12891 1.5898zm-5.1016-6.9961c0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67578-0.53906 1.668-0.42578 2.207 0.25391z"/>
                    <path d="m74.574 12.426c0.66406 0.31641 1.375 0.47656 2.1055 0.47656 1.9102 0 3.6836-1.125 4.5156-2.8672 1.1914-2.4922 0.15625-5.4766-2.3047-6.6484-0.66406-0.31641-1.375-0.47656-2.1055-0.47656-1.9102 0-3.6836 1.125-4.5156 2.8672-1.1914 2.4883-0.15625 5.4727 2.3047 6.6484z"/>
                    <path d="m84.762 75.477c0.64453 1.1641 1.707 2.0117 2.9922 2.3867 0.46484 0.13672 0.94531 0.20703 1.4258 0.20703 2.1953 0 4.1602-1.457 4.7695-3.543 0.76562-2.6172-0.76562-5.3789-3.418-6.1523-0.46484-0.13672-0.94531-0.20703-1.4258-0.20703-2.1953 0-4.1602 1.457-4.7695 3.543-0.37109 1.2695-0.21875 2.6055 0.42578 3.7656z"/>
                    <path d="m44.453 89.348c-0.25391-0.039062-0.51172-0.054687-0.76562-0.054687-2.6055 0-4.8594 1.9727-5.2461 4.5859-0.42969 2.9219 1.5703 5.6445 4.4531 6.0664 0.25391 0.039063 0.51172 0.054688 0.76562 0.054688 2.6055 0 4.8594-1.9727 5.2461-4.5859 0.42969-2.9219-1.5664-5.6445-4.4531-6.0664z"/>
                    <path d="m6.8984 27.242c0.73828 0.39844 1.5664 0.60937 2.3984 0.60937 1.8281 0 3.5-0.98828 4.3594-2.582 0.62891-1.1602 0.75781-2.5 0.37109-3.7695-0.38672-1.2734-1.25-2.3242-2.4297-2.9609-0.73828-0.39844-1.5664-0.60937-2.3984-0.60937-1.8281 0-3.5 0.98828-4.3594 2.582-1.293 2.3984-0.37109 5.418 2.0586 6.7305z"/>
                  </svg>
                  <span className="text">Symptoms</span>
                </div>
              </a>
            </li>
            <li>
              <a>
                <div className="link-wrap">
                  <svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="m92.488 33.809c-1.7031 0.79297-2.7109 2.457-2.7422 4.1992-1.4922 0.48438-3.2266 0.98047-5.1016 1.3906-1.0352-3.5898-2.6406-6.9414-4.7109-9.9453 1.3047-0.86328 2.6367-1.5586 3.7656-2.0781 0.75781 0.82422 2.0156 1.0391 3.0352 0.44922 1.1797-0.67969 1.5859-2.1758 0.91406-3.3398-0.67188-1.1641-2.1719-1.5586-3.3516-0.87891-0.84375 0.48828-1.2852 1.3945-1.2227 2.3008-1.2695 0.54297-2.8984 1.1289-4.6602 1.5078-1.9766-2.457-4.2891-4.6328-6.8594-6.4648 1.1328-2.6289 2.4102-5.043 3.6016-7.0898-0.36719-0.097656-0.73047-0.22266-1.082-0.38672-0.79297-0.37891-1.4648-0.91406-2.0039-1.5469-1.2852 1.9805-2.8906 4.2227-4.7852 6.4336-2.7031-1.3867-5.6094-2.4297-8.6719-3.0586-0.11328-2.1406 0.13672-4.2617 0.43359-5.9062 1.1094-0.14844 2.0078-1.0547 2.1094-2.2266 0.11719-1.3555-0.875-2.5469-2.2148-2.6641-1.3398-0.11719-2.5234 0.88672-2.6367 2.2422-0.085938 0.97266 0.40625 1.8555 1.1836 2.3203-0.34375 1.6445-0.9375 3.7617-1.9258 5.7539-1.2812-0.14453-2.5859-0.22656-3.9062-0.22656-2.4648 0-4.8672 0.26562-7.1836 0.75781-1.0039-2.3633-1.7656-4.6797-2.3242-6.6719 1.7891-1.1875 2.582-3.5117 1.7695-5.625-0.93359-2.4414-3.6484-3.668-6.0625-2.7422-2.4141 0.92578-3.6133 3.6523-2.6758 6.0938 0.67187 1.7539 2.2617 2.875 4 3.0273 0.50391 2.0078 0.99219 4.4336 1.2695 7.043-3.2305 1.1133-6.2383 2.6953-8.9492 4.6641-1.3047-1.2539-2.4023-2.625-3.2305-3.7852 0.66406-0.89844 0.64062-2.1758-0.125-3.0625-0.89062-1.0273-2.4336-1.1484-3.4531-0.26953-1.0195 0.87891-1.1211 2.4258-0.23047 3.457 0.63672 0.73828 1.6133 1 2.4883 0.76953 0.80859 1.2031 1.7422 2.7812 2.457 4.543-2.2617 1.9297-4.2734 4.1406-5.9727 6.5898-3.1172-1.418-5.9648-3.0859-8.3047-4.6133-0.11328 0.36328-0.26172 0.71484-0.44531 1.0586-0.41406 0.76562-0.97656 1.4141-1.6445 1.9258 2.3398 1.6914 5.0469 3.875 7.5859 6.4727-1.1719 2.4648-2.0586 5.0859-2.6172 7.832-1.3672-0.039063-2.6602-0.19531-3.7461-0.37109-0.16797-1.1055-1.0898-1.9883-2.2656-2.0703-1.3555-0.09375-2.5312 0.91797-2.625 2.2617s0.93359 2.5039 2.2891 2.5977c0.97266 0.066407 1.8477-0.44141 2.3008-1.2266 1.082 0.20703 2.3633 0.51562 3.6836 0.97266-0.21094 1.543-0.32812 3.1133-0.32812 4.7109 0 1.7148 0.12891 3.3984 0.37109 5.043-2.8555 1.1875-5.707 2.0195-8.0938 2.5938-1.1172-1.8359-3.4102-2.7148-5.5508-1.9883-2.4766 0.83984-3.8086 3.5039-2.9805 5.9492 0.82812 2.4492 3.5078 3.75 5.9844 2.9141 1.7773-0.60156 2.9609-2.1484 3.1836-3.8789 2.375-0.49609 5.3203-0.94922 8.4492-1.0625 1.5 5.1719 4.1758 9.8438 7.7305 13.699-1.0391 1.7695-2.2383 3.3477-3.2812 4.582-1.2461-0.51172-2.7266-0.10547-3.5391 1.0547-0.9375 1.3438-0.62109 3.1797 0.70703 4.1094 1.3281 0.92578 3.1641 0.58984 4.1016-0.75 0.67187-0.96484 0.69531-2.1836 0.16797-3.1367 1.0352-1.1562 2.3867-2.5117 3.9648-3.7461 4.0938 3.7305 9.0898 6.4844 14.625 7.8984-0.0625 2.1719-0.25391 4.1992-0.48828 6.0039 0.33594-0.054688 0.67969-0.089844 1.0273-0.089844 0.3125 0 0.625 0.023438 0.9375 0.070313 0.75781 0.10938 1.457 0.35938 2.0977 0.70312 0.50781-1.7773 1.2188-3.7344 2.2109-5.7383 0.90234 0.070313 1.8086 0.11719 2.7266 0.11719 4.3789 0 8.5625-0.82812 12.414-2.3242 1.4414 1.4414 2.625 3.0664 3.4844 4.4062-0.71094 0.86328-0.75 2.1406-0.027344 3.0664 0.83594 1.0742 2.375 1.2734 3.4336 0.44531 1.0625-0.82812 1.2422-2.3672 0.40625-3.4414-0.60156-0.76953-1.5586-1.082-2.4492-0.89453-0.75391-1.2539-1.6172-2.8984-2.2461-4.7148 4.4297-2.1562 8.3242-5.2383 11.434-8.9922 1.7656 0.53125 3.4141 1.1094 4.8984 1.6797 0.035156-0.37891 0.10547-0.75391 0.21484-1.1289 0.24609-0.83203 0.66406-1.5859 1.2109-2.2227-1.1875-0.52344-2.4688-1.1289-3.793-1.8203 3.3867-5.3242 5.3594-11.637 5.3594-18.41 0-2-0.17969-3.957-0.50781-5.8633 1.8438-0.875 3.6289-1.5859 5.2148-2.1562 1.3086 1.7031 3.6836 2.3281 5.7344 1.375 2.3711-1.1016 3.4062-3.8945 2.3164-6.2383-1.1016-2.3359-3.9062-3.3398-6.2773-2.2383zm-27.871 21.59c-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67578 0.53906-1.6641 0.42578-2.207-0.25391zm-9.9805-7.6641c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207zm0.26562 10.168c-0.76953-0.96875-0.60547-2.375 0.35938-3.1445 0.96875-0.76953 2.375-0.60547 3.1445 0.35938 0.76953 0.96875 0.60547 2.375-0.35938 3.1445-0.96875 0.76953-2.3789 0.60938-3.1445-0.35938zm3.9492-14.301c-0.96875 0.76953-2.375 0.60547-3.1445-0.35937-0.76953-0.96875-0.60547-2.375 0.35938-3.1445 0.96875-0.76953 2.375-0.60547 3.1445 0.35938 0.76953 0.96875 0.60937 2.375-0.35938 3.1445zm-4.4336-8.7539c-1.4844-1.8672-1.1719-4.582 0.69531-6.0664 1.8672-1.4844 4.582-1.1719 6.0664 0.69531 1.4844 1.8672 1.1719 4.582-0.69531 6.0664s-4.582 1.1719-6.0664-0.69531zm16.062-3.4883c-0.625 0-1.1289-0.50391-1.1289-1.1289s0.50391-1.1289 1.1289-1.1289 1.1289 0.50391 1.1289 1.1289-0.50781 1.1289-1.1289 1.1289zm-5.1562 16.375c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207zm-0.375-8.5508c0.48828-0.38672 1.1992-0.30469 1.5859 0.18359 0.38672 0.48828 0.30469 1.1992-0.18359 1.5859-0.48828 0.38672-1.1992 0.30469-1.5859-0.18359s-0.30469-1.1953 0.18359-1.5859zm8.7852 1.7695c-0.48828 0.38672-1.1992 0.30469-1.5859-0.18359-0.38672-0.48828-0.30469-1.1992 0.18359-1.5859 0.48828-0.38672 1.1992-0.30469 1.5859 0.18359 0.38672 0.48828 0.30469 1.1992-0.18359 1.5859zm1.3789-7.457c-0.75781 0-1.3711-0.61328-1.3711-1.3711s0.61328-1.3711 1.3711-1.3711c0.75781 0 1.3711 0.61328 1.3711 1.3711s-0.61328 1.3711-1.3711 1.3711zm2.375 6.7383c-0.46875-0.59375-0.37109-1.4531 0.22266-1.9258 0.59375-0.46875 1.4531-0.37109 1.9258 0.22266 0.46875 0.59375 0.37109 1.4531-0.22266 1.9258-0.58984 0.46875-1.4531 0.37109-1.9258-0.22266zm-7.0078-15.809c0.625 0 1.1289 0.50391 1.1289 1.1289s-0.50391 1.1289-1.1289 1.1289-1.1289-0.50391-1.1289-1.1289 0.50391-1.1289 1.1289-1.1289zm-10.723-4.3945c0 0.75781-0.61328 1.3711-1.3711 1.3711-0.75781 0-1.3711-0.61328-1.3711-1.3711s0.61328-1.3711 1.3711-1.3711c0.75781 0 1.3711 0.61719 1.3711 1.3711zm-6.0078-3.0234c0.625 0 1.1289 0.50391 1.1289 1.1289s-0.50391 1.1289-1.1289 1.1289-1.1289-0.50391-1.1289-1.1289c0-0.62109 0.50781-1.1289 1.1289-1.1289zm-3.1797 44.281c-1.8672 1.4844-4.582 1.1719-6.0664-0.69531s-1.1719-4.582 0.69531-6.0664c1.8672-1.4844 4.582-1.1719 6.0664 0.69531 1.4805 1.8672 1.168 4.582-0.69531 6.0664zm-9.3164-41.379c0-0.86719 0.70312-1.5703 1.5703-1.5703 0.86719 0 1.5703 0.70312 1.5703 1.5703 0 0.86719-0.70312 1.5703-1.5703 1.5703-0.86719 0.003906-1.5703-0.69922-1.5703-1.5703zm2.2383 7.0156c0-1.2344 1-2.2383 2.2383-2.2383 1.2344 0 2.2383 1 2.2383 2.2383 0 1.2344-1 2.2383-2.2383 2.2383s-2.2383-1.0039-2.2383-2.2383zm7.4961 18.461c0 1.2344-1 2.2383-2.2383 2.2383-1.2344 0-2.2383-1-2.2383-2.2383 0-1.2344 1-2.2383 2.2383-2.2383s2.2383 1.0039 2.2383 2.2383zm-5.1602-4.9297c-0.59375 0.46875-1.4531 0.37109-1.9258-0.22266-0.46875-0.59375-0.37109-1.4531 0.22266-1.9258 0.59375-0.46875 1.4531-0.37109 1.9258 0.22266 0.46875 0.59375 0.37109 1.4531-0.22266 1.9258zm3.5273-21.512c0.86719 0 1.5703 0.70313 1.5703 1.5703s-0.70312 1.5703-1.5703 1.5703c-0.86719 0-1.5703-0.70313-1.5703-1.5703s0.70312-1.5703 1.5703-1.5703zm-10.277 3.3867c0.86719 0 1.5703 0.70312 1.5703 1.5703 0 0.86719-0.70313 1.5703-1.5703 1.5703s-1.5703-0.70312-1.5703-1.5703c0-0.86719 0.70313-1.5703 1.5703-1.5703zm-6.9766 5.9453c0.38672 0.48828 0.30469 1.1992-0.18359 1.5859s-1.1992 0.30469-1.5859-0.18359c-0.38672-0.48828-0.30469-1.1992 0.18359-1.5859 0.48828-0.38281 1.1992-0.30469 1.5859 0.18359zm-4.3242 31.094c0.96875-0.76953 2.375-0.60547 3.1445 0.35938 0.76953 0.96875 0.60547 2.375-0.35938 3.1445-0.96875 0.76953-2.375 0.60547-3.1445-0.35938-0.76953-0.96875-0.60547-2.375 0.35938-3.1445zm3.5078-6.1797c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207zm2.4102-2.9961c-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207zm-0.74609-10.828c0.38672 0.48828 0.30469 1.1992-0.18359 1.5859s-1.1992 0.30469-1.5859-0.18359c-0.38672-0.48828-0.30469-1.1992 0.18359-1.5859 0.48828-0.38672 1.1992-0.30469 1.5859 0.18359zm-5.8047-5.3086c0 0.625-0.50391 1.1289-1.1289 1.1289s-1.1289-0.50391-1.1289-1.1289 0.50391-1.1289 1.1289-1.1289 1.1289 0.50781 1.1289 1.1289zm-4.1406 16.137c-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207zm14.227-6.0469c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.54297-0.67969-0.42578-1.668 0.25391-2.207zm0.36719 9.8945c-0.76953-0.96875-0.60547-2.375 0.35938-3.1445 0.96875-0.76953 2.375-0.60547 3.1445 0.35937 0.76953 0.96875 0.60547 2.375-0.35937 3.1445-0.96875 0.76953-2.375 0.60938-3.1445-0.35938zm18.738 14.508c-1.4844-1.8672-1.1719-4.582 0.69531-6.0664s4.582-1.1719 6.0664 0.69531c1.4844 1.8672 1.1719 4.582-0.69531 6.0664-1.8672 1.4844-4.582 1.1719-6.0664-0.69531zm5.6211 10.801c-0.85156-0.16797-1.4062-0.99219-1.2383-1.8477 0.16797-0.85156 0.99219-1.4062 1.8477-1.2383 0.85156 0.16797 1.4062 0.99219 1.2383 1.8477-0.17188 0.85156-0.99609 1.4062-1.8477 1.2383zm11.332-6.375c-0.14453 0.74219-0.86719 1.2266-1.6094 1.082-0.74219-0.14453-1.2266-0.86719-1.082-1.6094 0.14453-0.74219 0.86719-1.2266 1.6094-1.082 0.74609 0.14453 1.2305 0.86719 1.082 1.6094zm-4.3438-3.8125c-0.12109 0.61328-0.71484 1.0117-1.3242 0.89063-0.61328-0.12109-1.0117-0.71484-0.89062-1.3242 0.12109-0.61328 0.71484-1.0117 1.3242-0.89062 0.61328 0.11719 1.0117 0.71094 0.89062 1.3242zm7.1797-2.7383c-0.57422 0.49219-1.4414 0.42188-1.9336-0.15625-0.49219-0.57422-0.42188-1.4414 0.15625-1.9336 0.57422-0.49219 1.4414-0.42188 1.9336 0.15625 0.48828 0.57422 0.41797 1.4414-0.15625 1.9336zm-0.0625-6.25c0.47266-0.40625 1.1875-0.34766 1.5898 0.12891 0.40234 0.47266 0.34766 1.1875-0.12891 1.5898-0.47266 0.40625-1.1875 0.34766-1.5898-0.12891s-0.34375-1.1875 0.12891-1.5898zm6.4336-4.0938c-0.47266 0.40625-1.1875 0.34766-1.5898-0.12891-0.40234-0.47266-0.34766-1.1875 0.12891-1.5898 0.47266-0.40625 1.1875-0.34766 1.5898 0.12891 0.40625 0.47266 0.34766 1.1875-0.12891 1.5898zm-5.1016-6.9961c0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67578-0.53906 1.668-0.42578 2.207 0.25391z"/>
                    <path d="m74.574 12.426c0.66406 0.31641 1.375 0.47656 2.1055 0.47656 1.9102 0 3.6836-1.125 4.5156-2.8672 1.1914-2.4922 0.15625-5.4766-2.3047-6.6484-0.66406-0.31641-1.375-0.47656-2.1055-0.47656-1.9102 0-3.6836 1.125-4.5156 2.8672-1.1914 2.4883-0.15625 5.4727 2.3047 6.6484z"/>
                    <path d="m84.762 75.477c0.64453 1.1641 1.707 2.0117 2.9922 2.3867 0.46484 0.13672 0.94531 0.20703 1.4258 0.20703 2.1953 0 4.1602-1.457 4.7695-3.543 0.76562-2.6172-0.76562-5.3789-3.418-6.1523-0.46484-0.13672-0.94531-0.20703-1.4258-0.20703-2.1953 0-4.1602 1.457-4.7695 3.543-0.37109 1.2695-0.21875 2.6055 0.42578 3.7656z"/>
                    <path d="m44.453 89.348c-0.25391-0.039062-0.51172-0.054687-0.76562-0.054687-2.6055 0-4.8594 1.9727-5.2461 4.5859-0.42969 2.9219 1.5703 5.6445 4.4531 6.0664 0.25391 0.039063 0.51172 0.054688 0.76562 0.054688 2.6055 0 4.8594-1.9727 5.2461-4.5859 0.42969-2.9219-1.5664-5.6445-4.4531-6.0664z"/>
                    <path d="m6.8984 27.242c0.73828 0.39844 1.5664 0.60937 2.3984 0.60937 1.8281 0 3.5-0.98828 4.3594-2.582 0.62891-1.1602 0.75781-2.5 0.37109-3.7695-0.38672-1.2734-1.25-2.3242-2.4297-2.9609-0.73828-0.39844-1.5664-0.60937-2.3984-0.60937-1.8281 0-3.5 0.98828-4.3594 2.582-1.293 2.3984-0.37109 5.418 2.0586 6.7305z"/>
                  </svg>
                  <span className="text">Journal</span>
                </div>
              </a>
            </li>
            <li>
              <a>
                <div className="link-wrap">
                  <svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="m92.488 33.809c-1.7031 0.79297-2.7109 2.457-2.7422 4.1992-1.4922 0.48438-3.2266 0.98047-5.1016 1.3906-1.0352-3.5898-2.6406-6.9414-4.7109-9.9453 1.3047-0.86328 2.6367-1.5586 3.7656-2.0781 0.75781 0.82422 2.0156 1.0391 3.0352 0.44922 1.1797-0.67969 1.5859-2.1758 0.91406-3.3398-0.67188-1.1641-2.1719-1.5586-3.3516-0.87891-0.84375 0.48828-1.2852 1.3945-1.2227 2.3008-1.2695 0.54297-2.8984 1.1289-4.6602 1.5078-1.9766-2.457-4.2891-4.6328-6.8594-6.4648 1.1328-2.6289 2.4102-5.043 3.6016-7.0898-0.36719-0.097656-0.73047-0.22266-1.082-0.38672-0.79297-0.37891-1.4648-0.91406-2.0039-1.5469-1.2852 1.9805-2.8906 4.2227-4.7852 6.4336-2.7031-1.3867-5.6094-2.4297-8.6719-3.0586-0.11328-2.1406 0.13672-4.2617 0.43359-5.9062 1.1094-0.14844 2.0078-1.0547 2.1094-2.2266 0.11719-1.3555-0.875-2.5469-2.2148-2.6641-1.3398-0.11719-2.5234 0.88672-2.6367 2.2422-0.085938 0.97266 0.40625 1.8555 1.1836 2.3203-0.34375 1.6445-0.9375 3.7617-1.9258 5.7539-1.2812-0.14453-2.5859-0.22656-3.9062-0.22656-2.4648 0-4.8672 0.26562-7.1836 0.75781-1.0039-2.3633-1.7656-4.6797-2.3242-6.6719 1.7891-1.1875 2.582-3.5117 1.7695-5.625-0.93359-2.4414-3.6484-3.668-6.0625-2.7422-2.4141 0.92578-3.6133 3.6523-2.6758 6.0938 0.67187 1.7539 2.2617 2.875 4 3.0273 0.50391 2.0078 0.99219 4.4336 1.2695 7.043-3.2305 1.1133-6.2383 2.6953-8.9492 4.6641-1.3047-1.2539-2.4023-2.625-3.2305-3.7852 0.66406-0.89844 0.64062-2.1758-0.125-3.0625-0.89062-1.0273-2.4336-1.1484-3.4531-0.26953-1.0195 0.87891-1.1211 2.4258-0.23047 3.457 0.63672 0.73828 1.6133 1 2.4883 0.76953 0.80859 1.2031 1.7422 2.7812 2.457 4.543-2.2617 1.9297-4.2734 4.1406-5.9727 6.5898-3.1172-1.418-5.9648-3.0859-8.3047-4.6133-0.11328 0.36328-0.26172 0.71484-0.44531 1.0586-0.41406 0.76562-0.97656 1.4141-1.6445 1.9258 2.3398 1.6914 5.0469 3.875 7.5859 6.4727-1.1719 2.4648-2.0586 5.0859-2.6172 7.832-1.3672-0.039063-2.6602-0.19531-3.7461-0.37109-0.16797-1.1055-1.0898-1.9883-2.2656-2.0703-1.3555-0.09375-2.5312 0.91797-2.625 2.2617s0.93359 2.5039 2.2891 2.5977c0.97266 0.066407 1.8477-0.44141 2.3008-1.2266 1.082 0.20703 2.3633 0.51562 3.6836 0.97266-0.21094 1.543-0.32812 3.1133-0.32812 4.7109 0 1.7148 0.12891 3.3984 0.37109 5.043-2.8555 1.1875-5.707 2.0195-8.0938 2.5938-1.1172-1.8359-3.4102-2.7148-5.5508-1.9883-2.4766 0.83984-3.8086 3.5039-2.9805 5.9492 0.82812 2.4492 3.5078 3.75 5.9844 2.9141 1.7773-0.60156 2.9609-2.1484 3.1836-3.8789 2.375-0.49609 5.3203-0.94922 8.4492-1.0625 1.5 5.1719 4.1758 9.8438 7.7305 13.699-1.0391 1.7695-2.2383 3.3477-3.2812 4.582-1.2461-0.51172-2.7266-0.10547-3.5391 1.0547-0.9375 1.3438-0.62109 3.1797 0.70703 4.1094 1.3281 0.92578 3.1641 0.58984 4.1016-0.75 0.67187-0.96484 0.69531-2.1836 0.16797-3.1367 1.0352-1.1562 2.3867-2.5117 3.9648-3.7461 4.0938 3.7305 9.0898 6.4844 14.625 7.8984-0.0625 2.1719-0.25391 4.1992-0.48828 6.0039 0.33594-0.054688 0.67969-0.089844 1.0273-0.089844 0.3125 0 0.625 0.023438 0.9375 0.070313 0.75781 0.10938 1.457 0.35938 2.0977 0.70312 0.50781-1.7773 1.2188-3.7344 2.2109-5.7383 0.90234 0.070313 1.8086 0.11719 2.7266 0.11719 4.3789 0 8.5625-0.82812 12.414-2.3242 1.4414 1.4414 2.625 3.0664 3.4844 4.4062-0.71094 0.86328-0.75 2.1406-0.027344 3.0664 0.83594 1.0742 2.375 1.2734 3.4336 0.44531 1.0625-0.82812 1.2422-2.3672 0.40625-3.4414-0.60156-0.76953-1.5586-1.082-2.4492-0.89453-0.75391-1.2539-1.6172-2.8984-2.2461-4.7148 4.4297-2.1562 8.3242-5.2383 11.434-8.9922 1.7656 0.53125 3.4141 1.1094 4.8984 1.6797 0.035156-0.37891 0.10547-0.75391 0.21484-1.1289 0.24609-0.83203 0.66406-1.5859 1.2109-2.2227-1.1875-0.52344-2.4688-1.1289-3.793-1.8203 3.3867-5.3242 5.3594-11.637 5.3594-18.41 0-2-0.17969-3.957-0.50781-5.8633 1.8438-0.875 3.6289-1.5859 5.2148-2.1562 1.3086 1.7031 3.6836 2.3281 5.7344 1.375 2.3711-1.1016 3.4062-3.8945 2.3164-6.2383-1.1016-2.3359-3.9062-3.3398-6.2773-2.2383zm-27.871 21.59c-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67578 0.53906-1.6641 0.42578-2.207-0.25391zm-9.9805-7.6641c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207zm0.26562 10.168c-0.76953-0.96875-0.60547-2.375 0.35938-3.1445 0.96875-0.76953 2.375-0.60547 3.1445 0.35938 0.76953 0.96875 0.60547 2.375-0.35938 3.1445-0.96875 0.76953-2.3789 0.60938-3.1445-0.35938zm3.9492-14.301c-0.96875 0.76953-2.375 0.60547-3.1445-0.35937-0.76953-0.96875-0.60547-2.375 0.35938-3.1445 0.96875-0.76953 2.375-0.60547 3.1445 0.35938 0.76953 0.96875 0.60937 2.375-0.35938 3.1445zm-4.4336-8.7539c-1.4844-1.8672-1.1719-4.582 0.69531-6.0664 1.8672-1.4844 4.582-1.1719 6.0664 0.69531 1.4844 1.8672 1.1719 4.582-0.69531 6.0664s-4.582 1.1719-6.0664-0.69531zm16.062-3.4883c-0.625 0-1.1289-0.50391-1.1289-1.1289s0.50391-1.1289 1.1289-1.1289 1.1289 0.50391 1.1289 1.1289-0.50781 1.1289-1.1289 1.1289zm-5.1562 16.375c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207zm-0.375-8.5508c0.48828-0.38672 1.1992-0.30469 1.5859 0.18359 0.38672 0.48828 0.30469 1.1992-0.18359 1.5859-0.48828 0.38672-1.1992 0.30469-1.5859-0.18359s-0.30469-1.1953 0.18359-1.5859zm8.7852 1.7695c-0.48828 0.38672-1.1992 0.30469-1.5859-0.18359-0.38672-0.48828-0.30469-1.1992 0.18359-1.5859 0.48828-0.38672 1.1992-0.30469 1.5859 0.18359 0.38672 0.48828 0.30469 1.1992-0.18359 1.5859zm1.3789-7.457c-0.75781 0-1.3711-0.61328-1.3711-1.3711s0.61328-1.3711 1.3711-1.3711c0.75781 0 1.3711 0.61328 1.3711 1.3711s-0.61328 1.3711-1.3711 1.3711zm2.375 6.7383c-0.46875-0.59375-0.37109-1.4531 0.22266-1.9258 0.59375-0.46875 1.4531-0.37109 1.9258 0.22266 0.46875 0.59375 0.37109 1.4531-0.22266 1.9258-0.58984 0.46875-1.4531 0.37109-1.9258-0.22266zm-7.0078-15.809c0.625 0 1.1289 0.50391 1.1289 1.1289s-0.50391 1.1289-1.1289 1.1289-1.1289-0.50391-1.1289-1.1289 0.50391-1.1289 1.1289-1.1289zm-10.723-4.3945c0 0.75781-0.61328 1.3711-1.3711 1.3711-0.75781 0-1.3711-0.61328-1.3711-1.3711s0.61328-1.3711 1.3711-1.3711c0.75781 0 1.3711 0.61719 1.3711 1.3711zm-6.0078-3.0234c0.625 0 1.1289 0.50391 1.1289 1.1289s-0.50391 1.1289-1.1289 1.1289-1.1289-0.50391-1.1289-1.1289c0-0.62109 0.50781-1.1289 1.1289-1.1289zm-3.1797 44.281c-1.8672 1.4844-4.582 1.1719-6.0664-0.69531s-1.1719-4.582 0.69531-6.0664c1.8672-1.4844 4.582-1.1719 6.0664 0.69531 1.4805 1.8672 1.168 4.582-0.69531 6.0664zm-9.3164-41.379c0-0.86719 0.70312-1.5703 1.5703-1.5703 0.86719 0 1.5703 0.70312 1.5703 1.5703 0 0.86719-0.70312 1.5703-1.5703 1.5703-0.86719 0.003906-1.5703-0.69922-1.5703-1.5703zm2.2383 7.0156c0-1.2344 1-2.2383 2.2383-2.2383 1.2344 0 2.2383 1 2.2383 2.2383 0 1.2344-1 2.2383-2.2383 2.2383s-2.2383-1.0039-2.2383-2.2383zm7.4961 18.461c0 1.2344-1 2.2383-2.2383 2.2383-1.2344 0-2.2383-1-2.2383-2.2383 0-1.2344 1-2.2383 2.2383-2.2383s2.2383 1.0039 2.2383 2.2383zm-5.1602-4.9297c-0.59375 0.46875-1.4531 0.37109-1.9258-0.22266-0.46875-0.59375-0.37109-1.4531 0.22266-1.9258 0.59375-0.46875 1.4531-0.37109 1.9258 0.22266 0.46875 0.59375 0.37109 1.4531-0.22266 1.9258zm3.5273-21.512c0.86719 0 1.5703 0.70313 1.5703 1.5703s-0.70312 1.5703-1.5703 1.5703c-0.86719 0-1.5703-0.70313-1.5703-1.5703s0.70312-1.5703 1.5703-1.5703zm-10.277 3.3867c0.86719 0 1.5703 0.70312 1.5703 1.5703 0 0.86719-0.70313 1.5703-1.5703 1.5703s-1.5703-0.70312-1.5703-1.5703c0-0.86719 0.70313-1.5703 1.5703-1.5703zm-6.9766 5.9453c0.38672 0.48828 0.30469 1.1992-0.18359 1.5859s-1.1992 0.30469-1.5859-0.18359c-0.38672-0.48828-0.30469-1.1992 0.18359-1.5859 0.48828-0.38281 1.1992-0.30469 1.5859 0.18359zm-4.3242 31.094c0.96875-0.76953 2.375-0.60547 3.1445 0.35938 0.76953 0.96875 0.60547 2.375-0.35938 3.1445-0.96875 0.76953-2.375 0.60547-3.1445-0.35938-0.76953-0.96875-0.60547-2.375 0.35938-3.1445zm3.5078-6.1797c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207zm2.4102-2.9961c-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207zm-0.74609-10.828c0.38672 0.48828 0.30469 1.1992-0.18359 1.5859s-1.1992 0.30469-1.5859-0.18359c-0.38672-0.48828-0.30469-1.1992 0.18359-1.5859 0.48828-0.38672 1.1992-0.30469 1.5859 0.18359zm-5.8047-5.3086c0 0.625-0.50391 1.1289-1.1289 1.1289s-1.1289-0.50391-1.1289-1.1289 0.50391-1.1289 1.1289-1.1289 1.1289 0.50781 1.1289 1.1289zm-4.1406 16.137c-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207zm14.227-6.0469c0.67969-0.53906 1.668-0.42578 2.207 0.25391 0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.54297-0.67969-0.42578-1.668 0.25391-2.207zm0.36719 9.8945c-0.76953-0.96875-0.60547-2.375 0.35938-3.1445 0.96875-0.76953 2.375-0.60547 3.1445 0.35937 0.76953 0.96875 0.60547 2.375-0.35937 3.1445-0.96875 0.76953-2.375 0.60938-3.1445-0.35938zm18.738 14.508c-1.4844-1.8672-1.1719-4.582 0.69531-6.0664s4.582-1.1719 6.0664 0.69531c1.4844 1.8672 1.1719 4.582-0.69531 6.0664-1.8672 1.4844-4.582 1.1719-6.0664-0.69531zm5.6211 10.801c-0.85156-0.16797-1.4062-0.99219-1.2383-1.8477 0.16797-0.85156 0.99219-1.4062 1.8477-1.2383 0.85156 0.16797 1.4062 0.99219 1.2383 1.8477-0.17188 0.85156-0.99609 1.4062-1.8477 1.2383zm11.332-6.375c-0.14453 0.74219-0.86719 1.2266-1.6094 1.082-0.74219-0.14453-1.2266-0.86719-1.082-1.6094 0.14453-0.74219 0.86719-1.2266 1.6094-1.082 0.74609 0.14453 1.2305 0.86719 1.082 1.6094zm-4.3438-3.8125c-0.12109 0.61328-0.71484 1.0117-1.3242 0.89063-0.61328-0.12109-1.0117-0.71484-0.89062-1.3242 0.12109-0.61328 0.71484-1.0117 1.3242-0.89062 0.61328 0.11719 1.0117 0.71094 0.89062 1.3242zm7.1797-2.7383c-0.57422 0.49219-1.4414 0.42188-1.9336-0.15625-0.49219-0.57422-0.42188-1.4414 0.15625-1.9336 0.57422-0.49219 1.4414-0.42188 1.9336 0.15625 0.48828 0.57422 0.41797 1.4414-0.15625 1.9336zm-0.0625-6.25c0.47266-0.40625 1.1875-0.34766 1.5898 0.12891 0.40234 0.47266 0.34766 1.1875-0.12891 1.5898-0.47266 0.40625-1.1875 0.34766-1.5898-0.12891s-0.34375-1.1875 0.12891-1.5898zm6.4336-4.0938c-0.47266 0.40625-1.1875 0.34766-1.5898-0.12891-0.40234-0.47266-0.34766-1.1875 0.12891-1.5898 0.47266-0.40625 1.1875-0.34766 1.5898 0.12891 0.40625 0.47266 0.34766 1.1875-0.12891 1.5898zm-5.1016-6.9961c0.53906 0.67969 0.42578 1.668-0.25391 2.207-0.67969 0.53906-1.668 0.42578-2.207-0.25391-0.53906-0.67969-0.42578-1.668 0.25391-2.207 0.67578-0.53906 1.668-0.42578 2.207 0.25391z"/>
                    <path d="m74.574 12.426c0.66406 0.31641 1.375 0.47656 2.1055 0.47656 1.9102 0 3.6836-1.125 4.5156-2.8672 1.1914-2.4922 0.15625-5.4766-2.3047-6.6484-0.66406-0.31641-1.375-0.47656-2.1055-0.47656-1.9102 0-3.6836 1.125-4.5156 2.8672-1.1914 2.4883-0.15625 5.4727 2.3047 6.6484z"/>
                    <path d="m84.762 75.477c0.64453 1.1641 1.707 2.0117 2.9922 2.3867 0.46484 0.13672 0.94531 0.20703 1.4258 0.20703 2.1953 0 4.1602-1.457 4.7695-3.543 0.76562-2.6172-0.76562-5.3789-3.418-6.1523-0.46484-0.13672-0.94531-0.20703-1.4258-0.20703-2.1953 0-4.1602 1.457-4.7695 3.543-0.37109 1.2695-0.21875 2.6055 0.42578 3.7656z"/>
                    <path d="m44.453 89.348c-0.25391-0.039062-0.51172-0.054687-0.76562-0.054687-2.6055 0-4.8594 1.9727-5.2461 4.5859-0.42969 2.9219 1.5703 5.6445 4.4531 6.0664 0.25391 0.039063 0.51172 0.054688 0.76562 0.054688 2.6055 0 4.8594-1.9727 5.2461-4.5859 0.42969-2.9219-1.5664-5.6445-4.4531-6.0664z"/>
                    <path d="m6.8984 27.242c0.73828 0.39844 1.5664 0.60937 2.3984 0.60937 1.8281 0 3.5-0.98828 4.3594-2.582 0.62891-1.1602 0.75781-2.5 0.37109-3.7695-0.38672-1.2734-1.25-2.3242-2.4297-2.9609-0.73828-0.39844-1.5664-0.60937-2.3984-0.60937-1.8281 0-3.5 0.98828-4.3594 2.582-1.293 2.3984-0.37109 5.418 2.0586 6.7305z"/>
                  </svg>
                  <span className="text">Links</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="pageContent">
          <div className="mainContent">
            <div className="content">
              <h1><mark>Covid-19</mark> Global Trend</h1>
              <div className="fourColumns">
                <div className="column">
                  <div className="box">
                    <span className="title">Confirmed Cases</span>
                    <span className="number total">{totalConfirmed.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span>
                    <span className="value">23% <span className="sign up"></span></span>
                  </div>
                </div>
                <div className="column">
                  <div className="box">
                    <span className="title">New Cases</span>
                    <span className="number">{newConfirmed.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span>
                    <span className="value">23% <span className="sign up"></span></span>
                  </div>
                </div>
                <div className="column">
                  <div className="box">
                    <span className="title">Total Recovered</span>
                    <span className="number recovered">{totalRecovered.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span>
                    <span className="value">23% <span className="sign up"></span></span>
                  </div>
                </div>
                <div className="column">
                  <div className="box">
                    <span className="title">Total Deaths</span>
                    <span className="number death">{totalDeaths.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span>
                    <span className="value">23% <span className="sign up"></span></span>
                  </div>
                </div>
              </div>
              <div className="graphWrapper">
                <div className="twoColumns">
                  <div className="column">
                    <div className="sidebar">
                      <div className="listWrapper">
                        <CustomScrollbars style={{ maxHeight: 700 }}>
                          <ul className="countryList">
                            {
                              dataAdded ?
                              countries.map((country, index) => {
                                return (
                                  <li key={index}><span className="count">{country.TotalConfirmed.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span> {country.Country}</li>
                                )
                              }) :
                              null
                            }
                          </ul>
                        </CustomScrollbars>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="graph">
                      <Map
                        style={{ height: "500px", width: "100%" }}
                        zoom={2}
                        center={[-0.09, 51.505]}>
                        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        {
                          countryData.map((country, index) => {
                            if(typeof country["location"] !== 'undefined') {
                              return (
                                <CircleMarker
                                  key={index}
                                  center={[country["location"]["coordinates"][1], country["location"]["coordinates"][0]]}
                                  radius={1.5 * Math.log(country["latestData"]["cases"] / 10)}
                                  fillOpacity={0.7}
                                  color={colors[Math.floor(Math.random()*colors.length)]}
                                  stroke={false}
                                  center={[country["location"]["coordinates"][1], country["location"]["coordinates"][0]]}
                                >
                                  <Tooltip direction="top" offset={[0, -7]} opacity={1}>
                                    <span>{country["name"] + ": " + country["latestData"]["cases"].toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span>
                                  </Tooltip>
                                </CircleMarker>
                              )
                            }
                          })
                        }
                      </Map>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="aside">
              <div className="asideWrapper">
                React Slider
                Quick Links
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
