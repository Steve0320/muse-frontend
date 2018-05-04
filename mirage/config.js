export default function() {

  this.namespace = '/api/v1';

  // Mock shows API
  this.get('/shows', function () {
    return {
      "data": [{
        "type": "shows",
        "id": "1",
        "attributes": {
          "show-title": "Daredevil",
          "cover-url": "http://cdn.collider.com/wp-content/uploads/2015/02/daredevil-tv-series-poster-matt-murdock.jpg",
          "created-at": "0001-01-01T00:00:00Z",
          "updated-at": "0001-01-01T00:00:00Z"
        }
      }, {
        "type": "shows",
        "id": "2",
        "attributes": {
          "show-title": "Stranger Things",
          "cover-url": "https://images-na.ssl-images-amazon.com/images/I/71vJ3kPE67L._SY550_.jpg",
          "created-at": "0001-01-01T00:00:00Z",
          "updated-at": "0001-01-01T00:00:00Z"
        }
      }, {
        "type": "shows",
        "id": "8",
        "attributes": {
          "show-title": "House of Cards",
          "cover-url": "https://www.designcontest.com/blog/wp-content/uploads/2015/08/House-of-Cards-TV-Show-Poster-2.jpeg",
          "created-at": "2018-05-02T10:50:46.020925041-07:00",
          "updated-at": "2018-05-02T10:53:50.012777614-07:00"
        }
      }, {
        "type": "shows",
        "id": "92",
        "attributes": {
          "show-title": "Sherlock",
          "cover-url": "https://www.movieposter.com/posters/archive/main/157/MPW-78722",
          "created-at": "2018-05-02T10:49:06.767275777-07:00",
          "updated-at": "2018-05-02T10:49:06.767275777-07:00"
        }
      }, {
        "type": "shows",
        "id": "93",
        "attributes": {
          "show-title": "Scorpion",
          "cover-url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mqshktYLYbgyG0EGO8Wl2xHnifcPCeT0FlpDGmdLnY_KEWxdGQ",
          "created-at": "2018-05-02T10:49:06.767275777-07:00",
          "updated-at": "2018-05-02T10:49:06.767275777-07:00"
        }
      }, {
        "type": "shows",
        "id": "94",
        "attributes": {
          "show-title": "The Tunnel",
          "cover-url": "https://i0.wp.com/gofatherhood.com/wp-content/uploads/2016/09/the-tunnel-tv-series-2013-2.jpg?resize=300%2C421&ssl=1",
          "created-at": "2018-05-02T10:49:06.767275777-07:00",
          "updated-at": "2018-05-02T10:49:06.767275777-07:00"
        }
      }, {
        "type": "shows",
        "id": "95",
        "attributes": {
          "show-title": "The Art of More",
          "cover-url": "https://i.pinimg.com/736x/f2/26/58/f226585e035a061b183d7a5ac9ef959a--free-tv-show-watch-free-movies.jpg",
          "created-at": "2018-05-02T10:49:06.767275777-07:00",
          "updated-at": "2018-05-02T10:49:06.767275777-07:00"
        }
      }, {
        "type": "shows",
        "id": "96",
        "attributes": {
          "show-title": "Supernatural",
          "cover-url": "https://ae01.alicdn.com/kf/HTB1y44OKFXXXXbeXpXXq6xXFXXX0/Supernatural-TV-Series-Silk-Canvas-Wall-Posters-HD-Large-Modern-Home-Living-Room-Decor-Movie-Comic.jpg_640x640.jpg",
          "created-at": "2018-05-02T10:49:06.767275777-07:00",
          "updated-at": "2018-05-02T10:49:06.767275777-07:00"
        }
      }, {
        "type": "shows",
        "id": "97",
        "attributes": {
          "show-title": "Versailles",
          "cover-url": "https://image.tmdb.org/t/p/original/w4iL7iB94FE6Qu9QqhkrqKsvaLr.jpg",
          "created-at": "2018-05-02T10:49:06.767275777-07:00",
          "updated-at": "2018-05-02T10:49:06.767275777-07:00"
        }
      }, {
        "type": "shows",
        "id": "98",
        "attributes": {
          "show-title": "Friends",
          "cover-url": "https://media-s3-us-east-1.ceros.com/anders-newman/images/2017/03/30/9ce8db16ccec3739b306273b49bd457a/friends-at-2x-full.jpg",
          "created-at": "2018-05-02T10:49:06.767275777-07:00",
          "updated-at": "2018-05-02T10:49:06.767275777-07:00"
        }
      }, {
        "type": "shows",
        "id": "99",
        "attributes": {
          "show-title": "9-1-1",
          "cover-url": "https://ewedit.files.wordpress.com/2017/11/911_s1_onesheet_angela_f5_lores.jpg",
          "created-at": "2018-05-02T10:49:06.767275777-07:00",
          "updated-at": "2018-05-02T10:49:06.767275777-07:00"
        }
      }, {
        "type": "shows",
        "id": "100",
        "attributes": {
          "show-title": "Containment",
          "cover-url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpSTZ8LoSPT6HlbCStLrKTOp0KlrBvzK8KDTO8xQwZB4sNylKs",
          "created-at": "2018-05-02T10:49:06.767275777-07:00",
          "updated-at": "2018-05-02T10:49:06.767275777-07:00"
        }
      }, {
        "type": "shows",
        "id": "101",
        "attributes": {
          "show-title": "Riverdale",
          "cover-url": "http://archiecomics.com/wp-content/uploads/2016/12/RiverdalePoster.png",
          "created-at": "2018-05-02T10:49:06.767275777-07:00",
          "updated-at": "2018-05-02T10:49:06.767275777-07:00"
        }
      }, {
        "type": "shows",
        "id": "102",
        "attributes": {
          "show-title": "The Flash",
          "cover-url": "https://chickflickingreviews.files.wordpress.com/2015/03/the-flash.jpg",
          "created-at": "2018-05-02T10:49:06.767275777-07:00",
          "updated-at": "2018-05-02T10:49:06.767275777-07:00"
        }
      }, {
        "type": "shows",
        "id": "103",
        "attributes": {
          "show-title": "Arrow",
          "cover-url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8DhX5OlQvYO3ac4Z0iJlqaFhVxSNUKLxHPP5RIM3A_vFyMIPNQ",
          "created-at": "2018-05-02T10:49:06.767275777-07:00",
          "updated-at": "2018-05-02T10:49:06.767275777-07:00"
        }
      }, {
        "type": "shows",
        "id": "104",
        "attributes": {
          "show-title": "Doctor Who",
          "cover-url": "https://images-na.ssl-images-amazon.com/images/I/51Mj-6P4BsL.jpg",
          "created-at": "2018-05-02T10:49:06.767275777-07:00",
          "updated-at": "2018-05-02T10:49:06.767275777-07:00"
        }
      }, {
        "type": "shows",
        "id": "105",
        "attributes": {
          "show-title": "Supergirl",
          "cover-url": "https://tvseriesfinale.com/wp-content/uploads/2016/08/Supergirl-TV-series-on-The-CW-season-two-key-art-canceled-or-renewed-e1472497949337.jpg",
          "created-at": "2018-05-02T10:49:06.767275777-07:00",
          "updated-at": "2018-05-02T10:49:06.767275777-07:00"
        }
      }, {
        "type": "shows",
        "id": "106",
        "attributes": {
          "show-title": "Sherlock",
          "cover-url": "https://www.movieposter.com/posters/archive/main/157/MPW-78722",
          "created-at": "2018-05-02T10:49:06.767275777-07:00",
          "updated-at": "2018-05-02T10:49:06.767275777-07:00"
        }
      }]
    }
  });

}
