
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'fr'}, 'google_translate_element');
}

const obj = {
  "Todays's Deals" : {
    "type": "Grid",
    "image": ["https://m.media-amazon.com/images/I/91cprvIUaXL._AC_SY170_.jpg", "https://m.media-amazon.com/images/I/61ITpEhbPXL._AC_SY170_.jpg", "https://m.media-amazon.com/images/I/61IzIJBZafL._AC_SY170_.jpg", "https://m.media-amazon.com/images/I/91-tM2RFnkL._AC_SY170_.jpg"],
    "label": ["sd", "asd", "sda", ""],
    "link": [""]
  },
  "Shop by Grades": {
    "type": "Grid",
    "image": ["https://shorturl.at/JjDX2", "https://shorturl.at/GMwEt", "https://rb.gy/74o9jz", "https://rb.gy/tv38g4"],
    "label": ["Pre-K to grade 2", " ", " ", " "]
  },
  "Beats X Kim Kardashian": {
    "type": "single",
    "image": "https://shorturl.at/qQuLZ"
  },
}



function appennd() {
  // variables
  var keys = Object.keys(obj)
  const newDiv = document.createElement("div")
  var InnerDiv = document.createElement("div")
  const h5 = document.createElement("h5")
  var FinalInsert = document.getElementById("cards") 
  var img = document.createElement("img") 
  var finalFit = document.createElement("div")
  
  // class/id names
  newDiv.className = "card"
  InnerDiv.className = "card-body PaddingBottomLess"
  h5.className = "card-title"
  finalFit.className = "FullFit"
  img.className = "FullFit"
  // innertext
  h5.innerText = keys[2]

  // properties:
  img.src = obj[keys[2]].image


  // append childd
  newDiv.appendChild(InnerDiv)
  InnerDiv.appendChild(h5)
  FinalInsert.appendChild(newDiv)
  InnerDiv.appendChild(finalFit)
  finalFit.appendChild(img)



} 

// appennd()

function Grid(title, num){
  var keys = Object.keys(obj)
  const newDiv = document.createElement("div")
  var InnerDiv = document.createElement("div")
  const h5 = document.createElement("h5")
  var FinalInsert = document.getElementById("cards") 
  var img = document.createElement("img") 
  var finalFit = document.createElement("div")
  
  
  // class/id names
  newDiv.className = "card"
  InnerDiv.className = "card-body PaddingBottomLess"
  h5.className = "card-title"
  finalFit.className = "FullFit"
  img.className = "FullFit"
  
  console.log(flexDiv)
  // innertext
  h5.innerText = keys[title]
  // append childd
  newDiv.appendChild(InnerDiv)
  InnerDiv.appendChild(h5)
  FinalInsert.appendChild(newDiv)


  InnerDiv.appendChild(flexDiv)
}

function createAll(obj) {

  // varibles
  var keys = Object.keys(obj)
  
  // loops
  for (i = 0; i<keys.length; i++) {
    var FinalInsert = document.getElementById("cards") 
    const h5 = document.createElement("h5")
    const newDiv = document.createElement("div")
    var InnerDiv = document.createElement("div")
    var img = document.createElement("img") 
    var finalFit = document.createElement("div")

    newDiv.className = "card"
    InnerDiv.className = "card-body PaddingBottomLess"
    h5.innerText = keys[i]
    newDiv.id = i
    InnerDiv.appendChild(h5)
    

    if (obj[keys[i]].type == "Grid") {
      var array = obj[keys[i]].image
      var labelArray = obj[keys[i]].label
      var flexDiv = document.createElement("div")
      flexDiv.id = i
      for (var i = 0; i < array.length ; i++) {
        var x = document.createElement("a")
        var flexDiv = document.createElement("div")
        flexDiv.className = "cardFlex"
        var y = document.createElement("img")     
        y.className = "card-img-top"
        y.src = array[i]
        x.target = "_blank" 
        // newDiv.appendChild(x)
        x.appendChild(y)
        flexDiv.appendChild(x)
        img.src = array[i]
        console.log(img.src)
        if (labelArray[i] != "") {
          var label = document.createElement("p")
          x.appendChild(label)
          label.id = "NoLink"
          label.innerText = labelArray[i]
        } 
        InnerDiv.appendChild(newDiv)
      }
      newDiv.appendChild(flexDi v)

    
    }
    
    // InnerDiv.appendChild(finalFit)
    FinalInsert.appendChild(newDiv)   
    newDiv.appendChild(InnerDiv)
        
        
  }
    
  }




createAll(obj)