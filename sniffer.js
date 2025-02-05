// sniffer.js
function startSniffer() {
    const ips = ["192.168.1.1", "192.168.1.2", "192.168.1.3"];
    const messages = [
        "Wykryto pakiet danych",
        "Przechwycono żądanie GET",
        "Przechwycono pakiet DNS",
        "Ruch sieciowy TCP"
    ];

    setInterval(() => {
        const ip = ips[Math.floor(Math.random() * ips.length)];
        const message = messages[Math.floor(Math.random() * messages.length)];
        console.log(`[Sniffer] ${ip}: ${message}`);
    }, 1000);
}
