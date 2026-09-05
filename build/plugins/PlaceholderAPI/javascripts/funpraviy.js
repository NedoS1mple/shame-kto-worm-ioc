// Функция для color
function getEmojiByBracketsFunPraviy() {
  // Создаём
  var bracketsFunPraviy = parseInt(PlaceholderAPI.static.setPlaceholders(BukkitPlayer, "%mycommand_playerdata_funpraviy%"));
  var emoji;
 
  switch (true) {
    case (bracketsFunPraviy >= 0 && bracketsFunPraviy <= 1):
      emoji = "]";
      break;
    case (bracketsFunPraviy > 1 && bracketsFunPraviy <= 2):
      emoji = ")";
      break;
    case (bracketsFunPraviy > 2 && bracketsFunPraviy <= 3):
      emoji = "}";
      break;
    case (bracketsFunPraviy > 3 && bracketsFunPraviy <= 4):
      emoji = "»";
      break;
    case (bracketsFunPraviy > 4 && bracketsFunPraviy <= 5):
      emoji = "›";
      break;
    case (bracketsFunPraviy > 5 && bracketsFunPraviy <= 6):
      emoji = "❯";
      break;
    case (bracketsFunPraviy > 6 && bracketsFunPraviy <= 7):
      emoji = "❭";
      break;
    case (bracketsFunPraviy > 7 && bracketsFunPraviy <= 8):
      emoji = "⧽";
      break;
    case (bracketsFunPraviy > 8 && bracketsFunPraviy <= 9):
      emoji = "⟩";
      break;
    case (bracketsFunPraviy > 9 && bracketsFunPraviy <= 10):
      emoji = "❳";
      break;
    case (bracketsFunPraviy > 10 && bracketsFunPraviy <= 11):
      emoji = "❫";
      break;
    case (bracketsFunPraviy > 11 && bracketsFunPraviy <= 12):
      emoji = "⎱";
      break;
    case (bracketsFunPraviy > 12 && bracketsFunPraviy <= 13):
      emoji = "⊱";
      break;
    case (bracketsFunPraviy > 13 && bracketsFunPraviy <= 14):
      emoji = "⟧";
      break;
    case (bracketsFunPraviy > 14 && bracketsFunPraviy <= 15):
      emoji = "⦎";
      break;
    case (bracketsFunPraviy > 15 && bracketsFunPraviy <= 16):
      emoji = "﴿";
      break;
    case (bracketsFunPraviy > 16):
      emoji = "";
      break;
    default:
      emoji = "";
  }
 
  return emoji;
}
 
// Вызываем getEmojiByBracketsFunPraviy()
getEmojiByBracketsFunPraviy();