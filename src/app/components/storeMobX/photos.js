import { makeAutoObservable } from "mobx";
import { action } from "mobx";

class PhotosStore {
  photos = [
    {id:1, isLike: true, src: "/Cyprus-napa-caves.png", alt: "cyprus", width: 200, height: 48 },
    { id:2,isLike: false, src: "/prague.jpeg", alt: "prague.jpeg", width: 200, height: 48 },
    {id:3, isLike: true, src: "/France-Paris.webp", alt: "Paris.jpg", width: 200, height: 48 },
    {id:4, isLike: true, src: "/Germany-Dresd_Zwinger.jpg", alt: "germany.jpg", width: 200, height: 48 },
    {id:5, isLike: true, src: "/pl-wr.jpg", alt: "pl.jpg", width: 200, height: 48 },
    {id:6, isLike: true, src: "/Torronto-Main.jpg", alt: "torronto.jpj", width: 200, height: 48 },
    {id:7, isLike: true, src: "/usa-new-york.jpg", alt: "usa.jpg", width: 200, height: 48 },
    {id:8, isLike: true, src: "/ukr.jpg", alt: "ukr.jpg", width: 200, height: 48 }

  ]

  constructor() {
    makeAutoObservable(this)
  }

  addPhoto(photo) {
    this.photos.push(photo);
  }
  removePhoto(photo) {
    const index = this.photos.indexOf(photo);
    if (index > -1) {
      this.photos.splice(index, 1);
    }
  }
  toggleLike(id) {
    
    if (!this.photos) {
      return;
    }
    action(() => {
      const photo = this.photos.find(e => e.id === id);
      if (photo) {
        photo.isLike = !photo.isLike;
      }
    })();
  }


}

export default new PhotosStore();

