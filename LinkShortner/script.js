let btn = document.getElementById("shortener");
let longURL = document.getElementById("longUrl");
let shortURL = document.getElementById("shortUrl");

btn.addEventListener("click", short);

function short(){
    let url = longURL.value;
    const shortCode = hashCode(url);
    
    localStorage.setItem(shortCode, url);
    
    const short = 'https://' +shortCode;
    shortURL.value = `${short}`;
}

function hashCode(str){
    let hash = 0;
    for(let i=0; i<str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash &=hash;
    }
    return hash.toString(36).substring(1);
}

let copybtn = document.getElementById("copy");

copybtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(shortURL.value);
    copy.innerHTML = "Copied";
});