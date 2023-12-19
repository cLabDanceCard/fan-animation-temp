var leftBar = document.getElementById("bar1");
var rightBar = document.getElementById("bar2");

var allSlices = document.querySelectorAll("*");

leftBar.addEventListener("click", function () {
	allSlices.forEach(function (slice) {
        if (slice.classList.contains("left-border")){
            slice.style.border = slice.style.border === "none" ? "" : "none";
        }
        else if (slice.classList.contains("left")) {
            slice.style.display = slice.style.display === "none" ? "" : "none";
        }
	});
});

rightBar.addEventListener("click", function () {
	allSlices.forEach(function (slice) {
        if (slice.classList.contains("right-border")){
            slice.style.border = slice.style.border === "none" ? "" : "none";
        }
        else if (slice.classList.contains("right")) {
            slice.style.display = slice.style.display === "none" ? "" : "none";
        }
	});
});

var apiUrl;

if (window.location.hostname === 'localhost') {
    apiUrl = "http://localhost:9000";
} else {
    apiUrl = "https://peerjsserver-jc6u.onrender.com";
}

const welcomeElement = document.getElementById('welcomeText');

var currentUserEmoji = null; 

var socket = io(apiUrl, { withCredentials: true });

socket.on('assignEmoji', function(emoji) {
    console.log('Assigned Emoji:', emoji);
    updateWelcomeEmoji(emoji);
});

socket.on('onlineUsers', function(onlineUsers) {
    document.querySelectorAll('.emoji.left').forEach(el => el.textContent = '');

    const emojiElementIds = ['one-left', 'two-left', 'three-left', 'four-left', 'five-left', 'six-left', 'seven-left', 'eight-left'];

    const otherUsersEmojis = Object.values(onlineUsers).filter(emoji => emoji !== currentUserEmoji);

    otherUsersEmojis.forEach((emoji, index) => {
        if (index < emojiElementIds.length) {
            const emojiElement = document.getElementById(emojiElementIds[index]);
            if (emojiElement) {
                emojiElement.textContent = emoji;
            }
        }
    });
})

socket.on('noEmojiAvailable', function() {
    console.log('No emoji available');
    updateWelcomeEmoji('Maximum number of users reached. Please wait');});

function updateWelcomeEmoji(emoji) {
    if (welcomeElement) {
        welcomeElement.textContent = `Welcome, ${emoji}`;
    }
    currentUserEmoji = emoji;
}

var emojis = document.getElementsByClassName("emoji left");

for (var i = 0; i < emojis.length; i++) {
    emojis[i].addEventListener("click", function (event) {
        console.log(event.target);
    });
}
