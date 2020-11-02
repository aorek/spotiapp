import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "noimage",
})
export class NoimagePipe implements PipeTransform {
  transform(images: any[]): any {
    const noImgPath = "assets/img/noimage.png";
    if (!images) return noImgPath;

    if (images.length > 0) return images[0].url;
    else return noImgPath;
  }
}
