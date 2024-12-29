let searchInputEle=document.getElementById("searchInput");
let searchResultsEle=document.getElementById("searchResults");
let spinnerEle=document.getElementById("spinner");
    function createAndAppendValues(result)
     {
         let {description,link,title} =result;
         //Creating Result Item : Div container - result-item
         let resultItemEle=document.createElement("div");
         resultItemEle.classList.add("result-item");
         searchResultsEle.appendChild(resultItemEle);
        //  //Anchor URL  :  Creating Title Element - result-title
         let resultTitleEle=document.createElement("a");
         resultTitleEle.classList.add("result-title");
         resultTitleEle.href=link;
         resultTitleEle.textContent=title;
         resultTitleEle.target="_blank";
         resultItemEle.appendChild(resultTitleEle);
         //Creating Break Element
         let titleBreakEle=document.createElement("br");
         resultItemEle.appendChild(titleBreakEle);
         //Anchor URL  :  Creating URL Element - result-url
         let urlEle=document.createElement("a");
         urlEle.classList.add("result-url");
         urlEle.href=link;
         urlEle.textContent=link;
         resultItemEle.appendChild(urlEle);
         //Creating BREAK ELement
         let urlBreakEle=document.createElement("br");
         resultItemEle.appendChild(urlBreakEle);
         
         //Creating Description Element
         
         let descriptionEle=document.createElement("p");
         descriptionEle.classList.add("link-description");
         descriptionEle.textContent=description;
         resultItemEle.appendChild(descriptionEle);
     }
   function displayResults(searchResults){
        spinnerEle.classList.toggle("d-none");
         for(let result of searchResults){
         createAndAppendValues(result);
     }}


     function searchWikipedia(event)
     {
        if(event.key==="Enter")
        {
        spinnerEle.classList.toggle("d-none");
        searchResultsEle.textContent="";
        let searchElement=searchInputEle.value;
        let url="https://apis.ccbp.in/wiki-search?search="+searchElement;
        let options={
         method:"GET"
        };
        fetch(url,options) 
        .then(function(response){
         return response.json();
        })
        .then(function(jsonData){
        let {search_results}=jsonData;
        displayResults(search_results);
         // Display the search results in the UI
        });
     }}
    
      
    searchInputEle.addEventListener("keydown",searchWikipedia);