let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let answer=document.querySelector(".Searchword");
let define=document.querySelectorAll(".defination");
let blank=document.querySelector(".blank");
let rhyming=document.querySelector(".synonym")
let POF=document.querySelector(".Point")
let website=document.querySelector(".Ref");
const getData = async (searchValue) => {
    let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`);
    let jsonData = await data.json();
    console.log(jsonData)
    
    
    let srcode="Word";
    
    console.log(jsonData[0].word);
    answer.innerHTML=`<b><u>${srcode}</u></b>`+` = "${jsonData[0].word}" `
    answer.style.fontSize="50px"
    answer.style.fontWeight=100;
    console.log("word=",jsonData[0].word)
    
    //defination
    let srccode="Defination"
  
    define[0].innerHTML=`${srccode}`+` : ${jsonData[0].meanings[0].definitions[0].definition==undefined ? "not FOund" : jsonData[0].meanings[0].definitions[0].definition}`
    define[1].innerHTML=`${srccode}`+` : ${jsonData[0].meanings[1].definitions[0].definition==undefined ? "not FOund" : jsonData[0].meanings[1].definitions[0].definition}`
   

     let Synonyms="Synonyms"
    rhyming.innerHTML=`${Synonyms}`+` : ${jsonData[0].meanings[0].synonyms[0]==undefined ? "Not Available In This API" : jsonData[0].meanings[0].definitions[0].definition}`;
     console.log("synonym=",jsonData[0].meanings[0].synonyms[0])


     let poSpeech="Point Of Speech"
     POF.innerHTML=`${poSpeech}`+` : ${jsonData[0].meanings[1].partOfSpeech==undefined?"not found":jsonData[0].meanings[1].partOfSpeech}`
    console.log("point of Speech=",jsonData[0].meanings[1].partOfSpeech)



    let wesbite1="Reference"
    website.innerHTML=`${wesbite1}`+ ` :<a href= ${jsonData[0].sourceUrls[0]} target="_blank"       >Click Here for Reference </a>`
    console.log(jsonData[0].sourceUrls[0])




}
    searchBtn.addEventListener("click", function(){
       
        let searchValue = searchInput.value;
        if(searchValue == ""){
            alert("First Enter Word")
        }
        else{
            getData(searchValue)
        }
    })



   