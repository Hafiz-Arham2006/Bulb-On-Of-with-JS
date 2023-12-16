
function btnOn(){
    document.getElementById('img').src="on.jpg"
    document.querySelector("span").innerText="On"
    document.getElementById('on').style.backgroundColor="blue"
    document.getElementById('on').style.color="white"
    document.getElementById('of').style.backgroundColor="white"
    document.getElementById('of').style.color="black"
    

}
function btnOf(){
    document.getElementById('img').src="of.jpg"
    document.querySelector('span').innerText="Off"
    document.getElementById('of').style.backgroundColor="blue"
    document.getElementById('of').style.color="white"
    document.getElementById('on').style.backgroundColor="white"
    document.getElementById('on').style.color="black"
  
}
