function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      artist: "Alice In Chains",
      title: "Facelift",
      release_year: 1990,
      formats: {
        1: "CD",
        2: "Digital",
        3: "Vinyl",
      },
    },
  };
  return myMusic;
}
myFunction()[2];
module.exports = myFunction;
