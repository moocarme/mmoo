var ctx = document.getElementById("myChart_chordProgcdf");
var randomColorFactor = function() {
            return Math.round(Math.random() * 255);
        };
var randomColor = function() {
            return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',.7)';
        };
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
    	labels: [ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17,
       18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
       35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
       52, 53, 54],
        datasets: [{
            label: 'Cumulative Fraction',
            data: [ 0.05942623,  0.0976155 ,  0.1335693 ,  0.16821908,  0.20175112,
        0.234538  ,  0.2671386 ,  0.29638599,  0.32377049,  0.35115499,
        0.37555887,  0.39679583,  0.41710134,  0.43722057,  0.45696721,
        0.47634128,  0.49459762,  0.51266766,  0.53055142,  0.54843517,
        0.56557377,  0.58252608,  0.5992921 ,  0.61587183,  0.6318927 ,
        0.64791356,  0.66281669,  0.67716095,  0.69150522,  0.70584948,
        0.72000745,  0.73416542,  0.74813711,  0.7619225 ,  0.77533532,
        0.78856185,  0.80160209,  0.81445604,  0.82730999,  0.83997765,
        0.85208644,  0.86419523,  0.87630402,  0.88822653,  0.89996274,
        0.91169896,  0.92324888,  0.93442623,  0.94560358,  0.95659463,
        0.96758569,  0.97839046,  0.98919523,  1.        ],
        backgroundColor: 'rgba(24, 188, 156, 0.3)',
            borderColor: 'rgba(9, 74, 61, 1)',
            borderWidth: 1
        }]
    },
    options: {
    	title: {
            display: true,
            text: 'Cumulative Distribution Function',
            fontSize: 30
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    suggestedMin: 0,
                    suggestedMax: 1,
                },
                scaleLabel: {
        			display: true,
        			labelString: 'Cumulative Fraction',
        			fontSize: 30
      			}
            }],
            xAxes: [{
            	ticks: {
                    beginAtZero:true,
                    maxTicksLimit:15
                },
                scaleLabel: {
        			display: true,
        			labelString: 'Number of Chord Progressions',
        			fontSize: 30
      			}
            }]
        }
        
    }
});