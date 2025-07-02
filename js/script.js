function Timer() {
    // Get elements html
    let timerTXT = document.getElementById('timer');
    let daysTXT = document.getElementById('days');
    
    // Timer Cache
    const DataCache = new Date();
    const LocateZoneSettings = { 
        timeZone: 'America/Sao_Paulo', 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit' 
    };
    let DataCacheFormat = new Intl.DateTimeFormat('pt-BR', LocateZoneSettings).formatToParts(DataCache);
    const parts = {};
    DataCacheFormat.forEach(({ type, value }) => {
        parts[type] = value;
    });

    // Week, Day, Month and Year Cache
    const WeekName = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    const WeekDays = DataCache.getDay();
    const Week = WeekName[WeekDays];
    const HourCache = parts.hour;
    const MinuteCache = parts.minute;
    let SecondsCache = parts.second;

    // Hour, Minutes and Seconds Cache
    const DayCache = DataCache.getDate(); // getDay() retorna week (0 = Domingo)
    const MonthCache = DataCache.getMonth();
    const Months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const MonthsName = Months[MonthCache];
    const YearCache = DataCache.getFullYear();

    timerTXT.innerHTML = `${HourCache}:${MinuteCache}:${SecondsCache}`;
    daysTXT.innerHTML = `${Week}, ${DayCache} de ${MonthsName} de ${YearCache}`;
}

setInterval(Timer, 1000);
Timer();

// madrugada (0h-6h), manhã (6h-12h), tarde (12h-18h) e noite (18h-24h)