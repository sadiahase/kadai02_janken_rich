$(document).ready(function(){

    $('#game').on('change',function(){
        var imgSize = 'height="300" width="400";'

        switch(this.value){
            default:
                $('#rock').text ("Prince takes Princess")
                $('#paper').text ("Princess takes Prince")
                $('#scissors').text ("Prince takes Doragon")
        }
        $('#images').html(
            // '<img id="rock_img" src="images/AdobeStock_625058114_Preview.jpeg" alt="Strong Prince"'+ imgSize + '>'
            // '<img id="paper_img" src="images/AdobeStock_137952013_Preview.jpeg" alt="Beautiful Princess" + imgSize>' + '>'
            // '<img id="scissors_img" src="images/AdobeStock_278860180_Preview.jpeg" alt="Scary Dragon"'+ imgSize> + '>'
// 上記ではエラーになった。’の位置に注意。なぜか1行目の頭につけるとエラーが出る
    '        <img id="rock_img" src="images/AdobeStock_625058114_Preview.jpeg" alt="Strong Prince" ' + imgSize + '>' +
                '<img id="paper_img" src="images/AdobeStock_137952013_Preview.jpeg" alt="Beautiful Princess" ' + imgSize + '>' +
                '<img id="scissors_img" src="images/AdobeStock_278860180_Preview.jpeg" alt="Scary Dragon" ' + imgSize + '>' 
            );
    });
});
// varでは定義をするがif関数の定義ではうまくいかず、varで最初のPrince以下を定義することにした。37−41行目はコメントアウト
var winTotal=0
var lossesTotal=0
var tiesTotal=0
var compChoice
var text = document.getElementById('result')
var whichGame = document.getElementById('game')
var dynRock, dynPaper, dynScissors;
var dynRock="Prince"
var dynPaper="Princess"
var dynScissors="Dragon"

function setVariables(){
    compChoice=Math.floor(Math.random()*3+1)
    // if(whichGame){
    //      dynRock="Prince"
    //      dynPaper="Princess"
    //      dynScissors="Dragon"
    // };
};
//user picks rock//
$(document).on('click',"#rock_img",function(){
    setVariables()
// innerHTMLは｀｀で囲む。通常の’’ではない。
    if(compChoice === 1){
        text.innerHTML= `引き分け！あなたは${dynRock}を選びました。相手も${dynRock}を選びました。`
        $('#ties').html(++tiesTotal)
    }
    else if(compChoice === 2){
        text.innerHTML=`あなたの負け！あなたは${dynRock}を選びました。相手は${dynPaper}を選びました。`
        $('#losses').html(++lossesTotal)
    }
    else if(compChoice === 3){
        text.innerHTML =`あなたの勝ち！あなたは${dynRock}を選びました。相手は${dynScissors}を選びました。`
        $('#wins').html(++winTotal)
}   
});

//user picks paper//
$(document).on('click',"#rock_img",function(){
        setVariables()

    if(compChoice === 1){
            text.innerHTML= `引き分け！あなたは${dynPaper}を選びました。相手も${dynPaper}を選びました。。`
            $('#ties').html(++tiesTotal)
        }
    else if(compChoice === 2){
        text.innerHTML=`あなたの負け！あなたは${dynPaper}を選びました。相手は${dynScissors}を選びました。`
    $('#losses').html(++lossesTotal)
    }
    else if(compChoice === 3){
        text.innerHTML =`あなたの勝ち！あなたは${dynPaper}を選びました。相手は${dynRock}を選びました。`
    $('#wins').html(++winTotal)
}
});

//user picks scissors//
$(document).on('click',"#rock_img",function(){
    setVariables()

    if(compChoice === 1){
        text.innerHTML= `引き分け！あなたは${dynScissors}を選びました。相手も${dynScissors}も選びました。`
        $('#ties').html(++tiesTotal)
    }
else if(compChoice === 2){
    text.innerHTML=`あなたの負け！あなたは${dynScissors}を選びました。相手は${dynRock}を選びました。`
$('#losses').html(++lossesTotal)
}
else if(compChoice === 3){
    text.innerHTML =`あなたの勝ち！あなたは${dynScissors}を選びました。相手は${dynPaper}を選びました。`
$('#wins').html(++winTotal)
}
});
