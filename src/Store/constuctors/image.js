export class image {
       constructor(src, author){
        this.src = src || '';
        this.author = author || '';
        this.createdAt = "2015-02-12";
        this.comments = new comments();
       }
}

export class comments {
    constructor(author, comment){
      this.author = author || '';
      this.comment = comment || '';
      this.createdAt = "2015-02-12";
    }
}