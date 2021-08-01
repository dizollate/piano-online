let pianoKeys = document.querySelectorAll(".key");
const piano = document.querySelectorAll(".piano");
const Pi = document.getElementById("piano");
window.addEventListener("keydown", playNote);
window.addEventListener("keyup", playNoteUp);


var elem = document.documentElement;

const letters = document.querySelector('#letters');
const notes = document.querySelector('#notes');

const fullscreenbtn = document.querySelector('.fullscreen')
fullscreenbtn.addEventListener('click', function () {
  if(document.fullscreen){
    document.exitFullscreen()
  }else{
    document.documentElement.requestFullscreen();
  }
})


letters.addEventListener('click', (e)=> {
	let hintAll = document.querySelectorAll(".hints");
	hintAll.forEach((i)=> {
		i.classList.add("block");
		i.classList.remove("none");
	})
	console.log(hintAll)
	let keyAll = document.querySelectorAll(".hinkey");
	keyAll.forEach((i)=> {
		i.classList.add("none");
		i.classList.remove("block");
	})
	let letActive = document.getElementById("letters");
	letActive.classList.add("active");
	let notActive = document.getElementById("notes");
	notActive.classList.remove("active");
});

notes.addEventListener('click', (e)=> {
	let hintAll = document.querySelectorAll(".hints");
	hintAll.forEach((i)=> {
		i.classList.add("none");
		i.classList.remove("block");
	})
	let keyAll = document.querySelectorAll(".hinkey");
	keyAll.forEach((i)=> {
		i.classList.add("block");
		i.classList.remove("none");
	})
	let letActive = document.getElementById("letters");
	letActive.classList.remove("active");
	let notActive = document.getElementById("notes");
	notActive.classList.add("active");
	console.log(keyAll)
});

const pia =  document.getElementById("body");

const startSound = (event) => {
	let key = event.target;
	let note = document.getElementById(key.dataset.note);
 	note.currentTime = 0;
 	note.play();
 	event.target.classList.add("active");

}

const stopSound = (event) => {
		let key = event.target;
 		let note = document.getElementById(key.dataset.note);
  		event.target.classList.remove("active");

}

const startCorrespondOver = (event) => {
   let key = event.target;
	let note = document.getElementById(key.dataset.note);
 	note.currentTime = 0;
 	note.play();
   if (event.target.classList.contains("key")) {
    event.target.classList.add("active");
  } 

  pianoKeys.forEach((elem) => {
    elem.addEventListener("mouseover", startSound)
    elem.addEventListener("mouseout", stopSound)
  });
}

const stopCorrespondOver = (event) => {
  pianoKeys.forEach((elem) => {
    elem.classList.remove("active");
    elem.removeEventListener("mouseover", startSound)
    elem.removeEventListener("mouseout", stopSound)
  });
}

Pi.addEventListener("mousedown", startCorrespondOver);
Pi.addEventListener("mouseup", stopCorrespondOver);
pia.addEventListener("mouseup", stopCorrespondOver);

function playNote(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.add("active");
    audio.currentTime = -0.2;
    audio.play();
    if (e.repeat == true) audio.pause();
}

function playNoteUp(e) {
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.remove("active");
}
