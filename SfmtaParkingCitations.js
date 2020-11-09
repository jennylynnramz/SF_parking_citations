console.log("The thing has loaded!");

var dataSource = "https://data.sfgov.org/resource/ab4h-6ztd.json";

d3.json(dataSource).then(function(citationData) {
    console.log(citationData)


});

