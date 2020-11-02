import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styles: [],
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Observable<any>;
  topTracks: Observable<any>;

  constructor(
    private router: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.router.params.subscribe((params) => (this.id = params["id"]));
  }
  ngOnInit(): void {
    this.getArtist(this.id);
    this.getTopTracks(this.id);
  }

  getArtist(id: string) {
    this.artist = this.spotifyService.getArtist(id);
  }

  getTopTracks(id: string) {
    this.topTracks = this.spotifyService.getTopTracks(this.id);
  }
}
