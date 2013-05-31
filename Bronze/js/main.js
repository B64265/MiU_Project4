//Jeremy Goldman
//MIU - Project 1
//Term 1304
//04-09-2013




//Make sure DOM in loaded and ready to go!
window.addEventListener("DOMContentLoaded", function(){


	//Shortcut for getElementById
	function $(x){
		
		var currentElement = document.getElementById(x);
		return currentElement;
	}
	
	//Create select field element, and add options
	function createGroups(){
		
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			createSelect = document.createElement('select');
			createSelect.setAttribute("id", "groups");
		
		for(var i=0, j=catGroups.length; i<j; i++){
			
			var createOptions = document.createElement('option');
			var optionText = catGroups[i];
			createOptions.setAttribute("value", optionText);
			createOptions.innerHTML = optionText;
			createSelect.appendChild(createOptions);
		}
		
		selectLi.appendChild(createSelect);
		
		
	}
	
	//Find valued of radio button
	function getSelectedRadio(){
		
		var radioButtons = document.forms[0].priority;
		for(var i=0; i<radioButtons.length; i++){
			
			if(radioButtons[i].checked){
				priorityValue = radioButtons[i].value;
			}
		}
	}
	
	
	// Gather data from form field, store in object, then store in local storage
	function storeData (key) {
		if (!key) {
			var id = Math.floor(Math.random()*1000000);
		} else {
			var id = key;
		}		
		getSelectedRadio();
		
		//Form data into an object..
		//Object properties has array with label and value.
		
		var item 				= {};
		item.group 				= ["Group:", $('groups').value];
		item.remindTitle 		= ["Reminder Title:", $('remindTitle').value];
		item.dueDate			= ["Due Date:", $('due').value];
		item.priority			= ["Priority:", priorityValue];
		item.recurrence			= ["Recurrence:",$('recurrence').value];
		item.description		= ["Description:", $('description').value];
		
		
		//Save to Local Storage
		localStorage.setItem(id, JSON.stringify(item));
		alert("Reminder is set!");
		
		window.location = 'index.html';
		window.reload();
	}
	
	
	function getSomeData(){
				
		if(localStorage.length === 0){
			
			alert("There is no data in local storage, so default data was added.");
			prefillData();
			
		}
		
		// determine if I should add list to search or browse pages
		if ((this.id === "Personal") || (this.id === "Work") || (this.id === "Other")) {
			var appendLocation = $('browseReminderList');
			$('browseReminderList').innerHTML = "";
			console.log("Running like it should....");
			filterCats = this.id;
			browseCheck = true;
		} else {
			var appendLocation = $('reminderList');
			$('reminderList').innerHTML = "";
			console.log("Running like it should.... From SEARCH");
			browseCheck = false;
		}
		
		// check for browsing and filter
						
		// collapsing items
		for (var i = 0, j = localStorage.length; i < j; i++) {
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			
			if (browseCheck) {
			console.log(obj.group[1]);
				if (obj.group[1] === filterCats) {
					readyCheck = true;
				} else {
					readyCheck = false;
				}
			} else {
				readyCheck = true;
			}
			
			if (readyCheck) {
				if(browseCheck){
				
				var newImg = document.createElement('img');
				var setSrc = newImg.setAttribute("src", "img/"+ filterCats +".png");
				newImg.setAttribute("height", "128");
				newImg.setAttribute("width", "128");
				

				var makeEntry = document.createElement('ul');
				makeEntry.setAttribute("data-role", "listview");
				appendLocation.appendChild(makeEntry);
				var makeNewLi = document.createElement('li');
				makeEntry.appendChild(makeNewLi);
				makeNewLi.appendChild(newImg);
				var makeH3 = document.createElement('h3');
				makeH3.innerHTML = obj.remindTitle[1];
				makeNewLi.appendChild(makeH3);
				var makeP = document.createElement('p');
				makeP.innerHTML = obj.description[1];
				makeNewLi.appendChild(makeP);
				makeEntry.setAttribute("id", key);	
					
				
							
				/*
// Create List of Reminder Details
				var makeList = document.createElement('ul');
				makeEntry.appendChild(makeList);
				for (var k in obj) {
					var makeLi = document.createElement('li');
					makeList.appendChild(makeLi);
					var optSubText = obj[k][0]+ " " + obj[k][1];
					makeLi.innerHTML = optSubText;
					
				}
*/
			/*
	//Buttons set up for remove and edit
				var buttonHolder = document.createElement('div');
				buttonHolder.setAttribute("class", "ui-grid-a");
				var editButtonDiv = document.createElement('div');
				editButtonDiv.setAttribute("class", "ui-block-a");
				var editButton = document.createElement('a');
				editButton.setAttribute("data-role", "button");
				editButton.setAttribute("href", "#reminder");
				editButton.innerHTML = "Edit";
				editButton.key = key;
				var removeButtonDiv = document.createElement('div');
				removeButtonDiv.setAttribute("class", "ui-block-b");
				var removeButton = document.createElement('a');
				removeButton.setAttribute("data-role", "button");
				removeButton.setAttribute("href", "#");
				removeButton.innerHTML = "Delete";
				removeButton.key = key;
				makeEntry.appendChild(buttonHolder);
				buttonHolder.appendChild(editButtonDiv);
				buttonHolder.appendChild(removeButtonDiv);
				editButtonDiv.appendChild(editButton);
				removeButtonDiv.appendChild(removeButton);
				editButton.addEventListener("click", editItem);
				removeButton.addEventListener("click", deleteItem);
*/
					
				}else{
				
			/*
	var newImg = document.createElement('img');
				var setSrc = newImg.setAttribute("src", "img/"+ filterCats +".png");
				newImg.setAttribute("height", "128");
				newImg.setAttribute("width", "128");
*/
				
				/*
var makeDivGroup = document.createElement('div');
					makeDivGroup.setAttribute("class", "ui-grid-a");
				
				var makeDivA = document.createElement('div');
					makeDivA.setAttribute("class", "ui-block-a");
					
					
				var makeDivB = document.createElement('div');
					makeDivB.setAttribute("class", "ui-block-b");
					
*/


				
				var makeEntry = document.createElement('ul');
					makeEntry.setAttribute("data-role", "listview");
					appendLocation.appendChild(makeEntry);
					
				var makeNewLi = document.createElement('li');
					makeEntry.appendChild(makeNewLi);
					//makeNewLi.appendChild(newImg);
				
				
				var editButton = document.createElement('a');
					editButton.setAttribute("href", "#reminder");
				//	editButton.setAttribute("data-role", "button");
				//	editButton.setAttribute("data-icon", "gear");
				//	editButton.setAttribute("data-inline", "true");
					editButton.key = key;
					
					var removeButton = document.createElement('a');
					removeButton.setAttribute("href", "#reminder");
					removeButton.setAttribute("data-role", "button");
					removeButton.setAttribute("data-icon", "delete");
					removeButton.setAttribute("data-inline", "true");
					removeButton.innerHTML="Delete";
					//removeButton.setAttribute("data-iconpos", "notext")
					removeButton.key = key;

					//makeDivB.appendChild(removeButton);
				
					//makeDivGroup.appendChild(makeDivA);
				//	makeDivGroup.appendChild(makeDivB);
					
					editButton.appendChild(removeButton);

					
				var makeH3 = document.createElement('h6');
					makeH3.innerHTML = obj.remindTitle[1];
					editButton.appendChild(makeH3);
					
				var makeP = document.createElement('p');
					makeP.innerHTML = obj.description[1];
					editButton.appendChild(makeP);
					
				//	makeDivA.appendChild(editButton);
				
				
					makeNewLi.appendChild(editButton);
					
					
					makeEntry.setAttribute("id", key);
					
					//makeEntry.appendChild(makeNewLi);

					
					editButton.addEventListener("click", editItem);
					removeButton.addEventListener("click", deleteItem);
					
				
				
								
				
				
			
/*


				//Buttons set up for remove and edit
				var editButton = document.createElement('a');
				editButton.setAttribute("data-role", "button");
				editButton.setAttribute("href", "#reminder");
				editButton.setAttribute("data-icon", "gear");
				editButton.key = key;
				
				
				makeEntry.appendChild(editButton);
*/
			}

		}
		
	}
}
	
	
		//Get correct image for group
		function getLSImage(groupName, createSubList){
		
		var imgLi = document.createElement('li');
		createSubList.appendChild(imgLi);
		var newImg = document.createElement('img');
		var setSrc = newImg.setAttribute("src", "img/"+ groupName +".png");
		newImg.setAttribute("height", "128");
		newImg.setAttribute("width", "128");
		imgLi.appendChild(newImg);
	}

	
	function prefillData(){
		
		for(var n in json){
			
			var id = Math.floor(Math.random()*10000000);
			localStorage.setItem(id, JSON.stringify(json[n]));
			
		}
		
		
	}
	
	
	
	function deleteItem(){
		
		var verify = confirm("Are you sure you want to delete this reminder?");
		
		if(verify){
			
			localStorage.removeItem(this.key);
			alert("Reminder was deleted!");
			window.location = 'index.html';
			window.reload();
			
			
		}else{
			
			alert("Reminder was NOT deleted.");
		}
		
	}
	
	function editItem(){
		
		
		
		// Get data from Local Storage
		var value = localStorage.getItem(this.key);
		var reminder = JSON.parse(value);
	
		var keyValue = this.key;
		
		
		//toggleControl("off");
	
		$('remindTitle').value = reminder.remindTitle[1];
		$('groups').value = reminder.group[1];
		$('due').value = reminder.dueDate[1];
		$('recurrence').value = reminder.recurrence[1];
		$('description').value = reminder.description[1];
		
		if(reminder.priority[1] == "Yes"){
			
			$('priority').setAttribute("checked", "checked");
		}
		

		//remove listener from input save button
		save.removeEventListener("click", storeData);
		
		//Change Submit button value to edit button
		$('#submitButton').parent().find('.ui-btn-text').text('zzzzz');
		//$('#submitButton').val = "Edit Reminder";
		var editSubmit = $('#submitButton');
		
		//Save the key created
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
		
		
	}
	
	function validate(eventData){
	
		var getDueDate = $('due');
		var getRecurrence = $('recurrence');
		var getTitle = $('remindTitle');
				
		//reset error
		errorMsg.innerHTML = "";
		getTitle.style.border = "1px solid black";
		getDueDate.style.border = "1px solid black";
		getDueDate.style.border = "1px solid black";


		
		var messageError = [];
		
		if (getTitle.value === ""){
			
			var titleError = "Please Enter a title.";
			getTitle.style.border = "1px solid red";
			messageError.push(titleError);
		
			
		}
		
		if (getDueDate.value === ""){
			
			var dueError = "Please Enter a Due Date.";
			getDueDate.style.border = "1px solid red";
			messageError.push(dueError);
		
			
		}
		
		if (getRecurrence.value === "0"){
			
			var dueError = "Please set the likelihood of recurrence.";
			getRecurrence.style.border = "1px solid red";
			messageError.push(dueError);
		
			
		}
		
		if(messageError.length >= 1){
			
			for(var i=0, j=messageError.length; i<j; i++){
				
				var text = document.createElement('li');
				text.innerHTML = messageError[i];
				errorMsg.appendChild(text);
			}
			
			
			
		}else{
			storeData(this.key);
			
		}
		
		eventData.preventDefault();
		
		return false;
		

		
	}
	
	function clearStoredData(){
		
		if(localStorage === 0){
			
			alert("There is no stored data to clear!");
			
		}else{
			
			localStorage.clear();
			alert("All reminders are cleared!");
			window.location.reload();
			return false;
		}
		
	}
	
	//Array
	var catGroups =["Personal", "Work", "Other"], priorityValue; 
	var errorMsg = $('errors');
	createGroups();
	
	
	// Click events and links
	var showDataLink = $('showData');
	showDataLink.addEventListener("click", getSomeData);
	
	var searchButton = $('searchLink');
	searchButton.addEventListener("click", getSomeData);
	
	var personalBrowse = $('Personal');
	personalBrowse.addEventListener("click", getSomeData);
	
	var workBrowse = $('Work');
	workBrowse.addEventListener("click", getSomeData);

	var otherBrowse = $('Other');
	otherBrowse.addEventListener("click", getSomeData);

	var clearDataLink = $('clearData');
	clearDataLink.addEventListener("click", clearStoredData);
	
	var saveLocalData = $('submitButton');
	saveLocalData.addEventListener("click", validate);

	
});
