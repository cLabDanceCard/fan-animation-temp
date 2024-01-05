var leftBar = document.getElementById("bar1");
var rightBar = document.getElementById("bar2");

var allSlices = document.querySelectorAll("*");

leftBar.addEventListener("click", function () {
    allSlices.forEach(function (slice) {
        if (slice.classList.contains("left-border")) {
            slice.style.border = slice.style.border === "none" ? "" : "none";
        } else if (slice.classList.contains("left")) {
            if (slice.classList.contains("emoji")) {
                slice.style.display = (slice.textContent.trim() !== '' && slice.style.display === "none") ? "inline" : "none";
            }
            else {
                slice.style.display = slice.style.display === "none" ? "" : "none";
            }
        }
    });
});

rightBar.addEventListener("click", function () {
    allSlices.forEach(function (slice) {
        if (slice.classList.contains("right-border")) {
            slice.style.border = slice.style.border === "none" ? "" : "none";
        } else if (slice.classList.contains("right")) {
            if (slice.classList.contains("emoji")) {
                slice.style.display = (slice.textContent.trim() !== '' && slice.style.display === "none") ? "inline" : "none";
            }
            else {
                slice.style.display = slice.style.display === "none" ? "" : "none";
            }
        }
    });
});

const apiUrl = window.location.hostname === 'localhost' ? "http://localhost:9000" : "https://peerjsserver-jc6u.onrender.com";

var socket = io(apiUrl, { withCredentials: true });

const welcomeElement = document.getElementById('welcomeText');

var currentUserEmoji = null; 

socket.on('assignEmoji', function(emoji) {
    console.log('Assigned Emoji:', emoji);
    updateWelcomeEmoji(emoji);
});

socket.on('onlineUsers', function(onlineUsers) {
    const emojiElementIds = ['one-left', 'two-left', 'three-left', 'four-left', 'five-left', 'six-left', 'seven-left', 'eight-left'];

    const otherUsersEmojis = Object.values(onlineUsers);

    emojiElementIds.forEach((id, index) => {
        const emojiElement = document.getElementById(id);
        if (emojiElement) {
            const emoji = otherUsersEmojis[index];
            if (emoji && emoji.trim() !== '') {
                emojiElement.textContent = emoji;
                emojiElement.style.display = '';
            } else {
                emojiElement.style.display = 'none';
            }
        }
    });
});

socket.on('noEmojiAvailable', function() {
    console.log('No emoji available');
    updateWelcomeEmoji('Maximum number of users reached. Please wait');
});

window.addEventListener("beforeunload", function () {
    socket.emit('clientDisconnecting', { socketId: socket.id });
});

function updateWelcomeEmoji(emoji) {
    if (welcomeElement) {
        welcomeElement.textContent = `Welcome, ${emoji}`;
    }
    currentUserEmoji = emoji;
}

var emojis = document.getElementsByClassName("emoji left");

for (var i = 0; i < emojis.length; i++) {
    emojis[i].addEventListener("click", function () {
        console.log('Emoji clicked:', this.textContent);
        var emojiRight;
        var emojiLeftPaired;
        console.log('Current user emoji: ', currentUserEmoji);
        console.log('Emoji clicked: ', this.textContent);
        switch (this.id) {
            case 'one-left':
                emojiRight = document.getElementById('one-right');
                emojiLeftPaired = document.getElementById('one-left-paired');
                break;
            case 'two-left':
                emojiRight = document.getElementById('two-right');
                emojiLeftPaired = document.getElementById('two-left-paired');
                break;
            case 'three-left':
                emojiRight = document.getElementById('three-right');
                emojiLeftPaired = document.getElementById('three-left-paired');
                break;
            case 'four-left':
                emojiRight = document.getElementById('four-right');
                emojiLeftPaired = document.getElementById('four-left-paired');
                break;
            case 'five-left':
                emojiRight = document.getElementById('five-right');
                emojiLeftPaired = document.getElementById('five-left-paired');
                break;
            case 'six-left':
                emojiRight = document.getElementById('six-right');
                emojiLeftPaired = document.getElementById('six-left-paired');
                break;
            case 'seven-left':
                emojiRight = document.getElementById('seven-right');
                emojiLeftPaired = document.getElementById('seven-left-paired');
                break;
            case 'eight-left':
                emojiRight = document.getElementById('eight-right');
                emojiLeftPaired = document.getElementById('eight-left-paired');
                break;
            default:
                console.log('default');
                return;
        }

        if (emojiRight) {
            if (this.textContent.trim() !== '') {
                emojiRight.textContent = this.textContent;
                emojiRight.style.display = 'inline';
                emojiLeftPaired.textContent = currentUserEmoji;
                emojiLeftPaired.style.display = 'inline';
            } else {
                emojiRight.style.display = 'none';
                emojiLeftPaired.style.display = 'none';
            }
            console.log(emojiRight.id + ' clicked');
        }
    });
}