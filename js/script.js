function Timer() {
    // Get elements html
    let timer = document.getElementById('timer');
    let days = document.getElementById('days');
    
    // Timer Cache
    let DataCache = new Date();

    // Day, Mounth and Year Cache
    let dayCache = DataCache.getDay();
    let MonthCache = DataCache.getMonth();
    let YearCache = DataCache.getFullYear();

    // Hour, Minutes and Seconds Cache
    let HourCache = DataCache.getHours();
    let MinuteCache = DataCache.getMinutes();
    let SecondsCache = DataCache.getSeconds();
}

// madrugada (0h-6h), manhã (6h-12h), tarde (12h-18h) e noite (18h-24h)