var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (var playL in library.playlists) {
    let id = library.playlists[playL]["id"];
    let name = library.playlists[playL]["name"];
    let tracks = library.playlists[playL]["tracks"];
    console.log(id + ": " + name + " - " + tracks.length + " tracks");
  }
}
printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var tracks in library.tracks) {
    let id = library.tracks[tracks]["id"];
    let name = library.tracks[tracks]["name"];
    let artist = library.tracks[tracks]["artist"];
    let album = library.tracks[tracks]["album"];
    console.log(id + ': '  + name + ' by '   + artist + ' (' + album + ') ');
  }
}
printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  let id = library.playlists[playlistId]["id"];
  let name = library.playlists[playlistId]["name"];
  let tracks = library.playlists[playlistId]["tracks"];
  console.log(id + ": " + name + " - " + tracks.length + " tracks");
  for (let t of tracks) {
    let id = library.tracks[t]["id"];
    let name = library.tracks[t]["name"];
    let artist = library.tracks[t]["artist"];
    let album = library.tracks[t]["album"];
    console.log(id + ': '  + name + ' by '   + artist + ' (' + album + ') ');
  }
}
printPlaylist('p01');


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {

}


// adds a playlist to the library

var addPlaylist = function (name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}