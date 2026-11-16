// Настройки по умолчанию
const defaultConfig = {
    title: "Самое главное приглашение ❤️",
    date: "2026-06-15T18:00", // Дата и время встречи
    subtitle: "Ты — самое лучшее, что случилось в моей жизни.",
    location: "Ресторан «Панорама», ул. Ленина, 1"
};

// Загружаем сохраненные данные из памяти браузера, если они есть
function getConfig() {
    const saved = localStorage.getItem('inviteConfig');
    return saved ? JSON.parse(saved) : defaultConfig;
}
