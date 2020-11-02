import { Component } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: [],
})
export class SearchComponent {
  artists: any[] = [];
  constructor(private spotifyService: SpotifyService) {}

  search(value: string) {
    this.spotifyService.getArtists(value).subscribe((data) => {
      console.log(data);

      this.artists = data;
    });
  }
}
