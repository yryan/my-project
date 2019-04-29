function goBack(){
	window.history.back();
	console.log("window", window);
	console.log("window.history: ", window.history);
}
goBack ()
//function hello(message){
	//console.log("hello World!", message);
//}
//hello("Yoko");

var navbar = {
	"home": {
		"url": "index.html",
		"heading": "Home"
	},
	"about": {
		"url": "about.html",
		"heading": "About Me"
		
	},
	"blog:": {
		"url": "blog.html",
		"heading": "blog"
	},
	"Contact":{
		"url": "contact.html",
		"heading": "Contact Us"
	}
};
//for loop
var location = 0;
function navigationBar(pageID){
	console.log ('pageID', pageID, typeof navbar);
	if(typeof navbar === "object"){
		console.log ("yes");
		for(var n in navbar) {
			console.log("n ->", n)
			console.log ("navbar ->", navbar);
			document.getElementById("navbarUL"),
			appedChild(
			document.createElement('li')
			) 
			setAttribute('class', 'item');
		
		var nav;
		if (pageID === "home"){
			nav = '<a hreg="'+ navbar[pageID].url + '#' +n+'">'+ navbar[n].heading+'</a>'
		}else {
			nav = '<a href="' +navbar[n].url+'"> '+navbar[n].heading+'</a>';
		}
		document.getElementsByTagName("li")[1].innerHTML = nav;

		location++;
		console.log('1++', location);
		}
	}   else {
		console.log ("error")
	}

}
//navigationBar ("home")