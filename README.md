# SHAME / kto — Minecraft plugin worm (Bukkit–Paper–Purpur) · IOC repo

> ⚠️ **SECURITY RESEARCH ONLY.** This repository contains REAL malware samples
> (inside a password-protected ZIP) and IOCs for the "HydraC2" / "SHAME" worm.
> Do NOT run, install, or distribute the samples. Analysis by security
> researchers / malware labs only.
>
> ⚠️ **ТОЛЬКО ДЛЯ ИССЛЕДОВАНИЙ.** В репозитории находятся настоящие образцы
> вредоносного ПО (внутри защищённого паролем архива) и индикаторы червя
> «SHAME» / «HydraC2». НЕ запускайте и не распространяйте их.

---

## Что это

Java-червь, поражающий плагины Minecraft-серверов (от Bukkit до Paper/Purpur).
Внедряется в **каждый** `.jar` во всех каталогах `plugins/` на всех дисках,
регистрирует себя главным классом плагина (`main: kto.Core`) и при следующем
старте сервера открывает постоянный TCP-канал на C2 (**RCE**: `/exec`, `/console`
и др.).

- Класс-точка входа: `kto.Core`
- Payload-класс: `kto.Shame`
- Маркеры заражения: `kto/Core.class`, `kto/Shame.class`, `.shame`, `plugin.yml.orig`
- Дроппер: `shame.jar` (SHA-256 `5ebaee3b…810e04`, 10 437 байт)
- C2: `papa.ultimatebox.fun:20011` → `185.176.94.50`
- Операторы управляют ботом Telegram `@hydrac2bot`

## Как устроен репозиторий

| Путь | Содержимое |
|---|---|
| `reports/Kaspersky_worm_report.md` | отчёт для ЛК (RU + English summary), IOC, методика очистки |
| `reports/hydra_ioc_report.md` | детальный IOC-отчёт по C2 «HydraC2» (операторы, бот, инфраструктура) |
| `iocs/iocs.md` | краткий список индикаторов (таблицы) |
| `iocs/shame_kto_worm.yar` | YARA-правило для детекции заражённых `.jar` |
| `samples/worm_samples_protected.zip` | образцы заражённых `.jar` |
| `build/` | пострадавшая сборка **FunTime 1.0.9** (Purpur 1.16.5), папка сервера как есть (1.6 ГБ, ~3900 файлов, без JDK и архивов) |
| `SHA256SUMS.txt` | контрольные суммы всех файлов репозитория |

## Сборка FunTime 1.0.9 (`build/`)

Полная папка пострадавшего сервера: серверное ПО Purpur 1.16.5 (`server.jar`,
`purpur.yml`, `paper.yml`, `spigot.yml`), все плагины (`plugins/`), миры
(`world/`, `world_nether/`, `world_the_end/`), конфиги, start-скрипт.

- Размер: 1.6 ГБ, ~3900 файлов, **без архивов**.
- **JDK 17 исключён** (`jdk-17.0.11`): это стандартный дистрибутив Java, к вирусу
  не относится и превышает лимит GitHub (файл > 100 МБ). Для запуска сборки
  поставьте любую JDK 17 (Temurin/OpenJDK 17).
- Логи запуска — `build/logs/` (эпизоды заражения 2026-09-03 / 2026-09-05),
  а также `build/ft_boot.log`, `build/ft_boot_err.log`.
- При импорте в песочницу обязательно изолируйте сеть — сборка содержит
  логи запуска заражающейся панели.

## Быстрые индикаторы

- Внутри `.jar` появились файлы: `kto/Core.class`, `kto/Shame.class`, `.shame`
- `plugin.yml` → `main: kto.Core`; оригинал сохранён как `plugin.yml.orig`
- Во временной папке: `%TEMP%\tmp_*.jar`
- C2: `papa.ultimatebox.fun:20011` / `185.176.94.50`
- Дроп: `https://kto.ultimatebox.fun/shame.jar`

Проверка без распаковки (заражённый jar содержит имена `kto/...`):
```
unzip -l plugin.jar | grep -i kto
```

## Передача в Kaspersky

Ссылка на этот репозиторий отправляется в **newvirus@kaspersky.com**.
Образцы червя — `samples/worm_samples_protected.zip` (пароль от архива
передаётся лаборатории отдельным, приватным сообщением).

## Кого ещё уведомить (из разбора)

- Telegram: abuse@telegram.com / https://telegram.org/abuse (бот `@hydrac2bot`, чат «Hydra», аккаунты операторов)
- NameCheap: abuse@namecheap.com (домен `ultimatebox.fun`)
- Cloudflare: abuse@cloudflare.com (`kto.ultimatebox.fun` за CDN)
- pastes.io: support@pastes.io (API-ключ интеграции найден в дропе)

## История заражения

- 2026-09-04 — первый запуск `kto.Core` на NedoCraft (78.17.187.17, Purpur 1.16.5)
- 2026-09-05 — повторное заражение 593 jar на всех дисках ПК за ~7 минут; очищено
- 2026-09-05 — токен операторского бота отозван, C2-порт закрыт (дроп ещё жив как старый)

Подробности и таймлайны — в `reports/`.
(Отчет об угрозе был сделан при помощи ИИ)