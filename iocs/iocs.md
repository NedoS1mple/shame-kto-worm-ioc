# Индикаторы компрометации — червь SHAME / kto (C2 «HydraC2»)

## Файловые индикаторы (внутри заражённого `.jar`)

| Признак | Значение |
|---|---|
| Класс точки входа | `kto/Core.class` |
| Payload-класс | `kto/Shame.class` (+ `kto/Shame$1.class`, `kto/Shame$2.class`) |
| Маркер-файл | `.shame` |
| Главный класс в plugin.yml | `main: kto.Core` |
| Оригинал plugin.yml | переименуется в `plugin.yml.orig` |
| Временные копии | `%TEMP%\tmp_<число>.jar` |

## Дроппер / payload

| Поле | Значение |
|---|---|
| Имя файла | `shame.jar` (и `shame_*.jar`) |
| Размер | 10 437 байт |
| MD5 | `35f10a22923daea22973f070015ff591` |
| SHA-1 | `18907dfbdef619d9b7c744b3fccece8a9b20a04f` |
| SHA-256 | `5ebaee3badb162d3a5a9402a27d535c7093572cb170a879ca5ff556543810e04` |

## Сеть / C2

| Объект | Значение |
|---|---|
| C2 (TCP) | `papa.ultimatebox.fun:20011` |
| IP | `185.176.94.50` (RIPE, netname Aurorix-Networks, AS EdgeSec Technologies Limited, route 185.176.94.0/24) |
| Дроп | `https://kto.ultimatebox.fun/shame.jar` (Cloudflare) |
| IP-чек | `http://checkip.amazonaws.com` |
| Дамп конфигов | `https://pastes.io/api/paste` |
| Домен `ultimatebox.fun` | NameCheap, рег. 2025-12-02, NS Cloudflare (ian/sandy) |

## Telegram-операторы

| Объект | Значение |
|---|---|
| Бот | `@hydrac2bot` (id 8871473857, «HydraC2») — токен отозван |
| Чат | id -1004490940704, «Hydra» |
| Инвайт | `https://t.me/+2N_5eJ-Ux4E0NDUy` |
| Операторы | `@la6yda` (1428043836), `@im_favorite` (7858830166), `@hodpy` (8422585412) |
| pastes.io API-ключ (в дропе) | `63b0bd3c-ab71-42bc-8f89-3a320608290c` |

## Команды RAT (из `kto.Shame`)

`/download`, `/info`, `/console <cmd>`, `/exec <cmd>`, `/say <text>`; по умолчанию — системный шелл; ответ заканчивается `---END---`; переподключение: бэкофф 5с ×2 … до 300с.

## Пострадавшие серверы (наблюдались в сообщениях «Попался слоник!»)

- `185.17.0.13:65001`
- `95.85.234.80:28487`
- `78.17.187.17` — NedoCraft (инцидент автора отчёта)

## Проверка `.jar`

```
unzip -l plugin.jar | grep -i kto
# или содержимое plugin.yml регистрирует main: kto.Core
```