// Функция для color
function getEmojiByBracketsFunLeviy() {
  // Создаём
  var bracketsFunLeviy = parseInt(PlaceholderAPI.static.setPlaceholders(BukkitPlayer, "%mycommand_playerdata_funleviy%"));
  var emoji;
 
  switch (true) {
    case (bracketsFunLeviy >= 0 && bracketsFunLeviy <= 1):
      emoji = "[";
      break;
    case (bracketsFunLeviy > 1 && bracketsFunLeviy <= 2):
      emoji = "(";
      break;
    case (bracketsFunLeviy > 2 && bracketsFunLeviy <= 3):
      emoji = "{";
      break;
    case (bracketsFunLeviy > 3 && bracketsFunLeviy <= 4):
      emoji = "«";
      break;
    case (bracketsFunLeviy > 4 && bracketsFunLeviy <= 5):
      emoji = "‹";
      break;
    case (bracketsFunLeviy > 5 && bracketsFunLeviy <= 6):
      emoji = "❮";
      break;
    case (bracketsFunLeviy > 6 && bracketsFunLeviy <= 7):
      emoji = "❬";
      break;
    case (bracketsFunLeviy > 7 && bracketsFunLeviy <= 8):
      emoji = "⧼";
      break;
    case (bracketsFunLeviy > 8 && bracketsFunLeviy <= 9):
      emoji = "〈";
      break;
    case (bracketsFunLeviy > 9 && bracketsFunLeviy <= 10):
      emoji = "❲";
      break;
    case (bracketsFunLeviy > 10 && bracketsFunLeviy <= 11):
      emoji = "❪";
      break;
    case (bracketsFunLeviy > 11 && bracketsFunLeviy <= 12):
      emoji = "⎰";
      break;
    case (bracketsFunLeviy > 12 && bracketsFunLeviy <= 13):
      emoji = "⊰";
      break;
    case (bracketsFunLeviy > 13 && bracketsFunLeviy <= 14):
      emoji = "⟦";
      break;
    case (bracketsFunLeviy > 14 && bracketsFunLeviy <= 15):
      emoji = "⦍";
      break;
    case (bracketsFunLeviy > 15 && bracketsFunLeviy <= 16):
      emoji = "﴾";
      break;
    case (bracketsFunLeviy > 16):
      emoji = "";
      break;
    default:
      emoji = "";
  }
 
  return emoji;
}
 
// Вызываем getEmojiByBracketsFunLeviy()
getEmojiByBracketsFunLeviy();