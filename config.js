const defaultConfig = {
    title: "Приглашение на свидание ❤️",
    introText: "У меня есть для тебя кое-что особенное...",
    storyTitle: "Наша история",
    storyCards: [
        { title: "Помнишь наш первый день?", text: "С той самой первой встречи каждый момент рядом с тобой наполнен особым смыслом." },
        { title: "Каждый день — особенный", text: "Рядом с тобой простые вещи превращаются в самые теплые воспоминания." },
        { title: "Небольшое событие", text: "Я хочу пригласить тебя провести этот день вместе и создать ещё одну замечательную историю." }
    ],
    date: "2026-12-31T19:00",
    location: "Уютный ресторан на набережной",
    dressCode: "Вечерний / Элегантный / Главное — твоя улыбка"
};

function getConfig() {
    const saved = localStorage.getItem('inviteConfig');
    if (!saved) return defaultConfig;
    try {
        return { ...defaultConfig, ...JSON.parse(saved) };
    } catch (e) {
        return defaultConfig;
    }
}
