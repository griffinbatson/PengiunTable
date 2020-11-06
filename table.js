var tablePromise = d3.json("classData.json");

var getImg = function(img){
    return "imgs/"+img.picture;
}
var quizMean = function(student){
    var allQuizes = student.quizes.map(function(quiz){
        return quiz.grade})
    return d3.mean(allQuizes)
}
var homeworkMean = function(student){
    var allHomework = student.homework.map(function(homework){
        return homework.grade})
    return d3.mean(allHomework)
}
var testMean = function(student){
    var allTests = student.test.map(function(test){
        return test.grade})
    return d3.mean(allTests)
}
var final = function(student){
    var finalGrade = student.final.map(function(final){return final.grade})
    return finalGrade
}
var successFCN = function(students){
    console.log(students);
        var row = d3.select("tbody") .selectAll("tr")
        .data(students)
        .enter()
        .append("tr")
        
        row.append("td")
            .append("img")
            .attr("src", getImg);
    
        row.append("td")
            .text(quizMean)
    
        row.append("td")
            .text(homeworkMean)
    
        row.append("td")
            .text(testMean)
        
        row.append("td")
            .text(final)

}
var failFCN = function(errorMsg){
    console.log("Something went wrong", errorMsg);
    d3.selectAll("body")
    .text("Something went wrong");

}

tablePromise.then(successFCN, failFCN)


/*var quizCompare( stuA, stuB){
    var quizA = quizMean(stuA);
    var quizB = quizMean(stuB);
    if (quizA == quizB){
        return 0;}
    else if (quizA > quizB){
        return -1;}
    else {return 1;}
    }
var clearTable = function()
{
    d3.selectAll("table tbody tr thead td")
    .remove();
}*/