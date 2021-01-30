let elem = document.getElementById('mySearch');
let list1 = document.createElement('li');
let list2 = document.createElement('li');
let list3 = document.createElement('li');

function addSearch() {
		console.log('Was geht?');
    var $suggestions = document.getElementById('myDataList');
    var text = elem.value;
    if(text.length){
        $suggestions.hidden = false;
				list1.innerHTML = text;
        $suggestions.appendChild(list1);
				list2.innerHTML = 'Veritatis et ' + text;
        $suggestions.appendChild(list2);
				list3.innerHTML = 'Veritatis et ' + text +  ' quod licet';
        $suggestions.appendChild(list3);
    } else {
        $suggestions.hidden = true;
    }
}

window.onkeyup = addSearch;
elem.addEventListener('click', addSearch);
window.onmouseup = addSearch;
