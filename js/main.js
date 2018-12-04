// var userId = Math.ceil(Math.random()*10000);
// console.log(userId);

// $("#userid")[0].innerText = "user #: " + userId;

// var now = new Date();
// console.log(now);
// var date = (now.getMonth()+1) + '/' + (now.getDay()+2) + '/' + now.getFullYear();
// console.log(date);
// var time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
// $('#timeanddate')[0].innerText = date + ' | ' + time ;

var user = {
	name: 'Kyle Winston',
	image: 'https://media.licdn.com/dms/image/C4E03AQEEsAJICEx_YQ/profile-displayphoto-shrink_200_200/0?e=1549497600&v=beta&t=oZSdrey22H4XGV6cBxIpsaRiJqBriKapQJfcU4-wDhA',
	progress: 0.77
}
var course = [{
		title: "Readings in World Literature",
		subject: "Social Studies"
	}, {
		title: "Theory of Numbers",
		subject: "Mathematics"
	}, {
		title: "Farsi 301",
		subject: "Languages"
	}];
var activity = [{
		title: "Completed SOSC 503 Module 7 Quiz",
		subject: "Submitted for review 6/11/18 at 10:39PM"
	}, {
		title: "Commented in MATH104 Tuesday Discussion Group",
		subject: "Lorem ipsum dolores sit..."
	}, {
		title: "Enrolled in FARS301",
		subject: "Cohort begins 9/08/18"
	}];
var account = [{
		title: "Enrolled since: ",
		subject: "9/06/2017"
	}, {
		title: "Enrollment Status: ",
		subject: "Active Student"
	}, {
		title: "Department",
		subject: "Computer Science"
	}];


$("#user > h1").append(user.name);
$("#user > img").attr('src', user.image);

function progress(x) {
	var prog = x.progress * 100 + "%";
	console.log(prog);
	$("#color")[0].style.width = prog;
	$("#progress")[0].innerText = prog;
}

progress(user)
// userid
function userId() {
	$('#user > h5').append('User id# ' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) )
};

userId();
// timestuff
function formatTime(x) {
	if(x < 10) {
		return '0' + x;
	} else {
		return x;
	}
}
function timeAndDate() {
	var now = new Date();
	// console.log('CURRENT DATE: ' + now);
	var curDate = (1+ now.getMonth()) + '/' + now.getDate() + '/' + now.getFullYear();
	// console.log('FORMATTED DATE: ' + curDate)

	var hours = formatTime(now.getHours()%12);
	var minutes = formatTime(now.getMinutes());
	var seconds = formatTime(now.getSeconds());

	var amPm = '';
	if(now.getHours()%12 > 0) {
		amPm = 'PM'
	} else {
		amPm = 'AM'
	}

	var curTime = hours + ':' + minutes + ':' + seconds;
	// console.log('CURRENT TIME: ' + curTime + ' ' + amPm)

	return curTime + amPm + ' | ' + curDate;
}
function setTime(x) {
	x.innerText = timeAndDate();
	var elem = x;
	setTimeout(function() {
		return setTime(elem);
	}, 1000)
}

setTime($("#timeanddate")[0])

function showCourse() {
	$("#info")[0].innerHTML = '',
	$("#infoDiv > h1")[0].innerText = 'Courses';
	for(var i = 0; i < course.length; i++) {
		$("#info").append('<li>' + course[i].title + '</li>' + '<br>' + '<p>' + course[i].subject + '</p>')
	}
}
function showActivity() {
	$("#info")[0].innerHTML = '',
	$("#infoDiv > h1")[0].innerText = 'Activity';
	for(var i = 0; i < course.length; i++) {
		$("#info").append('<li>' + activity[i].title + '</li>' + '<br>' + '<p>' + course[i].subject + '</p>')
	}
}
function showAccount() {
	$("#info")[0].innerHTML = '',
	$("#infoDiv > h1")[0].innerText = 'Account';
	for(var i = 0; i < course.length; i++) {
		$("#info").append('<li>' + account[i].title + '</li>' + '<br>' + '<p>' + course[i].subject + '</p>')
	}
}
showCourse();
