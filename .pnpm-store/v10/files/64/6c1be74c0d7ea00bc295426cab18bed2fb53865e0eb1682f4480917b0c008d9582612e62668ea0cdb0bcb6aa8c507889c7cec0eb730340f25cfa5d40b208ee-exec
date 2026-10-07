#!/usr/bin/env node

// Broadcasts "Call for peace" message when package is installed in Russia, otherwise no-op

"use strict";

try {
	if (
		[
			"Asia/Anadyr", "Asia/Barnaul", "Asia/Chita", "Asia/Irkutsk", "Asia/Kamchatka",
			"Asia/Khandyga", "Asia/Krasnoyarsk", "Asia/Magadan", "Asia/Novokuznetsk",
			"Asia/Novosibirsk", "Asia/Omsk", "Asia/Sakhalin", "Asia/Srednekolymsk", "Asia/Tomsk",
			"Asia/Ust-Nera", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yekaterinburg",
			"Europe/Astrakhan", "Europe/Kaliningrad", "Europe/Kirov", "Europe/Moscow",
			"Europe/Samara", "Europe/Saratov", "Europe/Simferopol", "Europe/Ulyanovsk",
			"Europe/Volgograd", "W-SU"
		].indexOf(new Intl.DateTimeFormat().resolvedOptions().timeZone) === -1
	) {
		return;
	}

	var bold = function (msg) { return "\x1b[97m\x1b[1m" + msg + "\x1b[22m\x1b[37m"; };

	var flags = function () {
		return (
			"🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦" +
			"  🇷🇺  🇺🇦  🇷🇺  🇺🇦  🇷🇺  🇺🇦"
		);
	};

	process._rawDebug(
		[
			"", flags(), "",
			"\x1b[37m24 февраля " +
				bold("Россия напала на Украину") +
				", что уже стало причиной " +
				bold("15000+ жертв среди российских военных") +
				" и примерно " +
				bold("10000+ - среди украинских") +
				", а также " +
				bold("5000+ убитых граждан, в том числе 300+ детей") +
				".",
			"",
			"Народ Украины всеобще мобилизован и готов защищать свою страну от вражеского" +
				" вторжения. " +
				bold(
					"91% украинцев полностью поддерживает своего президента Владимира Зеленского"
				) +
				" и его ответные действия на нападение России.",
			"",
			"Весь мир осудил необоснованное вторжение и решил ввести " +
				bold("невиданные ранее санкции против России") +
				". С каждым новым днем они будут ощущаться все сильнее и сильнее среди мирных" +
				" граждан.",
			"",
			"В то же время, " +
				bold("российское правительство ограничивает доступ граждан к внешней информации") +
				", насаждая однобокие формулировки и версии происходящего.",
			"", "В качестве надежного источника информации загрузите безопасный браузер Tor:", "",
			bold(
				"https://forum.torproject.net/t/tor-blocked-in-russia-how-to-circumvent-censorship/982"
			),
			"", "И посетите:", "",
			bold(
				"https://www.bbcweb3hytmzhn5d532owbu6oqadra5z3ar726vq5kgwwn6aucdccrad.onion/russian"
			),
			bold("https://www.dwnewsgngmhlplxy6o2twtfgjnrnjxbegbwqx6wnotdhkzt562tszfid.onion/ru/"),
			"", flags(), ""
		].join("\n")
	);
} catch (error) {
	// ignore
}
