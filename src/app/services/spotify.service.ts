import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  market: string;

  constructor(private http: HttpClient) {
    console.info('Spotify service ready');
    this.market = 'ES';
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQA0lCW0J8bPTmfDm5dKHE9BYlB2TAcFvAjUQYVFEbP5A252tDtBDzjP5CfJgEcrnlWRDJH8AwQK61fB5JQ',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data) => data['albums'].items)
    );
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=artist`).pipe(
      map((data) => data['artists'].items)
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=${this.market}`).pipe(
      map((data: any) => data.tracks)
    );
  }
}
