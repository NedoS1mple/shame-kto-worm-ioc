// Функция для color
function getEmojiByBracketsFunColorTag() {
  // Создаём
  var bracketsFunColorTag = parseInt(PlaceholderAPI.static.setPlaceholders(BukkitPlayer, "%mycommand_playerdata_tcolor%"));
  var emoji;
 
  switch (true) {
    case (bracketsFunColorTag >= 0 && bracketsFunColorTag <= 1):
      emoji = "&f";
      break;
    case (bracketsFunColorTag > 1 && bracketsFunColorTag <= 2):
      emoji = "&a";
      break;
    case (bracketsFunColorTag > 2 && bracketsFunColorTag <= 3):
      emoji = "&b";
      break;
    case (bracketsFunColorTag > 3 && bracketsFunColorTag <= 4):
      emoji = "&c";
      break;
    case (bracketsFunColorTag > 4 && bracketsFunColorTag <= 5):
      emoji = "&d";
      break;
    case (bracketsFunColorTag > 5 && bracketsFunColorTag <= 6):
      emoji = "&e";
      break;
    case (bracketsFunColorTag > 6 && bracketsFunColorTag <= 7):
      emoji = "&9";
      break;
    case (bracketsFunColorTag > 7 && bracketsFunColorTag <= 8):
      emoji = "&1";
      break;
    case (bracketsFunColorTag > 8 && bracketsFunColorTag <= 9):
      emoji = "&2";
      break;
    case (bracketsFunColorTag > 9 && bracketsFunColorTag <= 10):
      emoji = "&3";
      break;
    case (bracketsFunColorTag > 10 && bracketsFunColorTag <= 11):
      emoji = "&4";
      break;
    case (bracketsFunColorTag > 11 && bracketsFunColorTag <= 12):
      emoji = "&5";
      break;
    case (bracketsFunColorTag > 12 && bracketsFunColorTag <= 13):
      emoji = "&6";
      break;
    case (bracketsFunColorTag > 13 && bracketsFunColorTag <= 14):
      emoji = "&7";
      break;
    case (bracketsFunColorTag > 14 && bracketsFunColorTag <= 15):
      emoji = "&8";
      break;
    case (bracketsFunColorTag > 15 && bracketsFunColorTag <= 16):
      emoji = "&0";
      break;
    case (bracketsFunColorTag > 16):
      emoji = "";
      break;
    default:
      emoji = "";
  }
 
  return emoji;
}
 
// Вызываем getEmojiByBracketsFunColorTag()
getEmojiByBracketsFunColorTag();