document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("lineupForm");

    const players = [
        "NoodlesGk",
        "Jackscy23",
        "Jenks",
        "Evo",
        "Jadon",
        "Nickie",
        "619hustle",
        "Phantom",
        "Jimmy T",
        "Chamber",
        "TinyP",
        "Rosstitute",
        "Virgil",
        "Cbarnes",
        "Hughes",
        "Pea",
        "Enty",
        "MrSparkle"
    ];

    // Populate player options in dropdowns
    function populatePlayerOptions() {
        players.forEach(player => {
            const option = document.createElement("option");
            option.value = player;
            option.innerText = player;

            document.getElementById("goalkeeper").appendChild(option.cloneNode(true));
            document.getElementById("leftCenterBack").appendChild(option.cloneNode(true));
            document.getElementById("centerBack").appendChild(option.cloneNode(true));
            document.getElementById("rightCenterBack").appendChild(option.cloneNode(true));
            document.getElementById("rightDefensiveMidfield").appendChild(option.cloneNode(true));
            document.getElementById("leftDefensiveMidfield").appendChild(option.cloneNode(true));
            document.getElementById("rightMidfield").appendChild(option.cloneNode(true));
            document.getElementById("leftMidfield").appendChild(option.cloneNode(true));
            document.getElementById("centerAttackingMidfield").appendChild(option.cloneNode(true)); // New line
            document.getElementById("striker").appendChild(option.cloneNode(true));
            document.getElementById("secondStriker").appendChild(option.cloneNode(true));
        });
    }

    // Handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const lineup = {
            goalkeeper: document.getElementById("goalkeeper").value,
            leftCenterBack: document.getElementById("leftCenterBack").value,
            centerBack: document.getElementById("centerBack").value,
            rightCenterBack: document.getElementById("rightCenterBack").value,
            rightDefensiveMidfield: document.getElementById("rightDefensiveMidfield").value,
            leftDefensiveMidfield: document.getElementById("leftDefensiveMidfield").value,
            rightMidfield: document.getElementById("rightMidfield").value,
            leftMidfield: document.getElementById("leftMidfield").value,
            centerAttackingMidfield: document.getElementById("centerAttackingMidfield").value, // New line
            striker: document.getElementById("striker").value,
            secondStriker: document.getElementById("secondStriker").value
        };
        sendToDiscord(lineup);
    });

    // Send lineup to Discord
    function sendToDiscord(lineup) {
        const webhookUrl = "https://discord.com/api/webhooks/1248994392598118411/9W5QmqCKXov3l7tQci6jzwwIBxwOeNn402VVslmARHbC0IkhfRAyIbLCOrWljp_kkWQ3"; // Replace this with your Discord webhook URL

        const embed = {
            title: "New Lineup",
            description: "Here's the new lineup:",
            color: 0x00ff00,
            fields: [
                {
                    name: "Goalkeeper",
                    value: lineup.goalkeeper,
                    inline: true
                },
                {
                    name: "Left Center Back",
                    value: lineup.leftCenterBack,
                    inline: true
                },
                {
                    name: "Center Back",
                    value: lineup.centerBack,
                    inline: true
                },
                {
                    name: "Right Center Back",
                    value: lineup.rightCenterBack,
                    inline: true
                },
                {
                    name: "Right Defensive Midfield",
                    value: lineup.rightDefensiveMidfield,
                    inline: true
                },
                {
                    name: "Left Defensive Midfield",
                    value: lineup.leftDefensiveMidfield,
                    inline: true
                },
                {
                    name: "Right Midfield",
                    value: lineup.rightMidfield,
                    inline: true
                },
                {
                    name: "Left Midfield",
                    value: lineup.leftMidfield,
                    inline: true
                },
                {
                    name: "Center Attacking Midfield", // New line
                    value: lineup.centerAttackingMidfield,
                    inline: true
                },
                {
                    name: "Striker",
                    value: lineup.striker,
                    inline: true
                },
                {
                    name: "Second Striker",
                    value: lineup.secondStriker,
                    inline: true
                }
            ]
        };

        fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ embeds: [embed] })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to send lineup to Discord");
            }
            alert("Lineup submitted successfully!");
            resetForm();
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to submit lineup. Please try again later.");
        });
    }

    // Reset form after submission
    function resetForm() {
        form.reset();
    }

    // Populate player options on page load
    populatePlayerOptions();
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    logout();
});

function logout() {
    // Clear session data (replace this with your session management code)
    // For example, remove access token, user information, etc.
    // localStorage.removeItem('accessToken');
    
    // Redirect to homepage or login page
    window.location.href = 'index.html';
}
