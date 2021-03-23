console.log("The javscript has loaded!");

var citationDataSource = "citation-data/usable-data/parking_citation_data_cleaned_2021-03-22.csv"

var citationData = {}

var yearRunningSum = 0

d3.csv(citationDataSource).then(function(citationDataCSV) {
    console.log("Past the data load.")
    console.log(citationDataCSV[0])

    // console.log(citationDataCSV[0].FineAmount)
    
    for (i=0; i<citationDataCSV.length; i++){
        if (citationDataCSV[i].CitationYear == "2020") {
            // console.log(citationDataCSV[i].FineAmount)
            yearRunningSum += parseFloat(citationDataCSV[i].FineAmount)
        }
    }
    console.log(formatter.format(yearRunningSum))

});



// number formatter to return citation Sum as a number.
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});











