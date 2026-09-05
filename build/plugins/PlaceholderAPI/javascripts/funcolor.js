// Функция для color
function getEmojiByBracketsFunColor() {
  // Создаём
  var bracketsFunColor = parseInt(PlaceholderAPI.static.setPlaceholders(BukkitPlayer, "%mycommand_playerdata_funcolor%"));
  var emoji;
 
  switch (true) {
    case (bracketsFunColor >= 0 && bracketsFunColor <= 1):
      emoji = "&f";
      break;
    case (bracketsFunColor > 1 && bracketsFunColor <= 2):
      emoji = "&a";
      break;
    case (bracketsFunColor > 2 && bracketsFunColor <= 3):
      emoji = "&b";
      break;
    case (bracketsFunColor > 3 && bracketsFunColor <= 4):
      emoji = "&c";
      break;
    case (bracketsFunColor > 4 && bracketsFunColor <= 5):
      emoji = "&d";
      break;
    case (bracketsFunColor > 5 && bracketsFunColor <= 6):
      emoji = "&e";
      break;
    case (bracketsFunColor > 6 && bracketsFunColor <= 7):
      emoji = "&9";
      break;
    case (bracketsFunColor > 7 && bracketsFunColor <= 8):
      emoji = "&1";
      break;
    case (bracketsFunColor > 8 && bracketsFunColor <= 9):
      emoji = "&2";
      break;
    case (bracketsFunColor > 9 && bracketsFunColor <= 10):
      emoji = "&3";
      break;
    case (bracketsFunColor > 10 && bracketsFunColor <= 11):
      emoji = "&4";
      break;
    case (bracketsFunColor > 11 && bracketsFunColor <= 12):
      emoji = "&5";
      break;
    case (bracketsFunColor > 12 && bracketsFunColor <= 13):
      emoji = "&6";
      break;
    case (bracketsFunColor > 13 && bracketsFunColor <= 14):
      emoji = "&7";
      break;
    case (bracketsFunColor > 14 && bracketsFunColor <= 15):
      emoji = "&8";
      break;
    case (bracketsFunColor > 15 && bracketsFunColor <= 16):
      emoji = "&0";
      break;
    case (bracketsFunColor > 16):
      emoji = "";
      break;
    default:
      emoji = "";
  }
 
  return emoji;
}
 
// Вызываем getEmojiByBracketsFunColor()
getEmojiByBracketsFunColor();