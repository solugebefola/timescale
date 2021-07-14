const API_URL = process.env.REACT_APP_API_DOMAIN
const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY

const headers = {
  'Content-Type': 'application/json'
}

const get = url => fetch(`${API_URL}/${url}&api_key=${API_KEY}&language=en-US`, { headers })
    .then(res => res.json())

let response = {}

const api = {
  /**
   * 
   * @returns {Promise<Object>} movie
   * @param {string} movie.adult stuff
   * @param {string} movie.backdrop_path stuff
   * @param {string} movie.genre_ids stuff
   * @param {string} movie.id stuff
   * @param {string} movie.original_language stuff
   * @param {string} movie.original_title stuff
   * @param {string} movie.overview stuff
   * @param {string} movie.popularity stuff
   * @param {string} movie.poster_path stuff
   * @param {string} movie.release_date stuff
   * @param {string} movie.title stuff
   * @param {string} movie.video stuff
   * @param {string} movie.vote_average stuff
   * @param {string} movie.vote_count stuff
   */
  // getRecentMovies: () => get('movie/now_playing?').then(response => response.results)
  getRecentMovies: () => Promise.resolve(response).then(res => res.results)
}

export default api

response = {
  "dates": {
    "maximum": "2021-07-11",
    "minimum": "2021-05-24"
  },
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg",
      "genre_ids": [
        16,
        35,
        12,
        10751
      ],
      "id": 459151,
      "original_language": "en",
      "original_title": "The Boss Baby: Family Business",
      "overview": "The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.",
      "popularity": 5631.985,
      "poster_path": "/5dExO5G2iaaTxYnLIFKLWofDzyI.jpg",
      "release_date": "2021-07-01",
      "title": "The Boss Baby: Family Business",
      "video": false,
      "vote_average": 8,
      "vote_count": 494
    },
    {
      "adult": false,
      "backdrop_path": "/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg",
      "genre_ids": [
        28,
        12,
        53
      ],
      "id": 497698,
      "original_language": "en",
      "original_title": "Black Widow",
      "overview": "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
      "popularity": 4995.336,
      "poster_path": "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
      "release_date": "2021-07-07",
      "title": "Black Widow",
      "video": false,
      "vote_average": 8.2,
      "vote_count": 1836
    },
    {
      "adult": false,
      "backdrop_path": "/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg",
      "genre_ids": [
        16,
        35,
        10751,
        14
      ],
      "id": 508943,
      "original_language": "en",
      "original_title": "Luca",
      "overview": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
      "popularity": 4362.087,
      "poster_path": "/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
      "release_date": "2021-06-17",
      "title": "Luca",
      "video": false,
      "vote_average": 8.1,
      "vote_count": 2582
    },
    {
      "adult": false,
      "backdrop_path": "/wjQXZTlFM3PVEUmKf1sUajjygqT.jpg",
      "genre_ids": [
        878,
        28,
        53
      ],
      "id": 581726,
      "original_language": "en",
      "original_title": "Infinite",
      "overview": "Evan McCauley has skills he never learned and memories of places he has never visited. Self-medicated and on the brink of a mental breakdown, a secret group that call themselves “Infinites” come to his rescue, revealing that his memories are real.",
      "popularity": 4181.318,
      "poster_path": "/niw2AKHz6XmwiRMLWaoyAOAti0G.jpg",
      "release_date": "2021-06-10",
      "title": "Infinite",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 477
    },
    {
      "adult": false,
      "backdrop_path": "/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
      "genre_ids": [
        28,
        12,
        80,
        53
      ],
      "id": 385128,
      "original_language": "en",
      "original_title": "F9",
      "overview": "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
      "popularity": 3258.522,
      "poster_path": "/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
      "release_date": "2021-05-19",
      "title": "F9",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 509
    },
    {
      "adult": false,
      "backdrop_path": "/5HjzYTihkH7EvOWSE7KcsF6pBMM.jpg",
      "genre_ids": [
        10751,
        35,
        12,
        16,
        14
      ],
      "id": 522478,
      "original_language": "en",
      "original_title": "Peter Rabbit 2: The Runaway",
      "overview": "Bea, Thomas, and the rabbits have created a makeshift family, but despite his best efforts, Peter can’t seem to shake his mischievous reputation. Adventuring out of the garden, Peter finds himself in a world where his mischief is appreciated, but when his family risks everything to come looking for him, Peter must figure out what kind of bunny he wants to be.",
      "popularity": 3037.59,
      "poster_path": "/cycDz68DtTjJrDJ1fV8EBq2Xdpb.jpg",
      "release_date": "2021-03-25",
      "title": "Peter Rabbit 2: The Runaway",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 138
    },
    {
      "adult": false,
      "backdrop_path": "/70AV2Xx5FQYj20labp0EGdbjI6E.jpg",
      "genre_ids": [
        80,
        28,
        53
      ],
      "id": 637649,
      "original_language": "en",
      "original_title": "Wrath of Man",
      "overview": "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
      "popularity": 2094.627,
      "poster_path": "/M7SUK85sKjaStg4TKhlAVyGlz3.jpg",
      "release_date": "2021-04-22",
      "title": "Wrath of Man",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 1311
    },
    {
      "adult": false,
      "backdrop_path": "/z2UtGA1WggESspi6KOXeo66lvLx.jpg",
      "genre_ids": [
        878,
        53,
        27
      ],
      "id": 520763,
      "original_language": "en",
      "original_title": "A Quiet Place Part II",
      "overview": "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.",
      "popularity": 2073.784,
      "poster_path": "/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg",
      "release_date": "2021-05-21",
      "title": "A Quiet Place Part II",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 1702
    },
    {
      "adult": false,
      "backdrop_path": "/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
      "genre_ids": [
        28,
        35
      ],
      "id": 337404,
      "original_language": "en",
      "original_title": "Cruella",
      "overview": "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
      "popularity": 1996.876,
      "poster_path": "/rTh4K5uw9HypmpGslcKd4QfHl93.jpg",
      "release_date": "2021-05-26",
      "title": "Cruella",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 3975
    },
    {
      "adult": false,
      "backdrop_path": "/qi6Edc1OPcyENecGtz8TF0DUr9e.jpg",
      "genre_ids": [
        27,
        9648,
        53
      ],
      "id": 423108,
      "original_language": "en",
      "original_title": "The Conjuring: The Devil Made Me Do It",
      "overview": "Paranormal investigators Ed and Lorraine Warren encounter what would become one of the most sensational cases from their files. The fight for the soul of a young boy takes them beyond anything they'd ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense.",
      "popularity": 1539.137,
      "poster_path": "/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg",
      "release_date": "2021-05-25",
      "title": "The Conjuring: The Devil Made Me Do It",
      "video": false,
      "vote_average": 8,
      "vote_count": 3000
    },
    {
      "adult": false,
      "backdrop_path": "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
      "genre_ids": [
        28,
        14,
        12
      ],
      "id": 460465,
      "original_language": "en",
      "original_title": "Mortal Kombat",
      "overview": "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
      "popularity": 1222.703,
      "poster_path": "/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg",
      "release_date": "2021-04-07",
      "title": "Mortal Kombat",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 3270
    },
    {
      "adult": false,
      "backdrop_path": "/kkXMDMRGtuO9cewtFjWNREC74nf.jpg",
      "genre_ids": [
        28,
        35,
        36,
        16,
        14
      ],
      "id": 739542,
      "original_language": "en",
      "original_title": "America: The Motion Picture",
      "overview": "A chainsaw-wielding George Washington teams with beer-loving bro Sam Adams to take down the Brits in a tongue-in-cheek riff on the American Revolution.",
      "popularity": 1161.096,
      "poster_path": "/j0HnLa6FtGcslbqClKOIyvCXfpe.jpg",
      "release_date": "2021-06-30",
      "title": "America: The Motion Picture",
      "video": false,
      "vote_average": 5.7,
      "vote_count": 60
    },
    {
      "adult": false,
      "backdrop_path": "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
      "genre_ids": [
        14,
        12,
        28
      ],
      "id": 399566,
      "original_language": "en",
      "original_title": "Godzilla vs. Kong",
      "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      "popularity": 1104.646,
      "poster_path": "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
      "release_date": "2021-03-24",
      "title": "Godzilla vs. Kong",
      "video": false,
      "vote_average": 8,
      "vote_count": 6334
    },
    {
      "adult": false,
      "backdrop_path": "/g15PR8eQV9DehSWlagvdnJZqoRq.jpg",
      "genre_ids": [
        9648,
        53,
        27
      ],
      "id": 602734,
      "original_language": "en",
      "original_title": "Spiral: From the Book of Saw",
      "overview": "Working in the shadow of an esteemed police veteran, brash Detective Ezekiel “Zeke” Banks and his rookie partner take charge of a grisly investigation into murders that are eerily reminiscent of the city’s gruesome past.  Unwittingly entrapped in a deepening mystery, Zeke finds himself at the center of the killer’s morbid game.",
      "popularity": 1068.681,
      "poster_path": "/lcyKve7nXRFgRyms9M1bndNkKOx.jpg",
      "release_date": "2021-05-12",
      "title": "Spiral: From the Book of Saw",
      "video": false,
      "vote_average": 6.4,
      "vote_count": 532
    },
    {
      "adult": false,
      "backdrop_path": "/vqEjXzWdzPbV2DZ7bk29weDFiDl.jpg",
      "genre_ids": [
        16,
        12,
        10751,
        37
      ],
      "id": 637693,
      "original_language": "en",
      "original_title": "Spirit Untamed",
      "overview": "Lucky Prescott's life is changed forever when she moves from her home in the city to a small frontier town and befriends a wild mustang named Spirit.",
      "popularity": 1044.346,
      "poster_path": "/5cbGVDmRMYVzkq5cItZ7cYlDdDR.jpg",
      "release_date": "2021-05-20",
      "title": "Spirit Untamed",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 136
    },
    {
      "adult": false,
      "backdrop_path": "/tehpKMsls621GT9WUQie2Ft6LmP.jpg",
      "genre_ids": [
        27,
        28,
        53
      ],
      "id": 602223,
      "original_language": "en",
      "original_title": "The Forever Purge",
      "overview": "All the rules are broken as a sect of lawless marauders decides that the annual Purge does not stop at daybreak and instead should never end.",
      "popularity": 1039.677,
      "poster_path": "/uHA5COgDzcxjpYSHHulrKVl6ByL.jpg",
      "release_date": "2021-06-30",
      "title": "The Forever Purge",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 45
    },
    {
      "adult": false,
      "backdrop_path": "/A0xW7GgeFQoQmPOn7HcHkBQ5nlb.jpg",
      "genre_ids": [
        53,
        28
      ],
      "id": 817451,
      "original_language": "en",
      "original_title": "Endangered Species",
      "overview": "Jack Halsey takes his wife, their adult kids, and a friend for a dream vacation in Kenya. But as they venture off alone into a wilderness park, their safari van is flipped over by an angry rhino, leaving them injured and desperate. Then, as two of them go in search of rescue, a bloody, vicious encounter with a leopard and a clan of hyenas incites a desperate fight for survival.",
      "popularity": 919.566,
      "poster_path": "/ccsSqbpEqr2KK9eMvoeF8ERFCd5.jpg",
      "release_date": "2021-05-27",
      "title": "Endangered Species",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 63
    },
    {
      "adult": false,
      "backdrop_path": "/jw6ASGRT2gi8EjCImpGtbiJ9NQ9.jpg",
      "genre_ids": [
        27
      ],
      "id": 632357,
      "original_language": "en",
      "original_title": "The Unholy",
      "overview": "Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister.",
      "popularity": 875.541,
      "poster_path": "/bShgiEQoPnWdw4LBrYT5u18JF34.jpg",
      "release_date": "2021-03-31",
      "title": "The Unholy",
      "video": false,
      "vote_average": 7,
      "vote_count": 1153
    },
    {
      "adult": false,
      "backdrop_path": "/5Zv5KmgZzdIvXz2KC3n0MyecSNL.jpg",
      "genre_ids": [
        28,
        53,
        80
      ],
      "id": 634528,
      "original_language": "en",
      "original_title": "The Marksman",
      "overview": "Jim Hanson’s quiet life is suddenly disturbed by two people crossing the US/Mexico border – a woman and her young son – desperate to flee a Mexican cartel. After a shootout leaves the mother dead, Jim becomes the boy’s reluctant defender. He embraces his role as Miguel’s protector and will stop at nothing to get him to safety, as they go on the run from the relentless assassins.\r Stars...Liam Neeson",
      "popularity": 858.515,
      "poster_path": "/6vcDalR50RWa309vBH1NLmG2rjQ.jpg",
      "release_date": "2021-01-15",
      "title": "The Marksman",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 643
    },
    {
      "adult": false,
      "backdrop_path": "/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg",
      "genre_ids": [
        16,
        28,
        12,
        14
      ],
      "id": 635302,
      "original_language": "ja",
      "original_title": "劇場版「鬼滅の刃」無限列車編",
      "overview": "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
      "popularity": 840.547,
      "poster_path": "/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
      "release_date": "2020-10-16",
      "title": "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 1318
    }
  ],
  "total_pages": 57,
  "total_results": 1126
}