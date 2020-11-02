import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];
  hasError: boolean;
  error: string;

  constructor(private spotifyService: SpotifyService) {
    this.hasError = false;
    this.error = "";
  }

  ngOnInit() {
    this.spotifyService.getNewReleases().subscribe(
      (data: any) => (this.newReleases = data),
      ({ error }) => {
        this.hasError = true;
        this.error = error.error.message;
      }
    );
  }
}
