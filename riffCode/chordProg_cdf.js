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
            label: 'Country',
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
        },
        {
            label:'Jazz',
            data: [ 0.03906601,  0.07768298,  0.11585092,  0.15334531,  0.18881904,
                    0.22361922,  0.2532555 ,  0.28019758,  0.30489448,  0.32869331,
                    0.35249214,  0.37606646,  0.39649753,  0.41670409,  0.43601257,
                    0.45509654,  0.47373148,  0.49191738,  0.50987876,  0.52694207,
                    0.54355635,  0.55994612,  0.57543781,  0.59025595,  0.60462506,
                    0.61854513,  0.63156713,  0.64436462,  0.65693758,  0.66951055,
                    0.681859  ,  0.69398294,  0.70610687,  0.71800629,  0.7299057 ,
                    0.7415806 ,  0.7532555 ,  0.7649304 ,  0.77638078,  0.78760665,
                    0.79860799,  0.80960934,  0.82038617,  0.831163  ,  0.84171531,
                    0.85226762,  0.86259542,  0.87292322,  0.88302649,  0.89290525,
                    0.9025595 ,  0.91221374,  0.92186798,  0.93107319]
        },
        {
            label: 'Blues',
            data: [ 0.04021501,  0.07744376,  0.11407525,  0.14772049,  0.18096755,
                    0.21361736,  0.24606809,  0.27732431,  0.30579335,  0.33326697,
                    0.35536532,  0.37607008,  0.39657575,  0.41688234,  0.43679076,
                    0.4565001 ,  0.47601035,  0.49492335,  0.51363727,  0.53155485,
                    0.54787975,  0.56380649,  0.57953414,  0.5952618 ,  0.61098945,
                    0.62631893,  0.64144933,  0.65618156,  0.67011746,  0.68405335,
                    0.69798925,  0.71112881,  0.72426837,  0.73720884,  0.74995023,
                    0.76249253,  0.77503484,  0.78678081,  0.79832769,  0.80987458,
                    0.82122238,  0.83217201,  0.84292256,  0.85347402,  0.8638264 ,
                    0.87378061,  0.88373482,  0.89368903,  0.90344416,  0.9130002 ,
                    0.92235716,  0.93131595,  0.94027474,  0.94923353]
        },
        {
            label: 'Rock',
            data: [ 0.1108545 ,  0.17338781,  0.21460295,  0.25368627,  0.29046012,
                    0.32208207,  0.35139456,  0.37946349,  0.40611121,  0.43151537,
                    0.45532066,  0.47770474,  0.49955587,  0.52051874,  0.5404157 ,
                    0.55960206,  0.57612365,  0.59264523,  0.60916681,  0.62515545,
                    0.64078877,  0.65588915,  0.67081187,  0.68484633,  0.69870314,
                    0.71238231,  0.72588382,  0.73920767,  0.75217623,  0.76496713,
                    0.77740274,  0.78966069,  0.80191864,  0.81399893,  0.82607923,
                    0.83798188,  0.84988453,  0.86178717,  0.87280156,  0.88346065,
                    0.89394209,  0.90442352,  0.91419435,  0.92396518,  0.93373601,
                    0.94350684,  0.95310002,  0.9626932 ,  0.97228637,  0.9817019 ,
                    0.99093978,  1.        ]
        },
        {
            label:'Classical',
            data: [ 0.05006878,  0.09848693,  0.14442916,  0.17083906,  0.19642366,
                    0.21925722,  0.24181568,  0.26299862,  0.28335626,  0.30233838,
                    0.31994498,  0.33727648,  0.35460798,  0.37083906,  0.38624484,
                    0.40165062,  0.41678129,  0.43136176,  0.44594223,  0.46024759,
                    0.47427785,  0.48748281,  0.50068776,  0.51361761,  0.52654746,
                    0.5394773 ,  0.55213205,  0.5647868 ,  0.57744154,  0.59009629,
                    0.60220083,  0.61430536,  0.6261348 ,  0.63768913,  0.64924347,
                    0.6607978 ,  0.67235213,  0.68390646,  0.6954608 ,  0.70701513,
                    0.71856946,  0.72984869,  0.74112792,  0.75213205,  0.76313618,
                    0.7741403 ,  0.78514443,  0.79587345,  0.80660248,  0.8173315 ,
                    0.82778542,  0.83796424,  0.84814305,  0.85832187]
        },
        {
            label: 'Alternative',
            data: [ 0.10350991,  0.16022099,  0.19938252,  0.23659409,  0.2720182 ,
                    0.3041924 ,  0.33116672,  0.35700357,  0.38154046,  0.40591485,
                    0.42947676,  0.44978876,  0.46977576,  0.48911277,  0.50779981,
                    0.52648684,  0.54484888,  0.56321092,  0.58076048,  0.59798505,
                    0.61472213,  0.62983425,  0.64478388,  0.65973351,  0.67452064,
                    0.68882028,  0.70263243,  0.71563211,  0.72830679,  0.74081898,
                    0.75268118,  0.76454339,  0.7759181 ,  0.78729282,  0.79866753,
                    0.80987975,  0.82109197,  0.8321417 ,  0.84254144,  0.85277868,
                    0.86301592,  0.87309067,  0.88300292,  0.89291518,  0.90250244,
                    0.9120897 ,  0.92151446,  0.93077673,  0.940039  ,  0.94897628,
                    0.95775106,  0.96636334,  0.97497563,  0.98342541]
        },
        {
            label: 'Reggae',
            data: [ 0.06181619,  0.10968271,  0.15289934,  0.18544858,  0.21635667,
                    0.2464442 ,  0.27516411,  0.3036105 ,  0.33150985,  0.35585339,
                    0.37992341,  0.40371991,  0.42642232,  0.44912473,  0.47155361,
                    0.49343545,  0.51531729,  0.5369256 ,  0.55826039,  0.57768053,
                    0.59628009,  0.61405908,  0.63019694,  0.64606127,  0.66110503,
                    0.67560175,  0.69009847,  0.70459519,  0.71881838,  0.73304158,
                    0.74699125,  0.7606674 ,  0.7737965 ,  0.7869256 ,  0.79978118,
                    0.81154267,  0.82330416,  0.83506565,  0.84682713,  0.8583151 ,
                    0.86980306,  0.88129103,  0.89277899,  0.90426696,  0.9154814 ,
                    0.92642232,  0.93736324,  0.94803063,  0.95869803,  0.9690919 ,
                    0.97948578,  0.98987965,  1.        ]
        },
        {
            label: 'World',
            data: [ 0.0582205 ,  0.09632495,  0.1344294 ,  0.16827853,  0.19961315,
                    0.22746615,  0.25222437,  0.2754352 ,  0.29748549,  0.31953578,
                    0.34061896,  0.36073501,  0.37911025,  0.39729207,  0.41489362,
                    0.43210832,  0.44893617,  0.46576402,  0.48259188,  0.49922631,
                    0.51547389,  0.53152805,  0.54700193,  0.56247582,  0.57756286,
                    0.59226306,  0.60696325,  0.62166344,  0.63617021,  0.65067698,
                    0.66479691,  0.6787234 ,  0.69245648,  0.70580271,  0.71895551,
                    0.73210832,  0.7450677 ,  0.75764023,  0.77001934,  0.78239845,
                    0.79439072,  0.80599613,  0.81740812,  0.82882012,  0.84003868,
                    0.85125725,  0.86170213,  0.872147  ,  0.88239845,  0.8926499 ,
                    0.90270793,  0.91276596,  0.92282398,  0.93288201]
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