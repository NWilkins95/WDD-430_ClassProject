export class Document {
    public id: string;
    public title: string;
    public description: string;
    public url: string;
    public children: Document[];
    
    constructor(id: string, title: string, description: string, url: string, children: Document[] = []) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
        this.children = children;
    }
}