(function() {
    function b() {
        return window.anychart.color.lighten(this.sourceColor)
    }

    function c() {
        return window.anychart.color.darken(this.sourceColor)
    }

    function a() {
        return this.sourceColor
    }
    window.anychart = window.anychart || {};
    window.anychart.themes = window.anychart.themes || {};
    window.anychart.themes.lightBlue = {
        palette: {
            type: "distinct",
            items: "#40c4ff #0288d1 #9fa8da #5c6bc0 #7e57c2 #54dbdf #15a9c7 #00897b #304ffe #01579b".split(" ")
        },
        defaultOrdinalColorScale: {
            autoColors: function(a) {
                return window.anychart.color.blendedHueProgression("#40c4ff",
                    "#01579b", a)
            }
        },
        defaultLinearColorScale: {
            colors: ["#40c4ff", "#01579b"]
        },
        defaultFontSettings: {
            fontFamily: '"Lucida Console", Monaco, monospace',
            fontColor: "#546e7a",
            fontSize: 12
        },
        defaultBackground: {
            fill: "#eceff1",
            stroke: "#cfd8dc",
            cornerType: "round",
            corners: 0
        },
        defaultAxis: {
            stroke: "#b0bec5",
            ticks: {
                stroke: "#b0bec5"
            },
            minorTicks: {
                stroke: "#cfd8dc"
            }
        },
        defaultGridSettings: {
            stroke: "#b0bec5"
        },
        defaultMinorGridSettings: {
            stroke: "#cfd8dc"
        },
        defaultSeparator: {
            fill: "#cfd8dc"
        },
        defaultTooltip: {
            background: {
                fill: "#eceff1 0.9",
                corners: 3
            },
            fontSize: 12,
            fontColor: "#78909c",
            title: {
                align: "center",
                fontSize: 14
            },
            content: {
                fontColor: "#78909c",
                fontSize: 12
            },
            padding: {
                top: 10,
                right: 15,
                bottom: 10,
                left: 15
            },
            separator: {
                margin: {
                    top: 10,
                    right: 10,
                    bottom: 10,
                    left: 10
                }
            }
        },
        defaultColorRange: {
            stroke: "#b0bec5",
            ticks: {
                stroke: "#b0bec5",
                position: "outside",
                length: 7,
                enabled: !0
            },
            minorTicks: {
                stroke: "#b0bec5",
                position: "outside",
                length: 5,
                enabled: !0
            },
            marker: {
                padding: {
                    top: 3,
                    right: 3,
                    bottom: 3,
                    left: 3
                },
                fill: "#b0bec5",
                hoverFill: "#b0bec5"
            }
        },
        defaultScroller: {
            fill: "#dfe1e3",
            selectedFill: "#b0bec5",
            thumbs: {
                fill: "#cfd8dc",
                stroke: "#b0bec5",
                hoverFill: "#eceff1",
                hoverStroke: "#b0bec5"
            }
        },
        chart: {
            defaultSeriesSettings: {
                candlestick: {
                    risingFill: "#01579b",
                    risingStroke: "#01579b",
                    hoverRisingFill: b,
                    hoverRisingStroke: c,
                    fallingFill: "#40c4ff",
                    fallingStroke: "#40c4ff",
                    hoverFallingFill: b,
                    hoverFallingStroke: b,
                    selectRisingStroke: "3 #01579b",
                    selectFallingStroke: "3 #40c4ff",
                    selectRisingFill: "#333333 0.85",
                    selectFallingFill: "#333333 0.85"
                },
                ohlc: {
                    risingStroke: "#01579b",
                    hoverRisingStroke: b,
                    fallingStroke: "#40c4ff",
                    hoverFallingStroke: b,
                    selectRisingStroke: "3 #01579b",
                    selectFallingStroke: "3 #40c4ff"
                }
            },
            title: {
                fontSize: 14
            },
            padding: {
                top: 20,
                right: 25,
                bottom: 15,
                left: 15
            }
        },
        pieFunnelPyramidBase: {
            labels: {
                fontColor: null
            },
            connectorStroke: "#b0bec5",
            outsideLabels: {
                autoColor: "#546e7a"
            },
            insideLabels: {
                autoColor: "#37474f"
            }
        },
        map: {
            unboundRegions: {
                enabled: !0,
                fill: "#cfd8dc",
                stroke: "#b0bec5"
            },
            defaultSeriesSettings: {
                base: {
                    labels: {
                        fontColor: "#212121"
                    }
                },
                bubble: {
                    stroke: c
                },
                connector: {
                    selectStroke: "1.5 #000",
                    markers: {
                        stroke: "1.5 #cfd8dc"
                    },
                    hoverMarkers: {
                        stroke: "1.5 #cfd8dc"
                    },
                    selectMarkers: {
                        stroke: "1.5 #cfd8dc",
                        fill: "#000"
                    }
                }
            }
        },
        sparkline: {
            padding: 0,
            background: {
                stroke: "#eceff1"
            },
            defaultSeriesSettings: {
                area: {
                    stroke: "1.5 #40c4ff",
                    fill: "#40c4ff 0.5"
                },
                column: {
                    fill: "#40c4ff",
                    negativeFill: "#01579b"
                },
                line: {
                    stroke: "1.5 #40c4ff"
                },
                winLoss: {
                    fill: "#40c4ff",
                    negativeFill: "#01579b"
                }
            }
        },
        bullet: {
            background: {
                stroke: "#eceff1"
            },
            defaultMarkerSettings: {
                fill: "#40c4ff",
                stroke: "2 #40c4ff"
            },
            padding: {
                top: 5,
                right: 10,
                bottom: 5,
                left: 10
            },
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            rangePalette: {
                items: ["#90a4ae", "#b0bec5", "#cfd8dc", "#D6DEE1", "#E6EAED"]
            }
        },
        heatMap: {
            stroke: "1 #eceff1",
            hoverStroke: "1.5 #eceff1",
            selectStroke: "2 #eceff1",
            labels: {
                fontColor: "#212121"
            }
        },
        treeMap: {
            headers: {
                background: {
                    enabled: !0,
                    fill: "#cfd8dc",
                    stroke: "#b0bec5"
                }
            },
            hoverHeaders: {
                fontColor: "#546e7a",
                background: {
                    fill: "#b0bec5",
                    stroke: "#b0bec5"
                }
            },
            labels: {
                fontColor: "#212121"
            },
            selectLabels: {
                fontColor: "#fafafa"
            },
            stroke: "#b0bec5",
            selectStroke: "2 #eceff1"
        },
        stock: {
            padding: [20, 30, 20, 60],
            defaultPlotSettings: {
                xAxis: {
                    background: {
                        fill: "#cfd8dc 0.5",
                        stroke: "#b0bec5"
                    }
                }
            },
            scroller: {
                fill: "none",
                selectedFill: "#cfd8dc 0.5",
                outlineStroke: "#b0bec5",
                defaultSeriesSettings: {
                    base: {
                        color: "#40c4ff 0.5",
                        selectStroke: a
                    },
                    candlestick: {
                        risingFill: "#999",
                        risingStroke: "#999",
                        fallingFill: "#999",
                        fallingStroke: "#999",
                        selectRisingStroke: a,
                        selectFallingStroke: a,
                        selectRisingFill: a,
                        selectFallingFill: a
                    },
                    ohlc: {
                        risingStroke: "#999",
                        fallingStroke: "#999",
                        selectRisingStroke: a,
                        selectFallingStroke: a
                    }
                }
            },
            xAxis: {
                background: {
                    enabled: !1
                }
            }
        }
    }
})();