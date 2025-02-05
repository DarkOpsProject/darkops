// bruteForce.js
function startBruteForce() {
    const targetPassword = "password123";
    let attempt = "";
    const charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    
    const bruteForceInterval = setInterval(() => {
        attempt = Array.from({ length: targetPassword.length }, () =>
            charset.charAt(Math.floor(Math.random() * charset.length))
        ).join("");

        console.log("Próbuję: " + attempt);
        
        if (attempt === targetPassword) {
            clearInterval(bruteForceInterval);
            console.log("Hasło znalezione: " + attempt);
            alert("Hasło znalezione: " + attempt);
        }
    }, 100);
}
