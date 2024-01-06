function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismack Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  // checking work by calling gameObject function and log its output:
  const game = gameObject();
  console.log(game.home.teamName); 
  console.log(game.away.teamName);

// Function takes in an argument of a player's name and returns the number of points scored for that player
function numPointsScored(playerName) {
  for (const team in game) {
    if (game[team].players.hasOwnProperty(playerName)) {
      return game[team].players[playerName].points;
    }
  }
  // Return a default value  when the player is not found
  return null;
}

// Function that takes in an argument of a player's name and returns the shoe size for that player.
function shoeSize(playerName) {
  for (const team in game) {
    if (game[team].players.hasOwnProperty(playerName)) {
      return game[team].players[playerName].shoe;
    }
  }
  // Return a default value  when the player is not found
  return null;
}

// Function that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(teamName) {
  for (const team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }

}


// Function that operates on the game object to return an array of the team names
function teamNames() {
  return [game.home.teamName, game.away.teamName];
}

// Function that takes in an argument of a team name and returns an array of the jersey number's for that team.
function playerNumbers(teamName) {
  for (const team in game) {
    if (game[team].teamName === teamName) {
      const numbers = [];
      for (const player in game[team].players) {
        numbers.push(game[team].players[player].number);
      }
      return numbers;
    }
  }
}
  

// Function that takes in an argument of a player's name and returns a object of that player's stats
function playerStats(playerName) {
  for (const team in game) {
    if (game[team].players.hasOwnProperty(playerName)) {
      return game[team].players[playerName];
    }
  }
}

// Example usage:
console.log(numPointsScored("Kemba Walker")); // Output: 6
console.log(shoeSize("Jason Terry")); // Output: 15
console.log(teamColors("Brooklyn Nets")); // Output: ["Black", "White"]
console.log(teamNames()); // Output: ["Brooklyn Nets", "Charlotte Hornets"]
console.log(playerNumbers("Charlotte Hornets")); 
console.log(playerStats("Brook Lopez"));


// Function that will return the number of rebounds associated with the player that has the largest shoe size
function bigShoeRebounds() {
  let largestShoeSize = 0;
  let playerWithLargestShoe = null;

  // Iterate through players to find the one with the largest shoe size
  for (const team in game) {
    for (const player in game[team].players) {
      const currentShoeSize = game[team].players[player].shoe;
      if (currentShoeSize > largestShoeSize) {
        largestShoeSize = currentShoeSize;
        playerWithLargestShoe = player;
      }
    }
  }

  // Return the number of rebounds for the player with the largest shoe size
  if (playerWithLargestShoe !== null) {
    return game[team].players[playerWithLargestShoe].rebounds;
  }

  // Return a default value when no player is found
  return null;
}

// Example usage:
console.log(bigShoeRebounds());

