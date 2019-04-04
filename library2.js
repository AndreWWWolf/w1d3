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
             },

printPlaylists: function () {
  for (var p in this.playlists) {
    var name = this.playlists[p].name;
    var numOfTracks = this.playlists[p].tracks.length;
   console.log(p + ': ' + name + ' - ' + numOfTracks + ' tracks');
    }
  },
  printTracks: function () {
  for (var t in this.tracks) {
    var name = this.tracks[t].name;
    var artistT = this.tracks[t].artist;
    var albumT = this.tracks[t].album;
    console.log(t + ': ' + name + ' by ' + artistT + ' (' + albumT + ')');
    }
  },
  printPlaylist: function (playlistId) {
    var output = '';
    var name  = this.playlists[playlistId].name;
    var numOfTracks = this.playlists[playlistId].tracks.length;
    var tracks = this.playlists[playlistId].tracks;
    output = playlistId + ': ' + name + ' - ' + numOfTracks + ' tracks';
    console.log(output);

    for (var i = 0; i < tracks.length; i++) {
      var t = this.tracks[tracks[i]];
      var nameT = this.tracks[tracks[i]].name;
      var artistT = this.tracks[tracks[i]].artist;
      var albumT = this.tracks[tracks[i]].album;
      console.log(t.id + ': ' + nameT + ' by ' + artistT + ' (' + albumT + ')');
    }
  },
addTrackToPlaylist : function (trackId, playlistId) {
   var track = this.tracks[trackId];
   var playlist = this.playlists[playlistId];
   if (track && playlist) {
     var trackArr = this.playlists[playlistId].tracks;
     trackArr.push(trackId);
     console.log(trackArr);
   } else {
     console.log('Use existing values');
   }
 },
 uid : function() {
   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
 },

 addTrack : function (name, artist, album) {
   var trackLib = this.tracks;
   var uniqueId = this.uid().replace(/[‘“]+/g, '');
   trackLib[uniqueId] = {
     id: uniqueId,
     name: name,
     artist: artist,
     album: album
   };
   console.log(trackLib);
 },
 addPlaylist : function (name) {
   var playlistLib = this.playlists;
   var uniqueId = this.uid().replace(/[‘“]+/g, '');
   playlistLib[uniqueId] = {
     id: uniqueId,
     name: name,
     tracks: []
   };
   console.log(playlistLib);
 },
 printSearchResults : function(query) {
   var results = [];
   var trackLib = this.tracks;
   var que = query.toLowerCase();
   for (var t in trackLib) {
     for (var q in trackLib[t]) {
       results = trackLib[t][q].toLowerCase();
       var search = results.search(que);
       if (search === 0) {
         console.log(trackLib[t]);
       }
     }
   }
 }
};

